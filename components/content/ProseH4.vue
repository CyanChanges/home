<template>
  <h4 :id="props.id">
    <slot />
    <a class="header-anchor" :href="`#${props.id}`" :aria-label="`Permalink to &quote;${text}&quote;`">
      &ZeroWidthSpace;
    </a>
  </h4>
</template>

<script setup lang="ts">

const props = defineProps<{ id?: string }>();

const text = useSlotText('default', {});

</script>
