import{A as s,bD as o,h as b,U as c,bE as P,W as i,bF as m,Y as v,bG as d,c as q,bc as D,g as k}from"./index.74850f66.js";var h=s({name:"QTabPanel",props:o,setup(a,{slots:e}){return()=>b("div",{class:"q-tab-panel",role:"tabpanel"},c(e.default))}}),C=s({name:"QTabPanels",props:{...P,...i},emits:m,setup(a,{slots:e}){const n=k(),t=v(a,n.proxy.$q),{updatePanelsList:r,getPanelContent:l,panelDirectives:p}=d(),u=q(()=>"q-tab-panels q-panel-parent"+(t.value===!0?" q-tab-panels--dark q-dark":""));return()=>(r(e),D("div",{class:u.value},l(),"pan",a.swipeable,()=>p.value))}});export{C as Q,h as a};