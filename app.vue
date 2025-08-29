<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Cyan Home` : 'Cyan Home';
  }
})
</script>

<template>
  <AppHeader/>
  <main>
    <NuxtPage/>
  </main>
  <AppFooter/>
  <Toast />
</template>

<style scoped>
.menubar {
  margin-bottom: 0.5rem;
}
</style>
