<template>
  <h3 :id="props.id">
    <slot />
    <a class="header-anchor" :href="`#${props.id}`" :aria-label="`Permalink to &quote;${text}&quote;`">
      &ZeroWidthSpace;
    </a>
  </h3>
</template>

<script setup lang="ts">

const props = defineProps<{ id?: string }>();

const text = useSlotText('default', {});

</script>
