import Aura from '@primevue/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    css: ["~/assets/styles.scss"],
    modules: [
      '@primevue/nuxt-module',
      '@nuxtjs/i18n',
      '@nuxt/fonts',
      '@vite-pwa/nuxt',
      '@nuxt/content',
      "nuxt-lodash",
      '@nuxtjs/seo',
      'nuxt-viewport',
      '@nuxtjs/sitemap',
      '@nuxt/image',
      '@nuxthub/core',
    ],
    primevue: {
        options: {
            theme: {
                preset: Aura
            }
        }
    },
    site: {
        url: 'https://www.cyans.me',
        name: "Cyan Home"
    },
})
