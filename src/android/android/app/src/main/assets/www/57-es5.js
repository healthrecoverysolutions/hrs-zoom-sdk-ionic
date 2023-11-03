(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-label.entry.js":
/*!**************************************************************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-label.entry.js ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: hrs_label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hrs_label", function() { return Label; });
/* harmony import */ var _index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-be85d80d.js */ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/index-be85d80d.js");
/* harmony import */ var _ui_config_8be75a31_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-config-8be75a31.js */ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/ui-config-8be75a31.js");



const labelNewDesignCss = "@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:400;src:url(\"../fonts/Roboto/light.woff\") format(\"woff\")}@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:500;src:url(\"../fonts/Roboto/regular.woff\") format(\"woff\")}@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:700;src:url(\"../fonts/Roboto/bold.woff\") format(\"woff\")}.sc-hrs-label-newDesign:root{--shadow-sm:0 3px 6px 0 rgba(var(--color-shadow), .3);--shadow-md:0 3px 12px 0 rgba(var(--color-shadow), .6);--shadow-lg:0 3px 18px 0 rgba(var(--color-shadow), .6);--shadow-header:0 0 8px -5px rgba(var(--color-shadow), .6);--shadow-footer:-1px 0 12px -3px rgba(var(--color-shadow), .6);--shadow-inset-input:inset 0 1px 2px rgba(0, 0, 0, .39), 0 -1px 1px var(--white), 0 1px 0 var(--white);--shadow-focus-outline:0 0 0 4px var(--color-outline);--shadow-focus-invalid:0 0 1px 2px var(--color-error);--shadow-hover-tab:0 4px 0 0 var(--gray-8);--shadow-selected-tab:0 4px 0 0 var(--color-primary-dark)}.sc-hrs-label-newDesign-h{font-family:var(--font)}html.sc-hrs-label-newDesign{line-height:1.15;text-size-adjust:100%}body.sc-hrs-label-newDesign{margin:0}main.sc-hrs-label-newDesign{display:block}h1.sc-hrs-label-newDesign{margin:0.67em 0;font-size:2em}hr.sc-hrs-label-newDesign{overflow:visible;height:0;box-sizing:content-box}pre.sc-hrs-label-newDesign{font-family:monospace, monospace;font-size:1em}a.sc-hrs-label-newDesign{background-color:transparent}abbr[title].sc-hrs-label-newDesign{border-bottom:none;text-decoration:underline}b.sc-hrs-label-newDesign,strong.sc-hrs-label-newDesign{font-weight:bolder}code.sc-hrs-label-newDesign,kbd.sc-hrs-label-newDesign,samp.sc-hrs-label-newDesign{font-family:monospace, monospace;font-size:1em}small.sc-hrs-label-newDesign{font-size:80%}img.sc-hrs-label-newDesign{border-style:none}button.sc-hrs-label-newDesign,input.sc-hrs-label-newDesign,optgroup.sc-hrs-label-newDesign,select.sc-hrs-label-newDesign,textarea.sc-hrs-label-newDesign{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button.sc-hrs-label-newDesign,input.sc-hrs-label-newDesign{overflow:visible}button.sc-hrs-label-newDesign,select.sc-hrs-label-newDesign{text-transform:none}button.sc-hrs-label-newDesign,[type=button].sc-hrs-label-newDesign,[type=reset].sc-hrs-label-newDesign,[type=submit].sc-hrs-label-newDesign{appearance:button}button.sc-hrs-label-newDesign::-moz-focus-inner,[type=button].sc-hrs-label-newDesign::-moz-focus-inner,[type=reset].sc-hrs-label-newDesign::-moz-focus-inner,[type=submit].sc-hrs-label-newDesign::-moz-focus-inner{border-style:none;padding:0}button.sc-hrs-label-newDesign:-moz-focusring,[type=button].sc-hrs-label-newDesign:-moz-focusring,[type=reset].sc-hrs-label-newDesign:-moz-focusring,[type=submit].sc-hrs-label-newDesign:-moz-focusring{outline:1px dotted ButtonText}fieldset.sc-hrs-label-newDesign{padding:0.35em 0.75em 0.625em}legend.sc-hrs-label-newDesign{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress.sc-hrs-label-newDesign{vertical-align:baseline}textarea.sc-hrs-label-newDesign{overflow:auto}[type=checkbox].sc-hrs-label-newDesign,[type=radio].sc-hrs-label-newDesign{box-sizing:border-box;padding:0}[type=number].sc-hrs-label-newDesign::-webkit-inner-spin-button,[type=number].sc-hrs-label-newDesign::-webkit-outer-spin-button{height:auto}[type=search].sc-hrs-label-newDesign{appearance:textfield;outline-offset:-2px}[type=search].sc-hrs-label-newDesign::-webkit-search-decoration{appearance:none}.sc-hrs-label-newDesign::-webkit-file-upload-button{appearance:button;font:inherit}details.sc-hrs-label-newDesign{display:block}summary.sc-hrs-label-newDesign{display:list-item}template.sc-hrs-label-newDesign{display:none}[hidden].sc-hrs-label-newDesign{display:none}.sronly.sc-hrs-label-newDesign{border:0;clip:rect(0, 0, 0, 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sc-hrs-label-newDesign-h{--color-primary:#0073af;--color-primary-dark:#00538d;--color-primary-light:#0197d6;--color-primary-50:rgba(0, 115, 175, .5);--color-primary-30:rgba(0, 115, 175, .3);--color-accent:#721c7e;--color-accent-dark:#56156f;--color-accent-light:#92278f;--white:#fff;--white-90:rgba(255, 255, 255, .9);--white-80:rgba(255, 255, 255, .8);--white-70:rgba(255, 255, 255, .7);--white-60:rgba(255, 255, 255, .6);--white-50:rgba(255, 255, 255, .5);--white-40:rgba(255, 255, 255, .4);--white-30:rgba(255, 255, 255, .3);--white-20:rgba(255, 255, 255, .2);--white-10:rgba(255, 255, 255, .1);--white-05:rgba(255, 255, 255, .05);--gray-1:#fcfcfc;--gray-2:#f5f5f5;--gray-3:#eee;--gray-4:#e0e0e0;--gray-5:#bdbdbd;--gray-6:#9e9e9e;--gray-7:#757575;--gray-8:#616161;--gray-9:#424242;--gray-10:#323232;--black:#212121;--color-sub-light:var(--gray-3);--color-sub-dark:var(--gray-7);--color-success:#0a853b;--color-info:#115ffb;--color-warning:#eb7100;--color-error:#ab1300;--color-risk-none:#5a7c79;--color-risk-low:#0ea84b;--color-risk-medium:var(--color-warning);--color-risk-high:#c62360;--color-notifications:#df1642;--color-congratulations:#ebb700;--color-great-job:#0ea84b;--color-focused-state:#56156f;--color-focused-state-bg:rgba(86, 21, 111, .6);--gradient-color-stop-1:var(--white);--gradient-color-stop-2:var(--color-primary-dark);--gradient-background:linear-gradient(180deg, var(--gradient-color-stop-1) 0%, var(--gradient-color-stop-2) 100%);--sidebar-gradient:linear-gradient(0deg, var(--color-primary-dark), var(--color-primary), var(--white));--color-shadow:0, 0, 0,;--color-backdrop:0, 0, 0, .4}.sc-hrs-label-newDesign-h{--font:\"Open Sans\", sans-serif;--font-weight-bold:700;--font-weight-semibold:600;--font-weight-regular:400}@media screen and (max-width: 599px){.sc-hrs-label-newDesign-h{--font-size-h1:1.25rem;--font-size-h2:1rem;--font-size-h3:.75rem;--font-size-b1:1rem;--font-size-b2:.875rem;--font-size-button:1rem;--line-height-h1:1.75rem;--line-height-h2:1.25rem;--line-height-h3:1rem;--line-height-b1:1.25rem;--line-height-b2:1.25rem;--line-height-button:1.25rem}}@media screen and (min-width: 600px){.sc-hrs-label-newDesign-h{--font-size-h1:1.75rem;--font-size-h2:1.25rem;--font-size-h3:1rem;--font-size-b1:1.25rem;--font-size-b2:1rem;--font-size-button:1.5rem;--line-height-h1:2.25rem;--line-height-h2:1.75rem;--line-height-h3:1.25rem;--line-height-b1:1.75rem;--line-height-b2:1.25rem;--line-height-button:1.75rem}}.sc-hrs-label-newDesign-h{--box-shadow-01:0 2px 6px rgba(var(--color-shadow) .2);--box-shadow-02:0 -2px 6px rgba(var(--color-shadow) .2);--box-shadow-03:0 4px 5px rgba(var(--color-shadow) .14), 0 1px 10px rgba(var(--color-shadow) .12), 0 2px 4px rgba(var(--color-shadow) .2);--box-shadow-04:5px 0 6px rgba(var(--color-shadow) .14);--box-shadow-05:0 4px 12px rgba(var(--color-shadow) .2);--box-shadow-06:inset 0 4px 4px rgba(var(--color-shadow) .25);--box-shadow-focus:0 0 0 4px var(--color-focused-state-bg)}.item.sc-hrs-label-newDesign-h,.item .sc-hrs-label-newDesign-h{--label-color:var(--color-accent);--label-font-size:inherit;--label-padding:.3em;--label-width:auto;display:block;overflow:hidden;box-sizing:border-box;width:var(--label-width);padding:var(--label-padding);color:var(--label-color);font-family:var(--font);font-size:var(--label-font-size);text-overflow:ellipsis;white-space:nowrap}.item-interactive-disabled.sc-hrs-label-newDesign-h:not(.item-multiple-inputs),.item-interactive-disabled:not(.item-multiple-inputs) .sc-hrs-label-newDesign-h{cursor:default;opacity:0.3;pointer-events:none}.item-input.sc-hrs-label-newDesign-h,.item-input .sc-hrs-label-newDesign-h{flex:initial;max-width:12.5em;pointer-events:none}.has-required-input.sc-hrs-label-newDesign-h{display:flex;padding-left:0}.has-required-input.sc-hrs-label-newDesign-h hrs-icon.sc-hrs-label-newDesign{--icon-size:.6em;vertical-align:text-top;margin-right:0.2em;color:var(--color-error);order:1}.has-required-input.label-floating.sc-hrs-label-newDesign-h{display:block}.has-required-input.label-floating.sc-hrs-label-newDesign-h hrs-icon.sc-hrs-label-newDesign{order:unset;margin-left:0.1875em}.label-fixed.sc-hrs-label-newDesign-h{--label-padding:0;flex:1 0 50%;width:100%;max-width:fit-content;min-width:fit-content}.label-floating.sc-hrs-label-newDesign-h{--label-width-floating:100%;align-self:stretch;width:var(--label-width-floating);max-width:var(--label-width-floating);font-style:italic}.sc-hrs-label-newDesign-s>hrs-input{margin:0.5em 0}.sc-hrs-label-newDesign-s h1,.sc-hrs-label-newDesign-s h2,.sc-hrs-label-newDesign-s h3,.sc-hrs-label-newDesign-s h4,.sc-hrs-label-newDesign-s h5,.sc-hrs-label-newDesign-s h6{overflow:inherit;text-overflow:inherit}.sc-hrs-label-newDesign-h .label--subtext.sc-hrs-label-newDesign{margin-left:0.25rem}.sc-hrs-label-newDesign-h{--label-color:var(--black);--label-font-size:1.25rem}.label-floating.sc-hrs-label-newDesign-h{--label-color:var(--gray-6);--label-font-size:1rem;--label-padding:0;margin-bottom:0.5rem;transition:transform 150ms ease-in-out}.has-floating-label.item-has-focus.sc-hrs-label-newDesign-h,.has-floating-label.item-has-focus .sc-hrs-label-newDesign-h,.has-floating-label.item-has-value.sc-hrs-label-newDesign-h,.has-floating-label.item-has-value .sc-hrs-label-newDesign-h{transform:translate3d(0, 0, 0) scale(0.82);transition:transform 150ms ease-in-out}.item.sc-hrs-label-newDesign-h,.item .sc-hrs-label-newDesign-h{--label-color:var(--black);--label-margin-top:.25rem;--label-margin-bottom:.25rem;--font-weight:var(--font-weight-regular);--font-size:var(--font-size-b1);--line-height:var(--line-height-b1);font-weight:var(--font-weight);font-size:var(--font-size);line-height:var(--line-height)}@media screen and (min-width: 600px){.item.sc-hrs-label-newDesign-h,.item .sc-hrs-label-newDesign-h{--label-margin-bottom:.5rem;--label-margin-top:1rem}}.item.sc-hrs-label-newDesign-h:first-child,.item .sc-hrs-label-newDesign-h:first-child{margin-bottom:var(--label-margin-bottom)}.item.sc-hrs-label-newDesign-h:not(:first-child),.item .sc-hrs-label-newDesign-h:not(:first-child){margin-top:var(--label-margin-top)}";

const Label = class {
  constructor(hostRef) {
    Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.hrsStyle = Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "hrsStyle", 7);
    /**
     * When `fixed`: label sits to the right of the paired input.
     * When `floating`: sits above input and "floats" away on input focus
     */
    this.position = 'fixed';
  }
  componentWillLoad() {
    this.emitStyle();
  }
  requiredChanged() {
    this.emitStyle();
  }
  positionChanged() {
    this.emitStyle();
  }
  emitStyle() {
    const position = this.position;
    this.hrsStyle.emit({
      'label': true,
      [`label-${position}`]: position !== undefined,
      'has-required-input': this.required,
    });
  }
  render() {
    const contextMode = Object(_ui_config_8be75a31_js__WEBPACK_IMPORTED_MODULE_1__["g"])();
    const { position, subText, text, qa } = this;
    return (Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { mode: contextMode, "data-qa": qa ? qa : null, class: {
        [`label-${position}`]: position !== undefined,
        [`has-required-input`]: this.required
      } }, text ? Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-text", { class: "label--text", font: "h3-regular", qa: qa ? `${qa}--text` : 'label-text' }, text) : null, subText ? Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-text", { class: "label--subtext", font: "h3-regular", color: "sub-dark", qa: qa ? `${qa}--subtext` : 'label-subtext' }, subText) : null, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
  }
  get el() { return Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "required": ["requiredChanged"],
    "position": ["positionChanged"]
  }; }
};
Label.style = {
  newDesign: labelNewDesignCss
};



//# sourceMappingURL=hrs-label.entry.js.map

/***/ })

}]);
//# sourceMappingURL=57-es5.js.map