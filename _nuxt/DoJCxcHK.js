import{T,_ as R}from"./CY1G-2oc.js";import{u as A,s as D,f as E,k as V,m as q,l as L,c as M}from"./CebZZ-Lc.js";import{B as P,s as H,t as J,R as O}from"./C2W49t-Q.js";import{s as j}from"./D0rG25Cv.js";import{M as m,D as h,E as c,B as C,C as g,A as p,P as $,d as F,aa as G,u as d,y as t,N as w,J as i,O as s,L as B}from"./YdqC_Kqx.js";import{t as r}from"./SO8p1qhc.js";import{q as Q}from"./D1GMi3oN.js";import"./C6w0QBRd.js";import"./Cix6dcvq.js";import"./DLUNFMKZ.js";function U(e=A()){var o;return(o=e.ssrContext)==null?void 0:o.event}var W=function(o){var n=o.dt;return`
.p-chip {
    display: inline-flex;
    align-items: center;
    background: `.concat(n("chip.background"),`;
    color: `).concat(n("chip.color"),`;
    border-radius: `).concat(n("chip.border.radius"),`;
    padding-block: `).concat(n("chip.padding.y"),`;
    padding-inline: `).concat(n("chip.padding.x"),`;
    gap: `).concat(n("chip.gap"),`;
}

.p-chip-icon {
    color: `).concat(n("chip.icon.color"),`;
    font-size: `).concat(n("chip.icon.font.size"),`;
    width: `).concat(n("chip.icon.size"),`;
    height: `).concat(n("chip.icon.size"),`;
}

.p-chip-image {
    border-radius: 50%;
    width: `).concat(n("chip.image.width"),`;
    height: `).concat(n("chip.image.height"),`;
    margin-inline-start: calc(-1 * `).concat(n("chip.padding.y"),`);
}

.p-chip:has(.p-chip-remove-icon) {
    padding-inline-end: `).concat(n("chip.padding.y"),`;
}

.p-chip:has(.p-chip-image) {
    padding-block-start: calc(`).concat(n("chip.padding.y"),` / 2);
    padding-block-end: calc(`).concat(n("chip.padding.y"),` / 2);
}

.p-chip-remove-icon {
    cursor: pointer;
    font-size: `).concat(n("chip.remove.icon.size"),`;
    width: `).concat(n("chip.remove.icon.size"),`;
    height: `).concat(n("chip.remove.icon.size"),`;
    color: `).concat(n("chip.remove.icon.color"),`;
    border-radius: 50%;
    transition: outline-color `).concat(n("chip.transition.duration"),", box-shadow ").concat(n("chip.transition.duration"),`;
    outline-color: transparent;
}

.p-chip-remove-icon:focus-visible {
    box-shadow: `).concat(n("chip.remove.icon.focus.ring.shadow"),`;
    outline: `).concat(n("chip.remove.icon.focus.ring.width")," ").concat(n("chip.remove.icon.focus.ring.style")," ").concat(n("chip.remove.icon.focus.ring.color"),`;
    outline-offset: `).concat(n("chip.remove.icon.focus.ring.offset"),`;
}
`)},X={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},Y=P.extend({name:"chip",theme:W,classes:X}),Z={name:"BaseChip",extends:H,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:Y,provide:function(){return{$pcChip:this,$parentInstance:this}}},I={name:"Chip",extends:Z,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(o){(o.key==="Enter"||o.key==="Backspace")&&this.close(o)},close:function(o){this.visible=!1,this.$emit("remove",o)}},components:{TimesCircleIcon:D}},x=["aria-label"],ee=["src"];function ne(e,o,n,v,a,l){return a.visible?(c(),m("div",p({key:0,class:e.cx("root"),"aria-label":e.label},e.ptmi("root")),[C(e.$slots,"default",{},function(){return[e.image?(c(),m("img",p({key:0,src:e.image},e.ptm("image"),{class:e.cx("image")}),null,16,ee)):e.$slots.icon?(c(),g($(e.$slots.icon),p({key:1,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(c(),m("span",p({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):h("",!0),e.label?(c(),m("div",p({key:3,class:e.cx("label")},e.ptm("label")),r(e.label),17)):h("",!0)]}),e.removable?C(e.$slots,"removeicon",{key:0,removeCallback:l.close,keydownCallback:l.onKeydown},function(){return[(c(),g($(e.removeIcon?"span":"TimesCircleIcon"),p({class:[e.cx("removeIcon"),e.removeIcon],onClick:l.close,onKeydown:l.onKeydown},e.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):h("",!0)],16,x)):h("",!0)}I.render=ne;const oe={key:0},te={class:"content-doc"},ie={key:1},ce=F({__name:"[...slug]",async setup(e){let o,n;const{path:v}=E();U();const a=([o,n]=G(()=>Q("content").path(v).first().catch(()=>{})),o=await o,n(),o);V({meta:[{name:"fediverse:creator",content:"@CyanChanges@mastodon.social"}]});function l(){history.back()}return(u,f)=>{const y=T,z=R,b=J,S=q,k=I,N=L,K=j,_=O;return d(a)?(c(),m("div",oe,[t(y,null,{default:i(()=>[s(r(d(a).title),1)]),_:1}),w("article",null,[t(b,{class:"content-card"},{title:i(()=>[s(r(d(a).title),1)]),subtitle:i(()=>[s(r(d(a).description),1)]),content:i(()=>[w("span",te,[d(a)?(c(),g(z,{key:0,value:d(a)},null,8,["value"])):h("",!0)])]),_:1})])])):(c(),m("div",ie,[t(y,null,{default:i(()=>[s(r(u.$t("titles.not-found")),1)]),_:1}),t(S,{class:"message","mt-2":"",severity:"warn"},{default:i(()=>[s(r(u.$t("messages.content-not-found")),1)]),_:1}),t(b,{class:"card","select-none":""},{subtitle:i(()=>[t(N,{href:"/"},{default:i(()=>[B(t(k,{label:u.$t("actions.go-home")},null,8,["label"]),[[_]])]),_:1}),f[1]||(f[1]=s("  ")),B(t(k,{label:u.$t("actions.go-back"),onClick:f[0]||(f[0]=ae=>l())},null,8,["label"]),[[_]]),t(K)]),content:i(()=>[s(r(u.$t("messages.content-page.not-found")),1)]),_:1})]))}}}),ve=M(ce,[["__scopeId","data-v-2d3df200"]]);export{ve as default};
