import{r as w,D as k,E as x,G as y,j as d,H as n,I as a,d as e,Q as c,K as u,N as p,J as s,P as m,L as f,l as t,R as _}from"./index.47410ba5.js";import{Q as V}from"./QImg.0d6479e5.js";import{a as I,Q as L}from"./QToolbarTitle.2f644a1a.js";import{Q as T,_ as B}from"./statue-of-liberty.3b55f6a7.js";import{Q as C,a as D,b as N}from"./QLayout.81001317.js";import{Q as o}from"./QItemSection.c094a02f.js";import{Q as h}from"./QItem.fde5a9c2.js";import{Q as S}from"./QList.82a9c0bb.js";import{Q as H,a as P}from"./QDrawer.951176ab.js";import"./QResizeObserver.626535b7.js";import"./TouchPan.9796e142.js";import"./format.3e32b8d9.js";const R={class:"absolute-top bg-secondary",style:{height:"150px"}},U={class:"absolute-bottom bg-transparent q-pa-md",clickable:""},q=["src"],j=["title"],ee={__name:"UserLayout",setup(z){const l=w(!1),r=k(),{account:v,avatar:b}=x(r);return(A,i)=>{const g=y("router-view");return d(),n(C,{view:"hHh Lpr lff",container:"",style:{height:"1080px"},class:"overflow-hidden shadow-2 rounded-borders"},{default:a(()=>[e(D,{elevated:"",class:"primary"},{default:a(()=>[e(T,null,{default:a(()=>[e(c,{flat:"",onClick:i[0]||(i[0]=Q=>l.value=!l.value),round:"",dense:"",icon:"menu"}),e(c,{round:"",dense:"",flat:"",ripple:!1,size:"19px",color:"white",class:"q-mr-sm","no-caps":"",to:"/"},{default:a(()=>[e(V,{src:B,width:"48px",class:"logo"})]),_:1}),e(I,null,{default:a(()=>[u(p(s(r).account)+"\u7684\u6A94\u6848",1)]),_:1})]),_:1})]),_:1}),e(P,{modelValue:l.value,"onUpdate:modelValue":i[1]||(i[1]=Q=>l.value=Q),"show-if-above":"",width:200,breakpoint:400},{default:a(()=>[e(H,{style:{height:"calc(100% - 150px)","margin-top":"150px","border-right":"1px solid #ddd"}},{default:a(()=>[e(S,{padding:""},{default:a(()=>[m((d(),n(h,{clickable:"",to:"/user/cart"},{default:a(()=>[e(o,{avatar:""},{default:a(()=>[e(f,{name:"fa-solid fa-cart-shopping"})]),_:1}),e(o,null,{default:a(()=>[u(" \u6211\u7684\u8CFC\u7269\u8ECA ")]),_:1})]),_:1})),[[_]]),m((d(),n(h,{clickable:"",to:"/user/order"},{default:a(()=>[e(o,{avatar:""},{default:a(()=>[e(f,{name:"shopping_cart_checkout"})]),_:1}),e(o,null,{default:a(()=>[u(" \u6211\u7684\u8A02\u55AE ")]),_:1})]),_:1})),[[_]]),m((d(),n(h,{clickable:"",to:"/user/archive"},{default:a(()=>[e(o,{avatar:""},{default:a(()=>[e(f,{name:"bookmark"})]),_:1}),e(o,null,{default:a(()=>[u(" \u6211\u7684\u6536\u85CF ")]),_:1})]),_:1})),[[_]])]),_:1})]),_:1}),t("div",R,[t("div",U,[e(c,{round:"",clickable:"",to:"/user"},{default:a(()=>[t("img",{src:s(b)},null,8,q)]),_:1}),t("div",{class:"text-weight-bold",title:s(v)},[t("strong",null,p(s(r).account),1)],8,j),t("div",null,p(s(r).email),1)])])]),_:1},8,["modelValue"]),e(N,null,{default:a(()=>[e(L,{padding:""},{default:a(()=>[e(g)]),_:1})]),_:1})]),_:1})}}};export{ee as default};
