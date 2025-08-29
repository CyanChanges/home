import { mergeConfigs } from '@unocss/core'
import config from './.nuxt/uno.config.mjs'
import { presetAttributify, presetUno } from "unocss";

export default mergeConfigs([config, {
    // your overrides
    presets: [
        presetUno(),
        presetAttributify(),
    ]
}])
