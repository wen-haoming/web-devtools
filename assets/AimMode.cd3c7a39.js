import{u as L,a as z}from"./index.aa146642.js";import{d as D,j as g,f as I,m as u,n as c,u as d,r as R,o as F,q as H,g as T,t as j,F as q}from"./vendor.cf152695.js";const V={sublime:"subl://open?url=file://{path}&line={line}&column={column}",textmate:"txmt://open?url=file://{path}&line={line}&column={column}",emacs:"emacs://open?url=file://{path}&line={line}&column={column}",macvim:"mvim://open/?url=file://{path}&line={line}&column={column}",phpstorm:"phpstorm://open?file={path}&line={line}&column={column}",webstorm:"phpstorm://open?file={path}&line={line}&column={column}",idea:"idea://open?file={path}&line={line}&column={column}",vscode:"vscode://file/{path}:{line}:{column}","vscode-insiders":"vscode-insiders://file/{path}:{line}:{column}",atom:"atom://core/open/file?filename={path}&line={line}&column={column}"},G="https://github.com/wen-haoming/visual-dev/blob/master/demo{path}#L{line}";function X({editor:i,srcPath:e,line:t,column:o}){return(window.isDemo?G:V[i]).replace(/{(.*?)}/g,(l,p)=>p==="path"?e:String(p==="line"?t:o))}const k=(i,e)=>{if(!i)return null;for(;!e(i)&&i.parentNode&&i!==document.body;)i=i.parentNode;return i};function Y(i){const e=window.getComputedStyle(i),t=i.getBoundingClientRect();return{borderLeftWidth:`${parseInt(e.borderLeftWidth,10)}px`,borderRightWidth:`${parseInt(e.borderRightWidth,10)}px`,borderTopWidth:`${parseInt(e.borderTopWidth,10)}px`,borderBottomWidth:`${parseInt(e.borderBottomWidth,10)}px`,marginLeft:`${parseInt(e.marginLeft,10)}px`,marginRight:`${parseInt(e.marginRight,10)}px`,marginTop:`${parseInt(e.marginTop,10)}px`,marginBottom:`${parseInt(e.marginBottom,10)}px`,paddingLeft:`${parseInt(e.paddingLeft,10)}px`,paddingRight:`${parseInt(e.paddingRight,10)}px`,paddingTop:`${parseInt(e.paddingTop,10)}px`,paddingBottom:`${parseInt(e.paddingBottom,10)}px`,left:`${t.left+window.scrollX-parseInt(e.marginLeft,10)}px`,top:`${t.top+window.scrollY-parseInt(e.marginTop,10)}px`,width:`${t.width+parseInt(e.marginLeft,10)+parseInt(e.marginRight,10)}px`,height:`${t.height+parseInt(e.marginTop,10)+parseInt(e.marginBottom,10)}px`}}var M=(i,e)=>{const t=i.__vccOpts||i;for(const[o,l]of e)t[o]=l;return t};const Z=D({setup(i){const e=L("aim-icon");return(t,o)=>(g(),I("div",{class:c(d(e))},[u("div",{class:c(`${d(e)}-top`)},null,2),u("div",{class:c(`${d(e)}-right`)},null,2),u("div",{class:c(`${d(e)}-bottom`)},null,2),u("div",{class:c(`${d(e)}-left`)},null,2),u("div",{class:c(`${d(e)}-center`)},null,2)],2))}});var J=M(Z,[["__scopeId","data-v-ffd7aa64"]]);const K=D({setup(i){const e=L("outline");return(t,o)=>(g(),I("div",{class:c(d(e))},null,2))}});var Q=M(K,[["__scopeId","data-v-cba922a8"]]);const U={"pointer-events":"none"},ee={"z-index":1e8,position:"absolute",display:"flex","align-items":"center","font-family":'"SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;',"font-weight":"bold",padding:"6px 8px","pointer-events":"none","border-radius":"3px","background-color":"var(--v-inspect-bg)","box-shadow":"var(--v-inspect-box-shadow)"},te={display:"flex","flex-direction":"column"},ie={color:"rgb(215, 215, 215)"},ne={"z-index":1e8,position:"absolute","border-color":"rgba(255, 155, 0, 0.3)","pointer-events":"none","border-style":"solid"},oe={"border-color":"rgba(255, 200, 50, 0.3)","pointer-events":"none","border-style":"solid"},re={"border-color":"rgba(77, 200, 0, 0.3)","pointer-events":"none","border-style":"solid"},se={"background-color":"rgba(120, 170, 210, 0.7)","pointer-events":"none"};class ae{constructor(){this.overLayer=document.createElement("div"),this.inspectMarginDiv=document.createElement("div"),this.inspectborderDiv=document.createElement("div"),this.inspectPaddingDiv=document.createElement("div"),this.inspectContentDiv=document.createElement("div"),this.inspectPaddingDiv.appendChild(this.inspectContentDiv),this.inspectborderDiv.appendChild(this.inspectPaddingDiv),this.inspectMarginDiv.appendChild(this.inspectborderDiv),this.detailLayer=document.createElement("div"),this.detailLeft=document.createElement("span"),this.detailRight=document.createElement("span"),this.detailLayer.appendChild(this.detailLeft),this.detailLayer.appendChild(this.detailRight),Object.assign(this.inspectMarginDiv.style,ne),Object.assign(this.inspectborderDiv.style,oe),Object.assign(this.inspectPaddingDiv.style,re),Object.assign(this.inspectContentDiv.style,se),Object.assign(this.overLayer.style,U),Object.assign(this.detailLayer.style,ee),Object.assign(this.detailLeft.style,te),Object.assign(this.detailRight.style,ie),this.overLayer.appendChild(this.inspectMarginDiv),this.overLayer.appendChild(this.detailLayer),document.body.appendChild(this.overLayer)}update(e,t){var S,O,P,B,E;const{left:o,top:l,marginLeft:p,marginRight:y,marginTop:b,marginBottom:f,borderLeftWidth:n,borderRightWidth:r,borderTopWidth:s,borderBottomWidth:a,paddingLeft:m,paddingRight:h,paddingTop:v,paddingBottom:x,width:_,height:$}=e;if(!this.inspectMarginDiv||!this.inspectborderDiv||!this.inspectPaddingDiv||!this.inspectContentDiv)return;const{domType:W,srcPath:A,componentName:C,frame:N}=t;let w="";/^[A-Z]/.test(String(C))?w=` <div  style="color:var(--v-inspect-tt);">
      <span style="display:inline-block;color:#fff;border-radius:2px;background:var(${N==="react"?"--v-inspect-frame-react":"--v-inspect-frame-vue"});padding: 0 4px">
        ${C}
      </span>
      </div>`:w=`
      <div  style="color:var(--v-inspect-tt);">
       ${W}
    </div>
    `,this.detailLeft.innerHTML=`
    ${w}
    <div style="color:var(--v-inspect-sub-tt)">
      ${A}
    </div>`,Object.assign((S=this.detailLayer)==null?void 0:S.style,{left:o,top:`${parseInt(l,10)+parseInt($,10)+10}px`}),Object.assign((O=this.inspectMarginDiv)==null?void 0:O.style,{left:o,top:l,"border-left-width":p,"border-right-width":y,"border-top-width":b,"border-bottom-width":f,width:_,height:$,display:"flex","box-sizing":"border-box"}),Object.assign((P=this.inspectborderDiv)==null?void 0:P.style,{"border-left-width":n,"border-right-width":r,"border-top-width":s,"border-bottom-width":a,display:"flex",flex:1,"box-sizing":"border-box"}),Object.assign((B=this.inspectPaddingDiv)==null?void 0:B.style,{"border-left-width":m,"border-right-width":h,"border-top-width":v,"border-bottom-width":x,display:"flex","box-sizing":"border-box",flex:1}),Object.assign((E=this.inspectContentDiv)==null?void 0:E.style,{"box-sizing":"border-box",flex:1})}unmount(){var e,t;(t=(e=this.overLayer)==null?void 0:e.parentElement)==null||t.removeChild(this.overLayer),this.inspectContentDiv=null,this.inspectborderDiv=null,this.inspectPaddingDiv=null,this.inspectMarginDiv=null,this.detailLayer=null,this.overLayer=null}}const pe=D({setup(i){const e=L("aim"),t=z(),o=R(),l=R(new WeakMap);let p=null;F(()=>{const n=()=>{document.querySelectorAll("[data-v-p]").forEach(s=>{const a=s.getAttribute("data-v-p");a&&l.value.set(s,a),s.removeAttribute("data-v-p")})};n(),new MutationObserver(()=>{n()}).observe(document.body,{attributes:!1,childList:!0,subtree:!0})});const y=n=>{n.stopPropagation(),t==null||t.setIsAimStatus(!0)},b=async n=>{requestAnimationFrame(()=>{n.stopPropagation();const r=k(n.target,a=>!!l.value.get(a));if(!r)return;const s=l.value.get(r);if(s&&r&&o.value&&p!==r){const a=Y(r),[,m,h,v]=s.split("|");o.value.update(a,{frame:v,componentName:h,domType:r.nodeName.toLowerCase(),srcPath:m})}p=r})},f=async n=>{var r;n.stopPropagation(),n.preventDefault();try{const s=k(n.target,m=>!!l.value.get(m));if(!s){(r=o.value)==null||r.unmount();return}const a=l.value.get(s);if(a){const[m]=a.split("|"),[h,v,x]=m.split(":"),_=X({srcPath:h,line:v,column:x,editor:"vscode"});window.open(_)}}finally{t==null||t.setIsAimStatus(!1)}};return H([t],()=>{var n;(t==null?void 0:t.isAimStatus)?(o.value=new ae,window.addEventListener("mousemove",b,!1),window.addEventListener("click",f,!0)):((n=o.value)==null||n.unmount(),window.removeEventListener("mousemove",b,!1),window.removeEventListener("click",f,!0))}),(n,r)=>{var s,a;return g(),I(q,null,[u("div",{class:c(d(e)),onClick:y},[((s=d(t))==null?void 0:s.isAimStatus)?j("",!0):(g(),T(J,{key:0}))],2),((a=d(t))==null?void 0:a.isAimStatus)?(g(),T(Q,{key:0})):j("",!0)],64)}}});export{pe as default};
