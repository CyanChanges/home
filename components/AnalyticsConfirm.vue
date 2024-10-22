<script setup lang="ts">

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

</script>

<template>
  <Panel severity="warn" header="Data Collect">
    <div class="m-0">
      <p>We use 3rd-party analytics services to improvement our website & services.</p>
      <p>
        By visiting our website,
        we collected some basic information such as your <b>country and region</b>, <b>browser name</b>, etc.
      </p>
      <p>Read our <a href="/privacy">Privacy Policy</a> for more details.</p>
      <b>Analytics Options</b>
      <div border="solid rounded dark" p-2 m-2 flex="~ 1 col md:row" justify-between
           class="items-center md:items-center"
           v-tooltip="tooltip">
        <p>Cloudflare Web Analytics</p>
        <ToggleButton v-model="cfWAnalytics"
                      :disabled="store.cfExist"
                      onIcon="pi pi-check"
                      offIcon="pi pi-times"
                      :onLabel="$t('yes')"
                      :offLabel="$t('no')"/>
      </div>
      <div border="solid rounded dark" p-2 m-2 flex="~ 1 col md:row" justify-between
           class="items-center md:items-center">
        <p>Google Analytics</p>
        <ToggleButton v-model="gAnalytic"
                      onIcon="pi pi-check"
                      offIcon="pi pi-times"
                      :onLabel="$t('yes')"
                      :offLabel="$t('no')"/>
      </div>
      <div border="solid rounded dark" p-2 m-2 flex="~ 1 col md:row" justify-between
           class="items-center md:items-center">
        <p>Microsoft Clarity</p>
        <ToggleButton v-model="msClarity"
                      onIcon="pi pi-check"
                      offIcon="pi pi-times"
                      :onLabel="$t('yes')"
                      :offLabel="$t('no')"/>
      </div>
      <p>Click the <b>Done</b> button below indicates that you have read the Privacy Policy.</p>
    </div>
    <template #footer>
      <div class="flex justify-end">
        <Button label="Done" severity="Success" @click="configure" raised outlined/>
      </div>
    </template>
  </Panel>

</template>

<style scoped>
</style>
