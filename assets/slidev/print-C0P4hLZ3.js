const __vite__fileDeps=["assets/slidev/DrawingPreview-DcRk-e3s.js","assets/modules/vue-xv-SQV_k.js","assets/index-CwJNrDC_.js","assets/modules/shiki-Czmbvv0G.js","assets/modules/shiki-BSchMNmt.css","assets/index-D-AzRQ-s.css","assets/slidev/PrintStyle-Cid8WyG2.js","assets/PrintStyle-DbIWt59F.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{d as _,y as a,L as F,X as q,J as M,o as l,b as r,l as d,A as e,i as A,c as h,g as m,h as B,F as v,Y as R,e as w,f as V,C as j,Z as z}from"../modules/vue-xv-SQV_k.js";import{t as G}from"../modules/shiki-Czmbvv0G.js";import{G as W,S as D,a as I,w as O,P as T}from"./PrintStyle-Cid8WyG2.js";import{s as X,a as g,_ as H,c as S,i as J,g as K,b as f,u as x,d as $,C as Y,e as N,f as k,p as Z,h as Q}from"../index-CwJNrDC_.js";const U=["id"],ee=_({__name:"PrintSlideClick",props:{nav:{type:Object,required:!0}},setup(c){const{nav:t}=c,n=a(()=>t.currentSlideRoute.value),s=a(()=>({height:`${X.value}px`,width:`${g.value}px`})),i=F();H(()=>import("./DrawingPreview-DcRk-e3s.js").then(o=>o.a),__vite__mapDeps([0,1,2,3,4,5,6,7])).then(o=>i.value=o.default);const u=a(()=>`${n.value.no.toString().padStart(3,"0")}-${(t.clicks.value+1).toString().padStart(2,"0")}`);return q(J,M({nav:t,configs:S,themeConfigs:a(()=>S.themeConfig)})),(o,y)=>(l(),r("div",{id:u.value,class:"print-slide-container",style:B(s.value)},[d(e(W)),d(D,{is:n.value.component,"clicks-context":o.nav.clicksContext.value,class:A(e(K)(n.value)),route:n.value},null,8,["is","clicks-context","class","route"]),i.value?(l(),h(e(i),{key:0,page:n.value.no},null,8,["page"])):m("v-if",!0),d(e(I))],12,U))}}),L=f(ee,[["__file","/home/runner/work/2023-modern-linux-cli-tools/2023-modern-linux-cli-tools/presentation/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),te=_({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(c){const{route:t}=c,{isPrintWithClicks:n}=x(),s=$(t,n.value?0:Y);return(i,u)=>(l(),r(v,null,[d(L,{"clicks-context":e(s),nav:e(N)(i.route,e(s))},null,8,["clicks-context","nav"]),e(n)?(l(),r(v,{key:0},[m(`
      clicks0.total can be any number >=0 when rendering.
      So total-clicksStart can be negative in intermediate states.
    `),(l(!0),r(v,null,R(Math.max(0,e(s).total-e(s).clicksStart),o=>(l(),h(L,{key:o,nav:e(N)(i.route,e($)(i.route,o+e(s).clicksStart))},null,8,["nav"]))),128))],64)):m("v-if",!0)],64))}}),ne=f(te,[["__file","/home/runner/work/2023-modern-linux-cli-tools/2023-modern-linux-cli-tools/presentation/node_modules/@slidev/client/internals/PrintSlide.vue"]]),se={id:"print-content"},le=_({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(c){const t=c,{slides:n,currentRoute:s}=x(),i=a(()=>t.width),u=a(()=>t.width/k.value),o=a(()=>i.value/u.value),y=a(()=>o.value<k.value?i.value/g.value:u.value*k.value/g.value);let p=n.value;s.value.query.range&&(p=Z(p.length,s.value.query.range).map(P=>p[P-1]));const E=a(()=>({"select-none":!S.selectable}));return q(Q,y),(C,P)=>(l(),r("div",{id:"print-container",class:A(E.value)},[w("div",se,[(l(!0),r(v,null,R(e(p),b=>(l(),h(ne,{key:b.no,route:b},null,8,["route"]))),128))]),V(C.$slots,"controls")],2))}}),ie=f(le,[["__file","/home/runner/work/2023-modern-linux-cli-tools/2023-modern-linux-cli-tools/presentation/node_modules/@slidev/client/internals/PrintContainer.vue"]]),oe={id:"page-root",class:"grid grid-cols-[1fr_max-content]"},ae=w("div",{id:"twoslash-container"},null,-1),re=_({__name:"print",setup(c){const{isPrintMode:t}=x();return j(()=>{t?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),z(()=>{G()}),(n,s)=>(l(),r(v,null,[e(t)?(l(),h(T,{key:0})):m("v-if",!0),w("div",oe,[d(ie,{class:"w-full h-full",style:B({background:"var(--slidev-slide-container-background, black)"}),width:e(O).width.value},null,8,["style","width"]),ae])],64))}}),pe=f(re,[["__file","/home/runner/work/2023-modern-linux-cli-tools/2023-modern-linux-cli-tools/presentation/node_modules/@slidev/client/pages/print.vue"]]);export{pe as default};