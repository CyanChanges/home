<script setup lang="ts">

</script>

<template>
  <ContentDoc v-slot="{ doc }">
    <article>
      <Card>
        <template #title>{{ doc.title }}</template>
        <template #subtitle>Update: {{ doc.updateTime }}</template>/
        <template #content>
          <ContentRenderer :value="doc" />
        </template>
      </Card>
    </article>
  </ContentDoc>
</template>

<style scoped>

</style>
