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
      <h3>LSPosed Internal Test</h3>
      <p>极其先进</p>
      <p>遥遥领先</p>
      <p>加密混淆</p>
      <p>完全闭源</p>
      <p>禁止分享</p>
      <p>泄漏溯源</p>
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
