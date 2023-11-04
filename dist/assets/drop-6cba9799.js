import{m as E,V as L,a as T,b as q,c as k,d as M,e as z,f as m,g as v,h as S,i as P}from"./VTextField-b230d096.js";import{V as I}from"./VContainer-d4f366d3.js";import{p as D,g as G,u as U,e,m as w,f as H,I as C,h as J,i as A,j as Q,k as W,F as K,d as X,r as n,l as Y,n as Z,q as ee,w as a,o as le,a as l,s as R,t as _,v as te,x as ae,_ as oe}from"./index-2bbcf136.js";const ue=D({...E({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),F=G()({name:"VRadio",props:ue(),setup(t,r){let{slots:c}=r;return U(()=>e(L,w(t,{class:["v-radio",t.class],style:t.style,type:"radio"}),c)),{}}});const se=D({height:{type:[Number,String],default:"auto"},...T(),...H(q(),["multiple"]),trueIcon:{type:C,default:"$radioOn"},falseIcon:{type:C,default:"$radioOff"},type:{type:String,default:"radio"}},"VRadioGroup"),ne=G()({name:"VRadioGroup",inheritAttrs:!1,props:se(),emits:{"update:modelValue":t=>!0},setup(t,r){let{attrs:c,slots:d}=r;const p=J(),o=A(()=>t.id||`radio-group-${p}`),i=Q(t,"modelValue");return U(()=>{const[V,y]=W(c),[b,h]=k.filterProps(t),[x,$]=L.filterProps(t),u=d.label?d.label({label:t.label,props:{for:o.value}}):t.label;return e(k,w({class:["v-radio-group",t.class],style:t.style},V,b,{modelValue:i.value,"onUpdate:modelValue":g=>i.value=g,id:o.value}),{...d,default:g=>{let{id:s,messagesId:j,isDisabled:N,isReadonly:O}=g;return e(K,null,[u&&e(M,{id:s.value},{default:()=>[u]}),e(z,w(x,{id:s.value,"aria-describedby":j.value,defaultsTarget:"VRadio",trueIcon:t.trueIcon,falseIcon:t.falseIcon,type:t.type,disabled:N.value,readonly:O.value,"aria-labelledby":u?s.value:void 0,multiple:!1},y,{modelValue:i.value,"onUpdate:modelValue":B=>i.value=B}),d)])}})}),{}}}),f=t=>(te("data-v-26382cde"),t=t(),ae(),t),de={class:"text-h6"},ie=f(()=>l("thead",null,[l("tr",null,[l("th",{class:"text-left"}," アイテム "),l("th",{class:"text-left"}," ドロップ数 ")])],-1)),re=f(()=>l("td",null,"魔導書",-1)),ce={class:"text-right"},me=f(()=>l("td",null,"教科書",-1)),ve={class:"text-right"},_e=f(()=>l("td",null,"メモ帳",-1)),fe={class:"text-right"},pe=f(()=>l("td",null,"キャンディ",-1)),Ve={class:"text-right"},ye=f(()=>l("td",null,"マドル",-1)),ge={class:"text-right"},be=X({__name:"drop",setup(t){const r=n("normal"),c=n(0),d=n(0),p=n(0),o=A(()=>3*c.value+10*d.value+Number(p.value)),i=n(0),V=n(0),y=n(0),b=n(0),h=n(0),x=n(0);return Y(()=>{r.value=="normal"?(i.value=o.value*.05,V.value=o.value*.28,y.value=o.value*.84,b.value=o.value*.66,h.value=o.value*.1):(i.value=o.value*.2,V.value=o.value*.6,y.value=o.value*.9,b.value=o.value*.111,h.value=o.value*.066),x.value=o.value*250}),($,u)=>{const g=Z("v-simple-table");return le(),ee(K,null,[e(I,null,{default:a(()=>[e(m,null,{default:a(()=>[e(v,{class:"d-flex justify-center"},{default:a(()=>[l("div",null,[e(m,null,{default:a(()=>[e(v,{cols:"12"},{default:a(()=>[e(ne,{modelValue:r.value,"onUpdate:modelValue":u[0]||(u[0]=s=>r.value=s),inline:""},{default:a(()=>[e(F,{label:"通常",value:"normal"}),e(F,{label:"ドロップ率アップ",value:"up"})]),_:1},8,["modelValue"])]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1}),e(I,null,{default:a(()=>[e(m,null,{default:a(()=>[e(v,{class:"d-inline-flex justify-center"},{default:a(()=>[l("div",null,[e(S,{modelValue:c.value,"onUpdate:modelValue":u[1]||(u[1]=s=>c.value=s),label:"かけらS",type:"number",onKeydown:R(P),"hide-details":""},null,8,["modelValue","onKeydown"]),e(S,{modelValue:d.value,"onUpdate:modelValue":u[2]||(u[2]=s=>d.value=s),label:"かけらL",type:"number",onKeydown:R(P),"hide-details":""},null,8,["modelValue","onKeydown"]),e(S,{modelValue:p.value,"onUpdate:modelValue":u[3]||(u[3]=s=>p.value=s),label:"AP調整",type:"number",onKeydown:R(P),"hide-details":""},null,8,["modelValue","onKeydown"])])]),_:1})]),_:1})]),_:1}),e(I,null,{default:a(()=>[e(m,null,{default:a(()=>[e(v,{class:"d-flex justify-center"},{default:a(()=>[l("div",null,[e(m,null,{default:a(()=>[e(v,{cols:"12"},{default:a(()=>[l("p",de,"合計AP: "+_(o.value.toLocaleString()),1)]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1}),e(I,null,{default:a(()=>[e(m,null,{default:a(()=>[e(v,{class:"d-flex justify-center"},{default:a(()=>[l("div",null,[e(m,null,{default:a(()=>[e(v,{cols:"12"},{default:a(()=>[e(g,null,{default:a(()=>[ie,l("tbody",null,[l("tr",null,[re,l("td",ce,_(i.value.toLocaleString(void 0,{maximumFractionDigits:2})),1)]),l("tr",null,[me,l("td",ve,_(V.value.toLocaleString(void 0,{maximumFractionDigits:2})),1)]),l("tr",null,[_e,l("td",fe,_(y.value.toLocaleString(void 0,{maximumFractionDigits:2})),1)]),l("tr",null,[pe,l("td",Ve,_(h.value.toLocaleString(void 0,{maximumFractionDigits:2})),1)]),l("tr",null,[ye,l("td",ge,_(x.value.toLocaleString(void 0,{maximumFractionDigits:2})),1)])])]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1})],64)}}});const Se=oe(be,[["__scopeId","data-v-26382cde"]]);export{Se as default};
