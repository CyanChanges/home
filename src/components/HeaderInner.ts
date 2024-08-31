import { LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { createRef, ref, type Ref } from 'lit/directives/ref.js'
import { prefetch } from "astro:prefetch";
import { MdTabs } from "@material/web/tabs/tabs";
import { MdPrimaryTab } from "@material/web/tabs/primary-tab";
import { html } from "lit";

@customElement('header-inner')
export class HeaderInner extends LitElement {
    @property() page: string
    tabEl: Ref<MdTabs> = createRef()

    constructor(page: string) {
        super();
        this.page = page;
    }

    render() {
        let isHome = this.page == "/";
        let isBlog = this.page.startsWith("/blog");
        return html`
            <md-tabs ${ref(this.tabEl)} @change=${() => this.handle()}>
                <md-primary-tab target="/" .active=${isHome}>
                    <slot name="home"></slot>
                </md-primary-tab>
                <md-primary-tab target="/blog" .active=${isBlog}>
                    <slot name="blog"></slot>
                </md-primary-tab>
            </md-tabs>
        `
    }

    async handle() {
        let target = this.tabEl.value?.activeTab?.getAttribute("target");
        history.pushState(null, "", target);
        let mainEl = document.querySelector("#main")
        let isHome = target == "/";
        let isBlog = target?.startsWith("/blog");
        let updatedContent: string = "404";
        if (isHome)
            updatedContent = await (await fetch("/inner/main")).text()
        else if (isBlog) {
            updatedContent = await (await fetch("/inner/blog")).text()
        }
        if (mainEl) mainEl.innerHTML = updatedContent
    }
}
