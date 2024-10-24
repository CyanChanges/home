<script setup lang="ts">
const { t } = useI18n()
const currentYear = new Date().getFullYear()
</script>

<template>
  <div class="flex m-2rem mt-5rem">
    <div class="footer m-auto text-center w-a h-a font-700">
      <span class="t-cyan">CyanChanges</span> &copy; {{ currentYear }}. {{ $t("allRightsReserved") }}.
      <br><br>
      <span class="">
        <a v-tooltip="'CyanChanges'" href="https://github.com/CyanChanges">GitHub</a> |
        <a v-tooltip="'@cyanc:matrix.org'" href="https://matrix.to/@cyanc:matrix.org#/@cyanc:matrix.org">Matrix</a> |
        <a v-tooltip="'cyanchanges'" type="text" href="https://discord.gg/hp86wkWf">Discord</a> |
        <a v-tooltip="'CyanChanges@mastodon.social'" href="https://mastodon.social/@CyanChanges">Mastodon</a> |
        <a v-tooltip="'ID: 298526251'" href="https://www.hoyolab.com/accountCenter/postList?id=298526251"
           class="color-dark-3"><del>HoYoLab</del></a>
      </span>
    </div>
  </div>
</template>

<style scoped>
.t-cyan {
  background: linear-gradient(25deg, #2dceff, #2dffd8);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 1000;
}
</style>
