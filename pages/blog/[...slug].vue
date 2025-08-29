<script setup lang="ts">
const { path } = useRoute();

const event = useRequestEvent();
const page = await queryCollection("content")
  .path(path)
  .first()
  .catch(() => {
    if (event) setResponseStatus(event, 404);
  });

useHead({
  meta: [
    {
      name: "fediverse:creator",
      content: "@CyanChanges@mastodon.social",
    },
  ],
});

function goBack() {
  history.back();
}
</script>

<template>
  <div v-if="page">
    <Title>{{ page.title }}</Title>
    <article>
      <Card class="content-card">
        <template #title>{{ page.title }}</template>
        <template #subtitle>{{ page.description }}</template>
        <template #content>
          <span class="content-doc">
            <ContentRenderer v-if="page" :value="page" />
          </span>
        </template>
      </Card>
    </article>
  </div>
  <div v-else>
    <Title>{{ $t("titles.not-found") }}</Title>
    <Message class="message" mt-2 severity="warn">{{
      $t("messages.content-not-found")
    }}</Message>
    <Card class="card" select-none>
      <template #subtitle>
        <NuxtLink href="/">
          <Chip v-ripple :label="$t('actions.go-home')" /> </NuxtLink
        >&nbsp;
        <Chip v-ripple :label="$t('actions.go-back')" @click="goBack()" />
        <divider />
      </template>
      <template #content>
        {{ $t("messages.content-page.not-found") }}
      </template>
    </Card>
  </div>
</template>

<style scoped>
.message {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.card {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>
