(this.webpackJsonprandomchoice=this.webpackJsonprandomchoice||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n.n(s),r=n(7),c=n.n(r),a=(n(13),n(5)),o=(n(3),n(8)),l=n(0);var d=function(e){var t=e.setInputText,n=e.items,s=e.setItems,i=e.inputText;return Object(l.jsxs)("form",{children:[Object(l.jsx)("input",{value:i,id:"text-in",onChange:function(e){console.log("%c\u2022 From: "+e.target.localName+"\n\u2022 Value: "+e.target.value,"font-family: Consolas, monospace; font-size: 20px;"),t(e.target.value),13===e.keyCode&&(e.preventDefault(),document.getElementById("submit-but").click())},className:"body-element",size:"10em"}),Object(l.jsx)("button",{id:"submit-but",onClick:function(e){e.preventDefault(),console.log("%c\u2022 From: Button\n\u2022 Value Submitted:"+e.target,"font-family: Consolas, monospace; font-size: 20px;"),s([].concat(Object(o.a)(n),[{text:i,enabled:!0,id:1e3*Math.random()}])),t("")},className:"rounded-border body-element",size:"10em",style:{"--radius":"50%",backgroundColor:"white",paddingLeft:"0.3em",paddingRight:"0.3em",cursor:"pointer"},type:"submit",children:"+"})]})},m=function(e){var t=e.contentx,n=e.item,s=e.items,i=e.setItems;return Object(l.jsx)("div",{className:"item-holder",id:n.id,children:Object(l.jsxs)("li",{style:{paddingBottom:"0.2em",margin:"0"},children:[Object(l.jsx)("input",{size:"10em",className:"item-item body-element",style:{padding:"0",margin:"0"},type:"text",value:t}),Object(l.jsx)("button",{onClick:function(){i(s.filter((function(e){return e.id!==n.id})))},className:"trashBtn body-element",style:{backgroundColor:"white",fontSize:"0.65em",padding:"0.35em",margin:"0",marginLeft:"1.6em",borderRadius:"50%"},children:"\ud83d\uddd1\ufe0f"})]})})};var u=function(e){var t=e.items,n=e.setItems;return Object(l.jsx)("div",{className:"list-container",children:Object(l.jsx)("ul",{className:"items-list",style:{padding:"0",listStyleType:"none"},children:t.map((function(e){return Object(l.jsx)(m,{item:e,items:t,setItems:n,contentx:e.text})}))})})};var b=function(e){var t=e.items,n=e.currentItem,s=e.setCurrentItem,i="None";return Object(l.jsxs)("form",{children:[Object(l.jsxs)("label",{children:["Selected: ",n," "]}),Object(l.jsx)("button",{type:"submit",className:"rounded-border body-element uppercase",style:{fontFamily:"inherit",fontSize:"0.75em","--radius":"1em",backgroundColor:"var(--p-bg)",borderColor:"#26ff55",color:"#26ff55",paddingLeft:"0.3em",paddingRight:"0.3em",cursor:"pointer"},onClick:function(e){e.preventDefault(),i=0!==t.length?t[Math.floor(Math.random()*t.length)].text:"None",console.log("Item Index:"+t.length+"\nrandItem Var:\n\t"+i),s(i)},children:"Select New | \u21bb"})]})};var j=function(){var e=Object(s.useState)(""),t=Object(a.a)(e,2),n=t[0],i=t[1],r=Object(s.useState)([]),c=Object(a.a)(r,2),o=c[0],m=c[1],j=Object(s.useState)(""),g=Object(a.a)(j,2),h=g[0],p=void 0===h?"None":h,f=g[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("header",{className:"App-header"}),Object(l.jsx)("div",{className:"head bod glow rounded-border",style:{"--radius":"1em"},children:Object(l.jsxs)("p",{className:"no-pad no-margin uppercase",style:Object.assign({},{textAlign:"center",fontSize:"2em"}),children:["choice picker",Object(l.jsx)("br",{}),Object(l.jsxs)("subtitle",{children:[Object(l.jsx)("hr",{}),"made by catloaf (granth j.)"]})]})}),Object(l.jsx)("hr",{style:{marginLeft:"1em",marginRight:"1em"}}),Object(l.jsxs)("div",{className:"bod glow rounded-border",style:{"--radius":"1em"},children:[Object(l.jsxs)("p",{className:"no-pad no-margin capitalised",style:{},children:["choices:",Object(l.jsx)(b,{currentItem:p,setCurrentItem:f,items:o})]}),Object(l.jsx)(d,{inputText:n,items:o,setItems:m,setInputText:i}),Object(l.jsx)(u,{setItems:m,items:o})]})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),s(e),i(e),r(e),c(e)}))};c.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),g()},3:function(e,t,n){}},[[15,1,2]]]);
//# sourceMappingURL=main.f5d5ef51.chunk.js.map