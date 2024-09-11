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
        'nuxt-gtag',
        // 'nuxt-booster'
    ],
    googleFonts: {
        preload: true,
        base64: true,
        families: {
            "Noto+Sans": {
                wght: '300...1000'
            },
            "Noto+Sans+SC": {
                wght: '300...1000'
            },
        }
    },
    gtag: {
        id: "G-RM7DGVGTFJ"
    },
    nitro: {
        preset: hyphenate(process.env.SERVER_PRESET ?? 'netlify_edge'),
    },
    primevue: {
        options: {
            theme: {
                preset: Aura
            },
            ripple: true,
        },
    },
    site: {
        url: 'https://www.cyans.me',
        name: "Cyan Home"
    },
    unocss: {
        nuxtLayers: true,
    },
})
