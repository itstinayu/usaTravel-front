import{r as v,az as f,c as g,aF as x,j as r,k as i,d as t,O as n,l as e,I as d,aE as b,F as u,aK as y,J as k,aS as q,aJ as Q,Q as w}from"./index.a68d1e69.js";import{Q as A}from"./QPageScroller.45ed4a8d.js";import{u as P}from"./use-quasar.4092e40c.js";import{_ as V}from"./TicketCard.14170910.js";import"./QImg.b824f749.js";const B=e("h5",{class:"text-center q-pa-lg"}," \u9AD4\u9A57\u884C\u7A0B\u63A2\u7D22 ",-1),C={class:"row"},F={class:"col-lg-1 col-md-2 col-sm-4 col-xs-6"},O={class:"q-pa-md"},S={class:"fixed",style:{width:"150px"}},$=e("h6",{class:"q-pl-sm bg-primary text-white"}," \u7968\u5238\u985E\u5225\u7BE9\u9078 ",-1),E={class:"col-lg-11 col-md-10 col-sm-8 col-xs-6 q-pa-md"},J={class:"text-center"},N={class:"row q-col-gutter-md"},T={__name:"TicketsPage",setup(j){const p=P(),c=v([]),m=[{label:"\u666F\u9EDE",value:"\u666F\u9EDE"},{label:"\u6236\u5916\uFF06\u6D3B\u52D5",value:"\u6236\u5916\uFF06\u6D3B\u52D5"},{label:"\u6587\u5316\u9AD4\u9A57",value:"\u6587\u5316\u9AD4\u9A57"},{label:"\u5C55\u6F14\u6D3B\u52D5",value:"\u5C55\u6F14\u6D3B\u52D5"},{label:"\u65C5\u904A\u901A\u7968",value:"\u65C5\u904A\u901A\u7968"},{label:"\u884C\u7A0B",value:"\u884C\u7A0B"}],o=f([]),_=g(()=>c.value.length===0?o:o.filter(s=>c.value.includes(s.category))),h=s=>{const a=o.indexOf(s);o[a].productArchive=!o[a].productArchive};return(async()=>{try{const{data:s}=await x.get("/products");o.push(...s.result)}catch(s){console.log(s),p.notify({position:"center",color:"negative",message:"\u5931\u6557",icon:"check_circle",timeout:2e3})}})(),(s,a)=>(r(),i(u,null,[B,t(n,{inset:""}),e("div",C,[e("div",F,[e("div",O,[e("div",S,[$,t(b,{bordered:"",flat:"",style:{"border-radius":"0","border-color":"#88CAD9",height:"480px"}},{default:d(()=>[t(q,{modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=l=>c.value=l),options:m,type:"checkbox",class:"outlined q-pa-xs"},null,8,["modelValue"]),t(n,{inset:""})]),_:1})])])]),e("div",E,[e("div",J,[e("div",N,[(r(!0),i(u,null,y(k(_),l=>(r(),i("div",{key:l._id,class:"q-pa-md",cols:12,"sm-cols":6,"md-cols":4,"lg-cols":3},[t(V,Q(l,{onArchive:z=>h(l)}),null,16,["onArchive"])]))),128))])])])]),t(A,{position:"bottom-right","scroll-offset":150,offset:[18,18]},{default:d(()=>[t(w,{fab:"",icon:"keyboard_arrow_up",color:"accent"})]),_:1})],64))}};export{T as default};