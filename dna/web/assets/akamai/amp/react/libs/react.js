(function () {
	'use strict';

	var n,u,i,t,o,r={},f=[],e=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(n,l){for(var u in l)n[u]=l[u];return n}function s(n){var l=n.parentNode;l&&l.removeChild(n);}function a(n,l,u){var i,t,o,r=arguments,f={};for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);if(null!=u&&(f.children=u),"function"==typeof n&&null!=n.defaultProps)for(o in n.defaultProps)void 0===f[o]&&(f[o]=n.defaultProps[o]);return v(n,f,i,t,null)}function v(l,u,i,t,o){var r={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++n.__v:o};return null!=n.vnode&&n.vnode(r),r}function h(){return {current:null}}function y(n){return n.children}function p(n,l){this.props=n,this.context=l;}function d(n,l){if(null==l)return n.__?d(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?d(n):null}function _(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return _(n)}}function k(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!b.__r++||t!==n.debounceRendering)&&((t=n.debounceRendering)||i)(b);}function b(){for(var n;b.__r=u.length;)n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=c({},t)).__v=t.__v+1,I(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?d(t):o,t.__h),T(u,t),t.__e!=o&&_(t)));});}function m(n,l,u,i,t,o,e,c,s,a){var h,p,_,k,b,m,w,A=i&&i.__k||f,P=A.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k||"bigint"==typeof k?v(null,k,null,null,k):Array.isArray(k)?v(y,{children:k},null,null,null):k.__b>0?v(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(_=A[h])||_&&k.key==_.key&&k.type===_.type)A[h]=void 0;else for(p=0;p<P;p++){if((_=A[p])&&k.key==_.key&&k.type===_.type){A[p]=void 0;break}_=null;}I(n,k,_=_||r,t,o,e,c,s,a),b=k.__e,(p=k.ref)&&_.ref!=p&&(w||(w=[]),_.ref&&w.push(_.ref,null,k),w.push(p,k.__c||b,k)),null!=b?(null==m&&(m=b),"function"==typeof k.type&&null!=k.__k&&k.__k===_.__k?k.__d=s=g(k,s,n):s=x(n,k,_,A,b,s),a||"option"!==u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&_.__e==s&&s.parentNode!=n&&(s=d(_));}for(u.__e=m,h=P;h--;)null!=A[h]&&("function"==typeof u.type&&null!=A[h].__e&&A[h].__e==u.__d&&(u.__d=d(i,h+1)),L(A[h],A[h]));if(w)for(h=0;h<w.length;h++)z(w[h],w[++h],w[++h]);}function g(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,l="function"==typeof t.type?g(t,l,u):x(u,t,t,n.__k,t.__e,l));return l}function w(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){w(n,l);}):l.push(n)),l}function x(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else{for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o;}return void 0!==r?r:t.nextSibling}function A(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||C(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||C(n,o,l[o],u[o],i);}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||e.test(l)?u:u+"px";}function C(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||P(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||P(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?H:$,o):n.removeEventListener(l,o?H:$,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l));}}function $(l){this.l[l.type+!1](n.event?n.event(l):l);}function H(l){this.l[l.type+!0](n.event?n.event(l):l);}function I(l,u,i,t,o,r,f,e,s){var a,v,h,d,_,k,b,g,w,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(s=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(g=u.props,w=(a=P.contextType)&&t[a.__c],x=a?w?w.props.value:a.__:t,i.__c?b=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(g,x):(u.__c=v=new p(g,x),v.constructor=P,v.render=M),w&&w.sub(v),v.props=g,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=c({},v.__s)),c(v.__s,P.getDerivedStateFromProps(g,v.__s))),d=v.props,_=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else{if(null==P.getDerivedStateFromProps&&g!==d&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(g,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(g,v.__s,x)||u.__v===i.__v){v.props=g,v.state=v.__s,u.__v!==i.__v&&(v.__d=!1),v.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u);}),v.__h.length&&f.push(v);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(g,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(d,_,k);});}v.context=x,v.props=g,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),v.state=v.__s,null!=v.getChildContext&&(t=c(c({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(k=v.getSnapshotBeforeUpdate(d,_)),A=null!=a&&a.type===y&&null==a.key?a.props.children:a,m(l,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,s),v.base=u.__e,u.__h=null,v.__h.length&&f.push(v),b&&(v.__E=v.__=null),v.__e=!1;}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=j(i.__e,u,i,t,o,r,f,s);(a=n.diffed)&&a(u);}catch(l){u.__v=null,(s||null!=r)&&(u.__e=e,u.__h=!!s,r[r.indexOf(e)]=null),n.__e(l,u,i);}}function T(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u);});}catch(l){n.__e(l,u.__v);}});}function j(n,l,u,i,t,o,e,c){var a,v,h,y,p=u.props,d=l.props,_=l.type,k=0;if("svg"===_&&(t=!0),null!=o)for(;k<o.length;k++)if((a=o[k])&&(a===n||(_?a.localName==_:3==a.nodeType))){n=a,o[k]=null;break}if(null==n){if(null===_)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,d.is&&d),o=null,c=!1;}if(null===_)p===d||c&&n.data===d||(n.data=d);else{if(o=o&&f.slice.call(n.childNodes),v=(p=u.props||r).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!c){if(null!=o)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(h||v)&&(h&&(v&&h.__html==v.__html||h.__html===n.innerHTML)||(n.innerHTML=h&&h.__html||""));}if(A(n,d,p,t,c),h)l.__k=[];else if(k=l.props.children,m(n,Array.isArray(k)?k:[k],l,u,i,t&&"foreignObject"!==_,o,e,n.firstChild,c),null!=o)for(k=o.length;k--;)null!=o[k]&&s(o[k]);c||("value"in d&&void 0!==(k=d.value)&&(k!==n.value||"progress"===_&&!k)&&C(n,"value",k,p.value,!1),"checked"in d&&void 0!==(k=d.checked)&&k!==n.checked&&C(n,"checked",k,p.checked,!1));}return n}function z(l,u,i){try{"function"==typeof l?l(u):l.current=u;}catch(l){n.__e(l,i);}}function L(l,u,i){var t,o,r;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||z(t,null,u)),i||"function"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(l){n.__e(l,u);}t.base=t.__P=null;}if(t=l.__k)for(r=0;r<t.length;r++)t[r]&&L(t[r],u,i);null!=o&&s(o);}function M(n,l,u){return this.constructor(n,u)}function N(l,u,i){var t,o,e;n.__&&n.__(l,u),o=(t="function"==typeof i)?null:i&&i.__k||u.__k,e=[],I(u,l=(!t&&i||u).__k=a(y,null,[l]),o||r,r,void 0!==u.ownerSVGElement,!t&&i?[i]:o?null:u.firstChild?f.slice.call(u.childNodes):null,e,!t&&i?i:o?o.__e:u.firstChild,t),T(e,l);}function O(n,l){N(n,l,O);}function S(n,l,u){var i,t,o,r=arguments,f=c({},n.props);for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);return null!=u&&(f.children=u),v(n.type,f,i||n.key,t||n.ref,null)}function q(n,l){var u={__c:l="__cC"+o++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(k);},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n);};}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l;}throw n},__v:0},p.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof n&&(n=n(c({},u),this.props)),n&&c(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),k(this));},p.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),k(this));},p.prototype.render=y,u=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,b.__r=0,o=0;

	var t$1,u$1,r$1,o$1=0,i$1=[],c$1=n.__b,f$1=n.__r,e$1=n.diffed,a$1=n.__c,v$1=n.unmount;function m$1(t,r){n.__h&&n.__h(u$1,t,o$1||r),o$1=0;var i=u$1.__H||(u$1.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function l$1(n$$1){return o$1=1,p$1(w$1,n$$1)}function p$1(n$$1,r,o){var i=m$1(t$1++,2);return i.t=n$$1,i.__c||(i.__=[o?o(r):w$1(void 0,r),function(n$$1){var t=i.t(i.__[0],n$$1);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}));}],i.__c=u$1),i.__}function y$1(r,o){var i=m$1(t$1++,3);!n.__s&&k$1(i.__H,o)&&(i.__=r,i.__H=o,u$1.__H.__h.push(i));}function h$1(r,o){var i=m$1(t$1++,4);!n.__s&&k$1(i.__H,o)&&(i.__=r,i.__H=o,u$1.__h.push(i));}function s$1(n$$1){return o$1=5,d$1(function(){return {current:n$$1}},[])}function _$1(n$$1,t,u){o$1=6,h$1(function(){"function"==typeof n$$1?n$$1(t()):n$$1&&(n$$1.current=t());},null==u?u:u.concat(n$$1));}function d$1(n$$1,u){var r=m$1(t$1++,7);return k$1(r.__H,u)&&(r.__=n$$1(),r.__H=u,r.__h=n$$1),r.__}function A$1(n$$1,t){return o$1=8,d$1(function(){return n$$1},t)}function F(n$$1){var r=u$1.context[n$$1.__c],o=m$1(t$1++,9);return o.__c=n$$1,r?(null==o.__&&(o.__=!0,r.sub(u$1)),r.props.value):n$$1.__}function T$1(t,u){n.useDebugValue&&n.useDebugValue(u?u(t):t);}function x$1(){i$1.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(g$1),t.__H.__h.forEach(j$1),t.__H.__h=[];}catch(u){t.__H.__h=[],n.__e(u,t.__v);}}),i$1=[];}n.__b=function(n$$1){u$1=null,c$1&&c$1(n$$1);},n.__r=function(n$$1){f$1&&f$1(n$$1),t$1=0;var r=(u$1=n$$1.__c).__H;r&&(r.__h.forEach(g$1),r.__h.forEach(j$1),r.__h=[]);},n.diffed=function(t){e$1&&e$1(t);var o=t.__c;o&&o.__H&&o.__H.__h.length&&(1!==i$1.push(o)&&r$1===n.requestAnimationFrame||((r$1=n.requestAnimationFrame)||function(n$$1){var t,u=function(){clearTimeout(r),b$1&&cancelAnimationFrame(t),setTimeout(n$$1);},r=setTimeout(u,100);b$1&&(t=requestAnimationFrame(u));})(x$1)),u$1=void 0;},n.__c=function(t,u){u.some(function(t){try{t.__h.forEach(g$1),t.__h=t.__h.filter(function(n$$1){return !n$$1.__||j$1(n$$1)});}catch(r){u.some(function(n$$1){n$$1.__h&&(n$$1.__h=[]);}),u=[],n.__e(r,t.__v);}}),a$1&&a$1(t,u);},n.unmount=function(t){v$1&&v$1(t);var u=t.__c;if(u&&u.__H)try{u.__H.__.forEach(g$1);}catch(t){n.__e(t,u.__v);}};var b$1="function"==typeof requestAnimationFrame;function g$1(n$$1){var t=u$1;"function"==typeof n$$1.__c&&n$$1.__c(),u$1=t;}function j$1(n$$1){var t=u$1;n$$1.__c=n$$1.__(),u$1=t;}function k$1(n$$1,t){return !n$$1||n$$1.length!==t.length||t.some(function(t,u){return t!==n$$1[u]})}function w$1(n$$1,t){return "function"==typeof t?t(n$$1):t}

	function C$1(n$$1,t){for(var e in t)n$$1[e]=t[e];return n$$1}function S$1(n$$1,t){for(var e in n$$1)if("__source"!==e&&!(e in t))return !0;for(var r in t)if("__source"!==r&&n$$1[r]!==t[r])return !0;return !1}function E(n$$1){this.props=n$$1;}function g$2(n$$1,t){function e(n$$1){var e=this.props.ref,r=e==n$$1.ref;return !r&&e&&(e.call?e(null):e.current=null),t?!t(this.props,n$$1)||!r:S$1(this.props,n$$1)}function r(t){return this.shouldComponentUpdate=e,a(n$$1,t)}return r.displayName="Memo("+(n$$1.displayName||n$$1.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(E.prototype=new p).isPureReactComponent=!0,E.prototype.shouldComponentUpdate=function(n$$1,t){return S$1(this.props,n$$1)||S$1(this.state,t)};var w$2=n.__b;n.__b=function(n$$1){n$$1.type&&n$$1.type.__f&&n$$1.ref&&(n$$1.props.ref=n$$1.ref,n$$1.ref=null),w$2&&w$2(n$$1);};var R="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function x$2(n$$1){function t(t,e){var r=C$1({},t);return delete r.ref,n$$1(r,(e=t.ref||e)&&("object"!=typeof e||"current"in e)?e:null)}return t.$$typeof=R,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n$$1.displayName||n$$1.name)+")",t}var N$1=function(n$$1,t){return null==n$$1?null:w(w(n$$1).map(t))},k$2={map:N$1,forEach:N$1,count:function(n$$1){return n$$1?w(n$$1).length:0},only:function(n$$1){var t=w(n$$1);if(1!==t.length)throw"Children.only";return t[0]},toArray:w},A$2=n.__e;n.__e=function(n$$1,t,e){if(n$$1.then)for(var r,u=t;u=u.__;)if((r=u.__c)&&r.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),r.__c(n$$1,t);A$2(n$$1,t,e);};var O$1=n.unmount;function L$1(){this.__u=0,this.t=null,this.__b=null;}function U(n$$1){var t=n$$1.__.__c;return t&&t.__e&&t.__e(n$$1)}function D(n$$1){var t,e,r;function u(u){if(t||(t=n$$1()).then(function(n$$1){e=n$$1.default||n$$1;},function(n$$1){r=n$$1;}),r)throw r;if(!e)throw t;return a(e,u)}return u.displayName="Lazy",u.__f=!0,u}function F$1(){this.u=null,this.o=null;}n.unmount=function(n$$1){var t=n$$1.__c;t&&t.__R&&t.__R(),t&&!0===n$$1.__h&&(n$$1.type=null),O$1&&O$1(n$$1);},(L$1.prototype=new p).__c=function(n$$1,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=U(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l$$1):l$$1());};e.__R=i;var l$$1=function(){if(!--r.__u){if(r.state.__e){var n$$1=r.state.__e;r.__v.__k[0]=function n$$1(t,e,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(t){return n$$1(t,e,r)}),t.__c&&t.__c.__P===e&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(n$$1,n$$1.__c.__P,n$$1.__c.__O);}var t;for(r.setState({__e:r.__b=null});t=r.t.pop();)t.forceUpdate();}},f=!0===t.__h;r.__u++||f||r.setState({__e:r.__b=r.__v.__k[0]}),n$$1.then(i,i);},L$1.prototype.componentWillUnmount=function(){this.t=[];},L$1.prototype.render=function(n$$1,t){if(this.__b){if(this.__v.__k){var e=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function n$$1(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(n$$1){"function"==typeof n$$1.__c&&n$$1.__c();}),t.__c.__H=null),null!=(t=C$1({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(t){return n$$1(t,e,r)})),t}(this.__b,e,r.__O=r.__P);}this.__b=null;}var u=t.__e&&a(y,null,n$$1.fallback);return u&&(u.__h=null),[a(y,null,t.__e?null:n$$1.children),u]};var M$1=function(n$$1,t,e){if(++e[1]===e[0]&&n$$1.o.delete(t),n$$1.props.revealOrder&&("t"!==n$$1.props.revealOrder[0]||!n$$1.o.size))for(e=n$$1.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n$$1.u=e=e[2];}};function T$2(n$$1){return this.getChildContext=function(){return n$$1.context},n$$1.children}function j$2(n$$1){var t=this,e=n$$1.i;t.componentWillUnmount=function(){N(null,t.l),t.l=null,t.i=null;},t.i&&t.i!==e&&t.componentWillUnmount(),n$$1.__v?(t.l||(t.i=e,t.l={nodeType:1,parentNode:e,childNodes:[],appendChild:function(n$$1){this.childNodes.push(n$$1),t.i.appendChild(n$$1);},insertBefore:function(n$$1,e){this.childNodes.push(n$$1),t.i.appendChild(n$$1);},removeChild:function(n$$1){this.childNodes.splice(this.childNodes.indexOf(n$$1)>>>1,1),t.i.removeChild(n$$1);}}),N(a(T$2,{context:t.context},n$$1.__v),t.l)):t.l&&t.componentWillUnmount();}function I$1(n$$1,t){return a(j$2,{__v:n$$1,i:t})}(F$1.prototype=new p).__e=function(n$$1){var t=this,e=U(t.__v),r=t.o.get(n$$1);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),M$1(t,n$$1,r)):u();};e?e(o):o();}},F$1.prototype.render=function(n$$1){this.u=null,this.o=new Map;var t=w(n$$1.children);n$$1.revealOrder&&"b"===n$$1.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n$$1.children},F$1.prototype.componentDidUpdate=F$1.prototype.componentDidMount=function(){var n$$1=this;this.o.forEach(function(t,e){M$1(n$$1,e,t);});};var W="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,P$1=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,V=function(n$$1){return ("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n$$1)};function z$1(n$$1,t,e){return null==t.__k&&(t.textContent=""),N(n$$1,t),"function"==typeof e&&e(),n$$1?n$$1.__c:null}function B(n$$1,t,e){return O(n$$1,t),"function"==typeof e&&e(),n$$1?n$$1.__c:null}p.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n$$1){Object.defineProperty(p.prototype,n$$1,{configurable:!0,get:function(){return this["UNSAFE_"+n$$1]},set:function(t){Object.defineProperty(this,n$$1,{configurable:!0,writable:!0,value:t});}});});var H$1=n.event;function Z(){}function Y(){return this.cancelBubble}function $$1(){return this.defaultPrevented}n.event=function(n$$1){return H$1&&(n$$1=H$1(n$$1)),n$$1.persist=Z,n$$1.isPropagationStopped=Y,n$$1.isDefaultPrevented=$$1,n$$1.nativeEvent=n$$1};var q$2,G={configurable:!0,get:function(){return this.class}},J=n.vnode;n.vnode=function(n$$1){var t=n$$1.type,e=n$$1.props,r=e;if("string"==typeof t){for(var u in r={},e){var o=e[u];"value"===u&&"defaultValue"in e&&null==o||("defaultValue"===u&&"value"in e&&null==e.value?u="value":"download"===u&&!0===o?o="":/ondoubleclick/i.test(u)?u="ondblclick":/^onchange(textarea|input)/i.test(u+t)&&!V(e.type)?u="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(u)?u=u.toLowerCase():P$1.test(u)?u=u.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===o&&(o=void 0),r[u]=o);}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=w(e.children).forEach(function(n$$1){n$$1.props.selected=-1!=r.value.indexOf(n$$1.props.value);})),"select"==t&&null!=r.defaultValue&&(r.value=w(e.children).forEach(function(n$$1){n$$1.props.selected=r.multiple?-1!=r.defaultValue.indexOf(n$$1.props.value):r.defaultValue==n$$1.props.value;})),n$$1.props=r;}t&&e.class!=e.className&&(G.enumerable="className"in e,null!=e.className&&(r.class=e.className),Object.defineProperty(r,"className",G)),n$$1.$$typeof=W,J&&J(n$$1);};var K=n.__r;n.__r=function(n$$1){K&&K(n$$1),q$2=n$$1.__c;};var Q={ReactCurrentDispatcher:{current:{readContext:function(n$$1){return q$2.__n[n$$1.__c].props.value}}}};var on="object"==typeof performance&&"function"==typeof performance.now?performance.now.bind(performance):function(){return Date.now()};function fn(n$$1){return a.bind(null,n$$1)}function cn(n$$1){return !!n$$1&&n$$1.$$typeof===W}function an(n$$1){return cn(n$$1)?S.apply(null,arguments):n$$1}function sn(n$$1){return !!n$$1.__k&&(N(null,n$$1),!0)}function hn(n$$1){return n$$1&&(n$$1.base||1===n$$1.nodeType&&n$$1)||null}var pn=function(n$$1,t){return n$$1(t)};var ReactDOM = {useState:l$1,useReducer:p$1,useEffect:y$1,useLayoutEffect:h$1,useRef:s$1,useImperativeHandle:_$1,useMemo:d$1,useCallback:A$1,useContext:F,useDebugValue:T$1,version:"16.8.0",Children:k$2,render:z$1,hydrate:B,unmountComponentAtNode:sn,createPortal:I$1,createElement:a,createContext:q,createFactory:fn,cloneElement:an,createRef:h,Fragment:y,isValidElement:cn,findDOMNode:hn,Component:p,PureComponent:E,memo:g$2,forwardRef:x$2,unstable_batchedUpdates:pn,StrictMode:y,Suspense:L$1,SuspenseList:F$1,lazy:D,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Q};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var reactIs_production_min = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports,"__esModule",{value:!0});
	var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):
	60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.fundamental"):60117,w=b?Symbol.for("react.responder"):60118,x=b?Symbol.for("react.scope"):60119;function y(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function z(a){return y(a)===m}
	exports.typeOf=y;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;
	exports.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===v||a.$$typeof===w||a.$$typeof===x)};exports.isAsyncMode=function(a){return z(a)||y(a)===l};exports.isConcurrentMode=z;exports.isContextConsumer=function(a){return y(a)===k};exports.isContextProvider=function(a){return y(a)===h};
	exports.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return y(a)===n};exports.isFragment=function(a){return y(a)===e};exports.isLazy=function(a){return y(a)===t};exports.isMemo=function(a){return y(a)===r};exports.isPortal=function(a){return y(a)===d};exports.isProfiler=function(a){return y(a)===g};exports.isStrictMode=function(a){return y(a)===f};exports.isSuspense=function(a){return y(a)===p};
	});

	unwrapExports(reactIs_production_min);
	var reactIs_production_min_1 = reactIs_production_min.typeOf;
	var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
	var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
	var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
	var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
	var reactIs_production_min_6 = reactIs_production_min.Element;
	var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
	var reactIs_production_min_8 = reactIs_production_min.Fragment;
	var reactIs_production_min_9 = reactIs_production_min.Lazy;
	var reactIs_production_min_10 = reactIs_production_min.Memo;
	var reactIs_production_min_11 = reactIs_production_min.Portal;
	var reactIs_production_min_12 = reactIs_production_min.Profiler;
	var reactIs_production_min_13 = reactIs_production_min.StrictMode;
	var reactIs_production_min_14 = reactIs_production_min.Suspense;
	var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
	var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
	var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
	var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
	var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
	var reactIs_production_min_20 = reactIs_production_min.isElement;
	var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
	var reactIs_production_min_22 = reactIs_production_min.isFragment;
	var reactIs_production_min_23 = reactIs_production_min.isLazy;
	var reactIs_production_min_24 = reactIs_production_min.isMemo;
	var reactIs_production_min_25 = reactIs_production_min.isPortal;
	var reactIs_production_min_26 = reactIs_production_min.isProfiler;
	var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
	var reactIs_production_min_28 = reactIs_production_min.isSuspense;

	var reactIs_development = createCommonjsModule(function (module, exports) {
	});

	unwrapExports(reactIs_development);
	var reactIs_development_1 = reactIs_development.typeOf;
	var reactIs_development_2 = reactIs_development.AsyncMode;
	var reactIs_development_3 = reactIs_development.ConcurrentMode;
	var reactIs_development_4 = reactIs_development.ContextConsumer;
	var reactIs_development_5 = reactIs_development.ContextProvider;
	var reactIs_development_6 = reactIs_development.Element;
	var reactIs_development_7 = reactIs_development.ForwardRef;
	var reactIs_development_8 = reactIs_development.Fragment;
	var reactIs_development_9 = reactIs_development.Lazy;
	var reactIs_development_10 = reactIs_development.Memo;
	var reactIs_development_11 = reactIs_development.Portal;
	var reactIs_development_12 = reactIs_development.Profiler;
	var reactIs_development_13 = reactIs_development.StrictMode;
	var reactIs_development_14 = reactIs_development.Suspense;
	var reactIs_development_15 = reactIs_development.isValidElementType;
	var reactIs_development_16 = reactIs_development.isAsyncMode;
	var reactIs_development_17 = reactIs_development.isConcurrentMode;
	var reactIs_development_18 = reactIs_development.isContextConsumer;
	var reactIs_development_19 = reactIs_development.isContextProvider;
	var reactIs_development_20 = reactIs_development.isElement;
	var reactIs_development_21 = reactIs_development.isForwardRef;
	var reactIs_development_22 = reactIs_development.isFragment;
	var reactIs_development_23 = reactIs_development.isLazy;
	var reactIs_development_24 = reactIs_development.isMemo;
	var reactIs_development_25 = reactIs_development.isPortal;
	var reactIs_development_26 = reactIs_development.isProfiler;
	var reactIs_development_27 = reactIs_development.isStrictMode;
	var reactIs_development_28 = reactIs_development.isSuspense;

	var reactIs = createCommonjsModule(function (module) {

	{
	  module.exports = reactIs_production_min;
	}
	});

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	var ReactPropTypesSecret_1 = ReactPropTypesSecret;

	var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	var factoryWithThrowingShims = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret_1) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  }  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	var propTypes = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	{
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = factoryWithThrowingShims();
	}
	});

	var lib = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports["default"] = void 0;

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _default = function _default(_ref) {
	  var _class, _temp;

	  var Component = _ref.Component,
	      createElement = _ref.createElement,
	      createRef = _ref.createRef;
	  return _temp = _class = /*#__PURE__*/function (_Component) {
	    _inheritsLoose(ReactHint, _Component);

	    function ReactHint() {
	      var _this;

	      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      _this = _Component.call.apply(_Component, [this].concat(args)) || this;

	      _defineProperty(_assertThisInitialized(_this), "_hint", createRef());

	      _defineProperty(_assertThisInitialized(_this), "_container", createRef());

	      _defineProperty(_assertThisInitialized(_this), "state", {
	        target: null,
	        hidden: true
	      });

	      _defineProperty(_assertThisInitialized(_this), "target", null);

	      _defineProperty(_assertThisInitialized(_this), "placement", null);

	      _defineProperty(_assertThisInitialized(_this), "_containerStyle", {
	        position: 'relative'
	      });

	      _defineProperty(_assertThisInitialized(_this), "toggleEvents", function (_ref2, flag) {
	        var events = _ref2.events,
	            _ref2$events = _ref2.events,
	            click = _ref2$events.click,
	            focus = _ref2$events.focus,
	            hover = _ref2$events.hover;
	        var action = flag ? 'addEventListener' : 'removeEventListener';
	        var hasEvents = events === true;
	        (click || hasEvents) && document[action]('click', _this.toggleHint);
	        (focus || hasEvents) && document[action]('focusin', _this.toggleHint);
	        (hover || hasEvents) && document[action]('mouseover', _this.toggleHint);
	        (click || hover || hasEvents) && document[action]('touchend', _this.toggleHint);
	      });

	      _defineProperty(_assertThisInitialized(_this), "toggleHint", function (_temp2) {
	        var _ref3 = _temp2 === void 0 ? {} : _temp2,
	            _ref3$target = _ref3.target,
	            target = _ref3$target === void 0 ? null : _ref3$target;

	        target = _this.getHint(target);
	        clearTimeout(_this._timeout);
	        _this._timeout = setTimeout(function () {
	          _this.target = target;

	          if (_this.target) {
	            _this.placement = null;
	          }

	          _this.getHintData();
	        }, target === null ? _this.props.delay.hide === undefined ? _this.props.delay : _this.props.delay.hide : _this.props.delay.show === undefined ? _this.props.delay : _this.props.delay.show);
	      });

	      _defineProperty(_assertThisInitialized(_this), "getHint", function (el) {
	        var _this$props = _this.props,
	            attribute = _this$props.attribute,
	            persist = _this$props.persist;
	        var target = _this.target;

	        while (el) {
	          if (el === document) break;
	          if (persist && el === _this._hint.current) return target;
	          if (el.hasAttribute(attribute)) return el;
	          el = el.parentNode;
	        }

	        return null;
	      });

	      _defineProperty(_assertThisInitialized(_this), "shallowEqual", function (a, b) {
	        var keys = Object.keys(a);
	        return keys.length === Object.keys(b).length && keys.reduce(function (result, key) {
	          return result && (typeof a[key] === 'function' && typeof b[key] === 'function' || a[key] === b[key]);
	        }, true);
	      });

	      _defineProperty(_assertThisInitialized(_this), "getHintData", function () {
	        if (!_this.target) {
	          _this.setState({
	            hidden: true
	          });

	          return;
	        }

	        var _this$props2 = _this.props,
	            attribute = _this$props2.attribute,
	            autoPosition = _this$props2.autoPosition,
	            position = _this$props2.position;
	        var content = _this.target.getAttribute(attribute) || '';
	        var at = _this.placement || _this.target.getAttribute(attribute + "-at") || position;

	        var _this$_container$curr = _this._container.current.getBoundingClientRect(),
	            containerTop = _this$_container$curr.top,
	            containerLeft = _this$_container$curr.left;

	        var _this$_hint$current$g = _this._hint.current.getBoundingClientRect(),
	            hintWidth = _this$_hint$current$g.width,
	            hintHeight = _this$_hint$current$g.height;

	        var _this$target$getBound = _this.target.getBoundingClientRect(),
	            targetTop = _this$target$getBound.top,
	            targetLeft = _this$target$getBound.left,
	            targetWidth = _this$target$getBound.width,
	            targetHeight = _this$target$getBound.height;

	        if (autoPosition && !_this.placement) {
	          var isHoriz = ['left', 'right'].includes(at);
	          var _document$documentEle = document.documentElement,
	              clientHeight = _document$documentEle.clientHeight,
	              clientWidth = _document$documentEle.clientWidth;
	          var directions = {
	            left: (isHoriz ? targetLeft - hintWidth : targetLeft + (targetWidth - hintWidth >> 1)) > 0,
	            right: (isHoriz ? targetLeft + targetWidth + hintWidth : targetLeft + (targetWidth + hintWidth >> 1)) < clientWidth,
	            bottom: (isHoriz ? targetTop + (targetHeight + hintHeight >> 1) : targetTop + targetHeight + hintHeight) < clientHeight,
	            top: (isHoriz ? targetTop - (hintHeight >> 1) : targetTop - hintHeight) > 0
	          };

	          if (!at || !directions[at]) {
	            switch (at) {
	              case 'left':
	                if (!directions.left) at = 'right';
	                if (!directions.top) at = 'bottom';
	                if (!directions.bottom) at = 'top';
	                break;

	              case 'right':
	                if (!directions.right) at = 'left';
	                if (!directions.top) at = 'bottom';
	                if (!directions.bottom) at = 'top';
	                break;

	              case 'bottom':
	                if (!directions.bottom) at = 'top';
	                if (!directions.left) at = 'right';
	                if (!directions.right) at = 'left';
	                break;

	              case 'top':
	              default:
	                if (!directions.top) at = 'bottom';
	                if (!directions.left) at = 'right';
	                if (!directions.right) at = 'left';
	                break;
	            }
	          }
	        }

	        var top, left;

	        switch (at) {
	          case 'left':
	            top = targetHeight - hintHeight >> 1;
	            left = -hintWidth;
	            break;

	          case 'right':
	            top = targetHeight - hintHeight >> 1;
	            left = targetWidth;
	            break;

	          case 'bottom':
	            top = targetHeight;
	            left = targetWidth - hintWidth >> 1;
	            break;

	          case 'top':
	          default:
	            top = -hintHeight;
	            left = targetWidth - hintWidth >> 1;
	        }

	        if (hintHeight > 0 || hintWidth > 0) {
	          // This prevents react-hint from rotating the placements 
	          _this.placement = at;
	        }

	        var newState = {
	          content: content,
	          at: at,
	          top: top + targetTop - containerTop | 0,
	          left: left + targetLeft - containerLeft | 0,
	          hidden: false
	        };

	        _this.setState(newState);
	      });

	      return _this;
	    }

	    var _proto = ReactHint.prototype;

	    _proto.componentDidMount = function componentDidMount() {
	      this.toggleEvents(this.props, true);
	    };

	    _proto.componentWillUnmount = function componentWillUnmount() {
	      this.toggleEvents(this.props, false);
	      clearTimeout(this._timeout);
	    };

	    _proto.componentDidUpdate = function componentDidUpdate() {
	      if (this.target && !this.state.hidden) {
	        this.getHintData();
	      }
	    };

	    _proto.shouldComponentUpdate = function shouldComponentUpdate(props, state) {
	      return !this.shallowEqual(state, this.state) || !this.shallowEqual(props, this.props);
	    };

	    _proto.render = function render() {
	      var _this$props3 = this.props,
	          className = _this$props3.className,
	          onRenderContent = _this$props3.onRenderContent;
	      var _this$state = this.state,
	          content = _this$state.content,
	          at = _this$state.at,
	          top = _this$state.top,
	          left = _this$state.left;
	      return createElement("div", {
	        ref: this._container,
	        style: this._containerStyle
	      }, createElement("div", {
	        className: className + " " + className + "--" + at,
	        ref: this._hint,
	        role: "tooltip",
	        style: {
	          top: top,
	          left: left,
	          display: this.target ? undefined : 'none'
	        }
	      }, this.target && (onRenderContent ? onRenderContent(this.target, content) : createElement("div", {
	        className: className + "__content"
	      }, content))));
	    };

	    return ReactHint;
	  }(Component), _defineProperty(_class, "defaultProps", {
	    attribute: 'data-rh',
	    autoPosition: false,
	    className: 'react-hint',
	    delay: 0,
	    events: false,
	    onRenderContent: null,
	    persist: false,
	    position: 'top'
	  }), _temp;
	};

	exports["default"] = _default;
	module.exports = exports.default;
	});

	var ReactHintFactory = unwrapExports(lib);

	var ReactHint = ReactHintFactory(ReactDOM);

	// turn off async setState 
	n.debounceRendering = function (f) {
	    return f();
	};

	window.React = ReactDOM;
	window.ReactDOM = ReactDOM;
	window.PropTypes = propTypes;
	window.ReactHint = ReactHint;

}());
