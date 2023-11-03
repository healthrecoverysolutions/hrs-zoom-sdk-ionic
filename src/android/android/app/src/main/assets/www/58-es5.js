(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-list-item_4.entry.js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-list-item_4.entry.js ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: hrs_list_item, hrs_radio_group, hrs_tabs, hrs_tile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hrs_list_item", function() { return ListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hrs_radio_group", function() { return RadioGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hrs_tabs", function() { return Tabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hrs_tile", function() { return Tile; });
/* harmony import */ var _index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-be85d80d.js */ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/index-be85d80d.js");
/* harmony import */ var _ui_config_8be75a31_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-config-8be75a31.js */ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/ui-config-8be75a31.js");



const listItemNewDesignCss = "@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:400;src:url(\"../fonts/Roboto/light.woff\") format(\"woff\")}@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:500;src:url(\"../fonts/Roboto/regular.woff\") format(\"woff\")}@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:700;src:url(\"../fonts/Roboto/bold.woff\") format(\"woff\")}.sc-hrs-list-item:root{--shadow-sm:0 3px 6px 0 rgba(var(--color-shadow), .3);--shadow-md:0 3px 12px 0 rgba(var(--color-shadow), .6);--shadow-lg:0 3px 18px 0 rgba(var(--color-shadow), .6);--shadow-header:0 0 8px -5px rgba(var(--color-shadow), .6);--shadow-footer:-1px 0 12px -3px rgba(var(--color-shadow), .6);--shadow-inset-input:inset 0 1px 2px rgba(0, 0, 0, .39), 0 -1px 1px var(--white), 0 1px 0 var(--white);--shadow-focus-outline:0 0 0 4px var(--color-outline);--shadow-focus-invalid:0 0 1px 2px var(--color-error);--shadow-hover-tab:0 4px 0 0 var(--gray-8);--shadow-selected-tab:0 4px 0 0 var(--color-primary-dark)}.sc-hrs-list-item-h{font-family:var(--font)}html.sc-hrs-list-item{line-height:1.15;text-size-adjust:100%}body.sc-hrs-list-item{margin:0}main.sc-hrs-list-item{display:block}h1.sc-hrs-list-item{margin:0.67em 0;font-size:2em}hr.sc-hrs-list-item{overflow:visible;height:0;box-sizing:content-box}pre.sc-hrs-list-item{font-family:monospace, monospace;font-size:1em}a.sc-hrs-list-item{background-color:transparent}abbr[title].sc-hrs-list-item{border-bottom:none;text-decoration:underline}b.sc-hrs-list-item,strong.sc-hrs-list-item{font-weight:bolder}code.sc-hrs-list-item,kbd.sc-hrs-list-item,samp.sc-hrs-list-item{font-family:monospace, monospace;font-size:1em}small.sc-hrs-list-item{font-size:80%}img.sc-hrs-list-item{border-style:none}button.sc-hrs-list-item,input.sc-hrs-list-item,optgroup.sc-hrs-list-item,select.sc-hrs-list-item,textarea.sc-hrs-list-item{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button.sc-hrs-list-item,input.sc-hrs-list-item{overflow:visible}button.sc-hrs-list-item,select.sc-hrs-list-item{text-transform:none}button.sc-hrs-list-item,[type=button].sc-hrs-list-item,[type=reset].sc-hrs-list-item,[type=submit].sc-hrs-list-item{appearance:button}button.sc-hrs-list-item::-moz-focus-inner,[type=button].sc-hrs-list-item::-moz-focus-inner,[type=reset].sc-hrs-list-item::-moz-focus-inner,[type=submit].sc-hrs-list-item::-moz-focus-inner{border-style:none;padding:0}button.sc-hrs-list-item:-moz-focusring,[type=button].sc-hrs-list-item:-moz-focusring,[type=reset].sc-hrs-list-item:-moz-focusring,[type=submit].sc-hrs-list-item:-moz-focusring{outline:1px dotted ButtonText}fieldset.sc-hrs-list-item{padding:0.35em 0.75em 0.625em}legend.sc-hrs-list-item{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress.sc-hrs-list-item{vertical-align:baseline}textarea.sc-hrs-list-item{overflow:auto}[type=checkbox].sc-hrs-list-item,[type=radio].sc-hrs-list-item{box-sizing:border-box;padding:0}[type=number].sc-hrs-list-item::-webkit-inner-spin-button,[type=number].sc-hrs-list-item::-webkit-outer-spin-button{height:auto}[type=search].sc-hrs-list-item{appearance:textfield;outline-offset:-2px}[type=search].sc-hrs-list-item::-webkit-search-decoration{appearance:none}.sc-hrs-list-item::-webkit-file-upload-button{appearance:button;font:inherit}details.sc-hrs-list-item{display:block}summary.sc-hrs-list-item{display:list-item}template.sc-hrs-list-item{display:none}[hidden].sc-hrs-list-item{display:none}.sronly.sc-hrs-list-item{border:0;clip:rect(0, 0, 0, 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sc-hrs-list-item-h{--color-primary:#0073af;--color-primary-dark:#00538d;--color-primary-light:#0197d6;--color-primary-50:rgba(0, 115, 175, .5);--color-primary-30:rgba(0, 115, 175, .3);--color-accent:#721c7e;--color-accent-dark:#56156f;--color-accent-light:#92278f;--white:#fff;--white-90:rgba(255, 255, 255, .9);--white-80:rgba(255, 255, 255, .8);--white-70:rgba(255, 255, 255, .7);--white-60:rgba(255, 255, 255, .6);--white-50:rgba(255, 255, 255, .5);--white-40:rgba(255, 255, 255, .4);--white-30:rgba(255, 255, 255, .3);--white-20:rgba(255, 255, 255, .2);--white-10:rgba(255, 255, 255, .1);--white-05:rgba(255, 255, 255, .05);--gray-1:#fcfcfc;--gray-2:#f5f5f5;--gray-3:#eee;--gray-4:#e0e0e0;--gray-5:#bdbdbd;--gray-6:#9e9e9e;--gray-7:#757575;--gray-8:#616161;--gray-9:#424242;--gray-10:#323232;--black:#212121;--color-sub-light:var(--gray-3);--color-sub-dark:var(--gray-7);--color-success:#0a853b;--color-info:#115ffb;--color-warning:#eb7100;--color-error:#ab1300;--color-risk-none:#5a7c79;--color-risk-low:#0ea84b;--color-risk-medium:var(--color-warning);--color-risk-high:#c62360;--color-notifications:#df1642;--color-congratulations:#ebb700;--color-great-job:#0ea84b;--color-focused-state:#56156f;--color-focused-state-bg:rgba(86, 21, 111, .6);--gradient-color-stop-1:var(--white);--gradient-color-stop-2:var(--color-primary-dark);--gradient-background:linear-gradient(180deg, var(--gradient-color-stop-1) 0%, var(--gradient-color-stop-2) 100%);--sidebar-gradient:linear-gradient(0deg, var(--color-primary-dark), var(--color-primary), var(--white));--color-shadow:0, 0, 0,;--color-backdrop:0, 0, 0, .4}.sc-hrs-list-item-h{--font:\"Open Sans\", sans-serif;--font-weight-bold:700;--font-weight-semibold:600;--font-weight-regular:400}@media screen and (max-width: 599px){.sc-hrs-list-item-h{--font-size-h1:1.25rem;--font-size-h2:1rem;--font-size-h3:.75rem;--font-size-b1:1rem;--font-size-b2:.875rem;--font-size-button:1rem;--line-height-h1:1.75rem;--line-height-h2:1.25rem;--line-height-h3:1rem;--line-height-b1:1.25rem;--line-height-b2:1.25rem;--line-height-button:1.25rem}}@media screen and (min-width: 600px){.sc-hrs-list-item-h{--font-size-h1:1.75rem;--font-size-h2:1.25rem;--font-size-h3:1rem;--font-size-b1:1.25rem;--font-size-b2:1rem;--font-size-button:1.5rem;--line-height-h1:2.25rem;--line-height-h2:1.75rem;--line-height-h3:1.25rem;--line-height-b1:1.75rem;--line-height-b2:1.25rem;--line-height-button:1.75rem}}.sc-hrs-list-item-h{--box-shadow-01:0 2px 6px rgba(var(--color-shadow) .2);--box-shadow-02:0 -2px 6px rgba(var(--color-shadow) .2);--box-shadow-03:0 4px 5px rgba(var(--color-shadow) .14), 0 1px 10px rgba(var(--color-shadow) .12), 0 2px 4px rgba(var(--color-shadow) .2);--box-shadow-04:5px 0 6px rgba(var(--color-shadow) .14);--box-shadow-05:0 4px 12px rgba(var(--color-shadow) .2);--box-shadow-06:inset 0 4px 4px rgba(var(--color-shadow) .25);--box-shadow-focus:0 0 0 4px var(--color-focused-state-bg)}.sc-hrs-list-item-h{--display:block;--list-item-padding:.75rem;--list-item-radio-padding:.75rem;position:relative;display:var(--display);width:100%;padding:var(--list-item-padding);background:var(--white);border-bottom:2px solid var(--gray-5)}.sc-hrs-list-item-h hrs-radio.sc-hrs-list-item{--radio-padding:0 0 0 var(--list-item-radio-padding);--radio-label-width:100%;--radio-label-height:100%}.sc-hrs-list-item-h hrs-checkbox.sc-hrs-list-item{--checkbox-label-width:100%;--checkbox-label-height:100%}.sc-hrs-list-item-h hrs-radio.sc-hrs-list-item,.sc-hrs-list-item-h hrs-checkbox.sc-hrs-list-item{position:absolute;z-index:1;width:100%;height:100%}.sc-hrs-list-item-h hrs-text.item_subtitle.sc-hrs-list-item{--text-color:var(--gray-7);margin-top:0.25rem}.sc-hrs-list-item-h label.sc-hrs-list-item{margin:0}.sc-hrs-list-item-h .item_details.sc-hrs-list-item{display:flex;align-items:center;justify-content:space-between;flex-grow:1}.sc-hrs-list-item-h .item_descriptors.sc-hrs-list-item{display:flex;flex-direction:column;align-items:flex-start;justify-content:center}@media screen and (min-width: 600px){.sc-hrs-list-item-h{--list-item-padding:1rem;--list-item-radio-padding:1rem}}.item-radio.sc-hrs-list-item-h,.item-checkbox.sc-hrs-list-item-h{padding:0}.item-radio.sc-hrs-list-item-h .item_details.sc-hrs-list-item,.item-checkbox.sc-hrs-list-item-h .item_details.sc-hrs-list-item{margin:0 0 0 2rem;padding:var(--list-item-padding)}@media screen and (min-width: 600px){.item-radio.sc-hrs-list-item-h .item_details.sc-hrs-list-item,.item-checkbox.sc-hrs-list-item-h .item_details.sc-hrs-list-item{margin:0 0 0 2.9rem}}.item-checkbox.sc-hrs-list-item-h .item_details.sc-hrs-list-item{margin:0 0 0 2.15rem;min-height:3rem}@media screen and (min-width: 600px){.item-checkbox.sc-hrs-list-item-h .item_details.sc-hrs-list-item{margin:0 0 0 3.5rem;min-height:4.25rem}}";

const ListItem = class {
  constructor(hostRef) {
    Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.hrsListItemSelected = Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "hrsListItemSelected", 7);
    /**
     * Variant to render.
     */
    this.variant = 'default';
    /**
      * Title for the item (optional).
      */
    this.mainTitle = '';
    /**
      * Array of subtitles, a max of 3 will be displayed (optional).
      */
    this.subtitles = [];
    /**
      * URL for an image to display (optional).
      */
    this.imgUrl = '';
  }
  handleClick(ev, isImageClick = false) {
    // 'default' variant handled here
    // 'radio' and 'checkbox' variants are handled by the `hrsChange` listener
    if (this.variant == 'default') {
      // @ts-ignore: EventTarget does not resolve to Element with Stencil's d.ts definitions
      let elem = ev.target;
      let className = `item-${this.variant}`; // match class name in <Host>
      // move up the DOM to hrs-list-item
      if (elem) {
        while (!elem.classList.contains(className)) {
          elem = elem.parentElement;
        }
      }
      if (elem) {
        let itemID = elem.getAttribute('item-id');
        this.hrsListItemSelected.emit({
          event: ev,
          itemId: itemID,
          selected: true,
          isImageClick: isImageClick
        });
      }
    }
  }
  handleImageClick(ev) {
    if (ev && ev.detail) {
      this.handleClick(ev, true);
    }
  }
  handleCheckboxClick(ev) {
    // 'checkbox' & 'radio' event listener
    if (ev && ev.detail) {
      const { element, checked } = ev.detail;
      const id = element.getAttribute('input-id');
      this.hrsListItemSelected.emit({
        event: ev,
        itemId: id,
        selected: checked
      });
    }
  }
  render() {
    const contextMode = Object(_ui_config_8be75a31_js__WEBPACK_IMPORTED_MODULE_1__["g"])();
    const { checkboxDisabled, defaultChecked, imgUrl, itemId, mainTitle, subtitles, variant, qa } = this;
    return (Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { mode: contextMode, "data-qa": qa ? qa : null, class: {
        [`item-${variant}`]: true,
        'has-image': imgUrl != ''
      }, "item-id": itemId, onClick: this.handleClick.bind(this) }, variant == 'radio' ? Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-radio", { "input-id": itemId, "default-checked": defaultChecked, qa: qa ? `${qa}-radio` : `list_item-radio` }) : null, variant == 'checkbox' ? Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-checkbox", { "input-id": itemId, "default-checked": defaultChecked, "is-disabled": checkboxDisabled, qa: qa ? `${qa}-checkbox` : `list_item-checkbox` }) : null, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "item_details" }, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'item_descriptors' }, mainTitle ? Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { class: 'item_label' }, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-text", { font: "h2-bold" }, mainTitle)) : null, subtitles === null || subtitles === void 0 ? void 0 :
      subtitles.map((subTitle, i) => {
        if (i <= 2) { // max of 3 sub-titles
          return (Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-text", { class: "item_subtitle", font: "h3-regular" }, subTitle));
        }
      })), imgUrl ? Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-image", { variant: 'small-thumbnail', imageUrl: imgUrl }) : null)));
  }
  get el() { return Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
ListItem.style = listItemNewDesignCss;

const radioGroupNewDesignCss = "@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:400;src:url(\"../fonts/Roboto/light.woff\") format(\"woff\")}@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:500;src:url(\"../fonts/Roboto/regular.woff\") format(\"woff\")}@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:700;src:url(\"../fonts/Roboto/bold.woff\") format(\"woff\")}:root{--shadow-sm:0 3px 6px 0 rgba(var(--color-shadow), .3);--shadow-md:0 3px 12px 0 rgba(var(--color-shadow), .6);--shadow-lg:0 3px 18px 0 rgba(var(--color-shadow), .6);--shadow-header:0 0 8px -5px rgba(var(--color-shadow), .6);--shadow-footer:-1px 0 12px -3px rgba(var(--color-shadow), .6);--shadow-inset-input:inset 0 1px 2px rgba(0, 0, 0, .39), 0 -1px 1px var(--white), 0 1px 0 var(--white);--shadow-focus-outline:0 0 0 4px var(--color-outline);--shadow-focus-invalid:0 0 1px 2px var(--color-error);--shadow-hover-tab:0 4px 0 0 var(--gray-8);--shadow-selected-tab:0 4px 0 0 var(--color-primary-dark)}:host{font-family:var(--font)}/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;text-size-adjust:100%;}body{margin:0;}main{display:block}h1{margin:0.67em 0;font-size:2em;}hr{overflow:visible;height:0;box-sizing:content-box;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0;}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{appearance:textfield;outline-offset:-2px;}[type=search]::-webkit-search-decoration{appearance:none}::-webkit-file-upload-button{appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}.sronly{border:0;clip:rect(0, 0, 0, 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}:host{--color-primary:#0073af;--color-primary-dark:#00538d;--color-primary-light:#0197d6;--color-primary-50:rgba(0, 115, 175, .5);--color-primary-30:rgba(0, 115, 175, .3);--color-accent:#721c7e;--color-accent-dark:#56156f;--color-accent-light:#92278f;--white:#fff;--white-90:rgba(255, 255, 255, .9);--white-80:rgba(255, 255, 255, .8);--white-70:rgba(255, 255, 255, .7);--white-60:rgba(255, 255, 255, .6);--white-50:rgba(255, 255, 255, .5);--white-40:rgba(255, 255, 255, .4);--white-30:rgba(255, 255, 255, .3);--white-20:rgba(255, 255, 255, .2);--white-10:rgba(255, 255, 255, .1);--white-05:rgba(255, 255, 255, .05);--gray-1:#fcfcfc;--gray-2:#f5f5f5;--gray-3:#eee;--gray-4:#e0e0e0;--gray-5:#bdbdbd;--gray-6:#9e9e9e;--gray-7:#757575;--gray-8:#616161;--gray-9:#424242;--gray-10:#323232;--black:#212121;--color-sub-light:var(--gray-3);--color-sub-dark:var(--gray-7);--color-success:#0a853b;--color-info:#115ffb;--color-warning:#eb7100;--color-error:#ab1300;--color-risk-none:#5a7c79;--color-risk-low:#0ea84b;--color-risk-medium:var(--color-warning);--color-risk-high:#c62360;--color-notifications:#df1642;--color-congratulations:#ebb700;--color-great-job:#0ea84b;--color-focused-state:#56156f;--color-focused-state-bg:rgba(86, 21, 111, .6);--gradient-color-stop-1:var(--white);--gradient-color-stop-2:var(--color-primary-dark);--gradient-background:linear-gradient(180deg, var(--gradient-color-stop-1) 0%, var(--gradient-color-stop-2) 100%);--sidebar-gradient:linear-gradient(0deg, var(--color-primary-dark), var(--color-primary), var(--white));--color-shadow:0, 0, 0,;--color-backdrop:0, 0, 0, .4}:host{--font:\"Open Sans\", sans-serif;--font-weight-bold:700;--font-weight-semibold:600;--font-weight-regular:400}@media screen and (max-width: 599px){:host{--font-size-h1:1.25rem;--font-size-h2:1rem;--font-size-h3:.75rem;--font-size-b1:1rem;--font-size-b2:.875rem;--font-size-button:1rem;--line-height-h1:1.75rem;--line-height-h2:1.25rem;--line-height-h3:1rem;--line-height-b1:1.25rem;--line-height-b2:1.25rem;--line-height-button:1.25rem}}@media screen and (min-width: 600px){:host{--font-size-h1:1.75rem;--font-size-h2:1.25rem;--font-size-h3:1rem;--font-size-b1:1.25rem;--font-size-b2:1rem;--font-size-button:1.5rem;--line-height-h1:2.25rem;--line-height-h2:1.75rem;--line-height-h3:1.25rem;--line-height-b1:1.75rem;--line-height-b2:1.25rem;--line-height-button:1.75rem}}:host{--box-shadow-01:0 2px 6px rgba(var(--color-shadow) .2);--box-shadow-02:0 -2px 6px rgba(var(--color-shadow) .2);--box-shadow-03:0 4px 5px rgba(var(--color-shadow) .14), 0 1px 10px rgba(var(--color-shadow) .12), 0 2px 4px rgba(var(--color-shadow) .2);--box-shadow-04:5px 0 6px rgba(var(--color-shadow) .14);--box-shadow-05:0 4px 12px rgba(var(--color-shadow) .2);--box-shadow-06:inset 0 4px 4px rgba(var(--color-shadow) .25);--box-shadow-focus:0 0 0 4px var(--color-focused-state-bg)}";

const RadioGroup = class {
  constructor(hostRef) {
    Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.hrsRadioChanged = Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "hrsRadioChanged", 7);
    this.childRadios = new Map();
  }
  selectedRadioChanged() {
    if (this.selectedRadio !== undefined) {
      this.hrsRadioChanged.emit({
        radio: this.selectedRadio
      });
      this.selectionUpdated = true;
    }
  }
  /**
   * Method to reset the radio group so that none of the radio buttons within it are selected
   */
  async initRadioGroup() {
    this.childRadios.forEach((el) => {
      el.selected = false;
    });
    this.selectedRadio = '';
    this.lastSelected = '';
  }
  componentDidRender() {
    const children = this.el.querySelectorAll('hrs-radio');
    this.childRadios.clear();
    children.forEach((el) => {
      this.childRadios.set(el.getAttribute('id'), el);
      if (el.className.includes('is-checked')) {
        this.selectedRadio = el.getAttribute('id');
      }
    });
  }
  handleRadioClick(ev) {
    ev.preventDefault();
    const { element } = ev.detail;
    const id = element.getAttribute('id');
    if (this.childRadios.has(id)) {
      if (this.selectedRadio) {
        // Exit process if clicked tab is already selected;
        if (this.selectedRadio === id)
          return;
        this.lastSelected = this.selectedRadio;
        this.childRadios.get(this.lastSelected).selected = false;
      }
      this.selectedRadio = id;
      this.childRadios.get(this.selectedRadio).selected = true;
    }
    else {
      ev.preventDefault();
    }
  }
  render() {
    const contextMode = Object(_ui_config_8be75a31_js__WEBPACK_IMPORTED_MODULE_1__["g"])();
    return (Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { mode: contextMode, role: "radiolist" }, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
  }
  get el() { return Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "selectedRadio": ["selectedRadioChanged"]
  }; }
};
RadioGroup.style = {
  newDesign: radioGroupNewDesignCss
};

const tabsNewDesignCss = "@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:400;src:url(\"../fonts/Roboto/light.woff\") format(\"woff\")}@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:500;src:url(\"../fonts/Roboto/regular.woff\") format(\"woff\")}@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:700;src:url(\"../fonts/Roboto/bold.woff\") format(\"woff\")}.sc-hrs-tabs:root{--shadow-sm:0 3px 6px 0 rgba(var(--color-shadow), .3);--shadow-md:0 3px 12px 0 rgba(var(--color-shadow), .6);--shadow-lg:0 3px 18px 0 rgba(var(--color-shadow), .6);--shadow-header:0 0 8px -5px rgba(var(--color-shadow), .6);--shadow-footer:-1px 0 12px -3px rgba(var(--color-shadow), .6);--shadow-inset-input:inset 0 1px 2px rgba(0, 0, 0, .39), 0 -1px 1px var(--white), 0 1px 0 var(--white);--shadow-focus-outline:0 0 0 4px var(--color-outline);--shadow-focus-invalid:0 0 1px 2px var(--color-error);--shadow-hover-tab:0 4px 0 0 var(--gray-8);--shadow-selected-tab:0 4px 0 0 var(--color-primary-dark)}.sc-hrs-tabs-h{font-family:var(--font)}html.sc-hrs-tabs{line-height:1.15;text-size-adjust:100%}body.sc-hrs-tabs{margin:0}main.sc-hrs-tabs{display:block}h1.sc-hrs-tabs{margin:0.67em 0;font-size:2em}hr.sc-hrs-tabs{overflow:visible;height:0;box-sizing:content-box}pre.sc-hrs-tabs{font-family:monospace, monospace;font-size:1em}a.sc-hrs-tabs{background-color:transparent}abbr[title].sc-hrs-tabs{border-bottom:none;text-decoration:underline}b.sc-hrs-tabs,strong.sc-hrs-tabs{font-weight:bolder}code.sc-hrs-tabs,kbd.sc-hrs-tabs,samp.sc-hrs-tabs{font-family:monospace, monospace;font-size:1em}small.sc-hrs-tabs{font-size:80%}img.sc-hrs-tabs{border-style:none}button.sc-hrs-tabs,input.sc-hrs-tabs,optgroup.sc-hrs-tabs,select.sc-hrs-tabs,textarea.sc-hrs-tabs{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button.sc-hrs-tabs,input.sc-hrs-tabs{overflow:visible}button.sc-hrs-tabs,select.sc-hrs-tabs{text-transform:none}button.sc-hrs-tabs,[type=button].sc-hrs-tabs,[type=reset].sc-hrs-tabs,[type=submit].sc-hrs-tabs{appearance:button}button.sc-hrs-tabs::-moz-focus-inner,[type=button].sc-hrs-tabs::-moz-focus-inner,[type=reset].sc-hrs-tabs::-moz-focus-inner,[type=submit].sc-hrs-tabs::-moz-focus-inner{border-style:none;padding:0}button.sc-hrs-tabs:-moz-focusring,[type=button].sc-hrs-tabs:-moz-focusring,[type=reset].sc-hrs-tabs:-moz-focusring,[type=submit].sc-hrs-tabs:-moz-focusring{outline:1px dotted ButtonText}fieldset.sc-hrs-tabs{padding:0.35em 0.75em 0.625em}legend.sc-hrs-tabs{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress.sc-hrs-tabs{vertical-align:baseline}textarea.sc-hrs-tabs{overflow:auto}[type=checkbox].sc-hrs-tabs,[type=radio].sc-hrs-tabs{box-sizing:border-box;padding:0}[type=number].sc-hrs-tabs::-webkit-inner-spin-button,[type=number].sc-hrs-tabs::-webkit-outer-spin-button{height:auto}[type=search].sc-hrs-tabs{appearance:textfield;outline-offset:-2px}[type=search].sc-hrs-tabs::-webkit-search-decoration{appearance:none}.sc-hrs-tabs::-webkit-file-upload-button{appearance:button;font:inherit}details.sc-hrs-tabs{display:block}summary.sc-hrs-tabs{display:list-item}template.sc-hrs-tabs{display:none}[hidden].sc-hrs-tabs{display:none}.sronly.sc-hrs-tabs{border:0;clip:rect(0, 0, 0, 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sc-hrs-tabs-h{--color-primary:#0073af;--color-primary-dark:#00538d;--color-primary-light:#0197d6;--color-primary-50:rgba(0, 115, 175, .5);--color-primary-30:rgba(0, 115, 175, .3);--color-accent:#721c7e;--color-accent-dark:#56156f;--color-accent-light:#92278f;--white:#fff;--white-90:rgba(255, 255, 255, .9);--white-80:rgba(255, 255, 255, .8);--white-70:rgba(255, 255, 255, .7);--white-60:rgba(255, 255, 255, .6);--white-50:rgba(255, 255, 255, .5);--white-40:rgba(255, 255, 255, .4);--white-30:rgba(255, 255, 255, .3);--white-20:rgba(255, 255, 255, .2);--white-10:rgba(255, 255, 255, .1);--white-05:rgba(255, 255, 255, .05);--gray-1:#fcfcfc;--gray-2:#f5f5f5;--gray-3:#eee;--gray-4:#e0e0e0;--gray-5:#bdbdbd;--gray-6:#9e9e9e;--gray-7:#757575;--gray-8:#616161;--gray-9:#424242;--gray-10:#323232;--black:#212121;--color-sub-light:var(--gray-3);--color-sub-dark:var(--gray-7);--color-success:#0a853b;--color-info:#115ffb;--color-warning:#eb7100;--color-error:#ab1300;--color-risk-none:#5a7c79;--color-risk-low:#0ea84b;--color-risk-medium:var(--color-warning);--color-risk-high:#c62360;--color-notifications:#df1642;--color-congratulations:#ebb700;--color-great-job:#0ea84b;--color-focused-state:#56156f;--color-focused-state-bg:rgba(86, 21, 111, .6);--gradient-color-stop-1:var(--white);--gradient-color-stop-2:var(--color-primary-dark);--gradient-background:linear-gradient(180deg, var(--gradient-color-stop-1) 0%, var(--gradient-color-stop-2) 100%);--sidebar-gradient:linear-gradient(0deg, var(--color-primary-dark), var(--color-primary), var(--white));--color-shadow:0, 0, 0,;--color-backdrop:0, 0, 0, .4}.sc-hrs-tabs-h{--font:\"Open Sans\", sans-serif;--font-weight-bold:700;--font-weight-semibold:600;--font-weight-regular:400}@media screen and (max-width: 599px){.sc-hrs-tabs-h{--font-size-h1:1.25rem;--font-size-h2:1rem;--font-size-h3:.75rem;--font-size-b1:1rem;--font-size-b2:.875rem;--font-size-button:1rem;--line-height-h1:1.75rem;--line-height-h2:1.25rem;--line-height-h3:1rem;--line-height-b1:1.25rem;--line-height-b2:1.25rem;--line-height-button:1.25rem}}@media screen and (min-width: 600px){.sc-hrs-tabs-h{--font-size-h1:1.75rem;--font-size-h2:1.25rem;--font-size-h3:1rem;--font-size-b1:1.25rem;--font-size-b2:1rem;--font-size-button:1.5rem;--line-height-h1:2.25rem;--line-height-h2:1.75rem;--line-height-h3:1.25rem;--line-height-b1:1.75rem;--line-height-b2:1.25rem;--line-height-button:1.75rem}}.sc-hrs-tabs-h{--box-shadow-01:0 2px 6px rgba(var(--color-shadow) .2);--box-shadow-02:0 -2px 6px rgba(var(--color-shadow) .2);--box-shadow-03:0 4px 5px rgba(var(--color-shadow) .14), 0 1px 10px rgba(var(--color-shadow) .12), 0 2px 4px rgba(var(--color-shadow) .2);--box-shadow-04:5px 0 6px rgba(var(--color-shadow) .14);--box-shadow-05:0 4px 12px rgba(var(--color-shadow) .2);--box-shadow-06:inset 0 4px 4px rgba(var(--color-shadow) .25);--box-shadow-focus:0 0 0 4px var(--color-focused-state-bg)}.sc-hrs-tabs-h{--display:block;--width:100%;--height:fit-content;--padding:0;--container-box-shadow:var(--box-shadow-02);display:var(--display);padding:var(--padding);width:var(--width);height:var(--height);box-shadow:var(--container-box-shadow)}.icon-tabs.sc-hrs-tabs-h div.sc-hrs-tabs,.button-tabs.sc-hrs-tabs-h div.sc-hrs-tabs,.text-tabs.sc-hrs-tabs-h div.sc-hrs-tabs{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;cursor:pointer}.icon-tabs.sc-hrs-tabs-h,.text-tabs.sc-hrs-tabs-h{--display:grid;grid-template-columns:repeat(auto-fit, minmax(25%, 1fr));place-items:center}.icon-tabs.sc-hrs-tabs-h div.sc-hrs-tabs hrs-button.sc-hrs-tabs,.text-tabs.sc-hrs-tabs-h div.sc-hrs-tabs hrs-button.sc-hrs-tabs{--box-shadow:none}.icon-tabs.sc-hrs-tabs-h div.sc-hrs-tabs hrs-button.has-focus.sc-hrs-tabs hrs-button.sc-hrs-tabs,.text-tabs.sc-hrs-tabs-h div.sc-hrs-tabs hrs-button.has-focus.sc-hrs-tabs hrs-button.sc-hrs-tabs{--box-shadow:none}.icon-tabs.sc-hrs-tabs-h{--height:3.75rem}.icon-tabs.sc-hrs-tabs-h div.has-focus.sc-hrs-tabs{box-shadow:inset 0 0 0 2px var(--color-accent-dark)}.icon-tabs.sc-hrs-tabs-h div.sc-hrs-tabs hrs-button.sc-hrs-tabs{--btn-icon-color:var(--black);--btn-icon-size:1.5rem}@media (min-width: 600px){.icon-tabs.sc-hrs-tabs-h div.sc-hrs-tabs hrs-button.sc-hrs-tabs{--btn-icon-size:2rem}}.icon-tabs.sc-hrs-tabs-h div.sc-hrs-tabs .icon_tab--label.sc-hrs-tabs::first-letter{text-transform:uppercase}.icon-tabs.sc-hrs-tabs-h div.is-selected.sc-hrs-tabs::before{content:\"\";position:absolute;top:0;width:3rem;border-top:0.2rem solid var(--color-primary-light)}.icon-tabs.sc-hrs-tabs-h div.is-selected.sc-hrs-tabs hrs-button.sc-hrs-tabs{--btn-icon-color:var(--color-primary-light)}@media (min-width: 600px){.icon-tabs.sc-hrs-tabs-h div.sc-hrs-tabs{flex-direction:row;justify-content:center}.icon-tabs.sc-hrs-tabs-h div.sc-hrs-tabs hrs-button.sc-hrs-tabs{--width:3rem}.icon-tabs.sc-hrs-tabs-h div.is-selected.sc-hrs-tabs::before{content:\"\";position:absolute;top:0;width:8.5rem;border-top:0.3rem solid var(--color-primary-light)}}@media (min-width: 600px){.icon-tabs.sc-hrs-tabs-h{--height:4.5rem}}.text-tabs.sc-hrs-tabs-h{--height:2.75rem;--container-box-shadow:var(--box-shadow-01);background:var(--color-primary-dark)}.text-tabs.sc-hrs-tabs-h div.sc-hrs-tabs{padding:0.25rem}.text-tabs.sc-hrs-tabs-h div.sc-hrs-tabs hrs-button.sc-hrs-tabs{--font-weight:var(--font-weight-regular);--font-size:var(--font-size-b1);--line-height:var(--line-height-b1);font-weight:var(--font-weight);font-size:var(--font-size);line-height:var(--line-height);--border-radius:0;--background:inherit;--background-active:inherit;--color:var(--white);--color-active:var(--white);--min-height:var(--line-height);--height:var(--min-height);--text-transform:none}.text-tabs.sc-hrs-tabs-h div.has-focus.sc-hrs-tabs{background:var(--color-accent-dark);border:0.125rem solid var(--white)}.text-tabs.sc-hrs-tabs-h div.is-selected.sc-hrs-tabs{border-bottom:0.25rem solid var(--white);padding-bottom:0}.text-tabs.sc-hrs-tabs-h div.is-selected.sc-hrs-tabs hrs-button.sc-hrs-tabs{--font-weight:var(--font-weight-semibold);--font-size:var(--font-size-h2);--line-height:var(--line-height-h2);font-weight:var(--font-weight);font-size:var(--font-size);line-height:var(--line-height)}.text-tabs.sc-hrs-tabs-h div.is-selected.has-focus.sc-hrs-tabs{padding-bottom:0.125rem}.button-tabs.sc-hrs-tabs-h{--display:flex;--container-box-shadow:none;flex-direction:column;flex-wrap:nowrap;align-items:center;justify-content:flex-start}.button-tabs.sc-hrs-tabs-h div.sc-hrs-tabs{margin-bottom:1rem;width:100%}.button-tabs.sc-hrs-tabs-h div.sc-hrs-tabs:last-child{margin-bottom:0}.button-tabs.sc-hrs-tabs-h div.sc-hrs-tabs hrs-button.sc-hrs-tabs{--font-weight:var(--font-weight-semibold);--font-size:var(--font-size-h2);--line-height:var(--line-height-h2);font-weight:var(--font-weight);font-size:var(--font-size);line-height:var(--line-height);--background:var(--white);--background-active:var(--white);--border:none;--border-radius:1rem;--color:var(--color-primary);--color-active:var(--color-primary);--text-transform:none;--padding:0;--width:100%}.button-tabs.sc-hrs-tabs-h div.is-selected.sc-hrs-tabs hrs-button.sc-hrs-tabs{--background:var(--color-primary-dark);--background-active:var(--color-primary-dark);--color:var(--white);--color-active:var(--white)}";

const Tabs = class {
  constructor(hostRef) {
    Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.hrsNavTabSelected = Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "hrsNavTabSelected", 7);
    this.isNavTabSelected = {};
    /**
     * An array of strings indicating which tabs to enable for the current user.
     * The 'home' tab is included by default but can be overridden by passing a new array
     */
    this.enabledTabs = [{ title: 'home', id: 'home', icon: 'home' }];
    /**
     * The tabs variant to render.
     * @default 'icon-tabs'
     */
    this.variant = 'icon-tabs';
    this.handleNavTabClick = (event, tab) => {
      if (this.handler)
        this.handler();
      // Clear last selection
      if (this._selectedTab)
        this.isNavTabSelected[this._selectedTab.id] = false;
      // Select new
      this.isNavTabSelected[tab.id] = true;
      // Set new _selectedTab
      this._selectedTab = tab;
      // Emit event detail
      this.hrsNavTabSelected.emit({ el: this.el, event, tab });
    };
  }
  handleSelectTab() {
    const event = new CustomEvent('hrsNavTabSelected');
    this.handleNavTabClick(event, this.selectedTab);
  }
  componentWillLoad() {
    if (this.enabledTabs) {
      // Set all tabs to false except the first tab which is `selected` by default
      this.enabledTabs.forEach((tab, idx) => {
        if (this.selectedTab) {
          if (this.selectedTab.id === tab.id) {
            this.isNavTabSelected[this.selectedTab.id] = true;
            return;
          }
          this.isNavTabSelected[tab.id] = false;
        }
        else {
          this.isNavTabSelected[tab.id] = idx == 0;
        }
      });
      this._selectedTab = this.selectedTab ? this.selectedTab : this.enabledTabs[0];
      const event = new CustomEvent('tabsInit:tabSelected');
      this.hrsNavTabSelected.emit({ el: this.el, event, tab: this._selectedTab });
    }
  }
  getTabSelectedValue(tab) {
    return this.isNavTabSelected[tab];
  }
  render() {
    const contextMode = Object(_ui_config_8be75a31_js__WEBPACK_IMPORTED_MODULE_1__["g"])();
    const { enabledTabs, variant, qa } = this;
    return (Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { mode: contextMode, "data-qa": qa ? qa : null, class: {
        [`${variant}`]: true
      } }, enabledTabs.map((tabDetail, index) => {
      const { id, icon, title } = tabDetail;
      return (Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: {
          'is-selected': this.getTabSelectedValue(id),
          'hrs-activatable': true,
          'hrs-focusable': true
        }, onClick: (evt) => this.handleNavTabClick(evt, tabDetail), "data-qa": qa ? `${qa}--tab-${index}` : `tab-${index}` }, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-button", { variant: variant == 'icon-tabs' ? 'action-icon' : 'primary', icon: variant == 'icon-tabs' ? `${icon}-${this.getTabSelectedValue(id) ? 'solid' : 'outline'}` : null, text: variant !== 'icon-tabs' ? `${title}` : null, qa: qa ? `${qa}--btn-${index}` : `btn-${index}` }), variant == 'icon-tabs' ?
        Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-text", { font: "h3-regular", class: 'icon_tab--label', qa: qa ? `${qa}--text-${index}` : `text-${index}` }, title) : null));
    })));
  }
  get el() { return Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "selectedTab": ["handleSelectTab"]
  }; }
};
Tabs.style = tabsNewDesignCss;

const tileNewDesignCss = "@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:400;src:url(\"../fonts/Roboto/light.woff\") format(\"woff\")}@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:500;src:url(\"../fonts/Roboto/regular.woff\") format(\"woff\")}@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:700;src:url(\"../fonts/Roboto/bold.woff\") format(\"woff\")}:root{--shadow-sm:0 3px 6px 0 rgba(var(--color-shadow), .3);--shadow-md:0 3px 12px 0 rgba(var(--color-shadow), .6);--shadow-lg:0 3px 18px 0 rgba(var(--color-shadow), .6);--shadow-header:0 0 8px -5px rgba(var(--color-shadow), .6);--shadow-footer:-1px 0 12px -3px rgba(var(--color-shadow), .6);--shadow-inset-input:inset 0 1px 2px rgba(0, 0, 0, .39), 0 -1px 1px var(--white), 0 1px 0 var(--white);--shadow-focus-outline:0 0 0 4px var(--color-outline);--shadow-focus-invalid:0 0 1px 2px var(--color-error);--shadow-hover-tab:0 4px 0 0 var(--gray-8);--shadow-selected-tab:0 4px 0 0 var(--color-primary-dark)}:host{font-family:var(--font)}/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;text-size-adjust:100%;}body{margin:0;}main{display:block}h1{margin:0.67em 0;font-size:2em;}hr{overflow:visible;height:0;box-sizing:content-box;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0;}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{appearance:textfield;outline-offset:-2px;}[type=search]::-webkit-search-decoration{appearance:none}::-webkit-file-upload-button{appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}.sronly{border:0;clip:rect(0, 0, 0, 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}:host{--color-primary:#0073af;--color-primary-dark:#00538d;--color-primary-light:#0197d6;--color-primary-50:rgba(0, 115, 175, .5);--color-primary-30:rgba(0, 115, 175, .3);--color-accent:#721c7e;--color-accent-dark:#56156f;--color-accent-light:#92278f;--white:#fff;--white-90:rgba(255, 255, 255, .9);--white-80:rgba(255, 255, 255, .8);--white-70:rgba(255, 255, 255, .7);--white-60:rgba(255, 255, 255, .6);--white-50:rgba(255, 255, 255, .5);--white-40:rgba(255, 255, 255, .4);--white-30:rgba(255, 255, 255, .3);--white-20:rgba(255, 255, 255, .2);--white-10:rgba(255, 255, 255, .1);--white-05:rgba(255, 255, 255, .05);--gray-1:#fcfcfc;--gray-2:#f5f5f5;--gray-3:#eee;--gray-4:#e0e0e0;--gray-5:#bdbdbd;--gray-6:#9e9e9e;--gray-7:#757575;--gray-8:#616161;--gray-9:#424242;--gray-10:#323232;--black:#212121;--color-sub-light:var(--gray-3);--color-sub-dark:var(--gray-7);--color-success:#0a853b;--color-info:#115ffb;--color-warning:#eb7100;--color-error:#ab1300;--color-risk-none:#5a7c79;--color-risk-low:#0ea84b;--color-risk-medium:var(--color-warning);--color-risk-high:#c62360;--color-notifications:#df1642;--color-congratulations:#ebb700;--color-great-job:#0ea84b;--color-focused-state:#56156f;--color-focused-state-bg:rgba(86, 21, 111, .6);--gradient-color-stop-1:var(--white);--gradient-color-stop-2:var(--color-primary-dark);--gradient-background:linear-gradient(180deg, var(--gradient-color-stop-1) 0%, var(--gradient-color-stop-2) 100%);--sidebar-gradient:linear-gradient(0deg, var(--color-primary-dark), var(--color-primary), var(--white));--color-shadow:0, 0, 0,;--color-backdrop:0, 0, 0, .4}:host{--font:\"Open Sans\", sans-serif;--font-weight-bold:700;--font-weight-semibold:600;--font-weight-regular:400}@media screen and (max-width: 599px){:host{--font-size-h1:1.25rem;--font-size-h2:1rem;--font-size-h3:.75rem;--font-size-b1:1rem;--font-size-b2:.875rem;--font-size-button:1rem;--line-height-h1:1.75rem;--line-height-h2:1.25rem;--line-height-h3:1rem;--line-height-b1:1.25rem;--line-height-b2:1.25rem;--line-height-button:1.25rem}}@media screen and (min-width: 600px){:host{--font-size-h1:1.75rem;--font-size-h2:1.25rem;--font-size-h3:1rem;--font-size-b1:1.25rem;--font-size-b2:1rem;--font-size-button:1.5rem;--line-height-h1:2.25rem;--line-height-h2:1.75rem;--line-height-h3:1.25rem;--line-height-b1:1.75rem;--line-height-b2:1.25rem;--line-height-button:1.75rem}}:host{--box-shadow-01:0 2px 6px rgba(var(--color-shadow) .2);--box-shadow-02:0 -2px 6px rgba(var(--color-shadow) .2);--box-shadow-03:0 4px 5px rgba(var(--color-shadow) .14), 0 1px 10px rgba(var(--color-shadow) .12), 0 2px 4px rgba(var(--color-shadow) .2);--box-shadow-04:5px 0 6px rgba(var(--color-shadow) .14);--box-shadow-05:0 4px 12px rgba(var(--color-shadow) .2);--box-shadow-06:inset 0 4px 4px rgba(var(--color-shadow) .25);--box-shadow-focus:0 0 0 4px var(--color-focused-state-bg)}:host{--color-subtitle:var(--color-sub-dark);--display:flex;--justify-content:space-between;--padding:.5rem;--min-size:8.5rem;--size:var(--min-size);--max-size:10.75rem;--box-shadow:var(--box-shadow-01);--background:var(--white);position:relative;display:var(--display);flex-direction:column;padding:var(--padding);justify-content:var(--justify-content);min-width:var(--min-size);min-height:var(--min-size);width:var(--size);height:var(--size);max-width:var(--max-size);max-height:var(--max-size);border-radius:1rem;overflow:hidden;box-shadow:var(--box-shadow);background:var(--background);cursor:pointer}:host .tile--subtitle{--text-color:var(--color-subtitle)}:host button{appearance:none}@media screen and (min-width: 600px){:host{--min-size:10.75rem;--padding:.75rem}}.status-wrapper{--status-border-width:2px;--status-size:2rem;--status-background:transparent;position:absolute;bottom:0.75rem;right:0.75rem;display:flex;justify-content:center;align-items:center;height:var(--status-size);width:var(--status-size);border:var(--status-border-width) solid var(--white);border-radius:50%;background:var(--status-background)}.status-wrapper.has-done-status{--status-background:var(--color-risk-low)}.status-wrapper.has-due-status,.status-wrapper.has-missing-status{--status-background:var(--color-notifications)}.status-wrapper.has-due-status{animation:bounce 3.6s ease infinite;transform-origin:50% 50%}.status-wrapper.has-submitted-status{--status-background:var(--color-risk-medium)}.status-wrapper hrs-icon{--icon-size:1.25rem;--icon-color:var(--white)}@media screen and (min-width: 600px){.status-wrapper{--status-size:2.75rem;--status-border-width:4px}.status-wrapper hrs-icon{--icon-size:1.75rem}}:host(.is-generic){}:host(.is-module){--padding:none}:host(.is-module) .content{display:flex;justify-content:center;align-items:center;flex-basis:70%;background:var(--gray-3);position:relative}:host(.is-module) .content .icon-wrapper{position:absolute;display:flex;justify-content:center;align-items:center;background:var(--white);height:80%;width:56%;border-radius:100%}:host(.is-module) .content .icon-wrapper hrs-icon{--icon-color:var(--gray-5);--icon-size:clamp(3rem, 16vw, 3.75rem)}@supports not (width: clamp(3rem, 16vw, 3.75rem)){:host(.is-module) .content .icon-wrapper hrs-icon{--icon-size:3rem}}:host(.is-module) hrs-text{display:flex;justify-content:center;align-items:center;flex-grow:1;background:var(--white)}@media screen and (min-width: 600px){:host(.is-module):host-context(.has-large-tiles){--max-size:13.75rem}@supports not (width: clamp(3rem, 16vw, 3.75rem)){:host(.is-module) .content .icon-wrapper hrs-icon{--icon-size:3.75rem}}}:host(.is-medication){--justify-content:flex-start;gap:0.25rem}:host(:focus),:host(:focus-visible){--box-shadow:var(--box-shadow-focus), var(--box-shadow-01);outline:none}@keyframes bounce{0%{transform:translateY(0)}5.55556%{transform:translateY(0)}11.11111%{transform:translateY(0)}22.22222%{transform:translateY(-10px)}27.77778%{transform:translateY(0)}33.33333%{transform:translateY(-10px)}44.44444%{transform:translateY(0)}100%{transform:translateY(0)}}";

const Tile = class {
  constructor(hostRef) {
    Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.hrsTileClick = Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "hrsTileClick", 7);
    /**
     * Variant to render
     */
    this.variant = 'generic';
    this.handleClick = (event) => {
      let data = {
        event,
        mainTitle: this.mainTitle,
      };
      if (this.handler)
        this.handler();
      if (this.itemId)
        data['itemId'] = this.itemId;
      this.hrsTileClick.emit(data);
    };
  }
  handleStatusChange() {
    this.status = this.currentStatus;
  }
  componentWillLoad() {
    if (this.currentStatus)
      this.status = this.currentStatus;
  }
  getStatusIcon() {
    const status = this.status;
    const icons = {
      done: 'done',
      due: 'notification',
      missing: 'notification',
      submitted: 'submitting'
    };
    if (status) {
      return (Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: {
          'status-wrapper': true,
          [`has-${status}-status`]: true
        } }, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-icon", { icon: icons[status], qa: `tile--${status}-icon` })));
    }
  }
  render() {
    const { mainTitle, moduleIcon, subtitle, variant, qa } = this;
    if (variant === 'module') {
      return (Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-qa": qa ? qa : null, class: {
          [`is-${variant}`]: true
        }, tabindex: "0", onClick: this.handleClick }, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "content" }, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "icon-wrapper" }, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-icon", { icon: `icon-${moduleIcon}`, qa: 'tile-icon' })), this.getStatusIcon()), Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-text", { part: "title", font: "h2-semibold", qa: 'tile-text' }, mainTitle)));
    }
    else {
      return (Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "data-qa": qa ? qa : null, class: {
          [`is-${variant}`]: true
        }, tabindex: "0", onClick: this.handleClick }, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-text", { part: "title", font: "h2-semibold" }, mainTitle), Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-text", { class: "tile--subtitle", font: "h3-regular" }, subtitle), this.getStatusIcon()));
    }
  }
  get el() { return Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "currentStatus": ["handleStatusChange"]
  }; }
};
Tile.style = tileNewDesignCss;



//# sourceMappingURL=hrs-list-item_4.entry.js.map

/***/ })

}]);
//# sourceMappingURL=58-es5.js.map