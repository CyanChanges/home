<script setup lang="ts">
import type { MenuItem } from "primevue/menuitem";
import { PrimeIcons } from '@primevue/core/api';
import trimEnd from 'lodash.trimend'
import { ref } from "vue";

const { t } = useI18n()

let router = useRouter()

let items: MenuItem[] = [
  {
    label: t("homePage"),
    icon: PrimeIcons.HOME,
    route: "/",
    disabled: () => {
      return trimEnd(router.currentRoute.value.path, "/") == ""
    },
  },
  {
    label: t("blogPage"),
    icon: PrimeIcons.LIST,
    route: "/blog",
    disabled: () => {
      return trimEnd(router.currentRoute.value.path, "/") == "/blog"
    },
  }
]

let [analytic] = useAutoAnimate()
let store = useAnalytics()

const menu = ref();
const menuItems = ref<MenuItem[]>([
  {
    label: t('options'),
    items: [
      {
        label: t("review-analytic-options"),
        icon: PrimeIcons.BOOK,
        command: () => {
          store.confirmedVersion = null
        }
      },
    ]
  }
]);

const toggle = (event: Event) => {
  menu.value.toggle(event);
};

</script>

<template>
  <header>
    <NuxtRouteAnnouncer/>
    <Menubar :model="items" class="menubar">
      <template #item="{ item, props, hasSubmenu, root }">
        <NuxtLink prefetch v-ripple v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <div class="flex items-center">
            <a :href="href" v-bind="props.action" @click="navigate">
              <span :class="item.icon"/>
              <span class="ml-2">{{ item.label }}</span>
              <Badge v-if="item.badge" class="ml-auto" :value="item.badge"/>
              <span v-if="item.shortcut"
                    class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{
                  item.shortcut!
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
      <template #end>
        <div class="card flex justify-center">
          <Button type="button" severity="secondary" icon="pi pi-ellipsis-v" @click="toggle" aria-haspopup="true"
                  aria-controls="overlay_menu"/>
          <Menu ref="menu" id="overlay_menu" :model="menuItems" :popup="true"/>
        </div>
      </template>
    </Menubar>
      <div :class="{'visible': !store.isConfirmed}" class="confirmation">
        <ClientOnly>
          <AnalyticsConfirm ref="analytic"/>
        </ClientOnly>
      </div>
  </header>
</template>

<style scoped>
.menubar {
  margin-bottom: 0.5rem;
}

.confirmation.visible {
  opacity: 100%;
  max-height: 40em;
  display: block;

  transition: all 1s cubic-bezier(0.50, 0.75, 0.75, 0.25);
  animation: Animate 1.2s cubic-bezier(0.50, 0.75, 0.75, 0.25) reverse;
  animation-direction: reverse;
}

.confirmation {
  opacity: 0;
  max-height: 0;
  overflow: hidden;

  transition: all 1s cubic-bezier(0.45, 0.45, 0.25, 1);
  animation: Animate 0.8s cubic-bezier(0.45, 0.45, 0.25, 1);
  animation-direction: normal;
}

@keyframes Animate {
  from {
    max-height: 0;
    opacity: 0;
  }

  35% {
    max-height: 5em;
    opacity: 50%;
  }

  to {
    max-height: 40em;
    opacity: 100%;
  }
}
</style>

<i18n lang="yaml">
en:
  review-analytic-options: Review Analytic Options
zh-Hans:
  review-analytic-options: 查看分析选项
zh-Hant:
  review-analytic-options: 檢查分析選項
</i18n>
