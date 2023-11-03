(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patient-list-patient-list-module"],{

/***/ "../../libs/components/index.ts":
/*!******************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/components/index.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: AccordionItemComponent, HRSComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/components.module */ "../../libs/components/src/components.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HRSComponentsModule", function() { return _src_components_module__WEBPACK_IMPORTED_MODULE_0__["HRSComponentsModule"]; });

/* harmony import */ var _src_accordionItem_accordionItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/accordionItem/accordionItem */ "../../libs/components/src/accordionItem/accordionItem.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionItemComponent", function() { return _src_accordionItem_accordionItem__WEBPACK_IMPORTED_MODULE_1__["AccordionItemComponent"]; });


// Cannot include Accordion Component in HRSComponents module b/c
// with the update, it will create a circular dependency and throw an error



/***/ }),

/***/ "../../libs/components/src/accordionItem/accordionItem.scss":
/*!**********************************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/components/src/accordionItem/accordionItem.scss ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "accordionItem .expand-wrapper {\n  transition: max-height 0.4s ease-in-out;\n  overflow: hidden;\n  height: auto; }\n\naccordionItem .collapsed {\n  height: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnViaGF2c2F4ZW5hL0RvY3VtZW50cy9JbXBldHVzX1Byb2plY3RzL0FuZ3VsYXJfTW9ub3JlcG9fR2l0TGFiX0NvcHkvYW5ndWxhci1tb25vcmVwby9saWJzL2NvbXBvbmVudHMvc3JjL2FjY29yZGlvbkl0ZW0vYWNjb3JkaW9uSXRlbS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksdUNBQXVDO0VBQ3ZDLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7O0FBSmhCO0VBUUksb0JBQW9CLEVBQUEiLCJmaWxlIjoiLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9hY2NvcmRpb25JdGVtL2FjY29yZGlvbkl0ZW0uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFjY29yZGlvbkl0ZW0ge1xuICAuZXhwYW5kLXdyYXBwZXIge1xuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC40cyBlYXNlLWluLW91dDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIC5jb2xsYXBzZWQge1xuICAgIGhlaWdodDogMCAhaW1wb3J0YW50O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "../../libs/components/src/accordionItem/accordionItem.ts":
/*!********************************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/components/src/accordionItem/accordionItem.ts ***!
  \********************************************************************************************************************************************************/
/*! exports provided: AccordionItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItemComponent", function() { return AccordionItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


/**
 * Generated class for the AccordionItem component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
let AccordionItemComponent = class AccordionItemComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.expanded = false;
    }
    ngAfterViewInit() {
        this.renderer.setStyle(this.expandWrapper.nativeElement, 'height', this.expandHeight + 'px');
    }
};
AccordionItemComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('expandWrapper', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AccordionItemComponent.prototype, "expandWrapper", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('expanded'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], AccordionItemComponent.prototype, "expanded", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('expandHeight'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AccordionItemComponent.prototype, "expandHeight", void 0);
AccordionItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'accordionItem',
        template: '<div #expandWrapper class=\'expand-wrapper\' [class.collapsed]="!expanded">\n' +
            '    <ng-content></ng-content>\n' +
            '</div>',
        styles: [__webpack_require__(/*! ./accordionItem.scss */ "../../libs/components/src/accordionItem/accordionItem.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
], AccordionItemComponent);



/***/ }),

/***/ "../../libs/components/src/autosize/autosize.ts":
/*!**********************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/components/src/autosize/autosize.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: Autosize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Autosize", function() { return Autosize; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Autosize = class Autosize {
    constructor(element) {
        this.element = element;
    }
    onInput(textArea) {
        this.adjust();
    }
    ngOnInit() {
        setTimeout(() => this.adjust(), 0);
    }
    adjust() {
        let textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
        textArea.style.overflow = 'scroll';
        textArea.style.height = 'auto';
        textArea.style.height = textArea.scrollHeight + 'px';
        textArea.style.maxHeight = '350px';
    }
};
Autosize.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input', ['$event.target']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [HTMLTextAreaElement]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], Autosize.prototype, "onInput", null);
Autosize = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'ion-textarea[autosize]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], Autosize);



/***/ }),

/***/ "../../libs/components/src/components.module.ts":
/*!**********************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/components/src/components.module.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: HRSComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HRSComponentsModule", function() { return HRSComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _autosize_autosize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./autosize/autosize */ "../../libs/components/src/autosize/autosize.ts");



let HRSComponentsModule = class HRSComponentsModule {
};
HRSComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _autosize_autosize__WEBPACK_IMPORTED_MODULE_2__["Autosize"],
        ],
        exports: [
            _autosize_autosize__WEBPACK_IMPORTED_MODULE_2__["Autosize"]
        ]
    })
], HRSComponentsModule);



/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/patient-list/patient-list.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/patient-list/patient-list.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar class=\"c_app_header\">\n        <ion-buttons class=\"c_app_header--buttons\" slot=\"start\">\n            <ion-menu-button class=\"c_app_header--btn\" persistent=\"true\" autoHide=\"false\"></ion-menu-button>\n        </ion-buttons>\n        <ion-title class=\"c_app_header--title\">\n            <span class=\"c_app_header--text\">\n                {{ 'PATIENT_LIST_TITLE' | translate }}\n            </span>\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button class=\"search-button\" left (click)=\"toggleSearch()\">\n                <ion-icon *ngIf=\"!search\" name=\"search\"></ion-icon>\n                <ion-icon *ngIf=\"search\" name=\"close\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n    <div class=\"search-container\" *ngIf=\"search\">\n        <ion-searchbar [(ngModel)]=\"searchTerm\"\n                       [formControl]=\"searchControl\"\n                       placeholder=\"{{ 'SEARCH_TITLE' | translate }}\"\n                       (ionInput)=\"onSearchInput($event)\"></ion-searchbar>\n        <ion-spinner *ngIf=\"searching\" class=\"search-spinner\"></ion-spinner>\n    </div>\n</ion-header>\n<ion-content id=\"patient-list--content\" [ngClass]=\"{'top-border': search}\">\n    <ion-refresher (ionRefresh)=\"doRefresh($event)\" slot=\"fixed\">\n        <ion-refresher-content\n                pullingIcon=\"arrow-dropdown\"\n                refreshingSpinner=\"circles\">\n        </ion-refresher-content>\n    </ion-refresher>\n    <ion-virtual-scroll\n            #patientList\n            id=\"patient-list\"\n            [items]=\"visiblePatients\"\n            [approxItemHeight]=\"450\"\n            [approxHeaderHeight]=\"150\"\n            [approxFooterHeight]=\"0\"\n            [itemHeight]=\"itemHeight\"\n            [trackBy]=\"parsePatientRisk\">\n        <ion-card\n                class=\"c_patient_list_item\"\n                *virtualItem=\"let patient; let index = index;\"\n                [ngClass]=\"{'even' : !(index % 2)}\"\n                (click)=\"expandPatient(patient, index)\"\n                data-id=\"{{patient.hrsid + '_' + index}}\">\n            <ion-card-header class=\"c_patient_list_item--details\" >\n                <!--Review Button-->\n                <ion-button\n                        class=\"c_patient_list_item--btn-reviewed\"\n                        mode=\"{{mode}}\"\n                        fill=\"clear\"\n                        (click)=\"submitNewReviewedStatus($event, patient)\"\n                        [disabled]=\"(patient.status !== 'activated' || !canEditPatientInfo())\">\n                    <ion-icon *ngIf=\"!patient['reviewLoading'] && patient['reviewedState'] == patientNonReviewed\"\n                              class=\"c_patient_list_item--btn-reviewed-not_reviewed md\" src=\"/assets/icon/icon-checkbox_non-reviewed.svg\"></ion-icon>\n                    <ion-icon *ngIf=\"!patient['reviewLoading'] && patient['reviewedState'] == patientInProgress\"\n                              class=\"c_patient_list_item--btn-reviewed-in_progress md\" src=\"/assets/icon/icon-checkbox_in-progress.svg\"></ion-icon>\n                    <ion-icon *ngIf=\"!patient['reviewLoading'] && patient['reviewedState'] == patientReviewed\"\n                              class=\"c_patient_list_item--btn-reviewed-reviewed md\" src=\"/assets/icon/icon-checkbox_reviewed.svg\"></ion-icon>\n                    <ion-spinner *ngIf=\"patient['reviewLoading']\" class=\"notReviewed\"></ion-spinner>\n                </ion-button>\n                <ion-label>\n                    <h4 class=\"patient-detail\"> {{ patient.name.first }} {{ patient.name.last }}</h4>\n                    <h6 class=\"patient-detail ion-text-wrap\" *ngIf=\"patient.pid\"><b>{{ 'PATIENT_LIST_PID' | translate }}</b> {{patient.pid}}</h6>\n                    <h6 class=\"patient-detail-status\" *ngIf=\"patient.status\"><b>{{ 'PATIENT_LIST_STATUS' | translate }}</b> {{('PATIENT_PROFILE.STATUS.' + patient.status)| translate}}</h6>\n                    <h6 class=\"patient-detail-status\" *ngIf=\"patient.status === 'activated'\"><b>{{ 'PATIENT_LIST_RISK' | translate }}</b> {{ patient.riskText | translate }}</h6>\n                </ion-label>\n                <ion-label class=\"patient-detail-label\">\n                    <ion-button\n                            (click)=\"openCommunicationActionSheet($event, patient)\"\n                            class=\"c_patient_list_item--icon-comms\"\n                            fill=\"clear\"\n                            [disabled]=\"(!patient.device && !patient.byodDevice) || !canContactPatient()\">\n                        <ion-icon class=\"c_patient_list_item--icon-arrow\" name=\"chatbubbles\"></ion-icon>\n                    </ion-button>\n                </ion-label>\n                <ion-label class=\"patient-detail-label\">\n                    <ion-button\n                            (click)=\"viewPatientProfile($event, patient)\"\n                            class=\"c_patient_list_item--btn-open\"\n                            fill=\"clear\">\n                        <ion-icon class=\"c_patient_list_item--icon-arrow\" name=\"chevron-forward-circle-outline\"></ion-icon>\n                    </ion-button>\n                </ion-label>\n            </ion-card-header>\n\n            <ion-card-content>\n            <div class=\"c_patient_list--accordion\" *ngIf=\"expandedPatients.includes(patient)\">\n                <ion-item class=\"c_patient_list--accordion_list\">\n                    <ion-label>\n                        <div>\n                            <ion-badge class=\"c_patient--accordion-conditions ion-text-wrap\"\n                                       *ngIf=\"patient.conditionsString\"\n                                       slot=\"start\"\n                                       item-start>\n                                <ion-label class=\"c_patient_list--conditions_label\">{{ patient.conditionsString }}</ion-label>\n                            </ion-badge>\n                            <ion-badge class=\"c_patient--accordion-conditions ion-text-wrap\"\n                                       *ngIf=\"!patient.conditionsString\"\n                                       slot=\"start\"\n                                       item-start>\n                                <ion-label>{{ 'PATIENT_LIST_NO_CONDITIONS' | translate }}</ion-label>\n                            </ion-badge>\n                        </div>\n                        <div>\n                            <ion-badge *ngIf=\"patient.metrics.activity && patient.metrics.activity.duration\"\n                                       [ngClass]=\"patient.activityRisk ? patient.activityRisk : 'lowrisk'\">\n                                <ion-label>\n                                    <b>{{ 'PATIENT_LIST_ACTIVITY' | translate }}</b>\n                                    {{patient.metrics.activity.duration}}\n                                </ion-label>\n                            </ion-badge>\n                            <ion-badge *ngIf=\"patient.metrics.activity && !patient.metrics.activity.duration\" [ngClass]=\"patient.activityRisk ? patient.activityRisk : 'lowrisk'\">\n                                <ion-label>\n                                    <b>{{ 'PATIENT_LIST_ACTIVITY' | translate }}</b>\n                                    --\n                                </ion-label>\n                            </ion-badge>\n                        </div>\n                        <div>\n                            <ion-badge *ngIf=\"patient.metrics.weight && patient.metrics.weight.length != 0\" [ngClass]=\"patient.weightRisk ? patient.weightRisk : 'lowrisk'\">\n                                <b>{{ 'PATIENT_LIST_WEIGHT' | translate }}</b>\n                                {{patient.metrics.weight.weight}}\n                            </ion-badge>\n                            <ion-badge *ngIf=\"patient.metrics.weight && patient.metrics.weight.length == 0\" [ngClass]=\"patient.weightRisk ? patient.weightRisk : 'lowrisk'\">\n                                <b>{{ 'PATIENT_LIST_WEIGHT' | translate }}</b>\n                                --\n                            </ion-badge>\n                        </div>\n                        <div>\n                            <ion-badge *ngIf=\"patient.metrics.survey\" [ngClass]=\"patient.surveyRisk ? patient.surveyRisk : 'lowrisk'\">\n                                <b>{{ 'PATIENT_LIST_SURVEY' | translate }}</b>\n                                <span *ngIf=\"patient.surveyDetails\">{{ patient.surveyDetails.answeredCount }}</span>\n                            </ion-badge>\n                        </div>\n                        <div>\n                            <ion-badge class=\"ion-text-wrap\" *ngIf=\"patient.metrics.bloodpressure && patient.metrics.bloodpressure.length != 0\" [ngClass]=\"patient.bloodpressureRisk ? patient.bloodpressureRisk : 'lowrisk'\">\n                                <b>{{ 'PATIENT_LIST_BP' | translate }}</b>\n                                {{ patient.metrics.bloodpressure.systolic }}/{{ patient.metrics.bloodpressure.diastolic }}/{{ patient.metrics.bloodpressure.heartrate }}\n                            </ion-badge>\n                            <ion-badge *ngIf=\"patient.metrics.bloodpressure && patient.metrics.bloodpressure.length == 0\" [ngClass]=\"patient.bloodpressureRisk ? patient.bloodpressureRisk : 'lowrisk'\">\n                                <b>{{ 'PATIENT_LIST_BP' | translate }}</b>\n                                --\n                            </ion-badge>\n                        </div>\n                        <div>\n                            <ion-badge *ngIf=\"patient.metrics.glucose && patient.metrics.glucose.length != 0\" [ngClass]=\"patient.glucoseRisk ? patient.glucoseRisk : 'lowrisk'\">\n                                <b>{{ 'PATIENT_LIST_GLUCOSE' | translate }}</b>\n                                {{ patient.metrics.glucose.glucose }}\n                            </ion-badge>\n                            <ion-badge *ngIf=\"patient.metrics.glucose && patient.metrics.glucose.length == 0\" [ngClass]=\"patient.glucoseRisk ? patient.glucoseRisk : 'lowrisk'\">\n                                <b>{{ 'PATIENT_LIST_GLUCOSE' | translate }}</b>\n                                --\n                            </ion-badge>\n                        </div>\n                        <div>\n                            <ion-badge *ngIf=\"patient.metrics.pulseox && patient.metrics.pulseox.length != 0\" [ngClass]=\"patient.pulseoxRisk ? patient.pulseoxRisk : 'lowrisk'\">\n                                <b>{{ 'PATIENT_LIST_PULSEOX' | translate }}</b>\n                                {{ patient.metrics.pulseox.spo2 }}/{{ patient.metrics.pulseox.heartrate }}\n                            </ion-badge>\n                            <ion-badge *ngIf=\"patient.metrics.pulseox && patient.metrics.pulseox.length == 0\" [ngClass]=\"patient.pulseoxRisk ? patient.pulseoxRisk : 'lowrisk'\">\n                                <b>{{ 'PATIENT_LIST_PULSEOX' | translate }}</b>\n                                --\n                            </ion-badge>\n                        </div>\n                        <div>\n                            <ion-badge *ngIf=\"patient.metrics.temperature && patient.metrics.temperature.temperature\" [ngClass]=\"patient.temperatureRisk ? patient.temperatureRisk : 'lowrisk'\">\n                                <b>{{ 'PATIENT_LIST_TEMPERATURE' | translate }}</b>\n                                {{ patient.metrics.temperature.temperature }}\n                            </ion-badge>\n                            <ion-badge *ngIf=\"patient.metrics.temperature && !patient.metrics.temperature.temperature\" [ngClass]=\"patient.temperatureRisk ? patient.temperatureRisk : 'lowrisk'\">\n                                <b>{{ 'PATIENT_LIST_TEMPERATURE' | translate }}</b>\n                                --\n                            </ion-badge>\n                        </div>\n                        <div>\n                            <ion-badge *ngIf=\"patient.metrics.medication\" [ngClass]=\"patient.medicationRisk ? patient.medicationRisk : 'lowrisk'\">\n                                <b>{{ 'PATIENT_LIST_MEDICATIONS' | translate }}</b>\n                                {{ medications }}\n                            </ion-badge>\n                        </div>\n                        <div>\n                            <ion-badge *ngIf=\"patient.metrics.woundimaging\" [ngClass]=\"'lowrisk'\">\n                                <b>{{ 'PATIENT_LIST_WOUND_IMAGING' | translate }}</b>\n                                {{patient.metrics.woundimaging.data && patient.metrics.woundimaging.data.length > 0 ? patient.metrics.woundimaging.data.length  : '--'}}\n                            </ion-badge>\n                        </div>\n                        <div>\n                            <ion-badge *ngIf=\"patient.metrics.stethoscope\" [ngClass]=\"'lowrisk'\">\n                                <b>{{ 'PATIENT_LIST_STETHOSCOPE' | translate }}</b>\n                                {{patient.metrics.stethoscope.data && patient.metrics.stethoscope.data.length > 0 ? patient.metrics.stethoscope.data.length  : '--'}}\n                            </ion-badge>\n                        </div>\n                        <div>\n                            <ion-badge *ngIf=\"patient.metrics.steps\" [ngClass]=\"'lowrisk'\">\n                                <b>{{ 'PATIENT_LIST_STEPS' | translate }}</b>\n                                {{ patient.metrics.steps.steps ? patient.metrics.steps.steps : '--'}}\n                            </ion-badge>\n                        </div>\n                    </ion-label>\n                </ion-item>\n                </div>\n            </ion-card-content>\n        </ion-card>\n    </ion-virtual-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/patient-list/patient-list.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/patient-list/patient-list.module.ts ***!
  \*****************************************************/
/*! exports provided: PatientListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientListPageModule", function() { return PatientListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _clinician_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @clinician/providers */ "./src/app/services/providers.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/pipes/pipes.module.ts");
/* harmony import */ var _patient_list_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./patient-list.page */ "./src/app/patient-list/patient-list.page.ts");
/* harmony import */ var _pipes_display_gender_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/display-gender.pipe */ "./src/pipes/display-gender.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _hrs_angular_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @hrs-angular/components */ "../../libs/components/index.ts");












let PatientListPageModule = class PatientListPageModule {
};
PatientListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [_patient_list_page__WEBPACK_IMPORTED_MODULE_8__["PatientListPage"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _patient_list_page__WEBPACK_IMPORTED_MODULE_8__["PatientListPage"]
                }
            ]),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(),
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]
        ],
        providers: [
            _clinician_providers__WEBPACK_IMPORTED_MODULE_6__["PatientListService"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _pipes_display_gender_pipe__WEBPACK_IMPORTED_MODULE_9__["DisplayGenderPipe"]
        ],
        exports: [_patient_list_page__WEBPACK_IMPORTED_MODULE_8__["PatientListPage"], _hrs_angular_components__WEBPACK_IMPORTED_MODULE_11__["AccordionItemComponent"]],
        declarations: [_patient_list_page__WEBPACK_IMPORTED_MODULE_8__["PatientListPage"], _hrs_angular_components__WEBPACK_IMPORTED_MODULE_11__["AccordionItemComponent"]]
    })
], PatientListPageModule);



/***/ }),

/***/ "./src/app/patient-list/patient-list.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/patient-list/patient-list.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#patient-list--content.top-border {\n  border-top: 1px solid var(--gray-2); }\n\n.c_patient_list_item {\n  display: flex;\n  flex-direction: column;\n  flex: auto;\n  min-height: 150px;\n  padding: 1.25em 1em 1em 1em;\n  margin: 0;\n  border-radius: 0; }\n\n.c_patient_list_item.even {\n    background-color: var(--gray-1); }\n\n.c_patient_list_item.even .c_patient_list--accordion_list {\n      --background: var(--gray-1); }\n\n.c_patient_list_item .c_patient_list_item--btn-reviewed {\n    --padding-start: 0;\n    --padding-end: .5rem;\n    max-width: none; }\n\n.c_patient_list_item .c_patient_list_item--btn-reviewed-in_progress {\n      color: var(--color-risk-medium); }\n\n.c_patient_list_item .c_patient_list_item--btn-reviewed-reviewed {\n      color: var(--color-risk-low); }\n\n.c_patient_list_item .c_patient_list_item--btn-reviewed-not_reviewed {\n      color: var(--color-risk-high); }\n\n.c_patient_list_item .c_patient_list_item--btn-reviewed ion-icon {\n      font-size: 25px; }\n\n.c_patient_list_item .c_patient_list_item--btn-reviewed ion-spinner {\n      width: 20px;\n      height: 20px; }\n\n.c_patient_list_item .c_patient_list_item--btn-reviewed .icon-ios {\n      font-weight: bold; }\n\n.c_patient_list_item .c_patient_list_item--details {\n    display: flex;\n    align-items: center;\n    padding: unset; }\n\n.c_patient_list_item .c_patient_list_item--details ion-button:first-of-type {\n      flex-basis: 10%; }\n\n.c_patient_list_item .c_patient_list_item--details ion-label:nth-of-type(1) {\n      flex-basis: 60%;\n      margin-top: 0;\n      margin-bottom: 0; }\n\n.c_patient_list_item .c_patient_list_item--details ion-label:nth-of-type(2) {\n      flex-basis: 10%; }\n\n.c_patient_list_item .c_patient_list_item--details ion-label:nth-of-type(3) {\n      flex-basis: 20%; }\n\n.c_patient_list_item .c_patient_list_item--details .patient-detail-label {\n      margin-bottom: 8.5%;\n      text-align: right; }\n\n.c_patient_list_item .c_patient_list_item--details .c_patient_list_item--icon-comms {\n      --padding-start: 0;\n      --padding-end: 0;\n      background: var(--color-primary);\n      border: 1px solid var(--color-primary);\n      border-radius: 3px;\n      color: var(--white);\n      width: 2em;\n      height: 1.7em; }\n\n.c_patient_list_item .c_patient_list_item--details .c_patient_list_item--icon-comms .button-inner {\n        padding: 3px; }\n\n.c_patient_list_item .c_patient_list_item--details .c_patient_list_item--btn-open {\n      --padding-start: 0;\n      --padding-end: 0;\n      width: 2em;\n      height: 1.7em;\n      margin-right: 12px; }\n\n.c_patient_list_item .c_patient_list_item--details .c_patient_list_item--btn-open .c_patient_list_item--icon-arrow {\n        height: 1.7em;\n        width: 1.4em; }\n\n.c_patient_list_item .c_patient_list--accordion {\n    padding-right: 15%;\n    height: 300px; }\n\n.c_patient_list_item .c_patient_list--accordion_list {\n      --border-color: transparent;\n      --padding-start: 0; }\n\n.c_patient_list_item .c_patient_list--accordion .c_patient--accordion-conditions {\n      background-color: var(--color-accent); }\n\n.c_patient_list_item .c_patient_list--accordion .c_patient--accordion-conditions .c_patient_list--conditions_label {\n        white-space: inherit;\n        text-align: left; }\n\n.patient-detail {\n  font-weight: 500;\n  text-align: left; }\n\n.patient-detail-status {\n  font-weight: 500;\n  text-transform: capitalize; }\n\n.metricTitle {\n  text-transform: capitalize; }\n\nbutton.item {\n  padding-left: 15px; }\n\nbutton.item .item-inner {\n    border-bottom: none !important;\n    padding-left: 5px; }\n\n.buttonTwo {\n  margin: 0;\n  max-width: 30px; }\n\n.buttonTwo .button-inner {\n    font-size: 1.7em; }\n\n.buttonTwo ion-spinner {\n    max-width: 20px;\n    height: 20px; }\n\n.buttonTwo .icon-ios {\n    font-weight: bold; }\n\n.reviewed {\n  color: var(--color-success); }\n\n.notReviewed {\n  color: var(--color-error); }\n\n.highrisk {\n  background-color: var(--color-error); }\n\n.medrisk {\n  background-color: var(--color-risk-medium); }\n\n.lowrisk {\n  background-color: var(--color-success); }\n\n.search-container {\n  height: 5rem;\n  display: flex;\n  align-items: center;\n  background-color: var(--gray-1); }\n\n.search-container .searchbar-input {\n    background-color: var(--white); }\n\n.search-container .spinner-md {\n    position: absolute;\n    right: 18px; }\n\n.search-container .search-spinner {\n    background-color: transparent;\n    width: 3rem;\n    height: 3rem; }\n\n.search-container .search-spinner svg {\n      height: 20px;\n      width: 20px;\n      margin-top: 5px; }\n\n.search-container .search-spinner {\n    margin-right: 1em; }\n\n.search-button {\n  font-size: 1.6rem;\n  margin-right: 5px; }\n\n.searchbar-clear-icon {\n  display: none !important; }\n\n@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-device-pixel-ratio: 3) {\n  #patient-list--content {\n    padding-top: .9em; } }\n\n@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape) {\n  #patient-list--title {\n    top: .5em; } }\n\n@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait) {\n  #patient-list--title {\n    top: -.25em; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnViaGF2c2F4ZW5hL0RvY3VtZW50cy9JbXBldHVzX1Byb2plY3RzL0FuZ3VsYXJfTW9ub3JlcG9fR2l0TGFiX0NvcHkvYW5ndWxhci1tb25vcmVwby9hcHBzL21vYmlsZS1jbGluaWNpYW4vc3JjL2FwcC9wYXRpZW50LWxpc3QvcGF0aWVudC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFvQyxtQ0FBbUMsRUFBQTs7QUFFdkU7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLFNBQVM7RUFDVCxnQkFBZ0IsRUFBQTs7QUFQcEI7SUFVUSwrQkFBK0IsRUFBQTs7QUFWdkM7TUFhZ0IsMkJBQWEsRUFBQTs7QUFiN0I7SUFtQlEsa0JBQWdCO0lBQ2hCLG9CQUFjO0lBQ2QsZUFBZSxFQUFBOztBQXJCdkI7TUF1QndCLCtCQUErQixFQUFBOztBQXZCdkQ7TUF3QnFCLDRCQUE0QixFQUFBOztBQXhCakQ7TUF5QnlCLDZCQUE2QixFQUFBOztBQXpCdEQ7TUE0QlksZUFBZSxFQUFBOztBQTVCM0I7TUFnQ1ksV0FBVztNQUNYLFlBQVksRUFBQTs7QUFqQ3hCO01BcUNZLGlCQUFpQixFQUFBOztBQXJDN0I7SUF5Q1EsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixjQUFjLEVBQUE7O0FBM0N0QjtNQThDWSxlQUFlLEVBQUE7O0FBOUMzQjtNQWtEWSxlQUFlO01BQ2YsYUFBYTtNQUNiLGdCQUFnQixFQUFBOztBQXBENUI7TUF3RFksZUFBZSxFQUFBOztBQXhEM0I7TUE0RFksZUFBZSxFQUFBOztBQTVEM0I7TUFnRVksbUJBQW1CO01BQ25CLGlCQUFpQixFQUFBOztBQWpFN0I7TUFxRVksa0JBQWdCO01BQ2hCLGdCQUFjO01BQ2QsZ0NBQWdDO01BQ2hDLHNDQUFzQztNQUN0QyxrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLFVBQVU7TUFDVixhQUFhLEVBQUE7O0FBNUV6QjtRQStFZ0IsWUFBWSxFQUFBOztBQS9FNUI7TUFvRlksa0JBQWdCO01BQ2hCLGdCQUFjO01BQ2QsVUFBVTtNQUNWLGFBQWE7TUFDYixrQkFBa0IsRUFBQTs7QUF4RjlCO1FBMkZnQixhQUFhO1FBQ2IsWUFBWSxFQUFBOztBQTVGNUI7SUFpR1Esa0JBQWtCO0lBQ2xCLGFBQWEsRUFBQTs7QUFsR3JCO01BcUdZLDJCQUFlO01BQ2Ysa0JBQWdCLEVBQUE7O0FBdEc1QjtNQXlHWSxxQ0FBcUMsRUFBQTs7QUF6R2pEO1FBNEdnQixvQkFBb0I7UUFDcEIsZ0JBQWdCLEVBQUE7O0FBTWhDO0VBQ0ksZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGdCQUFnQjtFQUNoQiwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxrQkFBa0IsRUFBQTs7QUFEdEI7SUFLUSw4QkFBOEI7SUFDOUIsaUJBQWlCLEVBQUE7O0FBSXpCO0VBQ0ksU0FBUztFQUNULGVBQWUsRUFBQTs7QUFGbkI7SUFLUSxnQkFBZ0IsRUFBQTs7QUFMeEI7SUFTUSxlQUFlO0lBQ2YsWUFBWSxFQUFBOztBQVZwQjtJQWNRLGlCQUFpQixFQUFBOztBQUl6QjtFQUNJLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLG9DQUFvQyxFQUFBOztBQUd4QztFQUNJLDBDQUEwQyxFQUFBOztBQUc5QztFQUNJLHNDQUFzQyxFQUFBOztBQUcxQztFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLCtCQUErQixFQUFBOztBQUpuQztJQU1RLDhCQUE4QixFQUFBOztBQU50QztJQVVRLGtCQUFrQjtJQUNsQixXQUFXLEVBQUE7O0FBWG5CO0lBY1EsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxZQUFZLEVBQUE7O0FBaEJwQjtNQW1CWSxZQUFZO01BQ1osV0FBVztNQUNYLGVBQWUsRUFBQTs7QUFyQjNCO0lBMEJRLGlCQUFpQixFQUFBOztBQUl6QjtFQUNJLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSx3QkFBd0IsRUFBQTs7QUFHNUI7RUFJSTtJQUNJLGlCQUFpQixFQUFBLEVBQ3BCOztBQUdMO0VBS0k7SUFDSSxTQUFTLEVBQUEsRUFDWjs7QUFHTDtFQUtJO0lBQ0ksV0FBVyxFQUFBLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9wYXRpZW50LWxpc3QvcGF0aWVudC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi90aGVtZS92YXJpYWJsZXNcIjtcblxuI3BhdGllbnQtbGlzdC0tY29udGVudC50b3AtYm9yZGVyIHsgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWdyYXktMik7IH1cblxuLmNfcGF0aWVudF9saXN0X2l0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4OiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgIHBhZGRpbmc6IDEuMjVlbSAxZW0gMWVtIDFlbTtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcblxuICAgICYuZXZlbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktMSk7XG4gICAgICAgIC5jX3BhdGllbnRfbGlzdC0tYWNjb3JkaW9uIHtcbiAgICAgICAgICAgICZfbGlzdCB7XG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNfcGF0aWVudF9saXN0X2l0ZW0tLWJ0bi1yZXZpZXdlZCB7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogLjVyZW07XG4gICAgICAgIG1heC13aWR0aDogbm9uZTtcblxuICAgICAgICAmLWluX3Byb2dyZXNzIHsgY29sb3I6IHZhcigtLWNvbG9yLXJpc2stbWVkaXVtKTsgfVxuICAgICAgICAmLXJldmlld2VkIHsgY29sb3I6IHZhcigtLWNvbG9yLXJpc2stbG93KTsgfVxuICAgICAgICAmLW5vdF9yZXZpZXdlZCB7IGNvbG9yOiB2YXIoLS1jb2xvci1yaXNrLWhpZ2gpOyB9XG5cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLXNwaW5uZXIge1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaWNvbi1pb3Mge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNfcGF0aWVudF9saXN0X2l0ZW0tLWRldGFpbHMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiB1bnNldDtcblxuICAgICAgICBpb24tYnV0dG9uOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICAgICAgZmxleC1iYXNpczogMTAlO1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWxhYmVsOm50aC1vZi10eXBlKDEpIHtcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDYwJTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWxhYmVsOm50aC1vZi10eXBlKDIpIHtcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1sYWJlbDpudGgtb2YtdHlwZSgzKSB7XG4gICAgICAgICAgICBmbGV4LWJhc2lzOiAyMCU7XG4gICAgICAgIH1cblxuICAgICAgICAucGF0aWVudC1kZXRhaWwtbGFiZWwge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOC41JTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNfcGF0aWVudF9saXN0X2l0ZW0tLWljb24tY29tbXMge1xuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgd2lkdGg6IDJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMS43ZW07XG5cbiAgICAgICAgICAgIC5idXR0b24taW5uZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jX3BhdGllbnRfbGlzdF9pdGVtLS1idG4tb3BlbiB7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgICAgICAgICAgd2lkdGg6IDJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMS43ZW07XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG5cbiAgICAgICAgICAgIC5jX3BhdGllbnRfbGlzdF9pdGVtLS1pY29uLWFycm93IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuN2VtO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxLjRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuY19wYXRpZW50X2xpc3QtLWFjY29yZGlvbiB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1JTtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcblxuICAgICAgICAmX2xpc3Qge1xuICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICB9XG4gICAgICAgIC5jX3BhdGllbnQtLWFjY29yZGlvbi1jb25kaXRpb25zIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XG5cbiAgICAgICAgICAgIC5jX3BhdGllbnRfbGlzdC0tY29uZGl0aW9uc19sYWJlbCB7XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnBhdGllbnQtZGV0YWlsIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5wYXRpZW50LWRldGFpbC1zdGF0dXMge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5tZXRyaWNUaXRsZSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbmJ1dHRvbi5pdGVtIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG5cbiAgICAuaXRlbS1pbm5lciB7XG4gICAgICAgIC8vV2FzIGdldHRpbmcgbWVzc3kgdHJ5aW5nIHRvIG92ZXJyaWRlIHByZXNldCBpb25pYyBzdHlsZXMgc28gbmVlZGVkICFpbXBvcnRhbnRcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICB9XG59XG5cbi5idXR0b25Ud28ge1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXgtd2lkdGg6IDMwcHg7XG5cbiAgICAuYnV0dG9uLWlubmVyIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjdlbTtcbiAgICB9XG5cbiAgICBpb24tc3Bpbm5lciB7XG4gICAgICAgIG1heC13aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgIH1cblxuICAgIC5pY29uLWlvcyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn1cblxuLnJldmlld2VkIHtcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itc3VjY2Vzcyk7XG59XG5cbi5ub3RSZXZpZXdlZCB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWVycm9yKTtcbn1cblxuLmhpZ2hyaXNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1lcnJvcik7XG59XG5cbi5tZWRyaXNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1yaXNrLW1lZGl1bSk7XG59XG5cbi5sb3dyaXNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zdWNjZXNzKTtcbn1cblxuLnNlYXJjaC1jb250YWluZXIge1xuICAgIGhlaWdodDogNXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS0xKTtcbiAgICAuc2VhcmNoYmFyLWlucHV0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIH1cblxuICAgIC5zcGlubmVyLW1kIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMThweDtcbiAgICB9XG4gICAgLnNlYXJjaC1zcGlubmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHdpZHRoOiAzcmVtO1xuICAgICAgICBoZWlnaHQ6IDNyZW07XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNlYXJjaC1zcGlubmVyIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgfVxufVxuXG4uc2VhcmNoLWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5zZWFyY2hiYXItY2xlYXItaWNvbiB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW5cbmFuZCAobWluLWRldmljZS13aWR0aCA6IDM3NXB4KVxuYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogODEycHgpXG5hbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvIDogMykge1xuICAgICNwYXRpZW50LWxpc3QtLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nLXRvcDogLjllbTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlblxuYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzc1cHgpXG5hbmQgKG1heC1kZXZpY2Utd2lkdGggOiA4MTJweClcbmFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW8gOiAzKVxuYW5kIChvcmllbnRhdGlvbiA6IGxhbmRzY2FwZSkge1xuICAgICNwYXRpZW50LWxpc3QtLXRpdGxlIHtcbiAgICAgICAgdG9wOiAuNWVtO1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuXG5hbmQgKG1pbi1kZXZpY2Utd2lkdGggOiAzNzVweClcbmFuZCAobWF4LWRldmljZS13aWR0aCA6IDgxMnB4KVxuYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbyA6IDMpXG5hbmQgKG9yaWVudGF0aW9uIDogcG9ydHJhaXQpIHtcbiAgICAjcGF0aWVudC1saXN0LS10aXRsZSB7XG4gICAgICAgIHRvcDogLS4yNWVtO1xuICAgIH1cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/patient-list/patient-list.page.ts":
/*!***************************************************!*\
  !*** ./src/app/patient-list/patient-list.page.ts ***!
  \***************************************************/
/*! exports provided: PatientListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientListPage", function() { return PatientListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm/operators/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _clinician_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @clinician/providers */ "./src/app/services/providers.ts");
/* harmony import */ var _services_user_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/user/user */ "./src/app/services/user/user.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _clinician_models__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @clinician/models */ "./src/common/models/models.ts");
/* harmony import */ var _communication_chat_chat_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../communication/chat/chat.page */ "./src/app/communication/chat/chat.page.ts");
/* harmony import */ var _communication_video_video_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../communication/video/video.page */ "./src/app/communication/video/video.page.ts");
/* harmony import */ var _communication_voice_voice_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../communication/voice/voice.page */ "./src/app/communication/voice/voice.page.ts");
/* harmony import */ var _pipes_display_gender_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../pipes/display-gender.pipe */ "./src/pipes/display-gender.pipe.ts");

var PatientListPage_1;











// Communications Modals




let PatientListPage = PatientListPage_1 = class PatientListPage {
    constructor(actionSheetCtrl, dataExchangeService, displayGender, http, loadingCtrl, logger, menuCtrl, modalCtrl, navCtrl, patientListService, surveyDetailsService, toastCtrl, translateService, reviewedStatusService, user, platform, zoomService) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.dataExchangeService = dataExchangeService;
        this.displayGender = displayGender;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.logger = logger;
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.patientListService = patientListService;
        this.surveyDetailsService = surveyDetailsService;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.reviewedStatusService = reviewedStatusService;
        this.user = user;
        this.platform = platform;
        this.zoomService = zoomService;
        this.Object = Object;
        this.initialLoad = true;
        this.previousSearchTerm = '';
        this.search = false;
        this.searchTerm = '';
        this.searching = false;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
    }
    /**
     * The view loaded, let's query our items for the list
     */
    ngOnInit() {
        this.patientInProgress = _clinician_providers__WEBPACK_IMPORTED_MODULE_8__["ReviewedStatusService"].IN_PROGRESS;
        this.patientNonReviewed = _clinician_providers__WEBPACK_IMPORTED_MODULE_8__["ReviewedStatusService"].NON_REVIEWED;
        this.patientReviewed = _clinician_providers__WEBPACK_IMPORTED_MODULE_8__["ReviewedStatusService"].REVIEWED;
        this.mode = this.platform.is('android') ? 'md' : 'ios';
        if (this.initialLoad) {
            this.getPatientList(true);
            this.initialLoad = false;
        }
        // adds delay to running filter on user input
        this.searchControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(700)).subscribe((search) => {
            this.searching = false;
            this.filterPatients();
        });
        this.expandedPatients = this.patientListService.expandedPatients();
    }
    ionViewDidEnter() {
        if (this.dataExchangeService.hasData(_clinician_providers__WEBPACK_IMPORTED_MODULE_8__["DataExchangeService"].UpdatePatient))
            this.updatePatient();
        if (this.dataExchangeService.hasData(_clinician_providers__WEBPACK_IMPORTED_MODULE_8__["DataExchangeService"].UpdatedReviewedStatus))
            this.updateReviewedStatus();
        if (this.dataExchangeService.hasData(_clinician_providers__WEBPACK_IMPORTED_MODULE_8__["DataExchangeService"].UpdatedActivationStatus))
            this.updateActivationStatus();
        this.menuCtrl.enable(true);
    }
    ionViewWillLeave() {
        if (this.patientListLoading) {
            this.hideLoader();
            this.patientListLoading = false;
        }
    }
    /**
     * Call the patient list
     */
    getPatientList(patientListLoading, refresher) {
        let patients = [];
        if (patientListLoading) {
            this.showLoader();
            this.patientListLoading = true;
        }
        return this.patientListService.loadPatients().subscribe((patientList) => {
            // Error handling is contained up the observable chain in patientList.service loadPatientList.
            // patientListService.loadPatients will always trigger 'next' one time regardless of errors
            // if every request errors then 'next' will return an empty array
            for (let i = 0; i < patientList.length; i++) {
                let patient = patientList[i][0];
                this.patientFullProfile = new _clinician_models__WEBPACK_IMPORTED_MODULE_11__["Patient"](patient.profile);
                this.patientFullProfile.expanded = false;
                this.patientFullProfile.metrics = patient.metrics;
                this.patientFullProfile.risk = patient.risk;
                this.patientFullProfile.reviewedState = this.patientFullProfile.reviewed && this.patientFullProfile.reviewed[0] ?
                    this.patientFullProfile.reviewed[0].reviewedStatus : _clinician_providers__WEBPACK_IMPORTED_MODULE_8__["ReviewedStatusService"].NON_REVIEWED;
                patients.push(this.patientFullProfile);
            }
            // allPatients is never changed and used to reset the patient list after a search
            this.allPatients = patients.slice();
            // visible patients are the patients that are shown in the list changes with when a search term is applied
            this.visiblePatients = this.allPatients.slice();
            if (patientListLoading) {
                this.hideLoader();
                this.patientListLoading = false;
            }
            if (refresher) {
                refresher.target.complete();
            }
        });
    }
    /**
     * sync rendered patient values with updated careplan or reviewedStatus
     */
    updatePatient() {
        const { hrsid, conditions, metrics } = this.dataExchangeService.getData(_clinician_providers__WEBPACK_IMPORTED_MODULE_8__["DataExchangeService"].UpdatePatient, true);
        const visPatient = this.visiblePatients.filter((p) => p.hrsid === hrsid)[0];
        visPatient.conditions = conditions;
        visPatient.conditionsString = conditions.join(', ');
        visPatient.metrics = metrics;
        this.allPatients[this.allPatients.indexOf(visPatient)] = visPatient;
    }
    updateReviewedStatus() {
        const { hrsid, reviewedStatus } = this.dataExchangeService.getData(_clinician_providers__WEBPACK_IMPORTED_MODULE_8__["DataExchangeService"].UpdatedReviewedStatus, true);
        const visPatient = this.visiblePatients.filter((patient) => patient.hrsid === hrsid)[0];
        visPatient['lastreviewed'] = reviewedStatus[0].reviewedStatus !== _clinician_providers__WEBPACK_IMPORTED_MODULE_8__["ReviewedStatusService"].NON_REVIEWED ? reviewedStatus : undefined;
        visPatient.reviewed = reviewedStatus;
        visPatient.reviewedState = reviewedStatus[0].reviewedStatus;
        this.allPatients[this.allPatients.indexOf(visPatient)] = visPatient;
    }
    updateActivationStatus() {
        const { hrsid, status, discharged } = this.dataExchangeService.getData(_clinician_providers__WEBPACK_IMPORTED_MODULE_8__["DataExchangeService"].UpdatedActivationStatus, true);
        const visPatient = this.visiblePatients.filter((patient) => patient.hrsid === hrsid)[0];
        visPatient.status = status;
        visPatient.discharged = discharged;
        this.allPatients[this.allPatients.indexOf(visPatient)] = visPatient;
    }
    /**
     * show patient list loader
     */
    showLoader() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loader = yield this.loadingCtrl.create({
                message: this.translateService.instant('LOADING')
            });
            yield loader.present();
        });
    }
    hideLoader() {
        this.loadingCtrl.getTop().then((element) => {
            if (element) {
                this.loadingCtrl.dismiss();
            }
        });
    }
    /**
     * Expand items on the patient list
     */
    expandPatient(patient) {
        const rerender = () => {
            // patientListScrollElement.checkRange marks the patient ion-cards dirty
            // this triggers a rerender of the item when it is either in the view port or reenters the viewport
            // preventing UI issues from showing after dynamically changing an ion-cards size
            this.patientListScrollElement.checkRange(0, this.visiblePatients.length);
        };
        const unexpand = () => {
            this.expandedPatients.unset();
            rerender();
        };
        // when an already expanded patient is clicked we only need to remove the patient from expandedPatients and trigger a rerender
        if (this.expandedPatients.includes(patient))
            return unexpand();
        // when a patient is clicked and not expanded first we check if another patient is already expanded
        if (this.expandedPatients.isExpanded())
            unexpand();
        if (patient.metrics.medication)
            this.calculatePatientMedications(patient);
        this.getSurveyQuestionAndAnswerMetric(patient);
        this.expandedPatients.set(patient);
        rerender();
    }
    /**
     * called from the ion-virtual-scroll. its enclosing scope is the element itself
     * critical for preventing jumping and flickering when clicking patients
     */
    itemHeight(patient, index) {
        return patient && patient.expanded ? 400 : 150;
    }
    /**
     *  Parse risk in order to apply risk coloring classes to metrics
     */
    parsePatientRisk(_, patient) {
        if (patient.risk && patient.risk[0]) {
            let patientRisk = patient.risk[0];
            if (patientRisk.details && patientRisk.details.length > 0) {
                let riskDetails = patientRisk.details;
                for (let i = 0; i < patientRisk.details.length; i++) {
                    let riskLevel = riskDetails[i].type;
                    if (riskDetails[i].metrics) {
                        patient[riskDetails[i].metrics[0] + 'Risk'] = riskLevel;
                    }
                }
            }
            let risk = PatientListPage_1.getRiskText(patientRisk);
            patient.riskText = risk.text;
            patient.riskClass = risk.class;
        }
    }
    /**
     *     Find the highest risk level and display as text
     */
    static getRiskText(risk) {
        let riskLevel = risk.value;
        if (riskLevel === 4 || riskLevel === 5) {
            return { text: 'RISK_TEXT_HIGH', class: 'highRisk' };
        }
        else if (riskLevel === 2 || riskLevel === 3) {
            return { text: 'RISK_TEXT_MED', class: 'medRisk' };
        }
        else {
            return { text: 'RISK_TEXT_LOW', class: 'lowRisk' };
        }
    }
    /**
     * Calculate if medications have been taken or not
     */
    calculatePatientMedications(patient) {
        let medications;
        let totalMedications = 0;
        let medicationsTakenToday = [];
        if (patient.metrics.medication.medications) {
            medications = patient.metrics.medication.medications;
            totalMedications = medications.length;
            for (var i = 0; i < medications.length; i++) {
                if (medications[i].ts) {
                    medicationsTakenToday.push(medications[i].ts);
                }
            }
            this.medications = medicationsTakenToday.length + '/' + totalMedications;
        }
        else {
            this.medications = '0/0';
        }
    }
    /**
     * Navigate to patient profile
     */
    viewPatientProfile(event, patient) {
        event.stopPropagation();
        let navigationExtras = {
            queryParams: {
                patient: patient,
                mode: this.mode
            }
        };
        this.navCtrl.navigateForward('/patient-profile', navigationExtras).then(() => {
            // if search bar was open when navigating to profile, going back to patient list was leaving a space where it was
            // make sure to hide search bar
            this.search = false;
        });
    }
    /**
     * Checking if the patient is reviewed or not and submitting for review / unreview
     */
    submitNewReviewedStatus(event, patient) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            event.stopPropagation();
            patient.reviewLoading = true;
            const requestedStatus = this.reviewedStatusService.requestedReviewedStatus(patient.reviewedState);
            return this.reviewedStatusService.submitRequestedStatus(patient.hrsid, requestedStatus).subscribe({
                next: (resp) => {
                    patient.reviewLoading = false;
                    patient.reviewedState = requestedStatus;
                    patient.reviewed = [{ name: this.user.getClinicianName(), time: Date.now().toString(), reviewedStatus: requestedStatus }];
                    const message = this.translateService.instant('REVIEWED_STATUS_SUBMITTED_SUCCESS', {
                        patientName: patient.name.first + ' ' + patient.name.last,
                        newStatus: this.reviewedStatusService.translateReviewedStatus(patient.reviewedState),
                    });
                    this.throwReviewToast(message, this.reviewedStatusService.popupReviewedStatusClass(patient.reviewedState));
                },
                error: (err) => {
                    patient.reviewLoading = false;
                    const message = this.translateService.instant('REVIEWED_STATUS_SUBMITTED_ERROR', {
                        patientName: patient.name.first + ' ' + patient.name.last,
                        reviewedStatus: this.reviewedStatusService.translateReviewedStatus(requestedStatus)
                    });
                    this.throwReviewToast(message, this.reviewedStatusService.popupReviewedStatusClass());
                    this.logger.error('Error: ', err);
                }
            });
        });
    }
    throwReviewToast(message, cssClass) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: message,
                duration: 3000,
                position: 'top',
                cssClass: cssClass
            });
            return yield toast.present();
        });
    }
    /**
     * Launch the action sheet to select which form of communication
     */
    openCommunicationActionSheet(event, patient) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            event.stopPropagation();
            this.translateService.get('CANCEL_BUTTON').subscribe((value) => {
                this.cancelMessage = value;
            });
            this.translateService.get('COMMUNICATION_BUTTON').subscribe((value) => {
                this.communicationButton = value;
            });
            this.translateService.get('VIDEO_BUTTON').subscribe((value) => {
                this.videoButton = value;
            });
            this.translateService.get('VOICE_BUTTON').subscribe((value) => {
                this.voiceButton = value;
            });
            this.translateService.get('CHAT_BUTTON').subscribe((value) => {
                this.chatButton = value;
            });
            let actionSheet = yield this.actionSheetCtrl.create({
                header: this.communicationButton,
                buttons: [
                    {
                        text: this.voiceButton,
                        icon: !this.platform.is('ios') ? 'phone-portrait' : null,
                        handler: () => {
                            this.openVoiceCall(patient);
                        }
                    },
                    {
                        text: this.videoButton,
                        icon: !this.platform.is('ios') ? 'videocam' : null,
                        handler: () => {
                            this.openVideoCall(patient);
                        }
                    },
                    {
                        text: this.chatButton,
                        icon: !this.platform.is('ios') ? 'chatbubbles' : null,
                        handler: () => {
                            this.openChatMessages(patient);
                        }
                    },
                    {
                        text: this.cancelMessage,
                        role: 'cancel',
                        icon: !this.platform.is('ios') ? 'close' : null,
                        handler: () => { }
                    }
                ]
            });
            return yield actionSheet.present();
        });
    }
    /**
     * Launch the chat messages modal
     */
    openChatMessages(patient) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _communication_chat_chat_page__WEBPACK_IMPORTED_MODULE_12__["ChatPage"],
                componentProps: { patient: patient }
            });
            // Getting data from the modal on dismiss
            return yield modal.present();
            // creates the modal
        });
    }
    /**
     * Launch the video call modal
     */
    openVideoCall(patient) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let patientName = patient.name.first + ' ' + patient.name.last;
            const modal = yield this.modalCtrl.create({
                component: _communication_video_video_page__WEBPACK_IMPORTED_MODULE_13__["VideoPage"],
                componentProps: {
                    callData: {
                        patientName: patientName,
                        patientHrsId: patient.hrsid
                    }
                }
            });
            return yield modal.present();
        });
    }
    /**
     * Launch the voice call modal
     */
    openVoiceCall(patient) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let riskClass;
            if (patient.status === 'activated') {
                riskClass = patient.riskClass;
            }
            else {
                riskClass = 'preactivated';
            }
            let patientName = patient.name.first + ' ' + patient.name.last;
            const modal = yield this.modalCtrl.create({
                component: _communication_voice_voice_page__WEBPACK_IMPORTED_MODULE_14__["VoicePage"],
                componentProps: {
                    callData: {
                        patientName: patientName,
                        patientHrsId: patient.hrsid,
                        patientGender: this.displayGender.transform(patient.gender),
                        riskClass: riskClass
                    }
                }
            });
            return yield modal.present();
        });
    }
    /**
     * Get survey questions and answers for today
     */
    getSurveyQuestionAndAnswerMetric(patient) {
        this.surveyDetailsService.getSurveyDetails(patient.hrsid, moment__WEBPACK_IMPORTED_MODULE_10___default()().format('YYYY-MM-DD')).subscribe({
            next: (dailySurveyDetails) => {
                patient.surveyDetails = dailySurveyDetails;
            },
            error: (err) => {
                this.logger.error('Error: ', err);
            }
        });
    }
    /**
     * Pull to refresh
     * @param refresher
     */
    doRefresh(refresher) {
        // hide search if open
        this.search = false;
        this.searchTerm = '';
        // separated this call from the early function to avoid displaying two loaders
        this.getPatientList(null, refresher);
    }
    /**
     * Show and hide search bar
     * On hide the entire list will be displayed again
     */
    toggleSearch() {
        this.search = !this.search;
        if (!this.search) {
            this.searchTerm = '';
            this.previousSearchTerm = '';
            // reset patient list to show all patients when closing search
            let patients = this.allPatients.slice();
            this.visiblePatients = patients;
        }
    }
    /**
     * Show spinner during search delay
     */
    onSearchInput(ev) {
        this.searching = true;
    }
    /**
     * Filter patient list by first name last name full name or PID
     */
    filterPatients() {
        // search term was changed or removed
        if (this.searchTerm !== this.previousSearchTerm || this.searchTerm === '') {
            let allPatients = this.allPatients.slice();
            this.visiblePatients = allPatients;
        }
        if (this.visiblePatients && this.searchTerm.length > 1) {
            let allPatients = this.allPatients.slice();
            this.visiblePatients = allPatients.filter((patient) => {
                let isMatch = false;
                if (patient.name.first) {
                    // match just first name
                    isMatch = isMatch || patient.name.first.toLowerCase().indexOf(this.searchTerm.toLowerCase().replace(/\s/g, '')) > -1;
                }
                if (patient.name.last) {
                    // match just last name
                    isMatch = isMatch || patient.name.last.toLowerCase().indexOf(this.searchTerm.toLowerCase().replace(/\s/g, '')) > -1;
                }
                if (patient.name.first && patient.name.last) {
                    // match first and last ignoring whitespace
                    isMatch = isMatch || ((patient.name.first + patient.name.last).toLowerCase()).indexOf(this.searchTerm.toLowerCase().replace(/\s/g, '')) > -1;
                }
                if (patient.pid) {
                    // match patient id
                    isMatch = isMatch || patient.pid.toLowerCase().indexOf(this.searchTerm.toLowerCase().replace(/\s/g, '')) > -1;
                }
                return isMatch;
            });
        }
        // store search term for comparison with new search term
        this.previousSearchTerm = this.searchTerm;
    }
    canContactPatient() {
        return this.user.canContactPatient();
    }
    canEditPatientInfo() {
        return this.user.canEditPatientInfo();
    }
};
PatientListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: _clinician_providers__WEBPACK_IMPORTED_MODULE_8__["DataExchangeService"] },
    { type: _pipes_display_gender_pipe__WEBPACK_IMPORTED_MODULE_15__["DisplayGenderPipe"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: ngx_logger__WEBPACK_IMPORTED_MODULE_6__["NGXLogger"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _clinician_providers__WEBPACK_IMPORTED_MODULE_8__["PatientListService"] },
    { type: _clinician_providers__WEBPACK_IMPORTED_MODULE_8__["SurveyDetailsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _clinician_providers__WEBPACK_IMPORTED_MODULE_8__["ReviewedStatusService"] },
    { type: _services_user_user__WEBPACK_IMPORTED_MODULE_9__["User"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _clinician_providers__WEBPACK_IMPORTED_MODULE_8__["ZoomService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('patientList', null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonVirtualScroll"])
], PatientListPage.prototype, "patientListScrollElement", void 0);
PatientListPage = PatientListPage_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'patient-list',
        template: __webpack_require__(/*! raw-loader!./patient-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/patient-list/patient-list.page.html"),
        styles: [__webpack_require__(/*! ./patient-list.page.scss */ "./src/app/patient-list/patient-list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"],
        _clinician_providers__WEBPACK_IMPORTED_MODULE_8__["DataExchangeService"],
        _pipes_display_gender_pipe__WEBPACK_IMPORTED_MODULE_15__["DisplayGenderPipe"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
        ngx_logger__WEBPACK_IMPORTED_MODULE_6__["NGXLogger"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _clinician_providers__WEBPACK_IMPORTED_MODULE_8__["PatientListService"],
        _clinician_providers__WEBPACK_IMPORTED_MODULE_8__["SurveyDetailsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
        _clinician_providers__WEBPACK_IMPORTED_MODULE_8__["ReviewedStatusService"],
        _services_user_user__WEBPACK_IMPORTED_MODULE_9__["User"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
        _clinician_providers__WEBPACK_IMPORTED_MODULE_8__["ZoomService"]])
], PatientListPage);



/***/ })

}]);
//# sourceMappingURL=patient-list-patient-list-module-es2015.js.map