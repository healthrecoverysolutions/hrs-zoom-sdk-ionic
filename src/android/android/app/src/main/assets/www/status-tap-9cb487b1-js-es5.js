(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["status-tap-9cb487b1-js"],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/status-tap-9cb487b1.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/status-tap-9cb487b1.js ***!
  \**********************************************************************/
/*! exports provided: startStatusTap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startStatusTap", function() { return startStatusTap; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/@ionic/core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "./node_modules/@ionic/core/dist/esm-es5/index-7a8b7a1c.js");
/* harmony import */ var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-1457892a.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-1457892a.js");
var startStatusTap=function(){var t=window;t.addEventListener("statusTap",(function(){Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["f"])((function(){var e=t.innerWidth;var r=t.innerHeight;var n=document.elementFromPoint(e/2,r/2);if(!n){return}var o=n.closest("ion-content");if(o){new Promise((function(t){return Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_2__["c"])(o,t)})).then((function(){Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["c"])((function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0,void 0,void 0,(function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this,(function(t){switch(t.label){case 0:o.style.setProperty("--overflow","hidden");return[4,o.scrollToTop(300)];case 1:t.sent();o.style.removeProperty("--overflow");return[2]}}))}))}))}))}}))}))};

/***/ })

}]);
//# sourceMappingURL=status-tap-9cb487b1-js-es5.js.map