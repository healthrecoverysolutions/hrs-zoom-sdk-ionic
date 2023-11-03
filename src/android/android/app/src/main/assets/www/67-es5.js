(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[67],{

/***/ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-wizard.entry.js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-wizard.entry.js ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: hrs_wizard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hrs_wizard", function() { return Wizard; });
/* harmony import */ var _index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-be85d80d.js */ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/index-be85d80d.js");


function Fragment(_props, children = []) {
  return [...children];
}

const wizardNewDesignCss = "@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:400;src:url(\"../fonts/Roboto/light.woff\") format(\"woff\")}@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:500;src:url(\"../fonts/Roboto/regular.woff\") format(\"woff\")}@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:700;src:url(\"../fonts/Roboto/bold.woff\") format(\"woff\")}.sc-hrs-wizard:root{--shadow-sm:0 3px 6px 0 rgba(var(--color-shadow), .3);--shadow-md:0 3px 12px 0 rgba(var(--color-shadow), .6);--shadow-lg:0 3px 18px 0 rgba(var(--color-shadow), .6);--shadow-header:0 0 8px -5px rgba(var(--color-shadow), .6);--shadow-footer:-1px 0 12px -3px rgba(var(--color-shadow), .6);--shadow-inset-input:inset 0 1px 2px rgba(0, 0, 0, .39), 0 -1px 1px var(--white), 0 1px 0 var(--white);--shadow-focus-outline:0 0 0 4px var(--color-outline);--shadow-focus-invalid:0 0 1px 2px var(--color-error);--shadow-hover-tab:0 4px 0 0 var(--gray-8);--shadow-selected-tab:0 4px 0 0 var(--color-primary-dark)}.sc-hrs-wizard-h{font-family:var(--font)}html.sc-hrs-wizard{line-height:1.15;text-size-adjust:100%}body.sc-hrs-wizard{margin:0}main.sc-hrs-wizard{display:block}h1.sc-hrs-wizard{margin:0.67em 0;font-size:2em}hr.sc-hrs-wizard{overflow:visible;height:0;box-sizing:content-box}pre.sc-hrs-wizard{font-family:monospace, monospace;font-size:1em}a.sc-hrs-wizard{background-color:transparent}abbr[title].sc-hrs-wizard{border-bottom:none;text-decoration:underline}b.sc-hrs-wizard,strong.sc-hrs-wizard{font-weight:bolder}code.sc-hrs-wizard,kbd.sc-hrs-wizard,samp.sc-hrs-wizard{font-family:monospace, monospace;font-size:1em}small.sc-hrs-wizard{font-size:80%}img.sc-hrs-wizard{border-style:none}button.sc-hrs-wizard,input.sc-hrs-wizard,optgroup.sc-hrs-wizard,select.sc-hrs-wizard,textarea.sc-hrs-wizard{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button.sc-hrs-wizard,input.sc-hrs-wizard{overflow:visible}button.sc-hrs-wizard,select.sc-hrs-wizard{text-transform:none}button.sc-hrs-wizard,[type=button].sc-hrs-wizard,[type=reset].sc-hrs-wizard,[type=submit].sc-hrs-wizard{appearance:button}button.sc-hrs-wizard::-moz-focus-inner,[type=button].sc-hrs-wizard::-moz-focus-inner,[type=reset].sc-hrs-wizard::-moz-focus-inner,[type=submit].sc-hrs-wizard::-moz-focus-inner{border-style:none;padding:0}button.sc-hrs-wizard:-moz-focusring,[type=button].sc-hrs-wizard:-moz-focusring,[type=reset].sc-hrs-wizard:-moz-focusring,[type=submit].sc-hrs-wizard:-moz-focusring{outline:1px dotted ButtonText}fieldset.sc-hrs-wizard{padding:0.35em 0.75em 0.625em}legend.sc-hrs-wizard{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress.sc-hrs-wizard{vertical-align:baseline}textarea.sc-hrs-wizard{overflow:auto}[type=checkbox].sc-hrs-wizard,[type=radio].sc-hrs-wizard{box-sizing:border-box;padding:0}[type=number].sc-hrs-wizard::-webkit-inner-spin-button,[type=number].sc-hrs-wizard::-webkit-outer-spin-button{height:auto}[type=search].sc-hrs-wizard{appearance:textfield;outline-offset:-2px}[type=search].sc-hrs-wizard::-webkit-search-decoration{appearance:none}.sc-hrs-wizard::-webkit-file-upload-button{appearance:button;font:inherit}details.sc-hrs-wizard{display:block}summary.sc-hrs-wizard{display:list-item}template.sc-hrs-wizard{display:none}[hidden].sc-hrs-wizard{display:none}.sronly.sc-hrs-wizard{border:0;clip:rect(0, 0, 0, 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sc-hrs-wizard-h{--color-primary:#0073af;--color-primary-dark:#00538d;--color-primary-light:#0197d6;--color-primary-50:rgba(0, 115, 175, .5);--color-primary-30:rgba(0, 115, 175, .3);--color-accent:#721c7e;--color-accent-dark:#56156f;--color-accent-light:#92278f;--white:#fff;--white-90:rgba(255, 255, 255, .9);--white-80:rgba(255, 255, 255, .8);--white-70:rgba(255, 255, 255, .7);--white-60:rgba(255, 255, 255, .6);--white-50:rgba(255, 255, 255, .5);--white-40:rgba(255, 255, 255, .4);--white-30:rgba(255, 255, 255, .3);--white-20:rgba(255, 255, 255, .2);--white-10:rgba(255, 255, 255, .1);--white-05:rgba(255, 255, 255, .05);--gray-1:#fcfcfc;--gray-2:#f5f5f5;--gray-3:#eee;--gray-4:#e0e0e0;--gray-5:#bdbdbd;--gray-6:#9e9e9e;--gray-7:#757575;--gray-8:#616161;--gray-9:#424242;--gray-10:#323232;--black:#212121;--color-sub-light:var(--gray-3);--color-sub-dark:var(--gray-7);--color-success:#0a853b;--color-info:#115ffb;--color-warning:#eb7100;--color-error:#ab1300;--color-risk-none:#5a7c79;--color-risk-low:#0ea84b;--color-risk-medium:var(--color-warning);--color-risk-high:#c62360;--color-notifications:#df1642;--color-congratulations:#ebb700;--color-great-job:#0ea84b;--color-focused-state:#56156f;--color-focused-state-bg:rgba(86, 21, 111, .6);--gradient-color-stop-1:var(--white);--gradient-color-stop-2:var(--color-primary-dark);--gradient-background:linear-gradient(180deg, var(--gradient-color-stop-1) 0%, var(--gradient-color-stop-2) 100%);--sidebar-gradient:linear-gradient(0deg, var(--color-primary-dark), var(--color-primary), var(--white));--color-shadow:0, 0, 0,;--color-backdrop:0, 0, 0, .4}.sc-hrs-wizard-h{--font:\"Open Sans\", sans-serif;--font-weight-bold:700;--font-weight-semibold:600;--font-weight-regular:400}@media screen and (max-width: 599px){.sc-hrs-wizard-h{--font-size-h1:1.25rem;--font-size-h2:1rem;--font-size-h3:.75rem;--font-size-b1:1rem;--font-size-b2:.875rem;--font-size-button:1rem;--line-height-h1:1.75rem;--line-height-h2:1.25rem;--line-height-h3:1rem;--line-height-b1:1.25rem;--line-height-b2:1.25rem;--line-height-button:1.25rem}}@media screen and (min-width: 600px){.sc-hrs-wizard-h{--font-size-h1:1.75rem;--font-size-h2:1.25rem;--font-size-h3:1rem;--font-size-b1:1.25rem;--font-size-b2:1rem;--font-size-button:1.5rem;--line-height-h1:2.25rem;--line-height-h2:1.75rem;--line-height-h3:1.25rem;--line-height-b1:1.75rem;--line-height-b2:1.25rem;--line-height-button:1.75rem}}.sc-hrs-wizard-h{--box-shadow-01:0 2px 6px rgba(var(--color-shadow) .2);--box-shadow-02:0 -2px 6px rgba(var(--color-shadow) .2);--box-shadow-03:0 4px 5px rgba(var(--color-shadow) .14), 0 1px 10px rgba(var(--color-shadow) .12), 0 2px 4px rgba(var(--color-shadow) .2);--box-shadow-04:5px 0 6px rgba(var(--color-shadow) .14);--box-shadow-05:0 4px 12px rgba(var(--color-shadow) .2);--box-shadow-06:inset 0 4px 4px rgba(var(--color-shadow) .25);--box-shadow-focus:0 0 0 4px var(--color-focused-state-bg)}.sc-hrs-wizard-h{--padding:1rem;--content-padding:0 var(--padding) var(--padding);--subhead-padding:var(--padding) var(--padding) calc(.5 * var(--padding));box-sizing:border-box;position:relative}.sc-hrs-wizard-h hrs-text.sc-hrs-wizard{--display:block}.sc-hrs-wizard-h .sc-hrs-wizard-s>hrs-content{padding:var(--content-padding)}.sc-hrs-wizard-h .subheader.sc-hrs-wizard{padding:var(--subhead-padding)}@media (min-width: 600px){.sc-hrs-wizard-h{--padding:2rem}}.is-qna.sc-hrs-wizard-h:not(.is-status){--subhead-padding:1rem;--content-padding:0}.is-qna.sc-hrs-wizard-h:not(.is-status) .subheader.sc-hrs-wizard:not(.is-status){position:relative;box-shadow:var(--box-shadow-01);z-index:1}.is-qna.sc-hrs-wizard-h:not(.is-status) .subheader.sc-hrs-wizard:not(.is-status) .serial-text.sc-hrs-wizard{padding-bottom:0.5rem}.is-qna.sc-hrs-wizard-h:not(.is-status) hrs-list-item.sc-hrs-wizard{--list-item-margin:0}.sc-hrs-wizard-h.is-qna.is-status .sc-hrs-wizard-s>*[slot=subhead-text]{display:none}.sc-hrs-wizard-h.is-qna.is-status .sc-hrs-wizard-s hrs-content hrs-text{margin-bottom:1.625rem}.sc-hrs-wizard-h.is-qna.is-status .sc-hrs-wizard-s hrs-content hrs-text:first-of-type{margin-bottom:1rem}.subheader.is-status.sc-hrs-wizard{--height:28vh;display:flex;flex-direction:column;flex-shrink:0;align-items:center;justify-content:center;height:var(--height)}.subheader.is-status.is-correct.sc-hrs-wizard,.subheader.is-status.is-wrong.sc-hrs-wizard{margin-bottom:1rem;border-bottom:1px solid var(--gray-5)}@media (min-width: 600px){.subheader.is-status.is-correct.sc-hrs-wizard,.subheader.is-status.is-wrong.sc-hrs-wizard{--height:35vh;--subhead-padding:1rem}}.subheader.is-status.is-complete.sc-hrs-wizard{--height:35vh;justify-content:flex-end}@media (min-width: 600px){.subheader.is-status.is-complete.sc-hrs-wizard{--height:47vh;--subhead-padding:1rem}}.subheader.is-status.sc-hrs-wizard hrs-icon.sc-hrs-wizard{--icon-size:4.25rem;margin-bottom:0.5rem}@media (min-width: 600px){.subheader.is-status.sc-hrs-wizard hrs-icon.sc-hrs-wizard{--icon-size:6.25rem}}.subheader.is-status.sc-hrs-wizard hrs-text.sc-hrs-wizard:first-of-type{margin-bottom:0.5rem}";

const Wizard = class {
  constructor(hostRef) {
    Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.isStatusCard = false;
    /**
     * Type of wizard card to render
     */
    this.variant = 'default';
    /**
     * If `true`, modal header displays with no close/minimize button
     */
    this.hasNoHeaderButton = false;
  }
  handleConfigUpdate() {
    this.isStatusCard = this.config.subheader.isStatus;
  }
  connectedCallback() {
    var _a, _b;
    if ((_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.subheader) === null || _b === void 0 ? void 0 : _b.isStatus)
      this.isStatusCard = true;
  }
  generateSubHeader() {
    const { subheader } = this.config;
    return (Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: `subheader ${subheader.isStatus ? `is-status is-${subheader.type}` : ''}` }, subheader.isStatus ? this.getStatusSubhead(subheader) : this.getSerialSubhead(subheader), Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: 'subhead-text' })));
  }
  getStatusSubhead(subheader) {
    const iconDetail = {
      correct: ['correct-answer-pcmt', 'success'],
      wrong: ['incorrect-answer-pcmt', 'error'],
      complete: ['congratulations', 'congratulations']
    }[subheader.type];
    const titleColor = subheader.type === 'complete' ? 'black' : iconDetail[1];
    return (Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(Fragment, null, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-icon", { icon: iconDetail[0], color: iconDetail[1], qa: "wizard--status-icon" }), Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-text", { font: 'h1-semibold', color: titleColor, qa: "wizard--status-title" }, subheader.title), Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-text", { font: 'h3-semibold', qa: "wizard--status-subtitle" }, subheader.subtitle)));
  }
  getSerialSubhead(subheader) {
    const { qa } = this;
    return (Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(Fragment, null, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-text", { class: 'serial-text', font: 'h2-bold', color: 'sub-dark', qa: qa ? `${qa}--subhead` : 'wizard--subhead' }, subheader.serializationText)));
  }
  render() {
    const { config, qa } = this;
    if (!config)
      return;
    return (Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-qa": qa ? qa : null, class: {
        [`is-${this.variant}`]: !/default/.test(this.variant),
        [`is-status`]: this.isStatusCard
      } }, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-modal", { hasNoHeaderButton: this.hasNoHeaderButton, headerText: config.headerText, qa: qa ? `${qa}_modal` : 'wizard_modal' }, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, config.subheader ? this.generateSubHeader() : null, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)))));
  }
  get el() { return Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "config": ["handleConfigUpdate"]
  }; }
};
Wizard.style = wizardNewDesignCss;



//# sourceMappingURL=hrs-wizard.entry.js.map

/***/ })

}]);
//# sourceMappingURL=67-es5.js.map