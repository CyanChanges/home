import{T as A}from"./CZtR5Zy7.js";import M from"./CsFhkE5N.js";import{s as _,b as E,u as L,a as V,_ as R}from"./SR3DCnuK.js";import x from"./D4MTFBY_.js";import{B as z,s as O,R as B,u as H}from"./DqMR-dwe.js";import{s as G}from"./CiYl9wqd.js";import{C as c,M as u,B as g,A as t,D as b,P as $,G as d,H as J,I as q,J as a,L as w,N as P,a2 as F,K as Q,d as U,y as i,O as p}from"./vBd2pq3-.js";import{t as m,n as W}from"./n8DfiCZz.js";import"./CRZbLIcn.js";import"./C-v3KzvZ.js";import"./Dnd51l0P.js";import"./CML11ZyE.js";import"./D2lEFyCK.js";import"./DRrZlJiG.js";var X=function(o){var e=o.dt;return`
.p-chip {
    display: inline-flex;
    align-items: center;
    background: `.concat(e("chip.background"),`;
    color: `).concat(e("chip.color"),`;
    border-radius: `).concat(e("chip.border.radius"),`;
    padding: `).concat(e("chip.padding.y")," ").concat(e("chip.padding.x"),`;
    gap: `).concat(e("chip.gap"),`;
}

.p-chip-icon {
    color: `).concat(e("chip.icon.color"),`;
    font-size: `).concat(e("chip.icon.font.size"),`;
    width: `).concat(e("chip.icon.size"),`;
    height: `).concat(e("chip.icon.size"),`;
}

.p-chip-image {
    border-radius: 50%;
    width: `).concat(e("chip.image.width"),`;
    height: `).concat(e("chip.image.height"),`;
    margin-left: calc(-1 * `).concat(e("chip.padding.y"),`);
}

.p-chip:has(.p-chip-remove-icon) {
    padding-right: `).concat(e("chip.padding.y"),`;
}

.p-chip:has(.p-chip-image) {
    padding-top: calc(`).concat(e("chip.padding.y"),` / 2);
    padding-bottom: calc(`).concat(e("chip.padding.y"),` / 2);
}

.p-chip-remove-icon {
    cursor: pointer;
    font-size: `).concat(e("chip.remove.icon.size"),`;
    width: `).concat(e("chip.remove.icon.size"),`;
    height: `).concat(e("chip.remove.icon.size"),`;
    color: `).concat(e("chip.remove.icon.color"),`;
    border-radius: 50%;
    transition: outline-color `).concat(e("chip.transition.duration"),", box-shadow ").concat(e("chip.transition.duration"),`;
    outline-color: transparent;
}

.p-chip-remove-icon:focus-visible {
    box-shadow: `).concat(e("chip.remove.icon.focus.ring.shadow"),`;
    outline: `).concat(e("chip.remove.icon.focus.ring.width")," ").concat(e("chip.remove.icon.focus.ring.style")," ").concat(e("chip.remove.icon.focus.ring.color"),`;
    outline-offset: `).concat(e("chip.remove.icon.focus.ring.offset"),`;
}
`)},Y={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},Z=z.extend({name:"chip",theme:X,classes:Y}),ee={name:"BaseChip",extends:O,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:Z,provide:function(){return{$pcChip:this,$parentInstance:this}}},j={name:"Chip",extends:ee,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(o){(o.key==="Enter"||o.key==="Backspace")&&this.close(o)},close:function(o){this.visible=!1,this.$emit("remove",o)}},components:{TimesCircleIcon:_}},ne=["aria-label"],oe=["src"];function se(n,o,e,s,l,r){return l.visible?(c(),u("div",t({key:0,class:n.cx("root"),"aria-label":n.label},n.ptmi("root")),[g(n.$slots,"default",{},function(){return[n.image?(c(),u("img",t({key:0,src:n.image},n.ptm("image"),{class:n.cx("image")}),null,16,oe)):n.$slots.icon?(c(),b($(n.$slots.icon),t({key:1,class:n.cx("icon")},n.ptm("icon")),null,16,["class"])):n.icon?(c(),u("span",t({key:2,class:[n.cx("icon"),n.icon]},n.ptm("icon")),null,16)):d("",!0),n.label?(c(),u("div",t({key:3,class:n.cx("label")},n.ptm("label")),m(n.label),17)):d("",!0)]}),n.removable?g(n.$slots,"removeicon",{key:0,removeCallback:r.close,keydownCallback:r.onKeydown},function(){return[(c(),b($(n.removeIcon?"span":"TimesCircleIcon"),t({tabindex:"0",class:[n.cx("removeIcon"),n.removeIcon],onClick:r.close,onKeydown:r.onKeydown},n.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):d("",!0)],16,ne)):d("",!0)}j.render=se;var te=function(o){var e=o.dt;return`
.p-message {
    border-radius: `.concat(e("message.border.radius"),`;
    outline-width: `).concat(e("message.border.width"),`;
    outline-style: solid;
}

.p-message-content {
    display: flex;
    align-items: center;
    padding: `).concat(e("message.content.padding"),`;
    gap: `).concat(e("message.content.gap"),`;
    height: 100%;
}

.p-message-icon {
    flex-shrink: 0;
}

.p-message-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin: 0 0 0 auto;
    overflow: hidden;
    position: relative;
    width: `).concat(e("message.close.button.width"),`;
    height: `).concat(e("message.close.button.height"),`;
    border-radius: `).concat(e("message.close.button.border.radius"),`;
    background: transparent;
    transition: background `).concat(e("message.transition.duration"),", color ").concat(e("message.transition.duration"),", outline-color ").concat(e("message.transition.duration"),", box-shadow ").concat(e("message.transition.duration"),`, opacity 0.3s;
    outline-color: transparent;
    color: inherit;
    padding: 0;
    border: none;
    cursor: pointer;
    user-select: none;
}

.p-message-close-icon {
    font-size: `).concat(e("message.close.icon.size"),`;
    width: `).concat(e("message.close.icon.size"),`;
    height: `).concat(e("message.close.icon.size"),`;
}

.p-message-close-button:focus-visible {
    outline-width: `).concat(e("message.close.button.focus.ring.width"),`;
    outline-style: `).concat(e("message.close.button.focus.ring.style"),`;
    outline-offset: `).concat(e("message.close.button.focus.ring.offset"),`;
}

.p-message-info {
    background: `).concat(e("message.info.background"),`;
    outline-color: `).concat(e("message.info.border.color"),`;
    color: `).concat(e("message.info.color"),`;
    box-shadow: `).concat(e("message.info.shadow"),`;
}

.p-message-info .p-message-close-button:focus-visible {
    outline-color: `).concat(e("message.info.close.button.focus.ring.color"),`;
    box-shadow: `).concat(e("message.info.close.button.focus.ring.shadow"),`;
}

.p-message-info .p-message-close-button:hover {
    background: `).concat(e("message.info.close.button.hover.background"),`;
}

.p-message-success {
    background: `).concat(e("message.success.background"),`;
    outline-color: `).concat(e("message.success.border.color"),`;
    color: `).concat(e("message.success.color"),`;
    box-shadow: `).concat(e("message.success.shadow"),`;
}

.p-message-success .p-message-close-button:focus-visible {
    outline-color: `).concat(e("message.success.close.button.focus.ring.color"),`;
    box-shadow: `).concat(e("message.success.close.button.focus.ring.shadow"),`;
}

.p-message-success .p-message-close-button:hover {
    background: `).concat(e("message.success.close.button.hover.background"),`;
}

.p-message-warn {
    background: `).concat(e("message.warn.background"),`;
    outline-color: `).concat(e("message.warn.border.color"),`;
    color: `).concat(e("message.warn.color"),`;
    box-shadow: `).concat(e("message.warn.shadow"),`;
}

.p-message-warn .p-message-close-button:focus-visible {
    outline-color: `).concat(e("message.warn.close.button.focus.ring.color"),`;
    box-shadow: `).concat(e("message.warn.close.button.focus.ring.shadow"),`;
}

.p-message-warn .p-message-close-button:hover {
    background: `).concat(e("message.warn.close.button.hover.background"),`;
}

.p-message-error {
    background: `).concat(e("message.error.background"),`;
    outline-color: `).concat(e("message.error.border.color"),`;
    color: `).concat(e("message.error.color"),`;
    box-shadow: `).concat(e("message.error.shadow"),`;
}

.p-message-error .p-message-close-button:focus-visible {
    outline-color: `).concat(e("message.error.close.button.focus.ring.color"),`;
    box-shadow: `).concat(e("message.error.close.button.focus.ring.shadow"),`;
}

.p-message-error .p-message-close-button:hover {
    background: `).concat(e("message.error.close.button.hover.background"),`;
}

.p-message-secondary {
    background: `).concat(e("message.secondary.background"),`;
    outline-color: `).concat(e("message.secondary.border.color"),`;
    color: `).concat(e("message.secondary.color"),`;
    box-shadow: `).concat(e("message.secondary.shadow"),`;
}

.p-message-secondary .p-message-close-button:focus-visible {
    outline-color: `).concat(e("message.secondary.close.button.focus.ring.color"),`;
    box-shadow: `).concat(e("message.secondary.close.button.focus.ring.shadow"),`;
}

.p-message-secondary .p-message-close-button:hover {
    background: `).concat(e("message.secondary.close.button.hover.background"),`;
}

.p-message-contrast {
    background: `).concat(e("message.contrast.background"),`;
    outline-color: `).concat(e("message.contrast.border.color"),`;
    color: `).concat(e("message.contrast.color"),`;
    box-shadow: `).concat(e("message.contrast.shadow"),`;
}

.p-message-contrast .p-message-close-button:focus-visible {
    outline-color: `).concat(e("message.contrast.close.button.focus.ring.color"),`;
    box-shadow: `).concat(e("message.contrast.close.button.focus.ring.shadow"),`;
}

.p-message-contrast .p-message-close-button:hover {
    background: `).concat(e("message.contrast.close.button.hover.background"),`;
}

.p-message-text {
    font-size: `).concat(e("message.text.font.size"),`;
    font-weight: `).concat(e("message.text.font.weight"),`;
}

.p-message-icon {
    font-size: `).concat(e("message.icon.size"),`;
    width: `).concat(e("message.icon.size"),`;
    height: `).concat(e("message.icon.size"),`;
}

.p-message-enter-from {
    opacity: 0;
}

.p-message-enter-active {
    transition: opacity 0.3s;
}

.p-message.p-message-leave-from {
    max-height: 1000px;
}

.p-message.p-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin: 0;
}

.p-message-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.3s;
}

.p-message-leave-active .p-message-close-button {
    opacity: 0;
}
`)},ce={root:function(o){var e=o.props;return"p-message p-component p-message-"+e.severity},content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},ae=z.extend({name:"message",theme:te,classes:ce}),re={name:"BaseMessage",extends:O,props:{severity:{type:String,default:"info"},closable:{type:Boolean,default:!1},life:{type:Number,default:null},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null}},style:ae,provide:function(){return{$pcMessage:this,$parentInstance:this}}},T={name:"Message",extends:re,inheritAttrs:!1,emits:["close","life-end"],timeout:null,data:function(){return{visible:!0}},mounted:function(){var o=this;this.life&&setTimeout(function(){o.visible=!1,o.$emit("life-end")},this.life)},methods:{close:function(o){this.visible=!1,this.$emit("close",o)}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{ripple:B},components:{TimesIcon:E}};function h(n){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},h(n)}function I(n,o){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);o&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(n,l).enumerable})),e.push.apply(e,s)}return e}function S(n){for(var o=1;o<arguments.length;o++){var e=arguments[o]!=null?arguments[o]:{};o%2?I(Object(e),!0).forEach(function(s){ie(n,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):I(Object(e)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(e,s))})}return n}function ie(n,o,e){return(o=le(o))in n?Object.defineProperty(n,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[o]=e,n}function le(n){var o=ue(n,"string");return h(o)=="symbol"?o:o+""}function ue(n,o){if(h(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var s=e.call(n,o||"default");if(h(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(n)}var pe=["aria-label"];function me(n,o,e,s,l,r){var v=J("TimesIcon"),k=q("ripple");return c(),b(Q,t({name:"p-message",appear:""},n.ptmi("transition")),{default:a(function(){return[w(P("div",t({class:n.cx("root"),role:"alert","aria-live":"assertive","aria-atomic":"true"},n.ptm("root")),[n.$slots.container?g(n.$slots,"container",{key:0,closeCallback:r.close}):(c(),u("div",t({key:1,class:n.cx("content")},n.ptm("content")),[g(n.$slots,"icon",{class:W(n.cx("icon"))},function(){return[(c(),b($(n.icon?"span":null),t({class:[n.cx("icon"),n.icon]},n.ptm("icon")),null,16,["class"]))]}),n.$slots.default?(c(),u("div",t({key:0,class:n.cx("text")},n.ptm("text")),[g(n.$slots,"default")],16)):d("",!0),n.closable?w((c(),u("button",t({key:1,class:n.cx("closeButton"),"aria-label":r.closeAriaLabel,type:"button",onClick:o[0]||(o[0]=function(y){return r.close(y)})},S(S({},n.closeButtonProps),n.ptm("closeButton"))),[g(n.$slots,"closeicon",{},function(){return[n.closeIcon?(c(),u("i",t({key:0,class:[n.cx("closeIcon"),n.closeIcon]},n.ptm("closeIcon")),null,16)):(c(),b(v,t({key:1,class:[n.cx("closeIcon"),n.closeIcon]},n.ptm("closeIcon")),null,16,["class"]))]})],16,pe)),[[k]]):d("",!0)],16))],16),[[F,l.visible]])]}),_:3},16)}T.render=me;const ge=U({__name:"[...slug]",async setup(n){L({meta:[{name:"fediverse:creator",content:"@CyanChanges@mastodon.social"}]});function o(){history.back()}return(e,s)=>{const l=A,r=M,v=H,k=T,y=j,D=V,K=G,N=x,C=B;return c(),b(N,null,{default:a(({doc:f})=>[i(l,null,{default:a(()=>[p(m(f.title),1)]),_:2},1024),P("article",null,[i(v,null,{title:a(()=>[p(m(f.title),1)]),subtitle:a(()=>[p(m(f.description),1)]),content:a(()=>[i(r,{value:f},null,8,["value"])]),_:2},1024)])]),"not-found":a(()=>[i(l,null,{default:a(()=>[p(m(e.$t("titles.not-found")),1)]),_:1}),i(k,{class:"message","mt-2":"",severity:"warn"},{default:a(()=>[p(m(e.$t("messages.content-not-found")),1)]),_:1}),i(v,{class:"card","select-none":""},{subtitle:a(()=>[i(D,{href:"/"},{default:a(()=>[w(i(y,{label:e.$t("actions.go-home")},null,8,["label"]),[[C]])]),_:1}),s[1]||(s[1]=p("  ")),w(i(y,{label:e.$t("actions.go-back"),onClick:s[0]||(s[0]=f=>o())},null,8,["label"]),[[C]]),i(K)]),content:a(()=>[p(m(e.$t("messages.content-page.not-found")),1)]),_:1})]),_:1})}}}),Be=R(ge,[["__scopeId","data-v-923e2686"]]);export{Be as default};
