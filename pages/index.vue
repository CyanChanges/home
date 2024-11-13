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
      {{ t("new-project-notice") }}
      <NuxtLink href="/blog/new-project-in-2024">{{ t("new-project-title")}}</NuxtLink>
    </template>
  </Card>
</template>

<i18n lang="yaml">
en:
  hello: Hello
  new-project-notice: Checkout the preview of my new project
  new-project-title: Blog Post
ja:
  hello: こんにちは、
zhHans:
  hello: 你好
  new-project-notice: "新项目预告:"
  new-project-title: Blog Post
zh-Hant:
  hello: 你好
  new-project-notice: "新項目預告:"
  new-project-title: Blog Post
</i18n>
