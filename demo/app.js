!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.apprun=e():t.apprun=e()}(this,function(){return function(t){var e={};function n(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(s,o,function(e){return t[e]}.bind(null,o));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return s});class s{constructor(){this._events={}}on(t,e,n={}){this._events[t]=this._events[t]||[],this._events[t].push({fn:e,options:n})}off(t,e){let n=this._events[t];n&&((n=n.filter(t=>t.fn!==e)).length?this._events[t]=n:delete this._events[t])}run(t,...e){let n=this._events[t];return console.assert(!!n,"No subscriber for event: "+t),n&&((n=n.filter(n=>{const{fn:s,options:o}=n;return o.delay?this.delay(t,s,e,o):s.apply(this,e),!n.options.once})).length?this._events[t]=n:delete this._events[t]),n?n.length:0}once(t,e,n={}){this.on(t,e,Object.assign({},n,{once:!0}))}delay(t,e,n,s){s._t&&clearTimeout(s._t),s._t=setTimeout(()=>{clearTimeout(s._t),e.apply(this,n)},s.delay)}}let o;const a="object"==typeof self&&self.self===self&&self||"object"==typeof t&&t.global===t&&t;a.app&&a._AppRunVersions?o=a.app:(o=new s,a.app=o,a._AppRunVersions="AppRun-2"),e.b=o}).call(this,n(3))},function(t,e,n){"use strict";n.r(e);var s=n(0),o=n(2);const a=(t,e={})=>(class extends HTMLElement{constructor(){super()}get component(){return this._component}get state(){return this._component.state}static get observedAttributes(){return Object.assign({},e).observedAttributes}connectedCallback(){if(this.isConnected&&!this._component){const n=Object.assign({render:!0,shadow:!1},e);this._shadowRoot=n.shadow?this.attachShadow({mode:"open"}):this;const s={};Array.from(this.attributes).forEach(t=>s[t.name]=t.value);const o=this.children?Array.from(this.children):[];o.forEach(t=>t.parentElement.removeChild(t)),this._component=new t(Object.assign({},s,{children:o})).mount(this._shadowRoot,n),this._component.mounted&&this._component.mounted(s,o),this.on=this._component.on.bind(this._component),this.run=this._component.run.bind(this._component)}}disconnectedCallback(){this._component.unmount(),this._component=null}attributeChangedCallback(...t){this._component&&this._component.run("attributeChanged",...t)}});var i=(t,e,n)=>{"undefined"!=typeof customElements&&customElements.define(t,a(e,n))};const r={meta:new WeakMap,defineMetadata(t,e,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[t]=e},getMetadataKeys(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata(t,e){return e=Object.getPrototypeOf(e),this.meta.get(e)?this.meta.get(e)[t]:null}};function c(t,e={}){return(n,s,o)=>{const a=t?t.toString():s;return r.defineMetadata(`apprun-update:${a}`,{name:a,key:s,options:e},n),o}}function l(t,e={}){return function(n,s){const o=t?t.toString():s;r.defineMetadata(`apprun-update:${o}`,{name:o,key:s,options:e},n)}}function d(t,e){return function(n){return i(t,n,e),n}}const u=(t,e)=>(e?t.state[e]:t.state)||"",p=(t,e,n)=>{if(e){const s=Object.assign({},t.state);s[e]=n,t.setState(s)}else t.setState(n)};var h=(t,e,n,s)=>{if(t.startsWith("$on")){const n=e[t];if(t=t.substring(1),"boolean"==typeof n)e[t]=e=>s.run(t,e);else if("string"==typeof n)e[t]=t=>s.run(n,t);else if("function"==typeof n)e[t]=t=>s.setState(n(s.state,t));else if(Array.isArray(n)){const[o,...a]=n;"string"==typeof o?e[t]=t=>s.run(o,...a,t):"function"==typeof o&&(e[t]=t=>s.setState(o(s.state,...a,t)))}}else if("$bind"===t){const o=e.type||"text",a="string"==typeof e[t]?e[t]:e.name;if("input"===n)switch(o){case"checkbox":e.checked=u(s,a),e.onclick=t=>p(s,a||t.target.name,t.target.checked);break;case"radio":e.checked=u(s,a)===e.value,e.onclick=t=>p(s,a||t.target.name,t.target.value);break;case"number":case"range":e.value=u(s,a),e.oninput=t=>p(s,a||t.target.name,Number(t.target.value));break;default:e.value=u(s,a),e.oninput=t=>p(s,a||t.target.name,t.target.value)}else"select"===n?(e.value=u(s,a),e.onchange=t=>{t.target.multiple||p(s,a||t.target.name,t.target.value)}):"option"===n&&(e.selected=u(s,a),e.onclick=t=>p(s,a||t.target.name,t.target.selected))}else app.run("$",{key:t,tag:n,props:e,component:s})};const m={};s.b.on("get-components",t=>t.components=m);const f=t=>t;class b{constructor(t,e,n,o){this.state=t,this.view=e,this.update=n,this.options=o,this._app=new s.a,this._actions=[],this._global_events=[],this._history=[],this._history_idx=-1,this._history_prev=()=>{this._history_idx--,this._history_idx>=0?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=0},this._history_next=()=>{this._history_idx++,this._history_idx<this._history.length?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=this._history.length-1},this.start=(t=null,e={render:!0})=>this.mount(t,Object.assign({},e,{render:!0}))}render(t,e){s.b.render(t,e,this)}_view(t,e=null){if(!this.view)return;const n=s.b.createElement;s.b.createElement=(t,e,...s)=>(e&&Object.keys(e).forEach(n=>{n.startsWith("$")&&(h(n,e,t,this),delete e[n])}),n(t,e,...s));const o=e?this.view(t,e):this.view(t);return s.b.createElement=n,o}renderState(t){if(!this.view)return;const e=this._view(t);if(s.b.debug&&s.b.run("debug",{component:this,state:t,vdom:e||"[vdom is null - no render]"}),"object"!=typeof document)return;const n="string"==typeof this.element?document.getElementById(this.element):this.element;if(n){const t="_c";if(this.unload){if(n._component!==this&&(this.tracking_id=(new Date).valueOf().toString(),n.setAttribute(t,this.tracking_id),"undefined"!=typeof MutationObserver)){const e=new MutationObserver(t=>{const{removedNodes:s,oldValue:o}=t[0];(o===this.tracking_id||Array.from(s).indexOf(n)>=0)&&(this.unload(this.state),e.disconnect())});n.parentNode&&e.observe(n.parentNode,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[t]})}}else n.removeAttribute&&n.removeAttribute(t);n._component=this}this.render(n,e),this.rendered&&this.rendered(this.state)}setState(t,e={render:!0,history:!1}){if(t instanceof Promise)t.then(t=>{this.setState(t,e)}).catch(t=>{throw console.error(t),t}),this._state=t;else{if(this._state=t,null==t)return;this.state=t,!1!==e.render&&this.renderState(t),!1!==e.history&&this.enable_history&&(this._history=[...this._history,t],this._history_idx=this._history.length-1),"function"==typeof e.callback&&e.callback(this.state)}}mount(t=null,e){return console.assert(!this.element,"Component already mounted."),this.options=e=Object.assign({},this.options,e),this.element=t,this.global_event=e.global_event,this.enable_history=!!e.history,this.enable_history&&(this.on(e.history.prev||"history-prev",this._history_prev),this.on(e.history.next||"history-next",this._history_next)),this.add_actions(),void 0===this.state&&(this.state=null!=this.model?this.model:{}),e.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),m[t]=m[t]||[],m[t].push(this),this}is_global_event(t){return t&&(this.global_event||this._global_events.indexOf(t)>=0||t.startsWith("#")||t.startsWith("/")||t.startsWith("@"))}add_action(t,e,n={}){e&&"function"==typeof e&&(n.global&&this._global_events.push(t),this.on(t,(...o)=>{const a=e(this.state,...o);s.b.debug&&s.b.run("debug",{component:this,event:t,e:o,state:this.state,newState:a,options:n}),this.setState(a,n)},n))}add_actions(){const t=this.update||{};r.getMetadataKeys(this).forEach(e=>{if(e.startsWith("apprun-update:")){const n=r.getMetadata(e,this);t[n.name]=[this[n.key].bind(this),n.options]}});const e={};Array.isArray(t)?t.forEach(t=>{const[n,s,o]=t;n.toString().split(",").forEach(t=>e[t.trim()]=[s,o])}):Object.keys(t).forEach(n=>{const s=t[n];("function"==typeof s||Array.isArray(s))&&n.split(",").forEach(t=>e[t.trim()]=s)}),e["."]||(e["."]=f),Object.keys(e).forEach(t=>{const n=e[t];"function"==typeof n?this.add_action(t,n):Array.isArray(n)&&this.add_action(t,n[0],n[1])})}run(t,...e){const n=t.toString();return this.is_global_event(n)?s.b.run(n,...e):this._app.run(n,...e)}on(t,e,n){const o=t.toString();return this._actions.push({name:o,fn:e}),this.is_global_event(o)?s.b.on(o,e,n):this._app.on(o,e,n)}unmount(){this._actions.forEach(t=>{const{name:e,fn:n}=t;this.is_global_event(e)?s.b.off(e,n):this._app.off(e,n)})}}b.__isAppRunComponent=!0;const y=t=>{if(t||(t="#"),t.startsWith("#")){const[e,...n]=t.split("/");s.b.run(e,...n)||s.b.run("///",e,...n),s.b.run("//",e,...n)}else if(t.startsWith("/")){const[e,n,...o]=t.split("/");s.b.run("/"+n,...o)||s.b.run("///","/"+n,...o),s.b.run("//","/"+n,...o)}else s.b.run(t)||s.b.run("///",t),s.b.run("//",t)};n.d(e,"app",function(){return s.b}),n.d(e,"Component",function(){return b}),n.d(e,"on",function(){return l}),n.d(e,"update",function(){return c}),n.d(e,"event",function(){return c}),n.d(e,"ROUTER_EVENT",function(){return"//"}),n.d(e,"ROUTER_404_EVENT",function(){return"///"}),n.d(e,"customElement",function(){return d}),s.b.createElement=o.b,s.b.render=function(t,e,n){Object(o.c)(t,e,n)},s.b.Fragment=o.a,s.b.webComponent=i,s.b.start=(t,e,n,s,o)=>{const a=Object.assign({},o,{render:!0,global_event:!0}),i=new b(e,n,s);return o&&o.rendered&&(i.rendered=o.rendered),i.mount(t,a),i};const g=t=>{};s.b.on("$",g),s.b.on("debug",t=>g),s.b.on("//",g),s.b.on("#",g),s.b.route=y,s.b.on("route",t=>s.b.route&&s.b.route(t)),"object"==typeof document&&document.addEventListener("DOMContentLoaded",()=>{s.b.route===y&&(window.onpopstate=()=>y(location.hash),y(location.hash))});e.default=s.b;"object"==typeof window&&(window.Component=b,window.React=s.b)},function(t,e,n){"use strict";var s=n(0);let o=0;function a(t,e,n=0){if(0===n&&(o=0),"string"==typeof t)return t;if(Array.isArray(t))return t.map(t=>a(t,e,o++));let i=t;return t&&"function"==typeof t.tag&&Object.getPrototypeOf(t.tag).__isAppRunComponent&&(i=function(t,e,n){const{tag:o,props:a,children:i}=t;let r=a&&a.id;r||(r=`_${n}${Date.now()}`);const c=`_${n}`;e.__componentCache||(e.__componentCache={});let l=e.__componentCache[c];l?r=l.__eid:(l=e.__componentCache[c]=new o(Object.assign({},a,{children:i})).mount(r)).__eid=r,l.mounted&&l.mounted(a,i);const d=l.state;let u="";return d instanceof Promise||!l.view||(u=l._view(d,a),l.rendered&&setTimeout(()=>l.rendered(d,a))),s.b.createElement("section",Object.assign({},a,{id:r}),u)}(t,e,o++)),i&&Array.isArray(i.children)&&(i.children=i.children.map(t=>a(t,e,o++))),i}n.d(e,"b",function(){return c}),n.d(e,"c",function(){return d}),n.d(e,"a",function(){return b});const i="_props";function r(t){const e=[],n=t=>{null!=t&&""!==t&&!1!==t&&e.push("function"==typeof t||"object"==typeof t?t:`${t}`)};return t&&t.forEach(t=>{Array.isArray(t)?t.forEach(t=>n(t)):n(t)}),e}function c(t,e,...n){const s=r(n);if("string"==typeof t)return{tag:t,props:e,children:s};if(Array.isArray(t))return t;if(void 0===t&&n)return s;if(Object.getPrototypeOf(t).__isAppRunComponent)return{tag:t,props:e,children:s};if("function"==typeof t)return t(e,s);throw new Error(`Unknown tag in vdom ${t}`)}const l={},d=function(t,e,n={}){if(null==e)return;if(e=a(e,n),!t)return;Array.isArray(e)?p(t,e):p(t,[e])};function u(t,e){console.assert(!!t),function(t,e){const n=t.nodeName,s=`${e.tag||""}`;return n.toUpperCase()===s.toUpperCase()}(t,e)?(p(t,e.children),f(t,e.props)):t.parentNode.replaceChild(m(e),t)}function p(t,e){const n=Math.min(t.childNodes.length,e.length);for(let s=0;s<n;s++){const n=e[s],o=t.childNodes[s];if(n instanceof HTMLElement)t.insertBefore(n,o);else if("string"==typeof n)o.textContent!==n&&(3===o.nodeType?o.textContent=n:t.replaceChild(h(n),o));else{const e=n.props&&n.props.key;if(e)if(o.key===e)u(t.childNodes[s],n);else{const a=l[e];a?(t.insertBefore(a,o),t.appendChild(o),u(t.childNodes[s],n)):t.insertBefore(m(n),o)}else u(t.childNodes[s],n)}}let s=t.childNodes.length;for(;s>n;)t.removeChild(t.lastChild),s--;if(e.length>n){const s=document.createDocumentFragment();for(let t=n;t<e.length;t++)s.appendChild(m(e[t]));t.appendChild(s)}}function h(t){if(0===t.indexOf("_html:")){const e=document.createElement("div");return e.insertAdjacentHTML("afterbegin",t.substring(6)),e}return document.createTextNode(t)}function m(t,e=!1){if(console.assert(null!=t),"string"==typeof t)return h(t);if(!t.tag||"function"==typeof t.tag)return h(JSON.stringify(t));const n=(e=e||"svg"===t.tag)?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return f(n,t.props),t.children&&t.children.forEach(t=>n.appendChild(m(t,e))),n}function f(t,e){console.assert(!!t),e=function(t,e){e.class=e.class||e.className,delete e.className;const n={};return t&&Object.keys(t).forEach(t=>n[t]=null),e&&Object.keys(e).forEach(t=>n[t]=e[t]),n}(t[i]||{},e||{}),t[i]=e;for(const n in e){const s=e[n];if("style"===n){t.style.cssText&&(t.style.cssText="");for(const e in s)t.style[e]!==s[e]&&(t.style[e]=s[e])}else if(n.startsWith("data-")){const e=n.substring(5).replace(/-(\w)/g,t=>t[1].toUpperCase());t.dataset[e]!==s&&(s||""===s?t.dataset[e]=s:delete t.dataset[e])}else"id"===n||"class"===n||n.startsWith("role")||n.indexOf("-")>0||t instanceof SVGElement?t.getAttribute(n)!==s&&(s?t.setAttribute(n,s):t.removeAttribute(n)):t[n]!==s&&(t[n]=s);"key"===n&&s&&(l[s]=t)}}function b(t,...e){return r(e)}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},,function(t,e,n){"use strict";n.r(e);var s=n(1);let o;const a=({url:t})=>{o.innerHTML="<div></div>",$(o.firstChild).load(t)};s.default.on("#",()=>s.default.render(o,s.default.createElement(a,{url:"demo/home.html"}))),s.default.on("#new",()=>s.default.render(o,s.default.createElement(a,{url:"demo/new.html"})));var i,r;function c(t){return Math.round(1e3*Math.random())%t}var l=function(t){i=performance.now(),r=t},d=function(){window.setTimeout(function(){var t=performance.now();console.log(r+" took "+(t-i))},0)};const u=new class{constructor(){this.data=[],this.backup=null,this.selected=null,this.id=1}buildData(t=1e3){for(var e=["pretty","large","big","small","tall","short","long","handsome","plain","quaint","clean","elegant","easy","angry","crazy","helpful","mushy","odd","unsightly","adorable","important","inexpensive","cheap","expensive","fancy"],n=["red","yellow","blue","green","pink","brown","purple","brown","white","black","orange"],s=["table","chair","house","bbq","desk","car","pony","cookie","sandwich","burger","pizza","mouse","keyboard"],o=[],a=0;a<t;a++)o.push({id:this.id++,label:e[c(e.length)]+" "+n[c(n.length)]+" "+s[c(s.length)]});return o}updateData(t=10){for(let t=0;t<this.data.length;t+=10)this.data[t].label+=" !!!"}delete(t){this.data=this.data.filter((e,n)=>e.id!=t),this.selected=null}run(){this.data=this.buildData(),this.selected=null}add(){this.data=this.data.concat(this.buildData(1e3)),this.selected=null}update(){this.updateData(),this.selected=null}select(t){this.selected=t}hideAll(){this.backup=this.data,this.data=[],this.selected=null}showAll(){this.data=this.backup,this.backup=null,this.selected=null}runLots(){this.data=this.buildData(1e4),this.selected=null}clear(){this.data=[],this.selected=null}swapRows(){if(this.data.length>998){var t=this.data[1];this.data[1]=this.data[998],this.data[998]=t}}},p={"#benchmark":t=>t,run:t=>(t.run(),t),add:t=>(t.add(),t),remove(t,e){t.delete(e),document.getElementById(e).remove()},select(t,e){t.selected&&(document.getElementById(t.selected).className="",t.selected=null),t.select(e),document.getElementById(e).className="danger"},updaterow:t=>(t.update(),t),runlots:t=>(t.runLots(),t),clear:t=>(t.clear(),t),swaprows:t=>(t.swapRows(),t)},h=t=>{for(;t;){if("TR"===t.tagName)return t.id;t=t.parentNode}};document.body.addEventListener("click",t=>{const e=t.target;e&&("BUTTON"===e.tagName&&e.id?(t.preventDefault(),l(e.id),m.run(e.id),d()):e.matches(".remove")?(t.preventDefault(),l("remove"),m.run("remove",h(e)),d()):e.matches(".lbl")&&(t.preventDefault(),l("select"),m.run("select",h(e)),d()))});let m=new s.Component(u,t=>{const e=t.data.map(e=>{const n=e.id==t.selected?"danger":"",o=e.id;return s.default.createElement("tr",{className:n,id:o,key:o},s.default.createElement("td",{className:"col-md-1"},o),s.default.createElement("td",{className:"col-md-4"},s.default.createElement("a",{className:"lbl"},e.label)),s.default.createElement("td",{className:"col-md-1"},s.default.createElement("a",{className:"remove"},s.default.createElement("span",{className:"glyphicon glyphicon-remove remove","aria-hidden":"true"}))),s.default.createElement("td",{className:"col-md-6"}))});return s.default.createElement("div",null,s.default.createElement("div",null,s.default.createElement("button",{type:"button",id:"run"},"Create 1,000 rows"),s.default.createElement("button",{type:"button",id:"runlots"},"Create 10,000 rows"),s.default.createElement("button",{type:"button",id:"add"},"Append 1,000 rows"),s.default.createElement("button",{type:"button",id:"updaterow"},"Update every 10th row"),s.default.createElement("button",{type:"button",id:"clear"},"Clear"),s.default.createElement("button",{type:"button",id:"swaprows"},"Swap Rows")),s.default.createElement("br",null),s.default.createElement("table",{className:"table table-hover table-striped test-data",id:"main-table"},s.default.createElement("tbody",null,e)))},p);m.unload=()=>{console.log("benchmark.unload")};var f=[{name:"Hello World ($bind)",code:"// Hello World ($bind)\nconst state = '';\nconst view = state => <div>\n  <h1>Hello {state}</h1>\n  <input $bind />\n</div>;\napp.start(document.body, state, view, {});\n"},{name:"Hello World ($on)",code:"// Hello World ($on)\nconst state = { who: 'World' };\nconst view = ({who}) => <div>\n  <h1>Hello {who}</h1>\n  <p><input $oninput value={who}/> $oninput</p>\n  <p><input $oninput=\"hello\" value={who}/> $oninput=\"event\"</p>\n  <p><input $oninput={hello} value={who}/> $oninput=Function</p>\n  <p><input $oninput={[hello]} value={who}/> $oninput=Tuple [Function, ...p] </p>\n</div>;\n// update tuple, new in 1.19.2\nconst update = [\n  ['oninput, hello', (_, e) => ({who:e.target.value})]\n];\nconst hello = (_, e) => ({who:e.target.value});\napp.start(document.body, state, view, update);\n"},{name:"Hello World (debounce)",code:"// Hello World (debounce)\nconst state = '';\nconst view = state => <div>\n  <h1>Hello {state}</h1>\n  <input $oninput />\n</div>;\nconst update = {\n  'oninput': [(_, e) => e.target.value, { delay: 300 }]\n}\napp.start(document.body, state, view, update);\n"},{name:"Clock",code:"// Clock\nconst state = new Date();\nconst view = state => <h1>{state.toLocaleTimeString()}</h1>;\nconst update = {\n  'timer': state => new Date()\n}\nwindow.setInterval(() => { app.run('timer') }, 1000);\napp.start(document.body, state, view, update);\n"},{name:"Stopwatch",code:"// Stopwatch\nconst state = {\n  start: new Date(),\n  active: false,\n  elapsed: '0'\n}\nconst view = state => {\n  return <div>\n    <h1>{state.elapsed}</h1>\n    <button $onclick=\"start\">Start</button>\n    <button $onclick=\"stop\">Stop</button>\n  </div>;\n};\nconst update = {\n  'start':state =>({\n    start: new Date(),\n    active: true}),\n  'stop': state => ({ ...state, active: false }),\n  'timer': state => {\n    if(state.active){\n      state.elapsed = ((new Date() - state.start) / 1000).toFixed(3) + ' seconds';\n      return state\n    }\n  }\n};\nwindow.setInterval(() => { app.run('timer') }, 100);\napp.start(document.body, state, view, update);\n"},{name:"Counter (JSX)",code:"// Counter (JSX)\nconst state = 0;\nconst view = state => <div>\n  <h1>{state}</h1>\n  <button $onclick='-1'>-1</button>\n  <button $onclick='+1'>+1</button>\n</div>;\nconst update = {\n  '+1': state => state + 1,\n  '-1': state => state - 1\n};\napp.start(document.body, state, view, update);\n"},{name:"Counter (HTML)",code:"// Counter (HTML)\nconst state = 0;\nconst view = state => `<div>\n  <h1>${state}</h1>\n  <button onclick=\"app.run('-1')\">-1</button>\n  <button onclick=\"app.run('+1')\">+1</button>\n</div>`;\nconst update = {\n  '+1': state => state + 1,\n  '-1': state => state - 1\n};\napp.start(document.body, state, view, update);\n"},{name:"Counter (Web Component)",code:"// Counter (Web Component)\nclass Counter extends Component {\n  state = 0;\n  view = state => <>\n    <h1>{state}</h1>\n    <button $onclick='-1'>-1</button>\n    <button $onclick='+1'>+1</button>\n  </>;\n  update = {\n    '+1': state => state + 1,\n    '-1': state => state - 1\n  };\n}\nconst wc = document.createElement('my-app');\ndocument.body.appendChild(wc);\napp.webComponent('my-app', Counter);\n"},{name:"Async fetch",code:"// Async fetch\nconst state = {};\nconst view = (state) => <>\n  <div><button $onclick='fetchComic'>XKCD</button></div>\n  {state.comic && <>\n    <h3>{state.comic.title}</h3>\n    <img src={state.comic.url} />\n  </>}\n</>;\nconst update = {\n  'fetchComic': async _ => {\n    const response = await fetch('https://xkcd-imgs.herokuapp.com/');\n    const comic = await response.json();\n    return {comic};\n  }\n};\napp.start(document.body, state, view, update);\n"},{name:"Animation Directive",code:"// Animation Directive\napp.on('$', ({key, props}) => {\n  if (key === '$animation') {\n    const value = props[key];\n    if (typeof value === 'string') {\n      props.class = `animated ${value}`;\n    }\n  }\n});\n\nconst state = {\n  animation: true\n}\n\nconst view = state => <>\n  <img $animation={state.animation && 'bounce infinite'} src='logo.png' />\n  <div $animation='bounceInRight'>\n    <button disabled={state.animation} $onclick='start-animation'>start</button>\n    <button disabled={!state.animation} $onclick='stop-animation'>stop</button>\n  </div>\n</>\n\nconst update = {\n  'start-animation': state => ({ ...state, animation: true }),\n  'stop-animation': state => ({...state, animation: false})\n}\napp.start(document.body, state, view, update);\n"},{name:"Pikaday",code:"// Pikaday\n\nconst state = { day: '8/19/2016' }\n\nconst view = state => <>\n  <h1>{state}</h1>\n  <input autocomplete=\"off\" id=\"datepicker\" placeholder=\"Click to pick a date\"/>\n</>\nconst update = {\n  'set-date': (state, e) => ({ ...state, day: e })\n}\n\napp.start(document.body, state, view, update, {\n  rendered: () => {\n    const input = document.getElementById('datepicker')\n    let pik = new Pikaday({\n      field: input,\n      onSelect: d => {\n        pik.destroy();\n        app.run('set-date', d.toLocaleDateString());\n      }\n    })\n  }\n});\n"},{name:"Child Component",code:"// Child Component\n\nclass Counter extends Component {\n  state = 0;\n  view = state => (\n    <div>\n      <h1>{state}</h1>\n      <button $onclick='-1'>-1</button>\n      <button $onclick='+1'>+1</button>\n    </div>\n  );\n  update = {\n    '+1': state => state + 1,\n    '-1': state => state - 1\n  };\n}\n\nclass App extends Component {\n  state = 0;\n  view = state => (\n    <div>\n      <button $onclick='+1'>{state}</button>\n      <hr/>\n      <Counter />\n      <Counter />\n      <Counter />\n    </div>\n  );\n  update = {\n    '+1': state => state + 1,\n  };\n}\n\nnew App().start(document.body);\n"}];const b=t=>`<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n  <script src="https://cdnjs.cloudflare.com/ajax/libs/custom-elements/1.1.2/custom-elements.min.js"><\/script>\n  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">\n  <title>AppRun Playground</title>\n  <style>\n    body {\n      font-family: "Benton Sans", "Helvetica Neue", helvetica, arial, sans-serif;\n      margin: 2em;\n    }\n  </style>\n  <script src="https://unpkg.com/@babel/standalone/babel.min.js"><\/script>\n  <script src="https://unpkg.com/apprun@es6/dist/apprun-html.js"><\/script>\n  <link rel="stylesheet" href="https://unpkg.com/pikaday@latest/css/pikaday.css">\n  <script src="https://unpkg.com/pikaday@latest/pikaday.js"><\/script>\n</head>\n<body>\n<script type="text/babel" data-presets="es2017, react">\n  ${t}\n<\/script>\n</body>\n</html>`,y=({code:t})=>{const e=window.open().document;e.open(),e.write(b(t)),e.close()},g=({code:t})=>{let e=document.getElementById("iframe");e.parentNode.replaceChild(e.cloneNode(),e);const n=(e=document.getElementById("iframe")).contentWindow.document;n.open(),n.write(b(t)),n.close()};class v extends s.Component{constructor(){super(...arguments),this.codeEditor=null,this.state=Object.assign({},f[0],{selectedIndex:0}),this.view=t=>s.default.createElement("div",{class:"playground"},s.default.createElement("div",{class:"row"},s.default.createElement("div",{class:"col-sm-6"},"Examples: ",s.default.createElement("select",{$onchange:"select"},f.map((e,n)=>s.default.createElement("option",{selected:n===t.selectedIndex},e.name)))),s.default.createElement("div",{class:"col-sm-6"},s.default.createElement("button",{class:"btn btn-default btn-sm pull-right",$onclick:"openTab"},"Open in a new tab"))),s.default.createElement("div",{class:"row"},s.default.createElement("div",{class:"col-sm-6"},s.default.createElement("textarea",{id:"playground-code"},t.code)),s.default.createElement("div",{class:"col-sm-6"},s.default.createElement("iframe",{id:"iframe"})))),this.update={"#play":(t,e)=>{const n=parseInt(e);return isNaN(n)||(t=Object.assign({},f[n],{selectedIndex:n})),this.codeEditor=null,t},select:(t,e)=>{this.state=Object.assign({},f[e.target.selectedIndex],{selectedIndex:e.target.selectedIndex}),history.pushState(null,null,"#play/"+e.target.selectedIndex),this.codeEditor.setValue(this.state.code)},change:(t,e)=>{t.code=e,g(t)},openTab:(t,e)=>{e.preventDefault(),y(t)}},this.rendered=t=>{this.codeEditor||(this.codeEditor=CodeMirror.fromTextArea(document.getElementById("playground-code"),{lineNumbers:!0,mode:"jsx"}),this.codeEditor.on("change",t=>this.run("change",t.getValue()))),g(t)},this.unload=()=>this.codeEditor=null}}s.default.on(s.ROUTER_EVENT,t=>{const e=document.querySelectorAll(".navbar-nav li");for(let t=0;t<e.length;++t)e[t].classList.remove("active");const n=document.querySelector(`[href='${t}']`);n&&n.parentElement.classList.add("active")});const _=document.getElementById("my-app");[t=>o=t,t=>m.mount(t),t=>(new v).mount(t)].forEach(t=>t(_))}])});
//# sourceMappingURL=app.js.map