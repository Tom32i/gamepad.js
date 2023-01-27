!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.gamepad=e():t.gamepad=e()}(this,(()=>(()=>{var t={944:function(t){var e;e=()=>(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function r(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=i(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return u=t.done,t},e:function(t){s=!0,a=t},f:function(){try{u||null==n.return||n.return()}finally{if(s)throw a}}}}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,u=[],s=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=i.call(n)).done)&&(u.push(r.value),u.length!==e);s=!0);}catch(t){l=!0,o=t}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,e)||i(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}t.d(e,{default:()=>s});var s=function(){function t(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];u(this,t),this.strict=e,this.defaults=new Map,this.validators=new Map,this.types=new Map,this.optional=new Set,this.required=new Set}var e,i;return e=t,(i=[{key:"allowExtra",value:function(){return this.strict=!1,this}},{key:"setDefaults",value:function(t){var e=this;return Object.entries(t).forEach((function(t){var n=o(t,2),r=n[0],i=n[1];return e.defaults.set(r,i)})),this}},{key:"setValidators",value:function(t){var e=this;return Object.entries(t).forEach((function(t){var n=o(t,2),r=n[0],i=n[1];return e.validators.set(r,i)})),this}},{key:"setTypes",value:function(t){var e=this;return Object.entries(t).forEach((function(t){var n=o(t,2),r=n[0],i=n[1];return e.types.set(r,i)})),this}},{key:"setOptional",value:function(t){var e=this;return t.forEach((function(t){return e.optional.add(t)})),this}},{key:"setRequired",value:function(t){var e=this;return t.forEach((function(t){return e.required.add(t)})),this}},{key:"resolve",value:function(t){return this.validate(Object.assign(this.getDefaults(),t))}},{key:"getDefaults",value:function(){var t,e={},n=r(this.defaults);try{for(n.s();!(t=n.n()).done;){var i=o(t.value,2),a=i[0],u=i[1];e[a]=u}}catch(t){n.e(t)}finally{n.f()}return e}},{key:"validate",value:function(t){for(var e in t)this.validators.has(e)&&(t[e]=this.validators.get(e)(t[e]));for(var n in t){if(!this.optionExists(n))throw new Error('Unkown option "'.concat(n,'".'));this.checkType(n,t[n])}var o,i=r(this.required.values());try{for(i.s();!(o=i.n()).done;){var a=o.value;if(void 0===t[a])throw new Error('Option "'.concat(a,'" is required.'))}}catch(t){i.e(t)}finally{i.f()}return t}},{key:"checkType",value:function(t,e){if(this.types.has(t)){var r=this.types.get(t),o=n(e);if(o!==r)throw new Error('Wrong value for option "'.concat(t,'": expected type "').concat(r,'", got "').concat(o,'".'))}}},{key:"optionExists",value:function(t){return!this.strict||this.defaults.has(t)||this.validators.has(t)||this.optional.has(t)||this.required.has(t)||this.types.has(t)}}])&&function(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(i=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();return e.default})(),t.exports=e()},162:function(t){t.exports=(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};t.d(e,{default:()=>n});var n=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._events={},this.on=this.addEventListener,this.off=this.removeEventListener}var e;return(e=[{key:"emit",value:function(t,e){if(Object.prototype.hasOwnProperty.call(this._events,t))for(var n=this._events[t],r={type:t,detail:e},o=n.length,i=0;i<o;i++)this.handle(n[i],r)}},{key:"handle",value:function(t,e){t(e)}},{key:"addEventListener",value:function(t,e){Object.prototype.hasOwnProperty.call(this._events,t)||(this._events[t]=[]),this._events[t].indexOf(e)<0&&this._events[t].push(e)}},{key:"removeEventListener",value:function(t,e){if(Object.prototype.hasOwnProperty.call(this._events,t)){var n=this._events[t],r=n.indexOf(e);r>=0&&n.splice(r,1),0===n.length&&delete this._events[t]}}}])&&function(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(t.prototype,e),t}();return e.default})()}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};return(()=>{"use strict";n.r(r),n.d(r,{GamepadHandler:()=>b,GamepadListener:()=>T});var t=n(162),e=n.n(t),o=n(944),i=n.n(o);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,d(r.key),r)}}function l(t,e){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},l(t,e)}function c(t,e){if(e&&("object"===a(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return f(t)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},p(t)}function d(t){var e=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===a(e)?e:String(e)}var y,h,v,b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&l(t,e)}(d,t);var e,n,r,o,i,a=(o=d,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=p(o);if(i){var n=p(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return c(this,t)});function d(t,e){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return u(this,d),(n=a.call(this)).index=t,n.options=n.constructor.resolveOptions(r),n.axes=new Array(e.axes.length).fill(n.constructor.getDefaultValue(n.options.axis)),n.buttons=new Array(e.buttons.length).fill(n.constructor.getDefaultValue(n.options.button)),n.updateAxis=n.updateAxis.bind(f(n)),n.updateButton=n.updateButton.bind(f(n)),n}return e=d,r=[{key:"resolveOptions",value:function(t){var e,n,r,o,i=t.axis,a=t.button;return{axis:this.optionResolver.resolve(null!==(e=null!==(n=null!=i?i:a)&&void 0!==n?n:t)&&void 0!==e?e:{}),button:this.optionResolver.resolve(null!==(r=null!==(o=null!=a?a:i)&&void 0!==o?o:t)&&void 0!==r?r:{})}}},{key:"getDefaultValue",value:function(t){return t.analog,!1===t.initToZero?null:0}}],(n=[{key:"update",value:function(t){this.updateAxes(t),this.updateButtons(t)}},{key:"updateAxes",value:function(t){for(var e=this.axes.length,n=0;n<e;n++)this.updateAxis(t,t.axes[n],n)}},{key:"updateButtons",value:function(t){for(var e=this.buttons.length,n=0;n<e;n++)this.updateButton(t,t.buttons[n],n)}},{key:"updateAxis",value:function(t,e,n){var r=this.options.axis,o=r.deadZone,i=r.analog,a=r.precision;o&&e<o&&e>-o&&(e=0),i?a&&(e=Math.round(e*a)/a):e=e>0?1:e<0?-1:0,this.axes[n]!==e&&(this.axes[n]=e,this.emit("axis",{gamepad:t,axis:n,value:e,index:this.index}))}},{key:"updateButton",value:function(t,e,n){var r=this.options.button,o=r.deadZone,i=r.analog,a=r.precision,u=e.value,s=e.pressed,l=u;o&&e.value<o&&e.value>-o&&(l=0),i?a&&(l=Math.round(l*a)/a):l=s?1:0,this.buttons[n]!==l&&(this.buttons[n]=l,this.emit("button",{gamepad:t,button:n,pressed:s,value:l,index:this.index}))}}])&&s(e.prototype,n),r&&s(e,r),Object.defineProperty(e,"prototype",{writable:!1}),d}(e());function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,w(r.key),r)}}function w(t){var e=function(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===m(e)?e:String(e)}y=b,h="optionResolver",v=(new(i())).setDefaults({analog:!0,deadZone:0,precision:0,initToZero:!1}).setTypes({initToZero:"boolean",analog:"boolean",deadZone:"number",precision:"number"}).setValidators({deadZone:function(t){return Math.max(Math.min(t,1),0)},precision:function(t){return t>0?Math.pow(10,t):0}}),(h=d(h))in y?Object.defineProperty(y,h,{value:v,enumerable:!0,configurable:!0,writable:!0}):y[h]=v;var O=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.callback=e,this.frame=null,this.update=this.update.bind(this)}var e,n;return e=t,(n=[{key:"setCallback",value:function(t){this.callback=t}},{key:"start",value:function(){this.frame||(this.frame=window.requestAnimationFrame(this.update))}},{key:"stop",value:function(){this.frame&&(window.cancelAnimationFrame(this.frame),this.frame=null)}},{key:"update",value:function(){this.frame=window.requestAnimationFrame(this.update),this.callback()}}])&&g(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function j(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,k(r.key),r)}}function k(t){var e=function(t,e){if("object"!==x(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===x(e)?e:String(e)}function P(t,e){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},P(t,e)}function E(t,e){if(e&&("object"===x(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _(t)}function _(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function A(t){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},A(t)}var T=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&P(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=A(r);if(o){var n=A(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return E(this,t)});function a(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(j(this,a),t=i.call(this),"function"!=typeof navigator.getGamepads)throw new Error("This browser does not support gamepad API.");return t.options=e,t.onAxis=t.onAxis.bind(_(t)),t.update=t.update.bind(_(t)),t.start=t.start.bind(_(t)),t.stop=t.stop.bind(_(t)),t.discover=t.discover.bind(_(t)),t.onButton=t.onButton.bind(_(t)),t.handlers=new Array(4).fill(null),t.loop=new O(t.update),window.addEventListener("error",t.stop),t}return e=a,(n=[{key:"start",value:function(){this.loop.start()}},{key:"stop",value:function(){this.loop.stop()}},{key:"update",value:function(){var t=navigator.getGamepads();this.discover(t[0],0),this.discover(t[1],1),this.discover(t[2],2),this.discover(t[3],3)}},{key:"discover",value:function(t,e){t?(this.handlers[e]||this.registerHandler(e,t),this.handlers[e].update(t)):this.handlers[e]&&this.removeGamepad(e)}},{key:"registerHandler",value:function(t,e){if(this.handlers[t])throw new Error("Gamepad #".concat(t," is already registered."));var n=new b(t,e,this.options);this.handlers[t]=n,n.addEventListener("axis",this.onAxis),n.addEventListener("button",this.onButton),this.emit("gamepad:connected",{index:t,gamepad:e}),this.emit("gamepad:".concat(t,":connected"),{index:t,gamepad:e})}},{key:"removeGamepad",value:function(t){if(!this.handlers[t])throw new Error("Gamepad #".concat(t," is not registered."));this.handlers[t].removeEventListener("axis",this.onAxis),this.handlers[t].removeEventListener("button",this.onButton),this.handlers[t]=null,this.emit("gamepad:disconnected",{index:t}),this.emit("gamepad:".concat(t,":disconnected"),{index:t})}},{key:"onAxis",value:function(t){var e=t.detail.index;this.emit("gamepad:axis",t.detail),this.emit("gamepad:".concat(e,":axis"),t.detail),this.emit("gamepad:".concat(e,":axis:").concat(t.detail.axis),t.detail)}},{key:"onButton",value:function(t){var e=t.detail.index;this.emit("gamepad:button",t.detail),this.emit("gamepad:".concat(e,":button"),t.detail),this.emit("gamepad:".concat(e,":button:").concat(t.detail.button),t.detail)}}])&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(e())})(),r})()));