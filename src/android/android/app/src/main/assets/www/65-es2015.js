(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-textarea.entry.js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-textarea.entry.js ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: hrs_textarea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hrs_textarea", function() { return TextArea; });
/* harmony import */ var _index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-be85d80d.js */ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/index-be85d80d.js");
/* harmony import */ var _helpers_0e8d6178_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-0e8d6178.js */ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/helpers-0e8d6178.js");
/* harmony import */ var _ui_config_8be75a31_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui-config-8be75a31.js */ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/ui-config-8be75a31.js");




const textareaNewDesignCss = "@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:400;src:url(\"../fonts/Roboto/light.woff\") format(\"woff\")}@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:500;src:url(\"../fonts/Roboto/regular.woff\") format(\"woff\")}@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:700;src:url(\"../fonts/Roboto/bold.woff\") format(\"woff\")}.sc-hrs-textarea-newDesign:root{--shadow-sm:0 3px 6px 0 rgba(var(--color-shadow), .3);--shadow-md:0 3px 12px 0 rgba(var(--color-shadow), .6);--shadow-lg:0 3px 18px 0 rgba(var(--color-shadow), .6);--shadow-header:0 0 8px -5px rgba(var(--color-shadow), .6);--shadow-footer:-1px 0 12px -3px rgba(var(--color-shadow), .6);--shadow-inset-input:inset 0 1px 2px rgba(0, 0, 0, .39), 0 -1px 1px var(--white), 0 1px 0 var(--white);--shadow-focus-outline:0 0 0 4px var(--color-outline);--shadow-focus-invalid:0 0 1px 2px var(--color-error);--shadow-hover-tab:0 4px 0 0 var(--gray-8);--shadow-selected-tab:0 4px 0 0 var(--color-primary-dark)}.sc-hrs-textarea-newDesign-h{font-family:var(--font)}html.sc-hrs-textarea-newDesign{line-height:1.15;text-size-adjust:100%}body.sc-hrs-textarea-newDesign{margin:0}main.sc-hrs-textarea-newDesign{display:block}h1.sc-hrs-textarea-newDesign{margin:0.67em 0;font-size:2em}hr.sc-hrs-textarea-newDesign{overflow:visible;height:0;box-sizing:content-box}pre.sc-hrs-textarea-newDesign{font-family:monospace, monospace;font-size:1em}a.sc-hrs-textarea-newDesign{background-color:transparent}abbr[title].sc-hrs-textarea-newDesign{border-bottom:none;text-decoration:underline}b.sc-hrs-textarea-newDesign,strong.sc-hrs-textarea-newDesign{font-weight:bolder}code.sc-hrs-textarea-newDesign,kbd.sc-hrs-textarea-newDesign,samp.sc-hrs-textarea-newDesign{font-family:monospace, monospace;font-size:1em}small.sc-hrs-textarea-newDesign{font-size:80%}img.sc-hrs-textarea-newDesign{border-style:none}button.sc-hrs-textarea-newDesign,input.sc-hrs-textarea-newDesign,optgroup.sc-hrs-textarea-newDesign,select.sc-hrs-textarea-newDesign,textarea.sc-hrs-textarea-newDesign{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button.sc-hrs-textarea-newDesign,input.sc-hrs-textarea-newDesign{overflow:visible}button.sc-hrs-textarea-newDesign,select.sc-hrs-textarea-newDesign{text-transform:none}button.sc-hrs-textarea-newDesign,[type=button].sc-hrs-textarea-newDesign,[type=reset].sc-hrs-textarea-newDesign,[type=submit].sc-hrs-textarea-newDesign{appearance:button}button.sc-hrs-textarea-newDesign::-moz-focus-inner,[type=button].sc-hrs-textarea-newDesign::-moz-focus-inner,[type=reset].sc-hrs-textarea-newDesign::-moz-focus-inner,[type=submit].sc-hrs-textarea-newDesign::-moz-focus-inner{border-style:none;padding:0}button.sc-hrs-textarea-newDesign:-moz-focusring,[type=button].sc-hrs-textarea-newDesign:-moz-focusring,[type=reset].sc-hrs-textarea-newDesign:-moz-focusring,[type=submit].sc-hrs-textarea-newDesign:-moz-focusring{outline:1px dotted ButtonText}fieldset.sc-hrs-textarea-newDesign{padding:0.35em 0.75em 0.625em}legend.sc-hrs-textarea-newDesign{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress.sc-hrs-textarea-newDesign{vertical-align:baseline}textarea.sc-hrs-textarea-newDesign{overflow:auto}[type=checkbox].sc-hrs-textarea-newDesign,[type=radio].sc-hrs-textarea-newDesign{box-sizing:border-box;padding:0}[type=number].sc-hrs-textarea-newDesign::-webkit-inner-spin-button,[type=number].sc-hrs-textarea-newDesign::-webkit-outer-spin-button{height:auto}[type=search].sc-hrs-textarea-newDesign{appearance:textfield;outline-offset:-2px}[type=search].sc-hrs-textarea-newDesign::-webkit-search-decoration{appearance:none}.sc-hrs-textarea-newDesign::-webkit-file-upload-button{appearance:button;font:inherit}details.sc-hrs-textarea-newDesign{display:block}summary.sc-hrs-textarea-newDesign{display:list-item}template.sc-hrs-textarea-newDesign{display:none}[hidden].sc-hrs-textarea-newDesign{display:none}.sronly.sc-hrs-textarea-newDesign{border:0;clip:rect(0, 0, 0, 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sc-hrs-textarea-newDesign-h{--color-primary:#0073af;--color-primary-dark:#00538d;--color-primary-light:#0197d6;--color-primary-50:rgba(0, 115, 175, .5);--color-primary-30:rgba(0, 115, 175, .3);--color-accent:#721c7e;--color-accent-dark:#56156f;--color-accent-light:#92278f;--white:#fff;--white-90:rgba(255, 255, 255, .9);--white-80:rgba(255, 255, 255, .8);--white-70:rgba(255, 255, 255, .7);--white-60:rgba(255, 255, 255, .6);--white-50:rgba(255, 255, 255, .5);--white-40:rgba(255, 255, 255, .4);--white-30:rgba(255, 255, 255, .3);--white-20:rgba(255, 255, 255, .2);--white-10:rgba(255, 255, 255, .1);--white-05:rgba(255, 255, 255, .05);--gray-1:#fcfcfc;--gray-2:#f5f5f5;--gray-3:#eee;--gray-4:#e0e0e0;--gray-5:#bdbdbd;--gray-6:#9e9e9e;--gray-7:#757575;--gray-8:#616161;--gray-9:#424242;--gray-10:#323232;--black:#212121;--color-sub-light:var(--gray-3);--color-sub-dark:var(--gray-7);--color-success:#0a853b;--color-info:#115ffb;--color-warning:#eb7100;--color-error:#ab1300;--color-risk-none:#5a7c79;--color-risk-low:#0ea84b;--color-risk-medium:var(--color-warning);--color-risk-high:#c62360;--color-notifications:#df1642;--color-congratulations:#ebb700;--color-great-job:#0ea84b;--color-focused-state:#56156f;--color-focused-state-bg:rgba(86, 21, 111, .6);--gradient-color-stop-1:var(--white);--gradient-color-stop-2:var(--color-primary-dark);--gradient-background:linear-gradient(180deg, var(--gradient-color-stop-1) 0%, var(--gradient-color-stop-2) 100%);--sidebar-gradient:linear-gradient(0deg, var(--color-primary-dark), var(--color-primary), var(--white));--color-shadow:0, 0, 0,;--color-backdrop:0, 0, 0, .4}.sc-hrs-textarea-newDesign-h{--font:\"Open Sans\", sans-serif;--font-weight-bold:700;--font-weight-semibold:600;--font-weight-regular:400}@media screen and (max-width: 599px){.sc-hrs-textarea-newDesign-h{--font-size-h1:1.25rem;--font-size-h2:1rem;--font-size-h3:.75rem;--font-size-b1:1rem;--font-size-b2:.875rem;--font-size-button:1rem;--line-height-h1:1.75rem;--line-height-h2:1.25rem;--line-height-h3:1rem;--line-height-b1:1.25rem;--line-height-b2:1.25rem;--line-height-button:1.25rem}}@media screen and (min-width: 600px){.sc-hrs-textarea-newDesign-h{--font-size-h1:1.75rem;--font-size-h2:1.25rem;--font-size-h3:1rem;--font-size-b1:1.25rem;--font-size-b2:1rem;--font-size-button:1.5rem;--line-height-h1:2.25rem;--line-height-h2:1.75rem;--line-height-h3:1.25rem;--line-height-b1:1.75rem;--line-height-b2:1.25rem;--line-height-button:1.75rem}}.sc-hrs-textarea-newDesign-h{--box-shadow-01:0 2px 6px rgba(var(--color-shadow) .2);--box-shadow-02:0 -2px 6px rgba(var(--color-shadow) .2);--box-shadow-03:0 4px 5px rgba(var(--color-shadow) .14), 0 1px 10px rgba(var(--color-shadow) .12), 0 2px 4px rgba(var(--color-shadow) .2);--box-shadow-04:5px 0 6px rgba(var(--color-shadow) .14);--box-shadow-05:0 4px 12px rgba(var(--color-shadow) .2);--box-shadow-06:inset 0 4px 4px rgba(var(--color-shadow) .25);--box-shadow-focus:0 0 0 4px var(--color-focused-state-bg)}.sc-hrs-textarea-newDesign-h{--display:block;--width:100%;--padding-horizontal:.75rem;--padding-vertical:.5rem;--border-width:1px;--border:var(--border-width) solid var(--gray-7);--border-radius:8px;--outline:none;--outline-width:2px;--focus-outline:var(--outline-width) solid var(--color-focused-state-bg);--background:transparent;--box-shadow:var(--box-shadow-06);--color:var(--black);--placeholder-color:var(--gray-7);position:relative;box-sizing:border-box;display:var(--display);overflow-y:auto;height:auto;width:100%;padding:var(--padding-vertical) var(--padding-horizontal) var(--padding-vertical);border:var(--border);border-radius:var(--border-radius);white-space:pre-wrap;background:var(--background);color:var(--color);box-shadow:var(--box-shadow);outline:var(--outline);cursor:text}@media (min-width: 600px){.sc-hrs-textarea-newDesign-h{--border-width:2px;--border-radius:12px;--outline-width:4px}}textarea.sc-hrs-textarea-newDesign{--font-weight:var(--font-weight-regular);--font-size:var(--font-size-b1);--line-height:var(--line-height-b1);font-weight:var(--font-weight);font-size:var(--font-size);line-height:var(--line-height);display:block;width:100%;border:0;padding:0;appearance:none;background:transparent;outline:none;box-shadow:none;resize:none}textarea.sc-hrs-textarea-newDesign::placeholder{color:var(--placeholder-color)}.has-focus.sc-hrs-textarea-newDesign-h{--outline:var(--focus-outline)}.is-disabled.sc-hrs-textarea-newDesign-h textarea.sc-hrs-textarea-newDesign{cursor:not-allowed}";

const TextArea = class {
  constructor(hostRef) {
    Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.hrsChange = Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "hrsChange", 7);
    this.hrsTextAreaResize = Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "hrsTextAreaResize", 7);
    this.textareaId = `hrs-textarea-${textareaIds++}`;
    /**
     * the current state of either focused or unfocused
     */
    this.hasFocus = false;
    /**
     * If `on` user input will be autocapitalized
     */
    this.autocapitalize = 'off';
    /**
     * If `on` autocorrection will be applied to user input
     */
    this.autocorrect = 'off';
    /**
     * If `true` textarea will be given focus on render
     */
    this.autofocus = false;
    /**
     * Debounce rate for detecting user input changes
     */
    this.debounce = 0;
    /**
     * If `true` textarea element will be disabled and appropriate style will be applied
     */
    this.disabled = false;
    /**
     * The name attribute of the textarea, associated with labels
     */
    // eslint-disable-next-line no-invalid-this
    this.name = this.textareaId;
    /**
     * If `true` user has interacted with textarea
     */
    this.touched = false;
    /**
     * If `true`, the element height will increase based on the value to a maximum of maxrows height.
     */
    this.autogrow = false;
    /**
     * The maximum number of rows that the textarea can grow to for autogrow true.
     */
    this.maxrows = 1;
    /**
     * Textarea value, changes with user input
     */
    this.value = '';
    this.onInput = () => {
      if (this.nativeInput) {
        this.value = this.nativeInput.value;
      }
    };
    this.onBlur = () => {
      this.hasFocus = false;
    };
    this.onFocus = () => {
      if (!this.touched)
        this.touched = true;
      this.hasFocus = true;
    };
  }
  debounceChanged() {
    this.hrsChange = Object(_helpers_0e8d6178_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this.hrsChange, this.debounce);
  }
  /**
   * Update the native textarea element when the value changes
   */
  valueChanged() {
    const nativeInput = this.nativeInput;
    const value = this.getValue();
    if (nativeInput && nativeInput.value !== value) {
      nativeInput.value = value;
    }
    this.runAutoGrow();
    this.hrsChange.emit({ value });
  }
  /**
   * Set focus on specified `hrs-textarea`. Use this instead of global `textarea.focus()`
   */
  async setFocus() {
    if (this.nativeInput)
      this.nativeInput.focus();
  }
  /**
   * Sets blur on the native `textarea` in `hrs-textarea`. Use this instead of global `textarea.blur()`
   * @internal
   */
  async setBlur() {
    if (this.nativeInput)
      this.nativeInput.blur();
  }
  /**
   * Returns the native `<textarea>` element used under the hood
   */
  getInputElement() {
    return Promise.resolve(this.nativeInput);
  }
  runAutoGrow() {
    const { nativeInput, autogrow } = this;
    if (nativeInput && autogrow) {
      const lineHeight = +window.getComputedStyle(nativeInput).lineHeight.slice(0, -2); // parse off the 'px' at the end
      const numRows = Math.floor(nativeInput.scrollHeight / lineHeight); // scrollHeight sometimes off by a pixel
      if (numRows <= this.maxrows) {
        Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(() => {
          nativeInput.style.minHeight = '';
          const height = nativeInput.scrollHeight - (nativeInput.scrollHeight % lineHeight); // remove extra pixel(s) if any
          nativeInput.style.minHeight = height + 'px';
          this.hrsTextAreaResize.emit();
        });
      }
    }
  }
  getValue() {
    return this.value || '';
  }
  render() {
    const contextMode = Object(_ui_config_8be75a31_js__WEBPACK_IMPORTED_MODULE_2__["g"])();
    const { autocapitalize, autocorrect, autofocus, disabled, minlength, maxlength, name, placeholder, qa } = this;
    const value = this.getValue();
    return (Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { mode: contextMode, "aria-disabled": this.disabled ? 'true' : null, class: {
        'has-focus': this.hasFocus,
        'is-disabled': this.disabled
      }, "data-qa": qa ? qa : null }, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("textarea", { ref: el => this.nativeInput = el, disabled: disabled, autoCapitalize: autocapitalize, autoCorrect: autocorrect, autoFocus: autofocus, minLength: minlength, maxLength: maxlength, name: name, placeholder: placeholder || '', rows: 1, value: value, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus })));
  }
  get el() { return Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "debounce": ["debounceChanged"],
    "value": ["valueChanged"]
  }; }
};
let textareaIds = 0;
TextArea.style = {
  newDesign: textareaNewDesignCss
};



//# sourceMappingURL=hrs-textarea.entry.js.map

/***/ })

}]);
//# sourceMappingURL=65-es2015.js.map