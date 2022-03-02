var D=Object.defineProperty,O=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var B=(n,t,r)=>t in n?D(n,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[t]=r,h=(n,t)=>{for(var r in t||(t={}))P.call(t,r)&&B(n,r,t[r]);if(k)for(var r of k(t))V.call(t,r)&&B(n,r,t[r]);return n},w=(n,t)=>O(n,L(t));import{j as l,c as v,a as e,g as d,S as A,b as S,r as o,R as N,v as H,d as T,e as I,f as q,h as W}from"./vendor.44de9e5d.js";const j=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}};j();const z={primary:"#226257",secondary:"#fcb315",accent:"#6ccdb3"};const E=({isHover:n,label:t,url:r,type:a="primary"})=>l("a",{"arial-label":t||"read more",rel:"noopener noreferrer nofollow",href:r,className:v("button",{"is-hover":n},`button-${a}`,{"icon-fill":!t},{"icon-expand":t}),children:[t&&e("span",{className:"button__label",children:t}),e("span",{className:"button__arrow",children:e("svg",{width:"32",height:"32",viewBox:"0 0 24 24",focusable:"false",className:"arrow-right",fill:a=="primary"?"#fff":z.primary,children:e("path",{d:"M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"})})})]});const _=({children:n})=>e("div",{className:"layout-two-columns__content",children:n}),x=({children:n})=>e("div",{className:"layout-two-columns__media",children:n}),b=({children:n,options:t})=>{const r=[t==null?void 0:t.layoutType,`media-side-${t==null?void 0:t.mediaSide}`,`background-${t==null?void 0:t.backgroundColor}`];return e("div",{className:v("layout-two-columns",r),children:n})},Y=()=>l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"894",height:"750",viewBox:"0 0 894 750",fill:"none",children:[e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M157 142H894V300H303V749.202H157V142Z",fill:"#226257"}),e("path",{d:"M894 520H518V749H894V520Z",fill:"#226257"}),e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 0V749H157V142.145H894V0H0Z",fill:"#226257",fillOpacity:"0.2"}),e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M78 71.0011V749H157V142.079H894V70L78 71.0011Z",fill:"#226257",fillOpacity:"0.4"}),e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M375 382V749H519V520H894V382H375Z",fill:"#226257",fillOpacity:"0.2"}),e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M447 456V749H518V520H894V456H447Z",fill:"#226257",fillOpacity:"0.4"})]});d.registerPlugin(A);const C=(n,t,r,a,s)=>{let i=d.timeline({scrollTrigger:n!==void 0?{trigger:n,start:"top 90%",scrub:!1,toggleActions:"play none none reverse"}:null});if(t!==void 0){const c=new S(t);i.from(c.chars,{duration:.5,yPercent:100,opacity:0,stagger:.02,ease:"circ.out",delay:s||0})}if(r!==void 0){const c=new S(r);i.from(c.words,{y:20,opacity:0,duration:.4,stagger:.02,ease:"circ.out"},"-=0.5")}a!==void 0&&i.from(a,{y:20,opacity:0,duration:.4},"-=0.2")};const $=({mediaType:n,mediaSource:t,title:r,intro:a,url:s})=>{const i=o.exports.useRef(),c=o.exports.useRef(),m=o.exports.useRef(),u=o.exports.useRef(),f=o.exports.useRef(),p=o.exports.useRef();return o.exports.useEffect(()=>{d.registerPlugin(A);const g=d.timeline(),y={trigger:".hero-banner",start:"top top",end:"+=50%",scrub:1.5,toggleActions:"play none none none"};i&&c&&m&&p&&C(void 0,i.current,c.current,m.current,1.25),u&&f&&(g.from(u.current,{delay:.5,y:100,x:20,duration:1.25}),g.from(f.current,{opacity:0,scale:1.5,duration:2},"-=1"),d.to(f.current,{y:60,ease:"none",scrollTrigger:y})),d.set(p.current,{y:10}),d.to(p.current,{y:-80,ease:"none",scrollTrigger:y})},[]),e("div",{className:"hero-banner",children:l(b,{options:{mediaSide:"right"},children:[e(_,{children:l("div",{className:"hero-banner__content",ref:p,children:[e("div",{className:"hero-banner__heading h1",ref:i,children:e("h1",{children:r})}),a&&e("div",{className:"hero-banner__intro text-intro margin-b-2",ref:c,dangerouslySetInnerHTML:{__html:a}}),s&&e("div",{className:"hero-banner__button",ref:m,children:e(E,{url:s,label:"Learn more",type:"secondary"})})]})}),l(x,{children:[e("div",{className:"rectangle",ref:u,children:e(Y,{})}),l("div",{className:"hero-banner__media",children:[n==="image"&&e("img",{ref:f,src:t,alt:r}),n==="video"&&e("video",{src:t,autoPlay:!0,muted:!0,controls:!1,loop:!0})]})]})]})})};const Z={controlBar:{volumePanel:{inline:!0}}},G=({options:n})=>{const t=N.useRef(),r=N.useRef();return N.useEffect(()=>(r.current=H(t.current,h(h({},Z),n)).ready(function(){}),()=>{r.current&&r.current.dispose()}),[n]),e("video",{ref:t,className:"video-js fidante-theme"})},J=()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"593",height:"669",viewBox:"0 0 593 669",children:l("g",{stroke:"#98A4AF",fill:"none",fillRule:"evenodd",strokeOpacity:".4",children:[e("path",{d:"M1 0v666.997L593 668"}),e("path",{d:"M593 457H219.015L218 0"})]})}),K=()=>l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"347",height:"308",viewBox:"0 0 347 308",fill:"none",children:[e("path",{d:"M1 307H345.482L346 -3.21864e-06",stroke:"#98A4AF",strokeOpacity:"0.4"}),e("path",{d:"M136 1.30534e-05V118.678L1 119",stroke:"#98A4AF",strokeOpacity:"0.4"})]}),U=()=>l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"770",height:"719",viewBox:"0 0 770 719",fill:"none",children:[e("path",{d:"M769 1H2.153L1 719",stroke:"#98A4AF",strokeOpacity:"0.4"}),e("path",{d:"M285 719V235.313L769 234",stroke:"#98A4AF",strokeOpacity:"0.4"})]}),Q=()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"299",height:"302",viewBox:"0 0 299 302",children:e("g",{stroke:"#98A4AF",fill:"none",fillRule:"evenodd",strokeOpacity:".4",children:e("path",{d:"M.098.633h297.138l.862 301M87.098 301.633v-67.816l-87-.184"})})}),X=({title:n,videoSource:t,poster:r})=>{const a=o.exports.useRef(),s={theme:"forest",controls:!0,fluid:!0,responsive:!0,poster:r,sources:[{src:t}]};return o.exports.useEffect(()=>{d.registerPlugin(A),d.timeline();const i={trigger:".feature-video-panel",start:"top 80%",end:"+=80%",scrub:1.25,toggleActions:"play none none none"};a.current&&(setTimeout(()=>{C(a.current,a.current,void 0,void 0,0)},500),d.set(a.current,{y:20}),d.to(a.current,{y:-50,ease:"none",scrollTrigger:i}))},[]),e("div",{className:"feature-video-panel",children:l(b,{options:{backgroundColor:"light",layoutType:"layout-3-2"},children:[e(x,{children:e("div",{className:"feature-video-panel__video",children:e(G,{options:s})})}),l(_,{children:[l("div",{className:"squares",children:[" ",e(J,{})]}),e("div",{className:"feature-video-panel__title h2",ref:a,children:n})]})]})})};const F=({icon:n,figure:t,description:r,backgroundColor:a,textColor:s,url:i})=>{const[c,m]=o.exports.useState(!1),u=o.exports.useRef();return o.exports.useEffect(()=>{u.current&&c&&setTimeout(()=>{const f=u.current.querySelectorAll("svg path"),p=u.current.querySelectorAll("svg ellipse"),g=u.current.querySelectorAll("svg rect"),y=[...f,...p,...g];y.length>0&&y.forEach(R=>{R.style.setProperty("--stroke-dasharray",R.getTotalLength())})},500)},[c]),l("a",{href:i,className:"statistic",style:{backgroundColor:a,color:s},children:[e("div",{className:"statistic__icon",ref:u,children:e(T,{afterInjection:(f,p)=>{f||m(!0)},src:n,className:"statistic-svg-wrap",fallback:()=>e("span",{children:"Error!"})})}),l("div",{className:"statistic__info",children:[e("div",{className:"statistic__figure",children:t}),e("div",{className:"statistic__description h3",children:r})]})]})};const ee=({title:n,intro:t,url:r,statistics:a})=>{const s=o.exports.useRef(),i=o.exports.useRef(),c=o.exports.useRef(),m=o.exports.useRef(),u=o.exports.useRef(),f=o.exports.useRef();o.exports.useRef();const p=o.exports.useRef();return o.exports.useEffect(()=>{d.registerPlugin(A);const g={trigger:".why-fidante",start:"top center",end:"+=50%",scrub:1.5,toggleActions:"play none none none"};c&&m&&u&&p&&(setTimeout(()=>{C(p.current,c.current,m.current,u.current,0)},500),d.set(p.current,{y:10}),d.to(p.current,{y:-50,ease:"none",scrollTrigger:g})),f.current&&d.to(f.current,{scrollTrigger:w(h({},g),{scrub:2}),xPercent:-10,yPercent:-10}),s.current&&i.current&&(d.set(s.current,{y:-50}),d.set(i.current,{y:40}),d.to(s.current,{scrollTrigger:w(h({},g),{scrub:2}),y:16}),d.to(i.current,{scrollTrigger:w(h({},g),{scrub:2}),y:0}))},[]),e("div",{className:"why-fidante",children:l(b,{options:{backgroundColor:"light",mediaSide:"right"},children:[l(_,{children:[l("div",{className:"squares",ref:f,children:[" ",e(K,{})]}),l("div",{className:"why-fidante__content",ref:p,children:[e("div",{className:"why-fidante__heading h2",ref:c,children:n}),t&&e("div",{ref:m,className:"why-fidante__intro text-intro margin-b-2",dangerouslySetInnerHTML:{__html:t}}),r&&e("div",{ref:u,children:e(E,{url:r,label:"Learn more",type:"primary"})})]})]}),e(x,{children:(a==null?void 0:a.length)>0&&l("div",{className:"why-fidante__stats",children:[e("div",{className:"why-fidante__stats-column column-left",ref:s,children:a.slice(0,2).map(g=>o.exports.createElement(F,w(h({},g),{key:g.figure})))}),e("div",{className:"why-fidante__stats-column column-right",ref:i,children:a.slice(2,a.length).map(g=>o.exports.createElement(F,w(h({},g),{key:g.figure})))})]})})]})})};const M=({name:n,description:t,logo:r,url:a,showInfo:s=!1})=>l("a",{className:v("brand-logo",{"show-info":s}),href:a,"arial-label":n,rel:"noopener noreferrer nofollow",children:[s&&l("div",{className:"brand-logo__info",children:[e("div",{className:"brand-logo__name h3",children:n}),e("div",{className:"brand-logo__description intro-text",children:t})]}),e("div",{className:"brand-logo__image",children:e("img",{src:r,alt:n})})]});function te(){const[n,t]=o.exports.useState({width:void 0,height:void 0});return o.exports.useEffect(()=>{function r(){t({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",r),r(),()=>window.removeEventListener("resize",r)},[]),n}const ne=(n,t)=>{const[r,a]=o.exports.useState(!1),{width:s}=te();return o.exports.useLayoutEffect(()=>{const{current:i}=n;i&&(()=>{if(i){let m=(i==null?void 0:i.scrollWidth)>(i==null?void 0:i.clientWidth);a(m),t&&t(m)}})()},[t,n,s]),r},re=({category:n,brands:t,color:r})=>{const a=o.exports.useRef(null),s=ne(a);return l("div",{className:v("logo-listing",{"is-overflow":s}),children:[e("div",{className:"logo-listing__category",style:{backgroundColor:r},children:e("h3",{children:n})}),(t==null?void 0:t.length)>0&&e("div",{className:v("logo-listing__items",{"is-overflow":s}),ref:a,children:t.map(i=>o.exports.createElement(M,w(h({},i),{showInfo:!1,key:i.name})))})]})};const ae=({title:n,backgroundImage:t,logos:r})=>l("div",{className:"our-managers",style:{backgroundImage:`url(${t})`},children:[e("div",{className:"our-managers__title",children:e("h1",{children:n})}),(r==null?void 0:r.length)>0&&e("div",{className:"our-managers__logos-listing-wrapper",children:r.map(a=>o.exports.createElement(re,w(h({},a),{key:a.category})))})]});const se=({title:n,intro:t,url:r,brands:a})=>e("div",{className:"spotlight",children:l(b,{options:{mediaSide:"right"},children:[l(_,{children:[l("div",{className:"squares",children:[" ",e(U,{})]}),l("div",{className:"spotlight__content",children:[e("div",{className:"spotlight__heading",children:e("h2",{children:n})}),t&&e("div",{className:"spotlight__intro margin-b-2 text-intro",dangerouslySetInnerHTML:{__html:t}}),r&&e(E,{url:r,label:"View all funds",type:"secondary"})]})]}),e(x,{children:(a==null?void 0:a.length)>0&&e("div",{className:"spotlight__logos-listing",children:a.map(s=>o.exports.createElement(M,w(h({},s),{showInfo:!0,key:s.name})))})})]})});const ie=({title:n,intro:t,image:r,url:a})=>{const s=o.exports.useRef(null),[i,c]=o.exports.useState(!1);return l("div",{className:"card",onMouseOver:()=>c(!0),onMouseLeave:()=>c(!1),children:[e("div",{className:"card__image",style:{backgroundImage:`url(${r})`}}),l("a",{className:"card__link",href:a,children:[e("div",{className:"card__overlay"}),l("div",{className:"card__info",children:[e("div",{className:"card__title",children:n}),e("div",{className:"card__intro text-intro",children:t})]})]}),e("div",{className:"card__button",ref:s,children:e(E,{type:"secondary",url:a,isHover:i})})]})};const oe=({title:n,articles:t})=>l("div",{className:"latest-insights",children:[e("div",{className:"squares",children:e(Q,{})}),l(b,{options:{backgroundColor:"light",mediaSide:"right",layoutType:"layout-2-3"},children:[e(_,{children:e("div",{className:"latest-insights__heading",children:e("h2",{children:n})})}),e(x,{children:(t==null?void 0:t.length)>0&&e("div",{className:"latest-insights__listing",children:e(I,{centeredSlides:!0,centeredSlidesBounds:!0,slidesPerView:1.2,breakpoints:{650:{slidesPerView:2.2,spaceBetween:20,centeredSlides:!1,centeredSlidesBounds:!1},768:{centeredSlides:!1,centeredSlidesBounds:!1,slidesPerView:2.2,spaceBetween:20},960:{centeredSlides:!1,centeredSlidesBounds:!1,slidesPerView:3,spaceBetween:20,enabled:!1},1500:{centeredSlides:!1,centeredSlidesBounds:!1,slidesPerView:3,spaceBetween:40,enabled:!1}},spaceBetween:10,className:"latest-insights__listing-wrapper",children:t.map((r,a)=>e(q,{className:"card-wrapper",children:e(ie,h({},r))},a))})})})]})]}),le=({heroBanner:n,videoPanel:t,whyFidante:r,ourManagers:a,spotlight:s,latestInsights:i})=>(o.exports.useEffect(()=>{},[]),l("div",{className:"fidante-homepage container",children:[e($,h({},n)),e(X,h({},t)),e(ee,h({},r)),e(ae,h({},a)),e(se,h({},s)),e(oe,h({},i))]}));var ce="/fidante-homepage/assets/icon-1.svg",de="/fidante-homepage/assets/icon-2.svg",he="/fidante-homepage/assets/icon-3.svg",ge="/fidante-homepage/assets/icon-4.svg",ue="/fidante-homepage/assets/icon-5.svg";const pe={title:"Excellence in investment management",intro:"Fidante Partners forms long term alliances with talented investment teams to support and grow specialist investment management businesses.",mediaType:"image",mediaSource:"https://images.pexels.com/photos/566305/pexels-photo-566305.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",url:"#"},me={title:"At Fidante Partners, active investing is at the heart of what we do.",videoSource:"https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",poster:"https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},fe={title:"Why Fidante?",intro:"Our investment managers are carefully selected not only for their robust investment processes, but their expertise, passion and ability to deliver the best possible outcomes for investors. These partnerships often involve managers\u2019 taking an equity stake in the business, further aligning interests of the manager and their clients.",url:"#",statistics:[{icon:ce,figure:"A$87.5B",textColor:"#226257",backgroundColor:"white",description:"total funds under management",url:"#"},{icon:de,figure:"8th largest",textColor:"white",backgroundColor:"#6ccdb3",description:"fund manager in Australia",url:"#"},{icon:he,figure:"17",textColor:"white",backgroundColor:"#226257",description:"manager partnerships",url:"#"},{icon:ge,figure:"10",textColor:"white",backgroundColor:"#226257",description:"office locations",url:"#"},{icon:ue,figure:"221",textColor:"white",backgroundColor:"#226257",description:"employees globally",url:"#"}]},we={title:"Our Managers",backgroundImage:"https://images.pexels.com/photos/5714375/pexels-photo-5714375.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",logos:[{category:"Australian Equities",color:"#ef9600",brands:[{name:"a",description:"Distributor of the Year",logo:"https://www.alphinity.com.au/wp-content/themes/alphin/images/logo.png",url:"#"},{name:"b",description:"Emerging Manager Winner",logo:"https://www.fidante.com/-/media/fidante/managers/eigercapital_transparent_logo_165x33px.png?h=33&w=165&la=en&hash=09B5343C8E98DC9EC236F67E38A93AE2",url:"#"},{name:"c",description:"Fidante launches new Emerging Market fund manager",logo:"https://www.fidante.com/-/media/fidante/managers/greencape-logo-transparent.png?h=45&w=160&la=en&hash=CA851DFC57861A7501A6055F63979122",url:"#"},{name:"d",description:"Recommended rating",logo:"https://www.fidante.com/-/media/fidante/managers/lennox_logo_166x60px/lennox_logo_166x60px_72dpi.png?h=60&w=166&la=en&hash=3422FE2D7E853392B010CC1F35CCFDAB",url:"#"},{name:"e",description:"Emerging Manager Winner",logo:"https://www.fidante.com/-/media/fidante/managers/24754-merlon-logo-transparent.png?h=27&w=151&la=en&hash=0734B3D9624074F7DCA6C1A2220F86A1",url:"#"},{name:"f",description:"Fidante launches new Emerging Market fund manager",logo:"https://www.fidante.com/-/media/fidante/managers/24754-novaport-logo-transparent.png?h=33&w=165&la=en&hash=4D316C4D60627C968629AA782E6FA89A",url:"#"},{name:"g",description:"Recommended rating",logo:"https://www.fidante.com/-/media/fidante/managers/24754-wavestone-logo-transparent.png?h=34&w=153&la=en&hash=FBD11FD52960B8832E8414E866BE6114",url:"#"}]},{category:"Global Equities",color:"#013b06",brands:[{name:"h",description:"Distributor of the Year",logo:"https://www.alphinity.com.au/wp-content/themes/alphin/images/logo.png",url:"#"},{name:"j",description:"Emerging Manager Winner",logo:"https://www.fidante.com/-/media/fidante/managers/impax-175-logo.png?h=30&w=175&la=en&hash=90CAF16A20A40D1D9094F5C80305EF8E",url:"#"},{name:"k",description:"Fidante launches new Emerging Market fund manager",logo:"https://www.fidante.com/-/media/fidante/managers/oxcap/oxcaplogo50.png?h=50&w=136&la=en&hash=05424EA1B8C7E02AB8AE864C317614A1",url:"#"}]},{category:"Fixed Income",color:"#28bbc7",brands:[{name:"q",description:"Distributor of the Year",logo:"https://www.fidante.com/-/media/fidante/managers/24754-ardea-logo-transparent.png?h=60&w=156&la=en&hash=C2061DD0ACC7D4613EA652537315B67D",url:"#"},{name:"i",description:"Emerging Manager Winner",logo:"https://www.fidante.com/-/media/fidante/managers/ares-transparent_logo.png?h=30&w=175&la=en&hash=A38CA8036B306EE40EC18D6FD69DC43E",url:"#"},{name:"e",description:"Fidante launches new Emerging Market fund manager",logo:"https://www.fidante.com/-/media/fidante/managers/24754-bentham-logo-transparent.png?h=41&w=167&la=en&hash=0451A764B764BB417DB90620B6C2A7AF",url:"#"},{name:"t",description:"Recommended rating",logo:"https://www.fidante.com/-/media/fidante/managers/cipam_logo-x-167.jpg?h=47&w=180&la=en&hash=446DFA38F3867E32998DA3B2D93DD190",url:"#"},{name:"y",description:"Recommended rating",logo:"https://www.fidante.com/-/media/fidante/managers/24754-kapstream-logo-transparent.png?h=56&w=158&la=en&hash=3FC712983D7943C50E8AF3A11BDE6547",url:"#"}]},{category:"Alternatives",color:"#40748e",brands:[{name:"z",description:"Distributor of the Year",logo:"https://www.fidante.com/-/media/fidante/managers/pat_logo_rgb-170x45-transparent.png?h=45&w=170&la=en&hash=94D2EE9A62D3B309D8368CBB40DC605B",url:"#"},{name:"x",description:"Emerging Manager Winner",logo:"https://www.fidante.com/-/media/fidante/managers/24754-resonance-logo-transparent_v3.png?h=81&w=175&la=en&hash=5530776925EC2339801551D96BBD3A12",url:"#"}]}]},ve={title:"In the spotlight?",intro:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",url:"#",brands:[{name:"Fidante",description:"Distributor of the Year",logo:"https://www.alphinity.com.au/wp-content/themes/alphin/images/logo.png",url:"#"},{name:"Eiger Capital",description:"Emerging Manager Winner",logo:"https://images.squarespace-cdn.com/content/5bcfdca2f4e531366d9e89fd/4f518aad-4b51-46e7-9362-5fccfb4e5549/FMOTY2021_tagline_black.png?format=1500w&content-type=image%2Fpng",url:"#"},{name:"Ox Capital",description:"Fidante launches new Emerging Market fund manager",logo:"https://www.fidante.com/-/media/fidante/managers/oxcap/oxcaplogo50.png?h=50&w=136&la=en&hash=05424EA1B8C7E02AB8AE864C317614A1",url:"#"},{name:"Impax Asset Management",description:"Recommended rating",logo:"https://www.fidante.com/-/media/fidante/managers/lennox_logo_166x60px/lennox_logo_166x60px_72dpi.png?h=60&w=166&la=en&hash=3422FE2D7E853392B010CC1F35CCFDAB",url:"#"}]},ye={title:"Latest Insights",articles:[{title:"Fed \u2018Policy Normalisation\u2019 Or a New Bear Market?",intro:"While this year is only a few weeks old, the key theme in markets already appears to be well established.",image:"https://images.pexels.com/photos/11218623/pexels-photo-11218623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",url:"#"},{title:"Foundations for global net zero: An investor\u2019s reflections on COP26",intro:"While this year is only a few weeks old, the key theme in markets already appears to be well established.",image:"https://images.pexels.com/photos/11218623/pexels-photo-11218623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",url:"#"},{title:"Greening the Real Economy: An Investor's Perspective on COP26",intro:"While this year is only a few weeks old, the key theme in markets already appears to be well established.",image:"https://images.pexels.com/photos/11218623/pexels-photo-11218623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",url:"#"}]};var _e={heroBanner:pe,videoPanel:me,whyFidante:fe,ourManagers:we,spotlight:ve,latestInsights:ye},xe="/fidante-homepage/assets/logo.svg";const be=({isLoading:n})=>(o.exports.useEffect(()=>{if(!n){const t=d.timeline();t.to(".fidante-preloader__inner",{duration:.3,opacity:0}),t.to("#fidante-preloader",{scaleY:0,duration:1.2,ease:"power2.inOut"})}},[n]),e("div",{id:"fidante-preloader",className:v("fidante-preloader",{"fidante-preloader--hidden":!n}),children:e("div",{className:"fidante-preloader__inner",children:e("img",{src:xe,alt:"fidante"})})})),Ne=()=>{const[n,t]=o.exports.useState(null),[r,a]=o.exports.useState(!0);return o.exports.useEffect(()=>{setTimeout(()=>{t(_e),a(!1)},1e3)}),l("div",{className:"fidante-app",children:[n&&!r&&e(le,h({},n)),e(be,{isLoading:r})]})};W.render(e(N.StrictMode,{children:e(Ne,{})}),document.getElementById("root"));
