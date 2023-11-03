(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-button_2.entry.js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-button_2.entry.js ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: hrs_button, hrs_spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hrs_button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hrs_spinner", function() { return Spinner; });
/* harmony import */ var _index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-be85d80d.js */ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/index-be85d80d.js");
/* harmony import */ var _helpers_0e8d6178_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-0e8d6178.js */ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/helpers-0e8d6178.js");
/* harmony import */ var _ui_config_8be75a31_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui-config-8be75a31.js */ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/ui-config-8be75a31.js");




const buttonNewDesignCss = "@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:400;src:url(\"../fonts/Roboto/light.woff\") format(\"woff\")}@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:500;src:url(\"../fonts/Roboto/regular.woff\") format(\"woff\")}@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:700;src:url(\"../fonts/Roboto/bold.woff\") format(\"woff\")}:root{--shadow-sm:0 3px 6px 0 rgba(var(--color-shadow), .3);--shadow-md:0 3px 12px 0 rgba(var(--color-shadow), .6);--shadow-lg:0 3px 18px 0 rgba(var(--color-shadow), .6);--shadow-header:0 0 8px -5px rgba(var(--color-shadow), .6);--shadow-footer:-1px 0 12px -3px rgba(var(--color-shadow), .6);--shadow-inset-input:inset 0 1px 2px rgba(0, 0, 0, .39), 0 -1px 1px var(--white), 0 1px 0 var(--white);--shadow-focus-outline:0 0 0 4px var(--color-outline);--shadow-focus-invalid:0 0 1px 2px var(--color-error);--shadow-hover-tab:0 4px 0 0 var(--gray-8);--shadow-selected-tab:0 4px 0 0 var(--color-primary-dark)}:host{font-family:var(--font)}/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;text-size-adjust:100%;}body{margin:0;}main{display:block}h1{margin:0.67em 0;font-size:2em;}hr{overflow:visible;height:0;box-sizing:content-box;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0;}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{appearance:textfield;outline-offset:-2px;}[type=search]::-webkit-search-decoration{appearance:none}::-webkit-file-upload-button{appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}.sronly{border:0;clip:rect(0, 0, 0, 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}:host{--color-primary:#0073af;--color-primary-dark:#00538d;--color-primary-light:#0197d6;--color-primary-50:rgba(0, 115, 175, .5);--color-primary-30:rgba(0, 115, 175, .3);--color-accent:#721c7e;--color-accent-dark:#56156f;--color-accent-light:#92278f;--white:#fff;--white-90:rgba(255, 255, 255, .9);--white-80:rgba(255, 255, 255, .8);--white-70:rgba(255, 255, 255, .7);--white-60:rgba(255, 255, 255, .6);--white-50:rgba(255, 255, 255, .5);--white-40:rgba(255, 255, 255, .4);--white-30:rgba(255, 255, 255, .3);--white-20:rgba(255, 255, 255, .2);--white-10:rgba(255, 255, 255, .1);--white-05:rgba(255, 255, 255, .05);--gray-1:#fcfcfc;--gray-2:#f5f5f5;--gray-3:#eee;--gray-4:#e0e0e0;--gray-5:#bdbdbd;--gray-6:#9e9e9e;--gray-7:#757575;--gray-8:#616161;--gray-9:#424242;--gray-10:#323232;--black:#212121;--color-sub-light:var(--gray-3);--color-sub-dark:var(--gray-7);--color-success:#0a853b;--color-info:#115ffb;--color-warning:#eb7100;--color-error:#ab1300;--color-risk-none:#5a7c79;--color-risk-low:#0ea84b;--color-risk-medium:var(--color-warning);--color-risk-high:#c62360;--color-notifications:#df1642;--color-congratulations:#ebb700;--color-great-job:#0ea84b;--color-focused-state:#56156f;--color-focused-state-bg:rgba(86, 21, 111, .6);--gradient-color-stop-1:var(--white);--gradient-color-stop-2:var(--color-primary-dark);--gradient-background:linear-gradient(180deg, var(--gradient-color-stop-1) 0%, var(--gradient-color-stop-2) 100%);--sidebar-gradient:linear-gradient(0deg, var(--color-primary-dark), var(--color-primary), var(--white));--color-shadow:0, 0, 0,;--color-backdrop:0, 0, 0, .4}:host{--font:\"Open Sans\", sans-serif;--font-weight-bold:700;--font-weight-semibold:600;--font-weight-regular:400}@media screen and (max-width: 599px){:host{--font-size-h1:1.25rem;--font-size-h2:1rem;--font-size-h3:.75rem;--font-size-b1:1rem;--font-size-b2:.875rem;--font-size-button:1rem;--line-height-h1:1.75rem;--line-height-h2:1.25rem;--line-height-h3:1rem;--line-height-b1:1.25rem;--line-height-b2:1.25rem;--line-height-button:1.25rem}}@media screen and (min-width: 600px){:host{--font-size-h1:1.75rem;--font-size-h2:1.25rem;--font-size-h3:1rem;--font-size-b1:1.25rem;--font-size-b2:1rem;--font-size-button:1.5rem;--line-height-h1:2.25rem;--line-height-h2:1.75rem;--line-height-h3:1.25rem;--line-height-b1:1.75rem;--line-height-b2:1.25rem;--line-height-button:1.75rem}}:host{--box-shadow-01:0 2px 6px rgba(var(--color-shadow) .2);--box-shadow-02:0 -2px 6px rgba(var(--color-shadow) .2);--box-shadow-03:0 4px 5px rgba(var(--color-shadow) .14), 0 1px 10px rgba(var(--color-shadow) .12), 0 2px 4px rgba(var(--color-shadow) .2);--box-shadow-04:5px 0 6px rgba(var(--color-shadow) .14);--box-shadow-05:0 4px 12px rgba(var(--color-shadow) .2);--box-shadow-06:inset 0 4px 4px rgba(var(--color-shadow) .25);--box-shadow-focus:0 0 0 4px var(--color-focused-state-bg)}:host{--z-index:1;--overflow:hidden;--height:2.5rem;--width:fit-content;--computed-width:auto;--min-width:5rem;--min-height:initial;--padding:.5rem;--border-color:initial;--border-color-active:initial;--border-radius-bottom-left:.3125rem;--border-radius-bottom-right:.3125rem;--border-radius-top-left:.3125rem;--border-radius-top-right:.3125rem;--border-radius:var(--border-radius-top-left) var(--border-radius-top-right) var(--border-radius-bottom-right) var(--border-radius-bottom-left);--border-style:initial;--border-width:initial;--border:none;--margin:0;--background:transparent;--background-active:var(--background);--background-hover:var(--background);--color:var(--white);--color-active:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:var(--shadow-md);--box-shadow-active:var(--shadow-sm);--box-shadow-focus:var(--shadow-focus-outline);--btn-icon-size:1.5rem;--btn-icon-margin:0 .2rem;--font-size:1rem;--font-weight:400;--opacity:1;--line-height:1;--text-transform:uppercase;background:var(--background);border-radius:var(--border-radius);box-shadow:var(--box-shadow);box-sizing:border-box;color:var(--color);display:inline-block;font-family:var(--font);font-kerning:none;height:var(--height);margin:var(--margin);min-width:var(--min-width);min-height:var(--min-height);pointer-events:auto;text-align:center;text-decoration:none;text-overflow:ellipsis;user-select:none;vertical-align:-webkit-baseline-middle;vertical-align:top;width:var(--width);z-index:var(--z-index)}.button-native{appearance:none;background:inherit;border:var(--border);border-color:var(--border-color);border-radius:var(--border-radius);border-style:var(--border-style);border-width:var(--border-width);box-sizing:border-box;color:inherit;contain:layout style;cursor:pointer;display:block;font:var(--font);font-weight:var(--font-weight);font-size:var(--font-size);height:100%;line-height:var(--line-height);opacity:var(--opacity);outline:none;overflow:var(--overflow);padding:var(--padding);position:relative;text-transform:var(--text-transform);transition:background-color 100ms ease-in, box-shadow 75ms ease-in;width:100%;z-index:0}.button-native::after{bottom:0;content:\"\";left:0;opacity:0;position:absolute;right:0;top:0}.button-native::-moz-focus-inner{border:0}.button-inner{align-items:center;display:flex;flex-flow:row nowrap;flex-shrink:0;height:100%;justify-content:center;position:relative;width:100%;z-index:1}:host(.is-small){--min-width:2.5em}:host(.is-large){--min-width:7em}:host(.is-expanded){--width:100%}:host(.has-focus){position:relative;z-index:2}:host(.is-active){background:var(--background-active);color:var(--color-active);transform:scale(0.99);transition:box-shadow 75ms ease}:host(.is-active) .button-native{border-color:var(--border-color-active)}:host(.is-active).button-native::after{background:inherit}:host(.button-disabled){--background-active:var(--background);--background-hover:var(--background);--color-active:var(--color);--color-hover:var(--color);box-shadow:none;cursor:default;cursor:not-allowed;opacity:0.5;pointer-events:none;transform:none;transition:none}.button-native[disabled],:host(.is-loading){pointer-events:none}@media (max-width: 599px){:host(.is-loading) hrs-spinner{--spinner-size:var(--spinner-size-sm)}}.button-inner{}.button-inner hrs-icon{--icon-size:var(--btn-icon-size);--icon-color:var(--btn-icon-color);margin:var(--btn-icon-margin);min-width:var(--icon-size)}.button-inner.icon-left{--btn-icon-margin:0 .25rem 0 0}.button-inner.icon-right{--btn-icon-margin:0 0 0 .25rem}@media (min-width: 600px){.button-inner.icon-left{--btn-icon-margin:0 .75rem 0 0}.button-inner.icon-right{--btn-icon-margin:0 0 0 .75rem}}:host(.has-icon-only){--btn-icon-size:1.5rem;--min-width:0;--padding:.4rem}:host(.has-icon-only) .button-native{width:var(--width)}:host(.has-icon-only) .button-inner hrs-icon{--icon-size:var(--btn-icon-size);margin:0}:host(.has-icon-only.btn-fab){--btn-icon-size:2rem}@media (min-width: 600px){:host(.has-icon-only.btn-fab){--btn-icon-size:3rem}}:host(.btn-action-icon) .button-inner hrs-icon{margin-left:0.2rem}:host{--font-weight:600;--box-shadow:none}@media (max-width: 599px){:host(hrs-button){--border-radius:.5rem;--padding:.5rem 1rem;--font-size:1rem;--height:2.25rem;--btn-icon-size:1rem}:host(.has-icon-only){--border-radius:.5rem;--btn-icon-size:1.25rem;--width:2.25rem;--height:2.25rem}}@media (min-width: 600px){:host(hrs-button){--border-radius:.75rem;--btn-icon-size:1.5rem;--padding:.75rem 1rem;--font-size:1.25rem;--height:3rem}:host(.has-icon-only){--border-radius:.75rem;--btn-icon-size:1.5rem;--width:3.5rem;--height:3rem}}:host(.btn-primary){--border:none;--background:var(--color-primary-light);--background-active:var(--color-primary-dark);--background-hover:var(--color-primary-light);--color-active:var(--white);--color-hover:var(--white);--color:var(--white)}:host(.btn-primary) hrs-spinner{--spinner-color:var(--white)}:host(.btn-secondary){--border-width:1px;--border-style:solid;--border-color:var(--color-primary-light);--border-color-active:var(--color-primary-dark);--box-sizing:border-box;--background-active:var(--white);--background-hover:var(--white);--background:var(--white);--color-active:var(--color-primary-dark);--color-hover:var(--color-primary-light);--color:var(--color-primary-light)}:host(.btn-secondary) hrs-spinner{--spinner-color:var(--color-primary-light)}@media (min-width: 600px){:host(.btn-secondary){--border-width:2px}}:host(.btn-action-icon){--padding:0}:host(.btn-action-icon) .button-inner hrs-icon{margin:auto}:host(.has-focus){--box-shadow:0 0 0 .25em var(--color-focused-state-bg)}:host(.is-active){--color:var(--color-active);--btn-icon-color:var(--color-active)}:host(.button-disabled){--border-width:2px;--border-style:solid;--border-color:var(--gray-5);--box-sizing:border-box;--background:var(--gray-1);--background-active:var(--color);--background-hover:var(--color);--color:var(--gray-5);--color-active:var(--gray-5);--color-hover:var(--gray-5)}:host(.button-disabled):host(.btn-action-icon){--border-style:none;--background:none}:host(.button-disabled) hrs-spinner{--spinner-color:var(--gray-5)}:host(.btn-toggle-on){--border:none;--border-color:unset;--border-color-active:unset;--border-width:unset;--border-style:unset;--background:var(--color-notifications);--background-hover:var(--color-notifications);--color:var(--white)}:host(.is-loading){--width:var(--computed-width)}";

const Button = class {
  constructor(hostRef) {
    Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.hrsFocus = Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "hrsFocus", 7);
    this.hrsBlur = Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "hrsBlur", 7);
    this.hasIconOnly = false;
    /**
     * Button alignment
     * @default `right`
     */
    this.align = 'right';
    /**
     * Button variant to render.
     * `action-icon` is for rendering an icon that is clickable WITH ZERO BUTTON STYLES (so, just an icon).
     * I.e. the menu button in the header is just an icon - it doesn't have any other button styles
     */
    this.variant = 'primary';
    /**
     * If `true` button width with be set to 100% relative to parent element
     */
    this.expand = false;
    /**
     * Icon alignment
     */
    this.iconAlign = 'right';
    /**
     * Button size
     */
    this.size = 'default';
    /**
     * Type of button
     * @default `button`
     */
    this.type = 'button';
    /**
     *  Use the computed value of the button's background to determine if the icon color should
     *  be `"light"` or `"dark"` or `"inherit"` (use value assigned to `hrs-button` `--color` property).
     */
    this.getIconColor = () => {
      if (this.icon) {
        if (this.iconColor) {
          if (this.iconColor === 'dark' || this.iconColor === 'light' || this.iconColor === 'inherit') {
            return this.iconColor;
          }
          else {
            // if the dev misinterprets the iconColor prop as any color they want, i.e. purple, then a warning will be logged to the console.
            console.warn(`Invalid icon color provided to component: ${this.iconColor} . Valid choices are 'light' or 'dark'`);
          }
        }
        let backgroundColor = window.getComputedStyle(this.el).backgroundColor;
        if (backgroundColor) {
          const isButtonDark = Object(_ui_config_8be75a31_js__WEBPACK_IMPORTED_MODULE_2__["i"])(backgroundColor);
          return isButtonDark ? 'light' : 'dark';
        }
      }
    };
    this.handleClick = (ev) => {
      if (this.type === 'button') ;
      else if (Object(_helpers_0e8d6178_js__WEBPACK_IMPORTED_MODULE_1__["h"])(this.el)) {
        // Climb DOM to find the closest `<form>` and
        // use JS to submit it if found.
        const form = this.el.closest('form');
        if (form) {
          ev.preventDefault();
          const fakeButton = document.createElement('button');
          fakeButton.type = this.type;
          fakeButton.style.display = 'none';
          form.appendChild(fakeButton);
          fakeButton.click();
          fakeButton.remove();
        }
      }
    };
    this.onFocus = () => {
      this.hrsFocus.emit();
    };
    this.onBlur = () => {
      this.hrsBlur.emit();
    };
  }
  handleLoading() {
    this.isLoading = !this.isLoading;
  }
  handleToggle() {
    this.isToggled = !this.isToggled;
    const newValues = this.isToggled ? this.toggleOpts : this.toggleDefaults;
    this.swapToggleValues(newValues);
  }
  componentWillLoad() {
    this.isLoading = this.loading;
    // Check if button has manually slotted text and, if so, assign to `text` prop
    if (!this.text && this.el.innerHTML) {
      this.text = this.el.innerHTML;
      this.el.innerHTML = '';
    }
    // Set the defaults for toggle states
    if (this.toggleOpts && !this.toggleDefaults)
      this.storeToggleDefaults();
  }
  componentWillRender() {
    // Check if button is icon only (no slotted text or elements) and set flag to resize
    this.hasIconOnly = this.icon && !this.text;
    this.iconColor = this.getIconColor();
  }
  componentDidLoad() {
    // Grabbing the button's calculated width before any changes to the loading toggle
    // so we can keep a consistent button size.
    if (this.el.clientWidth)
      this.el.style.setProperty('--computed-width', `${this.el.clientWidth}px`);
  }
  /**
   * Store default values so that they can be toggled back to if needed
   * @private
   */
  storeToggleDefaults() {
    this.toggleDefaults = {};
    Object.keys(this.toggleOpts).forEach((key) => {
      if (this[key])
        this.toggleDefaults[key] = this[key];
      if (this.toggleOpts.text)
        this.toggleDefaults.text = this.el.innerHTML;
    });
  }
  swapToggleValues(newValues) {
    if (newValues) {
      Object.keys(newValues).forEach((key) => {
        // Assign alternate prop values
        if (key !== 'class')
          this[key] = newValues[key];
      });
      // Swap text if present
      if (newValues.text !== undefined)
        this.el.innerHTML = newValues.text;
    }
    // Swap toggle state class if present
    if (this.toggleOpts && this.toggleOpts.class) {
      this.el.classList.toggle(this.toggleOpts.class);
    }
    else {
      this.el.classList.toggle('btn-toggle-on');
    }
  }
  calculateIconAlign(iconAlign, icon, text) {
    if (iconAlign === 'right') {
      return Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: `button-inner icon-${iconAlign}` }, text ? Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, text) : Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), icon ? Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-icon", { icon: icon }) : Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "icon" }));
    }
    else {
      return Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: `button-inner icon-${iconAlign}` }, icon ? Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-icon", { icon: icon }) : Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "icon" }), text ? Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, text) : Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null));
    }
  }
  render() {
    const contextMode = Object(_ui_config_8be75a31_js__WEBPACK_IMPORTED_MODULE_2__["g"])();
    const { align, variant, disabled, expand, hasIconOnly, icon, iconAlign, isLoading, qa, size, text, type } = this;
    return (Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { mode: contextMode, onClick: this.handleClick, "aria-disabled": disabled ? 'true' : null, "data-qa": qa ? qa : null, class: {
        [`btn-${variant}`]: true,
        'button-disabled': disabled,
        'has-icon-only': hasIconOnly,
        'hrs-activatable-instant': true,
        'hrs-activatable': true,
        'hrs-focusable': true,
        'is-loading': isLoading,
        'is-expanded': expand,
        [`is-${align}-aligned`]: align === 'left' || align === 'center',
        [`is-${size}`]: size !== 'default',
        [`icon-color-${this.iconColor}`]: !!icon
      } }, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: "button-native", part: "native", type: type, disabled: disabled, onFocus: this.onFocus, onBlur: this.onBlur }, isLoading
      ? Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-spinner", null)
      : this.calculateIconAlign(iconAlign, icon, text))));
  }
  get el() { return Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "loading": ["handleLoading"],
    "toggle": ["handleToggle"]
  }; }
};
Button.style = {
  newDesign: buttonNewDesignCss
};

const spinnerNewDesignCss = "@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:400;src:url(\"../fonts/Roboto/light.woff\") format(\"woff\")}@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:500;src:url(\"../fonts/Roboto/regular.woff\") format(\"woff\")}@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:700;src:url(\"../fonts/Roboto/bold.woff\") format(\"woff\")}:root{--shadow-sm:0 3px 6px 0 rgba(var(--color-shadow), .3);--shadow-md:0 3px 12px 0 rgba(var(--color-shadow), .6);--shadow-lg:0 3px 18px 0 rgba(var(--color-shadow), .6);--shadow-header:0 0 8px -5px rgba(var(--color-shadow), .6);--shadow-footer:-1px 0 12px -3px rgba(var(--color-shadow), .6);--shadow-inset-input:inset 0 1px 2px rgba(0, 0, 0, .39), 0 -1px 1px var(--white), 0 1px 0 var(--white);--shadow-focus-outline:0 0 0 4px var(--color-outline);--shadow-focus-invalid:0 0 1px 2px var(--color-error);--shadow-hover-tab:0 4px 0 0 var(--gray-8);--shadow-selected-tab:0 4px 0 0 var(--color-primary-dark)}:host{font-family:var(--font)}/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;text-size-adjust:100%;}body{margin:0;}main{display:block}h1{margin:0.67em 0;font-size:2em;}hr{overflow:visible;height:0;box-sizing:content-box;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0;}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{appearance:textfield;outline-offset:-2px;}[type=search]::-webkit-search-decoration{appearance:none}::-webkit-file-upload-button{appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}.sronly{border:0;clip:rect(0, 0, 0, 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}:host{--color-primary:#0073af;--color-primary-dark:#00538d;--color-primary-light:#0197d6;--color-primary-50:rgba(0, 115, 175, .5);--color-primary-30:rgba(0, 115, 175, .3);--color-accent:#721c7e;--color-accent-dark:#56156f;--color-accent-light:#92278f;--white:#fff;--white-90:rgba(255, 255, 255, .9);--white-80:rgba(255, 255, 255, .8);--white-70:rgba(255, 255, 255, .7);--white-60:rgba(255, 255, 255, .6);--white-50:rgba(255, 255, 255, .5);--white-40:rgba(255, 255, 255, .4);--white-30:rgba(255, 255, 255, .3);--white-20:rgba(255, 255, 255, .2);--white-10:rgba(255, 255, 255, .1);--white-05:rgba(255, 255, 255, .05);--gray-1:#fcfcfc;--gray-2:#f5f5f5;--gray-3:#eee;--gray-4:#e0e0e0;--gray-5:#bdbdbd;--gray-6:#9e9e9e;--gray-7:#757575;--gray-8:#616161;--gray-9:#424242;--gray-10:#323232;--black:#212121;--color-sub-light:var(--gray-3);--color-sub-dark:var(--gray-7);--color-success:#0a853b;--color-info:#115ffb;--color-warning:#eb7100;--color-error:#ab1300;--color-risk-none:#5a7c79;--color-risk-low:#0ea84b;--color-risk-medium:var(--color-warning);--color-risk-high:#c62360;--color-notifications:#df1642;--color-congratulations:#ebb700;--color-great-job:#0ea84b;--color-focused-state:#56156f;--color-focused-state-bg:rgba(86, 21, 111, .6);--gradient-color-stop-1:var(--white);--gradient-color-stop-2:var(--color-primary-dark);--gradient-background:linear-gradient(180deg, var(--gradient-color-stop-1) 0%, var(--gradient-color-stop-2) 100%);--sidebar-gradient:linear-gradient(0deg, var(--color-primary-dark), var(--color-primary), var(--white));--color-shadow:0, 0, 0,;--color-backdrop:0, 0, 0, .4}:host{--font:\"Open Sans\", sans-serif;--font-weight-bold:700;--font-weight-semibold:600;--font-weight-regular:400}@media screen and (max-width: 599px){:host{--font-size-h1:1.25rem;--font-size-h2:1rem;--font-size-h3:.75rem;--font-size-b1:1rem;--font-size-b2:.875rem;--font-size-button:1rem;--line-height-h1:1.75rem;--line-height-h2:1.25rem;--line-height-h3:1rem;--line-height-b1:1.25rem;--line-height-b2:1.25rem;--line-height-button:1.25rem}}@media screen and (min-width: 600px){:host{--font-size-h1:1.75rem;--font-size-h2:1.25rem;--font-size-h3:1rem;--font-size-b1:1.25rem;--font-size-b2:1rem;--font-size-button:1.5rem;--line-height-h1:2.25rem;--line-height-h2:1.75rem;--line-height-h3:1.25rem;--line-height-b1:1.75rem;--line-height-b2:1.25rem;--line-height-button:1.75rem}}:host{--box-shadow-01:0 2px 6px rgba(var(--color-shadow) .2);--box-shadow-02:0 -2px 6px rgba(var(--color-shadow) .2);--box-shadow-03:0 4px 5px rgba(var(--color-shadow) .14), 0 1px 10px rgba(var(--color-shadow) .12), 0 2px 4px rgba(var(--color-shadow) .2);--box-shadow-04:5px 0 6px rgba(var(--color-shadow) .14);--box-shadow-05:0 4px 12px rgba(var(--color-shadow) .2);--box-shadow-06:inset 0 4px 4px rgba(var(--color-shadow) .25);--box-shadow-focus:0 0 0 4px var(--color-focused-state-bg)}:host{--spinner-color:var(--color-primary);--spinner-size-sm:.2;--spinner-size-md:.3;--spinner-size-lg:.5;--spinner-size:var(--spinner-size-md);position:relative;display:flex;align-items:center;justify-content:center}:host(.is-small){--spinner-size:var(--spinner-size-sm)}:host(.is-large){--spinner-size:var(--spinner-size-lg)}.inner-spinner{--spinner-shadow-1:0 -3rem 0 .2rem, 2rem -2rem 0 0, 3rem 0 0 -1rem, 2rem 2rem 0 -1rem, 0 3rem 0 -1rem, -2rem 2rem 0 -1rem, -3rem 0 0 -1rem, -2rem -2rem 0 0;--spinner-shadow-2:0 -3rem 0 0, 2rem -2rem 0 .2rem, 3rem 0 0 0, 2rem 2rem 0 -1rem, 0 3rem 0 -1rem, -2rem 2rem 0 -1rem, -3rem 0 0 -1rem, -2rem -2rem 0 -1rem;--spinner-shadow-3:0 -3rem 0 -.5rem, 2rem -2rem 0 0, 3rem 0 0 .2rem, 2rem 2rem 0 0, 0 3rem 0 -1rem, -2rem 2rem 0 -1rem, -3rem 0 0 -1rem, -2rem -2rem 0 -1rem;--spinner-shadow-4:0 -3rem 0 -1rem, 2rem -2rem 0 -1rem, 3rem 0 0 0, 2rem 2rem 0 .2rem, 0 3rem 0 0, -2rem 2rem 0 -1rem, -3rem 0 0 -1rem, -2rem -2rem 0 -1rem;--spinner-shadow-5:0 -3rem 0 -1rem, 2rem -2rem 0 -1rem, 3rem 0 0 -1rem, 2rem 2rem 0 0, 0 3rem 0 .2rem, -2rem 2rem 0 0, -3rem 0 0 -1rem, -2rem -2rem 0 -1rem;--spinner-shadow-6:0 -3rem 0 -1rem, 2rem -2rem 0 -1rem, 3rem 0 0 -1rem, 2rem 2rem 0 -1rem, 0 3rem 0 0, -2rem 2rem 0 .2rem, -3rem 0 0 0, -2rem -2rem 0 -1rem;--spinner-shadow-7:0 -3rem 0 -1rem, 2rem -2rem 0 -1rem, 3rem 0 0 -1rem, 2rem 2rem 0 -1rem, 0 3rem 0 -1rem, -2rem 2rem 0 0, -3rem 0 0 .2rem, -2rem -2rem 0 0;--spinner-shadow-8:0 -3rem 0 0, 2rem -2rem 0 -1rem, 3rem 0 0 -1rem, 2rem 2rem 0 -1rem, 0 3rem 0 -1rem, -2rem 2rem 0 0, -3rem 0 0 0, -2rem -2rem 0 .2rem;position:absolute;width:1em;height:1em;border-radius:50%;color:var(--spinner-color);font-size:20px;animation:hrs-spin 1.3s infinite linear;transform:translateZ(0) scale(var(--spinner-size));}@keyframes hrs-spin{0%,100%{box-shadow:var(--spinner-shadow-1)}12.5%{box-shadow:var(--spinner-shadow-2)}25%{box-shadow:var(--spinner-shadow-3)}37.5%{box-shadow:var(--spinner-shadow-4)}50%{box-shadow:var(--spinner-shadow-5)}62.5%{box-shadow:var(--spinner-shadow-6)}75%{box-shadow:var(--spinner-shadow-7)}87.5%{box-shadow:var(--spinner-shadow-8)}}@keyframes hrs-spin{0%,100%{box-shadow:var(--spinner-shadow-1)}12.5%{box-shadow:var(--spinner-shadow-2)}25%{box-shadow:var(--spinner-shadow-3)}37.5%{box-shadow:var(--spinner-shadow-4)}50%{box-shadow:var(--spinner-shadow-5)}62.5%{box-shadow:var(--spinner-shadow-6)}75%{box-shadow:var(--spinner-shadow-7)}87.5%{box-shadow:var(--spinner-shadow-8)}}.sr-only{position:absolute;overflow:hidden;clip:rect(0, 0, 0, 0);width:1px;height:1px;padding:0;border:0;margin:-1px}";

const Spinner = class {
  constructor(hostRef) {
    Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /**
     * Size of the spinner
     */
    this.size = 'default';
    /**
     * Background color of parent element determines the spinner color to maximize contrast.
     * `hrs-spinner` will automatically find the parent element's bg color, but this is a very rough guess at best
     */
    this.bgColor = 'dark';
  }
  componentWillLoad() {
    const parentBG = window.getComputedStyle(this.el.parentElement).backgroundColor;
    if (parentBG) {
      const isParentDark = parentBG.match(/\d+/g).some((n) => parseInt(n) < 125);
      this.bgColor = isParentDark ? 'dark' : 'light';
    }
  }
  /**
   * Creates a classlist based on prop values passed in
   * @private
   */
  buildClassList() {
    const color = this.bgColor === 'light' ? 'dark' : 'light';
    const classes = [
      this.bgColor ? `is-${color}` : null,
      this.size !== 'default' ? `is-${this.size}` : null
    ];
    if (classes.length > 0)
      return classes.join(' ');
  }
  render() {
    const contextMode = Object(_ui_config_8be75a31_js__WEBPACK_IMPORTED_MODULE_2__["g"])();
    const classes = this.buildClassList();
    return (Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { mode: contextMode, class: classes, role: "alert", "aria-live": "assertive" }, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "inner-spinner" }, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", { class: "sr-only" }, "Loading..."))));
  }
  get el() { return Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
Spinner.style = {
  newDesign: spinnerNewDesignCss
};



//# sourceMappingURL=hrs-button_2.entry.js.map

/***/ })

}]);
//# sourceMappingURL=46-es2015.js.map