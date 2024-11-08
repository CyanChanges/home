<script setup lang="ts">
const event = useRequestEvent()

if (event) {
  setResponseStatus(event, 404)
}

function goBack() {
  history.back()
}
</script>

<template>
  <ContentDoc>
    <template v-slot="{ doc }">
      <Title>{{ doc.title }}</Title>
      <article>
        <Card>
          <template #title>{{ doc.title }}</template>
          <template #subtitle>{{ doc.description }}</template>
          <template #content>
            <ContentRenderer :value="doc"/>
          </template>
        </Card>
      </article>
    </template>
    <template #not-found>
      <Title>{{ $t("titles.not-found") }}</Title>
      <Message class="message" mt-2 severity="warn">{{ $t("messages.content-not-found") }}</Message>
      <Card class="card" select-none>
        <template #subtitle>
          <NuxtLink href="/">
            <Chip v-ripple :label="$t('actions.go-home')"/>
          </NuxtLink>&nbsp;
          <Chip v-ripple :label="$t('actions.go-back')" @click="goBack()"/>
          <divider/>
        </template>
        <template #content>
          {{ $t("messages.content-page.not-found") }}
        </template>
      </Card>
    </template>
    </ContentDoc>
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
