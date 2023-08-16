(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(81),o=t.n(r),a=t(645),c=t.n(a),i=t(667),s=t.n(i),d=new URL(t(301),t.b),p=c()(o()),u=s()(d);p.push([e.id,`html {\n    font-size: 62.5%;\n}\n\nbody {\n    color: rgb(197, 196, 196);\n    background-image: linear-gradient(\n        to bottom,\n        rgba(0,0,0,.5),\n        rgba(0,0,0,.5)\n        ),  url(${u});\n        background-size: 100%;\n    }\n    \nh1 {\n    font-family: 'Caveat', cursive;\n    text-align: center;\n    font-size: 3rem;\n}\n\n.description {\n    font-family: 'Cinzel';\n    text-align: center;\n    font-size: 2rem;\n    color: rgb(124, 121, 121)\n}\n\n.menu {\n    display: flex;\n    justify-content: center;\n    gap: 5rem;\n}\n\nbutton {\n    cursor: pointer;\n    font-size: 3rem;\n    font-family: 'Cinzel';\n    background-color: transparent;\n    border: none;\n    color: inherit;\n}\n\nbutton:is(:hover, :focus) {\n    transform: scale(1.1);\n}\n\n.welcome-text {\n    text-align: center;\n    font-family: 'Caveat';\n    font-size: 8rem;\n    margin-top: 5rem;\n}\n\n.menu-container {\n    margin: 5rem auto 0;\n    width: 80vw;\n    display: flex;\n    gap: 3rem;\n    flex-direction: column;\n}\n\n.menu-container div {\n    display: flex;\n    gap: 1rem;\n    align-items: center;\n}\n\n.menu-img {\n    height: 20vh;\n    border-radius: 50%;\n    border: 2px solid white;\n}\n\n.menu-container p {\n    font-family: 'Caveat';\n    color: white;\n    font-size: 3rem;\n}\n\n.contacts-container {\n    background-color: rgba(0,0,0,.5);\n    font-size: 2rem;\n    color: rgb(211, 206, 206);\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    border: 1px solid white;\n    border-radius: 4px;\n    margin: 5rem auto;\n    width: 50vw;\n}\n\n.contacts-container div {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}`,""]);const l=p},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var p=[].concat(e[d]);r&&c[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=r.base?s[0]+r.base:s[0],p=a[d]||0,u="".concat(d," ").concat(p);a[d]=p+1;var l=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)n[l].references++,n[l].updater(m);else{var f=o(m,r);r.byIndex=i,n.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var s=r(e,o),d=0;d<a.length;d++){var p=t(a[d]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},301:(e,n,t)=>{e.exports=t.p+"8ccbb0ebf6368d0417f7.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),c=t.n(a),i=t(565),s=t.n(i),d=t(216),p=t.n(d),u=t(589),l=t.n(u),m=t(426),f={};f.styleTagTransform=l(),f.setAttributes=s(),f.insert=c().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=p(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const v=t.p+"71df3f8e12c9bd0bff87.jpg",g=t.p+"fcca4f56d90db296e7f1.jpg",h=t.p+"5b9e540b19c334ef6b68.jpg",b=document.querySelector("#content"),x=function(){const e=document.createElement("div"),n=document.createElement("div"),t=document.createElement("div"),r=document.createElement("div"),o=document.createElement("p"),a=document.createElement("p"),c=document.createElement("p"),i=new Image,s=new Image,d=new Image;return i.src=v,s.src=g,d.src=h,o.textContent="Strawberry Crepe",a.textContent="Chocolate Crepe",c.textContent="Blueberry Crepe",e.classList.add("menu-container"),i.classList.add("menu-img"),s.classList.add("menu-img"),d.classList.add("menu-img"),e.append(n),n.append(i),n.append(o),e.append(t),t.append(s),t.append(a),e.append(r),r.append(d),r.append(c),e}(),y=function(){const e=document.createElement("div"),n=document.createElement("h1"),t=document.createElement("p"),r=document.createElement("div"),o=document.createElement("button"),a=document.createElement("button"),c=document.createElement("button");return r.classList.add("menu"),t.classList.add("description"),n.textContent="Restaurant La Crepes",t.textContent="True gourmet delight with simple crepes...",o.textContent="Home",a.textContent="Menu",c.textContent="Contacts",e.append(n),e.append(t),e.append(r),r.append(o),r.append(a),r.append(c),e}(),C=function(){const e=document.createElement("h2");return e.classList.add("welcome-text"),e.textContent="Welcome",e}(),E=function(){const e=document.createElement("div"),n=document.createElement("div"),t=document.createElement("h3"),r=document.createElement("p"),o=document.createElement("div"),a=document.createElement("h3"),c=document.createElement("p"),i=document.createElement("div"),s=document.createElement("h3"),d=document.createElement("p");return e.classList.add("contacts-container"),t.textContent="We are open: ",r.textContent="Mn-St 8-21",a.textContent="Our address: ",c.textContent="Somewhere, 12",s.textContent="Contact us: ",d.textContent="923423523",e.append(n),n.append(t),n.append(r),e.append(o),o.append(a),o.append(c),e.append(i),i.append(s),i.append(d),e}();function w(e){"Home"===e.target.textContent&&(b.innerHTML="",b.append(y),b.append(C)),"Menu"===e.target.textContent&&(b.innerHTML="",b.append(y),b.append(x)),"Contacts"===e.target.textContent&&(b.innerHTML="",b.append(y),b.append(E))}b.append(y),document.querySelectorAll("button").forEach((e=>e.addEventListener("click",w)))})()})();