var REACT_ELEMENT_TYPE,babelHelpers={};function _typeof(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?babelHelpers.typeof=_typeof=function(e){return typeof e}:babelHelpers.typeof=_typeof=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _createRawReactElement(e,r,t,n){REACT_ELEMENT_TYPE=REACT_ELEMENT_TYPE||("function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(r||0==a||(r={children:void 0}),1==a)r.children=n;else if(1<a){for(var l=new Array(a),i=0;i<a;i++)l[i]=arguments[i+3];r.children=l}if(r&&o)for(var s in o)void 0===r[s]&&(r[s]=o[s]);else r=r||(o||{});return{$$typeof:REACT_ELEMENT_TYPE,type:e,key:void 0===t?null:""+t,ref:null,props:r,_owner:null}}function _asyncIterator(e){var r;if("undefined"!=typeof Symbol){if(Symbol.asyncIterator&&null!=(r=e[Symbol.asyncIterator]))return r.call(e);if(Symbol.iterator&&null!=(r=e[Symbol.iterator]))return r.call(e)}throw new TypeError("Object is not async iterable")}function AsyncGenerator(a){var o,l;function i(r,e){try{var t=a[r](e),n=t.value,o=n instanceof babelHelpers.AwaitValue;Promise.resolve(o?n.wrapped:n).then(function(e){o?i("return"===r?"return":"next",e):s(t.done?"return":"normal",e)},function(e){i("throw",e)})}catch(e){s("throw",e)}}function s(e,r){switch(e){case"return":o.resolve({value:r,done:!0});break;case"throw":o.reject(r);break;default:o.resolve({value:r,done:!1})}(o=o.next)?i(o.key,o.arg):l=null}this._invoke=function(t,n){return new Promise(function(e,r){r={key:t,arg:n,resolve:e,reject:r,next:null};l?l=l.next=r:(o=l=r,i(t,n))})},"function"!=typeof a.return&&(this.return=void 0)}function _asyncGeneratorDelegate(n,e){var r={},o=!1;function t(r,t){return o=!0,t=new Promise(function(e){e(n[r](t))}),{done:!1,value:e(t)}}return"function"==typeof Symbol&&Symbol.iterator&&(r[Symbol.iterator]=function(){return this}),r.next=function(e){return o?(o=!1,e):t("next",e)},"function"==typeof n.throw&&(r.throw=function(e){if(o)throw o=!1,e;return t("throw",e)}),"function"==typeof n.return&&(r.return=function(e){return o?(o=!1,e):t("return",e)}),r}function asyncGeneratorStep(e,r,t,n,o,a,l){try{var i=e[a](l),s=i.value}catch(e){return void t(e)}i.done?r(s):Promise.resolve(s).then(n,o)}function _asyncToGenerator(i){return function(){var e=this,l=arguments;return new Promise(function(r,t){var n=i.apply(e,l);function o(e){asyncGeneratorStep(n,r,t,o,a,"next",e)}function a(e){asyncGeneratorStep(n,r,t,o,a,"throw",e)}o(void 0)})}}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),e}function _defineEnumerableProperties(e,r){for(var t in r)(a=r[t]).configurable=a.enumerable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,t,a);if(Object.getOwnPropertySymbols)for(var n=Object.getOwnPropertySymbols(r),o=0;o<n.length;o++){var a,l=n[o];(a=r[l]).configurable=a.enumerable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,l,a)}return e}function _defaults(e,r){for(var t=Object.getOwnPropertyNames(r),n=0;n<t.length;n++){var o=t[n],a=Object.getOwnPropertyDescriptor(r,o);a&&a.configurable&&void 0===e[o]&&Object.defineProperty(e,o,a)}return e}function _defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _extends(){return babelHelpers.extends=_extends=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t,n=arguments[r];for(t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},_extends.apply(this,arguments)}function _inherits(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&babelHelpers.setPrototypeOf(e,r)}function _getPrototypeOf(e){return babelHelpers.getPrototypeOf=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_getPrototypeOf(e)}function _setPrototypeOf(e,r){return babelHelpers.setPrototypeOf=_setPrototypeOf=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},_setPrototypeOf(e,r)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function _construct(e,r,t){return babelHelpers.isNativeReflectConstruct()?babelHelpers.construct=_construct=Reflect.construct:babelHelpers.construct=_construct=function(e,r,t){var n=[null];n.push.apply(n,r);n=new(Function.bind.apply(e,n));return t&&babelHelpers.setPrototypeOf(n,t.prototype),n},_construct.apply(null,arguments)}function _isNativeFunction(e){return-1!==Function.toString.call(e).indexOf("[native code]")}function _wrapNativeSuper(e){var t="function"==typeof Map?new Map:void 0;return babelHelpers.wrapNativeSuper=_wrapNativeSuper=function(e){if(null===e||!babelHelpers.isNativeFunction(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return babelHelpers.construct(e,arguments,babelHelpers.getPrototypeOf(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),babelHelpers.setPrototypeOf(r,e)},_wrapNativeSuper(e)}function _instanceof(e,r){return null!=r&&"undefined"!=typeof Symbol&&r[Symbol.hasInstance]?!!r[Symbol.hasInstance](e):e instanceof r}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return _getRequireWildcardCache=function(){return e},e}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=_getRequireWildcardCache();if(r&&r.has(e))return r.get(e);var t,n,o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&((n=a?Object.getOwnPropertyDescriptor(e,t):null)&&(n.get||n.set)?Object.defineProperty(o,t,n):o[t]=e[t]);return o.default=e,r&&r.set(e,o),o}function _newArrowCheck(e,r){if(e!==r)throw new TypeError("Cannot instantiate an arrow function")}function _objectDestructuringEmpty(e){if(null==e)throw new TypeError("Cannot destructure undefined")}function _objectWithoutPropertiesLoose(e,r){if(null==e)return{};for(var t,n={},o=Object.keys(e),a=0;a<o.length;a++)t=o[a],0<=r.indexOf(t)||(n[t]=e[t]);return n}function _objectWithoutProperties(e,r){if(null==e)return{};var t,n=babelHelpers.objectWithoutPropertiesLoose(e,r);if(Object.getOwnPropertySymbols)for(var o=Object.getOwnPropertySymbols(e),a=0;a<o.length;a++)t=o[a],0<=r.indexOf(t)||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t]);return n}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _possibleConstructorReturn(e,r){return!r||"object"!=typeof r&&"function"!=typeof r?babelHelpers.assertThisInitialized(e):r}function _superPropBase(e,r){for(;!Object.prototype.hasOwnProperty.call(e,r)&&null!==(e=babelHelpers.getPrototypeOf(e)););return e}function _get(e,r,t){return"undefined"!=typeof Reflect&&Reflect.get?babelHelpers.get=_get=Reflect.get:babelHelpers.get=_get=function(e,r,t){e=babelHelpers.superPropBase(e,r);if(e){r=Object.getOwnPropertyDescriptor(e,r);return r.get?r.get.call(t):r.value}},_get(e,r,t||e)}function set(e,r,t,n){return(set="undefined"!=typeof Reflect&&Reflect.set?Reflect.set:function(e,r,t,n){var o,e=babelHelpers.superPropBase(e,r);if(e){if((o=Object.getOwnPropertyDescriptor(e,r)).set)return o.set.call(n,t),!0;if(!o.writable)return!1}if(o=Object.getOwnPropertyDescriptor(n,r)){if(!o.writable)return!1;o.value=t,Object.defineProperty(n,r,o)}else babelHelpers.defineProperty(n,r,t);return!0})(e,r,t,n)}function _set(e,r,t,n,o){if(!set(e,r,t,n||e)&&o)throw new Error("failed to set property");return t}function _taggedTemplateLiteral(e,r){return r=r||e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}function _taggedTemplateLiteralLoose(e,r){return r=r||e.slice(0),e.raw=r,e}function _temporalUndefined(){}function _temporalRef(e,r){return e===babelHelpers.temporalUndefined?babelHelpers.tdz(r):e}function _slicedToArray(e,r){return babelHelpers.arrayWithHoles(e)||babelHelpers.iterableToArrayLimit(e,r)||babelHelpers.unsupportedIterableToArray(e,r)||babelHelpers.nonIterableRest()}function _slicedToArrayLoose(e,r){return babelHelpers.arrayWithHoles(e)||babelHelpers.iterableToArrayLimitLoose(e,r)||babelHelpers.unsupportedIterableToArray(e,r)||babelHelpers.nonIterableRest()}function _toArray(e){return babelHelpers.arrayWithHoles(e)||babelHelpers.iterableToArray(e)||babelHelpers.unsupportedIterableToArray(e)||babelHelpers.nonIterableRest()}function _toConsumableArray(e){return babelHelpers.arrayWithoutHoles(e)||babelHelpers.iterableToArray(e)||babelHelpers.unsupportedIterableToArray(e)||babelHelpers.nonIterableSpread()}function _arrayWithoutHoles(e){if(Array.isArray(e))return babelHelpers.arrayLikeToArray(e)}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}babelHelpers.typeof=_typeof,babelHelpers.jsx=_createRawReactElement,babelHelpers.asyncIterator=_asyncIterator,"function"==typeof Symbol&&Symbol.asyncIterator&&(AsyncGenerator.prototype[Symbol.asyncIterator]=function(){return this}),AsyncGenerator.prototype.next=function(e){return this._invoke("next",e)},AsyncGenerator.prototype.throw=function(e){return this._invoke("throw",e)},AsyncGenerator.prototype.return=function(e){return this._invoke("return",e)},babelHelpers.AsyncGenerator=AsyncGenerator,babelHelpers.asyncGeneratorDelegate=_asyncGeneratorDelegate,babelHelpers.asyncToGenerator=_asyncToGenerator,babelHelpers.classCallCheck=_classCallCheck,babelHelpers.createClass=_createClass,babelHelpers.defineEnumerableProperties=_defineEnumerableProperties,babelHelpers.defaults=_defaults,babelHelpers.defineProperty=_defineProperty,babelHelpers.extends=_extends,babelHelpers.inherits=_inherits,babelHelpers.getPrototypeOf=_getPrototypeOf,babelHelpers.setPrototypeOf=_setPrototypeOf,babelHelpers.isNativeReflectConstruct=_isNativeReflectConstruct,babelHelpers.construct=_construct,babelHelpers.isNativeFunction=_isNativeFunction,babelHelpers.wrapNativeSuper=_wrapNativeSuper,babelHelpers.instanceof=_instanceof,babelHelpers.interopRequireDefault=_interopRequireDefault,babelHelpers.interopRequireWildcard=_interopRequireWildcard,babelHelpers.newArrowCheck=_newArrowCheck,babelHelpers.objectDestructuringEmpty=_objectDestructuringEmpty,babelHelpers.objectWithoutPropertiesLoose=_objectWithoutPropertiesLoose,babelHelpers.objectWithoutProperties=_objectWithoutProperties,babelHelpers.assertThisInitialized=_assertThisInitialized,babelHelpers.possibleConstructorReturn=_possibleConstructorReturn,babelHelpers.superPropBase=_superPropBase,babelHelpers.get=_get,babelHelpers.set=_set,babelHelpers.taggedTemplateLiteral=_taggedTemplateLiteral,babelHelpers.taggedTemplateLiteralLoose=_taggedTemplateLiteralLoose,babelHelpers.temporalUndefined=_temporalUndefined,babelHelpers.temporalRef=_temporalRef,babelHelpers.slicedToArray=_slicedToArray,babelHelpers.slicedToArrayLoose=_slicedToArrayLoose,babelHelpers.toArray=_toArray,babelHelpers.toConsumableArray=_toConsumableArray,babelHelpers.arrayWithoutHoles=_arrayWithoutHoles,babelHelpers.arrayWithHoles=_arrayWithHoles,babelHelpers.iterableToArray=_iterableToArray,babelHelpers.arrayLikeToArray=_arrayLikeToArray;
try{var ce=new window.CustomEvent("test");ce.preventDefault();if(!0!==ce.defaultPrevented)throw Error("Could not prevent default");}catch(e){var CustomEvent=function(d,a){var b,c;a=a||{bubbles:!1,cancelable:!1,detail:void 0};b=document.createEvent("CustomEvent");b.initCustomEvent(d,a.bubbles,a.cancelable,a.detail);c=b.preventDefault;b.preventDefault=function(){c.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(f){this.defaultPrevented=!0}};return b};CustomEvent.prototype=
window.Event.prototype;window.CustomEvent=CustomEvent};
!function(t,e){if(!t.ES6Promise){t.ES6Promise=e();t.ES6Promise.polyfill()}}(this,function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function e(t){return"function"==typeof t}function n(t){I=t}function r(t){J=t}function o(){return function(){return process.nextTick(a)}}function i(){return"undefined"!=typeof H?function(){H(a)}:c()}function s(){var t=0,e=new V(a),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function u(){var t=new MessageChannel;return t.port1.onmessage=a,function(){return t.port2.postMessage(0)}}function c(){var t=setTimeout;return function(){return t(a,1)}}function a(){for(var t=0;t<G;t+=2){var e=$[t],n=$[t+1];e(n),$[t]=void 0,$[t+1]=void 0}G=0}function f(){try{var t=require,e=t("vertx");return H=e.runOnLoop||e.runOnContext,i()}catch(n){return c()}}function l(t,e){var n=arguments,r=this,o=new this.constructor(p);void 0===o[et]&&k(o);var i=r._state;return i?!function(){var t=n[i-1];J(function(){return x(i,o,t,r._result)})}():E(r,o,t,e),o}function h(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(p);return g(n,t),n}function p(){}function v(){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")}function _(t){try{return t.then}catch(e){return it.error=e,it}}function y(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function m(t,e,n){J(function(t){var r=!1,o=y(n,e,function(n){r||(r=!0,e!==n?g(t,n):S(t,n))},function(e){r||(r=!0,j(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,j(t,o))},t)}function b(t,e){e._state===rt?S(t,e._result):e._state===ot?j(t,e._result):E(e,void 0,function(e){return g(t,e)},function(e){return j(t,e)})}function w(t,n,r){n.constructor===t.constructor&&r===l&&n.constructor.resolve===h?b(t,n):r===it?j(t,it.error):void 0===r?S(t,n):e(r)?m(t,n,r):S(t,n)}function g(e,n){e===n?j(e,v()):t(n)?w(e,n,_(n)):S(e,n)}function A(t){t._onerror&&t._onerror(t._result),P(t)}function S(t,e){t._state===nt&&(t._result=e,t._state=rt,0!==t._subscribers.length&&J(P,t))}function j(t,e){t._state===nt&&(t._state=ot,t._result=e,J(A,t))}function E(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+rt]=n,o[i+ot]=r,0===i&&t._state&&J(P,t)}function P(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?x(n,r,o,i):o(i);t._subscribers.length=0}}function T(){this.error=null}function M(t,e){try{return t(e)}catch(n){return st.error=n,st}}function x(t,n,r,o){var i=e(r),s=void 0,u=void 0,c=void 0,a=void 0;if(i){if(s=M(r,o),s===st?(a=!0,u=s.error,s=null):c=!0,n===s)return void j(n,d())}else s=o,c=!0;n._state!==nt||(i&&c?g(n,s):a?j(n,u):t===rt?S(n,s):t===ot&&j(n,s))}function C(t,e){try{e(function(e){g(t,e)},function(e){j(t,e)})}catch(n){j(t,n)}}function O(){return ut++}function k(t){t[et]=ut++,t._state=void 0,t._result=void 0,t._subscribers=[]}function Y(t,e){this._instanceConstructor=t,this.promise=new t(p),this.promise[et]||k(this.promise),B(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?S(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&S(this.promise,this._result))):j(this.promise,q())}function q(){return new Error("Array Methods must be provided an Array")}function F(t){return new Y(this,t).promise}function D(t){var e=this;return new e(B(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function K(t){var e=this,n=new e(p);return j(n,t),n}function L(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function N(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function U(t){this[et]=O(),this._result=this._state=void 0,this._subscribers=[],p!==t&&("function"!=typeof t&&L(),this instanceof U?C(this,t):N())}function W(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;if(n){var r=null;try{r=Object.prototype.toString.call(n.resolve())}catch(e){}if("[object Promise]"===r&&!n.cast)return}t.Promise=U}var z=void 0;z=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var B=z,G=0,H=void 0,I=void 0,J=function(t,e){$[G]=t,$[G+1]=e,G+=2,2===G&&(I?I(a):tt())},Q="undefined"!=typeof window?window:void 0,R=Q||{},V=R.MutationObserver||R.WebKitMutationObserver,X="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),Z="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,$=new Array(1e3),tt=void 0;tt=X?o():V?s():Z?u():void 0===Q&&"function"==typeof require?f():c();var et=Math.random().toString(36).substring(16),nt=void 0,rt=1,ot=2,it=new T,st=new T,ut=0;return Y.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===nt&&n<t;n++)this._eachEntry(e[n],n)},Y.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===h){var o=_(t);if(o===l&&t._state!==nt)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===U){var i=new n(p);w(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},Y.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===nt&&(this._remaining--,t===ot?j(r,n):this._result[e]=n),0===this._remaining&&S(r,this._result)},Y.prototype._willSettleAt=function(t,e){var n=this;E(t,void 0,function(t){return n._settledAt(rt,e,t)},function(t){return n._settledAt(ot,e,t)})},U.all=F,U.race=D,U.resolve=h,U.reject=K,U._setScheduler=n,U._setAsap=r,U._asap=J,U.prototype={constructor:U,then:l,"catch":function(t){return this.then(null,t)}},U.polyfill=W,U.Promise=U,U});
"function"!=typeof Object.values&&(Object.values=function(c){return Object.keys(c).map(function(d){return c[d]})});
"function"!=typeof Object.entries&&(Object.entries=function(c){return Object.keys(c).map(function(d){return [d,c[d]]})});
"function"!=typeof Object.assign&&(Object.assign=function(c){if(null==c)throw new TypeError("Cannot convert undefined or null to object");c=Object(c);for(var e=1;e<arguments.length;e++){var b=arguments[e];if(null!=b)for(var d in b)Object.prototype.hasOwnProperty.call(b,d)&&(c[d]=b[d])}return c});
Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(c,e){if(null==this)throw new TypeError('"this" is null or not defined');var b=Object(this),f=b.length>>>0;if("function"!==typeof c)throw new TypeError("predicate must be a function");for(var a=0;a<f;){var d=b[a];if(c.call(e,d,a,b))return d;a++}},configurable:!0,writable:!0});
Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex",{value:function(c,e){if(null==this)throw new TypeError('"this" is null or not defined');var b=Object(this),d=b.length>>>0;if("function"!==typeof c)throw new TypeError("predicate must be a function");for(var a=0;a<d;){if(c.call(e,b[a],a,b))return a;a++}return-1}});
Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(c,e){if(null==this)throw new TypeError('"this" is null or not defined');var b=Object(this),d=b.length>>>0;if(0===d)return!1;var a=e|0;for(a=Math.max(0<=a?a:d-Math.abs(a),0);a<d;){var f=b[a],g=c;if(f===g||"number"===typeof f&&"number"===typeof g&&isNaN(f)&&isNaN(g))return!0;a++}return!1}});
Array.from||(Array.from=function(){var l=Object.prototype.toString,h=function(c){return"function"===typeof c||"[object Function]"===l.call(c)},m=Math.pow(2,53)-1;return function(c){var k=Object(c);if(null==c)throw new TypeError("Array.from requires an array-like object - not null or undefined");var d=1<arguments.length?arguments[1]:void 0,f;if("undefined"!==typeof d){if(!h(d))throw new TypeError("Array.from: when provided, the second argument must be a function");2<arguments.length&&(f=arguments[2])}var a=Number(k.length);a=isNaN(a)?0:0!==a&&isFinite(a)?(0<a?1:-1)*Math.floor(Math.abs(a)):a;a=Math.min(Math.max(a,0),m);for(var g=h(this)?Object(new this(a)):Array(a),b=0,e;b<a;)e=k[b],g[b]=d?"undefined"===typeof f?d(e,b):d.call(f,e,b):e,b+=1;g.length=a;return g}}());
String.prototype.padStart||Object.defineProperty(String.prototype,"padStart",{value:function(b,a){b>>=0;a=String("undefined"!==typeof a?a:" ");if(this.length>b)return String(this);b-=this.length;b>a.length&&(a+=a.repeat(b/a.length));return a.slice(0,b)+String(this)}});
String.prototype.includes||Object.defineProperty(String.prototype,"includes",{value:function(b,a){"number"!==typeof a&&(a=0);return a+b.length>this.length?!1:-1!==this.indexOf(b,a)}});

(function(n){function i(a,d){this.setNotifyMethod(a);this.setNotifyContext(d)}function j(a,d,b){this.name=a;this.body=d;this.type=b}function k(){}function m(){}function l(){this.subCommands=[];this.initializeMacroCommand()}function g(a,d){this.mediatorName=a||this.constructor.NAME;this.viewComponent=d}function h(a,d){this.proxyName=a||this.constructor.NAME;null!=d&&this.setData(d)}function b(a){if(null!=b.instanceMap[a])throw Error(b.MULTITON_MSG);this.initializeNotifier(a);b.instanceMap[a]=this;
this.initializeFacade()}function c(a){if(null!=c.instanceMap[a])throw Error(c.MULTITON_MSG);this.multitonKey=a;c.instanceMap[this.multitonKey]=this;this.mediatorMap=[];this.observerMap=[];this.initializeView()}function e(a){if(e.instanceMap[a])throw Error(e.MULTITON_MSG);this.multitonKey=a;e.instanceMap[a]=this;this.proxyMap=[];this.initializeModel()}function f(a){if(null!=f.instanceMap[a])throw Error(f.MULTITON_MSG);this.multitonKey=a;f.instanceMap[this.multitonKey]=this;this.commandMap=[];this.initializeController()}
function p(a,d,b){for(var a=a.split("."),b=b||o.global,c,e,f=0,g=a.length;f<g;f++)c=b,e=a[f],b=null==b[e]?b[e]={}:b[e];return null==d?b:c[e]=d}null==n&&(n=window);if(!n.puremvc){i.prototype.setNotifyMethod=function(a){this.notify=a};i.prototype.setNotifyContext=function(a){this.context=a};i.prototype.getNotifyMethod=function(){return this.notify};i.prototype.getNotifyContext=function(){return this.context};i.prototype.notifyObserver=function(a){this.getNotifyMethod().call(this.getNotifyContext(),
a)};i.prototype.compareNotifyContext=function(a){return a===this.context};i.prototype.notify=null;i.prototype.context=null;j.prototype.getName=function(){return this.name};j.prototype.setBody=function(a){this.body=a};j.prototype.getBody=function(){return this.body};j.prototype.setType=function(a){this.type=a};j.prototype.getType=function(){return this.type};j.prototype.toString=function(){var a="Notification Name: "+this.getName(),a=a+("\nBody:"+(null==this.body?"null":this.body.toString()));return a+=
"\nType:"+(null==this.type?"null":this.type)};j.prototype.name=null;j.prototype.type=null;j.prototype.body=null;k.prototype.sendNotification=function(a,d,b){var c=this.getFacade();c&&c.sendNotification(a,d,b)};k.prototype.initializeNotifier=function(a){this.multitonKey=""+a;this.facade=this.getFacade()};k.prototype.getFacade=function(){if(null==this.multitonKey)throw Error(k.MULTITON_MSG);return b.getInstance(this.multitonKey)};k.prototype.multitonKey=null;k.MULTITON_MSG="multitonKey for this Notifier not yet initialized!";
m.prototype=new k;m.prototype.constructor=m;m.prototype.execute=function(){};l.prototype=new k;l.prototype.constructor=l;l.prototype.subCommands=null;l.prototype.initializeMacroCommand=function(){};l.prototype.addSubCommand=function(a){this.subCommands.push(a)};l.prototype.execute=function(a){for(;0<this.subCommands.length;){var d=new (this.subCommands.shift());d.initializeNotifier(this.multitonKey);d.execute(a)}};g.NAME="Mediator";g.prototype=new k;g.prototype.constructor=g;g.prototype.getMediatorName=
function(){return this.mediatorName};g.prototype.setViewComponent=function(a){this.viewComponent=a};g.prototype.getViewComponent=function(){return this.viewComponent};g.prototype.listNotificationInterests=function(){return[]};g.prototype.handleNotification=function(){};g.prototype.onRegister=function(){};g.prototype.onRemove=function(){};g.prototype.mediatorName=null;g.prototype.viewComponent=null;h.NAME="Proxy";h.prototype=new k;h.prototype.constructor=h;h.prototype.getProxyName=function(){return this.proxyName};
h.prototype.setData=function(a){this.data=a};h.prototype.getData=function(){return this.data};h.prototype.onRegister=function(){};h.prototype.onRemove=function(){};h.prototype.proxyName=null;h.prototype.data=null;b.prototype.initializeFacade=function(){this.initializeModel();this.initializeController();this.initializeView()};b.getInstance=function(a){if(null==a)return null;null==b.instanceMap[a]&&(b.instanceMap[a]=new b(a));return b.instanceMap[a]};b.prototype.initializeController=function(){if(null==
this.controller)this.controller=f.getInstance(this.multitonKey)};b.prototype.initializeModel=function(){if(null==this.model)this.model=e.getInstance(this.multitonKey)};b.prototype.initializeView=function(){if(null==this.view)this.view=c.getInstance(this.multitonKey)};b.prototype.registerCommand=function(a,d){this.controller.registerCommand(a,d)};b.prototype.removeCommand=function(a){this.controller.removeCommand(a)};b.prototype.hasCommand=function(a){return this.controller.hasCommand(a)};b.prototype.registerProxy=
function(a){this.model.registerProxy(a)};b.prototype.retrieveProxy=function(a){return this.model.retrieveProxy(a)};b.prototype.removeProxy=function(a){var d=null;null!=this.model&&(d=this.model.removeProxy(a));return d};b.prototype.hasProxy=function(a){return this.model.hasProxy(a)};b.prototype.registerMediator=function(a){null!=this.view&&this.view.registerMediator(a)};b.prototype.retrieveMediator=function(a){return this.view.retrieveMediator(a)};b.prototype.removeMediator=function(a){var d=null;
null!=this.view&&(d=this.view.removeMediator(a));return d};b.prototype.hasMediator=function(a){return this.view.hasMediator(a)};b.prototype.sendNotification=function(a,d,b){this.notifyObservers(new j(a,d,b))};b.prototype.notifyObservers=function(a){null!=this.view&&this.view.notifyObservers(a)};b.prototype.initializeNotifier=function(a){this.multitonKey=a};b.hasCore=function(a){return null!=b.instanceMap[a]};b.removeCore=function(a){null!=b.instanceMap[a]&&(e.removeModel(a),c.removeView(a),f.removeController(a),
delete b.instanceMap[a])};b.prototype.controller=null;b.prototype.model=null;b.prototype.view=null;b.prototype.multitonKey=null;b.instanceMap=[];b.MULTITON_MSG="Facade instance for this Multiton key already constructed!";c.prototype.initializeView=function(){};c.getInstance=function(a){if(null==a)return null;null==c.instanceMap[a]&&(c.instanceMap[a]=new c(a));return c.instanceMap[a]};c.prototype.registerObserver=function(a,d){null!=this.observerMap[a]?this.observerMap[a].push(d):this.observerMap[a]=
[d]};c.prototype.notifyObservers=function(a){if(null!=this.observerMap[a.getName()]){for(var d=this.observerMap[a.getName()],b=[],c,e=0;e<d.length;e++)c=d[e],b.push(c);for(e=0;e<b.length;e++)c=b[e],c.notifyObserver(a)}};c.prototype.removeObserver=function(a,d){for(var b=this.observerMap[a],c=0;c<b.length;c++)if(!0==b[c].compareNotifyContext(d)){b.splice(c,1);break}0==b.length&&delete this.observerMap[a]};c.prototype.registerMediator=function(a){if(null==this.mediatorMap[a.getMediatorName()]){a.initializeNotifier(this.multitonKey);
this.mediatorMap[a.getMediatorName()]=a;var d=a.listNotificationInterests();if(0<d.length)for(var b=new i(a.handleNotification,a),c=0;c<d.length;c++)this.registerObserver(d[c],b);a.onRegister()}};c.prototype.retrieveMediator=function(a){return this.mediatorMap[a]};c.prototype.removeMediator=function(a){var d=this.mediatorMap[a];if(d){for(var b=d.listNotificationInterests(),c=0;c<b.length;c++)this.removeObserver(b[c],d);delete this.mediatorMap[a];d.onRemove()}return d};c.prototype.hasMediator=function(a){return null!=
this.mediatorMap[a]};c.removeView=function(a){delete c.instanceMap[a]};c.prototype.mediatorMap=null;c.prototype.observerMap=null;c.instanceMap=[];c.prototype.multitonKey=null;c.MULTITON_MSG="View instance for this Multiton key already constructed!";e.prototype.initializeModel=function(){};e.getInstance=function(a){if(null==a)return null;null==e.instanceMap[a]&&(e.instanceMap[a]=new e(a));return e.instanceMap[a]};e.prototype.registerProxy=function(a){a.initializeNotifier(this.multitonKey);this.proxyMap[a.getProxyName()]=
a;a.onRegister()};e.prototype.retrieveProxy=function(a){return this.proxyMap[a]};e.prototype.hasProxy=function(a){return null!=this.proxyMap[a]};e.prototype.removeProxy=function(a){var b=this.proxyMap[a];b&&(this.proxyMap[a]=null,b.onRemove());return b};e.removeModel=function(a){delete e.instanceMap[a]};e.prototype.proxyMap=null;e.instanceMap=[];e.MULTITON_MSG="Model instance for this Multiton key already constructed!";f.prototype.initializeController=function(){this.view=c.getInstance(this.multitonKey)};
f.getInstance=function(a){if(null==a)return null;null==this.instanceMap[a]&&(this.instanceMap[a]=new this(a));return this.instanceMap[a]};f.prototype.executeCommand=function(a){var b=this.commandMap[a.getName()];null!=b&&(b=new b,b.initializeNotifier(this.multitonKey),b.execute(a))};f.prototype.registerCommand=function(a,b){null==this.commandMap[a]&&this.view.registerObserver(a,new i(this.executeCommand,this));this.commandMap[a]=b};f.prototype.hasCommand=function(a){return null!=this.commandMap[a]};
f.prototype.removeCommand=function(a){this.hasCommand(a)&&(this.view.removeObserver(a,this),this.commandMap[a]=null)};f.removeController=function(a){delete this.instanceMap[a]};f.prototype.view=null;f.prototype.commandMap=null;f.prototype.multitonKey=null;f.instanceMap=[];f.MULTITON_MSG="controller key for this Multiton key already constructed";var o={global:function(){return this}(),extend:function(a,b){if("function"!==typeof a)throw new TypeError("#extend- child should be Function");if("function"!==
typeof b)throw new TypeError("#extend- parent should be Function");if(b!==a){var c=new Function;c.prototype=b.prototype;a.prototype=new c;return a.prototype.constructor=a}},decorate:function(a,b){for(var c in b)a[c]=b[c];return a}};n.puremvc={View:c,Model:e,Controller:f,SimpleCommand:m,MacroCommand:l,Facade:b,Mediator:g,Observer:i,Notification:j,Notifier:k,Proxy:h,define:function(a,b,c){a||(a={});var e=a.name,f=a.parent,g="function"===typeof f,h=a.scope||null;if("parent"in a&&!g)throw new TypeError("Class parent must be Function");
if(a.hasOwnProperty("constructor")){if(a=a.constructor,"function"!==typeof a)throw new TypeError("Class constructor must be Function");}else a=g?function(){f.apply(this,arguments)}:new Function;g&&o.extend(a,f);if(b)g=a.prototype,o.decorate(g,b),g.constructor=a;c&&o.decorate(a,c);if(e){if("string"!==typeof e)throw new TypeError("Class name must be primitive string");p(e,a,h)}return a},declare:p}}})(this);
/*!
 * Bowser - a browser detector
 * https://github.com/ded/bowser
 * MIT License | (c) Dustin Diaz 2015
 */
!function(e,t,n){typeof module!="undefined"&&module.exports?module.exports=n():typeof define=="function"&&define.amd?define(t,n):e[t]=n()}(this,"bowser",function(){function t(t){function n(e){var n=t.match(e);return n&&n.length>1&&n[1]||""}function r(e){var n=t.match(e);return n&&n.length>1&&n[2]||""}function N(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return undefined}}var i=n(/(ipod|iphone|ipad)/i).toLowerCase(),s=/like android/i.test(t),o=!s&&/android/i.test(t),u=/nexus\s*[0-6]\s*/i.test(t),a=!u&&/nexus\s*[0-9]+/i.test(t),f=/CrOS/.test(t),l=/silk/i.test(t),c=/sailfish/i.test(t),h=/tizen/i.test(t),p=/(web|hpw)os/i.test(t),d=/windows phone/i.test(t),v=/SamsungBrowser/i.test(t),m=!d&&/windows/i.test(t),g=!i&&!l&&/macintosh/i.test(t),y=!o&&!c&&!h&&!p&&/linux/i.test(t),b=r(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),w=n(/version\/(\d+(\.\d+)?)/i),E=/tablet/i.test(t)&&!/tablet pc/i.test(t),S=!E&&/[^-]mobi/i.test(t),x=/xbox/i.test(t),T;/opera/i.test(t)?T={name:"Opera",opera:e,version:w||n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)}:/opr\/|opios/i.test(t)?T={name:"Opera",opera:e,version:n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i)||w}:/SamsungBrowser/i.test(t)?T={name:"Samsung Internet for Android",samsungBrowser:e,version:w||n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)}:/coast/i.test(t)?T={name:"Opera Coast",coast:e,version:w||n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)}:/yabrowser/i.test(t)?T={name:"Yandex Browser",yandexbrowser:e,version:w||n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}:/ucbrowser/i.test(t)?T={name:"UC Browser",ucbrowser:e,version:n(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)}:/mxios/i.test(t)?T={name:"Maxthon",maxthon:e,version:n(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)}:/epiphany/i.test(t)?T={name:"Epiphany",epiphany:e,version:n(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)}:/puffin/i.test(t)?T={name:"Puffin",puffin:e,version:n(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)}:/sleipnir/i.test(t)?T={name:"Sleipnir",sleipnir:e,version:n(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)}:/k-meleon/i.test(t)?T={name:"K-Meleon",kMeleon:e,version:n(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)}:d?(T={name:"Windows Phone",osname:"Windows Phone",windowsphone:e},b?(T.msedge=e,T.version=b):(T.msie=e,T.version=n(/iemobile\/(\d+(\.\d+)?)/i))):/msie|trident/i.test(t)?T={name:"Internet Explorer",msie:e,version:n(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:f?T={name:"Chrome",osname:"Chrome OS",chromeos:e,chromeBook:e,chrome:e,version:n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:/edg([ea]|ios)/i.test(t)?T={name:"Microsoft Edge",msedge:e,version:b}:/vivaldi/i.test(t)?T={name:"Vivaldi",vivaldi:e,version:n(/vivaldi\/(\d+(\.\d+)?)/i)||w}:c?T={name:"Sailfish",osname:"Sailfish OS",sailfish:e,version:n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(t)?T={name:"SeaMonkey",seamonkey:e,version:n(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel|fxios/i.test(t)?(T={name:"Firefox",firefox:e,version:n(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t)&&(T.firefoxos=e,T.osname="Firefox OS")):l?T={name:"Amazon Silk",silk:e,version:n(/silk\/(\d+(\.\d+)?)/i)}:/phantom/i.test(t)?T={name:"PhantomJS",phantom:e,version:n(/phantomjs\/(\d+(\.\d+)?)/i)}:/slimerjs/i.test(t)?T={name:"SlimerJS",slimer:e,version:n(/slimerjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(t)||/rim\stablet/i.test(t)?T={name:"BlackBerry",osname:"BlackBerry OS",blackberry:e,version:w||n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:p?(T={name:"WebOS",osname:"WebOS",webos:e,version:w||n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(t)&&(T.touchpad=e)):/bada/i.test(t)?T={name:"Bada",osname:"Bada",bada:e,version:n(/dolfin\/(\d+(\.\d+)?)/i)}:h?T={name:"Tizen",osname:"Tizen",tizen:e,version:n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||w}:/qupzilla/i.test(t)?T={name:"QupZilla",qupzilla:e,version:n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i)||w}:/chromium/i.test(t)?T={name:"Chromium",chromium:e,version:n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i)||w}:/chrome|crios|crmo/i.test(t)?T={name:"Chrome",chrome:e,version:n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:o?T={name:"Android",version:w}:/safari|applewebkit/i.test(t)?(T={name:"Safari",safari:e},w&&(T.version=w)):i?(T={name:i=="iphone"?"iPhone":i=="ipad"?"iPad":"iPod"},w&&(T.version=w)):/googlebot/i.test(t)?T={name:"Googlebot",googlebot:e,version:n(/googlebot\/(\d+(\.\d+))/i)||w}:T={name:n(/^(.*)\/(.*) /),version:r(/^(.*)\/(.*) /)},!T.msedge&&/(apple)?webkit/i.test(t)?(/(apple)?webkit\/537\.36/i.test(t)?(T.name=T.name||"Blink",T.blink=e):(T.name=T.name||"Webkit",T.webkit=e),!T.version&&w&&(T.version=w)):!T.opera&&/gecko\//i.test(t)&&(T.name=T.name||"Gecko",T.gecko=e,T.version=T.version||n(/gecko\/(\d+(\.\d+)?)/i)),!T.windowsphone&&(o||T.silk)?(T.android=e,T.osname="Android"):!T.windowsphone&&i?(T[i]=e,T.ios=e,T.osname="iOS"):g?(T.mac=e,T.osname="macOS"):x?(T.xbox=e,T.osname="Xbox"):m?(T.windows=e,T.osname="Windows"):y&&(T.linux=e,T.osname="Linux");var C="";T.windows?C=N(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)):T.windowsphone?C=n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):T.mac?(C=n(/Mac OS X (\d+([_\.\s]\d+)*)/i),C=C.replace(/[_\s]/g,".")):i?(C=n(/os (\d+([_\s]\d+)*) like mac os x/i),C=C.replace(/[_\s]/g,".")):o?C=n(/android[ \/-](\d+(\.\d+)*)/i):T.webos?C=n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):T.blackberry?C=n(/rim\stablet\sos\s(\d+(\.\d+)*)/i):T.bada?C=n(/bada\/(\d+(\.\d+)*)/i):T.tizen&&(C=n(/tizen[\/\s](\d+(\.\d+)*)/i)),C&&(T.osversion=C);var k=!T.windows&&C.split(".")[0];if(E||a||i=="ipad"||o&&(k==3||k>=4&&!S)||T.silk)T.tablet=e;else if(S||i=="iphone"||i=="ipod"||o||u||T.blackberry||T.webos||T.bada)T.mobile=e;return T.msedge||T.msie&&T.version>=10||T.yandexbrowser&&T.version>=15||T.vivaldi&&T.version>=1||T.chrome&&T.version>=20||T.samsungBrowser&&T.version>=4||T.firefox&&T.version>=20||T.safari&&T.version>=6||T.opera&&T.version>=10||T.ios&&T.osversion&&T.osversion.split(".")[0]>=6||T.blackberry&&T.version>=10.1||T.chromium&&T.version>=20?T.a=e:T.msie&&T.version<10||T.chrome&&T.version<20||T.firefox&&T.version<20||T.safari&&T.version<6||T.opera&&T.version<10||T.ios&&T.osversion&&T.osversion.split(".")[0]<6||T.chromium&&T.version<20?T.c=e:T.x=e,T}function r(e){return e.split(".").length}function i(e,t){var n=[],r;if(Array.prototype.map)return Array.prototype.map.call(e,t);for(r=0;r<e.length;r++)n.push(t(e[r]));return n}function s(e){var t=Math.max(r(e[0]),r(e[1])),n=i(e,function(e){var n=t-r(e);return e+=(new Array(n+1)).join(".0"),i(e.split("."),function(e){return(new Array(20-e.length)).join("0")+e}).reverse()});while(--t>=0){if(n[0][t]>n[1][t])return 1;if(n[0][t]!==n[1][t])return-1;if(t===0)return 0}}function o(e,r,i){var o=n;typeof r=="string"&&(i=r,r=void 0),r===void 0&&(r=!1),i&&(o=t(i));var u=""+o.version;for(var a in e)if(e.hasOwnProperty(a)&&o[a]){if(typeof e[a]!="string")throw new Error("Browser version in the minVersion map should be a string: "+a+": "+String(e));return s([u,e[a]])<0}return r}function u(e,t,n){return!o(e,t,n)}var e=!0,n=t(typeof navigator!="undefined"?navigator.userAgent||"":"");return n.test=function(e){for(var t=0;t<e.length;++t){var r=e[t];if(typeof r=="string"&&r in n)return!0}return!1},n.isUnsupportedBrowser=o,n.compareVersions=s,n.check=u,n._detect=t,n.detect=t,n});

var akamai = (function () {
  'use strict';

  var AMPError = /*#__PURE__*/function (_Error) {
    babelHelpers.inherits(AMPError, _Error);

    function AMPError(message) {
      var _this;

      var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
      var metadata = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      babelHelpers.classCallCheck(this, AMPError);
      _this = _Error.call(this) || this;
      _this.code = code;
      _this.metadata = metadata;

      if (message instanceof AMPError) {
        return babelHelpers.possibleConstructorReturn(_this, message);
      }

      if (babelHelpers["typeof"](message) === "object") {
        _this.metadata = message.metadata || message;
        _this.message = message.message || (typeof message.toString === "function" ? message.toString() : void 0);

        if (message.code) {
          _this.code = message.code;
        }
      } else {
        _this.message = message;
      }

      return _this;
    }

    babelHelpers.createClass(AMPError, null, [{
      key: "create",
      value: function create(message, code, metadata) {
        return new AMPError(message, code, metadata);
      }
    }]);
    return AMPError;
  }( /*#__PURE__*/babelHelpers.wrapNativeSuper(Error));

  var Event = /*#__PURE__*/function () {
    /**
     * Event constructor.
     *
     * @param {!string}  type  A string representing the event's type.
     * @param {Object=} detail  Data to pass along with the event.
     * @constructor
     * @private
     */
    function Event(type) {
      var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      babelHelpers.classCallCheck(this, Event);
      this.type = type;
      this.detail = this.data = detail;
      this.target = null;
    }
    /**
     * Create an event
     *
     * @param {!string}  type  A string representing the event's type.
     * @param {Object=} detail  Data to pass along with the event.
     * @return {Event}
     */


    babelHelpers.createClass(Event, null, [{
      key: "create",
      value: function create(type, detail) {
        return new Event(type, detail);
      }
    }]);
    return Event;
  }();

  var EventDispatcher = /*#__PURE__*/function () {
    /**
     * Creates a new EventDispatcher
     *
     * @constructor
     * @private
     * @implements {IEventDispatcher}
     */
    function EventDispatcher() {
      var _target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;

      babelHelpers.classCallCheck(this, EventDispatcher);
      this._target = _target;
      this._listenerMap = {};
      this._regex = [];
      this.emit = this.dispatch.bind(this);
      this.on = this.addListener = this.addEventListener.bind(this);
      this.off = this.removeListener = this.removeEventListener.bind(this);
    }
    /**
     * Creates a new EventDispatcher
     *
     * @param {Object} target
     *  The event dispatcher target
     *
     * @return {EventDispatcher}
     */


    babelHelpers.createClass(EventDispatcher, [{
      key: "addEventListener",
      value:
      /**
       * Adds a listener for a given event type.
       *
       * @param {!string}  type  A string representing the event's type.
       * @param {!Function} func  A function to call when the event is triggered.
       */
      function addEventListener(type, func) {
        if (func == null || type == null) {
          return;
        }

        if (type instanceof RegExp) {
          func.__regex = type;

          this._regex.push(func);
        } else {
          if (this._listenerMap[type] == null) {
            this._listenerMap[type] = [];
          }

          if (this._listenerMap[type].indexOf(func) !== -1) {
            return;
          }

          this._listenerMap[type].push(func);
        }
      }
      /**
       * Adds a listener for a given event type and removes it after it has been triggered once.
       */

    }, {
      key: "once",
      value: function once(type, func) {
        func.__once = true;
        this.addEventListener(type, func);
      }
      /**
       * Dispathes an event, triggering all event listener of the event's type.
       *
       * @param {!IEvent} event The event to dispatch.
       */

    }, {
      key: "dispatchEvent",
      value: function dispatchEvent(event) {
        if (this._target == null && this._listenerMap == null) return;
        if (event.target == null && babelHelpers["typeof"](event) === 'object') event.target = this._target;
        var type = event.type;
        var target = this._target;
        var listener = target["on" + type];

        if (listener != null) {
          listener.apply(target, [event]);
        }

        var listeners = this._listenerMap[type];

        if (listeners && listeners.length > 0) {
          var copy = listeners.slice();

          for (var i = 0, len = copy.length; i < len; ++i) {
            listener = copy[i];
            listener.call(target, event);

            if (listener.__once === true) {
              listeners.splice(i, 1);
            }
          }
        }

        listeners = this._regex;

        if (listeners.length > 0) {
          var _copy = listeners.slice();

          for (var _i = 0, _len = _copy.length; _i < _len; ++_i) {
            listener = _copy[_i];

            if (listener.__regex.test(type) == false) {
              continue;
            }

            listener.call(target, event);

            if (listener.__once === true) {
              listeners.splice(_i, 1);
            }
          }
        }
      }
      /**
       * Dispathes an event, triggering all event listener of the event's type.
       *
       * @param {!String} type    The type of event to dispatch.
       * @param {Object=} detail  Data to pass along with the event.
       */

    }, {
      key: "dispatch",
      value: function dispatch(type, detail) {
        this.dispatchEvent(Event.create(type, detail));
      }
      /**
       * Removes a listener for a given event type.
       *
       * @param {!string}  type  A string representing the event's type.
       * @param {!Function} func  A function to call when the event is triggered.
       * @return {?Function} the handler that was removed if any
       */

    }, {
      key: "removeEventListener",
      value: function removeEventListener(type, func) {
        if (func == null || type == null) {
          return;
        }

        var regexp = type instanceof RegExp;
        var listeners = regexp ? this._regex : this._listenerMap[type];

        if (listeners == null) {
          return;
        }

        var index = listeners.indexOf(func);

        if (index === -1) {
          return;
        }

        if (regexp && type.toString() !== listeners[index].__regex.toString()) {
          return;
        }

        return listeners.splice(index, 1);
      }
      /**
       * Destroys the EventDispatcher
       */

    }, {
      key: "destroy",
      value: function destroy() {
        this._listenerMap = null;
        this._target = null;
      }
    }], [{
      key: "create",
      value: function create(target) {
        return new EventDispatcher(target);
      }
    }]);
    return EventDispatcher;
  }();

  var Timer = /*#__PURE__*/function (_EventDispatcher) {
    babelHelpers.inherits(Timer, _EventDispatcher);

    /**
     * Constructs a new Timer object with the specified delay and repeatCount states.
     */
    function Timer(delay) {
      var _this;

      var repeatCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var timeoutSet = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : setTimeout;
      var timeoutClear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : clearTimeout;
      babelHelpers.classCallCheck(this, Timer);
      _this = _EventDispatcher.call(this) || this;
      _this.delay = delay;
      _this.repeatCount = repeatCount;
      _this.timerGroup = timerGroup;
      _this._running = false;
      _this._currentCount = 0;
      _this._timeout = null;
      _this._startTime = null;
      _this._currentTime = 0;
      _this.setTimeout = timeoutSet;
      _this.clearTimeout = timeoutClear;

      _this.next = function () {
        var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.delay;
        return _this.setTimeout(function () {
          return _this.tick();
        }, delay);
      };

      _this.clear = function () {
        return _this.clearTimeout(_this._timeout);
      };

      return _this;
    }
    /**
     * The timer event. Called on every iteration of the timer.
     *
     * @static
     * @type {string}
     */


    babelHelpers.createClass(Timer, [{
      key: "currentCount",
      get:
      /**
       *
       */
      function get() {
        return this._currentCount;
      }
      /**
       *
       */

    }, {
      key: "running",
      get: function get() {
        return this._running;
      }
      /**
       *
       */

    }, {
      key: "time",
      get: function get() {
        return this._currentTime + (Date.now() - this._startTime);
      }
      /**
       * Stops the timer, if it is running, and sets the currentCount property back to 0, like the reset button of a stopwatch.
       */

    }, {
      key: "reset",
      value: function reset() {
        this.stop();
        this._currentCount = 0;
        this._currentTime = 0;
        this._startTime = null;
      }
      /**
       * Starts the timer, if it is not already running.
       */

    }, {
      key: "start",
      value: function start() {
        if (this._running === true) {
          return;
        }

        var delay = this.delay - (this._currentTime - this.delay * this._currentCount);
        this._running = true;
        this._timeout = this.next(delay);
      }
      /**
       * Stops the timer.
       */

    }, {
      key: "stop",
      value: function stop() {
        if (this._running === false) {
          return;
        }

        this.clear();
        this._currentTime += Date.now() - this._startTime;
        this._timeout = null;
        this._running = false;
      }
      /**
       *
       */

    }, {
      key: "tick",
      value: function tick() {
        this.clear();
        var complete = this.repeatCount !== 0 && this._currentCount >= this.repeatCount;
        this._currentCount++;
        this._currentTime += this.delay;
        this._startTime = Date.now();

        if (complete === false) {
          this._timeout = this.next(this.delay);
        }

        this.dispatch(Timer.TIMER, this);

        if (complete === true) {
          this.stop();
          this.dispatch(Timer.COMPLETE, this);
        }
      }
      /**
       *
       */

    }, {
      key: "destroy",
      value: function destroy() {
        this.clear();
        babelHelpers.get(babelHelpers.getPrototypeOf(Timer.prototype), "destroy", this).call(this);
        this.next = null;
      }
    }], [{
      key: "TIMER",
      get: function get() {
        return "timer";
      }
      /**
       * The complete event. Called when timer reaches repeat count.
       *
       * @static
       * @type {string}
       */

    }, {
      key: "COMPLETE",
      get: function get() {
        return "complete";
      }
      /**
       * Create a new Timer instance
       *
       * @param {number} delay
       * @param {number} repeatCount
       * @return {Timer}
       */

    }, {
      key: "create",
      value: function create(delay, repeatCount, timeoutSet, timeoutClear) {
        return new Timer(delay, repeatCount, timeoutSet, timeoutClear);
      }
    }]);
    return Timer;
  }(EventDispatcher);

  var TimerGroup = /*#__PURE__*/function () {
    /**
     *
     */
    function TimerGroup(id) {
      babelHelpers.classCallCheck(this, TimerGroup);
      this.id = id;
      this.intervals = [];
      this.timeouts = [];
      this.timers = [];
      this.groups = [];
    }
    /**
     *
     */


    babelHelpers.createClass(TimerGroup, [{
      key: "setTimeout",
      value: function (_setTimeout) {
        function setTimeout(_x, _x2) {
          return _setTimeout.apply(this, arguments);
        }

        setTimeout.toString = function () {
          return _setTimeout.toString();
        };

        return setTimeout;
      }(
      /**
       *
       */
      function (func, interval) {
        var _this = this;

        for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }

        var id = setTimeout(function () {
          func.apply(null, args);

          _this.clearTimeout(id);
        }, interval);
        this.timeouts.push(id);
        return id;
      }
      /**
       *
       */
      )
    }, {
      key: "clearTimeout",
      value: function (_clearTimeout) {
        function clearTimeout(_x3) {
          return _clearTimeout.apply(this, arguments);
        }

        clearTimeout.toString = function () {
          return _clearTimeout.toString();
        };

        return clearTimeout;
      }(function (id) {
        var index = this.timeouts.indexOf(id);

        if (index !== -1) {
          this.timeouts.splice(index, 1);
        }

        return clearTimeout(id);
      }
      /**
       *
       */
      )
    }, {
      key: "setInterval",
      value: function (_setInterval) {
        function setInterval() {
          return _setInterval.apply(this, arguments);
        }

        setInterval.toString = function () {
          return _setInterval.toString();
        };

        return setInterval;
      }(function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        var id = setInterval.apply(null, args);
        this.intervals.push(id);
        return id;
      }
      /**
       *
       */
      )
    }, {
      key: "clearInterval",
      value: function (_clearInterval) {
        function clearInterval(_x4) {
          return _clearInterval.apply(this, arguments);
        }

        clearInterval.toString = function () {
          return _clearInterval.toString();
        };

        return clearInterval;
      }(function (id) {
        var index = this.intervals.indexOf(id);

        if (index !== -1) {
          this.intervals.splice(index, 1);
        }

        return clearInterval(id);
      }
      /**
       *
       */
      )
    }, {
      key: "setImmediate",
      value: function setImmediate(func) {
        var _this2 = this;

        for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          args[_key3 - 1] = arguments[_key3];
        }

        var id = setTimeout(function () {
          func.apply(null, args);

          _this2.clearImmediate(id);
        }, 0);
        this.timeouts.push(id);
        return id;
      }
      /**
       *
       */

    }, {
      key: "clearImmediate",
      value: function clearImmediate(id) {
        var index = this.timeouts.indexOf(id);

        if (index !== -1) {
          this.timeouts.splice(index, 1);
        }

        return clearTimeout(id);
      }
      /**
       *
       */

    }, {
      key: "setTimer",
      value: function setTimer(delay, repeatCount) {
        var timer = Timer.create(delay, repeatCount, this.setTimeout.bind(this), this.clearTimeout.bind(this));
        this.timers.push(timer);
        return timer;
      }
      /**
       *
       */

    }, {
      key: "clearTimer",
      value: function clearTimer(timer) {
        var index = this.timers.indexOf(timer);

        if (index !== -1) {
          timer = this.timers.splice(index, 1);
          timer.destroy();
        }
      }
      /**
       *
       */

    }, {
      key: "setGroup",
      value: function setGroup(id) {
        var group = TimerGroup.create(id);
        this.groups.push(group);
        return group;
      }
      /**
       *
       */

    }, {
      key: "clearGroup",
      value: function clearGroup(id) {
        var index = this.groups.indexOf(timer);

        if (index !== -1) {
          var group = this.groups.splice(index, 1);
          group.destroy();
        }
      }
      /**
       * @override
       */

    }, {
      key: "destroy",
      value: function destroy() {
        this.intervals.forEach(function (id) {
          return clearInterval(id);
        });
        this.timeouts.forEach(function (id) {
          return clearTimeout(id);
        });
        this.timers.forEach(function (id) {
          return id.destroy();
        });
        this.groups.forEach(function (id) {
          return id.destroy();
        });
        this.id = null;
        this.intervals = null;
        this.timeouts = null;
        this.timers = null;
        this.groups = null;
      }
    }], [{
      key: "create",
      value: function create(id) {
        return new TimerGroup(id);
      }
    }]);
    return TimerGroup;
  }();

  // fp utils
  var _pipe = function _pipe(f, g) {
    return function () {
      return f(g.apply(void 0, arguments));
    };
  };

  var pipe = function pipe() {
    for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }

    return fns.reduce(_pipe);
  };

  var DONE = "__DONE__"; //Symbol("DONE")

  var each = function each(obj, func) {
    if (obj == null || typeof func != "function") return;

    if (obj.length != undefined) {
      for (var i = 0, len = obj.length; i < len; i++) {
        if (func(obj[i], i, obj) === DONE) return;
      }
    } else {
      for (var key in obj) {
        if (func(obj[key], key, obj) === DONE) return;
      }
    }
  }; // reduction utils


  var concat = function concat() {
    return function (acc, value) {
      return acc.push(value), acc;
    };
  };

  var nop = function nop() {
    return function (acc, value) {
      return value;
    };
  }; // reducers


  var map = function map(fn) {
    return function (reducing) {
      return function (result, input, done) {
        return reducing(result, fn(input, done), done);
      };
    };
  };

  var filter = function filter(fn) {
    return function (reducing) {
      return function (result, input, done) {
        return fn(input, done) ? reducing(result, input, done) : result;
      };
    };
  };

  var tap = function tap(fn) {
    return function (reducing) {
      return function (result, input, done) {
        return fn(input, done), reducing(result, input, done);
      };
    };
  };

  var until = function until(fn) {
    return function (reducing) {
      return function (result, input, done) {
        return fn(input, done) ? reducing(result, input, done) : (done(), result);
      };
    };
  };

  var take = function take(num) {
    var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : num;
    return function (reducing) {
      return function (result, input, done) {
        return --i > 0 ? reducing(result, input, done) : (i = num, done(), reducing(result, input, done));
      };
    };
  }; // transduce


  var transduce = function transduce(xform, reducing, acc, input) {
    var reducer = xform(reducing);

    var done = function done() {
      return _done = true;
    };

    var _done = false;
    each(input, function (item) {
      if (_done) return DONE;
      acc = reducer(acc, item, done);
    });
    return acc;
  };

  var into = function into(to, xform, from) {
    return transduce(xform, concat(), to, from);
  };

  var seq = function seq(xform, input) {
    return into([], xform, input);
  };

  var transform = function transform(input) {
    for (var _len2 = arguments.length, xfs = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      xfs[_key2 - 1] = arguments[_key2];
    }

    return seq(pipe.apply(void 0, xfs), input);
  };

  var find = function find(input) {
    var result = null;

    for (var _len3 = arguments.length, xfs = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      xfs[_key3 - 1] = arguments[_key3];
    }

    var reducer = pipe.apply(void 0, xfs)(nop());
    each(input, function (item) {
      result = reducer(null, item);
      if (result) return DONE;
    });
    return result;
  };

  var fp = {
    pipe: pipe,
    map: map,
    filter: filter,
    tap: tap,
    take: take,
    until: until,
    each: each,
    DONE: DONE,
    transform: transform,
    find: find
  };

  var QueryString = /*#__PURE__*/function () {
    function QueryString() {
      babelHelpers.classCallCheck(this, QueryString);
    }

    babelHelpers.createClass(QueryString, null, [{
      key: "construct",
      value: function construct() {
        var _this = this;

        var vars = this.decode(window.location.search);
        QueryString.typed = {};
        QueryString.amp = {};
        var amp = /^amp(_|-)/;
        fp.each(vars, function (value, key) {
          QueryString[key] = value;

          var parsed = _this.parse(value);

          QueryString.typed[key] = parsed;

          if (amp.test(key)) {
            QueryString.amp[Utils.toCamelCase(key.replace(amp, ""))] = parsed;
          }
        });
        return true;
      }
    }, {
      key: "encode",
      value: function encode(obj, prefix) {
        var _this2 = this;

        var str = [];
        fp.each(obj, function (v, p) {
          if (v == null) {
            return;
          }

          var k = prefix ? prefix + "[" + p + "]" : p;
          str.push(babelHelpers["typeof"](v) === "object" ? _this2.encode(v, k) : k + "=" + encodeURIComponent(v));
        });
        return str.join("&");
      }
    }, {
      key: "decode",
      value: function decode(uri) {
        var _this3 = this;

        var results;

        if (uri != null) {
          results = {};
          uri = uri.replace(/^[^?]*\?/, "");
          uri.replace(new RegExp("([^?=&]+)(\=([^&]+))", "g"), function ($0, $1, $2, $3) {
            var key = decodeURIComponent($1);
            var value = decodeURIComponent($3);

            if (/~/.test(value)) {
              value = _this3.decodeObject(value);
            }

            if (/\[/.test(key)) {
              var obj = key.match(/[^\[]+/)[0];
              key = key.match(/\[([A-Za-z]+)\]/)[1];

              if (results[obj] == null) {
                results[obj] = {};
              }

              results[obj][key] = value;
              return;
            }

            results[key] = value;
          });
        }

        return results;
      }
    }, {
      key: "decodeObject",
      value: function decodeObject(uri) {
        var _this4 = this;

        var results;

        if (uri != null) {
          results = {};
          uri.replace(/([^:~]+)(:([^~]*))?/g, function ($0, $1, $2, $3) {
            results[decodeURIComponent($1)] = _this4.parse(decodeURIComponent($3));
          });
        }

        return results;
      }
    }, {
      key: "parse",
      value: function parse(value) {
        if (babelHelpers["typeof"](value) === "object") {
          return value;
        }

        if (value === "undefined") {
          return true;
        }

        var temp = value.toLowerCase();

        if (temp === "true" || temp === "false") {
          return temp === "true";
        }

        if (temp === "null") {
          return null;
        }

        temp = parseFloat(value);

        if (!isNaN(temp)) {
          return temp;
        }

        try {
          temp = JSON.parse(value);
          return temp;
        } catch (error) {
          return value;
        }
      }
    }]);
    return QueryString;
  }();

  var URL = /*#__PURE__*/function () {
    /**
     *
     */
    function URL(obj) {
      babelHelpers.classCallCheck(this, URL);
      this._url = typeof obj === "string" ? obj : obj.url;
      this._method = obj.method || "GET";
      this._withCredentials = obj.withCredentials || false;
      this._headers = obj.headers || {};
      this._data = obj.data || obj.body || {};
      this._responseType = obj.responseType;
      this._query = obj.query;

      if (obj.query != null) {
        var sep = /\?/.test(this._url) ? "&" : "?";
        this._url += sep + QueryString.encode(obj.query);
      }
    }
    /**
     * The URL to send the request to.
     *
     * @type {String}
     */


    babelHelpers.createClass(URL, [{
      key: "url",
      get: function get() {
        return this._url;
      }
      /**
       * The HTTP method to use, such as "GET", "POST", "PUT", "DELETE", etc.
       * Ignored for non-HTTP(S) URLs.
       *
       * @type {String}
       */

    }, {
      key: "method",
      get: function get() {
        return this._method;
      }
      /**
       * A Boolean that indicates whether or not cross-site Access-Control
       * requests should be made using credentials such as cookies or authorization
       * headers.
       *
       * @type {Boolean}
       */

    }, {
      key: "withCredentials",
      get: function get() {
        return this._withCredentials;
      }
      /**
       * A key value map of http headers to include in the reques
       *
       * @type {Object}
       */

    }, {
      key: "headers",
      get: function get() {
        return this._headers;
      }
      /*
       *
       */

    }, {
      key: "query",
      get: function get() {
        return this._query;
      }
      /*
       *
       */

    }, {
      key: "responseType",
      get: function get() {
        return this._responseType;
      }
      /**
       * Data to send with a POST request
       *
       * @type {String|Object}
       */

    }, {
      key: "data",
      get: function get() {
        return this._data;
      }
    }, {
      key: "body",
      get: function get() {
        return this._data;
      }
      /**
       *
       */

    }], [{
      key: "create",
      value: function create(obj) {
        return new URL(obj);
      }
    }]);
    return URL;
  }();

  var KeySystem = /*#__PURE__*/function () {
    function KeySystem() {
      babelHelpers.classCallCheck(this, KeySystem);
    }

    babelHelpers.createClass(KeySystem, null, [{
      key: "WIDEVINE",
      get:
      /**
       *
       */
      function get() {
        return "com.widevine.alpha";
      }
      /**
       *
       */

    }, {
      key: "PLAYREADY",
      get: function get() {
        return "com.microsoft.playready";
      }
      /**
       *
       */

    }, {
      key: "FAIRPLAY",
      get: function get() {
        return "com.apple.fps.1_0";
      }
      /**
       *
       */

    }, {
      key: "CLEARKEY",
      get: function get() {
        return "org.w3.clearkey";
      }
      /**
       *
       */

    }, {
      key: "UNKNOWN",
      get: function get() {
        return "unknown";
      }
      /**
      *
      */

    }, {
      key: "key",
      get: function get() {
        return key;
      },
      set: function set(value) {
        key = value;
      }
    }, {
      key: "robustnessLevel",
      get: function get() {
        return robustnessLevel;
      },
      set: function set(value) {
        robustnessLevel = value;
      }
    }, {
      key: "init",
      value: function init(config) {
        if (this.isEMEBrowser() !== true) return Promise.resolve(KeySystem.UNKNOWN);
        if ('robustnessLevel' in config) robustnessLevel = config['robustnessLevel'];
        return this.detect();
      }
    }, {
      key: "isEMEBrowser",
      value: function isEMEBrowser() {
        return "MediaKeys" in window || "WebKitMediaKeys" in window || "MSMediaKeys" in window;
      }
    }, {
      key: "detect",
      value: function detect() {
        var _this = this;

        var widevine = this.requestMediaKeyAccess(KeySystem.WIDEVINE);
        var playready = this.requestMediaKeyAccess(KeySystem.PLAYREADY);
        var fairplay = new Promise(function (resolve) {
          if ("WebKitMediaKeys" in window && WebKitMediaKeys.isTypeSupported(KeySystem.FAIRPLAY, "video/mp4")) resolve(KeySystem.FAIRPLAY);else resolve(KeySystem.UNKNOWN);
        });
        var clearkey = this.requestMediaKeyAccess(KeySystem.CLEARKEY);
        return Promise.all([widevine, playready, fairplay, clearkey]).then(function (values) {
          _this.key = values.filter(function (val) {
            return val !== KeySystem.UNKNOWN;
          });
        });
      }
    }, {
      key: "requestMediaKeyAccess",
      value: function requestMediaKeyAccess(key) {
        return new Promise(function (resolve, reject) {
          var config = [{
            initDataTypes: ['cenc'],
            videoCapabilities: [{
              contentType: 'video/mp4;codecs="avc1.42E01E"',
              robustness: robustnessLevel
            }, {
              contentType: 'video/webm; codecs="vp9"',
              robustness: robustnessLevel
            }]
          }];

          var complete = function complete(key) {
            return resolve(key);
          };

          var error = function error() {
            complete(KeySystem.UNKNOWN);
          };

          try {
            navigator.requestMediaKeySystemAccess(key, config).then(function () {
              return complete(key);
            })["catch"](error);
          } catch (error) {
            complete(KeySystem.UNKNOWN);
          }
        });
      }
    }]);
    return KeySystem;
  }();
  var key = [KeySystem.UNKNOWN];
  var robustnessLevel = '';

  var _navigator = navigator,
      ua = _navigator.userAgent,
      appName = _navigator.appName,
      platform = _navigator.platform,
      appVersion = _navigator.appVersion;
  var _semver = /((0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?)(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?/;

  var Utils = /*#__PURE__*/function () {
    function Utils() {
      babelHelpers.classCallCheck(this, Utils);
    }

    babelHelpers.createClass(Utils, null, [{
      key: "mimeTypes",
      get: function get() {
        return {
          mp4: "video/mp4",
          m3u8: "application/x-mpegURL",
          mp3: "audio/mpeg",
          json: "application/json",
          txt: "text/plain",
          xml: "application/xml",
          ogv: "video/ogg",
          webm: "video/webm",
          mpd: "application/dash+xml",
          ism: "application/vnd.ms-sstr+xml",
          js: "text/javascript",
          css: "text/css",
          vtt: "text/vtt",
          ttml: "application/ttml+xml",
          srt: "application/x-subrip",
          cea608: "text/cea-608",
          cea708: "text/cea-708"
        };
      }
    }, {
      key: "semver",
      value: function semver() {
        var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var match = str.match(_semver) || [];
        return {
          major: parseInt(match[2]),
          minor: parseInt(match[3]),
          patch: parseInt(match[4]),
          pre: match[5],
          build: match[6],
          version: match[1],
          raw: match[0],
          toString: function toString() {
            return this.raw;
          }
        };
      } // https://github.com/mathiasbynens/small

    }, {
      key: "blankVideo",
      value: function blankVideo() {
        return "data:video/mp4;base64,AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAAhmcmVlAAAC721kYXQhEAUgpBv/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3pwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcCEQBSCkG//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADengAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAsJtb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAALwABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAB7HRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAIAAAAAAAAALwAAAAAAAAAAAAAAAQEAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAC8AAAAAAAEAAAAAAWRtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAAKxEAAAIAFXEAAAAAAAtaGRscgAAAAAAAAAAc291bgAAAAAAAAAAAAAAAFNvdW5kSGFuZGxlcgAAAAEPbWluZgAAABBzbWhkAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAADTc3RibAAAAGdzdHNkAAAAAAAAAAEAAABXbXA0YQAAAAAAAAABAAAAAAAAAAAAAgAQAAAAAKxEAAAAAAAzZXNkcwAAAAADgICAIgACAASAgIAUQBUAAAAAAfQAAAHz+QWAgIACEhAGgICAAQIAAAAYc3R0cwAAAAAAAAABAAAAAgAABAAAAAAcc3RzYwAAAAAAAAABAAAAAQAAAAIAAAABAAAAHHN0c3oAAAAAAAAAAAAAAAIAAAFzAAABdAAAABRzdGNvAAAAAAAAAAEAAAAsAAAAYnVkdGEAAABabWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAtaWxzdAAAACWpdG9vAAAAHWRhdGEAAAABAAAAAExhdmY1Ni40MC4xMDE=";
      }
    }, {
      key: "getIEVersion",
      value: function getIEVersion() {
        var re,
            rv = -1;

        if (appName === "Microsoft Internet Explorer") {
          re = /MSIE ([0-9]{1,}[\.0-9]{0,})/;
        } else if (appName === "Netscape") {
          re = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/;
        } else if (/Edge\/[0-9\.]+$/.test(ua)) {
          re = /Edge\/([0-9\.]+)/;
        }

        if ((re != null ? re.exec(ua) : void 0) != null) {
          rv = parseFloat(RegExp.$1);
        }

        return rv;
      }
    }, {
      key: "getEdgeVersion",
      value: function getEdgeVersion() {
        var rv = -1;

        if (/Edge\/([\d]+)/.exec(ua)) {
          rv = parseFloat(RegExp.$1);
        }

        return rv;
      }
    }, {
      key: "getFFVersion",
      value: function getFFVersion() {
        var rv = -1;

        if (/Firefox\/([0-9\.]+)$/.exec(ua)) {
          rv = parseFloat(RegExp.$1);
        }

        return rv;
      }
    }, {
      key: "getSafariVersion",
      value: function getSafariVersion() {
        var rv = -1;

        if (/Safari\/[0-9\.]+$/.test(ua) && /Version\/([0-9]+\.[0-9]+)/.exec(ua) != null) {
          rv = parseFloat(RegExp.$1);
        }

        return rv;
      }
    }, {
      key: "isChrome",
      value: function isChrome() {
        return /Chrom(e|ium)/.test(ua);
      }
    }, {
      key: "getChromeVersion",
      value: function getChromeVersion() {
        var rv = -1;

        if (/Chrome( Mobile)?\/([0-9\.]+)/.test(ua)) {
          rv = parseFloat(ua.match(/Chrome( Mobile)?\/([0-9\.]+)/)[2].split(".").slice(0, 2).join("."));
        }

        return rv;
      }
    }, {
      key: "selectSource",
      value: function selectSource(media, canPlay) {
        // find the first playable item
        return fp.find(media.source, fp.map(function (source) {
          return Object.assign({
            type: Utils.getMimeType(media.src || source.src)
          }, media, source);
        }), fp.filter(function (item) {
          return canPlay(item);
        }));
      }
    }, {
      key: "getSourceByType",
      value: function getSourceByType(media, type) {
        var sources = media.source != null ? media.source.slice() : [];
        if (media.type == null) media.type = Utils.getMimeType(media.src);
        sources.push(media);
        return sources.find(function (source) {
          return source.type === type;
        });
      }
    }, {
      key: "getMimeType",
      value: function getMimeType(file) {
        return Utils.mimeTypes[Utils.getFileExtension(file)];
      }
    }, {
      key: "selectTrack",
      value: function selectTrack(tracks, kind) {
        return tracks.find(function (track) {
          return track.kind === kind;
        });
      }
    }, {
      key: "isIPhone",
      value: function isIPhone() {
        return /iPhone/.test(platform) || /iPhone/.test(ua);
      }
    }, {
      key: "isIPad",
      value: function isIPad() {
        return /iPad/.test(platform) || /iPad/.test(ua);
      }
    }, {
      key: "isAndroid",
      value: function isAndroid() {
        return /Android [4-9]/.test(ua);
      }
    }, {
      key: "isKindleFireHD",
      value: function isKindleFireHD() {
        return /Silk\/2/.test(ua);
      }
    }, {
      key: "isKindleFire",
      value: function isKindleFire() {
        return /Silk\/1/.test(ua);
      }
    }, {
      key: "isBlackBerry",
      value: function isBlackBerry() {
        return /BlackBerry;|PlayBook|BB10/.test(ua);
      }
    }, {
      key: "isFirefoxOS",
      value: function isFirefoxOS() {
        return /\(Mobile;.*Firefox\//.test(ua);
      }
    }, {
      key: "isHTML5",
      value: function isHTML5() {
        return Utils.isIOS() || Utils.isAndroid() || Utils.isKindleFireHD() || Utils.isBlackBerry() || Utils.isFirefoxOS();
      }
    }, {
      key: "isIOS",
      value: function isIOS() {
        var iOSRegEx = /iP(hone|od|ad)/i;
        return iOSRegEx.test(platform) || iOSRegEx.test(ua);
      }
    }, {
      key: "getIOSversion",
      value: function getIOSversion() {
        if (Utils.isIOS()) {
          var ver = appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);

          if (ver == null) {
            ver = appVersion.match(/Version\/(\d+)\.(\d+)/);
          }

          if (ver != null) {
            return [parseInt(ver[1], 10), parseInt(ver[2], 10), parseInt(ver[3] || 0, 10)];
          }
        }
      }
    }, {
      key: "isFullscreenDevice",
      value: function isFullscreenDevice() {
        return Utils.isKindleFireHD() || Utils.isIPhone();
      }
    }, {
      key: "getDevice",
      value: function getDevice() {
        var device = "desktop";

        if (Utils.isIPhone()) {
          device = "iphone";
        } else if (Utils.isIPad()) {
          device = "ipad";
        } else if (/Android/.test(ua)) {
          device = "android";
        } else if (Utils.isKindleFireHD()) {
          device = "kindlefirehd";
        } else if (Utils.isKindleFire()) {
          device = "kindlefire";
        }

        return device;
      } // Changes XML to JSON

    }, {
      key: "xmlToJson",
      value: function xmlToJson(xml) {
        // Create the return object
        var obj = {}; // document

        if (xml.nodeType === 9) {
          xml = xml.firstChild;
        } // element


        if (xml.nodeType === 1) {
          // do attributes
          if (xml.attributes.length > 0) {
            obj["@attributes"] = {};
            fp.each(xml.attributes, function (attribute) {
              obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            });
          } // text or cdata

        } else if (xml.nodeType === 3 || xml.nodeType === 4) {
          obj = xml.nodeValue;
        } // do children


        if (xml.hasChildNodes()) {
          fp.each(xml.childNodes, function (child) {
            // check for blank text nodes
            if (child.nodeType === 3 && !/\S/.test(child.nodeValue)) {
              return;
            } // convert namespaces


            var nodeName = child.nodeName.replace(/:/, "-"); // // convert the element

            var element = Utils.xmlToJson(child); // hoist text only nodes

            if (element["@attributes"] == null && element["#text"] != null) {
              element = element["#text"];
            }

            if (obj[nodeName] == null) {
              obj[nodeName] = element;
            } else {
              if (!(obj[nodeName] instanceof Array)) {
                obj[nodeName] = [obj[nodeName]];
              }

              obj[nodeName].push(element);
            }
          });
        }

        return obj;
      }
      /**
       * Returns a platform specific XHR object.
       *
       * @static
       */

    }, {
      key: "getXHR",
      value: function getXHR() {
        return new XMLHttpRequest();
      }
      /**
       * Retrieves a remote text file
       *
       * @static
       */

    }, {
      key: "getUTC",
      value: function getUTC() {
        return Utils.request("//time.akamai.com").then(function (xhr) {
          return parseFloat(xhr.responseText) * 1000;
        });
      }
      /**
       * Request an http resource
       *
       * @static
       */

    }, {
      key: "request",
      value: function request() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return new Promise(function (resolve, reject) {
          options = URL.create(options);
          var xhr = Utils.getXHR();
          xhr.open(options.method, options.url);

          xhr.onload = function () {
            if (options.checkStatus !== false) {
              if (xhr.status > 399) {
                reject(xhr);
              }
            }

            resolve(xhr);
          };

          xhr.onerror = function (event) {
            return reject(xhr);
          };

          xhr.withCredentials = options.withCredentials;

          if (options.responseType != null) {
            try {
              xhr.responseType = options.responseType;
            } catch (error) {}
          }

          if (options.headers != null) {
            var headers = options.headers;
            fp.each(headers, function (value, key) {
              if (key != null && value != null) {
                xhr.setRequestHeader(key, value);
              }
            });
          }

          return xhr.send(options.data);
        });
      }
      /**
       * Request an http resource
       *
       * @static
       */

    }, {
      key: "requestText",
      value: function requestText() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return Utils.request(options).then(function (xhr) {
          return xhr.responseText;
        });
      }
      /**
       * Request an http resource
       *
       * @static
       */

    }, {
      key: "requestJson",
      value: function requestJson() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return Utils.requestText(options).then(function (text) {
          return JSON.parse(text);
        });
      }
      /**
       * Attaches a CSS file to the head of the document.
       *
       * @static
       */

    }, {
      key: "jsonp",
      value: function jsonp(url, responseField) {
        return new Promise(function (resolve, reject) {
          window[responseField] = resolve;
          return Utils.loadScript(url).then(function (script) {
            script.parentNode.removeChild(script);
            window[responseField] = null;

            try {
              delete window[responseField];
            } catch (error) {}
          })["catch"](reject);
        });
      }
      /**
       * Attaches a JavaScript file to the head of the document.
       *
       * @static
       */

    }, {
      key: "loadScript",
      value: function loadScript(src, parent) {
        return new Promise(function (resolve, reject) {
          var head = parent || document.getElementsByTagName("head")[0];
          var script = document.createElement("script");
          script.type = "text/javascript";

          if (script.addEventListener) {
            script.onload = function () {
              resolve(script);
            };

            script.onerror = function (event) {
              reject(event);
            };
          } else if (script.readyState) {
            script.onreadystatechange = function (event) {
              if (this.readyState === "loaded" || this.readyState === "complete") {
                this.onreadystatechange = null;
                resolve(script);
              }
            };
          }

          script.src = src;
          head.appendChild(script);
        });
      }
      /**
       * Attaches a CSS file to the head of the document.
       *
       * @static
       */

    }, {
      key: "loadStyleSheet",
      value: function loadStyleSheet(href) {
        var head = document.getElementsByTagName("head")[0];
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = href;
        return head.appendChild(link);
      }
      /**
       * Load an image.
       *
       * @static
       */

    }, {
      key: "loadImage",
      value: function loadImage(src) {
        return new Promise(function (resolve, reject) {
          try {
            var img = document.createElement("img");

            img.onload = function (event) {
              return resolve(img);
            };

            img.onerror = function (event) {
              return reject(event);
            };

            return img.src = src;
          } catch (error) {
            return reject(error);
          }
        });
      }
    }, {
      key: "getFileExtension",
      value: function getFileExtension() {
        var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        return url.replace(/\?.*/, "").replace(/\#.*/, "").split(".").pop();
      }
      /**
       * Determines if the device supports touch events
       *
       * @static
       */

    }, {
      key: "isTouchDevice",
      value: function isTouchDevice() {
        if (Utils.isTouch == null) {
          try {
            document.createEvent("TouchEvent");
            Utils.isTouch = true;
          } catch (error) {
            Utils.isTouch = false;
          }
        }

        return Utils.isTouch;
      }
      /**
       * Forces a number between a min and a max
       *
       * @static
       */

    }, {
      key: "clamp",
      value: function clamp(value, min, max) {
        if (value < min) {
          value = min;
        }

        if (value > max) {
          value = max;
        }

        return value;
      }
      /**
       * Override the properties of a base object with the values
       * of an override object.
       *
       * @param {Object} base     The base object.
       * @param {Object} overrides  key/value overrides
       * @return {Object}
       * @static
       */

    }, {
      key: "override",
      value: function override(base, overrides) {
        var clone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        if (base == null) return overrides;
        if (overrides == null) return base;

        if (clone === true) {
          base = Utils.clone(base);
          overrides = Utils.clone(overrides);
        }

        Object.getOwnPropertyNames(overrides).forEach(function (key) {
          var value = overrides[key];
          var baseValue = base[key];
          var type = babelHelpers["typeof"](value);
          if (type === "undefined") return;

          if (baseValue == null || babelHelpers["typeof"](baseValue) !== "object" || value instanceof Array) {
            base[key] = value;
          } else if (type === "object") {
            base[key] = Utils.override(baseValue, value, false);
          }
        });
        return base;
      }
      /**
       * Merge the properties of a list of object. Similar to
       * Object.assign, but undefined values will not override
       * defined values.
       *
       * @param {Array.<Object>} objs The list of objects
       * @return {Object}
       * @static
       */

    }, {
      key: "merge",
      value: function merge() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var objs = args[0] instanceof Array ? args[0] : args;
        return objs.reduce(function (acc, obj) {
          return obj != null ? Utils.override(acc, obj, false) : acc;
        }, {});
      }
      /**
       * Mixin the properties of a list of objects. Similar to
       * Object.assign, but takes into account class methods.
       *
       * @param {Object} base The base object
       * @param {Array.<Object>} objs The list of objects
       * @return {Object}
       * @static
       */

    }, {
      key: "mixin",
      value: function mixin(base) {
        for (var _len2 = arguments.length, objs = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          objs[_key2 - 1] = arguments[_key2];
        }

        if (base == null || objs.length < 1) return base;
        var names = Object.getOwnPropertyNames;
        var proto = Object.getPrototypeOf;
        objs.forEach(function (obj) {
          var props = names(obj).concat(names(proto(obj)));
          props.forEach(function (prop) {
            return base[prop] = obj[prop];
          });
        });
        return base;
      }
      /**
       * Diffs two objects.
       *
       * @param {Object} oldObj The old object.
       * @param {Object} newObj The new object.
       * @return {Object?}
       * @static
       */

    }, {
      key: "diff",
      value: function diff(oldObj, newObj) {
        if (newObj == null) {
          return null;
        }

        if (oldObj == null && newObj != null) {
          return newObj;
        }

        var changes = {};

        for (var key in newObj) {
          var value = newObj[key];
          var old = oldObj[key];

          if (old !== value) {
            if (old == null) {
              changes[key] = value;
            } else {
              switch (babelHelpers["typeof"](value)) {
                case "string":
                case "number":
                case "boolean":
                case "function":
                  // Functions can only be strictly diffed so they go here
                  changes[key] = value;
                  break;

                case "object":
                  if (value instanceof Array) {
                    if (old.length !== value.length) {
                      changes[key] = value;
                    }
                  } else {
                    var diff = Utils.diff(old, value);

                    if (diff != null) {
                      changes[key] = diff;
                    }
                  }

              }
            }
          }
        }

        if (Object.keys(changes).length === 0) {
          return null;
        }

        return changes;
      }
      /**
       * Clones an object.
       *
       * @param {Object} obj The object to be cloned.
       * @return {Object}
       * @static
       */

    }, {
      key: "clone",
      value: function clone(obj) {
        var deepCopy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        if (obj == null) {
          return obj;
        }

        var clone = obj;

        if (babelHelpers["typeof"](obj) === "object") {
          clone = obj instanceof Array ? [] : {};

          var _loop = function _loop(key) {
            var value = obj[key];

            if (babelHelpers["typeof"](value) === "object" && value !== null && deepCopy === true) {
              if (value instanceof Array) {
                clone[key] = [];
                value.forEach(function (item) {
                  return clone[key].push(Utils.clone(item));
                });
              } else {
                clone[key] = {};

                for (var k in value) {
                  clone[key][k] = Utils.clone(value[k]);
                }
              }
            } else {
              clone[key] = value;
            }
          };

          for (var key in obj) {
            _loop(key);
          }
        }

        return clone;
      }
      /**
       * Safely gets a value from an obj's sub path
       */

    }, {
      key: "get",
      value: function get(obj, paths) {
        if (obj == null || paths == null || paths.length < 1) return;
        if (typeof paths == "string") paths = paths.split(".");

        for (var i = 0, len = paths.length; i < len; ++i) {
          var path = paths[i];

          if (obj[path] != null) {
            obj = obj[path];
          } else {
            return;
          }
        }

        return obj;
      }
      /**
       * Applies a value to an obj creating sub objects where needed.
       */

    }, {
      key: "set",
      value: function set(obj, paths, value) {
        if (obj == null || paths == null || paths.length < 1) {
          return;
        }

        var last = paths.length - 1;
        paths.forEach(function (path, i) {
          if (i === last) {
            return obj[path] = value;
          }

          if (obj[path] == null) {
            obj[path] = {};
          }

          obj = obj[path];
        });
      }
      /**
       * Takes a time in seconds and converts it to timecode.
       *
       * @param   {Number}  time  The time in seconds to be formatted.
       * @return  {String}  A SMTP formatted string.
       */

    }, {
      key: "formatTimecode",
      value: function formatTimecode(time, duration) {
        time = parseInt(time);

        if (isNaN(time)) {
          return "00:00";
        }

        var strTime = Utils.formatZeroFill(time % 60);
        time = parseInt(time / 60);
        strTime = Utils.formatZeroFill(time % 60) + ":" + strTime;
        time = parseInt(time / 60);

        if (time > 0) {
          strTime = Utils.formatZeroFill(time) + ":" + strTime;
        }

        if (duration >= 3600 && strTime.length === 5) {
          strTime = "00:" + strTime;
        }

        return strTime;
      }
      /**
       * Converts a time in seconds to a string and adds a zero in front of any number lower than 10.
       *
       * @param Number time The number to be zero filled.
       */

    }, {
      key: "formatZeroFill",
      value: function formatZeroFill(time) {
        var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
        return time.toString().padStart(length, "0");
      }
      /** */

    }, {
      key: "toDate",
      value: function toDate(value) {
        if (!(value instanceof Date)) {
          return new Date(value);
        } else {
          return value;
        }
      }
      /**
       * Converts a date into a time strimg based on a ISO 8601 formatted time string.
       *
       * @param   {number|Date}  date
       *    The date
       *
       * @param   {string}  [format="h:mm:ss A"]
       *    The ISO 8601 format string
       *
       * @param   {string}  [timezone=""]
       *    The timezone string
       *
       * @return  {string}
       *    The formattted time string
       */

    }, {
      key: "formatTime",
      value: function formatTime(date) {
        var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "h:mm:ss A";
        var tz = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
          timezone: "",
          offset: -(new Date().getTimezoneOffset() / 60)
        };
        date = Utils.toDate(date);

        if (tz.offset != null && tz.offset !== 0) {
          date = new Date(date.getTime() + Math.round(tz.offset * 60 * 60 * 1000));
        }

        if (isNaN(date.getTime())) {
          return;
        }

        var hours = date.getUTCHours();
        var minutes = date.getUTCMinutes();
        var seconds = date.getUTCSeconds();
        var milliseconds = date.getUTCMilliseconds();
        var twelve = hours % 12 || 12;
        var a = hours < 12 ? "am" : "pm";
        var replace = {
          hh: Utils.formatZeroFill(twelve),
          h: twelve,
          HH: Utils.formatZeroFill(hours),
          H: hours,
          mm: Utils.formatZeroFill(minutes),
          m: minutes,
          sss: Utils.formatZeroFill(milliseconds, 3),
          ss: Utils.formatZeroFill(seconds),
          s: seconds,
          a: a,
          A: a.toUpperCase(),
          z: tz.timezone
        };

        for (var key in replace) {
          format = format.replace(key, replace[key]);
        }

        return format;
      }
      /**
       * Converts timecode to seconds.
       *
       * @param   {string}  timeCode        A SMTP formatted string.
       * @param   {number}  [framerate=30]  The frame rate. Used to calculate milliseconds.
       * @return  {number}                  The number of seconds represented by the time code
       */

    }, {
      key: "flattenTimecode",
      value: function flattenTimecode(timeCode) {
        var framerate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;

        if (!timeCode) {
          return NaN;
        }

        var pieces = timeCode.split(":");
        var ms = 0;

        if (pieces.length === 4) {
          ms = parseInt(pieces.pop()) / framerate;
        } else if (pieces.length === 3) {
          // sometimes ms separator is a comma
          pieces[2] = pieces[2].replace(",", ".");

          if (pieces[2].indexOf(".") !== -1) {
            var parts = pieces[2].split(".");

            if ((parts != null ? parts.length : void 0) > 1) {
              pieces[2] = parts[0];
              ms = parseInt(parts[1]) / 1000;
            }
          }
        }

        var time = parseInt(pieces.pop());

        while (pieces.length > 0) {
          time += Math.pow(60, pieces.length) * parseInt(pieces.shift());
        }

        return time + ms;
      }
      /**
       * Adds a cache busting query string parameter to a url.
       *
       * @param String url The url.
       * @param String key The name of the query string variable
       * @param Object value The value of the query string variable
       */

    }, {
      key: "cacheBust",
      value: function cacheBust(url) {
        var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "cacheBust";
        var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Date.now();
        var op = url.indexOf("?") === -1 ? "?" : "&";
        return url + op + key + "=" + value;
      }
      /** */

    }, {
      key: "getFeed",
      value: function getFeed(url) {
        return Utils.request(url).then(function (xhr) {
          if (xhr.responseType === "document" || /^</.test(xhr.responseText)) {
            return Utils.xmlToJson(xhr.responseXML);
          } else {
            return JSON.parse(xhr.responseText);
          }
        });
      }
      /** */

    }, {
      key: "trackMouse",
      value: function trackMouse() {
        try {
          document.addEventListener("mousemove", Utils.mouseTracker);
          document.documentElement.addEventListener("mouseleave", function (event) {
            if (event.relatedTarget === null) {
              return Utils.doc = false;
            }
          });
          document.documentElement.addEventListener("mouseenter", function (event) {
            if (event.relatedTarget === null) {
              return Utils.doc = true;
            }
          });
        } catch (error) {}
      }
      /** */

    }, {
      key: "mouseTracker",
      value: function mouseTracker(event) {
        Utils.clientX = event.clientX;
        Utils.clientY = event.clientY;
        Utils.pageX = event.pageX;
        Utils.pageY = event.pageY;
      }
      /** */

    }, {
      key: "isMouseOverElement",
      value: function isMouseOverElement(element) {
        var isOver = false;

        if (element == null) {
          return isOver;
        }

        try {
          isOver = element.contains(document.elementFromPoint(Utils.clientX, Utils.clientY));
        } catch (error) {
          isOver = false;
        }

        return isOver;
      }
      /** */

    }, {
      key: "isMouseOverDocument",
      value: function isMouseOverDocument() {
        return Utils.doc;
      }
      /** Function to get Outer Dimensions*/

    }, {
      key: "getActualSize",
      value: function getActualSize(element) {
        var margin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var width = element.offsetWidth;
        var height = element.offsetHeight;

        if (margin === true) {
          var style = getComputedStyle(element);
          width += parseInt(style.marginLeft) + parseInt(style.marginRight);
          height += parseInt(style.marginTop) + parseInt(style.marginBottom);
        }

        return {
          width: width,
          height: height
        };
      }
    }, {
      key: "isVolumeSettable",
      value: function isVolumeSettable() {
        var noVolume = /ipad|iphone|ipod|android|blackberry|windows ce|windows phone|webos|playbook/.exec(ua.toLowerCase());

        if (noVolume != null) {
          // Firefox on android DOES support changing the volume
          return noVolume[0] === "android" && /Firefox/.test(ua);
        }

        return true;
      }
      /**
       * Creates a unique id.
       *
       * @param   {number=}   len
       *    The number of characters in the uid
       *
       * @param   {number=}   base
       *    The base to use for representing a numeric value.
       *
       * @return  {string}
       *    The unique id.
       */

    }, {
      key: "createUID",
      value: function createUID() {
        var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16;
        var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 32;

        var randomRangeInt = function randomRangeInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        var uid = "",
            l = len - 1;

        for (var i = 0; i < l; i++) {
          uid += randomRangeInt(0, base - 1).toString(base).toUpperCase();
        }

        if (Utils.uids[uid] === true) {
          return Utils.createUID(len, base);
        }

        Utils.uids[uid] = true;
        return uid;
      }
      /**
       * Chains an array of promises sequentially
       *
       * @param   {Array}   promises
       *    The list of promises
       *
       * @param   {Object}   data
       *    Data to be passes from promise to promise
       *
       * @return  {Promise}
       *    The promise chain
       */

    }, {
      key: "chain",
      value: function chain(promises, data) {
        var chain = Promise.resolve(data);
        promises.forEach(function (promise) {
          return chain = chain.then(promise);
        });
        return chain;
      }
      /**
       * Traverse an array of promises until one resolves without error
       *
       * @param   {Array}   promises
       *    The list of promises
       *
       * @param   {Object}   data
       *    Data to be passes from promise to promise
       *
       * @return  {Promise}
       *    The promise chain
       */

    }, {
      key: "first",
      value: function first(promises, data) {
        return Promise.resolve(data).then(promises.shift()).then(function (result) {
          return result;
        })["catch"](function (error) {
          if (promises.length > 0) {
            return Utils.first(promises, data);
          } else {
            return null;
          }
        });
      }
      /**
       * Asynchronously transform an object using an array of functions
       *
       * @param   {Object}   value
       *    Data to be passes from promise to promise
       *
       * @param   {Array.<Function|Transform>}   transforms
       *    The list of transforms
       *
       * @return  {Promise.<Object>}
       *    The transformed object
       */

    }, {
      key: "transform",
      value: function transform(value, transforms) {
        // if no transforms were provided, return the value as is
        if (transforms == null || transforms.length === 0) {
          return Promise.resolve(value);
        } // Some transforms are encapsulated objects, so first make a flat list of only transform functions


        transforms = transforms.map(function (t) {
          return typeof t.transform === "function" ? t.transform : t;
        }); // establish enclosure variables to keep track of where we are in the transform chain

        var index = 0;
        var len = transforms.length - 1; // the next function is passed to every transform, allowing each transform to be applied on both the upstream and downstream

        var next = function next(value) {
          index++;
          return exec(value);
        }; // execute an individual transform function


        var exec = function exec(value) {
          var transform = transforms[index];

          if (typeof transform !== "function") {
            throw new Error("Transform must be a valid function");
          } // wrap each transform in a Promise, allowing for either sync and async functions to be used


          return Promise.resolve(transform(value, next)).then(function (result) {
            return index < len ? next(result) : result;
          });
        }; // execute the first transform to start off the chain


        return exec(value);
      }
      /**
       * Converts an array buffer to UTF-8 string.
       *
       * @param   {ArrayBuffer}   arrayBuffer
       *    The ArrayBuffer
       *
       * @return  {String}
       *    The UTF-8 string
       */

    }, {
      key: "arrayBufferToString",
      value: function arrayBufferToString(arrayBuffer) {
        return String.fromCharCode.apply(null, new Uint8Array(arrayBuffer));
      }
      /**
       * Parses a JSON Web Token
       *
       * @param {String} jwt
       *
       * @return {Object}
       *    The parsed JSON Web Token as an object
       */

    }, {
      key: "parseJWT",
      value: function parseJWT(jwt) {
        var parts = jwt.split(".");
        return {
          header: JSON.parse(atob(parts[0])),
          payload: JSON.parse(atob(parts[1])),
          signature: parts[2]
        };
      }
      /**
       *
       */

    }, {
      key: "getFullScreenApi",
      value: function getFullScreenApi(container, video) {
        var fullscreen = {};

        if (container.webkitRequestFullScreen != null) {
          fullscreen.enter = container.webkitRequestFullScreen.bind(container);
          fullscreen.exit = document.webkitExitFullscreen != null ? document.webkitExitFullscreen.bind(document) : document.webkitCancelFullScreen.bind(document);
          fullscreen.event = "onwebkitfullscreenchange";
          fullscreen.element = "webkitFullscreenElement";
          fullscreen.error = "webkitfullscreenerror";
        } else if (container.requestFullscreen != null) {
          fullscreen.enter = container.requestFullscreen.bind(container);
          fullscreen.exit = document.exitFullscreen != null ? document.exitFullscreen.bind(document) : document.cancelFullscreen.bind(document);
          fullscreen.event = "onfullscreenchange";
          fullscreen.element = "fullscreenElement";
          fullscreen.error = "fullscreenerror";
        } else if (container.mozRequestFullScreen != null) {
          fullscreen.enter = container.mozRequestFullScreen.bind(container);
          fullscreen.exit = document.mozCancelFullScreen.bind(document);
          fullscreen.event = "onmozfullscreenchange";
          fullscreen.element = "mozFullscreenElement";
          fullscreen.error = "mozfullscreenerror";
        } else if (container.msRequestFullscreen != null) {
          fullscreen.enter = container.msRequestFullscreen.bind(container);
          fullscreen.exit = document.msExitFullscreen.bind(document);
          fullscreen.event = "onmsfullscreenchange";
          fullscreen.element = "msFullscreenElement";
          fullscreen.error = "MSFullscreenError";
        } else if (video.webkitEnterFullscreen != null) {
          fullscreen.enter = video.webkitEnterFullscreen.bind(video);
          fullscreen.exit = video.webkitExitFullscreen.bind(video);
          fullscreen.event = null;
          fullscreen.error = null;
        }

        return fullscreen;
      }
      /** 
       * Picture in Picture API variants
       */

    }, {
      key: "getPictureInPictureApi",
      value: function getPictureInPictureApi(video) {
        var pip = {};

        if (video.requestPictureInPicture != null) {
          pip.enter = video.requestPictureInPicture.bind(video);
          pip.exit = document.exitPictureInPicture.bind(document);
          pip.event = "onleavepictureinpicture";
          pip.eventName = "leavepictureinpicture";
          pip.element = "pictureInPictureElement";
        } else if (video.webkitSetPresentationMode != null) {
          pip.enter = video.webkitSetPresentationMode.bind(video, "picture-in-picture");
          pip.exit = video.webkitSetPresentationMode.bind(video, "inline");
          pip.event = "onwebkitpresentationmodechanged";
          pip.eventName = "webkitpresentationmodechanged";
          pip.element = "pictureInPictureElement";
        }

        return pip;
      }
      /** Helper to determine whether the browser allows PiP or not */

    }, {
      key: "isPictureInPictureSupported",
      value: function isPictureInPictureSupported(video) {
        return video.disablePictureInPicture != true && document.pictureInPictureEnabled != false && (typeof video.webkitSupportsPresentationMode == "function" || typeof video.requestPictureInPicture == "function");
      }
      /** */

    }, {
      key: "stringToArray",
      value: function stringToArray(string) {
        var buffer = new ArrayBuffer(string.length * 2); // 2 bytes for each char

        var array = new Uint16Array(buffer);

        for (var i = 0, l = string.length; i < l; i++) {
          array[i] = string.charCodeAt(i);
        }

        return array;
      }
      /** */

    }, {
      key: "arrayToString",
      value: function arrayToString(array) {
        return String.fromCharCode.apply(null, new Uint16Array(array.buffer));
      }
      /** */

    }, {
      key: "base64DecodeUint8Array",
      value: function base64DecodeUint8Array(input) {
        var raw = window.atob(input);
        var rawLength = raw.length;
        var array = new Uint8Array(new ArrayBuffer(rawLength));

        for (var i = 0, j = 0, l = rawLength - 1; 0 <= l ? j <= l : j >= l; i = 0 <= l ? ++j : --j) {
          array[i] = raw.charCodeAt(i);
        }

        return array;
      }
      /** */

    }, {
      key: "base64EncodeUint8Array",
      value: function base64EncodeUint8Array(input) {
        var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var len = input.length;
        var output = "";
        var i = 0;

        while (i < len) {
          var chr1 = input[i++];
          var chr2 = i < len ? input[i++] : Number.NaN; // Not sure if the index

          var chr3 = i < len ? input[i++] : Number.NaN; // checks are needed here

          var enc1 = chr1 >> 2;
          var enc2 = (chr1 & 3) << 4 | chr2 >> 4;
          var enc3 = (chr2 & 15) << 2 | chr3 >> 6;
          var enc4 = chr3 & 63;

          if (isNaN(chr2)) {
            enc3 = enc4 = 64;
          } else if (isNaN(chr3)) {
            enc4 = 64;
          }

          output += keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
        }
        return output;
      }
      /** */

    }, {
      key: "getKeySystem",
      value: function getKeySystem() {
        var key = KeySystem.key;
        if (key.length === 0 || key.indexOf(KeySystem.UNKNOWN) !== -1) return Utils.getKeySystemByUserAgent();
        return key;
      }
    }, {
      key: "getKeySystemByUserAgent",
      value: function getKeySystemByUserAgent() {
        if (/Edge/.test(ua) || /Trident/.test(ua) || /Tizen/.test(ua)) {
          return [KeySystem.PLAYREADY, KeySystem.CLEARKEY];
        } else if (/Chrome/.test(ua) || /Firefox/.test(ua)) {
          return [KeySystem.WIDEVINE, KeySystem.CLEARKEY];
        } else if (/Safari/.test(ua)) {
          return [KeySystem.FAIRPLAY];
        } else {
          return [KeySystem.UNKNOWN];
        }
      }
      /** */

    }, {
      key: "isAutoplaySupported",
      value: function isAutoplaySupported() {
        var supported = true;

        if (Utils.isIOS()) {
          if (Utils.getSafariVersion() !== -1) {
            var ver = Utils.getIOSversion() || [];
            supported = ver[0] >= 10;
          } else if (Utils.isChrome()) {
            supported = Utils.getChromeVersion() >= 53;
          }
        }

        if (Utils.isChrome() && Utils.isAndroid()) {
          supported = Utils.getChromeVersion() >= 53;
        }

        return supported;
      }
      /** */

    }, {
      key: "fieldIsUnique",
      value: function fieldIsUnique(items, field, compare) {
        compare = compare.toString().toLowerCase();
        return !items.some(function () {
          var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var value = item.hasOwnProperty(field) ? item[field] : "";
          return value.toString().toLowerCase() === compare;
        });
      }
      /** */

    }, {
      key: "toCamelCase",
      value: function toCamelCase(str) {
        return str.replace(/-|_([a-z])/g, function (g) {
          return g[1].toUpperCase();
        });
      }
      /** */

    }, {
      key: "toHyphenated",
      value: function toHyphenated(str) {
        var sep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "-";
        return str.replace(/([A-Z])/g, function (g) {
          return sep + g[0].toLowerCase();
        });
      }
      /** */

    }, {
      key: "toSnakeCase",
      value: function toSnakeCase(str) {
        var upper = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        str = Utils.toHyphenated(str, "_");
        return upper === true ? str.toUpperCase() : str;
      }
      /**
       * Creates an HTML element.
       *
       * @param   {?(string|Array.<string>)}  classes
       * @param   {?DOMElement}  parent
       * @param   {?string} text
       * @param   {?string|DOMElement}  element
       * @return  {DOMElement}
       */

    }, {
      key: "createElement",
      value: function createElement(classes, parent, text) {
        var element = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "div";

        if (typeof element === "string") {
          element = document.createElement(element);
        }

        if (classes != null) {
          if (typeof classes === "string") {
            classes = [classes];
          }

          classes.forEach(function (item) {
            return element.classList.add(item);
          });
        }

        if (text != null) {
          element.textContent = text;
        }

        if (parent != null) {
          parent.appendChild(element);
        }

        return element;
      }
      /** */

    }, {
      key: "select",
      value: function select(el) {
        if (typeof el === "string") {
          var result = document.getElementById(el);

          if (result == null) {
            result = document.querySelector(el);
          }

          el = result;
        }

        return el;
      }
      /** */

    }, {
      key: "getViewability",
      value: function getViewability(el) {
        el = Utils.select(el);
        var rect = el.getBoundingClientRect();
        var width = window.innerWidth || document.documentElement.clientWidth;
        var height = window.innerHeight || document.documentElement.clientHeight;
        var top = rect.top >= 0;
        var left = rect.left >= 0;
        var bottom = rect.bottom <= height;
        var right = rect.right <= width;

        switch (true) {
          case top && left && bottom && right:
            return "full";

          case !top && rect.bottom <= 0 || !left && rect.right <= 0 || !right && rect.left >= width || !bottom && rect.top >= height:
            return "none";

          case top || left || bottom || right:
            return "partial";
        }
      }
      /** */

    }, {
      key: "isViewable",
      value: function isViewable(el) {
        return Utils.getViewability(el) === "full";
      }
      /** */

    }, {
      key: "timerGroup",
      value: function timerGroup(id) {
        var destroy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (Utils.timerGroups == null) {
          Utils.timerGroups = {};
        }

        if (destroy === true) {
          var group = Utils.timerGroups[id];

          if (group != null) {
            group.destroy();
          }

          delete Utils.timerGroups[id];
          return;
        }

        if (Utils.timerGroups[id] == null) {
          Utils.timerGroups[id] = TimerGroup.create(id);
        }

        return Utils.timerGroups[id];
      }
      /** */

    }, {
      key: "startsWith",
      value: function startsWith(value, search) {
        var pos = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        return value.substring(pos, pos + search.length) === search;
      }
      /** compares ISO 639-1 and ISO 639-2/T language codes*/

    }, {
      key: "compareLanguageTags",
      value: function compareLanguageTags(a, b) {
        return this.startsWith(a, b) || this.startsWith(b, a);
      }
    }]);
    return Utils;
  }();
  Utils.isTouch = null;
  Utils.clientX = 0;
  Utils.clientY = 0;
  Utils.pageX = 0;
  Utils.pageY = 0;
  Utils.doc = true;
  Utils.trackMouse();
  Utils.uids = {};

  var CSS = /*#__PURE__*/function () {
    function CSS() {
      babelHelpers.classCallCheck(this, CSS);
    }

    babelHelpers.createClass(CSS, null, [{
      key: "toColor",
      value: function toColor(str) {
        var parts;

        if (/$#/.test(str)) {
          parts = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (m, r, g, b) {
            return '#' + r + r + g + g + b + b;
          }).substring(1).match(/.{2}/g).map(x(function () {
            return parseInt(x, 16);
          }));
        } else {
          parts = str.match(/[0-9\.]+/g);
        }

        var r = parseInt(parts[0]);
        var g = parseInt(parts[1]);
        var b = parseInt(parts[2]);
        var a = parts[3] !== null ? parseFloat(parts[3]) : 1;
        return {
          r: r,
          g: g,
          b: b,
          a: a
        };
      }
    }, {
      key: "fromColor",
      value: function fromColor(color) {
        if (color.a == null) {
          color.a = 1;
        }

        return "rgba(".concat(color.r, ",").concat(color.g, ",").concat(color.b, ",").concat(color.a, ")");
      }
    }, {
      key: "toPercent",
      value: function toPercent(num) {
        if (typeof num === "string") {
          return num;
        }

        return "".concat(Math.round(num * 100), "%");
      }
    }, {
      key: "fromPercent",
      value: function fromPercent(str) {
        if (typeof str === "number") {
          return str;
        }

        return parseFloat(str) / 100;
      }
    }, {
      key: "toSize",
      value: function toSize(size) {
        if (/^[0-9]+$/.test(size)) {
          return size + "px";
        } else {
          return size;
        }
      }
    }, {
      key: "toCSS",
      value: function toCSS(obj) {
        var important = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var css = "";
        important = important === true ? " !important" : "";
        fp.each(obj, function (value, key) {
          return css += "".concat(Utils.toHyphenated(key), ":").concat(value).concat(important, ";");
        });
        return css;
      }
    }]);
    return CSS;
  }();

  var Logger = /*#__PURE__*/function () {
    function Logger(enabled) {
      babelHelpers.classCallCheck(this, Logger);
      this.enabled = enabled;

      if (!this.enabled) {
        this.log = this.trace = this.debug = this.info = this.warn = this.error = this.fatal = function () {};
      }
    }

    babelHelpers.createClass(Logger, [{
      key: "log",
      value: function log() {
        try {
          if (arguments.length > 1 && arguments[1] != null) {
            console.log.apply(console, arguments);
          } else {
            console.log(arguments[0]);
          }
        } catch (error) {}
      }
    }, {
      key: "trace",
      value: function trace() {
        try {
          console.trace.apply(console, arguments);
        } catch (error) {}
      }
    }, {
      key: "debug",
      value: function debug() {
        try {
          console.log.apply(console, arguments);
        } catch (error) {
          this.log.apply(this, arguments);
        }
      }
    }, {
      key: "info",
      value: function info() {
        try {
          console.info.apply(console, arguments);
        } catch (error) {}
      }
    }, {
      key: "warn",
      value: function warn() {
        try {
          console.warn.apply(console, arguments);
        } catch (error) {}
      }
    }, {
      key: "error",
      value: function error() {
        try {
          console.error.apply(console, arguments);
        } catch (error) {
          this.log.apply(this, arguments);
        }
      }
    }, {
      key: "fatal",
      value: function fatal() {
        try {
          console.fatal.apply(console, arguments);
        } catch (error) {}
      }
    }]);
    return Logger;
  }();

  var Events = {
    LOADED_METADATA: "loadedmetadata",
    READY: "ready",
    ERROR: "error",
    ENDED: "ended",
    STARTED: "started",
    DURATION_CHANGE: "durationchange",
    SEEKING: "seeking",
    SEEKED: "seeked",
    TIME_UPDATE: "timeupdate",
    LOAD_START: "loadstart",
    LOADED_DATA: "loadeddata",
    CAN_PLAY: "canplay",
    CAN_PLAY_THROUGH: "canplaythrough",
    PROGRESS: "progress",
    MEDIA_CHANGE: "mediachange",
    WAITING: "waiting",
    BUFFERING_CHANGE: "bufferingchange",
    STALLED: "stalled",
    PLAY: "play",
    PLAYING: "playing",
    PAUSE: "pause",
    PAUSED: "paused",
    PLAY_REQUEST: "playrequest",
    MEDIUM_CHANGE: "mediumchange",
    TEMPORAL_TYPE_CHANGE: "temporaltypechange",
    VOLUME_CHANGE: "volumechange",
    FAIL_OVER_ATTEMPT: "failoverattempt",
    PLAYBACK_TARGET_CHANGE: "playbacktargetchange",
    PLAYBACK_TARGET_AVAILABILITY_CHANGE: "playbacktargetavailabilitychange",
    RECORD_CONTENT_CHANGE: "recordcontentchange",
    IS_LIVE: "islive",
    CONTENT_CHANGED: "contentchanged",
    PLAYBACK_RATE_CHANGE: "playbackratechange",
    SETTINGS_CHANGE: "settingschange",
    TRACK_ERROR: "trackerror",
    QUALITY_CHANGE: "qualitychange",
    QUALITY_CHANGING: "qualitychanging",
    QUALITY_SWITCHED: "qualityswitched",
    QUALITY_MODE_CHANGE: "qualitymodechange",
    QUALITY_LEVELS_LOADED: "qualitylevelsloaded",
    MEDIA_SEQUENCE_INITIALIZED: "mediasequenceinitialized",
    MEDIA_SEQUENCE_STARTED: "mediasequencestarted",
    MEDIA_SEQUENCE_ENDED: "mediasequenceended",
    MEDIA_SEQUENCE_ABORTED: "mediasequenceaborted",
    AUTOPLAY_BLOCKED: "autoplayblocked",
    LANGUAGE_CHANGE: "languagechange",
    TIMED_METADATA: "timedmetadata",
    CUES_CHANGE: "cueschange",
    VIEW_CREATED: "viewcreated",
    MUTE_CHANGE: "mutechange",
    RESUME: "resume",
    PLAY_STATE_CHANGE: "playstatechange",
    FULL_SCREEN_CHANGE: "fullscreenchange",
    DISPLAY_STATE_CHANGE: "displaystatechange",
    BUSY: "busy",
    CREATE: "create",
    DESTROY: "destroy",
    GO_LIVE: "golive"
  };

  /**
   * @enum {string}
   * @const
   */
  var AutoplayPolicy = {
    /**
     *
     */
    NONE: "none",

    /**
     *
     */
    DEFAULT: "default",

    /**
     *
     */
    MUTED: "muted"
  };

  var AutoplayThreshold = /*#__PURE__*/function () {
    function AutoplayThreshold() {
      babelHelpers.classCallCheck(this, AutoplayThreshold);
    }

    babelHelpers.createClass(AutoplayThreshold, null, [{
      key: "UNKNOWN",
      get:
      /**
       *
       */
      function get() {
        return "unknown";
      }
      /**
       *
       */

    }, {
      key: "ALLOWED",
      get: function get() {
        return "allowed";
      }
      /**
       *
       */

    }, {
      key: "MUTED",
      get: function get() {
        return "muted";
      }
      /**
       *
       */

    }, {
      key: "MUTED_INLINE",
      get: function get() {
        return "mutedinline";
      }
      /**
       *
       */

    }, {
      key: "BLOCKED",
      get: function get() {
        return "blocked";
      }
      /**
       *
       */

    }, {
      key: "threshold",
      get: function get() {
        return threshold;
      },
      set: function set(value) {
        threshold = value;
      }
      /**
       * Detects the browser's autoplay threshold
       *
       * @param  {string=}  url  The url to use in the dectection process
       */

    }, {
      key: "detect",
      value: function detect() {
        var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Utils.blankVideo();
        return new Promise(function (resolve, reject) {
          var complete = function complete(threshold) {
            try {
              video.removeEventListener("error", error);
              video.pause();
            } catch (error) {}

            resolve(threshold);
          };

          var error = function error() {
            complete(AutoplayThreshold.UNKNOWN);
          };

          var muted = function muted() {
            video.muted = true;
            video.play().then(function () {
              return complete(AutoplayThreshold.MUTED);
            })["catch"](inline);
          };

          var inline = function inline() {
            video.playsInline = true;
            video.play().then(function () {
              return complete(AutoplayThreshold.MUTED_INLINE);
            })["catch"](function () {
              return complete(AutoplayThreshold.BLOCKED);
            });
          };

          try {
            if (!Utils.isAutoplaySupported()) {
              return resolve(AutoplayThreshold.BLOCKED);
            }

            var video = document.createElement("video");
            video.addEventListener("error", error);
            video.volume = 0.01;
            video.src = url;
            Promise.resolve(video.play()).then(function () {
              return complete(AutoplayThreshold.ALLOWED);
            })["catch"](muted);
          } catch (err) {
            error();
          }
        });
      }
      /*
       *
       */

    }, {
      key: "init",
      value: function init(config) {
        // don't run the detection if the customer opts out
        if (config.autoplayPolicy === AutoplayPolicy.NONE) {
          return Promise.resolve(threshold = AutoplayThreshold.UNKNOWN);
        }

        if (Utils.isHTML5() === true) {
          if (Utils.isAutoplaySupported()) {
            threshold = Utils.isIOS() ? AutoplayThreshold.MUTED_INLINE : AutoplayThreshold.MUTED;
          } else {
            threshold = AutoplayThreshold.BLOCKED;
          }

          return Promise.resolve(threshold);
        }

        return this.value(threshold === AutoplayThreshold.UNKNOWN);
      }
      /*
       *
       */

    }, {
      key: "value",
      value: function value() {
        var refresh = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (refresh === true) {
          threshold = null;
          detecting = null;
        }

        if (threshold != null) {
          return Promise.resolve(threshold);
        } else {
          if (detecting == null) {
            detecting = this.detect().then(function (value) {
              threshold = value;
              detecting = null;
              return value;
            });
          }

          return detecting;
        }
      }
    }]);
    return AutoplayThreshold;
  }();
  var threshold = AutoplayThreshold.UNKNOWN;
  var detecting = null;

  /**
   * @enum {string}
   * @const
   * @private
   */
  var Preload = {
    /**
     * Constant representing the "none" preload mode
     */
    NONE: "none",

    /**
     * Constant representing the "metadata" preload mode
     */
    METADATA: "metadata",

    /**
     * Constant representing the "auto" preload mode
     */
    AUTO: "auto"
  };

  var Env = {
    VERSION: "9.1.11",
    PRODUCT: "premier",
    PLATFORM: "web",
    PLAYER_ID: "",
    CREATE: "http://localhost:2672/beacon/create/",
    TRACK: "http://localhost:2672/beacon/track/"
  };

  var Config = /*#__PURE__*/function () {
    /**
     * The Config class
     *
     * @param Object} overrides
     *    Config overrides
     *
     * @constructor
     */
    function Config() {
      var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      babelHelpers.classCallCheck(this, Config);
      // apply overrides
      var config = Utils.override(Config.defaults, overrides);
      var debug = QueryString.amp.debug;

      if (debug != null) {
        config.debug = debug;
      }

      if (config.defaults == null) {
        config.defaults = {};
      }

      if (config.controls === true) {
        config.plugins.react = null;
      }

      Object.assign(this, config); // autoplay/autoplayPolicy shortcut

      if (/muted/i.test(this.autoplay)) {
        this.autoplayPolicy = AutoplayPolicy.MUTED;
        this.autoplay = true;
      }
    }

    babelHelpers.createClass(Config, null, [{
      key: "create",
      value: function create(overrides) {
        return new Config(overrides);
      }
    }]);
    return Config;
  }();
  Config.defaults = {
    id: null,
    paths: {
      base: "../",
      player: "${paths.base}akamai/amp/core/",
      plugins: "${paths.base}akamai/amp/",
      libs: "${paths.player}libs/",
      resources: "${paths.base}resources/"
    },
    resources: [{
      debug: "${paths.player}amp.css",
      src: "${paths.player}amp.min.css",
      type: "text/css",
      async: true
    }],
    plugins: {
      react: {
        resources: [{
          src: "${paths.plugins}react/libs/react.min.js",
          debug: "${paths.plugins}react/libs/react.js",
          type: "text/javascript"
        }, {
          src: "${paths.plugins}react/React.min.css",
          debug: "${paths.plugins}react/React.css",
          type: "text/css"
        }, {
          src: "${paths.plugins}react/React.min.js",
          debug: "${paths.plugins}react/React.js",
          type: "text/javascript"
        }],
        autoHide: 3,
        hint: {
          enabled: true
        }
      }
    },
    pid: Env.PLAYER_ID,
    dataset: {},
    settings: {},
    preload: Preload.NONE,
    language: navigator.language || navigator.browserLanguage,
    autoplay: false,
    autoplayPolicy: AutoplayPolicy.DEFAULT,
    loop: false,
    controls: false,
    playsinline: null,
    withCredentials: false,
    muted: null,
    fullscreen: {},
    captioning: {},
    hls: {
      resources: [{
        type: "text/javascript",
        src: "${paths.libs}hls.min.js",
        debug: "${paths.libs}hls.js",
        defer: true
      }],
      quality: {
        startLevel: -1
      },
      data: {
        enableWorker: true
      }
    },
    dash: {
      resources: [{
        type: "text/javascript",
        src: "//cdn.dashjs.org/v4.1.0/dash.all.min.js",
        debug: "//cdn.dashjs.org/v4.1.0/dash.all.debug.js",
        defer: true
      }],
      buffer: 1
    },
    locales: {},
    defaults: {
      language: "en"
    }
  };
  Config.locales = {
    en: {
      MONOSPACED_SERIF: "Monospaced Serif",
      PROPORTIONAL_SERIF: "Proportional Serif",
      MONOSPACED_SANS_SERIF: "Monospaced Sans-Serif",
      PROPORTIONAL_SANS_SERIF: "Proportional Sans-Serif",
      CASUAL: "Casual",
      CURSIVE: "Cursive",
      SMALL_CAPS: "Small Capitals",
      ERROR: "Error",
      ERROR_ABORTED: "Media Aborted",
      ERROR_DECODE: "Decode Error",
      ERROR_NETWORK: "Network Error",
      ERROR_SRC: "Source not supported",
      ERROR_DEFAULT: "An unknown error has occurred",
      STREAM_NOT_FOUND: "Stream not found",
      EN: "English",
      ENG: "English",
      ES: "Spanish",
      SPA: "Spanish",
      DE: "German",
      DEU: "German",
      GER: "German",
      FR: "French",
      FRE: "French",
      FRA: "French",
      IT: "Italian",
      ITA: "Italian",
      RU: "Russian",
      RUS: "Russian",
      ZH: "Chinese",
      ZHO: "Chinese",
      CHI: "Chinese",
      JA: "Japanese",
      JPN: "Japanese",
      KO: "Korean",
      KOR: "Korean",
      SV: "Swedish",
      SWE: "Swedish",
      PHI: "Philippine",
      PT: "Portuguese",
      POR: "Portuguese",
      UNKNOWN: "Unknown"
    },
    es: '#{paths.player}es.json',
    fr: '#{paths.player}fr.json'
  };

  var SINGLE = /^\s*[#\$]{([^\$#{}]+)}\s*$/;
  var TOKEN = /[#\$]{([^\$#}]*)}/g;

  var DataBinding = /*#__PURE__*/function () {
    /**
     * @constructor
     */
    function DataBinding() {
      babelHelpers.classCallCheck(this, DataBinding);
    }
    /**
     * @private
     * @type {RegExp}
     * @const
     */


    babelHelpers.createClass(DataBinding, null, [{
      key: "SINGLE",
      get: function get() {
        return SINGLE;
      }
      /**
       * @private
       * @type {RegExp}
       * @const
       */

    }, {
      key: "TOKEN",
      get: function get() {
        return TOKEN;
      }
      /**
       * Evaluate a data bound string.
       *
       * @param {string} binding
       *   The data bound string.
       *
       * @param {?Object} context
       *   The context object used as "global" when evaluating the binding.
       *
       * @return {string}
       *   The evaluated result
       */

    }, {
      key: "eval",
      value: function _eval(binding, context) {
        var _this = this;

        if (binding == null) {
          return binding;
        } // if the binding is a single value, such as ${media}, execute it by itself so that the full object can be returned instead of "[object Object]"


        if (SINGLE.test(binding)) {
          try {
            return this.exec(binding.replace(SINGLE, "$1"), context);
          } catch (error) {
            return binding;
          }
        }

        return binding.replace(TOKEN, function (match, token, offset, string) {
          try {
            return _this.exec(token, context);
          } catch (error) {
            return match;
          }
        });
      }
      /**
       * Execute a data bound string.
       *
       * @param {string} binding
       *   The data bound string.
       *
       * @param {?Object} context
       *   The context object used as "global" when evaluating the binding.
       *
       * @return {string}
       *   The evaluated result
       */

    }, {
      key: "exec",
      value: function exec(binding, context) {
        return new Function("with (this) { return ".concat(binding, " }")).bind(context)();
      }
      /**
       * Evaluate a data bound object.
       *
       * @param {Object} value
       *   The data bound object.
       *
       * @param {Object} context
       *   The context object used as "global" when evaluating the binding.
       *
       * @return {Object}
       *   The evaluated result
       */

    }, {
      key: "evaluateBindings",
      value: function evaluateBindings(value, context) {
        var _this2 = this;

        var clone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        if (value == null) {
          return;
        }

        if (babelHelpers["typeof"](value) === "object") {
          var obj = clone === true ? JSON.parse(JSON.stringify(value)) : value;

          if (value instanceof Array) {
            return obj.map(function (item) {
              return _this2.evaluateBindings(item, context, false);
            });
          } else {
            value = {};

            for (var key in obj) {
              value[key] = this.evaluateBindings(obj[key], context, false);
            }

            return value;
          }
        } else if (typeof value === "string") {
          var result = this.eval(value, context); // allow recursive binding in strings only

          if (result !== value && TOKEN.test(result) === true) {
            return this.evaluateBindings(result, context, clone);
          } else {
            return result;
          }
        } else {
          return value;
        }
      }
    }]);
    return DataBinding;
  }();

  var ModuleProxy = /*#__PURE__*/function (_puremvc$Proxy) {
    babelHelpers.inherits(ModuleProxy, _puremvc$Proxy);

    /**
     * Creates a new instance of MediaProxy. Used to track player configuration settings.
     *
     * @param {Object} data The config object.
     * @constructor
     * @private
     * @extends {puremvc.Proxy}
     */
    function ModuleProxy(data, name) {
      var _this;

      babelHelpers.classCallCheck(this, ModuleProxy);
      _this = _puremvc$Proxy.call(this, name) || this;
      _this.config = data;
      return _this;
    }
    /**
     * The name of the this Proxy.
     *
     * @static
     * @type {string}
     */


    babelHelpers.createClass(ModuleProxy, [{
      key: "initializeNotifier",
      value:
      /** @override */
      function initializeNotifier(key) {
        babelHelpers.get(babelHelpers.getPrototypeOf(ModuleProxy.prototype), "initializeNotifier", this).call(this, key);
        this.createData();
      }
      /** */

    }, {
      key: "createData",
      value: function createData() {
        this.setData(this.config);
      }
      /** */

    }, {
      key: "getDefaults",
      value: function getDefaults() {
        return this.defaults || {};
      }
      /**
       * Sets the data for this proxy.
       *
       * @param {Object} value
       *    The new data for this proxy
       * @override
       */

    }, {
      key: "setData",
      value: function setData() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var obj = {};
        this.getDefaults();
        fp.each(this.getDefaults(), function (value, key) {
          return obj[key] = key in data ? data[key] : value;
        });
        babelHelpers.get(babelHelpers.getPrototypeOf(ModuleProxy.prototype), "setData", this).call(this, obj);
        return data;
      }
      /** */

    }, {
      key: "destroy",
      value: function destroy() {}
    }], [{
      key: "NAME",
      get: function get() {
        return "ModuleProxy";
      }
    }]);
    return ModuleProxy;
  }(puremvc.Proxy);

  var ModuleAdapter = /*#__PURE__*/function (_puremvc$Mediator) {
    babelHelpers.inherits(ModuleAdapter, _puremvc$Mediator);

    /**
     * The ModuleAdapter class.
     *
     * @param {Module} module
     * @constructor
     * @private
     * @extends {puremvc.Mediator}
     */
    function ModuleAdapter(module) {
      var _this;

      babelHelpers.classCallCheck(this, ModuleAdapter);
      _this = _puremvc$Mediator.call(this, module.getModuleName()) || this;
      _this.module = module;
      _this.mediator = null;
      return _this;
    }

    babelHelpers.createClass(ModuleAdapter, [{
      key: "initializeNotifier",
      value: function initializeNotifier(key) {
        var _this2 = this;

        babelHelpers.get(babelHelpers.getPrototypeOf(ModuleAdapter.prototype), "initializeNotifier", this).call(this, key);
        var publications = this.module.listNotificationPublications();

        if (publications != null) {
          this.mediator = new puremvc.Mediator(this.facade.getModuleName());

          this.mediator.listNotificationInterests = function () {
            return publications;
          };

          this.mediator.handleNotification = function (notification) {
            _this2.facade.sendNotification(notification.getName(), notification.getBody(), notification.getType());
          };
        }
      }
    }, {
      key: "onRegister",
      value: function onRegister() {
        if (this.mediator != null) {
          this.module.registerMediator(this.mediator);
        }
      }
    }, {
      key: "onRemove",
      value: function onRemove() {
        if (this.mediator != null) {
          this.module.removeMediator(this.mediator);
        }
      }
      /**
       * Overridden so this class may subscribe to all notifications
       * @return An Array
       *
       */

    }, {
      key: "listNotificationInterests",
      value: function listNotificationInterests() {
        return this.module.listNotificationInterests();
      }
      /**
       * Handles notifications of interest to this mediator. Note that
       * the default declaration is to allow the super to handle the
       * note. This leaves the base JunctionMediator to handle things
       * like ACCEPT_INPUT_PIPE and ACCEPT_OUTPUT_PIPE
       * @param note An INotification
       *
       */

    }, {
      key: "handleNotification",
      value: function handleNotification(notification) {
        this.module.sendNotification(notification.getName(), notification.getBody(), notification.getType());
      }
    }]);
    return ModuleAdapter;
  }(puremvc.Mediator);

  var DispatchEventCommand = /*#__PURE__*/function (_puremvc$SimpleComman) {
    babelHelpers.inherits(DispatchEventCommand, _puremvc$SimpleComman);

    /**
     * The EndCommand class.
     *
     * @constructor
     * @private
     * @extends {puremvc.SimpleCommand}
     */
    function DispatchEventCommand() {
      babelHelpers.classCallCheck(this, DispatchEventCommand);
      return _puremvc$SimpleComman.call(this) || this;
    }
    /**
     * Executes the command.
     *
     * @param {puremvc.Notification} notification
     *    The notification.
     *
     * @override
     */


    babelHelpers.createClass(DispatchEventCommand, [{
      key: "execute",
      value: function execute(notification) {
        var event = notification.getBody();
        event.player = this.facade.player || this.facade;
        this.facade.dispatchEvent(event);
      }
    }]);
    return DispatchEventCommand;
  }(puremvc.SimpleCommand);

  var Transformer = /*#__PURE__*/function () {
    /**
     * Creates a new Transformer
     *
     * @constructor
     * @private
     */
    function Transformer() {
      babelHelpers.classCallCheck(this, Transformer);
      this._transformMap = {};
    }
    /**
     * Creates a new Transformer
     *
     * @param {Object} target
     *  The Transformer target
     *
     * @return {Transformer}
     */


    babelHelpers.createClass(Transformer, [{
      key: "addTransform",
      value:
      /**
       * Adds a transform for a given type.
       *
       * @param {!string}  type  A string representing the event's type.
       * @param {!Function} transform  A function to call when the event is triggered.
       */
      function addTransform(type, transform) {
        if (transform == null || type == null) {
          return;
        }

        if (this._transformMap[type] == null) {
          this._transformMap[type] = [];
        } else if (this._transformMap[type].indexOf(transform) !== -1) {
          return;
        }

        this._transformMap[type].push(transform);

        this.sortTransforms(type);
      }
      /**
       * Sorts the transform list by priority. Higher priority Transforms
       * are executed first.
       *
       * @param {!String} type The transform type
       * @param {Function=} func An optional sort function
       * @returns {Array.<Function|akamai.amp.Transform>} The sorted list
       */

    }, {
      key: "sortTransforms",
      value: function sortTransforms(type, func) {
        if (func == null) {
          func = function func(a, b) {
            var aP = a.priority || 0;
            var bP = b.priority || 0;
            return bP - aP;
          };
        }

        return this._transformMap[type].sort(func);
      }
      /**
       * Performs a transform for a given type
       *
       * @param {!String} type The transform type
       * @param {!Object} value The value to be transformed
       */

    }, {
      key: "transform",
      value: function transform(type, value) {
        var transforms = this._transformMap[type];

        if (transforms == null) {
          return Promise.resolve(value);
        }

        return Utils.transform(value, transforms);
      }
      /**
       * Removes a transform for a given type.
       *
       * @param {!string}  type  A string representing the transform's type.
       * @param {!Function} transform  A function or Transform object to call when the type is triggered.
       * @return {?Function} the transform that was removed if any
       */

    }, {
      key: "removeTransform",
      value: function removeTransform(type, transform) {
        if (transform == null || type == null) {
          return;
        }

        var transforms = this._transformMap[type];

        if (transforms == null) {
          return;
        }

        var index = transforms.indexOf(transform);

        if (index === -1) {
          return;
        }

        return transforms.splice(index, 1);
      }
    }], [{
      key: "create",
      value: function create() {
        return new Transformer();
      }
    }]);
    return Transformer;
  }();

  /**
   * @enum {string}
   * @const
   */
  var TransformType = {
    /**
     *
     */
    TIME: "time",

    /**
     *
     */
    SEEK: "seek",

    /**
     *
     */
    MEDIA: "media",

    /**
     *
     */
    AD_REQUEST: "adrequest",

    /**
     *
     */
    AD_BREAK: "adbreak",

    /**
     *
     */
    PLAY_STATE: "playstate",

    /**
     *
     */
    EVENT: "event",

    /**
     *
     */
    ERROR: "error",

    /**
     *
     */
    CUE_CHANGE: "cuechange"
  };

  /**
   * @enum {string}
   * @const
   * @private
   */

  var Notifications = {
    INTERNAL: "internal",
    STARTUP: "startup",
    LOAD: "load",
    REQUEST_PLAY: "requestplay",
    PAUSE_REQUEST: "pauserequest",
    TOGGLE_PLAY_PAUSE: "toggleplaypause",
    CHANGE_PLAY_STATE: "changeplaystate",
    MEDIA_ELEMENT_CHANGE: "mediaelementchange",
    HIDDEN_CHANGE: "hiddenchange",
    TOGGLE_FULL_SCREEN: "togglefullscreen",
    CHANGE_DISPLAY_STATE: "changedisplaystate",
    DISABLE_FULL_SCREEN: "disablefullscreen",
    ENABLE_FULL_SCREEN: "enablefullscreen",
    CHANGE_ACTIVE_STATE: "changeactivestate",
    ACTIVE_STATE_CHANGE: "activestatechange",
    CHANGE_MEDIA: "changemedia",
    SET_MEDIA: "setmedia",
    MEDIA_VALIDATED: "mediavalidated",
    CHANGE_SETTINGS: "changesettings",
    CHANGE_VOLUME: "changevolume",
    CHANGE_MUTED: "changemuted",
    TOGGLE_MUTED: "togglemuted",
    CHANGE_TIME: "changetime",
    TIME_CHANGE: "timechange",
    SEEK: "seek",
    SEEK_COMPLETE: "seekcomplete",
    CHANGE_DURATION: "changeduration",
    CHANGE_AUTOPLAY: "changeautoplay",
    AUTOPLAY_CHANGE: "autoplaychange",
    CHANGE_LOOP: "changeloop",
    CHANGE_PRELOAD: "changepreload",
    CHANGE_CONTROLS: "changecontrols",
    PLAYBACK_CORE_CHANGE: "playbackcorechange",
    START: "start",
    END: "end",
    REPLAY: "replay",
    ADD_LAYER: "addlayer",
    REMOVE_LAYER: "removelayer",
    ADD_OVERLAY: "addoverlay",
    REMOVE_OVERLAY: "removeoverlay",
    ADD_CONTROL: "addcontrol",
    REMOVE_CONTROL: "removecontrol",
    ADD_CONTROL_STATE: "addcontrolstate",
    REMOVE_CONTROL_STATE: "removecontrolstate",
    ADD_APPLICATION_STATE: "addapplicationstate",
    REMOVE_APPLICATION_STATE: "removeapplicationstate",
    DISPATCH_EVENT: "dispatchevent",
    INITIALIZED: "initialized",
    REGISTER_PLAYBACK_CORE: "registerplaybackcore",
    REMOVE_PLAYBACK_CORE: "removeplaybackcore",
    CHANGE_PLAYBACK_TARGET: "changeplaybacktarget",
    LOCK: "lock",
    FRAGMENT_LOAD_START: "fragmentloadstart",
    FRAGMENT_LOADED: "fragmentloaded",
    CHANGE_CONTENT: "changecontent",
    ENABLE_VIDEO_EVENTS: "enablevideoevents",
    DISABLE_VIDEO_EVENTS: "disablevideoevents",
    HAS_POST_CONTENT: "haspostcontent",
    AUDIO_TRACK_SWITCH: "audiotrackswitch",
    TRACK: "track",
    init: function init() {
      var _this = this;

      fp.each(Events, function (value, key) {
        if (key !== "values" && key !== "init") {
          _this[key] = value;
        }
      });
    }
  };

  var Module = /*#__PURE__*/function (_puremvc$Facade) {
    babelHelpers.inherits(Module, _puremvc$Facade);

    /**
     * The Module class.
     *
     * @param {Object}  config        The configuration object
     * @param {Object}  viewComponent The player's container element
     * @constructor
     * @private
     * @extends {puremvc.Facade}
     */
    function Module(viewComponent) {
      var _this;

      babelHelpers.classCallCheck(this, Module);
      _this = _puremvc$Facade.call(this, Utils.createUID()) || this;
      _this.viewComponent = viewComponent;
      _this.performance = {
        init: Date.now(),
        record: function record(label) {
          var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date.now();
          return this[label] = time;
        },
        elapsed: function elapsed(label) {
          var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "init";
          return this[label] - this[start];
        }
      };
      _this.dispatcher = EventDispatcher.create(babelHelpers.assertThisInitialized(_this));
      _this.transformer = Transformer.create();
      _this.logger = Logger.instance;
      _this.moduleMap = {};
      _this.emit = _this.dispatch.bind(babelHelpers.assertThisInitialized(_this));
      _this.on = _this.addListener = _this.addEventListener.bind(babelHelpers.assertThisInitialized(_this));
      _this.off = _this.removeListener = _this.removeEventListener.bind(babelHelpers.assertThisInitialized(_this));
      _this.config = null;
      _this.oninitialized = null;
      _this.onerror = null;
      _this.parentModule = null;
      _this.ignoreEvents = /(timeupdate|progress|fragmentloaded|fragmentloadstart|timeremaining|adtimeremaining)/;
      return _this;
    }
    /**
     * Initialization function.
     *
     * @param {Object}  config  The plugin's configuration object.
     */


    babelHelpers.createClass(Module, [{
      key: "initialize",
      value: function initialize(config, parentModule) {
        this.config = config;
        this.parentModule = parentModule;
        this._id = this.config.id || this.multitonKey;
        this.loadModuleResources().then(this.resourcesLoaded.bind(this))["catch"](this.resourcesError.bind(this));
      }
      /** */

    }, {
      key: "loadModuleResources",
      value: function loadModuleResources() {
        var resources = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.config.resources;

        if (!(resources != null ? resources.length : void 0) > 0) {
          return Promise.resolve();
        }

        return AMP.addResources(this.evaluatePaths(resources));
      }
      /** */

    }, {
      key: "evaluatePaths",
      value: function evaluatePaths(path) {
        var ref, ref1;

        if (path == null) {
          return;
        }

        var paths = this.config.paths || ((ref = this.parentModule) != null ? (ref1 = ref.config) != null ? ref1.paths : void 0 : void 0);

        if (paths != null) {
          path = DataBinding.evaluateBindings(path, {
            paths: paths
          });
        }

        return path;
      }
      /**
       * The resources failed to load.
       *
       * @private
       */

    }, {
      key: "resourcesError",
      value: function resourcesError(error) {
        if (this.onerror != null) {
          this.onerror(this);
        } else {
          throw AMPError.create(error);
        }
      }
      /**
       * The resources have finished loaded, load the extensions.
       *
       * @private
       */

    }, {
      key: "resourcesLoaded",
      value: function resourcesLoaded() {
        this.createFramework();

        if (typeof this.oninitialized === "function") {
          this.oninitialized(this);
        }
      }
      /**
       * Framework based initialization function for defining default
       * mvc classes. Meant to be overwritten by base classes.
       */

    }, {
      key: "createFramework",
      value: function createFramework() {
        this.createModel();
        this.createController();
        this.createView();
      }
      /** */

    }, {
      key: "createModel",
      value: function createModel() {
        this.registerProxy(new ModuleProxy(this.config));
      }
      /** */

    }, {
      key: "createView",
      value: function createView() {}
      /** */

    }, {
      key: "createController",
      value: function createController() {
        this.registerCommand(Notifications.DISPATCH_EVENT, DispatchEventCommand);
      }
      /** */

    }, {
      key: "getModuleName",
      value: function getModuleName() {
        return this.moduleName;
      }
      /** */

    }, {
      key: "getId",
      value: function getId() {
        return this._id;
      }
    }, {
      key: "id",
      get: function get() {
        return this.getId();
      }
      /**
       * @return {Object} The configuration object.
       * @expose
       */

    }, {
      key: "getConfig",
      value: function getConfig() {
        return this.config;
      }
      /** */

    }, {
      key: "hasModule",
      value: function hasModule(moduleName) {
        return this.moduleMap[moduleName] != null;
      }
      /** */

    }, {
      key: "getModules",
      value: function getModules() {
        var modules = {};
        fp.each(this.moduleMap, function (value, key) {
          return modules[key] = value.module;
        });
        return modules;
      }
      /** */

    }, {
      key: "registerModule",
      value: function registerModule(module) {
        var moduleName = module.getModuleName();

        if (module == null || this.moduleMap[moduleName] != null) {
          return;
        }

        var adaptor = new ModuleAdapter(module);
        this.moduleMap[moduleName] = adaptor;
        this.registerMediator(adaptor);
        module.onRegister();
      }
      /** */

    }, {
      key: "retrieveModule",
      value: function retrieveModule(moduleName) {
        return this.moduleMap[moduleName].module;
      }
      /** */

    }, {
      key: "removeModule",
      value: function removeModule(moduleName) {
        var adaptor = this.moduleMap[moduleName];

        if (adaptor == null) {
          return;
        }

        delete this.moduleMap[moduleName];
        this.removeMediator(moduleName);
        var module = adaptor.module;
        module.onRemove.call(module);
        return module;
      }
      /** List INotification interests. */

    }, {
      key: "listNotificationInterests",
      value: function listNotificationInterests() {
        return [];
      }
      /** List Notification publications */

    }, {
      key: "listNotificationPublications",
      value: function listNotificationPublications() {
        return [];
      }
      /** Get the IMediator's view component. */
      // Override this function in sub classes that need to publish additional Notificaions.

    }, {
      key: "getViewComponent",
      value: function getViewComponent() {
        return this.viewComponent;
      }
      /** Set the IMediator's view component. */

    }, {
      key: "setViewComponent",
      value: function setViewComponent(viewComponent) {
        this.viewComponent = viewComponent;
        return viewComponent;
      }
      /** Called by the parent module when the Module is registered */

    }, {
      key: "onRegister",
      value: function onRegister() {}
      /** Called by the parent module when the Module is removed */

    }, {
      key: "onRemove",
      value: function onRemove() {}
      /** Destroys the module */

    }, {
      key: "destroy",
      value: function destroy() {
        var proxy = this.retrieveProxy(ModuleProxy.NAME);

        if (proxy != null) {
          if (typeof proxy.destroy === "function") {
            proxy.destroy();
          }
        }

        puremvc.Facade.removeCore(this.multitonKey);
        this.dispatcher.destroy();

        if (this.viewComponent != null) {
          this.viewComponent.innerHTML = "";
          this.viewComponent.className = "";
        }
      }
      /**
       * Adds a listener for a given event type.
       *
       * @param {!string}  type  A string representing the event's type.
       * @param {!Function} func  A function to call when the event is triggered.
       * @expose
       */

    }, {
      key: "addEventListener",
      value: function addEventListener(type, func) {
        this.dispatcher.addEventListener(type, func);
      }
      /**
       * Adds a listener for a given event type and removes it after it has been triggered once.
       */

    }, {
      key: "once",
      value: function once(type, func) {
        this.dispatcher.once(type, func);
      }
      /** */

    }, {
      key: "logEvent",
      value: function logEvent(event) {
        if (this.ignoreEvents.test(event.type) === true) {
          return;
        }

        var prefix = this.getModuleName().toUpperCase();

        if (event.dispatcher) {
          prefix += " " + event.dispatcher;
        }

        this.logger.log("[".concat(prefix, " EVENT] ").concat(event.type), event);
      }
      /**
       * Dispathes and event, triggering all event listener of the event's type.
       *
       * @param {!IEvent} event The event to dispatch.
       * @expose
       */

    }, {
      key: "dispatchEvent",
      value: function dispatchEvent(event) {
        var _this2 = this;

        this.transform(TransformType.EVENT, event).then(function (result) {
          if (result == null) {
            return;
          }

          _this2.logEvent(event);

          return _this2.dispatcher.dispatchEvent(event);
        });
      }
      /**
       * Dispathes an event, triggering all event listener of the event's type.
       *
       * @param {!String} type    The type of event to dispatch.
       * @param {Object=} detail  Data to pass along with the event.
       */

    }, {
      key: "dispatch",
      value: function dispatch(type, detail) {
        this.dispatchEvent(Event.create(type, detail));
      }
      /**
       * Removes a listener for a given event type.
       *
       * @param {!string}  type  A string representing the event's type.
       * @param {!Function} func  A function to call when the event is triggered.
       * @return {?Function} the handler that was removed if any
       * @expose
       */

    }, {
      key: "removeEventListener",
      value: function removeEventListener(type, func) {
        this.dispatcher.removeEventListener(type, func);
      }
      /**
       * Adds a transform for a given type.
       *
       * @param {!string}  type  A string representing the event's type.
       * @param {!Function} func  A function to call when the event is triggered.
       */

    }, {
      key: "addTransform",
      value: function addTransform(type, transform) {
        return this.transformer.addTransform(type, transform);
      }
      /**
       * Sorts the transform list by priority. Higher priority Transforms
       * are executed first.
       *
       * @param {!String} type The transform type
       * @param {Function=} sort An optional sort function
       * @returns {Array.<Function|akamai.amp.Transform>} The sorted list of transforms
       */

    }, {
      key: "sortTransforms",
      value: function sortTransforms(type, sort) {
        return this.transformer.sortTransforms(type, sort);
      }
      /**
       * Performs a transform for a given type
       *
       * @param {!String} type The transform type
       * @param {!Object} value The value to be transformed
       */

    }, {
      key: "transform",
      value: function transform(type, value) {
        return this.transformer.transform(type, value);
      }
      /**
       * Removes a transform for a given type.
       *
       * @param {!string}  type  A string representing the transform's type.
       * @param {!Function} transform  A function or Transform object to call when the type is triggered.
       * @return {?Function} the transform that was removed if any
       */

    }, {
      key: "removeTransform",
      value: function removeTransform(type, transform) {
        return this.transformer.removeTransform(type, transform);
      }
    }]);
    return Module;
  }(puremvc.Facade);

  /**
   * @enum {string}
   * @const
   * @private
   */
  var PluginNotifications = {
    REGISTER_PLUGINS: "registerPlugins",
    PLUGIN_REGISTERED: "pluginRegistered",
    PLUGINS_INITIALIZED: "pluginsinitialized"
  };

  var FPS = /*#__PURE__*/function () {
    function FPS() {
      babelHelpers.classCallCheck(this, FPS);
    }

    babelHelpers.createClass(FPS, null, [{
      key: "extractContentId",
      value: function extractContentId(initData, keys) {
        var link = document.createElement('a');
        link.href = Utils.arrayToString(initData);
        return link.hostname;
      }
    }, {
      key: "extractServerUrl",
      value: function extractServerUrl(initData, keys) {
        return keys.serverURL || keys.serverUrl;
      }
    }, {
      key: "requestCertificate",
      value: function requestCertificate(keys) {
        var request = {
          url: keys.cert,
          responseType: "arraybuffer",
          headers: {
            "Pragma": "Cache-Control: no-cache",
            "Cache-Control": "max-age=0"
          }
        };
        return Utils.request(request).then(function (xhr) {
          return new Uint8Array(xhr.response);
        });
      }
    }, {
      key: "concatInitDataIdAndCertificate",
      value: function concatInitDataIdAndCertificate(initData, id, cert) {
        if (typeof id === "string") {
          id = Utils.stringToArray(id);
        } // layout is [initData][4 byte: idLength][idLength byte: id][4 byte:certLength][certLength byte: cert]


        var offset = 0;
        var buffer = new ArrayBuffer(initData.byteLength + 4 + id.byteLength + 4 + cert.byteLength);
        var dataView = new DataView(buffer);
        var initDataArray = new Uint8Array(buffer, offset, initData.byteLength);
        initDataArray.set(initData);
        offset += initData.byteLength;
        dataView.setUint32(offset, id.byteLength, true);
        offset += 4;
        var idArray = new Uint16Array(buffer, offset, id.length);
        idArray.set(id);
        offset += idArray.byteLength;
        dataView.setUint32(offset, cert.byteLength, true);
        offset += 4;
        var certArray = new Uint8Array(buffer, offset, cert.byteLength);
        certArray.set(cert);
        return new Uint8Array(buffer, 0, buffer.byteLength);
      }
    }, {
      key: "requestLicense",
      value: function requestLicense(message, contentId, serverUrl, keys) {
        var request = {
          url: serverUrl,
          method: "POST",
          responseType: "text",
          headers: {
            "Content-type": "application/x-www-form-urlencoded"
          },
          data: "spc=".concat(Utils.base64EncodeUint8Array(message), "&assetId=").concat(encodeURIComponent(contentId))
        };
        fp.each(keys.httpRequestHeaders, function (value, key) {
          return request.headers[key] = value;
        });

        if (typeof keys.withCredentials === "boolean") {
          request.withCredentials = keys.withCredentials;
        }

        return Utils.request(request).then(function (xhr) {
          // response can be of the form: '\n<ckc>base64encoded</ckc>\n'
          // so trim the excess:
          var keyText = xhr.responseText.trim();

          if (keyText.substr(0, 5) === "<ckc>" && keyText.substr(-6) === "</ckc>") {
            keyText = keyText.slice(5, -6);
          }

          return Utils.base64DecodeUint8Array(keyText);
        })["catch"](function (error) {
          throw "The license request failed.";
        });
      }
    }]);
    return FPS;
  }();

  /**
   * @enum {string}
   * @const
   * @private
   */
  var DisplayState = {
    /**
     * Constant representing the normal display state
     */
    NORMAL: "normal",

    /**
     * Constant representing the full screen display state
     */
    FULL_SCREEN: "full-screen",

    /**
     * Constant representing the full screen display state
     */
    FULLSCREEN: "full-screen",

    /**
     * Constant representing the picture in picture display state
     */
    PICTURE_IN_PICTURE: "picture-in-picture"
  };

  /**
   * @enum {string}
   * @const
   * @private
   */
  var PlayState = {
    /**
     * Constant representing the playing play state
     */
    READY: "ready",

    /**
     * Constant representing the playing play state
     */
    PLAYING: "playing",

    /**
     * Constant representing the paused play state
     */
    PAUSED: "paused",

    /**
     * Constant representing the ended play state
     */
    ENDED: "ended",

    /**
     * Constant representing the waiting play state
     */
    LOADING: "loading",

    /**
     * Constant representing the waiting play state
     */
    WAITING: "waiting",

    /**
     * Constant representing the waiting play state
     */
    ERROR: "error"
  };

  /**
   * @enum {string}
   * @const
   * @private
   */
  var ActiveState = {
    /**
     * Constant representing the active state (controls on).
     */
    ACTIVE: "active",

    /**
     * Constant representing the inactive state (controls off).
     */
    INACTIVE: "inactive"
  };

  var ApplicationStateProxy = /*#__PURE__*/function (_puremvc$Proxy) {
    babelHelpers.inherits(ApplicationStateProxy, _puremvc$Proxy);

    /**
     * Used to track the various states of the player like full screen mode and active state (controls visible).
     *
     * @constructor
     * @private
     * @extends {puremvc.Proxy}
     */
    function ApplicationStateProxy() {
      var _this;

      babelHelpers.classCallCheck(this, ApplicationStateProxy);
      _this = _puremvc$Proxy.call(this) || this;
      _this.device = Utils.getDevice();
      _this.time = {
        currentTime: 0,
        duration: 0
      };
      _this.displayState = DisplayState.NORMAL;
      _this.playState = null;
      _this.activeState = null;
      _this.seeking = false;
      _this.seekrequested = false;
      _this.waiting = false;
      _this.busy = false;
      _this.volume = 1;
      _this.playbackTarget = "amp";
      _this.hasPostContent = false;
      _this.locked = true; // Lock out the user until media has been assigned

      _this.mediaElement = null;
      _this.hidden = false;
      _this.ended = false;
      _this.buffering = false;
      _this.playbackRate = 1;
      return _this;
    }
    /** @static */


    babelHelpers.createClass(ApplicationStateProxy, [{
      key: "getHasPostContent",
      value:
      /**
       * Flag indicating whether or not the media will have additional
       * content playback after the media playback is complete
       *
       * @param {Boolean} value
       *    The post content flag
       * @returns {Boolean}
       *    The post content flag
       * @type {Boolean}
       */
      function getHasPostContent() {
        return this.hasPostContent;
      }
    }, {
      key: "setHasPostContent",
      value: function setHasPostContent(value) {
        this.hasPostContent = value;
      }
      /**
       * Flag indicating whether or not the media playback is complete
       *
       * @param {Boolean} value
       *    The ended flag
       * @returns {Boolean}
       *    The ended flag
       * @type {Boolean}
       */

    }, {
      key: "getEnded",
      value: function getEnded() {
        return this.ended;
      }
    }, {
      key: "setEnded",
      value: function setEnded(value) {
        this.ended = value;

        if (this.ended === true && this.seeking === true) {
          this.seeking = false;
        }
      }
      /**
       * The player's display state. Valid options are:
       *
       * ApplicationStateProxy.FULL_SCREEN
       * ApplicationStateProxy.NORMAL
       *
       * @param {String} value
       *    The new display state of the player
       * @returns {String}
       *    The display state of the player
       * @type {String}
       */

    }, {
      key: "getDisplayState",
      value: function getDisplayState() {
        return this.displayState;
      }
    }, {
      key: "setDisplayState",
      value: function setDisplayState(value) {
        if (value === this.displayState) {
          return;
        }

        var previous = this.displayState;
        this.displayState = value;
        this.sendNotification(Notifications.DISPLAY_STATE_CHANGE, {
          previous: previous,
          value: this.displayState
        });
      }
      /**
       * The player's display state. Valid options are:
       *
       * ApplicationStateProxy.FULL_SCREEN
       * ApplicationStateProxy.NORMAL
       *
       * @param {String} value
       *    The new display state of the player
       * @returns {String}
       *    The display state of the player
       * @type {String}
       */

    }, {
      key: "getPlayState",
      value: function getPlayState() {
        return this.playState;
      }
    }, {
      key: "setPlayState",
      value: function setPlayState(value) {
        var _this2 = this;

        if (this.getWaiting() === true) {
          this.setWaiting(false);
        }

        if (value === this.playState) {
          return;
        }

        var previous = this.playState;
        this.playState = value;
        this.facade.transform(TransformType.PLAY_STATE, this.playState).then(function (result) {
          if (result == null || result === previous) {
            return;
          }

          _this2.sendNotification(Notifications.PLAY_STATE_CHANGE, {
            previous: previous,
            value: _this2.playState
          });

          switch (value) {
            case PlayState.PLAYING:
              return _this2.sendNotification(Notifications.DISPATCH_EVENT, Event.create("playing"));
          }
        })["catch"](function (error) {
          return _this2.sendNotification(Notifications.ERROR, error);
        });
      }
      /**
       * The player's device.
       *
       *
       * @returns {String}
       *    The display state of the player
       * @type {String}
       */

    }, {
      key: "getDevice",
      value: function getDevice() {
        return this.device;
      }
      /**
       * Indicates whether or not the player is seeking
       *
       * @param {Boolean} value
       *    The seeking flag
       * @returns {Boolean}
       *    The seeking flag
       * @type {Boolean}
       */

    }, {
      key: "getSeeking",
      value: function getSeeking() {
        return this.seeking;
      }
    }, {
      key: "setSeeking",
      value: function setSeeking(value) {
        if (value === this.seeking) {
          return;
        }

        this.seeking = value;

        if (this.seeking === false && this.playState === PlayState.PAUSED) {
          this.setWaiting(false);
        }
      }
      /**
       * Indicates whether or not a seek has been requested.
       * This is only set when a seek is requested while
       * a previously requested seek is in progress
       *
       * @param {Boolean} value
       *    The seekrequested flag
       * @returns {Boolean}
       *    The seekrequested flag
       * @type {Boolean}
       */

    }, {
      key: "getSeekRequested",
      value: function getSeekRequested() {
        return this.seekrequested;
      }
    }, {
      key: "setSeekRequested",
      value: function setSeekRequested(value) {
        if (value === this.seekrequested) {
          return;
        }

        this.seekrequested = value;
      }
      /**
       * Indicates whether or not the player is waiting
       *
       * @param {Boolean} value
       *    The waiting flag
       * @returns {Boolean}
       *    The waiting flag
       * @type {Boolean}
       */

    }, {
      key: "getWaiting",
      value: function getWaiting() {
        return this.waiting;
      }
    }, {
      key: "setWaiting",
      value: function setWaiting(value) {
        var _this3 = this;

        if (value === this.waiting) {
          return;
        }

        this.waiting = value;
        var note = this.waiting === true ? Notifications.ADD_APPLICATION_STATE : Notifications.REMOVE_APPLICATION_STATE;
        this.sendNotification(note, PlayState.WAITING);

        if (this.waiting === true) {
          var clear = function clear() {
            _this3.facade.removeEventListener("timeupdate", update);

            _this3.facade.removeEventListener("playing", handler);

            _this3.facade.removeEventListener("canplaythrough", handler);

            _this3.facade.removeEventListener("ended", handler);
          };

          var handler = function handler() {
            clear();

            _this3.setWaiting(false);
          };

          var update = function update(event) {
            if (_this3.facade.seeking === false) {
              handler();
            }
          };

          this.facade.addEventListener("timeupdate", update);
          this.facade.addEventListener("playing", handler);
          this.facade.addEventListener("canplaythrough", handler);
          this.facade.addEventListener("ended", handler);
        }
      }
      /**
       * Indicates whether or not the player is busy
       *
       * @param {Boolean} value
       *    The busy flag
       * @returns {Boolean}
       *    The busy flag
       * @type {Boolean}
       */

    }, {
      key: "getBusy",
      value: function getBusy() {
        return this.busy;
      }
    }, {
      key: "setBusy",
      value: function setBusy(value) {
        if (value === this.busy) {
          return;
        }

        this.busy = value;
        this.sendNotification(Notifications.DISPATCH_EVENT, Event.create("busy", value));
      }
      /**
       * Indicates whether or not the player is locked.
       * A lock player will not autoplay even if configured
       * to do so.
       *
       * @param {Boolean} value
       *    The locked flag
       * @returns {Boolean}
       *    The locked flag
       * @type {Boolean}
       */

    }, {
      key: "getLocked",
      value: function getLocked() {
        return this.locked;
      }
    }, {
      key: "setLocked",
      value: function setLocked(value) {
        this.locked = value;
      }
      /**
       * Indicates whether or not the player is buffering.
       *
       * @param {Boolean} value
       *    The buffering flag
       * @returns {Boolean}
       *    The buffering flag
       * @type {Boolean}
       */

    }, {
      key: "getBuffering",
      value: function getBuffering() {
        return this.buffering;
      }
    }, {
      key: "setBuffering",
      value: function setBuffering(value) {
        this.buffering = value;
      }
      /**
       * The medium the player is currently playing. Valid options are:
       *
       * "audio"
       * "video"
       *
       * @param {String} value
       *    The new medium
       *
       * @returns {String}
       *    The current medium
       *
       * @type {String}
       */

    }, {
      key: "getMedium",
      value: function getMedium() {
        return this.medium;
      }
    }, {
      key: "setMedium",
      value: function setMedium(value) {
        if (value === this.medium) {
          return;
        }

        var previous = this.medium != null ? "medium-" + this.medium : this.medium;
        this.medium = value;
        this.sendNotification(Notifications.MEDIUM_CHANGE, {
          previous: previous,
          value: "medium-".concat(this.medium)
        });
      }
      /**
       * The player's volume as a value between 0 and 1.
       *
       * @param {Number} value
       *    The new volume
       *
       * @returns {Number}
       *    The current volume
       *
       * @type {Number}
       */

    }, {
      key: "getVolume",
      value: function getVolume() {
        return this.volume;
      }
    }, {
      key: "setVolume",
      value: function setVolume(value) {
        if (value === this.volume) {
          return;
        }

        return this.volume = value;
      }
      /**
       * The playback target. i.e. "amp", "chromecast", "airplay"
       *
       * @param {Number} value
       *    The new volume
       *
       * @returns {Number}
       *    The current volume
       *
       * @type {Number}
       */

    }, {
      key: "getPlaybackTarget",
      value: function getPlaybackTarget() {
        return this.playbackTarget;
      }
    }, {
      key: "setPlaybackTarget",
      value: function setPlaybackTarget(value) {
        if (value === this.playbackTarget) {
          return;
        }

        var previous = this.playbackTarget;
        this.playbackTarget = value;

        if (value !== "amp") {
          if (this.getPlayState() !== PlayState.PAUSED) {
            this.facade.pause();
          }
        } else {
          if (this.getPlayState() === PlayState.PLAYING) {
            this.facade.play();
          }
        }

        this.sendNotification(Notifications.PLAYBACK_TARGET_CHANGE, {
          previous: previous,
          value: this.playbackTarget
        });
      }
      /**
       * The active state of the player. Used to display controls.
       *
       * @param {Boolean} value
       *    The new active state of the video
       * @returns {Boolean}
       *    The active state of the video
       * @type {Boolean}
       */

    }, {
      key: "getActiveState",
      value: function getActiveState() {
        return this.activeState;
      }
    }, {
      key: "setActiveState",
      value: function setActiveState(value) {
        if (value === this.activeState) {
          return;
        }

        var previous = this.activeState;
        this.activeState = value;
        this.sendNotification(Notifications.ACTIVE_STATE_CHANGE, {
          previous: previous,
          value: this.activeState
        });
      }
      /**
       * The player's media element
       *
       * @param {HTMLElement} value
       *    The new media element
       * @returns {HTMLElement}
       *    The media element
       * @type {HTMLElement}
       */

    }, {
      key: "getMediaElement",
      value: function getMediaElement() {
        return this.mediaElement;
      }
    }, {
      key: "setMediaElement",
      value: function setMediaElement(value) {
        if (value === this.mediaElement) {
          return;
        }

        var previous = this.mediaElement;

        if (previous != null) {
          value.volume = previous.volume;
          value.muted = previous.muted;
        }

        this.mediaElement = value;
        this.sendNotification(Notifications.MEDIA_ELEMENT_CHANGE, {
          previous: previous,
          value: this.mediaElement
        });
      }
      /**
       * The player's hidden state
       *
       * @param {Boolean} value
       *    The new hidden state
       * @returns {Boolean}
       *    The hidden state
       * @type {Boolean}
       */

    }, {
      key: "getHidden",
      value: function getHidden() {
        return this.hidden;
      }
    }, {
      key: "setHidden",
      value: function setHidden(value) {
        if (value === this.hidden) {
          return;
        }

        var previous = this.hidden;
        this.hidden = value;
        this.sendNotification(Notifications.HIDDEN_CHANGE, {
          previous: previous,
          value: this.hidden
        });
      }
      /**
       * The media's current time
       *
       * @param {Number} value
       *    The new current time
       * @returns {Number}
       *    The current time
       * @type {Number}
       */

    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
        return this.time.currentTime;
      }
    }, {
      key: "setCurrentTime",
      value: function setCurrentTime(value) {
        var duration = this.time.duration;
        var currentTime = value > 0 ? value : Math.abs(value / duration) || 0; // if live linear playhead gets out of the rolling window, we adjust it to very starting edge 

        if (currentTime === this.time.currentTime) {
          return;
        }

        this.time.currentTime = currentTime;
        this.sendNotification(Notifications.TIME_UPDATE, currentTime);
      }
      /**
       * The media's duration
       *
       * @param {Number} value
       *    The new duration
       * @returns {Number}
       *    The duration
       * @type {Number}
       */

    }, {
      key: "getDuration",
      value: function getDuration() {
        return this.time.duration;
      }
    }, {
      key: "setDuration",
      value: function setDuration(value) {
        if (value === this.time.duration) {
          return;
        }

        this.time.duration = value;
        this.sendNotification(Notifications.DURATION_CHANGE, value);
      }
      /**
       * The playback rate
       *
       * @param {Number} value
       *     The new playback rate
       * @returns {Number}
       *     The playback rate
       * @type {Number}
       */

    }, {
      key: "getPlaybackRate",
      value: function getPlaybackRate() {
        return this.playbackRate;
      }
    }, {
      key: "setPlaybackRate",
      value: function setPlaybackRate(value) {
        if (value === this.playbackRate) {
          return;
        }

        this.playbackRate = value;
        this.sendNotification(Notifications.PLAYBACK_RATE_CHANGE, value);
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "ApplicationStateProxy";
      }
    }]);
    return ApplicationStateProxy;
  }(puremvc.Proxy);

  /**
   * @enum {string}
   * @const
   * @private
   */
  var AuthEvents = {
    AUTHENTICATE: "authenticate",
    AUTHENTICATED: "authenticated",
    AUTHENTICATION_FAILED: "authenticationfailed",
    AUTHORIZE: "authorize",
    AUTHORIZED: "authorized",
    AUTHORIZATION_FAILED: "authorizationfailed",
    AUTHORIZATION_EXPIRED: "authorizationexpired",
    CHOOSE_PROVIDER: "chooseprovider",
    ASSET_AUTHORIZED: "assetauthorized",
    ASSET_AUTHORIZATION_FAILED: "assetauthorizationfailed"
  };

  var SecurityProxy = /*#__PURE__*/function (_puremvc$Proxy) {
    babelHelpers.inherits(SecurityProxy, _puremvc$Proxy);

    /**
     * Creates a new instance of SecurityProxy.
     *
     * @constructor
     * @private
     * @extends {puremvc.Proxy}
     */
    function SecurityProxy() {
      var _this;

      babelHelpers.classCallCheck(this, SecurityProxy);
      _this = _puremvc$Proxy.call(this, SecurityProxy.NAME, {}) || this;
      _this._authorized = true;
      _this._session = null;
      _this.data = null;
      _this.timeout = null;
      return _this;
    }
    /**
     * @static
     * @type {string}
     */


    babelHelpers.createClass(SecurityProxy, [{
      key: "setMedia",
      value:
      /** */
      function setMedia(media) {
        this.setSession(null);
        var authorized = media.status.state !== "blocked" && media.restriction.length === 0;
        this.setAuthorized(authorized);
        this.setAuthorization(media.authorization);
      }
      /** */

    }, {
      key: "authorize",
      value: function authorize(authorization) {
        this.setAuthorization(authorization);
        this.sendNotification(AuthEvents.AUTHORIZED, authorization);
      }
      /** */

    }, {
      key: "getAuthorization",
      value: function getAuthorization() {
        return this.data;
      }
    }, {
      key: "setAuthorization",
      value: function setAuthorization(value) {
        if ((value != null ? value.token : void 0) != null) {
          this.setAuthorized(true);
        }

        this.data = value || {};

        if (this.data.expiration != null) {
          this.setExpiration(this.data.expiration);
        }

        return value;
      }
      /** */

    }, {
      key: "getKey",
      value: function getKey() {
        return this.data.key;
      }
    }, {
      key: "setKey",
      value: function setKey(value) {
        this.data.key = value;
        return value;
      }
      /** */

    }, {
      key: "getToken",
      value: function getToken() {
        return this.data.token;
      }
    }, {
      key: "setToken",
      value: function setToken(value) {
        this.data.token = value;
        return value;
      }
      /** */

    }, {
      key: "getExpiration",
      value: function getExpiration() {
        return this.data.expiration;
      }
    }, {
      key: "setExpiration",
      value: function setExpiration(value) {
        this.data.expiration = value;

        if (this.data.expiration > Date.now()) {
          this.startTimeout();
        }

        return value;
      }
      /** */

    }, {
      key: "startTimeout",
      value: function startTimeout() {
        var _this2 = this;

        Utils.getUTC().then(function (time) {
          var timeout = function timeout() {
            _this2.sendNotification(AuthEvents.AUTHORIZATION_EXPIRED);

            _this2.sendNotification(AuthEvents.AUTHORIZE, {
              media: _this2.facade.getMedia()
            });
          };

          return _this2.timeout = _this2.facade.timers.setTimeout(timeout, _this2.getExpiration() - time);
        });
      }
      /** */

    }, {
      key: "stopTimeout",
      value: function stopTimeout() {
        clearTimeout(this.timeout);
      }
      /** */

    }, {
      key: "getSecret",
      value: function getSecret() {
        if (this.data == null || this.data.token == null) {
          return null;
        }

        var secret = "";

        if (this.data.token != null) {
          secret = "".concat(this.data.token);
        }

        if (this.data.key != null) {
          secret = "".concat(this.data.key, "=").concat(secret);
        }

        return secret;
      }
      /** */

    }, {
      key: "createURL",
      value: function createURL(url) {
        var secret = this.getSecret();

        if (secret != null) {
          url += !/\?/.test(url) ? "?" : "&";
          url += secret;
        }

        return url;
      }
      /** */

    }, {
      key: "getAuthorized",
      value: function getAuthorized() {
        return this._authorized;
      }
    }, {
      key: "setAuthorized",
      value: function setAuthorized(value) {
        this.stopTimeout();
        this._authorized = value;
        return value;
      }
      /** */

    }, {
      key: "authorized",
      get: function get() {
        return this.getAuthorized();
      }
      /** */

    }, {
      key: "getSession",
      value: function getSession() {
        return this._session;
      }
    }, {
      key: "setSession",
      value: function setSession(value) {
        this._session = value;
        return value;
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "SecurityProxy";
      }
    }]);
    return SecurityProxy;
  }(puremvc.Proxy);

  var ConfigurationProxy = /*#__PURE__*/function (_ModuleProxy) {
    babelHelpers.inherits(ConfigurationProxy, _ModuleProxy);

    /**
     * Creates a new instance of MediaProxy.
     *
     * @constructor
     * @private
     */
    function ConfigurationProxy(config) {
      var _this;

      babelHelpers.classCallCheck(this, ConfigurationProxy);
      _this = _ModuleProxy.call(this, config) || this;
      _this.defaults = Config.defaults;
      return _this;
    }
    /**
     * @static
     * @type {string}
     */


    babelHelpers.createClass(ConfigurationProxy, [{
      key: "getValueOf",
      value:
      /**
       *
       */
      function getValueOf(name) {
        var _this2 = this;

        var overrides = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var media = this.facade.getMedia() || {};
        var metadata = media.metadata || {};
        var config = metadata.config || {};

        var retrieve = function retrieve() {
          // The old approach was to put overrides directly on the media object
          var value = media[name];

          if (value != null) {
            return value;
          } // Then we created the media.metadata property to stop polluting the media object


          value = metadata[name];

          if (value != null) {
            return value;
          } // Then media metadata became an mess, so we defined a specific property for config overrides


          value = config[name];

          if (value != null) {
            return value;
          } // Additionally, plugins have their own configs which can override certain properties


          value = overrides[name];

          if (value != null) {
            return value;
          } // Now check the actual config data which is set by the ConfigurationProxy API


          value = _this2.data[name];

          if (value != null) {
            return value;
          } // Finally check the original data that was passed in at player creation


          value = _this2.config[name];

          if (value != null) {
            return value;
          }
        };

        try {
          return this.facade.evaluateBindings(retrieve());
        } catch (error) {
          return null;
        }
      }
      /**
       * Player ID
       */

    }, {
      key: "getPID",
      value: function getPID() {
        return this.data.pid;
      }
      /**
       * Plays iniline
       */

    }, {
      key: "getPlaysInline",
      value: function getPlaysInline() {
        return this.data.playsinline;
      }
      /**
       * Plays iniline
       */

    }, {
      key: "getMuted",
      value: function getMuted() {
        return this.getValueOf("muted");
      }
    }, {
      key: "setMuted",
      value: function setMuted(value) {
        this.data.muted = value;
        return value;
      }
      /**
       * With credentials
       */

    }, {
      key: "getWithCredentials",
      value: function getWithCredentials() {
        return this.getValueOf("withCredentials");
      }
    }, {
      key: "setWithCredentials",
      value: function setWithCredentials(value) {
        this.data.withCredentials = value;
        return value;
      }
      /**
       * Autoplay.
       */

    }, {
      key: "getAutoplay",
      value: function getAutoplay() {
        return this.getValueOf("autoplay");
      }
    }, {
      key: "setAutoplay",
      value: function setAutoplay(value) {
        this.data.autoplay = value;
        return value;
      }
      /**
       * Autoplay Policy.
       */

    }, {
      key: "getAutoplayPolicy",
      value: function getAutoplayPolicy() {
        return this.getValueOf("autoplayPolicy");
      }
    }, {
      key: "setAutoplayPolicy",
      value: function setAutoplayPolicy(value) {
        this.data.autoplayPolicy = value;
        return value;
      }
      /**
       * Loop.
       */

    }, {
      key: "getLoop",
      value: function getLoop() {
        return this.getValueOf("loop");
      }
    }, {
      key: "setLoop",
      value: function setLoop(value) {
        this.data.loop = value;
        return value;
      }
      /**
       * Settings.
       */

    }, {
      key: "getSettings",
      value: function getSettings() {
        return this.data.settings;
      }
    }, {
      key: "setSettings",
      value: function setSettings(value) {
        this.data.settings = value;
        return value;
      }
      /**
       * The player paths.
       */

    }, {
      key: "getPaths",
      value: function getPaths() {
        return this.data.paths;
      }
    }, {
      key: "setPaths",
      value: function setPaths(value) {
        this.data.paths = value;
        return value;
      }
      /**
       * The player version.
       */

    }, {
      key: "getVersion",
      value: function getVersion() {
        return this.data.version;
      }
      /**
       * Controls
       */

    }, {
      key: "getControls",
      value: function getControls() {
        return this.getValueOf("controls") === true;
      }
    }, {
      key: "setControls",
      value: function setControls(value) {
        this.data.controls = value;
        return value;
      }
      /**
       * Fullscreen configuration
       */

    }, {
      key: "getFullscreen",
      value: function getFullscreen() {
        return this.data.fullscreen || {};
      }
    }, {
      key: "setFullscreen",
      value: function setFullscreen(value) {
        this.data.fullscreen = value;
        return value;
      }
      /**
       * Language configuration
       */

    }, {
      key: "getLanguage",
      value: function getLanguage() {
        return this.data.language;
      }
      /**
       * Preload.
       */

    }, {
      key: "getPreload",
      value: function getPreload() {
        return this.getValueOf("preload");
      }
    }, {
      key: "setPreload",
      value: function setPreload(value) {
        this.data.preload = value;
        return value;
      }
    }], [{
      key: "NAME",
      get: function get() {
        return ModuleProxy.NAME;
      }
    }]);
    return ConfigurationProxy;
  }(ModuleProxy);

  var Track = /*#__PURE__*/function (_EventDispatcher) {
    babelHelpers.inherits(Track, _EventDispatcher);

    function Track() {
      var _this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      babelHelpers.classCallCheck(this, Track);
      _this = _EventDispatcher.call(this) || this;
      _this.data = data;
      Object.defineProperties(babelHelpers.assertThisInitialized(_this), {
        kind: {
          get: _this.getKind,
          enumerable: true,
          configurable: false
        },
        label: {
          get: _this.getLabel,
          enumerable: true,
          configurable: false
        },
        language: {
          get: _this.getLanguage,
          enumerable: true,
          configurable: false
        },
        id: {
          get: _this.getId,
          enumerable: true,
          configurable: false
        },
        enabled: {
          get: _this.getEnabled,
          set: _this.setEnabled,
          enumerable: true,
          configurable: false
        }
      });
      return _this;
    } // readonly attribute DOMString kind;


    babelHelpers.createClass(Track, [{
      key: "getKind",
      value: function getKind() {
        return this.data.kind;
      } // readonly attribute DOMString label;

    }, {
      key: "getLabel",
      value: function getLabel() {
        return this.data.label;
      } // readonly attribute DOMString language;

    }, {
      key: "getLanguage",
      value: function getLanguage() {
        return this.data.language;
      } // readonly attribute DOMString id;

    }, {
      key: "getId",
      value: function getId() {
        return this.data.id;
      }
    }, {
      key: "setEnabled",
      value: function setEnabled(value) {
        if (value === this.data.enabled) {
          return;
        }

        this.data.enabled = value;
        this.changeEnabled(value);
        this.dispatchEvent("change");
      }
    }, {
      key: "changeEnabled",
      value: function changeEnabled(value) {}
    }, {
      key: "getEnabled",
      value: function getEnabled() {
        return this.data.enabled;
      }
    }, {
      key: "flatten",
      value: function flatten() {
        return {
          kind: this.getKind(),
          label: this.getLabel(),
          language: this.getLanguage(),
          id: this.getId(),
          enabled: this.getEnabled()
        };
      }
    }]);
    return Track;
  }(EventDispatcher);

  var TrackMode = {
    SHOWING: "showing",
    HIDDEN: "hidden",
    DISABLED: "disabled"
  };

  /**
   * @enum {string}
   * @const
   * @private
   */
  var CaptioningNotifications = {
    VISIBILITY_CHANGE: "captioningvisibilitychange",
    ENABLED: "captioningenabled",
    TRACKS_LOADED: "captioningtracksloaded",
    TRACK_SELECTED: "captioningtrackselected",
    CHANGE_CUE: "captioningchangecue",
    CUE_CHANGE: "captioningcuechange",
    SETTINGS_VISIBILITY_CHANGE: "captioningsettingsvisibility",
    SETTINGS_CHANGE: "captioningsettingschange",
    TTML_CUE_CHANGE: "captioningttmlcuechange"
  };

  var Cue = /*#__PURE__*/function () {
    /**
     * The Cue class.
     *
     * @constructor
     * @private
     * @param {number} startTime  The start time of the cue in seconds
     * @param {number} endTime    The end time of the cue in seconds
     * @param {number} data       The cue data
     */
    function Cue(startTime) {
      var endTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.startTime;
      var data = arguments.length > 2 ? arguments[2] : undefined;
      var id = arguments.length > 3 ? arguments[3] : undefined;
      var style = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      babelHelpers.classCallCheck(this, Cue);
      this.startTime = startTime;
      this.endTime = endTime;
      this.data = data;
      this.id = id;
      this.style = style;
    }
    /** */


    babelHelpers.createClass(Cue, null, [{
      key: "create",
      value: function create(startTime, endTime, data, id, style) {
        return new Cue(startTime, endTime, data, id, style);
      }
    }]);
    return Cue;
  }();

  var CaptionCue = /*#__PURE__*/function (_Cue) {
    babelHelpers.inherits(CaptionCue, _Cue);

    function CaptionCue() {
      babelHelpers.classCallCheck(this, CaptionCue);
      return _Cue.apply(this, arguments) || this;
    }

    babelHelpers.createClass(CaptionCue, [{
      key: "text",
      get: function get() {
        return this.data.text;
      },
      set: function set(value) {
        this.data.text = value;
      }
    }, {
      key: "html",
      get: function get() {
        return this.data.html;
      },
      set: function set(value) {
        this.data.html = value;
      }
    }, {
      key: "raw",
      get: function get() {
        return this.data.raw;
      }
      /** */

    }], [{
      key: "create",
      value: function create(startTime, endTime, data, id, style) {
        return new CaptionCue(startTime, endTime, data, id, style);
      }
    }]);
    return CaptionCue;
  }(Cue);

  var XMLUtils = /*#__PURE__*/function () {
    function XMLUtils() {
      babelHelpers.classCallCheck(this, XMLUtils);
    }

    babelHelpers.createClass(XMLUtils, null, [{
      key: "createTextContent",
      value: function createTextContent(xml, text) {
        var node = /[\&<>]/.test(text) ? xml.createCDATASection(text) : xml.createTextNode(text);
        return node;
      }
    }, {
      key: "updateTextContent",
      value: function updateTextContent(node, str) {
        var text = XMLUtils.createTextContent(node.ownerDocument, str);
        node.removeChild(node.childNodes[0]);
        node.appendChild(text);
        return node;
      }
    }, {
      key: "serialize",
      value: function serialize(xml) {
        if (xml == null) {
          return;
        }

        if (typeof xml === "string") {
          return xml;
        }

        try {
          var serializer = new XMLSerializer();
          return serializer.serializeToString(xml);
        } catch (error) {}
      }
    }, {
      key: "parse",
      value: function parse(text) {
        var parser = new DOMParser();
        return parser.parseFromString(text, "application/xml");
      }
    }]);
    return XMLUtils;
  }();

  var SMPTETTParser = /*#__PURE__*/function () {
    function SMPTETTParser() {
      babelHelpers.classCallCheck(this, SMPTETTParser);
    }

    babelHelpers.createClass(SMPTETTParser, [{
      key: "parse",
      value:
      /**
       * Parses a SMPTETT file into CaptionCue objects and attaches them to a given track.
       *
       * @param   {XMLDocument}   xml   The SMPTETT xml document
       * @param   {CaptionTrack}  track The caption track to populate
       * @return  {CaptionTrack}        The populated caption track
       */
      function parse(xml) {
        var track = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CaptionTrack.create({
          kind: "captions",
          type: Utils.mimeTypes.ttml
        });
        var captions, styledElements, styles;

        if (typeof xml === "string") {
          // Styles
          xml = XMLUtils.parse(xml);
        }

        styles = Array.prototype.slice.call(xml.querySelectorAll("styling style"));
        styles.forEach(function (item, index, list) {
          var attributes, id, style;
          style = "";
          id = item.getAttribute("id") || item.getAttribute("xml:id");
          attributes = Array.prototype.slice.call(item.attributes);
          attributes.forEach(function (item, index, array) {
            if (item.prefix === "tts") {
              return style += Utils.toHyphenated(item.localName) + ":" + item.nodeValue + ";";
            }
          });
          track.styles[id] = style;
        });
        styledElements = Array.prototype.slice.call(xml.querySelectorAll("body [style]"));
        styledElements.forEach(function (item, index, array) {
          var id;
          id = item.getAttribute("style");
          item.setAttribute("style", track.styles[id]);
        });
        captions = Array.prototype.slice.call(xml.querySelectorAll("body p[begin]"));
        captions.forEach(function (item, index, array) {
          var align, cue, end, html, start, style, text; // get start time

          start = item.getAttribute("begin");
          item.removeAttribute("begin"); // get end time

          if (item.getAttribute("end") != null) {
            end = item.getAttribute("end");
            item.removeAttribute("end");
          } else if (captions[index + 1] != null) {
            end = captions[index + 1].getAttribute("begin");
          } // get alignment


          align = item.getAttributeNS("http://www.w3.org/ns/ttml#styling", "textAlign");

          if (align != null) {
            style = {
              align: align === "center" ? "middle" : align
            };
            item.removeAttributeNS("http://www.w3.org/ns/ttml#styling", "textAlign");
          } // get raw text


          text = XMLUtils.serialize(item); // get html for non-native implementations

          text = text.replace(/\s*xmlns="[^"]*"/, "");
          html = text; // get text for native implementations

          text = text.replace(/^<p[^>]*>/, "");
          text = text.replace(/<\/p>$/, "");
          text = text.replace(/<br\/>/, "\n");
          text = text.replace(/<span style="([^"]*)"/, "<c.$1");
          text = text.replace(/<\/span>/, "</c>"); // create generic cue

          cue = CaptionCue.create(Utils.flattenTimecode(start), Utils.flattenTimecode(end), {
            text: text,
            html: html
          }, "".concat(index), style); // add the cue to the track

          track.cues.push(cue);
        });
        return track;
      }
    }]);
    return SMPTETTParser;
  }();

  var SRTParser = /*#__PURE__*/function () {
    function SRTParser() {
      babelHelpers.classCallCheck(this, SRTParser);
    }

    babelHelpers.createClass(SRTParser, [{
      key: "parse",
      value:
      /**
       * Parses a SRT (subrip) file into CaptionCue objects and attaches them to a given track.
       *
       * @param   {String}        txt   The text of the srt file
       * @param   {CaptionTrack}  track The caption track to populate
       * @return  {CaptionTrack}        The populated caption track
       */
      function parse(txt) {
        var track = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CaptionTrack.create({
          kind: "captions",
          type: Utils.mimeTypes.srt
        });
        // replace windows line breaks
        txt = txt.replace(/\r/g, ''); // split up the caption chunks

        var captions = txt.split("\n\n");
        fp.each(captions, function (caption) {
          // split up the caption parts
          var parts = caption.split("\n");

          try {
            var index = parts[0];
            var times = parts[1].match(/([0-9:\,]+)\s*-->\s*([0-9:\,]+)/).slice(1);
            var start = Utils.flattenTimecode(times[0]);
            var end = Utils.flattenTimecode(times[1]);
            var text = parts.slice(2); // create generic cue

            var cue = CaptionCue.create(start, end, {
              text: text.join("\n"),
              html: "<p>" + text.join("<br />") + "</p>"
            }); // // add the cue to the track

            track.cues.push(cue);
          } catch (error) {
            Logger.instance.warn("SRT Parsing Warning");
          }
        });
        return track;
      }
    }]);
    return SRTParser;
  }();

  var WebVTTParser = /*#__PURE__*/function () {
    function WebVTTParser() {
      babelHelpers.classCallCheck(this, WebVTTParser);
    }

    babelHelpers.createClass(WebVTTParser, [{
      key: "parseCaption",
      value:
      /**
       * Parses a single WebVTT caption into a CaptionCue.
       *
       * @param   {String}        txt   The text of the caption
       * @return  {CaptionCue}          The CaptionCue
       */
      function parseCaption(caption) {
        var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        // split up the caption parts
        var parts = caption.trim().split("\n");
        var timecode = /([0-9:\.]+)\s*-->\s*([0-9:\.]+)([^\n]*)/;
        var setting = /\s*([A-Za-z]+)\s*:\s*([\w\-\%]+)/g;

        try {
          if (!timecode.test(parts[0])) {
            id = parts.shift();
          }

          var times = parts[0].match(timecode).slice(1);
          var settings = times[2];
          var start = Utils.flattenTimecode(times[0]);
          var end = Utils.flattenTimecode(times[1]);
          var lines = parts.slice(1); // parse the settings if they exists, and apply them to the cue

          if (settings != null) {
            settings.replace(setting, function (match, $1, $2) {
              style[$1] = $2;
              return "";
            });
          } // create generic cue


          var html = WebVTTParser.createHTML(lines);
          var text = lines.join("\n");
          var cue = CaptionCue.create(start, end, {
            text: text,
            html: html,
            raw: caption
          }, "".concat(id), style);
          Object.assign(cue, style);
          return cue;
        } catch (error) {
          Logger.instance.error("WebVTT Parse Error", error);
        }
      }
      /**
       * Parses a WebVTT file into CaptionCue objects and attaches them to a given track.
       *
       * @param   {String}        txt   The text of the webvtt file
       * @param   {CaptionTrack}  track The caption track to populate
       * @return  {CaptionTrack}        The populated caption track
       */

    }, {
      key: "parse",
      value: function parse(txt) {
        var _this = this;

        var track = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CaptionTrack.create({
          kind: "captions",
          type: Utils.mimeTypes.vtt
        });
        // replace windows line breaks
        txt = txt.replace(/\r/g, ''); // split up the caption chunks

        var captions = txt.split("\n\n");
        var index = 0;
        captions.forEach(function (caption) {
          // skip the document declaration line
          if (/^WEBVTT/.test(caption)) return; // skip blank lines

          if (caption == "") return; // skip note sections

          if (/^NOTE/.test(caption)) return; // handle inline styles

          if (/^STYLE/.test(caption)) {
            // TODO: properly parse style data and populate track and caption styles
            return;
          }

          var cue = _this.parseCaption(caption, ++index); // add the cue to the track


          track.cues.push(cue);
        });
        return track;
      }
    }], [{
      key: "createHTML",
      value:
      /**
       * Converts plain text with line breaks to HTML with <br /> tags.
       *
       * @param   {String|Array.<String>} txt The plain text, or array of plain text lines.
       * @return  {String}                    The HTML text
       */
      function createHTML(text) {
        if (typeof text === "string") text = text.split(/\n|\r/);
        return "<p>".concat(text.join("<br />"), "</p>");
      }
    }]);
    return WebVTTParser;
  }();

  var CaptionParsers = {
    "application/ttml+xml": new SMPTETTParser(),
    "application/x-subrip": new SRTParser(),
    "text/vtt": new WebVTTParser(),
    undefined: new SMPTETTParser()
  };

  var CueTrack = /*#__PURE__*/function (_Track) {
    babelHelpers.inherits(CueTrack, _Track);

    /**
     * The CaptionTrack class.
     *
     * @constructor
     * @private
     * @param {?Object} track A generic track object.
     */
    function CueTrack(data) {
      var _this;

      var cues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      babelHelpers.classCallCheck(this, CueTrack);
      _this = _Track.call(this, data) || this;
      _this.cues = cues;
      Object.defineProperties(babelHelpers.assertThisInitialized(_this), {
        "default": {
          get: _this.getDefault,
          set: _this.setDefault,
          enumerable: true,
          configurable: false
        }
      });
      return _this;
    }

    babelHelpers.createClass(CueTrack, [{
      key: "getDefault",
      value: function getDefault() {
        return !!this.data["default"];
      }
    }, {
      key: "setDefault",
      value: function setDefault(value) {
        if (value === this.data["default"]) {
          return;
        }

        this.data["default"] = !!value;
      }
    }, {
      key: "flatten",
      value: function flatten() {
        var track = babelHelpers.get(babelHelpers.getPrototypeOf(CueTrack.prototype), "flatten", this).call(this);
        return Object.assign({}, track, {
          "default": this.getDefault()
        });
      }
    }, {
      key: "getCueAt",
      value: function getCueAt(time) {
        return this.cues.find(function (cue) {
          return cue.startTime <= time && cue.endTime >= time;
        });
      }
      /** @static */

    }], [{
      key: "create",
      value: function create(track) {
        return new CueTrack(track);
      }
    }]);
    return CueTrack;
  }(Track);

  var CaptionTrack = /*#__PURE__*/function (_CueTrack) {
    babelHelpers.inherits(CaptionTrack, _CueTrack);

    /**
     * The CaptionTrack class.
     *
     * @constructor
     * @private
     * @param {?Object} track A generic track object.
     */
    function CaptionTrack(track, onload) {
      var _this;

      babelHelpers.classCallCheck(this, CaptionTrack);
      _this = _CueTrack.call(this, {
        kind: track.kind,
        label: track.label,
        language: track.srclang,
        "default": track["default"]
      }) || this;
      _this.src = track.src;
      _this.type = track.type;
      _this.cues = track.cues || [];
      _this.styles = track.styles || {};
      _this.activeCues = [];
      _this.isLive = /^live/.test(_this.type);
      var load = onload;

      if (_this.src && !_this.isLive) {
        load = function load() {
          return Utils.request(_this.src).then(function (xhr) {
            try {
              CaptionParsers[_this.type].parse(xhr.response, babelHelpers.assertThisInitialized(_this));
            } catch (error) {
              _this.dispatch("error", "Could not parse caption track: ".concat(_this.src));

              Logger.instance.error("Could not parse caption track: ".concat(_this.src));
              return;
            }

            if (typeof onload === "function") {
              onload(babelHelpers.assertThisInitialized(_this));
            }
          })["catch"](function (error) {
            _this.dispatch("error", "Could not load caption track: ".concat(error, ", ").concat(_this.src));

            Logger.instance.error("Could not load caption track: ".concat(error, ", ").concat(_this.src));
          });
        };
      }

      if (load != null) {
        Promise.resolve(babelHelpers.assertThisInitialized(_this)).then(load);
      }

      return _this;
    }
    /** @static */


    babelHelpers.createClass(CaptionTrack, null, [{
      key: "create",
      value: function create(track, onload) {
        return new CaptionTrack(track, onload);
      }
    }]);
    return CaptionTrack;
  }(CueTrack);

  var PluginProxy = /*#__PURE__*/function (_ModuleProxy) {
    babelHelpers.inherits(PluginProxy, _ModuleProxy);

    /**
     * The PluginProxy class.
     *
     * @param {Object} config
     * @constructor
     * @private
     * @extends {ModuleProxy}
     */
    function PluginProxy(config) {
      var _this;

      babelHelpers.classCallCheck(this, PluginProxy);
      _this = _ModuleProxy.call(this, config) || this;
      _this.enabled = true;
      _this.plugin = null;
      _this.appState = null;
      return _this;
    }
    /**
     * The name of the this Proxy.
     *
     * @static
     * @type {string}
     */


    babelHelpers.createClass(PluginProxy, [{
      key: "value",
      get:
      /** */
      function get() {
        return this.getValue();
      }
      /** */

    }, {
      key: "getDefaults",
      value: function getDefaults() {
        var defaults = babelHelpers.get(babelHelpers.getPrototypeOf(PluginProxy.prototype), "getDefaults", this).call(this);

        if (defaults.debug == null) {
          defaults.debug = null;
        }

        return defaults;
      }
      /** */

    }, {
      key: "getValue",
      value: function getValue(prop) {
        var value = this.facade.player.evaluateBindings(this.config);

        if (prop != null) {
          return value[prop];
        } else {
          return value;
        }
      }
      /** @override */

    }, {
      key: "initializeNotifier",
      value: function initializeNotifier(key) {
        babelHelpers.get(babelHelpers.getPrototypeOf(PluginProxy.prototype), "initializeNotifier", this).call(this, key);
        this.appState = this.facade.player.appState;
      }
      /** */

    }, {
      key: "getMediaElement",
      value: function getMediaElement() {
        return this.facade.player.getMediaElement();
      }
      /** */

    }, {
      key: "setEnabled",
      value: function setEnabled(value) {
        this.enabled = value;
        return value;
      }
    }, {
      key: "getEnabled",
      value: function getEnabled() {
        return this.enabled;
      }
      /** */

    }, {
      key: "getDebug",
      value: function getDebug() {
        if (this.value.debug != null) {
          return this.value.debug;
        } else {
          return this.facade.player.getConfig().debug === true;
        }
      }
      /** */

    }, {
      key: "createPlugin",
      value: function createPlugin() {}
      /** */

    }, {
      key: "initialize",
      value: function initialize() {
        this.plugin = this.createPlugin();
      }
      /** */

    }, {
      key: "error",
      value: function error(err) {
        this.facade.logger.error("[AMP ".concat(this.facade.getModuleName().toUpperCase(), " Error]"), err);
      }
    }], [{
      key: "NAME",
      get: function get() {
        return ModuleProxy.NAME;
      }
    }]);
    return PluginProxy;
  }(ModuleProxy);

  var LocalizationProxy = /*#__PURE__*/function (_puremvc$Proxy) {
    babelHelpers.inherits(LocalizationProxy, _puremvc$Proxy);

    /**
     * The LocalizationProxy class. Used to track player localization settings.
     *
     * @constructor
     * @private
     * @extends {puremvc.Proxy}
     * @param {Object}  init  The configuration object.
     */
    function LocalizationProxy(init) {
      var _this;

      babelHelpers.classCallCheck(this, LocalizationProxy);
      _this = _puremvc$Proxy.call(this) || this;
      _this.data = {
        "default": init.defaults.language,
        language: init.language,
        locales: [Config.locales]
      };
      _this.defaults = {};
      _this.locale = null;
      _this.localeId = null;
      return _this;
    }
    /**
     * The name of the this Proxy.
     *
     * @static
     * @type {string}
     */


    babelHelpers.createClass(LocalizationProxy, [{
      key: "initialize",
      value:
      /** */
      function initialize(plugins) {
        var _this2 = this;

        if (this.facade.config.locales != null) {
          this.addLocales(this.facade.config.locales, false);
        }

        plugins.forEach(function (key) {
          if (_this2.facade[key].locales != null) {
            _this2.addLocales(_this2.facade[key].locales, false);
          }
        });
        return this.compileLocale(this.data["default"]).then(function (defaults) {
          _this2.defaults = defaults;
          return _this2.setLanguage(_this2.data.language);
        });
      }
      /**
       *
       */

    }, {
      key: "getLanguage",
      value: function getLanguage() {
        return this.data.language;
      }
    }, {
      key: "setLanguage",
      value: function setLanguage(value) {
        var _this3 = this;

        return this.compileLocale(value).then(function (locale) {
          _this3.data.language = value;
          _this3.localeId = value.toLowerCase();
          _this3.locale = _this3.facade.l10n = locale;

          _this3.sendNotification(Notifications.LANGUAGE_CHANGE, value);
        });
      }
      /**
       *
       */

    }, {
      key: "compileLocale",
      value: function compileLocale(key) {
        var _this4 = this;

        return new Promise(function (resolve, reject) {
          if (!key) {
            return resolve({});
          }

          var localeId = key.toLowerCase();

          var localeIdShort = _this4.getLocaleIdShort(localeId);

          var find = function find(locale) {
            return locale[localeId] || locale[localeIdShort];
          };

          var exists = function exists(locale) {
            return locale != null;
          };

          var load = function load(locale) {
            if (typeof locale !== "string") {
              return locale;
            }

            return AMP.addResource({
              src: _this4.facade.evaluatePaths(locale),
              type: Utils.mimeTypes.json
            }).then(function (resource) {
              return resource.data;
            })["catch"](function (error) {
              return {};
            });
          };

          var locales = fp.transform(_this4.data.locales, fp.filter(exists), fp.map(find), fp.filter(exists), fp.map(load));
          Promise.all(locales).then(function (locales) {
            return resolve(Object.assign.apply(Object, [{}].concat(babelHelpers.toConsumableArray(locales))));
          });
        });
      }
      /**
       *
       */

    }, {
      key: "getLocaleId",
      value: function getLocaleId() {
        return this.localeId;
      }
      /**
       *
       */

    }, {
      key: "getLocaleIdShort",
      value: function getLocaleIdShort() {
        var localeId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.localeId;
        return (localeId || "").split("-").shift();
      }
      /**
       *
       */

    }, {
      key: "getLocales",
      value: function getLocales() {
        return this.data.locales;
      }
    }, {
      key: "setLocales",
      value: function setLocales(value) {
        this.data.locales = value;
        return value;
      }
      /**
       *
       */

    }, {
      key: "addLocales",
      value: function addLocales(value) {
        var _this5 = this;

        var refresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        if (value == null) {
          return Promise.resolve();
        }

        if (!(value instanceof Array)) {
          value = [value];
        }

        value.forEach(function (locale) {
          if (!(babelHelpers["typeof"](locale) === "object")) {
            return;
          }

          var obj = {};
          fp.each(locale, function (value, key) {
            return obj[key.toLowerCase()] = value;
          });

          _this5.data.locales.push(obj);
        });

        if (refresh === false) {
          return Promise.resolve();
        }

        return this.setLanguage(this.getLanguage());
      }
      /**
       *
       */

    }, {
      key: "getString",
      value: function getString(id, context) {
        if (id == null) {
          return;
        }

        if (!this.data.language) {
          return id;
        }

        try {
          var key = id.replace(/^MSG_/, "");
          var msg = "MSG_".concat(key);
          var dflt = this.defaults;
          var locale = this.locale || dflt;

          if (locale == null) {
            return id;
          }

          var str = locale[msg] || locale[key] || dflt[msg] || dflt[key] || id;
          str = this.facade.evaluateBindings(str, context);
          return str;
        } catch (error) {
          return id;
        }
      }
      /**
       * Retrieves the full language name in the player's current language setting.
       *
       * @param   {string}  lang  The language code.
       * @return  {string}        The full name of the language according to the player's current language setting.
       */

    }, {
      key: "getLanguageString",
      value: function getLanguageString(lang) {
        // bail if nothing useful was provided
        if (typeof lang !== "string" || lang == null || lang === "") {
          return "";
        } // try the full language code, which may have a regional sub code


        var key = "MSG_".concat(lang.toUpperCase());
        var str = this.getString(key); // try the just the language

        if (str === key) {
          lang = this.getLocaleIdShort(lang);
          key = "MSG_".concat(lang.toUpperCase());
          str = this.getString(key);
        }

        return str;
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "LocalizationProxy";
      }
    }]);
    return LocalizationProxy;
  }(puremvc.Proxy);

  var CaptionRenderer = {
    AUTO: "auto",
    HTML: "html",
    NATIVE: "native"
  };

  var regex = /subtitles|captions|descriptions/i;

  var CaptioningProxy = /*#__PURE__*/function (_PluginProxy) {
    babelHelpers.inherits(CaptioningProxy, _PluginProxy);

    /**
     * The CaptioningProxy class
     *
     * @constructor
     * @private
     * @extends {PluginProxy}
     * @param   {Object}  config  The configuration object.
     */
    function CaptioningProxy(config) {
      var _this;

      babelHelpers.classCallCheck(this, CaptioningProxy);
      _this = _PluginProxy.call(this, config) || this;
      _this.providers = {};
      _this.tracks = [];
      _this.rendererMap = [];
      _this.track = {};
      _this.defaults = {
        renderer: CaptionRenderer.AUTO,
        crossorigin: null
      };
      _this.enabled = false;
      _this.hidden = true;
      _this.captions = null;
      _this.loaded = true;
      return _this;
    }

    babelHelpers.createClass(CaptioningProxy, [{
      key: "onRegister",
      value: function onRegister() {
        this.renderer = this.getValue("renderer") || CaptionRenderer.AUTO;
      }
      /** @static */

    }, {
      key: "getCrossOrigin",
      value:
      /**
       *
       */
      function getCrossOrigin() {
        return this.getValue("crossorigin");
      }
      /**
       *
       */

    }, {
      key: "getTracks",
      value: function getTracks() {
        return this.tracks;
      }
    }, {
      key: "setTracks",
      value: function setTracks(value) {
        var _this2 = this;

        // reset the proxy members
        this.tracks = [];
        this.track = null;
        value = this.facade.player.evaluateBindings(value);

        if (value == null) {
          return;
        } // set up the loading helpers


        var getTracks = function getTracks() {
          return _this2.tracks;
        };

        var loaded = 0;

        var trackLoaded = function trackLoaded() {
          var tracks = getTracks();
          loaded++;

          if (loaded === tracks.length) {
            _this2.sendNotification(CaptioningNotifications.TRACKS_LOADED, tracks);

            _this2.autoSelectTrack();
          }
        }; // load the tracks


        var dflt;
        value.forEach(function (item) {
          if (!regex.test(item.kind) || !item.srclang) return;
          var track = CaptionTrack.create(item, trackLoaded);
          track.once("error", function (event) {
            return _this2.facade.dispatch(Events.TRACK_ERROR, event.data);
          });

          _this2.tracks.push(track);

          if (track["default"]) dflt = track;
        });
        if (dflt == null && this.tracks.length) this.tracks[0]["default"] = true;
        return value;
      }
      /** */

    }, {
      key: "registerRenderer",
      value: function registerRenderer(value) {
        if (value == null) {
          return;
        }

        value.proxy = this;
        this.rendererMap.push(value);
      }
      /** */

    }, {
      key: "retrieveRenderer",
      value: function retrieveRenderer(name) {
        return this.rendererMap.find(function (r) {
          return r.getRendererName() === name;
        });
      }
      /** */

    }, {
      key: "removeRenderer",
      value: function removeRenderer(name) {
        var value = this.retrieveRenderer(name);
        value.proxy = null;

        if (value == null) {
          return null;
        }

        var index = this.rendererMap.indexOf(value);
        this.rendererMap.splice(index, 1);
        return value;
      }
      /**
       *
       */

    }, {
      key: "getRenderer",
      value: function getRenderer() {
        return this.renderer;
      }
    }, {
      key: "setRenderer",
      value: function setRenderer(value) {
        if (value === this.renderer) {
          return value;
        }

        this.renderer = value;
        this.selectRenderer(this.facade.player.media);
        return value;
      }
    }, {
      key: "getCurrentRenderer",
      value: function getCurrentRenderer() {
        var mediator = this.facade.retrieveMediator(CaptioningProxy.TEXT_TRACK_RENDERER);
        return mediator && mediator.getRendererName();
      }
      /**
       *
       */

    }, {
      key: "selectRenderer",
      value: function selectRenderer() {
        var media = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var tracks = media.track || this.tracks;
        if (tracks == null) return; // get the customer defined renderer or default to auto detect

        var renderer = this.renderer;
        if (!this.rendererMap.map(function (r) {
          return r.getRendererName();
        }).includes(renderer)) renderer = CaptionRenderer.AUTO; // auto detect

        if (renderer === CaptionRenderer.AUTO) {
          renderer = fp.find(this.rendererMap, fp.filter(function (r) {
            return tracks.some(function (t) {
              return r.canUseResource(t);
            });
          }), // if the renderer can display one of the tracks
          fp.map(function (r) {
            return r.getRendererName();
          }) // get the name
          );
        } // check if the renderer is already loaded


        if (this.getCurrentRenderer() === renderer) {
          return;
        } // unload the current renderer


        this.facade.removeMediator(CaptioningProxy.TEXT_TRACK_RENDERER); // load the new renderer

        var mediator = this.retrieveRenderer(renderer);

        if (mediator != null) {
          this.facade.registerMediator(mediator);
        }
      }
      /**
       *
       */

    }, {
      key: "getTrack",
      value: function getTrack() {
        return this.track;
      }
    }, {
      key: "setTrack",
      value: function setTrack(value) {
        this.track = value;
        this.captions = this.track.cues;
        this.track.enabled = true;
        this.sendNotification(Notifications.CHANGE_SETTINGS, {
          captions: {
            track: this.track.flatten()
          }
        }); // TODO: Remove this in favor of Notifications.SETTINGS_CHANGE

        this.sendNotification(CaptioningNotifications.TRACK_SELECTED, this.track);
        return value;
      }
      /**
       *
       */

    }, {
      key: "selectTrackByIndex",
      value: function selectTrackByIndex(index) {
        var track = null;

        if (index >= 0 && index < this.tracks.length) {
          track = this.tracks[index];
          this.setTrack(track);
        }

        return track;
      }
      /**
       *
       */

    }, {
      key: "selectTrackByLanguage",
      value: function selectTrackByLanguage(lang) {
        var track = this.tracks.find(function (t) {
          return t.language === lang;
        });
        if (track != null) this.setTrack(track);
        return track;
      }
      /**
       *
       */

    }, {
      key: "getHidden",
      value: function getHidden() {
        return this.hidden;
      }
    }, {
      key: "setHidden",
      value: function setHidden(value) {
        this.hidden = value;
        return value;
      }
      /**
       *
       */

    }, {
      key: "getEnabled",
      value: function getEnabled() {
        return this.enabled;
      }
    }, {
      key: "setEnabled",
      value: function setEnabled(value) {
        this.enabled = value;
        return value;
      }
      /**
       *
       */

    }, {
      key: "autoSelectTrack",
      value: function autoSelectTrack() {
        // TODO: Should we auto select, or force the user to choose?
        var track = null;
        var lang = this.facade.player.retrieveProxy(LocalizationProxy.NAME).getLanguage();

        if (lang != null) {
          lang = lang.split("-").shift();
          track = this.selectTrackByLanguage(lang);
        }

        if (track == null) {
          track = this.tracks[0];
          this.setTrack(track);
        }

        return track;
      }
      /**
       *
       */

    }, {
      key: "getTextTracks",
      value: function getTextTracks() {
        return Array.from(this.facade.player.getMediaElement().textTracks);
      }
      /**
       *
       */

    }, {
      key: "getTextTrack",
      value: function getTextTrack() {
        var selected = this.getTrack();

        if (!selected) {
          return;
        }

        var kind = selected.kind;

        var exists = function exists(t) {
          return regex.test(t.kind) && (Utils.compareLanguageTags(t.language, lang) || !t.language.length);
        }; //Dash streams may not include languge


        var compare = function compare(a, b) {
          var weight = 0;

          if (a.kind === kind && b.kind !== kind) {
            weight++;
          }

          if (a.kind !== kind && b.kind === kind) {
            weight--;
          }

          if (Utils.compareLanguageTags(a.language, lang) && !Utils.compareLanguageTags(b.language, lang)) {
            weight++;
          }

          if (!Utils.compareLanguageTags(a.language, lang) && Utils.compareLanguageTags(b.language, lang)) {
            weight--;
          }

          if (a.mode !== TrackMode.SHOWING) {
            weight--;
          }

          return weight;
        };

        var lang = selected.language;
        if (lang != null) lang = lang.split("-").shift();
        var tracks = this.getTextTracks().filter(exists).sort(compare);
        return tracks[tracks.length - 1];
      }
    }], [{
      key: "NAME",
      get: function get() {
        return ModuleProxy.NAME;
      }
      /** @static */

    }, {
      key: "TEXT_TRACK_RENDERER",
      get: function get() {
        return "caption-text";
      }
    }]);
    return CaptioningProxy;
  }(PluginProxy);

  var PlaybackProxy = /*#__PURE__*/function (_puremvc$Proxy) {
    babelHelpers.inherits(PlaybackProxy, _puremvc$Proxy);

    /**
     * PlaybackProxy constructor.
     *
     * @constructor
     * @private
     * @extends {puremvc.Proxy}
     */
    function PlaybackProxy() {
      var _this;

      babelHelpers.classCallCheck(this, PlaybackProxy);
      _this = _puremvc$Proxy.call(this, PlaybackProxy.NAME) || this;
      _this.data = {
        core: null,
        muted: false,
        started: false,
        volume: 1,
        currentTime: 0,
        duration: 0,
        src: null,
        ended: false,
        paused: true,
        seeking: false,
        loading: false,
        waiting: false,
        keyErrored: false
      };
      _this.initialized = false;

      if (Utils.getDevice() === "desktop") {
        _this.initialized = true;
      }

      _this.handlers = {
        "timeupdate": _this.ontimeupdate.bind(babelHelpers.assertThisInitialized(_this)),
        "durationchange": _this.ondurationchange.bind(babelHelpers.assertThisInitialized(_this)),
        "play": _this.onplay.bind(babelHelpers.assertThisInitialized(_this)),
        "playing": _this.onplaying.bind(babelHelpers.assertThisInitialized(_this)),
        "pause": _this.onpause.bind(babelHelpers.assertThisInitialized(_this)),
        "loadeddata": _this.onloadeddata.bind(babelHelpers.assertThisInitialized(_this)),
        "waiting": _this.onwaiting.bind(babelHelpers.assertThisInitialized(_this)),
        "seeking": _this.onseeking.bind(babelHelpers.assertThisInitialized(_this)),
        "seeked": _this.onseeked.bind(babelHelpers.assertThisInitialized(_this)),
        "ended": _this.onended.bind(babelHelpers.assertThisInitialized(_this)),
        "progress": _this.onprogress.bind(babelHelpers.assertThisInitialized(_this)),
        "error": _this.onerror.bind(babelHelpers.assertThisInitialized(_this)),
        "loadstart": _this.onloadstart.bind(babelHelpers.assertThisInitialized(_this)),
        "canplay": _this.oncanplay.bind(babelHelpers.assertThisInitialized(_this)),
        "canplaythrough": _this.oncanplaythrough.bind(babelHelpers.assertThisInitialized(_this)),
        "loadedmetadata": _this.onloadedmetadata.bind(babelHelpers.assertThisInitialized(_this)),
        "stalled": _this.onstalled.bind(babelHelpers.assertThisInitialized(_this))
      };
      _this.resume = {
        event: Utils.getIEVersion() === -1 || Utils.getIEVersion() === 11 ? "loadedmetadata" : "canplaythrough",
        listener: _this.resumestart.bind(babelHelpers.assertThisInitialized(_this))
      };
      _this.textTrackHandlers = {
        "addtrack": _this.onaddtrack.bind(babelHelpers.assertThisInitialized(_this))
      };
      _this.onneedkey = _this.onneedkey.bind(babelHelpers.assertThisInitialized(_this));
      _this.enabled = null;
      _this.playWhenLoaded = false;
      _this.metadataloaded = false;
      _this.activeCuesIndex = 0;
      _this.id3CueType = null;
      return _this;
    }
    /**
     * The name of the this Proxy.
     *
     * @static
     * @type {string}
     */


    babelHelpers.createClass(PlaybackProxy, [{
      key: "getEnabled",
      value:
      /**
       * The current time of the video in seconds. Value must be between currentTime and duration.
       *
       * @param {Number} value
       *    The new currentTime value in seconds
       * @returns {Number}
       *    The currentTime value in seconds
       * @type {Number}
       */
      function getEnabled() {
        return this.enabled;
      }
    }, {
      key: "setEnabled",
      value: function setEnabled(value) {
        if (value === this.enabled) {
          return;
        }

        this.enabled = value;

        if (this.enabled === true) {
          this.init();
        } else {
          this.applyHandlers(false);
        }

        return value;
      }
      /** @private */

    }, {
      key: "applyHandlers",
      value: function applyHandlers() {
        var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var video = this.getMediaElement();
        var action = enabled ? "addEventListener" : "removeEventListener";
        fp.each(this.handlers, function (value, key) {
          video[action](key, value);
        });
      }
      /** @private */

    }, {
      key: "resumestart",
      value: function resumestart(event) {
        var _this2 = this;

        this.getMediaElement();
        this.handlers.durationchange(event);

        if (this.data.currentTime > 0 && this.data.ended !== true) {
          this.facade.timers.setTimeout(function () {
            _this2.seek(_this2.data.currentTime).then(_this2.resumecomplete.bind(_this2));
          }, 50);
        } else {
          this.resumecomplete();
        }
      }
      /** @private */

    }, {
      key: "resumecomplete",
      value: function resumecomplete() {
        this.data.loading = false;
        this.applyHandlers(true);

        if (this.playWhenLoaded === true) {
          this.facade.timers.setTimeout(this.play.bind(this), 1);
        }
      }
      /** @private */

    }, {
      key: "onaddtrack",
      value: function onaddtrack(event) {
        var _this3 = this;

        var track = event.track;

        if (this.facade.captioning == null && regex.test(track.kind)) {
          track.mode = TrackMode.HIDDEN;
        }

        if (track.kind !== "metadata") {
          return;
        }

        track.mode = TrackMode.HIDDEN;
        track.addEventListener("cuechange", function (event) {
          fp.each(event.target.activeCues, function (cue, i, cues) {
            if (cues[i - 1] === cue) {
              return;
            }

            _this3.sendNotification(Notifications.TIMED_METADATA, cue);
          });
        });
      }
    }, {
      key: "ontimeupdate",
      value: function ontimeupdate(event) {
        var currentTime = event.target.currentTime; // TODO: This should not be here.

        if (this.facade.ads.inProgress === true) {
          return;
        }

        this.data.currentTime = currentTime;
        this.sendNotification(Notifications.TIME_CHANGE, {
          currentTime: currentTime
        });
      }
    }, {
      key: "ondurationchange",
      value: function ondurationchange(event) {
        var duration = event.target.duration;

        if (!duration) {
          return;
        }

        this.data.duration = duration; //TODO: HACK! Android 4-7 returns the wrong duration for m3u8s

        if (/Android [4-7]/.test(navigator.userAgent) && this.getMediaElement().src.indexOf(".m3u8") !== -1 && duration === 2e308) {
          return;
        }

        this.sendNotification(Notifications.CHANGE_DURATION, duration);
      }
    }, {
      key: "onplay",
      value: function onplay(event) {
        this.data.paused = false;
      }
    }, {
      key: "onplaying",
      value: function onplaying(event) {
        this.data.paused = false;
        this.data.seeking = false;
        this.data.waiting = false;
        this.sendNotification(Notifications.PLAYING);
      }
    }, {
      key: "onpause",
      value: function onpause(event) {
        if (this.getMediaElement().ended === true || this.facade.playState === PlayState.READY) {
          return;
        } // HACK: HTML-1150 - To prevent bubbling pause notification on waiting.


        if (this.data.waiting === true && this.playbackCoreName === "hls") {
          return;
        }

        this.data.paused = true;

        if (event.target.readyState > 0) {
          this.sendNotification(Notifications.PAUSED);
          this.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.PAUSED);
        }
      }
    }, {
      key: "onloadeddata",
      value: function onloadeddata(event) {
        this.sendNotification(Notifications.LOADED_DATA);
      }
    }, {
      key: "onwaiting",
      value: function onwaiting(event) {
        this.data.waiting = true;
        this.sendNotification(Notifications.WAITING);
        var video = this.getMediaElement();

        if (video.seeking === false && video.readyState === 2 && video.networkState === 2) {
          video.once("playing", this.sendNotification.bind(this, Notifications.BUFFERING_CHANGE, false));
          this.sendNotification(Notifications.BUFFERING_CHANGE, true);
        }
      }
    }, {
      key: "onstalled",
      value: function onstalled(event) {
        this.sendNotification(Notifications.STALLED);
      }
    }, {
      key: "onseeking",
      value: function onseeking(event) {
        this.getMediaElement().removeEventListener("timeupdate", this.handlers.timeupdate); // AMPWEB-866: This is the best available solution to.
        // See final ticket comment from @jgirard for details.

        var currentTime = event.target.currentTime;
        this.sendNotification(Notifications.TIME_CHANGE, {
          currentTime: currentTime
        });
        this.data.seeking = true;
        this.sendNotification(Notifications.SEEKING);
      }
    }, {
      key: "onseeked",
      value: function onseeked(event) {
        this.data.seeking = false;
        this.sendNotification(Notifications.SEEK_COMPLETE, event.target.currentTime);
        this.getMediaElement().addEventListener("timeupdate", this.handlers.timeupdate);
      }
    }, {
      key: "onended",
      value: function onended(event) {
        this.data.ended = true;
        this.sendNotification(Notifications.ENDED);
      }
    }, {
      key: "onprogress",
      value: function onprogress(event) {
        try {
          var video = this.getMediaElement();
          var buffered = video.buffered;
          this.sendNotification(Notifications.PROGRESS, buffered.end(buffered.length - 1) / video.duration);
        } catch (error) {}
      }
    }, {
      key: "onerror",
      value: function onerror(event) {
        var error = this.getMediaElement().error;
        this.sendNotification(Notifications.ERROR, this.facade.createMediaError(error.code, error));
      }
    }, {
      key: "onloadstart",
      value: function onloadstart(event) {
        this.sendNotification(Notifications.LOAD_START);
      }
    }, {
      key: "oncanplay",
      value: function oncanplay(event) {
        this.sendNotification(Notifications.CAN_PLAY);
      }
    }, {
      key: "oncanplaythrough",
      value: function oncanplaythrough(event) {
        this.createTracks();
        this.sendNotification(Notifications.CAN_PLAY_THROUGH);
        this.sendNotification(Notifications.PROGRESS, this.getDuration());
      }
    }, {
      key: "onloadedmetadata",
      value: function onloadedmetadata(event) {
        this.metadataloaded = true;
        this.sendNotification(Notifications.ENABLE_FULL_SCREEN);
        this.sendNotification(Notifications.LOADED_METADATA);
      }
    }, {
      key: "applyTextTrackHandlers",
      value: function applyTextTrackHandlers(data) {
        var action = data === true ? "addEventListener" : "removeEventListener";
        var tracks = this.getMediaElement().textTracks;

        if (tracks != null) {
          tracks[action]("addtrack", this.textTrackHandlers.addtrack);
        }
      }
      /** @override */

    }, {
      key: "createTracks",
      value: function createTracks() {
        var _this4 = this;

        var audio = this.getMediaElement().audioTracks;
        var tracks = this.facade.tracks.getAudioTracks();

        function changeEnabled(track) {
          var tracks = this.facade.tracks.getAudioTracks();
          tracks.some(function (item) {
            item.data.enabled = item.id == track.id;
          });
        }

        if (audio != null) {
          var count = audio.length || 0;
          fp.each(audio, function (item, index) {
            if (Utils.fieldIsUnique(tracks, 'id', item.id) === false) {
              return;
            }

            var track = new Track(item);
            track.changeEnabled = changeEnabled.bind(_this4, track);
            tracks.add(track, index + 1 === count);
          });
        }
      }
      /** @private */

    }, {
      key: "reset",
      value: function reset() {
        this.data.currentTime = 0;
        this.data.duration = 0;
        this.data.src = null;
        this.data.ended = false;
        this.data.paused = false;
        this.data.seeking = false;
        this.data.started = false;
        this.data.loading = false;
        this.applyTextTrackHandlers(false);
      }
      /**
       * @return {boolean}
       */

    }, {
      key: "getStarted",
      value: function getStarted() {
        return this.data.started;
      }
      /**
       * The playback core
       *
       * @param {HTMLVideoElement} value
       *    The new playback core
       * @returns {HTMLVideoElement}
       *    The playback core
       * @type {HTMLVideoElement}
       *
       * @private
       */

    }, {
      key: "getMediaElement",
      value: function getMediaElement() {
        return this.facade.getMediaElement();
      }
      /**
       *
       */

    }, {
      key: "canPlayMedium",
      value: function canPlayMedium(medium) {
        return medium === "video";
      }
      /**
       *
       */

    }, {
      key: "canPlayTemporalType",
      value: function canPlayTemporalType(temporalType) {
        return temporalType !== "dvr";
      }
      /**
       * Determines if the core can play a given mimeType.
       *
       * @return {String} "" if the core can't play the mimeType
       */

    }, {
      key: "canPlayType",
      value: function canPlayType(mimeType) {
        var canPlay = document.createElement("video").canPlayType(mimeType) || ""; //TODO: HACK. Fix for andrioid 4.1.2+ not returning "maybe"

        if ((/Android (4\.[1-9]|[5-6])/.test(navigator.userAgent) || /Silk\/3/.test(navigator.userAgent)) && mimeType === Utils.mimeTypes.m3u8) {
          canPlay = "maybe";
        } //TODO: HACK. Fix for UCBrowser+ returning "probably" for Flash Sources


        if (canPlay === "probably" && /video\/f4m|x-flv/.test(mimeType) && /UCBrowser/.test(navigator.userAgent)) {
          canPlay = "";
        }

        return canPlay;
      }
      /**
       * Indicates whether or not the video is playing.
       *
       * @returns {Boolean}
       *    The playing value
       * @type {Boolean}
       */

    }, {
      key: "getPaused",
      value: function getPaused() {
        return this.data.paused;
      }
      /**
       * Indicates whether or not the video is playing.
       *
       * @returns {Boolean}
       *    The playing value
       * @type {Boolean}
       */

    }, {
      key: "getSeeking",
      value: function getSeeking() {
        return this.data.seeking;
      }
      /**
       * The current time of the video in seconds. Value must be between currentTime and duration.
       *
       * @param {Number} value
       *    The new currentTime value in seconds
       * @returns {Number}
       *    The currentTime value in seconds
       * @type {Number}
       */

    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
        return this.data.currentTime;
      }
    }, {
      key: "setCurrentTime",
      value: function setCurrentTime(value) {
        if (value === this.data.currentTime) {
          return;
        }

        this.data.currentTime = value;

        if (this.getStarted()) {
          this.seek(value);
        }

        return value;
      }
      /** */

    }, {
      key: "getCurrentTimeUTC",
      value: function getCurrentTimeUTC() {
        var config = this.facade.retrieveProxy(ConfigurationProxy.NAME);
        var startDate = config.getValueOf("startDate");
        var utc = 0;

        if (startDate != null) {
          utc = Math.round(startDate + this.getCurrentTime() * 1000);
        }

        return utc;
      }
      /** */

    }, {
      key: "toUTC",
      value: function toUTC(value) {
        if (!isFinite(value)) {
          return value;
        }

        var utc = this.getCurrentTimeUTC();

        if (utc === 0) {
          return value;
        }

        var time = this.getCurrentTime();
        var offset = Math.round((value - time) * 1000);
        return utc + offset;
      }
      /** */

    }, {
      key: "fromUTC",
      value: function fromUTC(value) {
        if (!isFinite(value)) {
          return value;
        }

        var utc = this.getCurrentTimeUTC();

        if (utc === 0) {
          return value;
        }

        var time = this.getCurrentTime();
        var offset = (value - utc) / 1000;
        return time + offset;
      }
      /** @private */

    }, {
      key: "seek",
      value: function seek() {
        var _this5 = this;

        var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data.currentTime;
        return new Promise(function (resolve, reject) {
          try {
            var video = _this5.getMediaElement();

            var seeked = function seeked() {
              // NOTE: Call resolve after the seeked event has fired at the player level.
              _this5.facade.timers.setTimeout(resolve, 10, time);
            };

            video.once("seeked", seeked);
            video.currentTime = time; // HACK Android Chrome seeked event not firing

            var ua = navigator.userAgent;

            if (/Android.*Chrome/.test(ua)) {
              var interval = _this5.facade.timers.setInterval(function () {
                if (Math.round(video.currentTime) === Math.round(time)) {
                  _this5.facade.timers.clearInterval(interval);

                  video.dispatchEvent(new CustomEvent("seeked"));
                }
              }, 10);
            }
          } catch (error) {
            reject(error);
          }
        });
      }
      /** */

    }, {
      key: "goLive",
      value: function goLive() {
        var mediaElement = this.getMediaElement();
        var time = mediaElement.duration === 2e308 ? mediaElement.seekable.end(0) : mediaElement.duration;
        mediaElement.currentTime = time;
      }
      /**
       * The current time of the video in seconds. Value must be between currentTime and duration.
       *
       * @param {Number} value
       *    The new currentTime value in seconds
       * @returns {Number}
       *    The currentTime value in seconds
       * @type {Number}
       */

    }, {
      key: "getVolume",
      value: function getVolume() {
        var mediaElement = this.getMediaElement();

        if (mediaElement.muted === true) {
          return 0;
        } else {
          return mediaElement.volume;
        }
      }
    }, {
      key: "setVolume",
      value: function setVolume(value, type) {
        if (this.getMuted() && value > 0) {
          this.setMuted(false, false);
        } else if (!this.getMuted() && value === 0) {
          this.setMuted(true, false);
        }

        this.sendNotification(Notifications.VOLUME_CHANGE, this.getMediaElement().volume = value, type);
        return value;
      }
      /** */

    }, {
      key: "getMuted",
      value: function getMuted() {
        return this.data.muted;
      }
    }, {
      key: "setMuted",
      value: function setMuted(value) {
        var changeVolume = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var type = arguments.length > 2 ? arguments[2] : undefined;

        if (this.data.muted === value) {
          return;
        }

        this.data.muted = value;
        var volume = this.data.volume;

        if (this.data.muted === true) {
          this.data.volume = this.getVolume();
          volume = 0;
        }

        this.getMediaElement().muted = value;

        if (changeVolume === true) {
          this.sendNotification(Notifications.CHANGE_VOLUME, volume);
          this.sendNotification(Notifications.VOLUME_CHANGE, volume, type);
        }

        this.sendNotification(Notifications.MUTE_CHANGE, this.data.muted);
        return value;
      }
      /**
       * The duration of the video in seconds.
       *
       * @returns {Number}
       *    The duration of the video
       * @type {Number}
       */

    }, {
      key: "getDuration",
      value: function getDuration() {
        return this.data.duration;
      }
      /**
       * Instructs the core to play.
       */

    }, {
      key: "play",
      value: function play() {
        var _this6 = this;

        this.sendNotification(Notifications.WAITING);

        if (this.data.started !== true) {
          this.data.started = true;
          this.setEnabled(true);
          this.playWhenLoaded = true;

          if (this.metadataloaded === false) {
            return;
          }
        } else if (this.data.loading === true) {
          this.playWhenLoaded = true;
          return;
        }

        if (this.getPaused()) {
          this.sendNotification(Notifications.RESUME);
        }

        Promise.resolve(this.getMediaElement().play())["catch"](function (error) {
          return AutoplayThreshold.value(true).then(function (threshold) {
            _this6.sendNotification(Notifications.REMOVE_APPLICATION_STATE, PlayState.WAITING);

            return _this6.sendNotification(Notifications.AUTOPLAY_BLOCKED, {
              threshold: threshold,
              policy: _this6.facade.autoplayPolicy
            });
          });
        });
      }
      /**
       * Instructs the core to pause.
       */

    }, {
      key: "pause",
      value: function pause() {
        this.data.paused = true;
        this.getMediaElement().pause();
      }
    }, {
      key: "getSrc",
      value: function getSrc() {
        return this.facade.mediaProxy.getSrc();
      }
      /**
       * Instructs the core to initailize.
       */

    }, {
      key: "init",
      value: function init() {
        this.data.loading = true;
        this.playWhenLoaded = false;
        this.metadataloaded = false;
        var element = this.getMediaElement();
        this.resume.id = element.once(this.resume.event, this.resume.listener);
        element.addEventListener("loadedmetadata", this.handlers.loadedmetadata);
        element.addEventListener("durationchange", this.handlers.durationchange);
        element.addEventListener("canplaythrough", this.handlers.canplaythrough);
        element.addEventListener("webkitneedkey", this.onneedkey);
        element.addEventListener("error", this.handlers.error);
        this.applyTextTrackHandlers(true);
        this.applySrc();
      }
      /**
       * Preload
       */

    }, {
      key: "preload",
      value: function preload() {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.facade.getPreload();

        if (value === Preload.NONE) {
          return;
        }

        var element = this.getMediaElement();
        element.preload = value;
        this.setEnabled(true);
      }
      /**
       * Instructs the core to load.
       */

    }, {
      key: "load",
      value: function load() {
        var element = this.getMediaElement(); //HACK: Delay the load for IPAD IOS 7.1 and lower ver

        var ver = Utils.getIOSversion() || [];

        if (Utils.isIPad() && ver[0] < 8) {
          this.facade.timers.setTimeout(element.load.bind(element), 100);
        } else {
          element.load();
        }
      }
    }, {
      key: "unload",
      value: function unload() {}
    }, {
      key: "applySrc",
      value: function applySrc() {
        var src = this.getSrc();

        if (src == null || src === "") {
          this.sendNotification(Notifications.ERROR, "The value of src is not supported: " + value);
          return;
        }

        var element = this.getMediaElement();
        element.src = src;
        var muted = element.muted;

        if (muted === true) {
          this.data.muted = true;
        }

        this.load();
      }
    }, {
      key: "setQuality",
      value: function setQuality(value) {}
    }, {
      key: "getQuality",
      value: function getQuality() {}
    }, {
      key: "getQualityLevels",
      value: function getQualityLevels() {
        return [];
      }
    }, {
      key: "getQualityMode",
      value: function getQualityMode() {}
    }, {
      key: "setQualityMode",
      value: function setQualityMode(value) {}
    }, {
      key: "setMaxQualityLevel",
      value: function setMaxQualityLevel(value) {}
    }, {
      key: "getMaxQualityLevel",
      value: function getMaxQualityLevel() {}
    }, {
      key: "destroy",
      value: function destroy() {
        this.applyHandlers(false);
        var element = this.getMediaElement();
        element.removeEventListener(this.resume.event, element[this.resume.id]);
        element.removeEventListener("webkitneedkey", this.onneedkey);

        if (element.textTracks != null) {
          element.textTracks.removeEventListener("addtrack", this.textTrackHandlers.addtrack);
        }
      }
      /**
      The EME specification (https://dvcs.w3.org/hg/html-media/raw-file/tip/encrypted-media/encrypted-media.html)
      is supported starting OSX 10.10 and greater.
      */

    }, {
      key: "onneedkey",
      value: function onneedkey(event) {
        var _this7 = this;

        var video = event.target;
        var keySystem = Utils.getKeySystem();
        var keys = this.facade.mediaProxy.getKeys()[KeySystem.FAIRPLAY];
        var fps = this.facade.fps;
        var disallowRetries = fps.allowKeyErrorRetries === false;

        if (keys == null || keySystem.indexOf(KeySystem.FAIRPLAY) === -1) {
          return;
        }

        if (this.keyErrored && disallowRetries) {
          this.getMediaElement().removeEventListener("webkitneedkey", this.onneedkey);
          return;
        }

        var initData = event.initData; // contentId is passed up as a URI, from which the host must be extracted:

        var contentId = fps.extractContentId(initData, keys);
        var serverUrl = fps.extractServerUrl(initData, keys);
        fps.requestCertificate(keys).then(function (cert) {
          return fps.concatInitDataIdAndCertificate(initData, contentId, cert);
        }).then(function (initData) {
          if (!WebKitMediaKeys.isTypeSupported(KeySystem.FAIRPLAY, "video/mp4")) {
            throw "Key System not supported";
          }

          if (video.webkitKeys == null) {
            video.webkitSetMediaKeys(new WebKitMediaKeys(KeySystem.FAIRPLAY));
          }

          if (video.webkitKeys == null) {
            throw "Could not create MediaKeys";
          }

          var session = video.webkitKeys.createSession("video/mp4", initData);

          if (session == null) {
            throw "Could not create key session";
          }

          session.addEventListener("webkitkeymessage", function (event) {
            fps.requestLicense(event.message, contentId, serverUrl, keys).then(function (key) {
              session.update(key);
            })["catch"](function (error) {
              session.close();
              _this7.keyErrored = true;

              _this7.facade.logger.error("[AMP DRM] A key request error was encountered.", error);
            });
          });
          session.addEventListener("webkitkeyadded", function (event) {
            _this7.facade.logger.log("[AMP DRM] Decryption key was added to session.");
          });
          session.addEventListener("webkitkeyerror", function (event) {
            _this7.sendNotification(Notifications.ERROR, {
              message: "A decryption key error was encountered for key system " + babelHelpers.toConsumableArray(keySystem),
              detail: event
            });

            session.close();
            _this7.keyErrored = true;

            _this7.facade.logger.log("[AMP DRM] A decryption key error was encountered.", event);
          });
        })["catch"](function (error) {
          _this7.facade.logger.error(error);
        });
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "PlaybackProxy";
      }
    }]);
    return PlaybackProxy;
  }(puremvc.Proxy);

  var PlaybackCoreProxy = /*#__PURE__*/function (_PlaybackProxy) {
    babelHelpers.inherits(PlaybackCoreProxy, _PlaybackProxy);

    /**
     * PlaybackCoreProxy constructor.
     *
     * @constructor
     * @private
     * @extends {PlaybackProxy}
     */
    function PlaybackCoreProxy() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var plugin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      babelHelpers.classCallCheck(this, PlaybackCoreProxy);
      _this = _PlaybackProxy.call(this) || this;
      _this.playbackCoreName = "default";
      _this.config = config;
      _this.plugin = plugin;
      _this.supportedTypes = null;

      if (_this.config.types != null) {
        _this.supportedTypes = _this.config.types;
      }

      _this.temporalTypes = ["vod", "live", "ondemand"];
      _this.decryptionTypes = [KeySystem.FAIRPLAY, KeySystem.CLEARKEY]; // keep loaders avail if before playback cores get fully avail 

      if (PlaybackCoreProxy._customLoaders == null) PlaybackCoreProxy._customLoaders = [];
      return _this;
    }

    babelHelpers.createClass(PlaybackCoreProxy, [{
      key: "customLoaders",
      get: function get() {
        return PlaybackCoreProxy.getCustomLoaders();
      }
      /** */

    }, {
      key: "renderer",
      value: function renderer() {
        var _this2 = this;

        var id = this.playbackCoreName;

        var canPlay = function canPlay(media) {
          return _this2.canPlayMedium(media.medium) === true && _this2.canPlayTemporalType(media.temporalType) === true && _this2.canPlayType(media.type) !== "" && _this2.canPlayDRM(media.keys) !== "";
        };

        var factory = function factory(player) {
          return Promise.resolve(_this2);
        };

        return {
          id: id,
          canPlay: canPlay,
          factory: factory
        };
      }
      /** */

    }, {
      key: "onRegister",
      value: function onRegister() {
        this.mediaProxy = this.facade.retrieveProxy(MediaProxy.NAME);
      }
      /** */

    }, {
      key: "getPlaybackCoreName",
      value: function getPlaybackCoreName() {
        return this.playbackCoreName;
      }
      /** */

    }, {
      key: "getSupportedTypes",
      value: function getSupportedTypes() {
        return this.supportedTypes || [];
      }
      /** */

    }, {
      key: "setSupportedTypes",
      value: function setSupportedTypes(types) {
        this.supportedTypes = types;
        return types;
      }
      /** */

    }, {
      key: "getTemporalTypes",
      value: function getTemporalTypes() {
        return this.temporalTypes || [];
      }
    }, {
      key: "getDecryptionTypes",
      value: function getDecryptionTypes() {
        return this.decryptionTypes || [];
      }
      /** */

    }, {
      key: "setTemporalTypes",
      value: function setTemporalTypes(types) {
        this.temporalTypes = types;
        return types;
      }
      /** @override */

    }, {
      key: "canPlayTemporalType",
      value: function canPlayTemporalType(temporalType) {
        return this.getTemporalTypes().indexOf(temporalType) !== -1;
      }
      /** @override */

    }, {
      key: "canPlayType",
      value: function canPlayType(mimeType) {
        if (this.supportedTypes != null) {
          if (this.getSupportedTypes().indexOf(mimeType) !== -1) {
            return "maybe";
          } else {
            return "";
          }
        } else {
          return babelHelpers.get(babelHelpers.getPrototypeOf(PlaybackCoreProxy.prototype), "canPlayType", this).call(this, mimeType);
        }
      }
    }, {
      key: "canPlayDRM",
      value: function canPlayDRM(keys) {
        var decryptionTypes = this.getDecryptionTypes();
        var availableKeySystem = Utils.getKeySystem() || [];

        var isEmpty = function isEmpty(obj) {
          return fp.transform(Object.keys(obj), fp.filter(function (key) {
            return obj.hasOwnProperty(key);
          })).length === 0;
        };

        if (keys == null || isEmpty(keys)) return 'maybe';
        return fp.find(Object.keys(keys), fp.filter(function (key) {
          return decryptionTypes.indexOf(key) !== -1;
        }), fp.filter(function (key) {
          return availableKeySystem.indexOf(key) !== -1;
        }), fp.map(function (r) {
          return r ? "maybe" : "";
        })) || "";
      }
      /**
       * XMLHttpRequest loader
       * @name customLoader
       * @function
       */

      /** 
       * 
       * @override 
       * @param {customLoader} loader - callback function
       * @param {string} name - Playback core name of the loader 
       * @param {string} type - optional config core type 
       */

    }, {
      key: "registerCustomLoader",
      value: function registerCustomLoader(loader) {
        var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.playbackCoreName;
        var type = arguments.length > 2 ? arguments[2] : undefined;
        return this.customLoaders.push({
          loader: loader,
          name: name,
          type: type
        });
      }
    }, {
      key: "getActiveLoaders",
      value: function getActiveLoaders() {
        var _this3 = this;

        return fp.transform(this.customLoaders, fp.filter(function (loader) {
          return loader.name === _this3.playbackCoreName;
        }));
      }
    }, {
      key: "removeCustomLoader",
      value: function removeCustomLoader(index) {
        if (index > -1) return this.customLoaders.splice(index, 1);
      }
    }], [{
      key: "getCustomLoaders",
      value: function getCustomLoaders() {
        return PlaybackCoreProxy._customLoaders;
      }
    }]);
    return PlaybackCoreProxy;
  }(PlaybackProxy);

  var DVRPlaybackProxy = /*#__PURE__*/function (_PlaybackCoreProxy) {
    babelHelpers.inherits(DVRPlaybackProxy, _PlaybackCoreProxy);

    /**
     * DVRPlaybackProxy constructor.
     *
     * @constructor
     * @private
     * @extends {PlaybackCoreProxy}
     */
    function DVRPlaybackProxy() {
      var _this;

      babelHelpers.classCallCheck(this, DVRPlaybackProxy);
      _this = _PlaybackCoreProxy.call(this) || this;
      _this.playbackCoreName = "dvr";
      _this.interval = null;
      return _this;
    }
    /** @override */


    babelHelpers.createClass(DVRPlaybackProxy, [{
      key: "ondurationchange",
      value: function ondurationchange(event) {
        this.updateDuration();
      }
      /** @override */

    }, {
      key: "ontimeupdate",
      value: function ontimeupdate(event) {
        this.updateCurrentTime();
      }
      /** @override */

    }, {
      key: "onplay",
      value: function onplay(event) {
        this.stopTimer();
        babelHelpers.get(babelHelpers.getPrototypeOf(DVRPlaybackProxy.prototype), "onplay", this).call(this, event);
      }
      /** @override */

    }, {
      key: "onplaying",
      value: function onplaying(event) {
        this.stopTimer();
        babelHelpers.get(babelHelpers.getPrototypeOf(DVRPlaybackProxy.prototype), "onplaying", this).call(this, event);
      }
      /** @override */

    }, {
      key: "onpause",
      value: function onpause(event) {
        this.startTimer();
        babelHelpers.get(babelHelpers.getPrototypeOf(DVRPlaybackProxy.prototype), "onpause", this).call(this, event);
      }
      /** @override */

    }, {
      key: "canPlayTemporalType",
      value: function canPlayTemporalType(temporalType) {
        return temporalType === "dvr";
      }
      /** */

    }, {
      key: "getDuration",
      value: function getDuration() {
        var mediaElement = this.getMediaElement();

        if (mediaElement.duration === 2e308) {
          this.updateDuration();
        }

        return this.data.duration;
      }
      /** */

    }, {
      key: "getStartTime",
      value: function getStartTime() {
        return this.getMediaElement().seekable.start(0);
      }
      /** */

    }, {
      key: "getFragmentDuration",
      value: function getFragmentDuration() {
        var config = this.facade.retrieveProxy(ConfigurationProxy.NAME);
        var fragmentDuration = config.getValueOf("fragmentDuration");
        return fragmentDuration || 10;
      }
      /** */

    }, {
      key: "getLiveTime",
      value: function getLiveTime() {
        return this.getDuration() - this.getFragmentDuration();
      }
      /** */

    }, {
      key: "isLive",
      value: function isLive() {
        return this.getStartTime() + this.getCurrentTime() >= this.getLiveTime();
      }
      /** @override */

    }, {
      key: "seek",
      value: function seek(value) {
        var _this2 = this;

        return babelHelpers.get(babelHelpers.getPrototypeOf(DVRPlaybackProxy.prototype), "seek", this).call(this, value + this.getStartTime()).then(function (time) {
          _this2.sendNotification(Notifications.IS_LIVE, _this2.isLive());
        });
      }
      /** */

    }, {
      key: "updateCurrentTime",
      value: function updateCurrentTime() {
        var seekable = this.getMediaElement().seekable;

        if (seekable.length === 0) {
          return;
        }

        var currentTime = this.getMediaElement().currentTime;
        this.data.currentTime = currentTime - seekable.start(0);
        this.sendNotification(Notifications.TIME_CHANGE, {
          currentTime: this.data.currentTime
        });
        this.mediaProxy.setIsLive(this.isLive());
      }
      /** */

    }, {
      key: "updateDuration",
      value: function updateDuration() {
        var seekable = this.getMediaElement().seekable;

        if (seekable.length === 0) {
          return;
        }

        this.data.duration = seekable.end(0) - seekable.start(0);
        this.sendNotification(Notifications.CHANGE_DURATION, this.data.duration);
      }
      /** */

    }, {
      key: "startTimer",
      value: function startTimer() {
        this.interval = this.facade.timers.setInterval(this.updateCurrentTime.bind(this), 1000);
      }
      /** */

    }, {
      key: "stopTimer",
      value: function stopTimer() {
        if (this.interval != null) {
          this.facade.timers.clearInterval(this.interval);
          this.interval = null;
          this.updateCurrentTime();
        }
      }
    }]);
    return DVRPlaybackProxy;
  }(PlaybackCoreProxy);

  var ClassList = /*#__PURE__*/function () {
    /**
     * The ClassList class.
     *
     * @param {!DOMElement}  element
     *    The DOM Element
     *
     * @constructor
     */
    function ClassList(element) {
      babelHelpers.classCallCheck(this, ClassList);
      this.element = element;
      this.prefix = "amp-";
    }
    /** */


    babelHelpers.createClass(ClassList, [{
      key: "contains",
      value: function contains(className) {
        return this.constructor.contains(className, this.element, this.prefix);
      }
      /** */

    }, {
      key: "add",
      value: function add(className) {
        this.constructor.add(className, this.element, this.prefix);
      }
      /** */

    }, {
      key: "remove",
      value: function remove(className) {
        this.constructor.remove(className, this.element, this.prefix);
      }
      /** */

    }, {
      key: "toggle",
      value: function toggle(className) {
        return this.constructor.contains(className, this.element, this.prefix);
      }
      /** */

    }], [{
      key: "contains",
      value: function contains(className, element) {
        var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
        return element.classList.contains(prefix + className);
      }
      /** */

    }, {
      key: "add",
      value: function add(className, element) {
        var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
        element.classList.add(prefix + className);
      }
      /** */

    }, {
      key: "remove",
      value: function remove(className, element) {
        var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
        element.classList.remove(prefix + className);
      }
      /** */

    }, {
      key: "toggle",
      value: function toggle(className, element) {
        var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
        element.classList.toggle(prefix + className);
      }
    }]);
    return ClassList;
  }();

  var UI = /*#__PURE__*/function () {
    function UI() {
      babelHelpers.classCallCheck(this, UI);
    }

    babelHelpers.createClass(UI, null, [{
      key: "create",
      value:
      /**
       * Creates an HTML element.
       *
       * @param   {?(string|Array.<string>)}  type
       * @param   {?DOMElement}  parent
       * @param   {?string|DOMElement}  element
       * @param   {?string} text
       * @return  {DOMElement}
       */
      function create(type, parent) {
        var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "div";
        var text = arguments.length > 3 ? arguments[3] : undefined;

        if (typeof element === "string") {
          element = document.createElement(element);
        }

        var classList = new ClassList(element);

        if (type != null) {
          if (typeof type === "string") {
            type = [type];
          }

          type.forEach(function (item) {
            return classList.add(item);
          });
        }

        element._classList = classList;

        if (text != null) {
          element.textContent = text;
        }

        if (parent != null) {
          var viewComponent;

          if (parent.getViewComponent != null) {
            viewComponent = parent.getViewComponent();
          }

          if (viewComponent != null) {
            parent = viewComponent;
          }

          parent.appendChild(element);
        }

        return element;
      }
      /**
       * Creates a DOM element.
       *
       * @param   {?string}  type
       * @param   {?Object}  props
       * @param   {?Array.<string|Object>}  children
       * @return  {DOMElement}
       */

    }, {
      key: "createElement",
      value: function createElement(type, props, children) {
        if (type && babelHelpers["typeof"](type) == "object") {
          props = type;
          children = type.children;
          type = type.type;
        }

        if (!type) type = "div";
        if (!props) props = {};
        if (!children) children = [];
        var element = document.createElement(type);
        var propList = ["innerHTML", "className"];
        var ignore = ["type", "children"];
        fp.each(props, function (value, key) {
          if (ignore.includes(key)) return;
          if (propList.includes(key)) return element[key] = value;
          if (key === "style" && value && babelHelpers["typeof"](value) === "object") value = CSS.toCSS(value);
          element.setAttribute(key, value);
        });
        children.forEach(function (child) {
          var type = babelHelpers["typeof"](child);

          if (child == null) {
            return;
          }

          if (type === "string") {
            child = document.createTextNode(child);
          } else if (type === "object") {
            if (child instanceof Array) return;
            child = UI.createElement(child);
          } else {
            return;
          }

          element.appendChild(child);
        });
        return element;
      }
      /**
       * Binds a mediators event handlers to an element.
       *
       * @param {!DOMElement} element
       * @param {!mediator} mediator
       */

    }, {
      key: "bindEvents",
      value: function bindEvents(element, handlers) {
        var exceptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ["onRemove", "onRegister"];
        fp.each(handlers, function (value, key) {
          if (!exceptions.includes(key) && /^on/.test(key) && value && value.bind) {
            element[key] = value.bind(handlers);
          }
        });
      }
    }]);
    return UI;
  }();

  var ModuleMediator = /*#__PURE__*/function (_puremvc$Mediator) {
    babelHelpers.inherits(ModuleMediator, _puremvc$Mediator);

    /**
     * The ModuleMediator class.
     *
     * @param {string} name
     * @param {Object} viewComponent
     * @constructor
     * @private
     * @extends {puremvc.Mediator}
     */
    function ModuleMediator(name, viewComponent) {
      var _this;

      babelHelpers.classCallCheck(this, ModuleMediator);
      _this = _puremvc$Mediator.call(this, name, viewComponent) || this;
      _this.mediatorName = name;
      _this.config = null;
      _this.classList = null;
      return _this;
    }
    /** @override */


    babelHelpers.createClass(ModuleMediator, [{
      key: "initializeNotifier",
      value: function initializeNotifier(key) {
        babelHelpers.get(babelHelpers.getPrototypeOf(ModuleMediator.prototype), "initializeNotifier", this).call(this, key);
        var base = this.facade.player || this.facade;
        this.config = base.retrieveProxy(ModuleProxy.NAME);
        this.classList = new ClassList(this.viewComponent);
      }
    }]);
    return ModuleMediator;
  }(puremvc.Mediator);

  var LocalizedMediator = /*#__PURE__*/function (_ModuleMediator) {
    babelHelpers.inherits(LocalizedMediator, _ModuleMediator);

    /**
     * @constructor
     * @private
     */
    function LocalizedMediator(name, viewComponent) {
      var _this;

      babelHelpers.classCallCheck(this, LocalizedMediator);
      _this = _ModuleMediator.call(this, name, viewComponent) || this;
      _this.localizationManager = null;
      return _this;
    }
    /** @override */


    babelHelpers.createClass(LocalizedMediator, [{
      key: "initializeNotifier",
      value: function initializeNotifier(key) {
        babelHelpers.get(babelHelpers.getPrototypeOf(LocalizedMediator.prototype), "initializeNotifier", this).call(this, key);
        var target = this.facade.player || this.facade;
        this.localizationManager = target.retrieveProxy(LocalizationProxy.NAME);
      }
    }]);
    return LocalizedMediator;
  }(ModuleMediator);

  var ComponentMediator = /*#__PURE__*/function (_LocalizedMediator) {
    babelHelpers.inherits(ComponentMediator, _LocalizedMediator);

    /**
     * @constructor
     * @extends {LocalizedMediator}
     * @private
     */
    function ComponentMediator(componentName, componentType, parent, element) {
      var _this;

      babelHelpers.classCallCheck(this, ComponentMediator);
      _this = _LocalizedMediator.call(this, componentName || Utils.createUID()) || this;
      _this.componentType = componentType;
      _this.parent = parent;
      _this.element = element;
      _this.componentName = null;

      if (componentName != null) {
        _this.componentName = componentName;
      }

      if (_this.mediatorName == null) {
        _this.mediatorName = _this.createMediatorName();
      }

      _this.classList = null;
      _this.state = null;
      _this.disabled = false;
      return _this;
    }
    /** */


    babelHelpers.createClass(ComponentMediator, [{
      key: "onRegister",
      value: function onRegister() {
        if (this.viewComponent != null) return;
        this.viewComponent = this.createViewComponent(this.parent, this.element);
        this.classList = this.viewComponent._classList;
        UI.bindEvents(this.viewComponent, this);
      }
      /** */

    }, {
      key: "createViewComponent",
      value: function createViewComponent(parent, element) {
        var type = this.getTypeList();
        return UI.create(type, parent, element);
      }
      /** */

    }, {
      key: "createMediatorName",
      value: function createMediatorName() {
        var type = this.getTypeList();
        type.push("mediator");
        type.push(Utils.createUID());
        return type.join("-");
      }
      /** */

    }, {
      key: "getTypeList",
      value: function getTypeList() {
        var type = [];

        if (this.componentName != null) {
          type.push(this.componentName);
        }

        if (this.componentType != null) {
          type = type.concat(this.componentType);
        }

        return type;
      }
      /** */

    }, {
      key: "create",
      value: function create(type) {
        var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
        var element = arguments.length > 2 ? arguments[2] : undefined;
        var text = arguments.length > 3 ? arguments[3] : undefined;

        if (parent === false) {
          parent = null;
        }

        return UI.create(type, parent, element, text);
      }
      /** */

    }, {
      key: "createText",
      value: function createText(type, text) {
        var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;
        var element = arguments.length > 3 ? arguments[3] : undefined;
        return UI.create(type, parent, element, text);
      }
      /** */

    }, {
      key: "setState",
      value: function setState(value) {
        if (value === this.state) {
          return;
        }

        if (this.state != null) {
          this.classList.remove(this.state);
        }

        this.state = value;

        if (this.state != null) {
          this.classList.add(this.state);
        }

        return value;
      }
      /** */

    }, {
      key: "getState",
      value: function getState() {
        return this.state;
      }
      /** */

    }, {
      key: "setDisabled",
      value: function setDisabled(value) {
        if (value === this.disabled) {
          return;
        }

        this.disabled = value;

        if (this.disabled) {
          this.classList.add("disabled");
        } else {
          this.classList.remove("disabled");
        }

        return value;
      }
      /** */

    }, {
      key: "getDisabled",
      value: function getDisabled() {
        return this.disabled;
      }
    }]);
    return ComponentMediator;
  }(LocalizedMediator);

  var MediaElementMediator = /*#__PURE__*/function (_ComponentMediator) {
    babelHelpers.inherits(MediaElementMediator, _ComponentMediator);

    /**
     * @constructor
     * @private
     * @extends {ComponentMediator}
     */
    function MediaElementMediator(componentName, viewComponent) {
      var _this;

      babelHelpers.classCallCheck(this, MediaElementMediator);
      _this = _ComponentMediator.call(this, componentName, "media-element", null, viewComponent) || this;
      _this.mediatorName = "".concat(_this.componentType, "-mediator");
      _this.created = false;
      return _this;
    }

    babelHelpers.createClass(MediaElementMediator, [{
      key: "onRegister",
      value: function onRegister() {
        if (this.created !== true) {
          this.created = true;
          babelHelpers.get(babelHelpers.getPrototypeOf(MediaElementMediator.prototype), "onRegister", this).call(this);
        }
      }
    }]);
    return MediaElementMediator;
  }(ComponentMediator);

  var AudioPlaybackProxy = /*#__PURE__*/function (_PlaybackCoreProxy) {
    babelHelpers.inherits(AudioPlaybackProxy, _PlaybackCoreProxy);

    /**
     * AudioPlaybackProxy constructor.
     *
     * @constructor
     * @private
     * @extends {PlaybackCoreProxy}
     */
    function AudioPlaybackProxy() {
      var _this;

      babelHelpers.classCallCheck(this, AudioPlaybackProxy);
      _this = _PlaybackCoreProxy.call(this) || this;
      _this.playbackCoreName = "audio";
      return _this;
    }
    /** @override */


    babelHelpers.createClass(AudioPlaybackProxy, [{
      key: "onRegister",
      value: function onRegister() {
        var mediaElement = new MediaElementMediator("html5", "audio");
        this.sendNotification(Notifications.PLAYBACK_CORE_CHANGE, mediaElement);
        babelHelpers.get(babelHelpers.getPrototypeOf(AudioPlaybackProxy.prototype), "onRegister", this).call(this);
      }
      /** @override */

    }, {
      key: "onRemove",
      value: function onRemove() {
        this.facade.createMediaElement();
      }
      /**
       *
       */

    }, {
      key: "canPlayMedium",
      value: function canPlayMedium(medium) {
        return medium === "audio";
      }
      /** @override */

    }, {
      key: "canPlayType",
      value: function canPlayType(mimeType) {
        if (/audio/.test(mimeType)) {
          return "maybe";
        } else if (/mpegURL/.test(mimeType) && (Utils.isIOS() || Utils.getSafariVersion() !== -1)) {
          return "maybe";
        }

        return "";
      }
    }]);
    return AudioPlaybackProxy;
  }(PlaybackCoreProxy);

  var PlayerProxy = /*#__PURE__*/function (_puremvc$Proxy) {
    babelHelpers.inherits(PlayerProxy, _puremvc$Proxy);

    /**
     * Creates a new instance of PlayerProxy.
     *
     * @constructor
     * @private
     * @extends {puremvc.Proxy}
     */
    function PlayerProxy(defaultPlaybackCore, config) {
      var _this;

      babelHelpers.classCallCheck(this, PlayerProxy);
      _this = _puremvc$Proxy.call(this) || this;
      _this.defaultPlaybackCore = defaultPlaybackCore;
      _this.activePlaybackCore = null;
      _this.renderers = [];

      if (_this.getPlaybackOrder == null) {
        var defaultPlaybackOrder = function defaultPlaybackOrder(order) {
          var playbackOrder = config.playbackOrder || [];

          if (playbackOrder.length > 0) {
            return playbackOrder;
          } else if (/Edge|Android/.test(navigator.userAgent)) {
            return ["audio", "hls", "dash", "dvr", "default"];
          }
        };

        _this.getPlaybackOrder = config.getPlaybackOrder || defaultPlaybackOrder;
      }

      _this.canPlay = _this.canPlay.bind(babelHelpers.assertThisInitialized(_this));
      return _this;
    }
    /**
     * The name of the this Proxy.
     *
     * @static
     * @type {string}
     */


    babelHelpers.createClass(PlayerProxy, [{
      key: "onRegister",
      value:
      /** */
      function onRegister() {
        babelHelpers.get(babelHelpers.getPrototypeOf(PlayerProxy.prototype), "onRegister", this).call(this);
        this.registerPlaybackCore(new DVRPlaybackProxy());
        this.registerPlaybackCore(this.defaultPlaybackCore);
        this.registerPlaybackCore(new AudioPlaybackProxy());
        this.activePlaybackCore = this.defaultPlaybackCore;
      } // sort core map after plugins have registered

    }, {
      key: "ready",
      value: function ready() {
        if (typeof this.getPlaybackOrder !== "function") {
          return;
        }

        var order = this.getPlaybackOrder(this.renderers.map(function (r) {
          return r.id;
        }));

        if (order == null) {
          return;
        }

        this.renderers = this.renderers.sort(function (a, b) {
          a = order.indexOf(a.id);
          b = order.indexOf(b.id);

          if (a === b) {
            return 0;
          }

          if (a === -1 && b !== -1) {
            return 1;
          }

          if (a !== -1 && b === -1) {
            return -1;
          }

          return a - b;
        });
      }
      /** */

    }, {
      key: "getActivePlaybackCore",
      value: function getActivePlaybackCore() {
        return this.activePlaybackCore;
      }
      /** */

    }, {
      key: "registerPlaybackCore",
      value: function registerPlaybackCore(core) {
        this.registerRenderer(core.renderer());
      }
      /** */

    }, {
      key: "registerRenderer",
      value: function registerRenderer(renderer) {
        var id = renderer.id;

        if (this.renderers[id] != null) {
          return;
        }

        this.renderers.push(renderer);
        this.renderers[id] = renderer;
      }
      /** */

    }, {
      key: "retrieveRenderer",
      value: function retrieveRenderer(name) {
        return this.renderers[name];
      }
      /** */

    }, {
      key: "retrieveRendererFor",
      value: function retrieveRendererFor(media) {
        var _this2 = this;

        var factories = fp.transform(this.renderers, fp.filter(function (r) {
          return r.canPlay(media);
        }), // filter out renderers that can't play the media
        fp.map(function (r) {
          return r.factory;
        }) // return just the renderer's factory function
        );
        return Utils.first(factories, this.facade).then(function (renderer) {
          return renderer === _this2.facade ? null : renderer;
        });
      }
      /** */

    }, {
      key: "removeRenderer",
      value: function removeRenderer(name) {
        if (this.renderers[name] == null) {
          return;
        }

        var item = this.renderers[name];
        var index = this.renderers.indexOf(item);
        this.renderers.splice(index, 1);
        delete this.renderers[name];
        return item;
      }
      /** */

    }, {
      key: "setPlaybackCore",
      value: function setPlaybackCore(media) {
        var _this3 = this;

        return this.retrieveRendererFor(media).then(function (core) {
          if (core == null) {
            throw _this3.facade.createMediaError(MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED);
          }

          var playbackProxy = _this3.facade.retrieveProxy(PlaybackProxy.NAME);

          if (playbackProxy !== core) {
            if (typeof playbackProxy.destroy === "function") {
              playbackProxy.destroy();
            }

            _this3.facade.removeProxy(PlaybackProxy.NAME);

            _this3.facade.registerProxy(core);

            core.setData(playbackProxy.getData());
          } else {
            if (typeof playbackProxy.unload === "function") {
              playbackProxy.unload();
            }
          }

          _this3.activePlaybackCore = core;
          return core;
        });
      }
      /** */

    }, {
      key: "canPlay",
      value: function canPlay(media) {
        return this.renderers.some(function (r) {
          return r.canPlay(media);
        });
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "PlayerProxy";
      }
    }]);
    return PlayerProxy;
  }(puremvc.Proxy);

  var MediaProxy = /*#__PURE__*/function (_puremvc$Proxy) {
    babelHelpers.inherits(MediaProxy, _puremvc$Proxy);

    /**
     * Creates a new instance of MediaProxy. Used to track metadata associated with the video such as src, title and duration.
     *
     * @constructor
     * @private
     * @extends {puremvc.Proxy}
     */
    function MediaProxy(config) {
      var _this;

      babelHelpers.classCallCheck(this, MediaProxy);
      _this = _puremvc$Proxy.call(this) || this;
      _this.data = {
        metadata: {}
      };
      _this.applyDefaults = _this.applyDefaults.bind(babelHelpers.assertThisInitialized(_this));
      _this.started = false;
      return _this;
    }
    /**
     * The name of the this Proxy.
     *
     * @static
     * @type {string}
     */


    babelHelpers.createClass(MediaProxy, [{
      key: "getData",
      value:
      /**
       * Sets the data for this proxy.
       *
       * @param {Object} value
       *    The new data for this proxy
       * @override
       */
      function getData() {
        var data = Utils.clone(babelHelpers.get(babelHelpers.getPrototypeOf(MediaProxy.prototype), "getData", this).call(this));

        if (data.authorization == null) {
          data.authorization = Utils.clone(this.facade.security.data);
        }

        return data;
      }
      /**
       * Sets the data for this proxy.
       *
       * @param {Object} value
       *    The new data for this proxy
       * @override
       */

    }, {
      key: "setData",
      value: function setData(value) {
        if (this.data != null && this.facade.getCurrentTime() < this.facade.getDuration()) {
          this.sendNotification(Notifications.MEDIA_SEQUENCE_ABORTED);
        }

        this.started = false;
        this.setAutoplay(value.autoplay);
        this.setType(value.type);
        this.setIsLive(value.isLive);
        this.setTemporalType(value.temporalType);

        if (value.source != null) {
          this.setSource(value.source);
        }

        if (value.src != null) {
          this.setSrc(value.src);
        }

        this.setTitle(value.title);
        this.setDuration(value.duration);
        this.setPoster(value.poster);
        this.setGUID(value.guid);
        this.setLink(value.link);
        this.setEmbed(value.embed);
        this.setWidth(value.width);
        this.setHeight(value.height);
        this.setCategory(value.category);
        this.setStartTime(value.startTime);
        this.setDescription(value.description);
        this.setStatus(value.status);
        this.setCategory(value.category);
        this.setMetadata(value.metadata);
        this.setAuthorization(value.authorization);
        this.setMedium(value.medium);
        this.setPubDate(value.pubDate);
        this.setTrack(value.track);
        this.setScenes(value.scenes);
        this.setKeys(value.keys);
        this.setCues(value.cues);
        this.setRestriction(value.restriction);
        return this.data;
      }
      /**
       *
       */

    }, {
      key: "applyDefaults",
      value: function applyDefaults(media) {
        if (media.medium == null) {
          media.medium = /audio/.test(media.type) ? "audio" : "video";
        }

        if (media.temporalType == null) {
          media.temporalType = "vod";
        }

        media.isLive = media.temporalType === "live" || media.temporalType === "dvr";
        var source = media.source;

        if (media.src == null && source) {
          var playerProxy = this.facade.retrieveProxy(PlayerProxy.NAME);

          if (playerProxy != null) {
            var item = Utils.selectSource(media, playerProxy.canPlay);

            if (item && item.src) {
              media.src = item.src;
              media.type = item.type;
            }
          }
        }

        if (media.type == null) {
          media.type = Utils.getMimeType(media.src);
        }

        var scenes = media.scenes;

        if (scenes != null) {
          scenes.forEach(function (scene, index) {
            var time;
            scene.start = isNaN(time = Utils.flattenTimecode(scene.sceneStartTime)) ? 0 : time;
            scene.end = isNaN(time = Utils.flattenTimecode(scene.sceneEndTime)) ? 0 : time;
            scene.title = scene.sceneTitle || "";
            scene.description = scene.sceneDescription || "";
            scene.position = index + 1;
          });
        }

        if (media.startTime == null) {
          media.startTime = 0;
        }

        if (media.status == null) {
          media.status = {};
        }

        if (media.restriction == null) {
          media.restriction = [];
        }

        if (media.track == null) {
          media.track = [];
        }

        if (media.metadata == null) {
          media.metadata = {};
        }

        media.originalSrc = media.src;
        return media;
      }
      /**
       *
       */

    }, {
      key: "updateData",
      value: function updateData(data) {
        var _this2 = this;

        fp.each(data, function (value, key) {
          if (key in _this2.data) {
            _this2.data[key] = value;
          }
        });
      }
      /**
       * The global unique identifier for this to the video.
       *
       * @param {String} value
       *    The new guid of the video
       * @returns {String}
       *    The guid of the video
       * @type {String}
       */

    }, {
      key: "getGUID",
      value: function getGUID() {
        return this.data.guid;
      }
    }, {
      key: "setGUID",
      value: function setGUID(value) {
        return this.data.guid = value;
      }
    }, {
      key: "getLink",
      value: function getLink() {
        return this.data.link;
      }
    }, {
      key: "setLink",
      value: function setLink(value) {
        return this.data.link = value;
      }
    }, {
      key: "getStartTime",
      value: function getStartTime() {
        return this.data.startTime;
      }
    }, {
      key: "setStartTime",
      value: function setStartTime(value) {
        return this.data.startTime = value;
      }
    }, {
      key: "getEmbed",
      value: function getEmbed() {
        return this.data.embed;
      }
    }, {
      key: "setEmbed",
      value: function setEmbed(value) {
        return this.data.embed = value;
      }
    }, {
      key: "getAutoplay",
      value: function getAutoplay() {
        return this.data.autoplay;
      }
    }, {
      key: "setAutoplay",
      value: function setAutoplay(value) {
        return this.data.autoplay = value;
      }
    }, {
      key: "getPubDate",
      value: function getPubDate() {
        return this.data.pubDate;
      }
    }, {
      key: "setPubDate",
      value: function setPubDate(value) {
        return this.data.pubDate = value;
      }
    }, {
      key: "getCategory",
      value:
      /**
       *
       */
      function getCategory() {
        return this.data.category;
      }
    }, {
      key: "setCategory",
      value: function setCategory(value) {
        return this.data.category = value;
      }
      /**
       * The duration of the video. This property is used in situations where the
       * duration cannot be determined from the video (i.e. before metadata is loaded)
       *
       * @param {Number} value
       *    The new duration of the video
       * @returns {Number}
       *    The duration of the video
       * @type {Number}
       */

    }, {
      key: "getStatus",
      value: function getStatus() {
        return this.data.status;
      }
    }, {
      key: "setStatus",
      value: function setStatus() {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return this.data.status = value;
      }
      /**
       * The url to the video.
       *
       * @param {String} value
       *    The new title of the video
       * @returns {Boolean}
       *    The title of the video
       * @type {String}
       */

    }, {
      key: "getSrc",
      value: function getSrc() {
        return this.facade.security.createURL(this.data.src);
      }
    }, {
      key: "setSrc",
      value: function setSrc(value) {
        return this.data.src = value;
      }
      /**
       * The mimeType of the video.
       */

    }, {
      key: "getType",
      value: function getType() {
        return this.data.type;
      }
    }, {
      key: "setType",
      value: function setType(value) {
        return this.data.type = value;
      }
      /**
       * The medium the video. ie audio, video, executable
       */

    }, {
      key: "getMedium",
      value: function getMedium() {
        return this.data.medium;
      }
    }, {
      key: "setMedium",
      value: function setMedium(value) {
        if (value === this.data.medium) {
          return;
        }

        this.data.medium = value;
        return this.facade.retrieveProxy(ApplicationStateProxy.NAME).setMedium(value);
      }
      /**
       * Additional information about the vieo
       */

    }, {
      key: "getMetadata",
      value: function getMetadata() {
        return this.data.metadata;
      }
    }, {
      key: "setMetadata",
      value: function setMetadata(value) {
        return this.data.metadata = value;
      }
      /**
       * The source object of the video.
       */

    }, {
      key: "getSource",
      value: function getSource() {
        return this.data.source;
      }
    }, {
      key: "setSource",
      value: function setSource(value) {
        return this.data.source = value;
      }
      /**
       * The source object of the video.
       */

    }, {
      key: "getTrack",
      value: function getTrack() {
        return this.data.track;
      }
    }, {
      key: "setTrack",
      value: function setTrack(value) {
        return this.data.track = value;
      }
      /**
       * The title of the video.
       *
       * @param {String} value
       *    The new title of the video
       * @returns {Boolean}
       *    The title of the video
       * @type {String}
       */

    }, {
      key: "getTitle",
      value: function getTitle() {
        return this.data.title;
      }
    }, {
      key: "setTitle",
      value: function setTitle(value) {
        return this.data.title = value;
      }
      /**
       * The native width of the video.
       */

    }, {
      key: "getWidth",
      value: function getWidth() {
        return this.data.width;
      }
    }, {
      key: "setWidth",
      value: function setWidth(value) {
        return this.data.width = value;
      }
      /**
       * The native width of the video.
       */

    }, {
      key: "getHeight",
      value: function getHeight() {
        return this.data.height;
      }
    }, {
      key: "setHeight",
      value: function setHeight(value) {
        return this.data.height = value;
      }
      /**
       * The description of the video.
       *
       * @param {String} value
       *    The new description of the video
       * @returns {Boolean}
       *    The description of the video
       * @type {String}
       */

    }, {
      key: "getDescription",
      value: function getDescription() {
        return this.data.description;
      }
    }, {
      key: "setDescription",
      value: function setDescription(value) {
        return this.data.description = value;
      }
    }, {
      key: "getDuration",
      value: function getDuration(value) {
        return this.data.duration;
      }
    }, {
      key: "setDuration",
      value: function setDuration(value) {
        if (!value || this.data.temporalType === "live") {
          return;
        } //HACK: Android's native browser sometimes returns a duration of 1 before playback begins


        var ua = navigator.userAgent;

        if (value === 1 && /Android/.test(ua) && !/Android.*Chrome/.test(ua)) {
          return;
        }

        if (value !== this.data.duration) {
          this.data.duration = value;
          this.sendNotification(Notifications.TIME_CHANGE, {
            duration: value
          });
        }

        if (value === 2e308 && this.data.temporalType !== "dvr") {
          this.setTemporalType("live");
        }

        return value;
      }
      /**
       * The poster image for the video.
       *
       * @param {String} value
       *    The url of the new poster image
       * @returns {String}
       *    The url of the poster image
       * @type {String}
       */

    }, {
      key: "getPoster",
      value: function getPoster(value) {
        return this.data.poster;
      }
    }, {
      key: "setPoster",
      value: function setPoster(value) {
        this.data.poster = value;
      }
      /**
       *
       */

    }, {
      key: "getIsLive",
      value: function getIsLive() {
        return this.data.isLive;
      }
    }, {
      key: "setIsLive",
      value: function setIsLive(value) {
        if (value === this.data.isLive) {
          return;
        }

        this.data.isLive = value;
        this.sendNotification(Notifications.IS_LIVE, value);
        return value;
      }
      /**
       *
       */

    }, {
      key: "getTemporalType",
      value: function getTemporalType() {
        return this.data.temporalType || "vod";
      }
    }, {
      key: "setTemporalType",
      value: function setTemporalType(value) {
        if (value === this.data.temporalType) {
          return;
        }

        var previous = this.data.temporalType;
        this.data.temporalType = value;
        this.sendNotification(Notifications.TEMPORAL_TYPE_CHANGE, {
          previous: previous,
          value: value
        });
      }
      /**
       *
       */

    }, {
      key: "getScenes",
      value: function getScenes() {
        return this.data.scenes;
      }
    }, {
      key: "setScenes",
      value: function setScenes(value) {
        return this.data.scenes = value;
      }
      /**
       *
       */

    }, {
      key: "getCues",
      value: function getCues() {
        return this.data.cues;
      }
    }, {
      key: "setCues",
      value: function setCues() {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        if (this.data.cues === value) {
          return;
        }

        this.data.cues = value;
        this.sendNotification(Notifications.CUES_CHANGE, value);
        return value;
      }
      /**
       *
       */

    }, {
      key: "getScene",
      value: function getScene(currentTime) {
        var scenes = this.data.scenes;

        if (scenes == null) {
          return;
        }

        return scenes.find(function (scene) {
          return scene.start <= currentTime && currentTime < scene.end;
        });
      }
      /**
       *
       */

    }, {
      key: "getKeys",
      value: function getKeys() {
        return this.data.keys;
      }
    }, {
      key: "setKeys",
      value: function setKeys(value) {
        this.data.keys = value;
      }
      /**
       *
       */

    }, {
      key: "getAuthorization",
      value: function getAuthorization() {
        return this.data.authorization;
      }
    }, {
      key: "setAuthorization",
      value: function setAuthorization(value) {
        this.data.authorization = value;
      }
      /**
       *
       */

    }, {
      key: "getRestriction",
      value: function getRestriction() {
        return this.data.restriction;
      }
    }, {
      key: "setRestriction",
      value: function setRestriction() {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        this.data.restriction = value;
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "MediaProxy";
      }
    }]);
    return MediaProxy;
  }(puremvc.Proxy);

  var TrackList = /*#__PURE__*/function (_EventDispatcher) {
    babelHelpers.inherits(TrackList, _EventDispatcher);

    /**
     * @constructor
     * @private
     */
    function TrackList() {
      var _this;

      var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      babelHelpers.classCallCheck(this, TrackList);
      _this = _EventDispatcher.call(this) || this;
      _this.list = list;
      _this.onchange = null;
      _this.handlers = {
        change: _this.changeHandler.bind(babelHelpers.assertThisInitialized(_this))
      };
      return _this;
    }
    /** */


    babelHelpers.createClass(TrackList, [{
      key: "changeHandler",
      value: function changeHandler(event) {
        this.dispatchEvent(event);
      }
      /**
       * @param {string} key
       *     The key
       *
       * @param {Object} value
       *     The value
       */

    }, {
      key: "add",
      value: function add(track) {
        var dispatch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        this.list.push(track);
        track.addEventListener("change", this.handlers.change);

        if (dispatch === true) {
          this.dispatch("addtrack", track);
        }
      }
      /**
       * @param {string} key
       *     The module's key
       *
       * @return {Object}
       *     The item.
       */

    }, {
      key: "remove",
      value: function remove(track) {
        var dispatch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var index = this.list.indexOf(track);

        if (index === -1) {
          return;
        }

        this.list.splice(index, 1);
        track.removeEventListener("change", this.handlers.change);

        if (dispatch === true) {
          this.dispatch("removetrack", track);
        }

        return track;
      }
    }, {
      key: "clear",
      value: function clear() {
        var _this2 = this;

        if (this.list.length === 0) {
          return;
        }

        fp.each(this.list, function () {
          _this2.remove(_this2.list[_this2.list.length - 1], false);
        });
        this.dispatch("removetrack");
      }
    }, {
      key: "getTrackById",
      value: function getTrackById(id) {
        return this.list.find(function (track) {
          return track.id === id;
        });
      }
    }, {
      key: "some",
      value: function some(func) {
        return this.list.some(func);
      }
    }]);
    return TrackList;
  }(EventDispatcher);

  var AudioTrackList = /*#__PURE__*/function (_TrackList) {
    babelHelpers.inherits(AudioTrackList, _TrackList);

    /**
     * @constructor
     * @private
     */
    function AudioTrackList(list) {
      babelHelpers.classCallCheck(this, AudioTrackList);
      return _TrackList.call(this, list) || this;
    }

    babelHelpers.createClass(AudioTrackList, [{
      key: "selectTrackByIndex",
      value: function selectTrackByIndex(index) {
        if (index >= 0 && index < this.list.length) {
          for (var i = 0; i < this.list.length; i++) {
            this.list[i].enabled = i == index;
          }
        }
      }
    }, {
      key: "selectTrackByLanguage",
      value: function selectTrackByLanguage() {
        var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var track = this.list.filter(function (track) {
          return track.language.toLowerCase() === lang.toLowerCase();
        })[0];
        var index = this.list.indexOf(track);
        this.selectTrackByIndex(index);
      }
    }]);
    return AudioTrackList;
  }(TrackList);

  var PreviewTrack = /*#__PURE__*/function (_CaptionTrack) {
    babelHelpers.inherits(PreviewTrack, _CaptionTrack);

    /**
     * The PreviewTrack class.
     *
     * @constructor
     * @private
     * @param {?Object} track A generic track object.
     */
    function PreviewTrack(track, onload) {
      var _this;

      babelHelpers.classCallCheck(this, PreviewTrack);
      var resourceManager = AMP.getResourceManager();

      var parse = function parse() {
        var a = document.createElement("a");
        a.href = _this.src;
        var absolute = a.protocol + "//" + a.hostname;
        var relative = absolute + a.pathname.split("/").slice(0, -1).join("/") + "/";

        _this.cues.forEach(function (cue) {
          var _cue$text$split = cue.text.split("#"),
              _cue$text$split2 = babelHelpers.slicedToArray(_cue$text$split, 2),
              file = _cue$text$split2[0],
              params = _cue$text$split2[1];

          var src = file;

          if (!/^(https?:)?\/\//.test(src)) {
            if (/^\//.test(src)) {
              src = absolute + src;
            } else {
              src = relative + src;
            }
          }

          var kv = params.split("=");
          var keys = kv[0];
          var values = kv[1].split(",");
          var style = {
            background: "url(" + src + ") 0px 0px no-repeat"
          };
          fp.each(keys, function (key, i) {
            var value = values[i];

            switch (key) {
              case "w":
                style.width = value + "px";
                break;

              case "h":
                style.height = value + "px";
                break;

              case "x":
                style.background = style.background.replace(") 0px", ") -" + value + "px");
                break;

              case "y":
                style.background = style.background.replace("0px n", "-" + value + "px n");
            }
          });
          cue.style = style; // preload

          return resourceManager.add({
            src: src,
            type: "image"
          });
        });

        if (typeof onload === "function") {
          onload(babelHelpers.assertThisInitialized(_this));
        }
      };

      return _this = _CaptionTrack.call(this, track, parse) || this;
    }
    /** @static */


    babelHelpers.createClass(PreviewTrack, null, [{
      key: "create",
      value: function create(track) {
        return new Promise(function (resolve, reject) {
          var error;

          try {
            return new PreviewTrack(track, function (captionTrack) {
              return resolve(captionTrack);
            });
          } catch (error1) {
            error = error1;
            return reject(error);
          }
        });
      }
    }]);
    return PreviewTrack;
  }(CaptionTrack);

  var TracksProxy = /*#__PURE__*/function (_puremvc$Proxy) {
    babelHelpers.inherits(TracksProxy, _puremvc$Proxy);

    /**
     * Creates a new instance of TracksProxy.
     *
     * @constructor
     * @private
     */
    function TracksProxy() {
      var _this;

      babelHelpers.classCallCheck(this, TracksProxy);
      _this = _puremvc$Proxy.call(this, null, {}) || this;
      _this.data.audioTracks = new AudioTrackList();
      _this.data.videoTracks = new TrackList();
      _this.data.textTracks = new TrackList();
      _this.data.previewTracks = new TrackList();
      return _this;
    }
    /**
     * @static
     * @type {string}
     */


    babelHelpers.createClass(TracksProxy, [{
      key: "clear",
      value: function clear() {
        this.data.audioTracks.clear();
        this.data.videoTracks.clear();
        this.data.textTracks.clear();
        this.data.previewTracks.clear();
      }
    }, {
      key: "setMedia",
      value: function setMedia(media) {
        var _this2 = this;

        var tracks = media.track || [];
        tracks.forEach(function (track) {
          if (track.kind === "preview" || track.kind === "thumbnail") {
            _this2.getPreviewTracks().add(new PreviewTrack(track));
          }
        });
      }
    }, {
      key: "getAudioTracks",
      value: function getAudioTracks() {
        return this.data.audioTracks;
      }
    }, {
      key: "getVideoTracks",
      value: function getVideoTracks() {
        return this.data.videoTracks;
      }
    }, {
      key: "getTextTracks",
      value: function getTextTracks() {
        return this.data.textTracks;
      }
    }, {
      key: "getPreviewTracks",
      value: function getPreviewTracks() {
        return this.data.previewTracks;
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "TracksProxy";
      }
    }]);
    return TracksProxy;
  }(puremvc.Proxy);

  var PlayerMediator = /*#__PURE__*/function (_ComponentMediator) {
    babelHelpers.inherits(PlayerMediator, _ComponentMediator);

    /**
     * @constructor
     * @private
     * @extends {ComponentMediator}
     */
    function PlayerMediator(componentName, viewComponent) {
      var _this;

      babelHelpers.classCallCheck(this, PlayerMediator);
      _this = _ComponentMediator.call(this, componentName, "player", null, viewComponent) || this;
      _this.layers = [];
      _this.core = null;
      _this.medium = null;
      _this.ready = false;
      return _this;
    }
    /** @override */


    babelHelpers.createClass(PlayerMediator, [{
      key: "onRegister",
      value: function onRegister() {
        babelHelpers.get(babelHelpers.getPrototypeOf(PlayerMediator.prototype), "onRegister", this).call(this); //Add device flag in case device specific styles are needed

        var device = Utils.getDevice();

        if (device != null) {
          this.classList.add(device);
        }

        if (Utils.isTouchDevice()) {
          this.classList.add("touch");
        }
      }
      /** @override */

    }, {
      key: "listNotificationInterests",
      value: function listNotificationInterests() {
        return [Notifications.DISPLAY_STATE_CHANGE, Notifications.ACTIVE_STATE_CHANGE, Notifications.PLAY_STATE_CHANGE, Notifications.ADD_APPLICATION_STATE, Notifications.REMOVE_APPLICATION_STATE, Notifications.MEDIUM_CHANGE, Notifications.DURATION_CHANGE, Notifications.TEMPORAL_TYPE_CHANGE, Notifications.IS_LIVE, Notifications.ADD_LAYER, Notifications.REMOVE_LAYER, Notifications.STARTUP];
      }
      /** @override */

    }, {
      key: "handleNotification",
      value: function handleNotification(notification) {
        var name = notification.getName();
        var body = notification.getBody();

        switch (name) {
          case Notifications.ACTIVE_STATE_CHANGE:
          case Notifications.PLAY_STATE_CHANGE:
          case Notifications.DISPLAY_STATE_CHANGE:
          case Notifications.MEDIUM_CHANGE:
            var states = body;
            var value = states.value;
            var previous = states.previous;

            if (previous != null && this.classList.contains(previous)) {
              this.classList.remove(previous);
            }

            if (value != null) {
              this.classList.add(value);
            }

            break;

          case Notifications.ADD_APPLICATION_STATE:
            if (body == null) {
              return;
            }

            this.classList.add(body);
            break;

          case Notifications.REMOVE_APPLICATION_STATE:
            this.classList.remove(body);
            break;

          case Notifications.TEMPORAL_TYPE_CHANGE:
            if (body.previous) {
              this.sendNotification(Notifications.REMOVE_APPLICATION_STATE, body.previous);
            }

            if (body.value) {
              this.sendNotification(Notifications.ADD_APPLICATION_STATE, body.value);
            }

            break;

          case Notifications.IS_LIVE:
            if (body === true) {
              this.sendNotification(Notifications.ADD_APPLICATION_STATE, "is-live");
            } else {
              this.sendNotification(Notifications.REMOVE_APPLICATION_STATE, "is-live");
            }

            break;

          case Notifications.DURATION_CHANGE:
            // add style flag if this is long form content
            if (body > 3600) {
              this.sendNotification(Notifications.ADD_APPLICATION_STATE, "long-form");
            } else {
              this.sendNotification(Notifications.REMOVE_APPLICATION_STATE, "long-form");
            }

            break;

          case Notifications.ADD_LAYER:
            this.addLayer(body);
            break;

          case Notifications.REMOVE_LAYER:
            this.removeLayer(body);
            break;

          case Notifications.STARTUP:
            this.initialize();
            this.viewCreated();
        }
      }
      /** */

    }, {
      key: "initialize",
      value: function initialize() {
        var _this2 = this;

        this.ready = true;
        this.layers.forEach(function (layer) {
          if (!_this2.viewComponent.contains(layer)) {
            _this2.viewComponent.appendChild(layer);
          }
        });
      }
    }, {
      key: "viewCreated",
      value: function viewCreated() {
        this.sendNotification(Notifications.VIEW_CREATED);
      }
      /** */

    }, {
      key: "addLayer",
      value: function addLayer(layer) {
        this.layers.push(layer);

        if (this.ready) {
          this.viewComponent.appendChild(layer);
        }
      }
      /** */

    }, {
      key: "removeLayer",
      value: function removeLayer(layer) {
        if (this.viewComponent.contains(layer)) {
          this.viewComponent.removeChild(layer);
        }

        var index = this.layers.indexOf(layer);

        if (index >= 0) {
          this.layers.splice(index, 1);
        }
      }
    }]);
    return PlayerMediator;
  }(ComponentMediator);

  var LayerMediator = /*#__PURE__*/function (_ComponentMediator) {
    babelHelpers.inherits(LayerMediator, _ComponentMediator);

    /**
     * @constructor
     * @private
     */
    function LayerMediator(name) {
      babelHelpers.classCallCheck(this, LayerMediator);
      return _ComponentMediator.call(this, name, "layer") || this;
    }
    /**
     * Registers the layer
     *
     * @override
     */


    babelHelpers.createClass(LayerMediator, [{
      key: "onRegister",
      value: function onRegister() {
        babelHelpers.get(babelHelpers.getPrototypeOf(LayerMediator.prototype), "onRegister", this).call(this);
        this.registerLayer();
      }
      /**
       * Removes the layer
       *
       * @override
       */

    }, {
      key: "onRemove",
      value: function onRemove() {
        babelHelpers.get(babelHelpers.getPrototypeOf(LayerMediator.prototype), "onRemove", this).call(this);
        this.removeLayer();
      }
      /**
       *
       */

    }, {
      key: "registerLayer",
      value: function registerLayer() {
        this.sendNotification(Notifications.ADD_LAYER, this.viewComponent);
      }
      /**
       *
       */

    }, {
      key: "removeLayer",
      value: function removeLayer() {
        this.sendNotification(Notifications.REMOVE_LAYER, this.viewComponent);
      }
    }]);
    return LayerMediator;
  }(ComponentMediator);

  var OverlayLayerMediator = /*#__PURE__*/function (_LayerMediator) {
    babelHelpers.inherits(OverlayLayerMediator, _LayerMediator);

    /**
     * The OverlayLayerMediator class.
     *
     * @constructor
     * @private
     * @extends {LayerMediator}
     */
    function OverlayLayerMediator() {
      babelHelpers.classCallCheck(this, OverlayLayerMediator);
      return _LayerMediator.call(this, "overlays") || this;
    }
    /**
     * Overridden so this class may subscribe to all notifications
     * @return An Array
     *
     * @override
     */


    babelHelpers.createClass(OverlayLayerMediator, [{
      key: "listNotificationInterests",
      value: function listNotificationInterests() {
        return [Notifications.ADD_OVERLAY, Notifications.REMOVE_OVERLAY];
      }
      /**
       * Handles notifications of interest to this mediator. Note that
       * the default declaration is to allow the super to handle the
       * note. This leaves the base JunctionMediator to handle things
       * like ACCEPT_INPUT_PIPE and ACCEPT_OUTPUT_PIPE
       *
       * @param note An INotification
       * @override
       */

    }, {
      key: "handleNotification",
      value: function handleNotification(notification) {
        var name = notification.getName();
        var overlay = notification.getBody();

        switch (name) {
          case Notifications.ADD_OVERLAY:
            this.viewComponent.appendChild(overlay);
            break;

          case Notifications.REMOVE_OVERLAY:
            this.viewComponent.removeChild(overlay);
        }
      }
    }]);
    return OverlayLayerMediator;
  }(LayerMediator);

  var VideoLayerMediator = /*#__PURE__*/function (_LayerMediator) {
    babelHelpers.inherits(VideoLayerMediator, _LayerMediator);

    /**
     * @constructor
     * @extends {LayerMediator}
     * @private
     */
    function VideoLayerMediator() {
      var _this;

      babelHelpers.classCallCheck(this, VideoLayerMediator);
      _this = _LayerMediator.call(this, "video") || this;
      _this.mediator = null;
      _this.mediaElement = null;
      return _this;
    }
    /** @override */


    babelHelpers.createClass(VideoLayerMediator, [{
      key: "listNotificationInterests",
      value: function listNotificationInterests() {
        return [Notifications.PLAYBACK_CORE_CHANGE];
      }
      /** @override */

    }, {
      key: "handleNotification",
      value: function handleNotification(notification) {
        var name = notification.getName();
        var body = notification.getBody();

        switch (name) {
          case Notifications.PLAYBACK_CORE_CHANGE:
            // remove the old video object if it exists
            if (this.mediaElement != null) {
              this.viewComponent.removeChild(this.mediaElement);
            } // remove the old mediator if it exists


            if (this.mediator != null) {
              this.facade.removeMediator(this.mediator.getMediatorName());
            } // retrive new media element


            var isMediator = body && body.getViewComponent;

            if (isMediator) {
              this.facade.registerMediator(body);
              this.mediator = body;
              this.mediaElement = this.mediator.getViewComponent();
            } else {
              this.mediator = null;
              this.mediaElement = body;
            } // add the new video object if it exists


            if (this.mediaElement != null) {
              this.facade.setMediaElement(this.mediaElement);
              this.viewComponent.appendChild(this.mediaElement);
            }

        }
      }
    }]);
    return VideoLayerMediator;
  }(LayerMediator);

  /**
   * @enum {string}
   * @const
   * @private
   */
  var AdNotifications = {
    BREAK_START: "adsbreakstart",
    BREAK_END: "adsbreakend",
    BREAK_SKIPPED: "adsbreakskipped",
    AD_CONTAINER_CREATED: "adscontainercreated",
    AD_LOADED: "adsloaded",
    AD_MANAGER_LOADED: "adsmanagerloaded",
    AD_STARTED: "adsstarted",
    AD_TIME_UPDATE: "adstimeupdate",
    AD_TIME_REMAINING: "adstimeremaining",
    AD_DURATION_CHANGE: "adsdurationchange",
    AD_ENDED: "adsended",
    AD_ERROR: "adserror",
    AD_PLAY: "adsplay",
    AD_PLAYING: "adsplaying",
    AD_PAUSE: "adspause",
    AD_PAUSED: "adspaused",
    AD_RESUME: "adsresume",
    AD_CLICKED: "adclicked",
    AD_COMPANION: "adscompanion",
    FIRST_QUARTILE: "adsfirstquartile",
    MIDPOINT: "adsmidpoint",
    THIRD_QUARTILE: "adsthirdquartile",
    COMPLETE: "adscomplete",
    CONCRETE: "adsconcrete",
    LOG: "adslog",
    REQUEST: "adsrequest",
    REQUEST_START: "adsrequeststart",
    REQUEST_COMPLETE: "adsrequestcomplete",
    RESPONSE: "adsresponse",
    SKIPPED: "adsskipped",
    IMPRESSION: "adsimpression"
  };

  var OverlayMediator = /*#__PURE__*/function (_ComponentMediator) {
    babelHelpers.inherits(OverlayMediator, _ComponentMediator);

    /**
     * @constructor
     * @private
     */
    function OverlayMediator(name) {
      babelHelpers.classCallCheck(this, OverlayMediator);
      return _ComponentMediator.call(this, name, "overlay") || this;
    }
    /**
     * Registers the overlay.
     *
     * @override
     */


    babelHelpers.createClass(OverlayMediator, [{
      key: "onRegister",
      value: function onRegister() {
        babelHelpers.get(babelHelpers.getPrototypeOf(OverlayMediator.prototype), "onRegister", this).call(this);
        this.registerOverlay();
      }
      /**
       * Removes the overlay.
       *
       * @override
       */

    }, {
      key: "onRemove",
      value: function onRemove() {
        babelHelpers.get(babelHelpers.getPrototypeOf(OverlayMediator.prototype), "onRemove", this).call(this);
        this.removeOverlay();
      }
      /**
       *
       */

    }, {
      key: "registerOverlay",
      value: function registerOverlay() {
        this.sendNotification(Notifications.ADD_OVERLAY, this.viewComponent);
      }
      /**
       *
       */

    }, {
      key: "removeOverlay",
      value: function removeOverlay() {
        this.sendNotification(Notifications.REMOVE_OVERLAY, this.viewComponent);
      }
    }]);
    return OverlayMediator;
  }(ComponentMediator);

  var AdContainerMediator = /*#__PURE__*/function (_OverlayMediator) {
    babelHelpers.inherits(AdContainerMediator, _OverlayMediator);

    /**
     * @constructor
     * @private
     * @extends {OverlayMediator}
     */
    function AdContainerMediator() {
      var _this;

      babelHelpers.classCallCheck(this, AdContainerMediator);
      _this = _OverlayMediator.call(this, "ads") || this;
      _this._hidden = true;
      _this._container = null;
      return _this;
    }
    /**
     * @override
     */


    babelHelpers.createClass(AdContainerMediator, [{
      key: "onRegister",
      value: function onRegister() {
        babelHelpers.get(babelHelpers.getPrototypeOf(AdContainerMediator.prototype), "onRegister", this).call(this);
        this.setContainer(this.viewComponent);
        this.sendNotification(AdNotifications.AD_CONTAINER_CREATED, this.viewComponent);
      }
      /**
       * @override
       */

    }, {
      key: "listNotificationInterests",
      value: function listNotificationInterests() {
        return [AdNotifications.BREAK_START, AdNotifications.BREAK_END];
      }
    }, {
      key: "getHidden",
      value: function getHidden() {
        return this._hidden;
      }
    }, {
      key: "setHidden",
      value: function setHidden(value) {
        this._hidden = value;
        if (this._container) this._container.hidden = value;
        return value;
      }
    }, {
      key: "getContainer",
      value: function getContainer() {
        return this._container;
      }
    }, {
      key: "setContainer",
      value: function setContainer(value) {
        this._container = value;
        if (this._container) this._container.hidden = this._hidden;
        return value;
      }
      /**
       * @override
       */

    }, {
      key: "handleNotification",
      value: function handleNotification(notification) {
        var body = notification.body || {};

        switch (notification.getName()) {
          case AdNotifications.BREAK_START:
            this.setHidden(false);
            break;

          case AdNotifications.BREAK_END:
            this.setHidden(body.type !== "overlay");
        }
      }
    }]);
    return AdContainerMediator;
  }(OverlayMediator);

  var Controller = /*#__PURE__*/function (_puremvc$Mediator) {
    babelHelpers.inherits(Controller, _puremvc$Mediator);

    /**
     * The Controller class.
     *
     * @param {string} name
     * @param {Object} viewComponent
     * @constructor
     * @private
     * @extends {puremvc.Mediator}
     */
    function Controller(name, viewComponent) {
      babelHelpers.classCallCheck(this, Controller);
      return _puremvc$Mediator.call(this, name, viewComponent) || this;
    }

    babelHelpers.createClass(Controller, [{
      key: "playback",
      get: function get() {
        return this.playerCore.getActivePlaybackCore();
      }
      /** */

    }, {
      key: "doAfter",
      value: function doAfter(func) {
        var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var facade = this.facade.player || this.facade;
        return new Promise(function (resolve, reject) {
          var callback = function callback() {
            try {
              func();
              resolve();
            } catch (error) {
              facade.logger.error(error);
              reject(error);
            }
          };

          return facade.timers.setTimeout(callback, timeout);
        });
      }
      /** @override */

    }, {
      key: "initializeNotifier",
      value: function initializeNotifier(key) {
        babelHelpers.get(babelHelpers.getPrototypeOf(Controller.prototype), "initializeNotifier", this).call(this, key);
        var facade = this.facade.player || this.facade;
        this.applicationState = facade.appState;
        this.media = facade.mediaProxy;
        this.config = facade.configuration;
        this.logger = facade.logger;
        this.bindings = facade.bindings;
        this.params = facade.params;
        this.playerCore = facade.playerCore;
        this.security = facade.security;
        this.tracks = facade.tracks;
        this.localization = facade.localization;
        this.player = facade;
      }
      /**
       * Handles notifications of interest to this mediator.
       *
       * @param note An INotification
       * @override
       */

    }, {
      key: "handleNotification",
      value: function handleNotification(notification) {
        var name = notification.getName();

        if (typeof this[name] === "function") {
          this[name](notification.getBody(), notification);
        }
      }
    }]);
    return Controller;
  }(puremvc.Mediator);

  var CoreController = /*#__PURE__*/function (_Controller) {
    babelHelpers.inherits(CoreController, _Controller);

    /**
     * The CoreController class.
     *
     * @param {string} name
     * @param {Object} viewComponent
     * @constructor
     * @private
     * @extends {amp.player.Controller}
     */
    function CoreController() {
      babelHelpers.classCallCheck(this, CoreController);
      return _Controller.call(this, CoreController.NAME) || this;
    }
    /**
     * @static
     * @type {string}
     */


    babelHelpers.createClass(CoreController, [{
      key: "listNotificationInterests",
      value:
      /** @override */
      function listNotificationInterests() {
        return [Notifications.START, Notifications.PLAY, Notifications.PAUSE, Notifications.ENDED, Notifications.TOGGLE_PLAY_PAUSE, Notifications.CHANGE_DURATION];
      }
      /** */

    }, {
      key: "play",
      value: function play(userInitiated) {
        if (this.applicationState.getLocked() === true) {
          return;
        }

        if (userInitiated && this.playback.initialized !== true) {
          this.sendNotification(Notifications.INITIALIZED);
        }

        if (this.playback.initialized !== true || !this.media.getSrc() && !this.media.getSource()) {
          return;
        }

        if (!this.playback.getStarted()) {
          this.sendNotification(Notifications.START);
        }

        this.playback.play();
      }
      /** */

    }, {
      key: "pause",
      value: function pause() {
        //update the model
        this.playback.pause();
        this.sendNotification(Notifications.CHANGE_ACTIVE_STATE, ActiveState.ACTIVE);
      }
      /** */

    }, {
      key: "ended",
      value: function ended() {
        var _this = this;

        if (this.applicationState.getEnded()) {
          return;
        }

        this.applicationState.setEnded(true);
        this.doAfter(function () {
          if (_this.config.getLoop() === true) {
            _this.sendNotification(Notifications.REPLAY);
          } else if (_this.applicationState.getHasPostContent() === false) {
            _this.sendNotification(Notifications.MEDIA_SEQUENCE_ENDED);
          }
        });
      }
      /** */

    }, {
      key: "start",
      value: function start(value) {
        this.sendNotification(Notifications.REQUEST_PLAY); // start normal video playback

        this.sendNotification(Notifications.STARTED, value);
      }
      /** */

    }, {
      key: "toggleplaypause",
      value: function toggleplaypause() {
        var note;

        if (this.applicationState.getSeeking()) {
          return;
        }

        switch (this.applicationState.getPlayState()) {
          case PlayState.ENDED:
            note = Notifications.REPLAY;
            break;

          case PlayState.PAUSED:
          case PlayState.READY:
            note = Notifications.PLAY;
            break;

          case PlayState.PLAYING:
            note = Notifications.PAUSE;
        }

        if (this.applicationState.getWaiting()) {
          //HACK: Toggle issue when seeked under paused state
          if (this.facade.getMediaElement().paused === true) {
            note = Notifications.PLAY;
          }
        }

        this.sendNotification(note, true);
      }
      /** */

    }, {
      key: "changeduration",
      value: function changeduration(duration) {
        if (this.media.getDuration() === duration) {
          return;
        }

        this.media.setDuration(duration);
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "CoreController";
      }
    }]);
    return CoreController;
  }(Controller);

  var Utilization = /*#__PURE__*/function () {
    function Utilization() {
      babelHelpers.classCallCheck(this, Utilization);
    }

    babelHelpers.createClass(Utilization, null, [{
      key: "track",
      value: function track(event, data, player) {
        var semver = Utils.semver(player.version);
        var request = {
          url: "//amp.akamaized.net/amp.gif",
          query: {
            prod: semver.build ? semver.build : "standard",
            prodver: semver.version,
            platform: "web",
            os: bowser.osname,
            osver: bowser.osversion,
            browser: bowser.name,
            browserver: bowser.version,
            url: location.href,
            event: event,
            data: data,
            lic: player.pid
          }
        };
        return Utils.request(request)["catch"](function (error) {
          return Logger.instance.log(error);
        });
      }
    }]);
    return Utilization;
  }();

  var PlayerController = /*#__PURE__*/function (_Controller) {
    babelHelpers.inherits(PlayerController, _Controller);

    /**
     * The PlayerController class.
     *
     * @param {string} name
     * @param {Object} viewComponent
     * @constructor
     * @private
     * @extends {amp.player.Controller}
     */
    function PlayerController() {
      babelHelpers.classCallCheck(this, PlayerController);
      return _Controller.call(this, PlayerController.NAME) || this;
    }
    /**
     * @static
     * @type {string}
     */


    babelHelpers.createClass(PlayerController, [{
      key: "listNotificationInterests",
      value:
      /** @override */
      function listNotificationInterests() {
        return [Notifications.STARTUP, Notifications.ERROR, Notifications.TRACK, Notifications.DESTROY];
      }
      /** */

    }, {
      key: "startup",
      value: function startup() {
        var _this = this;

        this.localization.initialize(this.facade.plugins).then(function () {
          var volume = _this.facade.config.volume;

          if (volume != null) {
            _this.sendNotification(Notifications.CHANGE_VOLUME, volume);
          }

          _this.playerCore.ready();

          if (_this.facade.config.autoplay === true) {
            _this.sendNotification(Notifications.ADD_APPLICATION_STATE, "autoplay");
          }

          _this.sendNotification(Notifications.CHANGE_DISPLAY_STATE, DisplayState.NORMAL);

          _this.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.READY);

          _this.sendNotification(Notifications.CHANGE_ACTIVE_STATE, ActiveState.ACTIVE);

          AutoplayThreshold.value().then(function () {
            _this.facade.performance.ready = Date.now();

            _this.sendNotification(Notifications.TRACK, Event.create("create"));

            _this.sendNotification(Notifications.READY, _this.facade);

            _this.doAfter(function () {
              var media = _this.facade.config.media;

              if (media != null) {
                _this.sendNotification(Notifications.SET_MEDIA, media);
              }
            }, 2);
          });
        })["catch"](function (error) {
          throw AMPError.create(error);
        });
      }
      /** */

    }, {
      key: "error",
      value: function error(_error) {
        var _this2 = this;

        var destroy = function destroy(error) {
          _this2.facade._error = error;

          _this2.playback.destroy();

          var core = _this2.playback.getMediaElement();

          Promise.resolve(core.pause())["catch"](function (error) {
            return error;
          }); //update the view

          _this2.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.ERROR); // notify listeners


          _this2.facade.dispatch(Events.ERROR, error); //send the error to the console


          _this2.logger.error("[AMP ERROR]", error);
        };

        this.facade.transform(TransformType.ERROR, AMPError.create(_error)).then(function (result) {
          if (result == null) {
            return;
          }

          destroy(result);
        })["catch"](function (error) {
          destroy(error);
        });
      }
      /** */

    }, {
      key: "track",
      value: function track(event) {
        Utilization.track(event.type, event.data, this.facade);
      }
      /** */

    }, {
      key: "destroy",
      value: function destroy() {
        var _this3 = this;

        var modules = Object.keys(this.facade.getModules());
        var plugins = this.facade.plugins;
        plugins.forEach(function (plugin) {
          if (modules.includes(plugin)) return;

          try {
            var base = _this3.facade[plugin] || {};

            if (typeof base.destroy === "function") {
              base.destroy();
            }
          } catch (error) {
            _this3.facade.logger.error(error);
          }
        });
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "PlayerController";
      }
    }]);
    return PlayerController;
  }(Controller);

  var PlaybackController = /*#__PURE__*/function (_Controller) {
    babelHelpers.inherits(PlaybackController, _Controller);

    /**
     * The PlaybackController class.
     *
     * @param {string} name
     * @param {Object} viewComponent
     * @constructor
     * @private
     * @extends {amp.player.Controller}
     */
    function PlaybackController() {
      babelHelpers.classCallCheck(this, PlaybackController);
      return _Controller.call(this, PlaybackController.NAME) || this;
    }
    /**
     * @static
     * @type {string}
     */


    babelHelpers.createClass(PlaybackController, [{
      key: "listNotificationInterests",
      value:
      /** @override */
      function listNotificationInterests() {
        return [Notifications.PLAYING, Notifications.REQUEST_PLAY, Notifications.PLAYBACK_TARGET_CHANGE, Notifications.REGISTER_PLAYBACK_CORE, Notifications.REPLAY, Notifications.END, Notifications.HAS_POST_CONTENT, Notifications.LOCK, Notifications.MEDIA_SEQUENCE_ENDED];
      }
      /** */

    }, {
      key: "requestplay",
      value: function requestplay() {
        if (this.media.started === true) {
          return;
        }

        this.media.started = true;
        this.sendNotification(Notifications.PLAY_REQUEST);
        this.sendNotification(Notifications.WAITING);
        this.sendNotification(Notifications.MEDIA_SEQUENCE_STARTED);
        this.sendNotification(Notifications.TRACK, Event.create("start"));
      }
      /** */

    }, {
      key: "end",
      value: function end() {
        var _this = this;

        if (this.applicationState.getEnded()) {
          return;
        }

        if (this.facade.ads.getInProgress()) {
          var _transform = {
            player: this.player,
            transform: function transform(value) {
              if (value > -1) {
                _this.player.sendNotification(Notifications.END);

                _this.player.removeTransform(_transform);

                return value;
              }
            }
          };
          this.player.addTransform(TransformType.TIME, _transform);
          this.facade.ads.terminateAllAds();
          return;
        }

        this.playback.setEnabled(false);
        this.playback.pause();
        this.playback.seek(this.playback.getDuration()).then(this.sendNotification.bind(this, Notifications.ENDED));
      }
      /** */

    }, {
      key: "replay",
      value: function replay() {
        if (typeof this.playback.replay === "function") {
          this.playback.replay();
          return;
        }

        var media = this.media.getData();
        media.metadata = Object.assign({}, media.metadata, {
          config: {
            autoplay: true
          }
        });
        this.sendNotification(Notifications.SET_MEDIA, media);
      }
      /** */

    }, {
      key: "registerplaybackcore",
      value: function registerplaybackcore(core) {
        this.playerCore.registerPlaybackCore(core);
      }
      /** */

    }, {
      key: "playbacktargetchange",
      value: function playbacktargetchange(body) {
        var target = body.value;
        var note = target === "amp" ? Notifications.REMOVE_APPLICATION_STATE : Notifications.ADD_APPLICATION_STATE;
        this.sendNotification(note, "remote-playback");
      }
      /** */

    }, {
      key: "playing",
      value: function playing() {
        if (this.facade.getMediaElement().currentTime === 0 && this.media.started === false && this.applicationState.getSeeking() === false) {
          this.media.started = true;
          this.sendNotification(Notifications.MEDIA_SEQUENCE_STARTED);
        }

        if (this.applicationState.getPlayState() !== PlayState.PLAYING) {
          this.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.PLAYING);
        }
      }
      /** */

    }, {
      key: "haspostcontent",
      value: function haspostcontent(value) {
        this.applicationState.setHasPostContent(value);
      }
      /** */

    }, {
      key: "lock",
      value: function lock(locked) {
        var note = locked ? Notifications.ADD_APPLICATION_STATE : Notifications.REMOVE_APPLICATION_STATE;
        this.sendNotification(note, "locked");
        this.applicationState.setLocked(locked);
      }
      /** */

    }, {
      key: "mediasequenceended",
      value: function mediasequenceended() {
        if (this.config.getLoop() === true) {
          this.doAfter(this.sendNotification.bind(this, Notifications.REPLAY));
        } else {
          this.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.ENDED);
          this.sendNotification(Notifications.CHANGE_ACTIVE_STATE, ActiveState.ACTIVE);
        }
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "PlaybackController";
      }
    }]);
    return PlaybackController;
  }(Controller);

  /**
   * @enum {string}
   * @const
   * @private
   */
  var FullscreenMode = {
    /**
     *
     */
    EXTERNAL: "external"
  };

  var StateController = /*#__PURE__*/function (_Controller) {
    babelHelpers.inherits(StateController, _Controller);

    /**
     * The StateController class.
     *
     * @param {string} name
     * @param {Object} viewComponent
     * @constructor
     * @private
     * @extends {amp.player.Controller}
     */
    function StateController() {
      babelHelpers.classCallCheck(this, StateController);
      return _Controller.call(this, StateController.NAME) || this;
    }
    /**
     * @static
     * @type {string}
     */


    babelHelpers.createClass(StateController, [{
      key: "listNotificationInterests",
      value:
      /** @override */
      function listNotificationInterests() {
        return [Notifications.BUFFERING_CHANGE, Notifications.WAITING, Notifications.CHANGE_PLAY_STATE, Notifications.TOGGLE_FULL_SCREEN, Notifications.CHANGE_DISPLAY_STATE, Notifications.CHANGE_ACTIVE_STATE, Notifications.INITIALIZED];
      }
    }, {
      key: "core",
      get: function get() {
        return this.facade.getMediaElement();
      }
    }, {
      key: "view",
      get: function get() {
        return this.facade.getViewComponent();
      }
    }, {
      key: "fullScreen",
      get: function get() {
        return this.getFullScreen();
      }
    }, {
      key: "getFullScreen",
      value: function getFullScreen() {
        return Utils.getFullScreenApi(this.view, this.core);
      }
    }, {
      key: "pictureInPicture",
      get: function get() {
        return this.getPictureInPicture();
      }
    }, {
      key: "getPictureInPicture",
      value: function getPictureInPicture() {
        return Utils.getPictureInPictureApi(this.core);
      }
      /** */

    }, {
      key: "bufferingchange",
      value: function bufferingchange(buffering) {
        if (this.applicationState.getBuffering() === buffering) {
          return;
        }

        this.applicationState.setBuffering(buffering);
      }
      /** */

    }, {
      key: "waiting",
      value: function waiting() {
        if (this.applicationState.getWaiting()) {
          return;
        }

        this.applicationState.setWaiting(true);
      }
      /** */

    }, {
      key: "changeplaystate",
      value: function changeplaystate(value) {
        this.applicationState.setPlayState(value);
      }
      /** */

    }, {
      key: "changeactivestate",
      value: function changeactivestate(value) {
        this.applicationState.setActiveState(value);
      }
      /** */

    }, {
      key: "initialized",
      value: function initialized() {
        this.playback.initialized = true;
      }
      /** */

    }, {
      key: "changedisplaystate",
      value: function changedisplaystate(state) {
        var _this = this;

        var previousState = this.applicationState.getDisplayState();

        if (state === previousState) {
          return;
        }

        var sendNotifications = function sendNotifications(state) {
          _this.sendNotification(Notifications.FULL_SCREEN_CHANGE, state === DisplayState.FULL_SCREEN);
        };

        this.applicationState.setDisplayState(state);

        if (this.config.getFullscreen().mode === FullscreenMode.EXTERNAL) {
          sendNotifications(state);
          return;
        }

        switch (state) {
          case DisplayState.PICTURE_IN_PICTURE:
            if (previousState === DisplayState.FULL_SCREEN) this.exitFullScreen();
            this.enterPictureInPicture();
            break;

          case DisplayState.FULL_SCREEN:
            if (previousState === DisplayState.PICTURE_IN_PICTURE) this.exitPictureInPicture();
            this.enterFullScreen();
            break;

          case DisplayState.NORMAL:
            if (previousState === DisplayState.PICTURE_IN_PICTURE) this.exitPictureInPicture();
            if (previousState === DisplayState.FULL_SCREEN) this.exitFullScreen();
            break;
        }

        sendNotifications(state);
      }
      /** */

    }, {
      key: "togglefullscreen",
      value: function togglefullscreen() {
        var state = this.applicationState.getDisplayState() === DisplayState.FULL_SCREEN ? DisplayState.NORMAL : DisplayState.FULL_SCREEN;
        return this.sendNotification(Notifications.CHANGE_DISPLAY_STATE, state);
      }
    }, {
      key: "enterFullScreen",
      value: function enterFullScreen() {
        var _this2 = this;

        var core = this.core;
        var view = this.view;
        var fullScreen = this.fullScreen;

        var getDisplayState = function getDisplayState() {
          var displayState = _this2.applicationState.getDisplayState();

          return displayState !== DisplayState.FULL_SCREEN ? displayState : DisplayState.NORMAL;
        };

        if (fullScreen.event != null) {
          // Hack: added condition to detect firefox fullScreen event and send CHANGE_DISPLAY_STATE notification
          if (view.mozRequestfullScreen != null) {
            document[fullScreen.event] = function (event) {
              if (!document.mozFullScreen) {
                return _this2.sendNotification(Notifications.CHANGE_DISPLAY_STATE, getDisplayState());
              }
            };
          } else {
            document[fullScreen.event] = function (event) {
              if (document[fullScreen.element] == null) {
                return _this2.sendNotification(Notifications.CHANGE_DISPLAY_STATE, getDisplayState());
              }
            };
          }
        } else {
          //HACK: Safari Webkit does not have an AV Player fullscreen event, this code may safely control both enter/exit
          var onwebkitenterfullscreen = function onwebkitenterfullscreen() {
            if (core.webkitDisplayingFullscreen !== true) return core.readyState !== 0 ? void 0 : _this2.sendNotification(Notifications.CHANGE_DISPLAY_STATE, DisplayState.NORMAL);

            _this2.facade.timers.clearInterval(_this2.interval);

            _this2.interval = _this2.facade.timers.setInterval(onwebkitexitfullscreen, 100);
          };

          var onwebkitexitfullscreen = function onwebkitexitfullscreen() {
            if (core.webkitDisplayingFullscreen !== true) _this2.sendNotification(Notifications.CHANGE_DISPLAY_STATE, getDisplayState());
          };

          this.facade.timers.clearInterval(this.interval);
          this.interval = this.facade.timers.setInterval(onwebkitenterfullscreen, 100);
        }

        if (fullScreen.error != null) {
          document.addEventListener(fullScreen.error, this.facade.logger.error.bind(this.facade.logger));
        }

        fullScreen.enter();
      }
    }, {
      key: "exitFullScreen",
      value: function exitFullScreen() {
        var core = this.core;
        var fullScreen = this.fullScreen;
        var element = fullScreen.element;
        if (fullScreen == null || element != null && document[element] == null) return;

        if (typeof fullScreen.exit === "function") {
          fullScreen.exit();
        }

        core[fullScreen.event] = null;
        this.facade.timers.clearInterval(this.interval);
      }
    }, {
      key: "enterPictureInPicture",
      value: function enterPictureInPicture() {
        var _this3 = this;

        var core = this.core;
        var pip = this.pictureInPicture;

        var onleavepictureinpicture = function onleavepictureinpicture() {
          if (document[pip.element] != null) return;

          var displayState = _this3.applicationState.getDisplayState();

          var state = displayState !== DisplayState.PICTURE_IN_PICTURE ? displayState : DisplayState.NORMAL;
          return _this3.sendNotification(Notifications.CHANGE_DISPLAY_STATE, state);
        };

        if (core.readyState === 0 || !Utils.isPictureInPictureSupported(core)) return;

        if (core[pip.event] != null) {
          core[pip.event] = onleavepictureinpicture;
        } else {
          core.once(pip.eventName, onleavepictureinpicture);
        }

        pip.enter();
      }
    }, {
      key: "exitPictureInPicture",
      value: function exitPictureInPicture() {
        var pip = this.pictureInPicture;
        if (document[pip.element] == null) return;
        pip.exit();
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "StateController";
      }
    }]);
    return StateController;
  }(Controller);

  var Plugin = /*#__PURE__*/function (_Module) {
    babelHelpers.inherits(Plugin, _Module);

    /**
     * The Plugin class. Acts as a base for plugins.
     *
     * @constructor
     * @private
     * @extends {Module}
     */
    function Plugin() {
      var _this;

      babelHelpers.classCallCheck(this, Plugin);
      _this = _Module.call(this) || this;
      _this.player = null;
      _this.proxy = null;
      return _this;
    }
    /**
     * @override
     */


    babelHelpers.createClass(Plugin, [{
      key: "initialize",
      value: function initialize(config, player) {
        this.player = player;
        this.logger = this.player.logger;
        babelHelpers.get(babelHelpers.getPrototypeOf(Plugin.prototype), "initialize", this).call(this, config, player);
      }
      /** */

    }, {
      key: "isAvailable",
      value: function isAvailable() {
        return true;
      }
      /** */

    }, {
      key: "loadModuleResources",
      value: function loadModuleResources() {
        if (!this.isAvailable()) {
          return Promise.resolve();
        }

        return babelHelpers.get(babelHelpers.getPrototypeOf(Plugin.prototype), "loadModuleResources", this).call(this);
      }
      /**
       * @override
       */

    }, {
      key: "resourcesLoaded",
      value: function resourcesLoaded() {
        if (typeof this.oninitialized === "function") {
          this.oninitialized(this);
        }
      }
      /** @override */

    }, {
      key: "onRegister",
      value: function onRegister() {
        if (this.isAvailable()) {
          this.createFramework();
          var proxy = this.retrieveProxy(PluginProxy.NAME);

          if (proxy && typeof proxy.initialize === "function") {
            proxy.initialize();
          }
        }

        this.performance.record("ready");
        this.sendNotification(PluginNotifications.PLUGIN_REGISTERED, this);
      }
      /** @override */

    }, {
      key: "logEvent",
      value: function logEvent(event) {
        if (this.ignoreEvents.test(event.type) === true) {
          return;
        }

        var prefix = this.player.getModuleName().toUpperCase() + " " + this.getModuleName().toUpperCase();

        if (event.dispatcher != null) {
          prefix += " " + event.dispatcher;
        }

        this.logger.log("[".concat(prefix, " EVENT] ").concat(event.type), event);
      }
      /** @override */

    }, {
      key: "listNotificationPublications",
      value: function listNotificationPublications() {
        var notes = [Notifications.ADD_LAYER, Notifications.REMOVE_LAYER, Notifications.ADD_OVERLAY, Notifications.REMOVE_OVERLAY, Notifications.ADD_APPLICATION_STATE, Notifications.REMOVE_APPLICATION_STATE, Notifications.PLAYBACK_CORE_CHANGE];
        return notes.concat(Object.values(PluginNotifications));
      }
    }]);
    return Plugin;
  }(Module);

  var PluginsController = /*#__PURE__*/function (_puremvc$Mediator) {
    babelHelpers.inherits(PluginsController, _puremvc$Mediator);

    /**
     * @constructor
     * @private
     */
    function PluginsController() {
      var _this;

      babelHelpers.classCallCheck(this, PluginsController);
      _this = _puremvc$Mediator.call(this, PluginsController.NAME) || this;
      _this.plugins = [];
      _this.registered = 0;
      return _this;
    }
    /**
     * @static
     * @type {string}
     */


    babelHelpers.createClass(PluginsController, [{
      key: "listNotificationInterests",
      value:
      /**
       * Overridden so this class may subscribe to all notifications
       * @return An Array
       *
       * @override
       */
      function listNotificationInterests() {
        return [PluginNotifications.REGISTER_PLUGINS, PluginNotifications.PLUGIN_REGISTERED, PluginNotifications.PLUGINS_INITIALIZED, Notifications.DESTROY];
      }
      /**
       * Handles notifications of interest to this mediator. Note that
       * the default declaration is to allow the super to handle the
       * note. This leaves the base JunctionMediator to handle things
       * like ACCEPT_INPUT_PIPE and ACCEPT_OUTPUT_PIPE
       *
       * @param note An INotification
       * @override
       */

    }, {
      key: "handleNotification",
      value: function handleNotification(notification) {
        var _this2 = this;

        var name = notification.getName();
        var body = notification.getBody();

        switch (name) {
          case PluginNotifications.REGISTER_PLUGINS:
            var config = body;
            this.facade.plugins = []; // load internal PureMVC based plugins

            fp.each(AMP.plugins, function (def, key) {
              if (!(key in config)) {
                return;
              }

              var init = config[key];

              if (init == null || init.enabled === false) {
                return;
              }

              if (def == null) {
                _this2.facade.logger.debug("[AMP] Plugin could not be found: ".concat(key));

                return;
              }

              try {
                var plugin = new def();
                plugin.oninitialized = _this2.onplugininitialized.bind(_this2, key);
                plugin.onerror = _this2.onpluginerror.bind(_this2, key);

                _this2.plugins.push(plugin.initialize.bind(plugin, init, _this2.facade));
              } catch (error) {
                _this2.facade.logger.error("[AMP] Plugin could not be created: ".concat(key, ". ").concat(error));

                return;
              }
            }); // load external promise based plugins

            config.plugins || {};
            fp.each(config.plugins || {}, function (init, key) {
              if (init == null || init.enabled === false) {
                return;
              }

              var initialize = function initialize(player, config, key, resolve, reject) {
                return _this2.facade.loadResources(config.resources).then(function () {
                  var def = AMP.plugins[key];

                  if (def == null) {
                    reject("[AMP] Plugin could not be found: ".concat(key));
                  }

                  return def(player, config, key);
                }).then(resolve)["catch"](reject);
              };

              _this2.plugins.push(initialize.bind(null, _this2.facade, init, key, _this2.onpluginregistered.bind(_this2, key), _this2.onpluginerror.bind(_this2, key)));
            });
            this.plugins.forEach(function (item) {
              return item();
            });
            break;

          case PluginNotifications.PLUGIN_REGISTERED:
            this.onpluginregistered(body.getModuleName(), body);
            break;

          case PluginNotifications.PLUGINS_INITIALIZED:
            this.sendNotification(Notifications.STARTUP, this.facade.config);
            break;

          case Notifications.DESTROY:
            fp.each(this.facade.plugins, function (plugin) {
              if (plugin.destroy) {
                try {
                  plugin.destroy();
                } catch (error) {
                  _this2.facade.logger.error(error);
                }
              }
            });
            break;
        }
      }
    }, {
      key: "initializedCheck",
      value: function initializedCheck() {
        if (this.registered === this.plugins.length) {
          this.sendNotification(PluginNotifications.PLUGINS_INITIALIZED, this.plugins);
        }
      }
    }, {
      key: "onplugininitialized",
      value: function onplugininitialized(key, plugin) {
        plugin.oninitialized = null;
        plugin.onerror = null;
        this.facade.registerModule(plugin);
      }
    }, {
      key: "onpluginerror",
      value: function onpluginerror(key, error) {
        this.registered++;
        this.facade.logger.error("[AMP] Plugin could not be registered: ".concat(key));
        this.facade.logger.error(error);
        this.initializedCheck();
      }
    }, {
      key: "onpluginregistered",
      value: function onpluginregistered(key, plugin) {
        if (this.facade[key] != null) {
          return;
        }

        this.registered++;
        this.facade.logger.debug("[AMP] Plugin registered: ".concat(key));
        this.facade[key] = plugin;
        this.facade.plugins.push(key);
        var feature = plugin.feature;

        if (feature != null) {
          this.facade[feature] = plugin;
        }

        this.initializedCheck();
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "PluginsController";
      }
    }]);
    return PluginsController;
  }(puremvc.Mediator);

  var MediaController = /*#__PURE__*/function (_Controller) {
    babelHelpers.inherits(MediaController, _Controller);

    /**
     * The MediaController class.
     *
     * @param {string} name
     * @param {Object} viewComponent
     * @constructor
     * @private
     * @extends {amp.player.Controller}
     */
    function MediaController() {
      babelHelpers.classCallCheck(this, MediaController);
      return _Controller.call(this, MediaController.NAME) || this;
    }
    /**
     * @static
     * @type {string}
     */


    babelHelpers.createClass(MediaController, [{
      key: "listNotificationInterests",
      value:
      /** @override */
      function listNotificationInterests() {
        return [Notifications.SET_MEDIA, Notifications.CHANGE_MEDIA, Notifications.MEDIA_VALIDATED, AuthEvents.AUTHORIZED, Notifications.RECORD_CONTENT_CHANGE];
      }
      /** */

    }, {
      key: "setmedia",
      value: function setmedia(media) {
        var _this = this;

        // Lock applicationState.setLockedout the user until the media has been fully processed
        this.sendNotification(Notifications.LOCK, true);
        this.facade.busy = true;
        this.applicationState.setBuffering(false);
        this.applicationState.setEnded(false);
        this.playback.setEnabled(false);
        this.playback.pause();

        if (this.tracks != null) {
          this.tracks.clear();
        }

        this.sendNotification(Notifications.HAS_POST_CONTENT, false);
        this.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.READY);
        this.sendNotification(Notifications.CHANGE_ACTIVE_STATE, ActiveState.ACTIVE); // apply the defaults before running transforms

        media = this.media.applyDefaults(media);
        this.security.setMedia(media);
        this.facade.transform(TransformType.MEDIA, media).then(function (result) {
          if (result == null) {
            return;
          } // re-apply the defaults after running transforms


          result = _this.media.applyDefaults(result);

          _this.sendNotification(Notifications.CHANGE_MEDIA, result);
        })["catch"](function (error) {
          _this.sendNotification(Notifications.ERROR, error);
        });
      }
      /** */

    }, {
      key: "changemedia",
      value: function changemedia(media) {
        try {
          //update the metadata
          media = this.media.setData(media);
        } catch (error) {
          this.sendNotification(Notifications.ERROR, error.message);
          return;
        }

        media = this.media.getData();

        if (media.authorization != null) {
          this.security.setAuthorization(media.authorization);
        }

        if (this.security.getAuthorized()) {
          this.sendNotification(AuthEvents.AUTHORIZED, this.security.getAuthorization());
        } else {
          this.sendNotification(AuthEvents.AUTHORIZE, {
            media: media
          });
        }
      }
      /** */

    }, {
      key: "mediavalidated",
      value: function mediavalidated(media) {
        var _this2 = this;

        var mediaElement = this.facade.getMediaElement();
        this.sendNotification(Notifications.MEDIA_CHANGE, media);
        this.playerCore.setPlaybackCore(media).then(function (playback) {
          _this2.sendNotification(Notifications.LOCK, false);

          _this2.facade.busy = false;

          if (playback == null) {
            playback = _this2.player.playback;
          }

          playback.reset();
          playback.setCurrentTime(media.startTime || 0);

          if (_this2.applicationState.getPlaybackTarget() !== "amp") {
            _this2.sendNotification(Notifications.MEDIA_SEQUENCE_INITIALIZED, {
              media: media
            });

            return;
          }

          _this2.tracks.setMedia(media); // get the value of autoplay, muted and inline


          var autoplay = _this2.facade.getAutoplay() && _this2.applicationState.getLocked() === false;

          var muted = _this2.config.getMuted();

          var playsinline = _this2.config.getPlaysInline(); // attempt autoplay calculation on the first playback attempt


          if (_this2.applicationState.calculateAutoplay !== false) {
            _this2.applicationState.calculateAutoplay = false; // only calculate autoplay if the customer opts in

            if (autoplay === true) {
              // get the values for threshold and policy
              var threshold = _this2.facade.autoplayThreshold;
              var policy = _this2.facade.autoplayPolicy; // only calculate autoplay if the browser disallows it and the customer hasn't explicitly opted out

              if (threshold !== AutoplayThreshold.ALLOWED && policy !== AutoplayPolicy.NONE) {
                // customer has explicitly muted playback
                var forceMuted = muted === true; // customer has explicitly inlined playback

                var forceInline = playsinline === true; // only attempt autoplay if the customer opts in

                var attemptMuted = policy.includes(AutoplayPolicy.MUTED); // threshold must be one of the "muted" values

                var mutedAllowed = threshold === AutoplayThreshold.MUTED; // only allow mutedinline if the customer explicitly opts in

                var mutedInlineAllowed = threshold === AutoplayThreshold.MUTED_INLINE && forceInline; // customer has explicitly set muted to false

                var notUnmuted = muted !== false; // have the various requirements for muted playback been fulfilled?

                var canplayMuted = mutedAllowed || mutedInlineAllowed; // autoplay calculation

                autoplay = forceMuted && canplayMuted || attemptMuted && canplayMuted && notUnmuted;

                if (autoplay === true) {
                  // if we've made it this far the player should attempt muted playback
                  muted = true;
                } else {
                  _this2.sendNotification(Notifications.AUTOPLAY_BLOCKED, {
                    threshold: threshold,
                    policy: policy
                  });
                }
              }
            }
          }

          if (playsinline != null) {
            mediaElement.playsInline = playsinline;
          }

          if (muted != null) {
            _this2.playback.setMuted(muted, true, Notifications.INTERNAL);
          }

          _this2.sendNotification(Notifications.MEDIA_SEQUENCE_INITIALIZED, {
            media: media,
            autoplay: autoplay,
            muted: muted === true,
            playsinline: playsinline === true
          });

          if (autoplay === true) {
            _this2.doAfter(_this2.sendNotification.bind(_this2, Notifications.PLAY, true));
          } else {
            var preload = _this2.facade.getPreload() || Preload.NONE;

            if (preload !== Preload.NONE) {
              _this2.playback.preload(preload);
            }
          }
        })["catch"](function (error) {
          _this2.sendNotification(Notifications.ERROR, error);
        });
      }
      /** */

    }, {
      key: "authorized",
      value: function authorized() {
        if (this.security.getSession() != null) {
          return;
        }

        this.security.setSession(Utils.createUID());
        this.sendNotification(Notifications.MEDIA_VALIDATED, this.media.getData());
      }
      /** */

    }, {
      key: "recordcontentchange",
      value: function recordcontentchange(content) {
        this.media.updateData(content);
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "MediaController";
      }
    }]);
    return MediaController;
  }(Controller);

  var TimeController = /*#__PURE__*/function (_Controller) {
    babelHelpers.inherits(TimeController, _Controller);

    /**
     * The TimeController class.
     *
     * @param {string} name
     * @param {Object} viewComponent
     * @constructor
     * @private
     * @extends {amp.player.Controller}
     */
    function TimeController() {
      babelHelpers.classCallCheck(this, TimeController);
      return _Controller.call(this, TimeController.NAME) || this;
    }
    /**
     * @static
     * @type {string}
     */


    babelHelpers.createClass(TimeController, [{
      key: "listNotificationInterests",
      value:
      /** @override */
      function listNotificationInterests() {
        return [Notifications.TIMED_METADATA, Notifications.TIME_CHANGE, Notifications.SEEK, Notifications.SEEKING, Notifications.SEEK_COMPLETE, Notifications.GO_LIVE];
      }
      /** */

    }, {
      key: "timedmetadata",
      value: function timedmetadata(metadata, notification) {
        // properties cannot be added to the value object, so we need to make a shallow copy
        var detail = {
          startTime: metadata.startTime,
          endTime: metadata.endTime,
          type: metadata.type,
          track: metadata.track,
          value: {
            key: metadata.value.key,
            data: metadata.value.data,
            info: metadata.value.info
          }
        };
        var value = detail.value;

        try {
          if (value.info == null) {
            if (typeof value.data === "string") {
              value.info = value.data;
            } else if (value.data instanceof ArrayBuffer) {
              value.info = Utils.arrayBufferToString(value.data);
            }
          }
        } catch (error) {
          this.facade.logger.log("[AMP ERROR]: Could not parse timed metadata");
        }

        notification.body = detail;
      }
      /** */

    }, {
      key: "timechange",
      value: function timechange(time) {
        var _this = this;

        if (time.currentTime != null) {
          this.facade.transform(TransformType.TIME, time.currentTime).then(function (time) {
            return _this.applicationState.setCurrentTime(time);
          });
        }

        if (time.duration != null) {
          this.facade.transform(TransformType.TIME, time.duration).then(function (time) {
            return _this.applicationState.setDuration(time);
          });
        }
      }
      /** */

    }, {
      key: "seek",
      value: function seek(time) {
        var _this2 = this;

        this.facade.transform(TransformType.SEEK, time).then(function (time) {
          if (time == null || time === _this2.playback.getCurrentTime() || _this2.playback.metadataloaded === false) {
            return;
          } // HACK: Setting currentTime to 0 on Akamai HLS streams causes playback at double speed.


          if (time === 0 && _this2.media.getType() === Utils.mimeTypes.m3u8) {
            time = 0.25;
          }

          if (_this2.playback.getStarted() === true) {
            _this2.sendNotification(Notifications.WAITING);
          }

          _this2.facade.getMediaElement();

          _this2.playback.setCurrentTime(time);

          if (_this2.playback.getStarted() !== true) {
            _this2.sendNotification(Notifications.TIME_CHANGE, time);
          }
        });
      }
      /** */

    }, {
      key: "seeking",
      value: function seeking() {
        if (this.applicationState.getSeeking() === true) {
          this.applicationState.setSeekRequested(true);
          return;
        }

        if (this.applicationState.getEnded()) {
          this.applicationState.setEnded(false);
        }

        if (this.facade.getMediaElement().currentTime === 0) {
          this.media.started = false;
        }

        this.applicationState.setSeeking(true);
      }
      /** */

    }, {
      key: "seekcomplete",
      value: function seekcomplete(value, notification) {
        var _this3 = this;

        //TODO: HACK! Safari and HLS will jump back to the original current time, then jump to the seek time
        this.facade.timers.setTimeout(function () {
          _this3.applicationState.setSeeking(false);

          _this3.applicationState.setSeekRequested(false);

          _this3.sendNotification(Notifications.SEEKED, value);

          if (_this3.applicationState.getPlayState() === PlayState.READY) {
            return;
          } //TODO: HACK! Ipad Safari FS mode paused during seek


          if (_this3.applicationState.displayState === "full-screen" && _this3.applicationState.device === "ipad" && _this3.facade.retrieveProxy(PlaybackProxy.NAME).getPaused() !== _this3.facade.getMediaElement().paused) {
            var state = _this3.facade.getMediaElement().paused === true ? PlayState.PAUSED : PlayState.PLAYING;

            _this3.sendNotification(Notifications.CHANGE_PLAY_STATE, state);
          }
        }, 1);
      }
      /** */

    }, {
      key: "golive",
      value: function golive() {
        if (typeof this.playback.goLive === "function") {
          this.playback.goLive();
        }
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "TimeController";
      }
    }]);
    return TimeController;
  }(Controller);

  var VolumeController = /*#__PURE__*/function (_Controller) {
    babelHelpers.inherits(VolumeController, _Controller);

    /**
     * The VolumeController class.
     *
     * @param {string} name
     * @param {Object} viewComponent
     * @constructor
     * @private
     * @extends {amp.player.Controller}
     */
    function VolumeController() {
      babelHelpers.classCallCheck(this, VolumeController);
      return _Controller.call(this, VolumeController.NAME) || this;
    }
    /**
     * @static
     * @type {string}
     */


    babelHelpers.createClass(VolumeController, [{
      key: "listNotificationInterests",
      value:
      /** @override */
      function listNotificationInterests() {
        return [Notifications.VOLUME_CHANGE, Notifications.CHANGE_VOLUME, Notifications.CHANGE_MUTED, Notifications.TOGGLE_MUTED];
      }
      /** */

    }, {
      key: "changevolume",
      value: function changevolume(volume) {
        //update the playback core
        volume = Utils.clamp(volume, 0, 1);

        if (this.playback.getVolume() === volume) {
          return;
        }

        this.playback.setVolume(volume);

        if (volume === 0) {
          this.sendNotification(Notifications.ADD_APPLICATION_STATE, "muted");
        } else {
          this.sendNotification(Notifications.REMOVE_APPLICATION_STATE, "muted");
        }
      }
      /** */

    }, {
      key: "volumechange",
      value: function volumechange(volume) {
        this.applicationState.setVolume(volume);
      }
      /** */

    }, {
      key: "changemuted",
      value: function changemuted(muted) {
        this.playback.setMuted(muted);
      }
      /** */

    }, {
      key: "togglemuted",
      value: function togglemuted() {
        this.playback.setMuted(!this.playback.getMuted());
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "VolumeController";
      }
    }]);
    return VolumeController;
  }(Controller);

  var Settings = /*#__PURE__*/function () {
    /** */
    function Settings(overrides) {
      babelHelpers.classCallCheck(this, Settings);
      var settings = Object.assign({}, Settings.defaults);
      settings = Utils.override(settings, overrides, false);
      Utils.override(this, settings, false);
    }
    /** */


    babelHelpers.createClass(Settings, null, [{
      key: "create",
      value: function create(overrides) {
        return new Settings(overrides);
      }
    }]);
    return Settings;
  }();
  /** */

  Settings.defaults = {
    version: "1.0.1",
    // this is the version of the Settings data model. Used to synchronize user settings when the model's structure changes
    volume: 1,
    captions: {
      presets: {
        fontFamily: {
          monospacedSerif: "'Courier New', Courier, 'Nimbus Mono L', 'Cutive Mono', monospace",
          proportionalSerif: "'Times New Roman', Times, Georgia, Cambria, 'PT Serif Caption', serif",
          monospacedSansSerif: "'Deja Vu Sans Mono', 'Lucida Console', Monaco, Consolas, 'PT Mono', monospace",
          proportionalSansSerif: "Roboto, 'Arial Unicode Ms', Arial, Helvetica, Verdana, 'PT Sans Caption', sans-serif",
          casual: "'Comic Sans MS', Impact, Handlee, fantasy",
          cursive: "'Monotype Corsiva', 'URW Chancery L', 'Apple Chancery', 'Dancing Script', cursive",
          smallCapitals: "'Arial Unicode Ms', Arial, Helvetica, Verdana, 'Marcellus SC', sans-serif; font-variant: small-caps"
        },
        fontSize: {
          smallest: "x-small",
          small: "small",
          medium: "medium",
          large: "large",
          largest: "x-large"
        },
        iosFontSize: {
          smallest: "62.5%",
          small: "83.333%",
          medium: "100%",
          large: "112.5%",
          largest: "150%"
        },
        edgeType: {
          none: "0px 0px 0px",
          depressed: "0px 1px 0px",
          leftShadow: "-3px 3px 2px",
          raised: "0px 1px 1px",
          rightShadow: "3px 3px 2px",
          uniform: "0px 0px 4px"
        },
        color: {
          white: "rgb(255, 255, 255)",
          yellow: "rgb(255, 255, 0)",
          green: "rgb(0, 128, 0)",
          cyan: "rgb(0, 255, 255)",
          blue: "rgb(0, 0, 255)",
          magenta: "rgb(255, 0, 255)",
          red: "rgb(255, 0, 0)",
          black: "rgb(0, 0, 0)"
        }
      },
      visible: false,
      fontFamily: "monospacedSerif",
      fontSize: "medium",
      scroll: "popout",
      fontColor: "white",
      fontOpacity: "100%",
      edgeType: "rightShadow",
      edgeColor: "black",
      edgeOpacity: "75%",
      backgroundColor: "black",
      backgroundOpacity: "0%",
      windowColor: "black",
      windowOpacity: "50%",
      styles: {
        window: {
          backgroundColor: "rgba(0,0,0,0.5)"
        },
        text: {
          fontFamily: "Courier New, Courier, Nimbus Mono L, Cutive Mono, monospace",
          fontSize: "100%",
          color: "rgba(255,255,255,1)",
          textShadow: "2px 2px 3px rgba(0,0,0,0.75)",
          backgroundColor: "rgba(0,0,0,0)"
        }
      }
    }
  };

  var namespace = "akamai_amp";

  var SettingsController = /*#__PURE__*/function (_Controller) {
    babelHelpers.inherits(SettingsController, _Controller);

    /**
     * The SettingsController class.
     *
     * @param {string} name
     * @param {Object} viewComponent
     * @constructor
     * @private
     * @extends {amp.player.Controller}
     */
    function SettingsController() {
      var _this;

      babelHelpers.classCallCheck(this, SettingsController);
      _this = _Controller.call(this, SettingsController.NAME) || this;
      _this.namespace = SettingsController.NAMESPACE;
      return _this;
    }

    babelHelpers.createClass(SettingsController, [{
      key: "onRegister",
      value:
      /** @override */
      function onRegister() {
        // get customer supplied settings configurations
        var config = this.config.getSettings() || {};

        if (config.namespace != null) {
          this.namespace = namespace = config.namespace;
        } // intialize the saved settings with the defaults Object


        this.settings = Settings.create(config.defaults); // overrides

        var overrides = Object.assign({}, config);
        delete overrides.defaults;
        delete overrides.namespace;

        try {
          // get end user settings
          var data = localStorage.getItem(this.namespace);
          var settings;

          if (data != null) {
            settings = Utils.override(JSON.parse(data), overrides);
          } // update the settings object with end user settings


          this.save(settings);
        } catch (error) {}
      }
      /** @override */

    }, {
      key: "listNotificationInterests",
      value: function listNotificationInterests() {
        return [Notifications.READY, Notifications.VOLUME_CHANGE, Notifications.CHANGE_SETTINGS, Notifications.CHANGE_AUTOPLAY, Notifications.CHANGE_LOOP, Notifications.CHANGE_PRELOAD, Notifications.CHANGE_CONTROLS, Notifications.MEDIA_CHANGE];
      }
      /** */

    }, {
      key: "changesettings",
      value: function changesettings(settings) {
        this.change(settings);
      }
      /** */

    }, {
      key: "changeautoplay",
      value: function changeautoplay(value) {
        this.config.setAutoplay(value);
      }
      /** */

    }, {
      key: "changeloop",
      value: function changeloop(value) {
        this.config.setLoop(value);
      }
      /** */

    }, {
      key: "changepreload",
      value: function changepreload(value) {
        this.config.setPreload(value);
      }
      /** */

    }, {
      key: "changecontrols",
      value: function changecontrols(value) {
        this.config.setControls(value);
        this.updateControls();
      }
      /** */

    }, {
      key: "updateControls",
      value: function updateControls() {
        this.player.mediaElement.controls = this.config.getControls();
      }
      /** */

    }, {
      key: "mediachange",
      value: function mediachange(value) {
        this.updateControls();
      }
      /** */

    }, {
      key: "ready",
      value: function ready() {
        var value = this.settings.volume;

        if (value != null) {
          this.sendNotification(Notifications.CHANGE_VOLUME, value);
        }
      }
      /** */

    }, {
      key: "volumechange",
      value: function volumechange(volume, notification) {
        if (this.settings.volume === volume) {
          return;
        } // Only record change made the the user, ignore changes initiated internally by the player


        if (notification.getType() == "internal") return;
        this.change({
          volume: volume
        });
      }
      /** */

    }, {
      key: "computeStyles",
      value: function computeStyles(captions, presets) {
        captions = Utils.override(this.settings.captions, captions);

        if (presets == null) {
          presets = captions.presets;
        }

        function preset(type) {
          var dflt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : captions[type];
          return presets[type][dflt] || dflt;
        }

        function toColor(type) {
          var color = CSS.toColor(preset("color", captions[type + "Color"]));
          var opacity = captions[type + "Opacity"];

          if (opacity != null) {
            color.a = CSS.fromPercent(opacity);
          }

          return CSS.fromColor(color);
        }

        function getFontSize() {
          var size = preset("fontSize"); //IOS Fullscreen devices do not support <absolute> font-size type

          if (Utils.isIOS()) size = CSS.toPercent(preset("iosFontSize", captions["fontSize"]));
          return size;
        }

        return {
          window: {
            backgroundColor: toColor("window")
          },
          text: {
            fontFamily: preset("fontFamily"),
            fontSize: getFontSize(),
            color: toColor("font"),
            textShadow: preset("edgeType") + " " + toColor("edge"),
            backgroundColor: toColor("background")
          }
        };
      }
      /** */

    }, {
      key: "change",
      value: function change(settings) {
        if (settings == null || babelHelpers["typeof"](settings) !== "object" || settings instanceof Array) {
          return;
        }

        var changes = Utils.diff(this.settings, settings);

        if (changes == null) {
          return;
        }

        var captions = changes.captions;

        if (captions != null) {
          captions.styles = Utils.override(this.computeStyles(captions), captions.styles);
        }

        this.save(changes);
        this.sendNotification(Notifications.SETTINGS_CHANGE, changes);
      }
      /** */

    }, {
      key: "getSettings",
      value: function getSettings() {
        return Object.freeze(Object.assign({
          change: this.change.bind(this)
        }, this.settings));
      }
      /** */

    }, {
      key: "save",
      value: function save(settings) {
        this.settings = Utils.override(this.settings, settings);

        try {
          localStorage.setItem(this.namespace, JSON.stringify(this.settings));
        } catch (error) {}
      }
    }], [{
      key: "NAMESPACE",
      get: function get() {
        return namespace;
      }
    }, {
      key: "GET",
      value: function GET() {
        var settings = localStorage.getItem(SettingsController.NAMESPACE);

        try {
          settings = JSON.parse(settings);
        } catch (error) {
          settings = {};
        }

        return settings || {};
      }
      /**
       * @static
       * @type {string}
       */

    }, {
      key: "NAME",
      get: function get() {
        return "SettingsController";
      }
    }]);
    return SettingsController;
  }(Controller);

  var EventController = /*#__PURE__*/function (_Controller) {
    babelHelpers.inherits(EventController, _Controller);

    /**
     * The EventController class.
     *
     * @param {string} name
     * @param {Object} viewComponent
     * @constructor
     * @private
     * @extends {amp.player.controller.Controller}
     */
    function EventController(name, viewComponent) {
      babelHelpers.classCallCheck(this, EventController);
      return _Controller.call(this, EventController.NAME, viewComponent) || this;
    }
    /**
     * @static
     * @type {string}
     */


    babelHelpers.createClass(EventController, [{
      key: "dispatchEvent",
      value:
      /**
       *
       */
      function dispatchEvent(type, detail) {
        this.facade.dispatch(type, detail);
      }
      /** @override */

    }, {
      key: "listNotificationInterests",
      value: function listNotificationInterests() {
        return Object.values(Events).concat(Object.values(AuthEvents)).concat([Notifications.ENABLE_VIDEO_EVENTS, Notifications.DISABLE_VIDEO_EVENTS]);
      }
      /**
       * Handles notifications of interest to this mediator.
       *
       * @param note An INotification
       * @override
       */

    }, {
      key: "handleNotification",
      value: function handleNotification(notification) {
        var name = notification.getName();

        if (this[name] != null) {
          babelHelpers.get(babelHelpers.getPrototypeOf(EventController.prototype), "handleNotification", this).call(this, notification);
        } else {
          this.dispatchEvent(name, notification.getBody());
        }
      }
      /** */

    }, {
      key: "error",
      value: function error() {}
      /** */

    }, {
      key: "enablevideoevents",
      value: function enablevideoevents(events) {
        var _this = this;

        var video = this.facade.getMediaElement();
        events.forEach(function (event) {
          return video.addEventListener(event, _this.playback.handlers[event]);
        });
      }
      /** */

    }, {
      key: "disablevideoevents",
      value: function disablevideoevents(events) {
        var _this2 = this;

        var video = this.facade.getMediaElement();
        events.forEach(function (event) {
          return video.removeEventListener(event, _this2.playback.handlers[event]);
        });
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "EventController";
      }
    }]);
    return EventController;
  }(Controller);

  var Player = /*#__PURE__*/function (_Module) {
    babelHelpers.inherits(Player, _Module);

    /**
     * The base player class.
     *
     * @param {Object} config
     * @param {Object} viewComponent
     * @constructor
     * @private
     * @extends {Module}
     */
    function Player(viewComponent) {
      var _this;

      babelHelpers.classCallCheck(this, Player);
      _this = _Module.call(this, viewComponent) || this;
      _this.ads = EventDispatcher.create();
      _this.ads.enabled = false;

      _this.ads.getEnabled = function () {
        return false;
      };

      _this.ads.inprogress = false;

      _this.ads.getInProgress = function () {
        return false;
      };

      _this.loadResources = _this.loadModuleResources.bind(babelHelpers.assertThisInitialized(_this));
      _this.presentationModeChanged = _this.presentationModeChanged.bind(babelHelpers.assertThisInitialized(_this));
      _this.moduleName = "amp";
      _this.l10n = null;
      _this.appState = null;
      _this.mediaProxy = null;
      _this.bindings = null;
      _this.configuration = null;
      _this.security = null;
      _this.playerCore = null;
      _this.tracks = null;
      _this.mediator = null;
      return _this;
    }
    /** */


    babelHelpers.createClass(Player, [{
      key: "createModel",
      value: function createModel() {
        this.appState = new ApplicationStateProxy();
        this.registerProxy(this.appState);
        this.security = new SecurityProxy();
        this.registerProxy(this.security);
        this.mediaProxy = new MediaProxy(this.config);
        this.registerProxy(this.mediaProxy);
        this.configuration = new ConfigurationProxy(this.config);
        this.registerProxy(this.configuration);
        this.localization = new LocalizationProxy(this.config);
        this.registerProxy(this.localization);
        var playbackProxy = new PlaybackCoreProxy();
        this.registerProxy(playbackProxy);
        this.playerCore = new PlayerProxy(playbackProxy, this.config);
        this.registerProxy(this.playerCore);
        this.tracks = new TracksProxy();
        this.registerProxy(this.tracks);
        this.fps = Utils.override(FPS, this.config.fps);
      }
      /** @override */

    }, {
      key: "createView",
      value: function createView() {
        // Register the ApplicationMediator passing the Application instance to its constructor.
        this.mediator = new PlayerMediator("html5", this.getViewComponent());
        this.registerMediator(this.mediator);
        this.registerMediator(new VideoLayerMediator()); // Create the overlay container

        this.registerMediator(new OverlayLayerMediator()); // // Create the ad container

        this.adMediator = new AdContainerMediator();
        this.registerMediator(this.adMediator);
      }
      /** @override */

    }, {
      key: "createController",
      value: function createController() {
        babelHelpers.get(babelHelpers.getPrototypeOf(Player.prototype), "createController", this).call(this);
        this.registerMediator(new CoreController());
        this.registerMediator(new PlayerController());
        this.registerMediator(new StateController());
        this.registerMediator(new PluginsController());
        this.registerMediator(new MediaController());
        this.registerMediator(new PlaybackController());
        this.registerMediator(new TimeController());
        this.registerMediator(new VolumeController());
        this.registerMediator(new EventController());
        this._settings = new SettingsController();
        this.registerMediator(this._settings);
      }
      /** @override */

    }, {
      key: "dispatchEvent",
      value: function dispatchEvent(event) {
        event.player = this;
        babelHelpers.get(babelHelpers.getPrototypeOf(Player.prototype), "dispatchEvent", this).call(this, event);
      }
      /** @override */

    }, {
      key: "setViewComponent",
      value: function setViewComponent(viewComponent) {
        viewComponent["amp"] = this;
        return babelHelpers.get(babelHelpers.getPrototypeOf(Player.prototype), "setViewComponent", this).call(this, viewComponent);
      }
      /** */

    }, {
      key: "getPlayer",
      value: function getPlayer() {
        return this._player;
      }
    }, {
      key: "setPlayer",
      value: function setPlayer(value) {
        this._player = value;
      }
    }, {
      key: "player",
      get: function get() {
        return this.getPlayer();
      },
      set: function set(value) {
        this.setPlayer(value);
      }
      /** */

    }, {
      key: "now",
      get: function get() {
        return Date.now();
      }
      /** */

    }, {
      key: "paths",
      get: function get() {
        return this.configuration.getPaths();
      }
      /** */

    }, {
      key: "timers",
      get: function get() {
        return Utils.timerGroup(this.multitonKey);
      }
      /** */

    }, {
      key: "autoplayPolicy",
      get: function get() {
        return this.configuration.getAutoplayPolicy();
      }
      /** */

    }, {
      key: "autoplayThreshold",
      get: function get() {
        return AutoplayThreshold.threshold;
      }
      /** */

    }, {
      key: "temporalType",
      get: function get() {
        return this.mediaProxy.getTemporalType();
      }
      /** */

    }, {
      key: "isLive",
      get: function get() {
        return this.mediaProxy.getIsLive();
      }
      /** */

    }, {
      key: "textTracks",
      get: function get() {
        return this.getMediaElement().textTracks;
      }
      /** */

    }, {
      key: "defaultMediaTransform",
      get: function get() {
        return this.mediaProxy.applyDefaults;
      }
      /** */

    }, {
      key: "getPID",
      value: function getPID() {
        return AMP.LICENSE || this.config.pid;
      }
    }, {
      key: "pid",
      get: function get() {
        return this.getPID();
      }
      /** */

    }, {
      key: "getVersion",
      value: function getVersion() {
        return AMP.getVersion();
      }
    }, {
      key: "version",
      get: function get() {
        return this.getVersion();
      }
      /** */

    }, {
      key: "getDebug",
      value: function getDebug() {
        return this.config.debug;
      }
    }, {
      key: "debug",
      get: function get() {
        return this.getDebug();
      }
      /** */

    }, {
      key: "createPlugins",
      value: function createPlugins() {
        this.sendNotification(PluginNotifications.REGISTER_PLUGINS, this.config);
      }
      /** */

    }, {
      key: "createMediaElement",
      value: function createMediaElement() {
        var view = this.getViewComponent() || {};
        var element = (typeof view.querySelector === "function" ? view.querySelector("video") : null) || "video";
        this.mediator = new MediaElementMediator("html5", element);
        this.sendNotification(Notifications.PLAYBACK_CORE_CHANGE, this.mediator);
        var viewComponent = this.mediator.getViewComponent();

        if (viewComponent.dataset == null) {
          viewComponent.dataset = {};
        }

        return viewComponent;
      }
      /** @override */

    }, {
      key: "createFramework",
      value: function createFramework() {
        babelHelpers.get(babelHelpers.getPrototypeOf(Player.prototype), "createFramework", this).call(this);
        this.setMediaElement(this.createMediaElement());
        this.createPlugins();
      }
      /**
      */

    }, {
      key: "getLanguage",
      value: function getLanguage() {
        return this.localization.getLanguage();
      }
    }, {
      key: "language",
      get: function get() {
        return this.getLanguage();
      }
      /**
      */
      ,
      set: function set(value) {
        return this.setLanguage(value);
      }
      /**
      */

    }, {
      key: "setLanguage",
      value: function setLanguage(value) {
        this.localization.setLanguage(value);
        return value;
      }
    }, {
      key: "getLocalizedString",
      value: function getLocalizedString(value, context) {
        try {
          return this.localization.getString(value, context);
        } catch (error) {
          return value;
        }
      }
      /**
       * @return {HTMLObject|HTMLMediaElement} The media playback DOM element.
       */

    }, {
      key: "getMediaElement",
      value: function getMediaElement() {
        return this.appState.getMediaElement();
      }
    }, {
      key: "mediaElement",
      get: function get() {
        return this.getMediaElement();
      }
      /** */

    }, {
      key: "setMediaElement",
      value: function setMediaElement(value) {
        var mediaElement = this.getMediaElement();

        if (mediaElement != null) {
          mediaElement.removeEventListener("webkitpresentationmodechanged", this.presentationModeChanged);
        }

        value.addEventListener("webkitpresentationmodechanged", this.presentationModeChanged);
        this.appState.setMediaElement(value);

        if (value.once == null) {
          value.once = function (type, listener) {
            var id = Utils.createUID();

            var handler = function handler(id, type, listener, event) {
              this.removeEventListener(type, this[id]);
              delete this[id];
              listener(event);
            };

            this[id] = handler.bind(this, id, type, listener);
            this.addEventListener(type, this[id]);
            return id;
          };

          value.once = value.once.bind(value);
        }

        value.amp = this;
        return value;
      }
      /**
       * HACK: Fix for iOS 10 manipulating controls property incorrectly after leaving fullscreen
       */

    }, {
      key: "presentationModeChanged",
      value: function presentationModeChanged(event) {
        if ("inline" === event.target.webkitPresentationMode) {
          event.target.controls = this.getControls();
        }
      }
      /**
       * @return {boolean}
       */

    }, {
      key: "setControls",
      value: function setControls(value) {
        return this.sendNotification(Notifications.CHANGE_CONTROLS, value);
      }
    }, {
      key: "controls",
      get: function get() {
        return this.getControls();
      }
      /**
       * @return {HTMLElement} The container div.
       */
      ,
      set: function set(value) {
        return this.setControls(value);
      }
      /**
       *
       */

    }, {
      key: "getControls",
      value: function getControls() {
        return this.configuration.getControls();
      }
    }, {
      key: "getContainer",
      value: function getContainer() {
        return this.getViewComponent();
      }
    }, {
      key: "container",
      get: function get() {
        return this.getContainer();
      }
      /**
       *
       */

    }, {
      key: "getAdContainer",
      value: function getAdContainer() {
        return this.adMediator.getContainer();
      }
    }, {
      key: "adContainer",
      get: function get() {
        return this.getAdContainer();
      }
      /**
       *
       */
      ,
      set: function set(value) {
        return this.setAdContainer(value);
      }
      /**
       * @return {PreviewTrack} The preview track.
       */

    }, {
      key: "setAdContainer",
      value: function setAdContainer(value) {
        this.adMediator.setContainer(value);
      }
    }, {
      key: "getPreviewTracks",
      value: function getPreviewTracks() {
        return this.tracks.getPreviewTracks();
      }
    }, {
      key: "previewTracks",
      get: function get() {
        return this.getPreviewTracks();
      }
      /**
       * @return {HTMLElement} The container div.
       */

    }, {
      key: "getAudioTracks",
      value: function getAudioTracks() {
        return this.tracks.getAudioTracks();
      }
    }, {
      key: "audioTracks",
      get: function get() {
        return this.getAudioTracks();
      }
      /**
       * @param   {Object}  binding
       *    A data bound object to evaluate.
       *
       * @param   {?Object}  context
       *    Context object to pass to the bindings
       *
       * @return {Object}
       *    The evaluated result
       */

    }, {
      key: "evaluateBindings",
      value: function evaluateBindings(binding, context) {
        if (context != null) {
          context = Object.assign({}, this, context);
        } else {
          context = this;
        }

        return DataBinding.evaluateBindings(binding, context);
      }
      /**
       * Determines if the core can play a given mimeType.
       *
       * @param   {string}  type
       *    The mimetype to check.
       *
       * @return  {string}  ""
       *    if the core can't play the mimeType
       */

    }, {
      key: "canPlayType",
      value: function canPlayType(type) {
        return this.retrieveProxy(PlaybackProxy.NAME).canPlayType(type);
      }
      /**
       * Loads the video.
       */

    }, {
      key: "load",
      value: function load() {
        this.sendNotification(Notifications.LOAD);
      }
      /**
       * Plays the currently loaded video.
       */

    }, {
      key: "play",
      value: function play() {
        var _this2 = this;

        return new Promise(function (resolve, reject) {
          var clear = function clear() {
            _this2.removeEventListener(Events.PLAYING, res);

            _this2.removeEventListener(Events.AUTOPLAY_BLOCKED, rej);

            _this2.removeEventListener(Events.ERROR, rej);
          };

          var res = function res() {
            clear();
            resolve();
          };

          var rej = function rej() {
            clear();
            reject();
          };

          _this2.addEventListener(Events.PLAYING, res);

          _this2.addEventListener(Events.AUTOPLAY_BLOCKED, rej);

          _this2.addEventListener(Events.ERROR, rej);

          _this2.sendNotification(Notifications.PLAY, true);
        });
      }
      /**
       * Plays the currently loaded video from its start time.
       */

    }, {
      key: "replay",
      value: function replay() {
        this.sendNotification(Notifications.REPLAY);
      }
      /**
       * Pauses the currently loaded video.
       */

    }, {
      key: "pause",
      value: function pause() {
        var _this3 = this;

        return new Promise(function (resolve, reject) {
          _this3.once(Events.PAUSED, resolve);

          return _this3.sendNotification(Notifications.PAUSE);
        });
      }
      /**
       * Sets the current time of the video.
       */

    }, {
      key: "seek",
      value: function seek(value) {
        var _this4 = this;

        return new Promise(function (resolve, reject) {
          _this4.once(Events.SEEKED, resolve);

          return _this4.setCurrentTime(value);
        });
      }
      /**
       * Ends video playback.
       */

    }, {
      key: "end",
      value: function end() {
        var _this5 = this;

        return new Promise(function (resolve) {
          _this5.once(Events.ENDED, resolve);

          return _this5.sendNotification(Notifications.END);
        });
      }
      /**
       * Sets auto play flag.
       *
       * @param {boolean} value The autoplay flag.
       */

    }, {
      key: "setAutoplay",
      value: function setAutoplay(value) {
        this.sendNotification(Notifications.CHANGE_AUTOPLAY, value);
        return value;
      }
    }, {
      key: "autoplay",
      get: function get() {
        return this.getAutoplay();
      }
      /**
       * Sets preload value.
       *
       * @param {string} value The preload value.
       */
      ,
      set: function set(value) {
        return this.setAutoplay(value);
      }
      /**
       * Gets auto play flag.
       *
       * @return {boolean} The autoplay flag.
       */

    }, {
      key: "getAutoplay",
      value: function getAutoplay() {
        return this.configuration.getAutoplay();
      }
    }, {
      key: "setPreload",
      value: function setPreload(value) {
        this.sendNotification(Notifications.CHANGE_PRELOAD, value);
        return value;
      }
    }, {
      key: "preload",
      get: function get() {
        return this.getPreload();
      }
      /**
       * Sets player's loop flag.
       *
       * @param {boolean} value The loop flag.
       */
      ,
      set: function set(value) {
        return this.setPreload(value);
      }
      /**
       * Gets preload value.
       *
       * @return {boolean} The preload value.
       */

    }, {
      key: "getPreload",
      value: function getPreload() {
        return this.configuration.getPreload();
      }
    }, {
      key: "setLoop",
      value: function setLoop(value) {
        this.sendNotification(Notifications.CHANGE_LOOP, value);
        return value;
      }
    }, {
      key: "loop",
      get: function get() {
        return this.getLoop();
      }
      /**
       * Sets player's muted value.
       *
       * @param {boolean} value The muted value.
       */
      ,
      set: function set(value) {
        return this.setLoop(value);
      }
      /**
       * Gets player's loop flag.
       *
       * @return {boolean} The loop flag.
       */

    }, {
      key: "getLoop",
      value: function getLoop() {
        return this.configuration.getLoop();
      }
    }, {
      key: "setMuted",
      value: function setMuted(value) {
        this.sendNotification(Notifications.CHANGE_MUTED, value);
        return value;
      }
    }, {
      key: "muted",
      get: function get() {
        return this.getMuted();
      }
      /**
       * Mutes the player.
       */
      ,
      set: function set(value) {
        return this.setMuted(value);
      }
      /**
       * Gets player's muted value.
       *
       * @return {boolean} The muted value.
       */

    }, {
      key: "getMuted",
      value: function getMuted() {
        return this.retrieveProxy(PlaybackProxy.NAME).getMuted();
      }
    }, {
      key: "mute",
      value: function mute() {
        return this.setMuted(true);
      }
      /**
       * Unmutes the player.
       */

    }, {
      key: "unmute",
      value: function unmute() {
        return this.setMuted(false);
      }
      /**
       * Sets the media object.
       *
       * @param {Object} value The media object for the video to play.
       */

    }, {
      key: "setMedia",
      value: function setMedia(value) {
        this.sendNotification(Notifications.SET_MEDIA, value);
        return value;
      }
    }, {
      key: "media",
      get: function get() {
        return this.getMedia();
      }
      /**
       * Sets the current time of the video.
       *
       * @param {number} value The desired time to seek to.
       */
      ,
      set: function set(value) {
        return this.setMedia(value);
      }
      /**
       * Gets the media object.
       *
       * @return {Object} The media object for the video to play.
       */

    }, {
      key: "getMedia",
      value: function getMedia() {
        return this.mediaProxy.getData();
      }
    }, {
      key: "setCurrentTime",
      value: function setCurrentTime(value) {
        this.sendNotification(Notifications.SEEK, value);
        return value;
      }
    }, {
      key: "currentTime",
      get: function get() {
        return this.getCurrentTime();
      }
      /**
       * Sets the current time of the video.
       *
       * @param {number} value The desired time to seek to.
       */
      ,
      set: function set(value) {
        return this.setCurrentTime(value);
      }
      /**
       * Gets the current time of the video.
       *
       * @return {number} The current playhead time.
       */

    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
        return this.appState.getCurrentTime();
      }
    }, {
      key: "setAbsoluteCurrentTime",
      value: function setAbsoluteCurrentTime(value) {
        this.sendNotification(Notifications.SEEK, value);
        return value;
      }
    }, {
      key: "absoluteCurrentTime",
      get: function get() {
        return this.getAbsoluteCurrentTime();
      }
      /** */
      ,
      set: function set(value) {
        return this.setAbsoluteCurrentTime(value);
      }
      /**
       * Gets the current time of the video.
       *
       * @return {number} The current playhead time.
       */

    }, {
      key: "getAbsoluteCurrentTime",
      value: function getAbsoluteCurrentTime() {
        return this.retrieveProxy(PlaybackProxy.NAME).getCurrentTime();
      }
    }, {
      key: "toUTC",
      value: function toUTC(value) {
        return this.retrieveProxy(PlaybackProxy.NAME).toUTC(value);
      }
      /** */

    }, {
      key: "fromUTC",
      value: function fromUTC(value) {
        return this.retrieveProxy(PlaybackProxy.NAME).fromUTC(value);
      }
      /**
       * Gets the current time of the video.
       *
       * @return {number} The current time of the video.
       */

    }, {
      key: "getDuration",
      value: function getDuration() {
        return this.appState.getDuration();
      }
    }, {
      key: "duration",
      get: function get() {
        return this.getDuration();
      }
      /**
       * Gets the current time of the video.
       *
       * @return {number} The current time of the video.
       */

    }, {
      key: "getAbsoluteDuration",
      value: function getAbsoluteDuration() {
        return this.mediaProxy.getDuration();
      }
    }, {
      key: "absoluteDuration",
      get: function get() {
        return this.getAbsoluteDuration();
      }
      /**
       * Sets the source url of video.
       *
       * @param {string} value The source url of the video to play.
       */

    }, {
      key: "setSrc",
      value: function setSrc(value) {
        this.sendNotification(Notifications.SET_MEDIA, {
          src: value
        });
        return value;
      }
    }, {
      key: "src",
      get: function get() {
        return this.getSrc();
      }
      /**
       * Sets the source url of video.
       *
       * @param {Array.<Object>} value An array of source objects to choose from.
       */
      ,
      set: function set(value) {
        return this.setSrc(value);
      }
      /**
       * Gets the source url of video.
       *
       * @return {string} The source url of the video to play.
       */

    }, {
      key: "getSrc",
      value: function getSrc() {
        return this.mediaProxy.getSrc();
      }
    }, {
      key: "setSource",
      value: function setSource(value) {
        this.sendNotification(Notifications.SET_MEDIA, {
          source: value
        });
        return value;
      }
      /**
       * Gets the source url of video.
       *
       * @return {Array.<Object>} An array of source objects to choose from.
       */

    }, {
      key: "getSource",
      value: function getSource() {
        return this.mediaProxy.getSource();
      }
      /**
       * Sets the source url of video.
       *
       * @param {number} value The source url of the video to play.
       */

    }, {
      key: "setVolume",
      value: function setVolume(value) {
        this.sendNotification(Notifications.CHANGE_VOLUME, value);
        return value;
      }
    }, {
      key: "volume",
      get: function get() {
        return this.getVolume();
      }
      /**
       * The seeking flag.
       *
       * @return {boolean} The seeking flag.
       */
      ,
      set: function set(value) {
        return this.setVolume(value);
      }
      /**
       * Gets the source url of video.
       *
       * @return {number} The volume a number between 0 and 1.
       */

    }, {
      key: "getVolume",
      value: function getVolume() {
        return this.retrieveProxy(PlaybackProxy.NAME).getVolume();
      }
    }, {
      key: "getSeeking",
      value: function getSeeking() {
        return this.retrieveProxy(PlaybackProxy.NAME).getSeeking();
      }
    }, {
      key: "seeking",
      get: function get() {
        return this.getSeeking();
      }
      /**
       * The paused flag.
       *
       * @return {boolean} The paused flag.
       */

    }, {
      key: "getPaused",
      value: function getPaused() {
        return this.retrieveProxy(PlaybackProxy.NAME).getPaused();
      }
    }, {
      key: "paused",
      get: function get() {
        return this.getPaused();
      }
      /**
       * The ended flag.
       *
       * @return {boolean} The ended flag.
       */

    }, {
      key: "getEnded",
      value: function getEnded() {
        return this.appState.getEnded();
      }
    }, {
      key: "ended",
      get: function get() {
        return this.getEnded();
      }
      /**
       * The buffering flag.
       *
       * @return {boolean} The buffering flag.
       */

    }, {
      key: "getBuffering",
      value: function getBuffering() {
        return this.appState.getBuffering();
      }
    }, {
      key: "buffering",
      get: function get() {
        return this.getBuffering();
      }
      /**
       * Sets the player's display state.
       *
       * @param {DisplayState} value
       *    The display state.
       */

    }, {
      key: "setDisplayState",
      value: function setDisplayState(value) {
        this.sendNotification(Notifications.CHANGE_DISPLAY_STATE, value);
      }
    }, {
      key: "displayState",
      get: function get() {
        return this.getDisplayState();
      }
      /**
       * Returns the player's waiting state.
       *
       * @return {boolean}
       *    The waiting state.
       */
      ,
      set: function set(value) {
        return this.setDisplayState(value);
      }
      /**
       * Returns the player's display state.
       *
       * @return {DisplayState}
       *    The display state.
       */

    }, {
      key: "getDisplayState",
      value: function getDisplayState(value) {
        return this.appState.getDisplayState();
      }
    }, {
      key: "getWaiting",
      value: function getWaiting() {
        return this.appState.getWaiting();
      }
    }, {
      key: "waiting",
      get: function get() {
        return this.getWaiting();
      }
      /**
       * Sets the player's waiting state.
       *
       * @param {boolean} value
       *    The waiting state.
       */
      ,
      set: function set(value) {
        return this.setWaiting(value);
      }
      /**
       * Returns the player's busy state.
       *
       * @return {boolean}
       *    The busy state.
       */

    }, {
      key: "setWaiting",
      value: function setWaiting(value) {
        return this.appState.setWaiting(value);
      }
    }, {
      key: "getBusy",
      value: function getBusy() {
        return this.appState.getBusy();
      }
    }, {
      key: "busy",
      get: function get() {
        return this.getBusy();
      }
      /**
       * Sets the player's busy state.
       *
       * @param {boolean} value
       *    The busy state.
       */
      ,
      set: function set(value) {
        return this.setBusy(value);
      }
      /**
       * Returns the player error.
       *
       * @return {Error}
       *    The Error
       */

    }, {
      key: "setBusy",
      value: function setBusy(value) {
        return this.appState.setBusy(value);
      }
    }, {
      key: "getError",
      value: function getError() {
        return this._error || this.getMediaElement().error;
      }
    }, {
      key: "error",
      get: function get() {
        return this.getError();
      }
      /**
       * Enters the player into full screen mode.
       */

    }, {
      key: "enterFullScreen",
      value: function enterFullScreen() {
        this.sendNotification(Notifications.CHANGE_DISPLAY_STATE, DisplayState.FULL_SCREEN);
      }
      /**
       * Exits the player out of full screen mode.
       */

    }, {
      key: "exitFullScreen",
      value: function exitFullScreen() {
        this.sendNotification(Notifications.CHANGE_DISPLAY_STATE, DisplayState.NORMAL);
      }
      /**
       * Enters the player into picture in picture mode.
       */

    }, {
      key: "enterPictureInPicture",
      value: function enterPictureInPicture() {
        this.sendNotification(Notifications.CHANGE_DISPLAY_STATE, DisplayState.PICTURE_IN_PICTURE);
      }
      /**
       * Exits the player out of picture in picture mode.
       */

    }, {
      key: "exitPictureInPicture",
      value: function exitPictureInPicture() {
        this.sendNotification(Notifications.CHANGE_DISPLAY_STATE, DisplayState.NORMAL);
      }
      /**
       * Show the player
       */

    }, {
      key: "setHidden",
      value: function setHidden(value) {
        if (value === this.appState.getHidden()) {
          return;
        }

        this.appState.setHidden(value);
        var style = this.viewComponent.style;

        if (value === true) {
          this.hiddenData = {
            width: style.width,
            height: style.height,
            paused: this.getPaused()
          };
          style.width = style.height = "0px";

          if (this.hiddenData.paused === false) {
            this.pause();
          }
        } else {
          style.width = this.hiddenData.width;
          style.height = this.hiddenData.height;

          if (this.hiddenData.paused === false) {
            this.play();
          }

          this.hiddenData = null;
        }
      }
    }, {
      key: "hidden",
      get: function get() {
        return this.getHidden();
      }
      /**
       * The player's width
       */
      ,
      set: function set(value) {
        return this.setHidden(value);
      }
      /**
       * Hide the player
       */

    }, {
      key: "getHidden",
      value: function getHidden() {
        return this.appState.getHidden();
      }
    }, {
      key: "getWidth",
      value: function getWidth() {
        var view = this.getViewComponent() || {};
        return view.offsetWidth;
      }
    }, {
      key: "width",
      get: function get() {
        return this.getWidth();
      }
      /**
       * The player's height
       */

    }, {
      key: "getHeight",
      value: function getHeight() {
        var view = this.getViewComponent() || {};
        return view.offsetHeight;
      }
    }, {
      key: "height",
      get: function get() {
        return this.getHeight();
      }
      /**
       * The media's source width
       */

    }, {
      key: "getVideoWidth",
      value: function getVideoWidth() {
        var element = this.getMediaElement() || {};
        return element.videoWidth;
      }
    }, {
      key: "videoWidth",
      get: function get() {
        return this.getVideoWidth();
      }
      /**
       * The media's source height
       */

    }, {
      key: "getVideoHeight",
      value: function getVideoHeight() {
        var element = this.getMediaElement() || {};
        return element.videoHeight;
      }
    }, {
      key: "videoHeight",
      get: function get() {
        return this.getVideoHeight();
      }
      /**
       * The player's left position
       */

    }, {
      key: "getLeft",
      value: function getLeft() {
        var view = this.getViewComponent() || {};
        return view.offsetLeft;
      }
    }, {
      key: "left",
      get: function get() {
        return this.getLeft();
      }
      /**
       * The player's right position
       */

    }, {
      key: "getRight",
      value: function getRight() {
        return this.getLeft() + this.getWidth();
      }
    }, {
      key: "right",
      get: function get() {
        return this.getRight();
      }
      /**
       * The player's top position
       */

    }, {
      key: "getTop",
      value: function getTop() {
        var view = this.getViewComponent() || {};
        return view.offsetTop;
      }
    }, {
      key: "top",
      get: function get() {
        return this.getTop();
      }
      /**
       * The player's bottom position
       */

    }, {
      key: "getBottom",
      value: function getBottom() {
        return this.getTop() + this.getHeight();
      }
    }, {
      key: "bottom",
      get: function get() {
        return this.getBottom();
      }
      /**
       * The player's width
       */

    }, {
      key: "getMouseX",
      value: function getMouseX() {
        return Utils.clientX - this.getLeft();
      }
    }, {
      key: "mouseX",
      get: function get() {
        return this.getMouseX();
      }
      /**
       * The player's width
       */

    }, {
      key: "getMouseY",
      value: function getMouseY() {
        return Utils.clientY - this.getTop();
      }
    }, {
      key: "mouseY",
      get: function get() {
        return this.getMouseY();
      }
      /**
       * The player's width
       */

    }, {
      key: "getMouseOver",
      value: function getMouseOver() {
        var mouseX = this.getMouseX();
        var mouseY = this.getMouseY();
        var isMouseInX = mouseX >= 0 && mouseX <= this.right && mouseX >= this.left;
        var isMouseInY = mouseY >= 0 && mouseY <= this.top && mouseY >= this.bottom;
        return Utils.isMouseOverDocument() && isMouseInX && isMouseInY;
      }
    }, {
      key: "mouseOver",
      get: function get() {
        return this.getMouseOver();
      }
      /**
       * Records a content change
       *
       * @param {Object} content
       *    An object representing the new content
       */

    }, {
      key: "recordContentChange",
      value: function recordContentChange(content) {
        this.sendNotification(Notifications.RECORD_CONTENT_CHANGE, content);
      }
      /**
       * Sets the rate of playback.
       */

    }, {
      key: "setPlaybackRate",
      value: function setPlaybackRate(value) {
        if (this.ads.inProgress === true || value === this.getMediaElement().playbackRate) {
          return;
        }

        this.appState.setPlaybackRate(value);
        this.getMediaElement().playbackRate = value;
      }
    }, {
      key: "playbackRate",
      get: function get() {
        return this.getPlaybackRate();
      }
      /**
       * Sets the list of cues.
       */
      ,
      set: function set(value) {
        return this.setPlaybackRate(value);
      }
      /**
       * Gets the rate of playback.
       */

    }, {
      key: "getPlaybackRate",
      value: function getPlaybackRate() {
        return this.getMediaElement().playbackRate;
      }
    }, {
      key: "setCues",
      value: function setCues(value) {
        this.mediaProxy.setCues(value);
        return value;
      }
    }, {
      key: "cues",
      get: function get() {
        return this.getCues();
      }
      /**
       *
       */
      ,
      set: function set(value) {
        return this.setCues(value);
      }
      /**
       * Gets the list of cues.
       */

    }, {
      key: "getCues",
      value: function getCues() {
        return this.mediaProxy.getCues();
      }
    }, {
      key: "setQuality",
      value: function setQuality(value) {
        return this.retrieveProxy(PlaybackProxy.NAME).setQuality(value);
      }
    }, {
      key: "quality",
      get: function get() {
        return this.getQuality();
      }
      /**
       *
       */
      ,
      set: function set(value) {
        return this.setQuality(value);
      }
      /**
       *
       */

    }, {
      key: "getQuality",
      value: function getQuality() {
        return this.retrieveProxy(PlaybackProxy.NAME).getQuality();
      }
    }, {
      key: "getQualityLevels",
      value: function getQualityLevels() {
        return this.retrieveProxy(PlaybackProxy.NAME).getQualityLevels();
      }
    }, {
      key: "qualityLevels",
      get: function get() {
        return this.getQualityLevels();
      }
      /**
       *
       */

    }, {
      key: "getQualityMode",
      value: function getQualityMode() {
        return this.retrieveProxy(PlaybackProxy.NAME).getQualityMode();
      }
    }, {
      key: "qualityMode",
      get: function get() {
        return this.getQualityMode();
      }
      /**
       *
       */
      ,
      set: function set(value) {
        return this.setQualityMode(value);
      }
      /**
       *
       */

    }, {
      key: "setQualityMode",
      value: function setQualityMode(value) {
        return this.retrieveProxy(PlaybackProxy.NAME).setQualityMode(value);
      }
    }, {
      key: "setMaxQualityLevel",
      value: function setMaxQualityLevel(value) {
        return this.retrieveProxy(PlaybackProxy.NAME).setMaxQualityLevel(value);
      }
    }, {
      key: "maxQualityLevel",
      get: function get() {
        return this.getMaxQualityLevel();
      }
      /**
       * Gets the play state.
       */
      ,
      set: function set(value) {
        return this.setMaxQualityLevel(value);
      }
      /**
       * 
       */

    }, {
      key: "getMaxQualityLevel",
      value: function getMaxQualityLevel() {
        return this.retrieveProxy(PlaybackProxy.NAME).getMaxQualityLevel();
      }
    }, {
      key: "getPlayState",
      value: function getPlayState() {
        return this.appState.getPlayState();
      }
    }, {
      key: "playState",
      get: function get() {
        return this.getPlayState();
      }
      /**
       *
       */

    }, {
      key: "getPlaybackTarget",
      value: function getPlaybackTarget() {
        return this.appState.getPlaybackTarget();
      }
    }, {
      key: "playbackTarget",
      get: function get() {
        return this.getPlaybackTarget();
      }
      /**
       *
       */
      ,
      set: function set(value) {
        this.setPlaybackTarget(value);
      }
      /**
       * Gets the list of media transforms
       */

    }, {
      key: "setPlaybackTarget",
      value: function setPlaybackTarget(value) {
        this.appState.setPlaybackTarget(value);
      }
    }, {
      key: "getMediaTransforms",
      value: function getMediaTransforms() {
        return this.mediaProxy.getTransforms();
      }
      /**
       * Authorizes a protected stream
       */

    }, {
      key: "authorize",
      value: function authorize(authorization) {
        this.security.authorize(authorization);
      }
      /**
       * Force the player into live mode during DVR playback
       */

    }, {
      key: "goLive",
      value: function goLive() {
        return this.retrieveProxy(PlaybackProxy.NAME).goLive();
      }
      /**
       *
       */

    }, {
      key: "appendChild",
      value: function appendChild(element) {
        this.mediator.addLayer(element);
      }
      /**
       *
       */

    }, {
      key: "removeChild",
      value: function removeChild(element) {
        this.mediator.removeLayer(element);
      }
      /**
       *
       */

    }, {
      key: "getSettings",
      value: function getSettings() {
        return this._settings && this._settings.getSettings() || {
          change: function change() {}
        };
      }
    }, {
      key: "settings",
      get: function get() {
        return this.getSettings();
      }
      /**
       *
       */

    }, {
      key: "createMediaError",
      value: function createMediaError(code, metadata) {
        var message = null;

        switch (code) {
          case MediaError.MEDIA_ERR_ABORTED:
            message = this.l10n.MSG_ERROR_ABORTED;
            break;

          case MediaError.MEDIA_ERR_DECODE:
            message = this.l10n.MSG_ERROR_DECODE;
            break;

          case MediaError.MEDIA_ERR_NETWORK:
            message = this.l10n.MSG_ERROR_NETWORK;
            break;

          case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
            message = this.l10n.MSG_ERROR_SRC;
            break;

          default:
            message = this.l10n.MSG_ERROR_DEFAULT;
            break;
        }

        return AMPError.create(message, code, metadata);
      }
      /**
       * @override
       */

    }, {
      key: "destroy",
      value: function destroy() {
        var _this6 = this;

        var proxy = this.retrieveProxy(PlayerProxy.NAME);

        if (proxy != null) {
          var core = proxy.activePlaybackCore;

          if (core != null) {
            if (typeof core.destroy === "function") {
              core.destroy();
            }
          }
        }

        this.sendNotification(Notifications.DESTROY, this);
        setTimeout(function () {
          babelHelpers.get(babelHelpers.getPrototypeOf(Player.prototype), "destroy", _this6).call(_this6);
          Utils.timerGroup(_this6.multitonKey, true);
        }, 1);
      }
      /**
       * @static
       */

    }], [{
      key: "create",
      value: function create(element, config) {
        return new Promise(function (resolve, reject) {
          try {
            var player = new Player(element);
            element.amp = player;

            player.onready = function (event) {
              this.player = event.player;
              resolve(event);
            };

            player.initialize(config);
          } catch (error) {
            reject(error);
          }
        });
      }
    }]);
    return Player;
  }(Module);

  var Manager = /*#__PURE__*/function () {
    /**
     * @constructor
     * @private
     */
    function Manager() {
      babelHelpers.classCallCheck(this, Manager);
      this.map = {};
    }
    /**
     * @param {string} key
     *     The key
     *
     * @param {Object} value
     *     The value
     */


    babelHelpers.createClass(Manager, [{
      key: "add",
      value: function add(key, value) {
        this.map[key] = value;
      }
      /**
       * @param {string} key
       *     The module's key
       *
       * @return {Object}
       *     The item at the given key.
       */

    }, {
      key: "item",
      value: function item(key) {
        return this.map[key];
      }
      /**
       * @param {string} key
       *     The module's key
       *
       * @return {Object}
       *     The item.
       */

    }, {
      key: "remove",
      value: function remove(key) {
        var item = this.map[key];

        if (item != null) {
          this.map[key] = null;
          delete this.map[key];
        }

        return item;
      }
    }]);
    return Manager;
  }();

  var ResourceManager = /*#__PURE__*/function (_Manager) {
    babelHelpers.inherits(ResourceManager, _Manager);

    /**
     * @constructor
     * @extends {Manager}
     */
    function ResourceManager() {
      babelHelpers.classCallCheck(this, ResourceManager);
      return _Manager.call(this) || this;
    }

    babelHelpers.createClass(ResourceManager, [{
      key: "js",
      value: function js(src, resource) {
        return Utils.loadScript(src, document.body);
      }
    }, {
      key: "css",
      value: function css(src, resource) {
        return new Promise(function (resolve, reject) {
          try {
            Utils.loadStyleSheet(src);
          } catch (error) {
            reject();
          }

          resolve(resource);
        });
      }
    }, {
      key: "json",
      value: function json(src, resource) {
        return Utils.requestJson(resource.src).then(function (data) {
          resource.data = data;
          return resource;
        });
      }
    }, {
      key: "img",
      value: function img(src, resource) {
        return Utils.loadImage(src);
      }
      /**
       * @override
       */

    }, {
      key: "require",
      value: function require(id) {
        var item = this.item(id);

        if (item == null) {
          if (typeof id === "string") {
            return this.add({
              src: id
            });
          } else if (id.src != null) {
            return this.add(id);
          } else {
            return Promise.resolve(id);
          }
        } else if (typeof item === "function") {
          Manager.prototype.add.call(this, id, null);
          return Promise.resolve().then(function () {
            return item();
          });
        } else if (typeof item.then === "function") {
          return item;
        } else {
          return Promise.resolve(item);
        }
      }
      /**
       * @override
       */

    }, {
      key: "add",
      value: function add(resource) {
        var _this = this;

        if (resource.enabled === false) {
          return Promise.resolve();
        }

        var src = Logger.instance.enabled && resource.debug != null ? resource.debug : resource.src;
        var id = resource.id || resource.src || src;

        if (resource.defer === true) {
          resource.defer = false;
          babelHelpers.get(babelHelpers.getPrototypeOf(ResourceManager.prototype), "add", this).call(this, id, this.add.bind(this, resource));
          return Promise.resolve();
        }

        var item = this.item(id);

        if (item != null) {
          if (typeof item.then === "function") {
            return item;
          } else if (typeof item !== "function") {
            return Promise.resolve(item);
          }
        }

        var type = resource.type || Utils.getMimeType(src);
        var promise;

        if (type === Utils.mimeTypes.js || /javascript/.test(type)) {
          promise = this.js(src, resource);
        } else if (type === Utils.mimeTypes.css) {
          promise = this.css(src, resource);
        } else if (type === Utils.mimeTypes.json || /json/.test(type)) {
          promise = this.json(src, resource);
        } else if (type !== Utils.mimeTypes.swf) {
          promise = Utils.request(src);
        } else if (/image/.test(type)) {
          promise = this.img(src, resource);
        }

        if (promise == null) {
          return Promise.resolve();
        }

        promise = promise.then(function (resource) {
          Manager.prototype.add.call(_this, id, resource);
          return resource;
        });
        babelHelpers.get(babelHelpers.getPrototypeOf(ResourceManager.prototype), "add", this).call(this, id, promise);
        return promise;
      }
      /**
       * @param {Array.<akamai.amp.Resource>} resource
       *    The resource
       *
       * @param {Function} callback
       */

    }, {
      key: "addResources",
      value: function addResources(resources) {
        var _this2 = this;

        if (!resources || resources.length == 0) {
          return Promise.resolve();
        }

        var promises = [];
        var asyncs = [];
        resources.forEach(function (resource) {
          if (resource instanceof Array) {
            promises.push(_this2.addResources.bind(_this2, resource));
          } else if (resource.async === true) {
            asyncs.push(_this2.add(resource));
          } else {
            promises.push(_this2.add.bind(_this2, resource));
          }
        });
        var promise = asyncs.length > 0 ? Promise.all(asyncs) : Promise.resolve();
        return promise.then(function () {
          return Utils.chain(promises);
        });
      }
    }]);
    return ResourceManager;
  }(Manager);

  var plugins = {};
  var resourceManager = new ResourceManager();
  var instances = [];

  var AMP = /*#__PURE__*/function () {
    /**
     * @constructor
     */
    function AMP() {
      babelHelpers.classCallCheck(this, AMP);
    }
    /**
     * Create a player based on the configuration object and container.
     *
     * @param {string|HTMLElement} container
     *    The id of the div the player will be attached to.
     *
     * @param {?(Object|string)} config
     *    The configuration override object.
     *
     * @param {?Function} onready
     *    Optional ready handler.
     *
     * @return {Player}
     *
     */


    babelHelpers.createClass(AMP, null, [{
      key: "VERSION",
      get:
      /**
       * The player version string
       *
       * @type {string}
       * @private
       * @static
       */
      function get() {
        return "AMP v9.1.11";
      }
      /**
       * @private
       */

    }, {
      key: "plugins",
      get: function get() {
        return plugins;
      }
      /**
       * @private
       */

    }, {
      key: "instances",
      get: function get() {
        return instances;
      }
      /**
       * @type {akamai.amp.ResourceManager}
       * @private
       */

    }, {
      key: "resourceManager",
      get: function get() {
        return resourceManager;
      }
    }, {
      key: "create",
      value: function create(container, config, onready) {
        var _this = this;

        var initTime = Date.now();

        if (container.container != null) {
          config = container;
          container = container.container;
          delete config.container;
        }

        var element = Utils.select(container);

        if (element == null) {
          return Promise.reject(AMPError.create("Invalid container. Could not find DOM element: ".concat(container)));
        }

        config = config instanceof Config ? config : Config.create(config);
        Logger.instance = new Logger(config.debug);
        var version = this.getVersion();

        if (element.dataset == null) {
          element.dataset = {};
        }

        element.dataset["amp.version"] = version;
        Logger.instance.log("[AMP] ".concat(version));
        return Promise.all([AutoplayThreshold.init(config), Player.create(element, config), KeySystem.init(config)]).then(function (results) {
          var event = results[1];
          var player = event.player;
          player.initTime = initTime;
          player.performance.record("init", initTime);
          player.request = _this.request.bind(_this);
          player.require = _this.require.bind(_this);
          player.once(Events.DESTROY, function (event) {
            return dispatcher.dispatchEvent(event);
          });
          dispatcher.dispatch(Events.CREATE, player);

          if (typeof onready === "function") {
            onready(event);
          }

          return player;
        })["catch"](function (error) {
          throw AMPError.create(error);
        });
      }
      /**
       * Returns the version string for this player library.
       *
       * @return {string} The version string.
       */

    }, {
      key: "getVersion",
      value: function getVersion() {
        return this.VERSION;
      }
      /**
       * Registers a plugin factory function. This function is
       * called when .create is called and the
       * config object contains the plugin key.
       *
       * @param {String} key
       *    The plugin key. Used to configure the plugin.
       *
       * @param {Function} factory
       *
       * @static
       */

    }, {
      key: "registerPlugin",
      value: function registerPlugin(id, mode, plugin) {
        if (typeof mode === "function") {
          plugin = mode;
        }

        this.plugins[id] = plugin;
      }
      /**
       * Short cut getter for the global renderer manager
       *
       * @return {akamai.amp.ResourceManager}
       *
       * @static
       * @private
       */

    }, {
      key: "getResourceManager",
      value: function getResourceManager() {
        return resourceManager;
      }
      /**
       * @param {akamai.amp.Resource} resource
       *    The resource definition
       *
       * @param {Function} callback
       *
       * @static
       * @private
       */

    }, {
      key: "addResource",
      value: function addResource(resource) {
        return this.getResourceManager().add(resource);
      }
      /**
       * @param {Array.<akamai.amp.Resource>} resources
       *    The list of resources
       *
       * @param {Function} callback
       *
       * @static
       * @private
       */

    }, {
      key: "addResources",
      value: function addResources(resources) {
        return this.getResourceManager().addResources(resources);
      }
      /**
       * Request a http resource.
       *
       * @param {String|Object} options
       *    A url string or an object containing the following properties:
       *
       * @return {Promise.<XHR>}
       *     Promise which resolves to a XHR object
       *
       * @static
       */

    }, {
      key: "request",
      value: function request(options) {
        return Utils.request(options);
      }
      /**
       * Request a http json resource.
       *
       * @param {String|Object} options
       *    A url string or an object containing the following properties:
       *
       * @return {Promise.<Object>}
       *     Promise which resolves to a js object
       *
       * @static
       */

    }, {
      key: "requestJson",
      value: function requestJson(options) {
        return Utils.requestJson(options);
      }
      /**
       * Loads resource from url or cache
       *
       * @param {String} id
       *    A url or id of the resource
       *
       * @return {Promise.<Object>}
       *     Promise which resolves to an object
       *
       * @static
       */

    }, {
      key: "require",
      value: function require(id) {
        return this.resourceManager.require(id);
      }
      /**
       * @param {!string} key
       *     The resource's key
       *
       * @return {akamai.amp.Resource}
       *     The resource definition
       *
       * @static
       * @private
       */

    }, {
      key: "getResource",
      value: function getResource(key) {
        return this.getResourceManager().item(key);
      }
      /**
       * @param {!string} key
       *     The resource's key
       *
       * @return {Function}
       *     The resource's constructor
       *
       * @static
       * @private
       */

    }, {
      key: "removeResource",
      value: function removeResource(key) {
        return this.getResourceManager().remove(key);
      }
      /**
       * Evaluate a data bound object.
       *
       * @param {Object} binding
       *   The data bound object.
       *
       * @param {Object} context
       *   The context object used as "global" when evaluating the binding.
       *
       * @return {string}
       *   The evaluated result
       */

    }, {
      key: "evaluateBindings",
      value: function evaluateBindings(value, context) {
        return DataBinding.evaluateBindings(value, context);
      }
      /**
       * Overrides the Config defaults.
       *
       * @param {Object} overrides
       *  The overrides.
       *
       * @return {Object}
       *  The new defaults object
       */

    }, {
      key: "defaults",
      value: function defaults(overrides) {
        return Utils.override(Config.defaults, overrides, false);
      }
      /**
       * Embeds an AMP instance using the inline HTML sytax.
       *
       * @example <script class="amp-inline" data-config='{"media":{"src":"VfE.mp4"}}' src="amp.js"></script>
       * @example <script class="amp-inline" data-defaults='{"autoplay":false}' src="amp.js"></script>
       * @example <div class="amp-inline" data-autoplay="muted" data-src="VfE.mp4" data-poster="/bunny.jpg" data-time="10" data-width="320" data-hieght="160"></div>
       * @example <div class="amp-inline" data-a="muted" data-s="VfE.mp4" data-p="/bunny.jpg" data-t="10" data-w="320" data-h="160"></div>
       */

    }, {
      key: "embed",
      value: function embed(element) {
        if (element == null) {
          return Promise.reject(AMPError.create("Invalid DOM element"));
        }

        var data = element.dataset;
        data.embedded = true;

        function get(name, dflt) {
          return data[name] || data[name[0]] || dflt;
        }

        var id = get("id", element.id || Utils.createUID());

        if (data.id !== id) {
          data.id = id;
        } // only create amp instance once


        if (AMP.instances[id] != null) {
          return Promise.reject(AMPError.create("Player with id \"".concat(id, "\" already exists.")));
        } else {
          AMP.instances[id] = true;
        } // json data can be inline or remote


        function resource(name) {
          var value = get(name);

          if (value == null) {
            return Promise.resolve();
          }

          return Promise.resolve().then(function () {
            // inline json
            if (/^\{[\s\S]*\}$/.test(value)) {
              return value;
            } else {
              // remote json
              return Utils.requestText(value)["catch"](function (error) {
                throw AMPError.create("Could not load resource \"".concat(name, "\" at \"").concat(value, "\""));
              });
            }
          }).then(function (json) {
            // parse json
            try {
              return JSON.parse(json);
            } catch (error) {
              throw AMPError.create("Could not parse resource \"".concat(name, "\". \"").concat(value, "\""));
            }
          });
        }

        function options(opts) {
          function set(target, path, value, format) {
            if (value == null) {
              return;
            }

            return Utils.set(target, path, format != null ? format(value) : value);
          } // get media and playback config options


          set(opts, ["media", "src"], get("src"));
          set(opts, ["media", "poster"], get("poster"));
          set(opts, ["media", "startTime"], get("time"), parseFloat);
          set(opts, ["autoplay"], get("autoplay"), function (value) {
            return /true|false/.test(value) ? value == "true" : value;
          }); // setup the container element

          set(opts, ["container"], element.nodeName !== "SCRIPT" ? element : element.parentNode.insertBefore(document.createElement("div"), element.nextSibling));
          set(opts, ["container", "style", "width"], get("width"), CSS.toSize);
          set(opts, ["container", "style", "height"], get("height"), CSS.toSize);
          return opts;
        }

        return Promise.all([resource("defaults"), resource("config"), resource("media")]).then(function (results) {
          var dflts = results[0];

          if (dflts != null) {
            AMP.defaults(dflts); // Do not create a player if only defaults were passed in.
            // This allows the script tag to be loaded in the head of
            // the document with default overrides, and players to be
            // created later in the body.

            if (element.nodeName.toLowerCase() == "script" && results.filter(function (x) {
              return x != null;
            }).length === 1) {
              return;
            }
          } // populate media config


          if (results[2] != null) {
            results[2] = {
              media: results[2]
            };
          } // override the id, and pass in the data-* params for plugins to use


          results.push(options({
            id: id,
            dataset: Utils.clone(data)
          }));
          var config = Utils.merge(results);
          return AMP.create(config);
        });
      }
    }]);
    return AMP;
  }();
  var dispatcher = EventDispatcher.create(AMP);
  Utils.mixin(AMP, dispatcher);
  AMP.addEventListener(Events.CREATE, function (event) {
    var player = event.detail;
    instances.push(event.detail);

    if (player.id != null) {
      instances[player.id] = player;
    }
  });
  AMP.addEventListener(Events.DESTROY, function (event) {
    var player = event.detail;
    var index = instances.indexOf(player);
    instances.splice(index, 1);

    if (player.id != null) {
      delete instances[player.id];
    }
  });

  var AuthProvider = /*#__PURE__*/function () {
    /**
     * Creates a new instance of AuthProvider.
     *
     * @constructor
     */
    function AuthProvider(id, name, logo, metadata) {
      babelHelpers.classCallCheck(this, AuthProvider);
      this.id = id;
      this.name = name;
      this.logo = logo;
      this.metadata = metadata;
    }
    /** @static */


    babelHelpers.createClass(AuthProvider, null, [{
      key: "create",
      value: function create(id, name, logo, metadata) {
        return new AuthProvider(id, name, logo, metadata);
      }
    }]);
    return AuthProvider;
  }();

  var AuthProviderList = /*#__PURE__*/function () {
    /**
     * Creates a new instance of AuthProviderList.
     *
     * @constructor
     */
    function AuthProviderList(items) {
      var _this = this;

      var featured = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var footprints = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var metadata = arguments.length > 3 ? arguments[3] : undefined;
      babelHelpers.classCallCheck(this, AuthProviderList);
      this.list = [];
      this.featured = featured;
      this.footprints = footprints;
      this.metadata = metadata;
      items.forEach(function (item) {
        return _this.add(item);
      });
    }
    /** @static */


    babelHelpers.createClass(AuthProviderList, [{
      key: "length",
      get: function get() {
        return this.list.length;
      }
      /**
       *
       */

    }, {
      key: "add",
      value: function add(item) {
        this.list.push(item);
        this[item.id] = item;
        return item;
      }
      /**
       *
       */

    }, {
      key: "slice",
      value: function slice(index, count) {
        return this.list.forEach(index, count);
      }
      /**
       *
       */

    }, {
      key: "splice",
      value: function splice(index, remove) {
        var _this$list;

        for (var _len = arguments.length, items = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          items[_key - 2] = arguments[_key];
        }

        return (_this$list = this.list).splice.apply(_this$list, [index, remove].concat(items));
      }
      /**
       *
       */

    }, {
      key: "forEach",
      value: function forEach(func) {
        return this.list.forEach(func);
      }
      /**
       *
       */

    }, {
      key: "some",
      value: function some(func) {
        return this.list.some(func);
      }
      /**
       *
       */

    }, {
      key: "filter",
      value: function filter(func) {
        return this.list.filter(func);
      }
      /**
       *
       */

    }, {
      key: "map",
      value: function map(func) {
        return this.list.map(func);
      }
      /**
       *
       */

    }, {
      key: "reduce",
      value: function reduce(func, init) {
        return this.list.reduce(func, init);
      }
      /**
       *
       */

    }, {
      key: "includes",
      value: function includes(item) {
        return this.list.includes(item);
      }
      /**
       *
       */

    }, {
      key: "indexOf",
      value: function indexOf(item) {
        return this.list.indexOf(item);
      }
      /**
       *
       */

    }, {
      key: "item",
      value: function item(index) {
        return this.list[index];
      }
    }], [{
      key: "create",
      value: function create(items, featured, footprints, metadata) {
        return new AuthProviderList(items, featured, footprints, metadata);
      }
    }]);
    return AuthProviderList;
  }();

  /**
   * @enum {string}
   * @const
   * @private
   */
  var Medium = {
    /**
     * Constant representing video content
     */
    VIDEO: "video",

    /**
     * Constant representing audio content
     */
    AUDIO: "audio"
  };

  /**
   * @enum {string}
   * @const
   * @private
   */
  var QualityMode = {
    /**
     * Constant representing the auto quality mode. Let the playback engine handle bitrate switching.
     */
    AUTO: "auto",

    /**
     * Constant representing the manual quality mode. Let the user handle bitrate switching.
     */
    MANUAL: "manual"
  };

  var Authorization = function Authorization(key, token, expiration) {
    babelHelpers.classCallCheck(this, Authorization);
    this.key = key;
    this.token = token;
    this.expiration = expiration;
  };

  var Resource = function Resource() {
    babelHelpers.classCallCheck(this, Resource);
    this.src = null;
    this.debug = null;
    this.type = null;
    this.metadata = {};
  };

  var MediaVO = /*#__PURE__*/function (_Resource) {
    babelHelpers.inherits(MediaVO, _Resource);

    function MediaVO() {
      var _this;

      babelHelpers.classCallCheck(this, MediaVO);
      _this = _Resource.call(this) || this;
      _this.source = null;
      _this.title = null;
      _this.description = null;
      _this.link = null;
      _this.guid = null;
      _this.pubDate = null;
      _this.poster = null;
      _this.thumbnail = null;
      _this.embed = null;
      _this.category = null;
      _this.medium = null;
      _this.duration = null;
      _this.track = null;
      _this.scenes = null;
      _this.startTime = null;
      return _this;
    }

    babelHelpers.createClass(MediaVO, null, [{
      key: "DEFAULT",
      get: function get() {
        return {
          src: Utils.blankVideo(),
          type: Utils.mimeTypes.mp4,
          temporalType: "vod",
          medium: "video"
        };
      }
    }]);
    return MediaVO;
  }(Resource);

  var PromisePlugin = /*#__PURE__*/function (_EventDispatcher) {
    babelHelpers.inherits(PromisePlugin, _EventDispatcher);

    function PromisePlugin(player, config, key) {
      var _this;

      babelHelpers.classCallCheck(this, PromisePlugin);
      _this = _EventDispatcher.call(this) || this;
      _this.player = player;
      _this.config = config || {};
      _this.key = key;
      _this.logger = new Logger(_this.debug);
      Object.values(Events).forEach(function (event) {
        var prop = _this["on".concat(event)];

        if (prop == null || typeof prop != "function") return;
        prop = _this["on".concat(event)] = prop.bind(babelHelpers.assertThisInitialized(_this));

        _this.player.addEventListener(event, prop);
      });
      return _this;
    }

    babelHelpers.createClass(PromisePlugin, [{
      key: "debug",
      get: function get() {
        return this.config.debug != null ? this.config.debug : this.player.config.debug;
      }
    }, {
      key: "data",
      get: function get() {
        return this.player.evaluateBindings(this.config);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var _this2 = this;

        Object.values(Events).forEach(function (event) {
          var prop = _this2["on".concat(event)];

          if (prop == null || typeof prop != "function") return;

          _this2.player.removeEventListener(event, prop);
        });
        babelHelpers.get(babelHelpers.getPrototypeOf(PromisePlugin.prototype), "destroy", this).call(this);
        this.player = null;
        this.config = null;
        this.key = null;
      }
    }, {
      key: "bindHandlers",
      value: function bindHandlers(handlers) {
        var _this3 = this;

        if (handlers instanceof Array == false) handlers = [handlers];
        handlers.forEach(function (func) {
          _this3[func] = _this3[func].bind(_this3);
        });
      }
    }], [{
      key: "createFactory",
      value: function createFactory(def) {
        return function (player, config, key) {
          var _this4 = this;

          return new Promise(function (resolve, reject) {
            try {
              var plugin = new _this4(player, config, key);
              resolve(plugin);
            } catch (error) {
              reject(error);
            }
          });
        }.bind(def);
      }
    }, {
      key: "createPureMVCFactory",
      value: function createPureMVCFactory(def) {
        return function (player, config, key) {
          return new Promise(function (resolve, reject) {
            try {
              var plugin = new def();
              plugin.parentModule = player;
              plugin.player = player;
              plugin.config = config;
              player.registerModule(plugin);
              resolve(plugin);
            } catch (error) {
              reject(error);
            }
          });
        };
      }
    }]);
    return PromisePlugin;
  }(EventDispatcher);

  var AdPromisePlugin = /*#__PURE__*/function (_PromisePlugin) {
    babelHelpers.inherits(AdPromisePlugin, _PromisePlugin);

    function AdPromisePlugin(player, config) {
      var _this;

      babelHelpers.classCallCheck(this, AdPromisePlugin);
      _this = _PromisePlugin.call(this, player, config) || this;
      _this.feature = "ads";
      return _this;
    }

    babelHelpers.createClass(AdPromisePlugin, [{
      key: "dispatchEvent",
      value: function dispatchEvent(event) {
        var type = event.type;
        if (type != "timeupdate" && type != "timeremaining") this.player.logger.log("[AMP AD EVENT] ".concat(type), event);
        if (typeof this.player.sendNotification === "function") this.player.sendNotification("ads".concat(type), event.detail);
        babelHelpers.get(babelHelpers.getPrototypeOf(AdPromisePlugin.prototype), "dispatchEvent", this).call(this, event);
        this.player.dispatch("ad".concat(type), event.detail);
      }
    }]);
    return AdPromisePlugin;
  }(PromisePlugin);

  var AuthPromisePlugin = /*#__PURE__*/function (_PromisePlugin) {
    babelHelpers.inherits(AuthPromisePlugin, _PromisePlugin);

    function AuthPromisePlugin(player, config) {
      var _this;

      babelHelpers.classCallCheck(this, AuthPromisePlugin);
      _this = _PromisePlugin.call(this, player, config) || this;
      _this.feature = "auth";
      _this.provider = null;
      _this.providers = null;
      return _this;
    }

    babelHelpers.createClass(AuthPromisePlugin, [{
      key: "dispatchEvent",
      value: function dispatchEvent(event) {
        babelHelpers.get(babelHelpers.getPrototypeOf(AuthPromisePlugin.prototype), "dispatchEvent", this).call(this, event);

        if (Object.values(AuthEvents).includes(event.type)) {
          this.player.dispatchEvent(event);
        }
      }
    }]);
    return AuthPromisePlugin;
  }(PromisePlugin);

  var AdVO = /*#__PURE__*/function () {
    /**
     * @constructor
     */
    function AdVO(id1, title1, duration1, position1, type1, partner1, advertiser1, companions1, request1, metadata1, totalAds1, time1, clickThrough1) {
      babelHelpers.classCallCheck(this, AdVO);
      this.id = id1;
      this.title = title1;
      this.duration = duration1;
      this.position = position1;
      this.type = type1;
      this.partner = partner1;
      this.advertiser = advertiser1;
      this.companions = companions1;
      this.request = request1;
      this.metadata = metadata1;
      this.totalAds = totalAds1;
      this.time = time1;
      this.clickThrough = clickThrough1;
    }

    babelHelpers.createClass(AdVO, null, [{
      key: "create",
      value: function create(id, title, duration, position, type, partner, advertiser, companions, request, metadata, totalAds, time, clickThrough) {
        return new AdVO(id, title, duration, position, type, partner, advertiser, companions, request, metadata, totalAds, time, clickThrough);
      }
    }]);
    return AdVO;
  }();

  var PluginController = /*#__PURE__*/function (_Controller) {
    babelHelpers.inherits(PluginController, _Controller);

    /**
     * The PluginController class.
     *
     * @param {string} name
     * @param {Object} viewComponent
     * @constructor
     * @private
     * @extends {amp.plugins.PluginController}
     */
    function PluginController(name) {
      var _this;

      babelHelpers.classCallCheck(this, PluginController);
      _this = _Controller.call(this, name) || this;
      _this.plugin = null;
      _this.proxy = null;
      return _this;
    }
    /** @override */


    babelHelpers.createClass(PluginController, [{
      key: "initializeNotifier",
      value: function initializeNotifier(key) {
        babelHelpers.get(babelHelpers.getPrototypeOf(PluginController.prototype), "initializeNotifier", this).call(this, key);
        this.proxy = this.facade.retrieveProxy(ModuleProxy.NAME);
        this.plugin = this.facade;
      }
      /** */

    }, {
      key: "dispatchEvent",
      value: function dispatchEvent(type, detail) {
        if (typeof type !== "string") {
          detail = type.getBody();

          if (detail == null) {
            detail = {};
          }

          type = type.getName();
        }

        this.player.sendNotification(Notifications.DISPATCH_EVENT, Event.create(type, detail));
        var name = this.plugin.feature;

        if (name != null && name !== "auth") {
          type = type.replace(new RegExp("^(" + name + ")"), "");
        }

        name = this.plugin.getModuleName();
        type = type.replace(new RegExp("^(" + name + ")"), "");
        var event = Event.create(type, detail);
        this.sendNotification(Notifications.DISPATCH_EVENT, event);
        return event;
      }
    }]);
    return PluginController;
  }(Controller);

  var AdContentController = /*#__PURE__*/function (_PluginController) {
    babelHelpers.inherits(AdContentController, _PluginController);

    /**
     * The AdContentController class.
     *
     * @param {string} name
     * @param {Object} viewComponent
     * @constructor
     * @private
     * @extends {amp.plugins.ads.AdContentController}
     */
    function AdContentController() {
      babelHelpers.classCallCheck(this, AdContentController);
      return _PluginController.call(this, AdContentController.NAME) || this;
    }
    /**
     * @static
     * @type {string}
     */


    babelHelpers.createClass(AdContentController, [{
      key: "listNotificationInterests",
      value:
      /** @override */
      function listNotificationInterests() {
        return [Notifications.STARTED, Notifications.ENDED];
      }
      /** */

    }, {
      key: "started",
      value: function started() {
        this.proxy.contentStarted();
      }
      /** */

    }, {
      key: "ended",
      value: function ended() {
        this.proxy.contentEnded();
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "AdContentController";
      }
    }]);
    return AdContentController;
  }(PluginController);

  var AdCoreController = /*#__PURE__*/function (_PluginController) {
    babelHelpers.inherits(AdCoreController, _PluginController);

    /**
     * The AdCoreController class.
     *
     * @param {string} name
     * @param {Object} viewComponent
     * @constructor
     * @private
     * @extends {amp.plugins.ads.AdCoreController}
     */
    function AdCoreController() {
      babelHelpers.classCallCheck(this, AdCoreController);
      return _PluginController.call(this, AdCoreController.NAME) || this;
    }
    /**
     * @static
     * @type {string}
     */


    babelHelpers.createClass(AdCoreController, [{
      key: "listNotificationInterests",
      value:
      /** @override */
      function listNotificationInterests() {
        return [Notifications.START, Notifications.PLAY, Notifications.PAUSE, Notifications.TOGGLE_PLAY_PAUSE, Notifications.VOLUME_CHANGE, Notifications.PLAY_STATE_CHANGE];
      }
      /** */

    }, {
      key: "start",
      value: function start() {
        this.sendNotification(Notifications.REQUEST_PLAY);

        if (this.playback.initialized === false) {
          this.player.sendNotification(Notifications.INITIALIZED);
        }

        this.proxy.start();
      }
      /** */

    }, {
      key: "play",
      value: function play() {
        if (this.applicationState.getLocked() === true) {
          return;
        }

        this.sendNotification(Notifications.REQUEST_PLAY);

        if (this.proxy.getStarted() === false) {
          this.sendNotification(Notifications.START, true);
          return;
        }

        this.proxy.play();
        this.player.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.PLAYING);
      }
      /** */

    }, {
      key: "pause",
      value: function pause() {
        var _this = this;

        var time = this.proxy.adVO.time;
        var duration = this.proxy.adVO.duration; // See AMPWEB-268. Resolves issues created by premature pause instructions

        if (typeof time === "undefined" || time === duration) {
          // See AMPWEB-902
          var _transform = {
            transform: function transform(state) {
              if (state === Notifications.PLAYING) {
                // Required in relation to AMPWEB-1013
                _this.player.timers.setTimeout(function () {
                  _this.player.removeTransform(TransformType.PLAY_STATE, _transform);

                  return _this.player.sendNotification(Notifications.PAUSE);
                }, 300);

                return state;
              }
            },
            priority: 2
          };
          this.player.addTransform(TransformType.PLAY_STATE, _transform);
          return;
        }

        this.proxy.pause();
        this.player.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.PAUSED);
      }
      /** */

    }, {
      key: "toggleplaypause",
      value: function toggleplaypause() {
        var note = this.proxy.getPaused() || this.proxy.getStarted() === false ? Notifications.PLAY : Notifications.PAUSE;
        this.sendNotification(note, true);
      }
      /** */

    }, {
      key: "volumechange",
      value: function volumechange(volume) {
        this.proxy.setVolume(volume);
      }
      /** */

    }, {
      key: "playstatechange",
      value: function playstatechange(state) {
        if (state.value === "playing") {
          this.sendNotification(AdNotifications.AD_PLAYING, this.proxy.adVO);
        }
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "AdCoreController";
      }
    }]);
    return AdCoreController;
  }(PluginController);

  var AdProxy = /*#__PURE__*/function (_PluginProxy) {
    babelHelpers.inherits(AdProxy, _PluginProxy);

    /**
     * The AdProxy class.
     *
     * @constructor
     * @private
     * @extends {PluginProxy}
     * @param {Object} config
     */
    function AdProxy(config) {
      var _this;

      babelHelpers.classCallCheck(this, AdProxy);
      _this = _PluginProxy.call(this, config) || this;
      _this.pods = [];
      _this.content = new AdContentController();
      _this.ads = new AdCoreController();
      _this.processAdBreak = _this.processAdBreak.bind(babelHelpers.assertThisInitialized(_this));
      _this.processAdRequest = _this.processAdRequest.bind(babelHelpers.assertThisInitialized(_this));
      _this.inProgress = false;
      _this.paused = false;
      _this.started = false;
      _this.adVO = null;
      _this.contextName = "ad";
      _this.container = null;
      _this.partner = null;
      _this.pods = null;
      _this.mediaChanging = false;
      return _this;
    }
    /**
     * The name of the this Proxy.
     *
     * @static
     * @type {string}
     */


    babelHelpers.createClass(AdProxy, [{
      key: "createDefaultAdVO",
      value: function createDefaultAdVO() {
        return new AdVO(null, null, null, null, null, this.partner, null, null, null, null, null);
      }
      /** */

    }, {
      key: "getContainer",
      value: function getContainer() {
        return this.facade.player.adContainer || this.facade.player.container;
      }
      /** */

    }, {
      key: "setCompanions",
      value: function setCompanions(value) {
        this.adVO.companions = value;
        this.sendNotification(AdNotifications.AD_COMPANION, this.adVO);
        return value;
      }
    }, {
      key: "getCompanions",
      value: function getCompanions() {
        var ref;
        return (ref = this.adVO) != null ? ref.companions : void 0;
      }
      /** */

    }, {
      key: "getInProgress",
      value: function getInProgress() {
        return this.inProgress;
      }
    }, {
      key: "setInProgress",
      value: function setInProgress(value) {
        this.inProgress = value;
        return value;
      }
      /** */

    }, {
      key: "getStarted",
      value: function getStarted() {
        return this.started;
      }
      /** */

    }, {
      key: "setStarted",
      value: function setStarted(value) {
        this.started = value;
        return value;
      }
      /** */

    }, {
      key: "getPaused",
      value: function getPaused() {
        return this.paused;
      }
    }, {
      key: "setPaused",
      value: function setPaused(value) {
        this.paused = value;
        return value;
      }
    }, {
      key: "setCues",
      value: function setCues(value) {
        var cues = fp.transform(value, fp.map(function (cue) {
          return {
            startTime: cue,
            endTime: cue
          };
        }));
        this.facade.player.mediaProxy.setCues(cues);
        return value;
      }
      /** */

    }, {
      key: "play",
      value: function play() {
        this.setPaused(false);
        this.sendNotification(AdNotifications.AD_PLAY, this.adVO);
      }
      /** */

    }, {
      key: "pause",
      value: function pause() {
        this.setPaused(true);
        this.sendNotification(AdNotifications.AD_PAUSE, this.adVO);
      }
      /** */

    }, {
      key: "breakStart",
      value: function breakStart() {
        this.setInProgress(true);
      }
      /** */

    }, {
      key: "breakEnd",
      value: function breakEnd() {
        this.setInProgress(false);
        this.reset();
      }
      /** */

    }, {
      key: "error",
      value: function error(err) {
        var breakEnd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var msg = (typeof err.getMessage === "function" ? err.getMessage() : void 0) || err.message;
        this.facade.logger.error("[AMP AD ERROR]", "".concat(msg, " Skipping ad content."), err);

        if (this.adVO == null) {
          this.adVO = {};
        }

        this.adVO.error = err;
        this.sendNotification(AdNotifications.AD_ERROR, this.adVO);

        if (breakEnd === true) {
          this.endBreak();
        }
      }
      /** */

    }, {
      key: "engage",
      value: function engage(media) {
        if (this.getEnabled() === false) {
          return;
        }

        this.setStarted(false);

        if (this.getInProgress()) {
          this.reset();
          this.facade.player.sendNotification(Notifications.REMOVE_APPLICATION_STATE, "ad-mode");
        }

        this.engageAds();
      }
      /** */

    }, {
      key: "engageAds",
      value: function engageAds() {
        if (this.engaged === true) return;
        this.engaged = true;
        this.core = this.facade.player.removeMediator(CoreController.NAME);
        this.facade.removeMediator(AdContentController.NAME);
        this.facade.registerMediator(this.ads);
      }
      /** */

    }, {
      key: "reset",
      value: function reset() {
        this.engaged = false;
        this.facade.removeMediator(AdCoreController.NAME);
        this.facade.player.registerMediator(this.core);
        this.facade.registerMediator(this.content);
      }
      /** */

    }, {
      key: "processAdRequest",
      value: function processAdRequest(value) {
        var _this2 = this;

        return this.facade.player.transform(TransformType.AD_REQUEST, value).then(function (result) {
          _this2.sendNotification(AdNotifications.REQUEST, result);

          return _this2.facade.transform(TransformType.AD_REQUEST, result);
        });
      }
      /** */

    }, {
      key: "processAdBreak",
      value: function processAdBreak(value) {
        var _this3 = this;

        return this.facade.player.transform(TransformType.AD_BREAK, value).then(function (result) {
          return _this3.facade.transform(TransformType.AD_BREAK, result);
        });
      }
      /** */

    }, {
      key: "requestAd",
      value: function requestAd() {
        this.sendNotification(AdNotifications.REQUEST_START, this.adVO);
      }
      /** */

    }, {
      key: "getPodById",
      value: function getPodById(id) {
        return this.pods.find(function (pod) {
          return pod.id === id;
        });
      }
      /** */

    }, {
      key: "setPodLocks",
      value: function setPodLocks(pods) {
        var _this4 = this;

        pods.forEach(function (pod) {
          var p = _this4.getPodById(pod.id);

          if (p != null) {
            p.locked = pod.locked;
          }
        });
      }
      /** */

    }, {
      key: "resize",
      value: function resize(state) {}
      /** */

    }, {
      key: "startBreak",
      value: function startBreak(adVO) {
        if (adVO != null) {
          this.adVO = adVO;
        }

        this.setStarted(true);
        this.sendNotification(AdNotifications.BREAK_START, this.adVO);

        if (this.getEnabled() === false) {
          this.endBreak();
          return false;
        }

        return true;
      }
      /** */

    }, {
      key: "endBreak",
      value: function endBreak() {
        this.sendNotification(AdNotifications.BREAK_END, this.adVO);
      }
      /** */

    }, {
      key: "start",
      value: function start() {
        this.mediaChanging = false;
        this.startBreak();
      }
      /** */

    }, {
      key: "contentPlay",
      value: function contentPlay() {
        this.facade.player.sendNotification(Notifications.PLAY, true);
      }
      /** */

    }, {
      key: "contentPause",
      value: function contentPause() {
        var video = this.facade.player.mediaElement;

        if (video.seeking === true) {
          video.once("seeked", function () {
            video.pause();
          });
        } else {
          video.pause();
        }
      }
      /** */

    }, {
      key: "contentStarted",
      value: function contentStarted() {}
      /** */

    }, {
      key: "contentSeek",
      value: function contentSeek(time) {}
      /** */

    }, {
      key: "contentEnded",
      value: function contentEnded() {}
      /** */

    }, {
      key: "setVolume",
      value: function setVolume(value) {}
      /** */

    }, {
      key: "getVolume",
      value: function getVolume() {}
      /** */

    }, {
      key: "terminateAd",
      value: function terminateAd() {}
      /** */

    }, {
      key: "terminateAllAds",
      value: function terminateAllAds() {}
    }], [{
      key: "NAME",
      get: function get() {
        return PluginProxy.NAME;
      }
    }]);
    return AdProxy;
  }(PluginProxy);

  var AdRequest = /*#__PURE__*/function () {
    /**
     * Create an AdRequest object.
     *
     * @constructor
     * @param {Object} request The partner specific ad request object
     * @param {string} partner The partner identifier. i.e. "ima" or "freewheel"
     * @param {Object} config The plugin's configuration object
     * @param {Object} params Additional parameters to send with the ad request
     */
    function AdRequest(request, partner, config, params) {
      var _this = this;

      babelHelpers.classCallCheck(this, AdRequest);
      this.request = request;
      this.partner = partner;
      this.config = config;
      fp.each(params, function (value, key) {
        return _this[key] = value;
      });
    }
    /**
     * Create an AdRequest object.
     *
     * @param {Object} request The partner specific ad request object
     * @param {string} partner The partner identifier. i.e. "ima" or "freewheel"
     * @param {Object} config The plugin's configuration object
     * @param {Object} params Additional parameters to send with the ad request
     * @returns {AdRequest}
     */


    babelHelpers.createClass(AdRequest, null, [{
      key: "create",
      value: function create(request, partner, config, params) {
        return new AdRequest(request, partner, config, params);
      }
    }]);
    return AdRequest;
  }();

  var AdController = /*#__PURE__*/function (_PluginController) {
    babelHelpers.inherits(AdController, _PluginController);

    /**
     * The AdController class.
     *
     * @param {string} name
     * @param {Object} viewComponent
     * @constructor
     * @private
     * @extends {amp.plugins.ads.AdController}
     */
    function AdController() {
      babelHelpers.classCallCheck(this, AdController);
      return _PluginController.call(this, AdController.NAME) || this;
    }
    /**
     * @static
     * @type {string}
     */


    babelHelpers.createClass(AdController, [{
      key: "listNotificationInterests",
      value:
      /** @override */
      function listNotificationInterests() {
        return [Notifications.MEDIA_CHANGE, AdNotifications.BREAK_START, AdNotifications.BREAK_END, Notifications.SEEKED, AdNotifications.AD_CONTAINER_CREATED, Notifications.REPLAY, Notifications.DESTROY];
      }
      /** */

    }, {
      key: "mediachange",
      value: function mediachange(media) {
        if (this.proxy.getEnabled() === false) {
          return;
        }

        this.proxy.mediaChanging = true;
        this.proxy.engage(media);
      }
      /** */

    }, {
      key: "seeked",
      value: function seeked(time) {
        this.proxy.contentSeek(time);
      }
      /** */

    }, {
      key: "replay",
      value: function replay() {
        if (typeof this.proxy.replay === "function" && this.player.getAutoplay() === false) {
          this.proxy.replay();
        }
      }
      /** */

    }, {
      key: "destroy",
      value: function destroy() {
        if (typeof this.proxy.destroy === "function") this.proxy.destroy();
      }
      /** */

    }, {
      key: "adscontainercreated",
      value: function adscontainercreated(container) {
        this.proxy.container = container;
      }
      /** */

    }, {
      key: "adsbreakstart",
      value: function adsbreakstart() {
        this.proxy.breakStart();
      }
      /** */

    }, {
      key: "adsbreakend",
      value: function adsbreakend(adVO) {
        var _this = this;

        var rate;
        this.proxy.breakEnd();

        if ((adVO != null ? adVO.partner : void 0) === "ima") {
          rate = this.applicationState.getPlaybackRate();
          this.facade.player.setPlaybackRate(rate);
        }

        this.doAfter(function () {
          if (_this.applicationState.getEnded() && _this.applicationState.getHasPostContent() === true) {
            _this.sendNotification(Notifications.MEDIA_SEQUENCE_ENDED);
          }
        });
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "AdController";
      }
    }]);
    return AdController;
  }(PluginController);

  var AdEventController = /*#__PURE__*/function (_PluginController) {
    babelHelpers.inherits(AdEventController, _PluginController);

    /**
     * The AdEventController class.
     *
     * @param {string} name
     * @param {Object} viewComponent
     * @constructor
     * @private
     * @extends {amp.plugins.ads.AdEventController}
     */
    function AdEventController() {
      babelHelpers.classCallCheck(this, AdEventController);
      return _PluginController.call(this, AdEventController.NAME) || this;
    }
    /**
     * @static
     * @type {string}
     */


    babelHelpers.createClass(AdEventController, [{
      key: "listNotificationInterests",
      value:
      /** @override */
      function listNotificationInterests() {
        return Object.values(AdNotifications);
      }
      /**
       * Handles notifications of interest to this mediator.
       *
       * @param note An INotification
       * @override
       */

    }, {
      key: "handleNotification",
      value: function handleNotification(notification) {
        this.dispatchEvent(notification.getName(), notification.getBody());
      }
      /** */

    }, {
      key: "dispatchEvent",
      value: function dispatchEvent(type, detail) {
        type = type.replace(/^(ads)/, "");
        this.sendNotification(Notifications.DISPATCH_EVENT, Event.create(type, detail));
        this.facade.player.sendNotification(Notifications.DISPATCH_EVENT, Event.create("ad".concat(type), detail));
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "AdEventController";
      }
    }]);
    return AdEventController;
  }(PluginController);

  var AdPlugin = /*#__PURE__*/function (_Plugin) {
    babelHelpers.inherits(AdPlugin, _Plugin);

    /**
     * The AdPlugin class.
     *
     * @param {Module}  app     The parent module of this plugin.
     * @constructor
     * @private
     * @extends {Plugin}
     */
    function AdPlugin() {
      var _this;

      babelHelpers.classCallCheck(this, AdPlugin);
      _this = _Plugin.call(this) || this;
      _this.feature = "ads";
      _this.container = null;
      Object.defineProperties(babelHelpers.assertThisInitialized(_this), {
        enabled: {
          get: _this.getEnabled,
          set: _this.setEnabled,
          enumerable: true,
          configurable: false
        },
        inProgress: {
          get: _this.getInProgress,
          enumerable: true,
          configurable: false
        },
        started: {
          get: _this.getStarted,
          enumerable: true,
          configurable: false
        },
        paused: {
          get: _this.getPaused,
          enumerable: true,
          configurable: false
        },
        companions: {
          get: _this.getCompanions,
          enumerable: true,
          configurable: false
        },
        currentAd: {
          get: _this.getCurrentAd,
          enumerable: true,
          configurable: false
        }
      });
      return _this;
    }
    /**
     * @static
     * @type {string}
     */


    babelHelpers.createClass(AdPlugin, [{
      key: "createModel",
      value:
      /** @override */
      function createModel() {
        this.proxy = this.isFullscreenDevice() ? this.createFullscreenProxy() : this.createProxy();
        this.registerProxy(this.proxy);
      }
      /** @override */

    }, {
      key: "createController",
      value: function createController() {
        babelHelpers.get(babelHelpers.getPrototypeOf(AdPlugin.prototype), "createController", this).call(this);
        this.registerMediator(new AdController());
        this.registerMediator(new AdEventController());
      }
    }, {
      key: "isFullscreenDevice",
      value: function isFullscreenDevice() {
        return Utils.isFullscreenDevice();
      }
    }, {
      key: "createProxy",
      value: function createProxy() {}
    }, {
      key: "createFullscreenProxy",
      value: function createFullscreenProxy() {}
      /** */

    }, {
      key: "listNotificationInterests",
      value: function listNotificationInterests() {
        return [Notifications.MEDIA_CHANGE, Notifications.REPLAY, Notifications.PLAY, Notifications.PAUSE, Notifications.PAUSED, Notifications.START, Notifications.STARTED, Notifications.ENDED, Notifications.READY, Notifications.VOLUME_CHANGE, Notifications.FULL_SCREEN_CHANGE, Notifications.CHANGE_ACTIVE_STATE, Notifications.PLAY_STATE_CHANGE, Notifications.SEEKED, Notifications.TOGGLE_PLAY_PAUSE, Notifications.DESTROY];
      }
      /** */

    }, {
      key: "listNotificationPublications",
      value: function listNotificationPublications() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(AdPlugin.prototype), "listNotificationPublications", this).call(this).concat(Object.values(AdNotifications)).concat([Notifications.REQUEST_PLAY, Notifications.DISPLAY_TIME, Notifications.DISABLE_FULL_SCREEN, Notifications.ENABLE_VIDEO_EVENTS, Notifications.DISABLE_VIDEO_EVENTS, Notifications.HAS_POST_CONTENT, Notifications.MEDIA_SEQUENCE_ENDED, Notifications.CHANGE_PLAY_STATE, Notifications.AUTOPLAY_BLOCKED]);
      }
      /**
       * @param {boolean} value The enabled flag.
       * @expose
       */

    }, {
      key: "setEnabled",
      value: function setEnabled(value) {
        this.proxy.setEnabled(value);
      }
      /**
       * @return {boolean} The enabled flag.
       * @expose
       */

    }, {
      key: "getEnabled",
      value: function getEnabled() {
        return this.proxy.getEnabled();
      }
      /**
       * @return {boolean} The in progress flag.
       * @expose
       */

    }, {
      key: "getInProgress",
      value: function getInProgress() {
        return this.proxy.getInProgress();
      }
      /**
       * @return {boolean} The started flag.
       * @expose
       */

    }, {
      key: "getStarted",
      value: function getStarted() {
        return this.proxy.getStarted();
      }
      /**
       * @return {boolean} The paused flag.
       * @expose
       */

    }, {
      key: "getPaused",
      value: function getPaused() {
        return this.proxy.getPaused();
      }
      /**
       * @return {Array.<Object>} The list of companion ads.
       * @expose
       */

    }, {
      key: "getCompanions",
      value: function getCompanions() {
        return this.proxy.getCompanions();
      }
      /**
       * @return {Array.<Object>} The list of companion ads.
       * @expose
       */

    }, {
      key: "getCurrentAd",
      value: function getCurrentAd() {
        return this.proxy.adVO;
      }
      /**
       * @expose
       */

    }, {
      key: "setPodLocks",
      value: function setPodLocks(pods) {
        this.proxy.setPodLocks(pods);
      }
      /**
       * @expose
       */

    }, {
      key: "resize",
      value: function resize(state) {
        this.proxy.resize(state);
      }
      /**
       * @expose
       */

    }, {
      key: "terminateAd",
      value: function terminateAd() {
        this.proxy.terminateAd();
      }
      /**
       * @expose
       */

    }, {
      key: "terminateAllAds",
      value: function terminateAllAds() {
        this.proxy.terminateAllAds();
      }
      /**
       * @expose
       */

    }, {
      key: "requestAd",
      value: function requestAd() {
        this.proxy.start(false);
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "AdPlugin";
      }
    }]);
    return AdPlugin;
  }(Plugin);

  var PluginMediator = /*#__PURE__*/function (_OverlayMediator) {
    babelHelpers.inherits(PluginMediator, _OverlayMediator);

    /**
     * PluginMediator class.
     *
     * @constructor
     * @private
     * @extends {OverlayMediator}
     */
    function PluginMediator(name) {
      babelHelpers.classCallCheck(this, PluginMediator);
      return _OverlayMediator.call(this, name) || this;
    }
    /** @override */


    babelHelpers.createClass(PluginMediator, [{
      key: "initializeNotifier",
      value: function initializeNotifier(key) {
        babelHelpers.get(babelHelpers.getPrototypeOf(PluginMediator.prototype), "initializeNotifier", this).call(this, key);
        this.plugin = this.facade.retrieveProxy(ModuleProxy.NAME);
        this.media = this.facade.player.retrieveProxy(MediaProxy.NAME);
      }
      /** @override */

    }, {
      key: "onRegister",
      value: function onRegister() {
        babelHelpers.get(babelHelpers.getPrototypeOf(PluginMediator.prototype), "onRegister", this).call(this);
        this.facade.viewComponent = this.viewComponent;
      }
    }]);
    return PluginMediator;
  }(OverlayMediator);

  var CaptioningMediator = /*#__PURE__*/function (_PluginMediator) {
    babelHelpers.inherits(CaptioningMediator, _PluginMediator);

    /**
     * The CaptioningMediator class.
     *
     * @constructor
     * @private
     * @extends {PluginMediator}
     * @param {Object} viewComponent
     */
    function CaptioningMediator() {
      babelHelpers.classCallCheck(this, CaptioningMediator);
      return _PluginMediator.call(this, "captioning") || this;
    }
    /**
     * @override
     */


    babelHelpers.createClass(CaptioningMediator, [{
      key: "onRegister",
      value: function onRegister() {
        babelHelpers.get(babelHelpers.getPrototypeOf(CaptioningMediator.prototype), "onRegister", this).call(this); //Creating Dynaic Class Injection to DOM

        this.captioningStyle = this.create(null, this.viewComponent, "style");
        this.captioningStyle.type = "text/css";
        this.applyStyles();
      }
      /**
       * @override
       */

    }, {
      key: "listNotificationInterests",
      value: function listNotificationInterests() {
        return [CaptioningNotifications.VISIBILITY_CHANGE, CaptioningNotifications.ENABLED, CaptioningNotifications.TRACK_SELECTED, Notifications.SETTINGS_CHANGE];
      }
      /** @override */

    }, {
      key: "onRemove",
      value: function onRemove() {
        if (this.captioningStyle) {
          this.viewComponent.removeChild(this.captioningStyle);
        }
      }
      /**
       * @override
       */

    }, {
      key: "handleNotification",
      value: function handleNotification(notification) {
        var body = notification.getBody();
        var note = body ? Notifications.ADD_APPLICATION_STATE : Notifications.REMOVE_APPLICATION_STATE;
        var state;

        switch (notification.getName()) {
          case CaptioningNotifications.TRACK_SELECTED:
            state = "cc-embedded";
            note = body.type === "embedded" ? Notifications.ADD_APPLICATION_STATE : Notifications.REMOVE_APPLICATION_STATE;
            break;

          case CaptioningNotifications.VISIBILITY_CHANGE:
            state = "cc-active";
            break;

          case CaptioningNotifications.ENABLED:
            note = body ? Notifications.ADD_CONTROL_STATE : Notifications.REMOVE_CONTROL_STATE;
            state = "cc-enabled";

            if (!body) {
              this.sendNotification(Notifications.REMOVE_APPLICATION_STATE, "cc-active");
            }

            break;

          case Notifications.SETTINGS_CHANGE:
            if (body.captions != null) {
              this.applyStyles();
            }

        }

        if (state != null) {
          this.sendNotification(note, state);
        }
      }
    }, {
      key: "applyStyles",
      value: function applyStyles() {
        var settings = this.facade.settings;
        var styles = this.facade.settings.styles;
        var windowStyles = CSS.toCSS(styles.window, true, "\n");
        var textStyles = CSS.toCSS(styles.text, true, "\n");
        var id = "#" + this.facade.player.viewComponent.id;

        if (settings.visible != null) {
          this.facade.hidden = !settings.visible;
        } // all of these rules need to be defined individually because if
        // one of the selectors is invalid the entire rule will be ignored


        var rules = "".concat(id, " .amp-caption {").concat(windowStyles, "}\n") + "".concat(id, " .amp-caption p, ").concat(id, " .amp-caption span {").concat(textStyles, "}\n"); // Chrome does not provide a "window" div, so we merge the two sets of styles

        if (Utils.isChrome()) {
          rules += "".concat(id, " video::cue {").concat(textStyles).concat(windowStyles, "}\n");
        } else {
          rules += "".concat(id, " video::-webkit-media-text-track-display-backdrop {").concat(windowStyles, "}\n") + "".concat(id, " video::cue {").concat(textStyles, "}\n") + "".concat(id, " video::-webkit-media-text-track-display span {").concat(textStyles, "}");
        }

        this.captioningStyle.innerHTML = rules;
      }
    }]);
    return CaptioningMediator;
  }(PluginMediator);

  var CaptioningHTMLMediator = /*#__PURE__*/function (_ComponentMediator) {
    babelHelpers.inherits(CaptioningHTMLMediator, _ComponentMediator);

    /**
     * The CaptioningHTMLMediator class.
     *
     * @constructor
     * @private
     * @extends {LocalizedMediator}
     * @param {Object} viewComponent
     */
    function CaptioningHTMLMediator(viewComponent) {
      var _this;

      babelHelpers.classCallCheck(this, CaptioningHTMLMediator);
      _this = _ComponentMediator.call(this, CaptioningHTMLMediator.NAME, null, viewComponent) || this;
      _this.proxy = null;
      _this.handleInline = _this.handleInline.bind(babelHelpers.assertThisInitialized(_this));
      _this.inlineTypes = [Utils.mimeTypes.vtt, Utils.mimeTypes.cea608, Utils.mimeTypes.cea708, Utils.mimeTypes.ttml];
      _this.current = [];
      return _this;
    }
    /** @static */


    babelHelpers.createClass(CaptioningHTMLMediator, [{
      key: "getRendererName",
      value:
      /** */
      function getRendererName() {
        return "html";
      }
      /** @override */

    }, {
      key: "onRegister",
      value: function onRegister() {
        babelHelpers.get(babelHelpers.getPrototypeOf(CaptioningHTMLMediator.prototype), "onRegister", this).call(this);
        this.proxy = this.facade.retrieveProxy(CaptioningProxy.NAME);
        var track = this.proxy.getTrack();
        if (track == null) return;
        var cues = track.activeCues;

        if (cues.length > 0) {
          this.render(cues);
        }

        this.initInline();
      }
      /** */

    }, {
      key: "onRemove",
      value: function onRemove() {
        this.clear();
      }
      /** */

    }, {
      key: "canUseResource",
      value: function canUseResource(resource) {
        if (resource == null) {
          return false;
        }

        var types = [Utils.mimeTypes.srt, Utils.mimeTypes.ttml].concat(this.inlineTypes);
        return types.includes(resource.type);
      }
      /** */

    }, {
      key: "initInline",
      value: function initInline() {
        var _this2 = this;

        var player = this.proxy.facade.player;
        var textTrack = this.proxy.getTextTrack();
        var track = this.proxy.track;

        var hasSidecar = function hasSidecar(track) {
          return !!track.src;
        };

        if (!track || !textTrack || !this.inlineTypes.includes(track.type)) return;
        track.enabled = true;

        var inactive = function inactive(track) {
          return textTrack.language !== track.language || textTrack.kind !== track.kind;
        };

        var setDisabled = function setDisabled(track) {
          track.removeEventListener("cuechange", _this2.handleInline, true);
          track.mode = TrackMode.DISABLED;
        };

        var setHidden = function setHidden(track) {
          track.addEventListener("cuechange", _this2.handleInline, true); // Show & Hide to propagate the track selection across cores

          track.mode = TrackMode.SHOWING;
          player.timers.setTimeout(function () {
            return track.mode = TrackMode.HIDDEN;
          }, 10);
        };

        if (this.proxy.getHidden() || hasSidecar(track)) setDisabled(textTrack);else setHidden(textTrack);
        fp.transform(this.proxy.getTextTracks(), fp.filter(inactive), fp.map(setDisabled));
        this.handleInline({
          target: textTrack
        });
      }
      /** */

    }, {
      key: "handleInline",
      value: function handleInline(event) {
        var target = event.target; // Fix AMPWEB-2330: IE11 ensure hidden track mode 

        target.mode = TrackMode.HIDDEN;
        if (target.activeCues == null) return;
        var cues = this.convertCues(target.activeCues);
        this.sendNotification(CaptioningNotifications.CHANGE_CUE, cues);
      }
      /**
       * Convert VTTCue to Caption Cue
       */

    }, {
      key: "convertCues",
      value: function convertCues(activeCues) {
        return Array.from(activeCues, function (cue) {
          var text = cue.text; // ignore JSON cue points

          if (/^\{\".*}$/.test(text)) return;
          cue.html = WebVTTParser.createHTML(text);
          return cue;
        }).filter(function (cue) {
          return !!cue;
        });
      }
      /**
       * Computes CSS styles based on VTT settings.
       *
       * @param {CaptionCue}	cue - The vtt cue point
       * @param {Number}	offset - The line number offset
       *
       * @return {Object}
       */

    }, {
      key: "computeStyles",
      value: function computeStyles(cue) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var bounds = arguments.length > 2 ? arguments[2] : undefined;

        var parseValue = function parseValue(value) {
          var dflt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
          value = parseInt(value);
          return isNaN(value) ? dflt : value;
        };

        var toPercent = function toPercent(value) {
          return "".concat(value, "%");
        };

        var styles = {
          position: "absolute",
          overflow: "visible",
          minWidth: "min-content"
        }; // values

        var align = cue.align || "middle";
        var pos = parseValue(cue.position, "auto");
        var size = parseValue(cue.size);
        var line = parseValue(cue.line, "auto");
        var auto = pos == "auto"; // alignment

        switch (align) {
          case "left":
          case "start":
            styles.textAlign = "start";
            if (auto) pos = 0;
            break;

          case "middle":
          case "center":
            styles.textAlign = "center";
            if (auto) pos = (100 - size) / 2;
            break;

          case "right":
          case "end":
            styles.textAlign = "end";
            if (auto) pos = 100;
            break;
        } // position


        styles.left = toPercent(pos); // size

        if (!auto && size === 100) {
          size = size - pos;
        }

        styles.width = toPercent(size); // line

        if (line < 0 || line > 100) {
          line = 100;
        } else if (line === "auto") {
          line = 100 - offset;
        }

        if (cue.snapToLines === true) {
          styles.top = "".concat(line * (bounds.height + 1), "px");
        } else {
          styles.top = toPercent(line);
        }

        if (cue.visible === false) styles.visibility = "hidden";
        return styles;
      }
      /**
       * adjustCaptions
       */

    }, {
      key: "adjustCaptions",
      value: function adjustCaptions() {
        var _this3 = this;

        var bounds = this.viewComponent.getBoundingClientRect();
        this.elements.forEach(function (element) {
          return _this3.adjustCaption(element, bounds);
        });
      }
      /**
       * Adjust the caption position to fit inside viewable area
       *
       * @param {DOMElement}	element - The caption DOM element
       * @param {Object}	bounds - The bounding rect
       */

    }, {
      key: "adjustCaption",
      value: function adjustCaption(element, bounds) {
        // adjust positioning
        var rect = element.getBoundingClientRect();
        var style = element.style;

        if (rect.bottom > bounds.bottom) {
          style.top = "auto";
          style.bottom = "0%";
        }

        if (rect.right > bounds.right) {
          style.left = "auto";
          style.right = "0%";
        }
      }
      /**
       * @override
       */

    }, {
      key: "listNotificationInterests",
      value: function listNotificationInterests() {
        return [CaptioningNotifications.CUE_CHANGE, CaptioningNotifications.TRACK_SELECTED, CaptioningNotifications.VISIBILITY_CHANGE, Notifications.CHANGE_MEDIA, Notifications.LOADED_METADATA, Notifications.CAN_PLAY_THROUGH];
      }
      /**
       * @override
       */

    }, {
      key: "handleNotification",
      value: function handleNotification(notification) {
        var name = notification.getName();
        var body = notification.getBody();
        this.viewComponent;

        switch (name) {
          case Notifications.CHANGE_MEDIA:
            this.clear();
            break;

          case CaptioningNotifications.CUE_CHANGE:
            this.render(body);
            break;

          case CaptioningNotifications.VISIBILITY_CHANGE:
          case CaptioningNotifications.TRACK_SELECTED:
          case Notifications.LOADED_METADATA:
          case Notifications.CAN_PLAY_THROUGH:
            this.initInline();
            break;
        }
      }
      /**
       * Clear cues.
       */

    }, {
      key: "clear",
      value: function clear() {
        this.viewComponent.innerHTML = "";
        this.elements = null;
      }
      /**
       * createCaption
       *
       * @param {type}	cue - this is the parameter cue
       * @param {type}	offset - this is the parameter offset
       *
       */

    }, {
      key: "createCaption",
      value: function createCaption(cue, offset, line) {
        return this.viewComponent.appendChild(UI.createElement({
          "class": "amp-caption-area",
          style: this.computeStyles(cue, offset, line),
          children: [{
            "class": "amp-caption",
            innerHTML: cue.html
          }]
        }));
      }
      /**
       *
       */

    }, {
      key: "getLineBounds",
      value: function getLineBounds() {
        var element = this.createCaption({
          html: "CUE",
          visible: false
        }, 0);
        var rect = element.getBoundingClientRect();
        this.viewComponent.removeChild(element);
        return rect;
      }
      /**
       * Loop through the cues and pull out the ones that need
       * to be auto aligned and return a single multi-line cue.
       */

    }, {
      key: "processCues",
      value: function processCues(cues) {
        var results = cues.slice();
        var len = cues.length;
        var i = 0;
        var text = "";

        while (i < len) {
          var cue = results[i];
          var line = cue.line;
          if (line == "auto" || line >= 100 || line < 0) line = 100;

          if (line != 100) {
            ++i;
            continue;
          }

          results.splice(i, 1);
          len--;
          text += cue.text + "\n";
        }

        if (text.length > 0) results.push({
          text: text,
          html: WebVTTParser.createHTML(text),
          line: 100
        });
        return results;
      }
      /**
       * Renders cue points.
       *
       * @param {Array.<CaptionCue>}	cues - this is the parameter cues
       *
       */

    }, {
      key: "render",
      value: function render(cues) {
        var _this4 = this;

        var settings = this.facade.player.settings.captions || {};
        settings.scroll = settings.scroll.toLowerCase().replace("-", "");

        switch (settings.scroll) {
          case "rollon":
            this.classList.add("captioning-roll");
            this.classList.remove("captioning-typed");

          case "painton":
            var exist = function exist(cue) {
              return _this4.current == cue;
            };

            var active = cues.filter(exist).length > 0;
            var length = cues.length - 1;
            if (active) return; // no need to update if cue is active
            else if (length < 0) return this.clear();
            this.current = cues[length];
            if (settings.scroll !== "painton") break;
            this.classList.add("captioning-typed");
            this.classList.remove("captioning-roll");
            break;

          default:
            this.classList.remove("captioning-roll");
            this.classList.remove("captioning-typed");
            break;
        }

        this.clear();
        var line = this.getLineBounds();
        var len = cues.length - 1;
        this.elements = fp.transform(this.processCues(cues), fp.map(function (cue) {
          return _this4.createCaption(cue, len--, line);
        }));
        this.adjustCaptions();
      }
    }], [{
      key: "NAME",
      get: function get() {
        return CaptioningProxy.TEXT_TRACK_RENDERER;
      }
    }]);
    return CaptioningHTMLMediator;
  }(ComponentMediator);

  var CaptioningNativeMediator = /*#__PURE__*/function (_LocalizedMediator) {
    babelHelpers.inherits(CaptioningNativeMediator, _LocalizedMediator);

    /**
     * The CaptioningMediator class.
     *
     * @constructor
     * @private
     * @extends {PluginMediator}
     * @param {Object} viewComponent
     */
    function CaptioningNativeMediator(viewComponent) {
      var _this;

      babelHelpers.classCallCheck(this, CaptioningNativeMediator);
      _this = _LocalizedMediator.call(this, CaptioningNativeMediator.NAME, viewComponent) || this;
      _this.proxy = null;
      _this.track = null;
      _this.handleInline = _this.handleInline.bind(babelHelpers.assertThisInitialized(_this));
      return _this;
    }
    /** @static */


    babelHelpers.createClass(CaptioningNativeMediator, [{
      key: "getRendererName",
      value:
      /** */
      function getRendererName() {
        return "native";
      }
      /** */

    }, {
      key: "canUseResource",
      value: function canUseResource(resource) {
        if (resource == null) {
          return false;
        }

        var hasNative = document.createElement("video").textTracks != null;

        if (!hasNative) {
          return false;
        }

        var types = [Utils.mimeTypes.vtt, Utils.mimeTypes.cea608, Utils.mimeTypes.cea708];
        var useNative = /iphone|ipad/.test(Utils.getDevice());

        if (!useNative) {
          return false;
        }

        return types.indexOf(resource.type) !== -1;
      }
      /**
       * @override
       */

    }, {
      key: "onRegister",
      value: function onRegister() {
        this.proxy = this.facade.retrieveProxy(CaptioningProxy.NAME);
        this.loadTracks();
        this.updateTrack();
      }
      /**
        * @override
        */

    }, {
      key: "onRemove",
      value: function onRemove() {
        this.unloadTracks();
      }
      /**
       * @override
       */

    }, {
      key: "listNotificationInterests",
      value: function listNotificationInterests() {
        return [CaptioningNotifications.VISIBILITY_CHANGE, CaptioningNotifications.TRACK_SELECTED, Notifications.LOADED_METADATA, Notifications.CAN_PLAY_THROUGH];
      }
      /**
       * @override
       */

    }, {
      key: "handleNotification",
      value: function handleNotification(notification) {
        notification.getBody();

        switch (notification.getName()) {
          case CaptioningNotifications.TRACK_SELECTED:
          case CaptioningNotifications.VISIBILITY_CHANGE:
          case Notifications.CAN_PLAY_THROUGH:
            this.updateTrack();
            break;

          case Notifications.LOADED_METADATA:
            this.loadTracks();
        }
      }
    }, {
      key: "unloadTracks",
      value: function unloadTracks() {
        this.proxy.getTextTracks().forEach(function (track) {
          return track.mode = TrackMode.HIDDEN;
        });
        var mediaElement = this.facade.player.getMediaElement();
        var tracks = Array.from(mediaElement.children);
        tracks.forEach(function (track) {
          return mediaElement.removeChild(track);
        });
      }
    }, {
      key: "loadTracks",
      value: function loadTracks() {
        this.unloadTracks();
        var tracks = this.proxy.getTracks();

        if (tracks == null) {
          return;
        }

        var mediaElement = this.facade.player.getMediaElement();
        var crossorigin = this.proxy.getCrossOrigin();

        if (crossorigin != null) {
          mediaElement.setAttribute("crossorigin", crossorigin);
        }

        tracks.forEach(function (track) {
          if (track.type !== Utils.mimeTypes.vtt) {
            return;
          }

          var element = document.createElement("track");
          element.src = track.src;

          if (track.kind != null) {
            element.kind = track.kind;
          }

          if (track.language != null) {
            element.srclang = track.language;
          }

          if (track.label != null) {
            element.label = track.label;
          }

          element["default"] = track["default"];
          mediaElement.appendChild(element);
        });
      }
    }, {
      key: "updateTrack",
      value: function updateTrack() {
        // hide the previously selected track
        if (this.track != null) {
          this.track.mode = TrackMode.HIDDEN;
        } // hide all <video> media text tracks avail


        this.proxy.getTextTracks().forEach(function (track) {
          return track.mode = TrackMode.HIDDEN;
        });
        var track = this.proxy.getTextTrack();

        if (track) {
          this.track = track;

          if (this.proxy.getHidden()) {
            this.track.removeEventListener("cuechange", this.handleInline, true);
            this.track.mode = TrackMode.HIDDEN;
          } else {
            this.track.addEventListener("cuechange", this.handleInline, true);
            this.track.mode = TrackMode.SHOWING;
          }
        }
      }
      /** */

    }, {
      key: "handleInline",
      value: function handleInline(event) {
        this.sendNotification(CaptioningNotifications.CHANGE_CUE, Array.from(event.target.activeCues));
      }
    }], [{
      key: "NAME",
      get: function get() {
        return CaptioningProxy.TEXT_TRACK_RENDERER;
      }
    }]);
    return CaptioningNativeMediator;
  }(LocalizedMediator);

  var LiveCaptionProxy = /*#__PURE__*/function (_puremvc$Proxy) {
    babelHelpers.inherits(LiveCaptionProxy, _puremvc$Proxy);

    /**
     * @constructor
     * @private
     */
    function LiveCaptionProxy() {
      var _this;

      babelHelpers.classCallCheck(this, LiveCaptionProxy);
      _this = _puremvc$Proxy.call(this, LiveCaptionProxy.NAME) || this;
      _this.captions = [];
      _this.head = document.getElementsByTagName("head")[0]; //create JSONP callback

      var com = window.com || {};
      com.akamai = com.akamai || {};
      com.akamai.amp = com.akamai.amp || {};
      com.akamai.amp.plugins = com.akamai.amp.plugins || {};
      com.akamai.amp.plugins.subply = com.akamai.amp.plugins.subply || {};

      com.akamai.amp.plugins.subply.response = function (json) {
        _this.parse(json);

        _this.poll();
      };

      if (window.com == null) {
        window.com = com;
      }

      _this.data = {
        base: "http://test.plymedia.com.s3.amazonaws.com/online/Akamai_",
        interval: 1000
      };
      _this.caption = null;
      _this.head = null;
      _this.script = null;
      _this.timeout = null;
      return _this;
    }
    /**
     *
     */


    babelHelpers.createClass(LiveCaptionProxy, [{
      key: "getURL",
      value: function getURL() {
        return this.data.url;
      }
    }, {
      key: "setURL",
      value: function setURL(value) {
        this.data.url = value;
        return value;
      }
    }, {
      key: "start",
      value: function start() {
        this.send();
      }
    }, {
      key: "poll",
      value: function poll() {
        var _this2 = this;
        this.facade.player.timers.setTimeout(function () {
          _this2.send();
        }, this.data.interval || 1000);
      }
    }, {
      key: "send",
      value: function send() {
        var _this3 = this;

        if (this.script != null) {
          this.head.removeChild(this.script);
        }

        this.script = Utils.loadScript(this.data.base + this.data.url + ".js?nocache=" + Date.now()).then(function (script) {
          return _this3.script = script;
        })["catch"](function (error) {
          return _this3.facade.logger.error("[AMP CAPTIONING ERROR]", error);
        });
      }
    }, {
      key: "stop",
      value: function stop() {
        clearTimeout(timeout);
      }
      /**
       *
       */

    }, {
      key: "parse",
      value: function parse(response) {
        if (response.Stream !== this.data.url) {
          return;
        }

        if (this.caption != null && this.caption.id >= response.Ticks) {
          return;
        }

        this.caption = new CaptionCue(Utils.flattenTimecode(response.From), Utils.flattenTimecode(response.To), response.Ticks);
        this.caption.text = response.Text;
        html = "";
        fp.each(response.Text.split("\n"), function (text) {
          if (html !== "") {
            html += "<br />";
          }

          html += "<span>" + text + "</span>";
        });
        this.caption.html = "<p>" + html + "</p>";
        this.sendNotification(CaptioningNotifications.CUE_CHANGE, [this.caption]);
        return this.caption;
      }
    }]);
    return LiveCaptionProxy;
  }(puremvc.Proxy);
  /** @static */

  LiveCaptionProxy.NAME = "LiveCaptionProxy";

  var TTMLCaptionProxy = /*#__PURE__*/function (_puremvc$Proxy) {
    babelHelpers.inherits(TTMLCaptionProxy, _puremvc$Proxy);

    /**
     * @constructor
     * @private
     */
    function TTMLCaptionProxy() {
      var _this;

      babelHelpers.classCallCheck(this, TTMLCaptionProxy);
      _this = _puremvc$Proxy.call(this, TTMLCaptionProxy.NAME) || this;
      _this.parser = new SMPTETTParser();
      return _this;
    }

    babelHelpers.createClass(TTMLCaptionProxy, [{
      key: "create",
      value: function create(value, notification) {
        var xml = value.data;
        var track = this.facade.getTrack();
        fp.each(this.parseToCues(xml), function (cue, index) {
          this.cues.push(cue);
        }.bind(track));
      }
    }, {
      key: "parseToCues",
      value: function parseToCues(xml) {
        var track,
            hasError = false;

        try {
          track = this.parser.parse(xml);
          if (track.cues == null || !track.cues instanceof Array) throw "property 'cues' is undefined";
        } catch (error) {
          this.dispatch("error", "Could not parse ttml caption track", error);
          Logger.instance.error("Could not parse ttml caption track", error);
          hasError = true;
        }

        if (hasError) return new Array();
        return track.cues;
      }
    }]);
    return TTMLCaptionProxy;
  }(puremvc.Proxy);
  /** @static */

  TTMLCaptionProxy.NAME = "TTMLCaptionProxy";

  var CaptioningController = /*#__PURE__*/function (_PluginController) {
    babelHelpers.inherits(CaptioningController, _PluginController);

    /**
     * The AdContentController class.
     *
     * @param {string} name
     * @param {Object} viewComponent
     * @constructor
     * @private
     * @extends {amp.plugins.ads.AdContentController}
     */
    function CaptioningController() {
      babelHelpers.classCallCheck(this, CaptioningController);
      return _PluginController.call(this, CaptioningController.NAME) || this;
    }
    /**
     * @static
     * @type {string}
     */


    babelHelpers.createClass(CaptioningController, [{
      key: "listNotificationInterests",
      value:
      /** @override */
      function listNotificationInterests() {
        return [Notifications.CHANGE_MEDIA, Notifications.STARTED, Notifications.TIME_UPDATE, Notifications.LOADED_DATA, CaptioningNotifications.VISIBILITY_CHANGE, CaptioningNotifications.ENABLED, CaptioningNotifications.CHANGE_CUE, CaptioningNotifications.TRACK_SELECTED, CaptioningNotifications.TRACKS_LOADED, CaptioningNotifications.CUE_CHANGE, CaptioningNotifications.TTML_CUE_CHANGE];
      }
      /** */

    }, {
      key: "changemedia",
      value: function changemedia(media) {
        this.proxy.setTracks(media.track);
        this.proxy.selectRenderer(media);
        this.sendNotification(CaptioningNotifications.ENABLED, true);
      }
      /** */

    }, {
      key: "started",
      value: function started() {
        var _this = this;

        var tracks = this.proxy.getTracks();
        var proxy = this.proxy;
        var track = proxy.getTrack();

        if (track == null && tracks.length > 0) {
          track = proxy.autoSelectTrack();
        }

        if (track == null) return;

        if (track.isLive === true) {
          proxy = this.facade.retrieveProxy(LiveCaptionProxy.NAME);

          if (proxy == null) {
            proxy = new LiveCaptionProxy();
            this.facade.registerProxy(proxy);
          }

          proxy.setURL(track.src);
          proxy.start();
        }

        fp.find(tracks, fp.filter(function (track) {
          return track.type === Utils.mimeTypes.ttml;
        }), fp.map(function () {
          proxy = _this.facade.retrieveProxy(TTMLCaptionProxy.NAME);
          proxy = new TTMLCaptionProxy();

          _this.facade.registerProxy(proxy);
        }));
      }
      /** */

    }, {
      key: "timeupdate",
      value: function timeupdate(time) {
        var track = this.proxy.getTrack();
        if (track == null || track.isLive === true) return;
        var active = track.activeCues;
        var changed = false;
        track.cues.forEach(function (cue) {
          if (cue == null) return;
          var index = active.indexOf(cue);
          changed = true;

          if (time >= cue.startTime && time < cue.endTime) {
            if (index === -1) active.push(cue);
          } else {
            if (index !== -1) active.splice(index, 1);
          }
        });

        if (changed === true) {
          this.sendNotification(CaptioningNotifications.CHANGE_CUE, active);
        }
      }
    }, {
      key: "loadeddata",
      value: function loadeddata() {
        var _this$facade$player$t = this.facade.player.textTracks,
            textTracks = _this$facade$player$t === void 0 ? [] : _this$facade$player$t;
        if (this.proxy.getTracks().length !== 0 || textTracks.length === 0) return;

        var toObject = function toObject(track) {
          return {
            srclang: track.language,
            type: !!track.isEmbedded ? Utils.mimeTypes.cea608 : Utils.mimeTypes.vtt,
            kind: track.kind,
            label: track.label
          };
        }; // map from textTracks if not provided through player config


        var tracks = [];
        fp.each(textTracks, function (track) {
          if (tracks.some(function (item) {
            return item.srclang === track.language;
          })) return;
          tracks.push(toObject(track));
        });
        this.proxy.setTracks(tracks);
        this.proxy.selectRenderer();
      }
      /** */

    }, {
      key: "captioningvisibilitychange",
      value: function captioningvisibilitychange(visible, notification) {
        var hidden = !visible;

        if (hidden === this.proxy.getHidden()) {
          return;
        }

        this.proxy.setHidden(hidden);
        this.dispatchEvent(notification);
      }
      /** */

    }, {
      key: "captioningenabled",
      value: function captioningenabled(value, notification) {
        this.proxy.setEnabled(value);
        this.dispatchEvent(notification);
      }
      /** */

    }, {
      key: "captioningchangecue",
      value: function captioningchangecue(cues) {
        var _this2 = this;

        this.player.transform(TransformType.CUE_CHANGE, cues).then(function (result) {
          if (result == null) return;

          _this2.sendNotification(CaptioningNotifications.CUE_CHANGE, result);
        })["catch"](function (error) {
          _this2.sendNotification(CaptioningNotifications.CUE_CHANGE, cues);
        });
      }
      /** */

    }, {
      key: "captioningtrackselected",
      value: function captioningtrackselected(value, notification) {
        this.dispatchEvent(notification);
      }
      /** */

    }, {
      key: "captioningtracksloaded",
      value: function captioningtracksloaded(value, notification) {
        this.dispatchEvent(notification);
      }
      /** */

    }, {
      key: "captioningcuechange",
      value: function captioningcuechange(value, notification) {
        this.dispatchEvent(notification);
      }
    }, {
      key: "captioningttmlcuechange",
      value: function captioningttmlcuechange(value, notification) {
        var proxy = this.facade.retrieveProxy(TTMLCaptionProxy.NAME);
        var track = this.proxy.getTrack();
        if (proxy == null || track.type !== Utils.mimeTypes.ttml) return;
        proxy.create(value, notification);
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "CaptioningController";
      }
    }]);
    return CaptioningController;
  }(PluginController);

  var PluginCommand = /*#__PURE__*/function (_puremvc$SimpleComman) {
    babelHelpers.inherits(PluginCommand, _puremvc$SimpleComman);

    /**
     * @constructor
     * @private
     * @extends {puremvc.SimpleCommand}
     */
    function PluginCommand() {
      var _this;

      babelHelpers.classCallCheck(this, PluginCommand);
      _this = _puremvc$SimpleComman.call(this) || this;
      _this.applicationState = null;
      _this.media = null;
      _this.player = null;
      _this.playback = null;
      _this.config = null;
      _this.logger = null;
      _this.bindings = null;
      _this.params = null;
      _this.playerCore = null;
      _this.security = null;
      _this.tracks = null;
      _this.plugin = null;
      _this.proxy = null;
      return _this;
    }
    /** @override */


    babelHelpers.createClass(PluginCommand, [{
      key: "initializeNotifier",
      value: function initializeNotifier(key) {
        babelHelpers.get(babelHelpers.getPrototypeOf(PluginCommand.prototype), "initializeNotifier", this).call(this, key);
        this.player = this.facade.player || this.facade;
        this.applicationState = this.player.appState;
        this.media = this.player.mediaProxy;
        this.config = this.player.configuration;
        this.logger = this.player.logger;
        this.bindings = this.player.bindings;
        this.params = this.player.params;
        this.playerCore = this.player.playerCore;
        this.security = this.player.security;
        this.tracks = this.player.tracks;
        this.playback = this.player.playerCore.getActivePlaybackCore() || this.player.playback;
        this.localization = this.player.localization;
        this.proxy = this.facade.retrieveProxy(ModuleProxy.NAME);
        this.plugin = this.facade;
      } // allow mediachange event to fire before auto playing

    }, {
      key: "doAfter",
      value: function doAfter(func) {
        var _this2 = this;

        return new Promise(function (resolve, reject) {
          var callback = function callback() {
            try {
              func();
              resolve();
            } catch (error) {
              _this2.facade.logger.error(error);

              reject(error);
            }
          };

          return _this2.player.timers.setImmediate(callback);
        });
      }
    }]);
    return PluginCommand;
  }(puremvc.SimpleCommand);

  var CaptioningPlugin = /*#__PURE__*/function (_Plugin) {
    babelHelpers.inherits(CaptioningPlugin, _Plugin);

    /**
     * The CaptioningPlugin class.
     *
     * @param {Module}  app     The parent module of this plugin.
     * @constructor
     * @private
     * @extends {Plugin}
     */
    function CaptioningPlugin() {
      var _this;

      babelHelpers.classCallCheck(this, CaptioningPlugin);
      _this = _Plugin.call(this) || this;
      _this.feature = "captioning";
      _this.moduleName = "captioning";
      _this.mediatorname = "";
      return _this;
    }
    /** @override */


    babelHelpers.createClass(CaptioningPlugin, [{
      key: "createController",
      value: function createController() {
        babelHelpers.get(babelHelpers.getPrototypeOf(CaptioningPlugin.prototype), "createController", this).call(this);
        this.registerMediator(new CaptioningController());
      }
      /** @override */

    }, {
      key: "createModel",
      value: function createModel() {
        this.proxy = new CaptioningProxy(this.config);
        this.registerProxy(this.proxy);
      }
      /** @override */

    }, {
      key: "createView",
      value: function createView() {
        var mediator = new CaptioningMediator();
        this.registerMediator(mediator);
        this.mediatorname = mediator.getMediatorName();
        var viewComponent = mediator.viewComponent;
        this.proxy.registerRenderer(new CaptioningNativeMediator(viewComponent));
        this.proxy.registerRenderer(new CaptioningHTMLMediator(viewComponent));
      }
      /** @override */

    }, {
      key: "destroy",
      value: function destroy() {
        while (this.proxy.rendererMap.length >= 1) {
          var renderer = this.proxy.rendererMap[0];
          var name = renderer.getMediatorName();
          this.removeMediator(name);
          this.proxy.removeRenderer(renderer.getRendererName());
        }

        this.removeMediator(this.mediatorname);
      }
      /** */

    }, {
      key: "listNotificationInterests",
      value: function listNotificationInterests() {
        return [Notifications.LOADED_DATA, Notifications.CAN_PLAY_THROUGH, Notifications.CHANGE_MEDIA, Notifications.STARTED, Notifications.TIME_UPDATE, Notifications.SETTINGS_CHANGE, CaptioningNotifications.TRACK_SELECTED, CaptioningNotifications.TTML_CUE_CHANGE];
      }
      /** */

    }, {
      key: "listNotificationPublications",
      value: function listNotificationPublications() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(CaptioningPlugin.prototype), "listNotificationPublications", this).call(this).concat([CaptioningNotifications.CUE_CHANGE, Notifications.ADD_CONTROL_STATE, Notifications.REMOVE_CONTROL_STATE, Notifications.CHANGE_SETTINGS, CaptioningNotifications.VISIBILITY_CHANGE, CaptioningNotifications.SETTINGS_CHANGE]);
      }
      /**
       * @return {boolean} The hidden flag.
       * @expose
       */

    }, {
      key: "getEnabled",
      value: function getEnabled() {
        return this.proxy.getEnabled();
      }
    }, {
      key: "enabled",
      get: function get() {
        return this.getEnabled();
      }
      /**
       * @param {boolean} value The hidden flag.
       * @expose
       */
      ,
      set: function set(value) {
        return this.setEnabled(value);
      }
      /**
       * @return {boolean} The hidden flag.
       * @expose
       */

    }, {
      key: "setEnabled",
      value: function setEnabled(value) {
        this.sendNotification(CaptioningNotifications.ENABLED, value);
        return value;
      }
    }, {
      key: "getHidden",
      value: function getHidden() {
        return this.proxy.getHidden();
      }
    }, {
      key: "hidden",
      get: function get() {
        return this.getHidden();
      }
      /**
       * @param {boolean} value The hidden flag.
       * @expose
       */
      ,
      set: function set(value) {
        return this.setHidden(value);
      }
      /**
       * @return {boolean} The hidden flag.
       * @expose
       */

    }, {
      key: "setHidden",
      value: function setHidden(value) {
        this.setVisible(!value);
        return value;
      }
    }, {
      key: "getVisible",
      value: function getVisible() {
        return !this.proxy.getHidden();
      }
    }, {
      key: "visible",
      get: function get() {
        return this.getVisible();
      }
      /**
       * @param {boolean} value The hidden flag.
       * @expose
       */
      ,
      set: function set(value) {
        return this.setVisible(value);
      }
      /**
       * Returns an array of caption tracks
       *
       * @return {Array.<CaptionTrack>} The list of text tracks.
       * @expose
       */

    }, {
      key: "setVisible",
      value: function setVisible(value) {
        this.sendNotification(Notifications.CHANGE_SETTINGS, {
          captions: {
            visible: value
          }
        }); // TODO: Remove this in favor of Notifications.SETTINGS_CHANGE

        this.sendNotification(CaptioningNotifications.VISIBILITY_CHANGE, value);
        return value;
      }
    }, {
      key: "getTracks",
      value: function getTracks() {
        return this.proxy.getTracks();
      }
    }, {
      key: "tracks",
      get: function get() {
        return this.getTracks();
      }
      /**
       * Returns the currently selected track.
       *
       * @return {CaptionTrack} The currently selected caption track.
       * @expose
       */

    }, {
      key: "getTrack",
      value: function getTrack() {
        return this.proxy.getTrack();
      }
    }, {
      key: "track",
      get: function get() {
        return this.getTrack();
      }
      /**
       * Selects a caption track
       *
       * @param {CaptionTrack} value The caption track to select
       * @expose
       */
      ,
      set: function set(value) {
        return this.setTrack(value);
      }
      /**
       * Selects a caption track by its index in the getTracks array.
       *
       * @param {number}        index   The index to select
       * @return {CaptionTrack}         The selected caption track.
       * @expose
       */

    }, {
      key: "setTrack",
      value: function setTrack(value) {
        this.proxy.setTrack(value);
        return value;
      }
    }, {
      key: "selectTrackByIndex",
      value: function selectTrackByIndex(index) {
        return this.proxy.selectTrackByIndex(index);
      }
      /**
       * Selects a caption track by it's language property.
       *
       * @param {string}        lang  The language to select
       * @return {CaptionTrack}       The selected caption track.
       * @expose
       */

    }, {
      key: "selectTrackByLanguage",
      value: function selectTrackByLanguage(lang) {
        return this.proxy.selectTrackByLanguage(lang);
      }
      /**
       * Sets a caption Settings Object (styles)
       *
       * @param {Object}  object  The caption settings object.
       * @expose
       */

    }, {
      key: "changeSettings",
      value: function changeSettings(object) {
        this.sendNotification(Notifications.CHANGE_SETTINGS, {
          captions: object
        }); // TODO: Remove this in favor of Notifications.SETTINGS_CHANGE

        this.sendNotification(CaptioningNotifications.SETTINGS_CHANGE, object);
        return object;
      }
      /**
       * Return the captions settings object
       *
       * @return {Object}       The captions settings object.
       * @expose
       */

    }, {
      key: "getSettings",
      value: function getSettings() {
        return this.player.settings.captions;
      }
    }, {
      key: "settings",
      get: function get() {
        return this.getSettings();
      }
      /**
       * Returns the caption renderer.
       *
       * @return {String} The caption renderer.
       * @expose
       */

    }, {
      key: "getRenderer",
      value: function getRenderer() {
        return this.proxy.getRenderer();
      }
    }, {
      key: "renderer",
      get: function get() {
        return this.getRenderer();
      }
      /**
       * Selects a caption renderer by name
       *
       * @param {String} value The caption renderer name
       * @expose
       */
      ,
      set: function set(value) {
        return this.setRenderer(value);
      }
      /**
       * Returns the name of the currently selected caption renderer.
       *
       * @return {String} The currently selected caption renderer.
       * @expose
       */

    }, {
      key: "setRenderer",
      value: function setRenderer(value) {
        return this.proxy.setRenderer(value);
      }
    }, {
      key: "getCurrentRenderer",
      value: function getCurrentRenderer() {
        return this.proxy.getCurrentRenderer();
      }
    }, {
      key: "currentRenderer",
      get: function get() {
        return this.getCurrentRenderer();
      }
    }]);
    return CaptioningPlugin;
  }(Plugin);

  var PlaybackPlugin = /*#__PURE__*/function (_Plugin) {
    babelHelpers.inherits(PlaybackPlugin, _Plugin);

    /**
     * The PluginProxy class.
     *
     * @param {Object} config
     * @constructor
     * @private
     * @extends {Plugin}
     */
    function PlaybackPlugin(config) {
      var _this;

      babelHelpers.classCallCheck(this, PlaybackPlugin);
      _this = _Plugin.call(this, config) || this;
      Object.defineProperties(babelHelpers.assertThisInitialized(_this), {
        instance: {
          get: _this.getInstance,
          enumerable: true,
          configurable: false
        }
      });
      return _this;
    }
    /**
     * Returns HLS PlaybackProxy
     *
     */


    babelHelpers.createClass(PlaybackPlugin, [{
      key: "getPlaybackProxy",
      value: function getPlaybackProxy() {
        return this.proxy.playbackProxy;
      }
      /**
       * Returns instance of HLS player
       *
       */

    }, {
      key: "getInstance",
      value: function getInstance() {
        return this.getPlaybackProxy().player;
      }
    }]);
    return PlaybackPlugin;
  }(Plugin);

  var PlaybackPluginProxy = /*#__PURE__*/function (_PluginProxy) {
    babelHelpers.inherits(PlaybackPluginProxy, _PluginProxy);

    /**
     * @param {Object}  config  The plugin configuration object.
     * @constructor
     * @private
     * @extends {PluginProxy}
     */
    function PlaybackPluginProxy(config) {
      var _this;

      babelHelpers.classCallCheck(this, PlaybackPluginProxy);
      _this = _PluginProxy.call(this, config) || this;
      _this.playbackProxy = null;
      return _this;
    }
    /** @static */


    babelHelpers.createClass(PlaybackPluginProxy, [{
      key: "createPlaybackProxy",
      value: function createPlaybackProxy() {}
    }, {
      key: "renderer",
      value: function renderer() {
        var _this2 = this;

        var renderer = this.playbackProxy.renderer();
        var id = renderer.id;

        var canPlay = function canPlay(media) {
          return (window.MediaSource || window.WebKitMediaSource) != null && renderer.canPlay(media);
        };

        var factory = function factory(player) {
          var resources = fp.transform(_this2.config.resources, fp.map(function (r) {
            return AMP.resourceManager.item(player.evaluatePaths(r.src));
          }), // resolve the path to the resource
          fp.filter(function (r) {
            return typeof r === "function";
          }), // filter out loaded resources
          fp.map(function (r) {
            return r();
          }) // load the resource
          );
          return Promise.all(resources).then(function (deferred) {
            return renderer.factory(player);
          });
        };

        return {
          id: id,
          canPlay: canPlay,
          factory: factory
        };
      }
    }, {
      key: "initialize",
      value: function initialize() {
        this.playbackProxy = this.createPlaybackProxy();

        if (this.playbackProxy != null) {
          var player = this.facade.player.retrieveProxy(PlayerProxy.NAME);
          player.registerRenderer(this.renderer());
        }

        this.sendNotification(Notifications.INITIALIZED);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        if (this.playbackProxy != null) {
          this.playbackProxy.destroy();
        }
      }
    }], [{
      key: "NAME",
      get: function get() {
        return ModuleProxy.NAME;
      }
    }]);
    return PlaybackPluginProxy;
  }(PluginProxy);

  var HLSPlaybackProxy = /*#__PURE__*/function (_PlaybackCoreProxy) {
    babelHelpers.inherits(HLSPlaybackProxy, _PlaybackCoreProxy);

    /**
     * HLSPlaybackProxy constructor.
     *
     * @constructor
     * @private
     * @extends {PlaybackCoreProxy}
     */
    function HLSPlaybackProxy(config, plugin) {
      var _this;

      babelHelpers.classCallCheck(this, HLSPlaybackProxy);
      _this = _PlaybackCoreProxy.call(this, config, plugin) || this;
      _this.decryptionTypes = [KeySystem.WIDEVINE];
      _this.temporalTypes = ["vod", "live", "dvr"];
      _this.playbackCoreName = "hls";
      _this.player = null;
      _this.hlsConfig = null;
      _this.fragErrorTime = 0;
      _this.timedMedatadata = null;
      _this.currentMedatadata = null;
      _this.id3Track = null;
      _this.manifestParsed = false;
      _this.details = null;
      _this.quality = -1;
      _this.qualityMode = "auto";
      _this.userSwitched = false;
      return _this;
    }
    /**
     *
     */


    babelHelpers.createClass(HLSPlaybackProxy, [{
      key: "canPlayMedium",
      value: function canPlayMedium(medium) {
        return babelHelpers.get(babelHelpers.getPrototypeOf(HLSPlaybackProxy.prototype), "canPlayMedium", this).call(this, medium) || medium === "audio";
      }
    }, {
      key: "getConfig",
      value: function getConfig() {
        var _this2 = this;

        var config = Utils.merge({}, this.config.settings, this.config.data);
        var withCredentials = this.facade.configuration.getValueOf("withCredentials", this.config);

        if (withCredentials === true) {
          var xhrSetup = typeof config.xhrSetup === "function" ? config.xhrSetup : function () {};

          config.xhrSetup = function (xhr, url) {
            xhr.withCredentials = true;
            xhrSetup(xhr, url);
          };
        }

        config.debug = this.plugin.proxy.getDebug();
        var preload = this.facade.getPreload();

        if (preload !== Preload.NONE && config.autoStartLoad == null) {
          config.autoStartLoad = true;
        }

        if (preload === Preload.AUTO && config.startFragPrefetch == null) {
          config.startFragPrefetch = true;
        }

        var cmcd = this.facade.configuration.getValueOf("cmcd", this.config);
        if (cmcd != null && cmcd.enabled !== false) config.cmcd = cmcd;
        var keys = this.facade.getMedia().keys;
        fp.find(Utils.getKeySystem(), fp.filter(function (key) {
          return keys && !!keys[key];
        }), fp.filter(function (key) {
          return _this2.decryptionTypes.indexOf(key) !== -1;
        }), fp.map(function (key) {
          config.emeEnabled = true;
          config.widevineLicenseUrl = keys[key].serverURL;
        }));
        var customLoaders = this.getActiveLoaders();
        fp.find(customLoaders, fp.filter(function (loader) {
          return !!loader['type'];
        }), fp.map(function (loader) {
          return config[loader.type] = loader['loader'];
        }));
        return config;
      }
      /** @override */

    }, {
      key: "init",
      value: function init() {
        var _this3 = this;

        this.destroy();
        this.manifestParsed = false;
        this.userSwitched = false;
        this.quality = -1;
        var config = this.getConfig();
        var player = new Hls(config);
        player.attachMedia(this.getMediaElement());
        player.on(Hls.Events.MANIFEST_PARSED, this.onManifestParsed.bind(this));
        player.on(Hls.Events.ERROR, this.onError.bind(this));
        player.on(Hls.Events.LEVEL_LOADED, this.onLevelLoaded.bind(this));
        player.on(Hls.Events.LEVEL_SWITCHING, this.onLevelSwitching.bind(this));
        player.on(Hls.Events.LEVEL_SWITCHED, this.onLevelSwitched.bind(this));
        player.on(Hls.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitch.bind(this));
        player.on(Hls.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitch.bind(this));
        player.on(Hls.Events.FRAG_LOADING, this.onFragmentLoadStart.bind(this));
        player.on(Hls.Events.FRAG_LOADED, this.onFragmentLoaded.bind(this));
        player.on(Hls.Events.FRAG_CHANGED, this.onFragmentChanged.bind(this));
        fp.each(Hls.Events, function (value) {
          player.on(value, function (event, data) {
            _this3.plugin.sendNotification(Notifications.DISPATCH_EVENT, Event.create(event, data));
          });
        });

        try {
          fp.each(this.config.quality, function (value, key) {
            return player[key] = value;
          });
        } catch (error) {}

        this.player = player;
        this.details = null;
        babelHelpers.get(babelHelpers.getPrototypeOf(HLSPlaybackProxy.prototype), "init", this).call(this);
      }
    }, {
      key: "unload",
      value: function unload() {
        this.destroy();
      }
    }, {
      key: "applySrc",
      value: function applySrc() {
        this.currentMedatadata = null;
        this.player.loadSource(this.getSrc());
        this.load();
      }
      /** */

    }, {
      key: "onManifestParsed",
      value: function onManifestParsed(event, data) {
        this.manifestParsed = true;
        this.sendNotification(Notifications.QUALITY_LEVELS_LOADED, data.levels); //start bitrate -1 auto 0 low 1 high

        this.player.loadLevel = -1;
      }
      /** */

    }, {
      key: "onLevelLoaded",
      value: function onLevelLoaded(event, data) {
        this.player.levels[data.level].level = data.level;
        this.sendNotification(Notifications.QUALITY_CHANGE, this.player.levels[data.level]);
        this.details = data.details;
        var duration = this.details.totalduration;

        if (duration != null) {
          this.data.duration = duration;
          this.sendNotification(Notifications.CHANGE_DURATION, this.data.duration);
        }

        if (this.details.live === true && this.facade.mediaProxy.getTemporalType() !== "dvr") {
          this.facade.mediaProxy.setTemporalType("live");
        }
      }
      /** */

    }, {
      key: "onLevelSwitching",
      value: function onLevelSwitching(event, data) {
        if (this.getQualityMode() === QualityMode.MANUAL) {
          this.userSwitched = true;
        }

        this.sendNotification(Notifications.QUALITY_CHANGING, this.player.levels[data.level]);
      }
    }, {
      key: "onLevelSwitched",
      value: function onLevelSwitched(event, data) {
        this.sendNotification(Notifications.QUALITY_SWITCHED, this.player.levels[data.level]);
      }
    }, {
      key: "onAudioTrackSwitch",
      value: function onAudioTrackSwitch(event, data) {
        var hasswitched = event === Hls.Events.AUDIO_TRACK_SWITCHED;
        this.sendNotification(Notifications.AUDIO_TRACK_SWITCH, {
          switched: hasswitched
        });
      }
      /** */

    }, {
      key: "onseeking",
      value: function onseeking(event) {
        if (this.getQualityMode() === QualityMode.MANUAL && this.userSwitched) {
          return;
        }

        babelHelpers.get(babelHelpers.getPrototypeOf(HLSPlaybackProxy.prototype), "onseeking", this).call(this, event);
      }
      /** */

    }, {
      key: "onseeked",
      value: function onseeked(event) {
        if (this.getQualityMode() === QualityMode.MANUAL && this.userSwitched) {
          this.userSwitched = false;
          return;
        }

        babelHelpers.get(babelHelpers.getPrototypeOf(HLSPlaybackProxy.prototype), "onseeked", this).call(this, event);
      }
    }, {
      key: "onFragmentLoadStart",
      value: function onFragmentLoadStart(event, data) {
        try {
          var bitrate = this.player.levels[data.frag.level].bitrate;
          this.sendNotification(Notifications.FRAGMENT_LOAD_START, bitrate);
        } catch (error) {
          return;
        }
      }
    }, {
      key: "onFragmentLoaded",
      value: function onFragmentLoaded(event, data) {
        try {
          var bitrate = this.player.levels[data.frag.level].bitrate;
          this.sendNotification(Notifications.FRAGMENT_LOADED, bitrate);
        } catch (error) {
          return;
        }
      }
    }, {
      key: "onFragmentChanged",
      value: function onFragmentChanged(event, data) {
        this.fragment = data.frag;
      }
    }, {
      key: "ontimeupdate",
      value: function ontimeupdate(event) {
        // TODO: This should not be here.
        if (this.facade.ads.inProgress === true) {
          return;
        }

        this.data.currentTime = this.getCurrentTime();
        this.sendNotification(Notifications.TIME_CHANGE, {
          currentTime: this.data.currentTime
        });
      }
      /** */

    }, {
      key: "ondurationchange",
      value: function ondurationchange(event) {
        var duration = this.getDetails().totalduration;

        if (duration === this.data.duration || duration === 0 || isNaN(duration)) {
          return;
        }

        this.data.duration = duration;
        this.sendNotification(Notifications.CHANGE_DURATION, duration);
      }
    }, {
      key: "oncanplaythrough",
      value: function oncanplaythrough(event) {
        this.createTracks();
        this.sendNotification(Notifications.CAN_PLAY_THROUGH);
        this.sendNotification(Notifications.PROGRESS, this.getDuration());

        if (this.qualityMode === QualityMode.MANUAL && this.player.currentLevel !== this.quality) {
          this.setQuality(this.quality);
        }
      }
    }, {
      key: "getStartTime",
      value: function getStartTime() {
        return this.getMediaElement().duration - this.getDuration();
      }
    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
        return this.getMediaElement().currentTime - this.getStartTime();
      }
    }, {
      key: "getDetails",
      value: function getDetails() {
        return this.details || {};
      }
    }, {
      key: "getFragmentDuration",
      value: function getFragmentDuration() {
        return this.getDetails().targetduration || 0;
      }
      /** @override */

    }, {
      key: "getCurrentTimeUTC",
      value: function getCurrentTimeUTC() {
        var offset, utc;

        try {
          offset = (this.getMediaElement().currentTime - this.fragment.start) * 1000;
          utc = this.fragment.programDateTime || this.fragment.sn;
        } catch (error) {
          utc = 0;
          offset = 0;
        }

        return Math.round(offset + utc);
      } // TODO: These are duplicates of DVRPlaybackProxy funcitons -- start

      /** */

    }, {
      key: "goLive",
      value: function goLive() {
        this.setCurrentTime(this.getDuration() - this.getFragmentDuration());
      }
      /** */

    }, {
      key: "getLiveTime",
      value: function getLiveTime() {
        return this.getMediaElement().duration - this.getFragmentDuration();
      }
      /** */

    }, {
      key: "isLive",
      value: function isLive() {
        return Math.round(this.getStartTime() + this.getCurrentTime()) >= Math.round(this.getLiveTime());
      }
      /** @override */

    }, {
      key: "seek",
      value: function seek(value) {
        var _this4 = this;

        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getStartTime();

        var seek = function seek(time) {
          return new Promise(function (resolve, reject) {
            try {
              var video = _this4.getMediaElement(); // HACK HLS.js seeked event is not being fired when using streams with missing keyframes


              var interval = _this4.facade.timers.setInterval(function () {
                if (Math.round(video.currentTime) === Math.round(time)) {
                  _this4.facade.timers.clearInterval(interval);

                  video.dispatchEvent(new CustomEvent("seeked"));
                }
              }, 100);
            } catch (error) {
              reject(error);
            }
          });
        };

        return Promise.race([babelHelpers.get(babelHelpers.getPrototypeOf(HLSPlaybackProxy.prototype), "seek", this).call(this, value + offset), seek(value + offset)]).then(function (time) {
          if (_this4.mediaProxy.getTemporalType() === "dvr") {
            _this4.sendNotification(Notifications.IS_LIVE, _this4.isLive());
          }
        });
      } // TODO: These are duplicates of DVRPlaybackProxy funcitons -- end

      /** override */

    }, {
      key: "onplaying",
      value: function onplaying(event) {
        babelHelpers.get(babelHelpers.getPrototypeOf(HLSPlaybackProxy.prototype), "onplaying", this).call(this);
        this.retried = false;
      }
      /** */

    }, {
      key: "onError",
      value: function onError(event, data) {
        this.userSwitched = false;
        this.plugin.sendNotification(Notifications.DISPATCH_EVENT, Event.create(Events.ERROR, {
          event: event,
          data: data
        }));

        if (this.config.ignoreErrors === true) {
          return;
        }

        if (this.config.retryOnError === false || this.retried === true) {
          this.retried = false;
          this.error(data);
          return;
        } //HLS Bug for handling Frag loop error


        if (data.fatal && data.type === Hls.ErrorTypes.MEDIA_ERROR && data.details === Hls.ErrorDetails.FRAG_LOOP_LOADING_ERROR) {
          data.fatal = false;
        } //Error Handling/Recovery


        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              this.retried = true;

              if (this.manifestParsed) {
                this.player.startLoad();
              } else {
                this.player.loadSource(this.getSrc());
              }

              this.facade.logger.error("[AMP HLS] Playback Error trying to recover:", event);
              break;

            case Hls.ErrorTypes.MEDIA_ERROR:
              this.retried = true;
              this.player.recoverMediaError();
              this.facade.logger.error("[AMP HLS] Playback Error trying to recover:", event);
              break;

            default:
              this.facade.logger.error("[AMP HLS] Playback Error:", event);
              this.error(data);
          }
        } else {
          switch (data.details) {
            //HACK Frag Loop error handling
            case Hls.ErrorDetails.FRAG_LOOP_LOADING_ERROR:
              if (this.fragErrorTime === this.getMediaElement().currentTime) {
                this.getMediaElement().currentTime++;
                this.facade.logger.error("[AMP HLS] Frag Loop Load Error, Seeking to :", this.getMediaElement().currentTime);
              } else {
                this.fragErrorTime = this.getMediaElement().currentTime;
              }

              break;

            case Hls.ErrorDetails.BUFFER_STALLED_ERROR:
            case Hls.ErrorDetails.BUFFER_NUDGE_ON_STALL:
              this.sendNotification(Notifications.STALLED);
              break;
          }
        }
      }
    }, {
      key: "error",
      value: function error(data) {
        switch (data.type) {
          case Hls.ErrorTypes.NETWORK_ERROR:
            data.code = MediaError.MEDIA_ERR_NETWORK;
            break;

          case Hls.ErrorTypes.MEDIA_ERROR:
            data.code = MediaError.MEDIA_ERR_DECODE;
            break;

          default:
            data.toString = function () {
              return data.message;
            };

        }

        data.message = "".concat(data.type, ": ").concat(data.details);
        this.sendNotification(Notifications.ERROR, data);
      }
      /** @override */

    }, {
      key: "createTracks",
      value: function createTracks() {
        var _this5 = this;

        var audio = this.player.audioTracks;
        var current = this.player.audioTrack;
        var tracks = this.facade.tracks.getAudioTracks();
        var count = audio.length;

        function changeEnabled(track, enabled) {
          var tracks = this.facade.tracks.getAudioTracks();

          if (enabled !== true) {
            return;
          }

          tracks.some(function (item) {
            item.data.enabled = item.id == track.id;
          });
          this.player.audioTrack = track.id;
        }
        audio.forEach(function (item, index) {
          if (Utils.fieldIsUnique(tracks, 'id', item.id) === false) return;
          var track = new Track({
            kind: item.type,
            label: item.name || item.id,
            language: item.lang,
            id: item.id,
            enabled: item.id === current,
            data: item
          });
          track.changeEnabled = changeEnabled.bind(_this5, item);
          tracks.add(track, index + 1 === count);
        });
      }
    }, {
      key: "onaddtrack",
      value: function onaddtrack(event) {
        babelHelpers.get(babelHelpers.getPrototypeOf(HLSPlaybackProxy.prototype), "onaddtrack", this).call(this, event);
        var track = event.track; // ignores text tracks to be shown in <video> when captioning is disabled
        // hack HLS.js inner core ignores track mode `hidden` in favor of `disabled`

        if (this.facade.captioning == null && regex.test(track.kind)) {
          this.facade.timers.setTimeout(function () {
            return track.mode = TrackMode.DISABLED;
          }, 10);
        }
      }
      /** @override */

    }, {
      key: "setQuality",
      value: function setQuality(value) {
        var mode = value === -1 ? QualityMode.AUTO : QualityMode.MANUAL;
        this.setQualityMode(mode); //resets max bitrate ceiling 

        if (mode === QualityMode.MANUAL) this.setMaxQualityLevel(-1);else this.setCapLevelToPlayerSize();

        if (value === this.player.currentLevel && value > -1) {
          // If the level is the current level, even if auto
          // switching is on, hls.js does not send these events
          // No need to manually switch level when using auto (-1)
          this.onLevelSwitching("hlsLevelSwitching", this.player.levels[value]);
          this.onLevelSwitched("hlsLevelSwitched", {
            level: value
          });
          return;
        }

        if (this.player != null) {
          this.player.currentLevel = this.quality = value;
        }

        return this.quality;
      }
      /** @override */

    }, {
      key: "getQuality",
      value: function getQuality() {
        var player = this.player;
        var level = player != null ? player.currentLevel : null;

        if (level === -1) {
          level = player != null ? player.nextLoadLevel : null;
        }

        return level;
      }
      /** @override */

    }, {
      key: "getQualityLevels",
      value: function getQualityLevels() {
        var player = this.player;
        return player != null ? player.levels : babelHelpers.get(babelHelpers.getPrototypeOf(HLSPlaybackProxy.prototype), "getQualityLevels", this).call(this);
      }
      /** @override */

    }, {
      key: "getQualityMode",
      value: function getQualityMode() {
        return this.qualityMode;
      }
      /** @override */

    }, {
      key: "setQualityMode",
      value: function setQualityMode(value) {
        this.qualityMode = value;
        return value;
      }
      /** @override */

    }, {
      key: "setMaxQualityLevel",
      value: function setMaxQualityLevel(value) {
        if (this.player == null) return;
        var levels = this.getQualityLevels();
        var level = levels.filter(function (level) {
          return level.bitrate <= value;
        }).length - 1;
        this.setCapLevelToPlayerSize(-1 >= level);
        this.player.autoLevelCapping = level;
        return level;
      }
      /** @override */

    }, {
      key: "getMaxQualityLevel",
      value: function getMaxQualityLevel() {
        if (this.player == null) return;
        return this.player.autoLevelCapping;
      }
    }, {
      key: "setCapLevelToPlayerSize",
      value: function setCapLevelToPlayerSize() {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var setting = Utils.get(this.config, ['data', 'capLevelToPlayerSize']);
        var capLevelToPlayerSize = QualityMode.AUTO === this.qualityMode && setting !== false && value;
        this.player.capLevelToPlayerSize = capLevelToPlayerSize;
        return this.player.capLevelToPlayerSize;
      }
      /** @override */

    }, {
      key: "destroy",
      value: function destroy() {
        if (this.player == null) {
          return;
        }

        try {
          babelHelpers.get(babelHelpers.getPrototypeOf(HLSPlaybackProxy.prototype), "destroy", this).call(this);
          this.player.destroy();
          this.player = null;
        } catch (error) {}
      }
      /** 
       * @override 
       * @param {Hls.DefaultConfig.loader} loader - callback function
       * @param {string} name - Playback core name of the loader 
       * @param {string} type - HLS Loader types i.e fLoader, pLoader and loader 
       */

    }, {
      key: "registerCustomLoader",
      value: function registerCustomLoader(loader) {
        var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.playbackCoreName;
        var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'loader';
        if (typeof loader !== 'function') return;
        return this.customLoaders.push({
          name: name,
          loader: loader,
          type: type
        });
      }
    }]);
    return HLSPlaybackProxy;
  }(PlaybackCoreProxy);

  var HLSProxy = /*#__PURE__*/function (_PlaybackPluginProxy) {
    babelHelpers.inherits(HLSProxy, _PlaybackPluginProxy);

    /**
     * The HLSProxy class.
     *
     * @param {Object}  config  The plugin configuration object.
     * @constructor
     * @private
     * @extends {PluginProxy}
     */
    function HLSProxy(config) {
      var _this;

      babelHelpers.classCallCheck(this, HLSProxy);
      _this = _PlaybackPluginProxy.call(this, config) || this;
      _this.defaults = {
        types: ["application/x-mpegURL"],
        data: {
          enableWorker: true,
          enableCEA708Captions: true
        },
        settings: {
          enableSoftwareAES: true,
          capLevelToPlayerSize: true,
          lowLatencyMode: false
        },
        buffer: null,
        quality: null,
        withCredentials: null,
        retryOnError: true,
        ignoreErrors: false
      };
      return _this;
    }
    /** @static */


    babelHelpers.createClass(HLSProxy, [{
      key: "createPlaybackProxy",
      value: function createPlaybackProxy() {
        return new HLSPlaybackProxy(this.getData(), this.facade);
      }
    }], [{
      key: "NAME",
      get: function get() {
        return ModuleProxy.NAME;
      }
    }]);
    return HLSProxy;
  }(PlaybackPluginProxy);

  var HLSAdBreakStartCommand = /*#__PURE__*/function (_PluginCommand) {
    babelHelpers.inherits(HLSAdBreakStartCommand, _PluginCommand);

    /**
     * The HLSAdBreakStartCommand class.
     *
     * @constructor
     * @private
     * @extends {puremvc.SimpleCommand}
     */
    function HLSAdBreakStartCommand() {
      babelHelpers.classCallCheck(this, HLSAdBreakStartCommand);
      return _PluginCommand.call(this) || this;
    }
    /**
     * Executes the command.
     *
     * @param {puremvc.Notification} notification
     *    The notification.
     *
     * @override
     */


    babelHelpers.createClass(HLSAdBreakStartCommand, [{
      key: "execute",
      value: function execute(notification) {
        var rate, ref;

        if (((ref = notification.getBody()) != null ? ref.partner : void 0) === "freewheel") {
          rate = this.facade.player.getPlaybackRate();
          this.proxy.destroy();
          this.facade.player.setPlaybackRate(rate);
        }
      }
    }]);
    return HLSAdBreakStartCommand;
  }(PluginCommand);

  var HLSPlugin = /*#__PURE__*/function (_PlaybackPlugin) {
    babelHelpers.inherits(HLSPlugin, _PlaybackPlugin);

    /**
     * The HLSPlugin class.
     *
     * @param {Module}  app     The parent module of this plugin.
     * @constructor
     * @private
     * @extends {Plugin}
     */
    function HLSPlugin() {
      var _this;

      babelHelpers.classCallCheck(this, HLSPlugin);
      _this = _PlaybackPlugin.call(this) || this;
      _this.moduleName = "hls";
      return _this;
    }
    /** @override */


    babelHelpers.createClass(HLSPlugin, [{
      key: "createModel",
      value: function createModel() {
        this.proxy = new HLSProxy(this.config);
        this.registerProxy(this.proxy);
      }
    }, {
      key: "createController",
      value: function createController() {
        this.registerCommand(AdNotifications.BREAK_START, HLSAdBreakStartCommand);
        babelHelpers.get(babelHelpers.getPrototypeOf(HLSPlugin.prototype), "createController", this).call(this);
      }
      /** */

    }, {
      key: "logEvent",
      value: function logEvent(event) {
        if (/^hls/.test(event.type) === true) {
          return;
        }

        babelHelpers.get(babelHelpers.getPrototypeOf(HLSPlugin.prototype), "logEvent", this).call(this, event);
      }
      /** */

    }, {
      key: "listNotificationInterests",
      value: function listNotificationInterests() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(HLSPlugin.prototype), "listNotificationInterests", this).call(this).concat([AdNotifications.BREAK_START]);
      }
      /** */

    }, {
      key: "listNotificationPublications",
      value: function listNotificationPublications() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(HLSPlugin.prototype), "listNotificationPublications", this).call(this).concat([Notifications.TIMED_METADATA, Notifications.QUALITY_LEVELS_LOADED, Notifications.QUALITY_CHANGE, Notifications.QUALITY_CHANGING, Notifications.FRAGMENT_LOAD_START, Notifications.FRAGMENT_LOADED]);
      }
    }]);
    return HLSPlugin;
  }(PlaybackPlugin);

  var DataCue = /*#__PURE__*/function (_Cue) {
    babelHelpers.inherits(DataCue, _Cue);

    function DataCue(startTime, endTime, data) {
      babelHelpers.classCallCheck(this, DataCue);
      return _Cue.call(this, startTime, endTime, data) || this;
    }

    babelHelpers.createClass(DataCue, [{
      key: "type",
      get: function get() {
        return 'metadata';
      }
    }, {
      key: "data",
      set: function set(value) {
        return this.value = value;
      }
    }]);
    return DataCue;
  }(Cue);

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { babelHelpers.defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  var DASHPlaybackProxy = /*#__PURE__*/function (_PlaybackCoreProxy) {
    babelHelpers.inherits(DASHPlaybackProxy, _PlaybackCoreProxy);

    /**
     * DASHPlaybackProxy constructor.
     *
     * @constructor
     * @private
     * @extends {PlaybackCoreProxy}
     */
    function DASHPlaybackProxy(data, plugin) {
      var _this;

      babelHelpers.classCallCheck(this, DASHPlaybackProxy);
      _this = _PlaybackCoreProxy.call(this, data, plugin) || this;
      _this.buffer = data.buffer;
      _this.decryptionTypes = [KeySystem.WIDEVINE, KeySystem.PLAYREADY, KeySystem.CLEARKEY];
      _this.temporalTypes = ["vod", "live", "dvr"];
      DASHPlaybackProxy.SCTE = _this.config.schemeIdUri;
      DASHPlaybackProxy.FRAGMENT_DURATION = _this.config.fragmentDuration;
      _this.playbackCoreName = "dash";
      _this.context = null;
      _this.player = null;
      _this.buffer = null;
      return _this;
    }
    /** @override */


    babelHelpers.createClass(DASHPlaybackProxy, [{
      key: "resumecomplete",
      value: function resumecomplete() {
        try {
          // IE throws error when accessing index 0 when length is 0
          var mediaElement = this.facade.getMediaElement();
          var tracks = mediaElement != null ? mediaElement.textTracks : void 0;

          if ((tracks != null ? tracks.length : void 0) !== 0) {
            var track = tracks[0];

            if (track != null) {
              track.mode = "hidden";
            }
          }
        } catch (error) {}

        babelHelpers.get(babelHelpers.getPrototypeOf(DASHPlaybackProxy.prototype), "resumecomplete", this).call(this);
      }
    }, {
      key: "onerror",
      value: function onerror() {}
      /** @override */

    }, {
      key: "ontimeupdate",
      value: function ontimeupdate(event) {
        babelHelpers.get(babelHelpers.getPrototypeOf(DASHPlaybackProxy.prototype), "ontimeupdate", this).call(this, {
          target: {
            currentTime: this.getCurrentTime()
          }
        });
      }
      /** @override */

    }, {
      key: "onseeked",
      value: function onseeked(event) {
        babelHelpers.get(babelHelpers.getPrototypeOf(DASHPlaybackProxy.prototype), "onseeked", this).call(this, {
          target: {
            currentTime: this.getCurrentTime()
          }
        });
      }
      /** @override */

    }, {
      key: "onseeking",
      value: function onseeking(event) {
        babelHelpers.get(babelHelpers.getPrototypeOf(DASHPlaybackProxy.prototype), "onseeking", this).call(this, {
          target: {
            currentTime: this.getCurrentTime()
          }
        });
      }
      /** @override */

    }, {
      key: "ondurationchange",
      value: function ondurationchange(event) {
        babelHelpers.get(babelHelpers.getPrototypeOf(DASHPlaybackProxy.prototype), "ondurationchange", this).call(this, {
          target: {
            duration: this.getDuration()
          }
        });
      }
      /** @override */

    }, {
      key: "onloadedmetadata",
      value: function onloadedmetadata(event) {
        babelHelpers.get(babelHelpers.getPrototypeOf(DASHPlaybackProxy.prototype), "onloadedmetadata", this).call(this, event);
        this.sendNotification(Notifications.CHANGE_DURATION, this.getDuration());
      }
      /** @override */

    }, {
      key: "oncanplaythrough",
      value: function oncanplaythrough(event) {
        babelHelpers.get(babelHelpers.getPrototypeOf(DASHPlaybackProxy.prototype), "oncanplaythrough", this).call(this, event);
        this.sendNotification(Notifications.CHANGE_DURATION, this.getDuration());
      }
      /**
       *
       */

    }, {
      key: "canPlayMedium",
      value: function canPlayMedium(medium) {
        return babelHelpers.get(babelHelpers.getPrototypeOf(DASHPlaybackProxy.prototype), "canPlayMedium", this).call(this, medium) || medium === "audio";
      }
    }, {
      key: "getMedium",
      value: function getMedium() {
        return Utils.get(this.facade, ["media", "medium"]) || "video";
      }
      /** @override */

    }, {
      key: "createTracks",
      value: function createTracks() {
        var _this2 = this;

        if (this.player && this.player.getActiveStream() == null) return;
        var audio = this.player.getTracksFor("audio");
        var current = this.player.getCurrentTrackFor("audio");
        var tracks = this.facade.tracks.getAudioTracks();
        var count = audio.length;
        fp.each(audio, function (item, index) {
          var id = item.id || index;

          if (id != null && Utils.fieldIsUnique(tracks, 'id', id) === false) {
            return;
          }

          var track = new Track({
            kind: item.roles.join(" "),
            label: item.id,
            language: item.lang,
            id: id,
            enabled: item === current,
            data: item
          });
          track.changeEnabled = _this2.changeEnabled.bind(_this2, item, track);
          tracks.add(track, index + 1 === count);
        });
      }
    }, {
      key: "changeEnabled",
      value: function changeEnabled(audio, track, enabled) {
        var tracks = this.facade.tracks.getAudioTracks();
        fp.each(tracks.list, function (item) {
          return item.data.enabled = item === track;
        });

        if (enabled !== true) {
          return;
        }

        this.player.setCurrentTrack(audio);
      }
    }, {
      key: "logLevel",
      value: function logLevel() {
        var debug = this.plugin.proxy.getDebug();
        var type = babelHelpers["typeof"](debug);

        switch (type) {
          case "number":
            return debug;

          case "boolean":
            return debug === true ? dashjs.Debug.LOG_LEVEL_DEBUG : dashjs.Debug.LOG_LEVEL_NONE;

          default:
            return dashjs.Debug.LOG_LEVEL_NONE;
        }
      }
      /** @override */

    }, {
      key: "init",
      value: function init() {
        var _this3 = this;

        try {
          var config = this.config;

          if (this.player == null) {
            var player = dashjs.MediaPlayer().create();
            player.on(dashjs.MediaPlayer.events.ERROR, this.onError.bind(this));
            player.on(dashjs.MediaPlayer.events.FRAGMENT_LOADING_STARTED, this.onFragmentLoadStart.bind(this));
            player.on(dashjs.MediaPlayer.events.FRAGMENT_LOADING_COMPLETED, this.onFragmentLoaded.bind(this));
            player.on(dashjs.MediaPlayer.events.QUALITY_CHANGE_REQUESTED, this.onQualityChangeRequested.bind(this));
            player.on(dashjs.MediaPlayer.events.QUALITY_CHANGE_RENDERED, this.onQualityChangeRendered.bind(this));
            player.on(dashjs.MediaPlayer.events.MANIFEST_LOADED, this.onManifestLoaded.bind(this));
            player.on(dashjs.Protection.events.PROTECTION_CREATED, this.onProtectionCreated.bind(this));
            player.on(dashjs.MediaPlayer.events.BUFFER_EMPTY, this.onBufferEmpty.bind(this));
            player.on(DASHPlaybackProxy.SCTE, this.onEmsg.bind(this));
            player.on(dashjs.MediaPlayer.events.TTML_TO_PARSE, this.onTmlToParse.bind(this));
            player.on(dashjs.MediaPlayer.events.TEXT_TRACKS_ADDED, this.onTracksAdded.bind(this));
            player.initialize(this.getMediaElement(), null, false);
            var settings = Utils.merge({
              debug: {
                logLevel: this.logLevel()
              },
              streaming: {
                fastSwitchEnabled: true
              }
            }, config.data, config.settings);

            if (config.lowLatencyEnabled != null) {
              Utils.set(settings, ["streaming", "lowLatencyEnabled"], config.lowLatencyEnabled);
            }

            if (config.liveDelay != null) {
              Utils.set(settings, ["streaming", "liveDelay"], config.liveDelay);
            }

            if (config.catchUpPlaybackRate != null) {
              Utils.set(settings, ["streaming", "liveCatchUpPlaybackRate"], config.catchUpPlaybackRate);
            }

            if (config.initialBitrate != null) {
              Utils.set(settings, ["streaming", "abr", "initialBitrate", this.getMedium()], config.initialBitrate);
            }

            var cmcd = this.facade.configuration.getValueOf("cmcd", config);

            if (cmcd != null && cmcd.enabled !== false) {
              Utils.set(settings, ["streaming", "cmcd"], this.createCmcdConfig(cmcd));
            }

            player.updateSettings(settings);
            this.player = player;
          }

          var withCredentials = this.facade.configuration.getValueOf("withCredentials", config);

          if (withCredentials != null) {
            if (typeof withCredentials === "boolean") {
              withCredentials = {
                "default": withCredentials
              };
            }

            fp.each(withCredentials, function (value, key) {
              return _this3.player.setXHRWithCredentialsForType(key, value);
            });
          }

          babelHelpers.get(babelHelpers.getPrototypeOf(DASHPlaybackProxy.prototype), "init", this).call(this);
        } catch (error) {
          this.facade.logger.error(error);
        }
      }
    }, {
      key: "isLive",
      get: function get() {
        return this.getCurrentTime() >= this.getDuration() - DASHPlaybackProxy.FRAGMENT_DURATION;
      }
    }, {
      key: "notifyDVRLiveStatus",
      value: function notifyDVRLiveStatus() {
        if (this.mediaProxy.getTemporalType() === "dvr") {
          this.sendNotification(Notifications.IS_LIVE, this.isLive);
        }
      }
    }, {
      key: "onplay",
      value: function onplay() {
        babelHelpers.get(babelHelpers.getPrototypeOf(DASHPlaybackProxy.prototype), "onplay", this).call(this);
        this.notifyDVRLiveStatus();
      }
      /** @override */

    }, {
      key: "applySrc",
      value: function applySrc() {
        var keys = this.facade.getMedia().keys;

        if (keys != null) {
          this.player.setProtectionData(keys);
        }

        this.player.attachSource(this.getSrc());
        this.load();
      }
      /** @override */

    }, {
      key: "preload",
      value: function preload() {// player.preload is no longer available since dashjs 4.x 
        // preload="auto" might still be supported but introduces several buffer 
        // append errors on SourceBufferSink when de-attaching <video> for ads

        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.facade.getPreload();
      }
    }, {
      key: "goLive",
      value: function goLive() {
        this.setCurrentTime(this.getDuration());
      }
      /** @override */

    }, {
      key: "seek",
      value: function seek(value) {
        var _this4 = this;

        return Promise.resolve(this.player.seek(value)).then(function (time) {
          _this4.notifyDVRLiveStatus();
        });
      }
      /** @override */

    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
        if (!this.player) return 0;
        return this.player.time();
      }
      /** @override */

    }, {
      key: "getDuration",
      value: function getDuration() {
        if (!this.player) return 0;
        return this.player.duration();
      }
      /** @override */

    }, {
      key: "getCurrentTimeUTC",
      value: function getCurrentTimeUTC() {
        if (!this.player) return 0;
        return Math.round(this.player.timeAsUTC() * 1000);
      }
      /** */

    }, {
      key: "getStats",
      value: function getStats() {
        return {};
      }
      /**
       * Transforms to dashjs like cmcd config 
       * @param config cmcd config 
       * */

    }, {
      key: "createCmcdConfig",
      value: function createCmcdConfig() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var props = {
          deviceId: "did",
          contentId: "cid",
          sessionId: "sid",
          version: "v"
        };
        return Object.keys(config).filter(function (key) {
          return !!props[key];
        }).reduce(function (acc, key) {
          acc[props[key]] = config[key];
          return acc;
        }, _objectSpread({
          enabled: true
        }, config.useHeaders === true && {
          mode: "header"
        }));
      }
      /** */

    }, {
      key: "onFragmentLoadStart",
      value: function onFragmentLoadStart(event) {
        var bitrate = event.request.mediaInfo.bitrateList[event.request.quality].bandwidth;
        this.sendNotification(Notifications.FRAGMENT_LOAD_START, bitrate);
      }
      /** */

    }, {
      key: "onFragmentLoaded",
      value: function onFragmentLoaded(event) {
        var bitrate = event.request.mediaInfo.bitrateList[event.request.quality].bandwidth;
        this.sendNotification(Notifications.FRAGMENT_LOADED, bitrate);
      }
      /** */

    }, {
      key: "onQualityChangeRequested",
      value: function onQualityChangeRequested(event) {
        this.sendNotification(Notifications.QUALITY_CHANGING, this.getQualityLevels()[event.newQuality]); // The QUALITY_CHANGING event is fired as soon as the user manually selects the bitrate. This
        // creates a UI bug where the buffering animation plays until the QUALITY_CHANGE_RENDERED
        // event fires. This can take a long time as the player needs to drain the remaining
        // buffer before performing the switch.

        this.sendNotification(Notifications.QUALITY_SWITCHED, this.getQualityLevels()[event.newQuality]);
      }
      /** */

    }, {
      key: "onQualityChangeRendered",
      value: function onQualityChangeRendered(event) {
        this.sendNotification(Notifications.QUALITY_SWITCHED, this.getQualityLevels()[event.newQuality]);
      }
    }, {
      key: "onManifestLoaded",
      value: function onManifestLoaded(event) {
        this.plugin.sendNotification(Notifications.DISPATCH_EVENT, Event.create(dashjs.MediaPlayer.events.MANIFEST_LOADED, event.data));
      }
    }, {
      key: "onProtectionCreated",
      value: function onProtectionCreated(event) {
        this.plugin.sendNotification(Notifications.DISPATCH_EVENT, Event.create(dashjs.Protection.events.PROTECTION_CREATED, event.data));
      }
    }, {
      key: "onBufferEmpty",
      value: function onBufferEmpty(event) {
        if (event.mediaType !== "video") return;
        this.sendNotification(Notifications.STALLED);
      }
    }, {
      key: "onEmsg",
      value: function onEmsg(event) {
        var data = event.event;
        this.plugin.sendNotification(Notifications.DISPATCH_EVENT, Event.create(event.type, data));
        var start = (data.presentationTime || data.calculatedPresentationTime / data.presentationTimeDelta) * 10000;
        var end = start + data.duration / data.presentationTimeDelta * 10000;
        var text = String.fromCharCode.apply(null, data.messageData);
        var info = XMLUtils.parse(text);
        data.text = text;
        var cue = new DataCue(start, end, {
          key: DASHPlaybackProxy.SCTE,
          data: data,
          info: info
        });
        this.sendNotification(Notifications.TIMED_METADATA, cue);
      }
    }, {
      key: "onTracksAdded",
      value: function onTracksAdded(event) {
        var player = this.player; // Prevent Dash to parse & handle texttracks if captions is disabled

        if (this.facade.captioning == null) {
          player.setTextTrack(-1);
          return;
        }

        var tracks = this.facade.captioning.getTracks();
        var textTracks = this.facade.textTracks;

        var compare = function compare(a, b) {
          // sameness criterias  
          if (a.isFromCEA608 === true && b.type !== Utils.mimeTypes.cea608) return false;
          if (a.isEmbedded === true && b.type !== Utils.mimeTypes.cea708) return false;
          if (a.isTTML === true && b.type !== Utils.mimeTypes.ttml) return false;
          if (Utils.compareLanguageTags(a.language, b.language) !== true) return false; // if nothing fails return true

          return true;
        };

        var select = function select(track) {
          fp.each(textTracks, function (item, idx) {
            if (compare(item, track)) player.setTextTrack(idx);
          });
        };

        var changeEnabled = function changeEnabled(track, enabled) {
          if (enabled !== true) return;
          player.setTextTrack(-1); // disables dash CC processing for all tracks

          select(track); // resets 'enabled' state to active tracks

          fp.each(tracks, function (item) {
            return item.data.enabled = item === track;
          });
        }; // maps tracks that requires DashAPI handling  


        fp.each(tracks, function (item, index) {
          item.changeEnabled = changeEnabled.bind(this, item);
          if (item.enabled === true) select(item);
        });
      }
    }, {
      key: "onTmlToParse",
      value: function onTmlToParse(event) {
        this.sendNotification(CaptioningNotifications.TTML_CUE_CHANGE, event);
      }
      /** */

    }, {
      key: "onError",
      value: function onError(event) {
        var error = event.error;
        this.plugin.sendNotification(Notifications.DISPATCH_EVENT, Event.create(Events.ERROR, error));
        this.sendNotification(Notifications.ERROR, error);
      }
      /** @override */

    }, {
      key: "setQuality",
      value: function setQuality(value) {
        if (!this.player) return;
        var mode = value === -1 ? QualityMode.AUTO : QualityMode.MANUAL;
        this.setQualityMode(mode); // removes the max bitrate ceiling on manual bitrate selection

        if (mode === QualityMode.MANUAL) this.setMaxQualityLevel(-1);
        this.player.setQualityFor("video", value);
        return value;
      }
      /** @override */

    }, {
      key: "getQuality",
      value: function getQuality() {
        if (!this.player) return;
        return this.player.getQualityFor("video");
      }
      /** @override */

    }, {
      key: "getQualityLevels",
      value: function getQualityLevels() {
        if (!this.player) return;
        return this.player.getBitrateInfoListFor("video") || babelHelpers.get(babelHelpers.getPrototypeOf(DASHPlaybackProxy.prototype), "getQualityLevels", this).call(this);
      }
      /** @override */

    }, {
      key: "getQualityMode",
      value: function getQualityMode() {
        if (!this.player) return;
        var settings = this.player.getSettings();
        var setting = Utils.get(settings, ["streaming", "abr", "autoSwitchBitrate", this.getMedium()]);
        return setting === true ? QualityMode.AUTO : QualityMode.MANUAL;
      }
      /** @override */

    }, {
      key: "setQualityMode",
      value: function setQualityMode(value) {
        if (!this.player || value === this.getQualityMode()) return;
        var settings = this.player.getSettings();
        Utils.set(settings, ["streaming", "abr", "autoSwitchBitrate", this.getMedium()], value == QualityMode.AUTO);
        this.player.updateSettings(this.settings);
        return value;
      }
      /** @override */

    }, {
      key: "setMaxQualityLevel",
      value: function setMaxQualityLevel(value) {
        if (this.player == null || typeof value !== 'number') return;
        var levels = this.getQualityLevels();
        var settings = this.player.getSettings();
        var level = levels.filter(function (level) {
          return level.bitrate <= value;
        }).length - 1;
        var maxBitrate = levels[level] ? levels[level].bitrate / 1000 : level;
        Utils.set(settings, ["streaming", "abr", "maxBitrate", this.getMedium()], maxBitrate);
        this.player.updateSettings(this.settings);
        return level;
      }
      /** @override */

    }, {
      key: "getMaxQualityLevel",
      value: function getMaxQualityLevel() {
        if (this.player == null) return;
        var levels = this.getQualityLevels();
        var settings = this.player.getSettings();
        var setting = Utils.get(settings, ["streaming", "abr", "maxBitrate", this.getMedium()]);
        return levels.filter(function (level) {
          return level.bitrate <= setting * 1000;
        }).length - 1;
      }
      /** @override */

    }, {
      key: "destroy",
      value: function destroy() {
        if (!this.player) return;
        this.player.reset();
        babelHelpers.get(babelHelpers.getPrototypeOf(DASHPlaybackProxy.prototype), "destroy", this).call(this);
      }
    }]);
    return DASHPlaybackProxy;
  }(PlaybackCoreProxy);

  var DASHProxy = /*#__PURE__*/function (_PlaybackPluginProxy) {
    babelHelpers.inherits(DASHProxy, _PlaybackPluginProxy);

    /**
     * The DASHProxy class.
     *
     * @param {Object}  config  The plugin configuration object.
     * @constructor
     * @private
     * @extends {PluginProxy}
     */
    function DASHProxy(config) {
      var _this;

      babelHelpers.classCallCheck(this, DASHProxy);
      _this = _PlaybackPluginProxy.call(this, config) || this;
      _this.defaults = {
        types: ["application/dash+xml"],
        buffer: null,
        initialBitrate: null,
        lowLatencyEnabled: null,
        liveDelay: null,
        catchUpPlaybackRate: null,
        withCredentials: null,
        data: null,
        settings: null,
        schemeIdUri: "urn:scte:scte35:2013:xml",
        fragmentDuration: 10
      };
      return _this;
    }
    /** @static */


    babelHelpers.createClass(DASHProxy, [{
      key: "createPlaybackProxy",
      value: function createPlaybackProxy() {
        return new DASHPlaybackProxy(this.getData(), this.facade);
      }
    }], [{
      key: "NAME",
      get: function get() {
        return ModuleProxy.NAME;
      }
    }]);
    return DASHProxy;
  }(PlaybackPluginProxy);

  var DASHPlugin = /*#__PURE__*/function (_PlaybackPlugin) {
    babelHelpers.inherits(DASHPlugin, _PlaybackPlugin);

    /**
     * The DASHPlugin class.
     *
     * @param {Module}  app     The parent module of this plugin.
     * @constructor
     * @private
     * @extends {Plugin}
     */
    function DASHPlugin() {
      var _this;

      babelHelpers.classCallCheck(this, DASHPlugin);
      _this = _PlaybackPlugin.call(this) || this;
      _this.moduleName = "dash";
      return _this;
    }
    /** @override */


    babelHelpers.createClass(DASHPlugin, [{
      key: "createModel",
      value: function createModel() {
        this.proxy = new DASHProxy(this.config);
        this.registerProxy(this.proxy);
      }
      /** */

    }, {
      key: "listNotificationPublications",
      value: function listNotificationPublications() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(DASHPlugin.prototype), "listNotificationPublications", this).call(this).concat([Notifications.FRAGMENT_LOAD_START, Notifications.FRAGMENT_LOADED]);
      }
    }]);
    return DASHPlugin;
  }(PlaybackPlugin);

  QueryString.constructed = QueryString.construct();
  Notifications.init();
  AMP.registerPlugin("hls", "html", HLSPlugin);
  AMP.registerPlugin("dash", "html", DASHPlugin);
  AMP.registerPlugin("captioning", "html", CaptioningPlugin); // embed future players

  var Observer = MutationObserver || WebKitMutationObserver;
  var observer = new Observer(function (mutationsList, observer) {
    mutationsList.forEach(function (mutation) {
      embed(mutation.addedNodes);
    });
  });

  function observe() {
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  function embed(nodes) {
    if (!nodes || nodes.length == 0) return;
    var promise = Promise.resolve();
    fp.each(nodes, function (node) {
      if (!node.classList || !node.classList.contains("amp-inline") || !Object.keys(node.dataset) || node.dataset.embedded == "true") return;
      promise = promise.then(AMP.embed.bind(null, node));
    });
  } // embed all current players


  function embedAll() {
    embed(document.querySelectorAll(".amp-inline"));
  }

  if (document.body) {
    observe();
  } else {
    var domContentLoaded = function domContentLoaded() {
      document.removeEventListener("DOMContentLoaded", domContentLoaded);
      embedAll();
      observe();
    };

    document.addEventListener("DOMContentLoaded", domContentLoaded);
  }

  embedAll();
  var main = {
    fp: fp,
    amp: {
      ActiveState: ActiveState,
      Ad: AdVO,
      AdEvents: Object.entries(AdNotifications).reduce(function (acc, ent) {
        acc[ent[0].replace(/^AD_/, "")] = ent[1].replace(/^ads/, "");
        return acc;
      }, {}),
      AdPlugin: AdPromisePlugin,
      ads: {
        AdNotifications: AdNotifications,
        AdPlugin: AdPlugin,
        AdProxy: AdProxy,
        AdRequest: AdRequest,
        AdVO: AdVO
      },
      ApplicationStateProxy: ApplicationStateProxy,
      AMP: AMP,
      AMPError: AMPError,
      AmpError: AMPError,
      AuthEvents: AuthEvents,
      Authorization: Authorization,
      AuthPlugin: AuthPromisePlugin,
      AuthProvider: AuthProvider,
      AuthProviderList: AuthProviderList,
      AutoplayPolicy: AutoplayPolicy,
      AutoplayThreshold: AutoplayThreshold,
      CaptionRenderer: CaptionRenderer,
      CaptionCue: CaptionCue,
      CaptionTrack: CaptionTrack,
      Config: Config,
      CSS: CSS,
      Cue: Cue,
      DataBinding: DataBinding,
      DataBoundConfigurationProxy: ModuleProxy,
      DisplayState: DisplayState,
      Event: Event,
      Events: Events,
      EventDispatcher: EventDispatcher,
      KeySystem: KeySystem,
      Logger: Logger,
      Media: MediaVO,
      MediaProxy: MediaProxy,
      Medium: Medium,
      ModuleProxy: ModuleProxy,
      Notifications: Notifications,
      OverlayMediator: OverlayMediator,
      PlayerProxy: PlayerProxy,
      PlayState: PlayState,
      Plugin: PromisePlugin,
      Preload: Preload,
      PreviewTrack: PreviewTrack,
      QualityMode: QualityMode,
      QueryString: QueryString,
      Resource: Resource,

      get Settings() {
        return SettingsController.GET();
      },

      SMPTETTParser: SMPTETTParser,
      SRTParser: SRTParser,
      Timer: Timer,
      Transformer: Transformer,
      TransformType: TransformType,
      URL: URL,
      Utils: Utils,
      XMLUtils: XMLUtils,
      utils: {
        Logger: Logger,
        QueryString: QueryString,
        Timer: Timer,
        Utils: Utils,
        XMLUtils: XMLUtils
      },
      WebVTTParser: WebVTTParser
    }
  };

  return main;

}());
