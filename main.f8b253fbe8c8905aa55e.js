(()=>{var e,r,t,n,o,i={99615:(e,r,t)=>{"use strict";t(26981);var n=t(67294),o=t(20745),i=t(37424),l=t(92876);const a=(0,t(70282).lX)();var u,c=t(54589);const f=function(e){var r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{fallback:null}).fallback,t=void 0===r?null:r,o=(0,n.lazy)(e);return function(e){return function(e,r,t,n){u||(u="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(r||0===i||(r={children:void 0}),1===i)r.children=n;else if(i>1){for(var l=new Array(i),a=0;a<i;a++)l[a]=arguments[a+3];r.children=l}if(r&&o)for(var c in o)void 0===r[c]&&(r[c]=o[c]);else r||(r=o||{});return{$$typeof:u,type:e,key:void 0===t?null:""+t,ref:null,props:r,_owner:null}}(n.Suspense,{fallback:t},void 0,n.createElement(o,e))}},d=f((function(){return Promise.all([t.e(829),t.e(911)]).then(t.bind(t,95911))})),s=f((function(){return t.e(587).then(t.bind(t,26587))}));var p,v,b;const y=(0,t(78384).vJ)(p||(v=["\n  html,\n  body {\n    height: 100%;\n    width: 100%;\n  }\n\n  #app {\n    background-color: #fafafa;\n    min-height: 100%;\n    min-width: 100%;\n  }\n"],b||(b=v.slice(0)),p=Object.freeze(Object.defineProperties(v,{raw:{value:Object.freeze(b)}}))));var m;function h(e,r,t,n){m||(m="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(r||0===i||(r={children:void 0}),1===i)r.children=n;else if(i>1){for(var l=new Array(i),a=0;a<i;a++)l[a]=arguments[a+3];r.children=l}if(r&&o)for(var u in o)void 0===r[u]&&(r[u]=o[u]);else r||(r=o||{});return{$$typeof:m,type:e,key:void 0===t?null:""+t,ref:null,props:r,_owner:null}}var g=h(l.Routes,{},void 0,h(l.Route,{exact:!0,path:"/",element:h(d,{})}),h(l.Route,{element:h(s,{})})),O=h(y,{});t(45697);var j=t(20573),w=t(97132),P=t(87219),S=t(66189),k={locale:S.ZW};const _=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,r=arguments.length>1?arguments[1]:void 0;return(0,P.ZP)(e,(function(e){"app/LanguageToggle/CHANGE_LOCALE"===r.type&&(e.locale=r.locale)}))};var E,x=(0,j.P1)((0,j.P1)((function(e){return e.language||k}),(function(e){return e.locale})),(function(e){return{locale:e}}));const T=(0,i.connect)(x,(function(e){return{dispatch:e}}))((function(e){return function(e,r,t,n){E||(E="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(r||0===i||(r={children:void 0}),1===i)r.children=n;else if(i>1){for(var l=new Array(i),a=0;a<i;a++)l[a]=arguments[a+3];r.children=l}if(r&&o)for(var u in o)void 0===r[u]&&(r[u]=o[u]);else r||(r=o||{});return{$$typeof:E,type:e,key:void 0===t?null:""+t,ref:null,props:r,_owner:null}}(w.Pj,{locale:e.locale,messages:e.messages[e.locale]},e.locale,n.Children.only(e.children))}));t(48398),t(65721);var A,C=t(35281),$=t(52905);function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function D(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function M(e,r,t,n){A||(A="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(r||0===i||(r={children:void 0}),1===i)r.children=n;else if(i>1){for(var l=new Array(i),a=0;a<i;a++)l[a]=arguments[a+3];r.children=l}if(r&&o)for(var u in o)void 0===r[u]&&(r[u]=o[u]);else r||(r=o||{});return{$$typeof:A,type:e,key:void 0===t?null:""+t,ref:null,props:r,_owner:null}}var N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=C.qC,t=(0,$.ZP)({}),n=[t],o=[C.md.apply(void 0,n)],i=(0,C.MT)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=(0,C.UY)(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?D(Object(t),!0).forEach((function(r){var n,o,i;n=e,o=r,i=t[r],(o=function(e){var r=function(e,r){if("object"!==L(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==L(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===L(r)?r:String(r)}(o))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({language:_},e));return r}(),e,r.apply(void 0,o));return i.runSaga=t.run,i.injectedReducers={},i.injectedSagas={},i}({},a),R=document.getElementById("app"),Y=M(l.HashRouter,{history:a},void 0,M(c.x,{},void 0,M((function(){return n.createElement(n.Fragment,null,g,O)}),{}))),Z=function(e){(0,o.s)(R).render(M(i.Provider,{store:N},void 0,M(T,{messages:e},void 0,Y)))};window.Intl?Z(S.jY):new Promise((function(e){e(Promise.all([t.e(267),t.e(482)]).then(t.t.bind(t,58267,23)))})).then((function(){return Promise.all([t.e(750).then(t.t.bind(t,88750,23))])})).then((function(){return Z(S.jY)})).catch((function(e){throw e}))},66189:(e,r,t)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}t(97132).addLocaleData;var o=t(10805),i="en",l={en:function e(r,t){var l=r!==i?e(i,o):{};return Object.keys(t).reduce((function(e,o){var a=t[o]||r===i?t[o]:l[o];return Object.assign(e,function(e,r,t){return(r=function(e){var r=function(e,r){if("object"!==n(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===n(r)?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}({},o,a))}),{})}("en",o)};r.jY=l,r.ZW=i},65721:(e,r,t)=>{e.exports=t.p+".htaccess"},48398:(e,r,t)=>{e.exports=t.p+"favicon.ico"},10805:e=>{"use strict";e.exports={}}},l={};function a(e){var r=l[e];if(void 0!==r)return r.exports;var t=l[e]={id:e,loaded:!1,exports:{}};return i[e].call(t.exports,t,t.exports,a),t.loaded=!0,t.exports}a.m=i,e=[],a.O=(r,t,n,o)=>{if(!t){var i=1/0;for(f=0;f<e.length;f++){for(var[t,n,o]=e[f],l=!0,u=0;u<t.length;u++)(!1&o||i>=o)&&Object.keys(a.O).every((e=>a.O[e](t[u])))?t.splice(u--,1):(l=!1,o<i&&(i=o));if(l){e.splice(f--,1);var c=n();void 0!==c&&(r=c)}}return r}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[t,n,o]},a.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return a.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);a.r(o);var i={};r=r||[null,t({}),t([]),t(t)];for(var l=2&n&&e;"object"==typeof l&&!~r.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((r=>i[r]=()=>e[r]));return i.default=()=>e,a.d(o,i),o},a.d=(e,r)=>{for(var t in r)a.o(r,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((r,t)=>(a.f[t](e,r),r)),[])),a.u=e=>e+"."+{267:"604a0521159c7be63ee4",482:"2998e663731f31a6b18a",587:"76d0b540561687740c92",750:"d7710263e90de097a345",829:"49acf2424f4e515dcc62",911:"a2c21089b06dd48e8117"}[e]+".chunk.js",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n={},o="react-boilerplate:",a.l=(e,r,t,i)=>{if(n[e])n[e].push(r);else{var l,u;if(void 0!==t)for(var c=document.getElementsByTagName("script"),f=0;f<c.length;f++){var d=c[f];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==o+t){l=d;break}}l||(u=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.setAttribute("data-webpack",o+t),l.src=e),n[e]=[r];var s=(r,t)=>{l.onerror=l.onload=null,clearTimeout(p);var o=n[e];if(delete n[e],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(t))),r)return r(t)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=s.bind(null,l.onerror),l.onload=s.bind(null,l.onload),u&&document.head.appendChild(l)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),a.p="/volt-potsdam-wahlergebnisse/",(()=>{var e={179:0};a.f.j=(r,t)=>{var n=a.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var i=a.p+a.u(r),l=new Error;a.l(i,(t=>{if(a.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+r+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,n[1](l)}}),"chunk-"+r,r)}},a.O.j=r=>0===e[r];var r=(r,t)=>{var n,o,[i,l,u]=t,c=0;if(i.some((r=>0!==e[r]))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(u)var f=u(a)}for(r&&r(t);c<i.length;c++)o=i[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(f)},t=self.webpackChunkreact_boilerplate=self.webpackChunkreact_boilerplate||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),a.nc=void 0,a.O(void 0,[131],(()=>a(27562)));var u=a.O(void 0,[131],(()=>a(99615)));u=a.O(u)})();