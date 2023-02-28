import{E as j,r as u,o as L,bJ as k,j as O,k as z,l as d,d as p,I as y,bK as f,aN as F,K as h}from"./index.935239a9.js";import{Q as T}from"./QSelect.43100a3c.js";import{u as J}from"./map.2b6fff0e.js";import"./QItem.c6a964c6.js";import"./QItemSection.c5aeebf3.js";import"./QItemLabel.38ded7b9.js";import"./QMenu.965277bb.js";import"./rtl.b51694b1.js";import"./format.3e32b8d9.js";let E=null;const S="google-maps",q="https://maps.googleapis.com/maps/api/js?key=AIzaSyAPpJM81A8qvouficN1qEItH6vhWyu6Y3M&libraries=places&callback=initMap";function K(){return E||(E=new Promise((M,b)=>{if(document.getElementById(S)){console.error(`Error loading ${q} async: ${S} is not unique`);return}const i=document.createElement("script");i.src=q,i.async=!0,i.id=S,i.onload=()=>{M()},i.onerror=n=>{b(n)},document.body.appendChild(i)})),E}const H={ref:"place-name",class:"title"},Y=d("br",null,null,-1),Z={id:"place-address",ref:"place-address"},re={__name:"AutocompletePage",setup(M){const b=J(),{locations:i}=j(b),n=u("");let s=null;const P=u(null),U=u(null),C=u(null),$=u(null),x=u(null),c=u("\u9910\u5EF3"),I=u("\u5168\u90E8"),m={restaurants:[],hotels:[],attractions:[]},r={markers:[],windows:[]},B={restaurants:"https://cdn-icons-png.flaticon.com/24/2107/2107961.png",hotels:"https://cdn-icons-png.flaticon.com/24/10/10952.png",attractions:"https://cdn-icons-png.flaticon.com/24/9771/9771329.png"};L(async()=>{window.initMap=D,await K()});let w=null;const N=()=>{for(let l=0;l<r.markers.length;l++)r.markers[l].setMap(null),r.markers[l]=null,r.windows[l].close(),r.windows[l]=null;r.windows.length=0,r.markers.length=0},D=()=>{s=new window.google.maps.Map(U.value,{center:{lat:40.749933,lng:-73.98633},zoom:13,mapTypeControl:!1});const l={fields:["formatted_address","geometry","name"],strictBounds:!1,types:["establishment"]},t=new google.maps.places.Autocomplete(P.value.nativeEl,l);t.bindTo("bounds",s),w=new google.maps.InfoWindow;const e=C.value;$.value=e.querySelector(".title"),x.value=e.querySelector("#place-address"),w.setContent(e);const a=new google.maps.Marker({map:s,anchorPoint:new google.maps.Point(0,-29)});t.addListener("place_changed",()=>{w.close(),N(),a.setVisible(!1);const o=t.getPlace();if(!o.geometry||!o.geometry.location){window.alert("No details available for input: '"+o.name+"'");return}o.geometry.viewport?(s.fitBounds(o.geometry.viewport),A({south:o.geometry.viewport.getSouthWest().lat(),west:o.geometry.viewport.getSouthWest().lng(),north:o.geometry.viewport.getNorthEast().lat(),east:o.geometry.viewport.getNorthEast().lng()})):(s.setCenter(o.geometry.location),s.setZoom(17),A({south:o.geometry.location.lat()-.1,west:o.geometry.location.lng()-.1,north:o.geometry.location.lat()+.1,east:o.geometry.location.lng()+.1})),a.setPosition(o.geometry.location),a.setVisible(!0),$.value.textContent=o.name,x.value.textContent=o.formatted_address,w.open(s,a),t.setTypes([]),t.bindTo("bounds",s)})},_=l=>{var t,e,a;return[parseFloat(l.latitude),parseFloat(l.longitude),l.name,l.address,l.rating,l.num_reviews,(a=(e=(t=l.photo)==null?void 0:t.images)==null?void 0:e.small)==null?void 0:a.url]},A=async l=>{try{if(!l)return;const{south:t,west:e,north:a,east:o}=l,g=[k.get("/restaurants/list-in-boundary",{params:{bl_latitude:t,tr_latitude:a,bl_longitude:e,tr_longitude:o,limit:50,lang:"en_US",currency:"USD"}}),k.get("/hotels/list-in-boundary",{params:{bl_latitude:t,tr_latitude:a,bl_longitude:e,tr_longitude:o,limit:50,lang:"en_US",currency:"USD"}}),k.get("/attractions/list-in-boundary",{params:{bl_latitude:t,tr_latitude:a,bl_longitude:e,tr_longitude:o,limit:50,lang:"en_US",currency:"USD"}})],v=await Promise.all(g);m.restaurants=v[0].data.data.map(_),m.hotels=v[1].data.data.map(_),m.attractions=v[2].data.data.map(_),V()}catch(t){console.log(t)}},W=(l,t)=>(e,a)=>{const o=new google.maps.InfoWindow,g=new google.maps.Marker({position:{lat:e[0],lng:e[1]},map:s,title:e.name,icon:B[l]});g.addListener("click",()=>{r.windows.forEach(v=>v.close()),o.setContent(`
        <div>
          <h6>${e[2]}</h3>
          <p>${e[3]}</p>
          <p>Rating: ${e[4]||"0"}, Reviews: ${e[5]||"0"}</p>
          ${e[6]?`<img src="${e[6]}" alt="${e[2]}" />`:""}
        </div>
      `),o.open(s,g)}),r.markers.push(g),r.windows.push(o)},V=()=>{N(),i.value[c.value]=m[c.value],m[c.value].forEach(W(c.value)),console.log(m.value)},Q=[{label:"\u9910\u5EF3",value:"restaurants"},{label:"\u98EF\u5E97",value:"hotels"},{label:"\u666F\u9EDE",value:"attractions"}],R=[{label:"\u5168\u90E8",value:0},{label:"3.0 \u4EE5\u4E0A",value:3},{label:"4.0 \u4EE5\u4E0A",value:4},{label:"4.5 \u4EE5\u4E0A",value:4.5}];return(l,t)=>(O(),z("div",null,[d("div",null,[p(f,{id:"changetype-all",modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),val:"all"},{default:y(()=>[h(" \u5168\u90E8 ")]),_:1},8,["modelValue"]),p(f,{id:"changetype-establishment",modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=e=>n.value=e),val:"establishment"},{default:y(()=>[h(" \u5834\u6240 ")]),_:1},8,["modelValue"]),p(f,{id:"changetype-address",modelValue:n.value,"onUpdate:modelValue":t[2]||(t[2]=e=>n.value=e),val:"address"},{default:y(()=>[h(" \u5730\u5740 ")]),_:1},8,["modelValue"]),p(f,{id:"changetype-geocode",modelValue:n.value,"onUpdate:modelValue":t[3]||(t[3]=e=>n.value=e),val:"geocode"},{default:y(()=>[h(" \u5730\u7406\u7DE8\u78BC ")]),_:1},8,["modelValue"])]),p(F,{ref_key:"pacInputEl",ref:P,type:"text",placeholder:"\u641C\u5C0B\u5730\u9EDE"},null,512),p(T,{modelValue:c.value,"onUpdate:modelValue":[t[4]||(t[4]=e=>c.value=e),V],label:"\u985E\u578B",options:Q,class:"q-mb-md","emit-value":""},null,8,["modelValue"]),p(T,{modelValue:I.value,"onUpdate:modelValue":[t[5]||(t[5]=e=>I.value=e),V],label:"\u8A55\u5206",options:R,"emit-value":""},null,8,["modelValue"]),d("div",{id:"map",ref_key:"mapEl",ref:U},null,512),d("div",{ref_key:"infowindowEl",ref:C},[d("div",null,[d("span",H,null,512),Y,d("span",Z,null,512)])],512)]))}};export{re as default};
