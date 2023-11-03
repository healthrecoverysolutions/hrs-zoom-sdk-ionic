(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["swipe-back-1bbd08e0-js"],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/swipe-back-1bbd08e0.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/swipe-back-1bbd08e0.js ***!
  \**********************************************************************/
/*! exports provided: createSwipeBackGesture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSwipeBackGesture", function() { return createSwipeBackGesture; });
/* harmony import */ var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-1457892a.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-1457892a.js");
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-34cb2743.js */ "./node_modules/@ionic/core/dist/esm-es5/index-34cb2743.js");
/* harmony import */ var _gesture_controller_31cb6bb9_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gesture-controller-31cb6bb9.js */ "./node_modules/@ionic/core/dist/esm-es5/gesture-controller-31cb6bb9.js");
var createSwipeBackGesture=function(r,e,a,t,n){var o=r.ownerDocument.defaultView;var i=function(r){return r.startX<=50&&e()};var c=function(r){var e=r.deltaX;var a=e/o.innerWidth;t(a)};var v=function(r){var e=r.deltaX;var a=o.innerWidth;var t=e/a;var i=r.velocityX;var c=a/2;var v=i>=0&&(i>.2||r.deltaX>c);var s=v?1-t:t;var u=s*a;var l=0;if(u>5){var m=u/Math.abs(i);l=Math.min(m,540)}n(v,t<=0?.01:Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__["k"])(0,t,.9999),l)};return Object(_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({el:r,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:i,onStart:a,onMove:c,onEnd:v})};

/***/ })

}]);
//# sourceMappingURL=swipe-back-1bbd08e0-js-es5.js.map