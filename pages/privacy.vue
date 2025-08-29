<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  robots: 'index, follow'
})

</script>

<template>
  <ContentDoc v-slot="{ doc }">
    <Title>{{ doc.title }}</Title>
    <article>
      <Card id="privacy-policy">
        <template #title>{{ doc.title }}</template>
        <template #subtitle>{{ t("update") }}: {{ doc.updateTime }}</template>

        <template #content>
          <ContentRenderer :value="doc"/>
        </template>
      </Card>
    </article>
  </ContentDoc>
</template>

<style scoped>

</style>

<i18n lang="yaml">
en:
  update: Update
zh:
  update: 更新
ja:
  update: 最終更新日
</i18n>
