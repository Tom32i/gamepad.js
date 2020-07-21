(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["gamepad"] = factory();
	else
		root["gamepad"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/option-resolver.js/option-resolver.js":
/*!************************************************************!*\
  !*** ./node_modules/option-resolver.js/option-resolver.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!function(t,e){ true?module.exports=e():undefined}(this,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(t,\"__esModule\",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&\"object\"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,\"default\",{enumerable:!0,value:t}),2&e&&\"string\"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,\"a\",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p=\"\",r(r.s=0)}([function(t,e,r){\"use strict\";function n(t){return(n=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&\"function\"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?\"symbol\":typeof t})(t)}function o(t,e){var r;if(\"undefined\"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=u(t))||e&&t&&\"number\"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\")}var i,a=!0,f=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){f=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(f)throw i}}}}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(\"undefined\"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(n=(u=a.next()).done)&&(r.push(u.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}(t,e)||u(t,e)||function(){throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\")}()}function u(t,e){if(t){if(\"string\"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return\"Object\"===r&&t.constructor&&(r=t.constructor.name),\"Map\"===r||\"Set\"===r?Array.from(t):\"Arguments\"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function f(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,\"value\"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}r.r(e),r.d(e,\"default\",(function(){return c}));var c=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];f(this,t),this.allowExtra=e,this.defaults=new Map,this.types=new Map,this.optional=new Set,this.required=new Set}var e,r,u;return e=t,(r=[{key:\"setDefaults\",value:function(t){var e=this;return Object.entries(t).forEach((function(t){var r=i(t,2),n=r[0],o=r[1];return e.defaults.set(n,o)})),this}},{key:\"setTypes\",value:function(t){var e=this;return Object.entries(t).forEach((function(t){var r=i(t,2),n=r[0],o=r[1];return e.types.set(n,o)})),this}},{key:\"setOptional\",value:function(t){var e=this;return t.forEach((function(t){return e.optional.add(t)})),this}},{key:\"setRequired\",value:function(t){var e=this;return t.forEach((function(t){return e.required.add(t)})),this}},{key:\"resolve\",value:function(t){var e=Object.assign(this.getDefaults(),t);return this.validate(e),e}},{key:\"getDefaults\",value:function(){var t,e={},r=o(this.defaults);try{for(r.s();!(t=r.n()).done;){var n=i(t.value,2),u=n[0],a=n[1];e[u]=a}}catch(t){r.e(t)}finally{r.f()}return e}},{key:\"validate\",value:function(t){for(var e in t){if(!this.optionExists(e))throw new Error('Unkown option \"'.concat(e,'\".'));this.checkType(e,t[e])}var r,n=o(this.required.values());try{for(n.s();!(r=n.n()).done;){var i=r.value;if(void 0===t[i])throw new Error('Option \"'.concat(i,'\" is required.'))}}catch(t){n.e(t)}finally{n.f()}}},{key:\"checkType\",value:function(t,e){if(this.types.has(t)){var r=this.types.get(t),o=n(e);if(o!==r)throw new Error('Wrong value for option \"'.concat(t,'\". Expected type \"').concat(r,'\" but got \"').concat(o,'\".'))}}},{key:\"optionExists\",value:function(t){return!!this.allowExtra||this.defaults.has(t)||this.optional.has(t)||this.required.has(t)||this.types.has(t)}}])&&l(e.prototype,r),u&&l(e,u),t}()}]).default}));\n\n//# sourceURL=webpack://gamepad/./node_modules/option-resolver.js/option-resolver.js?");

/***/ }),

/***/ "./node_modules/tom32i-event-emitter.js/tom32i-event-emitter.js":
/*!**********************************************************************!*\
  !*** ./node_modules/tom32i-event-emitter.js/tom32i-event-emitter.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!function(e,t){ true?module.exports=t():undefined}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&\"object\"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,\"default\",{enumerable:!0,value:e}),2&t&&\"string\"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,\"a\",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p=\"\",n(n.s=0)}([function(e,t,n){\"use strict\";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t),n.d(t,\"default\",(function(){return o}));var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}(this,e),this._events={},this.on=this.addEventListener,this.off=this.removeEventListener}var t,n,o;return t=e,(n=[{key:\"emit\",value:function(e,t){if(this._events.hasOwnProperty(e))for(var n=this._events[e],r={type:e,detail:t},o=n.length,i=0;i<o;i++)this.handle(n[i],r)}},{key:\"handle\",value:function(e,t){e(t)}},{key:\"addEventListener\",value:function(e,t){this._events.hasOwnProperty(e)||(this._events[e]=[]),this._events[e].indexOf(t)<0&&this._events[e].push(t)}},{key:\"removeEventListener\",value:function(e,t){if(this._events.hasOwnProperty(e)){var n=this._events[e],r=n.indexOf(t);r>=0&&n.splice(r,1),0===n.length&&delete this._events[e]}}}])&&r(t.prototype,n),o&&r(t,o),e}()}]).default}));\n\n//# sourceURL=webpack://gamepad/./node_modules/tom32i-event-emitter.js/tom32i-event-emitter.js?");

/***/ }),

/***/ "./src/GamepadHandler.js":
/*!*******************************!*\
  !*** ./src/GamepadHandler.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GamepadHandler; });\n/* harmony import */ var tom32i_event_emitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tom32i-event-emitter.js */ \"./node_modules/tom32i-event-emitter.js/tom32i-event-emitter.js\");\n/* harmony import */ var tom32i_event_emitter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tom32i_event_emitter_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var option_resolver_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! option-resolver.js */ \"./node_modules/option-resolver.js/option-resolver.js\");\n/* harmony import */ var option_resolver_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(option_resolver_js__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n/**\n * Gamepad Handler\n *\n * @param {Gamepad} gamepad\n * @param {Object} options\n */\n\nvar GamepadHandler = /*#__PURE__*/function (_EventEmitter) {\n  _inherits(GamepadHandler, _EventEmitter);\n\n  var _super = _createSuper(GamepadHandler);\n\n  function GamepadHandler(index, gamepad) {\n    var _this;\n\n    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n    _classCallCheck(this, GamepadHandler);\n\n    _this = _super.call(this);\n    _this.index = index;\n    _this.options = _this.constructor.resolveOptions(options);\n    _this.sticks = new Array(gamepad.axes.length).fill(null).map(function () {\n      return [null, null];\n    });\n    _this.buttons = new Array(gamepad.buttons.length).fill(null);\n    _this.updateStick = _this.updateStick.bind(_assertThisInitialized(_this));\n    _this.updateButton = _this.updateButton.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n  /**\n   * Resolve options\n   *\n   * @param {Object} sourceOptions\n   *\n   * @return {Object}\n   */\n\n\n  _createClass(GamepadHandler, [{\n    key: \"update\",\n\n    /**\n     * Update\n     */\n    value: function update(gamepad) {\n      var index = 0;\n\n      for (var stick = 0; stick < 2; stick++) {\n        for (var axis = 0; axis < 2; axis++) {\n          this.updateStick(gamepad, stick, axis, gamepad.axes[index++]);\n        }\n      }\n\n      var length = gamepad.buttons.length;\n\n      for (index = 0; index < length; index++) {\n        this.updateButton(gamepad, gamepad.buttons[index], index);\n      }\n    }\n    /**\n     * Set stick\n     *\n     * @param {Number} stick\n     * @param {Number} axis\n     * @param {Number} value\n     */\n\n  }, {\n    key: \"updateStick\",\n    value: function updateStick(gamepad, stick, axis, value) {\n      var _this$options$stick = this.options.stick,\n          deadZone = _this$options$stick.deadZone,\n          analog = _this$options$stick.analog,\n          precision = _this$options$stick.precision;\n\n      if (deadZone && value < deadZone && value > -deadZone) {\n        value = 0;\n      }\n\n      if (!analog) {\n        value = value > 0 ? 1 : value < 0 ? -1 : 0;\n      } else if (precision) {\n        value = Math.round(value * precision) / precision;\n      }\n\n      if (this.sticks[stick][axis] !== value) {\n        this.sticks[stick][axis] = value;\n        this.emit('axis', {\n          gamepad: gamepad,\n          stick: stick,\n          axis: axis,\n          value: value,\n          index: this.index\n        });\n      }\n    }\n    /**\n     * Set button\n     *\n     * @param {Gamepad} gamepad\n     * @param {GamepadButton} button\n     * @param {Number} index\n     */\n\n  }, {\n    key: \"updateButton\",\n    value: function updateButton(gamepad, button, index) {\n      var _this$options$button = this.options.button,\n          deadZone = _this$options$button.deadZone,\n          analog = _this$options$button.analog,\n          precision = _this$options$button.precision;\n      var currentValue = button.value,\n          pressed = button.pressed;\n      var value = currentValue;\n\n      if (deadZone && button.value < deadZone && button.value > -deadZone) {\n        value = 0;\n      }\n\n      if (!analog) {\n        value = pressed ? 1 : 0;\n      } else if (precision) {\n        value = Math.round(value * precision) / precision;\n      }\n\n      if (this.buttons[index] !== value) {\n        this.buttons[index] = value;\n        this.emit('button', {\n          gamepad: gamepad,\n          button: index,\n          pressed: pressed,\n          value: value,\n          index: this.index\n        });\n      }\n    }\n  }], [{\n    key: \"resolveOptions\",\n    value: function resolveOptions(sourceOptions) {\n      var customStick = typeof sourceOptions.stick !== 'undefined';\n      var customButton = typeof sourceOptions.button !== 'undefined';\n      var options = {\n        stick: this.optionResolver.resolve(customStick ? sourceOptions.stick : customButton ? {} : sourceOptions),\n        button: this.optionResolver.resolve(customButton ? sourceOptions.button : customStick ? {} : sourceOptions)\n      };\n      options.stick.deadZone = Math.max(Math.min(options.stick.deadZone, 1), 0);\n      options.button.deadZone = Math.max(Math.min(options.button.deadZone, 1), 0);\n      options.stick.precision = options.stick.precision ? Math.pow(10, options.stick.precision) : 0;\n      options.button.precision = options.button.precision ? Math.pow(10, options.button.precision) : 0;\n      return options;\n    }\n  }]);\n\n  return GamepadHandler;\n}(tom32i_event_emitter_js__WEBPACK_IMPORTED_MODULE_0___default.a);\n/**\n * Option resolver\n *\n * @type {OptionResolver}\n */\n\n\n\nGamepadHandler.optionResolver = new option_resolver_js__WEBPACK_IMPORTED_MODULE_1___default.a().setDefaults({\n  analog: true,\n  deadZone: 0,\n  precision: 0\n}).setTypes({\n  analog: 'boolean',\n  deadZone: 'number',\n  precision: 'number'\n});\n\n//# sourceURL=webpack://gamepad/./src/GamepadHandler.js?");

/***/ }),

/***/ "./src/GamepadListener.js":
/*!********************************!*\
  !*** ./src/GamepadListener.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GamepadListener; });\n/* harmony import */ var tom32i_event_emitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tom32i-event-emitter.js */ \"./node_modules/tom32i-event-emitter.js/tom32i-event-emitter.js\");\n/* harmony import */ var tom32i_event_emitter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tom32i_event_emitter_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var gamepad_GamepadHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gamepad/GamepadHandler */ \"./src/GamepadHandler.js\");\n/* harmony import */ var gamepad_Loop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gamepad/Loop */ \"./src/Loop.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n/**\n * Gamepad Listener\n */\n\nvar GamepadListener = /*#__PURE__*/function (_EventEmitter) {\n  _inherits(GamepadListener, _EventEmitter);\n\n  var _super = _createSuper(GamepadListener);\n\n  function GamepadListener() {\n    var _this;\n\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    _classCallCheck(this, GamepadListener);\n\n    _this = _super.call(this);\n\n    if (typeof navigator.getGamepads !== 'function') {\n      throw new Error('This browser does not support gamepad API.');\n    }\n\n    _this.options = options;\n    _this.onAxis = _this.onAxis.bind(_assertThisInitialized(_this));\n    _this.update = _this.update.bind(_assertThisInitialized(_this));\n    _this.start = _this.start.bind(_assertThisInitialized(_this));\n    _this.stop = _this.stop.bind(_assertThisInitialized(_this));\n    _this.discover = _this.discover.bind(_assertThisInitialized(_this));\n    _this.onButton = _this.onButton.bind(_assertThisInitialized(_this));\n    _this.handlers = new Array(4).fill(null);\n    _this.loop = new gamepad_Loop__WEBPACK_IMPORTED_MODULE_2__[\"default\"](_this.update);\n    window.addEventListener('error', _this.stop);\n    return _this;\n  }\n\n  _createClass(GamepadListener, [{\n    key: \"start\",\n    value: function start() {\n      this.loop.start();\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      this.loop.stop();\n    }\n    /**\n     * Update\n     */\n\n  }, {\n    key: \"update\",\n    value: function update() {\n      var gamepads = navigator.getGamepads();\n      this.discover(gamepads[0], 0);\n      this.discover(gamepads[1], 1);\n      this.discover(gamepads[2], 2);\n      this.discover(gamepads[3], 3);\n    }\n  }, {\n    key: \"discover\",\n    value: function discover(gamepad, index) {\n      if (gamepad) {\n        if (!this.handlers[index]) {\n          this.registerHandler(index, gamepad);\n        }\n\n        this.handlers[index].update(gamepad);\n      } else {\n        if (this.handlers[index]) {\n          this.removeGamepad(index);\n        }\n      }\n    }\n    /**\n     * Add gamepad\n     *\n     * @param {Number} index\n     * @param {Gamepad} gamepad\n     */\n\n  }, {\n    key: \"registerHandler\",\n    value: function registerHandler(index, gamepad) {\n      if (this.handlers[index]) {\n        throw new Error(\"Gamepad #\".concat(index, \" is already registered.\"));\n      }\n\n      var handler = new gamepad_GamepadHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"](index, gamepad, this.options);\n      this.handlers[index] = handler;\n      handler.addEventListener('axis', this.onAxis);\n      handler.addEventListener('button', this.onButton);\n      this.emit('gamepad:connected', {\n        index: index,\n        gamepad: gamepad\n      });\n      this.emit(\"gamepad:\".concat(index, \":connected\"), {\n        index: index,\n        gamepad: gamepad\n      });\n    }\n    /**\n     * Remove gamepad\n     *\n     * @param {Number} index\n     */\n\n  }, {\n    key: \"removeGamepad\",\n    value: function removeGamepad(index) {\n      if (!this.handlers[index]) {\n        throw new Error(\"Gamepad #\".concat(index, \" is not registered.\"));\n      }\n\n      this.handlers[index].removeEventListener('axis', this.onAxis);\n      this.handlers[index].removeEventListener('button', this.onButton);\n      this.handlers[index] = null;\n      this.emit('gamepad:disconnected', {\n        index: index\n      });\n      this.emit(\"gamepad:\".concat(index, \":disconnected\"), {\n        index: index\n      });\n    }\n    /**\n     * On axis\n     *\n     * @param {Event} event\n     */\n\n  }, {\n    key: \"onAxis\",\n    value: function onAxis(event) {\n      var index = event.detail.index;\n      this.emit('gamepad:axis', event.detail);\n      this.emit(\"gamepad:\".concat(index, \":axis\"), event.detail);\n      this.emit(\"gamepad:\".concat(index, \":axis:\").concat(event.detail.axis), event.detail);\n    }\n    /**\n     * On button\n     *\n     * @param {Event} event\n     */\n\n  }, {\n    key: \"onButton\",\n    value: function onButton(event) {\n      var index = event.detail.index;\n      this.emit('gamepad:button', event.detail);\n      this.emit(\"gamepad:\".concat(index, \":button\"), event.detail);\n      this.emit(\"gamepad:\".concat(index, \":button:\").concat(event.detail.button), event.detail);\n    }\n  }]);\n\n  return GamepadListener;\n}(tom32i_event_emitter_js__WEBPACK_IMPORTED_MODULE_0___default.a);\n\n\n\n//# sourceURL=webpack://gamepad/./src/GamepadListener.js?");

/***/ }),

/***/ "./src/Loop.js":
/*!*********************!*\
  !*** ./src/Loop.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Loop; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Loop = /*#__PURE__*/function () {\n  function Loop(callback) {\n    _classCallCheck(this, Loop);\n\n    this.callback = callback;\n    this.frame = null;\n    this.update = this.update.bind(this);\n  }\n\n  _createClass(Loop, [{\n    key: \"setCallback\",\n    value: function setCallback(callback) {\n      this.callback = callback;\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      if (this.frame) {\n        return;\n      }\n\n      this.frame = window.requestAnimationFrame(this.update);\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      if (!this.frame) {\n        return;\n      }\n\n      window.cancelAnimationFrame(this.frame);\n      this.frame = null;\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      this.frame = window.requestAnimationFrame(this.update);\n      this.callback();\n    }\n  }]);\n\n  return Loop;\n}();\n\n\n\n//# sourceURL=webpack://gamepad/./src/Loop.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: GamepadHandler, GamepadListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gamepad_GamepadHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gamepad/GamepadHandler */ \"./src/GamepadHandler.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GamepadHandler\", function() { return gamepad_GamepadHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var gamepad_GamepadListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gamepad/GamepadListener */ \"./src/GamepadListener.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GamepadListener\", function() { return gamepad_GamepadListener__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack://gamepad/./src/index.js?");

/***/ })

/******/ });
});