import{i as Ve,as as se,r as Q,c as f,x as te,o as We,bm as Re,P as Be,R as Ke,h as c,a0 as fe,$ as Ue,bk as ze,L as X,a2 as Ge,g as ge,bh as Xe,bn as ve,A as ne,ae as ce,af as _e,w as W,v as Ye,aO as Je,aP as Ze,U as Pe,S as pe,bo as et,X as Ae,ab as tt,W as nt,ad as at,Y as ot,ah as lt,O as Ce,bp as it,D as rt,E as ut,j as st,H as ct,I as p,d as ee,aU as dt,l as qe,N as Ie,aD as ft,Q as vt,J as ke,K as gt,aE as ht}from"./index.9064dca0.js";import{Q as bt}from"./QResizeObserver.848d7a31.js";import{r as mt}from"./rtl.b51694b1.js";import{Q as Tt}from"./QItem.7e85d6fc.js";import{Q as de}from"./QItemSection.23f94e4f.js";import{Q as Le}from"./QItemLabel.e16792cc.js";import{Q as yt}from"./QImg.504e59d7.js";let St=0;const wt=["click","keydown"],xt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${St++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function _t(e,w,m,u){const o=Ve(Re,se);if(o===se)return console.error("QTab/QRouteTab component needs to be child of QTabs"),se;const{proxy:v}=ge(),b=Q(null),x=Q(null),_=Q(null),O=f(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),I=f(()=>o.currentModel.value===e.name),k=f(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(I.value===!0?" q-tab--active"+(o.tabProps.value.activeClass?" "+o.tabProps.value.activeClass:"")+(o.tabProps.value.activeColor?` text-${o.tabProps.value.activeColor}`:"")+(o.tabProps.value.activeBgColor?` bg-${o.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&o.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||o.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(u!==void 0?u.linkClass.value:"")),T=f(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(o.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),C=f(()=>e.disable===!0||o.hasFocus.value===!0||I.value===!1&&o.hasActiveTab.value===!0?-1:e.tabindex||0);function P(r,L){if(L!==!0&&b.value!==null&&b.value.focus(),e.disable===!0){u!==void 0&&u.hasRouterLink.value===!0&&fe(r);return}if(u===void 0){o.updateModel({name:e.name}),m("click",r);return}if(u.hasRouterLink.value===!0){const R=(S={})=>{let M;const E=S.to===void 0||Xe(S.to,e.to)===!0?o.avoidRouteWatcher=ve():null;return u.navigateToRouterLink(r,{...S,returnRouterError:!0}).catch(D=>{M=D}).then(D=>{if(E===o.avoidRouteWatcher&&(o.avoidRouteWatcher=!1,M===void 0&&(D===void 0||D.message.startsWith("Avoided redundant navigation")===!0)&&o.updateModel({name:e.name})),S.returnRouterError===!0)return M!==void 0?Promise.reject(M):D})};m("click",r,R),r.defaultPrevented!==!0&&R();return}m("click",r)}function l(r){Ue(r,[13,32])?P(r,!0):ze(r)!==!0&&r.keyCode>=35&&r.keyCode<=40&&r.altKey!==!0&&r.metaKey!==!0&&o.onKbdNavigate(r.keyCode,v.$el)===!0&&fe(r),m("keydown",r)}function y(){const r=o.tabProps.value.narrowIndicator,L=[],R=c("div",{ref:_,class:["q-tab__indicator",o.tabProps.value.indicatorClass]});e.icon!==void 0&&L.push(c(X,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&L.push(c("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&L.push(e.alertIcon!==void 0?c(X,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):c("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),r===!0&&L.push(R);const S=[c("div",{class:"q-focus-helper",tabindex:-1,ref:b}),c("div",{class:T.value},Ge(w.default,L))];return r===!1&&S.push(R),S}const q={name:f(()=>e.name),rootRef:x,tabIndicatorRef:_,routeData:u};te(()=>{o.unregisterTab(q)}),We(()=>{o.registerTab(q)});function A(r,L){const R={ref:x,class:k.value,tabindex:C.value,role:"tab","aria-selected":I.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:P,onKeydown:l,...L};return Be(c(r,R,y()),[[Ke,O.value]])}return{renderTab:A,$tabs:o}}var Ot=ne({name:"QTab",props:xt,emits:wt,setup(e,{slots:w,emit:m}){const{renderTab:u}=_t(e,w,m);return()=>u("div")}});function Ct(e,w,m){const u=m===!0?["left","right"]:["top","bottom"];return`absolute-${w===!0?u[0]:u[1]}${e?` text-${e}`:""}`}const qt=["left","center","right","justify"];var Dt=ne({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>qt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:w,emit:m}){const{proxy:u}=ge(),{$q:o}=u,{registerTick:v}=ce(),{registerTick:b}=ce(),{registerTick:x}=ce(),{registerTimeout:_,removeTimeout:O}=_e(),{registerTimeout:I,removeTimeout:k}=_e(),T=Q(null),C=Q(null),P=Q(e.modelValue),l=Q(!1),y=Q(!0),q=Q(!1),A=Q(!1),r=[],L=Q(0),R=Q(!1);let S=null,M=null,E;const D=f(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Ct(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),ae=f(()=>{const t=L.value,n=P.value;for(let i=0;i<t;i++)if(r[i].name.value===n)return!0;return!1}),J=f(()=>`q-tabs__content--align-${l.value===!0?"left":A.value===!0?"justify":e.align}`),oe=f(()=>`q-tabs row no-wrap items-center q-tabs--${l.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),le=f(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+J.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),K=f(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),U=f(()=>e.vertical!==!0&&o.lang.rtl===!0),Y=f(()=>mt===!1&&U.value===!0);W(U,G),W(()=>e.modelValue,t=>{a({name:t,setCurrent:!0,skipEmit:!0})}),W(()=>e.outsideArrows,$);function a({name:t,setCurrent:n,skipEmit:i}){P.value!==t&&(i!==!0&&e["onUpdate:modelValue"]!==void 0&&m("update:modelValue",t),(n===!0||e["onUpdate:modelValue"]===void 0)&&(ie(P.value,t),P.value=t))}function $(){v(()=>{F({width:T.value.offsetWidth,height:T.value.offsetHeight})})}function F(t){if(K.value===void 0||C.value===null)return;const n=t[K.value.container],i=Math.min(C.value[K.value.scroll],Array.prototype.reduce.call(C.value.children,(h,d)=>h+(d[K.value.content]||0),0)),g=n>0&&i>n;l.value=g,g===!0&&b(G),A.value=n<parseInt(e.breakpoint,10)}function ie(t,n){const i=t!=null&&t!==""?r.find(h=>h.name.value===t):null,g=n!=null&&n!==""?r.find(h=>h.name.value===n):null;if(i&&g){const h=i.tabIndicatorRef.value,d=g.tabIndicatorRef.value;S!==null&&(clearTimeout(S),S=null),h.style.transition="none",h.style.transform="none",d.style.transition="none",d.style.transform="none";const s=h.getBoundingClientRect(),B=d.getBoundingClientRect();d.style.transform=e.vertical===!0?`translate3d(0,${s.top-B.top}px,0) scale3d(1,${B.height?s.height/B.height:1},1)`:`translate3d(${s.left-B.left}px,0,0) scale3d(${B.width?s.width/B.width:1},1,1)`,x(()=>{S=setTimeout(()=>{S=null,d.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",d.style.transform="none"},70)})}g&&l.value===!0&&z(g.rootRef.value)}function z(t){const{left:n,width:i,top:g,height:h}=C.value.getBoundingClientRect(),d=t.getBoundingClientRect();let s=e.vertical===!0?d.top-g:d.left-n;if(s<0){C.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(s),G();return}s+=e.vertical===!0?d.height-h:d.width-i,s>0&&(C.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(s),G())}function G(){const t=C.value;if(t===null)return;const n=t.getBoundingClientRect(),i=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);U.value===!0?(y.value=Math.ceil(i+n.width)<t.scrollWidth-1,q.value=i>0):(y.value=i>0,q.value=e.vertical===!0?Math.ceil(i+n.height)<t.scrollHeight:Math.ceil(i+n.width)<t.scrollWidth)}function he(t){M!==null&&clearInterval(M),M=setInterval(()=>{Me(t)===!0&&j()},5)}function be(){he(Y.value===!0?Number.MAX_SAFE_INTEGER:0)}function me(){he(Y.value===!0?0:Number.MAX_SAFE_INTEGER)}function j(){M!==null&&(clearInterval(M),M=null)}function $e(t,n){const i=Array.prototype.filter.call(C.value.children,B=>B===n||B.matches&&B.matches(".q-tab.q-focusable")===!0),g=i.length;if(g===0)return;if(t===36)return z(i[0]),i[0].focus(),!0;if(t===35)return z(i[g-1]),i[g-1].focus(),!0;const h=t===(e.vertical===!0?38:37),d=t===(e.vertical===!0?40:39),s=h===!0?-1:d===!0?1:void 0;if(s!==void 0){const B=U.value===!0?-1:1,H=i.indexOf(n)+s*B;return H>=0&&H<g&&(z(i[H]),i[H].focus({preventScroll:!0})),!0}}const Qe=f(()=>Y.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,n)=>{t.scrollLeft=-n}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,n)=>{t.scrollTop=n}}:{get:t=>t.scrollLeft,set:(t,n)=>{t.scrollLeft=n}});function Me(t){const n=C.value,{get:i,set:g}=Qe.value;let h=!1,d=i(n);const s=t<d?-1:1;return d+=s*5,d<0?(h=!0,d=0):(s===-1&&d<=t||s===1&&d>=t)&&(h=!0,d=t),g(n,d),G(),h}function Te(t,n){for(const i in t)if(t[i]!==n[i])return!1;return!0}function Ee(){let t=null,n={matchedLen:0,queryDiff:9999,hrefLen:0};const i=r.filter(s=>s.routeData!==void 0&&s.routeData.hasRouterLink.value===!0),{hash:g,query:h}=u.$route,d=Object.keys(h).length;for(const s of i){const B=s.routeData.exact.value===!0;if(s.routeData[B===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:H,query:re,matched:Ne,href:Fe}=s.routeData.resolvedLink.value,ue=Object.keys(re).length;if(B===!0){if(H!==g||ue!==d||Te(h,re)===!1)continue;t=s.name.value;break}if(H!==""&&H!==g||ue!==0&&Te(re,h)===!1)continue;const N={matchedLen:Ne.length,queryDiff:d-ue,hrefLen:Fe.length-H.length};if(N.matchedLen>n.matchedLen){t=s.name.value,n=N;continue}else if(N.matchedLen!==n.matchedLen)continue;if(N.queryDiff<n.queryDiff)t=s.name.value,n=N;else if(N.queryDiff!==n.queryDiff)continue;N.hrefLen>n.hrefLen&&(t=s.name.value,n=N)}t===null&&r.some(s=>s.routeData===void 0&&s.name.value===P.value)===!0||a({name:t,setCurrent:!0})}function Oe(t){if(O(),R.value!==!0&&T.value!==null&&t.target&&typeof t.target.closest=="function"){const n=t.target.closest(".q-tab");n&&T.value.contains(n)===!0&&(R.value=!0,l.value===!0&&z(n))}}function De(){_(()=>{R.value=!1},30)}function Z(){Se.avoidRouteWatcher===!1?I(Ee):k()}function ye(){if(E===void 0){const t=W(()=>u.$route.fullPath,Z);E=()=>{t(),E=void 0}}}function He(t){r.push(t),L.value++,$(),t.routeData===void 0||u.$route===void 0?I(()=>{if(l.value===!0){const n=P.value,i=n!=null&&n!==""?r.find(g=>g.name.value===n):null;i&&z(i.rootRef.value)}}):(ye(),t.routeData.hasRouterLink.value===!0&&Z())}function je(t){r.splice(r.indexOf(t),1),L.value--,$(),E!==void 0&&t.routeData!==void 0&&(r.every(n=>n.routeData===void 0)===!0&&E(),Z())}const Se={currentModel:P,tabProps:D,hasFocus:R,hasActiveTab:ae,registerTab:He,unregisterTab:je,verifyRouteModel:Z,updateModel:a,onKbdNavigate:$e,avoidRouteWatcher:!1};Ye(Re,Se);function we(){S!==null&&clearTimeout(S),j(),E!==void 0&&E()}let xe;return te(we),Je(()=>{xe=E!==void 0,we()}),Ze(()=>{xe===!0&&ye(),$()}),()=>c("div",{ref:T,class:oe.value,role:"tablist",onFocusin:Oe,onFocusout:De},[c(bt,{onResize:F}),c("div",{ref:C,class:le.value,onScroll:G},Pe(w.default)),c(X,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(y.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||o.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:be,onTouchstartPassive:be,onMouseupPassive:j,onMouseleavePassive:j,onTouchendPassive:j}),c(X,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(q.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||o.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:me,onTouchstartPassive:me,onMouseupPassive:j,onMouseleavePassive:j,onTouchendPassive:j})])}}),It=ne({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:w,emit:m}){let u=!1,o,v,b=null,x=null,_,O;function I(){o&&o(),o=null,u=!1,b!==null&&(clearTimeout(b),b=null),x!==null&&(clearTimeout(x),x=null),v!==void 0&&v.removeEventListener("transitionend",_),_=null}function k(l,y,q){l.style.overflowY="hidden",y!==void 0&&(l.style.height=`${y}px`),l.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,u=!0,o=q}function T(l,y){l.style.overflowY=null,l.style.height=null,l.style.transition=null,I(),y!==O&&m(y)}function C(l,y){let q=0;v=l,u===!0?(I(),q=l.offsetHeight===l.scrollHeight?0:void 0):O="hide",k(l,q,y),b=setTimeout(()=>{b=null,l.style.height=`${l.scrollHeight}px`,_=A=>{x=null,(Object(A)!==A||A.target===l)&&T(l,"show")},l.addEventListener("transitionend",_),x=setTimeout(_,e.duration*1.1)},100)}function P(l,y){let q;v=l,u===!0?I():(O="show",q=l.scrollHeight),k(l,q,y),b=setTimeout(()=>{b=null,l.style.height=0,_=A=>{x=null,(Object(A)!==A||A.target===l)&&T(l,"hide")},l.addEventListener("transitionend",_),x=setTimeout(_,e.duration*1.1)},100)}return te(()=>{u===!0&&I()}),()=>c(pe,{css:!1,appear:e.appear,onEnter:C,onLeave:P},w.default)}});const V=et({}),kt=Object.keys(Ae);var Ht=ne({name:"QExpansionItem",props:{...Ae,...tt,...nt,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...at,"click","afterShow","afterHide"],setup(e,{slots:w,emit:m}){const{proxy:{$q:u}}=ge(),o=ot(e,u),v=Q(e.modelValue!==null?e.modelValue:e.defaultOpened),b=Q(null),x=ve(),{show:_,hide:O,toggle:I}=lt({showing:v});let k,T;const C=f(()=>`q-expansion-item q-item-type q-expansion-item--${v.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),P=f(()=>{if(e.contentInsetLevel===void 0)return null;const a=u.lang.rtl===!0?"Right":"Left";return{["padding"+a]:e.contentInsetLevel*56+"px"}}),l=f(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),y=f(()=>{const a={};return kt.forEach($=>{a[$]=e[$]}),a}),q=f(()=>l.value===!0||e.expandIconToggle!==!0),A=f(()=>e.expandedIcon!==void 0&&v.value===!0?e.expandedIcon:e.expandIcon||u.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),r=f(()=>e.disable!==!0&&(l.value===!0||e.expandIconToggle===!0)),L=f(()=>({expanded:v.value===!0,detailsId:e.targetUid,toggle:I,show:_,hide:O})),R=f(()=>{const a=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:u.lang.label[v.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":v.value===!0?"true":"false","aria-controls":x,"aria-label":a}});W(()=>e.group,a=>{T!==void 0&&T(),a!==void 0&&J()});function S(a){l.value!==!0&&I(a),m("click",a)}function M(a){a.keyCode===13&&E(a,!0)}function E(a,$){$!==!0&&b.value!==null&&b.value.focus(),I(a),fe(a)}function D(){m("afterShow")}function ae(){m("afterHide")}function J(){k===void 0&&(k=ve()),v.value===!0&&(V[e.group]=k);const a=W(v,F=>{F===!0?V[e.group]=k:V[e.group]===k&&delete V[e.group]}),$=W(()=>V[e.group],(F,ie)=>{ie===k&&F!==void 0&&F!==k&&O()});T=()=>{a(),$(),V[e.group]===k&&delete V[e.group],T=void 0}}function oe(){const a={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},$=[c(X,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&v.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:A.value})];return r.value===!0&&(Object.assign(a,{tabindex:0,...R.value,onClick:E,onKeyup:M}),$.unshift(c("div",{ref:b,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),c(de,a,()=>$)}function le(){let a;return w.header!==void 0?a=[].concat(w.header(L.value)):(a=[c(de,()=>[c(Le,{lines:e.labelLines},()=>e.label||""),e.caption?c(Le,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&a[e.switchToggleSide===!0?"push":"unshift"](c(de,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>c(X,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&a[e.switchToggleSide===!0?"unshift":"push"](oe()),a}function K(){const a={ref:"item",style:e.headerStyle,class:e.headerClass,dark:o.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return q.value===!0&&(a.clickable=!0,a.onClick=S,Object.assign(a,l.value===!0?y.value:R.value)),c(Tt,a,le)}function U(){return Be(c("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:P.value,id:x},Pe(w.default)),[[it,v.value]])}function Y(){const a=[K(),c(It,{duration:e.duration,onShow:D,onHide:ae},U)];return e.expandSeparator===!0&&a.push(c(Ce,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:o.value}),c(Ce,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:o.value})),a}return e.group!==void 0&&J(),te(()=>{T!==void 0&&T()}),()=>c("div",{class:C.value},[c("div",{class:"q-expansion-item__container relative-position"},Y())])}});const Lt={class:"text-subtitle1"},Rt=["innerHTML"],jt={__name:"GuideCard",props:{_id:{type:String,default:""},title:{type:String,default:""},subtitle:{type:String,default:""},description:{type:String,default:""},image:{type:String,default:""},sell:{type:Boolean,default:!1},category:{type:String,default:""},archive:{type:Boolean,default:!1}},setup(e){const w=e,m=rt(),{editArchive:u}=m,{archive:o}=ut(m),v=async()=>{await u(w._id)},b=f(()=>o.value.includes(w._id));return(x,_)=>(st(),ct(ht,null,{default:p(()=>[ee(dt,{class:"text-left"},{default:p(()=>[qe("div",Lt,Ie(e.subtitle),1),ee(yt,{src:e.image,width:"350px","full-height":""},null,8,["src"]),qe("div",{innerHTML:e.description},null,8,Rt)]),_:1}),ee(ft,{align:"center"},{default:p(()=>[ee(vt,{flat:"",color:"primary",icon:ke(b)?"bookmark":"bookmark_border",onClick:v},{default:p(()=>[gt(Ie(ke(b)?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF\u6587\u7AE0"),1)]),_:1},8,["icon"])]),_:1})]),_:1}))}};export{Dt as Q,jt as _,Ot as a,Ht as b};