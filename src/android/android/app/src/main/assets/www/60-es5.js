(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-menu-item_2.entry.js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-menu-item_2.entry.js ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: hrs_menu_item, hrs_menu_list */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hrs_menu_item", function() { return MenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hrs_menu_list", function() { return MenuList; });
/* harmony import */ var _index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-be85d80d.js */ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/index-be85d80d.js");
/* harmony import */ var _ui_config_8be75a31_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-config-8be75a31.js */ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/ui-config-8be75a31.js");



const menuItemNewDesignCss = "@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:400;src:url(\"../fonts/Roboto/light.woff\") format(\"woff\")}@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:500;src:url(\"../fonts/Roboto/regular.woff\") format(\"woff\")}@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:700;src:url(\"../fonts/Roboto/bold.woff\") format(\"woff\")}:root{--shadow-sm:0 3px 6px 0 rgba(var(--color-shadow), .3);--shadow-md:0 3px 12px 0 rgba(var(--color-shadow), .6);--shadow-lg:0 3px 18px 0 rgba(var(--color-shadow), .6);--shadow-header:0 0 8px -5px rgba(var(--color-shadow), .6);--shadow-footer:-1px 0 12px -3px rgba(var(--color-shadow), .6);--shadow-inset-input:inset 0 1px 2px rgba(0, 0, 0, .39), 0 -1px 1px var(--white), 0 1px 0 var(--white);--shadow-focus-outline:0 0 0 4px var(--color-outline);--shadow-focus-invalid:0 0 1px 2px var(--color-error);--shadow-hover-tab:0 4px 0 0 var(--gray-8);--shadow-selected-tab:0 4px 0 0 var(--color-primary-dark)}:host{font-family:var(--font)}/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;text-size-adjust:100%;}body{margin:0;}main{display:block}h1{margin:0.67em 0;font-size:2em;}hr{overflow:visible;height:0;box-sizing:content-box;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0;}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{appearance:textfield;outline-offset:-2px;}[type=search]::-webkit-search-decoration{appearance:none}::-webkit-file-upload-button{appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}.sronly{border:0;clip:rect(0, 0, 0, 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}:host{--color-primary:#0073af;--color-primary-dark:#00538d;--color-primary-light:#0197d6;--color-primary-50:rgba(0, 115, 175, .5);--color-primary-30:rgba(0, 115, 175, .3);--color-accent:#721c7e;--color-accent-dark:#56156f;--color-accent-light:#92278f;--white:#fff;--white-90:rgba(255, 255, 255, .9);--white-80:rgba(255, 255, 255, .8);--white-70:rgba(255, 255, 255, .7);--white-60:rgba(255, 255, 255, .6);--white-50:rgba(255, 255, 255, .5);--white-40:rgba(255, 255, 255, .4);--white-30:rgba(255, 255, 255, .3);--white-20:rgba(255, 255, 255, .2);--white-10:rgba(255, 255, 255, .1);--white-05:rgba(255, 255, 255, .05);--gray-1:#fcfcfc;--gray-2:#f5f5f5;--gray-3:#eee;--gray-4:#e0e0e0;--gray-5:#bdbdbd;--gray-6:#9e9e9e;--gray-7:#757575;--gray-8:#616161;--gray-9:#424242;--gray-10:#323232;--black:#212121;--color-sub-light:var(--gray-3);--color-sub-dark:var(--gray-7);--color-success:#0a853b;--color-info:#115ffb;--color-warning:#eb7100;--color-error:#ab1300;--color-risk-none:#5a7c79;--color-risk-low:#0ea84b;--color-risk-medium:var(--color-warning);--color-risk-high:#c62360;--color-notifications:#df1642;--color-congratulations:#ebb700;--color-great-job:#0ea84b;--color-focused-state:#56156f;--color-focused-state-bg:rgba(86, 21, 111, .6);--gradient-color-stop-1:var(--white);--gradient-color-stop-2:var(--color-primary-dark);--gradient-background:linear-gradient(180deg, var(--gradient-color-stop-1) 0%, var(--gradient-color-stop-2) 100%);--sidebar-gradient:linear-gradient(0deg, var(--color-primary-dark), var(--color-primary), var(--white));--color-shadow:0, 0, 0,;--color-backdrop:0, 0, 0, .4}:host{--font:\"Open Sans\", sans-serif;--font-weight-bold:700;--font-weight-semibold:600;--font-weight-regular:400}@media screen and (max-width: 599px){:host{--font-size-h1:1.25rem;--font-size-h2:1rem;--font-size-h3:.75rem;--font-size-b1:1rem;--font-size-b2:.875rem;--font-size-button:1rem;--line-height-h1:1.75rem;--line-height-h2:1.25rem;--line-height-h3:1rem;--line-height-b1:1.25rem;--line-height-b2:1.25rem;--line-height-button:1.25rem}}@media screen and (min-width: 600px){:host{--font-size-h1:1.75rem;--font-size-h2:1.25rem;--font-size-h3:1rem;--font-size-b1:1.25rem;--font-size-b2:1rem;--font-size-button:1.5rem;--line-height-h1:2.25rem;--line-height-h2:1.75rem;--line-height-h3:1.25rem;--line-height-b1:1.75rem;--line-height-b2:1.25rem;--line-height-button:1.75rem}}:host{--box-shadow-01:0 2px 6px rgba(var(--color-shadow) .2);--box-shadow-02:0 -2px 6px rgba(var(--color-shadow) .2);--box-shadow-03:0 4px 5px rgba(var(--color-shadow) .14), 0 1px 10px rgba(var(--color-shadow) .12), 0 2px 4px rgba(var(--color-shadow) .2);--box-shadow-04:5px 0 6px rgba(var(--color-shadow) .14);--box-shadow-05:0 4px 12px rgba(var(--color-shadow) .2);--box-shadow-06:inset 0 4px 4px rgba(var(--color-shadow) .25);--box-shadow-focus:0 0 0 4px var(--color-focused-state-bg)}:host{--pointer-events:all;--menu-item-box-shadow:none;--menu-item-height:3rem;--menu-item-display:flex;--menu-item-icon-size:1rem;position:relative;z-index:3;display:var(--menu-item-display);justify-content:flex-start;align-items:center;height:var(--menu-item-height);padding:1em;background:var(--white);pointer-events:var(--pointer-events);box-shadow:var(--menu-item-box-shadow);transition:box-shadow 0ms linear}:host .menu--icon{--icon-size:var(--menu-item-icon-size);margin:0.5rem}:host(.submenu--item){--pointer-events:none;z-index:0;padding-left:2rem}:host(.submenu--item)::before{left:1.7em;width:85%}:host(:last-of-type::before){border-bottom:none}:host(.is-expanded.has-shadow){--menu-item-box-shadow:var(--shadow-sm);transition:box-shadow 150ms linear}:host(.is-expanded.is-item-header){--menu-item-box-shadow:var(--shadow-sm);z-index:2;transition:box-shadow 150ms linear 2ms}:host(.is-expanded.is-item-header)::before{left:0;width:100%;border-bottom:1px solid var(--gray-2);transition:50ms ease-in-out}:host(.submenu--item:last-of-type){--menu-item-box-shadow:inset 0 -6px 12px -10px var(--gray-8)}:host(.submenu--item:last-of-type)::before{border-bottom:none}:host::before{position:absolute;bottom:0;left:16px;width:89%;border-bottom:1px solid rgba(0, 0, 0, 0.15);content:\"\";transition:200ms ease-in-out}:host.is-item-header.is-expanded::before{left:0;width:100%;transition:50ms ease-in-out}:host(.is-expanded)~.submenu--item{--pointer-events:all}:host{--font-weight:var(--font-weight-semibold);--font-size:var(--font-size-h3);--line-height:var(--line-height-h3);font-weight:var(--font-weight);font-size:var(--font-size);line-height:var(--line-height)}@media screen and (min-width: 600px){:host{--menu-item-height:3.75rem;--menu-item-icon-size:1.25rem}}:host(.is-expanded.has-shadow){--menu-item-box-shadow:var(--box-shadow-01)}:host(.is-expanded.is-item-header){--menu-item-box-shadow:var(--box-shadow-01)}:host(.submenu--item:last-of-type){--menu-item-box-shadow:inset 0 -6px 12px -10px var(--gray-8)}:host-context(.is-sub-list:not(.is-expanded)){height:0;transition:height 200ms ease-out}";

const MenuItem = class {
  constructor(hostRef) {
    Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.hrsMenuItemClick = Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "hrsMenuItemClick", 7);
    /**
     * If `true` menu item is not rendered
     */
    this.isHidden = false;
  }
  // Adding passive option to make stencil linter happy.
  // Workaround grabbed from the open issue: https://github.com/ionic-team/stencil-eslint/issues/10;
  onClick(ev) {
    if (this.isItemHeader) {
      this.isExpanded = !this.isExpanded;
    }
    this.hrsMenuItemClick.emit({
      refId: this.refId,
      isExpanded: this.isExpanded,
      isItemHeader: this.isItemHeader,
      el: this.el,
      event: ev
    });
  }
  onMenuListExpandEvent(ev) {
    const detail = ev['detail'];
    if (this.refId !== detail.refId && this.isExpanded) {
      this.isExpanded = !this.isExpanded;
    }
  }
  render() {
    const contextMode = Object(_ui_config_8be75a31_js__WEBPACK_IMPORTED_MODULE_1__["g"])();
    const { icon, isExpanded, hasShadow, isHidden, isItemHeader, isSubmenu, qa } = this;
    if (isHidden) ;
    else {
      return (Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { mode: contextMode, "data-qa": qa ? qa : null, class: {
          [`${isSubmenu ? 'sub' : ''}menu--item`]: true,
          'is-item-header': isItemHeader,
          'has-shadow': isExpanded && hasShadow,
          'is-expanded': isExpanded
        } }, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-icon", { class: "menu--icon", icon: icon }), Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "label" })));
    }
  }
  get el() { return Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
MenuItem.style = {
  newDesign: menuItemNewDesignCss
};

const menuListNewDesignCss = "@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:400;src:url(\"../fonts/Roboto/light.woff\") format(\"woff\")}@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:500;src:url(\"../fonts/Roboto/regular.woff\") format(\"woff\")}@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:700;src:url(\"../fonts/Roboto/bold.woff\") format(\"woff\")}.sc-hrs-menu-list-newDesign:root{--shadow-sm:0 3px 6px 0 rgba(var(--color-shadow), .3);--shadow-md:0 3px 12px 0 rgba(var(--color-shadow), .6);--shadow-lg:0 3px 18px 0 rgba(var(--color-shadow), .6);--shadow-header:0 0 8px -5px rgba(var(--color-shadow), .6);--shadow-footer:-1px 0 12px -3px rgba(var(--color-shadow), .6);--shadow-inset-input:inset 0 1px 2px rgba(0, 0, 0, .39), 0 -1px 1px var(--white), 0 1px 0 var(--white);--shadow-focus-outline:0 0 0 4px var(--color-outline);--shadow-focus-invalid:0 0 1px 2px var(--color-error);--shadow-hover-tab:0 4px 0 0 var(--gray-8);--shadow-selected-tab:0 4px 0 0 var(--color-primary-dark)}.sc-hrs-menu-list-newDesign-h{font-family:var(--font)}html.sc-hrs-menu-list-newDesign{line-height:1.15;text-size-adjust:100%}body.sc-hrs-menu-list-newDesign{margin:0}main.sc-hrs-menu-list-newDesign{display:block}h1.sc-hrs-menu-list-newDesign{margin:0.67em 0;font-size:2em}hr.sc-hrs-menu-list-newDesign{overflow:visible;height:0;box-sizing:content-box}pre.sc-hrs-menu-list-newDesign{font-family:monospace, monospace;font-size:1em}a.sc-hrs-menu-list-newDesign{background-color:transparent}abbr[title].sc-hrs-menu-list-newDesign{border-bottom:none;text-decoration:underline}b.sc-hrs-menu-list-newDesign,strong.sc-hrs-menu-list-newDesign{font-weight:bolder}code.sc-hrs-menu-list-newDesign,kbd.sc-hrs-menu-list-newDesign,samp.sc-hrs-menu-list-newDesign{font-family:monospace, monospace;font-size:1em}small.sc-hrs-menu-list-newDesign{font-size:80%}img.sc-hrs-menu-list-newDesign{border-style:none}button.sc-hrs-menu-list-newDesign,input.sc-hrs-menu-list-newDesign,optgroup.sc-hrs-menu-list-newDesign,select.sc-hrs-menu-list-newDesign,textarea.sc-hrs-menu-list-newDesign{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button.sc-hrs-menu-list-newDesign,input.sc-hrs-menu-list-newDesign{overflow:visible}button.sc-hrs-menu-list-newDesign,select.sc-hrs-menu-list-newDesign{text-transform:none}button.sc-hrs-menu-list-newDesign,[type=button].sc-hrs-menu-list-newDesign,[type=reset].sc-hrs-menu-list-newDesign,[type=submit].sc-hrs-menu-list-newDesign{appearance:button}button.sc-hrs-menu-list-newDesign::-moz-focus-inner,[type=button].sc-hrs-menu-list-newDesign::-moz-focus-inner,[type=reset].sc-hrs-menu-list-newDesign::-moz-focus-inner,[type=submit].sc-hrs-menu-list-newDesign::-moz-focus-inner{border-style:none;padding:0}button.sc-hrs-menu-list-newDesign:-moz-focusring,[type=button].sc-hrs-menu-list-newDesign:-moz-focusring,[type=reset].sc-hrs-menu-list-newDesign:-moz-focusring,[type=submit].sc-hrs-menu-list-newDesign:-moz-focusring{outline:1px dotted ButtonText}fieldset.sc-hrs-menu-list-newDesign{padding:0.35em 0.75em 0.625em}legend.sc-hrs-menu-list-newDesign{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress.sc-hrs-menu-list-newDesign{vertical-align:baseline}textarea.sc-hrs-menu-list-newDesign{overflow:auto}[type=checkbox].sc-hrs-menu-list-newDesign,[type=radio].sc-hrs-menu-list-newDesign{box-sizing:border-box;padding:0}[type=number].sc-hrs-menu-list-newDesign::-webkit-inner-spin-button,[type=number].sc-hrs-menu-list-newDesign::-webkit-outer-spin-button{height:auto}[type=search].sc-hrs-menu-list-newDesign{appearance:textfield;outline-offset:-2px}[type=search].sc-hrs-menu-list-newDesign::-webkit-search-decoration{appearance:none}.sc-hrs-menu-list-newDesign::-webkit-file-upload-button{appearance:button;font:inherit}details.sc-hrs-menu-list-newDesign{display:block}summary.sc-hrs-menu-list-newDesign{display:list-item}template.sc-hrs-menu-list-newDesign{display:none}[hidden].sc-hrs-menu-list-newDesign{display:none}.sronly.sc-hrs-menu-list-newDesign{border:0;clip:rect(0, 0, 0, 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sc-hrs-menu-list-newDesign-h{--color-primary:#0073af;--color-primary-dark:#00538d;--color-primary-light:#0197d6;--color-primary-50:rgba(0, 115, 175, .5);--color-primary-30:rgba(0, 115, 175, .3);--color-accent:#721c7e;--color-accent-dark:#56156f;--color-accent-light:#92278f;--white:#fff;--white-90:rgba(255, 255, 255, .9);--white-80:rgba(255, 255, 255, .8);--white-70:rgba(255, 255, 255, .7);--white-60:rgba(255, 255, 255, .6);--white-50:rgba(255, 255, 255, .5);--white-40:rgba(255, 255, 255, .4);--white-30:rgba(255, 255, 255, .3);--white-20:rgba(255, 255, 255, .2);--white-10:rgba(255, 255, 255, .1);--white-05:rgba(255, 255, 255, .05);--gray-1:#fcfcfc;--gray-2:#f5f5f5;--gray-3:#eee;--gray-4:#e0e0e0;--gray-5:#bdbdbd;--gray-6:#9e9e9e;--gray-7:#757575;--gray-8:#616161;--gray-9:#424242;--gray-10:#323232;--black:#212121;--color-sub-light:var(--gray-3);--color-sub-dark:var(--gray-7);--color-success:#0a853b;--color-info:#115ffb;--color-warning:#eb7100;--color-error:#ab1300;--color-risk-none:#5a7c79;--color-risk-low:#0ea84b;--color-risk-medium:var(--color-warning);--color-risk-high:#c62360;--color-notifications:#df1642;--color-congratulations:#ebb700;--color-great-job:#0ea84b;--color-focused-state:#56156f;--color-focused-state-bg:rgba(86, 21, 111, .6);--gradient-color-stop-1:var(--white);--gradient-color-stop-2:var(--color-primary-dark);--gradient-background:linear-gradient(180deg, var(--gradient-color-stop-1) 0%, var(--gradient-color-stop-2) 100%);--sidebar-gradient:linear-gradient(0deg, var(--color-primary-dark), var(--color-primary), var(--white));--color-shadow:0, 0, 0,;--color-backdrop:0, 0, 0, .4}.sc-hrs-menu-list-newDesign-h{--font:\"Open Sans\", sans-serif;--font-weight-bold:700;--font-weight-semibold:600;--font-weight-regular:400}@media screen and (max-width: 599px){.sc-hrs-menu-list-newDesign-h{--font-size-h1:1.25rem;--font-size-h2:1rem;--font-size-h3:.75rem;--font-size-b1:1rem;--font-size-b2:.875rem;--font-size-button:1rem;--line-height-h1:1.75rem;--line-height-h2:1.25rem;--line-height-h3:1rem;--line-height-b1:1.25rem;--line-height-b2:1.25rem;--line-height-button:1.25rem}}@media screen and (min-width: 600px){.sc-hrs-menu-list-newDesign-h{--font-size-h1:1.75rem;--font-size-h2:1.25rem;--font-size-h3:1rem;--font-size-b1:1.25rem;--font-size-b2:1rem;--font-size-button:1.5rem;--line-height-h1:2.25rem;--line-height-h2:1.75rem;--line-height-h3:1.25rem;--line-height-b1:1.75rem;--line-height-b2:1.25rem;--line-height-button:1.75rem}}.sc-hrs-menu-list-newDesign-h{--box-shadow-01:0 2px 6px rgba(var(--color-shadow) .2);--box-shadow-02:0 -2px 6px rgba(var(--color-shadow) .2);--box-shadow-03:0 4px 5px rgba(var(--color-shadow) .14), 0 1px 10px rgba(var(--color-shadow) .12), 0 2px 4px rgba(var(--color-shadow) .2);--box-shadow-04:5px 0 6px rgba(var(--color-shadow) .14);--box-shadow-05:0 4px 12px rgba(var(--color-shadow) .2);--box-shadow-06:inset 0 4px 4px rgba(var(--color-shadow) .25);--box-shadow-focus:0 0 0 4px var(--color-focused-state-bg)}.sc-hrs-menu-list-newDesign-h{--expandedHeight:0;--height:0;--overflowY:scroll;overflow-y:var(--overflowY)}.sc-hrs-menu-list-newDesign-h ul.sc-hrs-menu-list-newDesign{position:relative;max-height:var(--height);margin:0;padding:0}.is-outer-list.sc-hrs-menu-list-newDesign-h{--overflowY:auto;height:101%}.submenu--list.sc-hrs-menu-list-newDesign-h ul.sc-hrs-menu-list-newDesign{opacity:0;transition:max-height 150ms ease-in-out, opacity 0ms linear 50ms}.submenu--list.is-expanded.sc-hrs-menu-list-newDesign-h{--height:var(--expandedHeight);--pointer-events:all;display:block}.submenu--list.is-expanded.sc-hrs-menu-list-newDesign-h ul.sc-hrs-menu-list-newDesign{--pointer-events:all;opacity:1;transition:max-height 150ms ease-in-out 50ms, opacity 160ms linear}.submenu--list.is-expanded.sc-hrs-menu-list-newDesign-h ul.sc-hrs-menu-list-newDesign .submenu--item.sc-hrs-menu-list-newDesign{--pointer-events:all}.submenu--list.is-expanded.sc-hrs-menu-list-newDesign-h .submenu--item.sc-hrs-menu-list-newDesign{--pointer-events:all}.menu--list.sc-hrs-menu-list-newDesign-h:first-of-type{--height:100%;z-index:0}.sc-hrs-menu-list-newDesign-h.is-expanded ul.submenu--list_wrapper.sc-hrs-menu-list-newDesign-s>.submenu--item{--pointer-events:all}";

const MenuList = class {
  constructor(hostRef) {
    Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.hrsExpandSubmenu = Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "hrsExpandSubmenu", 7);
    /**
     * If `true` item's associated submenu is open
     */
    this.isExpanded = false;
    /**
     * Total height of submenu items and item header to be applied when expanded
     */
    this.listHeight = 0;
  }
  onMenuItemClick(ev) {
    const event = ev['detail'];
    if (this.refId === event.refId) {
      this.isExpanded = event.isExpanded;
    }
    else {
      this.isExpanded = false;
      this.hrsExpandSubmenu.emit({
        refId: event.refId,
        isExpanded: event.isExpanded
      });
    }
  }
  onMenuListExpandEvent(ev) {
    const detail = ev['detail'];
    if (this.refId !== detail.refId && this.isExpanded) {
      this.isExpanded = detail.isExpanded;
    }
  }
  componentWillRender() {
    // If this list is the top-level list wrapping the items its height works differently, so flag it for a class
    this.isOuterList = this.el.parentElement.classList.contains('menu--container');
  }
  render() {
    const contextMode = Object(_ui_config_8be75a31_js__WEBPACK_IMPORTED_MODULE_1__["g"])();
    const { isExpanded, isOuterList, isSubmenu, listHeight, qa } = this;
    return (Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { mode: contextMode, "data-qa": qa ? qa : null, class: {
        [`${isSubmenu ? 'sub' : ''}menu--list`]: true,
        'is-outer-list': isOuterList,
        'is-expanded': isExpanded
      }, style: { '--expandedHeight': `${listHeight}px` } }, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "item-header" }), Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", { class: {
        'submenu--list_wrapper': true,
        'is-sub-list': !isOuterList,
        'is-expanded': isExpanded
      } }, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))));
  }
  get el() { return Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
MenuList.style = {
  newDesign: menuListNewDesignCss
};



//# sourceMappingURL=hrs-menu-item_2.entry.js.map

/***/ })

}]);
//# sourceMappingURL=60-es5.js.map