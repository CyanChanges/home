<script setup lang="ts">
const { t } = useI18n()
const store = useAnalytics()

let cfWAnalytics = ref(store.cloudflareWAnalytics)
let msClarity = ref(store.clarity)
let gAnalytic = ref(store.googleAnalytics)

let tooltip = computed(() => store.cfExist ? "Managed by Cloudflare" : undefined)

function configure() {
  store.$patch({
    clarity: msClarity.value,
    googleAnalytics: msClarity.value,
    cloudflareWAnalytics: Boolean(cfWAnalytics.value),
  })
  store.confirm()
}

export interface Service {
  name: string
  value: Ref<boolean>,
  disabled?: Ref<boolean>,
  tooltip?: Ref<string>
}

const services = [{
  name: "Cloudflare Web Analytics",
  value: cfWAnalytics,
  disabled: computed(()=>store.cfExist),
  tooltip
}, {
  name: "Google Analytics",
  value: gAnalytic
}, {
  name: "Microsoft Clarity",
  value: msClarity
}]

const optionsPop = ref()
function toggle(event: Event) {
  optionsPop.value.toggle(event)
}
</script>

<template>
  <Panel :header="t('data-collect')" select="none" severity="warn">
    <div class="m-0">
      <p>{{ t("analytic-p1") }}</p>
      <p>{{ t("analytic-p2") }}</p>
      <p>
        <i18n-t for="privacy-policy" keypath="analytic-details" tag="label">
          <NuxtLink prefetch target="_blank" to="/privacy#privacy-policy">{{ t('privacy-policy') }}</NuxtLink>
        </i18n-t>
      </p>

      <p>
        <i18n-t for="done" keypath="i-have-read" tag="label">
          <b>{{ t('done') }}</b>
        </i18n-t>
      </p>
    </div>
    <template #footer>
      <div class="w-full flex items-center gap-2">
        <div class="mr-a">
          <div class="font-bold select-none" @click="toggle">{{ t('options') }}</div>
        </div>
        <div>
          <Button :label="$t('done')" outlined raised severity="Success" @click="configure"/>
        </div>
      </div>
    </template>
  </Panel>

  <Popover select="none" ref="optionsPop">
    <ul class="list-none p-0 m-0 flex flex-col gap-4">
      <li v-for="service in services" :key="service.name">
        <div border="solid rounded dark" p-2 m-2 flex="~ 1 col md:row" justify-between
             class="items-center md:items-center max-md:gap-1 gap-4"
             v-tooltip="service.tooltip?.value">
          <p>{{ service.name }}</p>
          <ToggleButton class="max-md:w-full w-a"
                        v-model="service.value.value"
                        :disabled="service.disabled?.value"
                        onIcon="pi pi-check"
                        offIcon="pi pi-times"
                        :onLabel="$t('yes')"
                        :offLabel="$t('no')"/>
        </div>
      </li>
    </ul>
  </Popover>
</template>

<style scoped>
</style>

<i18n lang="yaml">
en:
  data-collect: Data Collect
  analytic-p1: >
    We use 3rd-party analytics services to improvement our website & services.
  analytic-p2: >
    By visiting our website, we collected some basic information such as your country and region, etc.
  analytic-details: >
    Read our {0} for more details.
  i-have-read: >
    Click the {0} button below indicates that you have read and agree the @:privacy-policy.
ja:
  data-collect: データ収集
  analytic-p1: >
    当社はウェブサイトとサービスを改善するためにサードパーティの分析サービスを使用しています。
  analytic-p2: >
    当社のウェブサイトにアクセスすることで、リクエスト地域などの基本的な情報が収集されます。
  analytic-details: >
    詳細については、{0} をご覧ください。
  i-have-read: >
    下の「{0}」ボタンをクリックすると、@:privacy-policy を読んで同意したことを示します。
zh-Hans:
  data-collect: 数据收集
  analytic-p1: >
    我们使用第三方分析服务来改进我们的服务和网站
  analytic-p2: >
    通过访问我们的网站，我们收集了一些基本信息，例如您的国家和地区等
  analytic-details:
    请阅读我们的 {0} 以了解详情
  i-have-read: >
    单击下方的 {0} 按钮代表您已阅读并同意我们的 @:privacy-policy

zh-Hant:
  data-collect: 數據收集
  analytic-p1: >
    我們使用第三方分析服務來改善我們的服務和網站
  analytic-p2: >
    透過訪問我們的網站，我們收集了一些基本信息，例如您的國家和地區等
  analytic-read: >
    欲了解更多信息，請閱讀 {0}
  i-have-read:
    點擊下方的 {0} 按鈕代表您已閱讀並同意我們的 @:privacy-policy

</i18n>
