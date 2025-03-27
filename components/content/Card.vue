<script setup lang="ts">
import Card from 'primevue/card'
</script>

<template>
<Card class="card">
  <template #content>
    <slot />
  </template>
</Card>
</template>

<style scoped>
.card {
  --p-card-background: var(--p-surface-200);
  --p-card-text: var(--p-neutral-900);
}
@media (prefers-color-scheme: dark) {
  .card {
    --p-card-background: var(--p-surface-800);
    --p-card-text: var(--p-neutral-100);
  }
}
</style>
