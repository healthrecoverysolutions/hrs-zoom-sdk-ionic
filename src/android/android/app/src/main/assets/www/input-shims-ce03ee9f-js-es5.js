(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["input-shims-ce03ee9f-js"],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/input-shims-ce03ee9f.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/input-shims-ce03ee9f.js ***!
  \***********************************************************************/
/*! exports provided: startInputShims */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startInputShims", function() { return startInputShims; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/@ionic/core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-1457892a.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-1457892a.js");
var cloneMap=new WeakMap;var relocateInput=function(e,t,n,r){if(r===void 0){r=0}if(cloneMap.has(e)===n){return}if(n){addClone(e,t,r)}else{removeClone(e,t)}};var isFocused=function(e){return e===e.getRootNode().activeElement};var addClone=function(e,t,n){var r=t.parentNode;var o=t.cloneNode(false);o.classList.add("cloned-input");o.tabIndex=-1;r.appendChild(o);cloneMap.set(e,o);var a=e.ownerDocument;var i=a.dir==="rtl"?9999:-9999;e.style.pointerEvents="none";t.style.transform="translate3d("+i+"px,"+n+"px,0) scale(0)"};var removeClone=function(e,t){var n=cloneMap.get(e);if(n){cloneMap.delete(e);n.remove()}e.style.pointerEvents="";t.style.transform=""};var enableHideCaretOnScroll=function(e,t,n){if(!n||!t){return function(){return}}var r=function(n){if(isFocused(t)){relocateInput(e,t,n)}};var o=function(){return relocateInput(e,t,false)};var a=function(){return r(true)};var i=function(){return r(false)};Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_1__["a"])(n,"ionScrollStart",a);Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_1__["a"])(n,"ionScrollEnd",i);t.addEventListener("blur",o);return function(){Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_1__["b"])(n,"ionScrollStart",a);Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_1__["b"])(n,"ionScrollEnd",i);t.addEventListener("ionBlur",o)}};var SKIP_SELECTOR="input, textarea, [no-blur], [contenteditable]";var enableInputBlurring=function(){var e=true;var t=false;var n=document;var r=function(){t=true};var o=function(){e=true};var a=function(r){if(t){t=false;return}var o=n.activeElement;if(!o){return}if(o.matches(SKIP_SELECTOR)){return}var a=r.target;if(a===o){return}if(a.matches(SKIP_SELECTOR)||a.closest(SKIP_SELECTOR)){return}e=false;setTimeout((function(){if(!e){o.blur()}}),50)};Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_1__["a"])(n,"ionScrollStart",r);n.addEventListener("focusin",o,true);n.addEventListener("touchend",a,false);return function(){Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_1__["b"])(n,"ionScrollStart",r,true);n.removeEventListener("focusin",o,true);n.removeEventListener("touchend",a,false)}};var SCROLL_ASSIST_SPEED=.3;var getScrollData=function(e,t,n){var r=e.closest("ion-item,[ion-item]")||e;return calcScrollData(r.getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)};var calcScrollData=function(e,t,n,r){var o=e.top;var a=e.bottom;var i=t.top;var u=Math.min(t.bottom,r-n);var l=i+15;var s=u*.75;var c=s-a;var v=l-o;var d=Math.round(c<0?-c:v>0?-v:0);var f=Math.min(d,o-i);var m=Math.abs(f);var p=m/SCROLL_ASSIST_SPEED;var E=Math.min(400,Math.max(150,p));return{scrollAmount:f,scrollDuration:E,scrollPadding:n,inputSafeY:-(o-l)+4}};var enableScrollAssist=function(e,t,n,r,o){var a;var i=function(e){a=Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_1__["p"])(e)};var u=function(i){if(!a){return}var u=Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_1__["p"])(i);if(!hasPointerMoved(6,a,u)&&!isFocused(t)){i.stopPropagation();jsSetFocus(e,t,n,r,o)}};e.addEventListener("touchstart",i,true);e.addEventListener("touchend",u,true);return function(){e.removeEventListener("touchstart",i,true);e.removeEventListener("touchend",u,true)}};var jsSetFocus=function(e,t,n,r,o){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0,void 0,void 0,(function(){var a,i,u,l,s,c;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this,(function(v){switch(v.label){case 0:if(!n&&!r){return[2]}a=getScrollData(e,n||r,o);if(n&&Math.abs(a.scrollAmount)<4){t.focus();return[2]}relocateInput(e,t,true,a.inputSafeY);t.focus();Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_1__["r"])((function(){return e.click()}));if(!(typeof window!=="undefined"))return[3,3];u=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0,void 0,void 0,(function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this,(function(r){switch(r.label){case 0:if(i!==undefined){clearTimeout(i)}window.removeEventListener("ionKeyboardDidShow",l);window.removeEventListener("ionKeyboardDidShow",u);if(!n)return[3,2];return[4,n.scrollByPoint(0,a.scrollAmount,a.scrollDuration)];case 1:r.sent();r.label=2;case 2:relocateInput(e,t,false,a.inputSafeY);t.focus();return[2]}}))}))};l=function(){window.removeEventListener("ionKeyboardDidShow",l);window.addEventListener("ionKeyboardDidShow",u)};if(!n)return[3,2];return[4,n.getScrollElement()];case 1:s=v.sent();c=s.scrollHeight-s.clientHeight;if(a.scrollAmount>c-s.scrollTop){if(t.type==="password"){a.scrollAmount+=50;window.addEventListener("ionKeyboardDidShow",l)}else{window.addEventListener("ionKeyboardDidShow",u)}i=setTimeout(u,1e3);return[2]}v.label=2;case 2:u();v.label=3;case 3:return[2]}}))}))};var hasPointerMoved=function(e,t,n){if(t&&n){var r=t.x-n.x;var o=t.y-n.y;var a=r*r+o*o;return a>e*e}return false};var PADDING_TIMER_KEY="$ionPaddingTimer";var enableScrollPadding=function(e){var t=document;var n=function(t){setScrollPadding(t.target,e)};var r=function(e){setScrollPadding(e.target,0)};t.addEventListener("focusin",n);t.addEventListener("focusout",r);return function(){t.removeEventListener("focusin",n);t.removeEventListener("focusout",r)}};var setScrollPadding=function(e,t){if(e.tagName!=="INPUT"){return}if(e.parentElement&&e.parentElement.tagName==="ION-INPUT"){return}if(e.parentElement&&e.parentElement.parentElement&&e.parentElement.parentElement.tagName==="ION-SEARCHBAR"){return}var n=e.closest("ion-content");if(n===null){return}var r=n[PADDING_TIMER_KEY];if(r){clearTimeout(r)}if(t>0){n.style.setProperty("--keyboard-offset",t+"px")}else{n[PADDING_TIMER_KEY]=setTimeout((function(){n.style.setProperty("--keyboard-offset","0px")}),120)}};var INPUT_BLURRING=true;var SCROLL_PADDING=true;var startInputShims=function(e){var t=document;var n=e.getNumber("keyboardHeight",290);var r=e.getBoolean("scrollAssist",true);var o=e.getBoolean("hideCaretOnScroll",true);var a=e.getBoolean("inputBlurring",true);var i=e.getBoolean("scrollPadding",true);var u=Array.from(t.querySelectorAll("ion-input, ion-textarea"));var l=new WeakMap;var s=new WeakMap;var c=function(e){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0,void 0,void 0,(function(){var t,a,i,u,c,c;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this,(function(v){switch(v.label){case 0:return[4,new Promise((function(t){return Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(e,t)}))];case 1:v.sent();t=e.shadowRoot||e;a=t.querySelector("input")||t.querySelector("textarea");i=e.closest("ion-content");u=!i?e.closest("ion-footer"):null;if(!a){return[2]}if(!!i&&o&&!l.has(e)){c=enableHideCaretOnScroll(e,a,i);l.set(e,c)}if((!!i||!!u)&&r&&!s.has(e)){c=enableScrollAssist(e,a,i,u,n);s.set(e,c)}return[2]}}))}))};var v=function(e){if(o){var t=l.get(e);if(t){t()}l.delete(e)}if(r){var t=s.get(e);if(t){t()}s.delete(e)}};if(a&&INPUT_BLURRING){enableInputBlurring()}if(i&&SCROLL_PADDING){enableScrollPadding(n)}for(var d=0,f=u;d<f.length;d++){var m=f[d];c(m)}t.addEventListener("ionInputDidLoad",(function(e){c(e.detail)}));t.addEventListener("ionInputDidUnload",(function(e){v(e.detail)}))};

/***/ })

}]);
//# sourceMappingURL=input-shims-ce03ee9f-js-es5.js.map