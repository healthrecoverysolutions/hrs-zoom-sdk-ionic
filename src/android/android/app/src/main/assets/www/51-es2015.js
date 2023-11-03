(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-content.entry.js":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-content.entry.js ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: hrs_content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hrs_content", function() { return Content; });
/* harmony import */ var _index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-be85d80d.js */ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/index-be85d80d.js");
/* harmony import */ var _ui_config_8be75a31_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-config-8be75a31.js */ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/ui-config-8be75a31.js");
/* harmony import */ var _helpers_0e8d6178_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-0e8d6178.js */ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/helpers-0e8d6178.js");
/* harmony import */ var _hrs_global_ba2602dc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hrs-global-ba2602dc.js */ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-global-ba2602dc.js");





const contentNewDesignCss = "@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:400;src:url(\"../fonts/Roboto/light.woff\") format(\"woff\")}@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:500;src:url(\"../fonts/Roboto/regular.woff\") format(\"woff\")}@font-face{font-display:swap;font-family:\"Roboto\";font-style:normal;font-weight:700;src:url(\"../fonts/Roboto/bold.woff\") format(\"woff\")}.sc-hrs-content:root{--shadow-sm:0 3px 6px 0 rgba(var(--color-shadow), .3);--shadow-md:0 3px 12px 0 rgba(var(--color-shadow), .6);--shadow-lg:0 3px 18px 0 rgba(var(--color-shadow), .6);--shadow-header:0 0 8px -5px rgba(var(--color-shadow), .6);--shadow-footer:-1px 0 12px -3px rgba(var(--color-shadow), .6);--shadow-inset-input:inset 0 1px 2px rgba(0, 0, 0, .39), 0 -1px 1px var(--white), 0 1px 0 var(--white);--shadow-focus-outline:0 0 0 4px var(--color-outline);--shadow-focus-invalid:0 0 1px 2px var(--color-error);--shadow-hover-tab:0 4px 0 0 var(--gray-8);--shadow-selected-tab:0 4px 0 0 var(--color-primary-dark)}.sc-hrs-content-h{font-family:var(--font)}html.sc-hrs-content{line-height:1.15;text-size-adjust:100%}body.sc-hrs-content{margin:0}main.sc-hrs-content{display:block}h1.sc-hrs-content{margin:0.67em 0;font-size:2em}hr.sc-hrs-content{overflow:visible;height:0;box-sizing:content-box}pre.sc-hrs-content{font-family:monospace, monospace;font-size:1em}a.sc-hrs-content{background-color:transparent}abbr[title].sc-hrs-content{border-bottom:none;text-decoration:underline}b.sc-hrs-content,strong.sc-hrs-content{font-weight:bolder}code.sc-hrs-content,kbd.sc-hrs-content,samp.sc-hrs-content{font-family:monospace, monospace;font-size:1em}small.sc-hrs-content{font-size:80%}img.sc-hrs-content{border-style:none}button.sc-hrs-content,input.sc-hrs-content,optgroup.sc-hrs-content,select.sc-hrs-content,textarea.sc-hrs-content{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button.sc-hrs-content,input.sc-hrs-content{overflow:visible}button.sc-hrs-content,select.sc-hrs-content{text-transform:none}button.sc-hrs-content,[type=button].sc-hrs-content,[type=reset].sc-hrs-content,[type=submit].sc-hrs-content{appearance:button}button.sc-hrs-content::-moz-focus-inner,[type=button].sc-hrs-content::-moz-focus-inner,[type=reset].sc-hrs-content::-moz-focus-inner,[type=submit].sc-hrs-content::-moz-focus-inner{border-style:none;padding:0}button.sc-hrs-content:-moz-focusring,[type=button].sc-hrs-content:-moz-focusring,[type=reset].sc-hrs-content:-moz-focusring,[type=submit].sc-hrs-content:-moz-focusring{outline:1px dotted ButtonText}fieldset.sc-hrs-content{padding:0.35em 0.75em 0.625em}legend.sc-hrs-content{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress.sc-hrs-content{vertical-align:baseline}textarea.sc-hrs-content{overflow:auto}[type=checkbox].sc-hrs-content,[type=radio].sc-hrs-content{box-sizing:border-box;padding:0}[type=number].sc-hrs-content::-webkit-inner-spin-button,[type=number].sc-hrs-content::-webkit-outer-spin-button{height:auto}[type=search].sc-hrs-content{appearance:textfield;outline-offset:-2px}[type=search].sc-hrs-content::-webkit-search-decoration{appearance:none}.sc-hrs-content::-webkit-file-upload-button{appearance:button;font:inherit}details.sc-hrs-content{display:block}summary.sc-hrs-content{display:list-item}template.sc-hrs-content{display:none}[hidden].sc-hrs-content{display:none}.sronly.sc-hrs-content{border:0;clip:rect(0, 0, 0, 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sc-hrs-content-h{--color-primary:#0073af;--color-primary-dark:#00538d;--color-primary-light:#0197d6;--color-primary-50:rgba(0, 115, 175, .5);--color-primary-30:rgba(0, 115, 175, .3);--color-accent:#721c7e;--color-accent-dark:#56156f;--color-accent-light:#92278f;--white:#fff;--white-90:rgba(255, 255, 255, .9);--white-80:rgba(255, 255, 255, .8);--white-70:rgba(255, 255, 255, .7);--white-60:rgba(255, 255, 255, .6);--white-50:rgba(255, 255, 255, .5);--white-40:rgba(255, 255, 255, .4);--white-30:rgba(255, 255, 255, .3);--white-20:rgba(255, 255, 255, .2);--white-10:rgba(255, 255, 255, .1);--white-05:rgba(255, 255, 255, .05);--gray-1:#fcfcfc;--gray-2:#f5f5f5;--gray-3:#eee;--gray-4:#e0e0e0;--gray-5:#bdbdbd;--gray-6:#9e9e9e;--gray-7:#757575;--gray-8:#616161;--gray-9:#424242;--gray-10:#323232;--black:#212121;--color-sub-light:var(--gray-3);--color-sub-dark:var(--gray-7);--color-success:#0a853b;--color-info:#115ffb;--color-warning:#eb7100;--color-error:#ab1300;--color-risk-none:#5a7c79;--color-risk-low:#0ea84b;--color-risk-medium:var(--color-warning);--color-risk-high:#c62360;--color-notifications:#df1642;--color-congratulations:#ebb700;--color-great-job:#0ea84b;--color-focused-state:#56156f;--color-focused-state-bg:rgba(86, 21, 111, .6);--gradient-color-stop-1:var(--white);--gradient-color-stop-2:var(--color-primary-dark);--gradient-background:linear-gradient(180deg, var(--gradient-color-stop-1) 0%, var(--gradient-color-stop-2) 100%);--sidebar-gradient:linear-gradient(0deg, var(--color-primary-dark), var(--color-primary), var(--white));--color-shadow:0, 0, 0,;--color-backdrop:0, 0, 0, .4}.sc-hrs-content-h{--font:\"Open Sans\", sans-serif;--font-weight-bold:700;--font-weight-semibold:600;--font-weight-regular:400}@media screen and (max-width: 599px){.sc-hrs-content-h{--font-size-h1:1.25rem;--font-size-h2:1rem;--font-size-h3:.75rem;--font-size-b1:1rem;--font-size-b2:.875rem;--font-size-button:1rem;--line-height-h1:1.75rem;--line-height-h2:1.25rem;--line-height-h3:1rem;--line-height-b1:1.25rem;--line-height-b2:1.25rem;--line-height-button:1.25rem}}@media screen and (min-width: 600px){.sc-hrs-content-h{--font-size-h1:1.75rem;--font-size-h2:1.25rem;--font-size-h3:1rem;--font-size-b1:1.25rem;--font-size-b2:1rem;--font-size-button:1.5rem;--line-height-h1:2.25rem;--line-height-h2:1.75rem;--line-height-h3:1.25rem;--line-height-b1:1.75rem;--line-height-b2:1.25rem;--line-height-button:1.75rem}}.sc-hrs-content-h{--box-shadow-01:0 2px 6px rgba(var(--color-shadow) .2);--box-shadow-02:0 -2px 6px rgba(var(--color-shadow) .2);--box-shadow-03:0 4px 5px rgba(var(--color-shadow) .14), 0 1px 10px rgba(var(--color-shadow) .12), 0 2px 4px rgba(var(--color-shadow) .2);--box-shadow-04:5px 0 6px rgba(var(--color-shadow) .14);--box-shadow-05:0 4px 12px rgba(var(--color-shadow) .2);--box-shadow-06:inset 0 4px 4px rgba(var(--color-shadow) .25);--box-shadow-focus:0 0 0 4px var(--color-focused-state-bg)}.sc-hrs-content-h{--display:block;--height:100%;--content-bg:var(--gray-3);--padding-bottom:0;--siblings-height:0;display:var(--display);background:var(--content-bg);height:var(--height);width:100%;padding-bottom:var(--padding-bottom);overflow-y:scroll}hrs-modal.sc-hrs-content-h,hrs-modal .sc-hrs-content-h{--height:calc(100% - var(--siblings-height));position:relative;flex-grow:1}.content-list.sc-hrs-content-h fieldset.sc-hrs-content,.content-list.sc-hrs-content fieldset.sc-hrs-content,.content-radio-list.sc-hrs-content-h fieldset.sc-hrs-content{padding:0;margin-left:0;margin-right:0;border:none}.content-list.sc-hrs-content-h fieldset.sc-hrs-content,.content-list.sc-hrs-content fieldset.sc-hrs-content,.content-radio-list.sc-hrs-content-h fieldset.sc-hrs-content{padding:0;margin-left:0;margin-right:0;border:none}.content-list.sc-hrs-content-h legend.sc-hrs-content,.content-list.sc-hrs-content legend.sc-hrs-content,.content-radio-list.sc-hrs-content-h legend.sc-hrs-content{--font-weight:var(--font-weight-bold);--font-size:var(--font-size-h2);--line-height:var(--line-height-h2);font-weight:var(--font-weight);font-size:var(--font-size);line-height:var(--line-height);width:100%;margin:0;padding:0.5rem;background:var(--color-primary-dark);color:var(--white);text-align:center}@media screen and (min-width: 600px){.content-list.sc-hrs-content-h legend.sc-hrs-content,.content-list.sc-hrs-content legend.sc-hrs-content,.content-radio-list.sc-hrs-content-h legend.sc-hrs-content{padding:0.75rem}}.content-list.sc-hrs-content-h ul.sc-hrs-content,.content-list.sc-hrs-content ul.sc-hrs-content,.content-radio-list.sc-hrs-content-h ul.sc-hrs-content{list-style-type:none;margin:0;padding:0}.content-grid.sc-hrs-content-h,.content-grid.sc-hrs-content{--display:grid;--tile-min-size:8.5rem;--tile-max-size:10.75rem;--clamp-val:42vw;--tile-size:clamp(var(--tile-min-size), var(--clamp-val), var(--tile-max-size));--padding-bottom:1rem;grid-template-columns:repeat(auto-fill, minmax(var(--tile-size), 1fr));grid-auto-rows:var(--tile-size);place-items:center;padding:1rem;padding-bottom:var(--padding-bottom);grid-gap:1rem}@supports not (width: clamp(8rem, 40vw, 10rem)){.content-grid.sc-hrs-content-h,.content-grid.sc-hrs-content{--tile-size:var(--clamp-val)}}.content-grid.sc-hrs-content-h hrs-tile.sc-hrs-content,.content-grid.sc-hrs-content hrs-tile.sc-hrs-content{--size:var(--tile-size)}@media screen and (min-width: 600px){.content-grid.sc-hrs-content-h,.content-grid.sc-hrs-content{--tile-min-size:10.75rem;--tile-max-size:13.75rem;--clamp-val:15vw}.content-grid.has-large-tiles.sc-hrs-content-h hrs-tile.sc-hrs-content,.content-grid.has-large-tiles.sc-hrs-content hrs-tile.sc-hrs-content{--max-size:13.75rem}}.adjust-for-fab.sc-hrs-content-h{--padding-bottom:5.5rem}@media screen and (min-width: 600px){.adjust-for-fab.sc-hrs-content-h{--padding-bottom:7.5rem}}.content-rail.sc-hrs-content-h .content-container.content-grid.adjust-for-fab.sc-hrs-content,.content-rail.sc-hrs-content-h .content-container.content-default.adjust-for-fab.sc-hrs-content{padding-bottom:5.5rem}@media screen and (min-width: 600px){.content-rail.sc-hrs-content-h .content-container.content-grid.adjust-for-fab.sc-hrs-content,.content-rail.sc-hrs-content-h .content-container.content-default.adjust-for-fab.sc-hrs-content{padding-bottom:7.5rem}}.content-rail.sc-hrs-content-h .content-container.content-list.adjust-for-fab.sc-hrs-content ul.sc-hrs-content{padding-bottom:5.5rem}@media screen and (min-width: 600px){.content-rail.sc-hrs-content-h .content-container.content-list.adjust-for-fab.sc-hrs-content ul.sc-hrs-content{padding-bottom:7.5rem}}.bg-gradient.sc-hrs-content-h{--content-bg:var(--gradient-background)}.bg-white.sc-hrs-content-h{--content-bg:var(--white)}.is-status.sc-hrs-content-h,.is-status .sc-hrs-content-h{display:flex;flex-direction:column}.sc-hrs-content-h.is-status .sc-hrs-content-s>hrs-text,.is-status .sc-hrs-content-h .sc-hrs-content-s>hrs-text{--margin:2rem;margin:2rem}.sc-hrs-content-h.is-status .sc-hrs-content-s hrs-text,.is-status .sc-hrs-content-h .sc-hrs-content-s hrs-text{margin-bottom:1rem}.content-rail.sc-hrs-content-h .content-container.sc-hrs-content{display:grid;width:100%}.has-button-tabs.sc-hrs-content-h{--display:flex;--rail-width:22vw;position:relative}.has-button-tabs.sc-hrs-content-h .tabs-container.sc-hrs-content{position:absolute;top:0;left:0;width:var(--rail-width);height:100%;padding:1.5rem 1rem;background:var(--sidebar-gradient)}.has-button-tabs.sc-hrs-content-h .content-container.sc-hrs-content{position:relative;margin-left:var(--rail-width);overflow-y:scroll}.has-text-tabs.sc-hrs-content-h{--display:flex;--tabs-height:2.75rem;flex-direction:column}.has-text-tabs.sc-hrs-content-h .tabs-container.sc-hrs-content{position:absolute;top:0;left:0;z-index:1;width:100%}.has-text-tabs.sc-hrs-content-h .tabs-container.sc-hrs-content hrs-tabs.sc-hrs-content{--height:var(--tabs-height)}.has-text-tabs.sc-hrs-content-h .content-container.sc-hrs-content{flex-grow:1}.has-text-tabs.sc-hrs-content-h .content-container.content-list.sc-hrs-content{padding-top:var(--tabs-height)}.has-text-tabs.sc-hrs-content-h .content-container.content-grid.sc-hrs-content{padding-top:calc(var(--tabs-height) + 1rem)}.content-comms.sc-hrs-content-h{--display:flex;--first-border-size:4.9vh;--second-border-size:9.5vh;--border-radius:50%;--content-icon-size:13vh;--content-icon-padding:1.5rem;justify-content:center}@media screen and (min-width: 600px){.content-comms.sc-hrs-content-h{--content-icon-size:12vh;--content-icon-padding:1.6rem}}.content-comms.sc-hrs-content-h .text-wrapper.sc-hrs-content{display:flex;position:fixed;margin-top:1rem;flex-direction:column;text-align:center;row-gap:0.25rem}.content-comms.sc-hrs-content-h .text-wrapper.sc-hrs-content hrs-text.sc-hrs-content{--display:block}.content-comms.sc-hrs-content-h .icon-wrapper.sc-hrs-content{display:flex;align-items:center;flex-grow:1}.content-comms.sc-hrs-content-h .icon-background.sc-hrs-content{margin:auto;line-height:0;padding:var(--content-icon-padding);background-color:var(--color-primary);box-shadow:0 0 0 var(--first-border-size) var(--color-primary-50), 0 0 0 var(--second-border-size) var(--color-primary-30);border-radius:var(--border-radius)}.content-comms.sc-hrs-content-h .icon-background.sc-hrs-content hrs-icon.sc-hrs-content{--icon-color:var(--white);--icon-size:var(--content-icon-size)}";

const Content = class {
  constructor(hostRef) {
    Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /**
     * When `true`, larger-sized tiles are rendered. Automatically toggled when 3 or fewer tiles are loaded.
     */
    this.hasLargeTiles = false;
    /**
     * Background to use for the content:  'white', 'gradient' or 'default' (which is gray)
     */
    this.background = 'default';
    /**
     * Variant to render.
     */
    this.variant = 'default';
    this.adjustForObscuredContent = () => {
      const hrsPage = this.el.closest('hrs-page');
      const hrsFab = hrsPage ? hrsPage.querySelector('hrs-fab') : null;
      if (hrsFab && !this.adjustForFab) {
        let contentContainer;
        if (this.variant === 'rail') {
          contentContainer = this.el.querySelector('.content-container');
        }
        else {
          contentContainer = this.el;
        }
        this.adjustForFab = false;
        const lastChild = contentContainer === null || contentContainer === void 0 ? void 0 : contentContainer.lastElementChild;
        const fabButton = hrsFab.shadowRoot.querySelector('button');
        if (lastChild && fabButton) {
          const childBounds = lastChild.getBoundingClientRect();
          const fabBounds = fabButton.getBoundingClientRect();
          const calcYMax = (rect) => rect.top + ((rect.bottom - rect.top) * .25);
          if (fabBounds.height && fabBounds.width && // make sure FAB is not hidden
            childBounds.bottom > calcYMax(fabBounds) &&
            childBounds.right > fabBounds.left) {
            this.adjustForFab = true;
          }
        }
      }
    };
    /*  For the initial render of a modal, hrs-content's render is often executed before
     *  hrs-footer's render and we will not have the correct footer height here to calculate the
     *  required height adjustment. Therefore the initial render of the modal relies on
     *  hrs-modal's componentDidRender() to calculate the correct adjustment.
     *  However, for subsequent updates of content within a modal, such as are done for the
     *  wizard, hrs-modal will not re-render, only hrs-content will. Therefore, we need to calculate
     *  the height adjustment again as part of hrs-content's componentDidRender()
     */
    this.setHeightInModal = () => {
      const modal = this.el.closest('hrs-modal');
      const footer = modal === null || modal === void 0 ? void 0 : modal.querySelector('hrs-footer');
      if (modal && footer) {
        const footerHeight = footer.clientHeight;
        let subHeaderHeight = 0;
        if (/wizard/i.test(modal.parentElement.tagName)) {
          const subHeader = modal.querySelector('.subheader');
          subHeaderHeight = subHeader === null || subHeader === void 0 ? void 0 : subHeader.clientHeight;
        }
        this.el.setAttribute('style', `--siblings-height: ${footerHeight + subHeaderHeight}px`);
        this.el.parentElement.style.height = '100%';
        this.el.parentElement.style.overflow = 'hidden';
      }
    };
    // The "populate-" functions are interpolated dynamically within the render function and so are "never read" per TS
    // @ts-ignore
    this.populateGrid = () => {
      var _a;
      let tileAttrs = [];
      (_a = this.currentContent) === null || _a === void 0 ? void 0 : _a.items.map((item) => tileAttrs.push(Object(_helpers_0e8d6178_js__WEBPACK_IMPORTED_MODULE_2__["a"])(item)));
      return Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["F"], null, tileAttrs.map((itemAttrs, index) => Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-tile", { qa: `content--tile-${index}`, ...itemAttrs })));
    };
    // @ts-ignore
    this.populateRail = () => {
      var _a, _b, _c, _d;
      const { adjustForFab, enabledTabs, hasLargeTiles, hrsTabsVariant, selectedTab } = this;
      let currentContentVariant;
      if (((_b = (_a = this.currentContent) === null || _a === void 0 ? void 0 : _a.items) === null || _b === void 0 ? void 0 : _b.length) > 0) {
        currentContentVariant = 'grid';
      }
      else if (((_d = (_c = this.currentContent) === null || _c === void 0 ? void 0 : _c.lists) === null || _d === void 0 ? void 0 : _d.length) > 0) {
        currentContentVariant = 'list';
      }
      else {
        currentContentVariant = 'default';
      }
      const populateContentType = currentContentVariant !== 'default' ? `populate${Object(_helpers_0e8d6178_js__WEBPACK_IMPORTED_MODULE_2__["c"])(currentContentVariant)}` : null;
      return (Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["F"], null, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "tabs-container" }, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-tabs", { variant: hrsTabsVariant, selectedTab: selectedTab, enabledTabs: enabledTabs })), Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: {
          'content-container': true,
          [`content-${currentContentVariant}`]: true,
          'has-large-tiles': hasLargeTiles,
          'adjust-for-fab': adjustForFab
        } }, currentContentVariant !== 'default' ? this[populateContentType]() : Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))));
    };
    this.generateList = (list) => {
      this.isRadioList = /radio/.test(list.variant);
      const listElement = (this.isRadioList ?
        Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-radio-group", null, this.generateListItems(list))
        :
          Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", null, this.generateListItems(list)));
      if (list.legend) {
        return (Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("fieldset", null, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("legend", { "data-qa": `${this.qa}--${list.legend
            .replace(/[^a-zA-Z0-9 ]/g, '')
            .replace(/\s+/g, '_')
            .toLowerCase()}` }, list.legend), listElement));
      }
      else {
        return listElement;
      }
    };
    this.generateListItems = (list) => {
      const { items, variant, } = list;
      return (Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["F"], null, items.map((item, i) => {
        const itemAttrs = Object(_helpers_0e8d6178_js__WEBPACK_IMPORTED_MODULE_2__["a"])(item);
        if (this.isRadioList) {
          return Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-list-item", { qa: this.qa ? `${this.qa}--list_item-${i}` : `content--list_item-${i}`, variant: variant, ...itemAttrs });
        }
        else {
          return Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-list-item", { variant: variant, qa: this.qa ? `${this.qa}--list_item-${i}` : `content--list_item-${i}`, ...itemAttrs }));
        }
      })));
    };
    // @ts-ignore
    this.populateComms = () => {
      const config = this.currentContent ? this.currentContent.comms : {
        type: 'voice',
        status: '',
        participant: ''
      };
      const callIcon = config.type === 'video' ? 'icon-video-call' : 'icon-call-in-progress';
      return (Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["F"], null, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "text-wrapper" }, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-text", { font: "h2-semibold", qa: "comms--participant" }, config.participant), Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-text", { font: "h3-semibold", qa: "comms--status" }, config.status)), Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "icon-wrapper" }, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "icon-background" }, Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hrs-icon", { icon: callIcon, qa: "comms--icon" })))));
    };
  }
  handleBackground() {
    // touching a State to force render
    this.hasLargeTiles = this.hasLargeTiles;
  }
  handleContent() {
    // With Rail variant, we want to render the first available content as that will be the default active tab.
    // With other variants, we grab the one content option that should have been provided.
    if (this.content) {
      this.currentContent = this.content[0];
      const isRail = this.variant === 'rail';
      const isGrid = this.variant === 'grid';
      const isList = this.variant === 'list';
      if (isRail)
        this.initRail();
      if (isGrid || isRail)
        this.setGridModifiers();
      if (isList)
        this.initList();
    }
  }
  onTabChange(selectedTab) {
    this.selectTab(selectedTab === null || selectedTab === void 0 ? void 0 : selectedTab.detail.tab);
  }
  selectTab(tab) {
    var _a;
    this.currentTab = tab;
    this.currentContent = (_a = this.content) === null || _a === void 0 ? void 0 : _a.filter((contentItem) => { var _a, _b; return ((_a = contentItem === null || contentItem === void 0 ? void 0 : contentItem.tab) === null || _a === void 0 ? void 0 : _a.id) === ((_b = this.currentTab) === null || _b === void 0 ? void 0 : _b.id); })[0];
  }
  componentWillLoad() {
    if (this.content)
      this.handleContent();
  }
  initRail() {
    // Set Rail variant based on device size.
    if (!this.hrsTabsVariant) {
      this.hrsTabsVariant = document.body.clientWidth > _hrs_global_ba2602dc_js__WEBPACK_IMPORTED_MODULE_3__["h"] ? 'button-tabs' : 'text-tabs';
    }
    // Grab all the tab titles so we can populate the HRSTabs component.
    this.enabledTabs = this.content.map((contentItem) => {
      return contentItem.tab;
    });
    // Set the selected or first of the tab options as the current, active tab.
    this.selectedTab ? this.selectTab(this.selectedTab) : this.selectTab(this.enabledTabs[0]);
  }
  setGridModifiers() {
    var _a, _b, _c;
    const contentLength = this.currentContent ? (_a = this.currentContent.items) === null || _a === void 0 ? void 0 : _a.length : 0;
    const isTabletSize = this.el.clientWidth > _hrs_global_ba2602dc_js__WEBPACK_IMPORTED_MODULE_3__["h"];
    // If the variant is not 'default', render larger grid tiles for tablet size devices.
    // We are only concerned with bigger tiles for up to 3 content items because 4 or more smaller tiles fill the screen.
    this.hasLargeTiles = isTabletSize && contentLength <= 3;
    // Set gradient background for Content with module tiles e.g. the Home Page Component in PCM/T
    // and for Content with a button rail e.g. the Education Page in PCM/T.
    const hasModuleTiles = ((_c = (_b = this.currentContent) === null || _b === void 0 ? void 0 : _b.items[0]) === null || _c === void 0 ? void 0 : _c.variant) === 'module';
    const isRail = this.variant === 'rail';
    if (hasModuleTiles || (isTabletSize && isRail)) {
      this.background = 'gradient';
    }
  }
  /**
   * This method is called when the content configuration changes,
   * so we can reset selections as needed.
   */
  initList() {
    var _a, _b, _c, _d, _e, _f;
    const isRadioList = ((_b = (_a = this.currentContent) === null || _a === void 0 ? void 0 : _a.lists[0]) === null || _b === void 0 ? void 0 : _b.variant) === 'radio';
    const isCheckboxList = ((_d = (_c = this.currentContent) === null || _c === void 0 ? void 0 : _c.lists[0]) === null || _d === void 0 ? void 0 : _d.variant) === 'checkbox';
    const clearSelections = (_f = (_e = this.currentContent) === null || _e === void 0 ? void 0 : _e.lists[0]) === null || _f === void 0 ? void 0 : _f.clearSelections;
    if (isRadioList) {
      const radioGroup = this.el.querySelector('hrs-radio-group');
      radioGroup === null || radioGroup === void 0 ? void 0 : radioGroup.initRadioGroup();
    }
    if (isCheckboxList && clearSelections) {
      const checkboxes = this.el.querySelectorAll('hrs-checkbox');
      checkboxes.forEach((checkbox) => {
        checkbox.classList.remove('is-checked');
        checkbox.setAttribute('default-checked', 'false');
      });
    }
  }
  componentDidRender() {
    // add padding if FAB is present and covers any content
    this.adjustForObscuredContent();
    // set fixed height when content is within a hrs-modal
    this.setHeightInModal();
  }
  // @ts-ignore
  populateList() {
    var _a;
    return Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["F"], null, (_a = this.currentContent) === null || _a === void 0 ? void 0 : _a.lists.map((list) => this.generateList(list)));
  }
  render() {
    const contextMode = Object(_ui_config_8be75a31_js__WEBPACK_IMPORTED_MODULE_1__["g"])();
    const { adjustForFab, background, hasLargeTiles, hrsTabsVariant, variant, qa } = this;
    const populateContentType = variant ? `populate${Object(_helpers_0e8d6178_js__WEBPACK_IMPORTED_MODULE_2__["c"])(variant)}` : null;
    return (Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { mode: contextMode, "data-qa": qa ? qa : null, class: {
        [`content-${variant}`]: true,
        'has-large-tiles': /grid/.test(variant) && hasLargeTiles,
        [`has-${hrsTabsVariant}`]: /rail/.test(variant),
        'adjust-for-fab': adjustForFab && !/rail/.test(variant),
        [`bg-${background}`]: true
      } }, variant !== 'default' ? this[populateContentType]() : Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
  }
  get el() { return Object(_index_be85d80d_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "background": ["handleBackground"],
    "content": ["handleContent"]
  }; }
};
Content.style = contentNewDesignCss;



//# sourceMappingURL=hrs-content.entry.js.map

/***/ })

}]);
//# sourceMappingURL=51-es2015.js.map