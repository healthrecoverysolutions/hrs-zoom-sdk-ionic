(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-patient-add-patient-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/add-patient/add-patient.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-patient/add-patient.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar class=\"c_app_header is-modal\">\n        <ion-buttons class=\"c_app_header--buttons\" slot=\"start\">\n            <ion-button class=\"c_app_header--btn\" (click)=\"confirmExit()\">\n                <ion-icon class=\"c_app_header--icon-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title class=\"c_app_header--title\">\n            <span class=\"c_app_header--text\">\n                {{ 'ADD_PATIENT.TITLE' | translate }}\n            </span>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content scroll=\"false\">\n    <ion-card class=\"c_card c_add_patient--card_wrapper\">\n        <ion-card-header class=\"c_card--header\">\n            <ion-label>\n                <span>Step {{currentPage}} of {{lastPage}}</span>\n                <br>\n                <span *ngIf=\"currentPage === 1\">{{ 'ADD_PATIENT.STEP.ONE' | translate }}</span>\n                <span *ngIf=\"currentPage === 2\">{{ 'ADD_PATIENT.STEP.TWO' | translate }}</span>\n                <span *ngIf=\"currentPage === 3 && hasCustomFields\">{{ 'ADD_PATIENT.STEP.CUSTOM' | translate }}</span>\n                <span *ngIf=\"currentPage === 3 && !hasCustomFields || currentPage === 4\">{{ 'ADD_PATIENT.STEP.REVIEW' | translate }}</span>\n            </ion-label>\n        </ion-card-header>\n        <ion-card-content class=\"c_card--content\">\n            <form [formGroup]=\"addPatientForm\" class=\"c_form\">\n                <div *ngIf=\"currentPage === 1 || currentPage === 2\">\n                    <div *ngFor=\"let key of addPatientFormKeys; let i = index\">\n                        <ion-item class=\"c_form--field-group\">\n                            <!-- field label -->\n                            <ion-label\n                                *ngIf=\"key != 'subgroup'\"\n                                position=\"stacked\"\n                                class=\"c_form--label {{ (key != 'middle' && key != 'gender' && key != 'subgroup') ? 'c_form--label-required' : '' }}\"\n                                >{{ addPatientFormStrings[key] | translate }}</ion-label>\n\n                            <ion-input\n                                *ngIf=\"key === 'first' || key === 'middle' || key === 'last' || key === 'phone' || key === 'pid'\"\n                                position=\"stacked\"\n                                class=\"c_form--field c_form--field-basic\"\n                                type=\"{{ (key === 'phone') ? 'tel' : 'text' }}\"\n                                enterkeyhint=\"next\"\n                                autocapitalize=\"{{(key === 'pid' || key === 'phone') ? 'off' : 'on'}}\"\n                                autocomplete=\"off\"\n                                placeholder=\"{{ ((key === 'phone') ? 'ADD_PATIENT.PLACEHOLDER.PHONE' : ((key === 'pid') ? 'ADD_PATIENT.PLACEHOLDER.PATIENTID' : addPatientFormStrings[key])) | translate }}\"\n                                formControlName=\"{{ key }}\"\n                                [class.invalid]=\"(form[key].touched || form[key].dirty) && form[key].errors\"\n                            ></ion-input>\n                            <ion-datetime\n                                *ngIf=\"key === 'dob'\"\n                                position=\"stacked\"\n                                class=\"c_form--field c_form--field-date\"\n                                placeholder=\"mm/dd/yyyy\"\n                                formControlName=\"dob\"\n                                max=\"{{ currentDate }}\"\n                                display-format=\"MM/DD/YYYY\"\n                                picker-format=\"MM DD YYYY\"\n                                [class.invalid]=\"(form[key].touched || form[key].dirty) && form[key].errors\"\n                            ></ion-datetime>\n                            <ion-select\n                                addShadowPartsToSelectBox\n                                id=\"select_gender\"\n                                *ngIf=\"key === 'gender'\"\n                                placeholder=\"{{ 'ADD_PATIENT.PLACEHOLDER.GENDER' | translate }}\"\n                                position=\"stacked\"\n                                class=\"c_form--field c_form--field-select\"\n                                formControlName=\"gender\"\n                                cancelText=\"{{'ADD_PATIENT.CANCEL' | translate}}\"\n                                okText=\"{{'ADD_PATIENT.OK' | translate}}\"\n                                (ionCancel)=\"handleInputCancel('gender')\"\n                                [class.invalid]=\"(form[key].touched || form[key].dirty) && form[key].errors\">\n                                <ion-select-option value=\" \">{{ 'ADD_PATIENT.NONE' | translate }}</ion-select-option>\n                                <ion-select-option value=\"F\">{{ 'GENDER.FEMALE' | translate }}</ion-select-option>\n                                <ion-select-option value=\"M\">{{ 'GENDER.MALE' | translate }}</ion-select-option>\n                                <ion-select-option value=\"X\">{{ 'GENDER.UNKNOWN' | translate }}</ion-select-option>\n                                <ion-select-option value=\"U\">{{ 'GENDER.OTHER' | translate }}</ion-select-option>\n                            </ion-select>\n\n                            <!--\n                                subgroups (2 scenarios)\n                                1 - \"oneSubgroup\" a single subgroup is assigned to the clinician: the patient automatically is assigned the clinician's subgroup - the field is basically read-only\n                                2 - \"selectSubgroup\" is when no subgroup is assigned and the clinician has effectively access to ALL subgroups: -optional- clincian can pick from all subgroups in the environment\n                            -->\n                            <ng-template [ngIf]=\"key === 'subgroup'\">\n                                <div [ngSwitch]=\"subgroupSelectionStrategy\" class=\"c_add_patient--subgroup_wrapper\">\n\n                                    <!-- Scenario 1: Subgroup defaults to the clinician's only subgroup -->\n                                    <div *ngSwitchCase=\"'subgroupAutoAssigned'\" class=\"c_form--static_group\">\n                                        <p class=\"c_form--static_label\">{{ addPatientFormStrings[key] | translate }}</p>\n                                        <p class=\"c_form--static_value\">{{ getClinicianSubgroup()[0] }}</p>\n                                    </div>\n\n                                    <ion-label\n                                        *ngIf=\"subgroupSelectionStrategy == 'selectSubgroup'\"\n                                        position=\"stacked\"\n                                        class=\"c_form--label\"\n                                        [ngClass]=\"{'c_form--label-required' : subgroupRequired}\"\n                                    >{{ addPatientFormStrings[key] | translate }}</ion-label>\n\n                                    <!-- Scenario 2: Show all the available subgroups  -->\n                                    <ion-select\n                                        *ngSwitchCase=\"'selectSubgroup'\"\n                                        addShadowPartsToSelectBox\n                                        class=\"c_form--field c_form--field-select c_add_patient--select_box\"\n                                        position=\"stacked\"\n                                        formControlName=\"subgroup\"\n                                        placeholder=\"{{ 'ADD_PATIENT.PLACEHOLDER.SUBGROUP' | translate }}\"\n                                        cancelText=\"{{'ADD_PATIENT.CANCEL' | translate}}\"\n                                        okText=\"{{'ADD_PATIENT.OK' | translate}}\"\n                                        (ionCancel)=\"handleInputCancel('subgroup')\"\n                                        [class.invalid]=\"(form[key].touched || form[key].dirty) && form[key].errors\">\n                                        <ion-select-option *ngIf=\"!subgroupRequired\" value=\"{{ 'ADD_PATIENT.NONE' | translate }}\">{{ 'ADD_PATIENT.NONE' | translate }}</ion-select-option>\n                                        <ion-select-option *ngFor=\"let subgroup of subgroups\" value=\"{{ subgroup }}\">{{ subgroup }}</ion-select-option>\n                                    </ion-select>\n                                </div>\n                            </ng-template>\n\n                            <p *ngIf=\"(form[key].value === '') ? ((form[key].touched || form[key].dirty) && form[key].errors) : form[key].errors\" class=\"c_form--error-msg\">\n                                <span *ngFor=\"let error of getErrors(key)\">{{ validationMessages[key][error] }}</span>\n                            </p>\n                        </ion-item>\n                    </div>\n                </div>\n                <!-- Custom Fields Step -->\n                <div *ngIf=\"currentPage === 3 && hasCustomFields\">\n                    <div *ngFor=\"let field of newPatient[customAttributeSetting]; let i = index\">\n                        <ion-item class=\"c_form--field-group\">\n                            <ion-label\n                                class=\"c_form--label {{ (field.required) ? 'c_form--label-required' : ''}}\"\n                                position=\"stacked\"\n                                >{{ field.name }}</ion-label>\n                            <ion-input\n                                class=\"c_form--field\"\n                                *ngIf=\"field.type === 'text'\"\n                                placeholder=\"{{ field.name }}\"\n                                autocapitalize=\"none\"\n                                formControlName=\"{{ 'custom_' + i }}\"\n                                [class.invalid]=\"(form['custom_' + i].touched || form['custom_' + i].dirty) && form['custom_' + i].errors\"\n                            ></ion-input>\n                            <ion-select\n                                addShadowPartsToSelectBox\n                                class=\"c_form--field c_form--field-select\"\n                                *ngIf=\"field.type === 'boolean'\"\n                                position=\"stacked\"\n                                placeholder=\"{{ field.name }}\"\n                                formControlName=\"{{ 'custom_' + i }}\"\n                                cancelText=\"{{'ADD_PATIENT.CANCEL' | translate}}\"\n                                okText=\"{{'ADD_PATIENT.OK' | translate}}\"\n                                (ionCancel)=\"handleInputCancel('custom_' + i)\"\n                                [class.invalid]=\"(form['custom_' + i].touched || form['custom_' + i].dirty) && form['custom_' + i].errors\">\n                                <ion-select-option value=\"true\">{{ 'USER_INPUT.YES' | translate }}</ion-select-option>\n                                <ion-select-option value=\"false\">{{ 'USER_INPUT.NO' | translate }}</ion-select-option>\n                            </ion-select>\n                            <p *ngIf=\"(form['custom_' + i].value === '') ?\n                                ((form['custom_' + i].touched || form['custom_' + i].dirty) && form['custom_' + i].errors) :\n                                form['custom_' + i].errors\" class=\"c_form--error-msg\">{{ 'ADD_PATIENT.VALIDATION.REQUIRED' | translate }}</p>\n                        </ion-item>\n                    </div>\n                </div>\n                <!-- Review Step -->\n                <div *ngIf=\"currentPage === 3 && !hasCustomFields || currentPage === 4\">\n                    <ion-list\n                        class=\"c_form--review\"\n                        inset=\"true\"\n                        lines=\"full\"\n                    >\n                        <ion-item class=\"c_form--review-item\">\n                            <ion-label class=\"c_form--review-label\">{{ 'NAME' | translate}}</ion-label>\n                            <ion-text class=\"c_form--review-value\">{{newPatient.name.first}} {{newPatient.name.middle}} {{newPatient.name.last}}</ion-text>\n                        </ion-item>\n                        <ion-item class=\"c_form--review-item\">\n                            <ion-label class=\"c_form--review-label\">{{ 'ADD_PATIENT.LABEL.DOB' | translate}}</ion-label>\n                            <ion-text class=\"c_form--review-value\">{{newPatient.dob | date:'MM/dd/yyyy'}}</ion-text>\n                        </ion-item>\n                        <ion-item class=\"c_form--review-item\">\n                            <ion-label class=\"c_form--review-label\">{{ 'ADD_PATIENT.LABEL.GENDER' | translate}}</ion-label>\n                            <ion-text class=\"c_form--review-value\">{{ ( newPatient.gender === ' ' ? 'ADD_PATIENT.NONE' : newPatient.gender ) | translate}}</ion-text>\n                        </ion-item>\n                        <ion-item class=\"c_form--review-item\">\n                            <ion-label class=\"c_form--review-label\">{{ 'ADD_PATIENT.LABEL.PHONE'| translate}}</ion-label>\n                            <ion-text class=\"c_form--review-value\">{{newPatient.phone}}</ion-text>\n                        </ion-item>\n                        <ion-item class=\"c_form--review-item\">\n                            <ion-label class=\"c_form--review-label\">{{ 'ADD_PATIENT.LABEL.PATIENTID' | translate}}</ion-label>\n                            <ion-text class=\"c_form--review-value\">{{newPatient.pid}}</ion-text>\n                        </ion-item>\n                        <ion-item class=\"c_form--review-item\" *ngIf=\"hasSubgroup\">\n                            <ion-label class=\"c_form--review-label\">{{ 'ADD_PATIENT.LABEL.SUBGROUP' | translate}}</ion-label>\n                            <ion-text class=\"c_form--review-value\">{{ ( newPatient.subgroup === ' ' ? 'ADD_PATIENT.NONE' : newPatient.subgroup ) | translate}}</ion-text>\n                        </ion-item>\n                        <!-- custom fields (if any) -->\n                        <ng-template [ngIf]=\"hasCustomFields\">\n                            <ion-item class=\"c_form--review-item\" *ngFor=\"let field of newPatient[customAttributeSetting]\">\n                                <ion-label class=\"c_form--review-label\">{{field.name}}</ion-label>\n                                <ion-text class=\"c_form--review-value\">\n                                    {{getCustomFieldValue(field.value, field.type)}}\n                                </ion-text>\n                            </ion-item>\n                        </ng-template>\n\n                    </ion-list>\n\n                </div>\n            </form>\n        </ion-card-content>\n        <ion-buttons class=\"c_card--buttons\">\n            <button ion-button class=\"c_card--button-left\" *ngIf=\"(currentPage > 1)\" (click)=\"handleBackClick()\">{{ 'ADD_PATIENT.BACK' | translate }}</button>\n            <button ion-button class=\"c_card--button button-disabled c_add_patient--forward_btn\" [disabled]=\"addPatientForm.invalid || loading\" (click)=\"handleForwardClick()\">\n                <span *ngIf=\"!loading && (currentPage < lastPage)\" class=\"c_add_patient--forward_text\">{{ 'ADD_PATIENT.NEXT' | translate }}</span>\n                <span *ngIf=\"!loading && (currentPage === lastPage)\" class=\"c_add_patient--forward_text\">{{ 'ADD_PATIENT.SUBMIT' | translate }}</span>\n                <span *ngIf=\"loading\"><ion-spinner></ion-spinner></span>\n            </button>\n        </ion-buttons>\n    </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/add-patient/add-patient.module.ts":
/*!***************************************************!*\
  !*** ./src/app/add-patient/add-patient.module.ts ***!
  \***************************************************/
/*! exports provided: AddPatientPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPatientPageModule", function() { return AddPatientPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _add_patient_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-patient.page */ "./src/app/add-patient/add-patient.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/pipes/pipes.module.ts");
/* harmony import */ var src_common_directives_selectbox_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/common/directives/selectbox.directive */ "./src/common/directives/selectbox.directive.ts");










var AddPatientPageModule = /** @class */ (function () {
    function AddPatientPageModule() {
    }
    AddPatientPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _add_patient_page__WEBPACK_IMPORTED_MODULE_6__["AddPatientPage"]
                    }
                ]),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_add_patient_page__WEBPACK_IMPORTED_MODULE_6__["AddPatientPage"], src_common_directives_selectbox_directive__WEBPACK_IMPORTED_MODULE_9__["AddShadowPartsToSelectBox"]]
        })
    ], AddPatientPageModule);
    return AddPatientPageModule;
}());



/***/ }),

/***/ "./src/app/add-patient/add-patient.page.scss":
/*!***************************************************!*\
  !*** ./src/app/add-patient/add-patient.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".c_add_patient--card_wrapper {\n  min-height: 32.5rem; }\n  @media (min-height: 1024px) {\n    .c_add_patient--card_wrapper {\n      min-height: 50rem; } }\n  @media (min-height: 1366px) {\n    .c_add_patient--card_wrapper {\n      min-height: 65rem; } }\n  .c_add_patient--card_wrapper .c_card--content {\n    margin: 30px 0 0 0; }\n  .c_add_patient--subgroup_wrapper {\n  width: 100%; }\n  .c_add_patient--subgroup_wrapper .c_form--static_group {\n    display: block; }\n  .c_add_patient--subgroup_wrapper .c_form--static_group .c_form--static_label {\n      color: var(--color-primary-dark); }\n  .c_add_patient--subgroup_wrapper .c_form--static_group .c_form--static_value {\n      text-align: center; }\n  .c_add_patient--select_box {\n  width: 100%;\n  min-width: 100%; }\n  .c_add_patient--forward_btn {\n  white-space: nowrap;\n  min-width: -moz-fit-content;\n  min-width: fit-content; }\n  .c_add_patient--forward_btn .c_add_patient--forward_text {\n    padding: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnViaGF2c2F4ZW5hL0RvY3VtZW50cy9JbXBldHVzX1Byb2plY3RzL0FuZ3VsYXJfTW9ub3JlcG9fR2l0TGFiX0NvcHkvYW5ndWxhci1tb25vcmVwby9hcHBzL21vYmlsZS1jbGluaWNpYW4vc3JjL2FwcC9hZGQtcGF0aWVudC9hZGQtcGF0aWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxtQkFBbUIsRUFBQTtFQUVuQjtJQUhKO01BSVEsaUJBQWlCLEVBQUEsRUFTeEI7RUFORztJQVBKO01BUVEsaUJBQWlCLEVBQUEsRUFLeEI7RUFiRDtJQVdRLGtCQUFrQixFQUFBO0VBRzFCO0VBQ0ksV0FBVyxFQUFBO0VBRGY7SUFJUSxjQUFjLEVBQUE7RUFKdEI7TUFNZ0MsZ0NBQWdDLEVBQUE7RUFOaEU7TUFPZ0Msa0JBQWtCLEVBQUE7RUFHbEQ7RUFDSSxXQUFXO0VBQ1gsZUFBZSxFQUFBO0VBR25CO0VBQ0ksbUJBQW1CO0VBQ25CLDJCQUFzQjtFQUF0QixzQkFBc0IsRUFBQTtFQUYxQjtJQUtRLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FkZC1wYXRpZW50L2FkZC1wYXRpZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBpbXBvcnQgXCIuLi8uLi90aGVtZS92YXJpYWJsZXNcIjtcbi8vIENDTSdzIGFkZCBwYXRpZW50IG1vZGFsLXNwZWNpZmljIHN0eWxlc1xuLy8gTW9zdCBzdHlsZXMgYXJlIGluIHRoZSBwYXR0ZXJuLWxpYnJhcnkncyBjX2NhcmQuc2NzcyBhbmQgY19mb3JtLnNjc3Ncbi5jX2FkZF9wYXRpZW50LS1jYXJkX3dyYXBwZXIge1xuICAgIG1pbi1oZWlnaHQ6IDMyLjVyZW07IC8vIDUyMHB4IGtlZXBzIHRoZSBQUkVWL05FWFQgYnV0dG9ucyBhdCB0aGUgc2FtZSBoZWlnaHQgdGhyb3VnaCBlYWNoIHN0ZXBcbiAgICAvLyBmb3Igc21hbGxlciB0YWJsZXRzXG4gICAgQG1lZGlhIChtaW4taGVpZ2h0OiAxMDI0cHgpIHtcbiAgICAgICAgbWluLWhlaWdodDogNTByZW07XG4gICAgfVxuICAgIC8vIGxhcmdlciB0YWJsZXRzXG4gICAgQG1lZGlhIChtaW4taGVpZ2h0OiAxMzY2cHgpIHtcbiAgICAgICAgbWluLWhlaWdodDogNjVyZW07XG4gICAgfVxuICAgIC5jX2NhcmQtLWNvbnRlbnQge1xuICAgICAgICBtYXJnaW46IDMwcHggMCAwIDA7XG4gICAgfVxufVxuLmNfYWRkX3BhdGllbnQtLXN1Ymdyb3VwX3dyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLmNfZm9ybS0tc3RhdGljX2dyb3VwIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAgICAgLmNfZm9ybS0tc3RhdGljX2xhYmVsIHsgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktZGFyayk7IH1cbiAgICAgICAgLmNfZm9ybS0tc3RhdGljX3ZhbHVlIHsgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gICAgfVxufVxuLmNfYWRkX3BhdGllbnQtLXNlbGVjdF9ib3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbn1cblxuLmNfYWRkX3BhdGllbnQtLWZvcndhcmRfYnRuIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG5cbiAgICAuY19hZGRfcGF0aWVudC0tZm9yd2FyZF90ZXh0IHtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/add-patient/add-patient.page.ts":
/*!*************************************************!*\
  !*** ./src/app/add-patient/add-patient.page.ts ***!
  \*************************************************/
/*! exports provided: AddPatientPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPatientPage", function() { return AddPatientPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/providers */ "./src/app/services/providers.ts");
/* harmony import */ var _services_user_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user/user */ "./src/app/services/user/user.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _new_patient_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./new-patient.model */ "./src/app/add-patient/new-patient.model.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _form_label_strings_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form-label-strings.enum */ "./src/app/add-patient/form-label-strings.enum.ts");
/* harmony import */ var _form_validation_strings_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./form-validation-strings.enum */ "./src/app/add-patient/form-validation-strings.enum.ts");
/* harmony import */ var _services_settings_settings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/settings/settings */ "./src/app/services/settings/settings.ts");














var AddPatientPage = /** @class */ (function () {
    function AddPatientPage(alertCtrl, route, navCtrl, user, environment, settings, toastCtrl, menuCtrl, translateService, patientProfileService, logger) {
        this.alertCtrl = alertCtrl;
        this.route = route;
        this.navCtrl = navCtrl;
        this.user = user;
        this.environment = environment;
        this.settings = settings;
        this.toastCtrl = toastCtrl;
        this.menuCtrl = menuCtrl;
        this.translateService = translateService;
        this.patientProfileService = patientProfileService;
        this.logger = logger;
        this.newPatient = new _new_patient_model__WEBPACK_IMPORTED_MODULE_9__["NewPatient"]();
        // text strings for translation (label text)
        this.addPatientFormStrings = _form_label_strings_enum__WEBPACK_IMPORTED_MODULE_11__["FormLabelStrings"];
        this.loading = false;
        this.hasSubgroup = false;
        this.currentPage = 1;
        this.lastPage = 3;
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_10__().format('YYYY-MM-DD');
        this.hasCustomFields = false;
        this.customAttributeSetting = _services_providers__WEBPACK_IMPORTED_MODULE_4__["Environment"].SETTING_PATIENT_CUSTOMATTRIBUTES;
        this.initializeFirstPage();
        this.validationMessages = {
            first: {
                required: this.translateService.instant(_form_validation_strings_enum__WEBPACK_IMPORTED_MODULE_12__["FormValidationStrings"].first)
            },
            last: {
                required: this.translateService.instant(_form_validation_strings_enum__WEBPACK_IMPORTED_MODULE_12__["FormValidationStrings"].last)
            },
            dob: {
                required: this.translateService.instant(_form_validation_strings_enum__WEBPACK_IMPORTED_MODULE_12__["FormValidationStrings"].dob)
            },
            phone: {
                minlength: this.translateService.instant(_form_validation_strings_enum__WEBPACK_IMPORTED_MODULE_12__["FormValidationStrings"].phone)
            },
            pid: {
                required: this.translateService.instant(_form_validation_strings_enum__WEBPACK_IMPORTED_MODULE_12__["FormValidationStrings"].pid)
            }
        };
    }
    AddPatientPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
        this.hasSubgroup = this.environment.hasSetting(_services_providers__WEBPACK_IMPORTED_MODULE_4__["Environment"].SETTING_ENV_SUBGROUPS);
        if (this.hasSubgroup)
            this.configureSubgroupBehavior();
        this.hasCustomFields = this.environment.hasSetting(this.customAttributeSetting);
        if (this.hasCustomFields) {
            this.getCustomFields();
        }
    };
    AddPatientPage.prototype.callScrollFunction = function () {
        if (this.content) {
            this.content.scrollToTop(0);
        }
    };
    /**
     * For Envs with subgroups enabled
     * Users that belong to a single subgroup will have patients auto assigned to that subgroup
     * Users that belong to more than one subgroup are REQUIRED to assign the patient to one of their subgroups
     * Users that DO NOT belong to any subgroup can treat patient subgroup assignment as OPTIONAL
     * @private
     */
    AddPatientPage.prototype.configureSubgroupBehavior = function () {
        this.subgroups = this.environment.getSubgroups();
        if (this.subgroups.length > 1) {
            // Case *insensitive sorting method (as opposed to .sort())
            this.subgroups.sort(function (a, b) {
                a = a.toLowerCase();
                b = b.toLowerCase();
                if (a == b)
                    return 0;
                if (a > b)
                    return 1;
                return -1;
            });
        }
        var userSubgroups = this.getClinicianSubgroup();
        // subgroup assignment is required for User that belong to more than one subgroups
        this.subgroupRequired = userSubgroups.length > 1;
        if (this.subgroupRequired)
            this.validationMessages['subgroup'] = { required: this.translateService.instant(_form_validation_strings_enum__WEBPACK_IMPORTED_MODULE_12__["FormValidationStrings"].subgroup) };
        // Users that belong to subgroups can only show subgroups they belong to.
        // Users without subgroups can access all subgroups in the Env
        if (userSubgroups.length)
            this.subgroups = this.subgroups.filter(function (subgroup) { return userSubgroups.includes(subgroup); });
        // the selection strategy determines if the patient is auto assigned to a subgroup
        // or if the subgroup selection dropdown will be presented to the User
        this.subgroupSelectionStrategy = this.determineSubgroupSelectionStrategy();
    };
    AddPatientPage.prototype.getCustomFields = function () {
        if (!this.newPatient[this.customAttributeSetting]) {
            var allCustomFields = this.environment.getCustomFields();
            if (allCustomFields) {
                this.newPatient[this.customAttributeSetting] = [];
                for (var i = 0; i < allCustomFields.length; i++) {
                    var customField = allCustomFields[i];
                    if (customField.patientsetup) {
                        this.newPatient[this.customAttributeSetting].push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, customField));
                    }
                }
                // make another page for custom Fields form section
                if (this.newPatient[this.customAttributeSetting] && this.newPatient[this.customAttributeSetting].length > 0) {
                    this.lastPage = 4;
                }
                else {
                    this.hasCustomFields = false;
                }
            }
        }
    };
    AddPatientPage.prototype.handleBackClick = function () {
        switch (this.currentPage) {
            case 2:
                // We're on the second page, go back to the first page
                this.initializeFirstPage(true);
                break;
            case 3:
                // Either we're on the custom fields page (step 3 of 4) or the review page (step 3 of 3), regardless going back to the second step
                this.initializeSecondPage(true);
                break;
            case 4:
                // we're on the review page and...
                if (this.hasCustomFields) {
                    // if step 4 of 4, go to the custom fields page
                    this.initializeCustomFieldsPage(true);
                }
                else {
                    // if step 3 of 3, then go back to the second page
                    this.initializeSecondPage(true);
                }
                break;
        }
        this.currentPage--;
    };
    AddPatientPage.prototype.handleForwardClick = function () {
        switch (this.currentPage) {
            case 1:
                this.initializeSecondPage();
                this.currentPage++;
                break;
            case 2:
                if (this.lastPage === 3) {
                    this.initializeReviewPage();
                }
                else {
                    this.initializeCustomFieldsPage();
                }
                this.currentPage++;
                break;
            case 3:
                // we're either on the custom fields step (step 3 of 4) or the review step (step 3 of 3)
                if (this.lastPage === 3) {
                    // if only 3 steps, we must be on the review page (step 3 of 3), so call submit
                    this.submit();
                }
                else {
                    // there are 4 pages and we are only on step 3, therefore go to the review page
                    this.initializeReviewPage();
                    this.currentPage++;
                }
                break;
            case 4:
                // we're on the review page (step 4 of 4), therefore call submit
                this.submit();
                break;
        }
    };
    AddPatientPage.prototype.handleInputCancel = function (input) {
        if (input === 'subgroup') {
            this.addPatientForm.get(input).setValue(this.translateService.instant('ADD_PATIENT.NONE'));
        }
        else {
            this.addPatientForm.get(input).setValue(null);
        }
    };
    AddPatientPage.prototype.initializeFirstPage = function (isBack) {
        // cancel any previous toast instances
        if (this.formErrorToast) {
            this.formErrorToast.dismissAll();
        }
        if (isBack) {
            this.saveSecondPage();
        }
        this.addPatientForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            first: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.newPatient.name.first || '', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required),
            middle: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.newPatient.name.middle || ''),
            last: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.newPatient.name.last || '', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.newPatient.dob || '', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required),
        });
        this.addPatientFormKeys = Object.keys(this.form);
    };
    AddPatientPage.prototype.initializeSecondPage = function (isBack) {
        // cancel any previous toast instances
        if (this.formErrorToast) {
            this.formErrorToast.dismissAll();
        }
        if (isBack) {
            this.saveCustomFieldsPage();
        }
        else {
            this.saveFirstPage();
        }
        var controls = {
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.newPatient.gender || ''),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.newPatient.phone || '', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(10)),
            pid: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.newPatient.pid || '', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required),
        };
        if (this.hasSubgroup) {
            var subgroupValue = this.newPatient.subgroup || this.translateService.instant('ADD_PATIENT.NONE');
            var subgroupControl = this.subgroupRequired ? new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.newPatient.subgroup || '', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required) : new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](subgroupValue);
            controls['subgroup'] = subgroupControl;
        }
        this.addPatientForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"](controls);
        this.addPatientFormKeys = Object.keys(this.form);
    };
    AddPatientPage.prototype.initializeCustomFieldsPage = function (isBack) {
        var _this = this;
        // cancel any previous toast instances
        if (this.formErrorToast) {
            this.formErrorToast.dismissAll();
        }
        if (isBack) {
            // we're on the review page, going back to custom fields, therefore nothing to save.
        }
        else {
            // we're on the second page, save the second page
            this.saveSecondPage();
        }
        var controls = {};
        this.newPatient[this.customAttributeSetting].forEach(function (field, i) {
            if (field.required) {
                controls['custom_' + i] =
                    new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](_this.newPatient[_this.customAttributeSetting][i].value || '', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required);
            }
            else {
                controls['custom_' + i] =
                    new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](_this.newPatient[_this.customAttributeSetting][i].value || '');
            }
        });
        this.addPatientForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"](controls);
        this.addPatientFormKeys = Object.keys(this.form);
        this.callScrollFunction();
    };
    AddPatientPage.prototype.initializeReviewPage = function () {
        // cancel any previous toast instances
        if (this.formErrorToast) {
            this.formErrorToast.dismissAll();
        }
        if (this.hasCustomFields) {
            // we're on the custom fields page, save the custom fields page
            this.saveCustomFieldsPage();
        }
        else {
            // we're on the second page, save the second page
            this.saveSecondPage();
        }
        this.callScrollFunction();
    };
    AddPatientPage.prototype.saveFirstPage = function () {
        this.newPatient.name.first = this.form['first'].value;
        this.newPatient.name.middle = this.form['middle'].value;
        this.newPatient.name.last = this.form['last'].value;
        this.newPatient.dob = this.form['dob'].value;
    };
    AddPatientPage.prototype.saveSecondPage = function () {
        this.newPatient.gender = this.form['gender'].value;
        this.newPatient.phone = this.form['phone'].value;
        this.newPatient.pid = this.form['pid'].value;
        // save the subgroup
        if (this.hasSubgroup && this.subgroups.length > 0) {
            if (this.subgroupSelectionStrategy === 'subgroupAutoAssigned') {
                // if the clinician is assigned to ONLY 1 subgroup, there isn't a form field, therefore assign the patient the same subgroup as the clinician
                this.newPatient['subgroup'] = this.getClinicianSubgroup()[0];
            }
            else {
                // else, grab the subgroup from the form UNLESS the subgroup is --NONE-- then make the value equal to an empty string.
                this.newPatient['subgroup'] = this.form['subgroup'].value === this.translateService.instant('ADD_PATIENT.NONE') ? ' ' : this.form['subgroup'].value;
            }
        }
    };
    AddPatientPage.prototype.saveCustomFieldsPage = function () {
        var _this = this;
        if (this.hasCustomFields) {
            this.newPatient[this.customAttributeSetting].forEach(function (field, i) {
                field.value = _this.form['custom_' + i].value;
            });
        }
    };
    // yes/no custom fields are saved as true/false instead of yes/no
    // this converts true/false to yes/no on the final review step
    AddPatientPage.prototype.getCustomFieldValue = function (customFieldValue, customFieldType) {
        if (customFieldType === 'boolean') {
            if (customFieldValue === 'true') {
                return 'Yes';
            }
            else {
                return 'No';
            }
        }
        return customFieldValue;
    };
    Object.defineProperty(AddPatientPage.prototype, "form", {
        /**
         * Returns FormController.
         */
        get: function () {
            return this.addPatientForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    AddPatientPage.prototype.getErrors = function (key) {
        return Object.keys(this.form[key].errors);
    };
    /**
     * Take in FormGroup values and make 'Add Patient' request.
     */
    AddPatientPage.prototype.submit = function () {
        var _this = this;
        this.loading = true;
        // cancel any previous toast instances
        if (this.formErrorToast) {
            this.formErrorToast.dismissAll();
        }
        this.createRequestBody();
        if (!this.newPatient.name.first || !this.newPatient.name.last || !this.newPatient.dob || !this.newPatient.pid) {
            this.loading = false;
            this.throwErrorAndResetPage();
        }
        else {
            this.patientProfileService.addPatient(this.newPatient).subscribe({
                next: function (res) {
                    if (res && res.hrsid) {
                        if (_this.newPatient.subgroup) {
                            _this.addSubgroup(res.hrsid, _this.newPatient.subgroup);
                        }
                        // pop 'Add Patient' page before sending user to patient's profile so they do not click back to the form
                        // this.navCtrl.pop();
                        // pop isn't a part of ionic 4, so we are navigating forward on submit along with the data
                        var navigationExtras = {
                            queryParams: {
                                patient: { hrsid: res.hrsid }
                            }
                        };
                        _this.navCtrl.navigateForward('/patient-profile', navigationExtras);
                        _this.loading = false;
                        _this.throwSuccessToast();
                    }
                    else {
                        _this.throwErrorAndResetPage();
                    }
                },
                error: function (err) {
                    _this.logger.error(err);
                    _this.throwErrorAndResetPage(err.error.message);
                }
            });
        }
    };
    AddPatientPage.prototype.throwSuccessToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var successToast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            header: this.translateService.instant('ADD_PATIENT.SUCCESS_HEADER'),
                            message: this.translateService.instant('ADD_PATIENT.SUCCESS_MESSAGE'),
                            cssClass: 'toast-success',
                            duration: 3000,
                            position: 'top'
                        })];
                    case 1:
                        successToast = _a.sent();
                        return [4 /*yield*/, successToast.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AddPatientPage.prototype.createRequestBody = function () {
        if (this.hasCustomFields) {
            this.saveCustomFieldsPage();
        }
        else {
            this.saveSecondPage();
        }
        if (this.newPatient.dob) {
            this.newPatient.dob = moment__WEBPACK_IMPORTED_MODULE_10__(this.newPatient.dob, 'YYYY-MM-DD').format('MM/DD/YYYY');
        }
    };
    AddPatientPage.prototype.throwErrorAndResetPage = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var errorMessage;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        message = message ? ': ' + message : '.';
                        return [4 /*yield*/, this.toastCtrl.create({
                                header: this.translateService.instant('ADD_PATIENT.ERROR_HEADER'),
                                message: this.translateService.instant('ADD_PATIENT.ERROR_MESSAGE') + message,
                                cssClass: 'toast-fail',
                                duration: 5000,
                                position: 'top'
                            })];
                    case 1:
                        errorMessage = _a.sent();
                        return [4 /*yield*/, errorMessage.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AddPatientPage.prototype.getClinicianSubgroup = function () {
        if (this.settings && this.settings.settings && this.settings.settings.userData) {
            return this.settings.settings.userData.subgroup;
        }
        return [];
    };
    AddPatientPage.prototype.determineSubgroupSelectionStrategy = function () {
        // used to determine how to display the subgroup select box
        var settings = this.settings.settings;
        if (settings && settings.userData && this.hasSubgroup) {
            if (settings.userData.subgroup.length === 1) {
                // IF User belongs to one subgroup patient is auto-assigned to that subgroup
                // subgroup field is grayed out
                return 'subgroupAutoAssigned';
            }
            else if (settings.userData.subgroup.length !== 1) {
                // IF User has no subgroup assigned or user belongs to more than one subgroup the subgroup select will be displayed
                // For Users with no subgroup then the subgroup is OPTIONAL
                // For Users with subgroups assigned subgroup selection is REQUIRED
                return 'selectSubgroup';
            }
        }
        // If Env is not subgroup enabled or none have been created
        return null;
    };
    AddPatientPage.prototype.addSubgroup = function (hrsid, subgroup) {
        var _this = this;
        var saveSubgroupRequest = { subgroup: subgroup };
        this.patientProfileService.savePatientSettings(hrsid, saveSubgroupRequest).subscribe({
            next: function () {
                _this.logger.log('Successfully set subgroup for new patient');
            },
            error: function () {
                _this.errorToastMessage();
            }
        });
    };
    AddPatientPage.prototype.errorToastMessage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            header: this.translateService.instant('ADD_PATIENT.WARNING.SUBGROUP_HEADER'),
                            message: this.translateService.instant('ADD_PATIENT.WARNING.SUBGROUP_MESSAGE'),
                            cssClass: 'toast-warning',
                            duration: 5000,
                            position: 'top'
                        })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AddPatientPage.prototype.confirmExit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: this.translateService.instant('ADD_PATIENT.ALERT-HEADER'),
                            message: this.translateService.instant('ADD_PATIENT.ALERT-MESSAGE'),
                            buttons: [
                                {
                                    text: this.translateService.instant('ADD_PATIENT.ALERT-EXIT'),
                                    handler: function () { return _this.dismiss(); }
                                },
                                {
                                    text: this.translateService.instant('ADD_PATIENT.ALERT-CONTINUE'),
                                    handler: function () { return _this.alertCtrl.dismiss(); }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [2 /*return*/, alert.present()];
                }
            });
        });
    };
    AddPatientPage.prototype.dismiss = function () {
        this.navCtrl.navigateBack('/patient-list');
    };
    AddPatientPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
        { type: _services_user_user__WEBPACK_IMPORTED_MODULE_5__["User"] },
        { type: _services_providers__WEBPACK_IMPORTED_MODULE_4__["Environment"] },
        { type: _services_settings_settings__WEBPACK_IMPORTED_MODULE_13__["Settings"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: _services_providers__WEBPACK_IMPORTED_MODULE_4__["PatientProfileService"] },
        { type: ngx_logger__WEBPACK_IMPORTED_MODULE_7__["NGXLogger"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"])
    ], AddPatientPage.prototype, "content", void 0);
    AddPatientPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-add-patient',
            template: __webpack_require__(/*! raw-loader!./add-patient.page.html */ "./node_modules/raw-loader/index.js!./src/app/add-patient/add-patient.page.html"),
            providers: [ngx_logger__WEBPACK_IMPORTED_MODULE_7__["NGXLogger"]],
            styles: [__webpack_require__(/*! ./add-patient.page.scss */ "./src/app/add-patient/add-patient.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
            _services_user_user__WEBPACK_IMPORTED_MODULE_5__["User"],
            _services_providers__WEBPACK_IMPORTED_MODULE_4__["Environment"],
            _services_settings_settings__WEBPACK_IMPORTED_MODULE_13__["Settings"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _services_providers__WEBPACK_IMPORTED_MODULE_4__["PatientProfileService"],
            ngx_logger__WEBPACK_IMPORTED_MODULE_7__["NGXLogger"]])
    ], AddPatientPage);
    return AddPatientPage;
}());



/***/ }),

/***/ "./src/app/add-patient/form-label-strings.enum.ts":
/*!********************************************************!*\
  !*** ./src/app/add-patient/form-label-strings.enum.ts ***!
  \********************************************************/
/*! exports provided: FormLabelStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLabelStrings", function() { return FormLabelStrings; });
var FormLabelStrings;
(function (FormLabelStrings) {
    FormLabelStrings["first"] = "ADD_PATIENT.LABEL.FIRST";
    FormLabelStrings["middle"] = "ADD_PATIENT.LABEL.MIDDLE";
    FormLabelStrings["last"] = "ADD_PATIENT.LABEL.LAST";
    FormLabelStrings["dob"] = "ADD_PATIENT.LABEL.DOB";
    FormLabelStrings["gender"] = "ADD_PATIENT.LABEL.GENDER";
    FormLabelStrings["phone"] = "ADD_PATIENT.LABEL.PHONE";
    FormLabelStrings["pid"] = "ADD_PATIENT.LABEL.PATIENTID";
    FormLabelStrings["subgroup"] = "ADD_PATIENT.LABEL.SUBGROUP";
})(FormLabelStrings || (FormLabelStrings = {}));


/***/ }),

/***/ "./src/app/add-patient/form-validation-strings.enum.ts":
/*!*************************************************************!*\
  !*** ./src/app/add-patient/form-validation-strings.enum.ts ***!
  \*************************************************************/
/*! exports provided: FormValidationStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormValidationStrings", function() { return FormValidationStrings; });
var FormValidationStrings;
(function (FormValidationStrings) {
    FormValidationStrings["first"] = "ADD_PATIENT.VALIDATION.FIRST";
    FormValidationStrings["last"] = "ADD_PATIENT.VALIDATION.LAST";
    FormValidationStrings["dob"] = "ADD_PATIENT.VALIDATION.DOB";
    FormValidationStrings["phone"] = "ADD_PATIENT.VALIDATION.PHONE";
    FormValidationStrings["pid"] = "ADD_PATIENT.VALIDATION.PATIENTID";
    FormValidationStrings["subgroup"] = "ADD_PATIENT.VALIDATION.SUBGROUP";
})(FormValidationStrings || (FormValidationStrings = {}));


/***/ }),

/***/ "./src/app/add-patient/new-patient.model.ts":
/*!**************************************************!*\
  !*** ./src/app/add-patient/new-patient.model.ts ***!
  \**************************************************/
/*! exports provided: NewPatient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPatient", function() { return NewPatient; });
var NewPatient = /** @class */ (function () {
    function NewPatient() {
        this.dob = '';
        this.name = {
            first: '',
            last: ''
        };
        this.pid = '';
    }
    return NewPatient;
}());



/***/ }),

/***/ "./src/common/directives/selectbox.directive.ts":
/*!******************************************************!*\
  !*** ./src/common/directives/selectbox.directive.ts ***!
  \******************************************************/
/*! exports provided: AddShadowPartsToSelectBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddShadowPartsToSelectBox", function() { return AddShadowPartsToSelectBox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddShadowPartsToSelectBox = /** @class */ (function () {
    function AddShadowPartsToSelectBox(el) {
        var _this = this;
        this.el = el;
        var node = this.el.nativeElement;
        this.observer = new MutationObserver(function (mutations) {
            // Mutations arrived, try to remove arrow
            _this.removeArrowAndSetOpacity();
        });
        this.observer.observe(node, {
            childList: true,
        });
    }
    AddShadowPartsToSelectBox.prototype.removeArrowAndSetOpacity = function () {
        // Check if the arrow element is already here
        var selectIcon = this.el.nativeElement.shadowRoot.querySelector('.select-icon');
        if (selectIcon === null) {
            // Not yet, ignore this mutation
            return;
        }
        // This mutation has added the arrow. Remove it.
        selectIcon.setAttribute('part', 'selectBoxIcon');
        selectIcon.setAttribute('style', 'display: none');
        // Also set the placeholder text to the same color as other placeholders
        // If a default value was selected, no placeholder element will be present, so check for null on this one again
        var selectPlaceholder = this.el.nativeElement.shadowRoot.querySelector('.select-placeholder');
        if (selectPlaceholder !== null) {
            selectPlaceholder.setAttribute('part', 'selectBoxPlaceholder');
            selectPlaceholder.setAttribute('style', 'opacity: 1');
        }
        // Stop listening for mutations
        this.observer.disconnect();
    };
    AddShadowPartsToSelectBox.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    AddShadowPartsToSelectBox = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[addShadowPartsToSelectBox]'
        })
        // ////////////////////////////////////////////////////////
        // WHAT: Add shadow parts, "selectBoxPlaceholder" and "selectBoxIcon"
        // to the <ion-select> component.
        // WHY: the <ion-select> box has an icon and placeholder
        // text that exists in it's shadow dom (or shadow root).
        // Normal (or traditional) CSS can't get to these elements.
        // In order to reach in and style these elements, we need to add
        // a "part" attribute to the html which allows us to
        // reach and style these elements using the following,
        // which was designed for styling elements in the shadow dom:
        // ::part(<shadow-part>) { your: css }
        // c_form.scss is where the css exists for the shadow parts
        // that this directive adds.
        // HOWEVER:  the "::part()" pseudo element is not supported
        // in all browsers (specifically ios < 13.5) thus also
        // using inline styles for older browsers until browser support improves.
        // ////////////////////////////////////////////////////////
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AddShadowPartsToSelectBox);
    return AddShadowPartsToSelectBox;
}());



/***/ })

}]);
//# sourceMappingURL=add-patient-add-patient-module-es5.js.map