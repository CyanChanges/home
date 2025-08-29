import{T as E,_ as M}from"./CSlKb900.js";import{u as L,s as R,m as V,f as q,k as H,l as J,c as F}from"./CizUMjxh.js";import{B as P,s as j,R as T,t as G}from"./C2W49t-Q.js";import{s as Q}from"./D0rG25Cv.js";import{M as l,D as d,E as t,B as h,C as v,A as c,P as z,H as U,I as W,J as r,L as k,N as $,a2 as X,K as Y,d as Z,aa as ee,u as f,y as m,O as g}from"./YdqC_Kqx.js";import{t as u,n as ne}from"./SO8p1qhc.js";import{q as oe}from"./CWgz_v4z.js";import"./C6w0QBRd.js";import"./Cix6dcvq.js";import"./B3jcX63a.js";function se(n=L()){var o;return(o=n.ssrContext)==null?void 0:o.event}var te=function(o){var e=o.dt;return`
.p-chip {
    display: inline-flex;
    align-items: center;
    background: `.concat(e("chip.background"),`;
    color: `).concat(e("chip.color"),`;
    border-radius: `).concat(e("chip.border.radius"),`;
    padding-block: `).concat(e("chip.padding.y"),`;
    padding-inline: `).concat(e("chip.padding.x"),`;
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
    margin-inline-start: calc(-1 * `).concat(e("chip.padding.y"),`);
}

.p-chip:has(.p-chip-remove-icon) {
    padding-inline-end: `).concat(e("chip.padding.y"),`;
}

.p-chip:has(.p-chip-image) {
    padding-block-start: calc(`).concat(e("chip.padding.y"),` / 2);
    padding-block-end: calc(`).concat(e("chip.padding.y"),` / 2);
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
`)},ce={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},ae=P.extend({name:"chip",theme:te,classes:ce}),ie={name:"BaseChip",extends:j,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:ae,provide:function(){return{$pcChip:this,$parentInstance:this}}},_={name:"Chip",extends:ie,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(o){(o.key==="Enter"||o.key==="Backspace")&&this.close(o)},close:function(o){this.visible=!1,this.$emit("remove",o)}},components:{TimesCircleIcon:R}},re=["aria-label"],le=["src"];function me(n,o,e,s,a,i){return a.visible?(t(),l("div",c({key:0,class:n.cx("root"),"aria-label":n.label},n.ptmi("root")),[h(n.$slots,"default",{},function(){return[n.image?(t(),l("img",c({key:0,src:n.image},n.ptm("image"),{class:n.cx("image")}),null,16,le)):n.$slots.icon?(t(),v(z(n.$slots.icon),c({key:1,class:n.cx("icon")},n.ptm("icon")),null,16,["class"])):n.icon?(t(),l("span",c({key:2,class:[n.cx("icon"),n.icon]},n.ptm("icon")),null,16)):d("",!0),n.label?(t(),l("div",c({key:3,class:n.cx("label")},n.ptm("label")),u(n.label),17)):d("",!0)]}),n.removable?h(n.$slots,"removeicon",{key:0,removeCallback:i.close,keydownCallback:i.onKeydown},function(){return[(t(),v(z(n.removeIcon?"span":"TimesCircleIcon"),c({class:[n.cx("removeIcon"),n.removeIcon],onClick:i.close,onKeydown:i.onKeydown},n.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):d("",!0)],16,re)):d("",!0)}_.render=me;var pe=function(o){var e=o.dt;return`
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
    margin-inline-start: auto;
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

.p-message-info.p-message-outlined {
    color: `).concat(e("message.info.outlined.color"),`;
    outline-color: `).concat(e("message.info.outlined.border.color"),`;
}

.p-message-info.p-message-simple {
    color: `).concat(e("message.info.simple.color"),`;
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

.p-message-success.p-message-outlined {
    color: `).concat(e("message.success.outlined.color"),`;
    outline-color: `).concat(e("message.success.outlined.border.color"),`;
}

.p-message-success.p-message-simple {
    color: `).concat(e("message.success.simple.color"),`;
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

.p-message-warn.p-message-outlined {
    color: `).concat(e("message.warn.outlined.color"),`;
    outline-color: `).concat(e("message.warn.outlined.border.color"),`;
}

.p-message-warn.p-message-simple {
    color: `).concat(e("message.warn.simple.color"),`;
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

.p-message-error.p-message-outlined {
    color: `).concat(e("message.error.outlined.color"),`;
    outline-color: `).concat(e("message.error.outlined.border.color"),`;
}

.p-message-error.p-message-simple {
    color: `).concat(e("message.error.simple.color"),`;
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

.p-message-secondary.p-message-outlined {
    color: `).concat(e("message.secondary.outlined.color"),`;
    outline-color: `).concat(e("message.secondary.outlined.border.color"),`;
}

.p-message-secondary.p-message-simple {
    color: `).concat(e("message.secondary.simple.color"),`;
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

.p-message-contrast.p-message-outlined {
    color: `).concat(e("message.contrast.outlined.color"),`;
    outline-color: `).concat(e("message.contrast.outlined.border.color"),`;
}

.p-message-contrast.p-message-simple {
    color: `).concat(e("message.contrast.simple.color"),`;
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

.p-message-sm .p-message-content {
    padding: `).concat(e("message.content.sm.padding"),`;
}

.p-message-sm .p-message-text {
    font-size: `).concat(e("message.text.sm.font.size"),`;
}

.p-message-sm .p-message-icon {
    font-size: `).concat(e("message.icon.sm.size"),`;
    width: `).concat(e("message.icon.sm.size"),`;
    height: `).concat(e("message.icon.sm.size"),`;
}

.p-message-sm .p-message-close-icon {
    font-size: `).concat(e("message.close.icon.sm.size"),`;
    width: `).concat(e("message.close.icon.sm.size"),`;
    height: `).concat(e("message.close.icon.sm.size"),`;
}

.p-message-lg .p-message-content {
    padding: `).concat(e("message.content.lg.padding"),`;
}

.p-message-lg .p-message-text {
    font-size: `).concat(e("message.text.lg.font.size"),`;
}

.p-message-lg .p-message-icon {
    font-size: `).concat(e("message.icon.lg.size"),`;
    width: `).concat(e("message.icon.lg.size"),`;
    height: `).concat(e("message.icon.lg.size"),`;
}

.p-message-lg .p-message-close-icon {
    font-size: `).concat(e("message.close.icon.lg.size"),`;
    width: `).concat(e("message.close.icon.lg.size"),`;
    height: `).concat(e("message.close.icon.lg.size"),`;
}

.p-message-outlined {
    background: transparent;
    outline-width: `).concat(e("message.outlined.border.width"),`;
}

.p-message-simple {
    background: transparent;
    outline-color: transparent;
    box-shadow: none;
}

.p-message-simple .p-message-content {
    padding: `).concat(e("message.simple.content.padding"),`;
}

.p-message-outlined .p-message-close-button:hover,
.p-message-simple .p-message-close-button:hover {
    background: transparent;
}
`)},ge={root:function(o){var e=o.props;return["p-message p-component p-message-"+e.severity,{"p-message-outlined":e.variant==="outlined","p-message-simple":e.variant==="simple","p-message-sm":e.size==="small","p-message-lg":e.size==="large"}]},content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},ue=P.extend({name:"message",theme:pe,classes:ge}),de={name:"BaseMessage",extends:j,props:{severity:{type:String,default:"info"},closable:{type:Boolean,default:!1},life:{type:Number,default:null},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null},size:{type:String,default:null},variant:{type:String,default:null}},style:ue,provide:function(){return{$pcMessage:this,$parentInstance:this}}},x={name:"Message",extends:de,inheritAttrs:!1,emits:["close","life-end"],timeout:null,data:function(){return{visible:!0}},mounted:function(){var o=this;this.life&&setTimeout(function(){o.visible=!1,o.$emit("life-end")},this.life)},methods:{close:function(o){this.visible=!1,this.$emit("close",o)}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{ripple:T},components:{TimesIcon:V}};function y(n){"@babel/helpers - typeof";return y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},y(n)}function O(n,o){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);o&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),e.push.apply(e,s)}return e}function B(n){for(var o=1;o<arguments.length;o++){var e=arguments[o]!=null?arguments[o]:{};o%2?O(Object(e),!0).forEach(function(s){be(n,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):O(Object(e)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(e,s))})}return n}function be(n,o,e){return(o=fe(o))in n?Object.defineProperty(n,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[o]=e,n}function fe(n){var o=he(n,"string");return y(o)=="symbol"?o:o+""}function he(n,o){if(y(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var s=e.call(n,o);if(y(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(n)}var ve=["aria-label"];function ye(n,o,e,s,a,i){var p=U("TimesIcon"),b=W("ripple");return t(),v(Y,c({name:"p-message",appear:""},n.ptmi("transition")),{default:r(function(){return[k($("div",c({class:n.cx("root"),role:"alert","aria-live":"assertive","aria-atomic":"true"},n.ptm("root")),[n.$slots.container?h(n.$slots,"container",{key:0,closeCallback:i.close}):(t(),l("div",c({key:1,class:n.cx("content")},n.ptm("content")),[h(n.$slots,"icon",{class:ne(n.cx("icon"))},function(){return[(t(),v(z(n.icon?"span":null),c({class:[n.cx("icon"),n.icon]},n.ptm("icon")),null,16,["class"]))]}),n.$slots.default?(t(),l("div",c({key:0,class:n.cx("text")},n.ptm("text")),[h(n.$slots,"default")],16)):d("",!0),n.closable?k((t(),l("button",c({key:1,class:n.cx("closeButton"),"aria-label":i.closeAriaLabel,type:"button",onClick:o[0]||(o[0]=function(w){return i.close(w)})},B(B({},n.closeButtonProps),n.ptm("closeButton"))),[h(n.$slots,"closeicon",{},function(){return[n.closeIcon?(t(),l("i",c({key:0,class:[n.cx("closeIcon"),n.closeIcon]},n.ptm("closeIcon")),null,16)):(t(),v(p,c({key:1,class:[n.cx("closeIcon"),n.closeIcon]},n.ptm("closeIcon")),null,16,["class"]))]})],16,ve)),[[b]]):d("",!0)],16))],16),[[X,a.visible]])]}),_:3},16)}x.render=ye;const we={key:0},ke={class:"content-doc"},ze={key:1},$e=Z({__name:"[...slug]",async setup(n){let o,e;const{path:s}=q();se();const a=([o,e]=ee(()=>oe("content").path(s).first().catch(()=>{})),o=await o,e(),o);H({meta:[{name:"fediverse:creator",content:"@CyanChanges@mastodon.social"}]});function i(){history.back()}return(p,b)=>{const w=E,D=M,C=G,K=x,S=_,N=J,A=Q,I=T;return f(a)?(t(),l("div",we,[m(w,null,{default:r(()=>[g(u(f(a).title),1)]),_:1}),$("article",null,[m(C,{class:"content-card"},{title:r(()=>[g(u(f(a).title),1)]),subtitle:r(()=>[g(u(f(a).description),1)]),content:r(()=>[$("span",ke,[f(a)?(t(),v(D,{key:0,value:f(a)},null,8,["value"])):d("",!0)])]),_:1})])])):(t(),l("div",ze,[m(w,null,{default:r(()=>[g(u(p.$t("titles.not-found")),1)]),_:1}),m(K,{class:"message","mt-2":"",severity:"warn"},{default:r(()=>[g(u(p.$t("messages.content-not-found")),1)]),_:1}),m(C,{class:"card","select-none":""},{subtitle:r(()=>[m(N,{href:"/"},{default:r(()=>[k(m(S,{label:p.$t("actions.go-home")},null,8,["label"]),[[I]])]),_:1}),b[1]||(b[1]=g("  ")),k(m(S,{label:p.$t("actions.go-back"),onClick:b[0]||(b[0]=Ce=>i())},null,8,["label"]),[[I]]),m(A)]),content:r(()=>[g(u(p.$t("messages.content-page.not-found")),1)]),_:1})]))}}}),Ke=F($e,[["__scopeId","data-v-2d3df200"]]);export{Ke as default};
