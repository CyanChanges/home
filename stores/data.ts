import { ref } from "vue";
import { defineStore } from 'pinia'
import trimStart from 'lodash.trimstart'
import Random from 'inaba'
import { useI18n } from "#imports";

export const pickWeights = [
    0.01,
    0.60,
    0.20,
    0.08,
    0.01,
    0.10
]

export const things = [
    "Arknights",
    "Genshin Impact",
    "Zenless Zone Zero",
    "Honkai Impact 3rd",
    "Honkai : Star Rail",
    "Phigros",
    "Rizline",
    "Paradigm : Reboot",
    "Android 15 - Vanilla Ice Cream",
    "the Honkai world",
    "Hysteria.Network",
]

export const greetings: [string, string[]][] = [
    ["おはいぃ", ["ドクター"]],
    ["Hello", [
        ...things,
        'World',
        "the ONE in the shadow",
    ]],
    ["translation.hello", things],
    ["Do you know, ", [
        "Arch Linux",
        "MSVC",
        "Clang",
        "GCC",
        "LLVM",
        "GitHub",
        "GitLab",
        "C++",
        "C#",
        "Rust",
        "Java",
        "Kotlin",
        "JavaScript",
        "TypeScript",
        "Google",
        "Chromium",
        "JavaScriptCore",
        "Bun.sh",
        "Node.js",
        "V8",
        "Kubernetes",
        "Golang",
        "GPT",
        "Transformer",
        "GAN",
        "Fine tuning",
        "AI",
        "Neuro-sama",
        "Filian",
        "camman18",
        "THE GREAT FIREWALL OF CHINA"
    ]],
    ["Doctor", ['Who?']],
    ["Try", [
        "Koishi.js",
    ]]
]

export const useStated = defineStore('data', () => {
    const { t } = useI18n({
        messages: {
            en: {
                hello: "Hello"
            },
            'ja-JP': {
                hello: "こんにちは、"
            },
            'zh-Hans': {
                hello: "你好"
            },
            'zh-Hant': {
                hello: "你好"
            }
        }
    })

    const greetPath = ref<[number, number]>(pickOne())
    const greeting = computed(() => {
        const greetData = greetings[greetPath.value[0]]
        let greet = greetData[0]
        let object = greetData[1][greetPath.value[1]];
        if (greet.startsWith("translation."))
            greet = t(trimStart(greet, "translation."))
        if (object.startsWith("translation."))
            object = t(trimStart(object, "translation."))
        return `${greet} ${object}`
    })


    function pickOne(): [number, number] {
        const decision = Random.weightedPick(Object.fromEntries(pickWeights.entries()))

        return [+decision, Random.int(greetings[+decision][1].length)]
    }

    function pickNew(): [number, number] {
        const decisions = pickOne()
        greetPath.value = decisions
        return decisions
    }

    console.log("Greeting: ", greeting.value)

    return {
        greeting,
        greetPath,
        pickNew
    }
})
