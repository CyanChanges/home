<script setup lang="ts">
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import type { MenuItem } from "primevue/menuitem";
import { PrimeIcons } from '@primevue/core/api';
import trimEnd from 'lodash.trimend'

let router = useRouter()

let items: MenuItem[] = [
  {
    label: "Cyan Home",
    icon: PrimeIcons.HOME,
    route: "/",
    disabled: () => {
      return trimEnd(router.currentRoute.value.path, "/") == ""
    },
  },
  {
    label: "Blogs",
    icon: PrimeIcons.LIST,
    route: "/blog",
    disabled: () => {
      return trimEnd(router.currentRoute.value.path, "/") == "/blog"
    },
  }
]
</script>

<template>
  <header>
  <Menubar :model="items" class="menubar">
    <template #item="{ item, props, hasSubmenu, root }">
      <NuxtLink v-ripple v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
        <div class="flex items-center">
          <a :href="href" v-bind="props.action" @click="navigate">
            <span :class="item.icon"/>
            <span class="ml-2">{{ item.label }}</span>
            <Badge v-if="item.badge" class="ml-auto" :value="item.badge"/>
            <span v-if="item.shortcut"
                  class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{
                item.shortcut
              }}</span>
            <i v-if="hasSubmenu"
               :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
          </a>
        </div>
      </NuxtLink>
      <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
        <span :class="item.icon"/>
        <span class="ml-2">{{ item.label }}</span>
        <Badge v-if="item.badge" class="ml-auto" :value="item.badge"/>
        <span v-if="item.shortcut"
              class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{
            item.shortcut
          }}</span>
        <i v-if="hasSubmenu"
           :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
      </a>
    </template>
  </Menubar>
  <NuxtRouteAnnouncer/>
  </header>
</template>

<style scoped>
.menubar {
  margin-bottom: 0.5rem;
}
</style>
