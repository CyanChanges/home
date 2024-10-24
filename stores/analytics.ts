import { ref } from "vue";
import { defineStore } from 'pinia'
import {} from 'pinia-plugin-persistedstate'
import { computedAsync } from "@vueuse/core";

declare global {
    const clarity: any
    const dataLayer: any[]
}

let expireDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));

export const useAnalytics = defineStore("analytics", () => {
    const cfExist = computedAsync(() => {
        if (!document) return false // SSR
        else return Boolean( // Hydrate corrected on the client
            document
                .querySelector("body > script[src*=\"https://static.cloudflareinsights.com/beacon.min.js\"]")
        )
    })


    async function getPolicyVersion(): Promise<string> {
        let x = await queryContent('/privacy').findOne();
        if (!x.updateTime)
            console.warn("Logic Error?: No update time was found")
        return x.updateTime;
    }

    const latestVersion = computedAsync(async () => {
        const { data } = useAsyncData("policy-version", () => getPolicyVersion())
        return data.value
    })

    let confirmedVersion = ref<string | null>(null)

    let cloudflareWAnalytics = ref(true)
    let googleAnalytics = ref(true)
    let clarity = ref(true)

    let _lastConfirm = ref(false)
    let isConfirmed = computedAsync(async () => {
        if (import.meta.server) return _lastConfirm.value
        return _lastConfirm.value = (confirmedVersion.value === latestVersion.value)
    })
    let load: () => void;
    let confirmAnalytics: Promise<void> = new Promise(res => load = res);

    async function loadClarity() {
        const TAG = "omeozaiilh";
        await confirmAnalytics
        if (clarity.value === false) return

        function push() {
            (window["clarity"].q = window["clarity"].q || []).push(arguments)
        }

        window['clarity'] = window['clarity'] || push
        let response = await fetch("https://www.clarity.ms/tag/" + TAG);
        let data = await response.text();

        eval(data) // Load Microsoft Clarity
    }

    async function loadGoogleAnalytics() {
        const TAG = "G-RM7DGVGTFJ";
        await confirmAnalytics
        if (googleAnalytics.value === false) return

        let response = await fetch("https://www.googletagmanager.com/gtag/js?id=" + TAG);
        let data = await response.text();

        eval(data) // Load Google Analytics

        window['dataLayer'] = window['dataLayer'] || [];

        function gtag(config: string, data: any) { window['dataLayer'].push(arguments); }

        gtag('js', new Date());
        gtag('config', 'G-KM85VFC4LJ');
    }

    async function loadCloudflareWAnalytics(): Promise<void> {
        await confirmAnalytics
        if (cfExist.value || !cloudflareWAnalytics) return

        let cfwaScript = document.createElement("script")
        cfwaScript.src = "https://static.cloudflareinsights.com/beacon.min.js"
        cfwaScript.defer = true
        cfwaScript.setAttribute("data-cf-beacon", '{"token": "e19ed7d239984fe681753ccfea0d4e3e"}');
        return await new Promise((resolve, reject) => {
            cfwaScript.onload = () => resolve()
            cfwaScript.onerror = (event: Event | string, source?: string, lineno?: number, colno?: number, error?: Error) => reject(error ?? "unknown error")

            document.body.insertBefore(cfwaScript, document.body.lastChild)
        })

    }

    async function confirmPolicy() {
        try {
            let updateTime = await getPolicyVersion()
            if (!updateTime)
                console.warn("Logic Error?: No update time was found")
            confirmedVersion.value = updateTime
        } catch (e) {
            console.warn("Unable to check the policy updateTime: %o", e)
            console.warn("Please contact contact@cyans.me or create an issue on GitHub", e)
        }
    }

    function confirm() {
        confirmPolicy().then()
    }

    const toast = useToast();

    function loadFail(name: string, err?: any) {
        console.warn(`${name} Load failed: %o`, err)
        toast.add({
            severity: 'warn',
            summary: `Can't load ${name}`,
            detail: err?.toString() ?? "Unknown error",
            life: 3000
        });
    }

    let cloudflareWAnalyticsLoaded = loadCloudflareWAnalytics().catch(loadFail.bind(null, "Cloudflare Web Analytics"))
    let clarityLoaded = loadClarity().catch(loadFail.bind(null, "Microsoft Clarity"))
    let googleAnalyticsLoaded = loadGoogleAnalytics().catch(loadFail.bind(null, "Google Analytics"))

    return {
        cfExist,
        clarity,
        googleAnalytics,
        cloudflareWAnalytics,
        confirmedVersion,
        latestVersion,
        _lastConfirm,
        isConfirmed,
        confirm,
        cloudflareWAnalyticsLoaded,
        clarityLoaded,
        googleAnalyticsLoaded,
        load: load!
    }
}, {
    persist: {
        pick: [
            "clarity",
            "googleAnalytics",
            "cloudflareWAnalytics",
            "confirmedVersion",
            "_lastConfirm"
        ],
        beforeHydrate(ctx) {
            ctx.store.$subscribe(async (mutation, { isConfirmed }) => {
                if (isConfirmed) ctx.store.load()
            })
        },
        storage: piniaPluginPersistedstate.cookies({
            expires: expireDate
        })
    }
})
