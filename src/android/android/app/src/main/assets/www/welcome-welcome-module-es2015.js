(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["welcome-welcome-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/welcome/welcome.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/welcome/welcome.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content scroll=\"false\" class=\"welcome-page c_splash--page c_splash--ccm\">\n    <div class=\"c_splash--wrapper\">\n        <div class=\"c_splash--logo_container\">\n            <div class=\"c_splash--logo_bg\"></div>\n            <div class=\"c_splash--logo\"></div>\n        </div>\n        <div class=\"c_splash--card_container\">\n            <div class=\"c_splash--card_bg\"></div>\n            <main class=\"c_splash--card\">\n                <header class=\"c_splash--card_title\">\n                    {{ 'WELCOME_INTRO' | translate }}\n                </header>\n                <div class=\"c_splash--card_content\">\n                    <div class=\"c_splash--buttons c_buttons\">\n                        <ion-button class=\"c_button c_button-center\" (click)=\"login()\">\n                            {{ 'SIGNIN' | translate }}\n                        </ion-button>\n                        <ion-button class=\"c_button c_button-center\" (click)=\"organizationalLogin()\">\n                            {{ 'ORGANIZATIONAL_SIGNIN' | translate }}\n                        </ion-button>\n                    </div>\n                </div>\n                <footer class=\"c_splash--footer\">\n                    <div class=\"c_splash--copyright\">\n                        <div class=\"c_splash--copyright_title\">\n                            {{currentYear}} ©\n                            <a href=\"#\" onclick=\"cordova.InAppBrowser.open('https://www.healthrecoverysolutions.com/','_system', 'location=yes')\">\n                                {{ 'WELCOME_TITLE' | translate }}\n                            </a>\n                        </div>\n                        <div class=\"c_splash--copyright_text\">\n                            {{ 'WELCOME_COPYRIGHT' | translate }}\n                        </div>\n                        <div class=\"c_splash--copyright_terms\">\n                            <a href=\"#\"\n                               onclick=\"cordova.InAppBrowser.open('https://www.healthrecoverysolutions.com/privacy-policy','_system', 'location=yes')\">\n                                {{ 'WELCOME_TERMS' | translate }}\n                            </a>\n                        </div>\n                    </div>\n                </footer>\n            </main>\n        </div>\n    </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/welcome/welcome.module.ts":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.module.ts ***!
  \*******************************************/
/*! exports provided: WelcomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome.page */ "./src/app/welcome/welcome.page.ts");







let WelcomePageModule = class WelcomePageModule {
};
WelcomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]
                }
            ]),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild()
        ],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]]
    })
], WelcomePageModule);



/***/ }),

/***/ "./src/app/welcome/welcome.page.ts":
/*!*****************************************!*\
  !*** ./src/app/welcome/welcome.page.ts ***!
  \*****************************************/
/*! exports provided: WelcomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePage", function() { return WelcomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let WelcomePage = class WelcomePage {
    constructor(menuCtrl, router) {
        this.menuCtrl = menuCtrl;
        this.router = router;
        this.currentYear = (new Date()).getFullYear();
        this.menuCtrl.swipeGesture(false);
    }
    ngOnInit() {
        this.menuCtrl.enable(false);
    }
    ionViewDidLeave() {
        this.menuCtrl.enable(true);
    }
    login() {
        this.router.navigateByUrl('/login');
    }
    organizationalLogin() {
        this.router.navigateByUrl('/organizational-login');
    }
};
WelcomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
WelcomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-welcome',
        template: __webpack_require__(/*! raw-loader!./welcome.page.html */ "./node_modules/raw-loader/index.js!./src/app/welcome/welcome.page.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], WelcomePage);



/***/ })

}]);
//# sourceMappingURL=welcome-welcome-module-es2015.js.map