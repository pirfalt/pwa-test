import{j as d,R as p,a as u}from"./vendor.3eaf840c.js";const f=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}};f();var h="./assets/checkbox.bce85b74.svg";const g="_App_12637_1";var c={App:g,"App-header":"_App-header_12637_5","App-logo":"_App-logo_12637_14","Todo-list":"_Todo-list_12637_18"};const t=d.exports.jsx,i=d.exports.jsxs;function m(){const s=[{text:"Build tools",checked:!0},{text:"Create page layout",checked:!1},{text:"Input fields",checked:!1},{text:"Upload images",checked:!1}];return i("div",{className:c.App,children:[i("header",{className:c["App-header"],children:[t("h1",{children:"PWA test"}),t("img",{src:h,className:c["App-logo"],alt:"logo"})]}),t("main",{children:t("form",{children:t("ol",{className:c["Todo-list"],children:s.map(r=>i("li",{children:[t("input",{id:r.text,type:"checkbox",checked:r.checked,onChange:n=>console.log(n)}),t("label",{htmlFor:r.text,children:r.text})]}))})})}),t("footer",{})]})}p.render(t(u.StrictMode,{children:t(m,{})}),document.getElementById("root"));"serviceWorker"in navigator?navigator.serviceWorker.register("./service-worker.js",{}).then(s=>{console.log("Registration succeeded. Scope is "+s.scope)}).catch(s=>{debugger;console.log("Registration failed with "+s)}):console.error("Wont work!");
