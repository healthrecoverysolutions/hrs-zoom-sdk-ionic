(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["organizational-login-organization-login-module"],{

/***/ "./src/app/organizational-login/organization-login.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/organizational-login/organization-login.module.ts ***!
  \*******************************************************************/
/*! exports provided: OrganizationalLoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationalLoginPageModule", function() { return OrganizationalLoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _organizational_login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./organizational-login.page */ "./src/app/organizational-login/organizational-login.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var OrganizationalLoginPageModule = /** @class */ (function () {
    function OrganizationalLoginPageModule() {
    }
    OrganizationalLoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild(),
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _organizational_login_page__WEBPACK_IMPORTED_MODULE_7__["OrganizationalLoginPage"]
                    }
                ]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ],
            providers: [
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"],
                ngx_logger__WEBPACK_IMPORTED_MODULE_6__["NGXLogger"]
            ],
            declarations: [_organizational_login_page__WEBPACK_IMPORTED_MODULE_7__["OrganizationalLoginPage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
        })
    ], OrganizationalLoginPageModule);
    return OrganizationalLoginPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=organizational-login-organization-login-module-es5.js.map