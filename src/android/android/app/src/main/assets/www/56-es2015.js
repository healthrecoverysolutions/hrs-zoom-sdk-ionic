(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-input.entry.js":
/*!**************************************************************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-input.entry.js ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: hrs_input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hrs_input", function() { return Input; });
/* harmony import */ var _index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-be85d80d.js */ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/index-be85d80d.js");
/* harmony import */ var _helpers_0e8d6178_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-0e8d6178.js */ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/helpers-0e8d6178.js");
/* harmony import */ var _ui_config_8be75a31_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui-config-8be75a31.js */ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/ui-config-8be75a31.js");




const inputNewDesignCss = "@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:400;src:url(\"../fonts/Roboto/light.woff\") format(\"woff\")}@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:500;src:url(\"../fonts/Roboto/regular.woff\") format(\"woff\")}@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:700;src:url(\"../fonts/Roboto/bold.woff\") format(\"woff\")}.sc-hrs-input-newDesign:root{--shadow-sm:0 3px 6px 0 rgba(var(--color-shadow), .3);--shadow-md:0 3px 12px 0 rgba(var(--color-shadow), .6);--shadow-lg:0 3px 18px 0 rgba(var(--color-shadow), .6);--shadow-header:0 0 8px -5px rgba(var(--color-shadow), .6);--shadow-footer:-1px 0 12px -3px rgba(var(--color-shadow), .6);--shadow-inset-input:inset 0 1px 2px rgba(0, 0, 0, .39), 0 -1px 1px var(--white), 0 1px 0 var(--white);--shadow-focus-outline:0 0 0 4px var(--color-outline);--shadow-focus-invalid:0 0 1px 2px var(--color-error);--shadow-hover-tab:0 4px 0 0 var(--gray-8);--shadow-selected-tab:0 4px 0 0 var(--color-primary-dark)}.sc-hrs-input-newDesign-h{font-family:var(--font)}html.sc-hrs-input-newDesign{line-height:1.15;text-size-adjust:100%}body.sc-hrs-input-newDesign{margin:0}main.sc-hrs-input-newDesign{display:block}h1.sc-hrs-input-newDesign{margin:0.67em 0;font-size:2em}hr.sc-hrs-input-newDesign{overflow:visible;height:0;box-sizing:content-box}pre.sc-hrs-input-newDesign{font-family:monospace, monospace;font-size:1em}a.sc-hrs-input-newDesign{background-color:transparent}abbr[title].sc-hrs-input-newDesign{border-bottom:none;text-decoration:underline}b.sc-hrs-input-newDesign,strong.sc-hrs-input-newDesign{font-weight:bolder}code.sc-hrs-input-newDesign,kbd.sc-hrs-input-newDesign,samp.sc-hrs-input-newDesign{font-family:monospace, monospace;font-size:1em}small.sc-hrs-input-newDesign{font-size:80%}img.sc-hrs-input-newDesign{border-style:none}button.sc-hrs-input-newDesign,input.sc-hrs-input-newDesign,optgroup.sc-hrs-input-newDesign,select.sc-hrs-input-newDesign,textarea.sc-hrs-input-newDesign{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button.sc-hrs-input-newDesign,input.sc-hrs-input-newDesign{overflow:visible}button.sc-hrs-input-newDesign,select.sc-hrs-input-newDesign{text-transform:none}button.sc-hrs-input-newDesign,[type=button].sc-hrs-input-newDesign,[type=reset].sc-hrs-input-newDesign,[type=submit].sc-hrs-input-newDesign{appearance:button}button.sc-hrs-input-newDesign::-moz-focus-inner,[type=button].sc-hrs-input-newDesign::-moz-focus-inner,[type=reset].sc-hrs-input-newDesign::-moz-focus-inner,[type=submit].sc-hrs-input-newDesign::-moz-focus-inner{border-style:none;padding:0}button.sc-hrs-input-newDesign:-moz-focusring,[type=button].sc-hrs-input-newDesign:-moz-focusring,[type=reset].sc-hrs-input-newDesign:-moz-focusring,[type=submit].sc-hrs-input-newDesign:-moz-focusring{outline:1px dotted ButtonText}fieldset.sc-hrs-input-newDesign{padding:0.35em 0.75em 0.625em}legend.sc-hrs-input-newDesign{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress.sc-hrs-input-newDesign{vertical-align:baseline}textarea.sc-hrs-input-newDesign{overflow:auto}[type=checkbox].sc-hrs-input-newDesign,[type=radio].sc-hrs-input-newDesign{box-sizing:border-box;padding:0}[type=number].sc-hrs-input-newDesign::-webkit-inner-spin-button,[type=number].sc-hrs-input-newDesign::-webkit-outer-spin-button{height:auto}[type=search].sc-hrs-input-newDesign{appearance:textfield;outline-offset:-2px}[type=search].sc-hrs-input-newDesign::-webkit-search-decoration{appearance:none}.sc-hrs-input-newDesign::-webkit-file-upload-button{appearance:button;font:inherit}details.sc-hrs-input-newDesign{display:block}summary.sc-hrs-input-newDesign{display:list-item}template.sc-hrs-input-newDesign{display:none}[hidden].sc-hrs-input-newDesign{display:none}.sronly.sc-hrs-input-newDesign{border:0;clip:rect(0, 0, 0, 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sc-hrs-input-newDesign-h{--color-primary:#0073af;--color-primary-dark:#00538d;--color-primary-light:#0197d6;--color-primary-50:rgba(0, 115, 175, .5);--color-primary-30:rgba(0, 115, 175, .3);--color-accent:#721c7e;--color-accent-dark:#56156f;--color-accent-light:#92278f;--white:#fff;--white-90:rgba(255, 255, 255, .9);--white-80:rgba(255, 255, 255, .8);--white-70:rgba(255, 255, 255, .7);--white-60:rgba(255, 255, 255, .6);--white-50:rgba(255, 255, 255, .5);--white-40:rgba(255, 255, 255, .4);--white-30:rgba(255, 255, 255, .3);--white-20:rgba(255, 255, 255, .2);--white-10:rgba(255, 255, 255, .1);--white-05:rgba(255, 255, 255, .05);--gray-1:#fcfcfc;--gray-2:#f5f5f5;--gray-3:#eee;--gray-4:#e0e0e0;--gray-5:#bdbdbd;--gray-6:#9e9e9e;--gray-7:#757575;--gray-8:#616161;--gray-9:#424242;--gray-10:#323232;--black:#212121;--color-sub-light:var(--gray-3);--color-sub-dark:var(--gray-7);--color-success:#0a853b;--color-info:#115ffb;--color-warning:#eb7100;--color-error:#ab1300;--color-risk-none:#5a7c79;--color-risk-low:#0ea84b;--color-risk-medium:var(--color-warning);--color-risk-high:#c62360;--color-notifications:#df1642;--color-congratulations:#ebb700;--color-great-job:#0ea84b;--color-focused-state:#56156f;--color-focused-state-bg:rgba(86, 21, 111, .6);--gradient-color-stop-1:var(--white);--gradient-color-stop-2:var(--color-primary-dark);--gradient-background:linear-gradient(180deg, var(--gradient-color-stop-1) 0%, var(--gradient-color-stop-2) 100%);--sidebar-gradient:linear-gradient(0deg, var(--color-primary-dark), var(--color-primary), var(--white));--color-shadow:0, 0, 0,;--color-backdrop:0, 0, 0, .4}.sc-hrs-input-newDesign-h{--font:\"Open Sans\", sans-serif;--font-weight-bold:700;--font-weight-semibold:600;--font-weight-regular:400}@media screen and (max-width: 599px){.sc-hrs-input-newDesign-h{--font-size-h1:1.25rem;--font-size-h2:1rem;--font-size-h3:.75rem;--font-size-b1:1rem;--font-size-b2:.875rem;--font-size-button:1rem;--line-height-h1:1.75rem;--line-height-h2:1.25rem;--line-height-h3:1rem;--line-height-b1:1.25rem;--line-height-b2:1.25rem;--line-height-button:1.25rem}}@media screen and (min-width: 600px){.sc-hrs-input-newDesign-h{--font-size-h1:1.75rem;--font-size-h2:1.25rem;--font-size-h3:1rem;--font-size-b1:1.25rem;--font-size-b2:1rem;--font-size-button:1.5rem;--line-height-h1:2.25rem;--line-height-h2:1.75rem;--line-height-h3:1.25rem;--line-height-b1:1.75rem;--line-height-b2:1.25rem;--line-height-button:1.75rem}}.sc-hrs-input-newDesign-h{--box-shadow-01:0 2px 6px rgba(var(--color-shadow) .2);--box-shadow-02:0 -2px 6px rgba(var(--color-shadow) .2);--box-shadow-03:0 4px 5px rgba(var(--color-shadow) .14), 0 1px 10px rgba(var(--color-shadow) .12), 0 2px 4px rgba(var(--color-shadow) .2);--box-shadow-04:5px 0 6px rgba(var(--color-shadow) .14);--box-shadow-05:0 4px 12px rgba(var(--color-shadow) .2);--box-shadow-06:inset 0 4px 4px rgba(var(--color-shadow) .25);--box-shadow-focus:0 0 0 4px var(--color-focused-state-bg)}.sc-hrs-input-newDesign-h{position:relative;z-index:0;display:flex;align-items:center;flex:1;height:var(--input-height);width:var(--input-width);padding:var(--input-padding);border:var(--input-border);border-radius:var(--input-border-radius);background:var(--background);color:var(--color);box-shadow:var(--box-shadow)}hrs-form-item.sc-hrs-input-newDesign-h:not(.item-label),hrs-form-item:not(.item-label) .sc-hrs-input-newDesign-h{--padding-start:0}.native-input.sc-hrs-input-newDesign{display:inline-block;flex:1;box-sizing:border-box;height:100%;max-height:100%;width:var(--input-max-width);max-width:var(--input-max-width);border-radius:var(--input-border-radius);border:0;appearance:none;background:transparent;color:var(--color);padding:var(--native-input-padding);text-indent:var(--text-indent);text-transform:var(--text-transform);outline:none;box-shadow:none}.native-input.sc-hrs-input-newDesign::placeholder{color:var(--placeholder-color);font-family:inherit;font-size:var(--placeholder-font-size);font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity);text-indent:var(--text-indent)}.native-input.sc-hrs-input-newDesign:-webkit-autofill{background-color:transparent}.native-input.sc-hrs-input-newDesign::-ms-clear{display:none}.native-input[disabled].sc-hrs-input-newDesign{opacity:0.5}button.input--clear.sc-hrs-input-newDesign{display:var(--clear-btn-display);align-items:var(--clear-btn-flex-alignment);justify-content:var(--clear-btn-flex-justification);width:var(--clear-btn-size);height:var(--clear-btn-size);border-radius:var(--clear-btn-border-radius);border:var(--clear-btn-border);padding:var(--clear-btn-padding);margin-left:auto;appearance:none;background:transparent;cursor:pointer;visibility:hidden}button.input--clear.sc-hrs-input-newDesign:focus{outline:none;box-shadow:var(--clear-btn-focus-box-shadow)}button.input--clear.sc-hrs-input-newDesign:focus-visible{outline:none}button.input--clear.sc-hrs-input-newDesign hrs-icon.sc-hrs-input-newDesign{--icon-color:var(--close-icon-color);--icon-size:var(--close-icon-size)}.has-value.sc-hrs-input-newDesign-h button.input--clear.sc-hrs-input-newDesign{visibility:visible}.has-focus.sc-hrs-input-newDesign-h{position:relative;border:var(--focus-border);border-radius:var(--focus-border-radius);pointer-events:var(--focus-pointer-events);outline:none;box-shadow:var(--focus-box-shadow)}.is-invalid.sc-hrs-input-newDesign-h,.is-invalid.has-focus.sc-hrs-input-newDesign-h{border:var(--invalid-border)}label.sc-hrs-input-newDesign{margin-top:var(--label-margin-top);margin-left:var(--label-margin-left);margin-bottom:var(--label-margin-bottom);margin-right:var(--label-margin-right)}.sc-hrs-input-newDesign-h{--padding-bottom:.375rem;--padding-end:.375rem;--padding-start:.75rem;--padding-top:.375rem;--input-height:2.25rem;--input-width:100%;--input-min-width:4rem;--input-max-width:80%;--input-padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);--input-border-color:var(--color-sub-dark);--input-border-width:1px;--input-border:var(--input-border-width) solid var(--input-border-color);--input-border-radius:.5rem;--native-input-padding:0;--background:transparent;--box-shadow:none;--color:var(--black);--placeholder-color:initial;--placeholder-font-size:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--text-transform:uppercase;--text-indent:.3rem;--close-icon-size:1rem;--close-icon-color:var(--color-primary-light);--clear-btn-display:flex;--clear-btn-flex-alignment:center;--clear-btn-flex-justification:center;--clear-btn-size:1.5rem;--clear-btn-padding:0;--clear-btn-border-radius:.25rem;--clear-btn-border-width:1px;--clear-btn-border-color:var(--color-focused-state);--clear-btn-border:none;--clear-btn-focus-box-shadow:0 0 0 var(--clear-btn-border-width) var(--clear-btn-border-color);--focus-border:var(--input-border);--focus-shadow-spread:.125rem;--focus-box-shadow:0 0 0 var(--focus-shadow-spread) var(--color-focused-state-bg);--focus-border-radius:var(--input-border-radius);--focus-pointer-events:auto;--invalid-border:var(--input-border);--invalid-box-shadow:var(--focus-box-shadow);--font-weight:var(--font-weight-regular);--font-size:var(--font-size-b1);--line-height:var(--line-height-b1);font-weight:var(--font-weight);font-size:var(--font-size);line-height:var(--line-height)}@media screen and (min-width: 600px){.sc-hrs-input-newDesign-h{--padding-bottom:.25rem;--padding-end:.25rem;--padding-start:.75rem;--padding-top:.25rem;--input-height:3.75rem;--input-border-width:2px;--close-icon-size:1.6rem;--clear-btn-size:2.25rem;--clear-btn-border-radius:.5rem;--clear-btn-border-width:2px;--focus-shadow-spread:.25rem}}.has-value.sc-hrs-input-newDesign-h,.has-value.has-focus.sc-hrs-input-newDesign-h{--input-border-color:var(--color-primary-light)}.is-invalid.sc-hrs-input-newDesign-h,.is-invalid.has-focus.sc-hrs-input-newDesign-h{--input-border-color:var(--color-error)}.is-invalid.sc-hrs-input-newDesign-h button.input--clear.sc-hrs-input-newDesign hrs-icon.sc-hrs-input-newDesign,.is-invalid.has-focus.sc-hrs-input-newDesign-h button.input--clear.sc-hrs-input-newDesign hrs-icon.sc-hrs-input-newDesign{--icon-color:var(--color-error)}";

const Input = class {
  constructor(hostRef) {
    Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.hrsShowMessage = Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "hrsShowMessage", 7);
    this.hrsInput = Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "hrsInput", 7);
    this.hrsChange = Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "hrsChange", 7);
    this.hrsBlur = Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "hrsBlur", 7);
    this.hrsFocus = Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "hrsFocus", 7);
    this.hrsStyle = Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "hrsStyle", 7);
    this.hrsValid = Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "hrsValid", 7);
    this.inputId = `hrs-input-${inputIds++}`;
    this.didBlurAfterEdit = false;
    this.hasFocus = false;
    this.isValid = true;
    /**
     * If `on` user input will be autocapitalized
     */
    this.autocapitalize = 'off';
    /**
     * If `on` user will be presented with autocomplete options
     */
    this.autocomplete = 'off';
    /**
     * If `on` autocorrection will be applied to user input
     */
    this.autocorrect = 'off';
    /**
     * If `true` input will be given focus on render
     */
    this.autofocus = false;
    /**
     * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
     */
    this.clearInput = true;
    /**
     * Debounce rate for detecting user input changes
     */
    this.debounce = 0;
    /**
     * If `true` input element will be disabled and appropriate style will be applied
     */
    this.disabled = false;
    /**
     * Style class to apply to the infoMessage
     * @default 'error-message'
     */
    this.messageClass = 'error-message';
    /**
     * The name attribute of the input, associated with labels
     */
    // eslint-disable-next-line no-invalid-this
    this.name = this.inputId;
    /**
     * If `true` user input is required
     */
    this.required = false;
    /**
     * If `true`, the user cannot modify the value.
     */
    this.readonly = false;
    /**
     * If `true` user has interacted with input
     */
    this.touched = false;
    /**
     * Standard input types:
     * 'date' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url' | 'time' | 'week' | 'month' | 'datetime-local'
     */
    this.type = 'text';
    /**
     * Input value, changes with user input
     */
    this.value = '';
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value || '';
      }
      this.hrsInput.emit(ev);
    };
    this.onBlur = () => {
      this.hasFocus = false;
      this.focusChanged();
      this.emitStyle();
      this.hrsBlur.emit();
    };
    this.onFocus = () => {
      if (!this.touched)
        this.touched = true;
      this.hasFocus = true;
      this.focusChanged();
      this.emitStyle();
      this.hrsFocus.emit();
    };
    this.onKeydown = (ev) => {
      if (this.shouldClearOnEdit()) {
        // Did the input value change after it was blurred and edited?
        // Do not clear if user is hitting Enter to submit form
        if (this.didBlurAfterEdit && this.hasValue() && ev.key !== 'Enter') {
          // Clear the input
          this.clearTextInput();
        }
        // Reset the flag
        this.didBlurAfterEdit = false;
      }
    };
    this.clearTextOnEnter = (ev) => {
      if (ev.key === 'Enter') {
        this.clearTextInput(ev);
      }
    };
    this.clearTextInput = (ev) => {
      if (this.clearInput && !this.readonly && !this.disabled && ev) {
        ev.preventDefault();
        ev.stopPropagation();
        // Try to focus input again after pressing clear button
        this.setFocus();
      }
      if (this.value && this.value !== '') {
        this.value = '';
      }
      /**
       * This is needed for clearOnEdit
       * Otherwise the value will not be cleared
       * if user is inside the input
       */
      if (this.nativeInput) {
        this.nativeInput.value = '';
      }
    };
  }
  debounceChanged() {
    this.hrsChange = Object(_helpers_0e8d6178_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this.hrsChange, this.debounce);
  }
  disabledChanged() {
    this.emitStyle();
  }
  valueChanged() {
    this.emitStyle();
    // @ts-ignore
    this.hrsChange.emit({ value: (this.value === null ? this.value : this.value.toString()), el: this.el });
  }
  componentWillLoad() {
    // tabindex attr is passed to native-input and removed from
    // hrs-input so it won't tab twice
    if (this.el.hasAttribute('tabindex')) {
      const tabindex = this.el.getAttribute('tabindex');
      this.tabindex = tabindex !== null ? tabindex : undefined;
      this.el.removeAttribute('tabindex');
    }
    // If this element is required, signal associated `label`, `form-item`, and other elements to update
    if (this.required)
      Object(_helpers_0e8d6178_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this.el);
    if (this.infoMessage)
      this.hrsShowMessage.emit({ isValid: true, message: this.infoMessage, target: this.el });
  }
  connectedCallback() {
    this.emitStyle();
    this.debounceChanged();
    {
      document.dispatchEvent(new CustomEvent('hrsInputDidLoad', {
        detail: this.el
      }));
    }
  }
  disconnectedCallback() {
    {
      document.dispatchEvent(new CustomEvent('hrsInputDidUnload', {
        detail: this.el
      }));
    }
  }
  /**
   * Set focus on specified `hrs-input`. Use this instead of global `input.focus()`
   */
  async setFocus() {
    if (this.nativeInput)
      this.nativeInput.focus();
  }
  /**
   * Sets blur on the native `input` in `hrs-input`. Use this instead of global `input.blur()`
   * @internal
   */
  async setBlur() {
    if (this.nativeInput)
      this.nativeInput.blur();
  }
  /**
   * Returns the native `<input>` element used under the hood
   */
  getInputElement() {
    return Promise.resolve(this.nativeInput);
  }
  /**
   * Manually assign validation status to `hrs-input`
   * @param isValid
   */
  async setIsValid(isValid) {
    this.isValid = isValid;
  }
  shouldClearOnEdit() {
    const { type, clearOnEdit } = this;
    return clearOnEdit === undefined ? type === 'password' : clearOnEdit;
  }
  getValue() {
    return typeof this.value === 'number' ? this.value.toString() : (this.value || '').toString();
  }
  emitStyle() {
    this.hrsStyle.emit({
      'interactive': true,
      'input': true,
      'has-placeholder': this.placeholder != null,
      'has-value': this.hasValue(),
      'has-focus': this.hasFocus,
      'interactive-disabled': this.disabled,
    });
  }
  focusChanged() {
    if (this.required) {
      if (!this.hasFocus && !this.hasValue()) {
        this.isValid = false;
      }
      else if (!this.hasFocus && this.hasValue()) {
        this.isValid = true;
      }
      this.hrsValid.emit({ isValid: this.isValid, message: this.infoMessage, class: this.messageClass, target: this.el });
    }
  }
  hasValue() {
    return this.getValue().length > 0;
  }
  render() {
    const contextMode = Object(_ui_config_8be75a31_js__WEBPACK_IMPORTED_MODULE_2__["g"])();
    const { autocapitalize, autocomplete, autocorrect, autofocus, disabled, min, max, minlength, maxlength, name, pattern, placeholder, qa, required, readonly, size, step, tabindex, type, } = this;
    const value = this.getValue();
    const labelId = this.inputId + '-lbl';
    const label = Object(_helpers_0e8d6178_js__WEBPACK_IMPORTED_MODULE_1__["f"])(this.el);
    if (label) {
      label.id = labelId;
    }
    return (Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { mode: contextMode, "aria-disabled": this.disabled ? 'true' : null, class: {
        'has-value': this.hasValue(),
        'has-focus': this.hasFocus,
        'is-invalid': !this.isValid
      }, "data-qa": qa ? qa : null }, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { class: "native-input", ref: (input) => this.nativeInput = input, "aria-labelledby": labelId, disabled: disabled, autoCapitalize: autocapitalize, autoComplete: autocomplete, autoCorrect: autocorrect, autoFocus: autofocus, min: min, max: max, minLength: minlength, maxLength: maxlength, name: name, pattern: pattern, placeholder: placeholder || '', required: required, readonly: readonly, size: size, step: step, tabindex: tabindex, type: type, value: value, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, onKeyDown: this.onKeydown }), this.clearInput && !this.readonly && !this.disabled && (Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: 'input--clear', "aria-label": 'reset', type: 'button', onTouchStart: this.clearTextInput, onMouseDown: this.clearTextInput, onKeyDown: this.clearTextOnEnter, "data-qa": qa ? `${qa}--btn` : 'btn' }, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-icon", { icon: "delete-pcmt", qa: qa ? `${qa}--icon` : 'icon' })))));
  }
  get el() { return Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "debounce": ["debounceChanged"],
    "disabled": ["disabledChanged"],
    "value": ["valueChanged"]
  }; }
};
let inputIds = 0;
Input.style = {
  newDesign: inputNewDesignCss
};



//# sourceMappingURL=hrs-input.entry.js.map

/***/ })

}]);
//# sourceMappingURL=56-es2015.js.map