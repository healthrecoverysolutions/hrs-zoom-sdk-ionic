(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["focus-control-798d0b02-js"],{

/***/ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/focus-control-798d0b02.js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/focus-control-798d0b02.js ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: startFocusControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startFocusControl", function() { return startFocusControl; });
// FOCUS CONTROL
const HAS_FOCUS = 'has-focus';
const IS_FOCUSABLE = 'hrs-focusable';
const FOCUS_KEYS = ['Tab', 'ArrowDown', 'Space', 'Escape', ' ', 'Shift', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp'];
const startFocusControl = () => {
  let currentFocus = [];
  let keyboardMode = true;
  const doc = document;
  const setFocus = (elements) => {
    if (currentFocus === elements)
      return;
    currentFocus.forEach((el) => el.classList.remove(HAS_FOCUS));
    elements.forEach((el) => el.classList.add(HAS_FOCUS));
    currentFocus = elements;
  };
  const pointerDown = (ev) => {
    const target = ev.target;
    let toFocus;
    keyboardMode = false;
    toFocus = currentFocus.includes(target) ? currentFocus : [];
    setFocus(toFocus);
  };
  doc.addEventListener('keydown', (ev) => {
    keyboardMode = FOCUS_KEYS.includes(ev.key);
    if (!keyboardMode) {
      setFocus([]);
    }
  });
  doc.addEventListener('focusin', (ev) => {
    if (keyboardMode && ev.composedPath) {
      const toFocus = ev.composedPath().filter((el) => {
        if (el.classList) {
          return el.classList.contains(IS_FOCUSABLE);
        }
        return false;
      });
      setFocus(toFocus);
    }
  });
  doc.addEventListener('focusout', () => {
    if (doc.activeElement === doc.body) {
      setFocus([]);
    }
  });
  doc.addEventListener('touchstart', pointerDown);
  doc.addEventListener('mousedown', pointerDown);
};



//# sourceMappingURL=focus-control-798d0b02.js.map

/***/ })

}]);
//# sourceMappingURL=focus-control-798d0b02-js-es2015.js.map