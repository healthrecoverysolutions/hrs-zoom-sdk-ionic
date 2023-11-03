(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"login-page c_splash--page\"\n             scroll=\"false\">\n    <div class=\"c_splash--wrapper\">\n\n        <div class=\"c_splash--logo_container\" (click)=\"openAdmin()\">\n            <div class=\"c_splash--logo_bg\"></div>\n            <div class=\"c_splash--logo\"></div>\n        </div>\n        <div class=\"c_splash--card_container is-login\">\n            <div class=\"c_splash--card_bg\"></div>\n            <main class=\"c_splash--card\">\n                <header class=\"c_splash--card_header c_card--header\">\n                    <div class=\"c_splash--header_bg\"></div>\n                    <ion-button class=\"c_splash--back_btn\"\n                                [routerLink]=\"['/welcome']\"\n                                routerDirection=\"back\"></ion-button>\n                    <span class=\"c_splash--title_text\">\n                        {{ 'SIGNIN' | translate }}\n                    </span>\n                </header>\n                <div class=\"c_splash--card_content c_card--content\">\n                    <form id=\"loginForm\"\n                          class=\"c_splash--form\"\n                          [formGroup]=\"account\">\n                        <ion-list class=\"c_splash--input_wrapper\">\n                            <ion-item class=\"c_splash--input\">\n                                <ion-label class=\"c_splash--input_label\"\n                                           position=\"floating\">\n                                    {{ 'USERNAME' | translate }}\n                                </ion-label>\n                                <ion-input class=\"c_splash--input_field\"\n                                           autocapitalize=\"none\"\n                                           type=\"username\"\n                                           formControlName=\"user\"></ion-input>\n                            </ion-item>\n\n                            <ion-item class=\"c_splash--input\">\n                                <ion-label class=\"c_splash--input_label\"\n                                           position=\"floating\">\n                                    {{ 'PASSWORD' | translate }}\n                                </ion-label>\n                                <ion-input class=\"c_splash--input_field\"\n                                           type=\"password\"\n                                           autocapitalize=\"none\"\n                                           formControlName=\"pass\"></ion-input>\n                            </ion-item>\n                        </ion-list>\n                    </form>\n                </div>\n                <footer class=\"c_splash--card_footer c_card--buttons\">\n                    <div class=\"c_splash--footer_bg\"></div>\n                    <ion-button class=\"c_button login\"\n                                (click)=\"account.valid && doLogin()\"\n                                type=\"submit\"\n                                [disabled]=\"!account.valid || loggingIn\">\n                        {{ 'LOGIN_BUTTON' | translate }}\n                    </ion-button>\n                </footer>\n            </main>\n        </div>\n    </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");










let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _login_page__WEBPACK_IMPORTED_MODULE_9__["LoginPage"]
                }
            ]),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_9__["LoginPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
        providers: [
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"],
            ngx_logger__WEBPACK_IMPORTED_MODULE_7__["NGXLogger"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
        ]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _services_user_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user/user */ "./src/app/services/user/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _clinician_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @clinician/providers */ "./src/app/services/providers.ts");









let LoginPage = class LoginPage {
    constructor(navCtrl, toastCtrl, translateService, menuCtrl, user, logger, formBuilder, router, adminService) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.menuCtrl = menuCtrl;
        this.user = user;
        this.logger = logger;
        this.formBuilder = formBuilder;
        this.router = router;
        this.adminService = adminService;
        this.translateService.get('LOGIN_ERROR').subscribe((value) => {
            this.loginErrorString = value;
        });
        this.translateService.get('LOGIN_SUCCESS').subscribe((value) => {
            this.loginSuccessString = value;
        });
    }
    ngOnInit() {
        this.menuCtrl.enable(false);
        // The account fields for the login form.
        this.account = this.formBuilder.group({
            user: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            pass: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('clinician', null)
        });
    }
    ionViewDidLeave() {
        this.menuCtrl.enable(true);
    }
    // Attempt to login in through our User service
    doLogin() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loggingIn = true;
            this.user.login(this.account.value).subscribe({
                next: (resp) => {
                    this.loggingIn = false;
                    this.data = resp;
                    let toastMessage = this.loginSuccessString;
                    if (this.user.data.type !== 'clinician') {
                        toastMessage = this.loginErrorString;
                    }
                    else {
                        this.router.navigateByUrl('/patient-list');
                    }
                    this.loginToast(toastMessage);
                    return this.data;
                },
                error: (err) => {
                    // Unable to log in
                    let toastFailMessage = this.loginErrorString;
                    this.loggingIn = false;
                    this.loginToast(toastFailMessage);
                }
            }).add(() => this.account.reset());
        });
    }
    loginToast(toastMessage) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loginToast = yield this.toastCtrl.create({
                message: toastMessage,
                duration: 3000,
                position: 'top'
            });
            return yield loginToast.present();
        });
    }
    openAdmin() {
        this.adminService.openAdmin();
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _services_user_user__WEBPACK_IMPORTED_MODULE_6__["User"] },
    { type: ngx_logger__WEBPACK_IMPORTED_MODULE_5__["NGXLogger"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _clinician_providers__WEBPACK_IMPORTED_MODULE_8__["AdminService"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
        providers: [ngx_logger__WEBPACK_IMPORTED_MODULE_5__["NGXLogger"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        _services_user_user__WEBPACK_IMPORTED_MODULE_6__["User"],
        ngx_logger__WEBPACK_IMPORTED_MODULE_5__["NGXLogger"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _clinician_providers__WEBPACK_IMPORTED_MODULE_8__["AdminService"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map