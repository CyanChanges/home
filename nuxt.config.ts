import { hyphenate } from 'cosmokit'
import Aura from '@primevue/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    $production: {
        routeRules: {
            "*": {
                prerender: true
            }
        }
    },
    css: ["~/assets/styles.scss"],
    modules: [
        '@primevue/nuxt-module',
        '@nuxtjs/i18n',
        '@nuxtjs/google-fonts',
        '@vite-pwa/nuxt',
        '@nuxt/content',
        '@nuxtjs/seo',
        'nuxt-viewport',
        '@nuxtjs/sitemap',
        '@nuxt/image',
        '@nuxtjs/color-mode',
        '@unocss/nuxt',
        // 'nuxt-booster'
        '@pinia/nuxt',
        'pinia-plugin-persistedstate',
        '@formkit/auto-animate/nuxt'
    ],
    i18n: {
        vueI18n: "./i18n.config.ts"
    },
    pinia: {
        storesDirs: ['./stores/**'],
    },
    googleFonts: {
        preload: true,
        base64: true,
        families: {
            "Noto+Sans": {
                wght: '200..900'
            },
            "Noto+Sans+SC": {
                wght: '200..900'
            },
        }
    },
    nitro: {
        preset: hyphenate(process.env.SERVER_PRESET ?? 'netlify_edge'),
    },
    primevue: {
        options: {
            theme: {
                preset: Aura,

            },
            ripple: true,
        },
    },
    site: {
        url: 'https://www.cyans.me',
        name: "Cyan Home",
        description: "Cyan Home",
        defaultLocale: "en",
    },
    sitemap: {
        sitemaps: false
    },
    unocss: {
        nuxtLayers: true,
    },
})
