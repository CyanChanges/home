import {LitElement} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {prefetch} from "astro:prefetch";
import {MdPrimaryTab} from "@material/web/tabs/primary-tab";
import {html} from "lit";

@customElement('a-tab')
export class ALinkedTab extends MdPrimaryTab {
  @property({
    hasChanged(value: any, oldValue) {
      if (value === oldValue) return false
      if (value !== null) prefetch(value)
      return true
    }
  })
  declare to: string | null

  override render() {
    const originalResult = super.render()
    return html`
      <a style="text-decoration:none; color:inherit;"
         href=${this.to}>${originalResult}</a>
    `
  }

  constructor(...args) {
    super();
  }
}
