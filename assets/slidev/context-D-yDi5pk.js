import{av as n,an as r,t as u,y as v,X as j,aw as $}from"../modules/vue-xv-SQV_k.js";import{h as p,A as x,a9 as l,i as C,z as S,w as R,x as T,v as k,aa as E,ab as F}from"../index-CwJNrDC_.js";function b(){const t=n(C),s=r(t,"nav"),a=n(S).value,e=r(a,"current"),i=n(R),c=n(T),o=n(l,{}),d=n(k,void 0),m=n(p,u(1)),f=n(x,v(()=>1));return{$slidev:t,$nav:s,$clicksContext:a,$clicks:e,$page:i,$route:d,$renderContext:c,$frontmatter:o,$scale:m,$zoom:f}}function L(t){var i,c;j(l,t);const{$slidev:s,$page:a}=b(),e=s.nav.slides.find(o=>o.no===a.value);if((c=(i=e==null?void 0:e.meta)==null?void 0:i.slide)!=null&&c.frontmatter){for(const o of Object.keys(e.meta.slide.frontmatter))o in t||delete e.meta.slide.frontmatter[o];Object.assign(e.meta.slide.frontmatter,t)}}function O(t,s){return{...$(t,s===0?E:F),frontmatter:t}}export{O as f,L as p,b as u};
