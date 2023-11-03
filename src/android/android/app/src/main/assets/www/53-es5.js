(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-footer.entry.js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-footer.entry.js ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: hrs_footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hrs_footer", function() { return Footer; });
/* harmony import */ var _index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-be85d80d.js */ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/index-be85d80d.js");
/* harmony import */ var _ui_config_8be75a31_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-config-8be75a31.js */ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/ui-config-8be75a31.js");



const footerNewDesignCss = "@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:400;src:url(\"../fonts/Roboto/light.woff\") format(\"woff\")}@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:500;src:url(\"../fonts/Roboto/regular.woff\") format(\"woff\")}@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:700;src:url(\"../fonts/Roboto/bold.woff\") format(\"woff\")}.sc-hrs-footer:root{--shadow-sm:0 3px 6px 0 rgba(var(--color-shadow), .3);--shadow-md:0 3px 12px 0 rgba(var(--color-shadow), .6);--shadow-lg:0 3px 18px 0 rgba(var(--color-shadow), .6);--shadow-header:0 0 8px -5px rgba(var(--color-shadow), .6);--shadow-footer:-1px 0 12px -3px rgba(var(--color-shadow), .6);--shadow-inset-input:inset 0 1px 2px rgba(0, 0, 0, .39), 0 -1px 1px var(--white), 0 1px 0 var(--white);--shadow-focus-outline:0 0 0 4px var(--color-outline);--shadow-focus-invalid:0 0 1px 2px var(--color-error);--shadow-hover-tab:0 4px 0 0 var(--gray-8);--shadow-selected-tab:0 4px 0 0 var(--color-primary-dark)}.sc-hrs-footer-h{font-family:var(--font)}html.sc-hrs-footer{line-height:1.15;text-size-adjust:100%}body.sc-hrs-footer{margin:0}main.sc-hrs-footer{display:block}h1.sc-hrs-footer{margin:0.67em 0;font-size:2em}hr.sc-hrs-footer{overflow:visible;height:0;box-sizing:content-box}pre.sc-hrs-footer{font-family:monospace, monospace;font-size:1em}a.sc-hrs-footer{background-color:transparent}abbr[title].sc-hrs-footer{border-bottom:none;text-decoration:underline}b.sc-hrs-footer,strong.sc-hrs-footer{font-weight:bolder}code.sc-hrs-footer,kbd.sc-hrs-footer,samp.sc-hrs-footer{font-family:monospace, monospace;font-size:1em}small.sc-hrs-footer{font-size:80%}img.sc-hrs-footer{border-style:none}button.sc-hrs-footer,input.sc-hrs-footer,optgroup.sc-hrs-footer,select.sc-hrs-footer,textarea.sc-hrs-footer{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button.sc-hrs-footer,input.sc-hrs-footer{overflow:visible}button.sc-hrs-footer,select.sc-hrs-footer{text-transform:none}button.sc-hrs-footer,[type=button].sc-hrs-footer,[type=reset].sc-hrs-footer,[type=submit].sc-hrs-footer{appearance:button}button.sc-hrs-footer::-moz-focus-inner,[type=button].sc-hrs-footer::-moz-focus-inner,[type=reset].sc-hrs-footer::-moz-focus-inner,[type=submit].sc-hrs-footer::-moz-focus-inner{border-style:none;padding:0}button.sc-hrs-footer:-moz-focusring,[type=button].sc-hrs-footer:-moz-focusring,[type=reset].sc-hrs-footer:-moz-focusring,[type=submit].sc-hrs-footer:-moz-focusring{outline:1px dotted ButtonText}fieldset.sc-hrs-footer{padding:0.35em 0.75em 0.625em}legend.sc-hrs-footer{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress.sc-hrs-footer{vertical-align:baseline}textarea.sc-hrs-footer{overflow:auto}[type=checkbox].sc-hrs-footer,[type=radio].sc-hrs-footer{box-sizing:border-box;padding:0}[type=number].sc-hrs-footer::-webkit-inner-spin-button,[type=number].sc-hrs-footer::-webkit-outer-spin-button{height:auto}[type=search].sc-hrs-footer{appearance:textfield;outline-offset:-2px}[type=search].sc-hrs-footer::-webkit-search-decoration{appearance:none}.sc-hrs-footer::-webkit-file-upload-button{appearance:button;font:inherit}details.sc-hrs-footer{display:block}summary.sc-hrs-footer{display:list-item}template.sc-hrs-footer{display:none}[hidden].sc-hrs-footer{display:none}.sronly.sc-hrs-footer{border:0;clip:rect(0, 0, 0, 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sc-hrs-footer-h{--color-primary:#0073af;--color-primary-dark:#00538d;--color-primary-light:#0197d6;--color-primary-50:rgba(0, 115, 175, .5);--color-primary-30:rgba(0, 115, 175, .3);--color-accent:#721c7e;--color-accent-dark:#56156f;--color-accent-light:#92278f;--white:#fff;--white-90:rgba(255, 255, 255, .9);--white-80:rgba(255, 255, 255, .8);--white-70:rgba(255, 255, 255, .7);--white-60:rgba(255, 255, 255, .6);--white-50:rgba(255, 255, 255, .5);--white-40:rgba(255, 255, 255, .4);--white-30:rgba(255, 255, 255, .3);--white-20:rgba(255, 255, 255, .2);--white-10:rgba(255, 255, 255, .1);--white-05:rgba(255, 255, 255, .05);--gray-1:#fcfcfc;--gray-2:#f5f5f5;--gray-3:#eee;--gray-4:#e0e0e0;--gray-5:#bdbdbd;--gray-6:#9e9e9e;--gray-7:#757575;--gray-8:#616161;--gray-9:#424242;--gray-10:#323232;--black:#212121;--color-sub-light:var(--gray-3);--color-sub-dark:var(--gray-7);--color-success:#0a853b;--color-info:#115ffb;--color-warning:#eb7100;--color-error:#ab1300;--color-risk-none:#5a7c79;--color-risk-low:#0ea84b;--color-risk-medium:var(--color-warning);--color-risk-high:#c62360;--color-notifications:#df1642;--color-congratulations:#ebb700;--color-great-job:#0ea84b;--color-focused-state:#56156f;--color-focused-state-bg:rgba(86, 21, 111, .6);--gradient-color-stop-1:var(--white);--gradient-color-stop-2:var(--color-primary-dark);--gradient-background:linear-gradient(180deg, var(--gradient-color-stop-1) 0%, var(--gradient-color-stop-2) 100%);--sidebar-gradient:linear-gradient(0deg, var(--color-primary-dark), var(--color-primary), var(--white));--color-shadow:0, 0, 0,;--color-backdrop:0, 0, 0, .4}.sc-hrs-footer-h{--font:\"Open Sans\", sans-serif;--font-weight-bold:700;--font-weight-semibold:600;--font-weight-regular:400}@media screen and (max-width: 599px){.sc-hrs-footer-h{--font-size-h1:1.25rem;--font-size-h2:1rem;--font-size-h3:.75rem;--font-size-b1:1rem;--font-size-b2:.875rem;--font-size-button:1rem;--line-height-h1:1.75rem;--line-height-h2:1.25rem;--line-height-h3:1rem;--line-height-b1:1.25rem;--line-height-b2:1.25rem;--line-height-button:1.25rem}}@media screen and (min-width: 600px){.sc-hrs-footer-h{--font-size-h1:1.75rem;--font-size-h2:1.25rem;--font-size-h3:1rem;--font-size-b1:1.25rem;--font-size-b2:1rem;--font-size-button:1.5rem;--line-height-h1:2.25rem;--line-height-h2:1.75rem;--line-height-h3:1.25rem;--line-height-b1:1.75rem;--line-height-b2:1.25rem;--line-height-button:1.75rem}}.sc-hrs-footer-h{--box-shadow-01:0 2px 6px rgba(var(--color-shadow) .2);--box-shadow-02:0 -2px 6px rgba(var(--color-shadow) .2);--box-shadow-03:0 4px 5px rgba(var(--color-shadow) .14), 0 1px 10px rgba(var(--color-shadow) .12), 0 2px 4px rgba(var(--color-shadow) .2);--box-shadow-04:5px 0 6px rgba(var(--color-shadow) .14);--box-shadow-05:0 4px 12px rgba(var(--color-shadow) .2);--box-shadow-06:inset 0 4px 4px rgba(var(--color-shadow) .25);--box-shadow-focus:0 0 0 4px var(--color-focused-state-bg)}.sc-hrs-footer-h{--display:block;--width:100%;--height:3.75rem;--padding:0;--background:var(--white);--position:fixed;position:var(--position);bottom:0;right:0;display:var(--display);padding:var(--padding);width:var(--width);height:var(--height);background:var(--background);box-shadow:var(--box-shadow-02)}@media (min-width: 600px){.sc-hrs-footer-h{--height:4.5rem}}.is-one-button.sc-hrs-footer-h,.is-two-button.sc-hrs-footer-h,.is-messaging.sc-hrs-footer-h{--padding:.75rem}.sc-hrs-footer-h.is-one-button.sc-hrs-footer-s>hrs-button{--width:100%}@media (min-width: 600px){.is-one-button.sc-hrs-footer-h{--display:flex;place-content:center}.sc-hrs-footer-h.is-one-button.sc-hrs-footer-s>hrs-button{--width:58.77%}}.is-two-button.sc-hrs-footer-h{--display:flex;justify-content:space-between;flex-direction:row}.is-messaging.sc-hrs-footer-h{--display:flex;--height:auto;flex-direction:row;align-items:center}.sc-hrs-footer-h.is-messaging.sc-hrs-footer-s>hrs-textarea{--width:83%}.sc-hrs-footer-h.is-messaging.sc-hrs-footer-s>hrs-button{margin-left:1.25rem}@media (min-width: 600px){.sc-hrs-footer-h.is-messaging.sc-hrs-footer-s>hrs-button{margin-left:0.75rem}}";

const Footer = class {
  constructor(hostRef) {
    Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /**
     * The footer variant to render.
     * @default 'nav-tabs'
     */
    this.variant = 'nav-tabs';
  }
  onTextAreaResize() {
    // if this is a 'messaging' variant and we receive notification that our hrs-textarea child component has resized,
    // then we need to let our hrs-content sibling component know our height so that it can adjust itself as needed
    if (this.variant === 'messaging') {
      this.setHeightOnContent();
    }
  }
  setHeightOnContent() {
    const content = this.el.parentElement.querySelector('hrs-content');
    content === null || content === void 0 ? void 0 : content.setAttribute('style', `--siblings-height: ${this.el.clientHeight}px`);
  }
  componentWillLoad() {
    this.activeVariant = this.variant;
  }
  componentDidRender() {
    // if this is a 'messaging' variant we need to let our hrs-content sibling component know our height after we render
    if (this.variant === 'messaging') {
      this.setHeightOnContent();
    }
  }
  render() {
    const contextMode = Object(_ui_config_8be75a31_js__WEBPACK_IMPORTED_MODULE_1__["g"])();
    const { variant } = this;
    return (Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { mode: contextMode, class: {
        [`is-${variant}`]: true
      } }, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
  }
  get el() { return Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
Footer.style = footerNewDesignCss;



//# sourceMappingURL=hrs-footer.entry.js.map

/***/ })

}]);
//# sourceMappingURL=53-es5.js.map