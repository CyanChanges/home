<script setup lang="ts">
const { t } = useI18n()
const currentYear = new Date().getFullYear()
const { major, minor, commit } = useVersion()
</script>

<template>
  <div class="flex m-2rem mt-5rem">
    <div class="footer m-auto text-center w-a h-a font-700">
      <span class="t-cyan">CyanChanges</span> &copy; {{ currentYear }}. {{ t("allRightsReserved") }}
      <br><br>
      <span select="none">
        <a rel="me" v-tooltip="'CyanChanges'" href="https://github.com/CyanChanges">GitHub</a> |
        <a rel="me" v-tooltip="'@cyanc:matrix.org'" href="https://matrix.to/@cyanc:matrix.org#/@cyanc:matrix.org">Matrix</a> |
        <a rel="me" v-tooltip="'To reach me? Join My Server'" type="text" href="https://discord.gg/kfqJ98EeR9">Discord</a> |
        <a rel="me" v-tooltip="'CyanChanges@mastodon.social'" href="https://mastodon.social/@CyanChanges">Mastodon</a> |
        <a rel="external" v-tooltip="'ID: 298526251'" href="https://www.hoyolab.com/accountCenter/postList?id=298526251"
           class="color-dark-3"><del>HoYoLab</del></a>
      </span>
    </div>
  </div>
  <div select="none" class="text-center"><NuxtLink to="/privacy#privacy-policy">{{ t('privacy-policy') }}</NuxtLink></div>
  <br>
  <div select-none class="version color-emerald font-600 text-center">
    Build: {{ major }}-{{minor}}@<b>{{ commit.slice(0, 8) }}</b>
  </div>
</template>

<style scoped>
.t-cyan {
  background: linear-gradient(25deg, #2dceff, #2dffd8);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 1000;
}
.version {
  font-family: Roboto, Noto Sans, sans-serif;
}
</style>

<i18n lang="yaml">
en:
  allRightsReserved: All rights reserved.
zh-Hans:
  allRightsReserved: 保留所有权利
zh-Hant:
  allRightsReserved: 版權所有

</i18n>
