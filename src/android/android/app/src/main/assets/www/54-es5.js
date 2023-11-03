(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-form-item.entry.js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-form-item.entry.js ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: hrs_form_item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hrs_form_item", function() { return FormItem; });
/* harmony import */ var _index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-be85d80d.js */ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/index-be85d80d.js");
/* harmony import */ var _ui_config_8be75a31_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-config-8be75a31.js */ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/ui-config-8be75a31.js");



const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};

const formItemNewDesignCss = "@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:400;src:url(\"../fonts/Roboto/light.woff\") format(\"woff\")}@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:500;src:url(\"../fonts/Roboto/regular.woff\") format(\"woff\")}@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:700;src:url(\"../fonts/Roboto/bold.woff\") format(\"woff\")}:root{--shadow-sm:0 3px 6px 0 rgba(var(--color-shadow), .3);--shadow-md:0 3px 12px 0 rgba(var(--color-shadow), .6);--shadow-lg:0 3px 18px 0 rgba(var(--color-shadow), .6);--shadow-header:0 0 8px -5px rgba(var(--color-shadow), .6);--shadow-footer:-1px 0 12px -3px rgba(var(--color-shadow), .6);--shadow-inset-input:inset 0 1px 2px rgba(0, 0, 0, .39), 0 -1px 1px var(--white), 0 1px 0 var(--white);--shadow-focus-outline:0 0 0 4px var(--color-outline);--shadow-focus-invalid:0 0 1px 2px var(--color-error);--shadow-hover-tab:0 4px 0 0 var(--gray-8);--shadow-selected-tab:0 4px 0 0 var(--color-primary-dark)}:host{font-family:var(--font)}/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;text-size-adjust:100%;}body{margin:0;}main{display:block}h1{margin:0.67em 0;font-size:2em;}hr{overflow:visible;height:0;box-sizing:content-box;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0;}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{appearance:textfield;outline-offset:-2px;}[type=search]::-webkit-search-decoration{appearance:none}::-webkit-file-upload-button{appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}.sronly{border:0;clip:rect(0, 0, 0, 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}:host{--color-primary:#0073af;--color-primary-dark:#00538d;--color-primary-light:#0197d6;--color-primary-50:rgba(0, 115, 175, .5);--color-primary-30:rgba(0, 115, 175, .3);--color-accent:#721c7e;--color-accent-dark:#56156f;--color-accent-light:#92278f;--white:#fff;--white-90:rgba(255, 255, 255, .9);--white-80:rgba(255, 255, 255, .8);--white-70:rgba(255, 255, 255, .7);--white-60:rgba(255, 255, 255, .6);--white-50:rgba(255, 255, 255, .5);--white-40:rgba(255, 255, 255, .4);--white-30:rgba(255, 255, 255, .3);--white-20:rgba(255, 255, 255, .2);--white-10:rgba(255, 255, 255, .1);--white-05:rgba(255, 255, 255, .05);--gray-1:#fcfcfc;--gray-2:#f5f5f5;--gray-3:#eee;--gray-4:#e0e0e0;--gray-5:#bdbdbd;--gray-6:#9e9e9e;--gray-7:#757575;--gray-8:#616161;--gray-9:#424242;--gray-10:#323232;--black:#212121;--color-sub-light:var(--gray-3);--color-sub-dark:var(--gray-7);--color-success:#0a853b;--color-info:#115ffb;--color-warning:#eb7100;--color-error:#ab1300;--color-risk-none:#5a7c79;--color-risk-low:#0ea84b;--color-risk-medium:var(--color-warning);--color-risk-high:#c62360;--color-notifications:#df1642;--color-congratulations:#ebb700;--color-great-job:#0ea84b;--color-focused-state:#56156f;--color-focused-state-bg:rgba(86, 21, 111, .6);--gradient-color-stop-1:var(--white);--gradient-color-stop-2:var(--color-primary-dark);--gradient-background:linear-gradient(180deg, var(--gradient-color-stop-1) 0%, var(--gradient-color-stop-2) 100%);--sidebar-gradient:linear-gradient(0deg, var(--color-primary-dark), var(--color-primary), var(--white));--color-shadow:0, 0, 0,;--color-backdrop:0, 0, 0, .4}:host{--font:\"Open Sans\", sans-serif;--font-weight-bold:700;--font-weight-semibold:600;--font-weight-regular:400}@media screen and (max-width: 599px){:host{--font-size-h1:1.25rem;--font-size-h2:1rem;--font-size-h3:.75rem;--font-size-b1:1rem;--font-size-b2:.875rem;--font-size-button:1rem;--line-height-h1:1.75rem;--line-height-h2:1.25rem;--line-height-h3:1rem;--line-height-b1:1.25rem;--line-height-b2:1.25rem;--line-height-button:1.25rem}}@media screen and (min-width: 600px){:host{--font-size-h1:1.75rem;--font-size-h2:1.25rem;--font-size-h3:1rem;--font-size-b1:1.25rem;--font-size-b2:1rem;--font-size-button:1.5rem;--line-height-h1:2.25rem;--line-height-h2:1.75rem;--line-height-h3:1.25rem;--line-height-b1:1.75rem;--line-height-b2:1.25rem;--line-height-button:1.75rem}}:host{--box-shadow-01:0 2px 6px rgba(var(--color-shadow) .2);--box-shadow-02:0 -2px 6px rgba(var(--color-shadow) .2);--box-shadow-03:0 4px 5px rgba(var(--color-shadow) .14), 0 1px 10px rgba(var(--color-shadow) .12), 0 2px 4px rgba(var(--color-shadow) .2);--box-shadow-04:5px 0 6px rgba(var(--color-shadow) .14);--box-shadow-05:0 4px 12px rgba(var(--color-shadow) .2);--box-shadow-06:inset 0 4px 4px rgba(var(--color-shadow) .25);--box-shadow-focus:0 0 0 4px var(--color-focused-state-bg)}:host{--item-display:inline-flex;--item-flex-direction:row;--item-flex-alignment:center;--item-column-gap:.6rem;--item-margin-top:1rem;--item-margin-left:.5rem;--item-margin-right:.5rem;--item-margin-bottom:1.7rem;--item-margin:var(--item-margin-top) var(--item-margin-right) var(--item-margin-bottom) var(--item-margin-left);--item-height:3rem;--item-padding:.2rem;--item-width:inherit;--message-font-size:.85rem;--message-height:0;--message-top-margin:.2rem;height:var(--item-height);margin:var(--item-margin);padding:var(--item-padding);width:var(--item-width)}.form-item-message{--msg-transform:calc(var(--message-height) + var(--message-top-margin));position:absolute;height:var(--message-height);margin-top:var(--message-top-margin);white-space:nowrap;font-size:var(--message-font-size);transform:translateY(var(--msg-transform))}.error-message{color:var(--color-error)}:host{--item-width:95%;--item-width:-webkit-fill-available;--message-font-size:1rem}:host .input-wrapper{display:var(--item-display);flex-direction:var(--item-flex-direction);column-gap:var(--item-column-gap);align-items:var(--item-flex-alignment);width:var(--item-width)}:host .input-wrapper ::slotted(hrs-input){--input-height:auto;--text-indent:0;flex:0 1 50%;border:none}:host .error-message{font-style:italic}:host(.has-floating-label){--item-height:100%;--item-width:90%;--item-margin:0;--item-padding:0;--message-height:1.3rem;--message-top-margin:.3rem;display:flex;align-items:flex-end;justify-content:center;max-height:4rem;border-bottom:1px solid var(--gray-5)}:host(.has-floating-label) .item-native{height:var(--item-height);width:var(--item-width)}:host(.has-floating-label) .input-wrapper{display:flex;align-items:center;justify-content:center;flex-direction:column}:host(.has-floating-label) .input-wrapper ::slotted(hrs-label.label-floating){--label-padding:0;--label-font-size:1rem;position:static;text-align:center;transform:translate3d(0, 1.5rem, 0);transform-origin:left top}:host(.has-floating-label) .input-wrapper ::slotted(hrs-input){--placeholder-opacity:0;--focus-border:1px solid transparent;display:flex;align-items:center;height:100%;padding:0.5rem 0.5rem 0.5rem 0.1rem;border-radius:0}:host{--item-display:flex;--item-flex-direction:column;--item-flex-alignment:flex-start;--item-column-gap:0}.form-item-message{--message-top-margin:.25rem;--font-weight:var(--font-weight-regular);--font-size:var(--font-size-b1);--line-height:var(--line-height-b1);font-weight:var(--font-weight);font-size:var(--font-size);line-height:var(--line-height)}@media screen and (min-width: 600px){.form-item-message{--message-top-margin:1rem}}";

const FormItem = class {
  constructor(hostRef) {
    Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.hasFloatingLabel = false;
    this.itemStyles = new Map();
    this.state = {
      multipleInputs: false,
      displayMessage: false
    };
    /**
     * If `true`, will render a button tag and item will be tappable
     */
    this.button = false;
    /**
     * If `true` user will not be able to interact with the item
     */
    this.disabled = false;
    /**
     * Style class to apply to infoMessage, if applicable
     */
    this.messageClass = '';
    /**
     * Type of button. Only used when `onclick` or `button prop is present
     */
    this.type = 'button';
  }
  hasInvalidInputChanged() {
    // State object must be fully updated in order to trigger rerender and display errors
    this.state = { ...this.state, displayMessage: this.hasInvalidInput };
  }
  itemStyle(ev) {
    ev.stopPropagation();
    const tagName = ev.target.tagName;
    const updatedStyles = ev.detail;
    const newStyles = {};
    const childStyles = this.itemStyles.get(tagName) || {};
    let hasStyleChange = false;
    Object.keys(updatedStyles).forEach((key) => {
      if (updatedStyles[key]) {
        const itemKey = `item-${key}`;
        if (!childStyles[itemKey]) {
          hasStyleChange = true;
        }
        newStyles[itemKey] = true;
      }
    });
    if (!hasStyleChange && Object.keys(newStyles).length !== Object.keys(childStyles).length) {
      hasStyleChange = true;
    }
    if (hasStyleChange) {
      this.itemStyles.set(tagName, newStyles);
      Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["f"])(this);
    }
  }
  itemValid(ev) {
    // @ts-ignore
    const detail = ev.detail;
    // If an invalid input already exists, just quickly make sure it still exists before negating
    if (this.hasInvalidInput && this.checkAllValid()) {
      this.hasInvalidInput = !detail.isValid;
    }
    else if (!this.hasInvalidInput) {
      // Otherwise assign from event detail
      this.hasInvalidInput = !detail.isValid;
    }
    // Update error message
    if (detail.message)
      this.infoMessage = detail.message;
    if (detail.class)
      this.messageClass = detail.class;
  }
  /**
   * Returns `false` if any inputs are invalid
    * @private
   */
  checkAllValid() {
    const inputs = Array.from(this.el.querySelectorAll('hrs-input'));
    return inputs.every((input) => input['isValid']);
  }
  componentWillLoad() {
    // Query for child hrs-label position settings to determine layout
    const label = this.el.querySelector('hrs-label');
    if (label && label.position === 'floating')
      this.hasFloatingLabel = true;
  }
  componentDidLoad() {
    // Query elements with a clickable cover, relative to the entire item
    const covers = this.el.querySelectorAll('hrs-select');
    // Query elements which can accept focus alongside above elements, so that covers do not interfere
    const inputs = this.el.querySelectorAll('hrs-input');
    // Query elements which should remain clickable when covered inputs are present
    const clickables = this.el.querySelectorAll('hrs-button, a, button');
    // Check for multiple inputs to change position of cover to `relative` for all covered inputs
    this.state.multipleInputs = covers.length + inputs.length > 1
      || covers.length + clickables.length > 1
      || covers.length > 0 && this.isClickable();
  }
  /**
   * If item contains a covered input, then the cover should get :hover/:active/:focus. UNLESS there are multiple inputs
   * @private
   */
  hasCover() {
    const inputs = this.el.querySelectorAll('hrs-select');
    return inputs.length === 1 && !this.state.multipleInputs;
  }
  /**
   * If item has button/href prop, clickable native elements will be rendered
   * @private
   */
  isClickable() {
    return (this.href !== undefined || this.button);
  }
  canActivate() {
    return (this.isClickable() || this.hasCover());
  }
  /**
   * Determine whether a click is targeting the hrs-input's clear button. This is needed because the button
   * is nested in multiple layers of shadow DOM
   * @param ev
   * @private
   */
  checkInputClearButtonClick(ev) {
    ev.stopPropagation();
    const input = this.el.querySelectorAll('hrs-input')[0];
    const clearBtn = input.querySelectorAll('button')[0];
    let btnRect;
    // Clear button will render once input has value
    if (clearBtn) {
      btnRect = clearBtn.getBoundingClientRect();
      // Check if user click falls within the area occupied by the clear button
      if (ev.clientY > btnRect.y
        && ev.clientX > btnRect.x
        && ev.clientY < (btnRect.y + btnRect.height)
        && ev.clientX < (btnRect.x + btnRect.width)) {
        // Force a click event on the button
        clearBtn.click();
      }
    }
  }
  render() {
    const contextMode = Object(_ui_config_8be75a31_js__WEBPACK_IMPORTED_MODULE_1__["g"])();
    const { disabled, download, href, lines, rel, target, qa } = this;
    const childStyles = {};
    const clickable = this.isClickable();
    const canActivate = this.canActivate();
    const elType = href === undefined ? 'button' : 'a';
    const TagType = clickable ? (elType) : 'div';
    const attrs = (TagType === 'button')
      ? { type: this.type }
      : { download, href, rel, target, qa };
    this.itemStyles.forEach((val) => Object.assign(childStyles, val));
    return (Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { mode: contextMode, "data-qa": qa ? qa : null, "aria-disabled": disabled ? 'true' : null, class: {
        ...childStyles,
        'item': true,
        [`item-lines-${lines}`]: lines !== undefined,
        'item-disabled': disabled,
        'in-list': hostContext('hrs-list', this.el),
        'item-multiple-inputs': this.state.multipleInputs,
        'has-floating-label': this.hasFloatingLabel,
        'hrs-activatable': canActivate,
        'hrs-focusable': true
      } }, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(TagType, { ...attrs, class: "item-native", part: "native", disabled: disabled }, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "start" }), Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "item-inner" }, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "input-wrapper", onClick: this.checkInputClearButtonClick.bind(this) }, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)), Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "end" }), Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "item-inner-highlight" }))), Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "item-highlight" }), Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: {
        "form-item-message": true,
        [`${this.messageClass}`]: this.state.displayMessage
      } }, this.state.displayMessage ? this.infoMessage : null)));
  }
  static get delegatesFocus() { return true; }
  get el() { return Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "hasInvalidInput": ["hasInvalidInputChanged"]
  }; }
};
FormItem.style = {
  newDesign: formItemNewDesignCss
};



//# sourceMappingURL=hrs-form-item.entry.js.map

/***/ })

}]);
//# sourceMappingURL=54-es5.js.map