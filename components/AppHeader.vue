<script setup lang="ts">
import type { MenuItem } from "primevue/menuitem";
import trimEnd from 'lodash.trimend'
import { ref } from "vue";

const { t } = useI18n()

let router = useRouter()

let items: MenuItem[] = [
  {
    label: t("homePage"),
    icon: "fluent:home-16-filled",
    route: "/",
    disabled: () => {
      return trimEnd(router.currentRoute.value.path, "/") == ""
    },
  },
  {
    label: t("blogPage"),
    icon: "fluent:list-bar-16-filled",
    route: "/blog",
    disabled: () => {
      return trimEnd(router.currentRoute.value.path, "/") == "/blog"
    },
  }
]

let store = useAnalytics()

const menu = ref();
const menuItems = ref<MenuItem[]>([
  {
    label: t('options'),
    items: [
      {
        label: t("analytic-options"),
        icon: "fluent:options-16-filled",
        command: () => {
          store.confirmedVersion = null
          navigateTo({
            hash: '#privacy'
          })
        }
      },
    ]
  }
]);

const toggle = (event: Event) => {
  menu.value.toggle(event);
};


const closable = ref(false)
if (import.meta.client) {
  setTimeout(() => {
    closable.value = true
  }, 5000)
}
</script>

<template>
  <header>
    <NuxtRouteAnnouncer/>
    <Message severity="danger" :closable="closable">
      <p>ARE YOU S!T!U!P!I!D! send me an E!-Mail about the CaSiNo? What the hail? I'll wish you a speedy ascension.</p>
      <p>Anyone get mouse-brained who sends me casino-related emails, I wish you a speedy ascension.</p>
      <p>給我發賭場相關郵件的, 冇腦噶, 我祝你早日昇天噶</p>
      <p>畀我發賭場相關郵件嘅，我祝你早日升天</p>
      <p>カジノ関連のメールを送ってくれた皆さん、早く昇進することを祈っています~💢</p>
      <p>카지노 관련 이메일을 보내주신 분들께 빠른 승천을 기원합니다.</p>
      <p>A coloro che mi hanno inviato e-mail relative ai casinò, auguro una rapida ascesa</p>
      <p>Gửi đến những ai đã gửi cho tôi email liên quan đến sòng bạc, tôi chúc các bạn thăng tiến nhanh chóng</p>
      <p>Όποιος μου στέλνει μηνύματα ηλεκτρονικού ταχυδρομείου σχετικά με το καζίνο, σας εύχομαι ταχεία άνοδο.</p>

      <h3>谁给赌场发邮件抄送我, 我胸都给你打穿模</h3>

      <b>Translated by <a href="https://www.deepl.com/">DeepL</a></b>
      <br />
      <b><sub>Closable only after 5 seconds</sub></b>

    </Message>

    <Menubar :model="items" class="menubar">
      <template #item="{ item, props, hasSubmenu, root }">
        <NuxtLink prefetch v-ripple v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <div class="flex items-center">
            <a :href="href" v-bind="props.action" @click="navigate">
              <Icon :name="item.icon"/>
              <span v-if="item.label">{{ item.label }}</span>
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
          <Icon :name="item.icon"/>
          <span v-if="item.label">{{ item.label }}</span>
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
          <Menu ref="menu" id="overlay_menu" :model="menuItems" :popup="true">
            <template #item="{ item, props }">
              <a v-ripple class="flex items-center" v-bind="props.action">
                <Icon :name="item.icon" size="20" />
                <span v-if="item.label">{{ item.label }}</span>
                <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
                <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
              </a>
            </template>
          </Menu>
        </div>
      </template>
    </Menubar>
      <div :class="{'visible': !store.isConfirmed}" class="confirmation">
        <ClientOnly>
          <AnalyticsConfirm/>
          <template #fallback>
            <!-- Render on client side -->
          </template>
        </ClientOnly>
      </div>
  </header>
</template>

<style scoped lang="scss">
.menubar {
  margin-bottom: 0.5rem;
}

.confirmation {
  opacity: 0;
  max-height: 0;
  overflow: hidden;

  transition: all 1s cubic-bezier(0.45, 0.45, 0.25, 1);
  animation: Animate 0.8s cubic-bezier(0.45, 0.45, 0.25, 1);
  animation-direction: normal;

  &.visible {
    opacity: 100%;
    max-height: 40em;
    display: block;

    transition: all 1s cubic-bezier(0.50, 0.75, 0.75, 0.25);
    animation: Animate 1.2s cubic-bezier(0.50, 0.75, 0.75, 0.25) reverse;
    animation-direction: reverse;
  }
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
  analytic-options: Analytic Options
zh-Hans:
  analytic-options: 分析选项
zh-Hant:
  analytic-options: 分析選項
</i18n>
