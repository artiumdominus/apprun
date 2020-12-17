!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.apprun=e():t.apprun=e()}(this,(function(){return(()=>{"use strict";var t={752:function(t,e,n){var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.App=void 0;var o=function(){function t(){this._events={}}return t.prototype.on=function(t,e,n){void 0===n&&(n={}),this._events[t]=this._events[t]||[],this._events[t].push({fn:e,options:n})},t.prototype.off=function(t,e){var n=this._events[t]||[];this._events[t]=n.filter((function(t){return t.fn!==e}))},t.prototype.find=function(t){return this._events[t]},t.prototype.run=function(t){for(var e=this,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var o=this._events[t]||[];return console.assert(o&&o.length>0,"No subscriber for event: "+t),this._events[t]=o.filter((function(t){return!t.options.once})),o.forEach((function(r){var o=r.fn,i=r.options;return i.delay?e.delay(t,o,n,i):o.apply(e,n),!r.options.once})),o.length},t.prototype.once=function(t,e,n){void 0===n&&(n={}),this.on(t,e,r(r({},n),{once:!0}))},t.prototype.delay=function(t,e,n,r){var o=this;r._t&&clearTimeout(r._t),r._t=setTimeout((function(){clearTimeout(r._t),e.apply(o,n)}),r.delay)},t}();e.App=o;var i,a="object"==typeof self&&self.self===self&&self||"object"==typeof n.g&&n.g.global===n.g&&n.g;a.app&&a._AppRunVersions?i=a.app:(i=new o,a.app=i,a._AppRunVersions="AppRun-1"),e.default=i},591:function(t,e,n){var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.customElement=e.ROUTER_404_EVENT=e.ROUTER_EVENT=e.event=e.Fragment=e.update=e.on=e.Component=e.app=void 0;var i=o(n(752));e.app=i.default;var a=n(170);Object.defineProperty(e,"Fragment",{enumerable:!0,get:function(){return a.Fragment}});var u=n(999);Object.defineProperty(e,"Component",{enumerable:!0,get:function(){return u.Component}});var s=n(153);Object.defineProperty(e,"on",{enumerable:!0,get:function(){return s.on}}),Object.defineProperty(e,"update",{enumerable:!0,get:function(){return s.update}}),Object.defineProperty(e,"event",{enumerable:!0,get:function(){return s.update}}),Object.defineProperty(e,"customElement",{enumerable:!0,get:function(){return s.customElement}});var c=o(n(202)),l=n(873);Object.defineProperty(e,"ROUTER_EVENT",{enumerable:!0,get:function(){return l.ROUTER_EVENT}}),Object.defineProperty(e,"ROUTER_404_EVENT",{enumerable:!0,get:function(){return l.ROUTER_404_EVENT}}),i.default.h=i.default.createElement=a.createElement,i.default.render=a.render,i.default.Fragment=a.Fragment,i.default.webComponent=c.default,i.default.start=function(t,e,n,o,i){var a=r(r({},i),{render:!0,global_event:!0}),s=new u.Component(e,n,o);return i&&i.rendered&&(s.rendered=i.rendered),s.mount(t,a),s};var f=function(t){};i.default.on("$",f),i.default.on("debug",(function(t){return f})),i.default.on(l.ROUTER_EVENT,f),i.default.on("#",f),i.default.route=l.route,i.default.on("route",(function(t){return i.default.route&&i.default.route(t)})),"object"==typeof document&&document.addEventListener("DOMContentLoaded",(function(){i.default.route===l.route&&(window.onpopstate=function(){return l.route(location.hash)},l.route(location.hash))})),e.default=i.default,"object"==typeof window&&(window.Component=u.Component,window.React=i.default,window.on=s.on,window.customElement=s.customElement)},999:function(t,e,n){var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},o=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),i=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&o(e,t,n);return i(e,t),e},u=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},s=this&&this.__spread||function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(u(arguments[e]));return t},c=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Component=void 0;var l=a(n(752)),f=n(153),d=c(n(334)),p={};l.default.on("get-components",(function(t){return t.components=p}));var h=function(t){return t},v=function(){function t(t,e,n,o){var i=this;this.state=t,this.view=e,this.update=n,this.options=o,this._app=new l.App,this._actions=[],this._global_events=[],this._history=[],this._history_idx=-1,this._history_prev=function(){i._history_idx--,i._history_idx>=0?i.setState(i._history[i._history_idx],{render:!0,history:!1}):i._history_idx=0},this._history_next=function(){i._history_idx++,i._history_idx<i._history.length?i.setState(i._history[i._history_idx],{render:!0,history:!1}):i._history_idx=i._history.length-1},this.start=function(t,e){return void 0===t&&(t=null),i.mount(t,r(r({},e),{render:!0}))}}return t.prototype.render=function(t,e){l.default.render(t,e,this)},t.prototype._view=function(t,e){var n=this;if(void 0===e&&(e=null),this.view){var r=l.default.createElement;l.default.h=l.default.createElement=function(t,e){for(var o=[],i=2;i<arguments.length;i++)o[i-2]=arguments[i];return e&&Object.keys(e).forEach((function(r){r.startsWith("$")&&(d.default(r,e,t,n),delete e[r])})),r.apply(void 0,s([t,e],o))};var o=e?this.view(t,e):this.view(t);return l.default.h=l.default.createElement=r,o}},t.prototype.renderState=function(t,e){var n=this;if(void 0===e&&(e=null),this.view){var r=e||this._view(t);if(l.default.debug&&l.default.run("debug",{component:this,_:r?".":"-",state:t,vdom:r,el:this.element}),"object"==typeof document){var o="string"==typeof this.element?document.getElementById(this.element):this.element;if(o){var i="_c";this.unload?o._component===this&&o.getAttribute(i)===this.tracking_id||(this.tracking_id=(new Date).valueOf().toString(),o.setAttribute(i,this.tracking_id),"undefined"!=typeof MutationObserver&&(this.observer||(this.observer=new MutationObserver((function(t){t[0].oldValue!==n.tracking_id&&document.body.contains(o)||(n.unload(n.state),n.observer.disconnect(),n.observer=null)}))),this.observer.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[i]}))):o.removeAttribute&&o.removeAttribute(i),o._component=this}e||this.render(o,r),this.rendered&&this.rendered(this.state)}}},t.prototype.setState=function(t,e){var n=this;if(void 0===e&&(e={render:!0,history:!1}),t instanceof Promise)Promise.all([t,this._state]).then((function(t){t[0]&&n.setState(t[0])})).catch((function(t){throw console.error(t),t})),this._state=t;else{if(this._state=t,null==t)return;this.state=t,!1!==e.render&&this.renderState(t),!1!==e.history&&this.enable_history&&(this._history=s(this._history,[t]),this._history_idx=this._history.length-1),"function"==typeof e.callback&&e.callback(this.state)}},t.prototype.mount=function(t,e){var n,o;if(void 0===t&&(t=null),console.assert(!this.element,"Component already mounted."),this.options=e=r(r({},this.options),e),this.element=t,this.global_event=e.global_event,this.enable_history=!!e.history,this.enable_history&&(this.on(e.history.prev||"history-prev",this._history_prev),this.on(e.history.next||"history-next",this._history_next)),e.route&&(this.update=this.update||{},this.update[e.route]=h),this.add_actions(),this.state=null!==(o=null!==(n=this.state)&&void 0!==n?n:this.model)&&void 0!==o?o:{},"function"==typeof this.state&&(this.state=this.state()),e.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),l.default.debug){var i="string"==typeof t?t:t.id;p[i]=p[i]||[],p[i].push(this)}return this},t.prototype.is_global_event=function(t){return t&&(this.global_event||this._global_events.indexOf(t)>=0||t.startsWith("#")||t.startsWith("/")||t.startsWith("@"))},t.prototype.add_action=function(t,e,n){var r=this;void 0===n&&(n={}),e&&"function"==typeof e&&(n.global&&this._global_events.push(t),this.on(t,(function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];l.default.debug&&l.default.run("debug",{component:r,_:">",event:t,p:o,current_state:r.state,options:n});var a=e.apply(void 0,s([r.state],o));l.default.debug&&l.default.run("debug",{component:r,_:"<",event:t,p:o,newState:a,state:r.state,options:n}),r.setState(a,n)}),n))},t.prototype.add_actions=function(){var t=this,e=this.update||{};f.Reflect.getMetadataKeys(this).forEach((function(n){if(n.startsWith("apprun-update:")){var r=f.Reflect.getMetadata(n,t);e[r.name]=[t[r.key].bind(t),r.options]}}));var n={};Array.isArray(e)?e.forEach((function(t){var e=u(t,3),r=e[0],o=e[1],i=e[2];r.toString().split(",").forEach((function(t){return n[t.trim()]=[o,i]}))})):Object.keys(e).forEach((function(t){var r=e[t];("function"==typeof r||Array.isArray(r))&&t.split(",").forEach((function(t){return n[t.trim()]=r}))})),n["."]||(n["."]=h),Object.keys(n).forEach((function(e){var r=n[e];"function"==typeof r?t.add_action(e,r):Array.isArray(r)&&t.add_action(e,r[0],r[1])}))},t.prototype.run=function(t){for(var e,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var o=t.toString();return this.is_global_event(o)?l.default.run.apply(l.default,s([o],n)):(e=this._app).run.apply(e,s([o],n))},t.prototype.on=function(t,e,n){var r=t.toString();return this._actions.push({name:r,fn:e}),this.is_global_event(r)?l.default.on(r,e,n):this._app.on(r,e,n)},t.prototype.unmount=function(){var t,e=this;null===(t=this.observer)||void 0===t||t.disconnect(),this._actions.forEach((function(t){var n=t.name,r=t.fn;e.is_global_event(n)?l.default.off(n,r):e._app.off(n,r)}))},t.__isAppRunComponent=!0,t}();e.Component=v},4:function(t,e,n){var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=o(n(752));e.default=function t(e,n,o){var a;if(void 0===o&&(o=0),"string"==typeof e)return e;if(Array.isArray(e))return e.map((function(e){return t(e,n,o++)}));var u=e;if(e&&"function"==typeof e.tag&&Object.getPrototypeOf(e.tag).__isAppRunComponent&&(u=function(t,e,n){var o=t.tag,a=t.props,u=t.children,s="_"+n,c=a&&a.id;c?s=c:c="_"+n+Date.now(),e.__componentCache||(e.__componentCache={});var l=e.__componentCache[s];l&&l instanceof o||(l=e.__componentCache[s]=new o(r(r({},a),{children:u})).mount(c));var f=l.state;if(l.mounted){var d=l.mounted(a,u,l.state);f=void 0!==d?d:l.state}if(f instanceof Promise)return i.default.h("section",r({},a,{ref:function(t){return e=t,l.element=e,void Promise.all([f]).then((function(t){t[0]?l.setState(t[0]):l.setState(l.state)}));var e},_component:l}));if(null!=f){var p=l._view(f,a);return i.default.h("section",r({},a,{ref:function(t){return e=t,l.element=e,l.state=f,void l.renderState(f,p);var e},_component:l}),p)}return i.default.h("section",r({},a,{_component:l}))}(e,n,o)),u&&Array.isArray(u.children)){var s=null===(a=u.props)||void 0===a?void 0:a._component;if(s){var c=0;u.children=u.children.map((function(e){return t(e,s,c++)}))}else u.children=u.children.map((function(e){return t(e,n,o++)}))}return u}},153:function(t,e,n){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.customElement=e.on=e.update=e.Reflect=void 0;var o=r(n(202));e.Reflect={meta:new WeakMap,defineMetadata:function(t,e,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[t]=e},getMetadataKeys:function(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata:function(t,e){return e=Object.getPrototypeOf(e),this.meta.get(e)?this.meta.get(e)[t]:null}},e.update=function(t,n){return void 0===n&&(n={}),function(r,o,i){var a=t?t.toString():o;return e.Reflect.defineMetadata("apprun-update:"+a,{name:a,key:o,options:n},r),i}},e.on=function(t,n){return void 0===n&&(n={}),function(r,o){var i=t?t.toString():o;e.Reflect.defineMetadata("apprun-update:"+i,{name:i,key:o,options:n},r)}},e.customElement=function(t,e){return function(n){return o.default(t,n,e),n}}},334:function(t,e,n){var r=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},o=this&&this.__spread||function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(r(arguments[e]));return t},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=i(n(752)),u=function(t,e){return(e?t.state[e]:t.state)||""},s=function(t,e,n){if(e){var r=t.state||{};r[e]=n,t.setState(r)}else t.setState(n)};e.default=function(t,e,n,i){if(t.startsWith("$on")){var c=e[t];if(t=t.substring(1),"boolean"==typeof c)e[t]=function(e){return i.run(t,e)};else if("string"==typeof c)e[t]=function(t){return i.run(c,t)};else if("function"==typeof c)e[t]=function(t){return i.setState(c(i.state,t))};else if(Array.isArray(c)){var l=r(c),f=l[0],d=l.slice(1);"string"==typeof f?e[t]=function(t){return i.run.apply(i,o([f],d,[t]))}:"function"==typeof f&&(e[t]=function(t){return i.setState(f.apply(void 0,o([i.state],d,[t])))})}}else if("$bind"===t){var p=e.type||"text",h="string"==typeof e[t]?e[t]:e.name;if("input"===n)switch(p){case"checkbox":e.checked=u(i,h),e.onclick=function(t){return s(i,h||t.target.name,t.target.checked)};break;case"radio":e.checked=u(i,h)===e.value,e.onclick=function(t){return s(i,h||t.target.name,t.target.value)};break;case"number":case"range":e.value=u(i,h),e.oninput=function(t){return s(i,h||t.target.name,Number(t.target.value))};break;default:e.value=u(i,h),e.oninput=function(t){return s(i,h||t.target.name,t.target.value)}}else"select"===n?(e.value=u(i,h),e.onchange=function(t){t.target.multiple||s(i,h||t.target.name,t.target.value)}):"option"===n?(e.selected=u(i,h),e.onclick=function(t){return s(i,h||t.target.name,t.target.selected)}):"textarea"===n&&(e.innerHTML=u(i,h),e.oninput=function(t){return s(i,h||t.target.name,t.target.value)})}else a.default.run("$",{key:t,tag:n,props:e,component:i})}},873:function(t,e,n){var r=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},o=this&&this.__spread||function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(r(arguments[e]));return t},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.route=e.ROUTER_404_EVENT=e.ROUTER_EVENT=void 0;var a=i(n(752));e.ROUTER_EVENT="//",e.ROUTER_404_EVENT="///",e.route=function(t){if(t||(t="#"),t.startsWith("#")){var n=r(t.split("/")),i=n[0],u=n.slice(1);a.default.run.apply(a.default,o([i],u))||a.default.run.apply(a.default,o([e.ROUTER_404_EVENT,i],u)),a.default.run.apply(a.default,o([e.ROUTER_EVENT,i],u))}else if(t.startsWith("/")){var s=r(t.split("/")),c=(s[0],s[1]);u=s.slice(2),a.default.run.apply(a.default,o(["/"+c],u))||a.default.run.apply(a.default,o([e.ROUTER_404_EVENT,"/"+c],u)),a.default.run.apply(a.default,o([e.ROUTER_EVENT,"/"+c],u))}else a.default.run(t)||a.default.run(e.ROUTER_404_EVENT,t),a.default.run(e.ROUTER_EVENT,t)},e.default=e.route},559:function(t,e,n){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Fragment=e.render=e.updateElement=e.createElement=void 0;var o=r(n(4));function i(t){var e=[],n=function(t){null!=t&&""!==t&&!1!==t&&e.push("function"==typeof t||"object"==typeof t?t:""+t)};return t&&t.forEach((function(t){Array.isArray(t)?t.forEach((function(t){return n(t)})):n(t)})),e}e.createElement=function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o=i(n);if("string"==typeof t)return{tag:t,props:e,children:o};if(Array.isArray(t))return t;if(void 0===t&&n)return o;if(Object.getPrototypeOf(t).__isAppRunComponent)return{tag:t,props:e,children:o};if("function"==typeof t)return t(e,o);throw new Error("Unknown tag in vdom "+t)};var a=new WeakMap;function u(t,e,n){if(void 0===n&&(n={}),null!=e&&!1!==e){e=o.default(e,n);var r="SVG"===(null==t?void 0:t.nodeName);t&&(Array.isArray(e)?c(t,e,r):c(t,[e],r))}}function s(t,e,n){3!==e._op&&(n=n||"svg"===e.tag,function(t,e){var n=t.nodeName,r=""+(e.tag||"");return n.toUpperCase()===r.toUpperCase()}(t,e)?(!(2&e._op)&&c(t,e.children,n),!(1&e._op)&&d(t,e.props,n)):t.parentNode.replaceChild(f(e,n),t))}function c(t,e,n){for(var r,o=(null===(r=t.childNodes)||void 0===r?void 0:r.length)||0,i=(null==e?void 0:e.length)||0,u=Math.min(o,i),c=0;c<u;c++){var d=e[c];if(3!==d._op){var p=t.childNodes[c];if("string"==typeof d)p.textContent!==d&&(3===p.nodeType?p.nodeValue=d:t.replaceChild(l(d),p));else if(d instanceof HTMLElement||d instanceof SVGElement)t.insertBefore(d,p);else{var h=d.props&&d.props.key;if(h)if(p.key===h)s(t.childNodes[c],d,n);else{var v=a[h];if(v){var _=v.nextSibling;t.insertBefore(v,p),_?t.insertBefore(p,_):t.appendChild(p)}s(t.childNodes[c],d,n)}else s(t.childNodes[c],d,n)}}}for(var y=t.childNodes.length;y>u;)t.removeChild(t.lastChild),y--;if(i>u){var m=document.createDocumentFragment();for(c=u;c<e.length;c++)m.appendChild(f(e[c],n));t.appendChild(m)}}function l(t){if(0===t.indexOf("_html:")){var e=document.createElement("div");return e.insertAdjacentHTML("afterbegin",t.substring(6)),e}return document.createTextNode(t)}function f(t,e){if(t instanceof HTMLElement||t instanceof SVGElement)return t;if("string"==typeof t)return l(t);if(!t.tag||"function"==typeof t.tag)return l(JSON.stringify(t));var n=(e=e||"svg"===t.tag)?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return d(n,t.props,e),t.children&&t.children.forEach((function(t){return n.appendChild(f(t,e))})),n}function d(t,e,n){var r=t._props||{};for(var o in e=function(t,e){e.class=e.class||e.className,delete e.className;var n={};return t&&Object.keys(t).forEach((function(t){return n[t]=null})),e&&Object.keys(e).forEach((function(t){return n[t]=e[t]})),n}(r,e||{}),t._props=e,e){var i=e[o];if(o.startsWith("data-")){var u=o.substring(5).replace(/-(\w)/g,(function(t){return t[1].toUpperCase()}));t.dataset[u]!==i&&(i||""===i?t.dataset[u]=i:delete t.dataset[u])}else if("style"===o)if(t.style.cssText&&(t.style.cssText=""),"string"==typeof i)t.style.cssText=i;else for(var s in i)t.style[s]!==i[s]&&(t.style[s]=i[s]);else if(o.startsWith("xlink")){var c=o.replace("xlink","").toLowerCase();null==i||!1===i?t.removeAttributeNS("http://www.w3.org/1999/xlink",c):t.setAttributeNS("http://www.w3.org/1999/xlink",c,i)}else o.startsWith("on")?i&&"function"!=typeof i?"string"==typeof i&&(i?t.setAttribute(o,i):t.removeAttribute(o)):t[o]=i:/^id$|^class$|^list$|^readonly$|^contenteditable$|^role|-/g.test(o)||n?t.getAttribute(o)!==i&&(i?t.setAttribute(o,i):t.removeAttribute(o)):t[o]!==i&&(t[o]=i);"key"===o&&i&&(a[i]=t)}e&&"function"==typeof e.ref&&window.requestAnimationFrame((function(){return e.ref(t)}))}e.updateElement=u,e.render=u,e.Fragment=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return i(e)}},170:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Fragment=e.createElement=e.render=void 0;var r=n(559);Object.defineProperty(e,"createElement",{enumerable:!0,get:function(){return r.createElement}}),Object.defineProperty(e,"Fragment",{enumerable:!0,get:function(){return r.Fragment}}),e.render=function(t,e,n){r.updateElement(t,e,n)}},202:function(t,e){var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.customElement=void 0,e.customElement=function(t,e){return void 0===e&&(e={}),function(n){function i(){return n.call(this)||this}return r(i,n),Object.defineProperty(i.prototype,"component",{get:function(){return this._component},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"state",{get:function(){return this._component.state},enumerable:!1,configurable:!0}),Object.defineProperty(i,"observedAttributes",{get:function(){return e.observedAttributes},enumerable:!1,configurable:!0}),i.prototype.connectedCallback=function(){var n=this;if(this.isConnected&&!this._component){var r=e||{};this._shadowRoot=r.shadow?this.attachShadow({mode:"open"}):this;var i={};Array.from(this.attributes).forEach((function(t){return i[t.name]=t.value})),(r.observedAttributes||[]).forEach((function(t){void 0!==n[t]&&(i[t]=n[t]),Object.defineProperty(n,t,{get:function(){return i[t]},set:function(e){this.attributeChangedCallback(t,i[t],e)},configurable:!0,enumerable:!0})}));var a=this.children?Array.from(this.children):[];if(a.forEach((function(t){return t.parentElement.removeChild(t)})),this._component=new t(o(o({},i),{children:a})).mount(this._shadowRoot,r),this._component._props=i,this._component.dispatchEvent=this.dispatchEvent.bind(this),this._component.mounted){var u=this._component.mounted(i,a,this._component.state);void 0!==u&&(this._component.state=u)}this.on=this._component.on.bind(this._component),this.run=this._component.run.bind(this._component),!1!==r.render&&this._component.run(".")}},i.prototype.disconnectedCallback=function(){var t,e,n,r;null===(e=null===(t=this._component)||void 0===t?void 0:t.unload)||void 0===e||e.call(t),null===(r=null===(n=this._component)||void 0===n?void 0:n.unmount)||void 0===r||r.call(n),this._component=null},i.prototype.attributeChangedCallback=function(t,n,r){var o,i=this;null===(o=this._component)||void 0===o||o.run("attributeChanged",t,n,r),this._component&&(this._component._props[t]=r),r!==n&&!1!==e.render&&window.requestAnimationFrame((function(){var t;null===(t=i._component)||void 0===t||t.run(".")}))},i}(HTMLElement)},e.default=function(t,n,r){"undefined"!=typeof customElements&&customElements.define(t,e.customElement(n,r))}}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,n),o.exports}return n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n(591)})()}));
//# sourceMappingURL=apprun.js.map