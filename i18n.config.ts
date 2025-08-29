export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    fallbackLocale: {
        'zh-TW': ['zh-Hant'],
        'zh-CN': ['zh-Hans'],
        'zh-Hant': ['zh-Hant', 'zh-Hans'],
        'en-US': ['en-US', 'en'],
        'ja-JP': ['ja-JP', 'en'],
        default: ['en']
    }
}))
