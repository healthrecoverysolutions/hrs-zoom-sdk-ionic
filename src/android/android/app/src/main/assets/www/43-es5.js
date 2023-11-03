(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-alert.entry.js":
/*!**************************************************************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-alert.entry.js ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: hrs_alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hrs_alert", function() { return Alert; });
/* harmony import */ var _index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-be85d80d.js */ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/index-be85d80d.js");
/* harmony import */ var _ui_config_8be75a31_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-config-8be75a31.js */ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/ui-config-8be75a31.js");
/* harmony import */ var _helpers_0e8d6178_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-0e8d6178.js */ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/helpers-0e8d6178.js");




const alertNewDesignCss = "@charset \"UTF-8\";@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:400;src:url(\"../fonts/Roboto/light.woff\") format(\"woff\")}@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:500;src:url(\"../fonts/Roboto/regular.woff\") format(\"woff\")}@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:700;src:url(\"../fonts/Roboto/bold.woff\") format(\"woff\")}:root{--shadow-sm:0 3px 6px 0 rgba(var(--color-shadow), .3);--shadow-md:0 3px 12px 0 rgba(var(--color-shadow), .6);--shadow-lg:0 3px 18px 0 rgba(var(--color-shadow), .6);--shadow-header:0 0 8px -5px rgba(var(--color-shadow), .6);--shadow-footer:-1px 0 12px -3px rgba(var(--color-shadow), .6);--shadow-inset-input:inset 0 1px 2px rgba(0, 0, 0, .39), 0 -1px 1px var(--white), 0 1px 0 var(--white);--shadow-focus-outline:0 0 0 4px var(--color-outline);--shadow-focus-invalid:0 0 1px 2px var(--color-error);--shadow-hover-tab:0 4px 0 0 var(--gray-8);--shadow-selected-tab:0 4px 0 0 var(--color-primary-dark)}:host{font-family:var(--font)}/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;text-size-adjust:100%;}body{margin:0;}main{display:block}h1{margin:0.67em 0;font-size:2em;}hr{overflow:visible;height:0;box-sizing:content-box;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0;}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{appearance:textfield;outline-offset:-2px;}[type=search]::-webkit-search-decoration{appearance:none}::-webkit-file-upload-button{appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}.sronly{border:0;clip:rect(0, 0, 0, 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}:host{--color-primary:#0073af;--color-primary-dark:#00538d;--color-primary-light:#0197d6;--color-primary-50:rgba(0, 115, 175, .5);--color-primary-30:rgba(0, 115, 175, .3);--color-accent:#721c7e;--color-accent-dark:#56156f;--color-accent-light:#92278f;--white:#fff;--white-90:rgba(255, 255, 255, .9);--white-80:rgba(255, 255, 255, .8);--white-70:rgba(255, 255, 255, .7);--white-60:rgba(255, 255, 255, .6);--white-50:rgba(255, 255, 255, .5);--white-40:rgba(255, 255, 255, .4);--white-30:rgba(255, 255, 255, .3);--white-20:rgba(255, 255, 255, .2);--white-10:rgba(255, 255, 255, .1);--white-05:rgba(255, 255, 255, .05);--gray-1:#fcfcfc;--gray-2:#f5f5f5;--gray-3:#eee;--gray-4:#e0e0e0;--gray-5:#bdbdbd;--gray-6:#9e9e9e;--gray-7:#757575;--gray-8:#616161;--gray-9:#424242;--gray-10:#323232;--black:#212121;--color-sub-light:var(--gray-3);--color-sub-dark:var(--gray-7);--color-success:#0a853b;--color-info:#115ffb;--color-warning:#eb7100;--color-error:#ab1300;--color-risk-none:#5a7c79;--color-risk-low:#0ea84b;--color-risk-medium:var(--color-warning);--color-risk-high:#c62360;--color-notifications:#df1642;--color-congratulations:#ebb700;--color-great-job:#0ea84b;--color-focused-state:#56156f;--color-focused-state-bg:rgba(86, 21, 111, .6);--gradient-color-stop-1:var(--white);--gradient-color-stop-2:var(--color-primary-dark);--gradient-background:linear-gradient(180deg, var(--gradient-color-stop-1) 0%, var(--gradient-color-stop-2) 100%);--sidebar-gradient:linear-gradient(0deg, var(--color-primary-dark), var(--color-primary), var(--white));--color-shadow:0, 0, 0,;--color-backdrop:0, 0, 0, .4}:host{--font:\"Open Sans\", sans-serif;--font-weight-bold:700;--font-weight-semibold:600;--font-weight-regular:400}@media screen and (max-width: 599px){:host{--font-size-h1:1.25rem;--font-size-h2:1rem;--font-size-h3:.75rem;--font-size-b1:1rem;--font-size-b2:.875rem;--font-size-button:1rem;--line-height-h1:1.75rem;--line-height-h2:1.25rem;--line-height-h3:1rem;--line-height-b1:1.25rem;--line-height-b2:1.25rem;--line-height-button:1.25rem}}@media screen and (min-width: 600px){:host{--font-size-h1:1.75rem;--font-size-h2:1.25rem;--font-size-h3:1rem;--font-size-b1:1.25rem;--font-size-b2:1rem;--font-size-button:1.5rem;--line-height-h1:2.25rem;--line-height-h2:1.75rem;--line-height-h3:1.25rem;--line-height-b1:1.75rem;--line-height-b2:1.25rem;--line-height-button:1.75rem}}:host{--box-shadow-01:0 2px 6px rgba(var(--color-shadow) .2);--box-shadow-02:0 -2px 6px rgba(var(--color-shadow) .2);--box-shadow-03:0 4px 5px rgba(var(--color-shadow) .14), 0 1px 10px rgba(var(--color-shadow) .12), 0 2px 4px rgba(var(--color-shadow) .2);--box-shadow-04:5px 0 6px rgba(var(--color-shadow) .14);--box-shadow-05:0 4px 12px rgba(var(--color-shadow) .2);--box-shadow-06:inset 0 4px 4px rgba(var(--color-shadow) .25);--box-shadow-focus:0 0 0 4px var(--color-focused-state-bg)}:host{--width:90%;--border-radius:.75rem;--box-shadow:var(--box-shadow-03);--background:var(--white);--header-padding:.75rem;--header-color-bg:var(--color-primary);--header-icon-size:var(--font-size-h1);--header-title-margin:.5rem;--content-padding:.75rem;position:absolute;float:left;left:50%;top:50%;transform:translate(-50%, -50%);margin:auto;width:var(--width);display:flex;flex-direction:column;overflow:hidden;border-radius:var(--border-radius);box-shadow:var(--box-shadow);backdrop-filter:var(--card-backdrop-filter)}:host .alert-header{display:flex;align-items:center;padding:var(--header-padding);background:var(--header-color-bg)}:host .alert-header .alert-icon-container{width:var(--header-icon-size);height:var(--header-icon-size)}:host .alert-header hrs-icon{--icon-color:var(--white);--icon-size:var(--header-icon-size)}:host .alert-header hrs-text{margin-left:var(--header-title-margin)}:host .alert-content{position:relative;overflow-y:auto;height:100%;padding:var(--content-padding);background:var(--background);backdrop-filter:blur(0.1rem)}:host .alert-content hrs-buttons{padding-top:1.5rem}:host .alert-content hrs-button{margin:0}:host .alert-content .alert-message:not(:last-of-type){margin-bottom:1rem}@media (min-width: 600px){:host{--width:39.75rem;--border-radius:1.25rem;--header-padding:1.5rem;--header-title-margin:1rem}:host .alert-content hrs-text{--display:block;padding:1rem}}:host ul{text-indent:0.75rem;margin:0.5rem 0 0;padding-inline-start:0}:host li{list-style-type:none}:host li::before{content:\"•\";padding-right:0.5rem;font-size:0.9rem;vertical-align:revert}:host(.is-success) .alert-header{--header-color-bg:var(--color-success)}:host(.is-error) .alert-header{--header-color-bg:var(--color-error)}:host(.is-multi-button) .alert-content{display:flex;flex-direction:column-reverse;align-items:center}:host(.is-multi-button) .alert-content hrs-button{--width:42%}:host(.is-multi-button) .alert-content hrs-button:not(:first-child){margin-bottom:0.5rem}@media (min-width: 600px){:host(.is-multi-button) .alert-content{--content-padding:1.75rem}:host(.is-multi-button) .alert-content hrs-button{--width:30%}:host(.is-multi-button) .alert-content hrs-button:not(:first-child){margin-bottom:1rem}}:host{animation:alertIn 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) both}:host(.is-closing){animation:alertOut 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both}@keyframes alertIn{0%{opacity:0}100%{opacity:1}}@keyframes alertOut{0%{opacity:1}100%{opacity:0}}";

const Alert = class {
  constructor(hostRef) {
    Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.hrsUserSelection = Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "hrsUserSelection", 7);
    this.hrsBackdropOpen = Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "hrsBackdropOpen", 7);
    this.hrsBackdropClose = Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "hrsBackdropClose", 7);
    /**
    * Alert variant to render.
    */
    this.variant = 'default';
    /**
     * Alert message.
     * Text to be displayed at the top of the alert's content.
     * Ignored for multi-button variant.
     */
    this.message = [];
    /**
     * If `false`, alert renders without a footer or the default primary/secondary buttons.
     */
    this.hasFooter = true;
    /**
     * If `true`, alert renders with `hrs-backdrop` in background.
     */
    this.hasBackdrop = true;
    /**
     * If `true`, alert will be dismissed when user taps on `hrs-backdrop`.
     */
    this.backdropDismiss = true;
    /**
     * Alert primary (affirmative) footer button text.
     * Button to confirm/submit/etc can be customized here.
     */
    this.primaryButtonText = 'Confirm';
    /**
     * Alert secondary (dismissal) footer button text.
     * Button to cancel/dismiss/etc can be customized here.
     */
    this.secondaryButtonText = 'Cancel';
    /**
     * Handles the alert's button clicks and emits an event with the user's selection.
     * Emits true on user confirmation. false on user selection of 'Cancel'.
     */
    this.handleClick = (selection, options) => {
      if (options === null || options === void 0 ? void 0 : options.handler) {
        options.handler();
      }
      else {
        this.hrsUserSelection.emit(selection);
      }
      this.dismissBackdrop();
    };
    this.dismissBackdrop = () => {
      if (this.backdropDismiss) {
        this.hrsBackdropClose.emit();
        this.hrsUserSelection.emit(false);
      }
    };
    this.populateAlertButtons = () => {
      const { primaryButtonText, secondaryButtonText } = this;
      const hasSecondaryButton = !!secondaryButtonText;
      let btnAttrs;
      if (this.buttons) {
        const isOneButton = this.buttons.length === 1;
        return (Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["F"], null, this.buttons.map((btn, i) => {
          btnAttrs = {
            variant: isOneButton ? 'primary' : (i >= 1 ? 'primary' : 'secondary'),
            onClick: btn.handler ? () => this.handleClick(false, btn) : () => this.handleClick(false),
            class: btn.cssClass,
            expand: isOneButton,
            qa: this.qa ? `${this.qa}--button-${i}` : `alert--button-${i}`
          };
          return Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-button", { ...Object(_helpers_0e8d6178_js__WEBPACK_IMPORTED_MODULE_2__["a"])({ ...btnAttrs, ...btn }) });
        })));
      }
      else {
        return (Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["F"], null, hasSecondaryButton ?
          Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-button", { variant: 'secondary', text: "Cancel", onClick: () => this.handleClick(false), qa: this.qa ? `${this.qa}--button-secondary` : `alert--button-secondary` }) : null, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-button", { variant: 'primary', expand: !hasSecondaryButton, text: primaryButtonText, onClick: () => this.handleClick(true), qa: this.qa ? `${this.qa}--button-primary` : `alert--button-primary` })));
      }
    };
  }
  onBackdropTap() {
    this.dismissBackdrop();
  }
  componentWillRender() {
    if (this.hasBackdrop) {
      this.hrsBackdropOpen.emit({
        isTappable: this.backdropDismiss
      });
    }
  }
  async dismiss() {
    if (this.hasBackdrop)
      return await this.hrsBackdropClose.emit();
  }
  render() {
    const contextMode = Object(_ui_config_8be75a31_js__WEBPACK_IMPORTED_MODULE_1__["g"])();
    const { variant, hasFooter, header, message, details, qa } = this;
    return (Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { mode: contextMode, "data-qa": qa ? qa : null, class: {
        [`is-${variant}`]: true,
      } }, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-header" }, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-icon-container" }, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-icon", { icon: "icon-alert" })), Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-text", { font: "h1-semibold", color: "white", qa: qa ? `${qa}--header` : 'alert--header' }, header)), Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-content" }, !/multi-button/.test(variant) ?
      Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-text", { font: "b1-regular", qa: qa ? `${qa}--body` : 'alert--body' }, message.map((line) => Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-message" }, line)), details && details.length > 0 ?
        Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", null, details.map((detail) => Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, detail))))
        : null)
      :
        this.populateAlertButtons(), hasFooter && !/multi-button/.test(variant) ?
      Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-buttons", null, this.populateAlertButtons())
      :
        null)));
  }
  get el() { return Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
Alert.style = {
  newDesign: alertNewDesignCss
};



//# sourceMappingURL=hrs-alert.entry.js.map

/***/ })

}]);
//# sourceMappingURL=43-es5.js.map