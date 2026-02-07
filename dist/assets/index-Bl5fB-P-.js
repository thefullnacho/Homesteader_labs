(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function lv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var im={exports:{}},xl={},rm={exports:{}},Oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mo=Symbol.for("react.element"),cv=Symbol.for("react.portal"),uv=Symbol.for("react.fragment"),dv=Symbol.for("react.strict_mode"),fv=Symbol.for("react.profiler"),hv=Symbol.for("react.provider"),pv=Symbol.for("react.context"),mv=Symbol.for("react.forward_ref"),gv=Symbol.for("react.suspense"),vv=Symbol.for("react.memo"),xv=Symbol.for("react.lazy"),Xf=Symbol.iterator;function _v(t){return t===null||typeof t!="object"?null:(t=Xf&&t[Xf]||t["@@iterator"],typeof t=="function"?t:null)}var sm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},om=Object.assign,am={};function Es(t,e,n){this.props=t,this.context=e,this.refs=am,this.updater=n||sm}Es.prototype.isReactComponent={};Es.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Es.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function lm(){}lm.prototype=Es.prototype;function Pd(t,e,n){this.props=t,this.context=e,this.refs=am,this.updater=n||sm}var Ld=Pd.prototype=new lm;Ld.constructor=Pd;om(Ld,Es.prototype);Ld.isPureReactComponent=!0;var Yf=Array.isArray,cm=Object.prototype.hasOwnProperty,Id={current:null},um={key:!0,ref:!0,__self:!0,__source:!0};function dm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)cm.call(e,i)&&!um.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Mo,type:t,key:s,ref:o,props:r,_owner:Id.current}}function yv(t,e){return{$$typeof:Mo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Dd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Mo}function Sv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var $f=/\/+/g;function Gl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Sv(""+t.key):e.toString(36)}function wa(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Mo:case cv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Gl(o,0):i,Yf(r)?(n="",t!=null&&(n=t.replace($f,"$&/")+"/"),wa(r,e,n,"",function(c){return c})):r!=null&&(Dd(r)&&(r=yv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace($f,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Yf(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Gl(s,a);o+=wa(s,e,n,l,r)}else if(l=_v(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Gl(s,a++),o+=wa(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Uo(t,e,n){if(t==null)return t;var i=[],r=0;return wa(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Ev(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Gt={current:null},Ta={transition:null},Mv={ReactCurrentDispatcher:Gt,ReactCurrentBatchConfig:Ta,ReactCurrentOwner:Id};function fm(){throw Error("act(...) is not supported in production builds of React.")}Oe.Children={map:Uo,forEach:function(t,e,n){Uo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Uo(t,function(){e++}),e},toArray:function(t){return Uo(t,function(e){return e})||[]},only:function(t){if(!Dd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Oe.Component=Es;Oe.Fragment=uv;Oe.Profiler=fv;Oe.PureComponent=Pd;Oe.StrictMode=dv;Oe.Suspense=gv;Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mv;Oe.act=fm;Oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=om({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Id.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)cm.call(e,l)&&!um.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Mo,type:t.type,key:r,ref:s,props:i,_owner:o}};Oe.createContext=function(t){return t={$$typeof:pv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:hv,_context:t},t.Consumer=t};Oe.createElement=dm;Oe.createFactory=function(t){var e=dm.bind(null,t);return e.type=t,e};Oe.createRef=function(){return{current:null}};Oe.forwardRef=function(t){return{$$typeof:mv,render:t}};Oe.isValidElement=Dd;Oe.lazy=function(t){return{$$typeof:xv,_payload:{_status:-1,_result:t},_init:Ev}};Oe.memo=function(t,e){return{$$typeof:vv,type:t,compare:e===void 0?null:e}};Oe.startTransition=function(t){var e=Ta.transition;Ta.transition={};try{t()}finally{Ta.transition=e}};Oe.unstable_act=fm;Oe.useCallback=function(t,e){return Gt.current.useCallback(t,e)};Oe.useContext=function(t){return Gt.current.useContext(t)};Oe.useDebugValue=function(){};Oe.useDeferredValue=function(t){return Gt.current.useDeferredValue(t)};Oe.useEffect=function(t,e){return Gt.current.useEffect(t,e)};Oe.useId=function(){return Gt.current.useId()};Oe.useImperativeHandle=function(t,e,n){return Gt.current.useImperativeHandle(t,e,n)};Oe.useInsertionEffect=function(t,e){return Gt.current.useInsertionEffect(t,e)};Oe.useLayoutEffect=function(t,e){return Gt.current.useLayoutEffect(t,e)};Oe.useMemo=function(t,e){return Gt.current.useMemo(t,e)};Oe.useReducer=function(t,e,n){return Gt.current.useReducer(t,e,n)};Oe.useRef=function(t){return Gt.current.useRef(t)};Oe.useState=function(t){return Gt.current.useState(t)};Oe.useSyncExternalStore=function(t,e,n){return Gt.current.useSyncExternalStore(t,e,n)};Oe.useTransition=function(){return Gt.current.useTransition()};Oe.version="18.3.1";rm.exports=Oe;var le=rm.exports;const wv=lv(le);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tv=le,Av=Symbol.for("react.element"),bv=Symbol.for("react.fragment"),Rv=Object.prototype.hasOwnProperty,Cv=Tv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Nv={key:!0,ref:!0,__self:!0,__source:!0};function hm(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Rv.call(e,i)&&!Nv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Av,type:t,key:s,ref:o,props:r,_owner:Cv.current}}xl.Fragment=bv;xl.jsx=hm;xl.jsxs=hm;im.exports=xl;var m=im.exports,Yc={},pm={exports:{}},fn={},mm={exports:{}},gm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,G){var Q=N.length;N.push(G);e:for(;0<Q;){var se=Q-1>>>1,we=N[se];if(0<r(we,G))N[se]=G,N[Q]=we,Q=se;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var G=N[0],Q=N.pop();if(Q!==G){N[0]=Q;e:for(var se=0,we=N.length,Fe=we>>>1;se<Fe;){var Y=2*(se+1)-1,te=N[Y],fe=Y+1,ce=N[fe];if(0>r(te,Q))fe<we&&0>r(ce,te)?(N[se]=ce,N[fe]=Q,se=fe):(N[se]=te,N[Y]=Q,se=Y);else if(fe<we&&0>r(ce,Q))N[se]=ce,N[fe]=Q,se=fe;else break e}}return G}function r(N,G){var Q=N.sortIndex-G.sortIndex;return Q!==0?Q:N.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,h=3,g=!1,_=!1,S=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var G=n(c);G!==null;){if(G.callback===null)i(c);else if(G.startTime<=N)i(c),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(c)}}function E(N){if(S=!1,v(N),!_)if(n(l)!==null)_=!0,H(C);else{var G=n(c);G!==null&&X(E,G.startTime-N)}}function C(N,G){_=!1,S&&(S=!1,u(P),P=-1),g=!0;var Q=h;try{for(v(G),f=n(l);f!==null&&(!(f.expirationTime>G)||N&&!T());){var se=f.callback;if(typeof se=="function"){f.callback=null,h=f.priorityLevel;var we=se(f.expirationTime<=G);G=t.unstable_now(),typeof we=="function"?f.callback=we:f===n(l)&&i(l),v(G)}else i(l);f=n(l)}if(f!==null)var Fe=!0;else{var Y=n(c);Y!==null&&X(E,Y.startTime-G),Fe=!1}return Fe}finally{f=null,h=Q,g=!1}}var b=!1,A=null,P=-1,K=5,y=-1;function T(){return!(t.unstable_now()-y<K)}function j(){if(A!==null){var N=t.unstable_now();y=N;var G=!0;try{G=A(!0,N)}finally{G?V():(b=!1,A=null)}}else b=!1}var V;if(typeof x=="function")V=function(){x(j)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,$=B.port2;B.port1.onmessage=j,V=function(){$.postMessage(null)}}else V=function(){p(j,0)};function H(N){A=N,b||(b=!0,V())}function X(N,G){P=p(function(){N(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,H(C))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var G=3;break;default:G=h}var Q=h;h=G;try{return N()}finally{h=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,G){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Q=h;h=N;try{return G()}finally{h=Q}},t.unstable_scheduleCallback=function(N,G,Q){var se=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?se+Q:se):Q=se,N){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=Q+we,N={id:d++,callback:G,priorityLevel:N,startTime:Q,expirationTime:we,sortIndex:-1},Q>se?(N.sortIndex=Q,e(c,N),n(l)===null&&N===n(c)&&(S?(u(P),P=-1):S=!0,X(E,Q-se))):(N.sortIndex=we,e(l,N),_||g||(_=!0,H(C))),N},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(N){var G=h;return function(){var Q=h;h=G;try{return N.apply(this,arguments)}finally{h=Q}}}})(gm);mm.exports=gm;var Pv=mm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lv=le,dn=Pv;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vm=new Set,ro={};function Mr(t,e){cs(t,e),cs(t+"Capture",e)}function cs(t,e){for(ro[t]=e,t=0;t<e.length;t++)vm.add(e[t])}var li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$c=Object.prototype.hasOwnProperty,Iv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qf={},Kf={};function Dv(t){return $c.call(Kf,t)?!0:$c.call(qf,t)?!1:Iv.test(t)?Kf[t]=!0:(qf[t]=!0,!1)}function Uv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ov(t,e,n,i){if(e===null||typeof e>"u"||Uv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function jt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){It[t]=new jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];It[e]=new jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){It[t]=new jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){It[t]=new jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){It[t]=new jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){It[t]=new jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){It[t]=new jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){It[t]=new jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){It[t]=new jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ud=/[\-:]([a-z])/g;function Od(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ud,Od);It[e]=new jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ud,Od);It[e]=new jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ud,Od);It[e]=new jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){It[t]=new jt(t,1,!1,t.toLowerCase(),null,!1,!1)});It.xlinkHref=new jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){It[t]=new jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Fd(t,e,n,i){var r=It.hasOwnProperty(e)?It[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ov(e,n,r,i)&&(n=null),i||r===null?Dv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var pi=Lv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oo=Symbol.for("react.element"),Hr=Symbol.for("react.portal"),Vr=Symbol.for("react.fragment"),kd=Symbol.for("react.strict_mode"),qc=Symbol.for("react.profiler"),xm=Symbol.for("react.provider"),_m=Symbol.for("react.context"),zd=Symbol.for("react.forward_ref"),Kc=Symbol.for("react.suspense"),Zc=Symbol.for("react.suspense_list"),Bd=Symbol.for("react.memo"),wi=Symbol.for("react.lazy"),ym=Symbol.for("react.offscreen"),Zf=Symbol.iterator;function Rs(t){return t===null||typeof t!="object"?null:(t=Zf&&t[Zf]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Object.assign,jl;function js(t){if(jl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);jl=e&&e[1]||""}return`
`+jl+t}var Wl=!1;function Xl(t,e){if(!t||Wl)return"";Wl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Wl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?js(t):""}function Fv(t){switch(t.tag){case 5:return js(t.type);case 16:return js("Lazy");case 13:return js("Suspense");case 19:return js("SuspenseList");case 0:case 2:case 15:return t=Xl(t.type,!1),t;case 11:return t=Xl(t.type.render,!1),t;case 1:return t=Xl(t.type,!0),t;default:return""}}function Qc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vr:return"Fragment";case Hr:return"Portal";case qc:return"Profiler";case kd:return"StrictMode";case Kc:return"Suspense";case Zc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case _m:return(t.displayName||"Context")+".Consumer";case xm:return(t._context.displayName||"Context")+".Provider";case zd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Bd:return e=t.displayName||null,e!==null?e:Qc(t.type)||"Memo";case wi:e=t._payload,t=t._init;try{return Qc(t(e))}catch{}}return null}function kv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qc(e);case 8:return e===kd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Hi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Sm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function zv(t){var e=Sm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Fo(t){t._valueTracker||(t._valueTracker=zv(t))}function Em(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Sm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ga(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Jc(t,e){var n=e.checked;return ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Qf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Hi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Mm(t,e){e=e.checked,e!=null&&Fd(t,"checked",e,!1)}function eu(t,e){Mm(t,e);var n=Hi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?tu(t,e.type,n):e.hasOwnProperty("defaultValue")&&tu(t,e.type,Hi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Jf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function tu(t,e,n){(e!=="number"||Ga(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ws=Array.isArray;function es(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Hi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function nu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return ht({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function eh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(Ws(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Hi(n)}}function wm(t,e){var n=Hi(e.value),i=Hi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function th(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Tm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function iu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Tm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ko,Am=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ko=ko||document.createElement("div"),ko.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ko.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function so(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var qs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bv=["Webkit","ms","Moz","O"];Object.keys(qs).forEach(function(t){Bv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),qs[e]=qs[t]})});function bm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||qs.hasOwnProperty(t)&&qs[t]?(""+e).trim():e+"px"}function Rm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=bm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Hv=ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ru(t,e){if(e){if(Hv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function su(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ou=null;function Hd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var au=null,ts=null,ns=null;function nh(t){if(t=Ao(t)){if(typeof au!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=Ml(e),au(t.stateNode,t.type,e))}}function Cm(t){ts?ns?ns.push(t):ns=[t]:ts=t}function Nm(){if(ts){var t=ts,e=ns;if(ns=ts=null,nh(t),e)for(t=0;t<e.length;t++)nh(e[t])}}function Pm(t,e){return t(e)}function Lm(){}var Yl=!1;function Im(t,e,n){if(Yl)return t(e,n);Yl=!0;try{return Pm(t,e,n)}finally{Yl=!1,(ts!==null||ns!==null)&&(Lm(),Nm())}}function oo(t,e){var n=t.stateNode;if(n===null)return null;var i=Ml(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var lu=!1;if(li)try{var Cs={};Object.defineProperty(Cs,"passive",{get:function(){lu=!0}}),window.addEventListener("test",Cs,Cs),window.removeEventListener("test",Cs,Cs)}catch{lu=!1}function Vv(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ks=!1,ja=null,Wa=!1,cu=null,Gv={onError:function(t){Ks=!0,ja=t}};function jv(t,e,n,i,r,s,o,a,l){Ks=!1,ja=null,Vv.apply(Gv,arguments)}function Wv(t,e,n,i,r,s,o,a,l){if(jv.apply(this,arguments),Ks){if(Ks){var c=ja;Ks=!1,ja=null}else throw Error(ne(198));Wa||(Wa=!0,cu=c)}}function wr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Dm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ih(t){if(wr(t)!==t)throw Error(ne(188))}function Xv(t){var e=t.alternate;if(!e){if(e=wr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return ih(r),t;if(s===i)return ih(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function Um(t){return t=Xv(t),t!==null?Om(t):null}function Om(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Om(t);if(e!==null)return e;t=t.sibling}return null}var Fm=dn.unstable_scheduleCallback,rh=dn.unstable_cancelCallback,Yv=dn.unstable_shouldYield,$v=dn.unstable_requestPaint,xt=dn.unstable_now,qv=dn.unstable_getCurrentPriorityLevel,Vd=dn.unstable_ImmediatePriority,km=dn.unstable_UserBlockingPriority,Xa=dn.unstable_NormalPriority,Kv=dn.unstable_LowPriority,zm=dn.unstable_IdlePriority,_l=null,jn=null;function Zv(t){if(jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(_l,t,void 0,(t.current.flags&128)===128)}catch{}}var Un=Math.clz32?Math.clz32:ex,Qv=Math.log,Jv=Math.LN2;function ex(t){return t>>>=0,t===0?32:31-(Qv(t)/Jv|0)|0}var zo=64,Bo=4194304;function Xs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ya(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Xs(a):(s&=o,s!==0&&(i=Xs(s)))}else o=n&~r,o!==0?i=Xs(o):s!==0&&(i=Xs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Un(e),r=1<<n,i|=t[n],e&=~r;return i}function tx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Un(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=tx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function uu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Bm(){var t=zo;return zo<<=1,!(zo&4194240)&&(zo=64),t}function $l(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function wo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Un(e),t[e]=n}function ix(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Un(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Gd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Un(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Qe=0;function Hm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Vm,jd,Gm,jm,Wm,du=!1,Ho=[],Pi=null,Li=null,Ii=null,ao=new Map,lo=new Map,Ai=[],rx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sh(t,e){switch(t){case"focusin":case"focusout":Pi=null;break;case"dragenter":case"dragleave":Li=null;break;case"mouseover":case"mouseout":Ii=null;break;case"pointerover":case"pointerout":ao.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":lo.delete(e.pointerId)}}function Ns(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ao(e),e!==null&&jd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function sx(t,e,n,i,r){switch(e){case"focusin":return Pi=Ns(Pi,t,e,n,i,r),!0;case"dragenter":return Li=Ns(Li,t,e,n,i,r),!0;case"mouseover":return Ii=Ns(Ii,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ao.set(s,Ns(ao.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,lo.set(s,Ns(lo.get(s)||null,t,e,n,i,r)),!0}return!1}function Xm(t){var e=lr(t.target);if(e!==null){var n=wr(e);if(n!==null){if(e=n.tag,e===13){if(e=Dm(n),e!==null){t.blockedOn=e,Wm(t.priority,function(){Gm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Aa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=fu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ou=i,n.target.dispatchEvent(i),ou=null}else return e=Ao(n),e!==null&&jd(e),t.blockedOn=n,!1;e.shift()}return!0}function oh(t,e,n){Aa(t)&&n.delete(e)}function ox(){du=!1,Pi!==null&&Aa(Pi)&&(Pi=null),Li!==null&&Aa(Li)&&(Li=null),Ii!==null&&Aa(Ii)&&(Ii=null),ao.forEach(oh),lo.forEach(oh)}function Ps(t,e){t.blockedOn===e&&(t.blockedOn=null,du||(du=!0,dn.unstable_scheduleCallback(dn.unstable_NormalPriority,ox)))}function co(t){function e(r){return Ps(r,t)}if(0<Ho.length){Ps(Ho[0],t);for(var n=1;n<Ho.length;n++){var i=Ho[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Pi!==null&&Ps(Pi,t),Li!==null&&Ps(Li,t),Ii!==null&&Ps(Ii,t),ao.forEach(e),lo.forEach(e),n=0;n<Ai.length;n++)i=Ai[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ai.length&&(n=Ai[0],n.blockedOn===null);)Xm(n),n.blockedOn===null&&Ai.shift()}var is=pi.ReactCurrentBatchConfig,$a=!0;function ax(t,e,n,i){var r=Qe,s=is.transition;is.transition=null;try{Qe=1,Wd(t,e,n,i)}finally{Qe=r,is.transition=s}}function lx(t,e,n,i){var r=Qe,s=is.transition;is.transition=null;try{Qe=4,Wd(t,e,n,i)}finally{Qe=r,is.transition=s}}function Wd(t,e,n,i){if($a){var r=fu(t,e,n,i);if(r===null)rc(t,e,i,qa,n),sh(t,i);else if(sx(r,t,e,n,i))i.stopPropagation();else if(sh(t,i),e&4&&-1<rx.indexOf(t)){for(;r!==null;){var s=Ao(r);if(s!==null&&Vm(s),s=fu(t,e,n,i),s===null&&rc(t,e,i,qa,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else rc(t,e,i,null,n)}}var qa=null;function fu(t,e,n,i){if(qa=null,t=Hd(i),t=lr(t),t!==null)if(e=wr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Dm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return qa=t,null}function Ym(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qv()){case Vd:return 1;case km:return 4;case Xa:case Kv:return 16;case zm:return 536870912;default:return 16}default:return 16}}var Ci=null,Xd=null,ba=null;function $m(){if(ba)return ba;var t,e=Xd,n=e.length,i,r="value"in Ci?Ci.value:Ci.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return ba=r.slice(t,1<i?1-i:void 0)}function Ra(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Vo(){return!0}function ah(){return!1}function hn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Vo:ah,this.isPropagationStopped=ah,this}return ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vo)},persist:function(){},isPersistent:Vo}),e}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yd=hn(Ms),To=ht({},Ms,{view:0,detail:0}),cx=hn(To),ql,Kl,Ls,yl=ht({},To,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$d,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ls&&(Ls&&t.type==="mousemove"?(ql=t.screenX-Ls.screenX,Kl=t.screenY-Ls.screenY):Kl=ql=0,Ls=t),ql)},movementY:function(t){return"movementY"in t?t.movementY:Kl}}),lh=hn(yl),ux=ht({},yl,{dataTransfer:0}),dx=hn(ux),fx=ht({},To,{relatedTarget:0}),Zl=hn(fx),hx=ht({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),px=hn(hx),mx=ht({},Ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gx=hn(mx),vx=ht({},Ms,{data:0}),ch=hn(vx),xx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_x={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=yx[t])?!!e[t]:!1}function $d(){return Sx}var Ex=ht({},To,{key:function(t){if(t.key){var e=xx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ra(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_x[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$d,charCode:function(t){return t.type==="keypress"?Ra(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ra(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Mx=hn(Ex),wx=ht({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uh=hn(wx),Tx=ht({},To,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$d}),Ax=hn(Tx),bx=ht({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rx=hn(bx),Cx=ht({},yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Nx=hn(Cx),Px=[9,13,27,32],qd=li&&"CompositionEvent"in window,Zs=null;li&&"documentMode"in document&&(Zs=document.documentMode);var Lx=li&&"TextEvent"in window&&!Zs,qm=li&&(!qd||Zs&&8<Zs&&11>=Zs),dh=" ",fh=!1;function Km(t,e){switch(t){case"keyup":return Px.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gr=!1;function Ix(t,e){switch(t){case"compositionend":return Zm(e);case"keypress":return e.which!==32?null:(fh=!0,dh);case"textInput":return t=e.data,t===dh&&fh?null:t;default:return null}}function Dx(t,e){if(Gr)return t==="compositionend"||!qd&&Km(t,e)?(t=$m(),ba=Xd=Ci=null,Gr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return qm&&e.locale!=="ko"?null:e.data;default:return null}}var Ux={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ux[t.type]:e==="textarea"}function Qm(t,e,n,i){Cm(i),e=Ka(e,"onChange"),0<e.length&&(n=new Yd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Qs=null,uo=null;function Ox(t){cg(t,0)}function Sl(t){var e=Xr(t);if(Em(e))return t}function Fx(t,e){if(t==="change")return e}var Jm=!1;if(li){var Ql;if(li){var Jl="oninput"in document;if(!Jl){var ph=document.createElement("div");ph.setAttribute("oninput","return;"),Jl=typeof ph.oninput=="function"}Ql=Jl}else Ql=!1;Jm=Ql&&(!document.documentMode||9<document.documentMode)}function mh(){Qs&&(Qs.detachEvent("onpropertychange",eg),uo=Qs=null)}function eg(t){if(t.propertyName==="value"&&Sl(uo)){var e=[];Qm(e,uo,t,Hd(t)),Im(Ox,e)}}function kx(t,e,n){t==="focusin"?(mh(),Qs=e,uo=n,Qs.attachEvent("onpropertychange",eg)):t==="focusout"&&mh()}function zx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sl(uo)}function Bx(t,e){if(t==="click")return Sl(e)}function Hx(t,e){if(t==="input"||t==="change")return Sl(e)}function Vx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kn=typeof Object.is=="function"?Object.is:Vx;function fo(t,e){if(kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!$c.call(e,r)||!kn(t[r],e[r]))return!1}return!0}function gh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vh(t,e){var n=gh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gh(n)}}function tg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?tg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ng(){for(var t=window,e=Ga();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ga(t.document)}return e}function Kd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Gx(t){var e=ng(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&tg(n.ownerDocument.documentElement,n)){if(i!==null&&Kd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=vh(n,s);var o=vh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jx=li&&"documentMode"in document&&11>=document.documentMode,jr=null,hu=null,Js=null,pu=!1;function xh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pu||jr==null||jr!==Ga(i)||(i=jr,"selectionStart"in i&&Kd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Js&&fo(Js,i)||(Js=i,i=Ka(hu,"onSelect"),0<i.length&&(e=new Yd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=jr)))}function Go(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Wr={animationend:Go("Animation","AnimationEnd"),animationiteration:Go("Animation","AnimationIteration"),animationstart:Go("Animation","AnimationStart"),transitionend:Go("Transition","TransitionEnd")},ec={},ig={};li&&(ig=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function El(t){if(ec[t])return ec[t];if(!Wr[t])return t;var e=Wr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ig)return ec[t]=e[n];return t}var rg=El("animationend"),sg=El("animationiteration"),og=El("animationstart"),ag=El("transitionend"),lg=new Map,_h="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wi(t,e){lg.set(t,e),Mr(e,[t])}for(var tc=0;tc<_h.length;tc++){var nc=_h[tc],Wx=nc.toLowerCase(),Xx=nc[0].toUpperCase()+nc.slice(1);Wi(Wx,"on"+Xx)}Wi(rg,"onAnimationEnd");Wi(sg,"onAnimationIteration");Wi(og,"onAnimationStart");Wi("dblclick","onDoubleClick");Wi("focusin","onFocus");Wi("focusout","onBlur");Wi(ag,"onTransitionEnd");cs("onMouseEnter",["mouseout","mouseover"]);cs("onMouseLeave",["mouseout","mouseover"]);cs("onPointerEnter",["pointerout","pointerover"]);cs("onPointerLeave",["pointerout","pointerover"]);Mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ys="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ys));function yh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Wv(i,e,void 0,t),t.currentTarget=null}function cg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;yh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;yh(r,a,c),s=l}}}if(Wa)throw t=cu,Wa=!1,cu=null,t}function st(t,e){var n=e[_u];n===void 0&&(n=e[_u]=new Set);var i=t+"__bubble";n.has(i)||(ug(e,t,2,!1),n.add(i))}function ic(t,e,n){var i=0;e&&(i|=4),ug(n,t,i,e)}var jo="_reactListening"+Math.random().toString(36).slice(2);function ho(t){if(!t[jo]){t[jo]=!0,vm.forEach(function(n){n!=="selectionchange"&&(Yx.has(n)||ic(n,!1,t),ic(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[jo]||(e[jo]=!0,ic("selectionchange",!1,e))}}function ug(t,e,n,i){switch(Ym(e)){case 1:var r=ax;break;case 4:r=lx;break;default:r=Wd}n=r.bind(null,e,n,t),r=void 0,!lu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function rc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=lr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Im(function(){var c=s,d=Hd(n),f=[];e:{var h=lg.get(t);if(h!==void 0){var g=Yd,_=t;switch(t){case"keypress":if(Ra(n)===0)break e;case"keydown":case"keyup":g=Mx;break;case"focusin":_="focus",g=Zl;break;case"focusout":_="blur",g=Zl;break;case"beforeblur":case"afterblur":g=Zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=lh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=dx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Ax;break;case rg:case sg:case og:g=px;break;case ag:g=Rx;break;case"scroll":g=cx;break;case"wheel":g=Nx;break;case"copy":case"cut":case"paste":g=gx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=uh}var S=(e&4)!==0,p=!S&&t==="scroll",u=S?h!==null?h+"Capture":null:h;S=[];for(var x=c,v;x!==null;){v=x;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,u!==null&&(E=oo(x,u),E!=null&&S.push(po(x,E,v)))),p)break;x=x.return}0<S.length&&(h=new g(h,_,null,n,d),f.push({event:h,listeners:S}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==ou&&(_=n.relatedTarget||n.fromElement)&&(lr(_)||_[ci]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=c,_=_?lr(_):null,_!==null&&(p=wr(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=c),g!==_)){if(S=lh,E="onMouseLeave",u="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(S=uh,E="onPointerLeave",u="onPointerEnter",x="pointer"),p=g==null?h:Xr(g),v=_==null?h:Xr(_),h=new S(E,x+"leave",g,n,d),h.target=p,h.relatedTarget=v,E=null,lr(d)===c&&(S=new S(u,x+"enter",_,n,d),S.target=v,S.relatedTarget=p,E=S),p=E,g&&_)t:{for(S=g,u=_,x=0,v=S;v;v=Ar(v))x++;for(v=0,E=u;E;E=Ar(E))v++;for(;0<x-v;)S=Ar(S),x--;for(;0<v-x;)u=Ar(u),v--;for(;x--;){if(S===u||u!==null&&S===u.alternate)break t;S=Ar(S),u=Ar(u)}S=null}else S=null;g!==null&&Sh(f,h,g,S,!1),_!==null&&p!==null&&Sh(f,p,_,S,!0)}}e:{if(h=c?Xr(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var C=Fx;else if(hh(h))if(Jm)C=Hx;else{C=zx;var b=kx}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=Bx);if(C&&(C=C(t,c))){Qm(f,C,n,d);break e}b&&b(t,h,c),t==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&tu(h,"number",h.value)}switch(b=c?Xr(c):window,t){case"focusin":(hh(b)||b.contentEditable==="true")&&(jr=b,hu=c,Js=null);break;case"focusout":Js=hu=jr=null;break;case"mousedown":pu=!0;break;case"contextmenu":case"mouseup":case"dragend":pu=!1,xh(f,n,d);break;case"selectionchange":if(jx)break;case"keydown":case"keyup":xh(f,n,d)}var A;if(qd)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Gr?Km(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(qm&&n.locale!=="ko"&&(Gr||P!=="onCompositionStart"?P==="onCompositionEnd"&&Gr&&(A=$m()):(Ci=d,Xd="value"in Ci?Ci.value:Ci.textContent,Gr=!0)),b=Ka(c,P),0<b.length&&(P=new ch(P,t,null,n,d),f.push({event:P,listeners:b}),A?P.data=A:(A=Zm(n),A!==null&&(P.data=A)))),(A=Lx?Ix(t,n):Dx(t,n))&&(c=Ka(c,"onBeforeInput"),0<c.length&&(d=new ch("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=A))}cg(f,e)})}function po(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ka(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=oo(t,n),s!=null&&i.unshift(po(t,s,r)),s=oo(t,e),s!=null&&i.push(po(t,s,r))),t=t.return}return i}function Ar(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Sh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=oo(n,s),l!=null&&o.unshift(po(n,l,a))):r||(l=oo(n,s),l!=null&&o.push(po(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var $x=/\r\n?/g,qx=/\u0000|\uFFFD/g;function Eh(t){return(typeof t=="string"?t:""+t).replace($x,`
`).replace(qx,"")}function Wo(t,e,n){if(e=Eh(e),Eh(t)!==e&&n)throw Error(ne(425))}function Za(){}var mu=null,gu=null;function vu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xu=typeof setTimeout=="function"?setTimeout:void 0,Kx=typeof clearTimeout=="function"?clearTimeout:void 0,Mh=typeof Promise=="function"?Promise:void 0,Zx=typeof queueMicrotask=="function"?queueMicrotask:typeof Mh<"u"?function(t){return Mh.resolve(null).then(t).catch(Qx)}:xu;function Qx(t){setTimeout(function(){throw t})}function sc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),co(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);co(e)}function Di(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function wh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ws=Math.random().toString(36).slice(2),Gn="__reactFiber$"+ws,mo="__reactProps$"+ws,ci="__reactContainer$"+ws,_u="__reactEvents$"+ws,Jx="__reactListeners$"+ws,e_="__reactHandles$"+ws;function lr(t){var e=t[Gn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ci]||n[Gn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=wh(t);t!==null;){if(n=t[Gn])return n;t=wh(t)}return e}t=n,n=t.parentNode}return null}function Ao(t){return t=t[Gn]||t[ci],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Xr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function Ml(t){return t[mo]||null}var yu=[],Yr=-1;function Xi(t){return{current:t}}function at(t){0>Yr||(t.current=yu[Yr],yu[Yr]=null,Yr--)}function nt(t,e){Yr++,yu[Yr]=t.current,t.current=e}var Vi={},zt=Xi(Vi),Zt=Xi(!1),gr=Vi;function us(t,e){var n=t.type.contextTypes;if(!n)return Vi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Qt(t){return t=t.childContextTypes,t!=null}function Qa(){at(Zt),at(zt)}function Th(t,e,n){if(zt.current!==Vi)throw Error(ne(168));nt(zt,e),nt(Zt,n)}function dg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,kv(t)||"Unknown",r));return ht({},n,i)}function Ja(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vi,gr=zt.current,nt(zt,t),nt(Zt,Zt.current),!0}function Ah(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=dg(t,e,gr),i.__reactInternalMemoizedMergedChildContext=t,at(Zt),at(zt),nt(zt,t)):at(Zt),nt(Zt,n)}var ei=null,wl=!1,oc=!1;function fg(t){ei===null?ei=[t]:ei.push(t)}function t_(t){wl=!0,fg(t)}function Yi(){if(!oc&&ei!==null){oc=!0;var t=0,e=Qe;try{var n=ei;for(Qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ei=null,wl=!1}catch(r){throw ei!==null&&(ei=ei.slice(t+1)),Fm(Vd,Yi),r}finally{Qe=e,oc=!1}}return null}var $r=[],qr=0,el=null,tl=0,gn=[],vn=0,vr=null,ni=1,ii="";function nr(t,e){$r[qr++]=tl,$r[qr++]=el,el=t,tl=e}function hg(t,e,n){gn[vn++]=ni,gn[vn++]=ii,gn[vn++]=vr,vr=t;var i=ni;t=ii;var r=32-Un(i)-1;i&=~(1<<r),n+=1;var s=32-Un(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ni=1<<32-Un(e)+r|n<<r|i,ii=s+t}else ni=1<<s|n<<r|i,ii=t}function Zd(t){t.return!==null&&(nr(t,1),hg(t,1,0))}function Qd(t){for(;t===el;)el=$r[--qr],$r[qr]=null,tl=$r[--qr],$r[qr]=null;for(;t===vr;)vr=gn[--vn],gn[vn]=null,ii=gn[--vn],gn[vn]=null,ni=gn[--vn],gn[vn]=null}var un=null,cn=null,ct=!1,Pn=null;function pg(t,e){var n=_n(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function bh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,un=t,cn=Di(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,un=t,cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=vr!==null?{id:ni,overflow:ii}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=_n(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,un=t,cn=null,!0):!1;default:return!1}}function Su(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Eu(t){if(ct){var e=cn;if(e){var n=e;if(!bh(t,e)){if(Su(t))throw Error(ne(418));e=Di(n.nextSibling);var i=un;e&&bh(t,e)?pg(i,n):(t.flags=t.flags&-4097|2,ct=!1,un=t)}}else{if(Su(t))throw Error(ne(418));t.flags=t.flags&-4097|2,ct=!1,un=t}}}function Rh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;un=t}function Xo(t){if(t!==un)return!1;if(!ct)return Rh(t),ct=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!vu(t.type,t.memoizedProps)),e&&(e=cn)){if(Su(t))throw mg(),Error(ne(418));for(;e;)pg(t,e),e=Di(e.nextSibling)}if(Rh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){cn=Di(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}cn=null}}else cn=un?Di(t.stateNode.nextSibling):null;return!0}function mg(){for(var t=cn;t;)t=Di(t.nextSibling)}function ds(){cn=un=null,ct=!1}function Jd(t){Pn===null?Pn=[t]:Pn.push(t)}var n_=pi.ReactCurrentBatchConfig;function Is(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function Yo(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ch(t){var e=t._init;return e(t._payload)}function gg(t){function e(u,x){if(t){var v=u.deletions;v===null?(u.deletions=[x],u.flags|=16):v.push(x)}}function n(u,x){if(!t)return null;for(;x!==null;)e(u,x),x=x.sibling;return null}function i(u,x){for(u=new Map;x!==null;)x.key!==null?u.set(x.key,x):u.set(x.index,x),x=x.sibling;return u}function r(u,x){return u=ki(u,x),u.index=0,u.sibling=null,u}function s(u,x,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<x?(u.flags|=2,x):v):(u.flags|=2,x)):(u.flags|=1048576,x)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,x,v,E){return x===null||x.tag!==6?(x=hc(v,u.mode,E),x.return=u,x):(x=r(x,v),x.return=u,x)}function l(u,x,v,E){var C=v.type;return C===Vr?d(u,x,v.props.children,E,v.key):x!==null&&(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===wi&&Ch(C)===x.type)?(E=r(x,v.props),E.ref=Is(u,x,v),E.return=u,E):(E=Ua(v.type,v.key,v.props,null,u.mode,E),E.ref=Is(u,x,v),E.return=u,E)}function c(u,x,v,E){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=pc(v,u.mode,E),x.return=u,x):(x=r(x,v.children||[]),x.return=u,x)}function d(u,x,v,E,C){return x===null||x.tag!==7?(x=pr(v,u.mode,E,C),x.return=u,x):(x=r(x,v),x.return=u,x)}function f(u,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=hc(""+x,u.mode,v),x.return=u,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Oo:return v=Ua(x.type,x.key,x.props,null,u.mode,v),v.ref=Is(u,null,x),v.return=u,v;case Hr:return x=pc(x,u.mode,v),x.return=u,x;case wi:var E=x._init;return f(u,E(x._payload),v)}if(Ws(x)||Rs(x))return x=pr(x,u.mode,v,null),x.return=u,x;Yo(u,x)}return null}function h(u,x,v,E){var C=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(u,x,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Oo:return v.key===C?l(u,x,v,E):null;case Hr:return v.key===C?c(u,x,v,E):null;case wi:return C=v._init,h(u,x,C(v._payload),E)}if(Ws(v)||Rs(v))return C!==null?null:d(u,x,v,E,null);Yo(u,v)}return null}function g(u,x,v,E,C){if(typeof E=="string"&&E!==""||typeof E=="number")return u=u.get(v)||null,a(x,u,""+E,C);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Oo:return u=u.get(E.key===null?v:E.key)||null,l(x,u,E,C);case Hr:return u=u.get(E.key===null?v:E.key)||null,c(x,u,E,C);case wi:var b=E._init;return g(u,x,v,b(E._payload),C)}if(Ws(E)||Rs(E))return u=u.get(v)||null,d(x,u,E,C,null);Yo(x,E)}return null}function _(u,x,v,E){for(var C=null,b=null,A=x,P=x=0,K=null;A!==null&&P<v.length;P++){A.index>P?(K=A,A=null):K=A.sibling;var y=h(u,A,v[P],E);if(y===null){A===null&&(A=K);break}t&&A&&y.alternate===null&&e(u,A),x=s(y,x,P),b===null?C=y:b.sibling=y,b=y,A=K}if(P===v.length)return n(u,A),ct&&nr(u,P),C;if(A===null){for(;P<v.length;P++)A=f(u,v[P],E),A!==null&&(x=s(A,x,P),b===null?C=A:b.sibling=A,b=A);return ct&&nr(u,P),C}for(A=i(u,A);P<v.length;P++)K=g(A,u,P,v[P],E),K!==null&&(t&&K.alternate!==null&&A.delete(K.key===null?P:K.key),x=s(K,x,P),b===null?C=K:b.sibling=K,b=K);return t&&A.forEach(function(T){return e(u,T)}),ct&&nr(u,P),C}function S(u,x,v,E){var C=Rs(v);if(typeof C!="function")throw Error(ne(150));if(v=C.call(v),v==null)throw Error(ne(151));for(var b=C=null,A=x,P=x=0,K=null,y=v.next();A!==null&&!y.done;P++,y=v.next()){A.index>P?(K=A,A=null):K=A.sibling;var T=h(u,A,y.value,E);if(T===null){A===null&&(A=K);break}t&&A&&T.alternate===null&&e(u,A),x=s(T,x,P),b===null?C=T:b.sibling=T,b=T,A=K}if(y.done)return n(u,A),ct&&nr(u,P),C;if(A===null){for(;!y.done;P++,y=v.next())y=f(u,y.value,E),y!==null&&(x=s(y,x,P),b===null?C=y:b.sibling=y,b=y);return ct&&nr(u,P),C}for(A=i(u,A);!y.done;P++,y=v.next())y=g(A,u,P,y.value,E),y!==null&&(t&&y.alternate!==null&&A.delete(y.key===null?P:y.key),x=s(y,x,P),b===null?C=y:b.sibling=y,b=y);return t&&A.forEach(function(j){return e(u,j)}),ct&&nr(u,P),C}function p(u,x,v,E){if(typeof v=="object"&&v!==null&&v.type===Vr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Oo:e:{for(var C=v.key,b=x;b!==null;){if(b.key===C){if(C=v.type,C===Vr){if(b.tag===7){n(u,b.sibling),x=r(b,v.props.children),x.return=u,u=x;break e}}else if(b.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===wi&&Ch(C)===b.type){n(u,b.sibling),x=r(b,v.props),x.ref=Is(u,b,v),x.return=u,u=x;break e}n(u,b);break}else e(u,b);b=b.sibling}v.type===Vr?(x=pr(v.props.children,u.mode,E,v.key),x.return=u,u=x):(E=Ua(v.type,v.key,v.props,null,u.mode,E),E.ref=Is(u,x,v),E.return=u,u=E)}return o(u);case Hr:e:{for(b=v.key;x!==null;){if(x.key===b)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(u,x.sibling),x=r(x,v.children||[]),x.return=u,u=x;break e}else{n(u,x);break}else e(u,x);x=x.sibling}x=pc(v,u.mode,E),x.return=u,u=x}return o(u);case wi:return b=v._init,p(u,x,b(v._payload),E)}if(Ws(v))return _(u,x,v,E);if(Rs(v))return S(u,x,v,E);Yo(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(u,x.sibling),x=r(x,v),x.return=u,u=x):(n(u,x),x=hc(v,u.mode,E),x.return=u,u=x),o(u)):n(u,x)}return p}var fs=gg(!0),vg=gg(!1),nl=Xi(null),il=null,Kr=null,ef=null;function tf(){ef=Kr=il=null}function nf(t){var e=nl.current;at(nl),t._currentValue=e}function Mu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function rs(t,e){il=t,ef=Kr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Kt=!0),t.firstContext=null)}function En(t){var e=t._currentValue;if(ef!==t)if(t={context:t,memoizedValue:e,next:null},Kr===null){if(il===null)throw Error(ne(308));Kr=t,il.dependencies={lanes:0,firstContext:t}}else Kr=Kr.next=t;return e}var cr=null;function rf(t){cr===null?cr=[t]:cr.push(t)}function xg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,rf(e)):(n.next=r.next,r.next=n),e.interleaved=n,ui(t,i)}function ui(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ti=!1;function sf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _g(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ai(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ui(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ge&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ui(t,n)}return r=i.interleaved,r===null?(e.next=e,rf(i)):(e.next=r.next,r.next=e),i.interleaved=e,ui(t,n)}function Ca(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Gd(t,n)}}function Nh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function rl(t,e,n,i){var r=t.updateQueue;Ti=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=c=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,S=a;switch(h=e,g=n,S.tag){case 1:if(_=S.payload,typeof _=="function"){f=_.call(g,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=S.payload,h=typeof _=="function"?_.call(g,f,h):_,h==null)break e;f=ht({},f,h);break e;case 2:Ti=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=g,l=f):d=d.next=g,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);_r|=o,t.lanes=o,t.memoizedState=f}}function Ph(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var bo={},Wn=Xi(bo),go=Xi(bo),vo=Xi(bo);function ur(t){if(t===bo)throw Error(ne(174));return t}function of(t,e){switch(nt(vo,e),nt(go,t),nt(Wn,bo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:iu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=iu(e,t)}at(Wn),nt(Wn,e)}function hs(){at(Wn),at(go),at(vo)}function yg(t){ur(vo.current);var e=ur(Wn.current),n=iu(e,t.type);e!==n&&(nt(go,t),nt(Wn,n))}function af(t){go.current===t&&(at(Wn),at(go))}var ut=Xi(0);function sl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ac=[];function lf(){for(var t=0;t<ac.length;t++)ac[t]._workInProgressVersionPrimary=null;ac.length=0}var Na=pi.ReactCurrentDispatcher,lc=pi.ReactCurrentBatchConfig,xr=0,dt=null,Et=null,bt=null,ol=!1,eo=!1,xo=0,i_=0;function Dt(){throw Error(ne(321))}function cf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!kn(t[n],e[n]))return!1;return!0}function uf(t,e,n,i,r,s){if(xr=s,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Na.current=t===null||t.memoizedState===null?a_:l_,t=n(i,r),eo){s=0;do{if(eo=!1,xo=0,25<=s)throw Error(ne(301));s+=1,bt=Et=null,e.updateQueue=null,Na.current=c_,t=n(i,r)}while(eo)}if(Na.current=al,e=Et!==null&&Et.next!==null,xr=0,bt=Et=dt=null,ol=!1,e)throw Error(ne(300));return t}function df(){var t=xo!==0;return xo=0,t}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?dt.memoizedState=bt=t:bt=bt.next=t,bt}function Mn(){if(Et===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Et.next;var e=bt===null?dt.memoizedState:bt.next;if(e!==null)bt=e,Et=t;else{if(t===null)throw Error(ne(310));Et=t,t={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},bt===null?dt.memoizedState=bt=t:bt=bt.next=t}return bt}function _o(t,e){return typeof e=="function"?e(t):e}function cc(t){var e=Mn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Et,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((xr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,dt.lanes|=d,_r|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,kn(i,e.memoizedState)||(Kt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,dt.lanes|=s,_r|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function uc(t){var e=Mn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);kn(s,e.memoizedState)||(Kt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Sg(){}function Eg(t,e){var n=dt,i=Mn(),r=e(),s=!kn(i.memoizedState,r);if(s&&(i.memoizedState=r,Kt=!0),i=i.queue,ff(Tg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||bt!==null&&bt.memoizedState.tag&1){if(n.flags|=2048,yo(9,wg.bind(null,n,i,r,e),void 0,null),Rt===null)throw Error(ne(349));xr&30||Mg(n,e,r)}return r}function Mg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function wg(t,e,n,i){e.value=n,e.getSnapshot=i,Ag(e)&&bg(t)}function Tg(t,e,n){return n(function(){Ag(e)&&bg(t)})}function Ag(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!kn(t,n)}catch{return!0}}function bg(t){var e=ui(t,1);e!==null&&On(e,t,1,-1)}function Lh(t){var e=Bn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_o,lastRenderedState:t},e.queue=t,t=t.dispatch=o_.bind(null,dt,t),[e.memoizedState,t]}function yo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Rg(){return Mn().memoizedState}function Pa(t,e,n,i){var r=Bn();dt.flags|=t,r.memoizedState=yo(1|e,n,void 0,i===void 0?null:i)}function Tl(t,e,n,i){var r=Mn();i=i===void 0?null:i;var s=void 0;if(Et!==null){var o=Et.memoizedState;if(s=o.destroy,i!==null&&cf(i,o.deps)){r.memoizedState=yo(e,n,s,i);return}}dt.flags|=t,r.memoizedState=yo(1|e,n,s,i)}function Ih(t,e){return Pa(8390656,8,t,e)}function ff(t,e){return Tl(2048,8,t,e)}function Cg(t,e){return Tl(4,2,t,e)}function Ng(t,e){return Tl(4,4,t,e)}function Pg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Lg(t,e,n){return n=n!=null?n.concat([t]):null,Tl(4,4,Pg.bind(null,e,t),n)}function hf(){}function Ig(t,e){var n=Mn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&cf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Dg(t,e){var n=Mn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&cf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Ug(t,e,n){return xr&21?(kn(n,e)||(n=Bm(),dt.lanes|=n,_r|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Kt=!0),t.memoizedState=n)}function r_(t,e){var n=Qe;Qe=n!==0&&4>n?n:4,t(!0);var i=lc.transition;lc.transition={};try{t(!1),e()}finally{Qe=n,lc.transition=i}}function Og(){return Mn().memoizedState}function s_(t,e,n){var i=Fi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Fg(t))kg(e,n);else if(n=xg(t,e,n,i),n!==null){var r=Vt();On(n,t,i,r),zg(n,e,i)}}function o_(t,e,n){var i=Fi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fg(t))kg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,kn(a,o)){var l=e.interleaved;l===null?(r.next=r,rf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=xg(t,e,r,i),n!==null&&(r=Vt(),On(n,t,i,r),zg(n,e,i))}}function Fg(t){var e=t.alternate;return t===dt||e!==null&&e===dt}function kg(t,e){eo=ol=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function zg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Gd(t,n)}}var al={readContext:En,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},a_={readContext:En,useCallback:function(t,e){return Bn().memoizedState=[t,e===void 0?null:e],t},useContext:En,useEffect:Ih,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Pa(4194308,4,Pg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Pa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Pa(4,2,t,e)},useMemo:function(t,e){var n=Bn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Bn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=s_.bind(null,dt,t),[i.memoizedState,t]},useRef:function(t){var e=Bn();return t={current:t},e.memoizedState=t},useState:Lh,useDebugValue:hf,useDeferredValue:function(t){return Bn().memoizedState=t},useTransition:function(){var t=Lh(!1),e=t[0];return t=r_.bind(null,t[1]),Bn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=dt,r=Bn();if(ct){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Rt===null)throw Error(ne(349));xr&30||Mg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Ih(Tg.bind(null,i,s,t),[t]),i.flags|=2048,yo(9,wg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Bn(),e=Rt.identifierPrefix;if(ct){var n=ii,i=ni;n=(i&~(1<<32-Un(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=xo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=i_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},l_={readContext:En,useCallback:Ig,useContext:En,useEffect:ff,useImperativeHandle:Lg,useInsertionEffect:Cg,useLayoutEffect:Ng,useMemo:Dg,useReducer:cc,useRef:Rg,useState:function(){return cc(_o)},useDebugValue:hf,useDeferredValue:function(t){var e=Mn();return Ug(e,Et.memoizedState,t)},useTransition:function(){var t=cc(_o)[0],e=Mn().memoizedState;return[t,e]},useMutableSource:Sg,useSyncExternalStore:Eg,useId:Og,unstable_isNewReconciler:!1},c_={readContext:En,useCallback:Ig,useContext:En,useEffect:ff,useImperativeHandle:Lg,useInsertionEffect:Cg,useLayoutEffect:Ng,useMemo:Dg,useReducer:uc,useRef:Rg,useState:function(){return uc(_o)},useDebugValue:hf,useDeferredValue:function(t){var e=Mn();return Et===null?e.memoizedState=t:Ug(e,Et.memoizedState,t)},useTransition:function(){var t=uc(_o)[0],e=Mn().memoizedState;return[t,e]},useMutableSource:Sg,useSyncExternalStore:Eg,useId:Og,unstable_isNewReconciler:!1};function Cn(t,e){if(t&&t.defaultProps){e=ht({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function wu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ht({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Al={isMounted:function(t){return(t=t._reactInternals)?wr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Vt(),r=Fi(t),s=ai(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ui(t,s,r),e!==null&&(On(e,t,r,i),Ca(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Vt(),r=Fi(t),s=ai(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ui(t,s,r),e!==null&&(On(e,t,r,i),Ca(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Vt(),i=Fi(t),r=ai(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ui(t,r,i),e!==null&&(On(e,t,i,n),Ca(e,t,i))}};function Dh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!fo(n,i)||!fo(r,s):!0}function Bg(t,e,n){var i=!1,r=Vi,s=e.contextType;return typeof s=="object"&&s!==null?s=En(s):(r=Qt(e)?gr:zt.current,i=e.contextTypes,s=(i=i!=null)?us(t,r):Vi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Al,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Uh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Al.enqueueReplaceState(e,e.state,null)}function Tu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},sf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=En(s):(s=Qt(e)?gr:zt.current,r.context=us(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(wu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Al.enqueueReplaceState(r,r.state,null),rl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ps(t,e){try{var n="",i=e;do n+=Fv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function dc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Au(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var u_=typeof WeakMap=="function"?WeakMap:Map;function Hg(t,e,n){n=ai(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){cl||(cl=!0,Ou=i),Au(t,e)},n}function Vg(t,e,n){n=ai(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Au(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Au(t,e),typeof i!="function"&&(Oi===null?Oi=new Set([this]):Oi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Oh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new u_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=w_.bind(null,t,e,n),e.then(t,t))}function Fh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function kh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ai(-1,1),e.tag=2,Ui(n,e,1))),n.lanes|=1),t)}var d_=pi.ReactCurrentOwner,Kt=!1;function Ht(t,e,n,i){e.child=t===null?vg(e,null,n,i):fs(e,t.child,n,i)}function zh(t,e,n,i,r){n=n.render;var s=e.ref;return rs(e,r),i=uf(t,e,n,i,s,r),n=df(),t!==null&&!Kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,di(t,e,r)):(ct&&n&&Zd(e),e.flags|=1,Ht(t,e,i,r),e.child)}function Bh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Sf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Gg(t,e,s,i,r)):(t=Ua(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:fo,n(o,i)&&t.ref===e.ref)return di(t,e,r)}return e.flags|=1,t=ki(s,i),t.ref=e.ref,t.return=e,e.child=t}function Gg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(fo(s,i)&&t.ref===e.ref)if(Kt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Kt=!0);else return e.lanes=t.lanes,di(t,e,r)}return bu(t,e,n,i,r)}function jg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(Qr,ln),ln|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,nt(Qr,ln),ln|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,nt(Qr,ln),ln|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,nt(Qr,ln),ln|=i;return Ht(t,e,r,n),e.child}function Wg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function bu(t,e,n,i,r){var s=Qt(n)?gr:zt.current;return s=us(e,s),rs(e,r),n=uf(t,e,n,i,s,r),i=df(),t!==null&&!Kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,di(t,e,r)):(ct&&i&&Zd(e),e.flags|=1,Ht(t,e,n,r),e.child)}function Hh(t,e,n,i,r){if(Qt(n)){var s=!0;Ja(e)}else s=!1;if(rs(e,r),e.stateNode===null)La(t,e),Bg(e,n,i),Tu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=En(c):(c=Qt(n)?gr:zt.current,c=us(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Uh(e,o,i,c),Ti=!1;var h=e.memoizedState;o.state=h,rl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Zt.current||Ti?(typeof d=="function"&&(wu(e,n,d,i),l=e.memoizedState),(a=Ti||Dh(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,_g(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Cn(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=En(l):(l=Qt(n)?gr:zt.current,l=us(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Uh(e,o,i,l),Ti=!1,h=e.memoizedState,o.state=h,rl(e,i,o,r);var _=e.memoizedState;a!==f||h!==_||Zt.current||Ti?(typeof g=="function"&&(wu(e,n,g,i),_=e.memoizedState),(c=Ti||Dh(e,n,c,i,h,_,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Ru(t,e,n,i,s,r)}function Ru(t,e,n,i,r,s){Wg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Ah(e,n,!1),di(t,e,s);i=e.stateNode,d_.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=fs(e,t.child,null,s),e.child=fs(e,null,a,s)):Ht(t,e,a,s),e.memoizedState=i.state,r&&Ah(e,n,!0),e.child}function Xg(t){var e=t.stateNode;e.pendingContext?Th(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Th(t,e.context,!1),of(t,e.containerInfo)}function Vh(t,e,n,i,r){return ds(),Jd(r),e.flags|=256,Ht(t,e,n,i),e.child}var Cu={dehydrated:null,treeContext:null,retryLane:0};function Nu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Yg(t,e,n){var i=e.pendingProps,r=ut.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),nt(ut,r&1),t===null)return Eu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Cl(o,i,0,null),t=pr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Nu(n),e.memoizedState=Cu,t):pf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return f_(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ki(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ki(a,s):(s=pr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Nu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Cu,i}return s=t.child,t=s.sibling,i=ki(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function pf(t,e){return e=Cl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function $o(t,e,n,i){return i!==null&&Jd(i),fs(e,t.child,null,n),t=pf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function f_(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=dc(Error(ne(422))),$o(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Cl({mode:"visible",children:i.children},r,0,null),s=pr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&fs(e,t.child,null,o),e.child.memoizedState=Nu(o),e.memoizedState=Cu,s);if(!(e.mode&1))return $o(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=dc(s,i,void 0),$o(t,e,o,i)}if(a=(o&t.childLanes)!==0,Kt||a){if(i=Rt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ui(t,r),On(i,t,r,-1))}return yf(),i=dc(Error(ne(421))),$o(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=T_.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,cn=Di(r.nextSibling),un=e,ct=!0,Pn=null,t!==null&&(gn[vn++]=ni,gn[vn++]=ii,gn[vn++]=vr,ni=t.id,ii=t.overflow,vr=e),e=pf(e,i.children),e.flags|=4096,e)}function Gh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Mu(t.return,e,n)}function fc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function $g(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Ht(t,e,i.children,n),i=ut.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gh(t,n,e);else if(t.tag===19)Gh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(nt(ut,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&sl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),fc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&sl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}fc(e,!0,n,null,s);break;case"together":fc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function La(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function di(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),_r|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=ki(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ki(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function h_(t,e,n){switch(e.tag){case 3:Xg(e),ds();break;case 5:yg(e);break;case 1:Qt(e.type)&&Ja(e);break;case 4:of(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;nt(nl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(nt(ut,ut.current&1),e.flags|=128,null):n&e.child.childLanes?Yg(t,e,n):(nt(ut,ut.current&1),t=di(t,e,n),t!==null?t.sibling:null);nt(ut,ut.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return $g(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),nt(ut,ut.current),i)break;return null;case 22:case 23:return e.lanes=0,jg(t,e,n)}return di(t,e,n)}var qg,Pu,Kg,Zg;qg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pu=function(){};Kg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ur(Wn.current);var s=null;switch(n){case"input":r=Jc(t,r),i=Jc(t,i),s=[];break;case"select":r=ht({},r,{value:void 0}),i=ht({},i,{value:void 0}),s=[];break;case"textarea":r=nu(t,r),i=nu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Za)}ru(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ro.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ro.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&st("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Zg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ds(t,e){if(!ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function p_(t,e,n){var i=e.pendingProps;switch(Qd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ut(e),null;case 1:return Qt(e.type)&&Qa(),Ut(e),null;case 3:return i=e.stateNode,hs(),at(Zt),at(zt),lf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Xo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Pn!==null&&(zu(Pn),Pn=null))),Pu(t,e),Ut(e),null;case 5:af(e);var r=ur(vo.current);if(n=e.type,t!==null&&e.stateNode!=null)Kg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Ut(e),null}if(t=ur(Wn.current),Xo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Gn]=e,i[mo]=s,t=(e.mode&1)!==0,n){case"dialog":st("cancel",i),st("close",i);break;case"iframe":case"object":case"embed":st("load",i);break;case"video":case"audio":for(r=0;r<Ys.length;r++)st(Ys[r],i);break;case"source":st("error",i);break;case"img":case"image":case"link":st("error",i),st("load",i);break;case"details":st("toggle",i);break;case"input":Qf(i,s),st("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},st("invalid",i);break;case"textarea":eh(i,s),st("invalid",i)}ru(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Wo(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Wo(i.textContent,a,t),r=["children",""+a]):ro.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&st("scroll",i)}switch(n){case"input":Fo(i),Jf(i,s,!0);break;case"textarea":Fo(i),th(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Za)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Tm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Gn]=e,t[mo]=i,qg(t,e,!1,!1),e.stateNode=t;e:{switch(o=su(n,i),n){case"dialog":st("cancel",t),st("close",t),r=i;break;case"iframe":case"object":case"embed":st("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ys.length;r++)st(Ys[r],t);r=i;break;case"source":st("error",t),r=i;break;case"img":case"image":case"link":st("error",t),st("load",t),r=i;break;case"details":st("toggle",t),r=i;break;case"input":Qf(t,i),r=Jc(t,i),st("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ht({},i,{value:void 0}),st("invalid",t);break;case"textarea":eh(t,i),r=nu(t,i),st("invalid",t);break;default:r=i}ru(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Rm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Am(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&so(t,l):typeof l=="number"&&so(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ro.hasOwnProperty(s)?l!=null&&s==="onScroll"&&st("scroll",t):l!=null&&Fd(t,s,l,o))}switch(n){case"input":Fo(t),Jf(t,i,!1);break;case"textarea":Fo(t),th(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Hi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?es(t,!!i.multiple,s,!1):i.defaultValue!=null&&es(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Za)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ut(e),null;case 6:if(t&&e.stateNode!=null)Zg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=ur(vo.current),ur(Wn.current),Xo(e)){if(i=e.stateNode,n=e.memoizedProps,i[Gn]=e,(s=i.nodeValue!==n)&&(t=un,t!==null))switch(t.tag){case 3:Wo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Wo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Gn]=e,e.stateNode=i}return Ut(e),null;case 13:if(at(ut),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ct&&cn!==null&&e.mode&1&&!(e.flags&128))mg(),ds(),e.flags|=98560,s=!1;else if(s=Xo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[Gn]=e}else ds(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ut(e),s=!1}else Pn!==null&&(zu(Pn),Pn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ut.current&1?Mt===0&&(Mt=3):yf())),e.updateQueue!==null&&(e.flags|=4),Ut(e),null);case 4:return hs(),Pu(t,e),t===null&&ho(e.stateNode.containerInfo),Ut(e),null;case 10:return nf(e.type._context),Ut(e),null;case 17:return Qt(e.type)&&Qa(),Ut(e),null;case 19:if(at(ut),s=e.memoizedState,s===null)return Ut(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ds(s,!1);else{if(Mt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=sl(t),o!==null){for(e.flags|=128,Ds(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return nt(ut,ut.current&1|2),e.child}t=t.sibling}s.tail!==null&&xt()>ms&&(e.flags|=128,i=!0,Ds(s,!1),e.lanes=4194304)}else{if(!i)if(t=sl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ds(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ct)return Ut(e),null}else 2*xt()-s.renderingStartTime>ms&&n!==1073741824&&(e.flags|=128,i=!0,Ds(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xt(),e.sibling=null,n=ut.current,nt(ut,i?n&1|2:n&1),e):(Ut(e),null);case 22:case 23:return _f(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?ln&1073741824&&(Ut(e),e.subtreeFlags&6&&(e.flags|=8192)):Ut(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function m_(t,e){switch(Qd(e),e.tag){case 1:return Qt(e.type)&&Qa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return hs(),at(Zt),at(zt),lf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return af(e),null;case 13:if(at(ut),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));ds()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return at(ut),null;case 4:return hs(),null;case 10:return nf(e.type._context),null;case 22:case 23:return _f(),null;case 24:return null;default:return null}}var qo=!1,kt=!1,g_=typeof WeakSet=="function"?WeakSet:Set,me=null;function Zr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){mt(t,e,i)}else n.current=null}function Lu(t,e,n){try{n()}catch(i){mt(t,e,i)}}var jh=!1;function v_(t,e){if(mu=$a,t=ng(),Kd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var g;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)h=f,f=g;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++d===i&&(l=o),(g=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(gu={focusedElem:t,selectionRange:n},$a=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var S=_.memoizedProps,p=_.memoizedState,u=e.stateNode,x=u.getSnapshotBeforeUpdate(e.elementType===e.type?S:Cn(e.type,S),p);u.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(E){mt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return _=jh,jh=!1,_}function to(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Lu(e,n,s)}r=r.next}while(r!==i)}}function bl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Iu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Qg(t){var e=t.alternate;e!==null&&(t.alternate=null,Qg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Gn],delete e[mo],delete e[_u],delete e[Jx],delete e[e_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Jg(t){return t.tag===5||t.tag===3||t.tag===4}function Wh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Jg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Du(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Za));else if(i!==4&&(t=t.child,t!==null))for(Du(t,e,n),t=t.sibling;t!==null;)Du(t,e,n),t=t.sibling}function Uu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Uu(t,e,n),t=t.sibling;t!==null;)Uu(t,e,n),t=t.sibling}var Nt=null,Nn=!1;function vi(t,e,n){for(n=n.child;n!==null;)e0(t,e,n),n=n.sibling}function e0(t,e,n){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(_l,n)}catch{}switch(n.tag){case 5:kt||Zr(n,e);case 6:var i=Nt,r=Nn;Nt=null,vi(t,e,n),Nt=i,Nn=r,Nt!==null&&(Nn?(t=Nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(Nn?(t=Nt,n=n.stateNode,t.nodeType===8?sc(t.parentNode,n):t.nodeType===1&&sc(t,n),co(t)):sc(Nt,n.stateNode));break;case 4:i=Nt,r=Nn,Nt=n.stateNode.containerInfo,Nn=!0,vi(t,e,n),Nt=i,Nn=r;break;case 0:case 11:case 14:case 15:if(!kt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Lu(n,e,o),r=r.next}while(r!==i)}vi(t,e,n);break;case 1:if(!kt&&(Zr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){mt(n,e,a)}vi(t,e,n);break;case 21:vi(t,e,n);break;case 22:n.mode&1?(kt=(i=kt)||n.memoizedState!==null,vi(t,e,n),kt=i):vi(t,e,n);break;default:vi(t,e,n)}}function Xh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new g_),e.forEach(function(i){var r=A_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Tn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Nt=a.stateNode,Nn=!1;break e;case 3:Nt=a.stateNode.containerInfo,Nn=!0;break e;case 4:Nt=a.stateNode.containerInfo,Nn=!0;break e}a=a.return}if(Nt===null)throw Error(ne(160));e0(s,o,r),Nt=null,Nn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)t0(e,t),e=e.sibling}function t0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Tn(e,t),zn(t),i&4){try{to(3,t,t.return),bl(3,t)}catch(S){mt(t,t.return,S)}try{to(5,t,t.return)}catch(S){mt(t,t.return,S)}}break;case 1:Tn(e,t),zn(t),i&512&&n!==null&&Zr(n,n.return);break;case 5:if(Tn(e,t),zn(t),i&512&&n!==null&&Zr(n,n.return),t.flags&32){var r=t.stateNode;try{so(r,"")}catch(S){mt(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Mm(r,s),su(a,o);var c=su(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?Rm(r,f):d==="dangerouslySetInnerHTML"?Am(r,f):d==="children"?so(r,f):Fd(r,d,f,c)}switch(a){case"input":eu(r,s);break;case"textarea":wm(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?es(r,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?es(r,!!s.multiple,s.defaultValue,!0):es(r,!!s.multiple,s.multiple?[]:"",!1))}r[mo]=s}catch(S){mt(t,t.return,S)}}break;case 6:if(Tn(e,t),zn(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){mt(t,t.return,S)}}break;case 3:if(Tn(e,t),zn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{co(e.containerInfo)}catch(S){mt(t,t.return,S)}break;case 4:Tn(e,t),zn(t);break;case 13:Tn(e,t),zn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(vf=xt())),i&4&&Xh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(kt=(c=kt)||d,Tn(e,t),kt=c):Tn(e,t),zn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(me=t,d=t.child;d!==null;){for(f=me=d;me!==null;){switch(h=me,g=h.child,h.tag){case 0:case 11:case 14:case 15:to(4,h,h.return);break;case 1:Zr(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(S){mt(i,n,S)}}break;case 5:Zr(h,h.return);break;case 22:if(h.memoizedState!==null){$h(f);continue}}g!==null?(g.return=h,me=g):$h(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=bm("display",o))}catch(S){mt(t,t.return,S)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(S){mt(t,t.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Tn(e,t),zn(t),i&4&&Xh(t);break;case 21:break;default:Tn(e,t),zn(t)}}function zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Jg(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(so(r,""),i.flags&=-33);var s=Wh(t);Uu(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Wh(t);Du(t,a,o);break;default:throw Error(ne(161))}}catch(l){mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function x_(t,e,n){me=t,n0(t)}function n0(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||qo;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||kt;a=qo;var c=kt;if(qo=o,(kt=l)&&!c)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?qh(r):l!==null?(l.return=o,me=l):qh(r);for(;s!==null;)me=s,n0(s),s=s.sibling;me=r,qo=a,kt=c}Yh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):Yh(t)}}function Yh(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:kt||bl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!kt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Cn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ph(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ph(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&co(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}kt||e.flags&512&&Iu(e)}catch(h){mt(e,e.return,h)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function $h(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function qh(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{bl(4,e)}catch(l){mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){mt(e,r,l)}}var s=e.return;try{Iu(e)}catch(l){mt(e,s,l)}break;case 5:var o=e.return;try{Iu(e)}catch(l){mt(e,o,l)}}}catch(l){mt(e,e.return,l)}if(e===t){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var __=Math.ceil,ll=pi.ReactCurrentDispatcher,mf=pi.ReactCurrentOwner,Sn=pi.ReactCurrentBatchConfig,Ge=0,Rt=null,St=null,Pt=0,ln=0,Qr=Xi(0),Mt=0,So=null,_r=0,Rl=0,gf=0,no=null,$t=null,vf=0,ms=1/0,Jn=null,cl=!1,Ou=null,Oi=null,Ko=!1,Ni=null,ul=0,io=0,Fu=null,Ia=-1,Da=0;function Vt(){return Ge&6?xt():Ia!==-1?Ia:Ia=xt()}function Fi(t){return t.mode&1?Ge&2&&Pt!==0?Pt&-Pt:n_.transition!==null?(Da===0&&(Da=Bm()),Da):(t=Qe,t!==0||(t=window.event,t=t===void 0?16:Ym(t.type)),t):1}function On(t,e,n,i){if(50<io)throw io=0,Fu=null,Error(ne(185));wo(t,n,i),(!(Ge&2)||t!==Rt)&&(t===Rt&&(!(Ge&2)&&(Rl|=n),Mt===4&&bi(t,Pt)),Jt(t,i),n===1&&Ge===0&&!(e.mode&1)&&(ms=xt()+500,wl&&Yi()))}function Jt(t,e){var n=t.callbackNode;nx(t,e);var i=Ya(t,t===Rt?Pt:0);if(i===0)n!==null&&rh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&rh(n),e===1)t.tag===0?t_(Kh.bind(null,t)):fg(Kh.bind(null,t)),Zx(function(){!(Ge&6)&&Yi()}),n=null;else{switch(Hm(i)){case 1:n=Vd;break;case 4:n=km;break;case 16:n=Xa;break;case 536870912:n=zm;break;default:n=Xa}n=u0(n,i0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function i0(t,e){if(Ia=-1,Da=0,Ge&6)throw Error(ne(327));var n=t.callbackNode;if(ss()&&t.callbackNode!==n)return null;var i=Ya(t,t===Rt?Pt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=dl(t,i);else{e=i;var r=Ge;Ge|=2;var s=s0();(Rt!==t||Pt!==e)&&(Jn=null,ms=xt()+500,hr(t,e));do try{E_();break}catch(a){r0(t,a)}while(!0);tf(),ll.current=s,Ge=r,St!==null?e=0:(Rt=null,Pt=0,e=Mt)}if(e!==0){if(e===2&&(r=uu(t),r!==0&&(i=r,e=ku(t,r))),e===1)throw n=So,hr(t,0),bi(t,i),Jt(t,xt()),n;if(e===6)bi(t,i);else{if(r=t.current.alternate,!(i&30)&&!y_(r)&&(e=dl(t,i),e===2&&(s=uu(t),s!==0&&(i=s,e=ku(t,s))),e===1))throw n=So,hr(t,0),bi(t,i),Jt(t,xt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:ir(t,$t,Jn);break;case 3:if(bi(t,i),(i&130023424)===i&&(e=vf+500-xt(),10<e)){if(Ya(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Vt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=xu(ir.bind(null,t,$t,Jn),e);break}ir(t,$t,Jn);break;case 4:if(bi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Un(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=xt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*__(i/1960))-i,10<i){t.timeoutHandle=xu(ir.bind(null,t,$t,Jn),i);break}ir(t,$t,Jn);break;case 5:ir(t,$t,Jn);break;default:throw Error(ne(329))}}}return Jt(t,xt()),t.callbackNode===n?i0.bind(null,t):null}function ku(t,e){var n=no;return t.current.memoizedState.isDehydrated&&(hr(t,e).flags|=256),t=dl(t,e),t!==2&&(e=$t,$t=n,e!==null&&zu(e)),t}function zu(t){$t===null?$t=t:$t.push.apply($t,t)}function y_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!kn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function bi(t,e){for(e&=~gf,e&=~Rl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Un(e),i=1<<n;t[n]=-1,e&=~i}}function Kh(t){if(Ge&6)throw Error(ne(327));ss();var e=Ya(t,0);if(!(e&1))return Jt(t,xt()),null;var n=dl(t,e);if(t.tag!==0&&n===2){var i=uu(t);i!==0&&(e=i,n=ku(t,i))}if(n===1)throw n=So,hr(t,0),bi(t,e),Jt(t,xt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ir(t,$t,Jn),Jt(t,xt()),null}function xf(t,e){var n=Ge;Ge|=1;try{return t(e)}finally{Ge=n,Ge===0&&(ms=xt()+500,wl&&Yi())}}function yr(t){Ni!==null&&Ni.tag===0&&!(Ge&6)&&ss();var e=Ge;Ge|=1;var n=Sn.transition,i=Qe;try{if(Sn.transition=null,Qe=1,t)return t()}finally{Qe=i,Sn.transition=n,Ge=e,!(Ge&6)&&Yi()}}function _f(){ln=Qr.current,at(Qr)}function hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Kx(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch(Qd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Qa();break;case 3:hs(),at(Zt),at(zt),lf();break;case 5:af(i);break;case 4:hs();break;case 13:at(ut);break;case 19:at(ut);break;case 10:nf(i.type._context);break;case 22:case 23:_f()}n=n.return}if(Rt=t,St=t=ki(t.current,null),Pt=ln=e,Mt=0,So=null,gf=Rl=_r=0,$t=no=null,cr!==null){for(e=0;e<cr.length;e++)if(n=cr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}cr=null}return t}function r0(t,e){do{var n=St;try{if(tf(),Na.current=al,ol){for(var i=dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ol=!1}if(xr=0,bt=Et=dt=null,eo=!1,xo=0,mf.current=null,n===null||n.return===null){Mt=1,So=e,St=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Pt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Fh(o);if(g!==null){g.flags&=-257,kh(g,o,a,s,e),g.mode&1&&Oh(s,c,e),e=g,l=c;var _=e.updateQueue;if(_===null){var S=new Set;S.add(l),e.updateQueue=S}else _.add(l);break e}else{if(!(e&1)){Oh(s,c,e),yf();break e}l=Error(ne(426))}}else if(ct&&a.mode&1){var p=Fh(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),kh(p,o,a,s,e),Jd(ps(l,a));break e}}s=l=ps(l,a),Mt!==4&&(Mt=2),no===null?no=[s]:no.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Hg(s,l,e);Nh(s,u);break e;case 1:a=l;var x=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Oi===null||!Oi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Vg(s,a,e);Nh(s,E);break e}}s=s.return}while(s!==null)}a0(n)}catch(C){e=C,St===n&&n!==null&&(St=n=n.return);continue}break}while(!0)}function s0(){var t=ll.current;return ll.current=al,t===null?al:t}function yf(){(Mt===0||Mt===3||Mt===2)&&(Mt=4),Rt===null||!(_r&268435455)&&!(Rl&268435455)||bi(Rt,Pt)}function dl(t,e){var n=Ge;Ge|=2;var i=s0();(Rt!==t||Pt!==e)&&(Jn=null,hr(t,e));do try{S_();break}catch(r){r0(t,r)}while(!0);if(tf(),Ge=n,ll.current=i,St!==null)throw Error(ne(261));return Rt=null,Pt=0,Mt}function S_(){for(;St!==null;)o0(St)}function E_(){for(;St!==null&&!Yv();)o0(St)}function o0(t){var e=c0(t.alternate,t,ln);t.memoizedProps=t.pendingProps,e===null?a0(t):St=e,mf.current=null}function a0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=m_(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Mt=6,St=null;return}}else if(n=p_(n,e,ln),n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);Mt===0&&(Mt=5)}function ir(t,e,n){var i=Qe,r=Sn.transition;try{Sn.transition=null,Qe=1,M_(t,e,n,i)}finally{Sn.transition=r,Qe=i}return null}function M_(t,e,n,i){do ss();while(Ni!==null);if(Ge&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ix(t,s),t===Rt&&(St=Rt=null,Pt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ko||(Ko=!0,u0(Xa,function(){return ss(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Sn.transition,Sn.transition=null;var o=Qe;Qe=1;var a=Ge;Ge|=4,mf.current=null,v_(t,n),t0(n,t),Gx(gu),$a=!!mu,gu=mu=null,t.current=n,x_(n),$v(),Ge=a,Qe=o,Sn.transition=s}else t.current=n;if(Ko&&(Ko=!1,Ni=t,ul=r),s=t.pendingLanes,s===0&&(Oi=null),Zv(n.stateNode),Jt(t,xt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(cl)throw cl=!1,t=Ou,Ou=null,t;return ul&1&&t.tag!==0&&ss(),s=t.pendingLanes,s&1?t===Fu?io++:(io=0,Fu=t):io=0,Yi(),null}function ss(){if(Ni!==null){var t=Hm(ul),e=Sn.transition,n=Qe;try{if(Sn.transition=null,Qe=16>t?16:t,Ni===null)var i=!1;else{if(t=Ni,Ni=null,ul=0,Ge&6)throw Error(ne(331));var r=Ge;for(Ge|=4,me=t.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(me=c;me!==null;){var d=me;switch(d.tag){case 0:case 11:case 15:to(8,d,s)}var f=d.child;if(f!==null)f.return=d,me=f;else for(;me!==null;){d=me;var h=d.sibling,g=d.return;if(Qg(d),d===c){me=null;break}if(h!==null){h.return=g,me=h;break}me=g}}}var _=s.alternate;if(_!==null){var S=_.child;if(S!==null){_.child=null;do{var p=S.sibling;S.sibling=null,S=p}while(S!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:to(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,me=u;break e}me=s.return}}var x=t.current;for(me=x;me!==null;){o=me;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,me=v;else e:for(o=x;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:bl(9,a)}}catch(C){mt(a,a.return,C)}if(a===o){me=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,me=E;break e}me=a.return}}if(Ge=r,Yi(),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(_l,t)}catch{}i=!0}return i}finally{Qe=n,Sn.transition=e}}return!1}function Zh(t,e,n){e=ps(n,e),e=Hg(t,e,1),t=Ui(t,e,1),e=Vt(),t!==null&&(wo(t,1,e),Jt(t,e))}function mt(t,e,n){if(t.tag===3)Zh(t,t,n);else for(;e!==null;){if(e.tag===3){Zh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Oi===null||!Oi.has(i))){t=ps(n,t),t=Vg(e,t,1),e=Ui(e,t,1),t=Vt(),e!==null&&(wo(e,1,t),Jt(e,t));break}}e=e.return}}function w_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Vt(),t.pingedLanes|=t.suspendedLanes&n,Rt===t&&(Pt&n)===n&&(Mt===4||Mt===3&&(Pt&130023424)===Pt&&500>xt()-vf?hr(t,0):gf|=n),Jt(t,e)}function l0(t,e){e===0&&(t.mode&1?(e=Bo,Bo<<=1,!(Bo&130023424)&&(Bo=4194304)):e=1);var n=Vt();t=ui(t,e),t!==null&&(wo(t,e,n),Jt(t,n))}function T_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),l0(t,n)}function A_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),l0(t,n)}var c0;c0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Zt.current)Kt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Kt=!1,h_(t,e,n);Kt=!!(t.flags&131072)}else Kt=!1,ct&&e.flags&1048576&&hg(e,tl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;La(t,e),t=e.pendingProps;var r=us(e,zt.current);rs(e,n),r=uf(null,e,i,t,r,n);var s=df();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qt(i)?(s=!0,Ja(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,sf(e),r.updater=Al,e.stateNode=r,r._reactInternals=e,Tu(e,i,t,n),e=Ru(null,e,i,!0,s,n)):(e.tag=0,ct&&s&&Zd(e),Ht(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(La(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=R_(i),t=Cn(i,t),r){case 0:e=bu(null,e,i,t,n);break e;case 1:e=Hh(null,e,i,t,n);break e;case 11:e=zh(null,e,i,t,n);break e;case 14:e=Bh(null,e,i,Cn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Cn(i,r),bu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Cn(i,r),Hh(t,e,i,r,n);case 3:e:{if(Xg(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,_g(t,e),rl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ps(Error(ne(423)),e),e=Vh(t,e,i,n,r);break e}else if(i!==r){r=ps(Error(ne(424)),e),e=Vh(t,e,i,n,r);break e}else for(cn=Di(e.stateNode.containerInfo.firstChild),un=e,ct=!0,Pn=null,n=vg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ds(),i===r){e=di(t,e,n);break e}Ht(t,e,i,n)}e=e.child}return e;case 5:return yg(e),t===null&&Eu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,vu(i,r)?o=null:s!==null&&vu(i,s)&&(e.flags|=32),Wg(t,e),Ht(t,e,o,n),e.child;case 6:return t===null&&Eu(e),null;case 13:return Yg(t,e,n);case 4:return of(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=fs(e,null,i,n):Ht(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Cn(i,r),zh(t,e,i,r,n);case 7:return Ht(t,e,e.pendingProps,n),e.child;case 8:return Ht(t,e,e.pendingProps.children,n),e.child;case 12:return Ht(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,nt(nl,i._currentValue),i._currentValue=o,s!==null)if(kn(s.value,o)){if(s.children===r.children&&!Zt.current){e=di(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ai(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Mu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Mu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ht(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,rs(e,n),r=En(r),i=i(r),e.flags|=1,Ht(t,e,i,n),e.child;case 14:return i=e.type,r=Cn(i,e.pendingProps),r=Cn(i.type,r),Bh(t,e,i,r,n);case 15:return Gg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Cn(i,r),La(t,e),e.tag=1,Qt(i)?(t=!0,Ja(e)):t=!1,rs(e,n),Bg(e,i,r),Tu(e,i,r,n),Ru(null,e,i,!0,t,n);case 19:return $g(t,e,n);case 22:return jg(t,e,n)}throw Error(ne(156,e.tag))};function u0(t,e){return Fm(t,e)}function b_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(t,e,n,i){return new b_(t,e,n,i)}function Sf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function R_(t){if(typeof t=="function")return Sf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===zd)return 11;if(t===Bd)return 14}return 2}function ki(t,e){var n=t.alternate;return n===null?(n=_n(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ua(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Sf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Vr:return pr(n.children,r,s,e);case kd:o=8,r|=8;break;case qc:return t=_n(12,n,e,r|2),t.elementType=qc,t.lanes=s,t;case Kc:return t=_n(13,n,e,r),t.elementType=Kc,t.lanes=s,t;case Zc:return t=_n(19,n,e,r),t.elementType=Zc,t.lanes=s,t;case ym:return Cl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case xm:o=10;break e;case _m:o=9;break e;case zd:o=11;break e;case Bd:o=14;break e;case wi:o=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=_n(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function pr(t,e,n,i){return t=_n(7,t,i,e),t.lanes=n,t}function Cl(t,e,n,i){return t=_n(22,t,i,e),t.elementType=ym,t.lanes=n,t.stateNode={isHidden:!1},t}function hc(t,e,n){return t=_n(6,t,null,e),t.lanes=n,t}function pc(t,e,n){return e=_n(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function C_(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$l(0),this.expirationTimes=$l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$l(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ef(t,e,n,i,r,s,o,a,l){return t=new C_(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=_n(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sf(s),t}function N_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function d0(t){if(!t)return Vi;t=t._reactInternals;e:{if(wr(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(Qt(n))return dg(t,n,e)}return e}function f0(t,e,n,i,r,s,o,a,l){return t=Ef(n,i,!0,t,r,s,o,a,l),t.context=d0(null),n=t.current,i=Vt(),r=Fi(n),s=ai(i,r),s.callback=e??null,Ui(n,s,r),t.current.lanes=r,wo(t,r,i),Jt(t,i),t}function Nl(t,e,n,i){var r=e.current,s=Vt(),o=Fi(r);return n=d0(n),e.context===null?e.context=n:e.pendingContext=n,e=ai(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ui(r,e,o),t!==null&&(On(t,r,o,s),Ca(t,r,o)),o}function fl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Qh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Mf(t,e){Qh(t,e),(t=t.alternate)&&Qh(t,e)}function P_(){return null}var h0=typeof reportError=="function"?reportError:function(t){console.error(t)};function wf(t){this._internalRoot=t}Pl.prototype.render=wf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));Nl(t,e,null,null)};Pl.prototype.unmount=wf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;yr(function(){Nl(null,t,null,null)}),e[ci]=null}};function Pl(t){this._internalRoot=t}Pl.prototype.unstable_scheduleHydration=function(t){if(t){var e=jm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ai.length&&e!==0&&e<Ai[n].priority;n++);Ai.splice(n,0,t),n===0&&Xm(t)}};function Tf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ll(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Jh(){}function L_(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=fl(o);s.call(c)}}var o=f0(e,i,t,0,null,!1,!1,"",Jh);return t._reactRootContainer=o,t[ci]=o.current,ho(t.nodeType===8?t.parentNode:t),yr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=fl(l);a.call(c)}}var l=Ef(t,0,!1,null,null,!1,!1,"",Jh);return t._reactRootContainer=l,t[ci]=l.current,ho(t.nodeType===8?t.parentNode:t),yr(function(){Nl(e,l,n,i)}),l}function Il(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=fl(o);a.call(l)}}Nl(e,o,t,r)}else o=L_(n,e,t,r,i);return fl(o)}Vm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Xs(e.pendingLanes);n!==0&&(Gd(e,n|1),Jt(e,xt()),!(Ge&6)&&(ms=xt()+500,Yi()))}break;case 13:yr(function(){var i=ui(t,1);if(i!==null){var r=Vt();On(i,t,1,r)}}),Mf(t,1)}};jd=function(t){if(t.tag===13){var e=ui(t,134217728);if(e!==null){var n=Vt();On(e,t,134217728,n)}Mf(t,134217728)}};Gm=function(t){if(t.tag===13){var e=Fi(t),n=ui(t,e);if(n!==null){var i=Vt();On(n,t,e,i)}Mf(t,e)}};jm=function(){return Qe};Wm=function(t,e){var n=Qe;try{return Qe=t,e()}finally{Qe=n}};au=function(t,e,n){switch(e){case"input":if(eu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ml(i);if(!r)throw Error(ne(90));Em(i),eu(i,r)}}}break;case"textarea":wm(t,n);break;case"select":e=n.value,e!=null&&es(t,!!n.multiple,e,!1)}};Pm=xf;Lm=yr;var I_={usingClientEntryPoint:!1,Events:[Ao,Xr,Ml,Cm,Nm,xf]},Us={findFiberByHostInstance:lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},D_={bundleType:Us.bundleType,version:Us.version,rendererPackageName:Us.rendererPackageName,rendererConfig:Us.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Um(t),t===null?null:t.stateNode},findFiberByHostInstance:Us.findFiberByHostInstance||P_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zo.isDisabled&&Zo.supportsFiber)try{_l=Zo.inject(D_),jn=Zo}catch{}}fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I_;fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tf(e))throw Error(ne(200));return N_(t,e,null,n)};fn.createRoot=function(t,e){if(!Tf(t))throw Error(ne(299));var n=!1,i="",r=h0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ef(t,1,!1,null,null,n,!1,i,r),t[ci]=e.current,ho(t.nodeType===8?t.parentNode:t),new wf(e)};fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=Um(e),t=t===null?null:t.stateNode,t};fn.flushSync=function(t){return yr(t)};fn.hydrate=function(t,e,n){if(!Ll(e))throw Error(ne(200));return Il(null,t,e,!0,n)};fn.hydrateRoot=function(t,e,n){if(!Tf(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=h0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=f0(e,null,t,1,n??null,r,!1,s,o),t[ci]=e.current,ho(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Pl(e)};fn.render=function(t,e,n){if(!Ll(e))throw Error(ne(200));return Il(null,t,e,!1,n)};fn.unmountComponentAtNode=function(t){if(!Ll(t))throw Error(ne(40));return t._reactRootContainer?(yr(function(){Il(null,null,t,!1,function(){t._reactRootContainer=null,t[ci]=null})}),!0):!1};fn.unstable_batchedUpdates=xf;fn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ll(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return Il(t,e,n,!1,i)};fn.version="18.3.1-next-f1338f8080-20240426";function p0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p0)}catch(t){console.error(t)}}p0(),pm.exports=fn;var U_=pm.exports,ep=U_;Yc.createRoot=ep.createRoot,Yc.hydrateRoot=ep.hydrateRoot;/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),m0=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var F_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=le.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>le.createElement("svg",{ref:l,...F_,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:m0("lucide",r),...a},[...o.map(([c,d])=>le.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=(t,e)=>{const n=le.forwardRef(({className:i,...r},s)=>le.createElement(k_,{ref:s,iconNode:e,className:m0(`lucide-${O_(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=lt("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=lt("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=lt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=lt("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=lt("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=lt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=lt("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=lt("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=lt("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=lt("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=lt("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=lt("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=lt("Locate",[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["circle",{cx:"12",cy:"12",r:"7",key:"fim9np"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=lt("LockOpen",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=lt("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=lt("Pin",[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=lt("Radar",[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34",key:"z3du51"}],["path",{d:"M4 6h.01",key:"oypzma"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35",key:"qzzz0"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67",key:"1yjesh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67",key:"1u2y91"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"m13.41 10.59 5.66-5.66",key:"mhq4k0"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=lt("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=lt("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=lt("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=lt("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=lt("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=lt("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=lt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=lt("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);var _0="clover",ty=function(e){return e===3?"v3":e},y0="https://js.stripe.com",ny="".concat(y0,"/").concat(_0,"/stripe.js"),iy=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,ry=/^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/;var sy=function(e){return iy.test(e)||ry.test(e)},oy=function(){for(var e=document.querySelectorAll('script[src^="'.concat(y0,'"]')),n=0;n<e.length;n++){var i=e[n];if(sy(i.src))return i}return null},ip=function(e){var n="",i=document.createElement("script");i.src="".concat(ny).concat(n);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(i),i},ay=function(e,n){!e||!e._registerWrapper||e._registerWrapper({name:"stripe-js",version:"8.5.3",startTime:n})},Os=null,Qo=null,Jo=null,ly=function(e){return function(n){e(new Error("Failed to load Stripe.js",{cause:n}))}},cy=function(e,n){return function(){window.Stripe?e(window.Stripe):n(new Error("Stripe.js not available"))}},uy=function(e){return Os!==null?Os:(Os=new Promise(function(n,i){if(typeof window>"u"||typeof document>"u"){n(null);return}if(window.Stripe){n(window.Stripe);return}try{var r=oy();if(!(r&&e)){if(!r)r=ip(e);else if(r&&Jo!==null&&Qo!==null){var s;r.removeEventListener("load",Jo),r.removeEventListener("error",Qo),(s=r.parentNode)===null||s===void 0||s.removeChild(r),r=ip(e)}}Jo=cy(n,i),Qo=ly(i),r.addEventListener("load",Jo),r.addEventListener("error",Qo)}catch(o){i(o);return}}),Os.catch(function(n){return Os=null,Promise.reject(n)}))},dy=function(e,n,i){if(e===null)return null;var r=n[0],s=r.match(/^pk_test/),o=ty(e.version),a=_0;s&&o!==a&&console.warn("Stripe.js@".concat(o," was loaded on the page, but @stripe/stripe-js@").concat("8.5.3"," expected Stripe.js@").concat(a,". This may result in unexpected behavior. For more information, see https://docs.stripe.com/sdks/stripejs-versioning"));var l=e.apply(void 0,n);return ay(l,i),l},Fs,S0=!1,E0=function(){return Fs||(Fs=uy(null).catch(function(e){return Fs=null,Promise.reject(e)}),Fs)};Promise.resolve().then(function(){return E0()}).catch(function(t){S0||console.warn(t)});var fy=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];S0=!0;var r=Date.now();return E0().then(function(s){return dy(s,n,r)})};const hy=({cart:t,isOpen:e,setIsOpen:n,removeFromCart:i})=>{const[r,s]=le.useState(!1),o=le.useMemo(()=>t.reduce((l,c)=>l+Number(c.price||0),0).toFixed(2),[t]);if(!e)return null;const a=async()=>{if(t.length!==0){s(!0);try{const l=await fetch("/api/create-checkout-session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({cart:t,customer_email:void 0})});if(!l.ok)throw new Error("Checkout failed");const{sessionId:c}=await l.json();await(await fy("pk_test_51SZtygFVgUQbJcbLQ1ngJySIYEQ3BRpvAhinmqhMHzVjLyEDJ3P0Qc9LHyVcq2r42HhKuz4ieEkPhZvSpUtWl8zx004FMz26c6")).redirectToCheckout({sessionId:c})}catch(l){console.error("Checkout error:",l)}finally{s(!1)}}};return m.jsx("div",{className:"fixed inset-0 z-[60] flex justify-end bg-black/40 backdrop-blur-sm",onClick:()=>n(!1),children:m.jsxs("div",{className:"w-full max-w-md bg-[var(--bg-primary)] h-full shadow-2xl flex flex-col border-l-2 border-theme-main font-mono transition-colors duration-300",onClick:l=>l.stopPropagation(),children:[m.jsxs("div",{className:"p-4 border-b border-theme-main flex justify-between items-center bg-[var(--bg-secondary)] text-theme-main",children:[m.jsxs("h2",{className:"font-bold text-sm uppercase flex items-center gap-2",children:[m.jsx(Af,{size:14})," REQUISITION_LOG"]}),m.jsx("button",{onClick:()=>n(!1),className:"hover:text-[var(--accent)]",children:m.jsx(x0,{size:18})})]}),m.jsxs("div",{className:"bg-[#1b2612] text-xs text-theme-sub p-2 flex items-center gap-2 border-b border-theme-main/10",children:[m.jsx("div",{className:"w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse"}),"SYNCING TO OFFLINE NODE..."]}),m.jsx("div",{className:"flex-grow overflow-y-auto p-4 space-y-4",children:t.length===0?m.jsxs("div",{className:"text-center text-theme-sub mt-20 flex flex-col items-center",children:[m.jsx(v0,{className:"w-12 h-12 mb-4 opacity-50"}),m.jsx("p",{className:"text-xs",children:"BUFFER_EMPTY"})]}):t.map((l,c)=>m.jsxs("div",{className:"bg-theme-sub p-3 border border-theme-main/20 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] flex justify-between items-start",children:[m.jsxs("div",{children:[m.jsx("p",{className:"text-[10px] font-bold text-theme-sub opacity-50",children:l.id}),m.jsx("h4",{className:"font-bold text-sm uppercase text-theme-main",children:l.name}),m.jsx("div",{className:"flex gap-2 mt-1",children:l.specs&&l.specs.slice(0,2).map(d=>m.jsx("span",{className:"text-[9px] border border-theme-main/20 text-theme-sub px-1",children:d},d))})]}),m.jsxs("div",{className:"text-right",children:[m.jsxs("p",{className:"font-bold text-sm text-theme-main",children:["$",l.price]}),m.jsx("button",{onClick:()=>i(c),className:"text-[10px] text-red-600 hover:bg-red-950/20 px-1 mt-1 uppercase",children:"[ DELETE ]"})]})]},`${l.id}-${c}`))}),m.jsxs("div",{className:"p-6 border-t border-theme-main bg-theme-sub space-y-4",children:[m.jsxs("div",{className:"flex justify-between items-end text-theme-main",children:[m.jsx("span",{className:"text-xs opacity-60",children:"TOTAL_COST"}),m.jsxs("span",{className:"text-2xl font-black",children:["$",o]})]}),m.jsxs("button",{onClick:a,disabled:r||!t.length,className:"w-full bg-[var(--accent)] text-white font-bold py-4 hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed flex justify-center gap-2 uppercase text-sm group transition-all",children:[m.jsx(bf,{size:16,className:"group-hover:text-yellow-400 transition-colors"}),r?"Processing...":"Secure_Checkout"]})]})]})})},py=()=>m.jsxs("div",{className:"max-w-4xl mx-auto p-4 md:p-8 relative z-10",children:[m.jsxs("div",{className:"mb-8 border-l-4 border-stone-900 pl-4 py-2",children:[m.jsxs("h1",{className:"text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none",children:["Manifesto",m.jsx("br",{}),"_V.1.0"]}),m.jsxs("p",{className:"text-xs mt-2 max-w-lg text-stone-500 uppercase",children:["// Homesteader Labs Core Philosophy",m.jsx("br",{}),"// Established 2024"]})]}),m.jsxs("div",{className:"space-y-8 text-stone-900 font-mono leading-relaxed",children:[m.jsxs("div",{className:"border-t border-stone-300 pt-4",children:[m.jsx("h2",{className:"text-xl font-bold uppercase mb-4",children:"[ 01 ] // THE MISSION"}),m.jsx("p",{className:"mb-4",children:"We believe in self-reliance through technology. Not the technology that tracks you, serves you ads, or locks you into a subscription ecosystem. We build tools for the makers, the growers, and the builders who want to own their infrastructure."})]}),m.jsxs("div",{className:"border-t border-stone-300 pt-4",children:[m.jsx("h2",{className:"text-xl font-bold uppercase mb-4",children:"[ 02 ] // OPEN SYSTEMS"}),m.jsx("p",{className:"mb-4",children:"Closed systems are dead systems. If you can't open it, you don't own it. We provide schematics, source code, and the right to repair. Our hardware is designed to be hacked, modified, and improved by the community."})]}),m.jsxs("div",{className:"border-t border-stone-300 pt-4",children:[m.jsx("h2",{className:"text-xl font-bold uppercase mb-4",children:"[ 03 ] // PRIVACY FIRST"}),m.jsx("p",{className:"mb-4",children:"In an age of surveillance capitalism, we choose the dark. Our devices operate offline by default. They don't phone home unless you tell them to. Your data belongs to you, on your local network, on your own terms."})]}),m.jsxs("div",{className:"border-t border-stone-300 pt-4",children:[m.jsx("h2",{className:"text-xl font-bold uppercase mb-4",children:"[ 04 ] // BUILT TO LAST"}),m.jsx("p",{className:"mb-4",children:"Planned obsolescence is an insult to engineering. We design for durability, utilizing robust materials and modular components. We build for the long haul, for the homestead that stands for generations."})]})]}),m.jsxs("div",{className:"mt-12 border-2 border-stone-900 p-6 text-center",children:[m.jsx("p",{className:"font-bold uppercase text-sm mb-2",children:"JOIN THE RESISTANCE"}),m.jsx("p",{className:"text-xs text-stone-600",children:"BUILD. GROW. SURVIVE."})]})]}),my=()=>{const[t,e]=le.useState([]),[n,i]=le.useState(!1);return le.useEffect(()=>{const o=localStorage.getItem("homesteader_cart");o&&e(JSON.parse(o)),new URLSearchParams(window.location.search).get("success")==="true"&&(e([]),localStorage.removeItem("homesteader_cart"),alert(">> UPLINK CONFIRMED: REQUISITION_SUCCESSFUL. CHECK EMAIL FOR LOGISTICS."),window.history.replaceState({},document.title,window.location.pathname))},[]),le.useEffect(()=>{localStorage.setItem("homesteader_cart",JSON.stringify(t))},[t]),{cart:t,isCartOpen:n,setIsCartOpen:i,addToCart:o=>{e(a=>[...a,o]),i(!0)},removeFromCart:o=>{e(a=>{const l=[...a];return l.splice(o,1),l})}}},gy=()=>{const[t,e]=le.useState(()=>{const i=localStorage.getItem("hl_dark_mode");return i!==null?JSON.parse(i):window.matchMedia("(prefers-color-scheme: dark)").matches});return le.useEffect(()=>{if(typeof window>"u")return;const i=window.document.documentElement;t?i.classList.add("dark"):i.classList.remove("dark"),localStorage.setItem("hl_dark_mode",JSON.stringify(t))},[t]),{isDark:t,toggleDarkMode:()=>{e(i=>!i)}}},vy=({isOpen:t,onClose:e,cart:n,products:i})=>{const[r,s]=le.useState(""),[o,a]=le.useState(["HOMESTEADER LABS TERMINAL ACCESS [v4.2.0]",'ENTER "help" FOR COMMAND LIST',"----------------------------------------"]),[l,c]=le.useState("TERMINAL"),[d,f]=le.useState({title:"",date:"",tags:"",content:""}),h=le.useRef(null),g=le.useRef(null);le.useEffect(()=>{h.current&&h.current.scrollIntoView({behavior:"smooth"})},[o,t]),le.useEffect(()=>{t&&l==="TERMINAL"&&g.current&&g.current.focus()},[t,l]);const _=p=>{var u;if(p.key==="Enter"){const x=r.trim().toLowerCase(),v=x.split(" ");let E="";switch(v[0]){case"help":E="COMMANDS: ls, cat [id], write, clear, whoami, exit";break;case"ls":v[1]==="/shop"||!v[1]?E=`DIR /SHOP:
${i.map(A=>`${A.id}  <${A.category}>`).join(`
`)}`:E="DIRECTORIES: /shop, /sys";break;case"cat":const C=(u=v[1])==null?void 0:u.toUpperCase(),b=i.find(A=>A.id===C);b?E=`READING ${C}...
NAME: ${b.name}
PRICE: $${b.price}
DESC: ${b.description}`:E=`ERR: FILE ${C} NOT FOUND`;break;case"write":c("EDITOR"),f({title:"",date:new Date().toISOString().split("T")[0],tags:"log, update",content:""}),a(A=>[...A,`> ${r}`,"STARTING FIELD_RECORDER_V1..."]),s("");return;case"clear":a([]),s("");return;case"whoami":E="GUEST_USER@HOMESTEADER_PUBLIC_NODE";break;case"exit":e(),s("");return;case"sudo":E="PERMISSION DENIED. BIOMETRIC AUTH REQUIRED.";break;default:E=`ERR: UNKNOWN COMMAND "${x}"`}a(C=>[...C,`> ${r}`,E," "]),s("")}},S=()=>{const p=d.title.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,""),u=`log-${Date.now()}-${p}.mdx`,x=`---
title: "${d.title}"
date: "${d.date}"
tags: [${d.tags.split(",").map(b=>`"${b.trim()}"`).join(", ")}]
slug: "${p}"
---

${d.content}
`,v=new Blob([x],{type:"text/markdown"}),E=URL.createObjectURL(v),C=document.createElement("a");C.href=E,C.download=u,document.body.appendChild(C),C.click(),document.body.removeChild(C),URL.revokeObjectURL(E),a(b=>[...b,`FILE SAVED: ${u}`,"LOCAL STORAGE SUCCESSFUL"," "]),c("TERMINAL")};return t?m.jsxs("div",{className:"fixed inset-0 z-[200] bg-[#1b2612]/98 text-theme-main font-mono text-xs md:text-sm p-4 md:p-8 flex flex-col font-bold",onClick:()=>{var p;return l==="TERMINAL"&&((p=g.current)==null?void 0:p.focus())},children:[m.jsxs("div",{className:"flex justify-between border-b border-theme-main/30 pb-2 mb-4",children:[m.jsx("span",{children:l==="EDITOR"?"FIELD_RECORDER_ACTIVE":"TERMINAL_SESSION_ACTIVE"}),m.jsx("span",{className:"cursor-pointer hover:text-white",onClick:e,children:"[X] TERMINATE"})]}),l==="TERMINAL"?m.jsxs(m.Fragment,{children:[m.jsxs("div",{className:"flex-grow overflow-y-auto whitespace-pre-wrap font-normal",children:[o.map((p,u)=>m.jsx("div",{children:p},u)),m.jsx("div",{ref:h})]}),m.jsxs("div",{className:"flex items-center gap-2 mt-4 border-t border-theme-main/30 pt-4",children:[m.jsx("span",{children:"user@homesteader:~"}),m.jsx("input",{ref:g,type:"text",value:r,onChange:p=>s(p.target.value),onKeyDown:_,className:"bg-transparent outline-none flex-grow text-white caret-[var(--accent)]",autoFocus:!0})]})]}):m.jsxs("div",{className:"flex-grow flex flex-col gap-4 text-theme-main",children:[m.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[m.jsxs("div",{children:[m.jsx("label",{className:"block text-[10px] text-theme-sub mb-1",children:"TITLE"}),m.jsx("input",{type:"text",className:"w-full bg-[#24331a] border border-theme-main/30 p-2 text-white outline-none focus:border-[var(--accent)]",value:d.title,onChange:p=>f({...d,title:p.target.value}),placeholder:"ENTER_TITLE",autoFocus:!0})]}),m.jsxs("div",{children:[m.jsx("label",{className:"block text-[10px] text-theme-sub mb-1",children:"DATE (YYYY-MM-DD)"}),m.jsx("input",{type:"text",className:"w-full bg-[#24331a] border border-theme-main/30 p-2 text-white outline-none focus:border-[var(--accent)]",value:d.date,onChange:p=>f({...d,date:p.target.value})})]})]}),m.jsxs("div",{children:[m.jsx("label",{className:"block text-[10px] text-theme-sub mb-1",children:"TAGS (COMMA SEPARATED)"}),m.jsx("input",{type:"text",className:"w-full bg-[#24331a] border border-theme-main/30 p-2 text-white outline-none focus:border-[var(--accent)]",value:d.tags,onChange:p=>f({...d,tags:p.target.value})})]}),m.jsxs("div",{className:"flex-grow flex flex-col",children:[m.jsx("label",{className:"block text-[10px] text-theme-sub mb-1",children:"CONTENT (MARKDOWN SUPPORTED)"}),m.jsx("textarea",{className:"flex-grow w-full bg-[#24331a] border border-theme-main/30 p-4 text-white outline-none resize-none focus:border-[var(--accent)] font-mono",value:d.content,onChange:p=>f({...d,content:p.target.value}),placeholder:"BEGIN TRANSMISSION..."})]}),m.jsxs("div",{className:"flex justify-end gap-4 border-t border-theme-main/30 pt-4",children:[m.jsx("button",{onClick:()=>c("TERMINAL"),className:"px-4 py-2 border border-theme-main/30 text-theme-sub hover:text-white hover:border-white",children:"[ CANCEL ]"}),m.jsx("button",{onClick:S,className:"px-4 py-2 bg-[var(--accent)] text-white hover:brightness-110",children:"[ ENCRYPT & EXPORT ]"})]})]})]}):null},xy=({onComplete:t})=>{const[e,n]=le.useState([]),i=le.useRef(null),r=[{text:"BIOS_CHECK... OK",delay:100},{text:"LOADING KERNEL: HOMESTEADER_V4.2.0",delay:300},{text:"MOUNTING FILE SYSTEM... [RW]",delay:600},{text:"CHECKING MEMORY INTEGRITY... 64MB OK",delay:900},{text:"INITIATING GRAPHICS DRIVER (3D_LIDAR)",delay:1200},{text:"ESTABLISHING SECURE CONNECTION...",delay:1800},{text:"PING: WATERFORD_NODE (12ms)",delay:2e3},{text:"LOADING ASSETS: [####################] 100%",delay:2400},{text:"ESTABLISHING UPLINK TO ARCHIVE NODE...",delay:2600},{text:"STARTING BIOSYNTHESIS MONITOR...",delay:2800},{text:"SYSTEM READY.",delay:3100},{text:"EXECUTING GUI...",delay:3400}];return le.useEffect(()=>{localStorage.setItem("homesteader_booted","true");let s=[];r.forEach(a=>{const l=setTimeout(()=>{n(c=>[...c,a.text])},a.delay);s.push(l)});const o=setTimeout(t,3800);return()=>{s.forEach(clearTimeout),clearTimeout(o)}},[]),le.useEffect(()=>{var s;(s=i.current)==null||s.scrollIntoView({behavior:"auto"})},[e]),m.jsxs("div",{className:"fixed inset-0 z-[100] bg-[#0c0c0c] text-green-600 font-mono text-xs p-4 flex flex-col justify-end overflow-hidden",children:[m.jsx("div",{className:"absolute top-4 left-4 border border-green-800 px-2 py-1 text-[10px] text-green-800",children:"TTY1: /dev/console"}),m.jsxs("div",{className:"max-w-3xl w-full mx-auto mb-10 overflow-y-auto max-h-screen",children:[e.map((s,o)=>m.jsxs("div",{className:"mb-1 border-l-2 border-transparent hover:border-green-800 pl-2 break-words",children:[m.jsx("span",{className:"opacity-50 mr-2 select-none",children:`[${(o*.134).toFixed(3)}]`}),s]},o)),m.jsx("div",{ref:i,className:"animate-pulse",children:"_"})]})]})},_y=()=>{const t=le.useRef(null);return le.useEffect(()=>{const e=t.current;if(!e)return;const n=e.getContext("2d");let i,r=0,s=0,o=0,a=0;const l=h=>{s=h.clientX,o=h.clientY},c=()=>{a=window.scrollY};window.addEventListener("mousemove",l),window.addEventListener("scroll",c);const d=()=>{e.width=window.innerWidth,e.height=window.innerHeight};window.addEventListener("resize",d),d();const f=()=>{r+=.005,n.clearRect(0,0,e.width,e.height),n.strokeStyle="rgba(163, 193, 173, 0.1)",n.lineWidth=1.5;const h=e.width/2,g=e.height/2,_=(s-h)*5e-4,S=(o-g)*5e-4,p=a*.002;for(let u=0;u<8;u++){n.beginPath();const x=100+u*60+Math.sin(r+u)*10;for(let v=0;v<=360;v+=2){const E=v*Math.PI/180,C=Math.sin(E*4+r+u+p)*20+Math.cos(E*8-r*2)*10+Math.sin(E*2+r*.5)*30,b=x+C,A=h+Math.cos(E)*b+_*b,P=g+Math.sin(E)*b+S*b;v===0?n.moveTo(A,P):n.lineTo(A,P)}n.closePath(),n.stroke()}i=requestAnimationFrame(f)};return f(),()=>{window.removeEventListener("resize",d),window.removeEventListener("mousemove",l),window.removeEventListener("scroll",c),cancelAnimationFrame(i)}},[]),m.jsx("canvas",{ref:t,className:"fixed inset-0 pointer-events-none z-0 opacity-60"})},yy=({title:t,content:e,isOpen:n,onClose:i})=>n?m.jsx("div",{className:"fixed inset-0 z-[220] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4",onClick:i,children:m.jsxs("div",{className:"bg-stone-900 border border-stone-500 text-stone-300 p-8 max-w-2xl w-full font-mono relative shadow-2xl",onClick:r=>r.stopPropagation(),children:[m.jsx("button",{onClick:i,className:"absolute top-4 right-4 text-stone-500 hover:text-white",children:m.jsx(x0,{})}),m.jsx("h2",{className:"text-xl font-bold uppercase mb-6 text-white border-b border-stone-700 pb-2",children:t}),m.jsx("div",{className:"text-xs leading-relaxed whitespace-pre-wrap font-mono",children:e}),m.jsx("div",{className:"mt-8 pt-4 border-t border-stone-800 text-right",children:m.jsx("button",{onClick:i,className:"bg-stone-800 hover:bg-stone-700 text-white px-4 py-2 text-xs uppercase font-bold",children:"[ ACKNOWLEDGE ]"})})]})}):null,Sy=({setView:t,cartCount:e,currentView:n,isDark:i,toggleDarkMode:r,toggleTerminal:s})=>{const[o,a]=le.useState(0),[l,c]=le.useState(0),d=()=>{const f=Date.now();if(f-l<500){const h=o+1;h>=2?(s(),a(0)):a(h)}else a(0);c(f)};return m.jsxs("nav",{className:"border-b-2 border-theme-main bg-theme-main text-theme-main sticky top-0 z-50 transition-colors duration-300",children:[m.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-3 flex justify-between items-center",children:[m.jsxs("div",{onClick:()=>{t("HOME"),d()},className:"text-xl font-bold tracking-tight cursor-pointer flex items-center gap-2 group select-none",children:[m.jsx("div",{className:"w-8 h-8 bg-[var(--accent)] text-white flex items-center justify-center group-hover:invert transition-all",children:m.jsx(g0,{size:20})}),m.jsx("span",{className:"hidden sm:inline",children:"HOMESTEADER_LABS"}),m.jsx("span",{className:"sm:hidden",children:"HL_SYS"})]}),m.jsxs("div",{className:"hidden md:flex gap-6 text-sm items-center",children:[m.jsx("button",{onClick:()=>t("SHOP"),className:`dymo-label ${n==="SHOP"?"brightness-150 border-[var(--accent)]":"opacity-80 hover:opacity-100"}`,children:"SHOP"}),m.jsx("a",{href:"https://archive.homesteaderlabs.com",target:"_blank",rel:"noopener noreferrer",className:"dymo-label opacity-80 hover:opacity-100 cursor-pointer",children:"ARCHIVE"}),["FABRICATION","WEATHER"].map(f=>m.jsx("button",{onClick:()=>t(f),className:`dymo-label ${n===f?"brightness-150 border-[var(--accent)]":"opacity-80 hover:opacity-100"}`,children:f},f)),m.jsx("button",{onClick:f=>{f.preventDefault(),r()},className:"p-2 border border-theme-main hover:bg-[var(--accent)] hover:text-white transition-all ml-4",title:"TOGGLE_THEME",children:i?m.jsx(Hu,{size:16}):m.jsx(tp,{size:16})})]}),m.jsxs("div",{className:"flex items-center gap-4",children:[m.jsxs("button",{onClick:()=>t("CART"),className:"flex items-center gap-2 border border-theme-main px-3 py-1 hover:bg-[var(--accent)] hover:text-white transition-colors",children:[m.jsx("span",{className:"text-xs",children:"CART:"}),m.jsx("span",{className:"font-bold",children:e.toString().padStart(2,"0")})]}),m.jsx("button",{onClick:f=>{f.preventDefault(),r()},className:"md:hidden p-1 border border-theme-main",children:i?m.jsx(Hu,{size:14}):m.jsx(tp,{size:14})})]})]}),m.jsxs("div",{className:"md:hidden flex justify-around border-t border-theme-main py-2 bg-theme-sub text-xs",children:[m.jsx("button",{onClick:()=>t("SHOP"),className:`${n==="SHOP"?"text-theme-main underline decoration-2":"text-theme-sub"}`,children:"SHOP"}),m.jsx("a",{href:"https://archive.homesteaderlabs.com",target:"_blank",rel:"noopener noreferrer",className:"text-theme-sub hover:text-theme-main",children:"ARCHIVE"}),["FABRICATION","WEATHER"].map(f=>m.jsx("button",{onClick:()=>t(f),className:`${n===f?"text-theme-main underline decoration-2":"text-theme-sub"}`,children:f},f))]})]})},Ey="https://relay.homesteaderlabs.com",My=()=>{const[t,e]=le.useState(""),[n,i]=le.useState("IDLE"),r=async()=>{if(!(!t||!t.includes("@"))){i("LOADING");try{(await fetch(`${Ey}/subscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t})})).ok?(i("SUCCESS"),e(""),setTimeout(()=>i("IDLE"),3e3)):i("ERROR")}catch(s){console.error(s),i("ERROR")}}};return m.jsxs("div",{className:"border border-theme-main opacity-60 p-4",children:[m.jsx("p",{className:"mb-2 text-theme-sub uppercase text-[10px]",children:"Data_Feed_Subscription"}),m.jsxs("div",{className:"flex bg-theme-sub border border-theme-main",children:[m.jsx("input",{type:"email",placeholder:"USER@NET.LOC",value:t,onChange:s=>e(s.target.value),className:"bg-transparent w-full p-2 text-theme-main outline-none placeholder:text-theme-sub/40 font-mono text-xs",disabled:n==="LOADING"}),m.jsx("button",{onClick:r,disabled:n==="LOADING"||!t||!t.includes("@"),className:`px-3 text-white transition-all ${n==="LOADING"?"bg-theme-sub":n==="SUCCESS"?"bg-[var(--accent)] opacity-80":n==="ERROR"?"bg-red-700":"hover:bg-[var(--accent)]"}`,children:n==="LOADING"?"...":n==="SUCCESS"?"✓":n==="ERROR"?"✗":m.jsx(Bu,{size:14})})]}),n==="SUCCESS"&&m.jsx("p",{className:"mt-2 text-[var(--accent)] text-[10px] font-mono",children:"SUBSCRIPTION CONFIRMED"}),n==="ERROR"&&m.jsx("p",{className:"mt-2 text-red-400 text-[10px] font-mono",children:"TRANSMISSION FAILED"})]})},wy=({setView:t})=>m.jsxs("div",{className:"flex flex-col items-center justify-center min-h-[85vh] px-4 text-center pt-12 md:pt-0",children:[m.jsxs("div",{className:"max-w-5xl w-full bg-theme-sub field-station-box terminal-container p-8 md:p-20 backdrop-blur-sm shadow-brutalist-lg relative mt-8 md:mt-0 border-none",children:[m.jsx("div",{className:"absolute top-0 left-0 w-4 h-4 border-l-4 border-t-4 border-theme-main opacity-30"}),m.jsx("div",{className:"absolute top-0 right-0 w-4 h-4 border-r-4 border-t-4 border-theme-main opacity-30"}),m.jsx("div",{className:"absolute bottom-0 left-0 w-4 h-4 border-l-4 border-b-4 border-theme-main opacity-30"}),m.jsx("div",{className:"absolute bottom-0 right-0 w-4 h-4 border-r-4 border-b-4 border-theme-main opacity-30"}),m.jsxs("div",{className:"absolute top-4 left-4 flex flex-col items-start gap-1",children:[m.jsxs("div",{className:"flex gap-2 items-center",children:[m.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse"}),m.jsx("span",{className:"text-[9px] text-theme-main opacity-60",children:"HUMIDITY: 97%"})]}),m.jsxs("div",{className:"flex gap-2 items-center",children:[m.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse"}),m.jsx("span",{className:"text-[9px] text-theme-main opacity-60",children:"CONDENSATION_RISK: CRITICAL"})]})]}),m.jsxs("div",{className:"absolute top-4 right-4 flex flex-col items-end gap-1",children:[m.jsxs("div",{className:"flex gap-2 items-center",children:[m.jsx("span",{className:"text-[9px] text-theme-main opacity-50",children:"ROOT_INTRUSION: 17%"}),m.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-yellow-600 animate-pulse"})]}),m.jsxs("div",{className:"flex gap-2 items-center",children:[m.jsx("span",{className:"text-[9px] text-theme-main opacity-50",children:"HARDWARE_INTEGRITY: DEGRADING"}),m.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"})]})]}),m.jsx("h1",{className:"text-3xl sm:text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-none text-theme-main whitespace-nowrap mt-24 sm:mt-0",children:"HOMESTEADER LABS"}),m.jsx("div",{className:"w-full h-px bg-theme-main opacity-20 my-6"}),m.jsxs("p",{className:"text-sm md:text-base max-w-2xl mx-auto mb-10 text-theme-main opacity-80 uppercase tracking-wide",children:[">> Salvaged terminal connection active...",m.jsx("br",{}),">> Fusing old-world grit with modern utility.",m.jsx("br",{}),">> Offline-first. Privacy-first. Nature-first."]}),m.jsxs("div",{className:"flex flex-col md:flex-row justify-center gap-4 relative",children:[m.jsx("div",{className:"marginalia hidden md:block",style:{top:"-40px",left:"-20px",transform:"rotate(-4deg)"},children:"Snow has buried sector 6 node. Do NOT try to clear it until the ice melts."}),m.jsx("button",{onClick:()=>t("SHOP"),className:"bg-[var(--accent)] text-white px-8 py-4 font-bold hover:brightness-110 transition-all text-sm uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]",children:"Browse_Hardware"}),m.jsxs("div",{className:"relative",children:[m.jsx("button",{onClick:()=>t("FABRICATION"),className:"bg-transparent text-theme-main px-8 py-4 font-bold hover:bg-[var(--accent)] hover:text-white transition-all border-2 border-theme-main text-sm uppercase tracking-widest",children:"Upload_Schematic"}),m.jsx("div",{className:"marginalia hidden md:block w-48",style:{bottom:"-60px",right:"-40px",transform:"rotate(2deg)",color:"var(--text-secondary)"},children:"Hailo-8 heat sync is the only thing keeping this desk warm tonight."})]})]})]}),m.jsx("div",{className:"mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl",children:["AUTHENTIC","SIMPLE","FUNCTIONAL","ESSENTIAL"].map((e,n)=>m.jsxs("div",{className:"border-t border-theme-main opacity-60 pt-2 text-[10px] tracking-[0.2em] text-center text-theme-main",children:["0",n+1," // ",e]},e))})]}),Ty=({product:t,addToCart:e})=>m.jsxs("div",{className:"group brutalist-block hover:shadow-brutalist-lg transition-all duration-200 flex flex-col h-full relative p-1",children:[m.jsx("div",{className:"absolute top-0 right-0 p-1",children:m.jsx("div",{className:"w-2 h-2 border border-theme-main rounded-full bg-transparent group-hover:bg-[var(--accent)] transition-colors"})}),m.jsxs("div",{className:"h-48 bg-theme-sub border-b border-theme-main relative overflow-hidden p-4 flex items-center justify-center",children:[m.jsx("div",{className:"absolute top-2 left-2 text-[10px] font-bold bg-theme-main border border-theme-main px-1 z-10 opacity-70",children:t.id}),m.jsx("div",{className:"absolute inset-0 opacity-5",style:{backgroundImage:"linear-gradient(0deg, transparent 24%, #000 25%, #000 26%, transparent 27%, transparent 74%, #000 75%, #000 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #000 25%, #000 26%, transparent 27%, transparent 74%, #000 75%, #000 76%, transparent 77%, transparent)",backgroundSize:"30px 30px"}}),m.jsx("div",{className:"w-24 h-24 border border-dashed border-theme-main rounded-full flex items-center justify-center bg-theme-main z-10 group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0",children:t.category==="DIGITAL"?m.jsx($_,{size:40,className:"text-theme-main"}):t.category==="ZERO_DAY"?m.jsx(K_,{size:40,className:"text-[var(--accent)]"}):m.jsx(j_,{size:40,className:"text-theme-main"})})]}),m.jsxs("div",{className:"p-4 flex flex-col flex-grow",children:[m.jsxs("div",{className:"flex justify-between items-start mb-2",children:[m.jsx("h3",{className:"font-bold text-lg leading-none w-2/3",children:t.name}),m.jsxs("span",{className:"font-bold text-white bg-[var(--accent)] px-1 text-sm",children:["$",t.price]})]}),m.jsx("p",{className:"text-xs text-theme-sub mb-4 flex-grow leading-relaxed",children:t.description}),m.jsxs("div",{className:"space-y-2 mt-auto",children:[m.jsx("div",{className:"flex flex-wrap gap-1",children:t.specs.map(n=>m.jsx("span",{className:"text-[9px] border border-theme-main opacity-40 px-1 text-theme-sub",children:n},n))}),t.category==="AFFILIATE"?m.jsxs("button",{onClick:()=>window.open(t.affiliate.url,"_blank"),className:"w-full mt-4 bg-[var(--accent)] text-white text-xs font-bold py-2 flex justify-center items-center gap-2 uppercase transition-all hover:brightness-110",children:["EXTERNAL_LINK ",m.jsx(Bu,{size:12})]}):m.jsxs("button",{onClick:()=>e(t),className:"w-full mt-4 border-2 border-theme-main text-xs font-bold py-2 flex justify-center items-center gap-2 uppercase transition-all bg-transparent text-theme-main hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)]",children:["Add_To_Cart ",m.jsx(Bu,{size:12})]})]})]})]}),Ay=({products:t,addToCart:e})=>m.jsxs("div",{className:"max-w-7xl mx-auto p-4 md:p-8 relative z-10 text-theme-main",children:[m.jsxs("div",{className:"flex justify-between items-end mb-8 border-b-2 border-theme-main pb-2 bg-theme-sub/50 p-4 relative",children:[m.jsx("h2",{className:"text-2xl font-bold uppercase",children:"Hardware_Index"}),m.jsx("div",{className:"marginalia hidden md:block",style:{top:"-30px",left:"200px",transform:"rotate(-1deg)"},children:"V0.4 battery dies in 20 mins at these temps. Need better insulation."}),m.jsxs("div",{className:"text-[10px] text-theme-sub text-right",children:[m.jsx("p",{children:"DATABASE_V.4.2"}),m.jsxs("p",{children:["RECORDS_FOUND: ",t.length]})]})]}),m.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:t.map(n=>m.jsx(Ty,{product:n,addToCart:e},n.id))})]});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rf="169",by=0,rp=1,Ry=2,M0=1,Cy=2,Qn=3,Gi=0,en=1,ti=2,zi=0,os=1,sp=2,op=3,ap=4,Ny=5,or=100,Py=101,Ly=102,Iy=103,Dy=104,Uy=200,Oy=201,Fy=202,ky=203,Vu=204,Gu=205,zy=206,By=207,Hy=208,Vy=209,Gy=210,jy=211,Wy=212,Xy=213,Yy=214,ju=0,Wu=1,Xu=2,gs=3,Yu=4,$u=5,qu=6,Ku=7,w0=0,$y=1,qy=2,Bi=0,Ky=1,Zy=2,Qy=3,Jy=4,eS=5,tS=6,nS=7,T0=300,vs=301,xs=302,Zu=303,Qu=304,Dl=306,Ju=1e3,dr=1001,ed=1002,yn=1003,iS=1004,ea=1005,Ln=1006,mc=1007,fr=1008,fi=1009,A0=1010,b0=1011,Eo=1012,Cf=1013,Sr=1014,ri=1015,Ro=1016,Nf=1017,Pf=1018,_s=1020,R0=35902,C0=1021,N0=1022,Dn=1023,P0=1024,L0=1025,as=1026,ys=1027,I0=1028,Lf=1029,D0=1030,If=1031,Df=1033,Oa=33776,Fa=33777,ka=33778,za=33779,td=35840,nd=35841,id=35842,rd=35843,sd=36196,od=37492,ad=37496,ld=37808,cd=37809,ud=37810,dd=37811,fd=37812,hd=37813,pd=37814,md=37815,gd=37816,vd=37817,xd=37818,_d=37819,yd=37820,Sd=37821,Ba=36492,Ed=36494,Md=36495,U0=36283,wd=36284,Td=36285,Ad=36286,rS=3200,sS=3201,oS=0,aS=1,Ri="",Hn="srgb",$i="srgb-linear",Uf="display-p3",Ul="display-p3-linear",hl="linear",ot="srgb",pl="rec709",ml="p3",br=7680,lp=519,lS=512,cS=513,uS=514,O0=515,dS=516,fS=517,hS=518,pS=519,cp=35044,up="300 es",si=2e3,gl=2001;class Ts{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gc=Math.PI/180,bd=180/Math.PI;function Co(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[t&255]+Ot[t>>8&255]+Ot[t>>16&255]+Ot[t>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[n&63|128]+Ot[n>>8&255]+"-"+Ot[n>>16&255]+Ot[n>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function qt(t,e,n){return Math.max(e,Math.min(n,t))}function mS(t,e){return(t%e+e)%e}function vc(t,e,n){return(1-n)*t+n*e}function ks(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Yt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,n=0){Je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,n,i,r,s,o,a,l,c){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],g=i[5],_=i[8],S=r[0],p=r[3],u=r[6],x=r[1],v=r[4],E=r[7],C=r[2],b=r[5],A=r[8];return s[0]=o*S+a*x+l*C,s[3]=o*p+a*v+l*b,s[6]=o*u+a*E+l*A,s[1]=c*S+d*x+f*C,s[4]=c*p+d*v+f*b,s[7]=c*u+d*E+f*A,s[2]=h*S+g*x+_*C,s[5]=h*p+g*v+_*b,s[8]=h*u+g*E+_*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,h=a*l-d*s,g=c*s-o*l,_=n*f+i*h+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=f*S,e[1]=(r*c-d*i)*S,e[2]=(a*i-r*o)*S,e[3]=h*S,e[4]=(d*n-r*l)*S,e[5]=(r*s-a*n)*S,e[6]=g*S,e[7]=(i*l-c*n)*S,e[8]=(o*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(xc.makeScale(e,n)),this}rotate(e){return this.premultiply(xc.makeRotation(-e)),this}translate(e,n){return this.premultiply(xc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xc=new Ue;function F0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function vl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function gS(){const t=vl("canvas");return t.style.display="block",t}const dp={};function Ha(t){t in dp||(dp[t]=!0,console.warn(t))}function vS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function xS(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function _S(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const fp=new Ue().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hp=new Ue().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),zs={[$i]:{transfer:hl,primaries:pl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Hn]:{transfer:ot,primaries:pl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ul]:{transfer:hl,primaries:ml,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(hp),fromReference:t=>t.applyMatrix3(fp)},[Uf]:{transfer:ot,primaries:ml,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(hp),fromReference:t=>t.applyMatrix3(fp).convertLinearToSRGB()}},yS=new Set([$i,Ul]),Ke={enabled:!0,_workingColorSpace:$i,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!yS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=zs[e].toReference,r=zs[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return zs[t].primaries},getTransfer:function(t){return t===Ri?hl:zs[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(zs[e].luminanceCoefficients)}};function ls(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function _c(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Rr;class SS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Rr===void 0&&(Rr=vl("canvas")),Rr.width=e.width,Rr.height=e.height;const i=Rr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Rr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=vl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ls(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ls(n[i]/255)*255):n[i]=ls(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ES=0;class k0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=Co(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(yc(r[o].image)):s.push(yc(r[o]))}else s=yc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function yc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?SS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let MS=0;class tn extends Ts{constructor(e=tn.DEFAULT_IMAGE,n=tn.DEFAULT_MAPPING,i=dr,r=dr,s=Ln,o=fr,a=Dn,l=fi,c=tn.DEFAULT_ANISOTROPY,d=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:MS++}),this.uuid=Co(),this.name="",this.source=new k0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==T0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ju:e.x=e.x-Math.floor(e.x);break;case dr:e.x=e.x<0?0:1;break;case ed:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ju:e.y=e.y-Math.floor(e.y);break;case dr:e.y=e.y<0?0:1;break;case ed:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=T0;tn.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,n=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],g=l[5],_=l[9],S=l[2],p=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-S)<.01&&Math.abs(_-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+S)<.1&&Math.abs(_+p)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,E=(g+1)/2,C=(u+1)/2,b=(d+h)/4,A=(f+S)/4,P=(_+p)/4;return v>E&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=b/i,s=A/i):E>C?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=b/r,s=P/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=P/s),this.set(i,r,s,n),this}let x=Math.sqrt((p-_)*(p-_)+(f-S)*(f-S)+(h-d)*(h-d));return Math.abs(x)<.001&&(x=1),this.x=(p-_)/x,this.y=(f-S)/x,this.z=(h-d)/x,this.w=Math.acos((c+g+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wS extends Ts{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new gt(0,0,e,n),this.scissorTest=!1,this.viewport=new gt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new tn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new k0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Er extends wS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class z0 extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class TS extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class No{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=s[o+0],g=s[o+1],_=s[o+2],S=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=g,e[n+2]=_,e[n+3]=S;return}if(f!==S||l!==h||c!==g||d!==_){let p=1-a;const u=l*h+c*g+d*_+f*S,x=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const C=Math.sqrt(v),b=Math.atan2(C,u*x);p=Math.sin(p*b)/C,a=Math.sin(a*b)/C}const E=a*x;if(l=l*p+h*E,c=c*p+g*E,d=d*p+_*E,f=f*p+S*E,p===1-a){const C=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=C,c*=C,d*=C,f*=C}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[o],h=s[o+1],g=s[o+2],_=s[o+3];return e[n]=a*_+d*f+l*g-c*h,e[n+1]=l*_+d*h+c*f-a*g,e[n+2]=c*_+d*g+a*h-l*f,e[n+3]=d*_-a*f-l*h-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(s/2),h=l(i/2),g=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*d*f+c*g*_,this._y=c*g*f-h*d*_,this._z=c*d*_+h*g*f,this._w=c*d*f-h*g*_;break;case"YXZ":this._x=h*d*f+c*g*_,this._y=c*g*f-h*d*_,this._z=c*d*_-h*g*f,this._w=c*d*f+h*g*_;break;case"ZXY":this._x=h*d*f-c*g*_,this._y=c*g*f+h*d*_,this._z=c*d*_+h*g*f,this._w=c*d*f-h*g*_;break;case"ZYX":this._x=h*d*f-c*g*_,this._y=c*g*f+h*d*_,this._z=c*d*_-h*g*f,this._w=c*d*f+h*g*_;break;case"YZX":this._x=h*d*f+c*g*_,this._y=c*g*f+h*d*_,this._z=c*d*_-h*g*f,this._w=c*d*f-h*g*_;break;case"XZY":this._x=h*d*f-c*g*_,this._y=c*g*f-h*d*_,this._z=c*d*_+h*g*f,this._w=c*d*f+h*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+a+f;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(d-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>f){const g=2*Math.sqrt(1+i-a-f);this._w=(d-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>f){const g=2*Math.sqrt(1+a-i-f);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+f-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(pp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(pp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*d,this.y=i+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Sc.copy(this).projectOnVector(e),this.sub(Sc)}reflect(e){return this.sub(Sc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sc=new z,pp=new No;class Po{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(An.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(An.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=An.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,An):An.fromBufferAttribute(s,o),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ta.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ta.copy(i.boundingBox)),ta.applyMatrix4(e.matrixWorld),this.union(ta)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bs),na.subVectors(this.max,Bs),Cr.subVectors(e.a,Bs),Nr.subVectors(e.b,Bs),Pr.subVectors(e.c,Bs),xi.subVectors(Nr,Cr),_i.subVectors(Pr,Nr),Ki.subVectors(Cr,Pr);let n=[0,-xi.z,xi.y,0,-_i.z,_i.y,0,-Ki.z,Ki.y,xi.z,0,-xi.x,_i.z,0,-_i.x,Ki.z,0,-Ki.x,-xi.y,xi.x,0,-_i.y,_i.x,0,-Ki.y,Ki.x,0];return!Ec(n,Cr,Nr,Pr,na)||(n=[1,0,0,0,1,0,0,0,1],!Ec(n,Cr,Nr,Pr,na))?!1:(ia.crossVectors(xi,_i),n=[ia.x,ia.y,ia.z],Ec(n,Cr,Nr,Pr,na))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yn=[new z,new z,new z,new z,new z,new z,new z,new z],An=new z,ta=new Po,Cr=new z,Nr=new z,Pr=new z,xi=new z,_i=new z,Ki=new z,Bs=new z,na=new z,ia=new z,Zi=new z;function Ec(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Zi.fromArray(t,s);const a=r.x*Math.abs(Zi.x)+r.y*Math.abs(Zi.y)+r.z*Math.abs(Zi.z),l=e.dot(Zi),c=n.dot(Zi),d=i.dot(Zi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const AS=new Po,Hs=new z,Mc=new z;class Ol{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):AS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hs.subVectors(e,this.center);const n=Hs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Hs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hs.copy(e.center).add(Mc)),this.expandByPoint(Hs.copy(e.center).sub(Mc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $n=new z,wc=new z,ra=new z,yi=new z,Tc=new z,sa=new z,Ac=new z;class B0{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=$n.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,n),$n.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){wc.copy(e).add(n).multiplyScalar(.5),ra.copy(n).sub(e).normalize(),yi.copy(this.origin).sub(wc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ra),a=yi.dot(this.direction),l=-yi.dot(ra),c=yi.lengthSq(),d=Math.abs(1-o*o);let f,h,g,_;if(d>0)if(f=o*l-a,h=o*a-l,_=s*d,f>=0)if(h>=-_)if(h<=_){const S=1/d;f*=S,h*=S,g=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),g=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),g=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),g=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),g=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),g=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),g=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(wc).addScaledVector(ra,h),g}intersectSphere(e,n){$n.subVectors(e.center,this.origin);const i=$n.dot(this.direction),r=$n.dot($n)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,n,i,r,s){Tc.subVectors(n,e),sa.subVectors(i,e),Ac.crossVectors(Tc,sa);let o=this.direction.dot(Ac),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,e);const l=a*this.direction.dot(sa.crossVectors(yi,sa));if(l<0)return null;const c=a*this.direction.dot(Tc.cross(yi));if(c<0||l+c>o)return null;const d=-a*yi.dot(Ac);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,n,i,r,s,o,a,l,c,d,f,h,g,_,S,p){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,f,h,g,_,S,p)}set(e,n,i,r,s,o,a,l,c,d,f,h,g,_,S,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=g,u[7]=_,u[11]=S,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Lr.setFromMatrixColumn(e,0).length(),s=1/Lr.setFromMatrixColumn(e,1).length(),o=1/Lr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*d,g=o*f,_=a*d,S=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=g+_*c,n[5]=h-S*c,n[9]=-a*l,n[2]=S-h*c,n[6]=_+g*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*d,g=l*f,_=c*d,S=c*f;n[0]=h+S*a,n[4]=_*a-g,n[8]=o*c,n[1]=o*f,n[5]=o*d,n[9]=-a,n[2]=g*a-_,n[6]=S+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*d,g=l*f,_=c*d,S=c*f;n[0]=h-S*a,n[4]=-o*f,n[8]=_+g*a,n[1]=g+_*a,n[5]=o*d,n[9]=S-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*d,g=o*f,_=a*d,S=a*f;n[0]=l*d,n[4]=_*c-g,n[8]=h*c+S,n[1]=l*f,n[5]=S*c+h,n[9]=g*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,g=o*c,_=a*l,S=a*c;n[0]=l*d,n[4]=S-h*f,n[8]=_*f+g,n[1]=f,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=g*f+_,n[10]=h-S*f}else if(e.order==="XZY"){const h=o*l,g=o*c,_=a*l,S=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+S,n[5]=o*d,n[9]=g*f-_,n[2]=_*f-g,n[6]=a*d,n[10]=S*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bS,e,RS)}lookAt(e,n,i){const r=this.elements;return on.subVectors(e,n),on.lengthSq()===0&&(on.z=1),on.normalize(),Si.crossVectors(i,on),Si.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Si.crossVectors(i,on)),Si.normalize(),oa.crossVectors(on,Si),r[0]=Si.x,r[4]=oa.x,r[8]=on.x,r[1]=Si.y,r[5]=oa.y,r[9]=on.y,r[2]=Si.z,r[6]=oa.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],g=i[13],_=i[2],S=i[6],p=i[10],u=i[14],x=i[3],v=i[7],E=i[11],C=i[15],b=r[0],A=r[4],P=r[8],K=r[12],y=r[1],T=r[5],j=r[9],V=r[13],B=r[2],$=r[6],H=r[10],X=r[14],N=r[3],G=r[7],Q=r[11],se=r[15];return s[0]=o*b+a*y+l*B+c*N,s[4]=o*A+a*T+l*$+c*G,s[8]=o*P+a*j+l*H+c*Q,s[12]=o*K+a*V+l*X+c*se,s[1]=d*b+f*y+h*B+g*N,s[5]=d*A+f*T+h*$+g*G,s[9]=d*P+f*j+h*H+g*Q,s[13]=d*K+f*V+h*X+g*se,s[2]=_*b+S*y+p*B+u*N,s[6]=_*A+S*T+p*$+u*G,s[10]=_*P+S*j+p*H+u*Q,s[14]=_*K+S*V+p*X+u*se,s[3]=x*b+v*y+E*B+C*N,s[7]=x*A+v*T+E*$+C*G,s[11]=x*P+v*j+E*H+C*Q,s[15]=x*K+v*V+E*X+C*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],g=e[14],_=e[3],S=e[7],p=e[11],u=e[15];return _*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*g-i*l*g)+S*(+n*l*g-n*c*h+s*o*h-r*o*g+r*c*d-s*l*d)+p*(+n*c*f-n*a*g-s*o*f+i*o*g+s*a*d-i*c*d)+u*(-r*a*d-n*l*f+n*a*h+r*o*f-i*o*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],g=e[11],_=e[12],S=e[13],p=e[14],u=e[15],x=f*p*c-S*h*c+S*l*g-a*p*g-f*l*u+a*h*u,v=_*h*c-d*p*c-_*l*g+o*p*g+d*l*u-o*h*u,E=d*S*c-_*f*c+_*a*g-o*S*g-d*a*u+o*f*u,C=_*f*l-d*S*l-_*a*h+o*S*h+d*a*p-o*f*p,b=n*x+i*v+r*E+s*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=x*A,e[1]=(S*h*s-f*p*s-S*r*g+i*p*g+f*r*u-i*h*u)*A,e[2]=(a*p*s-S*l*s+S*r*c-i*p*c-a*r*u+i*l*u)*A,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*g-i*l*g)*A,e[4]=v*A,e[5]=(d*p*s-_*h*s+_*r*g-n*p*g-d*r*u+n*h*u)*A,e[6]=(_*l*s-o*p*s-_*r*c+n*p*c+o*r*u-n*l*u)*A,e[7]=(o*h*s-d*l*s+d*r*c-n*h*c-o*r*g+n*l*g)*A,e[8]=E*A,e[9]=(_*f*s-d*S*s-_*i*g+n*S*g+d*i*u-n*f*u)*A,e[10]=(o*S*s-_*a*s+_*i*c-n*S*c-o*i*u+n*a*u)*A,e[11]=(d*a*s-o*f*s-d*i*c+n*f*c+o*i*g-n*a*g)*A,e[12]=C*A,e[13]=(d*S*r-_*f*r+_*i*h-n*S*h-d*i*p+n*f*p)*A,e[14]=(_*a*r-o*S*r-_*i*l+n*S*l+o*i*p-n*a*p)*A,e[15]=(o*f*r-d*a*r+d*i*l-n*f*l-o*i*h+n*a*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,f=a+a,h=s*c,g=s*d,_=s*f,S=o*d,p=o*f,u=a*f,x=l*c,v=l*d,E=l*f,C=i.x,b=i.y,A=i.z;return r[0]=(1-(S+u))*C,r[1]=(g+E)*C,r[2]=(_-v)*C,r[3]=0,r[4]=(g-E)*b,r[5]=(1-(h+u))*b,r[6]=(p+x)*b,r[7]=0,r[8]=(_+v)*A,r[9]=(p-x)*A,r[10]=(1-(h+S))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Lr.set(r[0],r[1],r[2]).length();const o=Lr.set(r[4],r[5],r[6]).length(),a=Lr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],bn.copy(this);const c=1/s,d=1/o,f=1/a;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=d,bn.elements[5]*=d,bn.elements[6]*=d,bn.elements[8]*=f,bn.elements[9]*=f,bn.elements[10]*=f,n.setFromRotationMatrix(bn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=si){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let g,_;if(a===si)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===gl)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=si){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(o-s),h=(n+e)*c,g=(i+r)*d;let _,S;if(a===si)_=(o+s)*f,S=-2*f;else if(a===gl)_=s*f,S=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=S,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Lr=new z,bn=new ft,bS=new z(0,0,0),RS=new z(1,1,1),Si=new z,oa=new z,on=new z,mp=new ft,gp=new No;class hi{constructor(e=0,n=0,i=0,r=hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return mp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return gp.setFromEuler(this),this.setFromQuaternion(gp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hi.DEFAULT_ORDER="XYZ";class H0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let CS=0;const vp=new z,Ir=new No,qn=new ft,aa=new z,Vs=new z,NS=new z,PS=new No,xp=new z(1,0,0),_p=new z(0,1,0),yp=new z(0,0,1),Sp={type:"added"},LS={type:"removed"},Dr={type:"childadded",child:null},bc={type:"childremoved",child:null};class Lt extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=Co(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new z,n=new hi,i=new No,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new Ue}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new H0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ir.setFromAxisAngle(e,n),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(e,n){return Ir.setFromAxisAngle(e,n),this.quaternion.premultiply(Ir),this}rotateX(e){return this.rotateOnAxis(xp,e)}rotateY(e){return this.rotateOnAxis(_p,e)}rotateZ(e){return this.rotateOnAxis(yp,e)}translateOnAxis(e,n){return vp.copy(e).applyQuaternion(this.quaternion),this.position.add(vp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(xp,e)}translateY(e){return this.translateOnAxis(_p,e)}translateZ(e){return this.translateOnAxis(yp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?aa.copy(e):aa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Vs,aa,this.up):qn.lookAt(aa,Vs,this.up),this.quaternion.setFromRotationMatrix(qn),r&&(qn.extractRotation(r.matrixWorld),Ir.setFromRotationMatrix(qn),this.quaternion.premultiply(Ir.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sp),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(LS),bc.child=e,this.dispatchEvent(bc),bc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sp),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,e,NS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,PS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),g=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Lt.DEFAULT_UP=new z(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new z,Kn=new z,Rc=new z,Zn=new z,Ur=new z,Or=new z,Ep=new z,Cc=new z,Nc=new z,Pc=new z,Lc=new gt,Ic=new gt,Dc=new gt;class In{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Rn.subVectors(e,n),r.cross(Rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Rn.subVectors(r,n),Kn.subVectors(i,n),Rc.subVectors(e,n);const o=Rn.dot(Rn),a=Rn.dot(Kn),l=Rn.dot(Rc),c=Kn.dot(Kn),d=Kn.dot(Rc),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,g=(c*l-a*d)*h,_=(o*d-a*l)*h;return s.set(1-g-_,_,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Zn.x),l.addScaledVector(o,Zn.y),l.addScaledVector(a,Zn.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Lc.setScalar(0),Ic.setScalar(0),Dc.setScalar(0),Lc.fromBufferAttribute(e,n),Ic.fromBufferAttribute(e,i),Dc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Lc,s.x),o.addScaledVector(Ic,s.y),o.addScaledVector(Dc,s.z),o}static isFrontFacing(e,n,i,r){return Rn.subVectors(i,n),Kn.subVectors(e,n),Rn.cross(Kn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Rn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return In.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return In.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ur.subVectors(r,i),Or.subVectors(s,i),Cc.subVectors(e,i);const l=Ur.dot(Cc),c=Or.dot(Cc);if(l<=0&&c<=0)return n.copy(i);Nc.subVectors(e,r);const d=Ur.dot(Nc),f=Or.dot(Nc);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Ur,o);Pc.subVectors(e,s);const g=Ur.dot(Pc),_=Or.dot(Pc);if(_>=0&&g<=_)return n.copy(s);const S=g*c-l*_;if(S<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Or,a);const p=d*_-g*f;if(p<=0&&f-d>=0&&g-_>=0)return Ep.subVectors(s,r),a=(f-d)/(f-d+(g-_)),n.copy(r).addScaledVector(Ep,a);const u=1/(p+S+h);return o=S*u,a=h*u,n.copy(i).addScaledVector(Ur,o).addScaledVector(Or,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const V0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},la={h:0,s:0,l:0};function Uc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ye{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ke.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ke.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ke.workingColorSpace){if(e=mS(e,1),n=qt(n,0,1),i=qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Uc(o,s,e+1/3),this.g=Uc(o,s,e),this.b=Uc(o,s,e-1/3)}return Ke.toWorkingColorSpace(this,r),this}setStyle(e,n=Hn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Hn){const i=V0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}copyLinearToSRGB(e){return this.r=_c(e.r),this.g=_c(e.g),this.b=_c(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return Ke.fromWorkingColorSpace(Ft.copy(this),e),Math.round(qt(Ft.r*255,0,255))*65536+Math.round(qt(Ft.g*255,0,255))*256+Math.round(qt(Ft.b*255,0,255))}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Ft.copy(this),n);const i=Ft.r,r=Ft.g,s=Ft.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Ft.copy(this),n),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Hn){Ke.fromWorkingColorSpace(Ft.copy(this),e);const n=Ft.r,i=Ft.g,r=Ft.b;return e!==Hn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+n,Ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ei),e.getHSL(la);const i=vc(Ei.h,la.h,n),r=vc(Ei.s,la.s,n),s=vc(Ei.l,la.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Ye;Ye.NAMES=V0;let IS=0;class Lo extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=Co(),this.name="",this.type="Material",this.blending=os,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vu,this.blendDst=Gu,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(i.blending=this.blending),this.side!==Gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vu&&(i.blendSrc=this.blendSrc),this.blendDst!==Gu&&(i.blendDst=this.blendDst),this.blendEquation!==or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==br&&(i.stencilFail=this.stencilFail),this.stencilZFail!==br&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==br&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class G0 extends Lo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=w0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new z,ca=new Je;class Fn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=cp,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ca.fromBufferAttribute(this,n),ca.applyMatrix3(e),this.setXY(n,ca.x,ca.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ks(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Yt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ks(n,this.array)),n}setX(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ks(n,this.array)),n}setY(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ks(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ks(n,this.array)),n}setW(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array),s=Yt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cp&&(e.usage=this.usage),e}}class j0 extends Fn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class W0 extends Fn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class mr extends Fn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let DS=0;const mn=new ft,Oc=new Lt,Fr=new z,an=new Po,Gs=new Po,At=new z;class mi extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:DS++}),this.uuid=Co(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(F0(e)?W0:j0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,n,i){return mn.makeTranslation(e,n,i),this.applyMatrix4(mn),this}scale(e,n,i){return mn.makeScale(e,n,i),this.applyMatrix4(mn),this}lookAt(e){return Oc.lookAt(e),Oc.updateMatrix(),this.applyMatrix4(Oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new mr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];an.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ol);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(an.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Gs.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(an.min,Gs.min),an.expandByPoint(At),At.addVectors(an.max,Gs.max),an.expandByPoint(At)):(an.expandByPoint(Gs.min),an.expandByPoint(Gs.max))}an.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)At.fromBufferAttribute(a,c),l&&(Fr.fromBufferAttribute(e,c),At.add(Fr)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new z,l[P]=new z;const c=new z,d=new z,f=new z,h=new Je,g=new Je,_=new Je,S=new z,p=new z;function u(P,K,y){c.fromBufferAttribute(i,P),d.fromBufferAttribute(i,K),f.fromBufferAttribute(i,y),h.fromBufferAttribute(s,P),g.fromBufferAttribute(s,K),_.fromBufferAttribute(s,y),d.sub(c),f.sub(c),g.sub(h),_.sub(h);const T=1/(g.x*_.y-_.x*g.y);isFinite(T)&&(S.copy(d).multiplyScalar(_.y).addScaledVector(f,-g.y).multiplyScalar(T),p.copy(f).multiplyScalar(g.x).addScaledVector(d,-_.x).multiplyScalar(T),a[P].add(S),a[K].add(S),a[y].add(S),l[P].add(p),l[K].add(p),l[y].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,K=x.length;P<K;++P){const y=x[P],T=y.start,j=y.count;for(let V=T,B=T+j;V<B;V+=3)u(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const v=new z,E=new z,C=new z,b=new z;function A(P){C.fromBufferAttribute(r,P),b.copy(C);const K=a[P];v.copy(K),v.sub(C.multiplyScalar(C.dot(K))).normalize(),E.crossVectors(b,K);const T=E.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,T)}for(let P=0,K=x.length;P<K;++P){const y=x[P],T=y.start,j=y.count;for(let V=T,B=T+j;V<B;V+=3)A(e.getX(V+0)),A(e.getX(V+1)),A(e.getX(V+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Fn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,d=new z,f=new z;if(e)for(let h=0,g=e.count;h<g;h+=3){const _=e.getX(h+0),S=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,S),o.fromBufferAttribute(n,p),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,p),a.add(d),l.add(d),c.add(d),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,g=n.count;h<g;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)At.fromBufferAttribute(e,n),At.normalize(),e.setXYZ(n,At.x,At.y,At.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,h=new c.constructor(l.length*d);let g=0,_=0;for(let S=0,p=l.length;S<p;S++){a.isInterleavedBufferAttribute?g=l[S]*a.data.stride+a.offset:g=l[S]*d;for(let u=0;u<d;u++)h[_++]=c[g++]}return new Fn(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new mi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const h=c[d],g=e(h,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const g=c[f];d.push(g.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,g=f.length;h<g;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mp=new ft,Qi=new B0,ua=new Ol,wp=new z,da=new z,fa=new z,ha=new z,Fc=new z,pa=new z,Tp=new z,ma=new z;class oi extends Lt{constructor(e=new mi,n=new G0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){pa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(Fc.fromBufferAttribute(f,e),o?pa.addScaledVector(Fc,d):pa.addScaledVector(Fc.sub(n),d))}n.add(pa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ua.copy(i.boundingSphere),ua.applyMatrix4(s),Qi.copy(e.ray).recast(e.near),!(ua.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(ua,wp)===null||Qi.origin.distanceToSquared(wp)>(e.far-e.near)**2))&&(Mp.copy(s).invert(),Qi.copy(e.ray).applyMatrix4(Mp),!(i.boundingBox!==null&&Qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Qi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,S=h.length;_<S;_++){const p=h[_],u=o[p.materialIndex],x=Math.max(p.start,g.start),v=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let E=x,C=v;E<C;E+=3){const b=a.getX(E),A=a.getX(E+1),P=a.getX(E+2);r=ga(this,u,e,i,c,d,f,b,A,P),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),S=Math.min(a.count,g.start+g.count);for(let p=_,u=S;p<u;p+=3){const x=a.getX(p),v=a.getX(p+1),E=a.getX(p+2);r=ga(this,o,e,i,c,d,f,x,v,E),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,S=h.length;_<S;_++){const p=h[_],u=o[p.materialIndex],x=Math.max(p.start,g.start),v=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let E=x,C=v;E<C;E+=3){const b=E,A=E+1,P=E+2;r=ga(this,u,e,i,c,d,f,b,A,P),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),S=Math.min(l.count,g.start+g.count);for(let p=_,u=S;p<u;p+=3){const x=p,v=p+1,E=p+2;r=ga(this,o,e,i,c,d,f,x,v,E),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function US(t,e,n,i,r,s,o,a){let l;if(e.side===en?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Gi,a),l===null)return null;ma.copy(a),ma.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ma);return c<n.near||c>n.far?null:{distance:c,point:ma.clone(),object:t}}function ga(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,da),t.getVertexPosition(l,fa),t.getVertexPosition(c,ha);const d=US(t,e,n,i,da,fa,ha,Tp);if(d){const f=new z;In.getBarycoord(Tp,da,fa,ha,f),r&&(d.uv=In.getInterpolatedAttribute(r,a,l,c,f,new Je)),s&&(d.uv1=In.getInterpolatedAttribute(s,a,l,c,f,new Je)),o&&(d.normal=In.getInterpolatedAttribute(o,a,l,c,f,new z),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new z,materialIndex:0};In.getNormal(da,fa,ha,h.normal),d.face=h,d.barycoord=f}return d}class As extends mi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let h=0,g=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new mr(c,3)),this.setAttribute("normal",new mr(d,3)),this.setAttribute("uv",new mr(f,2));function _(S,p,u,x,v,E,C,b,A,P,K){const y=E/A,T=C/P,j=E/2,V=C/2,B=b/2,$=A+1,H=P+1;let X=0,N=0;const G=new z;for(let Q=0;Q<H;Q++){const se=Q*T-V;for(let we=0;we<$;we++){const Fe=we*y-j;G[S]=Fe*x,G[p]=se*v,G[u]=B,c.push(G.x,G.y,G.z),G[S]=0,G[p]=0,G[u]=b>0?1:-1,d.push(G.x,G.y,G.z),f.push(we/A),f.push(1-Q/P),X+=1}}for(let Q=0;Q<P;Q++)for(let se=0;se<A;se++){const we=h+se+$*Q,Fe=h+se+$*(Q+1),Y=h+(se+1)+$*(Q+1),te=h+(se+1)+$*Q;l.push(we,Fe,te),l.push(Fe,Y,te),N+=6}a.addGroup(g,N,K),g+=N,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new As(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ss(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Bt(t){const e={};for(let n=0;n<t.length;n++){const i=Ss(t[n]);for(const r in i)e[r]=i[r]}return e}function OS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function X0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const FS={clone:Ss,merge:Bt};var kS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends Lo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kS,this.fragmentShader=zS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ss(e.uniforms),this.uniformsGroups=OS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Y0 extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=si}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new z,Ap=new Je,bp=new Je;class xn extends Y0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=bd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bd*2*Math.atan(Math.tan(gc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,n){return this.getViewBounds(e,Ap,bp),n.subVectors(bp,Ap)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(gc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const kr=-90,zr=1;class BS extends Lt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new xn(kr,zr,e,n);r.layers=this.layers,this.add(r);const s=new xn(kr,zr,e,n);s.layers=this.layers,this.add(s);const o=new xn(kr,zr,e,n);o.layers=this.layers,this.add(o);const a=new xn(kr,zr,e,n);a.layers=this.layers,this.add(a);const l=new xn(kr,zr,e,n);l.layers=this.layers,this.add(l);const c=new xn(kr,zr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===gl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,g),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class $0 extends tn{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:vs,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class HS extends Er{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new $0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ln}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new As(5,5,5),s=new ji({name:"CubemapFromEquirect",uniforms:Ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:zi});s.uniforms.tEquirect.value=n;const o=new oi(r,s),a=n.minFilter;return n.minFilter===fr&&(n.minFilter=Ln),new BS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const kc=new z,VS=new z,GS=new Ue;class rr{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=kc.subVectors(i,n).cross(VS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(kc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||GS.getNormalMatrix(e),r=this.coplanarPoint(kc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ji=new Ol,va=new z;class Of{constructor(e=new rr,n=new rr,i=new rr,r=new rr,s=new rr,o=new rr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=si){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],f=r[6],h=r[7],g=r[8],_=r[9],S=r[10],p=r[11],u=r[12],x=r[13],v=r[14],E=r[15];if(i[0].setComponents(l-s,h-c,p-g,E-u).normalize(),i[1].setComponents(l+s,h+c,p+g,E+u).normalize(),i[2].setComponents(l+o,h+d,p+_,E+x).normalize(),i[3].setComponents(l-o,h-d,p-_,E-x).normalize(),i[4].setComponents(l-a,h-f,p-S,E-v).normalize(),n===si)i[5].setComponents(l+a,h+f,p+S,E+v).normalize();else if(n===gl)i[5].setComponents(a,f,S,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ji.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(va.x=r.normal.x>0?e.max.x:e.min.x,va.y=r.normal.y>0?e.max.y:e.min.y,va.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(va)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function q0(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function jS(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,d),a.onUploadCallback();let g;if(c instanceof Float32Array)g=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=t.SHORT;else if(c instanceof Uint32Array)g=t.UNSIGNED_INT;else if(c instanceof Int32Array)g=t.INT;else if(c instanceof Int8Array)g=t.BYTE;else if(c instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,d);else{f.sort((g,_)=>g.start-_.start);let h=0;for(let g=1;g<f.length;g++){const _=f[h],S=f[g];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++h,f[h]=S)}f.length=h+1;for(let g=0,_=f.length;g<_;g++){const S=f[g];t.bufferSubData(c,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Fl extends mi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,h=n/l,g=[],_=[],S=[],p=[];for(let u=0;u<d;u++){const x=u*h-o;for(let v=0;v<c;v++){const E=v*f-s;_.push(E,-x,0),S.push(0,0,1),p.push(v/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let x=0;x<a;x++){const v=x+c*u,E=x+c*(u+1),C=x+1+c*(u+1),b=x+1+c*u;g.push(v,E,b),g.push(E,C,b)}this.setIndex(g),this.setAttribute("position",new mr(_,3)),this.setAttribute("normal",new mr(S,3)),this.setAttribute("uv",new mr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fl(e.width,e.height,e.widthSegments,e.heightSegments)}}var WS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,XS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,YS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$S=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,KS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,QS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,eE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,oE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,aE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_E=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,SE="gl_FragColor = linearToOutputTexel( gl_FragColor );",EE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ME=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,TE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,AE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,RE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,NE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,LE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,IE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,FE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,kE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,VE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,GE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,WE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,XE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$E=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,aM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_M=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,SM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,EM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,MM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,bM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,RM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,CM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,NM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,LM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,DM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,BM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,VM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,GM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ZM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,QM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,JM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,e1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,t1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,s1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,c1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,d1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,f1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,m1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,y1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,E1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,M1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,De={alphahash_fragment:WS,alphahash_pars_fragment:XS,alphamap_fragment:YS,alphamap_pars_fragment:$S,alphatest_fragment:qS,alphatest_pars_fragment:KS,aomap_fragment:ZS,aomap_pars_fragment:QS,batching_pars_vertex:JS,batching_vertex:eE,begin_vertex:tE,beginnormal_vertex:nE,bsdfs:iE,iridescence_fragment:rE,bumpmap_pars_fragment:sE,clipping_planes_fragment:oE,clipping_planes_pars_fragment:aE,clipping_planes_pars_vertex:lE,clipping_planes_vertex:cE,color_fragment:uE,color_pars_fragment:dE,color_pars_vertex:fE,color_vertex:hE,common:pE,cube_uv_reflection_fragment:mE,defaultnormal_vertex:gE,displacementmap_pars_vertex:vE,displacementmap_vertex:xE,emissivemap_fragment:_E,emissivemap_pars_fragment:yE,colorspace_fragment:SE,colorspace_pars_fragment:EE,envmap_fragment:ME,envmap_common_pars_fragment:wE,envmap_pars_fragment:TE,envmap_pars_vertex:AE,envmap_physical_pars_fragment:FE,envmap_vertex:bE,fog_vertex:RE,fog_pars_vertex:CE,fog_fragment:NE,fog_pars_fragment:PE,gradientmap_pars_fragment:LE,lightmap_pars_fragment:IE,lights_lambert_fragment:DE,lights_lambert_pars_fragment:UE,lights_pars_begin:OE,lights_toon_fragment:kE,lights_toon_pars_fragment:zE,lights_phong_fragment:BE,lights_phong_pars_fragment:HE,lights_physical_fragment:VE,lights_physical_pars_fragment:GE,lights_fragment_begin:jE,lights_fragment_maps:WE,lights_fragment_end:XE,logdepthbuf_fragment:YE,logdepthbuf_pars_fragment:$E,logdepthbuf_pars_vertex:qE,logdepthbuf_vertex:KE,map_fragment:ZE,map_pars_fragment:QE,map_particle_fragment:JE,map_particle_pars_fragment:eM,metalnessmap_fragment:tM,metalnessmap_pars_fragment:nM,morphinstance_vertex:iM,morphcolor_vertex:rM,morphnormal_vertex:sM,morphtarget_pars_vertex:oM,morphtarget_vertex:aM,normal_fragment_begin:lM,normal_fragment_maps:cM,normal_pars_fragment:uM,normal_pars_vertex:dM,normal_vertex:fM,normalmap_pars_fragment:hM,clearcoat_normal_fragment_begin:pM,clearcoat_normal_fragment_maps:mM,clearcoat_pars_fragment:gM,iridescence_pars_fragment:vM,opaque_fragment:xM,packing:_M,premultiplied_alpha_fragment:yM,project_vertex:SM,dithering_fragment:EM,dithering_pars_fragment:MM,roughnessmap_fragment:wM,roughnessmap_pars_fragment:TM,shadowmap_pars_fragment:AM,shadowmap_pars_vertex:bM,shadowmap_vertex:RM,shadowmask_pars_fragment:CM,skinbase_vertex:NM,skinning_pars_vertex:PM,skinning_vertex:LM,skinnormal_vertex:IM,specularmap_fragment:DM,specularmap_pars_fragment:UM,tonemapping_fragment:OM,tonemapping_pars_fragment:FM,transmission_fragment:kM,transmission_pars_fragment:zM,uv_pars_fragment:BM,uv_pars_vertex:HM,uv_vertex:VM,worldpos_vertex:GM,background_vert:jM,background_frag:WM,backgroundCube_vert:XM,backgroundCube_frag:YM,cube_vert:$M,cube_frag:qM,depth_vert:KM,depth_frag:ZM,distanceRGBA_vert:QM,distanceRGBA_frag:JM,equirect_vert:e1,equirect_frag:t1,linedashed_vert:n1,linedashed_frag:i1,meshbasic_vert:r1,meshbasic_frag:s1,meshlambert_vert:o1,meshlambert_frag:a1,meshmatcap_vert:l1,meshmatcap_frag:c1,meshnormal_vert:u1,meshnormal_frag:d1,meshphong_vert:f1,meshphong_frag:h1,meshphysical_vert:p1,meshphysical_frag:m1,meshtoon_vert:g1,meshtoon_frag:v1,points_vert:x1,points_frag:_1,shadow_vert:y1,shadow_frag:S1,sprite_vert:E1,sprite_frag:M1},oe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Vn={basic:{uniforms:Bt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Bt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Bt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Bt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Bt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Bt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Bt([oe.points,oe.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Bt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Bt([oe.common,oe.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Bt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Bt([oe.sprite,oe.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:Bt([oe.common,oe.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:Bt([oe.lights,oe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Vn.physical={uniforms:Bt([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const xa={r:0,b:0,g:0},er=new hi,w1=new ft;function T1(t,e,n,i,r,s,o){const a=new Ye(0);let l=s===!0?0:1,c,d,f=null,h=0,g=null;function _(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?n:e).get(v)),v}function S(x){let v=!1;const E=_(x);E===null?u(a,l):E&&E.isColor&&(u(E,1),v=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(x,v){const E=_(v);E&&(E.isCubeTexture||E.mapping===Dl)?(d===void 0&&(d=new oi(new As(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:Ss(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),er.copy(v.backgroundRotation),er.x*=-1,er.y*=-1,er.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),d.material.uniforms.envMap.value=E,d.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(w1.makeRotationFromEuler(er)),d.material.toneMapped=Ke.getTransfer(E.colorSpace)!==ot,(f!==E||h!==E.version||g!==t.toneMapping)&&(d.material.needsUpdate=!0,f=E,h=E.version,g=t.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new oi(new Fl(2,2),new ji({name:"BackgroundMaterial",uniforms:Ss(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(E.colorSpace)!==ot,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||h!==E.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,f=E,h=E.version,g=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function u(x,v){x.getRGB(xa,X0(t)),i.buffers.color.setClear(xa.r,xa.g,xa.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,u(a,l)},render:S,addToRenderList:p}}function A1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(y,T,j,V,B){let $=!1;const H=f(V,j,T);s!==H&&(s=H,c(s.object)),$=g(y,V,j,B),$&&_(y,V,j,B),B!==null&&e.update(B,t.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,E(y,T,j,V),B!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function d(y){return t.deleteVertexArray(y)}function f(y,T,j){const V=j.wireframe===!0;let B=i[y.id];B===void 0&&(B={},i[y.id]=B);let $=B[T.id];$===void 0&&($={},B[T.id]=$);let H=$[V];return H===void 0&&(H=h(l()),$[V]=H),H}function h(y){const T=[],j=[],V=[];for(let B=0;B<n;B++)T[B]=0,j[B]=0,V[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:j,attributeDivisors:V,object:y,attributes:{},index:null}}function g(y,T,j,V){const B=s.attributes,$=T.attributes;let H=0;const X=j.getAttributes();for(const N in X)if(X[N].location>=0){const Q=B[N];let se=$[N];if(se===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(se=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(se=y.instanceColor)),Q===void 0||Q.attribute!==se||se&&Q.data!==se.data)return!0;H++}return s.attributesNum!==H||s.index!==V}function _(y,T,j,V){const B={},$=T.attributes;let H=0;const X=j.getAttributes();for(const N in X)if(X[N].location>=0){let Q=$[N];Q===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor));const se={};se.attribute=Q,Q&&Q.data&&(se.data=Q.data),B[N]=se,H++}s.attributes=B,s.attributesNum=H,s.index=V}function S(){const y=s.newAttributes;for(let T=0,j=y.length;T<j;T++)y[T]=0}function p(y){u(y,0)}function u(y,T){const j=s.newAttributes,V=s.enabledAttributes,B=s.attributeDivisors;j[y]=1,V[y]===0&&(t.enableVertexAttribArray(y),V[y]=1),B[y]!==T&&(t.vertexAttribDivisor(y,T),B[y]=T)}function x(){const y=s.newAttributes,T=s.enabledAttributes;for(let j=0,V=T.length;j<V;j++)T[j]!==y[j]&&(t.disableVertexAttribArray(j),T[j]=0)}function v(y,T,j,V,B,$,H){H===!0?t.vertexAttribIPointer(y,T,j,B,$):t.vertexAttribPointer(y,T,j,V,B,$)}function E(y,T,j,V){S();const B=V.attributes,$=j.getAttributes(),H=T.defaultAttributeValues;for(const X in $){const N=$[X];if(N.location>=0){let G=B[X];if(G===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(G=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(G=y.instanceColor)),G!==void 0){const Q=G.normalized,se=G.itemSize,we=e.get(G);if(we===void 0)continue;const Fe=we.buffer,Y=we.type,te=we.bytesPerElement,fe=Y===t.INT||Y===t.UNSIGNED_INT||G.gpuType===Cf;if(G.isInterleavedBufferAttribute){const ce=G.data,Le=ce.stride,Ae=G.offset;if(ce.isInstancedInterleavedBuffer){for(let Be=0;Be<N.locationSize;Be++)u(N.location+Be,ce.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Be=0;Be<N.locationSize;Be++)p(N.location+Be);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let Be=0;Be<N.locationSize;Be++)v(N.location+Be,se/N.locationSize,Y,Q,Le*te,(Ae+se/N.locationSize*Be)*te,fe)}else{if(G.isInstancedBufferAttribute){for(let ce=0;ce<N.locationSize;ce++)u(N.location+ce,G.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ce=0;ce<N.locationSize;ce++)p(N.location+ce);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let ce=0;ce<N.locationSize;ce++)v(N.location+ce,se/N.locationSize,Y,Q,se*te,se/N.locationSize*ce*te,fe)}}else if(H!==void 0){const Q=H[X];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(N.location,Q);break;case 3:t.vertexAttrib3fv(N.location,Q);break;case 4:t.vertexAttrib4fv(N.location,Q);break;default:t.vertexAttrib1fv(N.location,Q)}}}}x()}function C(){P();for(const y in i){const T=i[y];for(const j in T){const V=T[j];for(const B in V)d(V[B].object),delete V[B];delete T[j]}delete i[y]}}function b(y){if(i[y.id]===void 0)return;const T=i[y.id];for(const j in T){const V=T[j];for(const B in V)d(V[B].object),delete V[B];delete T[j]}delete i[y.id]}function A(y){for(const T in i){const j=i[T];if(j[y.id]===void 0)continue;const V=j[y.id];for(const B in V)d(V[B].object),delete V[B];delete j[y.id]}}function P(){K(),o=!0,s!==r&&(s=r,c(s.object))}function K(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:K,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:S,enableAttribute:p,disableUnusedAttributes:x}}function b1(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function o(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),n.update(d,i,f))}function a(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=d[_];n.update(g,i,1)}function l(c,d,f,h){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<c.length;_++)o(c[_],d[_],h[_]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,f);let _=0;for(let S=0;S<f;S++)_+=d[S];for(let S=0;S<h.length;S++)n.update(_,i,h[S])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function R1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Dn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===Ro&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==fi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ri&&!P)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:g,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:E,vertexTextures:C,maxSamples:b}}function C1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new rr,a=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const g=f.length!==0||h||i!==0||r;return r=h,i=f.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,g){const _=f.clippingPlanes,S=f.clipIntersection,p=f.clipShadows,u=t.get(f);if(!r||_===null||_.length===0||s&&!p)s?d(null):c();else{const x=s?0:i,v=x*4;let E=u.clippingState||null;l.value=E,E=d(_,h,v,g);for(let C=0;C!==v;++C)E[C]=n[C];u.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,g,_){const S=f!==null?f.length:0;let p=null;if(S!==0){if(p=l.value,_!==!0||p===null){const u=g+S*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,E=g;v!==S;++v,E+=4)o.copy(f[v]).applyMatrix4(x,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,p}}function N1(t){let e=new WeakMap;function n(o,a){return a===Zu?o.mapping=vs:a===Qu&&(o.mapping=xs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Zu||a===Qu)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new HS(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class K0 extends Y0{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Jr=4,Rp=[.125,.215,.35,.446,.526,.582],ar=20,zc=new K0,Cp=new Ye;let Bc=null,Hc=0,Vc=0,Gc=!1;const sr=(1+Math.sqrt(5))/2,Br=1/sr,Np=[new z(-sr,Br,0),new z(sr,Br,0),new z(-Br,0,sr),new z(Br,0,sr),new z(0,sr,-Br),new z(0,sr,Br),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class Pp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Bc=this._renderer.getRenderTarget(),Hc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ip(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bc,Hc,Vc),this._renderer.xr.enabled=Gc,e.scissorTest=!1,_a(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===vs||e.mapping===xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bc=this._renderer.getRenderTarget(),Hc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:Ro,format:Dn,colorSpace:$i,depthBuffer:!1},r=Lp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=P1(s)),this._blurMaterial=L1(s,e,n)}return r}_compileMaterial(e){const n=new oi(this._lodPlanes[0],e);this._renderer.compile(n,zc)}_sceneToCubeUV(e,n,i,r){const a=new xn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Cp),d.toneMapping=Bi,d.autoClear=!1;const g=new G0({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),_=new oi(new As,g);let S=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,S=!0):(g.color.copy(Cp),S=!0);for(let u=0;u<6;u++){const x=u%3;x===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):x===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const v=this._cubeSize;_a(r,x*v,u>2?v:0,v,v),d.setRenderTarget(r),S&&d.render(_,a),d.render(e,a)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===vs||e.mapping===xs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ip());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new oi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;_a(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,zc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Np[(r-s-1)%Np.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new oi(this._lodPlanes[r],c),h=c.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*ar-1),S=s/_,p=isFinite(s)?1+Math.floor(d*S):ar;p>ar&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ar}`);const u=[];let x=0;for(let A=0;A<ar;++A){const P=A/S,K=Math.exp(-P*P/2);u.push(K),A===0?x+=K:A<p&&(x+=2*K)}for(let A=0;A<u.length;A++)u[A]=u[A]/x;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const E=this._sizeLods[r],C=3*E*(r>v-Jr?r-v+Jr:0),b=4*(this._cubeSize-E);_a(n,C,b,3*E,2*E),l.setRenderTarget(n),l.render(f,zc)}}function P1(t){const e=[],n=[],i=[];let r=t;const s=t-Jr+1+Rp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Jr?l=Rp[o-t+Jr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],g=6,_=6,S=3,p=2,u=1,x=new Float32Array(S*_*g),v=new Float32Array(p*_*g),E=new Float32Array(u*_*g);for(let b=0;b<g;b++){const A=b%3*2/3-1,P=b>2?0:-1,K=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];x.set(K,S*_*b),v.set(h,p*_*b);const y=[b,b,b,b,b,b];E.set(y,u*_*b)}const C=new mi;C.setAttribute("position",new Fn(x,S)),C.setAttribute("uv",new Fn(v,p)),C.setAttribute("faceIndex",new Fn(E,u)),e.push(C),r>Jr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Lp(t,e,n){const i=new Er(t,e,n);return i.texture.mapping=Dl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _a(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function L1(t,e,n){const i=new Float32Array(ar),r=new z(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Ip(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Dp(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Ff(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function I1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Zu||l===Qu,d=l===vs||l===xs;if(c||d){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Pp(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const g=a.image;return c&&g&&g.height>0||d&&g&&r(g)?(n===null&&(n=new Pp(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function D1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ha("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function U1(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const S=h.morphAttributes[_];for(let p=0,u=S.length;p<u;p++)e.remove(S[p])}h.removeEventListener("dispose",o),delete r[h.id];const g=s.get(h);g&&(e.remove(g),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const g=f.morphAttributes;for(const _ in g){const S=g[_];for(let p=0,u=S.length;p<u;p++)e.update(S[p],t.ARRAY_BUFFER)}}function c(f){const h=[],g=f.index,_=f.attributes.position;let S=0;if(g!==null){const x=g.array;S=g.version;for(let v=0,E=x.length;v<E;v+=3){const C=x[v+0],b=x[v+1],A=x[v+2];h.push(C,b,b,A,A,C)}}else if(_!==void 0){const x=_.array;S=_.version;for(let v=0,E=x.length/3-1;v<E;v+=3){const C=v+0,b=v+1,A=v+2;h.push(C,b,b,A,A,C)}}else return;const p=new(F0(h)?W0:j0)(h,1);p.version=S;const u=s.get(f);u&&e.remove(u),s.set(f,p)}function d(f){const h=s.get(f);if(h){const g=f.index;g!==null&&h.version<g.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function O1(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,g){t.drawElements(i,g,s,h*o),n.update(g,i,1)}function c(h,g,_){_!==0&&(t.drawElementsInstanced(i,g,s,h*o,_),n.update(g,i,_))}function d(h,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,h,0,_);let p=0;for(let u=0;u<_;u++)p+=g[u];n.update(p,i,1)}function f(h,g,_,S){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<h.length;u++)c(h[u]/o,g[u],S[u]);else{p.multiDrawElementsInstancedWEBGL(i,g,0,s,h,0,S,0,_);let u=0;for(let x=0;x<_;x++)u+=g[x];for(let x=0;x<S.length;x++)n.update(u,i,S[x])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function F1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function k1(t,e,n){const i=new WeakMap,r=new gt;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let y=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var g=y;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let E=0;_===!0&&(E=1),S===!0&&(E=2),p===!0&&(E=3);let C=a.attributes.position.count*E,b=1;C>e.maxTextureSize&&(b=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*b*4*f),P=new z0(A,C,b,f);P.type=ri,P.needsUpdate=!0;const K=E*4;for(let T=0;T<f;T++){const j=u[T],V=x[T],B=v[T],$=C*b*4*T;for(let H=0;H<j.count;H++){const X=H*K;_===!0&&(r.fromBufferAttribute(j,H),A[$+X+0]=r.x,A[$+X+1]=r.y,A[$+X+2]=r.z,A[$+X+3]=0),S===!0&&(r.fromBufferAttribute(V,H),A[$+X+4]=r.x,A[$+X+5]=r.y,A[$+X+6]=r.z,A[$+X+7]=0),p===!0&&(r.fromBufferAttribute(B,H),A[$+X+8]=r.x,A[$+X+9]=r.y,A[$+X+10]=r.z,A[$+X+11]=B.itemSize===4?r.w:1)}}h={count:f,texture:P,size:new Je(C,b)},i.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const S=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function z1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Z0 extends tn{constructor(e,n,i,r,s,o,a,l,c,d=as){if(d!==as&&d!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===as&&(i=Sr),i===void 0&&d===ys&&(i=_s),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:yn,this.minFilter=l!==void 0?l:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Q0=new tn,Up=new Z0(1,1),J0=new z0,ev=new TS,tv=new $0,Op=[],Fp=[],kp=new Float32Array(16),zp=new Float32Array(9),Bp=new Float32Array(4);function bs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Op[r];if(s===void 0&&(s=new Float32Array(r),Op[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Tt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function kl(t,e){let n=Fp[e];n===void 0&&(n=new Int32Array(e),Fp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function B1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function H1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2fv(this.addr,e),Tt(n,e)}}function V1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(wt(n,e))return;t.uniform3fv(this.addr,e),Tt(n,e)}}function G1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4fv(this.addr,e),Tt(n,e)}}function j1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Tt(n,e)}else{if(wt(n,i))return;Bp.set(i),t.uniformMatrix2fv(this.addr,!1,Bp),Tt(n,i)}}function W1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Tt(n,e)}else{if(wt(n,i))return;zp.set(i),t.uniformMatrix3fv(this.addr,!1,zp),Tt(n,i)}}function X1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Tt(n,e)}else{if(wt(n,i))return;kp.set(i),t.uniformMatrix4fv(this.addr,!1,kp),Tt(n,i)}}function Y1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function $1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2iv(this.addr,e),Tt(n,e)}}function q1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3iv(this.addr,e),Tt(n,e)}}function K1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4iv(this.addr,e),Tt(n,e)}}function Z1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Q1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2uiv(this.addr,e),Tt(n,e)}}function J1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3uiv(this.addr,e),Tt(n,e)}}function ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4uiv(this.addr,e),Tt(n,e)}}function tw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Up.compareFunction=O0,s=Up):s=Q0,n.setTexture2D(e||s,r)}function nw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||ev,r)}function iw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||tv,r)}function rw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||J0,r)}function sw(t){switch(t){case 5126:return B1;case 35664:return H1;case 35665:return V1;case 35666:return G1;case 35674:return j1;case 35675:return W1;case 35676:return X1;case 5124:case 35670:return Y1;case 35667:case 35671:return $1;case 35668:case 35672:return q1;case 35669:case 35673:return K1;case 5125:return Z1;case 36294:return Q1;case 36295:return J1;case 36296:return ew;case 35678:case 36198:case 36298:case 36306:case 35682:return tw;case 35679:case 36299:case 36307:return nw;case 35680:case 36300:case 36308:case 36293:return iw;case 36289:case 36303:case 36311:case 36292:return rw}}function ow(t,e){t.uniform1fv(this.addr,e)}function aw(t,e){const n=bs(e,this.size,2);t.uniform2fv(this.addr,n)}function lw(t,e){const n=bs(e,this.size,3);t.uniform3fv(this.addr,n)}function cw(t,e){const n=bs(e,this.size,4);t.uniform4fv(this.addr,n)}function uw(t,e){const n=bs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function dw(t,e){const n=bs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function fw(t,e){const n=bs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function hw(t,e){t.uniform1iv(this.addr,e)}function pw(t,e){t.uniform2iv(this.addr,e)}function mw(t,e){t.uniform3iv(this.addr,e)}function gw(t,e){t.uniform4iv(this.addr,e)}function vw(t,e){t.uniform1uiv(this.addr,e)}function xw(t,e){t.uniform2uiv(this.addr,e)}function _w(t,e){t.uniform3uiv(this.addr,e)}function yw(t,e){t.uniform4uiv(this.addr,e)}function Sw(t,e,n){const i=this.cache,r=e.length,s=kl(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Q0,s[o])}function Ew(t,e,n){const i=this.cache,r=e.length,s=kl(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||ev,s[o])}function Mw(t,e,n){const i=this.cache,r=e.length,s=kl(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||tv,s[o])}function ww(t,e,n){const i=this.cache,r=e.length,s=kl(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||J0,s[o])}function Tw(t){switch(t){case 5126:return ow;case 35664:return aw;case 35665:return lw;case 35666:return cw;case 35674:return uw;case 35675:return dw;case 35676:return fw;case 5124:case 35670:return hw;case 35667:case 35671:return pw;case 35668:case 35672:return mw;case 35669:case 35673:return gw;case 5125:return vw;case 36294:return xw;case 36295:return _w;case 36296:return yw;case 35678:case 36198:case 36298:case 36306:case 35682:return Sw;case 35679:case 36299:case 36307:return Ew;case 35680:case 36300:case 36308:case 36293:return Mw;case 36289:case 36303:case 36311:case 36292:return ww}}class Aw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=sw(n.type)}}class bw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Tw(n.type)}}class Rw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const jc=/(\w+)(\])?(\[|\.)?/g;function Hp(t,e){t.seq.push(e),t.map[e.id]=e}function Cw(t,e,n){const i=t.name,r=i.length;for(jc.lastIndex=0;;){const s=jc.exec(i),o=jc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Hp(n,c===void 0?new Aw(a,t,e):new bw(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new Rw(a),Hp(n,f)),n=f}}}class Va{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Cw(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Vp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Nw=37297;let Pw=0;function Lw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function Iw(t){const e=Ke.getPrimaries(Ke.workingColorSpace),n=Ke.getPrimaries(t);let i;switch(e===n?i="":e===ml&&n===pl?i="LinearDisplayP3ToLinearSRGB":e===pl&&n===ml&&(i="LinearSRGBToLinearDisplayP3"),t){case $i:case Ul:return[i,"LinearTransferOETF"];case Hn:case Uf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Gp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Lw(t.getShaderSource(e),o)}else return r}function Dw(t,e){const n=Iw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Uw(t,e){let n;switch(e){case Ky:n="Linear";break;case Zy:n="Reinhard";break;case Qy:n="Cineon";break;case Jy:n="ACESFilmic";break;case tS:n="AgX";break;case nS:n="Neutral";break;case eS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ya=new z;function Ow(){Ke.getLuminanceCoefficients(ya);const t=ya.x.toFixed(4),e=ya.y.toFixed(4),n=ya.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function kw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function zw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function $s(t){return t!==""}function jp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rd(t){return t.replace(Bw,Vw)}const Hw=new Map;function Vw(t,e){let n=De[e];if(n===void 0){const i=Hw.get(e);if(i!==void 0)n=De[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Rd(n)}const Gw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xp(t){return t.replace(Gw,jw)}function jw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Yp(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ww(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===M0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Cy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function Xw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case vs:case xs:e="ENVMAP_TYPE_CUBE";break;case Dl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case xs:e="ENVMAP_MODE_REFRACTION";break}return e}function $w(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case w0:e="ENVMAP_BLENDING_MULTIPLY";break;case $y:e="ENVMAP_BLENDING_MIX";break;case qy:e="ENVMAP_BLENDING_ADD";break}return e}function qw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Kw(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Ww(n),c=Xw(n),d=Yw(n),f=$w(n),h=qw(n),g=Fw(n),_=kw(s),S=r.createProgram();let p,u,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter($s).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter($s).join(`
`),u.length>0&&(u+=`
`)):(p=[Yp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),u=[Yp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Bi?"#define TONE_MAPPING":"",n.toneMapping!==Bi?De.tonemapping_pars_fragment:"",n.toneMapping!==Bi?Uw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,Dw("linearToOutputTexel",n.outputColorSpace),Ow(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter($s).join(`
`)),o=Rd(o),o=jp(o,n),o=Wp(o,n),a=Rd(a),a=jp(a,n),a=Wp(a,n),o=Xp(o),a=Xp(a),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",n.glslVersion===up?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===up?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=x+p+o,E=x+u+a,C=Vp(r,r.VERTEX_SHADER,v),b=Vp(r,r.FRAGMENT_SHADER,E);r.attachShader(S,C),r.attachShader(S,b),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function A(T){if(t.debug.checkShaderErrors){const j=r.getProgramInfoLog(S).trim(),V=r.getShaderInfoLog(C).trim(),B=r.getShaderInfoLog(b).trim();let $=!0,H=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,C,b);else{const X=Gp(r,C,"vertex"),N=Gp(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+j+`
`+X+`
`+N)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(V===""||B==="")&&(H=!1);H&&(T.diagnostics={runnable:$,programLog:j,vertexShader:{log:V,prefix:p},fragmentShader:{log:B,prefix:u}})}r.deleteShader(C),r.deleteShader(b),P=new Va(r,S),K=zw(r,S)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let K;this.getAttributes=function(){return K===void 0&&A(this),K};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(S,Nw)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Pw++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=C,this.fragmentShader=b,this}let Zw=0;class Qw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Jw(e),n.set(e,i)),i}}class Jw{constructor(e){this.id=Zw++,this.code=e,this.usedTimes=0}}function eT(t,e,n,i,r,s,o){const a=new H0,l=new Qw,c=new Set,d=[],f=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,g=r.vertexTextures;let _=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function u(y,T,j,V,B){const $=V.fog,H=B.geometry,X=y.isMeshStandardMaterial?V.environment:null,N=(y.isMeshStandardMaterial?n:e).get(y.envMap||X),G=N&&N.mapping===Dl?N.image.height:null,Q=S[y.type];y.precision!==null&&(_=r.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const se=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,we=se!==void 0?se.length:0;let Fe=0;H.morphAttributes.position!==void 0&&(Fe=1),H.morphAttributes.normal!==void 0&&(Fe=2),H.morphAttributes.color!==void 0&&(Fe=3);let Y,te,fe,ce;if(Q){const Xt=Vn[Q];Y=Xt.vertexShader,te=Xt.fragmentShader}else Y=y.vertexShader,te=y.fragmentShader,l.update(y),fe=l.getVertexShaderID(y),ce=l.getFragmentShaderID(y);const Le=t.getRenderTarget(),Ae=B.isInstancedMesh===!0,Be=B.isBatchedMesh===!0,et=!!y.map,He=!!y.matcap,L=!!N,nn=!!y.aoMap,ke=!!y.lightMap,je=!!y.bumpMap,Re=!!y.normalMap,it=!!y.displacementMap,Pe=!!y.emissiveMap,R=!!y.metalnessMap,M=!!y.roughnessMap,O=y.anisotropy>0,Z=y.clearcoat>0,ee=y.dispersion>0,q=y.iridescence>0,Se=y.sheen>0,ae=y.transmission>0,ge=O&&!!y.anisotropyMap,We=Z&&!!y.clearcoatMap,ie=Z&&!!y.clearcoatNormalMap,ve=Z&&!!y.clearcoatRoughnessMap,Ce=q&&!!y.iridescenceMap,Ne=q&&!!y.iridescenceThicknessMap,xe=Se&&!!y.sheenColorMap,ze=Se&&!!y.sheenRoughnessMap,Ie=!!y.specularMap,tt=!!y.specularColorMap,I=!!y.specularIntensityMap,he=ae&&!!y.transmissionMap,W=ae&&!!y.thicknessMap,J=!!y.gradientMap,ue=!!y.alphaMap,pe=y.alphaTest>0,Ve=!!y.alphaHash,_t=!!y.extensions;let Wt=Bi;y.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(Wt=t.toneMapping);const Xe={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:Y,fragmentShader:te,defines:y.defines,customVertexShaderID:fe,customFragmentShaderID:ce,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:Be,batchingColor:Be&&B._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&B.instanceColor!==null,instancingMorph:Ae&&B.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Le===null?t.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:$i,alphaToCoverage:!!y.alphaToCoverage,map:et,matcap:He,envMap:L,envMapMode:L&&N.mapping,envMapCubeUVHeight:G,aoMap:nn,lightMap:ke,bumpMap:je,normalMap:Re,displacementMap:g&&it,emissiveMap:Pe,normalMapObjectSpace:Re&&y.normalMapType===aS,normalMapTangentSpace:Re&&y.normalMapType===oS,metalnessMap:R,roughnessMap:M,anisotropy:O,anisotropyMap:ge,clearcoat:Z,clearcoatMap:We,clearcoatNormalMap:ie,clearcoatRoughnessMap:ve,dispersion:ee,iridescence:q,iridescenceMap:Ce,iridescenceThicknessMap:Ne,sheen:Se,sheenColorMap:xe,sheenRoughnessMap:ze,specularMap:Ie,specularColorMap:tt,specularIntensityMap:I,transmission:ae,transmissionMap:he,thicknessMap:W,gradientMap:J,opaque:y.transparent===!1&&y.blending===os&&y.alphaToCoverage===!1,alphaMap:ue,alphaTest:pe,alphaHash:Ve,combine:y.combine,mapUv:et&&p(y.map.channel),aoMapUv:nn&&p(y.aoMap.channel),lightMapUv:ke&&p(y.lightMap.channel),bumpMapUv:je&&p(y.bumpMap.channel),normalMapUv:Re&&p(y.normalMap.channel),displacementMapUv:it&&p(y.displacementMap.channel),emissiveMapUv:Pe&&p(y.emissiveMap.channel),metalnessMapUv:R&&p(y.metalnessMap.channel),roughnessMapUv:M&&p(y.roughnessMap.channel),anisotropyMapUv:ge&&p(y.anisotropyMap.channel),clearcoatMapUv:We&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:ie&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:ze&&p(y.sheenRoughnessMap.channel),specularMapUv:Ie&&p(y.specularMap.channel),specularColorMapUv:tt&&p(y.specularColorMap.channel),specularIntensityMapUv:I&&p(y.specularIntensityMap.channel),transmissionMapUv:he&&p(y.transmissionMap.channel),thicknessMapUv:W&&p(y.thicknessMap.channel),alphaMapUv:ue&&p(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Re||O),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!H.attributes.uv&&(et||ue),fog:!!$,useFog:y.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:B.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Fe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&j.length>0,shadowMapType:t.shadowMap.type,toneMapping:Wt,decodeVideoTexture:et&&y.map.isVideoTexture===!0&&Ke.getTransfer(y.map.colorSpace)===ot,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ti,flipSided:y.side===en,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:_t&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&y.extensions.multiDraw===!0||Be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Xe.vertexUv1s=c.has(1),Xe.vertexUv2s=c.has(2),Xe.vertexUv3s=c.has(3),c.clear(),Xe}function x(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const j in y.defines)T.push(j),T.push(y.defines[j]);return y.isRawShaderMaterial===!1&&(v(T,y),E(T,y),T.push(t.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function v(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function E(y,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),y.push(a.mask)}function C(y){const T=S[y.type];let j;if(T){const V=Vn[T];j=FS.clone(V.uniforms)}else j=y.uniforms;return j}function b(y,T){let j;for(let V=0,B=d.length;V<B;V++){const $=d[V];if($.cacheKey===T){j=$,++j.usedTimes;break}}return j===void 0&&(j=new Kw(t,T,y,s),d.push(j)),j}function A(y){if(--y.usedTimes===0){const T=d.indexOf(y);d[T]=d[d.length-1],d.pop(),y.destroy()}}function P(y){l.remove(y)}function K(){l.dispose()}return{getParameters:u,getProgramCacheKey:x,getUniforms:C,acquireProgram:b,releaseProgram:A,releaseShaderCache:P,programs:d,dispose:K}}function tT(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function nT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function $p(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function qp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,g,_,S,p){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:g,groupOrder:_,renderOrder:f.renderOrder,z:S,group:p},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=g,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=S,u.group=p),e++,u}function a(f,h,g,_,S,p){const u=o(f,h,g,_,S,p);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(f,h,g,_,S,p){const u=o(f,h,g,_,S,p);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||nT),i.length>1&&i.sort(h||$p),r.length>1&&r.sort(h||$p)}function d(){for(let f=e,h=t.length;f<h;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function iT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new qp,t.set(i,[o])):r>=s.length?(o=new qp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function rT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new Ye};break;case"SpotLight":n={position:new z,direction:new z,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":n={color:new Ye,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function sT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let oT=0;function aT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function lT(t){const e=new rT,n=sT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new ft,o=new ft;function a(c){let d=0,f=0,h=0;for(let K=0;K<9;K++)i.probe[K].set(0,0,0);let g=0,_=0,S=0,p=0,u=0,x=0,v=0,E=0,C=0,b=0,A=0;c.sort(aT);for(let K=0,y=c.length;K<y;K++){const T=c[K],j=T.color,V=T.intensity,B=T.distance,$=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)d+=j.r*V,f+=j.g*V,h+=j.b*V;else if(T.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(T.sh.coefficients[H],V);A++}else if(T.isDirectionalLight){const H=e.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const X=T.shadow,N=n.get(T);N.shadowIntensity=X.intensity,N.shadowBias=X.bias,N.shadowNormalBias=X.normalBias,N.shadowRadius=X.radius,N.shadowMapSize=X.mapSize,i.directionalShadow[g]=N,i.directionalShadowMap[g]=$,i.directionalShadowMatrix[g]=T.shadow.matrix,x++}i.directional[g]=H,g++}else if(T.isSpotLight){const H=e.get(T);H.position.setFromMatrixPosition(T.matrixWorld),H.color.copy(j).multiplyScalar(V),H.distance=B,H.coneCos=Math.cos(T.angle),H.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),H.decay=T.decay,i.spot[S]=H;const X=T.shadow;if(T.map&&(i.spotLightMap[C]=T.map,C++,X.updateMatrices(T),T.castShadow&&b++),i.spotLightMatrix[S]=X.matrix,T.castShadow){const N=n.get(T);N.shadowIntensity=X.intensity,N.shadowBias=X.bias,N.shadowNormalBias=X.normalBias,N.shadowRadius=X.radius,N.shadowMapSize=X.mapSize,i.spotShadow[S]=N,i.spotShadowMap[S]=$,E++}S++}else if(T.isRectAreaLight){const H=e.get(T);H.color.copy(j).multiplyScalar(V),H.halfWidth.set(T.width*.5,0,0),H.halfHeight.set(0,T.height*.5,0),i.rectArea[p]=H,p++}else if(T.isPointLight){const H=e.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),H.distance=T.distance,H.decay=T.decay,T.castShadow){const X=T.shadow,N=n.get(T);N.shadowIntensity=X.intensity,N.shadowBias=X.bias,N.shadowNormalBias=X.normalBias,N.shadowRadius=X.radius,N.shadowMapSize=X.mapSize,N.shadowCameraNear=X.camera.near,N.shadowCameraFar=X.camera.far,i.pointShadow[_]=N,i.pointShadowMap[_]=$,i.pointShadowMatrix[_]=T.shadow.matrix,v++}i.point[_]=H,_++}else if(T.isHemisphereLight){const H=e.get(T);H.skyColor.copy(T.color).multiplyScalar(V),H.groundColor.copy(T.groundColor).multiplyScalar(V),i.hemi[u]=H,u++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const P=i.hash;(P.directionalLength!==g||P.pointLength!==_||P.spotLength!==S||P.rectAreaLength!==p||P.hemiLength!==u||P.numDirectionalShadows!==x||P.numPointShadows!==v||P.numSpotShadows!==E||P.numSpotMaps!==C||P.numLightProbes!==A)&&(i.directional.length=g,i.spot.length=S,i.rectArea.length=p,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=E+C-b,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=A,P.directionalLength=g,P.pointLength=_,P.spotLength=S,P.rectAreaLength=p,P.hemiLength=u,P.numDirectionalShadows=x,P.numPointShadows=v,P.numSpotShadows=E,P.numSpotMaps=C,P.numLightProbes=A,i.version=oT++)}function l(c,d){let f=0,h=0,g=0,_=0,S=0;const p=d.matrixWorldInverse;for(let u=0,x=c.length;u<x;u++){const v=c[u];if(v.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),f++}else if(v.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),g++}else if(v.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),h++}else if(v.isHemisphereLight){const E=i.hemi[S];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),S++}}}return{setup:a,setupView:l,state:i}}function Kp(t){const e=new lT(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function cT(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Kp(t),e.set(r,[a])):s>=o.length?(a=new Kp(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class uT extends Lo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dT extends Lo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pT(t,e,n){let i=new Of;const r=new Je,s=new Je,o=new gt,a=new uT({depthPacking:sS}),l=new dT,c={},d=n.maxTextureSize,f={[Gi]:en,[en]:Gi,[ti]:ti},h=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:fT,fragmentShader:hT}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const _=new mi;_.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new oi(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=M0;let u=this.type;this.render=function(b,A,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const K=t.getRenderTarget(),y=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),j=t.state;j.setBlending(zi),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const V=u!==Qn&&this.type===Qn,B=u===Qn&&this.type!==Qn;for(let $=0,H=b.length;$<H;$++){const X=b[$],N=X.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const G=N.getFrameExtents();if(r.multiply(G),s.copy(N.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/G.x),r.x=s.x*G.x,N.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/G.y),r.y=s.y*G.y,N.mapSize.y=s.y)),N.map===null||V===!0||B===!0){const se=this.type!==Qn?{minFilter:yn,magFilter:yn}:{};N.map!==null&&N.map.dispose(),N.map=new Er(r.x,r.y,se),N.map.texture.name=X.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const Q=N.getViewportCount();for(let se=0;se<Q;se++){const we=N.getViewport(se);o.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),j.viewport(o),N.updateMatrices(X,se),i=N.getFrustum(),E(A,P,N.camera,X,this.type)}N.isPointLightShadow!==!0&&this.type===Qn&&x(N,P),N.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(K,y,T)};function x(b,A){const P=e.update(S);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,g.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Er(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(A,null,P,h,S,null),g.uniforms.shadow_pass.value=b.mapPass.texture,g.uniforms.resolution.value=b.mapSize,g.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(A,null,P,g,S,null)}function v(b,A,P,K){let y=null;const T=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(T!==void 0)y=T;else if(y=P.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const j=y.uuid,V=A.uuid;let B=c[j];B===void 0&&(B={},c[j]=B);let $=B[V];$===void 0&&($=y.clone(),B[V]=$,A.addEventListener("dispose",C)),y=$}if(y.visible=A.visible,y.wireframe=A.wireframe,K===Qn?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:f[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const j=t.properties.get(y);j.light=P}return y}function E(b,A,P,K,y){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===Qn)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const V=e.update(b),B=b.material;if(Array.isArray(B)){const $=V.groups;for(let H=0,X=$.length;H<X;H++){const N=$[H],G=B[N.materialIndex];if(G&&G.visible){const Q=v(b,G,K,y);b.onBeforeShadow(t,b,A,P,V,Q,N),t.renderBufferDirect(P,null,V,Q,b,N),b.onAfterShadow(t,b,A,P,V,Q,N)}}}else if(B.visible){const $=v(b,B,K,y);b.onBeforeShadow(t,b,A,P,V,$,null),t.renderBufferDirect(P,null,V,$,b,null),b.onAfterShadow(t,b,A,P,V,$,null)}}const j=b.children;for(let V=0,B=j.length;V<B;V++)E(j[V],A,P,K,y)}function C(b){b.target.removeEventListener("dispose",C);for(const P in c){const K=c[P],y=b.target.uuid;y in K&&(K[y].dispose(),delete K[y])}}}const mT={[ju]:Wu,[Xu]:qu,[Yu]:Ku,[gs]:$u,[Wu]:ju,[qu]:Xu,[Ku]:Yu,[$u]:gs};function gT(t){function e(){let I=!1;const he=new gt;let W=null;const J=new gt(0,0,0,0);return{setMask:function(ue){W!==ue&&!I&&(t.colorMask(ue,ue,ue,ue),W=ue)},setLocked:function(ue){I=ue},setClear:function(ue,pe,Ve,_t,Wt){Wt===!0&&(ue*=_t,pe*=_t,Ve*=_t),he.set(ue,pe,Ve,_t),J.equals(he)===!1&&(t.clearColor(ue,pe,Ve,_t),J.copy(he))},reset:function(){I=!1,W=null,J.set(-1,0,0,0)}}}function n(){let I=!1,he=!1,W=null,J=null,ue=null;return{setReversed:function(pe){he=pe},setTest:function(pe){pe?fe(t.DEPTH_TEST):ce(t.DEPTH_TEST)},setMask:function(pe){W!==pe&&!I&&(t.depthMask(pe),W=pe)},setFunc:function(pe){if(he&&(pe=mT[pe]),J!==pe){switch(pe){case ju:t.depthFunc(t.NEVER);break;case Wu:t.depthFunc(t.ALWAYS);break;case Xu:t.depthFunc(t.LESS);break;case gs:t.depthFunc(t.LEQUAL);break;case Yu:t.depthFunc(t.EQUAL);break;case $u:t.depthFunc(t.GEQUAL);break;case qu:t.depthFunc(t.GREATER);break;case Ku:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}J=pe}},setLocked:function(pe){I=pe},setClear:function(pe){ue!==pe&&(t.clearDepth(pe),ue=pe)},reset:function(){I=!1,W=null,J=null,ue=null}}}function i(){let I=!1,he=null,W=null,J=null,ue=null,pe=null,Ve=null,_t=null,Wt=null;return{setTest:function(Xe){I||(Xe?fe(t.STENCIL_TEST):ce(t.STENCIL_TEST))},setMask:function(Xe){he!==Xe&&!I&&(t.stencilMask(Xe),he=Xe)},setFunc:function(Xe,Xt,Xn){(W!==Xe||J!==Xt||ue!==Xn)&&(t.stencilFunc(Xe,Xt,Xn),W=Xe,J=Xt,ue=Xn)},setOp:function(Xe,Xt,Xn){(pe!==Xe||Ve!==Xt||_t!==Xn)&&(t.stencilOp(Xe,Xt,Xn),pe=Xe,Ve=Xt,_t=Xn)},setLocked:function(Xe){I=Xe},setClear:function(Xe){Wt!==Xe&&(t.clearStencil(Xe),Wt=Xe)},reset:function(){I=!1,he=null,W=null,J=null,ue=null,pe=null,Ve=null,_t=null,Wt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},d={},f=new WeakMap,h=[],g=null,_=!1,S=null,p=null,u=null,x=null,v=null,E=null,C=null,b=new Ye(0,0,0),A=0,P=!1,K=null,y=null,T=null,j=null,V=null;const B=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,H=0;const X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(X)[1]),$=H>=1):X.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),$=H>=2);let N=null,G={};const Q=t.getParameter(t.SCISSOR_BOX),se=t.getParameter(t.VIEWPORT),we=new gt().fromArray(Q),Fe=new gt().fromArray(se);function Y(I,he,W,J){const ue=new Uint8Array(4),pe=t.createTexture();t.bindTexture(I,pe),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ve=0;Ve<W;Ve++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,J,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(he+Ve,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return pe}const te={};te[t.TEXTURE_2D]=Y(t.TEXTURE_2D,t.TEXTURE_2D,1),te[t.TEXTURE_CUBE_MAP]=Y(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[t.TEXTURE_2D_ARRAY]=Y(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),te[t.TEXTURE_3D]=Y(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),fe(t.DEPTH_TEST),s.setFunc(gs),ke(!1),je(rp),fe(t.CULL_FACE),L(zi);function fe(I){c[I]!==!0&&(t.enable(I),c[I]=!0)}function ce(I){c[I]!==!1&&(t.disable(I),c[I]=!1)}function Le(I,he){return d[I]!==he?(t.bindFramebuffer(I,he),d[I]=he,I===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=he),I===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=he),!0):!1}function Ae(I,he){let W=h,J=!1;if(I){W=f.get(he),W===void 0&&(W=[],f.set(he,W));const ue=I.textures;if(W.length!==ue.length||W[0]!==t.COLOR_ATTACHMENT0){for(let pe=0,Ve=ue.length;pe<Ve;pe++)W[pe]=t.COLOR_ATTACHMENT0+pe;W.length=ue.length,J=!0}}else W[0]!==t.BACK&&(W[0]=t.BACK,J=!0);J&&t.drawBuffers(W)}function Be(I){return g!==I?(t.useProgram(I),g=I,!0):!1}const et={[or]:t.FUNC_ADD,[Py]:t.FUNC_SUBTRACT,[Ly]:t.FUNC_REVERSE_SUBTRACT};et[Iy]=t.MIN,et[Dy]=t.MAX;const He={[Uy]:t.ZERO,[Oy]:t.ONE,[Fy]:t.SRC_COLOR,[Vu]:t.SRC_ALPHA,[Gy]:t.SRC_ALPHA_SATURATE,[Hy]:t.DST_COLOR,[zy]:t.DST_ALPHA,[ky]:t.ONE_MINUS_SRC_COLOR,[Gu]:t.ONE_MINUS_SRC_ALPHA,[Vy]:t.ONE_MINUS_DST_COLOR,[By]:t.ONE_MINUS_DST_ALPHA,[jy]:t.CONSTANT_COLOR,[Wy]:t.ONE_MINUS_CONSTANT_COLOR,[Xy]:t.CONSTANT_ALPHA,[Yy]:t.ONE_MINUS_CONSTANT_ALPHA};function L(I,he,W,J,ue,pe,Ve,_t,Wt,Xe){if(I===zi){_===!0&&(ce(t.BLEND),_=!1);return}if(_===!1&&(fe(t.BLEND),_=!0),I!==Ny){if(I!==S||Xe!==P){if((p!==or||v!==or)&&(t.blendEquation(t.FUNC_ADD),p=or,v=or),Xe)switch(I){case os:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case sp:t.blendFunc(t.ONE,t.ONE);break;case op:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ap:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case os:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case sp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case op:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ap:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}u=null,x=null,E=null,C=null,b.set(0,0,0),A=0,S=I,P=Xe}return}ue=ue||he,pe=pe||W,Ve=Ve||J,(he!==p||ue!==v)&&(t.blendEquationSeparate(et[he],et[ue]),p=he,v=ue),(W!==u||J!==x||pe!==E||Ve!==C)&&(t.blendFuncSeparate(He[W],He[J],He[pe],He[Ve]),u=W,x=J,E=pe,C=Ve),(_t.equals(b)===!1||Wt!==A)&&(t.blendColor(_t.r,_t.g,_t.b,Wt),b.copy(_t),A=Wt),S=I,P=!1}function nn(I,he){I.side===ti?ce(t.CULL_FACE):fe(t.CULL_FACE);let W=I.side===en;he&&(W=!W),ke(W),I.blending===os&&I.transparent===!1?L(zi):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const J=I.stencilWrite;o.setTest(J),J&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),it(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?fe(t.SAMPLE_ALPHA_TO_COVERAGE):ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function ke(I){K!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),K=I)}function je(I){I!==by?(fe(t.CULL_FACE),I!==y&&(I===rp?t.cullFace(t.BACK):I===Ry?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ce(t.CULL_FACE),y=I}function Re(I){I!==T&&($&&t.lineWidth(I),T=I)}function it(I,he,W){I?(fe(t.POLYGON_OFFSET_FILL),(j!==he||V!==W)&&(t.polygonOffset(he,W),j=he,V=W)):ce(t.POLYGON_OFFSET_FILL)}function Pe(I){I?fe(t.SCISSOR_TEST):ce(t.SCISSOR_TEST)}function R(I){I===void 0&&(I=t.TEXTURE0+B-1),N!==I&&(t.activeTexture(I),N=I)}function M(I,he,W){W===void 0&&(N===null?W=t.TEXTURE0+B-1:W=N);let J=G[W];J===void 0&&(J={type:void 0,texture:void 0},G[W]=J),(J.type!==I||J.texture!==he)&&(N!==W&&(t.activeTexture(W),N=W),t.bindTexture(I,he||te[I]),J.type=I,J.texture=he)}function O(){const I=G[N];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Z(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function We(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ne(I){we.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),we.copy(I))}function xe(I){Fe.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),Fe.copy(I))}function ze(I,he){let W=l.get(he);W===void 0&&(W=new WeakMap,l.set(he,W));let J=W.get(I);J===void 0&&(J=t.getUniformBlockIndex(he,I.name),W.set(I,J))}function Ie(I,he){const J=l.get(he).get(I);a.get(he)!==J&&(t.uniformBlockBinding(he,J,I.__bindingPointIndex),a.set(he,J))}function tt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},N=null,G={},d={},f=new WeakMap,h=[],g=null,_=!1,S=null,p=null,u=null,x=null,v=null,E=null,C=null,b=new Ye(0,0,0),A=0,P=!1,K=null,y=null,T=null,j=null,V=null,we.set(0,0,t.canvas.width,t.canvas.height),Fe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:fe,disable:ce,bindFramebuffer:Le,drawBuffers:Ae,useProgram:Be,setBlending:L,setMaterial:nn,setFlipSided:ke,setCullFace:je,setLineWidth:Re,setPolygonOffset:it,setScissorTest:Pe,activeTexture:R,bindTexture:M,unbindTexture:O,compressedTexImage2D:Z,compressedTexImage3D:ee,texImage2D:ve,texImage3D:Ce,updateUBOMapping:ze,uniformBlockBinding:Ie,texStorage2D:We,texStorage3D:ie,texSubImage2D:q,texSubImage3D:Se,compressedTexSubImage2D:ae,compressedTexSubImage3D:ge,scissor:Ne,viewport:xe,reset:tt}}function Zp(t,e,n,i){const r=vT(i);switch(n){case C0:return t*e;case P0:return t*e;case L0:return t*e*2;case I0:return t*e/r.components*r.byteLength;case Lf:return t*e/r.components*r.byteLength;case D0:return t*e*2/r.components*r.byteLength;case If:return t*e*2/r.components*r.byteLength;case N0:return t*e*3/r.components*r.byteLength;case Dn:return t*e*4/r.components*r.byteLength;case Df:return t*e*4/r.components*r.byteLength;case Oa:case Fa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ka:case za:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case nd:case rd:return Math.max(t,16)*Math.max(e,8)/4;case td:case id:return Math.max(t,8)*Math.max(e,8)/2;case sd:case od:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ad:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ld:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case cd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case ud:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case dd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case fd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case hd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case pd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case md:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case gd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case vd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case xd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case _d:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case yd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Sd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ba:case Ed:case Md:return Math.ceil(t/4)*Math.ceil(e/4)*16;case U0:case wd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Td:case Ad:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function vT(t){switch(t){case fi:case A0:return{byteLength:1,components:1};case Eo:case b0:case Ro:return{byteLength:2,components:1};case Nf:case Pf:return{byteLength:2,components:4};case Sr:case Cf:case ri:return{byteLength:4,components:1};case R0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function xT(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,d=new WeakMap;let f;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,M){return g?new OffscreenCanvas(R,M):vl("canvas")}function S(R,M,O){let Z=1;const ee=Pe(R);if((ee.width>O||ee.height>O)&&(Z=O/Math.max(ee.width,ee.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const q=Math.floor(Z*ee.width),Se=Math.floor(Z*ee.height);f===void 0&&(f=_(q,Se));const ae=M?_(q,Se):f;return ae.width=q,ae.height=Se,ae.getContext("2d").drawImage(R,0,0,q,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+q+"x"+Se+")."),ae}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==yn&&R.minFilter!==Ln}function u(R){t.generateMipmap(R)}function x(R,M,O,Z,ee=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=M;if(M===t.RED&&(O===t.FLOAT&&(q=t.R32F),O===t.HALF_FLOAT&&(q=t.R16F),O===t.UNSIGNED_BYTE&&(q=t.R8)),M===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.R8UI),O===t.UNSIGNED_SHORT&&(q=t.R16UI),O===t.UNSIGNED_INT&&(q=t.R32UI),O===t.BYTE&&(q=t.R8I),O===t.SHORT&&(q=t.R16I),O===t.INT&&(q=t.R32I)),M===t.RG&&(O===t.FLOAT&&(q=t.RG32F),O===t.HALF_FLOAT&&(q=t.RG16F),O===t.UNSIGNED_BYTE&&(q=t.RG8)),M===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.RG8UI),O===t.UNSIGNED_SHORT&&(q=t.RG16UI),O===t.UNSIGNED_INT&&(q=t.RG32UI),O===t.BYTE&&(q=t.RG8I),O===t.SHORT&&(q=t.RG16I),O===t.INT&&(q=t.RG32I)),M===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.RGB8UI),O===t.UNSIGNED_SHORT&&(q=t.RGB16UI),O===t.UNSIGNED_INT&&(q=t.RGB32UI),O===t.BYTE&&(q=t.RGB8I),O===t.SHORT&&(q=t.RGB16I),O===t.INT&&(q=t.RGB32I)),M===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),O===t.UNSIGNED_INT&&(q=t.RGBA32UI),O===t.BYTE&&(q=t.RGBA8I),O===t.SHORT&&(q=t.RGBA16I),O===t.INT&&(q=t.RGBA32I)),M===t.RGB&&O===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),M===t.RGBA){const Se=ee?hl:Ke.getTransfer(Z);O===t.FLOAT&&(q=t.RGBA32F),O===t.HALF_FLOAT&&(q=t.RGBA16F),O===t.UNSIGNED_BYTE&&(q=Se===ot?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function v(R,M){let O;return R?M===null||M===Sr||M===_s?O=t.DEPTH24_STENCIL8:M===ri?O=t.DEPTH32F_STENCIL8:M===Eo&&(O=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Sr||M===_s?O=t.DEPTH_COMPONENT24:M===ri?O=t.DEPTH_COMPONENT32F:M===Eo&&(O=t.DEPTH_COMPONENT16),O}function E(R,M){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==yn&&R.minFilter!==Ln?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function C(R){const M=R.target;M.removeEventListener("dispose",C),A(M),M.isVideoTexture&&d.delete(M)}function b(R){const M=R.target;M.removeEventListener("dispose",b),K(M)}function A(R){const M=i.get(R);if(M.__webglInit===void 0)return;const O=R.source,Z=h.get(O);if(Z){const ee=Z[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&P(R),Object.keys(Z).length===0&&h.delete(O)}i.remove(R)}function P(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const O=R.source,Z=h.get(O);delete Z[M.__cacheKey],o.memory.textures--}function K(R){const M=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let ee=0;ee<M.__webglFramebuffer[Z].length;ee++)t.deleteFramebuffer(M.__webglFramebuffer[Z][ee]);else t.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)t.deleteFramebuffer(M.__webglFramebuffer[Z]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=R.textures;for(let Z=0,ee=O.length;Z<ee;Z++){const q=i.get(O[Z]);q.__webglTexture&&(t.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(O[Z])}i.remove(R)}let y=0;function T(){y=0}function j(){const R=y;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),y+=1,R}function V(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function B(R,M){const O=i.get(R);if(R.isVideoTexture&&Re(R),R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){const Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(O,R,M);return}}n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+M)}function $(R,M){const O=i.get(R);if(R.version>0&&O.__version!==R.version){Fe(O,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+M)}function H(R,M){const O=i.get(R);if(R.version>0&&O.__version!==R.version){Fe(O,R,M);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+M)}function X(R,M){const O=i.get(R);if(R.version>0&&O.__version!==R.version){Y(O,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+M)}const N={[Ju]:t.REPEAT,[dr]:t.CLAMP_TO_EDGE,[ed]:t.MIRRORED_REPEAT},G={[yn]:t.NEAREST,[iS]:t.NEAREST_MIPMAP_NEAREST,[ea]:t.NEAREST_MIPMAP_LINEAR,[Ln]:t.LINEAR,[mc]:t.LINEAR_MIPMAP_NEAREST,[fr]:t.LINEAR_MIPMAP_LINEAR},Q={[lS]:t.NEVER,[pS]:t.ALWAYS,[cS]:t.LESS,[O0]:t.LEQUAL,[uS]:t.EQUAL,[hS]:t.GEQUAL,[dS]:t.GREATER,[fS]:t.NOTEQUAL};function se(R,M){if(M.type===ri&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Ln||M.magFilter===mc||M.magFilter===ea||M.magFilter===fr||M.minFilter===Ln||M.minFilter===mc||M.minFilter===ea||M.minFilter===fr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,N[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,N[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,N[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,G[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,G[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Q[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===yn||M.minFilter!==ea&&M.minFilter!==fr||M.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function we(R,M){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",C));const Z=M.source;let ee=h.get(Z);ee===void 0&&(ee={},h.set(Z,ee));const q=V(M);if(q!==R.__cacheKey){ee[q]===void 0&&(ee[q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ee[q].usedTimes++;const Se=ee[R.__cacheKey];Se!==void 0&&(ee[R.__cacheKey].usedTimes--,Se.usedTimes===0&&P(M)),R.__cacheKey=q,R.__webglTexture=ee[q].texture}return O}function Fe(R,M,O){let Z=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=t.TEXTURE_3D);const ee=we(R,M),q=M.source;n.bindTexture(Z,R.__webglTexture,t.TEXTURE0+O);const Se=i.get(q);if(q.version!==Se.__version||ee===!0){n.activeTexture(t.TEXTURE0+O);const ae=Ke.getPrimaries(Ke.workingColorSpace),ge=M.colorSpace===Ri?null:Ke.getPrimaries(M.colorSpace),We=M.colorSpace===Ri||ae===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let ie=S(M.image,!1,r.maxTextureSize);ie=it(M,ie);const ve=s.convert(M.format,M.colorSpace),Ce=s.convert(M.type);let Ne=x(M.internalFormat,ve,Ce,M.colorSpace,M.isVideoTexture);se(Z,M);let xe;const ze=M.mipmaps,Ie=M.isVideoTexture!==!0,tt=Se.__version===void 0||ee===!0,I=q.dataReady,he=E(M,ie);if(M.isDepthTexture)Ne=v(M.format===ys,M.type),tt&&(Ie?n.texStorage2D(t.TEXTURE_2D,1,Ne,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Ne,ie.width,ie.height,0,ve,Ce,null));else if(M.isDataTexture)if(ze.length>0){Ie&&tt&&n.texStorage2D(t.TEXTURE_2D,he,Ne,ze[0].width,ze[0].height);for(let W=0,J=ze.length;W<J;W++)xe=ze[W],Ie?I&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,xe.width,xe.height,ve,Ce,xe.data):n.texImage2D(t.TEXTURE_2D,W,Ne,xe.width,xe.height,0,ve,Ce,xe.data);M.generateMipmaps=!1}else Ie?(tt&&n.texStorage2D(t.TEXTURE_2D,he,Ne,ie.width,ie.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,ve,Ce,ie.data)):n.texImage2D(t.TEXTURE_2D,0,Ne,ie.width,ie.height,0,ve,Ce,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ie&&tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Ne,ze[0].width,ze[0].height,ie.depth);for(let W=0,J=ze.length;W<J;W++)if(xe=ze[W],M.format!==Dn)if(ve!==null)if(Ie){if(I)if(M.layerUpdates.size>0){const ue=Zp(xe.width,xe.height,M.format,M.type);for(const pe of M.layerUpdates){const Ve=xe.data.subarray(pe*ue/xe.data.BYTES_PER_ELEMENT,(pe+1)*ue/xe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,pe,xe.width,xe.height,1,ve,Ve,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,xe.width,xe.height,ie.depth,ve,xe.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,W,Ne,xe.width,xe.height,ie.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,xe.width,xe.height,ie.depth,ve,Ce,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,W,Ne,xe.width,xe.height,ie.depth,0,ve,Ce,xe.data)}else{Ie&&tt&&n.texStorage2D(t.TEXTURE_2D,he,Ne,ze[0].width,ze[0].height);for(let W=0,J=ze.length;W<J;W++)xe=ze[W],M.format!==Dn?ve!==null?Ie?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,W,0,0,xe.width,xe.height,ve,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,W,Ne,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?I&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,xe.width,xe.height,ve,Ce,xe.data):n.texImage2D(t.TEXTURE_2D,W,Ne,xe.width,xe.height,0,ve,Ce,xe.data)}else if(M.isDataArrayTexture)if(Ie){if(tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Ne,ie.width,ie.height,ie.depth),I)if(M.layerUpdates.size>0){const W=Zp(ie.width,ie.height,M.format,M.type);for(const J of M.layerUpdates){const ue=ie.data.subarray(J*W/ie.data.BYTES_PER_ELEMENT,(J+1)*W/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,J,ie.width,ie.height,1,ve,Ce,ue)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ve,Ce,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ne,ie.width,ie.height,ie.depth,0,ve,Ce,ie.data);else if(M.isData3DTexture)Ie?(tt&&n.texStorage3D(t.TEXTURE_3D,he,Ne,ie.width,ie.height,ie.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ve,Ce,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Ne,ie.width,ie.height,ie.depth,0,ve,Ce,ie.data);else if(M.isFramebufferTexture){if(tt)if(Ie)n.texStorage2D(t.TEXTURE_2D,he,Ne,ie.width,ie.height);else{let W=ie.width,J=ie.height;for(let ue=0;ue<he;ue++)n.texImage2D(t.TEXTURE_2D,ue,Ne,W,J,0,ve,Ce,null),W>>=1,J>>=1}}else if(ze.length>0){if(Ie&&tt){const W=Pe(ze[0]);n.texStorage2D(t.TEXTURE_2D,he,Ne,W.width,W.height)}for(let W=0,J=ze.length;W<J;W++)xe=ze[W],Ie?I&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,ve,Ce,xe):n.texImage2D(t.TEXTURE_2D,W,Ne,ve,Ce,xe);M.generateMipmaps=!1}else if(Ie){if(tt){const W=Pe(ie);n.texStorage2D(t.TEXTURE_2D,he,Ne,W.width,W.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,Ce,ie)}else n.texImage2D(t.TEXTURE_2D,0,Ne,ve,Ce,ie);p(M)&&u(Z),Se.__version=q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Y(R,M,O){if(M.image.length!==6)return;const Z=we(R,M),ee=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+O);const q=i.get(ee);if(ee.version!==q.__version||Z===!0){n.activeTexture(t.TEXTURE0+O);const Se=Ke.getPrimaries(Ke.workingColorSpace),ae=M.colorSpace===Ri?null:Ke.getPrimaries(M.colorSpace),ge=M.colorSpace===Ri||Se===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const We=M.isCompressedTexture||M.image[0].isCompressedTexture,ie=M.image[0]&&M.image[0].isDataTexture,ve=[];for(let J=0;J<6;J++)!We&&!ie?ve[J]=S(M.image[J],!0,r.maxCubemapSize):ve[J]=ie?M.image[J].image:M.image[J],ve[J]=it(M,ve[J]);const Ce=ve[0],Ne=s.convert(M.format,M.colorSpace),xe=s.convert(M.type),ze=x(M.internalFormat,Ne,xe,M.colorSpace),Ie=M.isVideoTexture!==!0,tt=q.__version===void 0||Z===!0,I=ee.dataReady;let he=E(M,Ce);se(t.TEXTURE_CUBE_MAP,M);let W;if(We){Ie&&tt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,ze,Ce.width,Ce.height);for(let J=0;J<6;J++){W=ve[J].mipmaps;for(let ue=0;ue<W.length;ue++){const pe=W[ue];M.format!==Dn?Ne!==null?Ie?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,0,0,pe.width,pe.height,Ne,pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,ze,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,0,0,pe.width,pe.height,Ne,xe,pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,ze,pe.width,pe.height,0,Ne,xe,pe.data)}}}else{if(W=M.mipmaps,Ie&&tt){W.length>0&&he++;const J=Pe(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,ze,J.width,J.height)}for(let J=0;J<6;J++)if(ie){Ie?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ve[J].width,ve[J].height,Ne,xe,ve[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ze,ve[J].width,ve[J].height,0,Ne,xe,ve[J].data);for(let ue=0;ue<W.length;ue++){const Ve=W[ue].image[J].image;Ie?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,0,0,Ve.width,Ve.height,Ne,xe,Ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,ze,Ve.width,Ve.height,0,Ne,xe,Ve.data)}}else{Ie?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ne,xe,ve[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ze,Ne,xe,ve[J]);for(let ue=0;ue<W.length;ue++){const pe=W[ue];Ie?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,0,0,Ne,xe,pe.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,ze,Ne,xe,pe.image[J])}}}p(M)&&u(t.TEXTURE_CUBE_MAP),q.__version=ee.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function te(R,M,O,Z,ee,q){const Se=s.convert(O.format,O.colorSpace),ae=s.convert(O.type),ge=x(O.internalFormat,Se,ae,O.colorSpace);if(!i.get(M).__hasExternalTextures){const ie=Math.max(1,M.width>>q),ve=Math.max(1,M.height>>q);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,q,ge,ie,ve,M.depth,0,Se,ae,null):n.texImage2D(ee,q,ge,ie,ve,0,Se,ae,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),je(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,ee,i.get(O).__webglTexture,0,ke(M)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,ee,i.get(O).__webglTexture,q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function fe(R,M,O){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const Z=M.depthTexture,ee=Z&&Z.isDepthTexture?Z.type:null,q=v(M.stencilBuffer,ee),Se=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=ke(M);je(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,q,M.width,M.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,q,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,q,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Se,t.RENDERBUFFER,R)}else{const Z=M.textures;for(let ee=0;ee<Z.length;ee++){const q=Z[ee],Se=s.convert(q.format,q.colorSpace),ae=s.convert(q.type),ge=x(q.internalFormat,Se,ae,q.colorSpace),We=ke(M);O&&je(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,We,ge,M.width,M.height):je(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,We,ge,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ge,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ce(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),B(M.depthTexture,0);const Z=i.get(M.depthTexture).__webglTexture,ee=ke(M);if(M.depthTexture.format===as)je(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0);else if(M.depthTexture.format===ys)je(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Le(R){const M=i.get(R),O=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){const ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",ee)};Z.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=Z}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ce(M.__webglFramebuffer,R)}else if(O){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=t.createRenderbuffer(),fe(M.__webglDepthbuffer[Z],R,!1);else{const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,q)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),fe(M.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,ee)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ae(R,M,O){const Z=i.get(R);M!==void 0&&te(Z.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&Le(R)}function Be(R){const M=R.texture,O=i.get(R),Z=i.get(M);R.addEventListener("dispose",b);const ee=R.textures,q=R.isWebGLCubeRenderTarget===!0,Se=ee.length>1;if(Se||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=M.version,o.memory.textures++),q){O.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[ae]=[];for(let ge=0;ge<M.mipmaps.length;ge++)O.__webglFramebuffer[ae][ge]=t.createFramebuffer()}else O.__webglFramebuffer[ae]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let ae=0;ae<M.mipmaps.length;ae++)O.__webglFramebuffer[ae]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(Se)for(let ae=0,ge=ee.length;ae<ge;ae++){const We=i.get(ee[ae]);We.__webglTexture===void 0&&(We.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&je(R)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ae=0;ae<ee.length;ae++){const ge=ee[ae];O.__webglColorRenderbuffer[ae]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[ae]);const We=s.convert(ge.format,ge.colorSpace),ie=s.convert(ge.type),ve=x(ge.internalFormat,We,ie,ge.colorSpace,R.isXRRenderTarget===!0),Ce=ke(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,ve,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,O.__webglColorRenderbuffer[ae])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),fe(O.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(q){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),se(t.TEXTURE_CUBE_MAP,M);for(let ae=0;ae<6;ae++)if(M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)te(O.__webglFramebuffer[ae][ge],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ge);else te(O.__webglFramebuffer[ae],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);p(M)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Se){for(let ae=0,ge=ee.length;ae<ge;ae++){const We=ee[ae],ie=i.get(We);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),se(t.TEXTURE_2D,We),te(O.__webglFramebuffer,R,We,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,0),p(We)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let ae=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ae,Z.__webglTexture),se(ae,M),M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)te(O.__webglFramebuffer[ge],R,M,t.COLOR_ATTACHMENT0,ae,ge);else te(O.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,ae,0);p(M)&&u(ae),n.unbindTexture()}R.depthBuffer&&Le(R)}function et(R){const M=R.textures;for(let O=0,Z=M.length;O<Z;O++){const ee=M[O];if(p(ee)){const q=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Se=i.get(ee).__webglTexture;n.bindTexture(q,Se),u(q),n.unbindTexture()}}}const He=[],L=[];function nn(R){if(R.samples>0){if(je(R)===!1){const M=R.textures,O=R.width,Z=R.height;let ee=t.COLOR_BUFFER_BIT;const q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=i.get(R),ae=M.length>1;if(ae)for(let ge=0;ge<M.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ge=0;ge<M.length;ge++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),ae){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Se.__webglColorRenderbuffer[ge]);const We=i.get(M[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,We,0)}t.blitFramebuffer(0,0,O,Z,0,0,O,Z,ee,t.NEAREST),l===!0&&(He.length=0,L.length=0,He.push(t.COLOR_ATTACHMENT0+ge),R.depthBuffer&&R.resolveDepthBuffer===!1&&(He.push(q),L.push(q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,L)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,He))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ae)for(let ge=0;ge<M.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,Se.__webglColorRenderbuffer[ge]);const We=i.get(M[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,We,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function ke(R){return Math.min(r.maxSamples,R.samples)}function je(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Re(R){const M=o.render.frame;d.get(R)!==M&&(d.set(R,M),R.update())}function it(R,M){const O=R.colorSpace,Z=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==$i&&O!==Ri&&(Ke.getTransfer(O)===ot?(Z!==Dn||ee!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function Pe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=T,this.setTexture2D=B,this.setTexture2DArray=$,this.setTexture3D=H,this.setTextureCube=X,this.rebindTextures=Ae,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=te,this.useMultisampledRTT=je}function _T(t,e){function n(i,r=Ri){let s;const o=Ke.getTransfer(r);if(i===fi)return t.UNSIGNED_BYTE;if(i===Nf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Pf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===R0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===A0)return t.BYTE;if(i===b0)return t.SHORT;if(i===Eo)return t.UNSIGNED_SHORT;if(i===Cf)return t.INT;if(i===Sr)return t.UNSIGNED_INT;if(i===ri)return t.FLOAT;if(i===Ro)return t.HALF_FLOAT;if(i===C0)return t.ALPHA;if(i===N0)return t.RGB;if(i===Dn)return t.RGBA;if(i===P0)return t.LUMINANCE;if(i===L0)return t.LUMINANCE_ALPHA;if(i===as)return t.DEPTH_COMPONENT;if(i===ys)return t.DEPTH_STENCIL;if(i===I0)return t.RED;if(i===Lf)return t.RED_INTEGER;if(i===D0)return t.RG;if(i===If)return t.RG_INTEGER;if(i===Df)return t.RGBA_INTEGER;if(i===Oa||i===Fa||i===ka||i===za)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Oa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Oa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ka)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===za)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===td||i===nd||i===id||i===rd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===td)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===id)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===rd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===sd||i===od||i===ad)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===sd||i===od)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ad)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ld||i===cd||i===ud||i===dd||i===fd||i===hd||i===pd||i===md||i===gd||i===vd||i===xd||i===_d||i===yd||i===Sd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ld)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ud)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===md)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_d)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ba||i===Ed||i===Md)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ba)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ed)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Md)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===U0||i===wd||i===Td||i===Ad)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ba)return s.COMPRESSED_RED_RGTC1_EXT;if(i===wd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Td)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ad)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_s?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class yT extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Sa extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ST={type:"move"};class Wc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const p=n.getJointPose(S,i),u=this._getHandJoint(c,S);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),g=.02,_=.005;c.inputState.pinching&&h>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ST)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Sa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const ET=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class wT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new tn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ji({vertexShader:ET,fragmentShader:MT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new oi(new Fl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TT extends Ts{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,h=null,g=null,_=null;const S=new wT,p=n.getContextAttributes();let u=null,x=null;const v=[],E=[],C=new Je;let b=null;const A=new xn;A.layers.enable(1),A.viewport=new gt;const P=new xn;P.layers.enable(2),P.viewport=new gt;const K=[A,P],y=new yT;y.layers.enable(1),y.layers.enable(2);let T=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let te=v[Y];return te===void 0&&(te=new Wc,v[Y]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Y){let te=v[Y];return te===void 0&&(te=new Wc,v[Y]=te),te.getGripSpace()},this.getHand=function(Y){let te=v[Y];return te===void 0&&(te=new Wc,v[Y]=te),te.getHandSpace()};function V(Y){const te=E.indexOf(Y.inputSource);if(te===-1)return;const fe=v[te];fe!==void 0&&(fe.update(Y.inputSource,Y.frame,c||o),fe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",$);for(let Y=0;Y<v.length;Y++){const te=E[Y];te!==null&&(E[Y]=null,v[Y].disconnect(te))}T=null,j=null,S.reset(),e.setRenderTarget(u),g=null,h=null,f=null,r=null,x=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",B),r.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const te={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),x=new Er(g.framebufferWidth,g.framebufferHeight,{format:Dn,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let te=null,fe=null,ce=null;p.depth&&(ce=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=p.stencil?ys:as,fe=p.stencil?_s:Sr);const Le={colorFormat:n.RGBA8,depthFormat:ce,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Le),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new Er(h.textureWidth,h.textureHeight,{format:Dn,type:fi,depthTexture:new Z0(h.textureWidth,h.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Fe.setContext(r),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function $(Y){for(let te=0;te<Y.removed.length;te++){const fe=Y.removed[te],ce=E.indexOf(fe);ce>=0&&(E[ce]=null,v[ce].disconnect(fe))}for(let te=0;te<Y.added.length;te++){const fe=Y.added[te];let ce=E.indexOf(fe);if(ce===-1){for(let Ae=0;Ae<v.length;Ae++)if(Ae>=E.length){E.push(fe),ce=Ae;break}else if(E[Ae]===null){E[Ae]=fe,ce=Ae;break}if(ce===-1)break}const Le=v[ce];Le&&Le.connect(fe)}}const H=new z,X=new z;function N(Y,te,fe){H.setFromMatrixPosition(te.matrixWorld),X.setFromMatrixPosition(fe.matrixWorld);const ce=H.distanceTo(X),Le=te.projectionMatrix.elements,Ae=fe.projectionMatrix.elements,Be=Le[14]/(Le[10]-1),et=Le[14]/(Le[10]+1),He=(Le[9]+1)/Le[5],L=(Le[9]-1)/Le[5],nn=(Le[8]-1)/Le[0],ke=(Ae[8]+1)/Ae[0],je=Be*nn,Re=Be*ke,it=ce/(-nn+ke),Pe=it*-nn;if(te.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Pe),Y.translateZ(it),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Le[10]===-1)Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const R=Be+it,M=et+it,O=je-Pe,Z=Re+(ce-Pe),ee=He*et/M*R,q=L*et/M*R;Y.projectionMatrix.makePerspective(O,Z,ee,q,R,M),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function G(Y,te){te===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(te.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let te=Y.near,fe=Y.far;S.texture!==null&&(S.depthNear>0&&(te=S.depthNear),S.depthFar>0&&(fe=S.depthFar)),y.near=P.near=A.near=te,y.far=P.far=A.far=fe,(T!==y.near||j!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,j=y.far);const ce=Y.parent,Le=y.cameras;G(y,ce);for(let Ae=0;Ae<Le.length;Ae++)G(Le[Ae],ce);Le.length===2?N(y,A,P):y.projectionMatrix.copy(A.projectionMatrix),Q(Y,y,ce)};function Q(Y,te,fe){fe===null?Y.matrix.copy(te.matrixWorld):(Y.matrix.copy(fe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(te.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=bd*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&g===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=Y)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(y)};let se=null;function we(Y,te){if(d=te.getViewerPose(c||o),_=te,d!==null){const fe=d.views;g!==null&&(e.setRenderTargetFramebuffer(x,g.framebuffer),e.setRenderTarget(x));let ce=!1;fe.length!==y.cameras.length&&(y.cameras.length=0,ce=!0);for(let Ae=0;Ae<fe.length;Ae++){const Be=fe[Ae];let et=null;if(g!==null)et=g.getViewport(Be);else{const L=f.getViewSubImage(h,Be);et=L.viewport,Ae===0&&(e.setRenderTargetTextures(x,L.colorTexture,h.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(x))}let He=K[Ae];He===void 0&&(He=new xn,He.layers.enable(Ae),He.viewport=new gt,K[Ae]=He),He.matrix.fromArray(Be.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Be.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(et.x,et.y,et.width,et.height),Ae===0&&(y.matrix.copy(He.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ce===!0&&y.cameras.push(He)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const Ae=f.getDepthInformation(fe[0]);Ae&&Ae.isValid&&Ae.texture&&S.init(e,Ae,r.renderState)}}for(let fe=0;fe<v.length;fe++){const ce=E[fe],Le=v[fe];ce!==null&&Le!==void 0&&Le.update(ce,te,c||o)}se&&se(Y,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),_=null}const Fe=new q0;Fe.setAnimationLoop(we),this.setAnimationLoop=function(Y){se=Y},this.dispose=function(){}}}const tr=new hi,AT=new ft;function bT(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,X0(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,x,v,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),f(p,u)):u.isMeshPhongMaterial?(s(p,u),d(p,u)):u.isMeshStandardMaterial?(s(p,u),h(p,u),u.isMeshPhysicalMaterial&&g(p,u,E)):u.isMeshMatcapMaterial?(s(p,u),_(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),S(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,x,v):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===en&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===en&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const x=e.get(u),v=x.envMap,E=x.envMapRotation;v&&(p.envMap.value=v,tr.copy(E),tr.x*=-1,tr.y*=-1,tr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),p.envMapRotation.value.setFromMatrix4(AT.makeRotationFromEuler(tr)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,x,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*x,p.scale.value=v*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function g(p,u,x){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===en&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function S(p,u){const x=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function RT(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const E=v.program;i.uniformBlockBinding(x,E)}function c(x,v){let E=r[x.id];E===void 0&&(_(x),E=d(x),r[x.id]=E,x.addEventListener("dispose",p));const C=v.program;i.updateUBOMapping(x,C);const b=e.render.frame;s[x.id]!==b&&(h(x),s[x.id]=b)}function d(x){const v=f();x.__bindingPointIndex=v;const E=t.createBuffer(),C=x.__size,b=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,C,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,E),E}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const v=r[x.id],E=x.uniforms,C=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let b=0,A=E.length;b<A;b++){const P=Array.isArray(E[b])?E[b]:[E[b]];for(let K=0,y=P.length;K<y;K++){const T=P[K];if(g(T,b,K,C)===!0){const j=T.__offset,V=Array.isArray(T.value)?T.value:[T.value];let B=0;for(let $=0;$<V.length;$++){const H=V[$],X=S(H);typeof H=="number"||typeof H=="boolean"?(T.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,j+B,T.__data)):H.isMatrix3?(T.__data[0]=H.elements[0],T.__data[1]=H.elements[1],T.__data[2]=H.elements[2],T.__data[3]=0,T.__data[4]=H.elements[3],T.__data[5]=H.elements[4],T.__data[6]=H.elements[5],T.__data[7]=0,T.__data[8]=H.elements[6],T.__data[9]=H.elements[7],T.__data[10]=H.elements[8],T.__data[11]=0):(H.toArray(T.__data,B),B+=X.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,j,T.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(x,v,E,C){const b=x.value,A=v+"_"+E;if(C[A]===void 0)return typeof b=="number"||typeof b=="boolean"?C[A]=b:C[A]=b.clone(),!0;{const P=C[A];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return C[A]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function _(x){const v=x.uniforms;let E=0;const C=16;for(let A=0,P=v.length;A<P;A++){const K=Array.isArray(v[A])?v[A]:[v[A]];for(let y=0,T=K.length;y<T;y++){const j=K[y],V=Array.isArray(j.value)?j.value:[j.value];for(let B=0,$=V.length;B<$;B++){const H=V[B],X=S(H),N=E%C,G=N%X.boundary,Q=N+G;E+=G,Q!==0&&C-Q<X.storage&&(E+=C-Q),j.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=E,E+=X.storage}}}const b=E%C;return b>0&&(E+=C-b),x.__size=E,x.__cache={},this}function S(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function p(x){const v=x.target;v.removeEventListener("dispose",p);const E=o.indexOf(v.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const x in r)t.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class CT{constructor(e={}){const{canvas:n=gS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const g=new Uint32Array(4),_=new Int32Array(4);let S=null,p=null;const u=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Hn,this.toneMapping=Bi,this.toneMappingExposure=1;const v=this;let E=!1,C=0,b=0,A=null,P=-1,K=null;const y=new gt,T=new gt;let j=null;const V=new Ye(0);let B=0,$=n.width,H=n.height,X=1,N=null,G=null;const Q=new gt(0,0,$,H),se=new gt(0,0,$,H);let we=!1;const Fe=new Of;let Y=!1,te=!1;const fe=new ft,ce=new ft,Le=new z,Ae=new gt,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function He(){return A===null?X:1}let L=i;function nn(w,D){return n.getContext(w,D)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Rf}`),n.addEventListener("webglcontextlost",J,!1),n.addEventListener("webglcontextrestored",ue,!1),n.addEventListener("webglcontextcreationerror",pe,!1),L===null){const D="webgl2";if(L=nn(D,w),L===null)throw nn(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ke,je,Re,it,Pe,R,M,O,Z,ee,q,Se,ae,ge,We,ie,ve,Ce,Ne,xe,ze,Ie,tt,I;function he(){ke=new D1(L),ke.init(),Ie=new _T(L,ke),je=new R1(L,ke,e,Ie),Re=new gT(L),je.reverseDepthBuffer&&Re.buffers.depth.setReversed(!0),it=new F1(L),Pe=new tT,R=new xT(L,ke,Re,Pe,je,Ie,it),M=new N1(v),O=new I1(v),Z=new jS(L),tt=new A1(L,Z),ee=new U1(L,Z,it,tt),q=new z1(L,ee,Z,it),Ne=new k1(L,je,R),ie=new C1(Pe),Se=new eT(v,M,O,ke,je,tt,ie),ae=new bT(v,Pe),ge=new iT,We=new cT(ke),Ce=new T1(v,M,O,Re,q,h,l),ve=new pT(v,q,je),I=new RT(L,it,je,Re),xe=new b1(L,ke,it),ze=new O1(L,ke,it),it.programs=Se.programs,v.capabilities=je,v.extensions=ke,v.properties=Pe,v.renderLists=ge,v.shadowMap=ve,v.state=Re,v.info=it}he();const W=new TT(v,L);this.xr=W,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=ke.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ke.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize($,H,!1))},this.getSize=function(w){return w.set($,H)},this.setSize=function(w,D,F=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=w,H=D,n.width=Math.floor(w*X),n.height=Math.floor(D*X),F===!0&&(n.style.width=w+"px",n.style.height=D+"px"),this.setViewport(0,0,w,D)},this.getDrawingBufferSize=function(w){return w.set($*X,H*X).floor()},this.setDrawingBufferSize=function(w,D,F){$=w,H=D,X=F,n.width=Math.floor(w*F),n.height=Math.floor(D*F),this.setViewport(0,0,w,D)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy(Q)},this.setViewport=function(w,D,F,k){w.isVector4?Q.set(w.x,w.y,w.z,w.w):Q.set(w,D,F,k),Re.viewport(y.copy(Q).multiplyScalar(X).round())},this.getScissor=function(w){return w.copy(se)},this.setScissor=function(w,D,F,k){w.isVector4?se.set(w.x,w.y,w.z,w.w):se.set(w,D,F,k),Re.scissor(T.copy(se).multiplyScalar(X).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(w){Re.setScissorTest(we=w)},this.setOpaqueSort=function(w){N=w},this.setTransparentSort=function(w){G=w},this.getClearColor=function(w){return w.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(w=!0,D=!0,F=!0){let k=0;if(w){let U=!1;if(A!==null){const re=A.texture.format;U=re===Df||re===If||re===Lf}if(U){const re=A.texture.type,de=re===fi||re===Sr||re===Eo||re===_s||re===Nf||re===Pf,_e=Ce.getClearColor(),ye=Ce.getClearAlpha(),Te=_e.r,be=_e.g,Ee=_e.b;de?(g[0]=Te,g[1]=be,g[2]=Ee,g[3]=ye,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Te,_[1]=be,_[2]=Ee,_[3]=ye,L.clearBufferiv(L.COLOR,0,_))}else k|=L.COLOR_BUFFER_BIT}D&&(k|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),F&&(k|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",J,!1),n.removeEventListener("webglcontextrestored",ue,!1),n.removeEventListener("webglcontextcreationerror",pe,!1),ge.dispose(),We.dispose(),Pe.dispose(),M.dispose(),O.dispose(),q.dispose(),tt.dispose(),I.dispose(),Se.dispose(),W.dispose(),W.removeEventListener("sessionstart",kf),W.removeEventListener("sessionend",zf),qi.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const w=it.autoReset,D=ve.enabled,F=ve.autoUpdate,k=ve.needsUpdate,U=ve.type;he(),it.autoReset=w,ve.enabled=D,ve.autoUpdate=F,ve.needsUpdate=k,ve.type=U}function pe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ve(w){const D=w.target;D.removeEventListener("dispose",Ve),_t(D)}function _t(w){Wt(w),Pe.remove(w)}function Wt(w){const D=Pe.get(w).programs;D!==void 0&&(D.forEach(function(F){Se.releaseProgram(F)}),w.isShaderMaterial&&Se.releaseShaderCache(w))}this.renderBufferDirect=function(w,D,F,k,U,re){D===null&&(D=Be);const de=U.isMesh&&U.matrixWorld.determinant()<0,_e=rv(w,D,F,k,U);Re.setMaterial(k,de);let ye=F.index,Te=1;if(k.wireframe===!0){if(ye=ee.getWireframeAttribute(F),ye===void 0)return;Te=2}const be=F.drawRange,Ee=F.attributes.position;let Ze=be.start*Te,rt=(be.start+be.count)*Te;re!==null&&(Ze=Math.max(Ze,re.start*Te),rt=Math.min(rt,(re.start+re.count)*Te)),ye!==null?(Ze=Math.max(Ze,0),rt=Math.min(rt,ye.count)):Ee!=null&&(Ze=Math.max(Ze,0),rt=Math.min(rt,Ee.count));const pt=rt-Ze;if(pt<0||pt===1/0)return;tt.setup(U,k,_e,F,ye);let rn,$e=xe;if(ye!==null&&(rn=Z.get(ye),$e=ze,$e.setIndex(rn)),U.isMesh)k.wireframe===!0?(Re.setLineWidth(k.wireframeLinewidth*He()),$e.setMode(L.LINES)):$e.setMode(L.TRIANGLES);else if(U.isLine){let Me=k.linewidth;Me===void 0&&(Me=1),Re.setLineWidth(Me*He()),U.isLineSegments?$e.setMode(L.LINES):U.isLineLoop?$e.setMode(L.LINE_LOOP):$e.setMode(L.LINE_STRIP)}else U.isPoints?$e.setMode(L.POINTS):U.isSprite&&$e.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)$e.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))$e.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Me=U._multiDrawStarts,Ct=U._multiDrawCounts,qe=U._multiDrawCount,wn=ye?Z.get(ye).bytesPerElement:1,Tr=Pe.get(k).currentProgram.getUniforms();for(let sn=0;sn<qe;sn++)Tr.setValue(L,"_gl_DrawID",sn),$e.render(Me[sn]/wn,Ct[sn])}else if(U.isInstancedMesh)$e.renderInstances(Ze,pt,U.count);else if(F.isInstancedBufferGeometry){const Me=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Ct=Math.min(F.instanceCount,Me);$e.renderInstances(Ze,pt,Ct)}else $e.render(Ze,pt)};function Xe(w,D,F){w.transparent===!0&&w.side===ti&&w.forceSinglePass===!1?(w.side=en,w.needsUpdate=!0,Do(w,D,F),w.side=Gi,w.needsUpdate=!0,Do(w,D,F),w.side=ti):Do(w,D,F)}this.compile=function(w,D,F=null){F===null&&(F=w),p=We.get(F),p.init(D),x.push(p),F.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),w!==F&&w.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const k=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const re=U.material;if(re)if(Array.isArray(re))for(let de=0;de<re.length;de++){const _e=re[de];Xe(_e,F,U),k.add(_e)}else Xe(re,F,U),k.add(re)}),x.pop(),p=null,k},this.compileAsync=function(w,D,F=null){const k=this.compile(w,D,F);return new Promise(U=>{function re(){if(k.forEach(function(de){Pe.get(de).currentProgram.isReady()&&k.delete(de)}),k.size===0){U(w);return}setTimeout(re,10)}ke.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Xt=null;function Xn(w){Xt&&Xt(w)}function kf(){qi.stop()}function zf(){qi.start()}const qi=new q0;qi.setAnimationLoop(Xn),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(w){Xt=w,W.setAnimationLoop(w),w===null?qi.stop():qi.start()},W.addEventListener("sessionstart",kf),W.addEventListener("sessionend",zf),this.render=function(w,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(D),D=W.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,D,A),p=We.get(w,x.length),p.init(D),x.push(p),ce.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Fe.setFromProjectionMatrix(ce),te=this.localClippingEnabled,Y=ie.init(this.clippingPlanes,te),S=ge.get(w,u.length),S.init(),u.push(S),W.enabled===!0&&W.isPresenting===!0){const re=v.xr.getDepthSensingMesh();re!==null&&zl(re,D,-1/0,v.sortObjects)}zl(w,D,0,v.sortObjects),S.finish(),v.sortObjects===!0&&S.sort(N,G),et=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,et&&Ce.addToRenderList(S,w),this.info.render.frame++,Y===!0&&ie.beginShadows();const F=p.state.shadowsArray;ve.render(F,w,D),Y===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=S.opaque,U=S.transmissive;if(p.setupLights(),D.isArrayCamera){const re=D.cameras;if(U.length>0)for(let de=0,_e=re.length;de<_e;de++){const ye=re[de];Hf(k,U,w,ye)}et&&Ce.render(w);for(let de=0,_e=re.length;de<_e;de++){const ye=re[de];Bf(S,w,ye,ye.viewport)}}else U.length>0&&Hf(k,U,w,D),et&&Ce.render(w),Bf(S,w,D);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(v,w,D),tt.resetDefaultState(),P=-1,K=null,x.pop(),x.length>0?(p=x[x.length-1],Y===!0&&ie.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,u.pop(),u.length>0?S=u[u.length-1]:S=null};function zl(w,D,F,k){if(w.visible===!1)return;if(w.layers.test(D.layers)){if(w.isGroup)F=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(D);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Fe.intersectsSprite(w)){k&&Ae.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ce);const de=q.update(w),_e=w.material;_e.visible&&S.push(w,de,_e,F,Ae.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Fe.intersectsObject(w))){const de=q.update(w),_e=w.material;if(k&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ae.copy(w.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Ae.copy(de.boundingSphere.center)),Ae.applyMatrix4(w.matrixWorld).applyMatrix4(ce)),Array.isArray(_e)){const ye=de.groups;for(let Te=0,be=ye.length;Te<be;Te++){const Ee=ye[Te],Ze=_e[Ee.materialIndex];Ze&&Ze.visible&&S.push(w,de,Ze,F,Ae.z,Ee)}}else _e.visible&&S.push(w,de,_e,F,Ae.z,null)}}const re=w.children;for(let de=0,_e=re.length;de<_e;de++)zl(re[de],D,F,k)}function Bf(w,D,F,k){const U=w.opaque,re=w.transmissive,de=w.transparent;p.setupLightsView(F),Y===!0&&ie.setGlobalState(v.clippingPlanes,F),k&&Re.viewport(y.copy(k)),U.length>0&&Io(U,D,F),re.length>0&&Io(re,D,F),de.length>0&&Io(de,D,F),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Hf(w,D,F,k){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Er(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?Ro:fi,minFilter:fr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const re=p.state.transmissionRenderTarget[k.id],de=k.viewport||y;re.setSize(de.z,de.w);const _e=v.getRenderTarget();v.setRenderTarget(re),v.getClearColor(V),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear(),et&&Ce.render(F);const ye=v.toneMapping;v.toneMapping=Bi;const Te=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),Y===!0&&ie.setGlobalState(v.clippingPlanes,k),Io(w,F,k),R.updateMultisampleRenderTarget(re),R.updateRenderTargetMipmap(re),ke.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let Ee=0,Ze=D.length;Ee<Ze;Ee++){const rt=D[Ee],pt=rt.object,rn=rt.geometry,$e=rt.material,Me=rt.group;if($e.side===ti&&pt.layers.test(k.layers)){const Ct=$e.side;$e.side=en,$e.needsUpdate=!0,Vf(pt,F,k,rn,$e,Me),$e.side=Ct,$e.needsUpdate=!0,be=!0}}be===!0&&(R.updateMultisampleRenderTarget(re),R.updateRenderTargetMipmap(re))}v.setRenderTarget(_e),v.setClearColor(V,B),Te!==void 0&&(k.viewport=Te),v.toneMapping=ye}function Io(w,D,F){const k=D.isScene===!0?D.overrideMaterial:null;for(let U=0,re=w.length;U<re;U++){const de=w[U],_e=de.object,ye=de.geometry,Te=k===null?de.material:k,be=de.group;_e.layers.test(F.layers)&&Vf(_e,D,F,ye,Te,be)}}function Vf(w,D,F,k,U,re){w.onBeforeRender(v,D,F,k,U,re),w.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(v,D,F,k,w,re),U.transparent===!0&&U.side===ti&&U.forceSinglePass===!1?(U.side=en,U.needsUpdate=!0,v.renderBufferDirect(F,D,k,U,w,re),U.side=Gi,U.needsUpdate=!0,v.renderBufferDirect(F,D,k,U,w,re),U.side=ti):v.renderBufferDirect(F,D,k,U,w,re),w.onAfterRender(v,D,F,k,U,re)}function Do(w,D,F){D.isScene!==!0&&(D=Be);const k=Pe.get(w),U=p.state.lights,re=p.state.shadowsArray,de=U.state.version,_e=Se.getParameters(w,U.state,re,D,F),ye=Se.getProgramCacheKey(_e);let Te=k.programs;k.environment=w.isMeshStandardMaterial?D.environment:null,k.fog=D.fog,k.envMap=(w.isMeshStandardMaterial?O:M).get(w.envMap||k.environment),k.envMapRotation=k.environment!==null&&w.envMap===null?D.environmentRotation:w.envMapRotation,Te===void 0&&(w.addEventListener("dispose",Ve),Te=new Map,k.programs=Te);let be=Te.get(ye);if(be!==void 0){if(k.currentProgram===be&&k.lightsStateVersion===de)return jf(w,_e),be}else _e.uniforms=Se.getUniforms(w),w.onBeforeCompile(_e,v),be=Se.acquireProgram(_e,ye),Te.set(ye,be),k.uniforms=_e.uniforms;const Ee=k.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ee.clippingPlanes=ie.uniform),jf(w,_e),k.needsLights=ov(w),k.lightsStateVersion=de,k.needsLights&&(Ee.ambientLightColor.value=U.state.ambient,Ee.lightProbe.value=U.state.probe,Ee.directionalLights.value=U.state.directional,Ee.directionalLightShadows.value=U.state.directionalShadow,Ee.spotLights.value=U.state.spot,Ee.spotLightShadows.value=U.state.spotShadow,Ee.rectAreaLights.value=U.state.rectArea,Ee.ltc_1.value=U.state.rectAreaLTC1,Ee.ltc_2.value=U.state.rectAreaLTC2,Ee.pointLights.value=U.state.point,Ee.pointLightShadows.value=U.state.pointShadow,Ee.hemisphereLights.value=U.state.hemi,Ee.directionalShadowMap.value=U.state.directionalShadowMap,Ee.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ee.spotShadowMap.value=U.state.spotShadowMap,Ee.spotLightMatrix.value=U.state.spotLightMatrix,Ee.spotLightMap.value=U.state.spotLightMap,Ee.pointShadowMap.value=U.state.pointShadowMap,Ee.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=be,k.uniformsList=null,be}function Gf(w){if(w.uniformsList===null){const D=w.currentProgram.getUniforms();w.uniformsList=Va.seqWithValue(D.seq,w.uniforms)}return w.uniformsList}function jf(w,D){const F=Pe.get(w);F.outputColorSpace=D.outputColorSpace,F.batching=D.batching,F.batchingColor=D.batchingColor,F.instancing=D.instancing,F.instancingColor=D.instancingColor,F.instancingMorph=D.instancingMorph,F.skinning=D.skinning,F.morphTargets=D.morphTargets,F.morphNormals=D.morphNormals,F.morphColors=D.morphColors,F.morphTargetsCount=D.morphTargetsCount,F.numClippingPlanes=D.numClippingPlanes,F.numIntersection=D.numClipIntersection,F.vertexAlphas=D.vertexAlphas,F.vertexTangents=D.vertexTangents,F.toneMapping=D.toneMapping}function rv(w,D,F,k,U){D.isScene!==!0&&(D=Be),R.resetTextureUnits();const re=D.fog,de=k.isMeshStandardMaterial?D.environment:null,_e=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:$i,ye=(k.isMeshStandardMaterial?O:M).get(k.envMap||de),Te=k.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,be=!!F.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ee=!!F.morphAttributes.position,Ze=!!F.morphAttributes.normal,rt=!!F.morphAttributes.color;let pt=Bi;k.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(pt=v.toneMapping);const rn=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,$e=rn!==void 0?rn.length:0,Me=Pe.get(k),Ct=p.state.lights;if(Y===!0&&(te===!0||w!==K)){const pn=w===K&&k.id===P;ie.setState(k,w,pn)}let qe=!1;k.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Ct.state.version||Me.outputColorSpace!==_e||U.isBatchedMesh&&Me.batching===!1||!U.isBatchedMesh&&Me.batching===!0||U.isBatchedMesh&&Me.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Me.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Me.instancing===!1||!U.isInstancedMesh&&Me.instancing===!0||U.isSkinnedMesh&&Me.skinning===!1||!U.isSkinnedMesh&&Me.skinning===!0||U.isInstancedMesh&&Me.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Me.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Me.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Me.instancingMorph===!1&&U.morphTexture!==null||Me.envMap!==ye||k.fog===!0&&Me.fog!==re||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==ie.numPlanes||Me.numIntersection!==ie.numIntersection)||Me.vertexAlphas!==Te||Me.vertexTangents!==be||Me.morphTargets!==Ee||Me.morphNormals!==Ze||Me.morphColors!==rt||Me.toneMapping!==pt||Me.morphTargetsCount!==$e)&&(qe=!0):(qe=!0,Me.__version=k.version);let wn=Me.currentProgram;qe===!0&&(wn=Do(k,D,U));let Tr=!1,sn=!1,Bl=!1;const vt=wn.getUniforms(),gi=Me.uniforms;if(Re.useProgram(wn.program)&&(Tr=!0,sn=!0,Bl=!0),k.id!==P&&(P=k.id,sn=!0),Tr||K!==w){je.reverseDepthBuffer?(fe.copy(w.projectionMatrix),xS(fe),_S(fe),vt.setValue(L,"projectionMatrix",fe)):vt.setValue(L,"projectionMatrix",w.projectionMatrix),vt.setValue(L,"viewMatrix",w.matrixWorldInverse);const pn=vt.map.cameraPosition;pn!==void 0&&pn.setValue(L,Le.setFromMatrixPosition(w.matrixWorld)),je.logarithmicDepthBuffer&&vt.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&vt.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),K!==w&&(K=w,sn=!0,Bl=!0)}if(U.isSkinnedMesh){vt.setOptional(L,U,"bindMatrix"),vt.setOptional(L,U,"bindMatrixInverse");const pn=U.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),vt.setValue(L,"boneTexture",pn.boneTexture,R))}U.isBatchedMesh&&(vt.setOptional(L,U,"batchingTexture"),vt.setValue(L,"batchingTexture",U._matricesTexture,R),vt.setOptional(L,U,"batchingIdTexture"),vt.setValue(L,"batchingIdTexture",U._indirectTexture,R),vt.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&vt.setValue(L,"batchingColorTexture",U._colorsTexture,R));const Hl=F.morphAttributes;if((Hl.position!==void 0||Hl.normal!==void 0||Hl.color!==void 0)&&Ne.update(U,F,wn),(sn||Me.receiveShadow!==U.receiveShadow)&&(Me.receiveShadow=U.receiveShadow,vt.setValue(L,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(gi.envMap.value=ye,gi.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&D.environment!==null&&(gi.envMapIntensity.value=D.environmentIntensity),sn&&(vt.setValue(L,"toneMappingExposure",v.toneMappingExposure),Me.needsLights&&sv(gi,Bl),re&&k.fog===!0&&ae.refreshFogUniforms(gi,re),ae.refreshMaterialUniforms(gi,k,X,H,p.state.transmissionRenderTarget[w.id]),Va.upload(L,Gf(Me),gi,R)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Va.upload(L,Gf(Me),gi,R),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&vt.setValue(L,"center",U.center),vt.setValue(L,"modelViewMatrix",U.modelViewMatrix),vt.setValue(L,"normalMatrix",U.normalMatrix),vt.setValue(L,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const pn=k.uniformsGroups;for(let Vl=0,av=pn.length;Vl<av;Vl++){const Wf=pn[Vl];I.update(Wf,wn),I.bind(Wf,wn)}}return wn}function sv(w,D){w.ambientLightColor.needsUpdate=D,w.lightProbe.needsUpdate=D,w.directionalLights.needsUpdate=D,w.directionalLightShadows.needsUpdate=D,w.pointLights.needsUpdate=D,w.pointLightShadows.needsUpdate=D,w.spotLights.needsUpdate=D,w.spotLightShadows.needsUpdate=D,w.rectAreaLights.needsUpdate=D,w.hemisphereLights.needsUpdate=D}function ov(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,D,F){Pe.get(w.texture).__webglTexture=D,Pe.get(w.depthTexture).__webglTexture=F;const k=Pe.get(w);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=F===void 0,k.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,D){const F=Pe.get(w);F.__webglFramebuffer=D,F.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(w,D=0,F=0){A=w,C=D,b=F;let k=!0,U=null,re=!1,de=!1;if(w){const ye=Pe.get(w);if(ye.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(L.FRAMEBUFFER,null),k=!1;else if(ye.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(ye.__hasExternalTextures)R.rebindTextures(w,Pe.get(w.texture).__webglTexture,Pe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ee=w.depthTexture;if(ye.__boundDepthTexture!==Ee){if(Ee!==null&&Pe.has(Ee)&&(w.width!==Ee.image.width||w.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}const Te=w.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(de=!0);const be=Pe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(be[D])?U=be[D][F]:U=be[D],re=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?U=Pe.get(w).__webglMultisampledFramebuffer:Array.isArray(be)?U=be[F]:U=be,y.copy(w.viewport),T.copy(w.scissor),j=w.scissorTest}else y.copy(Q).multiplyScalar(X).floor(),T.copy(se).multiplyScalar(X).floor(),j=we;if(Re.bindFramebuffer(L.FRAMEBUFFER,U)&&k&&Re.drawBuffers(w,U),Re.viewport(y),Re.scissor(T),Re.setScissorTest(j),re){const ye=Pe.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+D,ye.__webglTexture,F)}else if(de){const ye=Pe.get(w.texture),Te=D||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ye.__webglTexture,F||0,Te)}P=-1},this.readRenderTargetPixels=function(w,D,F,k,U,re,de){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Pe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&de!==void 0&&(_e=_e[de]),_e){Re.bindFramebuffer(L.FRAMEBUFFER,_e);try{const ye=w.texture,Te=ye.format,be=ye.type;if(!je.textureFormatReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=w.width-k&&F>=0&&F<=w.height-U&&L.readPixels(D,F,k,U,Ie.convert(Te),Ie.convert(be),re)}finally{const ye=A!==null?Pe.get(A).__webglFramebuffer:null;Re.bindFramebuffer(L.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(w,D,F,k,U,re,de){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Pe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&de!==void 0&&(_e=_e[de]),_e){const ye=w.texture,Te=ye.format,be=ye.type;if(!je.textureFormatReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=w.width-k&&F>=0&&F<=w.height-U){Re.bindFramebuffer(L.FRAMEBUFFER,_e);const Ee=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ee),L.bufferData(L.PIXEL_PACK_BUFFER,re.byteLength,L.STREAM_READ),L.readPixels(D,F,k,U,Ie.convert(Te),Ie.convert(be),0);const Ze=A!==null?Pe.get(A).__webglFramebuffer:null;Re.bindFramebuffer(L.FRAMEBUFFER,Ze);const rt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await vS(L,rt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ee),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,re),L.deleteBuffer(Ee),L.deleteSync(rt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,D=null,F=0){w.isTexture!==!0&&(Ha("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,w=arguments[1]);const k=Math.pow(2,-F),U=Math.floor(w.image.width*k),re=Math.floor(w.image.height*k),de=D!==null?D.x:0,_e=D!==null?D.y:0;R.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,F,0,0,de,_e,U,re),Re.unbindTexture()},this.copyTextureToTexture=function(w,D,F=null,k=null,U=0){w.isTexture!==!0&&(Ha("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,w=arguments[1],D=arguments[2],U=arguments[3]||0,F=null);let re,de,_e,ye,Te,be;F!==null?(re=F.max.x-F.min.x,de=F.max.y-F.min.y,_e=F.min.x,ye=F.min.y):(re=w.image.width,de=w.image.height,_e=0,ye=0),k!==null?(Te=k.x,be=k.y):(Te=0,be=0);const Ee=Ie.convert(D.format),Ze=Ie.convert(D.type);R.setTexture2D(D,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);const rt=L.getParameter(L.UNPACK_ROW_LENGTH),pt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),rn=L.getParameter(L.UNPACK_SKIP_PIXELS),$e=L.getParameter(L.UNPACK_SKIP_ROWS),Me=L.getParameter(L.UNPACK_SKIP_IMAGES),Ct=w.isCompressedTexture?w.mipmaps[U]:w.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Ct.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ct.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,_e),L.pixelStorei(L.UNPACK_SKIP_ROWS,ye),w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,U,Te,be,re,de,Ee,Ze,Ct.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,U,Te,be,Ct.width,Ct.height,Ee,Ct.data):L.texSubImage2D(L.TEXTURE_2D,U,Te,be,re,de,Ee,Ze,Ct),L.pixelStorei(L.UNPACK_ROW_LENGTH,rt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,rn),L.pixelStorei(L.UNPACK_SKIP_ROWS,$e),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Me),U===0&&D.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(w,D,F=null,k=null,U=0){w.isTexture!==!0&&(Ha("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,k=arguments[1]||null,w=arguments[2],D=arguments[3],U=arguments[4]||0);let re,de,_e,ye,Te,be,Ee,Ze,rt;const pt=w.isCompressedTexture?w.mipmaps[U]:w.image;F!==null?(re=F.max.x-F.min.x,de=F.max.y-F.min.y,_e=F.max.z-F.min.z,ye=F.min.x,Te=F.min.y,be=F.min.z):(re=pt.width,de=pt.height,_e=pt.depth,ye=0,Te=0,be=0),k!==null?(Ee=k.x,Ze=k.y,rt=k.z):(Ee=0,Ze=0,rt=0);const rn=Ie.convert(D.format),$e=Ie.convert(D.type);let Me;if(D.isData3DTexture)R.setTexture3D(D,0),Me=L.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)R.setTexture2DArray(D,0),Me=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);const Ct=L.getParameter(L.UNPACK_ROW_LENGTH),qe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),wn=L.getParameter(L.UNPACK_SKIP_PIXELS),Tr=L.getParameter(L.UNPACK_SKIP_ROWS),sn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,pt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ye),L.pixelStorei(L.UNPACK_SKIP_ROWS,Te),L.pixelStorei(L.UNPACK_SKIP_IMAGES,be),w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Me,U,Ee,Ze,rt,re,de,_e,rn,$e,pt.data):D.isCompressedArrayTexture?L.compressedTexSubImage3D(Me,U,Ee,Ze,rt,re,de,_e,rn,pt.data):L.texSubImage3D(Me,U,Ee,Ze,rt,re,de,_e,rn,$e,pt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ct),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,qe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,wn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Tr),L.pixelStorei(L.UNPACK_SKIP_IMAGES,sn),U===0&&D.generateMipmaps&&L.generateMipmap(Me),Re.unbindTexture()},this.initRenderTarget=function(w){Pe.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),Re.unbindTexture()},this.resetState=function(){C=0,b=0,A=null,Re.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Uf?"display-p3":"srgb",n.unpackColorSpace=Ke.workingColorSpace===Ul?"display-p3":"srgb"}}class NT extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class nv extends Lo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Qp=new ft,Cd=new B0,Ea=new Ol,Ma=new z;class PT extends Lt{constructor(e=new mi,n=new nv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ea.copy(i.boundingSphere),Ea.applyMatrix4(r),Ea.radius+=s,e.ray.intersectsSphere(Ea)===!1)return;Qp.copy(r).invert(),Cd.copy(e.ray).applyMatrix4(Qp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let _=h,S=g;_<S;_++){const p=c.getX(_);Ma.fromBufferAttribute(f,p),Jp(Ma,p,l,r,e,n,this)}}else{const h=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=h,S=g;_<S;_++)Ma.fromBufferAttribute(f,_),Jp(Ma,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Jp(t,e,n,i,r,s,o){const a=Cd.distanceSqToPoint(t);if(a<n){const l=new z;Cd.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class iv extends Lt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Xc=new ft,em=new z,tm=new z;class LT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Of,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;em.setFromMatrixPosition(e.matrixWorld),n.position.copy(em),tm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(tm),n.updateMatrixWorld(),Xc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Xc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class IT extends LT{constructor(){super(new K0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class DT extends iv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new IT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class UT extends iv{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rf);const OT=({materialType:t,uploadedGeometry:e})=>{const n=le.useRef(null),i=le.useRef(null),r=le.useRef(null),s=le.useRef(null);return le.useEffect(()=>{if(!n.current)return;const o=new NT;i.current=o,o.background=new Ye(16119280);const a=new xn(50,n.current.clientWidth/n.current.clientHeight,.1,1e3);a.position.z=5;const l=new CT({antialias:!0,alpha:!0});s.current=l;const c=n.current.clientWidth,d=n.current.clientHeight;l.setSize(c,d),n.current.appendChild(l.domElement);const f=new DT(16777215,1);f.position.set(1,1,1),o.add(f),o.add(new UT(4210752));let h;const g=()=>{h=requestAnimationFrame(g),r.current&&(r.current.rotation.x+=.005,r.current.rotation.y+=.01),l.render(o,a)};g();const _=()=>{if(!n.current)return;const S=n.current.clientWidth,p=n.current.clientHeight;l.setSize(S,p),a.aspect=S/p,a.updateProjectionMatrix()};return window.addEventListener("resize",_),()=>{window.removeEventListener("resize",_),cancelAnimationFrame(h),n.current&&l.domElement&&n.current.removeChild(l.domElement),l.dispose()}},[]),le.useEffect(()=>{if(!i.current)return;r.current&&(i.current.remove(r.current),r.current.geometry&&r.current.geometry.dispose());let o;e?(o=e.clone(),o.center()):o=new As(1.5,1.5,1.5),o.computeBoundingBox();const a=new z;o.boundingBox.getSize(a);const d=2.5/Math.max(a.x,a.y,a.z);let f=2696484;t==="RESIN"&&(f=14251782),t==="PLA"&&(f=1467700),t==="PETG"&&(f=3900150);const h=new nv({color:f,size:.05,sizeAttenuation:!0}),g=new PT(o,h);e&&g.scale.set(d,d,d),r.current=g,i.current.add(g)},[t,e]),m.jsx("div",{ref:n,className:"w-full h-64 border-b-2 border-stone-800 bg-stone-200 cursor-crosshair filter grayscale contrast-125"})},FT=t=>{const e=new DataView(t);let n=80;const i=e.getUint32(n,!0);n+=4;const r=[];let s=0,o=null;for(let a=0;a<i;a++){n+=12;const l={x:e.getFloat32(n,!0),y:e.getFloat32(n+4,!0),z:e.getFloat32(n+8,!0)};n+=12;const c={x:e.getFloat32(n,!0),y:e.getFloat32(n+4,!0),z:e.getFloat32(n+8,!0)};n+=12;const d={x:e.getFloat32(n,!0),y:e.getFloat32(n+4,!0),z:e.getFloat32(n+8,!0)};n+=12,a===0&&(o=l),r.push(l.x,l.y,l.z,c.x,c.y,c.z,d.x,d.y,d.z);const f=d.x*c.y*l.z,h=c.x*d.y*l.z,g=d.x*l.y*c.z,_=l.x*d.y*c.z,S=c.x*l.y*d.z,p=l.x*c.y*d.z;s+=1/6*(-f+h+g-_-S+p),n+=2}return console.log("STL Debug:",{triangleCount:i,sampleVert1:o,rawVolume:s,finalVolume:Math.abs(s)/1e3}),{vertices:new Float32Array(r),volume:Math.abs(s)/1e3}},kT=({addToCart:t})=>{const[e,n]=le.useState(1),[i,r]=le.useState(null),[s,o]=le.useState("PLA"),[a,l]=le.useState(!1),[c,d]=le.useState([]),[f,h]=le.useState(null),[g,_]=le.useState(0),S=v=>{d(E=>[...E.slice(-4),`> ${v}`])},p=v=>{const E=v.target.files[0];if(E){r(E),l(!0),S(`INITIATING SCAN: ${E.name}`);const C=new FileReader;C.onload=function(b){try{const A=b.target.result,{vertices:P,volume:K}=FT(A),y=new mi;y.setAttribute("position",new Fn(P,3)),y.computeVertexNormals(),h(y),_(K),setTimeout(()=>{S(`VOL: ${K.toFixed(2)} cm3`),S("GEOMETRY VERIFIED."),l(!1),n(2)},1500)}catch{S("ERR: PARSE FAILED. USING DEFAULT MESH."),l(!1),n(2),_(45.2)}},C.readAsArrayBuffer(E)}},u=()=>{const E=s==="RESIN"?2:s==="PETG"?1.5:1,C=15,b=g*.85*E+C,A=isNaN(b)?"0.00":b.toFixed(2);return console.log("Quote Calc:",{volume:g,baseRate:.85,materialMult:E,setupFee:C,calculatedPrice:b,quotedPrice:A}),A},x=()=>{const v=g*2.5,E=Math.floor(v/60),C=Math.floor(v%60);return`${E}h ${C}m`};return m.jsxs("div",{className:"w-full max-w-5xl mx-auto p-4 md:p-8 relative z-10 text-theme-main",children:[m.jsxs("div",{className:"mb-8 border-b border-dashed border-theme-main/30 pb-2 flex justify-between items-end",children:[m.jsxs("div",{children:[m.jsx("h2",{className:"text-2xl font-bold uppercase mb-1",children:"Fabrication_Wiz.exe"}),m.jsx("p",{className:"text-xs text-theme-sub",children:"v.4.1.0 // SALVAGED_NODE"})]}),m.jsxs("div",{className:"text-right text-xs hidden sm:block",children:[m.jsxs("p",{children:["SERVER: ",m.jsx("span",{className:"text-[var(--accent)]",children:"ONLINE"})]}),m.jsx("p",{children:"QUEUE_POS: 00"})]})]}),m.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[m.jsxs("div",{className:"lg:col-span-2 space-y-6",children:[m.jsx("div",{className:`brutalist-block p-1 relative transition-all ${e>=1?"opacity-100":"opacity-40"}`,children:m.jsxs("div",{className:"border border-theme-main/10 p-6 h-full",children:[m.jsx("div",{className:"absolute top-0 left-0 bg-[var(--accent)] text-white text-[10px] px-2 py-1",children:"STEP_01 // INPUT"}),e===1&&m.jsxs("div",{className:"mt-4 text-center border-2 border-dashed border-theme-main/20 p-10 hover:bg-theme-main/5 transition-colors group cursor-pointer relative h-64 flex flex-col items-center justify-center",children:[m.jsx("input",{type:"file",accept:".stl",className:"absolute inset-0 opacity-0 cursor-pointer",onChange:p}),a?m.jsxs("div",{className:"flex flex-col items-center",children:[m.jsx(z_,{className:"w-12 h-12 text-[var(--accent)] mb-4 animate-bounce"}),m.jsx("p",{className:"font-bold animate-pulse",children:"PARSING_GEOMETRY..."})]}):m.jsxs(m.Fragment,{children:[m.jsx(ey,{className:"w-10 h-10 mx-auto text-theme-sub opacity-50 group-hover:opacity-100 group-hover:text-[var(--accent)] mb-4"}),m.jsx("p",{className:"font-bold text-theme-main",children:"INITIATE UPLOAD"}),m.jsx("p",{className:"text-[10px] text-theme-sub mt-2",children:"[ .STL FILES ONLY ]"})]})]}),e>1&&m.jsxs("div",{className:"mt-4 flex items-center justify-between bg-theme-sub p-4 border border-theme-main/20",children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx(G_,{className:"text-[var(--accent)]",size:20}),m.jsxs("div",{children:[m.jsx("p",{className:"font-bold uppercase max-w-[150px] truncate",children:(i==null?void 0:i.name)||"ERR_NO_NAME"}),m.jsxs("p",{className:"text-[10px] text-theme-sub",children:["HASH: ",Math.random().toString(36).substring(7)]})]})]}),m.jsx("button",{onClick:()=>{n(1),h(null)},className:"text-[10px] underline hover:bg-[var(--accent)] hover:text-white px-2 py-1",children:"RESTART_SEQUENCE"})]})]})}),e>=2&&m.jsx("div",{className:"brutalist-block p-1 relative",children:m.jsxs("div",{className:"border border-theme-main/10 p-6",children:[m.jsx("div",{className:"absolute top-0 left-0 bg-[var(--accent)] text-white text-[10px] px-2 py-1",children:"STEP_02 // MAT_CONFIG"}),m.jsxs("div",{className:"mt-6 grid grid-cols-1 md:grid-cols-2 gap-6",children:[m.jsxs("div",{children:[m.jsx("label",{className:"text-[10px] font-bold block mb-2 text-theme-sub",children:"SELECT_SUBSTRATE"}),m.jsx("div",{className:"space-y-2",children:["PLA","PETG","RESIN"].map(v=>m.jsxs("button",{onClick:()=>{o(v),S(`MATERIAL SET TO: ${v}`)},className:`w-full text-left px-4 py-2 border font-bold text-sm flex justify-between items-center transition-all ${s===v?"border-[var(--accent)] bg-[var(--accent)] text-white":"border-theme-main/20 hover:border-theme-main/40"}`,children:[m.jsx("span",{children:v}),s===v&&m.jsx("div",{className:"w-1.5 h-1.5 bg-white animate-pulse"})]},v))})]}),m.jsxs("div",{className:"text-xs space-y-4",children:[m.jsxs("div",{className:"border-l-2 border-theme-main/20 pl-3",children:[m.jsx("p",{className:"text-theme-sub text-[10px] mb-1",children:"CALC_VOLUME"}),m.jsxs("p",{className:"font-bold",children:[g.toFixed(2)," cmÂ³"]})]}),m.jsxs("div",{className:"border-l-2 border-theme-main/20 pl-3",children:[m.jsx("p",{className:"text-theme-sub text-[10px] mb-1",children:"TIME_EST"}),m.jsx("p",{className:"font-bold",children:x()})]})]})]})]})})]}),m.jsxs("div",{className:"lg:col-span-1 space-y-6",children:[m.jsxs("div",{className:"brutalist-block p-1",children:[m.jsxs("div",{className:"flex justify-between items-center mb-1 px-1 bg-theme-sub",children:[m.jsx("span",{className:"text-[10px] font-bold text-theme-sub px-2 py-1",children:"LIDAR_PREVIEW"}),m.jsx("span",{className:"text-[10px] text-theme-main animate-pulse px-2",children:"â REC"})]}),e>=2?m.jsx(OT,{materialType:s,uploadedGeometry:f}):m.jsxs("div",{className:"w-full h-64 bg-[#1b2612] flex flex-col items-center justify-center border-b border-theme-main/10",children:[m.jsx("div",{className:"w-full h-[1px] bg-theme-main/10 animate-pulse mb-4 w-3/4"}),m.jsx("p",{className:"text-[10px] text-theme-sub text-center",children:"AWAITING_DATA_STREAM"}),m.jsx("div",{className:"w-full h-[1px] bg-theme-main/10 animate-pulse mt-4 w-1/2"})]}),m.jsxs("div",{className:"bg-[#1b2612] p-3 h-32 overflow-hidden font-mono text-[10px] text-theme-main border-t border-theme-main/10",children:[c.map((v,E)=>m.jsx("div",{className:"opacity-80",children:v},E)),m.jsx("div",{className:"animate-pulse",children:"_"})]})]}),e>=2&&m.jsx("div",{className:"brutalist-block p-1",children:m.jsxs("div",{className:"p-4 border border-theme-main/10",children:[m.jsxs("div",{className:"flex justify-between items-end mb-4 border-b border-theme-main pb-4 border-dashed",children:[m.jsxs("div",{children:[m.jsx("p",{className:"text-[10px] text-theme-sub",children:"TOTAL_REQUISITION"}),m.jsxs("h3",{className:"text-3xl font-bold text-[var(--accent)]",children:["$",u()]})]}),m.jsx("p",{className:"text-xs text-theme-sub mb-1",children:"USD"})]}),m.jsxs("button",{onClick:async()=>{if(i)try{const v=await i.arrayBuffer(),E=new Uint8Array(v);let C="";for(let B=0;B<E.length;B++)C+=String.fromCharCode(E[B]);const b=btoa(C),A=await fetch("/api/upload-stl.js",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({file:b,filename:i.name||"untitled.stl",volume:g,material:s})});if(!A.ok){console.error("Upload failed",await A.text());return}const{url:P,volume:K,price:y,filename:T,signature:j}=await A.json(),V=parseFloat(y);console.log("Cart Add:",{volume:g,material:s,price:V}),t({id:"CUST_PART",name:`Printed ${i.name||"UNTITLED"} (${K}cm³, ${s})`,price:V,category:"CUSTOM",description:`STL: ${P} (Material: ${s})`,specs:[s.toUpperCase(),"CUSTOM_FAB"],material:s,signature:j})}catch(v){console.error("Confirm print order error",v)}},className:"w-full font-bold py-3 transition-all flex justify-center items-center gap-2 text-sm bg-[var(--accent)] text-white hover:brightness-110",children:[m.jsx(Af,{size:14}),"[ CONFIRM_PRINT_ORDER ]"]})]})})]})]})]})},zT=({searchInput:t,setSearchInput:e,handleSubmit:n,handleLocate:i,unit:r,setUnit:s,showRaw:o,setShowRaw:a})=>m.jsx("header",{className:"flex flex-col md:flex-row justify-between border-b-2 border-stone-900",children:m.jsxs("div",{className:"flex-1 flex flex-col md:flex-row",children:[m.jsx("div",{className:"flex-1 border-b-2 md:border-b-0 md:border-r-2 border-stone-900 p-0 relative",children:m.jsxs("form",{onSubmit:n,className:"flex h-full",children:[m.jsx("input",{type:"text",value:t,onChange:l=>e(l.target.value.toUpperCase()),placeholder:"CITY OR ZIP (US)...",className:"w-full h-full p-4 outline-none uppercase placeholder-gray-500 bg-transparent text-xl font-bold"}),m.jsx("button",{type:"submit",className:"bg-yellow-400 border-l-2 border-stone-900 px-6 hover:bg-yellow-500 transition-colors flex items-center justify-center","aria-label":"Search",children:m.jsx(H_,{size:24})})]})}),m.jsxs("div",{className:"flex",children:[m.jsx("button",{onClick:i,className:"p-4 border-r-2 border-stone-900 hover:bg-stone-200 transition-colors",title:"Locate Me","aria-label":"Locate Me",children:m.jsx(q_,{size:24})}),m.jsx("button",{onClick:()=>s(r==="imperial"?"metric":"imperial"),className:"p-4 border-r-2 border-stone-900 hover:bg-stone-200 w-24 font-bold",title:"Toggle Units","aria-label":"Toggle Units",children:r==="imperial"?"°F":"°C"}),m.jsx("button",{onClick:()=>a(!o),className:`p-4 hover:bg-stone-200 ${o?"bg-stone-900 text-white hover:bg-stone-800":""}`,title:"Raw Data View","aria-label":"Toggle Raw Data",children:m.jsx(Af,{size:24})})]})]})}),BT=({alerts:t})=>{if(!t||t.length===0)return null;const e=t.some(i=>/(power (outage|failure|lines|loss)|outages)/i.test(i.properties.description||"")||/(power (outage|failure|lines|loss)|outages)/i.test(i.properties.instruction||"")||/(power (outage|failure|lines|loss)|outages)/i.test(i.properties.event||"")),n=()=>{const i=document.getElementById("alert-details");i&&i.scrollIntoView({behavior:"smooth"})};return m.jsx("div",{onClick:n,className:"bg-red-600 text-white border-b-2 border-stone-900 cursor-pointer hover:bg-red-700 transition-colors group",children:m.jsxs("div",{className:"p-4 flex flex-col md:flex-row items-center justify-between gap-4 animate-pulse group-hover:animate-none",children:[m.jsxs("div",{className:"flex items-center gap-4",children:[m.jsx(J_,{size:32,className:"flex-shrink-0",strokeWidth:3}),m.jsxs("div",{className:"flex flex-col",children:[m.jsxs("h3",{className:"text-xl font-black uppercase tracking-wider",children:["SEVERE WEATHER ALERT ",t.length>1?`(${t.length})`:""]}),e&&m.jsxs("span",{className:"flex items-center gap-1 text-yellow-300 font-bold text-sm uppercase",children:[m.jsx(bf,{size:16,fill:"currentColor"}),"Power Outage Risk Detected"]})]})]}),m.jsxs("div",{className:"flex items-center gap-2 border-2 border-white px-3 py-1 font-bold text-xs uppercase bg-transparent group-hover:bg-white group-hover:text-red-600 transition-colors",children:[m.jsx("span",{children:"VIEW DETAILS"}),m.jsx(B_,{size:16})]})]})})},HT=({loading:t,error:e})=>m.jsxs("div",{className:"border-b-2 border-stone-900 bg-[#a3c1ad] text-stone-900 p-2 text-sm font-bold flex justify-between uppercase",children:[m.jsxs("span",{children:["STATUS: ",t?"FETCHING STREAM...":e?"ERROR":"ONLINE"]}),m.jsx("span",{children:"SRC: OPEN-METEO / NWS / WINDY"})]}),VT=({weatherData:t,WeatherCodeMap:e})=>t?m.jsxs("div",{className:"p-6 md:p-12 border-b-2 md:border-b-0 md:border-r-2 border-stone-900 flex flex-col justify-between relative overflow-hidden group",children:[m.jsx("div",{className:"absolute top-0 right-0 p-2 opacity-10 text-9xl font-black select-none pointer-events-none transform translate-x-1/3 -translate-y-1/3",children:t.weather.current.temperature_2m.toFixed(0)}),m.jsxs("div",{children:[m.jsx("h2",{className:"text-sm font-bold text-stone-500 mb-2",children:"CURRENT_LOCATION"}),m.jsx("p",{className:"text-4xl md:text-5xl font-black uppercase break-words leading-none mb-2",children:t.geo.name}),m.jsx("p",{className:"text-lg text-stone-600",children:t.geo.country}),m.jsxs("p",{className:"text-xs text-stone-400 mt-1",children:["LAT: ",t.geo.latitude.toFixed(2)," / LON: ",t.geo.longitude.toFixed(2)]})]}),m.jsxs("div",{className:"mt-12",children:[m.jsx("div",{className:"flex items-baseline",children:m.jsxs("span",{className:"text-7xl md:text-9xl font-black tracking-tighter",children:[t.weather.current.temperature_2m.toFixed(0),"°"]})}),m.jsx("p",{className:"text-xl md:text-2xl font-bold bg-stone-900 text-white inline-block px-2 py-1 uppercase mt-4",children:e[t.weather.current.weather_code]||"UNKNOWN"})]})]}):null,GT=({weatherData:t})=>t?m.jsxs("div",{className:"grid grid-cols-2 grid-rows-2",children:[m.jsxs("div",{className:"border-b-2 border-r-2 border-stone-900 p-4 md:p-6 hover:bg-blue-50 hover:text-contrast transition-colors",children:[m.jsx("h3",{className:"text-xs font-bold text-stone-500 uppercase mb-2",children:"WIND_SPEED"}),m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("span",{className:"text-3xl md:text-5xl font-bold",children:t.weather.current.wind_speed_10m}),m.jsx("span",{className:"text-sm font-bold",children:t.weather.current_units.wind_speed_10m})]}),m.jsxs("div",{className:"mt-2 flex items-center gap-2 text-sm font-bold",children:[m.jsx("div",{style:{transform:`rotate(${t.weather.current.wind_direction_10m}deg)`},children:m.jsx(V_,{size:20,strokeWidth:3})}),m.jsxs("span",{children:[t.weather.current.wind_direction_10m,"°"]})]})]}),m.jsxs("div",{className:"border-b-2 border-stone-900 p-4 md:p-6 hover:bg-blue-50 hover:text-contrast transition-colors",children:[m.jsx("h3",{className:"text-xs font-bold text-stone-500 uppercase mb-2",children:"HUMIDITY"}),m.jsxs("div",{className:"flex items-end gap-2",children:[m.jsx("span",{className:"text-3xl md:text-5xl font-bold",children:t.weather.current.relative_humidity_2m}),m.jsx("span",{className:"text-xl font-bold",children:"%"})]})]}),m.jsxs("div",{className:"border-r-2 border-stone-900 p-4 md:p-6 hover:bg-blue-50 hover:text-contrast transition-colors",children:[m.jsx("h3",{className:"text-xs font-bold text-stone-500 uppercase mb-2",children:"PRESSURE (NOW)"}),m.jsxs("div",{className:"flex items-end gap-2",children:[m.jsx("span",{className:"text-3xl md:text-5xl font-bold",children:t.weather.current.pressure_msl.toFixed(0)}),m.jsx("span",{className:"text-sm font-bold",children:"hPa"})]})]}),m.jsxs("div",{className:"p-4 md:p-6 hover:bg-blue-50 hover:text-contrast transition-colors",children:[m.jsx("h3",{className:"text-xs font-bold text-stone-500 uppercase mb-2",children:"PRECIPITATION"}),m.jsxs("div",{className:"flex items-end gap-2",children:[m.jsx("span",{className:"text-3xl md:text-5xl font-bold",children:t.weather.current.precipitation}),m.jsx("span",{className:"text-sm font-bold",children:t.weather.current_units.precipitation})]})]})]}):null,nm={0:"Clear Sky",1:"Mainly Clear",2:"Partly Cloudy",3:"Overcast",45:"Fog",48:"Depositing Rime Fog",51:"Light Drizzle",53:"Moderate Drizzle",55:"Dense Drizzle",56:"Light Freezing Drizzle",57:"Dense Freezing Drizzle",61:"Slight Rain",63:"Moderate Rain",65:"Heavy Rain",66:"Light Freezing Rain",67:"Heavy Freezing Rain",71:"Slight Snow Fall",73:"Moderate Snow Fall",75:"Heavy Snow Fall",77:"Snow Grains",80:"Slight Rain Showers",81:"Moderate Rain Showers",82:"Violent Rain Showers",85:"Slight Snow Showers",86:"Heavy Snow Showers",95:"Thunderstorm",96:"Thunderstorm + Slight Hail",99:"Thunderstorm + Heavy Hail"},jT=t=>{const e=new Date(t+"T00:00:00");return`${e.getMonth()+1}/${e.getDate()}`},Nd=t=>new Date(t).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!1}),WT=({weatherData:t,airQuality:e})=>{var l,c,d,f,h,g,_;if(!t)return null;const n=t.current,i=t.daily,r=e==null?void 0:e.current,s=S=>{const p=new Date(S);let u=p.getFullYear(),x=p.getMonth()+1,v=p.getDate();x<3&&(u--,x+=12),++x;let E=365.25*u,C=30.6*x,b=E+C+v-694039.09;return b/=29.5305882,b-parseInt(b)},o=()=>{const S=s(new Date);return S<.03?"NEW MOON":S<.25?`WAXING CRESCENT (${(S*100).toFixed(0)}%)`:S<.28?"FIRST QUARTER":S<.5?`WAXING GIBBOUS (${(S*100).toFixed(0)}%)`:S<.53?"FULL MOON":S<.75?`WANING GIBBOUS (${(100-(S-.5)*200).toFixed(0)}%)`:S<.78?"LAST QUARTER":`WANING CRESCENT (${(100-S*100).toFixed(0)}%)`},a=S=>S<=50?"bg-green-500 text-white":S<=100?"bg-yellow-400 text-stone-900":S<=150?"bg-orange-500 text-white":S<=200?"bg-red-600 text-white":S<=300?"bg-purple-600 text-white":"bg-amber-900 text-white";return m.jsxs("div",{className:"border-b-2 border-stone-900 bg-white text-contrast grid grid-cols-1 md:grid-cols-3",children:[m.jsxs("div",{className:"p-4 border-b-2 md:border-b-0 md:border-r-2 border-stone-900 flex flex-col justify-center",children:[m.jsxs("h3",{className:"text-xs font-bold text-stone-500 uppercase mb-2 flex items-center gap-2",children:[m.jsx(Hu,{size:16})," CYCLE_DATA"]}),m.jsxs("div",{className:"text-sm font-bold flex justify-between mb-1",children:[m.jsx("span",{children:"SUNRISE:"}),m.jsx("span",{children:Nd(i.sunrise[0])})]}),m.jsxs("div",{className:"text-sm font-bold flex justify-between mb-2",children:[m.jsx("span",{children:"SUNSET:"}),m.jsx("span",{children:Nd(i.sunset[0])})]}),m.jsxs("div",{className:"text-xs font-mono uppercase bg-[#e8e6e1] p-1 border border-stone-300 text-center",children:["MOON: ",o()]})]}),m.jsxs("div",{className:"p-4 border-b-2 md:border-b-0 md:border-r-2 border-stone-900 flex flex-col justify-center",children:[m.jsxs("h3",{className:"text-xs font-bold text-stone-500 uppercase mb-2 flex items-center gap-2",children:[m.jsx(W_,{size:16})," SURVIVAL_INDEX"]}),m.jsxs("div",{className:"flex items-end justify-between mb-2",children:[m.jsxs("div",{children:[m.jsx("span",{className:"block text-xs font-bold text-stone-400",children:"DEW POINT"}),m.jsxs("span",{className:"text-2xl font-black",children:[(l=n.dew_point_2m)==null?void 0:l.toFixed(1),"°"]})]}),m.jsxs("div",{className:"text-right",children:[m.jsx("span",{className:"block text-xs font-bold text-stone-400",children:"APPARENT"}),m.jsxs("span",{className:"text-xl font-bold",children:[(c=n.apparent_temperature)==null?void 0:c.toFixed(1),"°"]})]})]}),m.jsxs("div",{className:"flex justify-between items-center mt-1",children:[m.jsx("span",{className:"text-xs font-bold uppercase",children:"UV INDEX (MAX)"}),m.jsx("span",{className:`px-2 py-0.5 text-xs font-bold border border-stone-900 ${((d=i.uv_index_max)==null?void 0:d[0])>7?"bg-red-500 text-white":"bg-green-300"}`,children:((h=(f=i.uv_index_max)==null?void 0:f[0])==null?void 0:h.toFixed(1))||"0.0"})]})]}),m.jsxs("div",{className:"p-4 flex flex-col justify-center",children:[m.jsxs("h3",{className:"text-xs font-bold text-stone-500 uppercase mb-2 flex items-center gap-2",children:[m.jsx(v0,{size:16})," AIR_QUALITY"]}),r?m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"flex items-center gap-4 mb-2",children:m.jsxs("div",{className:`flex-1 p-2 text-center border-2 border-stone-900 font-black text-xl ${a(r.us_aqi)}`,children:[r.us_aqi," ",m.jsx("span",{className:"text-xs font-normal block",children:"US AQI"})]})}),m.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[m.jsxs("span",{children:["PM2.5: ",(g=r.pm2_5)==null?void 0:g.toFixed(1)]}),m.jsxs("span",{children:["O3: ",(_=r.ozone)==null?void 0:_.toFixed(1)]})]})]}):m.jsx("div",{className:"text-sm font-bold text-stone-400 italic",children:"OFFLINE / NO DATA"})]})]})},XT=({currentGeo:t,loadLocation:e,currentTemp:n,unit:i})=>{const[r,s]=le.useState([]),[o,a]=le.useState({});le.useEffect(()=>{const f=localStorage.getItem("hl_weather_pins");f&&s(JSON.parse(f))},[]),le.useEffect(()=>{if(r.length===0)return;const f=async()=>{const g={};for(const _ of r)try{const S=new URLSearchParams({latitude:_.lat,longitude:_.lon,current:"temperature_2m",temperature_unit:i==="imperial"?"fahrenheit":"celsius"}),u=await(await fetch(`https://api.open-meteo.com/v1/forecast?${S.toString()}`)).json();g[_.id]=u.current.temperature_2m}catch{console.warn("Failed to fetch pin",_.name)}a(g)};f();const h=setInterval(f,3e5);return()=>clearInterval(h)},[r,i]);const l=()=>{if(!t||r.length>=3)return;const f={id:`${t.latitude}-${t.longitude}`,name:t.name,lat:t.latitude,lon:t.longitude};if(r.some(g=>g.id===f.id))return;const h=[...r,f];s(h),localStorage.setItem("hl_weather_pins",JSON.stringify(h))},c=(f,h)=>{h.stopPropagation();const g=r.filter(_=>_.id!==f);s(g),localStorage.setItem("hl_weather_pins",JSON.stringify(g))},d=t&&r.some(f=>f.id===`${t.latitude}-${t.longitude}`);return m.jsxs("div",{className:"w-full bg-stone-900 text-white border-b-2 border-stone-900 flex flex-col md:flex-row justify-between items-center px-4 py-2 gap-4",children:[m.jsxs("div",{className:"flex-1 flex gap-4 overflow-x-auto w-full md:w-auto items-center scrollbar-hide",children:[m.jsx("span",{className:"text-xs font-bold text-stone-500 uppercase whitespace-nowrap hidden md:inline",children:"PINNED:"}),r.length===0&&m.jsx("span",{className:"text-xs text-stone-600 font-mono",children:"NO_LOCATIONS_SAVED"}),r.map(f=>m.jsxs("div",{onClick:()=>e(f.lat,f.lon),className:"flex items-center gap-2 bg-stone-900 px-3 py-1 rounded cursor-pointer hover:bg-stone-800 transition-colors whitespace-nowrap border border-stone-700 hover:border-white",children:[m.jsx("span",{className:"text-sm font-bold uppercase",children:f.name}),m.jsx("span",{className:"text-sm font-mono text-yellow-400",children:o[f.id]!==void 0?`${o[f.id].toFixed(0)}°`:"--"}),m.jsx("button",{onClick:h=>c(f.id,h),className:"text-stone-500 hover:text-red-500 ml-1",children:m.jsx(Q_,{size:12})})]},f.id))]}),t&&m.jsx("div",{className:"flex-shrink-0",children:d?m.jsxs("span",{className:"text-xs font-bold text-green-400 uppercase flex items-center gap-1 opacity-50 cursor-not-allowed",children:[m.jsx(np,{size:14,className:"fill-current"})," LOCATION_PINNED"]}):m.jsxs("button",{onClick:l,disabled:r.length>=3,className:`
                            text-xs font-bold uppercase flex items-center gap-2 px-3 py-1 border border-white
                            ${r.length>=3?"opacity-50 cursor-not-allowed":"hover:bg-white hover:text-stone-900 transition-colors"}
                        `,children:[m.jsx(np,{size:14}),r.length>=3?"MAX_PINS_REACHED":"PIN_THIS_LOCATION"]})})]})},YT=({geo:t,interactive:e,setInteractive:n})=>t?m.jsxs("div",{className:"border-b-2 border-stone-900 p-0 bg-stone-200",children:[m.jsxs("div",{className:"bg-stone-900 text-white px-4 py-1 text-xs font-bold uppercase flex justify-between items-center",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("span",{children:"LIVE_RADAR_FEED"}),m.jsx(Z_,{size:16})]}),m.jsxs("button",{onClick:()=>n(!e),className:"flex items-center gap-2 hover:text-yellow-400",title:e?"Disable Interaction":"Enable Interaction",children:[e?m.jsx(Y_,{size:16}):m.jsx(X_,{size:16}),m.jsx("span",{className:"hidden sm:inline",children:e?"INTERACTIVE_MODE":"PASSIVE_MODE"})]})]}),m.jsx("div",{className:"w-full h-[400px] relative bg-stone-300 overflow-hidden",children:m.jsx("iframe",{width:"100%",height:"400",src:`https://embed.windy.com/embed2.html?lat=${t.latitude}&lon=${t.longitude}&detailLat=${t.latitude}&detailLon=${t.longitude}&width=650&height=450&zoom=8&level=surface&overlay=radar&product=radar&menu=&message=true&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1`,frameBorder:"0",title:"Weather Radar",className:`
                    transition-all duration-500 w-full h-full
                    ${e?"grayscale-0 pointer-events-auto":"grayscale-[100%] contrast-125 pointer-events-none hover:grayscale-0"}
                `})})]}):null,$T=({hourlyData:t,unit:e,currentTime:n})=>{if(!t)return null;let i=0;if(n){const o=n.slice(0,13),a=t.time.findIndex(l=>l.startsWith(o));a!==-1&&(i=a)}const r=24,s=[];for(let o=0;o<r;o++)i+o<t.time.length&&s.push(i+o);return m.jsxs("div",{className:"border-b-2 border-stone-900 overflow-hidden bg-stone-50 text-contrast",children:[m.jsx("div",{className:"bg-stone-900 text-white px-4 py-1 text-xs font-bold uppercase inline-block",children:"HOURLY_TEMP (24H)"}),m.jsx("div",{className:"overflow-x-auto whitespace-nowrap scrollbar-hide flex",children:s.map(o=>{const a=t.time[o],l=t.temperature_2m[o],c=t.precipitation_probability[o],d=t.snowfall?t.snowfall[o]:0,f=d>0;return m.jsxs("div",{className:"inline-flex flex-col items-center justify-between border-r-2 border-stone-900 p-4 min-w-[100px] hover:bg-white transition-colors",children:[m.jsx("span",{className:"text-xs font-bold mb-2",children:Nd(a)}),m.jsxs("span",{className:"text-2xl font-black mb-2",children:[l.toFixed(0),"°"]}),m.jsx("div",{className:"h-12 w-full flex items-end justify-center gap-1",children:m.jsx("div",{className:`w-4 ${f?"bg-cyan-300":"bg-blue-600"}`,style:{height:`${c}%`}})}),m.jsxs("span",{className:`text-[10px] font-bold mt-1 ${f?"text-cyan-600":"text-blue-600"}`,children:[c,"%"]}),f&&m.jsxs("span",{className:"text-[10px] font-bold text-cyan-700 bg-cyan-100 px-1 rounded mt-1",children:[d," ",e==="imperial"?"in":"cm"]})]},o)})})]})},qT=({hourly:t,unit:e})=>{if(!t||!t.pressure_msl)return null;const n=t.pressure_msl.slice(0,24),i=t.time.slice(0,24),r=e==="imperial"?n.map(u=>u*.02953):n,s=e==="imperial"?"inHg":"hPa",o=e==="imperial"?2:0,a=Math.min(...r),l=Math.max(...r),c=l-a||1,d=1e3,f=200,h=40,g=40,_=f-g*2,S=d-h*2,p=r.map((u,x)=>{const v=x/23*S+h,E=(u-a)/c,C=f-g-E*_;return`${v},${C}`}).join(" ");return m.jsxs("div",{className:"border-b-2 border-stone-900 p-6 bg-white text-contrast",children:[m.jsxs("div",{className:"flex justify-between items-end mb-4",children:[m.jsx("h3",{className:"text-sm font-bold uppercase bg-stone-900 text-white inline-block px-2 py-1",children:"ATMOSPHERIC_PRESSURE (24H)"}),m.jsxs("div",{className:"text-right",children:[m.jsx("span",{className:"block text-xs font-bold text-stone-500 uppercase",children:"CURRENT"}),m.jsxs("span",{className:"text-xl font-black",children:[r[0].toFixed(o)," ",s]})]})]}),m.jsxs("div",{className:"relative border-2 border-stone-900 border-dashed bg-stone-50 h-48 w-full overflow-hidden",children:[m.jsxs("svg",{viewBox:`0 0 ${d} ${f}`,className:"w-full h-full preserve-3d",children:[m.jsx("line",{x1:h,y1:g,x2:d-h,y2:g,stroke:"#e5e7eb",strokeWidth:"2",strokeDasharray:"10,10"}),m.jsx("line",{x1:h,y1:f-g,x2:d-h,y2:f-g,stroke:"#e5e7eb",strokeWidth:"2",strokeDasharray:"10,10"}),m.jsx("polyline",{fill:"none",stroke:"black",strokeWidth:"6",strokeLinejoin:"round",points:p}),r.map((u,x)=>{if(x%4!==0&&x!==0&&x!==23)return null;const v=x/23*S+h,E=(u-a)/c,C=f-g-E*_;return m.jsxs("g",{children:[m.jsx("circle",{cx:v,cy:C,r:"8",fill:"white",stroke:"black",strokeWidth:"3"}),m.jsxs("text",{x:v,y:f-10,textAnchor:"middle",className:"text-[24px] font-bold fill-gray-500 font-mono",children:[new Date(i[x]).getHours(),":00"]}),(x===0||x===23||u===l||u===a)&&m.jsx("text",{x:v,y:C-20,textAnchor:"middle",className:"text-[24px] font-black fill-black",children:u.toFixed(o)})]},x)})]}),m.jsxs("div",{className:"absolute top-2 left-2 text-xs font-bold bg-white px-1 border border-stone-900",children:["MAX: ",l.toFixed(o)]}),m.jsxs("div",{className:"absolute bottom-2 left-2 text-xs font-bold bg-white px-1 border border-stone-900",children:["MIN: ",a.toFixed(o)]})]})]})},KT=({dailyData:t,WeatherCodeMap:e,unit:n})=>t?m.jsxs("div",{children:[m.jsx("div",{className:"bg-stone-900 text-white px-4 py-1 text-xs font-bold uppercase inline-block",children:"7_DAY_FORECAST"}),m.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2",children:[t.time.slice(0,7).map((i,r)=>{const s=t.snowfall_sum?t.snowfall_sum[r]:0,o=s>0;return m.jsxs("div",{className:`
                    p-4 border-stone-900 border-b-2 lg:border-b-0 lg:border-r-2
                    ${r===3||r===7?"lg:border-r-0":""}
                    ${r>=4?"lg:border-t-2":""}
                    hover:bg-yellow-50 hover:text-contrast transition-colors flex flex-row lg:flex-col justify-between items-center lg:items-start h-24 lg:h-auto
                `,children:[m.jsxs("div",{className:"text-left",children:[m.jsx("span",{className:"block text-xs font-bold text-stone-500 uppercase",children:r===0?"TODAY":jT(i)}),m.jsx("span",{className:"block text-sm font-bold mt-1 max-w-[120px] truncate",children:e[t.weather_code[r]]}),o&&m.jsxs("span",{className:"block text-xs font-bold text-cyan-700 bg-cyan-100 px-1 rounded mt-1 w-fit",children:["Snow: ",s," ",n==="imperial"?"in":"cm"]})]}),m.jsxs("div",{className:"flex gap-4 lg:gap-2 items-center lg:mt-4",children:[m.jsxs("div",{className:"text-right lg:text-left",children:[m.jsx("span",{className:"block text-xs text-stone-500 uppercase",children:"MAX"}),m.jsxs("span",{className:"text-xl font-black",children:[t.temperature_2m_max[r].toFixed(0),"°"]})]}),m.jsx("div",{className:"w-px h-8 bg-stone-300 mx-2 lg:hidden"}),m.jsxs("div",{className:"text-right lg:text-left",children:[m.jsx("span",{className:"block text-xs text-stone-500 uppercase",children:"MIN"}),m.jsxs("span",{className:"text-xl font-bold text-stone-600",children:[t.temperature_2m_min[r].toFixed(0),"°"]})]})]})]},i)}),m.jsxs("div",{className:"hidden lg:flex border-t-2 border-stone-900 bg-stone-900 text-white p-6 flex-col justify-center items-center",children:[m.jsx("span",{className:"text-4xl font-black",children:"END"}),m.jsx("span",{className:"text-xs uppercase",children:"OF DATA STREAM"})]})]})]}):null,ZT=({alerts:t})=>!t||t.length===0?null:m.jsxs("div",{id:"alert-details",className:"mt-8 border-2 border-red-600 bg-red-50 p-6 text-contrast",children:[m.jsxs("div",{className:"bg-red-600 text-white px-4 py-2 text-xl font-black uppercase inline-block mb-4",children:["ACTIVE ALERTS (",t.length,")"]}),m.jsx("div",{className:"space-y-6",children:t.map((e,n)=>{const i=/(power (outage|failure|lines|loss)|outages)/i.test(e.properties.description||"")||/(power (outage|failure|lines|loss)|outages)/i.test(e.properties.instruction||"")||/(power (outage|failure|lines|loss)|outages)/i.test(e.properties.event||"");return m.jsxs("div",{className:"border-l-4 border-red-600 pl-4",children:[m.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-1",children:[m.jsx("h3",{className:"text-lg font-black uppercase",children:e.properties.event}),i&&m.jsxs("span",{className:"flex items-center gap-1 bg-yellow-400 text-red-900 text-xs font-bold px-2 py-0.5 uppercase",children:[m.jsx(bf,{size:12,fill:"currentColor"}),"Power Risk"]})]}),m.jsx("p",{className:"font-bold text-sm mb-2 text-stone-700",children:e.properties.headline}),m.jsx("p",{className:"text-xs font-mono whitespace-pre-wrap bg-white p-2 border border-red-200 mt-2 max-h-40 overflow-auto",children:e.properties.description})]},n)})})]}),QT=({data:t})=>t?m.jsx("div",{className:"border-t-2 border-stone-900 p-4 bg-stone-900 text-green-400 text-xs overflow-auto h-64 font-mono",children:m.jsx("pre",{children:JSON.stringify(t,null,2)})}):null,JT=()=>m.jsxs("div",{className:"border-t-2 border-stone-900 p-12 flex flex-col items-center justify-center bg-white min-h-[400px] text-contrast",children:[m.jsx("div",{className:"animate-spin mb-4",children:m.jsx("div",{className:"w-12 h-12 border-4 border-stone-900 border-t-transparent rounded-full"})}),m.jsx("h2",{className:"text-2xl font-black blink",children:"FETCHING_DATA..."}),m.jsx("p",{className:"text-xs text-stone-500 mt-2",children:"ESTABLISHING CONNECTION TO SATELLITE"})]}),eA=()=>{const[t,e]=le.useState(!1),[n,i]=le.useState(null),[r,s]=le.useState(null),[o,a]=le.useState(null),[l,c]=le.useState([]),[d,f]=le.useState(()=>localStorage.getItem("hl_weather_unit")||"imperial"),[h,g]=le.useState(!1),[_,S]=le.useState(!1),[p,u]=le.useState(""),x=le.useRef(null);le.useEffect(()=>{localStorage.setItem("hl_weather_unit",d),r&&(r.geo.name!=="COORDINATES"?y(r.geo.name):T(r.geo.latitude,r.geo.longitude))},[d]);const v=B=>/^\d{5}$/.test(B.trim()),E=(B,$,H,X)=>{const N=new URLSearchParams({latitude:B,longitude:$,timezone:H==="auto"?"auto":H,current:"temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_direction_10m,pressure_msl,dew_point_2m",hourly:"temperature_2m,precipitation_probability,weather_code,wind_speed_10m,pressure_msl,snowfall",daily:"weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,snowfall_sum,uv_index_max"});return X==="imperial"?(N.append("temperature_unit","fahrenheit"),N.append("wind_speed_unit","mph"),N.append("precipitation_unit","inch")):(N.append("temperature_unit","celsius"),N.append("wind_speed_unit","kmh"),N.append("precipitation_unit","mm")),`https://api.open-meteo.com/v1/forecast?${N.toString()}`},C=async(B,$)=>{if(v(B)){const N=await fetch(`https://api.zippopotam.us/us/${B}`,{signal:$});if(!N.ok)throw new Error("ZIP CODE NOT FOUND");const G=await N.json();return{name:G.places[0]["place name"],latitude:parseFloat(G.places[0].latitude),longitude:parseFloat(G.places[0].longitude),country:"United States",country_code:"US",timezone:"auto"}}const X=await(await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${B}&count=1&language=en&format=json`,{signal:$})).json();if(!X.results||X.results.length===0)throw new Error("CITY NOT FOUND");return X.results[0]},b=async(B,$,H,X)=>{const N=E(B,$,H,d),G=await fetch(N,{signal:X});if(!G.ok)throw new Error("WEATHER STREAM FAILED");return await G.json()},A=async(B,$,H)=>{try{const X=await fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${B}&longitude=${$}&current=us_aqi,pm2_5,ozone`,{signal:H});return X.ok?await X.json():null}catch(X){return console.warn("AQI Fetch Failed",X),null}},P=async(B,$,H)=>{try{const X=await fetch(`https://api.weather.gov/alerts/active?point=${B},${$}`,{signal:H});return X.ok?(await X.json()).features||[]:[]}catch(X){return X.name!=="AbortError"&&console.warn("Alert fetch skipped/failed",X),[]}},K=async(B,$=!1,H=null,X=null)=>{x.current&&x.current.abort();const N=new AbortController;x.current=N,e(!0),i(null),c([]),a(null);try{let G;$?G={name:"COORDINATES",latitude:H,longitude:X,country:"GPS",country_code:"US",timezone:"auto"}:G=await C(B,N.signal),$||localStorage.setItem("hl_weather_last_query",B);const Q=b(G.latitude,G.longitude,G.timezone,N.signal),se=A(G.latitude,G.longitude,N.signal);let we=Promise.resolve([]);(G.country_code==="US"||G.country==="United States"||$)&&(we=P(G.latitude,G.longitude,N.signal));const[Fe,Y,te]=await Promise.all([Q,se,we]);s({geo:G,weather:Fe}),a(Y),c(te),u("")}catch(G){G.name!=="AbortError"&&i(G.message.toUpperCase())}finally{x.current===N&&e(!1)}},y=B=>K(B,!1),T=(B,$)=>K(null,!0,B,$),j=()=>{if(e(!0),i(null),!navigator.geolocation){i("GEOLOCATION NOT SUPPORTED"),e(!1);return}navigator.geolocation.getCurrentPosition(B=>{const{latitude:$,longitude:H}=B.coords;T($,H)},()=>{i("LOCATION ACCESS DENIED"),e(!1)})};le.useEffect(()=>{const B=localStorage.getItem("hl_weather_last_query");y(B||"10001")},[]);const V=B=>{B.preventDefault(),p.trim()&&y(p)};return m.jsx("div",{className:"text-theme-main font-mono p-2 sm:p-4 md:p-8 flex flex-col items-center",children:m.jsxs("div",{className:"w-full max-w-5xl bg-theme-main/90 backdrop-blur-sm brutalist-block",children:[m.jsx(zT,{searchInput:p,setSearchInput:u,handleSubmit:V,handleLocate:j,unit:d,setUnit:f,showRaw:h,setShowRaw:g}),m.jsx(XT,{currentGeo:r==null?void 0:r.geo,loadLocation:T,currentTemp:r==null?void 0:r.weather.current.temperature_2m,unit:d}),m.jsx(BT,{alerts:l}),m.jsx(HT,{loading:t,error:n}),n&&m.jsxs("div",{className:"bg-red-900/80 text-white p-6 border-b-2 border-theme-main",children:[m.jsx("h2",{className:"text-4xl font-bold mb-2",children:"CRITICAL ERROR"}),m.jsx("p",{className:"text-xl",children:n})]}),!t&&r&&!n&&m.jsxs("div",{className:"flex flex-col",children:[m.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 border-b-2 border-theme-main",children:[m.jsx(VT,{weatherData:r,WeatherCodeMap:nm}),m.jsx(GT,{weatherData:r})]}),m.jsx(WT,{weatherData:r.weather,airQuality:o}),m.jsx(YT,{geo:r.geo,interactive:_,setInteractive:S}),m.jsx($T,{hourlyData:r.weather.hourly,unit:d,currentTime:r.weather.current.time}),m.jsx(qT,{hourly:r.weather.hourly,unit:d}),m.jsx(KT,{dailyData:r.weather.daily,WeatherCodeMap:nm,unit:d}),m.jsx(ZT,{alerts:l})]}),h&&m.jsx(QT,{data:{weather:r,aqi:o}}),t&&m.jsx(JT,{})]})})},tA=()=>m.jsx(eA,{}),nA={id:"WLK-MN-EXE",name:"WALKING MAN SOURCE",price:0,category:"ZERO_DAY",description:">> CLASSIFIED: Full schematic source code and firmware dumps for the MK1 prototype.",specs:["ENCRYPTED","ROOT_ACCESS","DANGEROUS"],image:"exe"},iA=()=>{const[t,e]=le.useState("HOME"),{cart:n,isCartOpen:i,setIsCartOpen:r,addToCart:s,removeFromCart:o}=my(),{isDark:a,toggleDarkMode:l}=gy(),[c,d]=le.useState(()=>!localStorage.getItem("homesteader_booted")),[f,h]=le.useState(!1),[g,_]=le.useState([]),[S,p]=le.useState(""),[u,x]=le.useState({isOpen:!1,title:"",content:""});le.useEffect(()=>{(async()=>{try{const C=await fetch("/data/products.json");if(!C.ok)throw new Error(`Failed to fetch products: ${C.status}`);const b=await C.json();_(Array.isArray(b)?b:[])}catch(C){console.log("Error loading /data/products.json",C),_([])}})()},[]),le.useEffect(()=>{const E=C=>{C.altKey&&C.key.toLowerCase()==="t"&&(C.preventDefault(),h(b=>!b)),C.key==="Escape"&&h(!1),/^[a-zA-Z]$/.test(C.key)&&p(b=>{const A=(b+C.key.toUpperCase()).slice(-10);return A==="WALKINGMAN"&&(g.find(P=>P.id==="WLK-MN-EXE")||(_(P=>[nA,...P]),alert(">> SYSTEM ALERT: CLASSIFIED PROTOCOL UNLOCKED"))),A})};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[g]);const v=E=>{E==="CART"?r(!0):e(E)};return m.jsxs("div",{className:"min-h-screen bg-theme-main text-theme-main font-mono selection:bg-stone-900 selection:text-white flex flex-col relative overflow-x-hidden transition-colors duration-300",children:[c&&m.jsx(xy,{onComplete:()=>d(!1)}),!a&&m.jsx(_y,{}),m.jsx(vy,{isOpen:f,onClose:()=>h(!1),cart:n,products:g}),m.jsx(Sy,{setView:v,cartCount:n.length,currentView:t,isDark:a,toggleDarkMode:l,toggleTerminal:()=>h(E=>!E)}),m.jsxs("main",{className:"flex-grow relative z-10",children:[t==="HOME"&&m.jsx(wy,{setView:e}),t==="SHOP"&&m.jsx(Ay,{products:g,addToCart:s}),t==="FABRICATION"&&m.jsx(kT,{addToCart:s}),t==="WEATHER"&&m.jsx(tA,{}),t==="MANIFESTO"&&m.jsx(py,{})]}),m.jsx(hy,{cart:n,isOpen:i,setIsOpen:r,removeFromCart:o}),m.jsxs("footer",{className:"bg-[var(--bg-secondary)] text-theme-sub py-12 px-4 mt-12 border-t-4 border-[var(--accent)] relative z-20",children:[m.jsxs("div",{className:"max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-xs",children:[m.jsxs("div",{children:[m.jsxs("h4",{className:"text-theme-main font-bold text-sm mb-4 flex items-center gap-2",children:[m.jsx(g0,{size:14})," HOMESTEADER_LABS"]}),m.jsx("p",{children:"RELAY STATION: WATERFORD, CT"}),m.jsx("p",{children:"SECTOR: 7G"}),m.jsx("p",{className:"mt-4 text-theme-sub opacity-50",children:"// ALL DESIGNS OPEN SOURCE WHERE APPLICABLE."})]}),m.jsxs("div",{children:[m.jsx("h5",{className:"text-theme-main font-bold mb-4 uppercase",children:"Direct_Link"}),m.jsxs("ul",{className:"space-y-2",children:[m.jsx("li",{children:m.jsx("button",{onClick:()=>{e("SHOP"),window.scrollTo(0,0)},className:"hover:text-[var(--accent)] hover:underline decoration-1 underline-offset-4",children:"[ HARDWARE ]"})}),m.jsx("li",{children:m.jsx("button",{onClick:()=>{e("MANIFESTO"),window.scrollTo(0,0)},className:"hover:text-[var(--accent)] hover:underline decoration-1 underline-offset-4",children:"[ MANIFESTO ]"})})]})]}),m.jsxs("div",{children:[m.jsx("h5",{className:"text-theme-main font-bold mb-4 uppercase",children:"Protocol"}),m.jsxs("ul",{className:"space-y-2",children:[m.jsx("li",{onClick:()=>x({isOpen:!0,title:"TERMS_OF_FABRICATION",content:`>> AGREEMENT PROTOCOL V.1.0

1. RISK ACKNOWLEDGMENT
By accessing this terminal and utilizing Homesteader Labs fabrication files, you acknowledge that all hardware is experimental. We are not responsible for structural failure, limb loss, or voided insurance policies.

2. MODIFICATION
You are encouraged to modify, hack, and improve all designs. Closed systems are dead systems.

3. LIABILITY
Homesteader Labs exists in the gray zones. If you build it, you own the consequences.`}),className:"hover:text-[var(--accent)] cursor-pointer",children:"TERMS_OF_FABRICATION"}),m.jsx("li",{onClick:()=>x({isOpen:!0,title:"WARRANTY (VOID)",content:`>> WARRANTY STATUS: VOID

All warranties were voided the moment you decided to take production into your own hands.

There is no customer support. There is only the community and the documentation.

If it breaks, fix it. If it doesn't work, iterate.`}),className:"hover:text-[var(--accent)] cursor-pointer",children:"WARRANTY (VOID)"}),m.jsx("li",{onClick:()=>x({isOpen:!0,title:"PRIVACY_HASH",content:`>> PRIVACY PROTOCOL

WE DO NOT TRACK YOU.
THE NETWORK DOES.

Homesteader Labs stores no cookies other than essential session data (cart, boot state). We do not sell your data because we do not collect it.

Stay safe out there.`}),className:"hover:text-[var(--accent)] cursor-pointer",children:"PRIVACY_HASH"})]})]}),m.jsx(My,{})]}),m.jsx("div",{className:"max-w-7xl mx-auto mt-12 pt-4 border-t border-theme-main opacity-30 text-center text-[10px] tracking-widest uppercase text-theme-sub",children:"© 2026 Homesteader Labs // Know your nature"})]}),m.jsx(yy,{isOpen:u.isOpen,onClose:()=>x(E=>({...E,isOpen:!1})),title:u.title,content:u.content})]})};Yc.createRoot(document.getElementById("root")).render(m.jsx(wv.StrictMode,{children:m.jsx(iA,{})}));
