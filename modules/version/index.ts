import { addServerHandler, addImports, addTemplate, createResolver, defineNuxtModule } from 'nuxt/kit'
import z from 'schemastery'
import { join } from 'node:path'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import serialize from 'serialize-javascript'

const validator = z.object({
    major: z.string().default("a"),
    minor: z.number().min(0).default(0),
})

export interface Config {
    major: string,
    minor: number
}

export default defineNuxtModule<Config>({
    meta: {
        name: 'version',
        version: '1.0.0',
        configKey: "version"
    },
    async setup(options_, nuxt) {
        const options = validator(options_)

        const { resolve } = createResolver(import.meta.url)

        addServerHandler({
            route: "/api/version",
            handler: resolve("runtime/api")
        })

        const gitRoot = ".git"
        const headFile = await readFile(join(gitRoot, "HEAD"), { encoding: "ascii" })
            .then(content=>content.trim())
        let commit: string;
        if (headFile.startsWith("ref:")) {
            const [_, ref] = headFile.split(" ", 2)
            commit = await readFile(join(gitRoot, ref), { encoding: "ascii" }).then(content => content.trim())
        } else {
            commit = headFile
        }

        addImports({
            name: 'useVersion',
            as: 'useVersion',
            from: resolve('runtime/imports')
        })

        addTemplate({
            filename: "build-version.ts",
            getContents: () => ('export default' + serialize({
                ...options,
                commit
            }))
        })


        nuxt.hook("nitro:build:public-assets", async nitro => {
            const outputDir = join(nitro.options.output.dir, 'public', 'version');
            const outputPath = join(outputDir, 'version.json');
            await mkdir(outputDir, { recursive: true })
            await writeFile(outputPath, JSON.stringify({
                ...options,
                commit
            }), {
                encoding: 'utf-8'
            });
        })
    }
})
