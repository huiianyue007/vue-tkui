/*!
* Vue Tkui
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueTkui=t():e.VueTkui=t()})(this,(function(){return (function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=189)})({0:function(e,t){e.exports=function(e,t,n,r,o){var u,i=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(u=e,i=e.default);var c="function"==typeof i?i.options:i;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns),r&&(c._scopeId=r);var a;if(o?(a=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=a):n&&(a=n),a){var f=c.functional,d=f?c.render:c.beforeCreate;f?c.render=function(e,t){return a.call(t),d(e,t)}:c.beforeCreate=d?[].concat(d,a):[a]}return{esModule:u,exports:i,options:c}}},104:function(e,t,n){"use strict";function r(e){e.component("tkui-header",u.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=n(150),u=(function(e){return e&&e.__esModule?e:{default:e}})(o);e.exports=t.default},122:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"tkui-header",props:{background:String,color:String,center:Boolean},computed:{style:function(){return{color:this.color,"background-color":this.background}}}},e.exports=t.default},150:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(122),o=n.n(r),u=n(173),i=n(0),s=i(o.a,u.a,null,null,null);t.default=s.exports},173:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tkui-header",class:{center:e.center},style:e.style},[n("div",{staticClass:"left-menu"},[e._t("left-menu")],2),e._v(" "),n("div",{staticClass:"header-title"},[e._t("default")],2),e._v(" "),n("div",{staticClass:"right-menu"},[e._t("right-menu")],2)])},o=[],u={render:r,staticRenderFns:o};t.a=u},189:function(e,t,n){e.exports=n(104)}})}));