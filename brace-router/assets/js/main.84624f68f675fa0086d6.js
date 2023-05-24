!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("BraceJs",[],t):"object"==typeof exports?exports.BraceJs=t():e.BraceJs=t()}(self,(()=>(self.webpackChunkBraceJs=self.webpackChunkBraceJs||[]).push([[179],{3389:(e,t,n)=>{"use strict";n.r(t),n(2190);var r=n(2283),o=n(7344);(0,r.createData)({errors:{isEmpty:{message:"This field is required."},minLength:{message:"This field must have a minimum length of 6 characters."},emailFormat:{message:"Please enter a valid email address."}},username:{value:"",dirty:!1,validated:!1,errorType:"isEmpty"},password:{value:"",dirty:!1,validated:!1,errorType:"isEmpty"},isValid:!1}),(0,r.createData)(0),(0,r.createData)(!1);const{getCurrentPath:a}=(0,o.Location)(),s=(0,r.createData)(a());function i(e){let{children:t,to:n,activeClassName:r}=e;const a=s.value===n;return createElement("a",{class:`flex items-center px-1 py-2 rounded-md mb-2 text-center mx-auto ${a?r:"text-gray-600 hover:bg-gray-100"}`,href:n,click$:e=>{e.preventDefault(),(0,o.navigate)(n),s.set(n)}},t)}const l=()=>createElement("div",{class:"bg-gray-200 h-screen w-1/3"},createElement("ul",{class:"py-6 mx-auto"},createElement("li",null,createElement(i,{to:"/",activeClassName:"bg-blue-500 text-white font-bold"},createElement("span",{class:"mr-2"},createElement("svg",{class:"w-5 h-5 fill-current",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-7.5h2v-5h-2v5zm0 4h2v-2h-2v2z"}))),"Dashboard")),createElement("li",null,createElement(i,{to:"/account",activeClassName:"bg-blue-500 text-white font-bold"},createElement("span",{class:"mr-2"},createElement("svg",{class:"w-5 h-5 fill-current",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},createElement("path",{d:"M20 6H4V4h16v2zm0 4H4v2h16v-2zm0 4H4v2h16v-2zm0 4H4v2h16v-2zM4 20h16v-2H4v2z"}))),"Account")),createElement("li",null,createElement(i,{to:"/products",activeClassName:"bg-blue-500 text-white font-bold"},createElement("span",{class:"mr-2"},createElement("svg",{class:"w-5 h-5 fill-current",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},createElement("path",{d:"M20 6H4V4h16v2zm0 4H4v2h16v-2zm0 4H4v2h16v-2zm0 4H4v2h16v-2zM4 20h16v-2H4v2z"}))),"Products")),createElement("li",null,createElement(i,{to:"/products/wears/654",activeClassName:"bg-blue-500 text-white font-bold"},createElement("span",{class:"mr-2"},createElement("svg",{class:"w-5 h-5 fill-current",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},createElement("path",{d:"M20 6H4V4h16v2zm0 4H4v2h16v-2zm0 4H4v2h16v-2zm0 4H4v2h16v-2zM4 20h16v-2H4v2z"}))),"Product Details")),createElement("li",null,createElement(i,{to:"/blog",activeClassName:"bg-blue-500 text-white font-bold"},createElement("span",{class:"mr-2"},createElement("svg",{class:"w-5 h-5 fill-current",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},createElement("path",{d:"M21 2H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 16H5v-2h14v2zm0-4H5v-2h14v2zm0-4H5V8h14v2zm0-4H5V4h14v2z"}))),"Blog")),createElement("li",null,createElement(i,{to:"/this-is-dynamic-route",activeClassName:"bg-blue-500 text-white font-bold"},createElement("span",{class:"mr-2"},createElement("svg",{class:"w-5 h-5 fill-current",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},createElement("path",{d:"M20 6H4V4h16v2zm0 4H4v2h16v-2zm0 4H4v2h16v-2zm0 4H4v2h16v-2zM4 20h16v-2H4v2z"}))),"Dynamic Route")))),c=()=>createElement("div",{class:"flex"},createElement(l,null),createElement("div",{class:"py-6 px-8 flex-1 bg-gray-100"},createElement(o.RouteOutlet,null))),u=[{path:"/",component:()=>createElement("div",{key:{}},createElement("h1",{class:"text-2xl font-bold"},"Dashboard Component"),createElement("p",null,"Welcome to the dashboard! This is the main overview page for your account."),createElement(o.Link,{title:"My Account",to:"/account",class:"text-blue-500 hover:underline"},"Go to Dashboard Items"))},{path:"/dashboard/[id]",component:e=>{let{params:t}=e;const{id:n}=t;return createElement("div",{key:{}},createElement("h1",{class:"text-2xl font-bold"},"Dashboard Item Component - ID: ",n),createElement("p",null,"This is the detail view of Dashboard Item with ID: ",n,". You can view and edit the item's information here."),createElement(o.Link,{title:"Dashboard",to:"/",class:"text-blue-500 hover:underline"},"Go back to Dashboard"))}},{path:"/products",component:()=>createElement("div",{key:{}},createElement("h1",{class:"text-2xl font-bold"},"Products Component"),createElement("p",null,"Explore our wide range of products. Click on a product to view its details."),createElement(o.Link,{to:"/products/category/id",class:"text-blue-500 hover:underline"},"Go to Product Detail"))},{path:"/products/[category]/[id]",component:e=>{let{params:t}=e;const{category:n,id:r}=t;return createElement("div",{key:{}},createElement("h1",{class:"text-2xl font-bold"},"Product Detail Component - Category: ",n,", ID: ",r),createElement("p",null,"This is the detailed view of a product in the ",n," category with ID: ",r,". Get all the information about the product here."),createElement(o.Link,{to:"/products",class:"text-blue-500 hover:underline"},"View All Products"))}},{path:"/blog",component:()=>createElement("div",{key:{}},createElement("h1",{class:"text-2xl font-bold"},"Blog Component"),createElement("p",null,"Read the latest blog posts and stay updated with our informative articles."),createElement(o.Link,{to:"/blog/slug",class:"text-blue-500 hover:underline"},"Go to Blog Post"))},{path:"/blog/[slug]",component:e=>{let{params:t}=e;const{slug:n}=t;return createElement("div",{key:{}},createElement("h1",{class:"text-2xl font-bold"},"Blog Post Component - Slug: ",n),createElement("p",null,"This is the blog post with the slug: ",n,". Read and engage with the content."),createElement(o.Link,{to:"/blog",class:"text-blue-500 hover:underline"},"Go back to Blog"))}},{path:"/[...slug]",component:e=>{let{params:t,...n}=e;const r=t["...slug"];return createElement("div",{class:"py-4",key:{}},createElement("h1",{class:"text-2xl font-bold"},"Dynamic Page Component - Slug: ",r),createElement(o.Link,{to:"/",class:"text-blue-500 hover:underline"},"Go to Dashboard"))}}];(0,o.createRouter)(u),(0,r.Mount)((()=>createElement(c,null)),document.querySelector("#root")),(0,o.navigate)("/")},2283:(e,t,n)=>{"use strict";const{setLogLevel:r,setTopMessage:o}=n(9333);e.exports=n(2231)},7344:(e,t,n)=>{e.exports=n(7181)},5886:(e,t,n)=>{"use strict";!function(t){const{Observable:r,BehaviorSubject:o,Subject:a,fromEvent:s,merge:i}=n(7234),{distinctUntilChanged:l,map:c,filter:u}=n(552),{HaystackError:f,error:d,setLogLevel:p,captureError:h}=n(9333),m=n(8839),y=n(5731),v=n(9109),{getVDOM:b,createTagObject:w}=n(4845),{memo:g}=n(2697),E=new Map,k=Symbol.for("braceHTML.element"),x=Symbol.for("braceHTML.fragment");let O,j=null,C={};const S={preventDefault:e=>e.preventDefault(),stopPropagation:e=>e.stopPropagation(),composed:e=>e.composed,once:(e,t,n)=>{const r=o=>{n(o),e.removeEventListener(t,r)};return r},capture:(e,t,n)=>(e.addEventListener(t,n,!0),n),passive:(e,t,n)=>{const r=function(){let e=!1;try{const t=Object.defineProperty({},"passive",{get(){e=!0}});window.addEventListener("test",null,t)}catch(e){}return e}(),o=!!r&&{passive:!0};return e.addEventListener(t,n,o),n}},_="UPDATE",A="CREATE",L="REMOVE",D="REPLACE",P="SET_PROP",M="REMOVE_PROP";class H extends f{constructor(e,t,n,r){super(e,t,n,r),this.name=e||"Error",this.code=n,this.data=r,this.date=Date()}}function T(e,t,n){e.setAttribute(t,n)}function $(e,t){e.removeAttribute(t)}function N(e,t){e.appendChild(t)}function z(e){return document.createTextNode(e)}const R=e=>typeof e,B=(e,t)=>R(e)===t;function I(e,t){return e===t}function F(e,t){if(typeof e!=typeof t)return!1;if("object"!=typeof e||null===e||null===t)return e===t;if(Array.isArray(e)!==Array.isArray(t))return!1;const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(let r of n)if(!F(e[r],t[r]))return!1;return!0}function V(e){return"object"==typeof e&&null!==e&&e.$$typeof===k}function q(e,t){var n;if("object"==typeof e)if(Array.isArray(e))for(var r=0;r<e.length;r++){var o=e[r];V(o)&&(n=o)._store&&!n._store.validated&&null==n.key&&(n._store.validated=!0)}else V(e)&&e._store&&(e._store.validated=!0)}function U(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];try{let t;var a=function(e){return"string"==typeof e}(e);if(t=w.apply(this,arguments),a)for(var s=2;s<arguments.length;s++)q(arguments[s]);return t}catch(e){console.error(e)}}function G(e,t){if(!B(t,"object"))throw new H("Invalid value: ","Each item in animate prop array must be an Object. At element ",e.nodeName);const n=e.animate(t.keyframes,t.options);t.id&&(n.id=t.id),t.playState&&(n.playState=t.playState),t.playbackRate&&(n.playbackRate=t.playbackRate),t.startTime&&(n.startTime=t.startTime),t.currentTime&&(n.currentTime=t.currentTime),t.pause&&n.pause(),t.play&&n.play(),t.reverse&&n.reverse(),t.finish&&n.finish(),t.cancel&&n.cancel(),t.onfinish&&(n.onfinish=t.onfinish),t.oncancel&&(n.oncancel=t.oncancel),t.oniteration&&(n.oniteration=t.oniteration),t.onpause&&(n.onpause=t.onpause),t.onplay&&(n.onplay=t.onplay),t.onreverse&&(n.onreverse=t.onreverse),t.onupdate&&(n.onupdate=t.onupdate),t.onviewPort&&new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?n.play():n.pause()}))})).observe(e)}const W={};function J(e,t,n){if(T(e,"data-br-"+t,""),W[t]||(W[t]=[]),W[t].push({element:e,handler:n}),!W[t].added){const e=s(O,t),n=e.pipe(c((e=>e.target)),u((e=>e.matches(`[data-br-${t}]`)&&O.contains(e))));i(e,n).subscribe((e=>{try{const n=e.target.closest(`[data-br-${t}]`);if(null!==n){const r=W[t].find((e=>e.element===n));r&&r.handler(e)}}catch(e){}})),W[t].added=!0}}function Q(e,t){for(let n in t)e.style[n]=t[n];return e.getAttribute("style")}function Y(e,t,n,r){J(t,e,(e=>{e.key.toLowerCase()===n.toLowerCase()&&r(e)}))}function K(e,t){return t?e?(r=t,R(n=e)!==R(r)||B(n,"string")&&!I(n,r)||n.type!==r.type||t.key!=e.key?{type:D,newNode:e}:e.type?{type:_,children:Z(e,t),props:X(e,t)}:void 0):{type:L}:{type:A,newNode:e};var n,r}function X(e,t){const n=[],r=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Object.assign(e,...n)}({},e.props,t.props);return Object.keys(r).forEach((r=>{const o=e.props[r],a=t.props[r];if(o){if(B(o,"object")&&B(a,"object")&&!F(a,o))return;o&&o===a||n.push({type:P,name:r,value:o})}else n.push({type:M,name:r,value:a})})),n}function Z(e,t){const n=[],r=Math.max(e.children.length,t.children.length);for(let o=0;o<r;o++)void 0!==K(e.children[o],t.children[o])&&(n[o]=K(e.children[o],t.children[o]));return n}function ee(e,t,n){e.children.forEach((e=>{if(e?.$$typeof===x)return ee(e,t,n);const r=re(e);N(t,r)}))}function te(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(!t)return;const r=e.childNodes[n];switch(t.type){case A:{const{newNode:n}=t;return n?.$$typeof===x?ee(n,e):N(e,re(n))}case L:return function(e,t){e.removeChild(t)}(e,r);case D:{const{newNode:n}=t;return function(e,t,n){e.replaceChild(t,n)}(e,re(n),r)}case _:{const{children:e,props:n}=t;(function(e,t){t.forEach((t=>{const{type:n,name:r,value:o}=t;n===P&&ne(e,r,o),n===M&&function(e,t){for(const n in t)"className"===n&&$(e,"class"),$(e,n)}(e,r)}))})(r,n),e.forEach(((e,t)=>{te(r,e,t)}))}}}function ne(e,t,n){if(t.startsWith("on")&&t.includes(":")||t.endsWith("$"))if(t.endsWith("$")){const[r,...o]=t.split("$");J(e,r,(e=>{o.forEach((t=>{const n=S[t];n&&n(e)})),n(e)}))}else{const[r,o]=t.split(":");J(e,o,n)}else if(t.startsWith("class")&&t.includes(":")){const[r,o]=t.split(":");!function(e,t,n){const r=e.classList;n?"string"==typeof n?r.add(n):"boolean"==typeof n&&n&&(r.contains(t)?r.remove(t):r.add(t)):!n&&r.contains(t)&&r.remove(n||t)}(e,o,n)}else if("className"===t)T(e,"class",n);else if(t.startsWith("style")&&t.includes(":")){const[r,o]=t.split(":");!function(e,t,n){let r=e.getAttribute("style")||"";if(!0===n)r+=`${t}: ${t};`;else if("object"!=typeof n||Array.isArray(n)){const e=function(e){const t={};return e.split(";").forEach((e=>{const[n,r]=e.split(":");n&&r&&(t[n.trim()]=r.trim())})),t}(r);e[t]=n,r=function(e){let t="";for(const[n,r]of Object.entries(e))t+=`${n}: ${r};`;return t}(e)}else r=Q(e,n);T(e,"style",r)}(e,o,n)}else if("style"===t){const t=n;if(!B(t,"object"))throw new H("Invalid value: ","style props must be an Object. At element ",e.nodeName);Q(e,t)}else if("animate"===t)!function(e,t){Array.isArray(t)||!B(t,"object")||I(t,null)||G(e,t);for(let n=0;n<t.length;n++)G(e,t[n])}(e,n);else if("refName"===t){if(!B(t,"string"))throw new H("Error",`refName must be a string, saw ${typeof t} instead`);B(n,"function")&&n(e)}else if("ref"===t)n(e);else if(t.startsWith("bind")&&t.includes(":")){const[r,o]=t.split(":");!function(e,t,n){if("html"===t||"function"==typeof n){if("input"===t){if("input"!==e.nodeName.toLowerCase())throw new H("Invalid Assignment: ",`You can only bind to input  attributes. Error Occured at element\n          ${e.nodeName.toLowerCase()}({... bind: ${n}})`,"",{});J(e,"input",n)}else if("this"===t)B(n,"function")?n(e):n=e;else if("value"===t)J(e,"input",(e=>{let{target:t}=e;const r={value:t.value,type:t.type,name:t.name,id:t.id,class:t.class,target:t};n(r)}));else if("checked"===t)J(e,"change",(e=>{let{target:t}=e;const r={isChecked:t.checked,value:t.value,type:t.type,name:t.name,id:t.id,class:t.class};n(r)}));else if("html"===t)if(B(n,"function")){const t=n(e.innerHTML);e.innerHTML=t}else B(n,"string")&&(e.innerHTML=n)}else console.error("The bind directive only accepts functions as handlers")}(e,o,n)}else if(t.startsWith("key")&&t.includes(":")){const[r,o]=t.split(":");I("keyup",r)&&function(e,t,n){Y("keyup",e,t,n)}(e,o,n),I("keydown",r)&&function(e,t,n){Y("keydown",e,t,n)}(e,o,n)}else"key"===t||T(e,t,n)}function re(e){if(B(e,"string"))return z(e);if(B(e,"number"))return z(String(e));let t=document.createComment(" # "+e?.type+"is undefined");if("comment"===e?.type)return document.createComment(e?.children.map((e=>e)));if(null!=e&&null!=e){t=document.createElement(e?.type);for(let n in e.props)ne(t,n,e.props[n]);if(e.children)for(let n of e.children)N(t,re(n));return t}return t}function oe(e,t,n){te(e,K(t,n))}function ae(e,t){let n;var r;if("current"!==t&&(O=t),C=B(r=e,"function")?r():r,n=b(C),Array.isArray(C))return oe(O,ie.div({},...n),j),void(j=n);oe(O,n,j),j=n,T(t,"br-app","")}const se="area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr",ie=(e=>{const t=[...new Set([..."html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot".split(","),..."svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view".split(","),...se.split(","),..."frag,brRepeat,brIf,brFor".split(",")])],n=t.filter((e=>se.split(",").includes(e))),r=t.filter((e=>!se.split(",").includes(e))),o=n.reduce(((e,t)=>(e[t]=(e=>t=>U(e,t))(t),e)),{}),a=r.reduce(((e,t)=>(e[t]=(e=>function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return U(e,t,...r)})(t),e)),{}),s={frag:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t},brRepeat:(e,t)=>Array.from({length:e}).map((()=>t)),brFor:(e,t)=>e.map(((e,n)=>t({item:e,key:n}))),brIf:(e,t)=>e?t:""};return{...a,...o,...s}})(),le={root:O,Mount:ae,forceRender:function(e){ae(C,O)},addEventListener:J,createElement:U,Fragment:function(e){return{$$typeof:x,children:e.children.flat()}},CSML:ie,UniqueOwner:m,DynamicView:y,getRef:function(e){return E.get(e)},createEffect:v,memo:g};e.exports=le,void 0!==t&&(t.createElement=le.createElement,t.Fragment=le.Fragment)}(window)},5703:e=>{function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},t.apply(this,arguments)}e.exports=function(e){let{Component:n,fallback:r,children:o,...a}=e;return o?createElement(n,t({fallback:r},a),o):r||createElement("comment",null,"# provide an additional fallback for 'Dynamic' Component")}},3985:e=>{e.exports=function(e){let{each:t,children:n}=e;const r=n.flat();if(!Array.isArray(t))throw new Error("For component expects an each prop.");const o=[];for(let e=0;e<t.length;e++){const a=t[e];if(Array.isArray(n))n.forEach((t=>{o.push(t(a,e))}));else{const t=r(a,e);o.push(t)}}return o}},5915:e=>{e.exports=function(e){let{children:t,fallback:n,...r}=e;return!0===r.eval||1===r.eval?t:r?.else?r.else:n||createElement("comment",null,"#if hidden")}},2729:(e,t,n)=>{const{createData:r}=n(5758);e.exports=function(e){let{fallback:t,children:n,debounce:r,key:s,...i}=e;function l(){n.forEach((e=>{console.log(a),e.then((e=>{a={...a,[s]:{result:e,isPending:!1,errors:!1}},o.set({})})).catch((e=>{a={...a,[s]:{result:!1,isPending:!1,errors:[e]}},console.error(e),o.set({})}))}))}return a={...a,[s]:{result:a[s]?.result||!1,isPending:a[s]?.isPending||!0,errors:a[s]?.errors||null}},function(){if(a[s].result||setTimeout(l,r||100),a[s].isPending&&!a[s].result)return console.log(a),t;if(!a[s].errors)return console.log(a[s].result),a[s].result;{const e=new Error(...a[s].errors);console.error("An Error Occured: ",e)}}()};const o=r({});let a={}},6950:e=>{e.exports={Switch:function(e){const{fallback:t}=e,n=Array.isArray(e.children)?e.children:[e.children];for(const e of n)if(e)return e;return t||createElement("comment",null,"# provide an additional fallback for UI")},Case:function(e){return[e.eval?e.children:e.fallback?e.fallback:createElement("comment",null,"# provide an optional fallback for Case. Just Joking 😂😂")]}}},3494:(e,t,n)=>{const r=n(2729),o=n(3985),a=n(5915),{Switch:s,Case:i}=n(6950),l=n(5703);e.exports={For:o,If:a,Dynamic:l,Suspense:r,Switch:s,Case:i}},9333:e=>{const t=function(){let e="info";class t extends Error{constructor(e,t,n,r){super(t),this.name=e||"HaystackError",this.code=n,this.data=r,this.date=new Date,this.stack=(new Error).stack.split("\n")}getFormattedError(){const{name:e,message:t,code:n,data:r,date:o,stack:a}=this;return`${e}: ${t}\nCode: ${n}\nData: ${JSON.stringify(r,null,2)}\nDate: ${o}\nStack: ${a}`}}function n(t){const n=["debug","info","warn","error","silent"];n.includes(t)?e=t:console.error(`Invalid log level: ${t}. Please use one of ${n.join(", ")}.`)}function r(t){const n=["debug","info","warn","error"];return n.indexOf(t)>=n.indexOf(e)}function o(e){r("warn")&&console.warn(e)}function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!r("error")||!t.stack)throw new Error(e);console.error(e,s(t))}function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>{};const o=function(e){"object"!=typeof e&&(n("error"),haystack.error(`Error: Capturing typeof ${typeof e} expected typeof Object`));const t={name:e.name,message:e.message,stack:e.stack};return e.fileName&&(t.fileName=e.fileName),e.lineNumber&&(t.lineNumber=e.lineNumber),e.columnNumber&&(t.columnNumber=e.columnNumber),t}(e),a=function(e,t){const n=t.split("\n"),r=n.findIndex((t=>-1!==t.indexOf(e.message)));return-1!==r?n.slice(r).join("\n"):null}(e,o.stack)||o.stack;return r(e),{...o,...t,stack:a}}const i={captureError:s,handleUncaughtError:function(e){s(e)},handleRejectionError:function(e){s(e.reason||e)},setTopMessage:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"plain";"error"===t&&a(""+e,"font-size: 16px; font-weight: bold;"),"warning"===t&&o(""+e),"plain"===t&&console.log(""+e,"font-size: 16px; font-weight: bold;")},warn:o,error:a,setLogLevel:n,getBrowserInfo:function(){const e=navigator.userAgent;let t="",n="";return/Chrome\/(\S+)/.test(e)?(t="Chrome",n=e.match(/Chrome\/(\S+)/)[1]):/Firefox\/(\S+)/.test(e)?(t="Firefox",n=e.match(/Firefox\/(\S+)/)[1]):/Safari\/(\S+)/.test(e)?(t="Safari",n=e.match(/Safari\/(\S+)/)[1]):/Edge\/(\S+)/.test(e)?(t="Edge",n=e.match(/Edge\/(\S+)/)[1]):/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.test(e)?(t="IE",n=e.match(/rv:([0-9]{1,}[\.0-9]{0,})/)[1]):/Opera\/(\S+)/.test(e)&&(t="Opera",n=e.match(/Opera\/(\S+)/)[1]),{browser:t,version:n}},setOnError:function(e){window.addEventListener("error",(t=>{t.preventDefault();const n=t.error||new Error("Unknown error");r("error")&&e(n)})),window.addEventListener("unhandledrejection",(t=>{t.preventDefault();const n=t.reason||new Error("Unknown error");r("error")&&e(n)}))},HaystackError:t};return i}();e.exports=t},2231:(e,t,n)=>{e.exports={...n(5886),...n(3494),...n(5758)}},5758:(e,t,n)=>{const{dispatchHook:r,HooksRegistery:o}=n(7038),{Observable:a,Subject:s}=n(7234),{distinctUntilChanged:i}=n(552),{forceRender:l}=n(5886);function c(e){void 0===e&&(console.warn("Initial data is not provided. Falling back to an empty object."),e={});let t=typeof e;const n=new s(e),r={value:e,set(e){let{silent:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{silent:!1};"boolean"==typeof t?(this.value=e,t||n.next(this.value)):console.error("silent option must be a boolean","reset({ silent: Boolean<> })")},update(e){let{silent:r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{silent:!1};if("boolean"!=typeof r)return void console.error("silent option must be a boolean","reset({ silent: Boolean<> })");if("function"!=typeof e)return void console.error(`update() received an argument of type ${typeof e}, expected a function`);const o=e(this.value);typeof o===t?(this.value=o,r||n.next(o)):console.error(`Callback in update() must return a value of type ${t}, got ${typeof o} instead`)},mutate(e){if("function"==typeof e)this.value=e(this.value);else if(Array.isArray(e)){if(!Array.isArray(this.value))return void console.error("mutator() expected an array as mutator but got a type "+typeof e);this.value.push(...e)}else{if("object"!=typeof e||Array.isArray(e))return void console.error("Mutator must be a function, an array, or a non-array object, received "+typeof e+" instead");if("object"!=typeof this.value||Array.isArray(this.value))return void console.error("mutator() expected an object as mutator but got a type "+typeof e);Object.assign(this.value,e)}n.next(JSON.parse(JSON.stringify(this.value)))},reset(){let{silent:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{silent:!1};"boolean"==typeof t?(this.value=e,t||n.next(this.value)):console.error("silent option must be a boolean","reset({ silent: Boolean<> })")},subscribe(e,t,r){if("function"!=typeof e)return void console.error("Next callback must be a function");if(t&&"function"!=typeof t)return void console.error("Error callback must be a function");if(r&&"function"!=typeof r)return void console.error("Complete callback must be a function");const o=n.pipe(i()).subscribe(e,t,r);return()=>{o.unsubscribe()}},error(e){n.error(e)},complete(){n.complete()},get observers(){return n.observers}};if("function"==typeof l)return r.subscribe(l),r;console.error("Internal Error: check  _createData")}e.exports={createData:function(e){return(new Error).stack.match(/at (.+?) \(/)[1],r("createData",{method:c,data:e})},onMount:function(e){return(new Error).stack.match(/at (.+?) \(/)[1],r("onMount",e)},useFetch:function(e,t){let n;n="string"==typeof e?async()=>({url:e,options:t}):e,(new Error).stack.match(/at (.+?) \(/)[1];const a=r("useFetch",n);return"useFetch",o().find((e=>"useFetch"==e.type)),a}}},9109:(e,t,n)=>{const{BehaviorSubject:r,from:o}=n(7234),{filter:a,map:s,switchMap:i}=n(552);e.exports=async function(e,t){let n=[];const s=new r(t||[]),l=()=>{if("function"==typeof c)return c()};let c=null;return s.pipe(a((()=>(()=>{const e=s.getValue();return e.length!==n.length||e.some(((e,t)=>e!==n[t]))})())),i((()=>o((async()=>{l(),c=await e()})())))).subscribe((()=>{n=s.getValue()})),l}},5731:e=>{e.exports=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{debounce:r=100}=n,o=Array.isArray(e)?e:[e],a=new ResizeObserver((e=>{clearTimeout(a.timer),a.timer=setTimeout((()=>{for(let n of e)t(n)}),r)}));for(let e of o)a.observe(e);return a}},2697:(e,t,n)=>{const r=new Map,o=n(2050);e.exports={memoizedComponents:r,memo:function(e){if(r.has(e))return r.get(e);function t(n){return 0==n?.key||n?.key,t.warned||0==n?.key||null!=n?.key||(console.warn("Warning: Memoized component should always have a key. This is especially important for components that have state or are prone to re-renders.",`@ ${e?.name||""}`),t.warned=!0),t.lastProps&&t.areEqual(n,t.lastProps)||(t.lastProps=n,t.lastResult=e({...n,memo:!0})),t.lastResult}return t.areEqual=function(e,t){if(e===t)return!0;if("object"!=typeof e||"object"!=typeof t||null===e||null===t)return!1;const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const r of n)if(!Object.prototype.hasOwnProperty.call(t,r)||!o(e[r],t[r]))return!1;return!!o(e?.children,t?.children)},t.lastProps=null,t.lastResult=null,t.warned=!1,r.set(e,t),t}}},8839:e=>{function t(e){this._value=e,this._owner=null,this._references=1,this._borrowed=new Set,this._children=new Set}Object.defineProperty(t.prototype,"value",{get:function(){if(this._owner&&this._owner!==t.currentOwner)throw new Error("Value has been moved to a different owner");return this._value},set:function(e){if(this._owner&&this._owner!==t.currentOwner)throw new Error("Value has been moved to a different owner");this._value=e}}),t.prototype.borrow=function(){const e=new t(this.value);return e._owner=this,e._references=0,e._borrowed=this._borrowed,this._borrowed.add(e),e},t.prototype.drop=function(){if(this._references>1)throw new Error("Cannot drop ownership while references exist");this._references=0,this._borrowed.clear(),this._children.forEach((e=>e.drop())),this._children.clear(),this._owner&&(t.currentOwner=this._owner,this._owner._children.delete(this))},t.prototype.transfer=function(){const e=new t(this.value);return e._references=this._references,e._borrowed=this._borrowed,this._references=0,this._borrowed.clear(),this._children.forEach((t=>{const n=t.transfer();e._children.add(n)})),this._children.clear(),this._owner&&(this._owner._children.delete(this),this._owner._children.add(e)),e._owner=this._owner,this._owner=e,e},t.with=function(e,n){const r=new t(e);try{return n(r)}finally{r.drop()}},t.currentOwner=null,e.exports=t},4845:(e,t,n)=>{e.exports={getVDOM:n(2852),createTagObject:n(5765)}},5765:e=>{const t=Symbol.for("Brace.element");Symbol.for("Brace.fragment");e.exports=function(e,n){const r={key:null,state:null},o={refName:null};if(null!=n)for(let[e,t]of Object.entries(n))["key","state"].includes(e)?r[e]=t:o[e]=t;for(var a=o.refName?e=>{refsRegistry.set(o.refName,e)}:null,s=[],i=arguments.length,l=new Array(i>2?i-2:0),c=2;c<i;c++)l[c-2]=arguments[c];var u=l.length;if(1===u)s=l;else if(u>1){for(var f=Array(u),d=0;d<u;d++)f[d]=l[d];Object.freeze&&Object.freeze(f),s=f}return function(e,n,r,o,a,s,i,l,c){var u={$$typeof:t,type:e,key:n,state:r,ref:o,children:c,props:l,_owner:i,_store:{}};return Object.defineProperty(u._store,"validated",{enumerable:!1,writable:!0,value:!1}),Object.defineProperty(u,"_self",{enumerable:!1,writable:!1,value:a}),Object.defineProperty(u,"_source",{enumerable:!1,writable:!1,value:s}),Object.freeze&&(Object.freeze(u.props),Object.freeze(u)),u}(e,r.key,r.state,a,null,null,null,o,[].concat.apply([],s))}},2852:(e,t,n)=>{const{registerComponentInstance:r,beginWorkOnHooks:o}=n(7038),a=Symbol.for("braceHTML.element");let s,i=!1,l=null;function c(e){if("string"==typeof e||"number"==typeof e)return String(e);let t=null;if(null!=e&&"object"==typeof e){if("function"==typeof e.type){const t={children:e.children,...e.props},n=l;l=e.type;const o=c(e.type(t));return l=n,i||r(e.type,l,o),o}"string"==typeof e.type&&(t={...e,$$typeof:a,type:e.type,props:e.props,children:[],_owner:l},Array.isArray(e.children)&&(t.children=e.children.map(c)))}return s=t}const u=()=>{if(s)return i=!0,o(),s;setTimeout(u,0)};e.exports=e=>(c(e),u())},7038:e=>{const{log:t}=console,n=[],r=[];let o,a=[];function s(e){return n.find((t=>t.id===e))}async function i(e){return await e()}async function l(e){const t=await e(window.fetch);let n=await fetch(t.url);return t?.options&&(n=await fetch(t.url,t.options)),n}function c(e,t){if(r.length>0&&r.forEach(u),a.push({type:e,callback:t}),"onMount"===e){const n=r.find((t=>t.type===e));if(n)return n.cleanup;const a={type:e,cleaned:!1,cleanup:i(t),caller:o};return r.push(a),a.cleanup}if("useFetch"===e){const n=r.find((t=>t.type===e));if(n)return n.data;const a={type:e,data:l(t),caller:o};return r.push(a),a.data}if("createData"===e)return function(e){let{method:t,data:n}=e;return t(n)}(t)}async function u(e){if(e&&"function"==typeof e.cleanup&&!e.cleaned)return(await e.cleanup)(),void(e.cleaned=!0)}e.exports={componentRegistry:()=>n,HooksRegistery:()=>a,getComponentInstance:s,registerComponentInstance:async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};o=e;const l=`component-${e.name}`;return s(l)&&r.length>0&&r.forEach(u),s(l)||n.push({id:l,instance:e,Node:a,parent:t,stateNode:i}),n},dispatchHook:c,beginWorkOnHooks:function(){a.reverse().map((e=>{let{type:t,callback:n}=e;return c(t,n)})),a=[]}}},5706:e=>{e.exports={History:function(){return{goBack:function(){window.history.back()},goForward:function(){window.history.forward()},goTo:function(e){window.history.go(e)},addState:function(e,t,n){window.history.pushState(e,t,n)},replaceState:function(e,t,n){window.history.replaceState(e,t,n)}}},Location:function(){return{getCurrentURL:function(){return window.location.href},getCurrentPath:function(){return window.location.pathname},getQueryParams:function(){const e=window.location.search,t=new URLSearchParams(e);return Object.fromEntries(t.entries())},setQueryParam:function(e,t){const n=new URLSearchParams(window.location.search);n.set(e,t);const r="?"+n.toString();window.history.replaceState(null,"",r)},removeQueryParam:function(e){const t=new URLSearchParams(window.location.search);t.delete(e);const n="?"+t.toString();window.history.replaceState(null,"",n)},getHash:function(){return window.location.hash},setHash:function(e){window.location.hash=e},reload:function(){window.location.reload()},redirectTo:function(e){window.location.href=e}}}}},7181:(e,t,n)=>{e.exports=n(9730)},9730:(e,t,n)=>{const{createData:r}=n(5758),{CSML:o}=n(5886);let a=null;const s=n(5706),i=[],l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{route:"/"};return createElement("h1",{key:Math.random()},"cannot GET ",e.route||window.location.pathname)},c=r({component:l,params:{route:window.location.pathname}});class u{constructor(){this.children={},this.param=null,this.route=null,this.catchAll=!1}}const f=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const n=new u;for(const e of i){const t=e.path.split("/").filter((e=>""!==e));let r=n;for(const e of t)if(/\[(.*?)\]/.test(e)){const t=e.match(/\[(.*?)\]/)[1];e.startsWith("[...")?(r.children["[...]"]=r.children["[...]"]||new u,r=r.children["[...]"]):(r.children["["]=r.children["["]||new u,r=r.children["["]),r.param=t}else r.children[e]||(r.children[e]=new u),r=r.children[e];r.route=e}const r={params:{},query:{}};let o=null,a=n;const s=e.split("/").filter((e=>""!==e));for(const e of s)if(a.children[e])a=a.children[e];else{if(!a.children["["]){if(a.children["[...]"]){a=a.children["[...]"];const t=a.param;r.params={...r.params,[t]:s.slice(s.indexOf(e)).join("/")};break}break}{a=a.children["["];const t=a.param;r.params={...r.params,[t]:e}}}if(a.route){o=a.route;const n=e.indexOf("?");if(-1!==n){const t=e.substring(n+1);new URLSearchParams(t).forEach(((e,t)=>{r.query[t]=e}))}if(o.query&&(r.query={...r.query,...o.query}),t){const e=Object.keys(t);for(const n of e)if(r.query&&r.query[n]!==t[n])return!1}}return{route:o,params:r}},d=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;p(e),history.pushState(t,{url:e},e)},p=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const{route:n}=f(window.location.pathname),{route:r,params:o}=f(e,t);c.set({component:e=>r?r.component({currentRoute:r,fromRoute:n,props:e,...o}):l,params:o}),a=n};document.addEventListener("DOMContentLoaded",(()=>{window.addEventListener("popstate",(e=>{let{state:t}=e;p(window.location.pathname)})),document.body.addEventListener("click",(e=>{const t=e.target.closest("[data-c-link]");null!==t&&(e.preventDefault(),d(t.href))}))})),e.exports={createRouter:e=>{e.forEach((e=>{(e=>{i.push({...e})})(e)}))},navigate:d,RouteOutlet:e=>createElement(c.value.component,e),Link:e=>{let{to:t,children:n,title:r,...a}=e;return o.a({...a,href:t,"arial-title":r,click$:e=>{e.preventDefault(),d(t,r)}},n)},...s}},2190:(e,t,n)=>{"use strict";var r=n(3067)(e.id,{publicPath:"./",locals:!1});e.hot.dispose(r),e.hot.accept(void 0,r)}},e=>(e.O(0,[216],(()=>(3389,e(e.s=3389)))),e.O())])));