<script setup lang="ts">
useSeoMeta({
  robots: 'index, follow'
})

const { t } = useI18n()

const state = useStated()

const { data } = await useAsyncData(async () => state.greeting)
const greeting = toRaw(data.value)
</script>

<template>
  <Card>
    <template #content>
      {{ greeting }}
      <divider/>
      {{ t("koishi-registry-notice") }}
      <NuxtLink to="/blog/koishi-registry-in-2024">{{ t("koishi-registry-link")}}</NuxtLink>
    </template>
  </Card>
</template>

<i18n lang="yaml">
en:
  hello: Hello
  koishi-registry-notice: Our Koishi Registry
  koishi-registry-link: Open Post
ja:
  hello: こんにちは、
zhHans:
  hello: 你好
  koishi-registry-notice: "Koishi Registry 的独立实现:"
  koishi-registry-link: 打开文章
zh-Hant:
  hello: 你好
  koishi-registry-notice: "Koishi Registry 的獨立實現:"
  koishi-registry-link: Blog Post
</i18n>
