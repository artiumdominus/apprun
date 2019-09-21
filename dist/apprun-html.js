!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.apprun=e():t.apprun=e()}(this,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=7)}([function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return r});class r{constructor(){this._events={}}on(t,e,n={}){this._events[t]=this._events[t]||[],this._events[t].push({fn:e,options:n})}off(t,e){let n=this._events[t];n&&((n=n.filter(t=>t.fn!==e)).length?this._events[t]=n:delete this._events[t])}run(t,...e){let n=this._events[t];return console.assert(!!n,"No subscriber for event: "+t),n&&((n=n.filter(n=>{const{fn:r,options:o}=n;return o.delay?this.delay(t,r,e,o):r.apply(this,e),!n.options.once})).length?this._events[t]=n:delete this._events[t]),n?n.length:0}once(t,e,n={}){this.on(t,e,Object.assign({},n,{once:!0}))}delay(t,e,n,r){r._t&&clearTimeout(r._t),r._t=setTimeout(()=>{clearTimeout(r._t),e.apply(this,n)},r.delay)}}let o;const i="object"==typeof self&&self.self===self&&self||"object"==typeof t&&t.global===t&&t;i.app&&i._AppRunVersions?o=i.app:(o=new r,i.app=o,i._AppRunVersions="AppRun-2"),e.b=o}).call(this,n(3))},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(2);const i=(t,e={})=>(class extends HTMLElement{constructor(){super()}get component(){return this._component}get state(){return this._component.state}static get observedAttributes(){return Object.assign({},e).observedAttributes}connectedCallback(){if(this.isConnected&&!this._component){const n=Object.assign({render:!0,shadow:!1},e);this._shadowRoot=n.shadow?this.attachShadow({mode:"open"}):this;const r={};Array.from(this.attributes).forEach(t=>r[t.name]=t.value);const o=this.children?Array.from(this.children):[];o.forEach(t=>t.parentElement.removeChild(t)),this._component=new t(Object.assign({},r,{children:o})).mount(this._shadowRoot,n),this._component.mounted&&this._component.mounted(r,o),this.on=this._component.on.bind(this._component),this.run=this._component.run.bind(this._component)}}disconnectedCallback(){this._component.unmount(),this._component=null}attributeChangedCallback(...t){this._component&&this._component.run("attributeChanged",...t)}});var s=(t,e,n)=>{"undefined"!=typeof customElements&&customElements.define(t,i(e,n))};const a={meta:new WeakMap,defineMetadata(t,e,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[t]=e},getMetadataKeys(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata(t,e){return e=Object.getPrototypeOf(e),this.meta.get(e)?this.meta.get(e)[t]:null}};function c(t,e={}){return(n,r,o)=>{const i=t?t.toString():r;return a.defineMetadata(`apprun-update:${i}`,{name:i,key:r,options:e},n),o}}function u(t,e={}){return function(n,r){const o=t?t.toString():r;a.defineMetadata(`apprun-update:${o}`,{name:o,key:r,options:e},n)}}function d(t,e){return function(n){return s(t,n,e),n}}const l=(t,e)=>(e?t.state[e]:t.state)||"",h=(t,e,n)=>{if(e){const r=Object.assign({},t.state);r[e]=n,t.setState(r)}else t.setState(n)};var f=(t,e,n,r)=>{if(t.startsWith("$on")){const n=e[t];if(t=t.substring(1),"boolean"==typeof n)e[t]=e=>r.run(t,e);else if("string"==typeof n)e[t]=t=>r.run(n,t);else if("function"==typeof n)e[t]=t=>r.setState(n(r.state,t));else if(Array.isArray(n)){const[o,...i]=n;"string"==typeof o?e[t]=t=>r.run(o,...i,t):"function"==typeof o&&(e[t]=t=>r.setState(o(r.state,...i,t)))}}else if("$bind"===t){const o=e.type||"text",i="string"==typeof e[t]?e[t]:e.name;if("input"===n)switch(o){case"checkbox":e.checked=l(r,i),e.onclick=t=>h(r,i||t.target.name,t.target.checked);break;case"radio":e.checked=l(r,i)===e.value,e.onclick=t=>h(r,i||t.target.name,t.target.value);break;case"number":case"range":e.value=l(r,i),e.oninput=t=>h(r,i||t.target.name,Number(t.target.value));break;default:e.value=l(r,i),e.oninput=t=>h(r,i||t.target.name,t.target.value)}else"select"===n?(e.value=l(r,i),e.onchange=t=>{t.target.multiple||h(r,i||t.target.name,t.target.value)}):"option"===n&&(e.selected=l(r,i),e.onclick=t=>h(r,i||t.target.name,t.target.selected))}else app.run("$",{key:t,tag:n,props:e,component:r})};const p={};r.b.on("get-components",t=>t.components=p);const m=t=>t;class b{constructor(t,e,n,o){this.state=t,this.view=e,this.update=n,this.options=o,this._app=new r.a,this._actions=[],this._global_events=[],this._history=[],this._history_idx=-1,this._history_prev=()=>{this._history_idx--,this._history_idx>=0?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=0},this._history_next=()=>{this._history_idx++,this._history_idx<this._history.length?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=this._history.length-1},this.start=(t=null,e={render:!0})=>this.mount(t,Object.assign({},e,{render:!0}))}render(t,e){r.b.render(t,e,this)}_view(t,e=null){if(!this.view)return;const n=r.b.createElement;r.b.createElement=(t,e,...r)=>(e&&Object.keys(e).forEach(n=>{n.startsWith("$")&&(f(n,e,t,this),delete e[n])}),n(t,e,...r));const o=e?this.view(t,e):this.view(t);return r.b.createElement=n,o}renderState(t){if(!this.view)return;const e=this._view(t);if(r.b.debug&&r.b.run("debug",{component:this,state:t,vdom:e||"[vdom is null - no render]"}),"object"!=typeof document)return;const n="string"==typeof this.element?document.getElementById(this.element):this.element;if(n){const t="_c";if(this.unload){if(n._component!==this&&(this.tracking_id=(new Date).valueOf().toString(),n.setAttribute(t,this.tracking_id),"undefined"!=typeof MutationObserver)){const e=new MutationObserver(t=>{const{removedNodes:r,oldValue:o}=t[0];(o===this.tracking_id||Array.from(r).indexOf(n)>=0)&&(this.unload(this.state),e.disconnect())});n.parentNode&&e.observe(n.parentNode,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[t]})}}else n.removeAttribute&&n.removeAttribute(t);n._component=this}this.render(n,e),this.rendered&&this.rendered(this.state)}setState(t,e={render:!0,history:!1}){if(t instanceof Promise)t.then(t=>{this.setState(t,e)}).catch(t=>{throw console.error(t),t}),this._state=t;else{if(this._state=t,null==t)return;this.state=t,!1!==e.render&&this.renderState(t),!1!==e.history&&this.enable_history&&(this._history=[...this._history,t],this._history_idx=this._history.length-1),"function"==typeof e.callback&&e.callback(this.state)}}mount(t=null,e){return console.assert(!this.element,"Component already mounted."),this.options=e=Object.assign({},this.options,e),this.element=t,this.global_event=e.global_event,this.enable_history=!!e.history,this.enable_history&&(this.on(e.history.prev||"history-prev",this._history_prev),this.on(e.history.next||"history-next",this._history_next)),this.add_actions(),void 0===this.state&&(this.state=null!=this.model?this.model:{}),e.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),p[t]=p[t]||[],p[t].push(this),this}is_global_event(t){return t&&(this.global_event||this._global_events.indexOf(t)>=0||t.startsWith("#")||t.startsWith("/")||t.startsWith("@"))}add_action(t,e,n={}){e&&"function"==typeof e&&(n.global&&this._global_events.push(t),this.on(t,(...o)=>{const i=e(this.state,...o);r.b.debug&&r.b.run("debug",{component:this,event:t,e:o,state:this.state,newState:i,options:n}),this.setState(i,n)},n))}add_actions(){const t=this.update||{};a.getMetadataKeys(this).forEach(e=>{if(e.startsWith("apprun-update:")){const n=a.getMetadata(e,this);t[n.name]=[this[n.key].bind(this),n.options]}});const e={};Array.isArray(t)?t.forEach(t=>{const[n,r,o]=t;n.toString().split(",").forEach(t=>e[t.trim()]=[r,o])}):Object.keys(t).forEach(n=>{const r=t[n];("function"==typeof r||Array.isArray(r))&&n.split(",").forEach(t=>e[t.trim()]=r)}),e["."]||(e["."]=m),Object.keys(e).forEach(t=>{const n=e[t];"function"==typeof n?this.add_action(t,n):Array.isArray(n)&&this.add_action(t,n[0],n[1])})}run(t,...e){const n=t.toString();return this.is_global_event(n)?r.b.run(n,...e):this._app.run(n,...e)}on(t,e,n){const o=t.toString();return this._actions.push({name:o,fn:e}),this.is_global_event(o)?r.b.on(o,e,n):this._app.on(o,e,n)}unmount(){this._actions.forEach(t=>{const{name:e,fn:n}=t;this.is_global_event(e)?r.b.off(e,n):this._app.off(e,n)})}}b.__isAppRunComponent=!0;const y=t=>{if(t||(t="#"),t.startsWith("#")){const[e,...n]=t.split("/");r.b.run(e,...n)||r.b.run("///",e,...n),r.b.run("//",e,...n)}else if(t.startsWith("/")){const[e,n,...o]=t.split("/");r.b.run("/"+n,...o)||r.b.run("///","/"+n,...o),r.b.run("//","/"+n,...o)}else r.b.run(t)||r.b.run("///",t),r.b.run("//",t)};n.d(e,"app",function(){return r.b}),n.d(e,"Component",function(){return b}),n.d(e,"on",function(){return u}),n.d(e,"update",function(){return c}),n.d(e,"event",function(){return c}),n.d(e,"ROUTER_EVENT",function(){return"//"}),n.d(e,"ROUTER_404_EVENT",function(){return"///"}),n.d(e,"customElement",function(){return d}),r.b.createElement=o.b,r.b.render=function(t,e,n){Object(o.c)(t,e,n)},r.b.Fragment=o.a,r.b.webComponent=s,r.b.start=(t,e,n,r,o)=>{const i=Object.assign({},o,{render:!0,global_event:!0}),s=new b(e,n,r);return o&&o.rendered&&(s.rendered=o.rendered),s.mount(t,i),s};const _=t=>{};r.b.on("$",_),r.b.on("debug",t=>_),r.b.on("//",_),r.b.on("#",_),r.b.route=y,r.b.on("route",t=>r.b.route&&r.b.route(t)),"object"==typeof document&&document.addEventListener("DOMContentLoaded",()=>{r.b.route===y&&(window.onpopstate=()=>y(location.hash),y(location.hash))});e.default=r.b;"object"==typeof window&&(window.Component=b,window.React=r.b)},function(t,e,n){"use strict";var r=n(0);let o=0;function i(t,e,n=0){if(0===n&&(o=0),"string"==typeof t)return t;if(Array.isArray(t))return t.map(t=>i(t,e,o++));let s=t;return t&&"function"==typeof t.tag&&Object.getPrototypeOf(t.tag).__isAppRunComponent&&(s=function(t,e,n){const{tag:o,props:i,children:s}=t;let a=i&&i.id;a||(a=`_${n}${Date.now()}`);const c=`_${n}`;e.__componentCache||(e.__componentCache={});let u=e.__componentCache[c];u?a=u.__eid:(u=e.__componentCache[c]=new o(Object.assign({},i,{children:s})).mount(a)).__eid=a,u.mounted&&u.mounted(i,s);const d=u.state;let l="";return d instanceof Promise||!u.view||(l=u._view(d,i),u.rendered&&setTimeout(()=>u.rendered(d,i))),r.b.createElement("section",Object.assign({},i,{id:a}),l)}(t,e,o++)),s&&Array.isArray(s.children)&&(s.children=s.children.map(t=>i(t,e,o++))),s}n.d(e,"b",function(){return c}),n.d(e,"c",function(){return d}),n.d(e,"a",function(){return b});const s="_props";function a(t){const e=[],n=t=>{null!=t&&""!==t&&!1!==t&&e.push("function"==typeof t||"object"==typeof t?t:`${t}`)};return t&&t.forEach(t=>{Array.isArray(t)?t.forEach(t=>n(t)):n(t)}),e}function c(t,e,...n){const r=a(n);if("string"==typeof t)return{tag:t,props:e,children:r};if(Array.isArray(t))return t;if(void 0===t&&n)return r;if(Object.getPrototypeOf(t).__isAppRunComponent)return{tag:t,props:e,children:r};if("function"==typeof t)return t(e,r);throw new Error(`Unknown tag in vdom ${t}`)}const u={},d=function(t,e,n={}){if(null==e)return;if(e=i(e,n),!t)return;Array.isArray(e)?h(t,e):h(t,[e])};function l(t,e){console.assert(!!t),function(t,e){const n=t.nodeName,r=`${e.tag||""}`;return n.toUpperCase()===r.toUpperCase()}(t,e)?(h(t,e.children),m(t,e.props)):t.parentNode.replaceChild(p(e),t)}function h(t,e){const n=Math.min(t.childNodes.length,e.length);for(let r=0;r<n;r++){const n=e[r],o=t.childNodes[r];if(n instanceof HTMLElement)t.insertBefore(n,o);else if("string"==typeof n)o.textContent!==n&&(3===o.nodeType?o.textContent=n:t.replaceChild(f(n),o));else{const e=n.props&&n.props.key;if(e)if(o.key===e)l(t.childNodes[r],n);else{const i=u[e];i?(t.insertBefore(i,o),t.appendChild(o),l(t.childNodes[r],n)):t.insertBefore(p(n),o)}else l(t.childNodes[r],n)}}let r=t.childNodes.length;for(;r>n;)t.removeChild(t.lastChild),r--;if(e.length>n){const r=document.createDocumentFragment();for(let t=n;t<e.length;t++)r.appendChild(p(e[t]));t.appendChild(r)}}function f(t){if(0===t.indexOf("_html:")){const e=document.createElement("div");return e.insertAdjacentHTML("afterbegin",t.substring(6)),e}return document.createTextNode(t)}function p(t,e=!1){if(console.assert(null!=t),"string"==typeof t)return f(t);if(!t.tag||"function"==typeof t.tag)return f(JSON.stringify(t));const n=(e=e||"svg"===t.tag)?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return m(n,t.props),t.children&&t.children.forEach(t=>n.appendChild(p(t,e))),n}function m(t,e){console.assert(!!t),e=function(t,e){e.class=e.class||e.className,delete e.className;const n={};return t&&Object.keys(t).forEach(t=>n[t]=null),e&&Object.keys(e).forEach(t=>n[t]=e[t]),n}(t[s]||{},e||{}),t[s]=e;for(const n in e){const r=e[n];if("style"===n){t.style.cssText&&(t.style.cssText="");for(const e in r)t.style[e]!==r[e]&&(t.style[e]=r[e])}else if(n.startsWith("data-")){const e=n.substring(5).replace(/-(\w)/g,t=>t[1].toUpperCase());t.dataset[e]!==r&&(r||""===r?t.dataset[e]=r:delete t.dataset[e])}else"id"===n||"class"===n||n.startsWith("role")||n.indexOf("-")>0||t instanceof SVGElement?t.getAttribute(n)!==r&&(r?t.setAttribute(n,r):t.removeAttribute(n)):t[n]!==r&&(t[n]=r);"key"===n&&r&&(u[r]=t)}}function b(t,...e){return a(e)}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},,,,function(t,e,n){"use strict";n.r(e);var r,o=n(1),i=n(2);var s="http://www.w3.org/1999/xhtml",a="undefined"==typeof document?void 0:document;function c(t,e){var n=t.nodeName,r=e.nodeName;return n===r||!!(e.actualize&&n.charCodeAt(0)<91&&r.charCodeAt(0)>90)&&n===r.toUpperCase()}function u(t,e,n){t[n]!==e[n]&&(t[n]=e[n],t[n]?t.setAttribute(n,""):t.removeAttribute(n))}var d={OPTION:function(t,e){var n=t.parentNode;if(n){var r=n.nodeName.toUpperCase();"OPTGROUP"===r&&(r=(n=n.parentNode)&&n.nodeName.toUpperCase()),"SELECT"!==r||n.hasAttribute("multiple")||(t.hasAttribute("selected")&&!e.selected&&(t.setAttribute("selected","selected"),t.removeAttribute("selected")),n.selectedIndex=-1)}u(t,e,"selected")},INPUT:function(t,e){u(t,e,"checked"),u(t,e,"disabled"),t.value!==e.value&&(t.value=e.value),e.hasAttribute("value")||t.removeAttribute("value")},TEXTAREA:function(t,e){var n=e.value;t.value!==n&&(t.value=n);var r=t.firstChild;if(r){var o=r.nodeValue;if(o==n||!n&&o==t.placeholder)return;r.nodeValue=n}},SELECT:function(t,e){if(!e.hasAttribute("multiple")){for(var n,r,o=-1,i=0,s=t.firstChild;s;)if("OPTGROUP"===(r=s.nodeName&&s.nodeName.toUpperCase()))s=(n=s).firstChild;else{if("OPTION"===r){if(s.hasAttribute("selected")){o=i;break}i++}!(s=s.nextSibling)&&n&&(s=n.nextSibling,n=null)}t.selectedIndex=o}}},l=1,h=11,f=3,p=8;function m(){}function b(t){return t.id}var y=function(t){return function(e,n,o){if(o||(o={}),"string"==typeof n)if("#document"===e.nodeName||"HTML"===e.nodeName){var i=n;(n=a.createElement("html")).innerHTML=i}else u=n,!r&&a.createRange&&(r=a.createRange()).selectNode(a.body),r&&r.createContextualFragment?y=r.createContextualFragment(u):(y=a.createElement("body")).innerHTML=u,n=y.childNodes[0];var u,y,_,g=o.getNodeKey||b,v=o.onBeforeNodeAdded||m,E=o.onNodeAdded||m,A=o.onBeforeElUpdated||m,N=o.onElUpdated||m,C=o.onBeforeNodeDiscarded||m,O=o.onNodeDiscarded||m,w=o.onBeforeElChildrenUpdated||m,x=!0===o.childrenOnly,T={};function S(t){_?_.push(t):_=[t]}function j(t,e,n){!1!==C(t)&&(e&&e.removeChild(t),O(t),function t(e,n){if(e.nodeType===l)for(var r=e.firstChild;r;){var o=void 0;n&&(o=g(r))?S(o):(O(r),r.firstChild&&t(r,n)),r=r.nextSibling}}(t,n))}function k(t){E(t);for(var e=t.firstChild;e;){var n=e.nextSibling,r=g(e);if(r){var o=T[r];o&&c(e,o)&&(e.parentNode.replaceChild(o,e),R(o,e))}k(e),e=n}}function R(r,o,i){var s=g(o);if(s&&delete T[s],!n.isSameNode||!n.isSameNode(e)){if(!i){if(!1===A(r,o))return;if(t(r,o),N(r),!1===w(r,o))return}"TEXTAREA"!==r.nodeName?function(t,e){var n,r,o,i,s,u=e.firstChild,h=t.firstChild;t:for(;u;){for(i=u.nextSibling,n=g(u);h;){if(o=h.nextSibling,u.isSameNode&&u.isSameNode(h)){u=i,h=o;continue t}r=g(h);var m=h.nodeType,b=void 0;if(m===u.nodeType&&(m===l?(n?n!==r&&((s=T[n])?o===s?b=!1:(t.insertBefore(s,h),r?S(r):j(h,t,!0),h=s):b=!1):r&&(b=!1),(b=!1!==b&&c(h,u))&&R(h,u)):m!==f&&m!=p||(b=!0,h.nodeValue!==u.nodeValue&&(h.nodeValue=u.nodeValue))),b){u=i,h=o;continue t}r?S(r):j(h,t,!0),h=o}if(n&&(s=T[n])&&c(s,u))t.appendChild(s),R(s,u);else{var y=v(u);!1!==y&&(y&&(u=y),u.actualize&&(u=u.actualize(t.ownerDocument||a)),t.appendChild(u),k(u))}u=i,h=o}!function(t,e,n){for(;e;){var r=e.nextSibling;(n=g(e))?S(n):j(e,t,!0),e=r}}(t,h,r);var _=d[t.nodeName];_&&_(t,e)}(r,o):d.TEXTAREA(r,o)}}!function t(e){if(e.nodeType===l||e.nodeType===h)for(var n=e.firstChild;n;){var r=g(n);r&&(T[r]=n),t(n),n=n.nextSibling}}(e);var M,U,V=e,P=V.nodeType,L=n.nodeType;if(!x)if(P===l)L===l?c(e,n)||(O(e),V=function(t,e){for(var n=t.firstChild;n;){var r=n.nextSibling;e.appendChild(n),n=r}return e}(e,(M=n.nodeName,(U=n.namespaceURI)&&U!==s?a.createElementNS(U,M):a.createElement(M)))):V=n;else if(P===f||P===p){if(L===P)return V.nodeValue!==n.nodeValue&&(V.nodeValue=n.nodeValue),V;V=n}if(V===n)O(e);else if(R(V,n,x),_)for(var $=0,W=_.length;$<W;$++){var B=T[_[$]];B&&j(B,B.parentNode,!1)}return!x&&V!==e&&e.parentNode&&(V.actualize&&(V=V.actualize(e.ownerDocument||a)),e.parentNode.replaceChild(V,e)),V}}(function(t,e){var n,r,o,i,s,a=e.attributes;for(n=a.length-1;n>=0;--n)o=(r=a[n]).name,i=r.namespaceURI,s=r.value,i?(o=r.localName||o,t.getAttributeNS(i,o)!==s&&t.setAttributeNS(i,o,s)):t.getAttribute(o)!==s&&t.setAttribute(o,s);for(n=(a=t.attributes).length-1;n>=0;--n)!1!==(r=a[n]).specified&&(o=r.name,(i=r.namespaceURI)?(o=r.localName||o,e.hasAttributeNS(i,o)||t.removeAttributeNS(i,o)):e.hasAttribute(o)||t.removeAttribute(o))});n.d(e,"app",function(){return o.app}),n.d(e,"Component",function(){return o.Component}),n.d(e,"on",function(){return o.on}),n.d(e,"update",function(){return o.update}),n.d(e,"event",function(){return o.event}),n.d(e,"customElement",function(){return o.customElement}),n.d(e,"ROUTER_404_EVENT",function(){return o.ROUTER_404_EVENT}),n.d(e,"ROUTER_EVENT",function(){return o.ROUTER_EVENT}),o.default.createElement=i.b,o.default.render=function(t,e,n){if("string"==typeof e)if(e=e.trim(),t.firstChild){const n=t.cloneNode(!1);n.innerHTML=e,y(t,n)}else t.innerHTML=e;else Object(i.c)(t,e,n)},o.default.Fragment=i.a;e.default=o.default}])});
//# sourceMappingURL=apprun-html.js.map