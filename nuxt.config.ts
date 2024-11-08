import { hyphenate } from 'cosmokit'
import Aura from '@primevue/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    vite: {
        build: {
            minify: true,
            terserOptions: {
                ecma: 2020,
                compress: {
                    arguments: true,
                    keep_fargs: false,
                    lhs_constants: true,
                    passes: 3
                }
            }
        },
        $client: {
            build: {
                rollupOptions: {
                    output: {
                        manualChunks: {
                            "vue-ext": ["vue-router", "vue-i18n", "pinia"],
                            "primevue": [
                                "primevue/tooltip",
                                "primevue/card",
                                "primevue/popover",
                                "primevue/button",
                                "primevue/config",
                            ],
                            "lodash-x": ["lodash.trimstart", "lodash.trimend"],
                            "vue-x": ["vue", "@vue/shared"],
                            "vue-rt": ["@vue/runtime-core", "@vue/runtime-dom"]
                        }
                    }
                }
            }
        }
    },
    $production: {
        vite: {
            build: {
                terserOptions: {
                    compress: {
                        drop_console: true
                    }
                }
            }
        },
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
      '@nuxtjs/device',
    ],
    i18n: {
        langDir: "locales",
        vueI18n: "./i18n.config.ts",
        locales: [
            { code: 'en', language: 'en', file: "en.yaml" },
            { code: 'zh-CN', file: "zh-Hant.yaml" },
            { code: 'zh-TW', file: "zh-Hant.yaml" },
            { code: 'zh-Hans', language: 'zh-Hans-CN', file: "zh-Hans-CN.yaml" },
            { code: 'zh-Hant', language: 'zh-Hant', file: "zh-Hant.yaml" },
            { code: 'ja', language: 'ja-JP', file: "ja-JP.yaml" },
        ],
        defaultLocale: 'en-US',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root' // recommended
        },
        // lazy: true,
        strategy: "no_prefix"
    },
    pinia: {
        storesDirs: ['./stores/**'],
    },
    googleFonts: {
        preload: true,
        base64: true,
        families: {
            "Noto+Sans": {
                wght: '400..600'
            },
            "Noto+Sans+SC": {
                wght: '400..600'
            },
            "Noto+Sans+TC": {
                wght: '400..600'
            },
        }
    },
    nitro: {
        preset: hyphenate(process.env.SERVER_PRESET ?? 'netlify_edge'),
    },
    primevue: {
        autoImport: true,
        directives: {
            include: ['Ripple', 'Tooltip']
        },
        options: {
            ripple: true,
            theme: {
                preset: Aura,

            },
        },
    },
    site: {
        url: 'https://www.cyans.me',
        name: "Cyan Home",
        description: "Cyan Home",
        redirectToCanonicalSiteUrl: true
    },
    sitemap: {
        sitemaps: false
    },
    unocss: {
        nuxtLayers: true,
    },
})
