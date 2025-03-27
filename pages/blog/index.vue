<script setup lang="ts">
const route = useRoute();

const pg = +(route.query.page ?? 0) - 1;

const { data: pages } = await useAsyncData(route.path, async () => {
  const data = await queryCollection("content")
    .skip(pg * 10)
    .where("path", "LIKE", "/blog%")
    .select("meta", "title", "description", "path")
    .limit(10)
    .all();
  // data.sort()
  return data.toSorted(
    (x, y) =>
      (+new Date(<string>y.meta.updateDate ?? 0)) -
      (+new Date(<string>x.meta.updateDate ?? 0)),
  );
});

useSeoMeta({
  robots: "index, follow",
});
</script>

<template>
  <div class="flex flex-col gap-2">
    <template v-for="page in pages">
      <NuxtLink v-if="!page.meta.hidden" class="blog-link" prefetch :to="page.path">
        <Card class="blog-card" v-ripple>
          <template #title>
            {{ page.title }}
          </template>
          <template #subtitle>
            {{ page.description }}
          </template>
        </Card>
      </NuxtLink>
    </template>
  </div>
</template>

<style scoped>
.blog-link {
  text-decoration: none;
}
</style>
