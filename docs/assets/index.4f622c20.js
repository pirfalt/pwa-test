import{j as _,O as v,L as u,l as k,r as g,u as N,R as T,a as w,B as I,b as S,c as l}from"./vendor.56e6658f.js";const F=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function f(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(e){if(e.ep)return;e.ep=!0;const o=f(e);fetch(e.href,o)}};F();var m="/pwa-test/assets/checkbox.bce85b74.svg";const $="_App_5718z_1",H="_Header_5718z_15",b="_Footer_5718z_29";var c={App:$,Header:H,Footer:b,"Footer-item":"_Footer-item_5718z_38"};const t=_.exports.jsx,n=_.exports.jsxs;function A(){return n("div",{className:c.App,children:[t(O,{}),t("main",{children:t(v,{})}),t(R,{})]})}function O(){return t(u,{to:"/",children:n("header",{className:c.Header,children:[t("h1",{children:"PWA test"}),t("img",{src:m,className:c["App-logo"],alt:"logo"})]})})}function R(){return n("footer",{className:c.Footer,children:[n(u,{to:"/",className:c["Footer-item"],children:[t("img",{src:m,alt:"logo"}),t("span",{children:"todo"})]}),n(u,{to:"/sync",className:c["Footer-item"],children:[t("img",{src:m,alt:"logo"}),t("span",{children:"sync"})]}),n(u,{to:"/history",className:c["Footer-item"],children:[t("img",{src:m,alt:"logo"}),t("span",{children:"history"})]})]})}var a={"Todo-list":"_Todo-list_1gvp6_1","Todo-item":"_Todo-item_1gvp6_10","Todo-row":"_Todo-row_1gvp6_16","Todo-input":"_Todo-input_1gvp6_26"};const j={name:"PWA test",storeName:"pwa_test",version:1,description:"Offline storage for the app data"},p=k.createInstance(j),h="tasks";async function L(){if(await p.getItem(h)!=null)return;const s=[{text:"Build tools",checked:!0},{text:"Create page layout",checked:!0},{text:"Input fields",checked:!0},{text:"Offline data storage",checked:!0},{text:"Upload images",checked:!1}];await p.setItem(h,s)}function E(){const[r,s]=g.exports.useState([]);g.exports.useEffect(()=>{p.getItem(h).then(e=>s(e!=null?e:[])).catch(e=>console.error("failed to load!",e))},[]),g.exports.useEffect(()=>{p.setItem(h,r).catch(e=>console.error("failed to save!",e))},[r]);const f=e=>{const o=[...r];o[e].checked=!o[e].checked,s(o)},d=e=>{const o=[...r,e];s(o)};return t("form",{onSubmit:e=>{e.preventDefault();const o=`.${a["Todo-input"]}`,i=e.currentTarget.querySelector(o);if(i!=null){const y=i,x=y.value;y.value="",d({text:x,checked:!1})}},children:n("ol",{className:a["Todo-list"],children:[r.map((e,o)=>t("li",{className:a["Todo-item"],children:n("label",{className:a["Todo-row"],children:[t("input",{type:"checkbox",name:`${o}_${e.text}`,checked:e.checked,onChange:()=>f(o)}),e.text]})},o)),t("li",{className:a["Todo-item"],children:t("input",{className:a["Todo-input"],name:"new-item",type:"text",placeholder:"New todo item..."})})]})})}function z(){const r=N();return t("form",{onSubmit:s=>{s.preventDefault()},children:t("input",{className:a["TodoItem-text"],name:"text",type:"text",placeholder:`Todo item ${r.todoId}...`})})}const P="_Sync_pkdpd_1";var W={Sync:P};function B(){return t("div",{className:W.Sync,children:"Sync"})}const D="_History_1tszd_1";var M={History:D};function q(){return t("div",{className:M.History,children:"History"})}L().then(()=>{T.render(t(w.StrictMode,{children:t(I,{basename:"/pwa-test/",children:t(S,{children:n(l,{path:"/",element:t(A,{}),children:[t(l,{index:!0,element:t(E,{})}),t(l,{path:"/:todoId",element:t(z,{})}),t(l,{path:"/sync",element:t(B,{})}),t(l,{path:"/history",element:t(q,{})})]})})})}),document.getElementById("root"))});"serviceWorker"in navigator?navigator.serviceWorker.register("./service-worker.js",{}).then(r=>{console.log("Registration succeeded. Scope is "+r.scope)}).catch(r=>{debugger;console.log("Registration failed with "+r)}):console.error("Wont work!");