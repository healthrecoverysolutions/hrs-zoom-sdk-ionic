(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tap-click-e6b0a744-js"],{

/***/ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/tap-click-e6b0a744.js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/tap-click-e6b0a744.js ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: startTapClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startTapClick", function() { return startTapClick; });
/* harmony import */ var _helpers_0e8d6178_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-0e8d6178.js */ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/helpers-0e8d6178.js");


const ACTION_KEYS = ['Space', 'Enter'];
const ACTIVATED = 'is-active';
const ADD_ACTIVATED_DEFERS = 200;
const CLEAR_STATE_DEFERS = 200;
const MOUSE_WAIT = 2500;
const KEY_WAIT = 2500;
const startTapClick = () => {
  let lastTouch = -MOUSE_WAIT * 10;
  let lastActivated = 0;
  // TODO: what to do about scrolling? (**scrolling)
  // let scrollingEl: HTMLElement | undefined;
  let activatableEl;
  let activeDefer;
  const clearDefers = new WeakMap();
  // **scrolling
  // const isScrolling = () => {
  //     return scrollingEl !== undefined && scrollingEl.parentElement !== null;
  // };
  // Touch Events
  const onTouchStart = (ev) => {
    lastTouch = Object(_helpers_0e8d6178_js__WEBPACK_IMPORTED_MODULE_0__["n"])(ev);
    pointerDown(ev);
  };
  const onTouchEnd = (ev) => {
    lastTouch = Object(_helpers_0e8d6178_js__WEBPACK_IMPORTED_MODULE_0__["n"])(ev);
    pointerUp();
  };
  const onMouseDown = (ev) => {
    const t = Object(_helpers_0e8d6178_js__WEBPACK_IMPORTED_MODULE_0__["n"])(ev) - MOUSE_WAIT;
    if (lastTouch < t) {
      pointerDown(ev);
    }
  };
  const onMouseUp = (ev) => {
    const t = Object(_helpers_0e8d6178_js__WEBPACK_IMPORTED_MODULE_0__["n"])(ev) - MOUSE_WAIT;
    if (lastTouch < t) {
      pointerUp();
    }
  };
  const onKeyDown = (ev) => {
    if (!ACTION_KEYS.includes(ev.code))
      return;
    const t = Object(_helpers_0e8d6178_js__WEBPACK_IMPORTED_MODULE_0__["n"])(ev) - KEY_WAIT;
    if (lastTouch < t) {
      keyDown(ev);
    }
  };
  const onKeyUp = (ev) => {
    if (activatableEl) {
      cancelActive();
      return;
    }
    if (!ACTION_KEYS.includes(ev.code))
      return;
    const t = Object(_helpers_0e8d6178_js__WEBPACK_IMPORTED_MODULE_0__["n"])(ev) - KEY_WAIT;
    if (lastTouch < t) {
      keyUp(ev);
    }
  };
  const cancelActive = () => {
    clearTimeout(activeDefer);
    activeDefer = undefined;
    if (activatableEl) {
      removeActivated(false);
      activatableEl = undefined;
    }
  };
  const keyUp = (ev) => {
    if (activatableEl)
      return;
    setActivatedElement(getActivatableTarget(ev));
  };
  const keyDown = (ev) => {
    if (activatableEl)
      return;
    setActivatedElement(getActivatableTarget(ev));
  };
  const pointerDown = (ev) => {
    // **scrolling
    // if (activatableEl || isScrolling()) {
    if (activatableEl) {
      return;
    }
    // **scrolling
    // scrollingEl = undefined;
    setActivatedElement(getActivatableTarget(ev));
  };
  const pointerUp = (ev) => {
    setActivatedElement(undefined);
  };
  const setActivatedElement = (el, ev) => {
    // do nothing
    if (el && el === activatableEl) {
      return;
    }
    clearTimeout(activeDefer);
    activeDefer = undefined;
    // deactivate selected
    if (activatableEl) {
      if (clearDefers.has(activatableEl)) {
        throw new Error('internal error');
      }
      if (!activatableEl.classList.contains(ACTIVATED)) {
        addActivated(activatableEl);
      }
      removeActivated(true);
    }
    // activate
    if (el) {
      const deferId = clearDefers.get(el);
      if (deferId) {
        clearTimeout(deferId);
        clearDefers.delete(el);
      }
      const delay = isInstant(el) ? 0 : ADD_ACTIVATED_DEFERS;
      el.classList.remove(ACTIVATED);
      activeDefer = setTimeout(() => {
        addActivated(el);
        activeDefer = undefined;
      }, delay);
    }
    activatableEl = el;
  };
  // TODO: Need x/y if no ripple? Need ripple?
  // @ts-ignore
  const addActivated = (el, x, y) => {
    lastActivated = Date.now();
    el.classList.add(ACTIVATED);
  };
  const removeActivated = (smooth) => {
    const active = activatableEl;
    if (!active)
      return;
    const time = CLEAR_STATE_DEFERS - Date.now() + lastActivated;
    if (smooth && time > 0 && !isInstant(active)) {
      const deferId = setTimeout(() => {
        active.classList.remove(ACTIVATED);
        clearDefers.delete(active);
      }, CLEAR_STATE_DEFERS);
      clearDefers.set(active, deferId);
    }
    else {
      active.classList.remove(ACTIVATED);
    }
  };
  const doc = document;
  doc.addEventListener('touchstart', onTouchStart, true);
  doc.addEventListener('touchcancel', onTouchEnd, true);
  doc.addEventListener('touchend', onTouchEnd, true);
  doc.addEventListener('mousedown', onMouseDown, true);
  doc.addEventListener('mouseup', onMouseUp, true);
  doc.addEventListener('keydown', onKeyDown, true);
  doc.addEventListener('keyup', onKeyUp, true);
};
const getActivatableTarget = (ev) => {
  if (ev.composedPath) {
    const path = ev.composedPath();
    for (let i = 0; i < path.length - 2; i++) {
      const el = path[i];
      if (el.classList
        && el.classList.contains('hrs-activatable')
        && !el.getAttribute('aria-disabled')) {
        return el;
      }
    }
  }
  else {
    return ev.target.closest('.hrs-activatable');
  }
};
const isInstant = (el) => {
  return el.classList.contains('hrs-activatable-instant');
};



//# sourceMappingURL=tap-click-e6b0a744.js.map

/***/ })

}]);
//# sourceMappingURL=tap-click-e6b0a744-js-es5.js.map