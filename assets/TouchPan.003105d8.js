import{bt as D,a9 as m,bu as w,av as X,bv as _,bw as Y,a4 as h,bx as y,a3 as M,bj as C,ak as g,a6 as b,a0 as F,a5 as P}from"./index.29c3d051.js";function E(a,r,o){const l=g(a);let e,t=l.left-r.event.x,i=l.top-r.event.y,u=Math.abs(t),s=Math.abs(i);const n=r.direction;n.horizontal===!0&&n.vertical!==!0?e=t<0?"left":"right":n.horizontal!==!0&&n.vertical===!0?e=i<0?"up":"down":n.up===!0&&i<0?(e="up",u>s&&(n.left===!0&&t<0?e="left":n.right===!0&&t>0&&(e="right"))):n.down===!0&&i>0?(e="down",u>s&&(n.left===!0&&t<0?e="left":n.right===!0&&t>0&&(e="right"))):n.left===!0&&t<0?(e="left",u<s&&(n.up===!0&&i<0?e="up":n.down===!0&&i>0&&(e="down"))):n.right===!0&&t>0&&(e="right",u<s&&(n.up===!0&&i<0?e="up":n.down===!0&&i>0&&(e="down")));let v=!1;if(e===void 0&&o===!1){if(r.event.isFirst===!0||r.event.lastDir===void 0)return{};e=r.event.lastDir,v=!0,e==="left"||e==="right"?(l.left-=t,u=0,t=0):(l.top-=i,s=0,i=0)}return{synthetic:v,payload:{evt:a,touch:r.event.mouse!==!0,mouse:r.event.mouse===!0,position:l,direction:e,isFirst:r.event.isFirst,isFinal:o===!0,duration:Date.now()-r.event.time,distance:{x:u,y:s},offset:{x:t,y:i},delta:{x:l.left-r.event.lastX,y:l.top-r.event.lastY}}}}let S=0;var k=D({name:"touch-pan",beforeMount(a,{value:r,modifiers:o}){if(o.mouse!==!0&&m.has.touch!==!0)return;function l(t,i){o.mouse===!0&&i===!0?F(t):(o.stop===!0&&C(t),o.prevent===!0&&M(t))}const e={uid:"qvtp_"+S++,handler:r,modifiers:o,direction:w(o),noop:X,mouseStart(t){_(t,e)&&Y(t)&&(h(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(t,!0))},touchStart(t){if(_(t,e)){const i=t.target;h(e,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","passiveCapture"],[i,"touchend","end","passiveCapture"]]),e.start(t)}},start(t,i){if(m.is.firefox===!0&&y(a,!0),e.lastEvt=t,i===!0||o.stop===!0){if(e.direction.all!==!0&&(i!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const n=t.type.indexOf("mouse")>-1?new MouseEvent(t.type,t):new TouchEvent(t.type,t);t.defaultPrevented===!0&&M(n),t.cancelBubble===!0&&C(n),Object.assign(n,{qKeyEvent:t.qKeyEvent,qClickOutside:t.qClickOutside,qAnchorHandled:t.qAnchorHandled,qClonedBy:t.qClonedBy===void 0?[e.uid]:t.qClonedBy.concat(e.uid)}),e.initialEvent={target:t.target,event:n}}C(t)}const{left:u,top:s}=g(t);e.event={x:u,y:s,time:Date.now(),mouse:i===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:u,lastY:s}},move(t){if(e.event===void 0)return;const i=g(t),u=i.left-e.event.x,s=i.top-e.event.y;if(u===0&&s===0)return;e.lastEvt=t;const n=e.event.mouse===!0,v=()=>{l(t,n);let d;o.preserveCursor!==!0&&o.preservecursor!==!0&&(d=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),n===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),P(),e.styleCleanup=p=>{if(e.styleCleanup=void 0,d!==void 0&&(document.documentElement.style.cursor=d),document.body.classList.remove("non-selectable"),n===!0){const q=()=>{document.body.classList.remove("no-pointer-events--children")};p!==void 0?setTimeout(()=>{q(),p()},50):q()}else p!==void 0&&p()}};if(e.event.detected===!0){e.event.isFirst!==!0&&l(t,e.event.mouse);const{payload:d,synthetic:p}=E(t,e,!1);d!==void 0&&(e.handler(d)===!1?e.end(t):(e.styleCleanup===void 0&&e.event.isFirst===!0&&v(),e.event.lastX=d.position.left,e.event.lastY=d.position.top,e.event.lastDir=p===!0?void 0:d.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||n===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){v(),e.event.detected=!0,e.move(t);return}const c=Math.abs(u),f=Math.abs(s);c!==f&&(e.direction.horizontal===!0&&c>f||e.direction.vertical===!0&&c<f||e.direction.up===!0&&c<f&&s<0||e.direction.down===!0&&c<f&&s>0||e.direction.left===!0&&c>f&&u<0||e.direction.right===!0&&c>f&&u>0?(e.event.detected=!0,e.move(t)):e.end(t,!0))},end(t,i){if(e.event!==void 0){if(b(e,"temp"),m.is.firefox===!0&&y(a,!1),i===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(E(t===void 0?e.lastEvt:t,e).payload);const{payload:u}=E(t===void 0?e.lastEvt:t,e,!0),s=()=>{e.handler(u)};e.styleCleanup!==void 0?e.styleCleanup(s):s()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(a.__qtouchpan=e,o.mouse===!0){const t=o.mouseCapture===!0||o.mousecapture===!0?"Capture":"";h(e,"main",[[a,"mousedown","mouseStart",`passive${t}`]])}m.has.touch===!0&&h(e,"main",[[a,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[a,"touchmove","noop","notPassiveCapture"]])},updated(a,r){const o=a.__qtouchpan;o!==void 0&&(r.oldValue!==r.value&&(typeof value!="function"&&o.end(),o.handler=r.value),o.direction=w(r.modifiers))},beforeUnmount(a){const r=a.__qtouchpan;r!==void 0&&(r.event!==void 0&&r.end(),b(r,"main"),b(r,"temp"),m.is.firefox===!0&&y(a,!1),r.styleCleanup!==void 0&&r.styleCleanup(),delete a.__qtouchpan)}});export{k as T};