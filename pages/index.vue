<script setup lang="ts">
import Random from 'inaba'

const { t } = useI18n()

// const device = useDevice()

const weights = [
  0.01,
  0.60,
  0.20,
  0.08,
  0.01,
  0.10
]

const things = [
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

const greetings: [string, string[]][] = [
  ["おはいぃ", ["ドクター"]],
  ["Hello", [
    ...things,
    'World',
    "the ONE in the shadow",
  ]],
  [t("hello"), things],
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

function getGreeting() {
  let pick = Random.weightedPick(Object.fromEntries(weights.entries()));
  let greeting = greetings[+pick]
  return {
    greeting: greeting[0] ?? "Hello",
    name: Random.pick(greeting[1]) ?? "World"
  }
}

const { data } = await useAsyncData(async () => getGreeting())
const { greeting, name } = toRaw(data.value) as { greeting: string, name: string }
</script>

<template>
  <Card>
    <template #content>
      {{ greeting }} {{ name }}
    </template>
  </Card>
</template>

<i18n lang="yaml">
en:
  hello: Hello
ja:
  hello: こんにちは、
zhHans:
  hello: 你好
zh-Hant:
  hello: 你好
</i18n>
