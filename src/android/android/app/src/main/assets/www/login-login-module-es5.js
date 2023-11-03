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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");










var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
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
    return LoginPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _services_user_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user/user */ "./src/app/services/user/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _clinician_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @clinician/providers */ "./src/app/services/providers.ts");









var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, toastCtrl, translateService, menuCtrl, user, logger, formBuilder, router, adminService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.menuCtrl = menuCtrl;
        this.user = user;
        this.logger = logger;
        this.formBuilder = formBuilder;
        this.router = router;
        this.adminService = adminService;
        this.translateService.get('LOGIN_ERROR').subscribe(function (value) {
            _this.loginErrorString = value;
        });
        this.translateService.get('LOGIN_SUCCESS').subscribe(function (value) {
            _this.loginSuccessString = value;
        });
    }
    LoginPage.prototype.ngOnInit = function () {
        this.menuCtrl.enable(false);
        // The account fields for the login form.
        this.account = this.formBuilder.group({
            user: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            pass: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('clinician', null)
        });
    };
    LoginPage.prototype.ionViewDidLeave = function () {
        this.menuCtrl.enable(true);
    };
    // Attempt to login in through our User service
    LoginPage.prototype.doLogin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.loggingIn = true;
                this.user.login(this.account.value).subscribe({
                    next: function (resp) {
                        _this.loggingIn = false;
                        _this.data = resp;
                        var toastMessage = _this.loginSuccessString;
                        if (_this.user.data.type !== 'clinician') {
                            toastMessage = _this.loginErrorString;
                        }
                        else {
                            _this.router.navigateByUrl('/patient-list');
                        }
                        _this.loginToast(toastMessage);
                        return _this.data;
                    },
                    error: function (err) {
                        // Unable to log in
                        var toastFailMessage = _this.loginErrorString;
                        _this.loggingIn = false;
                        _this.loginToast(toastFailMessage);
                    }
                }).add(function () { return _this.account.reset(); });
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.loginToast = function (toastMessage) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loginToast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: toastMessage,
                            duration: 3000,
                            position: 'top'
                        })];
                    case 1:
                        loginToast = _a.sent();
                        return [4 /*yield*/, loginToast.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoginPage.prototype.openAdmin = function () {
        this.adminService.openAdmin();
    };
    LoginPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
        { type: _services_user_user__WEBPACK_IMPORTED_MODULE_6__["User"] },
        { type: ngx_logger__WEBPACK_IMPORTED_MODULE_5__["NGXLogger"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _clinician_providers__WEBPACK_IMPORTED_MODULE_8__["AdminService"] }
    ]; };
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
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module-es5.js.map