(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-fab.entry.js":
/*!************************************************************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-fab.entry.js ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: hrs_fab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hrs_fab", function() { return Fab; });
/* harmony import */ var _index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-be85d80d.js */ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/index-be85d80d.js");
/* harmony import */ var _ui_config_8be75a31_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-config-8be75a31.js */ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/ui-config-8be75a31.js");



const fabNewDesignCss = "@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:400;src:url(\"../fonts/Roboto/light.woff\") format(\"woff\")}@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:500;src:url(\"../fonts/Roboto/regular.woff\") format(\"woff\")}@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:700;src:url(\"../fonts/Roboto/bold.woff\") format(\"woff\")}:root{--shadow-sm:0 3px 6px 0 rgba(var(--color-shadow), .3);--shadow-md:0 3px 12px 0 rgba(var(--color-shadow), .6);--shadow-lg:0 3px 18px 0 rgba(var(--color-shadow), .6);--shadow-header:0 0 8px -5px rgba(var(--color-shadow), .6);--shadow-footer:-1px 0 12px -3px rgba(var(--color-shadow), .6);--shadow-inset-input:inset 0 1px 2px rgba(0, 0, 0, .39), 0 -1px 1px var(--white), 0 1px 0 var(--white);--shadow-focus-outline:0 0 0 4px var(--color-outline);--shadow-focus-invalid:0 0 1px 2px var(--color-error);--shadow-hover-tab:0 4px 0 0 var(--gray-8);--shadow-selected-tab:0 4px 0 0 var(--color-primary-dark)}:host{font-family:var(--font)}/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;text-size-adjust:100%;}body{margin:0;}main{display:block}h1{margin:0.67em 0;font-size:2em;}hr{overflow:visible;height:0;box-sizing:content-box;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0;}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{appearance:textfield;outline-offset:-2px;}[type=search]::-webkit-search-decoration{appearance:none}::-webkit-file-upload-button{appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}.sronly{border:0;clip:rect(0, 0, 0, 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}:host{--color-primary:#0073af;--color-primary-dark:#00538d;--color-primary-light:#0197d6;--color-primary-50:rgba(0, 115, 175, .5);--color-primary-30:rgba(0, 115, 175, .3);--color-accent:#721c7e;--color-accent-dark:#56156f;--color-accent-light:#92278f;--white:#fff;--white-90:rgba(255, 255, 255, .9);--white-80:rgba(255, 255, 255, .8);--white-70:rgba(255, 255, 255, .7);--white-60:rgba(255, 255, 255, .6);--white-50:rgba(255, 255, 255, .5);--white-40:rgba(255, 255, 255, .4);--white-30:rgba(255, 255, 255, .3);--white-20:rgba(255, 255, 255, .2);--white-10:rgba(255, 255, 255, .1);--white-05:rgba(255, 255, 255, .05);--gray-1:#fcfcfc;--gray-2:#f5f5f5;--gray-3:#eee;--gray-4:#e0e0e0;--gray-5:#bdbdbd;--gray-6:#9e9e9e;--gray-7:#757575;--gray-8:#616161;--gray-9:#424242;--gray-10:#323232;--black:#212121;--color-sub-light:var(--gray-3);--color-sub-dark:var(--gray-7);--color-success:#0a853b;--color-info:#115ffb;--color-warning:#eb7100;--color-error:#ab1300;--color-risk-none:#5a7c79;--color-risk-low:#0ea84b;--color-risk-medium:var(--color-warning);--color-risk-high:#c62360;--color-notifications:#df1642;--color-congratulations:#ebb700;--color-great-job:#0ea84b;--color-focused-state:#56156f;--color-focused-state-bg:rgba(86, 21, 111, .6);--gradient-color-stop-1:var(--white);--gradient-color-stop-2:var(--color-primary-dark);--gradient-background:linear-gradient(180deg, var(--gradient-color-stop-1) 0%, var(--gradient-color-stop-2) 100%);--sidebar-gradient:linear-gradient(0deg, var(--color-primary-dark), var(--color-primary), var(--white));--color-shadow:0, 0, 0,;--color-backdrop:0, 0, 0, .4}:host{--font:\"Open Sans\", sans-serif;--font-weight-bold:700;--font-weight-semibold:600;--font-weight-regular:400}@media screen and (max-width: 599px){:host{--font-size-h1:1.25rem;--font-size-h2:1rem;--font-size-h3:.75rem;--font-size-b1:1rem;--font-size-b2:.875rem;--font-size-button:1rem;--line-height-h1:1.75rem;--line-height-h2:1.25rem;--line-height-h3:1rem;--line-height-b1:1.25rem;--line-height-b2:1.25rem;--line-height-button:1.25rem}}@media screen and (min-width: 600px){:host{--font-size-h1:1.75rem;--font-size-h2:1.25rem;--font-size-h3:1rem;--font-size-b1:1.25rem;--font-size-b2:1rem;--font-size-button:1.5rem;--line-height-h1:2.25rem;--line-height-h2:1.75rem;--line-height-h3:1.25rem;--line-height-b1:1.75rem;--line-height-b2:1.25rem;--line-height-button:1.75rem}}:host{--box-shadow-01:0 2px 6px rgba(var(--color-shadow) .2);--box-shadow-02:0 -2px 6px rgba(var(--color-shadow) .2);--box-shadow-03:0 4px 5px rgba(var(--color-shadow) .14), 0 1px 10px rgba(var(--color-shadow) .12), 0 2px 4px rgba(var(--color-shadow) .2);--box-shadow-04:5px 0 6px rgba(var(--color-shadow) .14);--box-shadow-05:0 4px 12px rgba(var(--color-shadow) .2);--box-shadow-06:inset 0 4px 4px rgba(var(--color-shadow) .25);--box-shadow-focus:0 0 0 4px var(--color-focused-state-bg)}:host{--stack-z-index:5;--stack-bottom-offset:1rem;--stack-right-offset:1rem;--button-height:3.5rem;--button-width:3.5rem;--button-border-radius:100%;--button-border-color:var(--white);--button-border-width:2px;--button-border-style:var(--button-border-width) solid var(--button-border-color);--button-opacity:1;--button-background:var(--color-accent-light);--button-color:var(--white);--button-outline-color:var(--color-focused-state-bg);--button-outline-width:4px;--button-outline-style:var(--button-outline-width) solid var(--button-outline-color);--button-box-shadow:var(--box-shadow-03);--button-icon-color:var(--white);--button-icon-size:2rem;--list-bottom-padding:1rem;--list-item-background:var(--white);--list-item-box-shadow:var(--box-shadow-03);--list-item-width:90%;--list-item-border-radius:3.125rem;--list-item-padding-top:.75rem;--list-item-padding-right:.75rem;--list-item-padding-bottom:.75rem;--list-item-padding-left:1rem;--list-item-padding:var(--list-item-padding-top) var(--list-item-padding-right) var(--list-item-padding-bottom) var(--list-item-padding-left);--list-item-bottom-margin:1rem;--list-item-num-lines:2;--list-button-height:2.25rem;--list-button-width:2.25rem;--list-button-icon-size:1.25rem;--list-button-left-margin:.75rem}@media screen and (min-width: 600px){:host{--stack-bottom-offset:1.25rem;--stack-right-offset:1.25rem}}@media screen and (min-width: 600px){:host{--button-height:5rem;--button-width:5rem;--button-icon-size:3rem;--button-label-display:block;--button-label-padding:.25rem .75rem;--button-label-top-margin:.5rem}}@media screen and (min-width: 600px){:host{--list-bottom-padding:2rem;--list-item-width:29rem;--list-item-border-radius:5rem;--list-item-padding-top:1rem;--list-item-padding-right:1.625rem;--list-item-padding-bottom:1rem;--list-item-padding-left:2rem;--list-item-bottom-margin:2rem;--list-button-height:3rem;--list-button-width:3rem;--list-button-icon-size:1.5rem;--list-button-left-margin:1rem}}:host(.is-hidden){display:none}.fab_stack--button{position:absolute;bottom:var(--stack-bottom-offset);right:var(--stack-right-offset);z-index:var(--stack-z-index);appearance:none;display:flex;align-items:center;justify-content:center;overflow:visible;box-sizing:border-box;height:var(--button-height);width:var(--button-width);padding:0;border-radius:var(--button-border-radius);border:var(--button-border-style);outline:none;box-shadow:var(--button-box-shadow);background:var(--button-background);color:var(--button-color);opacity:var(--button-opacity);contain:layout style;cursor:pointer;pointer-events:auto;user-select:none;transition:background-color 300ms ease-in-out}.fab_stack--button hrs-icon{--icon-color:var(--button-icon-color);--icon-size:var(--button-icon-size);align-self:center}.fab_stack--button.is-toggled{--button-icon-color:var(--color-accent-light);--button-background:var(--white);--button-color:var(--color-accent-light)}.fab_stack--button:focus{box-shadow:0 0 0 4px var(--button-outline-color)}.fab_stack--button:active{--button-icon-color:var(--white);--button-background:var(--color-focused-state)}.fab_stack--list{position:absolute;bottom:calc(var(--stack-bottom-offset) + var(--button-height));right:var(--stack-right-offset);z-index:var(--stack-z-index);display:flex;flex-direction:column-reverse;align-items:flex-end;overflow-y:auto;width:100%;max-height:calc(100vh - var(--stack-bottom-offset) - var(--button-height) - var(--list-bottom-padding) - 1rem);padding-bottom:calc(var(--list-bottom-padding) - .5rem);border:none;outline:none;margin-bottom:0.5rem;background:transparent;opacity:1;transition:opacity 0.75s}.fab_stack--list.is-hidden{opacity:0}.fab_stack--list_item{display:flex;align-items:center;justify-content:space-between;box-sizing:border-box;width:var(--list-item-width);padding:var(--list-item-padding);border-radius:var(--list-item-border-radius);border:none;box-shadow:var(--list-item-box-shadow);background:var(--list-item-background)}.fab_stack--list_item:not(:first-child){margin-bottom:var(--list-item-bottom-margin)}.fab_stack--list_item.is-hidden{display:none}hrs-text{--background-color:var(--list-item-background);--text-num-lines:var(--list-item-num-lines)}.fab_stack--list_item_buttons{display:flex}.fab_stack--list_item_buttons .fab_stack--button{--button-height:var(--list-button-height);--button-width:var(--list-button-width);--button-icon-size:var(--list-button-icon-size);position:relative;bottom:0;right:0;z-index:initial;border:none;box-shadow:none;margin-left:var(--list-button-left-margin)}.fab_stack--list_item_buttons .fab_stack--button:focus{border:var(--button-border-style)}:host(.is-toggled){--stack-z-index:7}:host(.is-maximize-button){--button-icon-color:var(--color-accent);--button-background:var(--white);--button-border-color:var(--button-icon-color)}:host(.is-maximize-button) .fab_stack--button{transition:background-color 300ms ease-in-out;animation:maximizePop 400ms linear, outlinePulse 4000ms 450ms infinite ease-in-out}@keyframes maximizePop{0%{transform:scale(1)}50%{transform:scale(0.75)}100%{transform:scale(1.1)}}@keyframes outlinePulse{0%{box-shadow:0 0 2px 1px var(--color-primary-light)}50%{box-shadow:0 0 4px 4px var(--color-primary-light)}75%{box-shadow:0 0 1px 3px var(--color-primary-light)}100%{box-shadow:0 0 4px 1px var(--color-primary-light)}}";

const Fab = class {
  constructor(hostRef) {
    Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.hrsFabListButtonClick = Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "hrsFabListButtonClick", 7);
    this.hrsMaximizeModal = Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "hrsMaximizeModal", 7);
    this.hrsBackdropOpen = Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "hrsBackdropOpen", 7);
    this.hrsBackdropClose = Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "hrsBackdropClose", 7);
    this.isOpen = false;
    /**
     * If `true`, FAB is a maximize button to toggle modal minimization.
     * If 'false', FAB is a contact button to open/close contact menu.
     * @default: false
     */
    this.isMaximizeButton = false;
    /**
     * Specifies the configuration of the Fab list.
     * This should be an array of FabListItems, each consisting of the title to display
     * and an array of button descriptors. Each button descriptor includes an ID, the name
     * of the icon to use and a label for accessibility.
     */
    this.listItems = [];
    /**
     * Property to use to show or hide the Fab button and list.
     */
    this.isHidden = false;
    this.handleListButtonClick = (ev) => {
      ev.preventDefault();
      let buttonID = "";
      // @ts-ignore: EventTarget does not resolve to Element with Stencil's d.ts definitions
      let elem = ev.target;
      // if user clicked on icon, move up to button, otherwise we should not be here
      if (elem && elem.classList[0] != 'fab_stack--button') {
        elem = elem.parentElement;
        if (elem && elem.classList[0] != 'fab_stack--button') {
          elem = null;
        }
      }
      if (elem) {
        buttonID = elem.id;
        this.hrsFabListButtonClick.emit({
          event: ev,
          btnId: buttonID
        });
        this.isOpen = false;
        this.hrsBackdropClose.emit();
      }
    };
    this.handleClick = (ev) => {
      ev.preventDefault();
      if (this.isMaximizeButton) {
        this.hrsMaximizeModal.emit(true);
      }
      else {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
          this.hrsBackdropOpen.emit();
        }
        else {
          this.hrsBackdropClose.emit();
        }
      }
    };
    this.generateList = (isOpen) => {
      const { qa } = this;
      return (Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: {
          'fab_stack--list': true,
          'is-hidden': !isOpen
        } }, this.listItems.map((listItem, index) => {
        return (Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: {
            'fab_stack--list_item': true,
            'is-hidden': !isOpen
          }, "data-qa": `list_item--${index}` }, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-text", { font: "h2-semibold", qa: qa ? `${qa}--list-text` : `alert--list-text`, truncate: true }, listItem.title), Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "fab_stack--list_item_buttons" }, listItem.buttons.map((button, i) => {
          if (i <= 2) { // max of 3 buttons
            return (Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { id: button.id, class: "fab_stack--button", "aria-label": button.ariaLabel, "data-qa": qa ? `${qa}--list_btn-${i}` : `alert--list_btn-${i}`, onClick: this.handleListButtonClick }, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-icon", { icon: button.icon })));
          }
        }))));
      })));
    };
    this.maximizeModal = () => {
      this.hrsMaximizeModal.emit(true);
      this.isMaximizeButton = false;
    };
  }
  handleListItems() {
    this.forceRender = true;
  }
  handleHidden() {
    if (this.isHidden) {
      this.isOpen = false;
    }
    else {
      this.forceRender = true;
    }
  }
  onBackdropTap() {
    if (this.isOpen)
      this.isOpen = !this.isOpen;
    this.hrsBackdropClose.emit();
  }
  onMinimize() {
    this.isMaximizeButton = !this.isMaximizeButton;
  }
  renderMaximizeButton() {
    const { qa } = this;
    return (Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: {
        'fab_stack--button': true
      }, type: "button", "data-qa": qa ? `${qa}--btn-max` : `alert--btn-max`, onClick: this.maximizeModal }, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-icon", { icon: 'waveform-lines' })));
  }
  renderFab() {
    const { qa } = this;
    return (Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: {
        'fab_stack--button': true,
        'is-toggled': this.isOpen
      }, type: "button", "data-qa": qa ? `${qa}--btn-fab` : `alert--btn-fab`, onClick: this.handleClick }, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-icon", { icon: this.isOpen ? 'close-pcmt' : 'contact-clinician-pcmt' })));
  }
  render() {
    const contextMode = Object(_ui_config_8be75a31_js__WEBPACK_IMPORTED_MODULE_1__["g"])();
    const { isHidden, isOpen, isMaximizeButton, qa } = this;
    return (Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: {
        'is-toggled': isOpen,
        'is-hidden': isHidden,
        'is-maximize-button': isMaximizeButton
      }, mode: contextMode, "data-qa": qa ? qa : null }, isMaximizeButton ? this.renderMaximizeButton() : this.renderFab(), !isMaximizeButton ? this.generateList(isOpen) : null));
  }
  get el() { return Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "listItems": ["handleListItems"],
    "isHidden": ["handleHidden"]
  }; }
};
Fab.style = {
  newDesign: fabNewDesignCss
};



//# sourceMappingURL=hrs-fab.entry.js.map

/***/ })

}]);
//# sourceMappingURL=52-es5.js.map