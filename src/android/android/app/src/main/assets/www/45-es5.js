(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-battery_2.entry.js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-battery_2.entry.js ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: hrs_battery, hrs_clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hrs_battery", function() { return Battery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hrs_clock", function() { return Clock; });
/* harmony import */ var _index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-be85d80d.js */ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/index-be85d80d.js");


const batteryNewDesignCss = "@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:400;src:url(\"../fonts/Roboto/light.woff\") format(\"woff\")}@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:500;src:url(\"../fonts/Roboto/regular.woff\") format(\"woff\")}@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:700;src:url(\"../fonts/Roboto/bold.woff\") format(\"woff\")}:root{--shadow-sm:0 3px 6px 0 rgba(var(--color-shadow), .3);--shadow-md:0 3px 12px 0 rgba(var(--color-shadow), .6);--shadow-lg:0 3px 18px 0 rgba(var(--color-shadow), .6);--shadow-header:0 0 8px -5px rgba(var(--color-shadow), .6);--shadow-footer:-1px 0 12px -3px rgba(var(--color-shadow), .6);--shadow-inset-input:inset 0 1px 2px rgba(0, 0, 0, .39), 0 -1px 1px var(--white), 0 1px 0 var(--white);--shadow-focus-outline:0 0 0 4px var(--color-outline);--shadow-focus-invalid:0 0 1px 2px var(--color-error);--shadow-hover-tab:0 4px 0 0 var(--gray-8);--shadow-selected-tab:0 4px 0 0 var(--color-primary-dark)}:host{font-family:var(--font)}/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;text-size-adjust:100%;}body{margin:0;}main{display:block}h1{margin:0.67em 0;font-size:2em;}hr{overflow:visible;height:0;box-sizing:content-box;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0;}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{appearance:textfield;outline-offset:-2px;}[type=search]::-webkit-search-decoration{appearance:none}::-webkit-file-upload-button{appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}.sronly{border:0;clip:rect(0, 0, 0, 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}:host{--color-primary:#0073af;--color-primary-dark:#00538d;--color-primary-light:#0197d6;--color-primary-50:rgba(0, 115, 175, .5);--color-primary-30:rgba(0, 115, 175, .3);--color-accent:#721c7e;--color-accent-dark:#56156f;--color-accent-light:#92278f;--white:#fff;--white-90:rgba(255, 255, 255, .9);--white-80:rgba(255, 255, 255, .8);--white-70:rgba(255, 255, 255, .7);--white-60:rgba(255, 255, 255, .6);--white-50:rgba(255, 255, 255, .5);--white-40:rgba(255, 255, 255, .4);--white-30:rgba(255, 255, 255, .3);--white-20:rgba(255, 255, 255, .2);--white-10:rgba(255, 255, 255, .1);--white-05:rgba(255, 255, 255, .05);--gray-1:#fcfcfc;--gray-2:#f5f5f5;--gray-3:#eee;--gray-4:#e0e0e0;--gray-5:#bdbdbd;--gray-6:#9e9e9e;--gray-7:#757575;--gray-8:#616161;--gray-9:#424242;--gray-10:#323232;--black:#212121;--color-sub-light:var(--gray-3);--color-sub-dark:var(--gray-7);--color-success:#0a853b;--color-info:#115ffb;--color-warning:#eb7100;--color-error:#ab1300;--color-risk-none:#5a7c79;--color-risk-low:#0ea84b;--color-risk-medium:var(--color-warning);--color-risk-high:#c62360;--color-notifications:#df1642;--color-congratulations:#ebb700;--color-great-job:#0ea84b;--color-focused-state:#56156f;--color-focused-state-bg:rgba(86, 21, 111, .6);--gradient-color-stop-1:var(--white);--gradient-color-stop-2:var(--color-primary-dark);--gradient-background:linear-gradient(180deg, var(--gradient-color-stop-1) 0%, var(--gradient-color-stop-2) 100%);--sidebar-gradient:linear-gradient(0deg, var(--color-primary-dark), var(--color-primary), var(--white));--color-shadow:0, 0, 0,;--color-backdrop:0, 0, 0, .4}:host{--font:\"Open Sans\", sans-serif;--font-weight-bold:700;--font-weight-semibold:600;--font-weight-regular:400}@media screen and (max-width: 599px){:host{--font-size-h1:1.25rem;--font-size-h2:1rem;--font-size-h3:.75rem;--font-size-b1:1rem;--font-size-b2:.875rem;--font-size-button:1rem;--line-height-h1:1.75rem;--line-height-h2:1.25rem;--line-height-h3:1rem;--line-height-b1:1.25rem;--line-height-b2:1.25rem;--line-height-button:1.25rem}}@media screen and (min-width: 600px){:host{--font-size-h1:1.75rem;--font-size-h2:1.25rem;--font-size-h3:1rem;--font-size-b1:1.25rem;--font-size-b2:1rem;--font-size-button:1.5rem;--line-height-h1:2.25rem;--line-height-h2:1.75rem;--line-height-h3:1.25rem;--line-height-b1:1.75rem;--line-height-b2:1.25rem;--line-height-button:1.75rem}}:host{--box-shadow-01:0 2px 6px rgba(var(--color-shadow) .2);--box-shadow-02:0 -2px 6px rgba(var(--color-shadow) .2);--box-shadow-03:0 4px 5px rgba(var(--color-shadow) .14), 0 1px 10px rgba(var(--color-shadow) .12), 0 2px 4px rgba(var(--color-shadow) .2);--box-shadow-04:5px 0 6px rgba(var(--color-shadow) .14);--box-shadow-05:0 4px 12px rgba(var(--color-shadow) .2);--box-shadow-06:inset 0 4px 4px rgba(var(--color-shadow) .25);--box-shadow-focus:0 0 0 4px var(--color-focused-state-bg)}:host{display:flex;align-items:center}:host hrs-icon{--icon-color:var(--white);--icon-size:2.5rem;margin-right:0.5rem}";

const Battery = class {
  constructor(hostRef) {
    Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /**
     * The battery level to be displayed.
     */
    this.batteryLevel = 100;
    /**
     * The color to use for rendering the battery and its percent.
     */
    this.color = 'white';
    /**
     * The font to use in rendering the battery percentage.
     */
    this.font = 'h1-semibold';
    this.batteryIcons = {
      100: 'icon-battery-100',
      75: 'icon-battery-75',
      50: 'icon-battery-50',
      25: 'icon-battery-25',
      0: 'icon-battery-0'
    };
  }
  connectedCallback() {
    this.setIcon();
  }
  handleLevelChange() {
    if (this.batteryLevel > 100)
      this.batteryLevel = 100;
    if (this.batteryLevel < 0)
      this.batteryLevel = 0;
    this.setIcon();
  }
  setIcon() {
    if (this.batteryLevel > 75) {
      this.batteryIcon = this.batteryIcons[100];
    }
    else if (this.batteryLevel <= 75 && this.batteryLevel > 50) {
      this.batteryIcon = this.batteryIcons[75];
    }
    else if (this.batteryLevel <= 50 && this.batteryLevel > 25) {
      this.batteryIcon = this.batteryIcons[50];
    }
    else if (this.batteryLevel <= 25 && this.batteryLevel > 5) {
      this.batteryIcon = this.batteryIcons[25];
    }
    else if (this.batteryLevel <= 5 && this.batteryLevel >= 0) {
      this.batteryIcon = this.batteryIcons[0];
    }
  }
  render() {
    return (Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-icon", { icon: this.batteryIcon }), Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-text", { color: this.color, font: this.font }, this.batteryLevel, "%")));
  }
  get el() { return Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "batteryLevel": ["handleLevelChange"]
  }; }
};
Battery.style = batteryNewDesignCss;

const clockCss = "@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:400;src:url(\"../fonts/Roboto/light.woff\") format(\"woff\")}@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:500;src:url(\"../fonts/Roboto/regular.woff\") format(\"woff\")}@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:700;src:url(\"../fonts/Roboto/bold.woff\") format(\"woff\")}:root{--shadow-sm:0 3px 6px 0 rgba(var(--color-shadow), .3);--shadow-md:0 3px 12px 0 rgba(var(--color-shadow), .6);--shadow-lg:0 3px 18px 0 rgba(var(--color-shadow), .6);--shadow-header:0 0 8px -5px rgba(var(--color-shadow), .6);--shadow-footer:-1px 0 12px -3px rgba(var(--color-shadow), .6);--shadow-inset-input:inset 0 1px 2px rgba(0, 0, 0, .39), 0 -1px 1px var(--white), 0 1px 0 var(--white);--shadow-focus-outline:0 0 0 4px var(--color-outline);--shadow-focus-invalid:0 0 1px 2px var(--color-error);--shadow-hover-tab:0 4px 0 0 var(--gray-8);--shadow-selected-tab:0 4px 0 0 var(--color-primary-dark)}:host{font-family:var(--font)}/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;text-size-adjust:100%;}body{margin:0;}main{display:block}h1{margin:0.67em 0;font-size:2em;}hr{overflow:visible;height:0;box-sizing:content-box;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0;}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{appearance:textfield;outline-offset:-2px;}[type=search]::-webkit-search-decoration{appearance:none}::-webkit-file-upload-button{appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}.sronly{border:0;clip:rect(0, 0, 0, 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}:host{--display:block;display:var(--display)}";

const Clock = class {
  constructor(hostRef) {
    Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /**
     *  Timezone in which the date and time should be shown. Default is browser timezone.
     */
    this.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    /**
     *  Whether the clock should tick or not
     */
    this.shouldUpdate = true;
    /**
     *  Clock color
     */
    this.color = 'white';
    /**
     * Clock font
     */
    this.font = 'h1-semibold';
    this.time = Date.now();
    this.locale = Intl.DateTimeFormat().resolvedOptions().locale;
    this.updateInterval = 1000;
  }
  getTime(time) {
    const currentDateString = new Date(time);
    return currentDateString.toLocaleTimeString(this.locale, { hour: 'numeric', minute: '2-digit', timeZone: this.timeZone });
  }
  connectedCallback() {
    if (this.shouldUpdate) {
      this.timer = window.setInterval(() => {
        this.time = Date.now();
      }, this.updateInterval);
    }
  }
  disconnectedCallback() {
    window.clearInterval(this.timer);
  }
  render() {
    const time = this.getTime(this.time);
    return (Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-text", { color: this.color, font: this.font }, time)));
  }
};
Clock.style = clockCss;



//# sourceMappingURL=hrs-battery_2.entry.js.map

/***/ })

}]);
//# sourceMappingURL=45-es5.js.map