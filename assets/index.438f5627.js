import{j as i,r as d,R as l,a as u}from"./vendor.8fa06a49.js";const x=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};x();var f="/visual-dev/assets/logo.ecc203fb.svg";const r=i.exports.jsx,p=i.exports.jsxs;function A(){const[o,s]=d.exports.useState(0);return r("div",{className:"App","data-v-p":"/src/App.tsx:9:4|/src/App.tsx:9:4|div|react",children:p("header",{className:"App-header","data-v-p":"/src/App.tsx:10:6|/src/App.tsx:10:6|header|react",children:[r("img",{src:f,className:"App-logo",alt:"logo","data-v-p":"/src/App.tsx:11:8|/src/App.tsx:11:8|img|react"}),r("p",{"data-v-p":"/src/App.tsx:12:8|/src/App.tsx:12:8|p|react",children:"Hello Vite + React!"}),r("p",{"data-v-p":"/src/App.tsx:13:8|/src/App.tsx:13:8|p|react",children:p("button",{type:"button",onClick:()=>s(a=>a+1),"data-v-p":"/src/App.tsx:14:10|/src/App.tsx:14:10|button|react",children:["count is: ",o]})}),p("p",{"data-v-p":"/src/App.tsx:18:8|/src/App.tsx:18:8|p|react",children:["Edit ",r("code",{"data-v-p":"/src/App.tsx:19:15|/src/App.tsx:19:15|code|react",children:"App.tsx"})," and save to test HMR updates."]}),p("p",{"data-v-p":"/src/App.tsx:21:8|/src/App.tsx:21:8|p|react",children:[r("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer","data-v-p":"/src/App.tsx:22:10|/src/App.tsx:22:10|a|react",children:"Learn React"})," | ",r("a",{className:"App-link",href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener noreferrer","data-v-p":"/src/App.tsx:31:10|/src/App.tsx:31:10|a|react",children:"Vite Docs"})]})]})})}l.render(r(u.StrictMode,{"data-v-p":"/src/main.tsx:7:2|/src/main.tsx:7:2||react",children:r(A,{"data-v-p":"/src/main.tsx:8:4|/src/main.tsx:8:4|App|react"})}),document.getElementById("root"));
