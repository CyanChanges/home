<script setup lang="ts">
import Fluid from 'primevue/fluid';
</script>

<template>
  <span class="flex w-full m-2rem mt-5rem">
    <footer class="footer m-auto text-center w-a h-a font-700">
      <span class="t-cyan">CyanChanges</span> &copy; 2024. All rights reserved.
      <br><br>
      <span class="">
        <a v-tooltip="'CyanChanges'" href="https://github.com/CyanChanges">GitHub</a> |
        <a v-tooltip="'@cyanc:matrix.org'" href="https://matrix.to/@cyanc:matrix.org#/@cyanc:matrix.org">Matrix</a> |
        <a v-tooltip="'cyanchanges'" type="text" href="https://discord.gg/hp86wkWf">Discord</a> |
        <a v-tooltip="'CyanChanges@mastodon.social'" href="https://mastodon.social/@CyanChanges">Mastodon</a> |
        <a v-tooltip="'ID: 298526251'" href="https://www.hoyolab.com/accountCenter/postList?id=298526251" class="color-dark-3"><del>HoYoLab</del></a>
      </span>
    </footer>
  </span>
</template>

<style scoped>
.t-cyan {
  background: linear-gradient(25deg, #2dceff, #2dffd8);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 1000;
}
</style>
