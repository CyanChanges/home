<script setup lang="ts">
// const route = useRoute()
</script>

<template>
  <ContentList path="/blog" v-slot="{ list }">
    <div v-for="article in list.filter(v=>!v.hidden)" :key="article._path">
      <router-link :to="article?._path?.toString() ?? '/blog'">
        <Card v-ripple>
          <template #title>{{ article.title }}</template>
          <template #subtitle>{{ article.description }}</template>
        </Card>
      </router-link>
    </div>
  </ContentList>
</template>
