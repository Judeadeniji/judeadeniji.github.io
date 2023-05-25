"use strict";(self.webpackChunkBraceJs=self.webpackChunkBraceJs||[]).push([[186],{7186:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var r=a(2283),s=a(7344);let n,l;const o=(0,r.createData)({errors:{isEmpty:{message:"This field is required."},minLength:{message:"This field must have a minimum length of 6 characters."},emailFormat:{message:"Please enter a valid email address."}},username:{value:"",dirty:!1,validated:!1,errorType:"isEmpty"},password:{value:"",dirty:!1,validated:!1,errorType:"isEmpty"},isValid:!1}),i="border border-red-400 focus:outline-2 outline-red-300",d=e=>{let{id:t,value:a}=e,r=null,s=!0;"username"===t?(s=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a),s||(r="emailFormat")):a.length<5&&"username"!==t&&(s=!1,r="minLength"),o.update((e=>({...e,[t]:{value:a.trim(),dirty:!0,validated:s,errorType:r},isValid:e.password.validated&&e.username.validated})),{silent:!1})},u=e=>{n||(n=e)};function m(){let e=o.value.isValid;if(!n)return void setTimeout(m,0);const t=n;e&&(l.removeEventListener("mousemove",v),l.removeEventListener("mouseout",c),l.removeEventListener("touchmove",v),l.removeEventListener("touchend",c)),!e&&t&&l&&(l.addEventListener("mousemove",v),l.addEventListener("mouseout",c),l.addEventListener("touchmove",v),l.addEventListener("touchend",c))}function c(){n.style.transform=""}function v(e){const t=n,a=e.clientX||e.touches[0].clientX,r=e.clientY||e.touches[0].clientY,s=t.getBoundingClientRect(),l=s.left+s.width/2,o=s.top+s.height/2,i=a-l,d=r-o,u=Math.sqrt(i*i+d*d);if(u<550){const e=Math.atan2(d,i),a=l-90*Math.cos(e),r=o-90*Math.sin(e);t.style.transition="transform 0.2s",t.style.transform=`translate(${a-l}px, ${r-o}px)`}else if(u>538)t.style.transition="transform 0.1s",c();else{const e=Math.atan2(d,i),a=l+640*Math.cos(e),r=o+640*Math.sin(e);t.style.transition="transform 0.2s",t.style.transform=`translate(${a-l}px, ${r-o}px)`}}const p=function(){return o.value.isValid,(0,r.onMount)(m),o.value.isValid?(l.removeEventListener("mousemove",v),l.removeEventListener("mouseout",c),l.removeEventListener("touchmove",v),l.removeEventListener("touchend",c)):m(),createElement("form",{key:"loginForm",class:"bg-white border rounded-2xl mx-auto px-4 pt-6 pb-8 mb-4 flex flex-col w-full max-w-sm relative",submit$preventDefault$:()=>{(0,s.navigate)("/dashboard/5")}},createElement("div",{class:"mb-4"},createElement("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"username"},"Username"),createElement("input",{class:`${!o.value.username.validated&&o.value.username.dirty?i:"focus:outline-2 outline-blue-400"} appearance-none border rounded w-full\n        py-2 px-3 text-gray-700  leading-tight focus:shadow-outline`,id:"username",type:"text",placeholder:"Username","bind:value":d,"aria-describedby":"username-error"}),!o.value.username.validated&&o.value.username.dirty?createElement("p",{class:"text-red-500 text-xs italic ml-1",id:"username-error"},o.value.username.validated?"":o.value.errors[o.value.username.errorType].message):createElement("p",null)),createElement("div",{class:"mb-6"},createElement("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"password"},"Password"),createElement("input",{class:`${!o.value.password.validated&&o.value.password.dirty?i:"focus:outline-2 outline-blue-400"} appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline`,id:"password",type:"password",placeholder:"Password","bind:value":d,"aria-describedby":"password-error"}),!o.value.password.validated&&o.value.password.dirty?createElement("p",{class:"text-red-500 text-xs italic ml-1",id:"password-error"},o.value.password.validated?"":o.value.errors[o.value.password.errorType].message):createElement("p",null)),createElement("div",{class:"flex items-center justify-between","bind:this":e=>l=e},createElement("button",{class:"bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit","bind:this":u},"Sign In"),createElement("a",{class:"inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800",href:"/forgot-password"},"Forgot Password?")))};function f(){return createElement(h,{class:"bg-white flex flex-col items-center justify-center h-screen overflow-y-hidden m-0 px-4"},createElement("h1",{class:"text-4xl text-center mb-3 font-bold leading-tight"},"Welcome Back"),createElement(p,null))}function h(e){let{children:t,...a}=e;return createElement("div",a,t)}}}]);