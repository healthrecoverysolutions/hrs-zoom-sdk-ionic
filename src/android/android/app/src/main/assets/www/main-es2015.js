(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../libs/classes/all-metrics.ts":
/*!*********************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/classes/all-metrics.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: AllMetrics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllMetrics", function() { return AllMetrics; });
class AllMetrics {
}
AllMetrics.activity = {
    key: 'activity', name: 'Activity',
    shortname: 'Activity', metricdetails: ['duration'],
    risklabels: { medrisk: 'riskMedActivity', highrisk: 'riskHighActivity' }
};
AllMetrics.bloodpressure = {
    key: 'bloodpressure', name: 'Blood Pressure',
    shortname: 'BP', metricdetails: ['systolic', 'diastolic', 'heartrate'],
    risklabels: { medrisk: 'riskMedBloodPressure', highrisk: 'riskHighBloodPressure' }
};
AllMetrics.glucose = {
    key: 'glucose', name: 'Glucose',
    shortname: 'Glucose', metricdetails: ['glucose'],
    risklabels: { medrisk: 'riskMedGlucose', highrisk: 'riskHighGlucose' }
};
AllMetrics.survey = {
    key: 'survey', name: 'Survey',
    shortname: 'Survey', metricdetails: [],
    risklabels: { medrisk: 'riskMedSurvey', highrisk: 'riskHighSurvey' }
};
AllMetrics.medication = {
    key: 'medication', name: 'Medication',
    shortname: 'Medication', metricdetails: [],
    risklabels: { medrisk: 'riskMedMedication', highrisk: 'riskHighMedication' }
};
AllMetrics.pulseox = {
    key: 'pulseox', name: 'Pulse Ox',
    shortname: 'Pulse Ox', metricdetails: ['spo2', 'heartrate'],
    risklabels: { medrisk: 'riskMedPulseox', highrisk: 'riskHighPulseox' }
};
AllMetrics.temperature = {
    key: 'temperature', name: 'Temperature',
    shortname: 'Temperature', metricdetails: ['temperature', 'unit'],
    risklabels: { medrisk: 'riskMedTemperature', highrisk: 'riskHighTemperature' }
};
AllMetrics.weight = {
    key: 'weight', name: 'Weight',
    shortname: 'Weight', metricdetails: ['weight'],
    risklabels: { medrisk: 'riskMedWeight', highrisk: 'riskHighWeight' }
};
AllMetrics.steps = {
    key: 'steps', name: 'Steps',
    shortname: 'Steps', metricdetails: ['steps']
};
AllMetrics.patientconnectvoice = {
    key: 'patientconnectvoice', name: 'PatientConnect Voice',
    shortname: 'PatientConnect Voice', metricdetails: ['patientconnectvoice'],
    risklabels: { medrisk: 'riskMedPCVoice', highrisk: 'riskHighPCVoice' }
};


/***/ }),

/***/ "../../libs/environments/environment":
/*!***********************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/environments/environment ***!
  \***********************************************************************************************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    current_environment: 'prod',
    HRS_DOMAIN: 'healthrecoverysolutions.com',
    API_GATEWAY_URL: 'https://gateway.healthrecoverysolutions.com',
    USE_ANALYTICS: true,
    ANALYTICS_INFO: {
        url: 'https://analytics.healthrecoverysolutions.com/js/container_LpTpOOUg.js'
    },
    DEBUG: false,
    HRSTAB: 'HRSTAB_value',
    LEGACYDESIGN: 'LEGACYDESIGN_value',
    UPDATEINTERVAL: 3600000
};


/***/ }),

/***/ "../../libs/gateway/gateway-resource.service.ts":
/*!**********************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/gateway/gateway-resource.service.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: GatewayResourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GatewayResourceService", function() { return GatewayResourceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _gateway_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gateway.service */ "../../libs/gateway/gateway.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm/operators/index.js");
/* harmony import */ var _hrs_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hrs/providers */ "../../libs/providers/providers.ts");





/**
 * This is the service to use for interacting with Gateway endpoints that deal with RESTful resources and follow our newer API standard formats.
 * If instead you need to call Gateway endpoints that don't work with these standards, then you can use the more general GatewayService instead.
 *
 * Some reasons to use this:
 * - strict typing of parameters for enforcing consistency
 * - outbound data transformation of the resource you submit if it implements a toJSON function
 * - inbound data transformation of the response if you provide a factory function
 */
let GatewayResourceService = class GatewayResourceService {
    constructor(gateway, tokenService) {
        this.gateway = gateway;
        this.tokenService = tokenService;
    }
    get token() {
        return this.tokenService.token;
    }
    set token(token) {
        this.tokenService.token = token;
    }
    login(credentials) {
        return this.post({ endpoint: 'v1/tokens' }, credentials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((res) => {
            this.token = res.data.attributes.token;
        }));
    }
    isLoggedIn() {
        return this.gateway.isLoggedIn();
    }
    logout() {
        this.gateway.logout();
    }
    get(options, factory) {
        return this.sendRequest('GET', options, undefined, factory);
    }
    post(options, resource, factory) {
        return this.sendRequest('POST', options, resource, factory);
    }
    put(options, resource, factory) {
        return this.sendRequest('PUT', options, resource, factory);
    }
    patch(options, resource, factory) {
        return this.sendRequest('PATCH', options, resource, factory);
    }
    delete(options) {
        return this.sendRequest('DELETE', options);
    }
    sendRequest(method, options, resource, factory) {
        const query = {};
        if (options['filter']) {
            query['filter'] = options['filter'];
        }
        return this.gateway[method.toLowerCase()]({
            path: options.endpoint + (options['id'] ? '/' + options['id'] : ''),
            query: query,
            body: resource ? {
                data: typeof resource['toJSON'] === 'function' ? resource.toJSON() : resource
            } : undefined
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((res) => {
            this.parseResponse(res, factory);
        }));
    }
    parseResponse(res, factory) {
        const result = {};
        if (res) {
            if (res.status)
                result['status'] = res.status;
            if (res.body) {
                if (res.body['data']) {
                    const data = res.body['data'];
                    if (Array.isArray(data)) {
                        result['data'] = data.map((x) => factory ? factory(x) : x);
                    }
                    else {
                        result['data'] = factory ? factory(data) : data;
                    }
                }
                result['meta'] = res.body['meta'];
            }
        }
        return result;
    }
};
GatewayResourceService.ctorParameters = () => [
    { type: _gateway_service__WEBPACK_IMPORTED_MODULE_2__["GatewayService"] },
    { type: _hrs_providers__WEBPACK_IMPORTED_MODULE_4__["TokenService"] }
];
GatewayResourceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_gateway_service__WEBPACK_IMPORTED_MODULE_2__["GatewayService"],
        _hrs_providers__WEBPACK_IMPORTED_MODULE_4__["TokenService"]])
], GatewayResourceService);



/***/ }),

/***/ "../../libs/gateway/gateway.service.ts":
/*!*************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/gateway/gateway.service.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: GatewayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GatewayService", function() { return GatewayService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/env */ "../../libs/environments/environment");
/* harmony import */ var _hrs_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hrs/providers */ "../../libs/providers/providers.ts");





let GatewayService = class GatewayService {
    constructor(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
        this.language = 'en';
    }
    set hrsUserAgentHeader(hrsUserAgentHeader) {
        this._hrsUserAgentHeader = hrsUserAgentHeader;
    }
    get hrsUserAgentHeader() {
        return this._hrsUserAgentHeader;
    }
    isLoggedIn() {
        return this.tokenService.token !== null;
    }
    logout() {
        this.tokenService.token = null;
    }
    get(options) {
        return this.sendRequest('GET', options);
    }
    post(options) {
        return this.sendRequest('POST', options);
    }
    put(options) {
        return this.sendRequest('PUT', options);
    }
    patch(options) {
        return this.sendRequest('PATCH', options);
    }
    delete(options) {
        return this.sendRequest('DELETE', options);
    }
    sendRequest(method, options) {
        let reqOptions = {
            headers: options.headers || {}
        };
        reqOptions.headers['Content-Type'] = options.contentType ? options.contentType : 'application/json';
        reqOptions.headers['Accept-Language'] = this.language;
        if (this._hrsUserAgentHeader) {
            reqOptions.headers['hrs-user-agent'] = this._hrsUserAgentHeader;
        }
        if (options.responseType) {
            reqOptions['responseType'] = options.responseType;
        }
        if (this.tokenService.token) {
            reqOptions.headers['Authorization'] = 'Bearer ' + this.tokenService.token;
        }
        let queryString = '';
        if (options.query) {
            queryString = Object.keys(options.query)
                .map((key) => {
                let value = options.query[key];
                if (value && typeof value === 'object') {
                    return Object.keys(value)
                        .map((nestedKey) => `${key}[${nestedKey}]=${value[nestedKey]}`)
                        .join('&');
                }
                else {
                    return `${key}=${value}`;
                }
            })
                .join('&');
        }
        const url = _app_env__WEBPACK_IMPORTED_MODULE_3__["environment"].API_GATEWAY_URL + '/' + options.path + (queryString ? '?' + queryString : '');
        method = method.toLowerCase();
        if (method === 'get' || method === 'delete') {
            return this.http[method](url, reqOptions);
        }
        else {
            return this.http[method](url, options.body, reqOptions);
        }
    }
};
GatewayService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _hrs_providers__WEBPACK_IMPORTED_MODULE_4__["TokenService"] }
];
GatewayService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
        _hrs_providers__WEBPACK_IMPORTED_MODULE_4__["TokenService"]])
], GatewayService);



/***/ }),

/***/ "../../libs/gateway/index.ts":
/*!***************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/gateway/index.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: GatewayService, GatewayResourceService, PatientSettingsResponse, TokenMeta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gateway_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gateway.service */ "../../libs/gateway/gateway.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GatewayService", function() { return _gateway_service__WEBPACK_IMPORTED_MODULE_0__["GatewayService"]; });

/* harmony import */ var _gateway_resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gateway-resource.service */ "../../libs/gateway/gateway-resource.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GatewayResourceService", function() { return _gateway_resource_service__WEBPACK_IMPORTED_MODULE_1__["GatewayResourceService"]; });

/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources */ "../../libs/gateway/resources/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PatientSettingsResponse", function() { return _resources__WEBPACK_IMPORTED_MODULE_2__["PatientSettingsResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenMeta", function() { return _resources__WEBPACK_IMPORTED_MODULE_2__["TokenMeta"]; });






/***/ }),

/***/ "../../libs/gateway/resources/index.ts":
/*!*************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/gateway/resources/index.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: PatientSettingsResponse, TokenMeta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _patient_settings_apiv2_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patient-settings-apiv2-response */ "../../libs/gateway/resources/patient-settings-apiv2-response.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PatientSettingsResponse", function() { return _patient_settings_apiv2_response__WEBPACK_IMPORTED_MODULE_0__["PatientSettingsResponse"]; });

/* harmony import */ var _token_meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token-meta */ "../../libs/gateway/resources/token-meta.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenMeta", function() { return _token_meta__WEBPACK_IMPORTED_MODULE_1__["TokenMeta"]; });





/***/ }),

/***/ "../../libs/gateway/resources/patient-settings-apiv2-response.ts":
/*!***************************************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/gateway/resources/patient-settings-apiv2-response.ts ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: PatientSettingsResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientSettingsResponse", function() { return PatientSettingsResponse; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @route GET /patient/{hrsid}/profile/v2
 */
class PatientSettingsResponse {
    constructor(response) {
        this.pid = response.data.pid;
        this.name = response.data.name;
        this.gender = response.data.gender;
        this.dob = (response.data.dob ? moment__WEBPACK_IMPORTED_MODULE_0__(response.data.dob, 'MM-DD-YYYY').format('MM/DD/YYYY') : null);
        this.phone = response.data.phone;
        this.subgroup = response.data.subgroup;
        this.testpatient = response.data.testpatient ? 'Yes' : 'No';
        this.language = response.data.language;
        this.volume = response.data.volume;
        this.audioreminders = response.data.audioreminders;
        this.alternatefirstname = response.data.alternatefirstname;
        this.alternatemiddlename = response.data.alternatemiddlename;
        this.alternatelastname = response.data.alternatelastname;
        this.alternatetelephone = response.data.alternatetelephone;
        this.alternaterelationship = response.data.alternaterelationship;
        this.PATIENTINFO_CUSTOMATTRIBUTES = response.data.PATIENTINFO_CUSTOMATTRIBUTES;
        this.lasthospitalization = this.formatLastHospitalization(response);
        this.timezone = response.data.timezone;
    }
    formatLastHospitalization(response) {
        // Last Hospitalization timestamp varies between milliseconds and seconds creating issues
        // Convert all TimeStamp values to milliseconds
        let lastHospitalization = response.data.lasthospitalization < 10000000000 &&
            typeof response.data.lasthospitalization === 'number' ?
            response.data.lasthospitalization * 1000 :
            response.data.lasthospitalization;
        return response.data.lasthospitalization = lastHospitalization ?
            moment__WEBPACK_IMPORTED_MODULE_0__(new Date(lastHospitalization)).format('MM/DD/YYYY') : null;
    }
}
PatientSettingsResponse.ctorParameters = () => [
    null
];


/***/ }),

/***/ "../../libs/gateway/resources/token-meta.ts":
/*!******************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/gateway/resources/token-meta.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: TokenMeta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenMeta", function() { return TokenMeta; });
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment-timezone */ "../../node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @route GET|POST /token-metas
 */
class TokenMeta {
    static fromJSON(data) {
        const token = new TokenMeta();
        token.id = data.id;
        // These timestamps were received with offset +00:00 but that's incorrect, their actual timezone is Eastern
        if (data.created) {
            token.created = moment_timezone__WEBPACK_IMPORTED_MODULE_0__["tz"](data.created, 'America/New_York');
        }
        if (data.lastUsed) {
            token.lastUsed = moment_timezone__WEBPACK_IMPORTED_MODULE_0__["tz"](data.lastUsed, 'America/New_York');
        }
        token.source = data.source;
        return token;
    }
    toJSON() {
        return {
            id: this.id,
            created: this.created.format(),
            lastUsed: this.lastUsed.format(),
            source: this.source
        };
    }
}


/***/ }),

/***/ "../../libs/models/daily-survey-details.model.ts":
/*!***********************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/models/daily-survey-details.model.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: DailySurveyDetailsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailySurveyDetailsModel", function() { return DailySurveyDetailsModel; });
class DailySurveyDetailsModel {
}


/***/ }),

/***/ "../../libs/models/metric-entry.model.ts":
/*!***************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/models/metric-entry.model.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: MetricEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricEntry", function() { return MetricEntry; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

class MetricEntry {
    constructor(timestamp, id) {
        this.manual = false;
        this.deleted = false;
        this.date = moment__WEBPACK_IMPORTED_MODULE_0__["unix"](timestamp / 1000);
        this.id = id;
    }
}
MetricEntry.ctorParameters = () => [
    { type: Number },
    { type: String }
];


/***/ }),

/***/ "../../libs/models/model-with-events.ts":
/*!**************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/models/model-with-events.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: ModelWithEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelWithEvents", function() { return ModelWithEvents; });
/**
 * Base class that can be extended by models
 *
 * Provides an implementation of publish-subscribe messaging pattern, but with short-circuiting in case an event has
 * already completed so that subscribers get an immediate response.
 * Unsubscribe also happens automatically on publish unless setFlag optional parameter 'closed' is set to false.
 */
class ModelWithEvents {
    constructor() {
        // Override this in child classes to provide a list of the event names
        this.events = {};
        this.flags = {};
        this.subscribers = {};
    }
    getFlag(event) {
        return !!this.flags[event];
    }
    setFlag(event, value = true, closed) {
        if (!this.hasEvent(event))
            return;
        this.flags[event] = value;
        if (value) {
            this.publish(event, closed);
        }
    }
    subscribe(event, callback) {
        if (!this.hasEvent(event))
            return () => { };
        if (this.getFlag(event)) {
            // The event had already completed, so we can callback immediately and return a dummy unsubscriber function
            callback(this);
            return () => { };
        }
        else {
            if (!this.subscribers[event]) {
                this.subscribers[event] = [];
            }
            const callbacks = this.subscribers[event];
            const index = callbacks.length;
            callbacks.push(callback);
            return () => {
                delete callbacks[index];
            };
        }
    }
    publish(event, closed = true) {
        const callbacks = this.subscribers[event];
        if (!callbacks)
            return;
        for (let i = 0; i < callbacks.length; i++) {
            let callback = callbacks[i];
            if (callback) {
                callback(this);
                if (closed)
                    delete callbacks[i];
            }
        }
    }
    hasEvent(event) {
        return this.events.hasOwnProperty(event);
    }
}


/***/ }),

/***/ "../../libs/models/models.ts":
/*!***************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/models/models.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: DailySurveyDetailsModel, MetricEntry, PatientModel, SurveyEntry, SurveyGroupModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _daily_survey_details_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./daily-survey-details.model */ "../../libs/models/daily-survey-details.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DailySurveyDetailsModel", function() { return _daily_survey_details_model__WEBPACK_IMPORTED_MODULE_0__["DailySurveyDetailsModel"]; });

/* harmony import */ var _metric_entry_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./metric-entry.model */ "../../libs/models/metric-entry.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetricEntry", function() { return _metric_entry_model__WEBPACK_IMPORTED_MODULE_1__["MetricEntry"]; });

/* harmony import */ var _survey_entry_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./survey-entry.model */ "../../libs/models/survey-entry.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyEntry", function() { return _survey_entry_model__WEBPACK_IMPORTED_MODULE_2__["SurveyEntry"]; });

/* harmony import */ var _survey_group_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./survey-group.model */ "../../libs/models/survey-group.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyGroupModel", function() { return _survey_group_model__WEBPACK_IMPORTED_MODULE_3__["SurveyGroupModel"]; });

/* harmony import */ var _patient_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patient.model */ "../../libs/models/patient.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PatientModel", function() { return _patient_model__WEBPACK_IMPORTED_MODULE_4__["PatientModel"]; });









/***/ }),

/***/ "../../libs/models/patient.model.ts":
/*!**********************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/models/patient.model.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: PatientModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientModel", function() { return PatientModel; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _classes_all_metrics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/all-metrics */ "../../libs/classes/all-metrics.ts");
/* harmony import */ var _model_with_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model-with-events */ "../../libs/models/model-with-events.ts");



class PatientModel extends _model_with_events__WEBPACK_IMPORTED_MODULE_2__["ModelWithEvents"] {
    constructor() {
        super(...arguments);
        this.events = {
            patientLoaded: 'patientLoaded',
            overviewDataLoaded: 'overviewDataLoaded',
            startingWeightLoaded: 'startingWeightLoaded',
            trendsDataLoaded: 'trendsDataLoaded',
            historicalDataLoaded: 'historicalDataLoaded',
            updatedRecentMetrics: 'updatedRecentMetrics',
        };
        this.historical = [];
        this.overview = [];
        this.recentMetrics = {};
        this.stillLoading = true;
        this.startingWeight = { weightFirst: '', weightFirstTime: '' };
    }
    get patientLoaded() {
        return this.getFlag(this.events.patientLoaded);
    }
    set patientLoaded(value) {
        this.setFlag(this.events.patientLoaded, value);
    }
    get overviewDataLoaded() {
        return this.getFlag(this.events.overviewDataLoaded);
    }
    set overviewDataLoaded(value) {
        this.setFlag(this.events.overviewDataLoaded, value);
    }
    get startingWeightLoaded() {
        return this.getFlag(this.events.startingWeightLoaded);
    }
    set startingWeightLoaded(value) {
        this.setFlag(this.events.startingWeightLoaded, value);
    }
    get trendsDataLoaded() {
        return this.getFlag(this.events.trendsDataLoaded);
    }
    set trendsDataLoaded(value) {
        this.setFlag(this.events.trendsDataLoaded, value);
    }
    get historicalDataLoaded() {
        return this.getFlag(this.events.historicalDataLoaded);
    }
    set historicalDataLoaded(value) {
        this.setFlag(this.events.historicalDataLoaded, value);
    }
    get updatedRecentMetrics() {
        return this.getFlag(this.events.updatedRecentMetrics);
    }
    set updatedRecentMetrics(value) {
        this.setFlag(this.events.updatedRecentMetrics, value, false);
    }
    get all() {
        return this.overview.concat(this.historical);
    }
    initializeWithData(data) {
        if (!this.patientLoaded) {
            this.data = data;
            this.overview[0] = data;
            this.profile = data.profile;
            this.setRecentMetrics();
            this.getLatestRiskLevels();
            this.patientLoaded = true;
            // account for difference in unreviewed patients' responses between patient list (returns []) and
            // patient profile data (omits the 'reviewed' property) that causes a flicker between the 'Reviewed' and 'Non-reviewed' buttons
            if (this.profile.reviewed && (typeof this.profile.reviewed !== 'boolean') && (this.profile.reviewed.length == 0)) {
                this.profile.reviewed = undefined;
            }
        }
    }
    setRecentMetrics(data) {
        if (!!data)
            this.updatedRecentMetrics = false;
        if (!data)
            this.recentMetrics = {};
        const metrics = Object.keys(this.data.metrics);
        let entries = !data ? this.all : data;
        for (let metric of metrics) {
            if (RegExp(metric).test('survey woundimaging medication'))
                continue;
            Object.assign(this.recentMetrics, this.getLatestReadingsForMetric(entries, metric));
        }
        // trigger trends charts if patient is newer than 15 days
        if (this.data.day <= 15) {
            let recordedDays = this.all.filter((day) => day['day'] > 0);
            // because the data will loaded in batches even for a small range patient - be sure that all the data days are loaded before flagging
            if (recordedDays.length === this.data.day) {
                this.updatedRecentMetrics = true;
                this.trendsDataLoaded = true;
            }
        }
        if (!!data) {
            this.updatedRecentMetrics = true;
        }
        else {
            this.getLatestRiskLevels();
        }
    }
    getLatestReadingsForMetric(data, metric) {
        let readings = {};
        for (let day of data) {
            let entries = day.metrics[metric];
            if ((this.recentMetrics[metric + 'Today'] && this.recentMetrics[metric + 'Last']) ||
                (readings[metric + 'Today'] && readings[metric + 'Last'])) {
                return readings;
            }
            if (entries && entries.data) {
                entries = entries.data.filter((entry) => !entry.deleted && entry.status !== 'removed');
                entries = entries.sort((entry1, entry2) => entry2.ts - entry1.ts);
                if (!entries.length)
                    continue;
                if (!this.recentMetrics[metric + 'Today'] && !readings[metric + 'Today'] && moment__WEBPACK_IMPORTED_MODULE_0__().startOf('day') <= entries[0].ts) {
                    readings[metric + 'Today'] = {};
                    Object.assign(readings[metric + 'Today'], entries[0]);
                    if (entries.length > 1) {
                        readings[metric + 'Last'] = {};
                        Object.assign(readings[metric + 'Last'], entries[1]);
                    }
                }
                else if (!this.recentMetrics[metric + 'Last'] && !readings[metric + 'Last']) {
                    readings[metric + 'Last'] = {};
                    Object.assign(readings[metric + 'Last'], entries[0]);
                    if (!this.recentMetrics[metric + 'Today']) {
                        readings[metric + 'Today'] = readings[metric + 'Today'] || {};
                    }
                }
            }
        }
        return readings;
    }
    getLatestRiskLevels() {
        if (this.data.risk.length && this.data.risk[0].details) {
            const riskDetails = this.data.risk[0].details;
            if (riskDetails) {
                for (let riskDetail of riskDetails) {
                    if (!riskDetail.metrics)
                        continue;
                    for (let metric of riskDetail.metrics) {
                        let riskFlag = _classes_all_metrics__WEBPACK_IMPORTED_MODULE_1__["AllMetrics"][metric].risklabels[riskDetail.type];
                        this.recentMetrics[riskFlag] = true;
                    }
                }
            }
        }
    }
}


/***/ }),

/***/ "../../libs/models/survey-entry.model.ts":
/*!***************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/models/survey-entry.model.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: SurveyEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyEntry", function() { return SurveyEntry; });
/* harmony import */ var _metric_entry_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metric-entry.model */ "../../libs/models/metric-entry.model.ts");

class SurveyEntry extends _metric_entry_model__WEBPACK_IMPORTED_MODULE_0__["MetricEntry"] {
    constructor(entry) {
        super(parseInt(entry.answered), entry.id);
        this.isGrouped = false;
        this.question = entry.question;
        this.schedule = entry.schedule;
        this.answer = entry.answer;
        this.points = parseInt(entry.points);
    }
}
SurveyEntry.ctorParameters = () => [
    null
];


/***/ }),

/***/ "../../libs/models/survey-group.model.ts":
/*!***************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/models/survey-group.model.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: SurveyGroupModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyGroupModel", function() { return SurveyGroupModel; });
class SurveyGroupModel {
}


/***/ }),

/***/ "../../libs/providers/HRSLoggerMonitor.ts":
/*!****************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/providers/HRSLoggerMonitor.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: HRSLoggerMonitor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HRSLoggerMonitor", function() { return HRSLoggerMonitor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-logger */ "../../node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _hrs_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hrs/providers */ "../../libs/providers/providers.ts");
/* harmony import */ var _hrs_gateway__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hrs/gateway */ "../../libs/gateway/index.ts");
/* harmony import */ var _app_env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/env */ "../../libs/environments/environment");

var HRSLoggerMonitor_1;






/**
 * Hook into ngx-logger services:
 * allows custom treatment for log messaging on top of the base service's console logging support
 */
let HRSLoggerMonitor = HRSLoggerMonitor_1 = class HRSLoggerMonitor {
    constructor(globalSettingsService, gatewayService, http) {
        this.globalSettingsService = globalSettingsService;
        this.gatewayService = gatewayService;
        this.http = http;
        this.loggingURL = ''; // server URL
        this.loggingLevel = ''; // restriction level for server logging
        this.applicationName = '';
        this.stringToLevel = {
            'trace': ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NgxLoggerLevel"].TRACE,
            'debug': ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NgxLoggerLevel"].DEBUG,
            'info': ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NgxLoggerLevel"].INFO,
            'log': ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NgxLoggerLevel"].LOG,
            'warn': ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NgxLoggerLevel"].WARN,
            'error': ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NgxLoggerLevel"].ERROR,
            'fatal': ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NgxLoggerLevel"].FATAL,
            'off': ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NgxLoggerLevel"].OFF // 7
        };
        this.levelToString = {
            [ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NgxLoggerLevel"].TRACE]: 'trace',
            [ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NgxLoggerLevel"].DEBUG]: 'debug',
            [ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NgxLoggerLevel"].INFO]: 'info',
            [ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NgxLoggerLevel"].LOG]: 'log',
            [ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NgxLoggerLevel"].WARN]: 'warn',
            [ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NgxLoggerLevel"].ERROR]: 'error',
            [ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NgxLoggerLevel"].FATAL]: 'fatal',
            [ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NgxLoggerLevel"].OFF]: 'off' // 7
        };
        this.loggingURL = localStorage.getItem(HRSLoggerMonitor_1.LOG_URL_KEY);
        this.loggingLevel = localStorage.getItem(HRSLoggerMonitor_1.LOG_LEVEL_KEY);
        this.ngxLoggingLevel = this.stringToLevel[this.loggingLevel];
    }
    init(app) {
        this.applicationName = app;
        this.globalSettingsService.globalSettingsLoading.then(() => {
            let globalAttributes = this.globalSettingsService.getGlobalAttributes();
            this.loggingURL = globalAttributes['LOG_URL'];
            this.loggingLevel = globalAttributes['LOG_LEVEL'];
            this.ngxLoggingLevel = this.stringToLevel[this.loggingLevel];
            this.updateStorage();
        });
    }
    ;
    updateStorage() {
        if (this.loggingURL) {
            localStorage.setItem(HRSLoggerMonitor_1.LOG_URL_KEY, this.loggingURL);
        }
        else {
            localStorage.removeItem(HRSLoggerMonitor_1.LOG_URL_KEY);
        }
        if (this.loggingLevel) {
            localStorage.setItem(HRSLoggerMonitor_1.LOG_LEVEL_KEY, this.loggingLevel);
        }
        else {
            localStorage.removeItem(HRSLoggerMonitor_1.LOG_LEVEL_KEY);
        }
    }
    ;
    onLog(log) {
        if (!this.loggingURL)
            return;
        if (log.level < this.ngxLoggingLevel)
            return;
        let logInfo = {
            message: log.message,
            meta: {
                environment: _app_env__WEBPACK_IMPORTED_MODULE_6__["environment"].current_environment,
                app: this.applicationName,
                userAgent: navigator.userAgent,
                hrsUserAgent: this.gatewayService.hrsUserAgentHeader,
                timestamp: log.timestamp,
                fileName: log.fileName,
                lineNumber: log.lineNumber,
                logLevel: this.levelToString[log.level]
            }
        };
        // add any additional info to the message
        log.additional.forEach((entry) => {
            if (entry) {
                if (typeof entry === 'string') {
                    logInfo.message += ` ${entry}`;
                }
                else {
                    logInfo.message += ` ${JSON.stringify(entry)}`;
                }
            }
        });
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json');
        let options = { headers };
        this.http.post(this.loggingURL, JSON.stringify(logInfo), options).subscribe(() => { }, (err) => console.error(err));
    }
};
HRSLoggerMonitor.LOG_URL_KEY = 'loggingURL';
HRSLoggerMonitor.LOG_LEVEL_KEY = 'loggingLevel';
HRSLoggerMonitor.ctorParameters = () => [
    { type: _hrs_providers__WEBPACK_IMPORTED_MODULE_4__["GlobalSettingsService"] },
    { type: _hrs_gateway__WEBPACK_IMPORTED_MODULE_5__["GatewayService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HRSLoggerMonitor = HRSLoggerMonitor_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hrs_providers__WEBPACK_IMPORTED_MODULE_4__["GlobalSettingsService"],
        _hrs_gateway__WEBPACK_IMPORTED_MODULE_5__["GatewayService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], HRSLoggerMonitor);



/***/ }),

/***/ "../../libs/providers/api/api-interceptor.ts":
/*!*******************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/providers/api/api-interceptor.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: ApiInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiInterceptor", function() { return ApiInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _token_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../token/token.service */ "../../libs/providers/token/token.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "../../libs/environments/environment");
/* harmony import */ var _broadcastService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../broadcastService */ "../../libs/providers/broadcastService.ts");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-logger */ "../../node_modules/ngx-logger/fesm2015/ngx-logger.js");









let ApiInterceptor = class ApiInterceptor {
    constructor(broadcastService, logger, tokenService) {
        this.broadcastService = broadcastService;
        this.logger = logger;
        this.tokenService = tokenService;
        this._refreshing = false;
        this._refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    intercept(request, next) {
        const isGatewayRequest = request.url.indexOf(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].API_GATEWAY_URL) > -1;
        const isTokenRequest = isGatewayRequest && request.url.indexOf('/tokens') > -1;
        const verboseLogging = isTokenRequest;
        const shouldIntercept = isGatewayRequest && request.headers.get('Authorization') && !isTokenRequest;
        // Create a local copy of sessionId so that we can check it upon response/error and avoid broadcasting to logout if the app has already logged out or in while this request was pending.
        const sessionId = this.tokenService.sessionId;
        if (verboseLogging) {
            this.log('Intercepted request', { request: request });
        }
        if (shouldIntercept) {
            // Giving a 45 second window for interceptor expiration
            let expiration = this.tokenService.getExp();
            let now = Math.floor(Date.now() / 1000);
            if ((expiration - 45) < now) {
                if (this.tokenService.refresh) {
                    this.log('Token has expired', { request: request, expiration: expiration, now: now });
                    return this.handleOldToken(request, next, verboseLogging, sessionId);
                }
                else {
                    this.log('Token has expired but there is no refresh code', { request: request, expiration: expiration, now: now }, true);
                }
            }
        }
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error, caught) => {
            if (verboseLogging) {
                this.log('Intercepted error', { request: request, error: error }, true);
            }
            if (error.status === 406 || error.status === 402 || error.status === 403) {
                this.log('Error code: ' + error.status, { request: request, error: error }, true);
                if (shouldIntercept && !this.tokenService.isRetryingToken && this.tokenService.sessionId === sessionId) {
                    this.handleMiscAuthError(error);
                }
            }
            if (error.status === 401 && shouldIntercept && !this.tokenService.isRetryingToken) {
                this.log('Got unauthorized error', { request: request, error: error }, true);
                if (this.tokenService.sessionId === sessionId) {
                    this.handleAuthError(error);
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(error);
            }
            throw error;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => {
            if (response.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response) {
                if (shouldIntercept) {
                    this.authErrorStartTime = null;
                }
                if (verboseLogging) {
                    this.log('Intercepted response', { request: request, response: response });
                }
            }
            return response;
        }));
    }
    handleOldToken(request, next, verboseLogging, sessionId) {
        const doRequest = (req) => {
            this.log('Resumed request after token refresh', { request: request });
            return next.handle(req)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error, caught) => {
                if (verboseLogging) {
                    this.log('Intercepted error from queued request', { request: request, error: error }, true);
                }
                if (error.status === 406 || error.status === 402 || error.status === 403) {
                    this.log('Error code from queued request: ' + error.status, { request: request, error: error }, true);
                    if (!this.tokenService.isRetryingToken && this.tokenService.sessionId === sessionId) {
                        this.handleMiscAuthError(error);
                    }
                }
                if (error.status === 401 && !this.tokenService.isRetryingToken) {
                    this.log(`Got unauthorized error from queued request`, { request: request, error: error }, true);
                    if (this.tokenService.sessionId === sessionId) {
                        this.handleAuthError(error);
                    }
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(error);
                }
                throw error;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => {
                if (response.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response) {
                    this.authErrorStartTime = null;
                    if (verboseLogging) {
                        this.log('Intercepted response from queued request', { request: request, response: response });
                    }
                }
                return response;
            }));
        };
        if (!this._refreshing) {
            this._refreshing = true;
            this.log('Refreshing token', { request: request });
            return this.tokenService.refreshToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error, caught) => {
                this.log('Token refresh failed', { request: request, error: error }, true);
                // If the refresh failed, just return the token we already had. We'll probably end up unauthorized with our API, but at least the frontend logic doesn't have to account for a missing token or anything.
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({
                    data: {
                        attributes: {
                            token: this.tokenService.token,
                            refresh: this.tokenService.refresh
                        }
                    }
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((tokens) => {
                this.log('Token refresh completed', { request: request });
                this._refreshing = false;
                // Make the original request now that we refreshed our token
                let result = doRequest(this.addNewTokenData(request, tokens));
                // Also make any other requests that were waiting for us to refresh our token
                this._refreshTokenSubject.next(tokens);
                return result;
            }));
        }
        else {
            // Another call happened around the same time as this one and already started refreshing our token, so we just have to wait for that one to get the new token.
            this.log('Pausing request while token refresh in progress', { request: request });
            return this._refreshTokenSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((tokens) => {
                return doRequest(this.addNewTokenData(request, tokens));
            }));
        }
    }
    addNewTokenData(request, tokens) {
        let jwt = tokens.data.attributes.token;
        return request.clone({
            setHeaders: {
                Authorization: `Bearer ${jwt}`,
            }
        });
    }
    handleMiscAuthError(rejection) {
        const currentTime = new Date().getTime();
        if (!this.authErrorStartTime) {
            this.authErrorStartTime = currentTime;
        }
        else {
            const atLeast5MinutesWithoutSuccess = currentTime - this.authErrorStartTime >= 5 * 60 * 1000;
            if (atLeast5MinutesWithoutSuccess) {
                this.broadcastService.miscAuthError.next(rejection);
            }
        }
    }
    handleAuthError(rejection) {
        // Kick the user out to the login page since their session is no longer valid
        // Passing in the rejection object to display information to the user about what happened
        this.broadcastService.interceptorLogout.next(rejection);
    }
    log(message, context, error = false) {
        let contextCopy = JSON.parse(JSON.stringify(context));
        if (contextCopy && contextCopy.request && contextCopy.request.body && contextCopy.request.body.data && contextCopy.request.body.data.password) {
            contextCopy.request.body.data.password = 'REDACTED';
        }
        if (error) {
            this.logger.error(message, contextCopy);
            return;
        }
        this.logger.debug(message, contextCopy);
    }
};
ApiInterceptor.ctorParameters = () => [
    { type: _broadcastService__WEBPACK_IMPORTED_MODULE_7__["BroadcastService"] },
    { type: ngx_logger__WEBPACK_IMPORTED_MODULE_8__["NGXLogger"] },
    { type: _token_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] }
];
ApiInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_broadcastService__WEBPACK_IMPORTED_MODULE_7__["BroadcastService"],
        ngx_logger__WEBPACK_IMPORTED_MODULE_8__["NGXLogger"],
        _token_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]])
], ApiInterceptor);



/***/ }),

/***/ "../../libs/providers/api/gateway-api.ts":
/*!***************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/providers/api/gateway-api.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: GatewayApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GatewayApi", function() { return GatewayApi; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "../../libs/environments/environment");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm/operators/index.js");
/* harmony import */ var _token_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../token/token.service */ "../../libs/providers/token/token.service.ts");






/**
 * GatewayApi is a generic REST Api handler and Gateway for dev/prod has been added in.
 *
 * @todo we should phase this class out in the mobile apps and replace it with GatewayService and/or GatewayResourceService
 */
let GatewayApi = class GatewayApi {
    constructor(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_GATEWAY_URL;
        this.language = 'en';
    }
    set hrsUserAgentHeader(hrsUserAgentHeader) {
        this._hrsUserAgentHeader = hrsUserAgentHeader;
    }
    login(credentials) {
        let reqOpts = { Observe: 'response' };
        if (this._hrsUserAgentHeader)
            reqOpts['headers'] = { 'hrs-user-agent': this._hrsUserAgentHeader };
        const data = this.post('v1/tokens', credentials, reqOpts);
        return data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.tokenService.token = res.data.attributes.token;
            this.tokenService.refresh = res.data.attributes.refresh;
        }));
    }
    isLoggedIn() {
        return (this.tokenService.token !== null);
    }
    logout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.deleteBackendToken();
            this.tokenService.removeTokens();
            this.tokenService.token = null;
        });
    }
    get(endpoint, params) {
        const reqOpts = this.getReqOpts();
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            for (let k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/' + endpoint, reqOpts);
    }
    post(endpoint, body, reqOpts) {
        // reqOpts will only be passed in when we are creating a gatewayToken
        if (!reqOpts) {
            reqOpts = this.getReqOpts();
        }
        return this.http.post(this.url + '/' + endpoint, body, reqOpts);
    }
    put(endpoint, body) {
        const reqOpts = this.getReqOpts();
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    }
    delete(endpoint, params) {
        const reqOpts = this.getReqOpts();
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
    }
    patch(endpoint, body) {
        const reqOpts = this.getReqOpts();
        return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
    }
    getReqOpts() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .append('Content-Type', 'application/json')
            .append('Accept-Language', this.language);
        if (this.tokenService.token)
            headers = headers.append('Authorization', 'Bearer ' + this.tokenService.token);
        if (this._hrsUserAgentHeader)
            headers = headers.append('hrs-user-agent', this._hrsUserAgentHeader);
        return {
            Observe: 'response',
            headers: headers
        };
    }
    // move to gateway.service when change over happens
    deleteBackendToken() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.tokenService.token)
                return;
            const encodedToken = this.tokenService.token.split('.')[1];
            const decodedToken = JSON.parse(atob(encodedToken));
            yield this.delete(`tokens/${decodedToken.jti}`).subscribe();
        });
    }
};
GatewayApi.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _token_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"] }
];
GatewayApi = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _token_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"]])
], GatewayApi);



/***/ }),

/***/ "../../libs/providers/broadcastService.ts":
/*!****************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/providers/broadcastService.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: BroadcastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastService", function() { return BroadcastService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm/index.js");

/**
 * This is to handle the circular dependency of the ApiInterceptor/ App Component / User
 */
class BroadcastService {
    constructor() {
        // initialize it by setting the rejection error object to null
        this.interceptorLogout = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.miscAuthError = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
    }
}


/***/ }),

/***/ "../../libs/providers/communication/communication.service.ts":
/*!***********************************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/providers/communication/communication.service.ts ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: CommunicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationService", function() { return CommunicationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_gateway_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/gateway-api */ "../../libs/providers/api/gateway-api.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm/index.js");





let CommunicationService = class CommunicationService {
    constructor(gatewayApi) {
        this.gatewayApi = gatewayApi;
        this.endVideoCall = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.endVoiceCall = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.callerLeft = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.exitVideoCallEnterNew = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.exitVoiceCallEnterNew = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.exitChatOpenNew = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.getChatNewMessage = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.incomingVideoCall = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.incomingVoiceCall = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.newChatMessage = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.exitVideoCallEnterNew$ = this.exitVideoCallEnterNew.asObservable();
        this.exitVoiceCallEnterNew$ = this.exitVoiceCallEnterNew.asObservable();
        this.exitChatOpenNew$ = this.exitChatOpenNew.asObservable();
        this.getChatNewMessage$ = this.getChatNewMessage.asObservable();
        this.newChatMessage$ = this.newChatMessage.asObservable();
        this.incomingVideoCall$ = this.incomingVideoCall.asObservable();
        this.incomingVoiceCall$ = this.incomingVoiceCall.asObservable();
        this.endVideoCall$ = this.endVideoCall.asObservable();
        this.endVoiceCall$ = this.endVoiceCall.asObservable();
        this.callerLeft$ = this.callerLeft.asObservable();
    }
    /**
     * Send a GET request to get the chat message history
     */
    getTextMessages(hrsid, targetHrsid, chatroomId) {
        let request;
        if (chatroomId) {
            // caregiver
            request = this.gatewayApi.get('chat-messages?filter[chatroomId]=' + chatroomId);
        }
        else if (hrsid) {
            // clinician app
            request = this.gatewayApi.get('apiv2/chat/patient/' + hrsid, {});
        }
        else {
            // patient app
            request = this.gatewayApi.get('apiv2/chat/clinician', {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
                res.chatdata = res.chatdata.map((message) => {
                    try {
                        message.text = atob(message.text.replace(/-/g, '+').replace(/_/g, '/').replace(/,/g, '='));
                    }
                    catch (e) {
                        // this.logger.error('Error decoding message', e);
                    }
                    return message;
                });
                return res;
            }));
        }
        return request.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            const messages = [];
            const mychats = chatroomId ? res.data : res.chatdata;
            for (const key in mychats) {
                if (mychats.hasOwnProperty(key)) {
                    mychats[key].text = this.decodeMessage(mychats[key].text);
                    messages.push(mychats[key]);
                }
            }
            return messages;
        }));
    }
    // decodes special characters
    decodeMessage(message) {
        try {
            return decodeURIComponent(escape(message));
        }
        catch (e) {
            return '[Cannot display message]';
        }
    }
    /**
     * Send a POST request to send a chat message
     */
    sendTextMessage(text, hrsid, targetHrsId, chatroomId) {
        let url;
        let message;
        if (targetHrsId || chatroomId) {
            // cgc
            url = 'chat-messages/';
            message = {
                data: {
                    chatroomId: chatroomId,
                    targetHrsid: targetHrsId,
                    message: text,
                    hrsid: hrsid
                }
            };
        }
        else if (hrsid) {
            // cc
            url = 'apiv2/chat/patient/' + hrsid;
            message = { msg: text };
        }
        else {
            // pc
            url = 'apiv2/chat/clinician';
            message = { msg: btoa(text) };
        }
        return this.gatewayApi.post(url, message);
    }
    /**
     * Send a GET request for list of chatrooms that match the participant(s)
     */
    getChatrooms(participants) {
        let url = 'chatrooms';
        participants.forEach((participant, i) => {
            url += i === 0 ? '?' : '&';
            url += 'filter[participants][]=' + participant;
        });
        return this.gatewayApi.get(url);
    }
    /**
     * Send a post request to the gateway to start a video call
     */
    getVideoCallId(callerHrsID, calleeHrsID) {
        let participantData;
        if (calleeHrsID) {
            // clinician and caregiver app
            participantData = {
                data: {
                    participants: [
                        {
                            hrsid: callerHrsID,
                            role: 'initiator',
                        },
                        {
                            hrsid: calleeHrsID,
                            role: 'participant',
                        },
                    ],
                },
            };
        }
        else {
            // patient app
            participantData = {
                data: {
                    participants: [
                        {
                            hrsid: callerHrsID,
                            role: 'initiator',
                        }
                    ],
                }
            };
        }
        return this.gatewayApi.post('video-calls', participantData);
    }
    /**
     * creates opentok video call token
     */
    getVideoCallToken(callId, calleeHrsId) {
        const callData = {
            data: {
                callId: callId,
                participant: {
                    hrsid: calleeHrsId,
                },
            },
        };
        return this.gatewayApi.post('video-call-tokens', callData);
    }
    getVideoCallStatus(callId) {
        return this.gatewayApi.get(`video-calls/${callId}`);
    }
    /**
     * updates the backend with active call participants
     * creates a log or 'call history'
     */
    updateParticipantStatus(status) {
        if (this.videoParticipantId) {
            const participantData = {
                data: {
                    status: status,
                }
            };
            const request = this.gatewayApi.patch('video-participants/' + this.videoParticipantId, participantData);
            request.subscribe((res) => {
                console.log('Video participant status successfully updated to: ' + status);
            }, (err) => {
                console.log('Video participant status failed to update', err);
            });
            if (status === 'missed' || status === 'declined' || status === 'left') {
                this.videoParticipantId = null;
            }
        }
    }
    /**
     * Send a GET request to start the voice call
     */
    initializeOutgoingVoiceCall(hrsid) {
        let url;
        if (hrsid === 'techsupport') {
            url = 'apiv2/voice/start?type=techsupport';
        }
        else if (hrsid) {
            // cc
            url = 'apiv2/voice/patient/start/' + hrsid;
        }
        else {
            // pc
            url = 'apiv2/voice/start?type=clinician';
        }
        return this.gatewayApi.get(url, {});
    }
    /**
     * Accept incoming call, get call token
     */
    acceptIncomingVoiceCall(callId) {
        return this.gatewayApi.post('apiv2/voice/patient/accept', { callid: callId });
    }
    // notifies the other participant that the user has left the call
    voiceCallLeft(callId) {
        this.gatewayApi.post('apiv2/voice/leave', { callid: callId })
            .pipe(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .subscribe(() => {
            console.log('Successfully sent call left status');
        }, () => {
            console.error('Failed to send call left status');
        });
    }
};
CommunicationService.ctorParameters = () => [
    { type: _api_gateway_api__WEBPACK_IMPORTED_MODULE_2__["GatewayApi"] }
];
CommunicationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_gateway_api__WEBPACK_IMPORTED_MODULE_2__["GatewayApi"]])
], CommunicationService);



/***/ }),

/***/ "../../libs/providers/event-manager.service.ts":
/*!*********************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/providers/event-manager.service.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: EventManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventManagerService", function() { return EventManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EventManagerService = class EventManagerService {
    constructor() {
        this.eventMap = {};
        /**
         *
         * @param name - event name that we are subscribing to
         * @param func - callback function that executes if event signal was subscribed to
         */
        this.subscribe = (name, func) => {
            if (!this.eventMap.hasOwnProperty(name)) {
                this.eventMap[name] = [];
            }
            let currentIndex = this.eventMap[name].length;
            this.eventMap[name].push(func);
            return () => {
                delete this.eventMap[name][currentIndex];
            };
        };
        /**
         *
         * @param name - event name that we are triggering/signaling
         * @param data - optional data that we can send as a parameter
         */
        this.publish = (name, data) => {
            if (this.eventMap.hasOwnProperty(name)) {
                for (let callback of this.eventMap[name]) {
                    if (callback) {
                        setTimeout(() => {
                            callback(data);
                        });
                    }
                }
            }
        };
    }
};
EventManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EventManagerService);



/***/ }),

/***/ "../../libs/providers/globalSettingsService/globalSettings.service.ts":
/*!********************************************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/providers/globalSettingsService/globalSettings.service.ts ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: GlobalSettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalSettingsService", function() { return GlobalSettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _hrs_gateway__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hrs/gateway */ "../../libs/gateway/index.ts");



/**
 * Global settings provider.
 */
let GlobalSettingsService = class GlobalSettingsService {
    constructor(gateway) {
        this.gateway = gateway;
        this.globalAttributes = {};
        this.globalSettingsLoading = new Promise((resolve) => {
            this.resolveSettingsLoading = resolve;
        });
    }
    /**
     * Send a GET request to our global settings endpoint
     */
    loadGlobalSettings() {
        let endpoint = 'v1/global-frontend-settings';
        this.gateway.get({ endpoint: endpoint }).subscribe({
            next: (res) => {
                this.extractAttributes(res);
                return this.globalAttributes;
            },
            complete: () => this.resolveSettingsLoading()
        });
    }
    /**
     * processes the raw data and extracts attributes into an object of key value pairs,
     * filtering by latest updated value for any single attribute
     */
    extractAttributes(data) {
        let latestAttribute = {};
        if (data && data.data) {
            data.data.forEach((dataElem) => {
                if (dataElem.attributes) {
                    let name = dataElem.attributes.name;
                    let value = dataElem.attributes.value;
                    let lastUpdated = new Date(dataElem.attributes.lastUpdated);
                    if (name)
                        if (!this.globalAttributes[name] || (this.globalAttributes[name] && lastUpdated.valueOf() > latestAttribute[name].valueOf())) {
                            this.globalAttributes[name] = value;
                            latestAttribute[name] = lastUpdated;
                        }
                }
            });
        }
    }
    /**
     * returns all global settings as an object of key value pairs
     *
     * @returns {[key: string]: string}
     */
    getGlobalAttributes() {
        return this.globalAttributes;
    }
};
GlobalSettingsService.ctorParameters = () => [
    { type: _hrs_gateway__WEBPACK_IMPORTED_MODULE_2__["GatewayResourceService"] }
];
GlobalSettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hrs_gateway__WEBPACK_IMPORTED_MODULE_2__["GatewayResourceService"]])
], GlobalSettingsService);



/***/ }),

/***/ "../../libs/providers/modalService/modal.service.ts":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/providers/modalService/modal.service.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

var ModalService_1;

/**
 * This service is used in order to inform components whether or not a particular modal is open.
 */
let ModalService = ModalService_1 = class ModalService {
    constructor() { }
    setModalStatus(modal, status, patientHrsid) {
        if (patientHrsid) {
            ModalService_1.modalStatus[modal] = { status: status, patientHrsid: patientHrsid };
        }
        else {
            ModalService_1.modalStatus[modal] = status;
        }
    }
    getModalStatus(modal) {
        return ModalService_1.modalStatus[modal];
    }
    isModalTypeOpen(modalType) {
        return this.getModalStatus(modalType);
    }
};
ModalService.modalStatus = {};
ModalService = ModalService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ModalService);



/***/ }),

/***/ "../../libs/providers/providers.ts":
/*!*********************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/providers/providers.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: ApiInterceptor, BroadcastService, CommunicationService, EventManagerService, GatewayApi, GlobalSettingsService, HRSLoggerMonitor, ModalService, SurveyDetailsService, TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_api_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/api-interceptor */ "../../libs/providers/api/api-interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiInterceptor", function() { return _api_api_interceptor__WEBPACK_IMPORTED_MODULE_0__["ApiInterceptor"]; });

/* harmony import */ var _broadcastService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./broadcastService */ "../../libs/providers/broadcastService.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BroadcastService", function() { return _broadcastService__WEBPACK_IMPORTED_MODULE_1__["BroadcastService"]; });

/* harmony import */ var _communication_communication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./communication/communication.service */ "../../libs/providers/communication/communication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommunicationService", function() { return _communication_communication_service__WEBPACK_IMPORTED_MODULE_2__["CommunicationService"]; });

/* harmony import */ var _event_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-manager.service */ "../../libs/providers/event-manager.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventManagerService", function() { return _event_manager_service__WEBPACK_IMPORTED_MODULE_3__["EventManagerService"]; });

/* harmony import */ var _api_gateway_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/gateway-api */ "../../libs/providers/api/gateway-api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GatewayApi", function() { return _api_gateway_api__WEBPACK_IMPORTED_MODULE_4__["GatewayApi"]; });

/* harmony import */ var _globalSettingsService_globalSettings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./globalSettingsService/globalSettings.service */ "../../libs/providers/globalSettingsService/globalSettings.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalSettingsService", function() { return _globalSettingsService_globalSettings_service__WEBPACK_IMPORTED_MODULE_5__["GlobalSettingsService"]; });

/* harmony import */ var _HRSLoggerMonitor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HRSLoggerMonitor */ "../../libs/providers/HRSLoggerMonitor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HRSLoggerMonitor", function() { return _HRSLoggerMonitor__WEBPACK_IMPORTED_MODULE_6__["HRSLoggerMonitor"]; });

/* harmony import */ var _modalService_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modalService/modal.service */ "../../libs/providers/modalService/modal.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return _modalService_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"]; });

/* harmony import */ var _survey_details_survey_details_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./survey-details/survey-details.service */ "../../libs/providers/survey-details/survey-details.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyDetailsService", function() { return _survey_details_survey_details_service__WEBPACK_IMPORTED_MODULE_8__["SurveyDetailsService"]; });

/* harmony import */ var _token_token_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./token/token.service */ "../../libs/providers/token/token.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return _token_token_service__WEBPACK_IMPORTED_MODULE_9__["TokenService"]; });














/***/ }),

/***/ "../../libs/providers/survey-details/survey-details.service.ts":
/*!*************************************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/providers/survey-details/survey-details.service.ts ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: SurveyDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyDetailsService", function() { return SurveyDetailsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_gateway_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/gateway-api */ "../../libs/providers/api/gateway-api.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm/operators/index.js");
/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/models */ "../../libs/models/models.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _survey_score_type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./survey-score-type.enum */ "../../libs/providers/survey-details/survey-score-type.enum.ts");







let SurveyDetailsService = class SurveyDetailsService {
    constructor(gatewayApi) {
        this.gatewayApi = gatewayApi;
    }
    // IONIC UPGRADE had to remove type here temporarily Observable<DailySurveyDetailsModel>
    getSurveyDetails(hrsid, date) {
        return this.gatewayApi.get(`apiv2/patients/${hrsid}/surveydetails/${date}`, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((surveyDetails) => {
            this.dailySurveyDetails = new _models_models__WEBPACK_IMPORTED_MODULE_4__["DailySurveyDetailsModel"]();
            this.dailySurveyDetails.date = moment__WEBPACK_IMPORTED_MODULE_5__(date);
            if (surveyDetails && surveyDetails.questions) {
                this.buildSurveyMap(surveyDetails.questions);
                // we know that only answered questions exist in the question map, one entry for each answered question
                this.dailySurveyDetails.answeredCount = Object.keys(this.surveyMap).length;
                this.dailySurveyDetails.grouped = this.parseGroupedSurveys(surveyDetails.groups);
                this.dailySurveyDetails.ungrouped = this.parseUngroupedSurveys();
            }
            return this.dailySurveyDetails;
        }));
    }
    // creates an object that stores the most recent answer for each question id
    buildSurveyMap(questions) {
        this.surveyMap = {};
        questions.forEach((question) => {
            if (!question.answer)
                return question;
            const answeredQuestion = new _models_models__WEBPACK_IMPORTED_MODULE_4__["SurveyEntry"](question);
            // check that we are including the most recent answered survey in the survey map
            const id = answeredQuestion.id;
            if (this.surveyMap[id]) {
                if (answeredQuestion.date.isAfter(this.surveyMap[id].date)) {
                    this.surveyMap[id] = answeredQuestion;
                }
            }
            else {
                this.surveyMap[id] = answeredQuestion;
            }
        });
    }
    parseGroupedSurveys(groups) {
        let groupModels = [];
        if (groups) {
            groups.forEach((group) => {
                let groupModel = new _models_models__WEBPACK_IMPORTED_MODULE_4__["SurveyGroupModel"]();
                groupModel.name = group.name;
                groupModel.scoreType = group.scoretype;
                groupModel.questions = [];
                group.questionids.forEach((id) => {
                    if (this.surveyMap[id]) {
                        groupModel = this.calculateGroupScore(groupModel, id);
                        groupModel.questions.push(this.surveyMap[id]);
                        // mark question as grouped so we don't include it in ungrouped questions
                        this.surveyMap[id].isGrouped = true;
                    }
                });
                groupModel.scoreMessage = this.getGroupScoreText(group, groupModel);
                if (groupModel.questions.length) {
                    groupModels.push(groupModel);
                }
            });
        }
        return groupModels;
    }
    calculateGroupScore(groupModel, id) {
        if (!groupModel.scoreTotal) {
            groupModel.scoreTotal = 0;
            groupModel.answerCount = 0;
        }
        if (this.surveyMap[id].answer.length > 0) {
            groupModel.answerCount += 1;
        }
        groupModel.scoreTotal += this.surveyMap[id].points;
        // if the question is marked as grouped it has already passed through this code
        if (!this.surveyMap[id].isGrouped) {
            // wrapping this string in an array to maintain type string[];
            this.surveyMap[id].answer = [`${this.surveyMap[id].answer} (${this.surveyMap[id].points})`];
        }
        if (groupModel.scoreType === _survey_score_type_enum__WEBPACK_IMPORTED_MODULE_6__["SurveyScoreType"].Average) {
            groupModel.averageScore = (groupModel.scoreTotal / groupModel.answerCount).toPrecision(2);
        }
        return groupModel;
    }
    parseUngroupedSurveys() {
        let ungroupedQuestions = [];
        Object.keys(this.surveyMap).forEach((id) => {
            if (!this.surveyMap[id].isGrouped) {
                ungroupedQuestions.push(this.surveyMap[id]);
            }
        });
        return ungroupedQuestions;
    }
    getGroupScoreText(group, groupModel) {
        let scoreMessage;
        if (groupModel.questions.length) {
            if (groupModel.scoreTotal) {
                let scoreDisplay = group.scoredisplay;
                let score = groupModel.averageScore || groupModel.scoreTotal;
                if (scoreDisplay.length > 0) {
                    for (let i = 0; i < scoreDisplay.length; i++) {
                        if (score >= parseInt(scoreDisplay[i].min) && score <= parseInt(scoreDisplay[i].max)) {
                            scoreMessage = scoreDisplay[i].text ? `(${scoreDisplay[i].text})` : undefined;
                        }
                    }
                }
            }
        }
        return scoreMessage;
    }
};
SurveyDetailsService.ctorParameters = () => [
    { type: _api_gateway_api__WEBPACK_IMPORTED_MODULE_2__["GatewayApi"] }
];
SurveyDetailsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_gateway_api__WEBPACK_IMPORTED_MODULE_2__["GatewayApi"]])
], SurveyDetailsService);



/***/ }),

/***/ "../../libs/providers/survey-details/survey-score-type.enum.ts":
/*!*************************************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/providers/survey-details/survey-score-type.enum.ts ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: SurveyScoreType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyScoreType", function() { return SurveyScoreType; });
var SurveyScoreType;
(function (SurveyScoreType) {
    SurveyScoreType["Average"] = "average";
    SurveyScoreType["Total"] = "total";
})(SurveyScoreType || (SurveyScoreType = {}));


/***/ }),

/***/ "../../libs/providers/token/token.service.ts":
/*!*******************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/providers/token/token.service.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "../../libs/environments/environment");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm/operators/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jwt-decode */ "../../node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var backoff_rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! backoff-rxjs */ "../../node_modules/backoff-rxjs/esm2015/index.js");








let TokenService = class TokenService {
    constructor(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_GATEWAY_URL;
        this.token = null;
        this.refresh = null;
        this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.isRetryingToken = false;
        this.sessionId = 0;
    }
    refreshToken() {
        this.isRetryingToken = true;
        const credentials = {
            data: {
                type: 'refresh',
                code: this.refresh,
                source: this.sourceApp
            }
        };
        return this.http
            .post(`${this.url}/v1/tokens`, credentials)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((tokens) => {
            this.storeTokens(tokens.data);
            this.isRetryingToken = false;
            this.refreshTokenSubject.next(tokens.data);
        }), 
        // Upon failing this retries 3 times with a a backoff delay in between 5 seconds, 10 seconds, 20 seconds roughly
        // Not exceeding 45 seconds in between b/c we have a 45 second window on calling the refresh token on api interceptor
        Object(backoff_rxjs__WEBPACK_IMPORTED_MODULE_7__["retryBackoff"])({
            initialInterval: 5000,
            maxRetries: 3,
            maxInterval: 20000,
        }), 
        // If the final retry fails, this catches the error and returns it
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error) => {
            this.isRetryingToken = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(error);
        }));
    }
    storeTokens(tokenData) {
        let tokens = tokenData.attributes;
        this.token = tokens.token;
        this.refresh = tokens.refresh;
        this.decodeTokenData(tokens.token);
    }
    removeTokens() {
        this.token = null;
        this.refresh = null;
        this.authTokenData = null;
    }
    decodeTokenData(token) {
        let tokenData = jwt_decode__WEBPACK_IMPORTED_MODULE_6__(token);
        this.authTokenData = tokenData;
        return tokenData;
    }
    getExp() {
        return this.authTokenData ? this.authTokenData.exp : null;
    }
};
TokenService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
TokenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], TokenService);



/***/ }),

/***/ "../../libs/utility/BuildUtility.ts":
/*!**********************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/utility/BuildUtility.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: BuildUtility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildUtility", function() { return BuildUtility; });
/* harmony import */ var _app_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/env */ "../../libs/environments/environment");


class BuildUtility {
    /**
     * Check for HRSTAB flag.
     * @return boolean
     */
    static isHRSTab() {
        return _app_env__WEBPACK_IMPORTED_MODULE_0__["environment"].HRSTAB === 'true';
    }
    /**
     * Get Current Build Environment.
     * @return string
     */
    static getEnvironment() {
        return _app_env__WEBPACK_IMPORTED_MODULE_0__["environment"].current_environment;
    }
    /**
     * Get Name of Current Domain that the Device is Pointed to.
     * @return string
     */
    static getDomainName() {
        const domainInfo = BuildUtility.domains.filter((domain) => domain.API_GATEWAY_URL === _app_env__WEBPACK_IMPORTED_MODULE_0__["environment"].API_GATEWAY_URL)[0];
        return domainInfo ? domainInfo.domain : 'hrsdomain';
    }
    /**
     * Get Current API_GATEWAY_URL.
     * @return string
     */
    static getGatewayURL() {
        return _app_env__WEBPACK_IMPORTED_MODULE_0__["environment"].API_GATEWAY_URL;
    }
    /**
     * Get Current HRS_DOMAIN.
     * @return string
     */
    static getHRSDomain() {
        return _app_env__WEBPACK_IMPORTED_MODULE_0__["environment"].HRS_DOMAIN;
    }
    /**
     * Set Current Build Gateway URL to User's Selection in Admin Domain Settings.
     * @return Promise<string>
     */
    static setDomain(domain) {
        const isHRSDomain = domain.includes('.com');
        const newDomain = isHRSDomain ? {
            HRS_DOMAIN: domain,
            API_GATEWAY_URL: `https://gateway.${domain}`
        } : BuildUtility.domains.filter((option) => option.domain === domain)[0];
        if (!newDomain) {
            return Promise.reject(new Error('Chosen domain is not accepted.'));
        }
        for (const property in newDomain) {
            if (newDomain[property]) {
                _app_env__WEBPACK_IMPORTED_MODULE_0__["environment"][property] = newDomain[property];
                _app_env__WEBPACK_IMPORTED_MODULE_0__["environment"][property] = newDomain[property];
            }
        }
        return Promise.resolve(_app_env__WEBPACK_IMPORTED_MODULE_0__["environment"].API_GATEWAY_URL);
    }
}
BuildUtility.MIN_TABLET_SCREEN_SIZE = 600;
// static isModeSet: boolean = false;
// static isDesignModeSet: boolean = false;
BuildUtility.domains = [
    {
        domain: 'prod',
        HRS_DOMAIN: 'healthrecoverysolutions.com',
        API_GATEWAY_URL: 'https://gateway.healthrecoverysolutions.com'
    },
    {
        domain: 'elaine',
        HRS_DOMAIN: 'elaine.hrsqa.com',
        API_GATEWAY_URL: 'https://gateway.elaine.hrsqa.com'
    },
    {
        domain: 'george',
        HRS_DOMAIN: 'george.hrsqa.com',
        API_GATEWAY_URL: 'https://gateway.george.hrsqa.com'
    },
    {
        domain: 'jerry',
        HRS_DOMAIN: 'jerry.hrsqa.com',
        API_GATEWAY_URL: 'https://gateway.jerry.hrsqa.com'
    }
];


/***/ }),

/***/ "../../libs/utility/CollectionUtility.ts":
/*!***************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/utility/CollectionUtility.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: CollectionUtility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionUtility", function() { return CollectionUtility; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "../../libs/utility/index.ts");

class CollectionUtility {
    /**
     * For converting values to arrays.
     * Can handle JSON, Sets, Objects, Arrays, strings, integers, undefined, null
     * @param collection
     * @private
     */
    static convertToArray(collection) {
        try {
            collection = JSON.parse(collection);
        }
        catch (e) { }
        if (!collection)
            collection = [];
        if (collection instanceof Set)
            collection = Array.from(collection);
        if (typeof collection === 'string')
            collection = collection.split(', ');
        if (Number.isInteger(collection) || _index__WEBPACK_IMPORTED_MODULE_0__["ObjectUtility"].isObject(collection))
            collection = [collection];
        return collection;
    }
}


/***/ }),

/***/ "../../libs/utility/ConvertGlucose.ts":
/*!************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/utility/ConvertGlucose.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: ConvertGlucose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertGlucose", function() { return ConvertGlucose; });
/**
 * mgdl: milligrams per deciliter
 * gl: grams per liter
 */
class ConvertGlucose {
    /**
     * @param number mgdl
     * @return number
     *
     * Formula:  1 g/L = 100 mg/dL
     *
     */
    static mgdlToGl(mgdl) {
        return mgdl / 100;
    }
    /**
     * @param number gl
     * @return number
     *
     * Formula:  1 mg/dL = 0.01 g/L
     */
    static glToMgdl(gl) {
        return gl * 100;
    }
}


/***/ }),

/***/ "../../libs/utility/ConvertHeartRate.ts":
/*!**************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/utility/ConvertHeartRate.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: ConvertHeartRate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertHeartRate", function() { return ConvertHeartRate; });
/**
 * hz: hertz
 * cpm: cycles per minute
 */
class ConvertHeartRate {
    /**
     * @param number cpm
     * @return number
     *
     * Formula: 1 cpm = 1/60 hz
     */
    static cpmToHz(cpm) {
        return cpm / 60;
    }
    /**
     * @param number hz
     * @return number
     *
     * Formula: 1hz = 60 cpm
     */
    static hzToCpm(hz) {
        return hz * 60;
    }
}


/***/ }),

/***/ "../../libs/utility/ConvertRatio.ts":
/*!**********************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/utility/ConvertRatio.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: ConvertRatio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertRatio", function() { return ConvertRatio; });
class ConvertRatio {
    /**
     * @param number $leftValue
     * @param number $rightValue
     * @return number
     *
     *  Formula:  % = n / d * 100
     */
    static ratioToPercentage(leftValue, rightValue) {
        return (leftValue / rightValue) * 100;
    }
    /**
     * @param string ratio
     * @return number
     */
    static ratioStringToPercentage(ratio) {
        const ratioArray = ratio.split(':');
        if (ratioArray.length !== 2) {
            throw new Error('Invalid ratio: ' + ratio);
        }
        const ratioLeft = Number(ratioArray[0]);
        const ratioRight = Number(ratioArray[1]);
        if (Number.isNaN(ratioLeft) || Number.isNaN(ratioRight)) {
            throw new Error('One side of this ratio is not a number: ' + ratio);
        }
        return this.ratioToPercentage(ratioLeft, ratioRight);
    }
    /**
     * @param number percentage
     * @return number
     */
    static percentageToRatio(percentage) {
        const base = 100;
        const ratio = percentage / base;
        return ratio;
    }
}


/***/ }),

/***/ "../../libs/utility/ConvertString.ts":
/*!***********************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/utility/ConvertString.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: ConvertString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertString", function() { return ConvertString; });
class ConvertString {
    /**
     * curly - 'smart' - qoutes and apostrophes cause errors when inserting into database
     * database needs those chars to be straight - 'dumb' - chars
     * @param originalString
     * return string with 'smart' chars replaced with 'dumb' chars
     */
    static replaceCurlyChars(originalString) {
        const cleanedString = originalString.replace(/((\u2019)|(\u2018)|(\u201c)|(\u201d))/g, '\u0027');
        return cleanedString;
    }
    /**
     * non utf8 chars cause errors when inserting into database - this may strip out accented chars from different languages
     * @param originalString
     * return string free of non utf8 chars
     */
    static removeNonUtf8Chars(originalString) {
        const cleanedString = originalString.replace(/[^\x20-\x7E]+/g, '');
        return cleanedString;
    }
}


/***/ }),

/***/ "../../libs/utility/ConvertTemperature.ts":
/*!****************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/utility/ConvertTemperature.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: ConvertTemperature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertTemperature", function() { return ConvertTemperature; });
class ConvertTemperature {
    /**
     * @param number celsius
     * @return number
     *
     * Formula: F = C * (9.0/5.0) + 32
     */
    static celsiusToFarenheit(celsius) {
        return celsius * (9.0 / 5.0) + 32;
    }
    /**
     * @param number fahrenheit
     * @return number
     *
     * Formula: K = (F + 459.67) x 5/9
     */
    static fahrenheitToKelvin(fahrenheit) {
        return (fahrenheit + 459.67) * (5 / 9);
    }
    /**
     * @param number kelvin
     * @return number
     *
     * Formula: C = K - 273.15
     */
    static kelvinToCelsius(kelvin) {
        return kelvin - 273.15;
    }
    /**
     * @param number kelvin
     * @return number
     *
     * Formula: F = K * 9/5 - 459.67
     */
    static kelvinToFahrenheit(kelvin) {
        return (kelvin * (9 / 5)) - 459.67;
    }
    /**
     * @param number celsius
     * @return number
     *
     * Formula: K = C + 273.15
     */
    static celsiusToKelvin(celsius) {
        return celsius + 273.15;
    }
}


/***/ }),

/***/ "../../libs/utility/ConvertTime.ts":
/*!*********************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/utility/ConvertTime.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: ConvertTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertTime", function() { return ConvertTime; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

class ConvertTime {
    /**
     * @param number minutes
     * @return number
     *
     * Formula:  s = m * 60
     */
    static minutesToSeconds(minutes) {
        return minutes * 60;
    }
    /**
     * @param number hours
     * @return number
     *
     * Formula:  s = h * 3600
     */
    static hoursToSeconds(hours) {
        return hours * 3600;
    }
    /**
     * @param number seconds
     * @return number
     *
     * Formula:  m = s / 60
     */
    static secondsToMinutes(seconds) {
        return seconds / 60;
    }
    /**
     * @param number seconds
     * @return number
     *
     * Formula:  h = s / 3600
     */
    static secondsToHours(seconds) {
        return seconds / 3600;
    }
    static isoToTimestamp(time) {
        return new Date(time).getTime();
    }
    /**
     * Convert Provided Timestamp to Local Timezone.
     * @param string timestamp: the original timestamp.
     * @param string format: the original format of the timestamp.
     * @return string: a timestamp in the original format in the user's device timezone.
     */
    static convertToLocalTZ(timestamp, format) {
        const userTZ = moment__WEBPACK_IMPORTED_MODULE_0__["tz"].guess();
        const estTime = moment__WEBPACK_IMPORTED_MODULE_0__["tz"](timestamp, format, 'America/New_York');
        const convertedTime = estTime.tz(userTZ).format(format);
        return convertedTime;
    }
}


/***/ }),

/***/ "../../libs/utility/ConvertWeight.ts":
/*!***********************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/utility/ConvertWeight.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: ConvertWeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertWeight", function() { return ConvertWeight; });
class ConvertWeight {
    /**
     * @param number pounds
     * @return number
     *
     * Formula:  g = lbs * 453.59237
     */
    static poundsToGrams(pounds) {
        return pounds * 453.59237;
    }
    /**
     * @param number kilograms
     * @return number
     *
     * Formula:  g = kg * 1000
     */
    static kilogramsToGrams(kilograms) {
        return kilograms * 1000;
    }
    /**
     * @param number grams
     * @return number
     *
     * Formula:  lbs = g / 453.59237
     */
    static gramsToPounds(grams) {
        return grams / 453.59237;
    }
    /**
     * @param number grams
     * @return number
     *
     * Formula:  kg = g / 1000
     */
    static gramsToKilograms(grams) {
        return grams / 1000;
    }
}


/***/ }),

/***/ "../../libs/utility/LocalUpdateInterval.ts":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/utility/LocalUpdateInterval.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: LocalUpdateInterval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalUpdateInterval", function() { return LocalUpdateInterval; });
/* harmony import */ var _app_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/env */ "../../libs/environments/environment");

class LocalUpdateInterval {
    /**
     * Get HRS TAB Local Update Interval Length
     * @return number
     *
     */
    static get() {
        return _app_env__WEBPACK_IMPORTED_MODULE_0__["environment"].UPDATEINTERVAL;
    }
}


/***/ }),

/***/ "../../libs/utility/ObjectUtility.ts":
/*!***********************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/utility/ObjectUtility.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: ObjectUtility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectUtility", function() { return ObjectUtility; });
class ObjectUtility {
    /*
        objectsAreTheSame allows for deep object comparisons, with optional strictness level, and key ignoring
        default strictness allows for loose equality comparisons allowing for 1 to equal '1'
        if ignoreKeys has values, those keys will be filtered out, allowing for core comparisons of values the dev knows to be important
     */
    static objectsAreTheSame(objA, objB, isStrict = false, ignoreKeys = []) {
        let areTheSame = true;
        const strictLevel = isStrict ? 'isStrict' : 'isNotStrict';
        const valuesDoNotMatch = {
            'isStrict': (a, b) => a !== b,
            'isNotStrict': (a, b) => a != b
        };
        const isObject = (a, b) => typeof a === 'object' && !Array.isArray(a) && (!!a && !!b);
        const compareArrays = (a, b) => {
            if (a.length === b.length) {
                a.sort();
                b.sort();
                a.forEach((ele, idx) => compareValues(ele, b[idx]));
            }
            else {
                areTheSame = false;
            }
        };
        const compareValues = (a, b) => {
            if (Array.isArray(a)) {
                compareArrays(a, b);
            }
            else if (!isObject(a, b) && valuesDoNotMatch[strictLevel](a, b)) {
                areTheSame = false;
            }
            else if (isObject(a, b) && !this.objectsAreTheSame(a, b, isStrict, ignoreKeys)) {
                areTheSame = false;
            }
        };
        const keysA = Object.keys(objA).filter((key) => !ignoreKeys.includes(key));
        const keysB = Object.keys(objB).filter((key) => !ignoreKeys.includes(key));
        if (keysA.length !== keysB.length)
            return false;
        for (let key of keysA)
            compareValues(objA[key], objB[key]);
        return areTheSame;
    }
    /**
     * Method for checking if something is an object since JavaScript does not have a native method
     * @param param
     */
    static isObject(param) {
        return param !== null && !Array.isArray(param) && !(param instanceof Set) && typeof param === 'object';
    }
}


/***/ }),

/***/ "../../libs/utility/index.ts":
/*!***************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/libs/utility/index.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: BuildUtility, ConvertGlucose, ConvertHeartRate, ConvertRatio, ConvertString, ConvertTemperature, ConvertTime, ConvertWeight, CollectionUtility, ObjectUtility, LocalUpdateInterval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BuildUtility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuildUtility */ "../../libs/utility/BuildUtility.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BuildUtility", function() { return _BuildUtility__WEBPACK_IMPORTED_MODULE_0__["BuildUtility"]; });

/* harmony import */ var _ConvertGlucose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConvertGlucose */ "../../libs/utility/ConvertGlucose.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConvertGlucose", function() { return _ConvertGlucose__WEBPACK_IMPORTED_MODULE_1__["ConvertGlucose"]; });

/* harmony import */ var _ConvertHeartRate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConvertHeartRate */ "../../libs/utility/ConvertHeartRate.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConvertHeartRate", function() { return _ConvertHeartRate__WEBPACK_IMPORTED_MODULE_2__["ConvertHeartRate"]; });

/* harmony import */ var _ConvertRatio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ConvertRatio */ "../../libs/utility/ConvertRatio.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConvertRatio", function() { return _ConvertRatio__WEBPACK_IMPORTED_MODULE_3__["ConvertRatio"]; });

/* harmony import */ var _ConvertString__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ConvertString */ "../../libs/utility/ConvertString.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConvertString", function() { return _ConvertString__WEBPACK_IMPORTED_MODULE_4__["ConvertString"]; });

/* harmony import */ var _ConvertTemperature__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ConvertTemperature */ "../../libs/utility/ConvertTemperature.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConvertTemperature", function() { return _ConvertTemperature__WEBPACK_IMPORTED_MODULE_5__["ConvertTemperature"]; });

/* harmony import */ var _ConvertTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ConvertTime */ "../../libs/utility/ConvertTime.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConvertTime", function() { return _ConvertTime__WEBPACK_IMPORTED_MODULE_6__["ConvertTime"]; });

/* harmony import */ var _ConvertWeight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ConvertWeight */ "../../libs/utility/ConvertWeight.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConvertWeight", function() { return _ConvertWeight__WEBPACK_IMPORTED_MODULE_7__["ConvertWeight"]; });

/* harmony import */ var _CollectionUtility__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CollectionUtility */ "../../libs/utility/CollectionUtility.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollectionUtility", function() { return _CollectionUtility__WEBPACK_IMPORTED_MODULE_8__["CollectionUtility"]; });

/* harmony import */ var _ObjectUtility__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ObjectUtility */ "../../libs/utility/ObjectUtility.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectUtility", function() { return _ObjectUtility__WEBPACK_IMPORTED_MODULE_9__["ObjectUtility"]; });

/* harmony import */ var _LocalUpdateInterval__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LocalUpdateInterval */ "../../libs/utility/LocalUpdateInterval.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalUpdateInterval", function() { return _LocalUpdateInterval__WEBPACK_IMPORTED_MODULE_10__["LocalUpdateInterval"]; });















/***/ }),

/***/ "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./hrs-alert.entry.js": [
		"../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-alert.entry.js",
		"common",
		43
	],
	"./hrs-backdrop_3.entry.js": [
		"../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-backdrop_3.entry.js",
		44
	],
	"./hrs-battery_2.entry.js": [
		"../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-battery_2.entry.js",
		45
	],
	"./hrs-button_2.entry.js": [
		"../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-button_2.entry.js",
		"common",
		46
	],
	"./hrs-buttons.entry.js": [
		"../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-buttons.entry.js",
		47
	],
	"./hrs-chat.entry.js": [
		"../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-chat.entry.js",
		48
	],
	"./hrs-checkbox_3.entry.js": [
		"../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-checkbox_3.entry.js",
		49
	],
	"./hrs-chip.entry.js": [
		"../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-chip.entry.js",
		50
	],
	"./hrs-content.entry.js": [
		"../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-content.entry.js",
		"common",
		51
	],
	"./hrs-fab.entry.js": [
		"../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-fab.entry.js",
		52
	],
	"./hrs-footer.entry.js": [
		"../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-footer.entry.js",
		53
	],
	"./hrs-form-item.entry.js": [
		"../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-form-item.entry.js",
		54
	],
	"./hrs-icon.entry.js": [
		"../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-icon.entry.js",
		"common",
		55
	],
	"./hrs-input.entry.js": [
		"../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-input.entry.js",
		"common",
		56
	],
	"./hrs-label.entry.js": [
		"../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-label.entry.js",
		57
	],
	"./hrs-list-item_4.entry.js": [
		"../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-list-item_4.entry.js",
		58
	],
	"./hrs-menu-button.entry.js": [
		"../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-menu-button.entry.js",
		59
	],
	"./hrs-menu-item_2.entry.js": [
		"../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-menu-item_2.entry.js",
		60
	],
	"./hrs-menu.entry.js": [
		"../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-menu.entry.js",
		61
	],
	"./hrs-modal.entry.js": [
		"../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-modal.entry.js",
		62
	],
	"./hrs-status-bar.entry.js": [
		"../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-status-bar.entry.js",
		63
	],
	"./hrs-text.entry.js": [
		"../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-text.entry.js",
		"common",
		64
	],
	"./hrs-textarea.entry.js": [
		"../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-textarea.entry.js",
		"common",
		65
	],
	"./hrs-toast.entry.js": [
		"../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-toast.entry.js",
		66
	],
	"./hrs-wizard.entry.js": [
		"../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm/hrs-wizard.entry.js",
		67
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../node_modules/@hrsui/angular/node_modules/@hrsui/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**********************************************************************************************************************************************!*\
  !*** /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/node_modules/moment/locale sync ^\.\/.*$ ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../node_modules/moment/locale/af.js",
	"./af.js": "../../node_modules/moment/locale/af.js",
	"./ar": "../../node_modules/moment/locale/ar.js",
	"./ar-dz": "../../node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "../../node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "../../node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "../../node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "../../node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "../../node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "../../node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "../../node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "../../node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "../../node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "../../node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "../../node_modules/moment/locale/ar-tn.js",
	"./ar.js": "../../node_modules/moment/locale/ar.js",
	"./az": "../../node_modules/moment/locale/az.js",
	"./az.js": "../../node_modules/moment/locale/az.js",
	"./be": "../../node_modules/moment/locale/be.js",
	"./be.js": "../../node_modules/moment/locale/be.js",
	"./bg": "../../node_modules/moment/locale/bg.js",
	"./bg.js": "../../node_modules/moment/locale/bg.js",
	"./bm": "../../node_modules/moment/locale/bm.js",
	"./bm.js": "../../node_modules/moment/locale/bm.js",
	"./bn": "../../node_modules/moment/locale/bn.js",
	"./bn-bd": "../../node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "../../node_modules/moment/locale/bn-bd.js",
	"./bn.js": "../../node_modules/moment/locale/bn.js",
	"./bo": "../../node_modules/moment/locale/bo.js",
	"./bo.js": "../../node_modules/moment/locale/bo.js",
	"./br": "../../node_modules/moment/locale/br.js",
	"./br.js": "../../node_modules/moment/locale/br.js",
	"./bs": "../../node_modules/moment/locale/bs.js",
	"./bs.js": "../../node_modules/moment/locale/bs.js",
	"./ca": "../../node_modules/moment/locale/ca.js",
	"./ca.js": "../../node_modules/moment/locale/ca.js",
	"./cs": "../../node_modules/moment/locale/cs.js",
	"./cs.js": "../../node_modules/moment/locale/cs.js",
	"./cv": "../../node_modules/moment/locale/cv.js",
	"./cv.js": "../../node_modules/moment/locale/cv.js",
	"./cy": "../../node_modules/moment/locale/cy.js",
	"./cy.js": "../../node_modules/moment/locale/cy.js",
	"./da": "../../node_modules/moment/locale/da.js",
	"./da.js": "../../node_modules/moment/locale/da.js",
	"./de": "../../node_modules/moment/locale/de.js",
	"./de-at": "../../node_modules/moment/locale/de-at.js",
	"./de-at.js": "../../node_modules/moment/locale/de-at.js",
	"./de-ch": "../../node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "../../node_modules/moment/locale/de-ch.js",
	"./de.js": "../../node_modules/moment/locale/de.js",
	"./dv": "../../node_modules/moment/locale/dv.js",
	"./dv.js": "../../node_modules/moment/locale/dv.js",
	"./el": "../../node_modules/moment/locale/el.js",
	"./el.js": "../../node_modules/moment/locale/el.js",
	"./en-au": "../../node_modules/moment/locale/en-au.js",
	"./en-au.js": "../../node_modules/moment/locale/en-au.js",
	"./en-ca": "../../node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "../../node_modules/moment/locale/en-ca.js",
	"./en-gb": "../../node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "../../node_modules/moment/locale/en-gb.js",
	"./en-ie": "../../node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "../../node_modules/moment/locale/en-ie.js",
	"./en-il": "../../node_modules/moment/locale/en-il.js",
	"./en-il.js": "../../node_modules/moment/locale/en-il.js",
	"./en-in": "../../node_modules/moment/locale/en-in.js",
	"./en-in.js": "../../node_modules/moment/locale/en-in.js",
	"./en-nz": "../../node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "../../node_modules/moment/locale/en-nz.js",
	"./en-sg": "../../node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "../../node_modules/moment/locale/en-sg.js",
	"./eo": "../../node_modules/moment/locale/eo.js",
	"./eo.js": "../../node_modules/moment/locale/eo.js",
	"./es": "../../node_modules/moment/locale/es.js",
	"./es-do": "../../node_modules/moment/locale/es-do.js",
	"./es-do.js": "../../node_modules/moment/locale/es-do.js",
	"./es-mx": "../../node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "../../node_modules/moment/locale/es-mx.js",
	"./es-us": "../../node_modules/moment/locale/es-us.js",
	"./es-us.js": "../../node_modules/moment/locale/es-us.js",
	"./es.js": "../../node_modules/moment/locale/es.js",
	"./et": "../../node_modules/moment/locale/et.js",
	"./et.js": "../../node_modules/moment/locale/et.js",
	"./eu": "../../node_modules/moment/locale/eu.js",
	"./eu.js": "../../node_modules/moment/locale/eu.js",
	"./fa": "../../node_modules/moment/locale/fa.js",
	"./fa.js": "../../node_modules/moment/locale/fa.js",
	"./fi": "../../node_modules/moment/locale/fi.js",
	"./fi.js": "../../node_modules/moment/locale/fi.js",
	"./fil": "../../node_modules/moment/locale/fil.js",
	"./fil.js": "../../node_modules/moment/locale/fil.js",
	"./fo": "../../node_modules/moment/locale/fo.js",
	"./fo.js": "../../node_modules/moment/locale/fo.js",
	"./fr": "../../node_modules/moment/locale/fr.js",
	"./fr-ca": "../../node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "../../node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "../../node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "../../node_modules/moment/locale/fr-ch.js",
	"./fr.js": "../../node_modules/moment/locale/fr.js",
	"./fy": "../../node_modules/moment/locale/fy.js",
	"./fy.js": "../../node_modules/moment/locale/fy.js",
	"./ga": "../../node_modules/moment/locale/ga.js",
	"./ga.js": "../../node_modules/moment/locale/ga.js",
	"./gd": "../../node_modules/moment/locale/gd.js",
	"./gd.js": "../../node_modules/moment/locale/gd.js",
	"./gl": "../../node_modules/moment/locale/gl.js",
	"./gl.js": "../../node_modules/moment/locale/gl.js",
	"./gom-deva": "../../node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "../../node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "../../node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "../../node_modules/moment/locale/gom-latn.js",
	"./gu": "../../node_modules/moment/locale/gu.js",
	"./gu.js": "../../node_modules/moment/locale/gu.js",
	"./he": "../../node_modules/moment/locale/he.js",
	"./he.js": "../../node_modules/moment/locale/he.js",
	"./hi": "../../node_modules/moment/locale/hi.js",
	"./hi.js": "../../node_modules/moment/locale/hi.js",
	"./hr": "../../node_modules/moment/locale/hr.js",
	"./hr.js": "../../node_modules/moment/locale/hr.js",
	"./hu": "../../node_modules/moment/locale/hu.js",
	"./hu.js": "../../node_modules/moment/locale/hu.js",
	"./hy-am": "../../node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "../../node_modules/moment/locale/hy-am.js",
	"./id": "../../node_modules/moment/locale/id.js",
	"./id.js": "../../node_modules/moment/locale/id.js",
	"./is": "../../node_modules/moment/locale/is.js",
	"./is.js": "../../node_modules/moment/locale/is.js",
	"./it": "../../node_modules/moment/locale/it.js",
	"./it-ch": "../../node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "../../node_modules/moment/locale/it-ch.js",
	"./it.js": "../../node_modules/moment/locale/it.js",
	"./ja": "../../node_modules/moment/locale/ja.js",
	"./ja.js": "../../node_modules/moment/locale/ja.js",
	"./jv": "../../node_modules/moment/locale/jv.js",
	"./jv.js": "../../node_modules/moment/locale/jv.js",
	"./ka": "../../node_modules/moment/locale/ka.js",
	"./ka.js": "../../node_modules/moment/locale/ka.js",
	"./kk": "../../node_modules/moment/locale/kk.js",
	"./kk.js": "../../node_modules/moment/locale/kk.js",
	"./km": "../../node_modules/moment/locale/km.js",
	"./km.js": "../../node_modules/moment/locale/km.js",
	"./kn": "../../node_modules/moment/locale/kn.js",
	"./kn.js": "../../node_modules/moment/locale/kn.js",
	"./ko": "../../node_modules/moment/locale/ko.js",
	"./ko.js": "../../node_modules/moment/locale/ko.js",
	"./ku": "../../node_modules/moment/locale/ku.js",
	"./ku.js": "../../node_modules/moment/locale/ku.js",
	"./ky": "../../node_modules/moment/locale/ky.js",
	"./ky.js": "../../node_modules/moment/locale/ky.js",
	"./lb": "../../node_modules/moment/locale/lb.js",
	"./lb.js": "../../node_modules/moment/locale/lb.js",
	"./lo": "../../node_modules/moment/locale/lo.js",
	"./lo.js": "../../node_modules/moment/locale/lo.js",
	"./lt": "../../node_modules/moment/locale/lt.js",
	"./lt.js": "../../node_modules/moment/locale/lt.js",
	"./lv": "../../node_modules/moment/locale/lv.js",
	"./lv.js": "../../node_modules/moment/locale/lv.js",
	"./me": "../../node_modules/moment/locale/me.js",
	"./me.js": "../../node_modules/moment/locale/me.js",
	"./mi": "../../node_modules/moment/locale/mi.js",
	"./mi.js": "../../node_modules/moment/locale/mi.js",
	"./mk": "../../node_modules/moment/locale/mk.js",
	"./mk.js": "../../node_modules/moment/locale/mk.js",
	"./ml": "../../node_modules/moment/locale/ml.js",
	"./ml.js": "../../node_modules/moment/locale/ml.js",
	"./mn": "../../node_modules/moment/locale/mn.js",
	"./mn.js": "../../node_modules/moment/locale/mn.js",
	"./mr": "../../node_modules/moment/locale/mr.js",
	"./mr.js": "../../node_modules/moment/locale/mr.js",
	"./ms": "../../node_modules/moment/locale/ms.js",
	"./ms-my": "../../node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "../../node_modules/moment/locale/ms-my.js",
	"./ms.js": "../../node_modules/moment/locale/ms.js",
	"./mt": "../../node_modules/moment/locale/mt.js",
	"./mt.js": "../../node_modules/moment/locale/mt.js",
	"./my": "../../node_modules/moment/locale/my.js",
	"./my.js": "../../node_modules/moment/locale/my.js",
	"./nb": "../../node_modules/moment/locale/nb.js",
	"./nb.js": "../../node_modules/moment/locale/nb.js",
	"./ne": "../../node_modules/moment/locale/ne.js",
	"./ne.js": "../../node_modules/moment/locale/ne.js",
	"./nl": "../../node_modules/moment/locale/nl.js",
	"./nl-be": "../../node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "../../node_modules/moment/locale/nl-be.js",
	"./nl.js": "../../node_modules/moment/locale/nl.js",
	"./nn": "../../node_modules/moment/locale/nn.js",
	"./nn.js": "../../node_modules/moment/locale/nn.js",
	"./oc-lnc": "../../node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "../../node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "../../node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "../../node_modules/moment/locale/pa-in.js",
	"./pl": "../../node_modules/moment/locale/pl.js",
	"./pl.js": "../../node_modules/moment/locale/pl.js",
	"./pt": "../../node_modules/moment/locale/pt.js",
	"./pt-br": "../../node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "../../node_modules/moment/locale/pt-br.js",
	"./pt.js": "../../node_modules/moment/locale/pt.js",
	"./ro": "../../node_modules/moment/locale/ro.js",
	"./ro.js": "../../node_modules/moment/locale/ro.js",
	"./ru": "../../node_modules/moment/locale/ru.js",
	"./ru.js": "../../node_modules/moment/locale/ru.js",
	"./sd": "../../node_modules/moment/locale/sd.js",
	"./sd.js": "../../node_modules/moment/locale/sd.js",
	"./se": "../../node_modules/moment/locale/se.js",
	"./se.js": "../../node_modules/moment/locale/se.js",
	"./si": "../../node_modules/moment/locale/si.js",
	"./si.js": "../../node_modules/moment/locale/si.js",
	"./sk": "../../node_modules/moment/locale/sk.js",
	"./sk.js": "../../node_modules/moment/locale/sk.js",
	"./sl": "../../node_modules/moment/locale/sl.js",
	"./sl.js": "../../node_modules/moment/locale/sl.js",
	"./sq": "../../node_modules/moment/locale/sq.js",
	"./sq.js": "../../node_modules/moment/locale/sq.js",
	"./sr": "../../node_modules/moment/locale/sr.js",
	"./sr-cyrl": "../../node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "../../node_modules/moment/locale/sr.js",
	"./ss": "../../node_modules/moment/locale/ss.js",
	"./ss.js": "../../node_modules/moment/locale/ss.js",
	"./sv": "../../node_modules/moment/locale/sv.js",
	"./sv.js": "../../node_modules/moment/locale/sv.js",
	"./sw": "../../node_modules/moment/locale/sw.js",
	"./sw.js": "../../node_modules/moment/locale/sw.js",
	"./ta": "../../node_modules/moment/locale/ta.js",
	"./ta.js": "../../node_modules/moment/locale/ta.js",
	"./te": "../../node_modules/moment/locale/te.js",
	"./te.js": "../../node_modules/moment/locale/te.js",
	"./tet": "../../node_modules/moment/locale/tet.js",
	"./tet.js": "../../node_modules/moment/locale/tet.js",
	"./tg": "../../node_modules/moment/locale/tg.js",
	"./tg.js": "../../node_modules/moment/locale/tg.js",
	"./th": "../../node_modules/moment/locale/th.js",
	"./th.js": "../../node_modules/moment/locale/th.js",
	"./tk": "../../node_modules/moment/locale/tk.js",
	"./tk.js": "../../node_modules/moment/locale/tk.js",
	"./tl-ph": "../../node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "../../node_modules/moment/locale/tl-ph.js",
	"./tlh": "../../node_modules/moment/locale/tlh.js",
	"./tlh.js": "../../node_modules/moment/locale/tlh.js",
	"./tr": "../../node_modules/moment/locale/tr.js",
	"./tr.js": "../../node_modules/moment/locale/tr.js",
	"./tzl": "../../node_modules/moment/locale/tzl.js",
	"./tzl.js": "../../node_modules/moment/locale/tzl.js",
	"./tzm": "../../node_modules/moment/locale/tzm.js",
	"./tzm-latn": "../../node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "../../node_modules/moment/locale/tzm.js",
	"./ug-cn": "../../node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "../../node_modules/moment/locale/ug-cn.js",
	"./uk": "../../node_modules/moment/locale/uk.js",
	"./uk.js": "../../node_modules/moment/locale/uk.js",
	"./ur": "../../node_modules/moment/locale/ur.js",
	"./ur.js": "../../node_modules/moment/locale/ur.js",
	"./uz": "../../node_modules/moment/locale/uz.js",
	"./uz-latn": "../../node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "../../node_modules/moment/locale/uz-latn.js",
	"./uz.js": "../../node_modules/moment/locale/uz.js",
	"./vi": "../../node_modules/moment/locale/vi.js",
	"./vi.js": "../../node_modules/moment/locale/vi.js",
	"./x-pseudo": "../../node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../node_modules/moment/locale/x-pseudo.js",
	"./yo": "../../node_modules/moment/locale/yo.js",
	"./yo.js": "../../node_modules/moment/locale/yo.js",
	"./zh-cn": "../../node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "../../node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "../../node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "../../node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "../../node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "../../node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "../../node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "../../node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./add-patient/add-patient.module": [
		"./src/app/add-patient/add-patient.module.ts",
		"add-patient-add-patient-module"
	],
	"./admin/admin.module": [
		"./src/app/admin/admin.module.ts"
	],
	"./login/login.module": [
		"./src/app/login/login.module.ts",
		"login-login-module"
	],
	"./organizational-login/organization-login.module": [
		"./src/app/organizational-login/organization-login.module.ts",
		"organizational-login-organization-login-module"
	],
	"./patient-list/patient-list.module": [
		"./src/app/patient-list/patient-list.module.ts",
		"patient-list-patient-list-module"
	],
	"./patient/patient-profile.module": [
		"./src/app/patient/patient-profile.module.ts",
		"patient-patient-profile-module"
	],
	"./welcome/welcome.module": [
		"./src/app/welcome/welcome.module.ts",
		"welcome-welcome-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./firebase/firebase-account-info.ts":
/*!*******************************************!*\
  !*** ./firebase/firebase-account-info.ts ***!
  \*******************************************/
/*! exports provided: FirebaseAccountInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseAccountInfo", function() { return FirebaseAccountInfo; });
/**
 * Firebase Account Info.
 *
 * This is the data for our two Firebase accounts. We can manually initialize FirebaseApp in our FCMPlugin using
 * this data.
 *
 * FirebaseAccountInfo.prod: used when domain is pointed to healthrecoverysolutions.com aka prod.
 * FirebaseAccountInfo.test: used when domain is pointed to anything else e.g. elaine, george, jerry, any of our proxies.
 */
const FirebaseAccountInfo = {
    prod: {
        'project_number': '848348592935',
        'database_url': 'https://hrsmessaging.firebaseio.com',
        'project_id': 'hrsmessaging',
        'storage_bucket': 'hrsmessaging.appspot.com',
        'app_id': '1:848348592935:android:09ed35be91858d73',
        'api_key': 'AIzaSyAtcchlcA_QQPfWhR7bd7Zx5v7RsgzWmQk',
        'package_name': 'com.hrs.clinician',
        'client_id': '848348592935-6c4nepokq9t6bk9rnk5j74ocahus44r5.apps.googleusercontent.com'
    },
    test: {
        'project_number': '808741233790',
        'database_url': 'https://test-project-7d531.firebaseio.com',
        'project_id': 'test-project-7d531',
        'storage_bucket': 'test-project-7d531.appspot.com',
        'app_id': '1:808741233790:android:6f5d66a54d21b5a2',
        'api_key': 'AIzaSyAcCdIQ2egWosksLDG4Iqnd1FCEKtYqIp4',
        'package_name': 'ionic.hrsmobile.byod.clinician',
        'client_id': '808741233790-su0scsrtt3ql8nn0tbqqe6ep6l88qoor.apps.googleusercontent.com'
    }
};


/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-alert.entry.js",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js",
		5
	],
	"./ion-button_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-chip.entry.js",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js",
		10
	],
	"./ion-datetime_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-img.entry.js",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js",
		14
	],
	"./ion-input.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-input.entry.js",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-loading.entry.js",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-modal.entry.js",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-popover.entry.js",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-range.entry.js",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js",
		28
	],
	"./ion-route_4.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js",
		33
	],
	"./ion-spinner.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-text.entry.js",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toast.entry.js",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin-access/admin-access.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin-access/admin-access.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"c_admin_access\">\n    <hrs-form-item\n        [hasInvalidInput]=\"hasError\"\n        [errorMessage]=\"errorMessage\">\n        <hrs-label\n            class=\"c_admin_access--label\"\n            slot=\"start\">\n            {{ 'ADMIN_ACCESS_HEADER' | translate }}\n        </hrs-label>\n        <hrs-input\n                class=\"c_admin_access--input\"\n                type=\"text\"\n                inputmode=\"numeric\"\n                maxlength=\"5\"\n                placeholder=\"{{ 'ADMIN_PASSCODE_PLACEHOLDER' | translate }}\"\n                [(ngModel)]=\"enteredPasscode\"\n                (ngModelChange)=\"passcodeChangeHandler()\"\n        ></hrs-input>\n    </hrs-form-item>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"c_admin--header\">\n    <ion-toolbar>\n        <ion-buttons class=\"c_app_header--buttons\" slot=\"start\">\n            <ion-button\n                class=\"c_admin--home_button\"\n                (click)=\"exitAdmin()\"\n            >\n                <hrs-icon icon=\"home\"></hrs-icon>\n                <span class=\"sr-only\">{{ 'HOME_TITLE' | translate }}</span>\n            </ion-button>\n        </ion-buttons>\n        <ion-title class=\"c_app_header--title\">\n            <span class=\"c_app_header--text\">\n                {{ 'ADMIN_TITLE' | translate }}\n            </span>\n            <ion-label\n                    *ngIf=\"hasCorrectAccess\"\n                    for=\"settingsPanel\"\n            >| {{ selectedSetting.fullLabel | translate}}</ion-label>\n        </ion-title>\n        <ion-buttons slot=\"end\" *ngIf=\"hasCorrectAccess\">\n            <ion-button (click)=\"user.logout()\" fill=\"solid\" [textContent]=\"'Logout'\"></ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"c_admin--content\">\n\n    <hrs-admin-access\n            *ngIf=\"!hasCorrectAccess\"\n            (hasCorrectPassword)=\"hasCorrectPassword($event)\"\n    ></hrs-admin-access>\n\n    <div class=\"c_admin_settings\" *ngIf=\"hasCorrectAccess\">\n        <div class=\"c_admin_settings--panel\">\n            <ion-tabs class=\"c_admin_settings--tabs\">\n                <ion-tab-bar class=\"c_admin_settings--tabs\" slot=\"bottom\">\n                    <ion-tab-button\n                        *ngFor=\"let setting of settings\"\n                        (click)=\"selectSetting(setting)\"\n                        [ngClass]=\"{'tab-selected': setting.enum === selectedSetting.enum}\"\n                    >\n                        <ion-icon name=\"{{setting.icon}}\"></ion-icon>\n                        <ion-label>{{setting.tabLabel | translate}}</ion-label>\n                    </ion-tab-button>\n                </ion-tab-bar>\n            </ion-tabs>\n            <ng-container\n                id=\"settingsPanel\"\n                [ngSwitch]=\"selectedSetting.enum\">\n                <domain-settings *ngSwitchCase=\"adminSettings.DOMAIN\"></domain-settings>\n            </ng-container>\n        </div>\n    </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/domain-settings/domain-settings.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/domain-settings/domain-settings.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"c_admin_kiosk\">\n    <ion-list>\n        <ion-radio-group [(ngModel)]=\"selected\" [value]=\"selected\">\n\n            <ion-list-header>\n                <ion-label>{{'ADMIN_DOMAIN_SETTINGS.HEADER' | translate}}</ion-label>\n            </ion-list-header>\n            <p>{{currentDomain}}</p>\n\n            <ion-item *ngFor=\"let domain of domains\">\n                <ion-label>{{domain}}</ion-label>\n                <ion-radio color=\"success\" slot=\"start\" value=\"{{domain}}\"></ion-radio>\n            </ion-item>\n            <ion-item>\n                <ion-label class=\"hrsdomain--label\" (click)=\"handleLabelClick('hrsdomain')\">\n                    {{'hrsdomain:'}}\n                    <ion-input class=\"c_input\"\n                               type=\"text\"\n                               placeholder=\"type domain here...\"\n                               [disabled]=\"selected !== 'hrsdomain'\"\n                               [(ngModel)]=\"hrsdomainText\"></ion-input>\n                </ion-label>\n                <ion-radio color=\"success\" slot=\"start\" value=\"hrsdomain\"></ion-radio>\n            </ion-item>\n        </ion-radio-group>\n\n        <ion-buttons class=\"c_app_header--buttons\">\n            <ion-button class=\"c_button\" (click)=\"setDomain()\">{{'SAVE_BUTTON' | translate}}</ion-button>\n        </ion-buttons>\n    </ion-list>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app class=\"ios\">\n    <ion-menu class=\"c_app_menu\"\n              contentId=\"content\"\n              type=\"overlay\"\n              side=\"start\"\n              persistant=\"true\"\n              enable-menu-with-back-views=\"true\"\n              [swipeGesture]=\"false\">\n        <ion-header class=\"c_app_menu--header\">\n            <h5 class=\"app-menu-title c_app_menu--title\">\n                {{ 'MENU' | translate }}\n            </h5>\n            <ion-menu-toggle class=\"c_app_menu--btn-close\">\n                <ion-icon class=\"c_app_menu--btn-close-icon\"></ion-icon>\n            </ion-menu-toggle>\n        </ion-header>\n        <ion-content>\n            <ion-list class=\"c_app_menu--list\">\n                <ion-item class=\"c_app_menu--item\"\n                          button\n                          slot=\"start\"\n                          (click)=\"openAddPatientPage()\"\n                          *ngIf=\"!user.isReadOnlyClinician()\">\n                    <ion-icon class=\"c_app_menu--icon c_app_menu--icon-add_patient\"></ion-icon>\n                    <ion-label>{{ 'ADD_PATIENT' | translate }}</ion-label>\n                </ion-item>\n                <ion-item class=\"c_app_menu--item\"\n                          button\n                          slot=\"start\"\n                          (click)=\"initSupportCall()\"\n                          detail-none>\n                    <ion-icon class=\"c_app_menu--icon c_app_menu--icon-support\"></ion-icon>\n                    <ion-label>\n                        {{ 'CALL_SUPPORT' | translate }}\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"c_app_menu--item\"\n                          button\n                          slot=\"start\"\n                          (click)=\"logoutClicked()\">\n                    <ion-icon class=\"c_app_menu--icon c_app_menu--icon-logout\"></ion-icon>\n                    <ion-label>\n                        {{ 'LOGOUT' | translate }}\n                    </ion-label>\n                </ion-item>\n            </ion-list>\n        </ion-content>\n        <div class=\"app-version\" (click)=\"openAdmin()\">\n            {{ versionNumber }}\n        </div>\n    </ion-menu>\n    <ion-router-outlet id=\"content\" [swipeGesture]=\"false\"></ion-router-outlet>\n</ion-app>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/communication/chat/chat.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/communication/chat/chat.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar class=\"c_app_header is-modal\">\n        <ion-buttons class=\"c_app_header--buttons\" slot=\"start\">\n            <ion-button class=\"c_app_header--btn\" (click)=\"dismiss()\">\n                <ion-icon class=\"c_app_header--icon-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title class=\"c_app_header--title\">\n            <span class=\"c_app_header--text\">\n                {{ 'CHAT_PANEL' | translate }}\n            </span>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list class=\"c_chat--list\">\n        <section class=\"c_chat\" *ngFor=\"let message of messages; let last = last\" no-lines>\n            <article class=\"c_chat--message ion-text-right\" *ngIf=\"message.name === 'You'\">\n                <article class=\"c_chat--bubble-right\">\n                    <span class=\"c_chat--msg_name\">{{ 'CHAT_YOU_MESSAGE' | translate }}</span>\n                    <span class=\"c_chat--msg_text\">{{ message.text }}</span>\n                </article>\n            </article>\n            <div class=\"c_chat--timestamp-right ion-text-wrap\" *ngIf=\"message.name === 'You'\">{{ message.time ? convertTimeAndDate(message.ts) : message.messageStatus }}</div>\n            <article class=\"c_chat--message ion-text-left\" *ngIf=\"message.name !== 'You'\">\n                <div class=\"c_chat--bubble-left\">\n                    <span class=\"c_chat--msg_name\">{{ message.name }}</span>\n                    <span class=\"c_chat--msg_text\">{{ message.text }}</span>\n                </div>\n            </article>\n            <article class=\"c_chat--timestamp-left ion-text-wrap\" *ngIf=\"message.name !== 'You'\">\n                {{ convertTimeAndDate(message.ts) }} - {{ message.type === 'patient' ? ('PATIENT' | translate) : ('PATIENT_PROFILE_CLINICIAN' | translate)  }}\n            </article>\n            {{last && !polling ? callScrollFunction() : ''}}\n        </section>\n    </ion-list>\n</ion-content>\n\n<ion-footer class=\"c_chat--footer\">\n    <form [formGroup]=\"data\"  (submit)=\"sendTextMessage()\" class=\"c_chat--form\">\n        <ion-textarea class=\"c_chat--input\" type=\"text\" placeholder=\"{{ 'CHAT_MESSAGE' | translate }}\" formControlName=\"message\"></ion-textarea>\n        <ion-button class=\"c_chat--btn-send\" type=\"submit\" [disabled]=\"data.value.message == ''\">\n            <span class=\"c_chat--btn-content\">\n                <ion-icon class=\"c_chat--icon-send\"></ion-icon>\n                {{ 'SEND' | translate }}\n            </span>\n        </ion-button>\n    </form>\n</ion-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/communication/video/video.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/communication/video/video.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar class=\"c_app_header is-modal\">\n        <ion-buttons class=\"c_app_header--buttons\" slot=\"start\">\n            <ion-button class=\"c_app_header--btn\" (click)=\"dismiss()\">\n                <ion-icon class=\"c_app_header--icon-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title class=\"c_app_header--title\">\n            <span class=\"c_app_header--text\">\n                {{ \"VIDEO_PANEL\" | translate }}\n            </span>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"c_call c_video_call--details\">\n    <div class=\"c_call--status\">\n        <div class=\"c_call--name-callee\">{{ callData.patientName }}</div>\n        {{ callStatus | translate }}\n    </div>\n    <div id='videoCallPublisher'></div>\n    <div id='videoCallSubscriber' class=\"c_call--view-callee\" style=\"width: 100%; height: calc(90vh - 5em); position: absolute; top: 0; left: 0; z-index: 500; pointer-events:none;\"></div>\n</ion-content>\n<ion-footer class=\"c_footer\">\n    <ion-button class=\"c_footer--button-back\"\n                (click)=\"dismiss()\">\n        <ion-icon class=\"c_footer--icon-back\"></ion-icon>\n    </ion-button>\n    <ion-button class=\"c_footer--button\"\n                [ngClass]=\"{\n                    'c_call--button-call': !calling,\n                    'c_call--button-end': calling\n                }\"\n                (click)=\"toggleCall()\"\n                [disabled]=\"modalClosing\">\n        <ion-icon class=\"c_call--icon-dial\"\n                  name=\"videocam\"></ion-icon>\n    </ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/communication/voice/voice.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/communication/voice/voice.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"callHeader\">\n    <ion-toolbar class=\"c_app_header is-modal\">\n        <ion-buttons class=\"c_app_header--buttons\" slot=\"start\">\n            <ion-button class=\"c_app_header--btn\" (click)=\"dismiss()\">\n                <ion-icon class=\"c_app_header--icon-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title class=\"c_app_header--title\">\n            <span class=\"c_app_header--text\">\n                {{ \"VOICE_PANEL\" | translate }}\n            </span>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"callDetails c_call c_voice_call--details\">\n    <div class=\"calleeName c_call--name-callee\">{{ callData.patientName }}</div>\n    <div class=\"callStatus c_call--status\">\n        <div>{{ callStatus | translate }}</div>\n    </div>\n</ion-content>\n<ion-footer class=\"c_footer\">\n    <ion-button class=\"c_footer--button-back\"\n                (click)=\"dismiss()\">\n        <ion-icon class=\"c_footer--icon-back\"></ion-icon>\n    </ion-button>\n    <ion-button class=\"c_footer--button\"\n                [ngClass]=\"{\n                    'c_call--button-call': true,\n                    'c_call--button-end': calling\n                }\"\n                (click)=\"toggleCall()\"\n                [disabled]=\"modalClosing\">\n        <ion-icon class=\"c_call--icon-dial\"\n                  name=\"call\"></ion-icon>\n    </ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/organizational-login/organizational-login.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/organizational-login/organizational-login.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"c_splash--page\"\n             scroll=\"false\">\n    <div class=\"c_splash--wrapper\">\n        <div class=\"c_splash--logo_container\">\n            <div class=\"c_splash--logo_bg\"></div>\n            <div class=\"c_splash--logo\"></div>\n        </div>\n        <div class=\"c_splash--card_container is-tall_card is-login\">\n            <div class=\"c_splash--card_bg\"></div>\n            <main class=\"c_splash--card\">\n                <header class=\"c_splash--card_header c_card--header\">\n                    <div class=\"c_splash--header_bg\"></div>\n                    <ion-button class=\"c_splash--back_btn\"\n                                [routerLink]=\"['/welcome']\"\n                                routerDirection=\"back\"></ion-button>\n                    <span class=\"c_splash--title_text\">\n                        {{ 'ORGANIZATIONAL_LOGIN.TITLE' | translate }}\n                    </span>\n                </header>\n                <div class=\"c_splash--card_content c_card--content\">\n                    <form class=\"c_splash--form\">\n                        <ion-list class=\"c_splash--input_wrapper\">\n                            <ion-item class=\"c_splash--input\">\n                                <ion-label class=\"c_splash--input_label\"\n                                           position=\"floating\">\n                                    {{ 'ORGANIZATIONAL_LOGIN.EMAIL_LABEL' | translate }}\n                                </ion-label>\n                                <ion-input class=\"c_splash--input_field\"\n                                           type=\"email\"\n                                           autocapitalize=\"none\"\n                                           [(ngModel)]=\"email\"\n                                           name=\"email\"></ion-input>\n                            </ion-item>\n                        </ion-list>\n                    </form>\n                    <div class=\"c_splash--text\">\n                        {{ 'ORGANIZATIONAL_LOGIN.HELP_TEXT' | translate }}\n                    </div>\n                </div>\n                <footer class=\"c_splash--card_footer c_card--buttons\">\n                    <div class=\"c_splash--footer_bg\"></div>\n                    <ion-button class=\"c_button login\"\n                                (click)=\"email && doLogin()\"\n                                type=\"submit\"\n                                [disabled]=\"!email || loggingIn\">\n                        {{ 'ORGANIZATIONAL_LOGIN.SUBMIT_BUTTON' | translate }}\n                    </ion-button>\n                </footer>\n            </main>\n        </div>\n    </div>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/patient/careplan/careplan.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/patient/careplan/careplan.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar class=\"c_app_header is-modal statusbar-padding\">\n        <ion-buttons class=\"c_app_header--buttons\" slot=\"start\">\n            <ion-button class=\"c_app_header--btn\" (click)=\"dismiss()\">\n                <ion-icon class=\"c_app_header--icon-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title class=\"c_app_header--title\">\n            <span class=\"c_app_header--text\">{{ 'CAREPLAN' | translate }}</span>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"careplan-page\">\n    <ion-card class=\"c_card\">\n        <ion-card-header class=\"c_card--header\">\n            {{ 'CAREPLAN_PRESETS' | translate }}\n        </ion-card-header>\n        <ion-card-content class=\"c_card--content\"\n                          *ngIf=\"populateActiveItems('presets').length > 0\">\n            <ion-badge class=\"c_careplan--badge\"\n                       *ngFor=\"let preset of populateActiveItems('presets')\"\n                       item-start>\n                {{ presets[preset].item.attributes.name }}\n            </ion-badge>\n        </ion-card-content>\n        <ion-card-content class=\"c_card--content\"\n                          *ngIf=\"populateActiveItems('presets').length === 0\">\n            <ion-item class=\"c_careplan--no_content\"\n                      item-start>\n                - {{ 'CAREPLAN_NO_CONTENT' | translate }} -\n            </ion-item>\n        </ion-card-content>\n        <ion-button class=\"c_button-center\"\n                    (click)=\"openEditCarePlanModal(false)\">\n            {{ 'CAREPLAN_EDIT_PRESETS' | translate }}\n        </ion-button>\n    </ion-card>\n    <ion-card class=\"c_card\">\n        <ion-card-header class=\"c_card--header\">\n            {{ 'CAREPLAN_MODULES' | translate }}\n        </ion-card-header>\n        <ion-card-content class=\"c_card--content\"\n                          *ngIf=\"populateActiveItems('modules').length > 0\">\n            <ion-badge class=\"c_careplan--badge\"\n                       *ngFor=\"let module of populateActiveItems('modules')\"\n                       item-start>\n                {{ modules[module].item.attributes.name }}\n            </ion-badge>\n        </ion-card-content>\n        <ion-card-content class=\"c_card--content\"\n                          *ngIf=\"populateActiveItems('modules').length === 0\">\n            <ion-item class=\"c_careplan--no_content\"\n                      item-start>\n               - {{ 'CAREPLAN_NO_CONTENT' | translate }} -\n            </ion-item>\n        </ion-card-content>\n        <ion-button class=\"c_button-center\"\n                    (click)=\"openEditCarePlanModal(true)\">\n            {{ 'CAREPLAN_EDIT_MODULES' | translate }}\n        </ion-button>\n    </ion-card>\n    <ion-card class=\"c_card c_careplan--notice\">\n        <ion-icon class=\"c_careplan--notice_icon\"></ion-icon>\n        {{ 'CAREPLAN_ADVANCED_NOTICE' | translate }}\n    </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/patient/careplan/edit-careplan/edit-careplan.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/patient/careplan/edit-careplan/edit-careplan.page.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar class=\"c_app_header is-modal statusbar-padding\">\n        <ion-buttons class=\"c_app_header--buttons\" slot=\"start\">\n            <ion-button class=\"c_app_header--btn\" (click)=\"cancel()\">\n                <ion-icon class=\"c_app_header--icon-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title *ngIf=\"isModules\" class=\"c_app_header--title\">\n            <span class=\"c_app_header--text\">{{ 'CAREPLAN' | translate }} - {{ 'CAREPLAN_EDIT_MODULES' | translate }}</span>\n        </ion-title>\n        <ion-title *ngIf=\"!isModules\" class=\"c_app_header--title\">\n            <span class=\"c_app_header--text\">{{ 'CAREPLAN' | translate }} - {{ 'CAREPLAN_EDIT_PRESETS' | translate }}</span>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"edit-careplan-page\" *ngIf=\"!loading\">\n    <ion-list class=\"c_careplan--list\">\n        <ion-item class=\"c_careplan--toggle\"\n                  [ngClass]=\"{'is-selected': careplanToggleMap[key].selected}\"\n                  *ngFor=\"let key of keys\"\n                  (click)=\"toggleCareplanItem(careplanToggleMap[key].item)\">\n            <ion-label class=\"c_careplan--name\">\n                {{ careplanToggleMap[key].item.attributes.name }}\n            </ion-label>\n            <ion-checkbox class=\"c_card--checkbox is-radio\"\n                          [checked]=\"careplanToggleMap[key].selected\"></ion-checkbox>\n        </ion-item>\n    </ion-list>\n</ion-content>\n<ion-footer class=\"c_footer\">\n    <ion-button class=\"c_footer--button c_footer--button-cancel\"\n                (click)=\"cancel()\">\n        {{ 'CANCEL_BUTTON' | translate }}\n    </ion-button>\n    <ion-button class=\"c_footer--button c_footer--button-save\"\n                [disabled]=\"isCareplanEmpty()\"\n                (click)=\"dismiss()\">\n        <ion-icon class=\"c_footer--icon-save\"></ion-icon>\n        {{ 'SAVE_BUTTON' | translate }}\n    </ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/patient/device/add-device.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/patient/device/add-device.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar class=\"c_app_header is-modal\">\n        <ion-buttons class=\"c_app_header--buttons\" slot=\"start\">\n            <ion-button class=\"c_app_header--btn\" (click)=\"dismiss()\">\n                <ion-icon class=\"c_app_header--icon-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title class=\"c_app_header--title\">\n            <span class=\"c_app_header--text\">\n                {{ 'ADD_EDIT_DEVICE' | translate }}\n            </span>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-card class=\"c_card\">\n        <ion-card-header>\n            <b>{{ 'CURRENT_DEVICE' | translate }} </b> {{ currentAssignedDevice }}\n        </ion-card-header>\n    </ion-card>\n\n    <ion-list>\n        <ion-item *ngIf=\"availableDevices == 'None'\" class=\"noDevicesAvailable\">\n            <ion-label>{{ 'NO_DEVICE' | translate }}</ion-label>\n        </ion-item>\n\n        <ion-item class=\"c_add_device--select\" *ngIf=\"availableDevices != 'None'\">\n            <ion-label>{{ 'NEW_DEVICE' | translate }}</ion-label>\n            <ion-select [(ngModel)]=\"selectedValue\" [value]=\"selectedValue\" multiple=\"false\">\n                <ion-label>{{ 'NEW_DEVICE' | translate }}</ion-label>\n                <ion-select-option *ngFor=\"let device of availableDevices\" value=\"{{device.name}}\">\n                    {{device.name}}\n                </ion-select-option>\n            </ion-select>\n        </ion-item>\n    </ion-list>\n\n</ion-content>\n<ion-footer class=\"c_footer\">\n    <ion-button class=\"c_footer--button c_footer--button-cancel\"\n                (click)=\"dismiss()\">\n        {{ 'CANCEL_BUTTON' | translate }}\n    </ion-button>\n    <ion-button class=\"c_footer--button c_footer--button-save\"\n                (click)=\"saveEditToAssignedDevice()\" \n                *ngIf=\"availableDevices != 'None'\" \n                [disabled]=\"!selectedValue\"><ion-icon class=\"c_footer--icon-save\"></ion-icon>\n        {{ 'SAVE_BUTTON' | translate }}\n    </ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/patient/patient-status-change/patient-status-change.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/patient/patient-status-change/patient-status-change.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar class=\"c_app_header is-modal statusbar-padding\">\n        <ion-buttons class=\"c_app_header--buttons\" slot=\"start\">\n            <ion-button class=\"c_app_header--btn\" (click)=\"dismiss()\">\n                <ion-icon class=\"c_app_header--icon-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title class=\"c_app_header--title\"\n                   *ngIf=\"action == status.ActionPause\">\n            <span class=\"c_app_header--text\">\n                {{ 'PATIENT_PAUSE.TITLE' | translate }}\n            </span>\n        </ion-title>\n        <ion-title class=\"c_app_header--title\"\n                   *ngIf=\"action == status.ActionResume\" >\n            <span class=\"c_app_header--text\">\n                {{ 'PATIENT_RESUME.TITLE' | translate }}\n            </span>\n        </ion-title>\n        <ion-title class=\"c_app_header--title\"\n                   *ngIf=\"action == status.ActionDeactivate\">\n            <span class=\"c_app_header--text\">\n                {{ 'PATIENT_DEACTIVATE.TITLE' | translate }}\n            </span>\n        </ion-title>\n        <ion-title class=\"c_app_header--title\"\n                   *ngIf=\"action == status.ActionReactivate\" >\n            <span class=\"c_app_header--text\">\n                {{ 'PATIENT_REACTIVATE.TITLE' | translate }}\n            </span>\n        </ion-title>\n        <ion-title class=\"c_app_header--title ion-text-wrap\"\n                   *ngIf=\"action == status.ActionDischarge\"\n                   no-lines>\n            <span class=\"c_app_header--text\">\n                {{ 'PATIENT_DISCHARGE.TITLE' | translate }}\n            </span>\n        </ion-title>\n        <ion-title class=\"c_app_header--title ion-text-wrap\"\n                   *ngIf=\"action == status.ActionUnDischarge\"\n                   no-lines>\n            <span class=\"c_app_header--text\">\n                {{ 'PATIENT_UNDISCHARGE.TITLE' | translate }}\n            </span>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"action == status.ActionPause\">\n    <ion-card>\n        <form [formGroup]=\"data\" (ngSubmit)=\"submit()\">\n            <ion-list>\n                <ion-item>\n                    <ion-label>{{ 'PATIENT_PAUSE.FORM.NOTE' | translate }}:</ion-label>\n                    <ion-textarea formControlName=\"note\" placeholder=\"{{ 'PATIENT_PAUSE.FORM.NOTE_PLACEHOLDER' | translate }}\"></ion-textarea>\n                </ion-item>\n                <ion-item>\n                    <ion-label>{{ 'PATIENT_PAUSE.FORM.EDVISIT' | translate }}</ion-label>\n                    <ion-checkbox formControlName=\"edvisit\"></ion-checkbox>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label>{{ 'PATIENT_PAUSE.FORM.READMITTED' | translate }}</ion-label>\n                    <ion-checkbox formControlName=\"readmitted\"></ion-checkbox>\n                </ion-item>\n\n                <div class=\"ion-padding\">\n                    <ion-button expand=\"block\" slot=\"end\" type=\"submit\">\n                        <ion-text>{{ 'PATIENT_PAUSE.SUBMIT_BUTTON' | translate }}</ion-text>\n                    </ion-button>\n                </div>\n            </ion-list>\n        </form>\n    </ion-card>\n</ion-content>\n\n<ion-content *ngIf=\"action == status.ActionResume\">\n    <ion-card>\n        <form [formGroup]=\"data\" (ngSubmit)=\"submit()\">\n            <ion-list>\n                <ion-item>\n                    <ion-label>{{ 'PATIENT_RESUME.FORM.NOTE' | translate }}:</ion-label>\n                    <ion-textarea formControlName=\"note\" placeholder=\"{{ 'PATIENT_RESUME.FORM.NOTE_PLACEHOLDER' | translate }}\"></ion-textarea>\n                </ion-item>\n\n                <div class=\"ion-padding\">\n                    <ion-button expand=\"block\" slot=\"end\" type=\"submit\">\n                        <ion-text>{{ 'PATIENT_RESUME.SUBMIT_BUTTON' | translate }}</ion-text>\n                    </ion-button>\n                </div>\n            </ion-list>\n        </form>\n    </ion-card>\n</ion-content>\n\n<ion-content *ngIf=\"action == status.ActionDeactivate\" class=\"c_patient_status--deactivate\">\n    <ion-card>\n        <form [formGroup]=\"data\" (ngSubmit)=\"submit()\">\n            <ion-list>\n                <ion-item>\n                    <ion-label>{{ 'PATIENT_DEACTIVATE.FORM.NOTE' | translate }}:</ion-label>\n                    <ion-textarea formControlName=\"note\" placeholder=\"{{ 'PATIENT_DEACTIVATE.FORM.NOTE_PLACEHOLDER' | translate }}\"></ion-textarea>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label>{{ 'PATIENT_DEACTIVATE.FORM.EDVISIT' | translate }}</ion-label>\n                    <ion-checkbox formControlName=\"edvisit\"></ion-checkbox>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label>{{ 'PATIENT_DEACTIVATE.FORM.READMITTED' | translate }}</ion-label>\n                    <ion-checkbox formControlName=\"readmitted\"></ion-checkbox>\n                </ion-item>\n\n                <div class=\"ion-padding\">\n                    <ion-button expand=\"block\" slot=\"end\" type=\"submit\">\n                        <ion-text>{{ 'PATIENT_DEACTIVATE.SUBMIT_BUTTON' | translate }}</ion-text>\n                    </ion-button>\n                </div>\n            </ion-list>\n        </form>\n    </ion-card>\n</ion-content>\n\n<ion-content *ngIf=\"action == status.ActionReactivate\">\n    <ion-card>\n        <form [formGroup]=\"data\" (ngSubmit)=\"submit()\">\n            <ion-list>\n                <ion-item>\n                    <ion-label>{{ 'PATIENT_REACTIVATE.FORM.NOTE' | translate }}:</ion-label>\n                    <ion-textarea formControlName=\"note\" placeholder=\"{{ 'PATIENT_REACTIVATE.FORM.NOTE_PLACEHOLDER' | translate }}\"></ion-textarea>\n                </ion-item>\n\n                <div class=\"ion-padding\">\n                    <ion-button expand=\"block\" slot=\"end\" type=\"submit\">\n                        <ion-text>{{ 'PATIENT_REACTIVATE.SUBMIT_BUTTON' | translate }}</ion-text>\n                    </ion-button>\n                </div>\n            </ion-list>\n        </form>\n    </ion-card>\n</ion-content>\n\n<ion-content *ngIf=\"action == status.ActionDischarge\">\n    <ion-card>\n        <ion-card-header class=\"patient-discharge-info\">{{ 'PATIENT_DISCHARGE.INFO' | translate }}</ion-card-header>\n        <form [formGroup]=\"data\" (ngSubmit)=\"submit()\">\n            <ion-item>\n                <ion-label position=\"stacked\">{{ 'PATIENT_DISCHARGE.INPUT.PLACEHOLDER' | translate }}</ion-label>\n                <ion-datetime name=\"date\"\n                              formControlName=\"date\"\n                              display-format=\"MM/DD/YYYY\"\n                              picker-format=\"MM DD YYYY\"\n                              placeholder=\"{{ 'PATIENT_DISCHARGE.INPUT.PLACEHOLDER' | translate }}\"\n\n                ></ion-datetime>\n            </ion-item>\n            <div class=\"ion-padding\">\n                <ion-button expand=\"block\" slot=\"end\" type=\"submit\" [disabled]=\"data.value.date === ''\">\n                    <ion-text>{{ 'PATIENT_DISCHARGE.SUBMIT_BUTTON' | translate }}</ion-text>\n                </ion-button>\n            </div>\n        </form>\n    </ion-card>\n</ion-content>\n\n<ion-content *ngIf=\"action == status.ActionUnDischarge\">\n    <ion-card>\n        <ion-card-header class=\"patient-discharge-info\">{{undischargeInfo}}</ion-card-header>\n        <div class=\"c_patient_status--buttons ion-padding\">\n            <ion-button expand=\"block\" (click)=\"dismiss()\">\n                <ion-text>{{ 'PATIENT_UNDISCHARGE.CANCEL_BUTTON' | translate }}</ion-text>\n            </ion-button>\n            <ion-button expand=\"block\" (click)=\"submit()\">\n                <ion-text>{{ 'PATIENT_UNDISCHARGE.SUBMIT_BUTTON' | translate }}</ion-text>\n            </ion-button>\n        </div>\n    </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/patient/reset-metrics/reset-metrics.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/patient/reset-metrics/reset-metrics.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar class=\"c_app_header is-modal\">\n        <ion-buttons class=\"c_app_header--buttons\" slot=\"start\">\n            <ion-button class=\"c_app_header--btn\" (click)=\"dismiss()\">\n                <ion-icon class=\"c_app_header--icon-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title class=\"c_app_header--title\">\n            <span class=\"c_app_header--text\">\n                {{ 'RESET_METRICS' | translate }}\n            </span>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"resetMetricsModal\">\n    <ion-card>\n        <ion-card-header>\n            <b>{{ 'RESET_METRICS_HEADER' | translate }}</b>\n        </ion-card-header>\n    </ion-card>\n    <form [formGroup]=\"metrics\" (ngSubmit)=\"submitMetricReset()\">\n        <ion-list>\n            <ion-item>\n                <ion-label>{{ 'ACTIVITY' | translate }}</ion-label>\n                <ion-checkbox formControlName=\"activity\" (ionChange)=\"toggleResetButton()\"></ion-checkbox>\n            </ion-item>\n            <ion-item>\n                <ion-label>{{ 'CONSENT_FORM' | translate }}</ion-label>\n                <ion-checkbox formControlName=\"consent\" (ionChange)=\"toggleResetButton()\"></ion-checkbox>\n            </ion-item>\n            <ion-item>\n                <ion-label>{{ 'MEDICATIONS' | translate }}</ion-label>\n                <ion-checkbox formControlName=\"medication\" (ionChange)=\"toggleResetButton()\"></ion-checkbox>\n            </ion-item>\n            <ion-item>\n                <ion-label>{{ 'SURVEY' | translate }}</ion-label>\n                <ion-checkbox formControlName=\"survey\" (ionChange)=\"toggleResetButton()\"></ion-checkbox>\n            </ion-item>\n            <ion-item>\n                <ion-label>{{ 'WEIGHT' | translate }}</ion-label>\n                <ion-checkbox formControlName=\"weight\" (ionChange)=\"toggleResetButton()\"></ion-checkbox>\n            </ion-item>\n        </ion-list>\n        <ion-buttons class=\"c_buttons c_footer\">\n            <ion-button class=\"c_button-left c_footer--button-left\" (click)=\"dismiss()\">\n                <ion-text class=\"c_footer--text\">{{ 'CLOSE_BUTTON' | translate }}</ion-text>\n            </ion-button>\n            <ion-button class=\"c_button c_footer--button\" type=\"submit\" [disabled]=\"!metricSelected\">\n                <ion-text class=\"c_footer--text\">{{ 'RESET_BUTTON' | translate }}</ion-text>\n            </ion-button>\n        </ion-buttons>\n    </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/admin/admin-access/admin-access.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/admin/admin-access/admin-access.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".c_admin_access {\n  display: flex;\n  flex-direction: column;\n  place-items: center;\n  font-size: 1.25rem;\n  font-weight: bold; }\n  .c_admin_access hrs-form-item {\n    --item-height: 100%;\n    --message-height: 1.2rem;\n    --message-top-margin: 1rem;\n    --message-font-size: 1.5rem;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end; }\n  .c_admin_access hrs-form-item .c_admin_access--label {\n      margin: 1rem auto; }\n  .c_admin_access hrs-form-item .c_admin_access--input {\n      --text-indent: .5rem;\n      width: 20rem;\n      height: 2rem;\n      margin: auto;\n      font-size: 1.5rem;\n      text-align: center;\n      border: 2px solid var(--gray-7);\n      border-radius: 4px;\n      background: var(--white); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnViaGF2c2F4ZW5hL0RvY3VtZW50cy9JbXBldHVzX1Byb2plY3RzL0FuZ3VsYXJfTW9ub3JlcG9fR2l0TGFiX0NvcHkvYW5ndWxhci1tb25vcmVwby9hcHBzL21vYmlsZS1jbGluaWNpYW4vc3JjL2FwcC9hZG1pbi9hZG1pbi1hY2Nlc3MvYWRtaW4tYWNjZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBO0VBTHJCO0lBUVEsbUJBQWM7SUFDZCx3QkFBaUI7SUFDakIsMEJBQXFCO0lBQ3JCLDJCQUFvQjtJQUVwQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHFCQUFxQixFQUFBO0VBZjdCO01Ba0JZLGlCQUFpQixFQUFBO0VBbEI3QjtNQXNCWSxvQkFBYztNQUNkLFlBQVk7TUFDWixZQUFZO01BQ1osWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsK0JBQStCO01BQy9CLGtCQUFrQjtNQUNsQix3QkFBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWFjY2Vzcy9hZG1pbi1hY2Nlc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY19hZG1pbl9hY2Nlc3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgIGhycy1mb3JtLWl0ZW0ge1xuICAgICAgICAtLWl0ZW0taGVpZ2h0OiAxMDAlO1xuICAgICAgICAtLW1lc3NhZ2UtaGVpZ2h0OiAxLjJyZW07XG4gICAgICAgIC0tbWVzc2FnZS10b3AtbWFyZ2luOiAxcmVtO1xuICAgICAgICAtLW1lc3NhZ2UtZm9udC1zaXplOiAxLjVyZW07XG5cbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblxuICAgICAgICAuY19hZG1pbl9hY2Nlc3MtLWxhYmVsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMXJlbSBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNfYWRtaW5fYWNjZXNzLS1pbnB1dCB7XG4gICAgICAgICAgICAtLXRleHQtaW5kZW50OiAuNXJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAyMHJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ3JheS03KTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin-access/admin-access.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/admin-access/admin-access.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminAccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAccessComponent", function() { return AdminAccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _clinician_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clinician/providers */ "./src/app/services/providers.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");




let AdminAccessComponent = class AdminAccessComponent {
    constructor(adminService, translate) {
        this.adminService = adminService;
        this.translate = translate;
        this.hasCorrectPassword = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hasError = false;
        this.timeout = () => setTimeout(() => {
            this.adminService.rerouteHome();
        }, 45000);
        this.reroute = this.timeout();
        this.errorMessage = this.translate.instant('ADMIN_PASSCODE_ERROR');
    }
    ngOnDestroy() {
        clearTimeout(this.reroute);
    }
    /**
     * On changes to the input, the reroute gets reset and isCorrect gets emitted to parent.
     */
    passcodeChangeHandler() {
        const isCorrect = _clinician_providers__WEBPACK_IMPORTED_MODULE_2__["AdminService"].PASSCODE === this.enteredPasscode;
        clearTimeout(this.reroute);
        if (isCorrect) {
            this.hasCorrectPassword.emit(isCorrect);
        }
        else {
            this.checkErrorState(isCorrect);
            this.reroute = this.timeout();
        }
    }
    checkErrorState(isCorrect) {
        const haveSameLength = _clinician_providers__WEBPACK_IMPORTED_MODULE_2__["AdminService"].PASSCODE.length === this.enteredPasscode.length;
        this.hasError = !isCorrect && haveSameLength;
    }
};
AdminAccessComponent.ctorParameters = () => [
    { type: _clinician_providers__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AdminAccessComponent.prototype, "hasCorrectPassword", void 0);
AdminAccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'hrs-admin-access',
        template: __webpack_require__(/*! raw-loader!./admin-access.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin-access/admin-access.component.html"),
        styles: [__webpack_require__(/*! ./admin-access.component.scss */ "./src/app/admin/admin-access/admin-access.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_clinician_providers__WEBPACK_IMPORTED_MODULE_2__["AdminService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
], AdminAccessComponent);



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin.page */ "./src/app/admin/admin.page.ts");
/* harmony import */ var _domain_settings_domain_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./domain-settings/domain-settings.component */ "./src/app/admin/domain-settings/domain-settings.component.ts");
/* harmony import */ var _hrsui_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @hrsui/angular */ "../../node_modules/@hrsui/angular/dist/fesm5.js");
/* harmony import */ var _admin_access_admin_access_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-access/admin-access.component */ "./src/app/admin/admin-access/admin-access.component.ts");











const routes = [
    {
        path: 'admin',
        component: _admin_page__WEBPACK_IMPORTED_MODULE_7__["AdminPage"]
    }
];
let AdminModule = class AdminModule {
};
AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _hrsui_angular__WEBPACK_IMPORTED_MODULE_9__["ComponentLibraryModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild()
        ],
        declarations: [
            _admin_page__WEBPACK_IMPORTED_MODULE_7__["AdminPage"],
            _admin_access_admin_access_component__WEBPACK_IMPORTED_MODULE_10__["AdminAccessComponent"],
            _domain_settings_domain_settings_component__WEBPACK_IMPORTED_MODULE_8__["DomainSettingsComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], AdminModule);



/***/ }),

/***/ "./src/app/admin/admin.page.scss":
/*!***************************************!*\
  !*** ./src/app/admin/admin.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".c_admin--content {\n  align-content: center;\n  --ion-background-color: var(--gray-1);\n  width: 100%; }\n\n.c_admin_settings {\n  display: flex;\n  min-height: 100%; }\n\n.c_admin_settings--panel {\n    display: block;\n    width: 100%;\n    padding: 1rem 4rem; }\n\n@media only screen and (max-width: 767px) {\n      .c_admin_settings--panel {\n        padding: 1rem; } }\n\n.c_admin--header .c_app_header--buttons {\n  margin-right: .25rem; }\n\n.c_app_header .c_app_header--buttons {\n  margin-right: 0; }\n\n.c_app_header--buttons .c_admin--home_button {\n  font-size: 1.5rem; }\n\n.c_admin_settings--tabs {\n  display: block !important;\n  position: static !important;\n  height: 10vh !important; }\n\n.c_admin_settings--tabs ion-tab-bar {\n    border-top: none;\n    border-bottom: var(--border);\n    padding-bottom: 1rem;\n    margin-bottom: 1rem; }\n\n@media only screen and (max-width: 480px) {\n    .c_admin_settings--tabs ion-tab-button {\n      max-width: 50px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnViaGF2c2F4ZW5hL0RvY3VtZW50cy9JbXBldHVzX1Byb2plY3RzL0FuZ3VsYXJfTW9ub3JlcG9fR2l0TGFiX0NvcHkvYW5ndWxhci1tb25vcmVwby9hcHBzL21vYmlsZS1jbGluaWNpYW4vc3JjL2FwcC9hZG1pbi9hZG1pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxxQkFBcUI7RUFDckIscUNBQXVCO0VBQ3ZCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGFBQWE7RUFDYixnQkFBZ0IsRUFBQTs7QUFFaEI7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQixFQUFBOztBQUNsQjtNQUpGO1FBS00sYUFBYSxFQUFBLEVBRWxCOztBQUtMO0VBRVEsb0JBQW9CLEVBQUE7O0FBS3hCO0VBQ0ksZUFBZSxFQUFBOztBQUZ2QjtFQUtRLGlCQUFpQixFQUFBOztBQUt6QjtFQUVJLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0IsdUJBQXVCLEVBQUE7O0FBSjNCO0lBT1EsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsbUJBQW1CLEVBQUE7O0FBR25CO0lBYlI7TUFjWSxlQUFlLEVBQUEsRUFFdEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY19hZG1pbiB7XG4gICYtLWNvbnRlbnQge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTEpO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgJl9zZXR0aW5ncyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuXG4gICAgJi0tcGFuZWwge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDFyZW0gNHJlbTtcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi5jX2FkbWluLS1oZWFkZXIge1xuICAgIC5jX2FwcF9oZWFkZXItLWJ1dHRvbnMge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IC4yNXJlbTtcbiAgICB9XG59XG5cbi5jX2FwcF9oZWFkZXItLWJ1dHRvbnMge1xuICAgIC5jX2FwcF9oZWFkZXIgJiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG4gICAgLmNfYWRtaW4tLWhvbWVfYnV0dG9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgfVxufVxuXG4vLyBpb25pYydzIHRhYnMgdWkgY29tcG9uZW50IHVzZWQgZm9yIG5hdmlnYXRpb24gd2l0aGluIHRoZSBhZG1pbiBzZWN0aW9uXG4uY19hZG1pbl9zZXR0aW5ncy0tdGFicyB7XG4gICAgLy8gTmVlZCB0byBvdmVycmlkZSBuZ2NvbnRlbnQgYXR0cmlidXRlcy5cbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwdmggIWltcG9ydGFudDtcblxuICAgIGlvbi10YWItYmFyIHtcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYm9yZGVyKTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgfVxuICAgIGlvbi10YWItYnV0dG9uIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/admin/admin.page.ts":
/*!*************************************!*\
  !*** ./src/app/admin/admin.page.ts ***!
  \*************************************/
/*! exports provided: AdminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPage", function() { return AdminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _clinician_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clinician/providers */ "./src/app/services/providers.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums */ "./src/app/enums/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");






let AdminPage = class AdminPage {
    /**
     * To add a new tablet setting:
     * add settings object to this.settings which contains an enim which points to the AdminSettings enum,
     * add the component to admin.module declarations, do not add to app.module,
     * add the component instantiation to this template's ng-container#settingsPanel
     */
    constructor(translate, adminService, navCtrl, user) {
        this.translate = translate;
        this.adminService = adminService;
        this.navCtrl = navCtrl;
        this.user = user;
        this.adminSettings = _enums__WEBPACK_IMPORTED_MODULE_3__["AdminSettings"];
        this.hasCorrectAccess = false;
        this.settings = this.adminService.settings;
        this.selectSetting(this.settings[0]);
    }
    hasCorrectPassword(isCorrect) {
        this.hasCorrectAccess = isCorrect;
    }
    selectSetting(setting) {
        this.selectedSetting = setting;
    }
    exitAdmin() {
        this.navCtrl.back({ animated: false });
    }
};
AdminPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _clinician_providers__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _clinician_providers__WEBPACK_IMPORTED_MODULE_2__["User"] }
];
AdminPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'hrs-admin',
        template: __webpack_require__(/*! raw-loader!./admin.page.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin.page.html"),
        styles: [__webpack_require__(/*! ./admin.page.scss */ "./src/app/admin/admin.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
        _clinician_providers__WEBPACK_IMPORTED_MODULE_2__["AdminService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _clinician_providers__WEBPACK_IMPORTED_MODULE_2__["User"]])
], AdminPage);



/***/ }),

/***/ "./src/app/admin/domain-settings/domain-settings.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/admin/domain-settings/domain-settings.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  margin-top: 0;\n  padding-left: unset;\n  padding-inline-start: calc(var(--ion-safe-area-left, 0px) + 20px); }\n\n.hrsdomain--label {\n  flex: auto !important;\n  max-width: unset !important;\n  pointer-events: all !important; }\n\nion-buttons {\n  justify-content: flex-end;\n  padding: 1em 0 1em 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnViaGF2c2F4ZW5hL0RvY3VtZW50cy9JbXBldHVzX1Byb2plY3RzL0FuZ3VsYXJfTW9ub3JlcG9fR2l0TGFiX0NvcHkvYW5ndWxhci1tb25vcmVwby9hcHBzL21vYmlsZS1jbGluaWNpYW4vc3JjL2FwcC9hZG1pbi9kb21haW4tc2V0dGluZ3MvZG9tYWluLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpRUFBaUUsRUFBQTs7QUFHckU7RUFDSSxxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLHlCQUF5QjtFQUN6QixzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2RvbWFpbi1zZXR0aW5ncy9kb21haW4tc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIHBhZGRpbmctbGVmdDogdW5zZXQ7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0LCAwcHgpICsgMjBweCk7XG59XG5cbi5ocnNkb21haW4tLWxhYmVsIHtcbiAgICBmbGV4OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIHBvaW50ZXItZXZlbnRzOiBhbGwgIWltcG9ydGFudDtcbn1cblxuaW9uLWJ1dHRvbnMge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgcGFkZGluZzogMWVtIDAgMWVtIDFlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/domain-settings/domain-settings.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/domain-settings/domain-settings.component.ts ***!
  \********************************************************************/
/*! exports provided: DomainSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainSettingsComponent", function() { return DomainSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _hrs_utility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hrs/utility */ "../../libs/utility/index.ts");
/* harmony import */ var _clinician_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clinician/providers */ "./src/app/services/providers.ts");
/* harmony import */ var _hrs_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @hrs/providers */ "../../libs/providers/providers.ts");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/dist/index.js");









let DomainSettingsComponent = class DomainSettingsComponent {
    constructor(toastCtrl, translate, user, gatewayApi, settings, logger, firebase, storage, platform, tokenService) {
        this.toastCtrl = toastCtrl;
        this.translate = translate;
        this.user = user;
        this.gatewayApi = gatewayApi;
        this.settings = settings;
        this.logger = logger;
        this.firebase = firebase;
        this.storage = storage;
        this.platform = platform;
        this.tokenService = tokenService;
        this.domains = _hrs_utility__WEBPACK_IMPORTED_MODULE_4__["BuildUtility"].domains.map((domain) => domain.domain);
        this.currentDomain = _hrs_utility__WEBPACK_IMPORTED_MODULE_4__["BuildUtility"].getGatewayURL();
        const currentDomainName = _hrs_utility__WEBPACK_IMPORTED_MODULE_4__["BuildUtility"].getDomainName();
        this.selected = currentDomainName;
        if (currentDomainName === 'hrsdomain') {
            this.hrsdomainText = this.currentDomain;
        }
    }
    /**
     * Radio button click handler.
     *
     * Only used for HRSDOMAIN because ion-input combined wth ion-label affects the label's listeners.
     * Without this handler, the radio option will not be selected on click of the label.
     */
    handleLabelClick(option) {
        this.selected = option;
    }
    setDomain() {
        if (this.selected) {
            const userSelection = this.selected === 'hrsdomain' ? this.hrsdomainText : this.selected;
            _hrs_utility__WEBPACK_IMPORTED_MODULE_4__["BuildUtility"].setDomain(userSelection).then((updatedDomain) => {
                this.currentDomain = updatedDomain;
                this.presentToast('ADMIN_DOMAIN_SETTINGS.CHANGE_SUCCESS', { domain: updatedDomain }).then(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    if (this.platform.is('android')) {
                        this.firebase.setFirebaseAccount(_hrs_utility__WEBPACK_IMPORTED_MODULE_4__["BuildUtility"].getDomainName() === 'prod' ? 'prod' : 'test')
                            .catch((err) => this.logger.error(err));
                    }
                    yield this.user.logout();
                    // Need to manually update the url variables in GatewayApiService and TokenService because
                    // they access the environment url only once when they are initialized,
                    // unlike GatewayService which accesses the environment url each time an API request is created.
                    this.gatewayApi.url = updatedDomain;
                    this.tokenService.url = updatedDomain;
                }));
            }).catch((err) => {
                this.logger.error(err);
                this.presentToast('ADMIN_DOMAIN_SETTINGS.BAD_DOMAIN');
            });
        }
        else {
            this.presentToast('ADMIN_DOMAIN_SETTINGS.NO_SELECTION');
        }
    }
    presentToast(msg, params) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let domainText = this.translate.instant(msg, params);
            let toast = yield this.toastCtrl.create({
                header: domainText,
                duration: 3000,
                position: 'top'
            });
            return yield toast.present();
        });
    }
};
DomainSettingsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _clinician_providers__WEBPACK_IMPORTED_MODULE_5__["User"] },
    { type: _hrs_providers__WEBPACK_IMPORTED_MODULE_6__["GatewayApi"] },
    { type: _clinician_providers__WEBPACK_IMPORTED_MODULE_5__["Settings"] },
    { type: ngx_logger__WEBPACK_IMPORTED_MODULE_7__["NGXLogger"] },
    { type: _clinician_providers__WEBPACK_IMPORTED_MODULE_5__["FirebaseNotifications"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _hrs_providers__WEBPACK_IMPORTED_MODULE_6__["TokenService"] }
];
DomainSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'domain-settings',
        template: __webpack_require__(/*! raw-loader!./domain-settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/domain-settings/domain-settings.component.html"),
        styles: [__webpack_require__(/*! ./domain-settings.component.scss */ "./src/app/admin/domain-settings/domain-settings.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
        _clinician_providers__WEBPACK_IMPORTED_MODULE_5__["User"],
        _hrs_providers__WEBPACK_IMPORTED_MODULE_6__["GatewayApi"],
        _clinician_providers__WEBPACK_IMPORTED_MODULE_5__["Settings"],
        ngx_logger__WEBPACK_IMPORTED_MODULE_7__["NGXLogger"],
        _clinician_providers__WEBPACK_IMPORTED_MODULE_5__["FirebaseNotifications"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _hrs_providers__WEBPACK_IMPORTED_MODULE_6__["TokenService"]])
], DomainSettingsComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");




const routes = [
    { path: '', redirectTo: 'patient-list', pathMatch: 'full' },
    { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule' },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'patient-list', canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], loadChildren: './patient-list/patient-list.module#PatientListPageModule' },
    { path: 'patient-profile', loadChildren: './patient/patient-profile.module#PatientProfilePageModule' },
    { path: 'add-patient', loadChildren: './add-patient/add-patient.module#AddPatientPageModule' },
    { path: 'organizational-login', loadChildren: './organizational-login/organization-login.module#OrganizationalLoginPageModule' },
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".c_app_menu--header {\n  display: flex;\n  height: 4em;\n  position: sticky;\n  align-items: center;\n  width: 100%;\n  z-index: 81;\n  background-color: var(--white);\n  box-shadow: var(--shadow-header); }\n  .c_app_menu--header .c_app_menu--title {\n    flex-basis: 63%;\n    margin-left: auto;\n    display: flex;\n    place-content: center;\n    position: relative;\n    top: 0.4em;\n    font-size: 1.1em;\n    font-weight: 600; }\n  .c_app_menu--header .c_app_menu--btn-close {\n    position: relative;\n    flex-basis: 18%;\n    text-align: left;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    font-size: 1.8em;\n    right: 0.3em;\n    height: 88%;\n    top: 0.3em; }\n  .c_app_menu--header .c_app_menu--btn-close .c_app_menu--btn-close-icon {\n      content: url(/../assets/icon/baseline-close-24px.svg); }\n  .c_app_menu--list > .item-block {\n  margin-top: 9px; }\n  .c_app_menu--list > .item-block .item-inner, .c_app_menu--list > .item-block:first-child, .c_app_menu--list > .item-block:last-child {\n    border: none; }\n  .c_app_menu--list > .item-block:last-child::before {\n    border-bottom: none; }\n  .c_app_menu--item {\n  --border-color: transparent;\n  --detail-icon-color: transparent; }\n  .c_app_menu--item::after {\n    --color-menu-item-border: rgba(0, 0, 0, 0.16);\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 5%;\n    width: 90%;\n    border-bottom: 1px solid var(--color-menu-item-border); }\n  .c_app_menu--item.item-md::before {\n    left: 0;\n    width: 100%; }\n  .c_app_menu--item .c_app_menu--icon {\n    vertical-align: text-bottom;\n    margin-right: .4em; }\n  .c_app_menu--item .c_app_menu--icon-add_patient {\n      content: url(/assets/icon/baseline-person_add-24px.svg); }\n  .c_app_menu--item .c_app_menu--icon-support {\n      content: url(/assets/icon/baseline-phone_in_talk-24px.svg); }\n  .c_app_menu--item .c_app_menu--icon-logout {\n      content: url(/assets/icon/baseline-exit_to_app-24px.svg); }\n  .app-version {\n  position: absolute;\n  bottom: 1em;\n  left: 50%;\n  transform: translateX(-50%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnViaGF2c2F4ZW5hL0RvY3VtZW50cy9JbXBldHVzX1Byb2plY3RzL0FuZ3VsYXJfTW9ub3JlcG9fR2l0TGFiX0NvcHkvYW5ndWxhci1tb25vcmVwby9hcHBzL21vYmlsZS1jbGluaWNpYW4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsZ0NBQWdDLEVBQUE7RUFScEM7SUFXUSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0JBQWdCLEVBQUE7RUFsQnhCO0lBc0JRLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztJQUNYLFVBQVUsRUFBQTtFQS9CbEI7TUFrQ1kscURBQXFELEVBQUE7RUFLakU7RUFFUSxlQUFlLEVBQUE7RUFGdkI7SUFNWSxZQUFZLEVBQUE7RUFOeEI7SUFVWSxtQkFBbUIsRUFBQTtFQUsvQjtFQUNJLDJCQUFlO0VBQ2YsZ0NBQW9CLEVBQUE7RUFGeEI7SUFJUSw2Q0FBeUI7SUFDekIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFVBQVU7SUFDVixzREFBc0QsRUFBQTtFQVY5RDtJQWNRLE9BQU87SUFDUCxXQUFXLEVBQUE7RUFmbkI7SUFtQlEsMkJBQTJCO0lBQzNCLGtCQUFrQixFQUFBO0VBcEIxQjtNQXFCdUIsdURBQXVELEVBQUE7RUFyQjlFO01Bc0JtQiwwREFBMEQsRUFBQTtFQXRCN0U7TUF1QmtCLHdEQUF3RCxFQUFBO0VBSTFFO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBRVQsMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jX2FwcF9tZW51LS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA0ZW07XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDgxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctaGVhZGVyKTtcblxuICAgIC5jX2FwcF9tZW51LS10aXRsZSB7XG4gICAgICAgIGZsZXgtYmFzaXM6IDYzJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDAuNGVtO1xuICAgICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cblxuICAgIC5jX2FwcF9tZW51LS1idG4tY2xvc2Uge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGZsZXgtYmFzaXM6IDE4JTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgZm9udC1zaXplOiAxLjhlbTtcbiAgICAgICAgcmlnaHQ6IDAuM2VtO1xuICAgICAgICBoZWlnaHQ6IDg4JTtcbiAgICAgICAgdG9wOiAwLjNlbTtcblxuICAgICAgICAuY19hcHBfbWVudS0tYnRuLWNsb3NlLWljb24ge1xuICAgICAgICAgICAgY29udGVudDogdXJsKC8uLi9hc3NldHMvaWNvbi9iYXNlbGluZS1jbG9zZS0yNHB4LnN2Zyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jX2FwcF9tZW51LS1saXN0IHtcbiAgICAmID4gLml0ZW0tYmxvY2sge1xuICAgICAgICBtYXJnaW4tdG9wOiA5cHg7XG4gICAgICAgICYgLml0ZW0taW5uZXIsXG4gICAgICAgICY6Zmlyc3QtY2hpbGQsXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAmOmxhc3QtY2hpbGQ6OmJlZm9yZSB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY19hcHBfbWVudS0taXRlbSB7XG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC0tZGV0YWlsLWljb24tY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICY6OmFmdGVyIHtcbiAgICAgICAgLS1jb2xvci1tZW51LWl0ZW0tYm9yZGVyOiByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDUlO1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItbWVudS1pdGVtLWJvcmRlcik7XG4gICAgfVxuXG4gICAgJi5pdGVtLW1kOjpiZWZvcmUge1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuY19hcHBfbWVudS0taWNvbiB7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNGVtO1xuICAgICAgICAmLWFkZF9wYXRpZW50IHtjb250ZW50OiB1cmwoL2Fzc2V0cy9pY29uL2Jhc2VsaW5lLXBlcnNvbl9hZGQtMjRweC5zdmcpOyB9XG4gICAgICAgICYtc3VwcG9ydCB7Y29udGVudDogdXJsKC9hc3NldHMvaWNvbi9iYXNlbGluZS1waG9uZV9pbl90YWxrLTI0cHguc3ZnKTsgfVxuICAgICAgICAmLWxvZ291dCB7Y29udGVudDogdXJsKC9hc3NldHMvaWNvbi9iYXNlbGluZS1leGl0X3RvX2FwcC0yNHB4LnN2Zyk7IH1cbiAgICB9XG59XG5cbi5hcHAtdmVyc2lvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMWVtO1xuICAgIGxlZnQ6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/deeplinks/ngx */ "./node_modules/@ionic-native/deeplinks/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _app_env__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/env */ "../../libs/environments/environment");
/* harmony import */ var _clinician_providers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @clinician/providers */ "./src/app/services/providers.ts");
/* harmony import */ var _services_settings_settings__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/settings/settings */ "./src/app/services/settings/settings.ts");
/* harmony import */ var _services_user_user__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/user/user */ "./src/app/services/user/user.ts");
/* harmony import */ var _hrs_gateway__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @hrs/gateway */ "../../libs/gateway/index.ts");
/* harmony import */ var _hrs_providers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hrs/providers */ "../../libs/providers/providers.ts");
/* harmony import */ var _communication_video_video_page__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./communication/video/video.page */ "./src/app/communication/video/video.page.ts");
/* harmony import */ var _communication_voice_voice_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./communication/voice/voice.page */ "./src/app/communication/voice/voice.page.ts");
/* harmony import */ var _communication_chat_chat_page__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./communication/chat/chat.page */ "./src/app/communication/chat/chat.page.ts");
/* harmony import */ var _organizational_login_organizational_login_page__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./organizational-login/organizational-login.page */ "./src/app/organizational-login/organizational-login.page.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/dist/index.js");
/* harmony import */ var _hrs_utility__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @hrs/utility */ "../../libs/utility/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm/index.js");




























let AppComponent = class AppComponent {
    constructor(adminService, appVersion, platform, splashScreen, statusBar, translate, config, callNumber, alertCtrl, toastCtrl, actionSheetCtrl, logger, loggerMonitor, firebase, gatewayApi, gateway, globalSettingsService, broadCastService, modalService, user, settings, storage, tokenService, userAgentProvider, Environment, communication, modalCtrl, menuCtrl, profile, deeplinks, activatedRoute, router, loadingCtrl, androidPermissions, device, translateService) {
        this.adminService = adminService;
        this.appVersion = appVersion;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.translate = translate;
        this.config = config;
        this.callNumber = callNumber;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.logger = logger;
        this.loggerMonitor = loggerMonitor;
        this.firebase = firebase;
        this.gatewayApi = gatewayApi;
        this.gateway = gateway;
        this.globalSettingsService = globalSettingsService;
        this.broadCastService = broadCastService;
        this.modalService = modalService;
        this.user = user;
        this.settings = settings;
        this.storage = storage;
        this.tokenService = tokenService;
        this.userAgentProvider = userAgentProvider;
        this.Environment = Environment;
        this.communication = communication;
        this.modalCtrl = modalCtrl;
        this.menuCtrl = menuCtrl;
        this.profile = profile;
        this.deeplinks = deeplinks;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.androidPermissions = androidPermissions;
        this.device = device;
        this.translateService = translateService;
        this.showButton = false; // will not show the log out button by default
        this.isDisplaying = false; // toast for forced log outs
        this.init();
    }
    init() {
        // establish our hook into ngx-logger
        this.loggerMonitor.init('ccmobile');
        this.logger.registerMonitor(this.loggerMonitor);
        this.initDeviceVersion();
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.userAgentProvider.getUserAgentInfo();
            this.logger.log(_app_env__WEBPACK_IMPORTED_MODULE_14__["environment"].current_environment);
            this.menuCtrl.swipeGesture(false);
            this.settings.load().finally(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                // Check for any domain changes because app will lose those changes on force kill.
                yield this.storage.get('updatedDomain').then((updatedDomain) => {
                    if (updatedDomain) {
                        _hrs_utility__WEBPACK_IMPORTED_MODULE_25__["BuildUtility"].setDomain(updatedDomain).then((domain) => {
                            this.gatewayApi.url = domain;
                            this.tokenService.url = domain;
                        }).catch((err) => {
                            this.logger.error(err);
                        });
                    }
                });
                if (this.platform.is('cordova')) {
                    const initialSetupComplete = this.settings.getValue('initialSetupComplete');
                    if (!initialSetupComplete) {
                        if (this.platform.is('ios')) {
                            this.firebase.askIOSPushPermission();
                        }
                        else {
                            this.firebase.createAndroidNotificationChannel();
                        }
                        this.settings.setValue('initialSetupComplete', true);
                    }
                    // Firebase account switching is currently an Android only feature.
                    // Due to the stricter nature of Firebase iOS configuration, we are only able to reconfigure Firebase Apps at runtime for Android.
                    // Check the platform for Android and configure Firebase to the account associated with the current domain.
                    if (this.platform.is('android')) {
                        this.firebase.setFirebaseAccount(_hrs_utility__WEBPACK_IMPORTED_MODULE_25__["BuildUtility"].getDomainName() === 'prod' ? 'prod' : 'test').catch((err) => {
                            this.logger.error(err);
                        });
                    }
                }
                this.populateVersionNumber();
                this.initTranslate().then(() => {
                    if (this.platform.is('android')) {
                        this.checkAndroidPermission(['android.permission.POST_NOTIFICATIONS'], 'ANDROID_NOTIFICATION_PERMISSION_TITLE', 'ANDROID_NOTIFICATION_PERMISSION_MESSAGE').then(() => {
                            this.checkAndroidPermission(['android.permission.READ_MEDIA_IMAGES', 'android.permission.READ_MEDIA_VIDEO', 'android.permission.READ_MEDIA_AUDIO'], 'ANDROID_MEDIA_PERMISSION_TITLE', 'ANDROID_MEDIA_PERMISSION_MESSAGE');
                        });
                    }
                });
                this.user.loadFromSettings(this.settings);
                const token = this.settings.getValue('token');
                const refresh = this.settings.getValue('refresh');
                if (token) {
                    this.tokenService.storeTokens({
                        attributes: {
                            token: token,
                            refresh: refresh
                        }
                    });
                }
                // persist login if tokens are still valid
                if (this.user.isLoggedIn()) {
                    this.globalSettingsService.loadGlobalSettings();
                    // patient list
                    this.Environment.getEnvironment().subscribe({
                        next: (res) => {
                            this.logger.log('Successfully loaded Environment.');
                        },
                        error: (err) => {
                            this.logger.error('Failed to get Environment.');
                            this.user.logout();
                        }
                    });
                    if (this.platform.is('cordova')) {
                        this.firebase.initializeFirebase(this.user.data.hrsid);
                    }
                    this.router.navigateByUrl('/patient-list');
                }
                else {
                    // login
                    this.router.navigateByUrl('/welcome');
                }
                if (this.platform.is('cordova')) {
                    // iOS related source code has been completely removed from cordova-plugin-splashscreen
                    // since it has been integrated into the core of the Cordova-iOS 6.x platform.
                    if (this.platform.is('ios')) {
                        navigator.splashscreen.hide();
                    }
                    else {
                        this.splashScreen.hide();
                    }
                }
                this.initReceiveNotificationsListener();
            }));
            this.routeWithDeeplinks();
            this.broadCastService.interceptorLogout.asObservable().subscribe((values) => {
                this.logger.debug('Observing Interceptor', values);
                if (values) {
                    this.loadingCtrl.getTop().then((element) => {
                        if (element) {
                            this.loadingCtrl.dismiss();
                        }
                    });
                    if (!this.isDisplaying && values.error) {
                        this.isDisplaying = true;
                        setTimeout(() => {
                            this.isDisplaying = false;
                        }, 2000);
                        if (values.error.message === 'LOGIN_ERROR.CONCURRENT_SESSIONS') {
                            this.forcedLogoutToast(values.error.message);
                        }
                        else {
                            this.forcedLogoutToast();
                        }
                    }
                    this.user.logout();
                }
            });
        });
    }
    initTranslate() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // English will be used as a fallback when a translation isn't found in the current language
            this.translate.setDefaultLang('en');
            // Apply the user's preferred language
            let language = this.translate.getBrowserLang() || 'en';
            yield Object(rxjs__WEBPACK_IMPORTED_MODULE_26__["firstValueFrom"])(this.translate.use(language));
            moment__WEBPACK_IMPORTED_MODULE_11__["locale"](language);
            this.gatewayApi.language = language;
            this.gateway.language = language;
            this.settings.setValue('language', language).then(() => {
                this.translate.get(['BACK_BUTTON_TEXT']).subscribe((values) => {
                    this.config.set('backButtonText', values.BACK_BUTTON_TEXT);
                });
            });
        });
    }
    /**
    * Display reason for getting a forced 401 or 302 error from the api-interceptor
    * @param message
    */
    forcedLogoutToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let text = message || 'LOGIN_FORCED_LOGOUT';
            let toast = yield this.toastCtrl.create({
                message: this.translate.instant(text),
                cssClass: 'toast-fail',
                position: 'top',
                buttons: [
                    {
                        text: this.translate.instant('CLOSE_BUTTON'),
                        role: 'cancel'
                    }
                ]
            });
            return yield toast.present();
        });
    }
    /**
    * Whenever the user is logged out, redirects to LoginPage
    */
    logoutClicked() {
        this.logger.debug('Logout User');
        this.user.logout();
        this.menuCtrl.close().then(() => {
            this.logger.error('Closed menu ', this.menuCtrl.isOpen());
        });
    }
    openAdmin() {
        this.adminService.openAdmin();
    }
    /**
    * Start support call
    */
    initSupportCall() {
        let supportNumber = '908-280-0420';
        if (_clinician_providers__WEBPACK_IMPORTED_MODULE_15__["Environment"].supportNumber) {
            supportNumber = _clinician_providers__WEBPACK_IMPORTED_MODULE_15__["Environment"].supportNumber;
        }
        if (this.platform.is('ios')) {
            // ios shows a prompt natively
            this.dialPhoneNumber(supportNumber);
        }
        else {
            // android: add a prompt to prevent accidental calling
            this.showSupportCallPrompt(supportNumber);
        }
        this.menuCtrl.close();
    }
    /**
    * Display prompt to start call on android
    * @param supportNumber
    */
    showSupportCallPrompt(supportNumber) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let supportAlert = yield this.alertCtrl.create({
                header: supportNumber,
                buttons: [
                    {
                        text: this.translate.instant('CANCEL_BUTTON'),
                        handler: () => { }
                    },
                    {
                        text: this.translate.instant('DIAL'),
                        handler: () => {
                            this.dialPhoneNumber(supportNumber);
                        }
                    }
                ]
            });
            return yield supportAlert.present();
        });
    }
    /**
    * Dial support
    * @param phoneNumber
    */
    dialPhoneNumber(phoneNumber) {
        this.callNumber.callNumber(phoneNumber, true)
            .then((res) => {
            // maybe we should log when people call support
        })
            .catch((err) => {
            this.dialPhoneNumberFailToast();
        });
    }
    dialPhoneNumberFailToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let dialSuccessToast = yield this.toastCtrl.create({
                message: this.translate.instant('CALL_FAIL'),
                duration: 3000,
                position: 'top'
            });
            return yield dialSuccessToast.present();
        });
    }
    initReceiveNotificationsListener() {
        this.communication.incomingVideoCall$.subscribe((data) => {
            let answer = !!data.wasTapped;
            this.handleIncomingVideoCall(data, answer);
        });
        this.communication.incomingVoiceCall$.subscribe((data) => {
            let answer = !!data.wasTapped;
            this.handleIncomingVoiceCall(data, answer);
        });
        this.communication.newChatMessage$.subscribe((data) => {
            this.handleNewMessage(data);
        });
    }
    handleIncomingVideoCall(data, answer) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let caller = JSON.parse(data.caller);
            const patientName = yield Object(rxjs__WEBPACK_IMPORTED_MODULE_26__["lastValueFrom"])(this.profile.getPatientProfile(caller.hrsid)).then((response) => {
                return response['name'].first + ' ' + response['name'].last;
            }, () => {
                return 'Patient';
            });
            this.communication.videoParticipantId = data.participantId;
            this.communication.updateParticipantStatus('received');
            // if no call is in the foreground, open incoming call
            if (!this.modalService.getModalStatus('VideoPage') && !this.modalService.getModalStatus('VoicePage')) {
                let modal = yield this.modalCtrl.create({
                    component: _communication_video_video_page__WEBPACK_IMPORTED_MODULE_20__["VideoPage"],
                    componentProps: {
                        callData: {
                            patientName: patientName,
                            patientHrsId: caller.hrsid,
                            callId: data.callId,
                            answer: answer,
                            participantId: data.participantId
                        }
                    }
                });
                return modal.present();
            }
            else {
                // if a call is in the foreground, show alert and offer option to switch calls
                this.actionSheetCtrl.create({
                    title: this.translate.instant('NEW_INCOMING_CALL') + patientName,
                    buttons: [
                        {
                            text: this.translate.instant('END_CURRENT_CALL'),
                            handler: () => {
                                // close current video call modal and open new incoming call
                                this.communication.exitVideoCallEnterNew.next();
                                this.communication.exitVoiceCallEnterNew.next();
                                this.handleIncomingVideoCall(data, true);
                            }
                        },
                        {
                            text: this.translate.instant('IGNORE'),
                            handler: () => {
                                this.logger.log('call ignored');
                                // tell comms service we hung up
                                this.communication.updateParticipantStatus('declined');
                            }
                        }
                    ]
                }).then((actionSheet) => {
                    actionSheet.present();
                });
            }
        });
    }
    handleIncomingVoiceCall(data, answer) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let caller = JSON.parse(data.caller);
            const patientName = yield Object(rxjs__WEBPACK_IMPORTED_MODULE_26__["lastValueFrom"])(this.profile.getPatientProfile(caller.hrsid)).then((response) => {
                return response['name'].first + ' ' + response['name'].last;
            }, () => {
                return 'Patient';
            });
            if (!this.modalService.getModalStatus('VideoPage') && !this.modalService.getModalStatus('VoicePage')) {
                const modal = yield this.modalCtrl.create({
                    component: _communication_voice_voice_page__WEBPACK_IMPORTED_MODULE_21__["VoicePage"],
                    componentProps: {
                        callData: {
                            patientName: patientName,
                            patientHrsId: caller.hrsid,
                            callId: data.callid,
                            answer: answer
                        }
                    }
                });
                modal.present();
            }
            else {
                this.actionSheetCtrl.create({
                    title: this.translate.instant('NEW_INCOMING_CALL') + patientName,
                    buttons: [
                        {
                            text: this.translate.instant('END_CURRENT_CALL'),
                            handler: () => {
                                // close current call modal and open new incoming call
                                this.communication.exitVideoCallEnterNew.next();
                                this.communication.exitVoiceCallEnterNew.next();
                                this.handleIncomingVoiceCall(data, true);
                            }
                        },
                        {
                            text: this.translate.instant('IGNORE'),
                            handler: () => {
                                this.logger.log('Voice call ignored');
                            }
                        }
                    ]
                }).then((actionSheet) => {
                    actionSheet.present();
                });
            }
        });
    }
    handleNewMessage(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let caller = JSON.parse(data.caller);
            let modalState = this.modalService.getModalStatus('ChatMessagesModalPage');
            if (data.wasTapped) {
                // new message notification was tapped while the app was in the background
                const modal = yield this.modalCtrl.create({
                    component: _communication_chat_chat_page__WEBPACK_IMPORTED_MODULE_22__["ChatPage"],
                    componentProps: { patient: caller }
                });
                return yield modal.present();
            }
            else {
                if (!modalState || !modalState.status || caller.hrsid !== modalState.patientHrsid) {
                    this.messageData = data;
                    if (modalState) {
                        this.modalState = modalState;
                    }
                    const patientName = yield Object(rxjs__WEBPACK_IMPORTED_MODULE_26__["lastValueFrom"])(this.profile.getPatientProfile(caller.hrsid))
                        .then((response) => {
                        return response['name'].first + ' ' + response['name'].last;
                    }, () => {
                        return 'Patient';
                    });
                    let toast = yield this.toastCtrl.create({
                        message: this.translate.instant('NEW_CHAT_MESSAGE') + patientName,
                        duration: 10000,
                        position: 'top',
                        buttons: [{
                                text: this.translate.instant('VIEW'),
                                handler: () => this.messageClose('close'),
                            }]
                    });
                    return yield toast.present();
                }
                else {
                    // patient chat modal is open, update with incoming message
                    this.communication.getChatNewMessage.next(data);
                }
            }
        });
    }
    messageClose(data) {
        if (data == 'close') {
            if (this.modalState && this.modalState.status) {
                this.communication.exitChatOpenNew.next();
            }
            this.messageData.wasTapped = true;
            this.handleNewMessage(this.messageData);
        }
    }
    populateVersionNumber() {
        if (this.platform.is('cordova')) {
            this.appVersion.getVersionNumber().then((versionNumber) => {
                if (versionNumber) {
                    this.versionNumber = 'v' + versionNumber;
                }
            });
        }
        else {
            this.versionNumber = 'v1.0.0';
        }
    }
    openAddPatientPage() {
        this.closeMenu().then(() => this.router.navigateByUrl('/add-patient'));
    }
    closeMenu() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (yield this.menuCtrl.isOpen()) {
                yield this.menuCtrl.close();
                yield this.menuCtrl.enable(false);
            }
        });
    }
    routeWithDeeplinks() {
        // deeplinks allow navigation from the system browser to our app
        // To test via iOS Safari enter ccmobile:// in the browser and it will launch the app if it is installed
        this.deeplinks.route({
            '/login': _organizational_login_organizational_login_page__WEBPACK_IMPORTED_MODULE_23__["OrganizationalLoginPage"]
        }).subscribe({
            next: (match) => {
                if (match.$link.path === '/login') {
                    this.user.logout().then(() => {
                        let login = () => {
                            if (match.$args && match.$args.auth) {
                                let authData = JSON.parse(atob(match.$args.auth));
                                // This tells the OrganizationalLoginPage that we are logging in so that it can show the spinner if it isn't already
                                this.user.loggingInSSOSubject.next();
                                // Login now. OrganizationalLoginPage is listening to the loggedInSubject to know when this is successful
                                let loginSubscription = this.user.loginWithData(authData).subscribe(() => {
                                    loginSubscription.unsubscribe();
                                });
                            }
                        };
                        if (this.activatedRoute.component !== _organizational_login_organizational_login_page__WEBPACK_IMPORTED_MODULE_23__["OrganizationalLoginPage"]) {
                            // If we were on the welcome page then move forward to OrganizationalLoginPage
                            this.router.navigateByUrl('/organizational-login').then(() => {
                                login();
                            });
                        }
                        else {
                            login();
                        }
                    });
                }
            },
            error: (nomatch) => {
                // nomatch.$link - the full link data
                this.logger.error(`Got a deeplink that didn't match`, JSON.stringify(nomatch));
            }
        });
    }
    close() {
        this.menuCtrl.close();
    }
    checkAndroidPermission(permission, permissionAlertTitle, permissionMessage) {
        return new Promise((resolve, reject) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.getDeviceVersion() > 12) {
                let requiredPermissions = permission;
                let missingPermissions = [];
                for (const requiredPermission of requiredPermissions) {
                    yield this.checkForPermission(requiredPermission).then((result) => {
                        if (!result.hasPermission) {
                            missingPermissions.push(requiredPermission);
                        }
                    });
                }
                if (missingPermissions && missingPermissions.length > 0) {
                    {
                        let alert = yield this.alertCtrl.create({
                            header: this.translateService.instant(permissionAlertTitle),
                            message: this.translateService.instant(permissionMessage),
                            buttons: [
                                {
                                    text: this.translateService.instant('CLOSE_BUTTON'),
                                    handler: () => {
                                        this.androidPermissions.requestPermissions(missingPermissions).then((result) => {
                                            resolve();
                                        }, (error) => {
                                            this.logger.error('Error requesting permission from Android' + error);
                                            reject(new Error(error));
                                        });
                                    }
                                }
                            ]
                        });
                        return yield alert.present();
                    }
                }
                else {
                    resolve();
                }
            }
            else {
                resolve();
            }
        }));
    }
    checkForPermission(permission) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.androidPermissions.checkPermission(permission);
        });
    }
    /**
 * @returns Quering the device version from Device plugin if it is not initialized yet
 */
    getDeviceVersion() {
        if (!this.deviceVersion) {
            this.initDeviceVersion();
        }
        return this.deviceVersion;
    }
    /**
     * Initializing the device version
     */
    initDeviceVersion() {
        let devVersion = Number(this.device.version);
        if (!Number.isNaN(devVersion)) {
            this.deviceVersion = devVersion;
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _clinician_providers__WEBPACK_IMPORTED_MODULE_15__["AdminService"] },
    { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_3__["AppVersion"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_9__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_10__["StatusBar"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Config"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ActionSheetController"] },
    { type: ngx_logger__WEBPACK_IMPORTED_MODULE_5__["NGXLogger"] },
    { type: _hrs_providers__WEBPACK_IMPORTED_MODULE_19__["HRSLoggerMonitor"] },
    { type: _clinician_providers__WEBPACK_IMPORTED_MODULE_15__["FirebaseNotifications"] },
    { type: _hrs_providers__WEBPACK_IMPORTED_MODULE_19__["GatewayApi"] },
    { type: _hrs_gateway__WEBPACK_IMPORTED_MODULE_18__["GatewayService"] },
    { type: _hrs_providers__WEBPACK_IMPORTED_MODULE_19__["GlobalSettingsService"] },
    { type: _hrs_providers__WEBPACK_IMPORTED_MODULE_19__["BroadcastService"] },
    { type: _clinician_providers__WEBPACK_IMPORTED_MODULE_15__["ModalService"] },
    { type: _services_user_user__WEBPACK_IMPORTED_MODULE_17__["User"] },
    { type: _services_settings_settings__WEBPACK_IMPORTED_MODULE_16__["Settings"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_24__["Storage"] },
    { type: _hrs_providers__WEBPACK_IMPORTED_MODULE_19__["TokenService"] },
    { type: _clinician_providers__WEBPACK_IMPORTED_MODULE_15__["UserAgentProvider"] },
    { type: _clinician_providers__WEBPACK_IMPORTED_MODULE_15__["Environment"] },
    { type: _clinician_providers__WEBPACK_IMPORTED_MODULE_15__["CommunicationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["MenuController"] },
    { type: _clinician_providers__WEBPACK_IMPORTED_MODULE_15__["PatientProfileService"] },
    { type: _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_7__["Deeplinks"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_12__["AndroidPermissions"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_13__["Device"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        providers: [_ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_7__["Deeplinks"]],
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_clinician_providers__WEBPACK_IMPORTED_MODULE_15__["AdminService"],
        _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_3__["AppVersion"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"],
        _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_9__["SplashScreen"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_10__["StatusBar"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Config"],
        _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ActionSheetController"],
        ngx_logger__WEBPACK_IMPORTED_MODULE_5__["NGXLogger"],
        _hrs_providers__WEBPACK_IMPORTED_MODULE_19__["HRSLoggerMonitor"],
        _clinician_providers__WEBPACK_IMPORTED_MODULE_15__["FirebaseNotifications"],
        _hrs_providers__WEBPACK_IMPORTED_MODULE_19__["GatewayApi"],
        _hrs_gateway__WEBPACK_IMPORTED_MODULE_18__["GatewayService"],
        _hrs_providers__WEBPACK_IMPORTED_MODULE_19__["GlobalSettingsService"],
        _hrs_providers__WEBPACK_IMPORTED_MODULE_19__["BroadcastService"],
        _clinician_providers__WEBPACK_IMPORTED_MODULE_15__["ModalService"],
        _services_user_user__WEBPACK_IMPORTED_MODULE_17__["User"],
        _services_settings_settings__WEBPACK_IMPORTED_MODULE_16__["Settings"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_24__["Storage"],
        _hrs_providers__WEBPACK_IMPORTED_MODULE_19__["TokenService"],
        _clinician_providers__WEBPACK_IMPORTED_MODULE_15__["UserAgentProvider"],
        _clinician_providers__WEBPACK_IMPORTED_MODULE_15__["Environment"],
        _clinician_providers__WEBPACK_IMPORTED_MODULE_15__["CommunicationService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["MenuController"],
        _clinician_providers__WEBPACK_IMPORTED_MODULE_15__["PatientProfileService"],
        _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_7__["Deeplinks"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"],
        _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_12__["AndroidPermissions"],
        _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_13__["Device"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, provideSettings, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideSettings", function() { return provideSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/dist/index.js");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/deeplinks/ngx */ "./node_modules/@ionic-native/deeplinks/ngx/index.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/dialogs/ngx */ "./node_modules/@ionic-native/dialogs/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_native_ringtones_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/native-ringtones/ngx */ "./node_modules/@ionic-native/native-ringtones/ngx/index.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _ionic_native_zoom_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic-native/zoom/ngx */ "./node_modules/@ionic-native/zoom/ngx/index.js");
/* harmony import */ var _clinician_providers__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @clinician/providers */ "./src/app/services/providers.ts");
/* harmony import */ var _services_user_user__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/user/user */ "./src/app/services/user/user.ts");
/* harmony import */ var _services_settings_settings__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/settings/settings */ "./src/app/services/settings/settings.ts");
/* harmony import */ var _hrs_gateway__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @hrs/gateway */ "../../libs/gateway/index.ts");
/* harmony import */ var _hrs_providers__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @hrs/providers */ "../../libs/providers/providers.ts");
/* harmony import */ var _patient_device_add_device_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./patient/device/add-device.module */ "./src/app/patient/device/add-device.module.ts");
/* harmony import */ var _patient_reset_metrics_reset_metrics_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./patient/reset-metrics/reset-metrics.module */ "./src/app/patient/reset-metrics/reset-metrics.module.ts");
/* harmony import */ var _patient_patient_status_change_patient_status_change_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./patient/patient-status-change/patient-status-change.module */ "./src/app/patient/patient-status-change/patient-status-change.module.ts");
/* harmony import */ var _communication_chat_chat_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./communication/chat/chat.module */ "./src/app/communication/chat/chat.module.ts");
/* harmony import */ var _communication_video_video_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./communication/video/video.module */ "./src/app/communication/video/video.module.ts");
/* harmony import */ var _communication_voice_voice_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./communication/voice/voice.module */ "./src/app/communication/voice/voice.module.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/pipes/pipes.module.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _patient_careplan_careplan_module__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./patient/careplan/careplan.module */ "./src/app/patient/careplan/careplan.module.ts");
/* harmony import */ var _patient_careplan_edit_careplan_edit_careplan_module__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./patient/careplan/edit-careplan/edit-careplan.module */ "./src/app/patient/careplan/edit-careplan/edit-careplan.module.ts");

// Angular / Ionic






// Native Plugins












// NGX





// Services / Components





// Modals



// Communication




// Pipes

// App and Components





// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_20__["TranslateHttpLoader"](http, '../assets/i18n/', '.json');
}
function provideSettings(storage, user) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new _services_settings_settings__WEBPACK_IMPORTED_MODULE_26__["Settings"](storage, {
        option1: true,
        option2: 'Ionitron J. Framework',
        option3: '3',
        option4: 'Hello',
    });
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_38__["AppComponent"]],
        entryComponents: [],
        exports: [],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]],
        imports: [
            _admin_admin_module__WEBPACK_IMPORTED_MODULE_37__["AdminModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot({ mode: 'ios' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_39__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_36__["PipesModule"],
            _patient_reset_metrics_reset_metrics_module__WEBPACK_IMPORTED_MODULE_30__["ResetMetricsPageModule"],
            _patient_device_add_device_module__WEBPACK_IMPORTED_MODULE_29__["AddDevicePageModule"],
            _patient_careplan_careplan_module__WEBPACK_IMPORTED_MODULE_40__["CarePlanPageModule"],
            _patient_careplan_edit_careplan_edit_careplan_module__WEBPACK_IMPORTED_MODULE_41__["EditCareplanModule"],
            _communication_chat_chat_module__WEBPACK_IMPORTED_MODULE_32__["ChatPageModule"],
            _communication_video_video_module__WEBPACK_IMPORTED_MODULE_33__["VideoPageModule"],
            _communication_voice_voice_module__WEBPACK_IMPORTED_MODULE_34__["VoicePageModule"],
            _patient_patient_status_change_patient_status_change_module__WEBPACK_IMPORTED_MODULE_31__["PatientStatusChangeModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateLoader"],
                    useFactory: (createTranslateLoader),
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
                }
            }),
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["IonicStorageModule"].forRoot(),
            ngx_logger__WEBPACK_IMPORTED_MODULE_21__["LoggerModule"].forRoot({ serverLoggingUrl: '/api/logs', level: ngx_logger__WEBPACK_IMPORTED_MODULE_21__["NgxLoggerLevel"].DEBUG, serverLogLevel: ngx_logger__WEBPACK_IMPORTED_MODULE_21__["NgxLoggerLevel"].OFF })
        ],
        providers: [
            _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_7__["AppVersion"],
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_18__["AndroidPermissions"],
            _auth_guard__WEBPACK_IMPORTED_MODULE_35__["AuthGuard"],
            _hrs_providers__WEBPACK_IMPORTED_MODULE_28__["BroadcastService"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_9__["CallNumber"],
            _clinician_providers__WEBPACK_IMPORTED_MODULE_24__["CommunicationService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_22__["CookieService"],
            _clinician_providers__WEBPACK_IMPORTED_MODULE_24__["DataExchangeService"],
            _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_10__["Deeplinks"],
            _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_11__["Device"],
            _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_12__["Dialogs"],
            _clinician_providers__WEBPACK_IMPORTED_MODULE_24__["Environment"],
            _clinician_providers__WEBPACK_IMPORTED_MODULE_24__["FirebaseNotifications"],
            _hrs_providers__WEBPACK_IMPORTED_MODULE_28__["GatewayApi"],
            _hrs_gateway__WEBPACK_IMPORTED_MODULE_27__["GatewayResourceService"],
            _hrs_gateway__WEBPACK_IMPORTED_MODULE_27__["GatewayService"],
            _hrs_providers__WEBPACK_IMPORTED_MODULE_28__["GlobalSettingsService"],
            _hrs_providers__WEBPACK_IMPORTED_MODULE_28__["HRSLoggerMonitor"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_13__["InAppBrowser"],
            _clinician_providers__WEBPACK_IMPORTED_MODULE_24__["ModalService"],
            _ionic_native_native_ringtones_ngx__WEBPACK_IMPORTED_MODULE_14__["NativeRingtones"],
            ngx_logger__WEBPACK_IMPORTED_MODULE_21__["NGXLogger"],
            ngx_logger__WEBPACK_IMPORTED_MODULE_21__["NGXMapperService"],
            ngx_logger__WEBPACK_IMPORTED_MODULE_21__["NGXLoggerHttpService"],
            _clinician_providers__WEBPACK_IMPORTED_MODULE_24__["ReviewedStatusService"],
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_15__["ScreenOrientation"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_17__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_16__["SplashScreen"],
            _clinician_providers__WEBPACK_IMPORTED_MODULE_24__["SurveyDetailsService"],
            _hrs_providers__WEBPACK_IMPORTED_MODULE_28__["TokenService"],
            _services_user_user__WEBPACK_IMPORTED_MODULE_25__["User"],
            _ionic_native_zoom_ngx__WEBPACK_IMPORTED_MODULE_23__["Zoom"],
            { provide: _services_settings_settings__WEBPACK_IMPORTED_MODULE_26__["Settings"], useFactory: provideSettings, deps: [_ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]] },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
                useFactory: function (broadcastService, logger, tokenService) {
                    return new _hrs_providers__WEBPACK_IMPORTED_MODULE_28__["ApiInterceptor"](broadcastService, logger, tokenService);
                },
                multi: true,
                deps: [_hrs_providers__WEBPACK_IMPORTED_MODULE_28__["BroadcastService"], ngx_logger__WEBPACK_IMPORTED_MODULE_21__["NGXLogger"], _hrs_providers__WEBPACK_IMPORTED_MODULE_28__["TokenService"]]
            },
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"] },
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"], useClass: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"] },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_38__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _services_user_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/user/user */ "./src/app/services/user/user.ts");

class AuthGuard {
    constructor(user) {
        this.user = user;
    }
    canActivate() {
        return this.user.isLoggedIn();
    }
}
AuthGuard.ctorParameters = () => [
    { type: _services_user_user__WEBPACK_IMPORTED_MODULE_0__["User"] }
];


/***/ }),

/***/ "./src/app/communication/chat/chat.module.ts":
/*!***************************************************!*\
  !*** ./src/app/communication/chat/chat.module.ts ***!
  \***************************************************/
/*! exports provided: ChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat.page */ "./src/app/communication/chat/chat.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let ChatPageModule = class ChatPageModule {
};
ChatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]
                }
            ]),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
        declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]],
        providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]]
    })
], ChatPageModule);



/***/ }),

/***/ "./src/app/communication/chat/chat.page.ts":
/*!*************************************************!*\
  !*** ./src/app/communication/chat/chat.page.ts ***!
  \*************************************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _clinician_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clinician/providers */ "./src/app/services/providers.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _hrs_utility__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @hrs/utility */ "../../libs/utility/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);











let ChatPage = class ChatPage {
    constructor(communication, loadingCtrl, translateService, navParams, modalCtrl, logger, modalService, alertCtrl, ref, formBuilder) {
        this.communication = communication;
        this.loadingCtrl = loadingCtrl;
        this.translateService = translateService;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.logger = logger;
        this.modalService = modalService;
        this.alertCtrl = alertCtrl;
        this.ref = ref;
        this.formBuilder = formBuilder;
        this.patient = this.navParams.get('patient');
        this.modalService.setModalStatus('ChatMessagesModalPage', true, this.patient.hrsid);
    }
    ngOnInit() {
        this.getTextMessages(this.patient.hrsid);
        this.getMessagesEvent = this.communication.getChatNewMessage$.subscribe(() => {
            this.getTextMessages(this.patient.hrsid, true);
        });
        this.openNewChatEvent = this.communication.exitChatOpenNew$.subscribe(() => {
            this.dismiss();
        });
        this.data = this.formBuilder.group({
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', null)
        });
    }
    ionViewDidLeave() {
        this.stopPolling();
        this.getMessagesEvent.unsubscribe();
        this.openNewChatEvent.unsubscribe();
    }
    /**
     * Gets all of the messages for a particular patient
     * Incoming represents a new chat received via firebase notification while the chat modal is open
     * we don't want to show a loader if a new message is received while the modal is open
     */
    getTextMessages(hrsid, incoming) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!incoming) {
                this.textMessagesLoaded = yield this.loadingCtrl.create({
                    message: this.translateService.instant('LOADING'),
                });
                yield this.textMessagesLoaded.present();
            }
            this.communication.getTextMessages(hrsid).subscribe({
                next: (res) => {
                    this.messages = res;
                    this.ref.detectChanges();
                    if (!incoming) {
                        this.pollGetTexts();
                    }
                },
                error: (err) => {
                    this.handleGetTextMessagesError(err, hrsid, incoming);
                },
                complete: () => {
                    if (!incoming) {
                        this.dismissLoadingAlert();
                    }
                }
            });
        });
    }
    dismissLoadingAlert() {
        this.loadingCtrl.dismiss();
    }
    handleGetTextMessagesError(err, hrsid, incoming) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.logger.error('Error: ', err);
            let alert = yield this.alertCtrl.create({
                header: this.translateService.instant('ERROR_TITLE'),
                message: this.translateService.instant('GET_MESSAGE_ERROR'),
                buttons: [
                    {
                        text: this.translateService.instant('CANCEL_BUTTON'),
                        role: 'cancel',
                        handler: () => { }
                    },
                    {
                        text: this.translateService.instant('RETRY_BUTTON'),
                        handler: () => {
                            this.getTextMessages(hrsid, incoming);
                        }
                    }
                ]
            });
            return yield alert.present();
        });
    }
    /**
     * Poll get chat endpoint
     * If multiple clinicians are chatting with the same patient we want to be sure that everyone receives all new messages
     * this is a temporary fix until we can update firebase to notify all clinicians of any new message to a chat thread
     * We will hit the get chat endpoint every thirty seconds anytime the a chat is in view
     */
    pollGetTexts() {
        const poll = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["timer"])(30000, 30000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(() => this.communication.getTextMessages(this.patient.hrsid)));
        this.poll = poll
            .subscribe((res) => {
            this.polling = true;
            const messages = res;
            if (this.messages.length < messages.length) {
                // the new response has more messages than the previous response
                // add to dom and scroll to bottom
                this.polling = false;
                this.messages = messages;
                this.callScrollFunction();
            }
        });
    }
    stopPolling() {
        if (this.poll) {
            this.poll.unsubscribe();
        }
    }
    /**
     * Convert time and date into a consistent format
     */
    convertTimeAndDate(timestamp) {
        return moment__WEBPACK_IMPORTED_MODULE_10___default.a.unix(parseInt(timestamp) / 1000).format('MM/DD/YYYY h:mm:ss A');
    }
    /**
     * Scrolls to bottom of chat message list
     */
    callScrollFunction() {
        this.content.scrollToBottom(0);
    }
    /**
     * Posts the new message written by the clinician to the patient
     */
    sendTextMessage() {
        // curly chars are replaced to prevent erroring out when saving to DB
        let text = _hrs_utility__WEBPACK_IMPORTED_MODULE_9__["ConvertString"].replaceCurlyChars(this.data.value.message.trim());
        let message = { text: text, type: 'clinician', name: 'You', messageStatus: this.translateService.instant('SENDING'), id: new Date() };
        this.messages.push(message);
        this.callScrollFunction();
        this.communication.sendTextMessage(text, this.patient.hrsid).subscribe({
            next: (res) => {
                message.messageStatus = this.translateService.instant('SENT');
                let updatedMessage = {
                    message: ''
                };
                this.data.setValue(updatedMessage, { emitEvent: true });
            },
            error: (err) => {
                this.logger.error('Error: ', err);
                message.messageStatus = this.translateService.instant('FAILED_TO_SEND');
                this.handleSendTextMessageError(message);
            }
        });
    }
    handleSendTextMessageError(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                header: this.translateService.instant('ERROR_TITLE'),
                message: this.translateService.instant('SEND_MESSAGE_ERROR'),
                buttons: [
                    {
                        text: this.translateService.instant('CANCEL_BUTTON'),
                        role: 'cancel'
                    },
                    {
                        text: this.translateService.instant('RETRY_BUTTON'),
                        handler: () => {
                            this.messages = this.messages.filter((msg) => {
                                return (JSON.stringify(msg) !== JSON.stringify(message));
                            });
                            this.sendTextMessage();
                        },
                    },
                ]
            });
            return yield alert.present();
        });
    }
    dismiss() {
        this.modalCtrl.dismiss();
        this.modalService.setModalStatus('ChatMessagesModalPage', false, null);
    }
};
ChatPage.ctorParameters = () => [
    { type: _clinician_providers__WEBPACK_IMPORTED_MODULE_5__["CommunicationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: ngx_logger__WEBPACK_IMPORTED_MODULE_4__["NGXLogger"] },
    { type: _clinician_providers__WEBPACK_IMPORTED_MODULE_5__["ModalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
], ChatPage.prototype, "content", void 0);
ChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-chat',
        template: __webpack_require__(/*! raw-loader!./chat.page.html */ "./node_modules/raw-loader/index.js!./src/app/communication/chat/chat.page.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_clinician_providers__WEBPACK_IMPORTED_MODULE_5__["CommunicationService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        ngx_logger__WEBPACK_IMPORTED_MODULE_4__["NGXLogger"],
        _clinician_providers__WEBPACK_IMPORTED_MODULE_5__["ModalService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]])
], ChatPage);



/***/ }),

/***/ "./src/app/communication/video/video.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/communication/video/video.module.ts ***!
  \*****************************************************/
/*! exports provided: VideoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPageModule", function() { return VideoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _video_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video.page */ "./src/app/communication/video/video.page.ts");







let VideoPageModule = class VideoPageModule {
};
VideoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _video_page__WEBPACK_IMPORTED_MODULE_6__["VideoPage"]
                }
            ]),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(),
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
        declarations: [_video_page__WEBPACK_IMPORTED_MODULE_6__["VideoPage"]]
    })
], VideoPageModule);



/***/ }),

/***/ "./src/app/communication/video/video.page.ts":
/*!***************************************************!*\
  !*** ./src/app/communication/video/video.page.ts ***!
  \***************************************************/
/*! exports provided: VideoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPage", function() { return VideoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _clinician_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clinician/providers */ "./src/app/services/providers.ts");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/dialogs/ngx */ "./node_modules/@ionic-native/dialogs/ngx/index.js");
/* harmony import */ var _services_user_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/user/user */ "./src/app/services/user/user.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");










let VideoPage = class VideoPage {
    constructor(platform, communication, alertCtrl, loadingCtrl, translateService, navParams, modalCtrl, logger, ref, screenOrientation, dialogs, modalService, user, zoomService) {
        this.platform = platform;
        this.communication = communication;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.translateService = translateService;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.logger = logger;
        this.ref = ref;
        this.screenOrientation = screenOrientation;
        this.dialogs = dialogs;
        this.modalService = modalService;
        this.user = user;
        this.zoomService = zoomService;
        this.stethoscopeActive = false;
        this.faStethoscope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faStethoscope"];
        this.callData = this.navParams.get('callData');
        this.callId = this.callData.callId || '';
        this.modalService.setModalStatus('VideoCallModalPage', true);
        this.userHrsId = this.user.data.hrsid;
    }
    ngOnInit() {
        if (this.platform.is('cordova')) {
            // lock screen in portrait mode
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        }
        // prevent back button from closing modal without ending call
        this.backAction = this.platform.backButton.subscribeWithPriority((1), () => {
            this.dismiss();
        });
        // if the modal is initialized with a callId we are receiving a call, begin ringing
        if (this.callId) {
            this.callStatus = 'RINGING';
        }
        // if left another call to answer, answer once the modal is open
        if (this.callData.answer) {
            this.initializeVideoCall();
        }
        this.initNotificationListeners();
    }
    ngOnDestroy() {
        // removes hardware back button handler
        if (this.backAction)
            this.backAction.unsubscribe();
        if (this.endCallEvent)
            this.endCallEvent.unsubscribe();
        if (this.exitCallEnterNewEvent)
            this.exitCallEnterNewEvent.unsubscribe();
        if (this.callerLeft)
            this.callerLeft.unsubscribe();
        if (this.platform.is('cordova')) {
            this.screenOrientation.unlock();
        }
        if (this.callTimeout) {
            clearTimeout(this.callTimeout);
        }
    }
    /**
     * Subscribe to Comms Service Event notifications
     */
    initNotificationListeners() {
        // the person we we're calling missed or ignored the call
        this.endCallEvent = this.communication.endVideoCall$.subscribe((data) => {
            this.onCallMissed(data);
        });
        // End current call and join incoming call
        // event listener, call in progress, call pending in background -- should be able to remove once native ui is implemented
        this.exitCallEnterNewEvent = this.communication.exitVideoCallEnterNew$.subscribe(() => {
            this.endCall();
        });
        this.callerLeft = this.communication.callerLeft$.subscribe((data) => {
            // if the call has not been answered and the callid's match, end the call - called when the call is still ringing but the caller has hung up
            if (!this.calling && this.callData.callId === data.callId) {
                this.endCall(true, true, true);
            }
        });
    }
    // callback for event listened, call missed or call ignored
    onCallMissed(data) {
        if (data &&
            data.callId == this.callId &&
            (data.action === 'call_unanswered' || data.action === 'call_declined')) {
            const displayStatuses = {
                'call_unanswered': 'CALL_UNAVAILABLE',
                'call_declined': 'CALL_DECLINED'
            };
            if (this.session) {
                // Allow user to retry call if OpenTok.
                this.allowRetryCall(displayStatuses[data.action]);
            }
            else {
                // Because the modal closes after we enter Zoom's call UI, just end the call.
                this.endCall();
            }
        }
    }
    // callback for event listener, call in progress, call pending in background -- should be able to remove once native ui is implemented
    onNewCommunication() {
        this.endCall();
    }
    // callback for event listener, user has left meeting successfully
    onCallLeft() {
        this.communication.updateParticipantStatus('left');
        cordova.plugins.Zoom.removeMeetingLeaveListener();
    }
    /**
     * Toggle button between start call/ end call
     */
    toggleCall() {
        if (this.calling) {
            this.endCall();
        }
        else {
            if (!this.modalClosing) {
                this.initializeVideoCall();
            }
        }
    }
    /**
     * Create a call or accept an incoming call
     */
    initializeVideoCall() {
        this.calling = true;
        this.callStatus = 'CONNECTING';
        this.ref.detectChanges();
        if (this.callId) {
            // incoming call
            this.getVideoCallToken();
        }
        else {
            // starting a call
            this.getCallId();
        }
    }
    /**
     * Creates a call by requesting a callId
     * on success starts a request for the call Token
     */
    getCallId() {
        // tablet rings on success
        this.communication.getVideoCallId(this.userHrsId, this.callData.patientHrsId)
            .subscribe({
            next: (res) => {
                this.callId = res.data.id;
                this.getVideoCallToken();
            },
            error: (err) => {
                this.calling = false;
                this.logger.error('Error: ', err);
                this.errorPlacingCall();
            }
        });
    }
    /**
     *  Requests token, api key, and sessionId for entering the call room
     */
    getVideoCallToken() {
        this.communication.getVideoCallToken(this.callId, this.userHrsId)
            .subscribe({
            next: (res) => {
                const jwtToken = res.data.value;
                this.apiKey = res.data.projectKey;
                this.sessionId = res.data.sessionId;
                this.token = res.data.value;
                this.callData = Object.assign({}, this.callData, res.data);
                this.communication.videoParticipantId = res.data.id;
                if (res.data.provider === 'zoom') {
                    // initialize jwt token before joining the call as per new sdk changes
                    this.zoomService.initWithJWTToken(jwtToken).then((message) => {
                        this.logger.log('Successfully initialized zoom, now will join meeting');
                        this.enterZoomVideoCall(this.callData.sessionId, this.callData.password);
                    }).catch((err) => {
                        this.logger.error('Zoom is still not initialized thus not placing the call' + err);
                    });
                }
                else {
                    this.enterOpenTokVideoCall();
                }
            },
            error: (err) => {
                this.calling = false;
                this.logger.error('Error: ', err);
                this.errorPlacingCall();
            }
        });
    }
    enterZoomVideoCall(meetingNumber, password) {
        // Join meeting once the jwt token gets initialized
        // Note the display name is just in english because we don't know what language the recipient would want to see it in
        this.zoomService.joinMeeting(meetingNumber, password, 'Clinician').then(() => {
            cordova.plugins.Zoom.addMeetingLeaveListener(this.onCallLeft.bind(this), this);
            this.communication.updateParticipantStatus('active');
            // Zoom call was joined successfully. Since the Zoom call opens a separate page, when you end the call
            // there's no reason to still have our video modal still open behind it and have an extra step to close that,
            // so go ahead and close it here.
            setTimeout(() => {
                this.callStatus = 'CALL_ENDED';
                this.calling = false;
                this.dismiss();
            }, 3000);
        }, () => {
            this.callStatus = 'CALL_FAILED';
        });
    }
    /**
     * Enter call and wait for answer event
     * Also handles end call event after the person we are calling accepts
     */
    enterOpenTokVideoCall() {
        if (!this.session) {
            this.resetPublisherFeed();
            this.session = OT.initSession(this.apiKey, this.sessionId);
            this.publisher = OT.initPublisher('videoCallPublisher');
            this.initOpenTokEventListeners();
            this.connectOpenTokSession();
            this.timeoutCall();
        }
        else {
            this.logger.log('Not initializing session again as Open tok session already exists');
        }
    }
    resetPublisherFeed() {
        // When an active call is destroyed, the publisher div is stripped of all classes and stylings.
        // We need to manually add our custom styles.
        const publisherFeed = document.getElementById('videoCallPublisher');
        publisherFeed.classList.add('c_call--view-caller');
        publisherFeed.style.width = '25vw';
        publisherFeed.style.height = '20vh';
        publisherFeed.style.position = 'absolute';
        publisherFeed.style.bottom = '13vh';
        publisherFeed.style.right = '1em';
        publisherFeed.style.zIndex = '1000';
        publisherFeed.style.pointerEvents = 'none';
    }
    timeoutCall() {
        // JIR-9499: Match CC2 functionality that ends the outgoing call attempt after 90s.
        this.callTimeout = setTimeout(() => {
            this.communication.getVideoCallStatus(this.callId).subscribe({
                next: (res) => {
                    const status = res.data.status;
                    const displayStatuses = {
                        'missed': 'CALL_UNAVAILABLE',
                        'declined': 'CALL_DECLINED',
                        'ready': 'CALL_UNAVAILABLE'
                    };
                    // Keep modal up and update UI with new call status and option to retry call.
                    if (displayStatuses[status]) {
                        this.allowRetryCall(displayStatuses[status]);
                    }
                },
                error: (err) => {
                    this.logger.error(err);
                    // End call and dismiss the modal if status can not be verified.
                    if (this.session) { // OT
                        this.endCall();
                    }
                }
            });
        }, 90 * 1000);
    }
    /**
     * End call and update modal to show Unavailable or Declined status and Retry button.
     */
    allowRetryCall(status) {
        if (this.session) { // OT
            this.endCall(false, false);
            OT.updateViews();
        }
        this.callStatus = status;
        this.modalClosing = false;
        this.ref.detectChanges();
    }
    initOpenTokEventListeners() {
        this.session.on({
            streamCreated: (event) => {
                // callee answered
                this.callStatus = 'CALL_CONNECTED';
                this.ref.detectChanges();
                // displays callees stream
                this.session.subscribe(event.stream, 'videoCallSubscriber', { width: '100%', height: '81vh' });
                OT.updateViews();
            },
            streamDestroyed: (event) => {
                // the person the user is calling hung up
                // only happens when the call was answered
                this.endCall();
                this.logger.log(`Stream ${event.stream.name} ended because ${event.reason}`);
                OT.updateViews();
            },
            sessionConnected: (event) => {
                this.session.publish(this.publisher);
                this.communication.updateParticipantStatus('active');
            }
        });
    }
    connectOpenTokSession() {
        this.session.connect(this.token, (error) => {
            if (error) {
                this.logger.error('Error connecting opentok session', error);
            }
        });
    }
    /**
     * End call and clean up
     */
    endCall(dismiss = true, updateStatus = true, callerLeft = false) {
        this.calling = false;
        this.callId = null;
        if (this.session) {
            // end connected calls
            if (updateStatus) {
                this.callStatus = 'CALL_ENDED';
            }
            this.session.disconnect();
            this.session = null;
            this.publisher = null;
            this.callId = null;
            this.apiKey = null;
            this.sessionId = null;
            this.token = null;
            this.callData = {
                patientHrsId: this.callData.patientHrsId,
                patientName: this.callData.patientName
            };
            this.communication.updateParticipantStatus('left');
            this.communication.videoParticipantId = null;
        }
        this.ref.detectChanges();
        if (dismiss) {
            // disable the call button so we don't accidentally start a new call with the modal closed
            this.modalClosing = true;
            this.dismiss(callerLeft);
        }
    }
    /**
     * Dismiss modal
     * prompt user first in the case that they are already on a call
     */
    dismiss(callerLeft = false) {
        if (this.calling) {
            // user tried to close the modal during a call
            this.showCloseModalPrompt();
        }
        else if (this.callStatus === 'RINGING' && !callerLeft) {
            // user exited modal while incoming call was ringing
            this.callStatus = 'CALL_DECLINED';
            this.communication.updateParticipantStatus('declined');
        }
        else {
            // call has ended close modal
            this.modalClosing = true;
            this.modalService.setModalStatus('VideoCallModalPage', false);
            this.modalCtrl.dismiss();
        }
    }
    /**
     * Show alert if call fails
     */
    errorPlacingCall() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.callStatus = 'CALL_FAILED';
            let alert = yield this.alertCtrl.create({
                header: this.translateService.instant('ERROR_TITLE'),
                message: this.translateService.instant('VIDEO_CALL_ERROR'),
                buttons: [
                    {
                        text: this.translateService.instant('CANCEL_BUTTON'),
                        role: 'cancel',
                        handler: () => { }
                    },
                    {
                        text: this.translateService.instant('RETRY_BUTTON'),
                        handler: () => {
                            this.initializeVideoCall();
                        }
                    }
                ]
            });
            return yield alert.present();
        });
    }
    /**
     * Prompt user whether to end call and exit modal or continue call
     */
    showCloseModalPrompt() {
        // native dialog bc ionic alert would not display over video
        this.dialogs.confirm(this.translateService.instant('END_CALL_MESSAGE'), this.translateService.instant('END_CALL_TITLE'), [
            this.translateService.instant('END_CALL'),
            this.translateService.instant('CONTINUE')
        ]).then((e) => {
            // if e is 1 the user clicked End Call
            // e refers to the selections index in the buttonLabels array
            // this index in this case starts at 1
            if (e && e === 1) {
                this.endCall();
            }
        });
    }
    toggleStethoscope() {
        this.stethoscopeActive = !this.stethoscopeActive;
        this.ref.detectChanges();
        if (this.stethoscopeActive && this.session) {
            this.session.signal({
                type: 'stethoscope',
                data: 'on',
            }, (error) => {
                if (error) {
                    this.logger.error('signal error (' + error.code + '): ' + error.message);
                }
                else {
                    this.logger.log('signal sent.');
                }
            });
        }
        else {
            this.session.signal({
                type: 'stethoscope',
                data: 'off',
            }, (error) => {
                if (error) {
                    this.logger.error('signal error (' + error.code + '): ' + error.message);
                }
                else {
                    this.logger.log('signal sent.');
                }
            });
        }
    }
};
VideoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _clinician_providers__WEBPACK_IMPORTED_MODULE_5__["CommunicationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: ngx_logger__WEBPACK_IMPORTED_MODULE_4__["NGXLogger"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__["ScreenOrientation"] },
    { type: _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_7__["Dialogs"] },
    { type: _clinician_providers__WEBPACK_IMPORTED_MODULE_5__["ModalService"] },
    { type: _services_user_user__WEBPACK_IMPORTED_MODULE_8__["User"] },
    { type: _clinician_providers__WEBPACK_IMPORTED_MODULE_5__["ZoomService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
], VideoPage.prototype, "content", void 0);
VideoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-video',
        template: __webpack_require__(/*! raw-loader!./video.page.html */ "./node_modules/raw-loader/index.js!./src/app/communication/video/video.page.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _clinician_providers__WEBPACK_IMPORTED_MODULE_5__["CommunicationService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        ngx_logger__WEBPACK_IMPORTED_MODULE_4__["NGXLogger"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__["ScreenOrientation"],
        _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_7__["Dialogs"],
        _clinician_providers__WEBPACK_IMPORTED_MODULE_5__["ModalService"],
        _services_user_user__WEBPACK_IMPORTED_MODULE_8__["User"],
        _clinician_providers__WEBPACK_IMPORTED_MODULE_5__["ZoomService"]])
], VideoPage);



/***/ }),

/***/ "./src/app/communication/voice/voice.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/communication/voice/voice.module.ts ***!
  \*****************************************************/
/*! exports provided: VoicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoicePageModule", function() { return VoicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _voice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./voice.page */ "./src/app/communication/voice/voice.page.ts");







let VoicePageModule = class VoicePageModule {
};
VoicePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _voice_page__WEBPACK_IMPORTED_MODULE_6__["VoicePage"]
                }
            ]),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild()
        ],
        declarations: [_voice_page__WEBPACK_IMPORTED_MODULE_6__["VoicePage"]]
    })
], VoicePageModule);



/***/ }),

/***/ "./src/app/communication/voice/voice.page.ts":
/*!***************************************************!*\
  !*** ./src/app/communication/voice/voice.page.ts ***!
  \***************************************************/
/*! exports provided: VoicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoicePage", function() { return VoicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _clinician_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clinician/providers */ "./src/app/services/providers.ts");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/dialogs/ngx */ "./node_modules/@ionic-native/dialogs/ngx/index.js");








let VoicePage = class VoicePage {
    constructor(platform, communication, translateService, navParams, modalCtrl, logger, screenOrientation, alertCtrl, modalService, ref, dialogs) {
        this.platform = platform;
        this.communication = communication;
        this.translateService = translateService;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.logger = logger;
        this.screenOrientation = screenOrientation;
        this.alertCtrl = alertCtrl;
        this.modalService = modalService;
        this.ref = ref;
        this.dialogs = dialogs;
        this.calling = false;
        this.callData = this.navParams.get('callData');
        this.modalService.setModalStatus('VoicePage', true);
    }
    ngOnInit() {
        if (this.platform.is('cordova')) {
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        }
        // add handler so modal isn't closed accidentally during a call by the hardware back button
        this.backAction = this.platform.backButton.subscribeWithPriority((1), () => {
            this.dismiss();
        });
        // incoming call, show ring status
        if (this.callData.callId) {
            this.callStatus = 'RINGING';
        }
        // tapped with app in background
        if (this.callData.answer) {
            this.initializeVoiceCall();
        }
        this.initNotificationListeners();
    }
    ngOnDestroy() {
        if (this.callerLeft)
            this.callerLeft.unsubscribe();
    }
    ionViewDidLeave() {
        // removes hardware back button handler
        this.backAction.unsubscribe();
        // unsubscribe from listeners
        this.endCallEvent.unsubscribe();
        this.exitCallEnterNewEvent.unsubscribe();
        if (this.platform.is('cordova')) {
            this.screenOrientation.unlock();
        }
    }
    initNotificationListeners() {
        // the person we we're calling missed or ignored the call
        this.endCallEvent = this.communication.endVoiceCall$.subscribe((data) => {
            if (data &&
                (data.action === 'call_unanswered' || data.action === 'call_declined')) {
                this.endCall();
            }
        });
        this.callerLeft = this.communication.callerLeft$.subscribe((data) => {
            // if the call has not been answered and the callid's match, end the call - called when the call is still ringing but the caller has hung up
            if (!this.calling && data.callid === this.callData.callId) {
                this.endCall();
            }
        });
        // End current call and join incoming call
        this.exitCallEnterNewEvent = this.communication.exitVoiceCallEnterNew$.subscribe(() => {
            this.endCall();
        });
    }
    /**
     *  Toggle button from place call to end call
     */
    toggleCall() {
        if (this.calling) {
            this.endCall();
        }
        else {
            if (!this.modalClosing) {
                this.initializeVoiceCall();
            }
        }
    }
    /**
     * Start voice call with the patient
     */
    initializeVoiceCall() {
        this.calling = true;
        this.callStatus = 'CONNECTING';
        this.ref.detectChanges();
        if (this.callData.callId) {
            this.acceptIncomingCall();
        }
        else {
            this.initializeOutgoingCall();
        }
    }
    /**
     * Begins outgoing call
     */
    initializeOutgoingCall() {
        this.communication.initializeOutgoingVoiceCall(this.callData.patientHrsId).subscribe({
            next: (res) => {
                this.callData = res;
                this.connectCall(res);
            },
            error: (err) => {
                this.calling = false;
                this.callStatus = 'CALL_FAILED';
                this.ref.detectChanges();
                this.logger.error('Error: ', err);
            }
        });
    }
    /**
     * Get incoming voice call token
     */
    acceptIncomingCall() {
        this.communication.acceptIncomingVoiceCall(this.callData.callId).subscribe({
            next: (res) => {
                const data = { callid: this.callData.callId, access: res.access };
                this.connectCall(data);
            },
            error: (err) => {
                this.calling = false;
                this.callStatus = 'CALL_FAILED';
                this.ref.detectChanges();
                this.logger.error('Failed to obtain call token');
            }
        });
    }
    /**
     * Connect to voice call
     * @param data
     */
    connectCall(data) {
        let _this = this;
        this.callStatus = 'CALL_CONNECTED';
        Twilio.TwilioVoiceClient.onClientInitialized(() => {
            this.logger.log('Twilio client initialized.');
            let twilioParams = {
                'To': 'conference:' + data.callid,
                'calltype': 'startcall',
            };
            Twilio.TwilioVoiceClient.call(data.access, twilioParams);
        });
        Twilio.TwilioVoiceClient.initialize(data.access);
        // Handle Errors
        Twilio.TwilioVoiceClient.onError((err) => {
            setTimeout(() => {
                _this.calling = false;
                _this.callStatus = 'CALL_FAILED';
                _this.logger.error('Failed (' + err.message + ')');
                _this.ref.detectChanges();
            }, 1000); // to ensure that error is not overwritten by disconnect
        });
        // Handle Call Connection
        Twilio.TwilioVoiceClient.onCallDidConnect((call) => {
            this.logger.log('Successfully established call');
            setTimeout(() => {
                _this.callStatus = 'CALL_CONNECTED';
                _this.ref.detectChanges();
            }, 0);
        });
        // Handle Call Disconnect
        Twilio.TwilioVoiceClient.onCallDidDisconnect((call) => {
            this.logger.log('Call Ended');
            setTimeout(() => {
                _this.calling = false;
                _this.callStatus = 'CALL_ENDED';
                _this.dismiss();
                _this.ref.detectChanges();
            }, 0);
        });
        Twilio.TwilioVoiceClient.onCallInviteReceived(() => {
            setTimeout(() => {
                _this.calling = true;
                _this.callStatus = 'CALL_CONNECTED';
                _this.ref.detectChanges();
            }, 0);
        });
    }
    /**
     * Stop voice call with the patient
     */
    endCall() {
        if (this.platform.is('cordova')) {
            Twilio.TwilioVoiceClient.disconnect();
        }
        this.callStatus = 'CALL_ENDED';
        this.calling = false;
        this.communication.voiceCallLeft(this.callData.callid);
        this.dismiss();
    }
    dismiss() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.calling) {
                // native dialog bc ionic alert would not display over video
                this.dialogs.confirm(this.translateService.instant('END_CALL_MESSAGE'), this.translateService.instant('END_CALL_TITLE'), [
                    this.translateService.instant('END_CALL'),
                    this.translateService.instant('CONTINUE')
                ]).then((e) => {
                    // if e is 1 the user clicked End Call
                    // e refers to the selections index in the buttonLabels array
                    // this index in this case starts at 1
                    if (e && e === 1) {
                        this.endCall();
                    }
                });
            }
            else {
                this.modalService.setModalStatus('VoicePage', false);
                this.modalClosing = true;
                this.modalCtrl.dismiss();
            }
        });
    }
};
VoicePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _clinician_providers__WEBPACK_IMPORTED_MODULE_5__["CommunicationService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: ngx_logger__WEBPACK_IMPORTED_MODULE_4__["NGXLogger"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__["ScreenOrientation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _clinician_providers__WEBPACK_IMPORTED_MODULE_5__["ModalService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_7__["Dialogs"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
], VoicePage.prototype, "content", void 0);
VoicePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-voice',
        template: __webpack_require__(/*! raw-loader!./voice.page.html */ "./node_modules/raw-loader/index.js!./src/app/communication/voice/voice.page.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _clinician_providers__WEBPACK_IMPORTED_MODULE_5__["CommunicationService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        ngx_logger__WEBPACK_IMPORTED_MODULE_4__["NGXLogger"],
        _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__["ScreenOrientation"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _clinician_providers__WEBPACK_IMPORTED_MODULE_5__["ModalService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_7__["Dialogs"]])
], VoicePage);



/***/ }),

/***/ "./src/app/enums/activation-status.enum.ts":
/*!*************************************************!*\
  !*** ./src/app/enums/activation-status.enum.ts ***!
  \*************************************************/
/*! exports provided: ActivationStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivationStatus", function() { return ActivationStatus; });
var ActivationStatus;
(function (ActivationStatus) {
    ActivationStatus["ActionDeactivate"] = "deactivate";
    ActivationStatus["ActionDischarge"] = "discharge";
    ActivationStatus["ActionUnDischarge"] = "undischarge";
    ActivationStatus["ActionReactivate"] = "reactivate";
    ActivationStatus["ActionResume"] = "resume";
    ActivationStatus["ActionPause"] = "pause";
    ActivationStatus["StatusActivated"] = "activated";
    ActivationStatus["StatusDeactivated"] = "deactivated";
    ActivationStatus["StatusPreActivated"] = "preactivated";
    ActivationStatus["StatusPaused"] = "paused";
    ActivationStatus["StatusDischarged"] = "discharged";
})(ActivationStatus || (ActivationStatus = {}));


/***/ }),

/***/ "./src/app/enums/admin-settings.enum.ts":
/*!**********************************************!*\
  !*** ./src/app/enums/admin-settings.enum.ts ***!
  \**********************************************/
/*! exports provided: AdminSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSettings", function() { return AdminSettings; });
var AdminSettings;
(function (AdminSettings) {
    AdminSettings["WIFI"] = "ADMIN_WIFI_SETTINGS";
    AdminSettings["KIOSK"] = "ADMIN_KIOSK_SETTINGS";
    AdminSettings["DOMAIN"] = "ADMIN_DOMAIN_SETTINGS";
    AdminSettings["FIREBASE"] = "ADMIN_FIREBASE_SETTINGS";
    AdminSettings["DEVICE"] = "ADMIN_DEVICE_SETTINGS";
    AdminSettings["REGISTRATION"] = "ADMIN_REGISTRATION_SETTINGS";
    AdminSettings["SOFTWAREUPDATE"] = "ADMIN_SOFTWAREUPDATE_SETTINGS";
})(AdminSettings || (AdminSettings = {}));


/***/ }),

/***/ "./src/app/enums/index.ts":
/*!********************************!*\
  !*** ./src/app/enums/index.ts ***!
  \********************************/
/*! exports provided: AdminSettings, ActivationStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_settings_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-settings.enum */ "./src/app/enums/admin-settings.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdminSettings", function() { return _admin_settings_enum__WEBPACK_IMPORTED_MODULE_0__["AdminSettings"]; });

/* harmony import */ var _activation_status_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activation-status.enum */ "./src/app/enums/activation-status.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivationStatus", function() { return _activation_status_enum__WEBPACK_IMPORTED_MODULE_1__["ActivationStatus"]; });





/***/ }),

/***/ "./src/app/organizational-login/organizational-login.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/organizational-login/organizational-login.page.ts ***!
  \*******************************************************************/
/*! exports provided: OrganizationalLoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationalLoginPage", function() { return OrganizationalLoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _services_user_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user/user */ "./src/app/services/user/user.ts");
/* harmony import */ var _app_env__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/env */ "../../libs/environments/environment");
/* harmony import */ var _hrs_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @hrs/providers */ "../../libs/providers/providers.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");












let OrganizationalLoginPage = class OrganizationalLoginPage {
    constructor(browser, user, toastCtrl, translateService, logger, gatewayApi, router) {
        this.browser = browser;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.logger = logger;
        this.gatewayApi = gatewayApi;
        this.router = router;
        this.translateService.get('ORGANIZATIONAL_LOGIN.EMAIL_LOOKUP_ERROR').subscribe((value) => {
            this.emailLookupErrorString = value;
        });
        this.translateService.get('LOGIN_ERROR').subscribe((value) => {
            this.loginErrorString = value;
        });
        this.translateService.get('LOGIN_SUCCESS').subscribe((value) => {
            this.loginSuccessString = value;
        });
        this.loggingInSSOSubscription = this.user.loggingInSSOSubject.subscribe(() => {
            this.loggingIn = true;
        });
        this.loggedInSubscription = this.user.loginResultSubject.subscribe((success) => {
            let toastMessage = this.loginSuccessString;
            if (success) {
                if (this.user.data.type !== 'clinician') {
                    toastMessage = this.loginErrorString;
                }
                else {
                    this.router.navigateByUrl('');
                }
            }
            else {
                toastMessage = this.loginErrorString;
            }
            this.loggingIn = false;
            this.viewToast(toastMessage, 3000);
        });
    }
    ngOnDestroy() {
        this.loggingInSSOSubscription.unsubscribe();
        this.loggedInSubscription.unsubscribe();
    }
    viewToast(message, time) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: message,
                duration: time,
                buttons: [
                    {
                        text: this.translateService.instant('CLOSE_BUTTON'),
                        role: 'cancel'
                    }
                ],
                position: 'top'
            });
            return yield toast.present();
        });
    }
    doLogin() {
        this.loggingIn = true;
        let showEmailLookupError = () => this.viewToast(this.emailLookupErrorString, 5000);
        this.gatewayApi.post('samlemail', { data: { email: this.email } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])((res) => {
            if (res.data.environment) {
                // Open browser to the user organization's login page
                let url = `https://${res.data.environment}.auth.${_app_env__WEBPACK_IMPORTED_MODULE_7__["environment"].HRS_DOMAIN}/login?mobile=true`;
                this.browser.create(url, '_system', 'location=no,clearsessioncache=yes,clearcache=yes');
                // Set loggingIn to false because if they fail to login via their organization's login page in the browser,
                // they can try again from our app. We don't receive any event indicating that they failed there.
                this.loggingIn = false;
                // After they successfully login in the browser, it will redirect back to our app using the deeplink functionality
                // in app.component, login to our API, and inform this page to navigate to the MainPage via loggedInSubscription.
            }
            else {
                showEmailLookupError();
                this.loggingIn = false;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["catchError"])(() => {
            showEmailLookupError();
            this.loggingIn = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])({});
        })).subscribe();
    }
};
OrganizationalLoginPage.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"] },
    { type: _services_user_user__WEBPACK_IMPORTED_MODULE_6__["User"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: ngx_logger__WEBPACK_IMPORTED_MODULE_5__["NGXLogger"] },
    { type: _hrs_providers__WEBPACK_IMPORTED_MODULE_8__["GatewayApi"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }
];
OrganizationalLoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-organizational-login',
        template: __webpack_require__(/*! raw-loader!./organizational-login.page.html */ "./node_modules/raw-loader/index.js!./src/app/organizational-login/organizational-login.page.html"),
        providers: [ngx_logger__WEBPACK_IMPORTED_MODULE_5__["NGXLogger"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"],
        _services_user_user__WEBPACK_IMPORTED_MODULE_6__["User"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
        ngx_logger__WEBPACK_IMPORTED_MODULE_5__["NGXLogger"],
        _hrs_providers__WEBPACK_IMPORTED_MODULE_8__["GatewayApi"],
        _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]])
], OrganizationalLoginPage);



/***/ }),

/***/ "./src/app/patient/careplan/careplan.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/patient/careplan/careplan.module.ts ***!
  \*****************************************************/
/*! exports provided: CarePlanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarePlanPageModule", function() { return CarePlanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _careplan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./careplan.page */ "./src/app/patient/careplan/careplan.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let CarePlanPageModule = class CarePlanPageModule {
};
CarePlanPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _careplan_page__WEBPACK_IMPORTED_MODULE_6__["CareplanPage"]
                }
            ]),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
        declarations: [_careplan_page__WEBPACK_IMPORTED_MODULE_6__["CareplanPage"]],
    })
], CarePlanPageModule);



/***/ }),

/***/ "./src/app/patient/careplan/careplan.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/patient/careplan/careplan.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".careplan-page .c_card .c_card--header {\n  padding: 0.6em;\n  font-size: 1.8em;\n  height: 2.3em; }\n\n.careplan-page .c_card .c_card--content {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: .4em 1em 0 1em;\n  margin-bottom: .5em; }\n\n.careplan-page .c_card .c_card--content .c_careplan--badge {\n    margin: .2em;\n    padding: .4em;\n    font-size: 1em;\n    font-weight: 600;\n    border-radius: .2em;\n    background-color: var(--color-accent); }\n\n.careplan-page .c_card .c_card--content .c_careplan--no_content {\n    --border-color: transparent;\n    margin: auto;\n    height: 1.8em;\n    font-weight: 400; }\n\n.careplan-page .c_card .c_button-center {\n  --background: var(--color-primary);\n  height: 2.5em;\n  width: -moz-min-content;\n  width: min-content;\n  margin: 0.2em auto 1em auto;\n  text-transform: capitalize; }\n\n.careplan-page .c_careplan--notice {\n  display: flex;\n  flex-direction: row;\n  padding: .7em .4em;\n  font-size: 1em; }\n\n.careplan-page .c_careplan--notice .c_careplan--notice_icon {\n    content: url(/../../../assets/icon/icon-info.svg);\n    font-size: 2em;\n    height: .5em;\n    margin-right: .2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnViaGF2c2F4ZW5hL0RvY3VtZW50cy9JbXBldHVzX1Byb2plY3RzL0FuZ3VsYXJfTW9ub3JlcG9fR2l0TGFiX0NvcHkvYW5ndWxhci1tb25vcmVwby9hcHBzL21vYmlsZS1jbGluaWNpYW4vc3JjL2FwcC9wYXRpZW50L2NhcmVwbGFuL2NhcmVwbGFuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUdZLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsYUFBYSxFQUFBOztBQUx6QjtFQVNZLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBZC9CO0lBaUJnQixZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHFDQUFxQyxFQUFBOztBQXRCckQ7SUEwQmdCLDJCQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0IsRUFBQTs7QUE3QmhDO0VBa0NZLGtDQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLDBCQUEwQixFQUFBOztBQXRDdEM7RUEyQ1EsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFFbEIsY0FBYyxFQUFBOztBQS9DdEI7SUFrRFksaURBQWlEO0lBQ2pELGNBQWM7SUFDZCxZQUFZO0lBQ1osa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYXRpZW50L2NhcmVwbGFuL2NhcmVwbGFuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi90aGVtZS92YXJpYWJsZXNcIjtcblxuLmNhcmVwbGFuLXBhZ2Uge1xuICAgIC5jX2NhcmQge1xuICAgICAgICAuY19jYXJkLS1oZWFkZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMC42ZW07XG4gICAgICAgICAgICBmb250LXNpemU6IDEuOGVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAyLjNlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jX2NhcmQtLWNvbnRlbnQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogLjRlbSAxZW0gMCAxZW07XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xuXG4gICAgICAgICAgICAuY19jYXJlcGxhbi0tYmFkZ2Uge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogLjJlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAuNGVtO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjJlbTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY19jYXJlcGxhbi0tbm9fY29udGVudCB7XG4gICAgICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuOGVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY19idXR0b24tY2VudGVyIHtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICBoZWlnaHQ6IDIuNWVtO1xuICAgICAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgICAgICAgICAgbWFyZ2luOiAwLjJlbSBhdXRvIDFlbSBhdXRvO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY19jYXJlcGxhbi0tbm90aWNlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgcGFkZGluZzogLjdlbSAuNGVtO1xuICAgICAgICAvL2hlaWdodDogMy43ZW07IC8vIHRleHQgd2FzIGdldHRpbmcgY3V0IG9mZiBvbiBuYXJyb3dlciBwaG9uZXNcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG5cbiAgICAgICAgLmNfY2FyZXBsYW4tLW5vdGljZV9pY29uIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IHVybCgvLi4vLi4vLi4vYXNzZXRzL2ljb24vaWNvbi1pbmZvLnN2Zyk7XG4gICAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgICAgIGhlaWdodDogLjVlbTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLjJlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/patient/careplan/careplan.page.ts":
/*!***************************************************!*\
  !*** ./src/app/patient/careplan/careplan.page.ts ***!
  \***************************************************/
/*! exports provided: CareplanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareplanPage", function() { return CareplanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_patientProfile_careplan_careplan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/patientProfile/careplan/careplan.service */ "./src/app/services/patientProfile/careplan/careplan.service.ts");
/* harmony import */ var _clinician_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clinician/providers */ "./src/app/services/providers.ts");
/* harmony import */ var _edit_careplan_edit_careplan_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-careplan/edit-careplan.page */ "./src/app/patient/careplan/edit-careplan/edit-careplan.page.ts");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm/operators/index.js");







// observables


let CareplanPage = class CareplanPage {
    constructor(carePlan, logger, modalCtrl, modalService, navParams) {
        this.carePlan = carePlan;
        this.logger = logger;
        this.modalCtrl = modalCtrl;
        this.modalService = modalService;
        this.navParams = navParams;
        this.modules = {};
        this.presets = {};
        this.activityReminders = {};
        this.surveyReminders = {};
        this.weightReminders = {};
        this.patient = this.navParams.get('patient');
        this.modalService.setModalStatus('CarePlanPage', true, this.patient.hrsid);
    }
    ngOnInit() {
        this.loadPatientCareplan();
    }
    loadPatientCareplan() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])([this.carePlan.getEnvPresets().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(error))),
            this.carePlan.getPatientModules().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(error))),
            this.carePlan.getPatientModulesWithReminders(this.patient.hrsid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(error)))]).subscribe(([presetsRes, modulesRes, remindersRes]) => {
            this.parseCareplanResponse(presetsRes.data, modulesRes.data);
            this.populateActiveItems('presets');
            this.getModulesWithReminders(remindersRes);
        });
    }
    parseCareplanResponse(presetsResponse, modulesResponse) {
        const careplanSettings = [...Object.values(presetsResponse), ...Object.values(modulesResponse)];
        const patientPresets = this.navParams.get('activePresets');
        const patientModules = this.navParams.get('activeModules');
        careplanSettings.forEach((item) => {
            let role = item['resourceType'];
            let isModules = role === 'modules';
            let settings = isModules ? patientModules : patientPresets;
            let key = isModules ? item['attributes']['shortname'] : item['id'];
            // Assign preset and module objects accounting for variations in naming schemes
            this[role][key] = {
                item: item,
                selected: isModules ? settings.includes(key) : settings.includes(item['attributes'].name)
            };
        });
    }
    openEditCarePlanModal(isModules) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const careplanSettings = isModules ? this.modules : this.presets;
            const keys = Object.keys(careplanSettings);
            const modal = yield this.modalCtrl.create({
                component: _edit_careplan_edit_careplan_page__WEBPACK_IMPORTED_MODULE_5__["EditCareplanPage"],
                componentProps: { careplanSettings, keys, isModules }
            });
            modal.onDidDismiss().then(({ data }) => {
                if (data === undefined) {
                    this.hasChanges = false;
                    this.logger.debug(data, 'data is undefined');
                }
                else if (data.updatedItems.length) {
                    this.hasChanges = true;
                    this.updateCarePlanSettings(data.updatedItems, data.role);
                    const modules = this.assemblePayload();
                    this.carePlan.savePatientModuleInfo(this.patient.hrsid, modules, this.activityReminders, this.surveyReminders, this.weightReminders, this.medicationReminders).subscribe((res) => {
                        if (res) {
                            this.logger.log('Care Plan settings saved: ', res);
                        }
                        else {
                            this.logger.warn('Unable to save Care Plan settings: ', res);
                        }
                    });
                }
                else {
                    this.hasChanges = false;
                    this.logger.info('No changes made');
                }
            });
            yield modal.present();
        });
    }
    getModulesWithReminders(remindersRes) {
        const patientmodule = remindersRes['data'].patientmoduleinfo;
        if (!patientmodule.activityreminders) {
            this.activityReminders.window = '-';
            this.activityReminders.time = 20;
        }
        else {
            this.activityReminders.window = '-';
            this.activityReminders.time = 20;
        }
        if (!patientmodule.surveyreminders) {
            this.surveyReminders.window = '60';
            this.surveyReminders.time = 600;
        }
        else {
            this.surveyReminders.window = patientmodule.surveyreminders.window;
            this.surveyReminders.time = this.calculateHoursAndMinutes(patientmodule.surveyreminders);
        }
        if (!patientmodule.weightreminders) {
            this.weightReminders.window = '60';
            this.weightReminders.time = 540;
        }
        else {
            this.weightReminders.window = patientmodule.weightreminders.window;
            this.weightReminders.time = this.calculateHoursAndMinutes(patientmodule.weightreminders);
        }
        if (patientmodule.medicationreminders.length !== 0) {
            this.medicationReminders = patientmodule.medicationreminders;
            // The GET response sends "times" instead of time - annoyingly inconsistent
            for (let i = 0; i < this.medicationReminders.length; i++) {
                this.medicationReminders[i].time = this.medicationReminders[i]['times'];
            }
            for (let i = 0; i < this.medicationReminders.length; i++) {
                if (this.medicationReminders[i].time !== 'PRN') {
                    this.medicationReminders[i].time = this.calculateMedicationHoursAndMinutes(String(this.medicationReminders[i].time));
                }
                else {
                    this.medicationReminders[i].window = '30';
                }
            }
        }
    }
    calculateHoursAndMinutes(reminderDetail) {
        if (reminderDetail.ampm === 'PM') {
            return (parseInt(reminderDetail.hours) + 12) * 60 + parseInt(reminderDetail.minutes);
        }
        else {
            return parseInt(reminderDetail.hours) * 60 + parseInt(reminderDetail.minutes);
        }
    }
    calculateMedicationHoursAndMinutes(reminderDetail) {
        // It doesn't return an "AMPM" key like the others do
        let splitReminderTimes = reminderDetail.match(/[a-z]+|[^a-z]+/gi);
        let splitHourAndMinutes = splitReminderTimes[0].split(/\s*(?:\bas\b|:)\s*/);
        let hours = splitHourAndMinutes[0];
        let minutes = splitHourAndMinutes[1];
        if (splitReminderTimes[1] === 'PM') {
            return (parseInt(hours) + 12) * 60 + parseInt(minutes);
        }
        else {
            return parseInt(hours) * 60 + parseInt(minutes);
        }
    }
    updateCarePlanSettings(updatedItems, roleUpdated) {
        updatedItems.forEach((item) => {
            this[roleUpdated][item[0]].selected = item[1].selected;
            if (roleUpdated === 'presets' && item[1].selected) {
                // Enable related modules for toggled presets
                this.enablePresetModules(item);
            }
        });
        this.populateActiveItems('presets');
        this.populateActiveItems('modules');
    }
    enablePresetModules(preset) {
        const key = preset[0];
        const status = preset[1].selected;
        const relationships = this.presets[key].item['relationships'].modules.data;
        if (status) {
            relationships.forEach((rel) => {
                let mod = Object.values(this.modules).filter((mod) => mod['item'].id === rel.id)[0];
                this.modules[mod['item'].attributes['shortname']].selected = true;
            });
        }
    }
    populateActiveItems(role) {
        const items = [];
        let capName = role.replace(/(p|m)/, (match) => match.toUpperCase());
        for (let key in this[role]) {
            if (this[role].hasOwnProperty(key)) {
                let name = role === 'modules' ? this[role][key].item.attributes['shortname'] : this[role][key].item.id;
                if (this[role][key].selected)
                    items.push(name);
            }
        }
        this['active' + capName] = items;
        return items;
    }
    assemblePayload() {
        const modules = this.activeModules.filter((module) => this.modules[module].selected);
        const presets = this.activePresets.filter((preset) => this.presets[preset].selected);
        return modules.concat(presets);
    }
    dismiss() {
        this.modalCtrl.dismiss({ modules: this.modules, presets: this.presets, hasChanges: this.hasChanges });
        this.modalService.setModalStatus('CarePlanPage', false, null);
    }
};
CareplanPage.ctorParameters = () => [
    { type: _services_patientProfile_careplan_careplan_service__WEBPACK_IMPORTED_MODULE_3__["CareplanService"] },
    { type: ngx_logger__WEBPACK_IMPORTED_MODULE_6__["NGXLogger"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _clinician_providers__WEBPACK_IMPORTED_MODULE_4__["ModalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] }
];
CareplanPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'careplan-page',
        template: __webpack_require__(/*! raw-loader!./careplan.page.html */ "./node_modules/raw-loader/index.js!./src/app/patient/careplan/careplan.page.html"),
        styles: [__webpack_require__(/*! ./careplan.page.scss */ "./src/app/patient/careplan/careplan.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_patientProfile_careplan_careplan_service__WEBPACK_IMPORTED_MODULE_3__["CareplanService"],
        ngx_logger__WEBPACK_IMPORTED_MODULE_6__["NGXLogger"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _clinician_providers__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
], CareplanPage);



/***/ }),

/***/ "./src/app/patient/careplan/edit-careplan/edit-careplan.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/patient/careplan/edit-careplan/edit-careplan.module.ts ***!
  \************************************************************************/
/*! exports provided: EditCareplanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCareplanModule", function() { return EditCareplanModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _edit_careplan_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-careplan.page */ "./src/app/patient/careplan/edit-careplan/edit-careplan.page.ts");








let EditCareplanModule = class EditCareplanModule {
};
EditCareplanModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _edit_careplan_page__WEBPACK_IMPORTED_MODULE_7__["EditCareplanPage"]
                }
            ]),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
        declarations: [_edit_careplan_page__WEBPACK_IMPORTED_MODULE_7__["EditCareplanPage"]],
        providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]
    })
], EditCareplanModule);



/***/ }),

/***/ "./src/app/patient/careplan/edit-careplan/edit-careplan.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/patient/careplan/edit-careplan/edit-careplan.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ######################################################################################### %\nOverride Ionic :host Background Color \n% ######################################################################################### */\n/* ######################################################################################### %\nOverride Ionic :host opacity (Ionic 5+ only - wait to use until after the ionic 5 migration is complete)\n% ######################################################################################### */\n/* ######################################################################################### %\nOverride Ionic :host Text color\n% ######################################################################################### */\n.edit-careplan-page .c_careplan--list {\n  margin-bottom: 85px; }\n.edit-careplan-page .c_careplan--list .c_careplan--toggle {\n    --border-color: transparent;\n    display: flex;\n    align-items: center;\n    height: 2.6em;\n    width: 95%;\n    margin: .6em;\n    border-radius: 5em;\n    border: 1px solid black; }\n.edit-careplan-page .c_careplan--list .c_careplan--toggle .c_careplan--name {\n      flex-basis: 80%; }\n.edit-careplan-page .c_careplan--list .c_careplan--toggle .is-radio {\n      --background: var(--white);\n      --color: var(--color-careplan-selected);\n      --background-checked: var(--white);\n      --checkmark-color: var(--color-careplan-selected);\n      --border-color-checked: transparent;\n      --border-color: black;\n      --border-width: 0.2em;\n      height: 1.9em;\n      width: 1.9em;\n      margin-right: 0; }\n.edit-careplan-page .c_careplan--list .c_careplan--toggle.is-selected {\n      /* @include this mixin to an ion element to override :host shadow-DOM colors:\n        .example-class {\n            @include u_ion-override-host-background-color;\n            --override-background-color: [ASSIGN DESIRED COLOR VALUE];\n        }\n    */\n      --override-background-color: transparent;\n      --background-activated: var(--override-background-color);\n      --background-focused: var(--override-background-color);\n      --background-hover: var(--override-background-color);\n      --background: var(--override-background-color);\n      background: var(--override-background-color);\n      --override-background-color: var(--color-careplan-selected);\n      border-color: transparent;\n      border-width: 0; }\n.edit-careplan-page .c_careplan--list .c_careplan--toggle.is-selected .c_careplan--name {\n        color: var(--white);\n        font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnViaGF2c2F4ZW5hL0RvY3VtZW50cy9JbXBldHVzX1Byb2plY3RzL0FuZ3VsYXJfTW9ub3JlcG9fR2l0TGFiX0NvcHkvYW5ndWxhci1tb25vcmVwby9saWJzL3BhdHRlcm4tbGlicmFyeS91dGlsaXR5LW1peGlucy5zY3NzIiwic3JjL2FwcC9wYXRpZW50L2NhcmVwbGFuL2VkaXQtY2FyZXBsYW4vZWRpdC1jYXJlcGxhbi5wYWdlLnNjc3MiLCIvVXNlcnMvYW51YmhhdnNheGVuYS9Eb2N1bWVudHMvSW1wZXR1c19Qcm9qZWN0cy9Bbmd1bGFyX01vbm9yZXBvX0dpdExhYl9Db3B5L2FuZ3VsYXItbW9ub3JlcG8vYXBwcy9tb2JpbGUtY2xpbmljaWFuL3NyYy9hcHAvcGF0aWVudC9jYXJlcGxhbi9lZGl0LWNhcmVwbGFuL2VkaXQtY2FyZXBsYW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs2RkNFNkY7QURlN0Y7OzZGQ1o2RjtBRDJCN0Y7OzZGQ3hCNkY7QUNMN0Y7RUFFUSxtQkFBbUIsRUFBQTtBQUYzQjtJQUlZLDJCQUFlO0lBRWYsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsdUJBQXVCLEVBQUE7QUFabkM7TUFlZ0IsZUFBZSxFQUFBO0FBZi9CO01BbUJnQiwwQkFBYTtNQUNiLHVDQUFRO01BQ1Isa0NBQXFCO01BQ3JCLGlEQUFrQjtNQUNsQixtQ0FBdUI7TUFDdkIscUJBQWU7TUFDZixxQkFBZTtNQUNmLGFBQWE7TUFDYixZQUFZO01BQ1osZUFBZSxFQUFBO0FBNUIvQjtNRkNJOzs7OztLQ29DQztNRDlCRCx3Q0FBNEI7TUFDNUIsd0RBQXVCO01BQ3ZCLHNEQUFxQjtNQUNyQixvREFBbUI7TUFDbkIsOENBQWE7TUFDYiw0Q0FBNEM7TUVxQmhDLDJEQUE0QjtNQUM1Qix5QkFBeUI7TUFDekIsZUFBZSxFQUFBO0FBbkMvQjtRQXNDb0IsbUJBQW1CO1FBQ25CLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGF0aWVudC9jYXJlcGxhbi9lZGl0LWNhcmVwbGFuL2VkaXQtY2FyZXBsYW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgJVxuT3ZlcnJpZGUgSW9uaWMgOmhvc3QgQmFja2dyb3VuZCBDb2xvciBcbiUgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgKi9cbkBtaXhpbiB1X2lvbi1vdmVycmlkZS1ob3N0LWJhY2tncm91bmQtY29sb3Ige1xuICAgIC8qIEBpbmNsdWRlIHRoaXMgbWl4aW4gdG8gYW4gaW9uIGVsZW1lbnQgdG8gb3ZlcnJpZGUgOmhvc3Qgc2hhZG93LURPTSBjb2xvcnM6XG4gICAgICAgIC5leGFtcGxlLWNsYXNzIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHVfaW9uLW92ZXJyaWRlLWhvc3QtYmFja2dyb3VuZC1jb2xvcjtcbiAgICAgICAgICAgIC0tb3ZlcnJpZGUtYmFja2dyb3VuZC1jb2xvcjogW0FTU0lHTiBERVNJUkVEIENPTE9SIFZBTFVFXTtcbiAgICAgICAgfVxuICAgICovXG4gICAgLS1vdmVycmlkZS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1vdmVycmlkZS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogdmFyKC0tb3ZlcnJpZGUtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB2YXIoLS1vdmVycmlkZS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLW92ZXJyaWRlLWJhY2tncm91bmQtY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW92ZXJyaWRlLWJhY2tncm91bmQtY29sb3IpO1xufVxuLyogIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgJVxuT3ZlcnJpZGUgSW9uaWMgOmhvc3Qgb3BhY2l0eSAoSW9uaWMgNSsgb25seSAtIHdhaXQgdG8gdXNlIHVudGlsIGFmdGVyIHRoZSBpb25pYyA1IG1pZ3JhdGlvbiBpcyBjb21wbGV0ZSlcbiUgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgKi9cbkBtaXhpbiB1X2lvbi1vdmVycmlkZS1ob3N0LWJhY2tncm91bmQtb3BhY2l0eSB7XG4gICAgLyogQGluY2x1ZGUgdGhpcyBtaXhpbiB0byBhbiBpb24gZWxlbWVudCB0byBvdmVycmlkZSA6aG9zdCBzaGFkb3ctRE9NIGNvbG9yczpcbiAgICAgICAgLmV4YW1wbGUtY2xhc3Mge1xuICAgICAgICAgICAgQGluY2x1ZGUgdV9pb24tb3ZlcnJpZGUtaG9zdC1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgICAgICAgICAgLS1vdmVycmlkZS1iYWNrZ3JvdW5kLWNvbG9yOiBbQVNTSUdOIERFU0lSRUQgQ09MT1IgVkFMVUVdO1xuICAgICAgICB9XG4gICAgKi9cbiAgICAtLW92ZXJyaWRlLWJhY2tncm91bmQtb3BhY2l0eTogMS4wO1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogXHQvL09wYWNpdHkgb2YgdGhlIGJ1dHRvbiB3aGVuIHByZXNzZWRcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5Olx0Ly9PcGFjaXR5IG9mIHRoZSBidXR0b24gd2hlbiBmb2N1c2VkIHdpdGggdGhlIHRhYiBrZXlcbiAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTpcdC8vT3BhY2l0eSBvZiB0aGUgYmFja2dyb3VuZCBvbiBob3ZlciBcbn1cbi8qICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjICVcbk92ZXJyaWRlIElvbmljIDpob3N0IFRleHQgY29sb3JcbiUgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgKi9cbkBtaXhpbiB1X2lvbi1vdmVycmlkZS1ob3N0LXRleHQtY29sb3Ige1xuICAgIC8qIEBpbmNsdWRlIHRoaXMgbWl4aW4gdG8gYW4gaW9uIGVsZW1lbnQgdG8gb3ZlcnJpZGUgOmhvc3Qgc2hhZG93LURPTSBjb2xvcnM6XG4gICAgICAgIC5leGFtcGxlLWNsYXNzIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHVfaW9uLW92ZXJyaWRlLWhvc3QtdGV4dC1jb2xvcjtcbiAgICAgICAgICAgIC0tb3ZlcnJpZGUtdGV4dC1jb2xvcjogW0FTU0lHTiBERVNJUkVEIENPTE9SIFZBTFVFXTtcbiAgICAgICAgfVxuICAgICovXG4gICAgLS1vdmVycmlkZS10ZXh0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogdmFyKC0tb3ZlcnJpZGUtdGV4dC1jb2xvcik7IC8vIFRleHQgY29sb3Igb2YgdGhlIGJ1dHRvbiB3aGVuIHByZXNzZWRcbiAgICAtLWNvbG9yLWZvY3VzZWQ6IHZhcigtLW92ZXJyaWRlLXRleHQtY29sb3IpOyAvLyBUZXh0IGNvbG9yIG9mIHRoZSBidXR0b24gd2hlbiBmb2N1c2VkIHdpdGggdGhlIHRhYiBrZXlcbiAgICAtLWNvbG9yLWhvdmVyOiB2YXIoLS1vdmVycmlkZS10ZXh0LWNvbG9yKTsgLy8gVGV4dCBjb2xvciBvZiB0aGUgYnV0dG9uIHdoZW4gaG92ZXJlZFxuICAgIC0tY29sb3I6IHZhcigtLW92ZXJyaWRlLXRleHQtY29sb3IpOyAvLyBUZXh0IGNvbG9yIG9mIHRoZSBidXR0b25cbiAgICBjb2xvcjogdmFyKC0tb3ZlcnJpZGUtdGV4dC1jb2xvcik7XG59IiwiLyogIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgJVxuT3ZlcnJpZGUgSW9uaWMgOmhvc3QgQmFja2dyb3VuZCBDb2xvciBcbiUgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgKi9cbi8qICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjICVcbk92ZXJyaWRlIElvbmljIDpob3N0IG9wYWNpdHkgKElvbmljIDUrIG9ubHkgLSB3YWl0IHRvIHVzZSB1bnRpbCBhZnRlciB0aGUgaW9uaWMgNSBtaWdyYXRpb24gaXMgY29tcGxldGUpXG4lICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjICovXG4vKiAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyAlXG5PdmVycmlkZSBJb25pYyA6aG9zdCBUZXh0IGNvbG9yXG4lICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjICovXG4uZWRpdC1jYXJlcGxhbi1wYWdlIC5jX2NhcmVwbGFuLS1saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogODVweDsgfVxuICAuZWRpdC1jYXJlcGxhbi1wYWdlIC5jX2NhcmVwbGFuLS1saXN0IC5jX2NhcmVwbGFuLS10b2dnbGUge1xuICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAyLjZlbTtcbiAgICB3aWR0aDogOTUlO1xuICAgIG1hcmdpbjogLjZlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1ZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7IH1cbiAgICAuZWRpdC1jYXJlcGxhbi1wYWdlIC5jX2NhcmVwbGFuLS1saXN0IC5jX2NhcmVwbGFuLS10b2dnbGUgLmNfY2FyZXBsYW4tLW5hbWUge1xuICAgICAgZmxleC1iYXNpczogODAlOyB9XG4gICAgLmVkaXQtY2FyZXBsYW4tcGFnZSAuY19jYXJlcGxhbi0tbGlzdCAuY19jYXJlcGxhbi0tdG9nZ2xlIC5pcy1yYWRpbyB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICAgIC0tY29sb3I6IHZhcigtLWNvbG9yLWNhcmVwbGFuLXNlbGVjdGVkKTtcbiAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS13aGl0ZSk7XG4gICAgICAtLWNoZWNrbWFyay1jb2xvcjogdmFyKC0tY29sb3ItY2FyZXBsYW4tc2VsZWN0ZWQpO1xuICAgICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gICAgICAtLWJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgICAtLWJvcmRlci13aWR0aDogMC4yZW07XG4gICAgICBoZWlnaHQ6IDEuOWVtO1xuICAgICAgd2lkdGg6IDEuOWVtO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwOyB9XG4gICAgLmVkaXQtY2FyZXBsYW4tcGFnZSAuY19jYXJlcGxhbi0tbGlzdCAuY19jYXJlcGxhbi0tdG9nZ2xlLmlzLXNlbGVjdGVkIHtcbiAgICAgIC8qIEBpbmNsdWRlIHRoaXMgbWl4aW4gdG8gYW4gaW9uIGVsZW1lbnQgdG8gb3ZlcnJpZGUgOmhvc3Qgc2hhZG93LURPTSBjb2xvcnM6XG4gICAgICAgIC5leGFtcGxlLWNsYXNzIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHVfaW9uLW92ZXJyaWRlLWhvc3QtYmFja2dyb3VuZC1jb2xvcjtcbiAgICAgICAgICAgIC0tb3ZlcnJpZGUtYmFja2dyb3VuZC1jb2xvcjogW0FTU0lHTiBERVNJUkVEIENPTE9SIFZBTFVFXTtcbiAgICAgICAgfVxuICAgICovXG4gICAgICAtLW92ZXJyaWRlLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0tb3ZlcnJpZGUtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogdmFyKC0tb3ZlcnJpZGUtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLW92ZXJyaWRlLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1vdmVycmlkZS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLW92ZXJyaWRlLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgLS1vdmVycmlkZS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jYXJlcGxhbi1zZWxlY3RlZCk7XG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLXdpZHRoOiAwOyB9XG4gICAgICAuZWRpdC1jYXJlcGxhbi1wYWdlIC5jX2NhcmVwbGFuLS1saXN0IC5jX2NhcmVwbGFuLS10b2dnbGUuaXMtc2VsZWN0ZWQgLmNfY2FyZXBsYW4tLW5hbWUge1xuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICBmb250LXdlaWdodDogNjAwOyB9XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vdGhlbWUvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiLi4vLi4vbGlicy9wYXR0ZXJuLWxpYnJhcnkvdXRpbGl0eS1taXhpbnNcIjtcblxuLmVkaXQtY2FyZXBsYW4tcGFnZSB7XG4gICAgLmNfY2FyZXBsYW4tLWxpc3Qge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4NXB4O1xuICAgICAgICAuY19jYXJlcGxhbi0tdG9nZ2xlIHtcbiAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDIuNmVtO1xuICAgICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgICAgIG1hcmdpbjogLjZlbTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVlbTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuXG4gICAgICAgICAgICAuY19jYXJlcGxhbi0tbmFtZSB7XG4gICAgICAgICAgICAgICAgZmxleC1iYXNpczogODAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaXMtcmFkaW8ge1xuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgICAgIC0tY29sb3I6IHZhcigtLWNvbG9yLWNhcmVwbGFuLXNlbGVjdGVkKTtcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgICAgIC0tY2hlY2ttYXJrLWNvbG9yOiB2YXIoLS1jb2xvci1jYXJlcGxhbi1zZWxlY3RlZCk7XG4gICAgICAgICAgICAgICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAwLjJlbTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuOWVtO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxLjllbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuaXMtc2VsZWN0ZWQge1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHVfaW9uLW92ZXJyaWRlLWhvc3QtYmFja2dyb3VuZC1jb2xvcjtcbiAgICAgICAgICAgICAgICAtLW92ZXJyaWRlLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWNhcmVwbGFuLXNlbGVjdGVkKTtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMDtcblxuICAgICAgICAgICAgICAgIC5jX2NhcmVwbGFuLS1uYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/patient/careplan/edit-careplan/edit-careplan.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/patient/careplan/edit-careplan/edit-careplan.page.ts ***!
  \**********************************************************************/
/*! exports provided: EditCareplanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCareplanPage", function() { return EditCareplanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _hrs_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hrs/providers */ "../../libs/providers/providers.ts");





let EditCareplanPage = class EditCareplanPage {
    constructor(modalCtrl, modalService, navParams, platform, translateService, alertCtrl) {
        this.modalCtrl = modalCtrl;
        this.modalService = modalService;
        this.navParams = navParams;
        this.platform = platform;
        this.translateService = translateService;
        this.alertCtrl = alertCtrl;
        this.isModules = false;
        this.careplanToggleMap = {};
        this.updatedItems = [];
        this.modalService.setModalStatus('EditCarePlanPage', true);
    }
    ngOnInit() {
        this.originalSettings = JSON.stringify(this.navParams.get('careplanSettings'));
        this.keys = this.navParams.get('keys');
        this.isModules = this.navParams.get('isModules');
        this.careplanToggleMap = JSON.parse(this.originalSettings);
    }
    toggleCareplanItem(item) {
        const key = this.isModules ? item.attributes['shortname'] : item.id;
        this.careplanToggleMap[key].selected = !this.careplanToggleMap[key].selected;
        if (!this.updatedItems.includes(key))
            this.updatedItems.push(key);
        if (this.isCareplanEmpty() && this.isModules)
            this.alertCareplanStatus().then();
    }
    isCareplanEmpty() {
        // When editing presets, clinicians should be able to save with no selections.
        if (!this.isModules)
            return false;
        return !Object.values(this.careplanToggleMap).some((item) => item.selected);
    }
    alertCareplanStatus() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alertMessage;
            this.translateService.get('CAREPLAN_EMPTY_ALERT').subscribe((value) => alertMessage = value);
            const alertOptions = { message: alertMessage };
            let alert = yield this.alertCtrl.create(alertOptions);
            return yield alert.present();
        });
    }
    determineStateChange() {
        const originalSettings = JSON.parse(this.originalSettings);
        return Object.entries(this.careplanToggleMap).filter((item) => {
            let key = item[0];
            let status = item[1]['selected'];
            if (originalSettings[key].selected !== status)
                return item;
        });
    }
    cancel() {
        // this.careplanSettings does exist, but is not explicitly defined. Instead it is created from NavParams;
        // @ts-ignore
        this.careplanSettings = JSON.parse(this.originalSettings);
        this.modalCtrl.dismiss();
        this.modalService.setModalStatus('EditCarePlanPage', false);
    }
    dismiss() {
        const role = this.isModules ? 'modules' : 'presets';
        const updatedItems = this.determineStateChange();
        this.modalCtrl.dismiss({
            updatedItems,
            role
        });
        this.modalService.setModalStatus('EditCarePlanPage', false);
    }
};
EditCareplanPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _hrs_providers__WEBPACK_IMPORTED_MODULE_4__["ModalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
EditCareplanPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-careplan',
        template: __webpack_require__(/*! raw-loader!./edit-careplan.page.html */ "./node_modules/raw-loader/index.js!./src/app/patient/careplan/edit-careplan/edit-careplan.page.html"),
        styles: [__webpack_require__(/*! ./edit-careplan.page.scss */ "./src/app/patient/careplan/edit-careplan/edit-careplan.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _hrs_providers__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], EditCareplanPage);



/***/ }),

/***/ "./src/app/patient/device/add-device.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/patient/device/add-device.module.ts ***!
  \*****************************************************/
/*! exports provided: AddDevicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDevicePageModule", function() { return AddDevicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _add_device_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-device.page */ "./src/app/patient/device/add-device.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let AddDevicePageModule = class AddDevicePageModule {
};
AddDevicePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([
                {
                    path: 'add-device',
                    component: _add_device_page__WEBPACK_IMPORTED_MODULE_5__["AddDevicePage"]
                }
            ]),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ],
        declarations: [
            _add_device_page__WEBPACK_IMPORTED_MODULE_5__["AddDevicePage"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
    })
], AddDevicePageModule);



/***/ }),

/***/ "./src/app/patient/device/add-device.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/patient/device/add-device.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".noDevicesAvailable {\n  text-align: center; }\n\n.c_add_device--select {\n  --border-color: transparent;\n  width: 100vw;\n  border: 1px solid var(--color-accent); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnViaGF2c2F4ZW5hL0RvY3VtZW50cy9JbXBldHVzX1Byb2plY3RzL0FuZ3VsYXJfTW9ub3JlcG9fR2l0TGFiX0NvcHkvYW5ndWxhci1tb25vcmVwby9hcHBzL21vYmlsZS1jbGluaWNpYW4vc3JjL2FwcC9wYXRpZW50L2RldmljZS9hZGQtZGV2aWNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLDJCQUFlO0VBQ2YsWUFBWTtFQUNaLHFDQUFxQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGF0aWVudC9kZXZpY2UvYWRkLWRldmljZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUvdmFyaWFibGVzXCI7XG5cbi5ub0RldmljZXNBdmFpbGFibGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNfYWRkX2RldmljZS0tc2VsZWN0IHtcbiAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWFjY2VudCk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/patient/device/add-device.page.ts":
/*!***************************************************!*\
  !*** ./src/app/patient/device/add-device.page.ts ***!
  \***************************************************/
/*! exports provided: AddDevicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDevicePage", function() { return AddDevicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _clinician_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clinician/providers */ "./src/app/services/providers.ts");






let AddDevicePage = class AddDevicePage {
    constructor(platform, http, translateService, navParams, modalCtrl, patientDeviceService, patientProfileService, navCtrl) {
        this.platform = platform;
        this.http = http;
        this.translateService = translateService;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.patientDeviceService = patientDeviceService;
        this.patientProfileService = patientProfileService;
        this.navCtrl = navCtrl;
        let patient = [];
        patient.push(this.navParams.data);
        this.patientHrsid = this.navParams.get('patient');
        this.getPatientProfile(this.patientHrsid);
    }
    ngOnInit() {
        this.getAvailableDeviceInventory();
    }
    /**
     * Checking for all available device inventory
     */
    getAvailableDeviceInventory() {
        return this.patientDeviceService.getAvailableDeviceInventory().subscribe((res) => {
            if (res.length == 0) {
                this.availableDevices = 'None';
            }
            else {
                this.availableDevices = res;
            }
        });
    }
    /**
     * Calling updated patient profile after an edit
     */
    getPatientProfile(hrsid) {
        this.hrsid = hrsid;
        this.translateService.get('UNASSIGNED_DEVICE').subscribe((value) => {
            this.unassignedDevice = value;
        });
        return this.patientProfileService.getPatientProfile(hrsid).subscribe((res) => {
            if (res.device) {
                this.deviceInformation = res.device;
                this.currentAssignedDevice = res.device.name;
            }
            else {
                this.currentAssignedDevice = this.unassignedDevice;
            }
        });
    }
    /**
     * Changing or assigning a device to a patient
     */
    saveEditToAssignedDevice() {
        let selectedDeviceName = this.selectedValue;
        let selectedDevice = this.availableDevices.find(function (deviceName) {
            return deviceName.name === selectedDeviceName;
        });
        return this.patientDeviceService.saveEditToAssignedDevice(this.patientHrsid, selectedDevice).subscribe((res) => {
            this.modalCtrl.dismiss(selectedDevice.id);
        });
    }
    dismiss() {
        let currentDevice = this.deviceInformation;
        if (currentDevice == undefined) {
            this.modalCtrl.dismiss();
        }
        else {
            return this.patientDeviceService.saveEditToAssignedDevice(this.patientHrsid, currentDevice.devid).subscribe((res) => {
                this.modalCtrl.dismiss(currentDevice.devid);
            });
        }
    }
};
AddDevicePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _clinician_providers__WEBPACK_IMPORTED_MODULE_5__["PatientDeviceService"] },
    { type: _clinician_providers__WEBPACK_IMPORTED_MODULE_5__["PatientProfileService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
AddDevicePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'add-device',
        template: __webpack_require__(/*! raw-loader!./add-device.page.html */ "./node_modules/raw-loader/index.js!./src/app/patient/device/add-device.page.html"),
        styles: [__webpack_require__(/*! ./add-device.page.scss */ "./src/app/patient/device/add-device.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _clinician_providers__WEBPACK_IMPORTED_MODULE_5__["PatientDeviceService"],
        _clinician_providers__WEBPACK_IMPORTED_MODULE_5__["PatientProfileService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], AddDevicePage);



/***/ }),

/***/ "./src/app/patient/patient-status-change/patient-status-change.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/patient/patient-status-change/patient-status-change.module.ts ***!
  \*******************************************************************************/
/*! exports provided: PatientStatusChangeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientStatusChangeModule", function() { return PatientStatusChangeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _patient_status_change__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patient-status-change */ "./src/app/patient/patient-status-change/patient-status-change.ts");
/* harmony import */ var _clinician_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @clinician/providers */ "./src/app/services/providers.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");









let PatientStatusChangeModule = class PatientStatusChangeModule {
};
PatientStatusChangeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _patient_status_change__WEBPACK_IMPORTED_MODULE_6__["PatientStatusChange"]
                }
            ]),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
        ],
        declarations: [_patient_status_change__WEBPACK_IMPORTED_MODULE_6__["PatientStatusChange"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        providers: [
            _clinician_providers__WEBPACK_IMPORTED_MODULE_7__["PatientDeviceService"],
            _clinician_providers__WEBPACK_IMPORTED_MODULE_7__["PatientProfileService"]
        ]
    })
], PatientStatusChangeModule);



/***/ }),

/***/ "./src/app/patient/patient-status-change/patient-status-change.scss":
/*!**************************************************************************!*\
  !*** ./src/app/patient/patient-status-change/patient-status-change.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "page-patient-status-change .patient-discharge-info {\n  white-space: normal; }\n\npage-patient-status-change .c_patient_status--buttons {\n  display: flex; }\n\npage-patient-status-change .c_patient_status--buttons ion-button {\n    flex: 1; }\n\npage-patient-status-change .c_patient_status--deactivate ion-label {\n  white-space: break-spaces !important; }\n\npage-patient-status-change ion-item {\n  --border-color: transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnViaGF2c2F4ZW5hL0RvY3VtZW50cy9JbXBldHVzX1Byb2plY3RzL0FuZ3VsYXJfTW9ub3JlcG9fR2l0TGFiX0NvcHkvYW5ndWxhci1tb25vcmVwby9hcHBzL21vYmlsZS1jbGluaWNpYW4vc3JjL2FwcC9wYXRpZW50L3BhdGllbnQtc3RhdHVzLWNoYW5nZS9wYXRpZW50LXN0YXR1cy1jaGFuZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLG1CQUFtQixFQUFBOztBQUYzQjtFQVFZLGFBQWEsRUFBQTs7QUFSekI7SUFXZ0IsT0FBTyxFQUFBOztBQVh2QjtFQWlCZ0Isb0NBQW9DLEVBQUE7O0FBakJwRDtFQXVCUSwyQkFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGF0aWVudC9wYXRpZW50LXN0YXR1cy1jaGFuZ2UvcGF0aWVudC1zdGF0dXMtY2hhbmdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLXBhdGllbnQtc3RhdHVzLWNoYW5nZSB7XG4gICAgLnBhdGllbnQtZGlzY2hhcmdlLWluZm8ge1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIH1cblxuICAgIC5jX3BhdGllbnRfc3RhdHVzIHtcblxuICAgICAgICAmLS1idXR0b25zIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLS1kZWFjdGl2YXRlIHtcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/patient/patient-status-change/patient-status-change.ts":
/*!************************************************************************!*\
  !*** ./src/app/patient/patient-status-change/patient-status-change.ts ***!
  \************************************************************************/
/*! exports provided: PatientStatusChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientStatusChange", function() { return PatientStatusChange; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _clinician_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clinician/providers */ "./src/app/services/providers.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../enums */ "./src/app/enums/index.ts");








let PatientStatusChange = class PatientStatusChange {
    constructor(navParams, modalCtrl, patientProfileService, toastCtrl, translate, formBuilder) {
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.patientProfileService = patientProfileService;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
        this.formBuilder = formBuilder;
        this.status = _enums__WEBPACK_IMPORTED_MODULE_7__["ActivationStatus"];
        this.hrsid = this.navParams.get('hrsid');
        this.action = this.navParams.get('action');
        this.date = this.navParams.get('date');
        this.translateHeader = 'PATIENT_' + this.action.toUpperCase();
        this.initializeData();
    }
    ngOnInit() {
        if (this.action == _enums__WEBPACK_IMPORTED_MODULE_7__["ActivationStatus"].ActionUnDischarge)
            this.undischargeInfo = this.translate.instant('PATIENT_UNDISCHARGE.INFO', { date: this.date });
    }
    dismiss(data) {
        this.modalCtrl.dismiss(data);
    }
    submit() {
        if (this.data.value.note == '') {
            this.data.value.note = 'none';
        }
        let messageSuccess = this.action == _enums__WEBPACK_IMPORTED_MODULE_7__["ActivationStatus"].ActionDischarge ?
            this.translate.instant(this.translateHeader + '.TOAST.SUCCESS', { date: moment__WEBPACK_IMPORTED_MODULE_6__(this.data.value.date).format('MM-DD-YYYY') }) :
            this.translate.instant(this.translateHeader + '.TOAST.SUCCESS');
        return this.patientProfileService.changePatientStatus(this.action, this.hrsid, this.data.value).subscribe({
            next: (res) => {
                let message = messageSuccess;
                let status = 'success';
                this.throwToastMessage(message, status);
                if (this.action == _enums__WEBPACK_IMPORTED_MODULE_7__["ActivationStatus"].ActionDischarge || this.action == _enums__WEBPACK_IMPORTED_MODULE_7__["ActivationStatus"].ActionUnDischarge) {
                    this.dismiss(this.data.value);
                }
                else {
                    this.dismiss({ status: res.status });
                }
            },
            error: (err) => {
                let messageFail = this.translate.instant(this.translateHeader + '.TOAST.FAIL');
                let status = 'fail';
                this.throwToastMessage(messageFail, status);
            }
        });
    }
    throwToastMessage(message, status) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let title;
            let duration;
            let cssClass;
            if (status === 'success') {
                title = this.translate.instant('PATIENT_STATUS_CHANGE.TOAST.SUCCESS');
                duration = 3000; // a little shorter for success messages than error messages - 3 seconds
                cssClass = 'toast-success';
            }
            else if (status === 'fail') {
                title = this.translate.instant('PATIENT_STATUS_CHANGE.TOAST.FAIL');
                duration = 5000; // a little longer for error to allow the user to read - 5 seconds
                cssClass = 'toast-fail';
            }
            else {
                title = this.translate.instant('PATIENT_STATUS_CHANGE.TOAST.SUCCESS');
                duration = 3000; // a little shorter for success messages than error messages - 3 seconds
            }
            let toast = yield this.toastCtrl.create({
                header: title,
                message: message,
                duration: duration,
                cssClass: cssClass,
                position: 'top'
            });
            return yield toast.present();
        });
    }
    initializeData() {
        switch (this.action) {
            case _enums__WEBPACK_IMPORTED_MODULE_7__["ActivationStatus"].ActionPause:
                this.data = this.formBuilder.group({
                    patient: this.hrsid,
                    note: '',
                    edvisit: false,
                    readmitted: false
                });
                break;
            case _enums__WEBPACK_IMPORTED_MODULE_7__["ActivationStatus"].ActionResume:
                this.data = this.formBuilder.group({
                    patient: this.hrsid,
                    note: '',
                    edvisit: false,
                    readmitted: false
                });
                break;
            case _enums__WEBPACK_IMPORTED_MODULE_7__["ActivationStatus"].ActionDeactivate:
                this.data = this.formBuilder.group({
                    patient: this.hrsid,
                    note: '',
                    edvisit: false,
                    readmitted: false
                });
                break;
            case _enums__WEBPACK_IMPORTED_MODULE_7__["ActivationStatus"].ActionReactivate:
                this.data = this.formBuilder.group({
                    patient: this.hrsid,
                    note: ''
                });
                break;
            case _enums__WEBPACK_IMPORTED_MODULE_7__["ActivationStatus"].ActionDischarge:
                this.data = this.formBuilder.group({
                    patient: this.hrsid,
                    date: ''
                });
                break;
            case _enums__WEBPACK_IMPORTED_MODULE_7__["ActivationStatus"].ActionUnDischarge:
                this.data = this.formBuilder.group({
                    patient: this.hrsid
                });
                break;
        }
    }
};
PatientStatusChange.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _clinician_providers__WEBPACK_IMPORTED_MODULE_5__["PatientProfileService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
PatientStatusChange = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-patient-status-change',
        template: __webpack_require__(/*! raw-loader!./patient-status-change.html */ "./node_modules/raw-loader/index.js!./src/app/patient/patient-status-change/patient-status-change.html"),
        styles: [__webpack_require__(/*! ./patient-status-change.scss */ "./src/app/patient/patient-status-change/patient-status-change.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _clinician_providers__WEBPACK_IMPORTED_MODULE_5__["PatientProfileService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], PatientStatusChange);



/***/ }),

/***/ "./src/app/patient/reset-metrics/reset-metrics.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/patient/reset-metrics/reset-metrics.module.ts ***!
  \***************************************************************/
/*! exports provided: ResetMetricsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetMetricsPageModule", function() { return ResetMetricsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _reset_metrics_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset-metrics.page */ "./src/app/patient/reset-metrics/reset-metrics.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let ResetMetricsPageModule = class ResetMetricsPageModule {
};
ResetMetricsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([
                {
                    path: 'reset-metrics',
                    component: _reset_metrics_page__WEBPACK_IMPORTED_MODULE_5__["ResetMetricsPage"]
                }
            ]),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ],
        declarations: [
            _reset_metrics_page__WEBPACK_IMPORTED_MODULE_5__["ResetMetricsPage"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
    })
], ResetMetricsPageModule);



/***/ }),

/***/ "./src/app/patient/reset-metrics/reset-metrics.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/patient/reset-metrics/reset-metrics.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".resetMetricsModal .resetMetricsButtons {\n  padding: 1em; }\n\n.resetMetricsModal .list-ios > .item-block:first-child {\n  border-top: 0; }\n\n.resetMetricsModal .list-ios > .item-block:last-child {\n  border-bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnViaGF2c2F4ZW5hL0RvY3VtZW50cy9JbXBldHVzX1Byb2plY3RzL0FuZ3VsYXJfTW9ub3JlcG9fR2l0TGFiX0NvcHkvYW5ndWxhci1tb25vcmVwby9hcHBzL21vYmlsZS1jbGluaWNpYW4vc3JjL2FwcC9wYXRpZW50L3Jlc2V0LW1ldHJpY3MvcmVzZXQtbWV0cmljcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFUSxZQUFZLEVBQUE7O0FBRnBCO0VBTVEsYUFBYSxFQUFBOztBQU5yQjtFQVVRLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGF0aWVudC9yZXNldC1tZXRyaWNzL3Jlc2V0LW1ldHJpY3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucmVzZXRNZXRyaWNzTW9kYWwge1xuICAgIC5yZXNldE1ldHJpY3NCdXR0b25zIHtcbiAgICAgICAgcGFkZGluZzogMWVtO1xuICAgIH1cblxuICAgIC5saXN0LWlvcyA+IC5pdGVtLWJsb2NrOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICB9XG5cbiAgICAubGlzdC1pb3MgPiAuaXRlbS1ibG9jazpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/patient/reset-metrics/reset-metrics.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/patient/reset-metrics/reset-metrics.page.ts ***!
  \*************************************************************/
/*! exports provided: ResetMetricsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetMetricsPage", function() { return ResetMetricsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/providers */ "./src/app/services/providers.ts");






let ResetMetricsPage = class ResetMetricsPage {
    constructor(toastCtrl, modalCtrl, patientProfileService, translateService, navParams, formBuilder) {
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.patientProfileService = patientProfileService;
        this.translateService = translateService;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.metrics = this.formBuilder.group({
            activity: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
            medication: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
            survey: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
            weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
            consent: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false),
        });
    }
    ionViewWillEnter() {
        this.patientHRSId = this.navParams.get('patientHRSId');
    }
    toggleResetButton() {
        if (this.metrics.value.activity === true ||
            this.metrics.value.medication === true ||
            this.metrics.value.survey === true ||
            this.metrics.value.weight === true ||
            this.metrics.value.consent === true) {
            this.metricSelected = true;
        }
        else {
            this.metricSelected = false;
        }
    }
    submitMetricReset() {
        this.patientProfileService.resetPatientMetrics(this.patientHRSId, this.metrics.value).subscribe({
            next: (res) => {
                this.throwToastMessage('RESET_METRICS_SUCCESS');
            },
            error: (err) => {
                this.throwToastMessage('RESET_METRICS_FAIL');
            }
        });
        this.dismiss();
    }
    throwToastMessage(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: this.translateService.instant(message),
                duration: 3000,
                position: 'top'
            });
            return yield toast.present();
        });
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
};
ResetMetricsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _services_providers__WEBPACK_IMPORTED_MODULE_5__["PatientProfileService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
ResetMetricsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-reset',
        template: __webpack_require__(/*! raw-loader!./reset-metrics.page.html */ "./node_modules/raw-loader/index.js!./src/app/patient/reset-metrics/reset-metrics.page.html"),
        styles: [__webpack_require__(/*! ./reset-metrics.page.scss */ "./src/app/patient/reset-metrics/reset-metrics.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _services_providers__WEBPACK_IMPORTED_MODULE_5__["PatientProfileService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], ResetMetricsPage);



/***/ }),

/***/ "./src/app/services/admin/admin.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/admin/admin.service.ts ***!
  \*************************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../enums */ "./src/app/enums/index.ts");






let AdminService = class AdminService {
    constructor(logger, menu, router) {
        this.logger = logger;
        this.menu = menu;
        this.router = router;
        this.adminSettings = _enums__WEBPACK_IMPORTED_MODULE_5__["AdminSettings"];
        this.totalButtonClicks = 0;
        // each 'Setting' represents a nav item for the admin area
        this.settings = [
            {
                fullLabel: 'ADMIN_DOMAIN_SETTINGS_LABEL_FULL',
                tabLabel: 'ADMIN_DOMAIN_SETTINGS_LABEL_TAB',
                icon: 'earth-outline',
                enum: this.adminSettings.DOMAIN
            }
        ];
    }
    /**
     * If the device used is a tablet - access to the admin is granted thru a 'secret' button
     * located in the menu at the version number - 5 clicks are required to open admin
     * if 2 seconds passes between a click the counter is reset
     */
    openAdmin() {
        this.totalButtonClicks += 1;
        clearTimeout(this.openAdminTimeout);
        if (this.totalButtonClicks === 5) {
            this.totalButtonClicks = 0;
            this.router.navigate(['admin']);
            this.menu.isOpen().then((isOpen) => {
                if (isOpen)
                    this.menu.close();
            });
        }
        else {
            this.openAdminTimeout = setTimeout(() => this.totalButtonClicks = 0, 2000);
        }
    }
    rerouteHome() {
        this.router.navigate(['home']);
    }
};
AdminService.PASSCODE = '41213';
AdminService.ctorParameters = () => [
    { type: ngx_logger__WEBPACK_IMPORTED_MODULE_2__["NGXLogger"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_logger__WEBPACK_IMPORTED_MODULE_2__["NGXLogger"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AdminService);



/***/ }),

/***/ "./src/app/services/data-exchange/data-exchange.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/data-exchange/data-exchange.service.ts ***!
  \*****************************************************************/
/*! exports provided: DataExchangeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataExchangeService", function() { return DataExchangeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DataExchangeService = class DataExchangeService {
    constructor() {
        this.data = new Map();
    }
    setData(id, data) {
        this.data.set(id, data);
    }
    getData(id, clearData) {
        const data = this.data.get(id);
        if (clearData)
            this.data.delete(id);
        return data;
    }
    hasData(id) {
        return this.data.has(id);
    }
};
DataExchangeService.UpdatePatient = 'updatedPatient';
DataExchangeService.UpdatedReviewedStatus = 'updatedReviewedStatus';
DataExchangeService.UpdatedActivationStatus = 'updatedActivationStatus';
DataExchangeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DataExchangeService);



/***/ }),

/***/ "./src/app/services/environment/environment.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/environment/environment.ts ***!
  \*****************************************************/
/*! exports provided: Environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Environment", function() { return Environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _hrs_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hrs/providers */ "../../libs/providers/providers.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm/operators/index.js");
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../settings/settings */ "./src/app/services/settings/settings.ts");

var Environment_1;




/**
 *Environment provider.
 */
let Environment = Environment_1 = class Environment {
    constructor(gatewayApi, settings) {
        this.gatewayApi = gatewayApi;
        this.settings = settings;
    }
    /**
     * Send a GET request to our environment endpoint on login.
     * This will be called once.
     */
    getEnvironment() {
        let getEnv = this.gatewayApi.get('apiv2/environment', {});
        return getEnv.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((res) => {
            this.data = res;
            if (res.settings.phone) {
                Environment_1.supportNumber = res.settings.phone;
            }
            if (res.environmentSettings) {
                Environment_1.environmentSettings = res.environmentSettings;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => {
            this.settings.configureStorage(this.hasSetting(Environment_1.SETTING_OPT_OUT_ADVANCED_SECURITY));
        }));
    }
    hasSetting(flag) {
        if (this.data && this.data.environmentSettings) {
            for (let i = 0; i < this.data.environmentSettings.length; i++) {
                if (this.data.environmentSettings[i].flag == flag) {
                    return true;
                }
            }
        }
        return false;
    }
    getSubgroups() {
        if (this.data && this.data.settings) {
            return this.data.settings.subgroups;
        }
    }
    getCustomFields() {
        if (this.data) {
            return this.data.PATIENTINFO_CUSTOMATTRIBUTES;
        }
    }
};
Environment.SETTING_PATIENT_CUSTOMATTRIBUTES = 'PATIENTINFO_CUSTOMATTRIBUTES';
Environment.SETTING_ENV_SUBGROUPS = 'SYSTEM_SUBGROUPS';
Environment.SETTING_OPT_OUT_ADVANCED_SECURITY = 'SYSTEM_MOBILE_SECURITY_OPTIONAL';
Environment.ctorParameters = () => [
    { type: _hrs_providers__WEBPACK_IMPORTED_MODULE_2__["GatewayApi"] },
    { type: _settings_settings__WEBPACK_IMPORTED_MODULE_4__["Settings"] }
];
Environment = Environment_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hrs_providers__WEBPACK_IMPORTED_MODULE_2__["GatewayApi"],
        _settings_settings__WEBPACK_IMPORTED_MODULE_4__["Settings"]])
], Environment);



/***/ }),

/***/ "./src/app/services/firebase/firebase.ts":
/*!***********************************************!*\
  !*** ./src/app/services/firebase/firebase.ts ***!
  \***********************************************/
/*! exports provided: FirebaseNotifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseNotifications", function() { return FirebaseNotifications; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _hrs_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hrs/providers */ "../../libs/providers/providers.ts");
/* harmony import */ var _firebase_firebase_account_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../firebase/firebase-account-info */ "./firebase/firebase-account-info.ts");





let FirebaseNotifications = class FirebaseNotifications {
    constructor(communication, logger, gatewayApi) {
        this.communication = communication;
        this.logger = logger;
        this.gatewayApi = gatewayApi;
    }
    /**
     * Manually Ask for Push Permission (IOS ONLY)
     * Once user answers yes/no, they will not be asked again
     */
    askIOSPushPermission() {
        FCMPlugin.requestPushPermissionIOS((permissionGranted) => {
            if (permissionGranted) {
                this.logger.log('Push Permission Granted');
            }
            else {
                this.logger.log('Push Permission Declined');
            }
        }, (err) => {
            this.logger.error('Failed to request push permission', err);
        });
    }
    /**
     * Create Channel on Device for Firebase to send Notifications to
     */
    createAndroidNotificationChannel() {
        FCMPlugin.createNotificationChannelAndroid({
            id: 'default-channel-id',
            name: 'Default channel',
            importance: 'high',
            visibility: 'public'
        });
    }
    /**
     * Set PCM to chosen Firebase account.
     *
     * Only available to HRSTAB.
     * This is because we disable FirebaseInitProvider in AndroidManifestTablet.xml, which prevents PCM from automatically initializing
     * the FirebaseApp from google-services.json and allows us to initialize manually with the creds of our choosing.
     */
    setFirebaseAccount(account) {
        const accountInfo = _firebase_firebase_account_info__WEBPACK_IMPORTED_MODULE_4__["FirebaseAccountInfo"][account];
        return new Promise((resolve, reject) => {
            FCMPlugin.initDifferentAccount(accountInfo, () => {
                this.logger.info(`Successfully initialized ${account} Firebase account.`);
                resolve();
            }, (err) => {
                this.logger.error(err);
                reject(new Error(`Failed to initialize ${account} FirebaseApp.`));
            });
        });
    }
    /**
     * Subscribe to Firebase topics
     * Get firebase device token
     * @param response
     */
    initializeFirebase(hrsid) {
        this.userHrsId = hrsid;
        this.shouldUpdateToken = true;
        // Subscribe to topic and get device's current registration id
        FCMPlugin.subscribeToTopic('all', (res) => {
            this.logger.log('Successfully subscribed to firebase topics');
        }, (err) => {
            this.logger.error('Failed to subscribe to firebase topics');
        });
        // get firebase device token
        FCMPlugin.getToken((token) => {
            this.logger.debug(token);
            // store video call firebase token
            this.sendTokenToServer(token);
            this.buildNotificationHandler();
        }, (err) => {
            this.logger.error(err);
        });
    }
    /**
     * Listen for Firebase notifications and broadcast the appropriate event
     */
    buildNotificationHandler() {
        FCMPlugin.onNotification((data) => {
            if (data.type.includes('video')) {
                if (data.action === 'incoming_call') {
                    this.communication.incomingVideoCall.next(data);
                }
                else if (data.action === 'call_unanswered' || data.action === 'call_declined') {
                    this.communication.endVideoCall.next(data);
                }
                else if (data.action === 'call_left') {
                    this.communication.callerLeft.next(data);
                }
            }
            else if (data.type === 'chat') {
                this.communication.newChatMessage.next(data);
            }
            else if (data.type === 'voice' || data.type === 'voicecall') {
                if (data.action === 'call_left') {
                    this.communication.callerLeft.next(JSON.parse(data.data));
                }
                else {
                    this.communication.incomingVoiceCall.next(data);
                }
            }
        }, (error) => {
            this.logger.error('error is ' + JSON.stringify(error));
        });
        this.tokenRefresh();
    }
    tokenRefresh() {
        FCMPlugin.onTokenRefresh((token) => {
            this.logger.log('refresh token', token);
            if (this.shouldUpdateToken) {
                this.sendTokenToServer(token);
            }
        });
    }
    /**
     * Store Firebase device token
     * @param token
     */
    sendTokenToServer(token) {
        const data = {
            data: {
                value: token,
                hrsid: this.userHrsId,
                deviceType: 'mobile'
            },
        };
        let post = this.gatewayApi.post('push-tokens', data);
        post.subscribe({
            next: (res) => {
                this.logger.log('Successfully stored firebase device token');
            },
            error: (err) => {
                this.logger.error('Failed to store firebase device token');
            }
        });
    }
    deleteInstanceId() {
        this.shouldUpdateToken = false;
        FCMPlugin.deleteInstanceId(() => {
            this.logger.log('Firebase instance successfully deleted');
        }, (err) => {
            this.logger.error('Failed to delete firebase instance' + err);
        });
    }
};
FirebaseNotifications.ctorParameters = () => [
    { type: _hrs_providers__WEBPACK_IMPORTED_MODULE_3__["CommunicationService"] },
    { type: ngx_logger__WEBPACK_IMPORTED_MODULE_2__["NGXLogger"] },
    { type: _hrs_providers__WEBPACK_IMPORTED_MODULE_3__["GatewayApi"] }
];
FirebaseNotifications = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hrs_providers__WEBPACK_IMPORTED_MODULE_3__["CommunicationService"],
        ngx_logger__WEBPACK_IMPORTED_MODULE_2__["NGXLogger"],
        _hrs_providers__WEBPACK_IMPORTED_MODULE_3__["GatewayApi"]])
], FirebaseNotifications);



/***/ }),

/***/ "./src/app/services/historical-data/historical-data.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/services/historical-data/historical-data.service.ts ***!
  \*********************************************************************/
/*! exports provided: HistoricalDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoricalDataService", function() { return HistoricalDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_models_daily_metrics_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/models/daily-metrics.model */ "./src/common/models/daily-metrics.model.ts");
/* harmony import */ var _hrs_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hrs/providers */ "../../libs/providers/providers.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm/operators/index.js");






let HistoricalDataService = class HistoricalDataService {
    constructor(gatewayApi) {
        this.gatewayApi = gatewayApi;
    }
    getLatest7Days(hrsid) {
        const latest7DaysRange = {
            start: moment__WEBPACK_IMPORTED_MODULE_4__().subtract(6, 'd').format('YYYYMMDD'),
            end: moment__WEBPACK_IMPORTED_MODULE_4__().format('YYYYMMDD')
        };
        return this.getHistoricalDateRange(hrsid, latest7DaysRange);
    }
    getNext7Days(hrsid) {
        const start = moment__WEBPACK_IMPORTED_MODULE_4__().subtract(7, 'd');
        const next7DaysRange = {
            end: start.format('YYYYMMDD'),
            start: moment__WEBPACK_IMPORTED_MODULE_4__(start).subtract(6, 'd').format('YYYYMMDD')
        };
        return this.getHistoricalDateRange(hrsid, next7DaysRange);
    }
    getHistoricalDateRange(hrsid, range) {
        return this.gatewayApi.get(`apiv2/patients/${hrsid}?&start=${range.start}&end=${range.end}`, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((res) => {
            let historicalData = [];
            for (let i = 0; i < res.length; i++) {
                historicalData.push(_common_models_daily_metrics_model__WEBPACK_IMPORTED_MODULE_2__["DailyMetricsModel"].init(res[i]));
            }
            return historicalData;
        }));
    }
};
HistoricalDataService.ctorParameters = () => [
    { type: _hrs_providers__WEBPACK_IMPORTED_MODULE_3__["GatewayApi"] }
];
HistoricalDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hrs_providers__WEBPACK_IMPORTED_MODULE_3__["GatewayApi"]])
], HistoricalDataService);



/***/ }),

/***/ "./src/app/services/patientList/patientList.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/patientList/patientList.service.ts ***!
  \*************************************************************/
/*! exports provided: PatientListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientListService", function() { return PatientListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _hrs_gateway__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hrs/gateway */ "../../libs/gateway/index.ts");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








class RequestObservable {
    constructor() {
        this.response = [];
        this.observable = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"]((observer) => {
            this.next = (value) => observer.next(value);
        });
    }
}
/**
 * This is the service provider for the patient list API calls
 */
let PatientListService = class PatientListService {
    constructor(gateway, logger, toastCtrl, translate) {
        this.gateway = gateway;
        this.logger = logger;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
        this.lastPageRequested = 0;
        this.patientListRequests = {};
    }
    /**
     * Set up and return patient list request observables
     */
    loadPatients() {
        // If we were already loading the patient list we'll just continue waiting for that to complete
        if (this.patientListRequestObservable) {
            return this.patientListRequestObservable;
        }
        // Load the patient list in batches using X parallel requests that each keep requesting another batch until we've loaded all patients.
        // A batched approach was needed because some environments have too much data for the old backend behind this to handle in one batch.
        let observables = [];
        for (let requestKey = 1; requestKey <= 5; requestKey++) {
            this.patientListRequests[requestKey] = new RequestObservable();
            observables.push(this.patientListRequests[requestKey].observable);
            this.loadPatientListPage(++this.lastPageRequested, requestKey);
        }
        // merge all the request observables into one stream and make it shareable to patientlist and locally
        this.patientListRequestObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["zip"])(...observables)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((patientList) => patientList.flat(1)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
        const resetVariables = () => {
            setTimeout(() => {
                this.finalPage = undefined;
                this.lastPageRequested = 0;
                this.patientListRequests = {};
                this.patientListRequestObservable = null;
                this.patientListRequestError = false;
            }, 500);
        };
        this.patientListRequestObservable.subscribe({
            // The only local behavior required once all the observables have completed is to reset the local variables
            // And notify user if there were any request errors
            next: () => {
                if (this.patientListRequestError)
                    this.alertUser();
                resetVariables();
            }
        });
        return this.patientListRequestObservable;
    }
    /**
     * handle patient list pagination requests and response interactions with observables
     */
    loadPatientListPage(page, requestKey) {
        const assignFinalPage = (response) => {
            if (!this.finalPage &&
                response &&
                response.meta &&
                response.meta.pagination) {
                this.finalPage = response.meta.pagination.last_page || 0;
            }
        };
        const loadNextPage = () => {
            let nextPage = this.lastPageRequested + 1;
            if (nextPage <= this.finalPage) {
                this.loadPatientListPage(++this.lastPageRequested, requestKey);
            }
            else {
                // Each of the 5 patientListRequest Observables will trigger 'next' only one time. When all 5 have done that
                // patientListRequestObservable (which the patient-list page subscribes to) will trigger 'next' one time
                // and pass all responses as one array regardless of any errors an individual or all requests encountered
                this.patientListRequests[requestKey].next(this.patientListRequests[requestKey].response);
            }
        };
        this.getPatientList(page)
            .subscribe({
            next: (response) => {
                assignFinalPage(response);
                // Concat the patient list responses together, once all requests are finished the sum of the responses will be passed to patient-list.page
                this.patientListRequests[requestKey].response = [...this.patientListRequests[requestKey].response, ...response.patientlist];
            },
            error: (err) => {
                // The Error is consumed here and does not bubble up to the wrapping observable patientListRequestObservable
                // Bubbling the error up will prevent desired behavior and will result in a never ending loading spinner
                this.patientListRequestError = true;
                this.logger.error('Error loading patientlist page ' + page, err);
                loadNextPage();
            },
            complete: () => loadNextPage()
        });
    }
    /**
     * Call api to get the patient list
     */
    getPatientList(page, pageSize = 500) {
        const path = `apiv2/patientlist?status[]=Activated&status[]=Pre-Activated&status[]=Paused&status[]=Discharged&page[current]=${page}&page[size]=${pageSize}`;
        return this.gateway.get({ path: path });
    }
    /**
     * Simply alert user if any of the patientlist requests errored out
     */
    alertUser() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: this.translate.instant('PATIENT_LIST_FAIL'),
                cssClass: 'toast-fail',
                duration: 3000,
                position: 'top'
            });
            return toast.present();
        });
    }
    /**
     * used by patient-list.page to keep track of which patient is expanded
     */
    expandedPatients() {
        return {
            patient: undefined,
            includes: function (patient) {
                return this.patient && patient.hrsid === this.patient.hrsid;
            },
            isExpanded: function () {
                return !!this.patient;
            },
            set: function (patient) {
                patient.expanded = true;
                this.patient = patient;
            },
            unset: function () {
                this.patient.expanded = false;
                this.patient = undefined;
            }
        };
    }
};
PatientListService.ctorParameters = () => [
    { type: _hrs_gateway__WEBPACK_IMPORTED_MODULE_2__["GatewayService"] },
    { type: ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NGXLogger"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }
];
PatientListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hrs_gateway__WEBPACK_IMPORTED_MODULE_2__["GatewayService"],
        ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NGXLogger"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
], PatientListService);



/***/ }),

/***/ "./src/app/services/patientProfile/careplan/careplan.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/services/patientProfile/careplan/careplan.service.ts ***!
  \**********************************************************************/
/*! exports provided: CareplanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareplanService", function() { return CareplanService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _hrs_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hrs/providers */ "../../libs/providers/providers.ts");
/* harmony import */ var _user_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../user/user */ "./src/app/services/user/user.ts");




let CareplanService = class CareplanService {
    constructor(gatewayApi, user) {
        this.gatewayApi = gatewayApi;
        this.user = user;
        // this.moduleInfo contains some fields which seem to be required by the backend to POST, but whose values,
        // or the handling thereof, we have not yet added into the CCM careplan.
        this.moduleInfo = {};
    }
    getPatientModules() {
        return this.gatewayApi.get(`v1/modules`, {});
    }
    getPatientModulesWithReminders(hrsid) {
        return this.gatewayApi.get(`apiv2/patients/` + hrsid + `/moduleinfo`, {});
    }
    getEnvPresets() {
        return this.gatewayApi.get(`v1/environments/${this.user.data.environment}/presets`, {});
    }
    savePatientModuleInfo(hrsid, modules, activityReminders, surveyReminders, weightReminders, medicationReminders) {
        if (!modules.length)
            modules = ['empty'];
        this.moduleInfo = {};
        this.moduleInfo['modules'] = modules;
        if (this.moduleInfo['modules'].includes('activity')) {
            this.moduleInfo['activityreminder'] = activityReminders;
        }
        if (this.moduleInfo['modules'].includes('survey')) {
            this.moduleInfo['surveyreminder'] = surveyReminders;
        }
        if (this.moduleInfo['modules'].includes('weight')) {
            this.moduleInfo['weightreminder'] = weightReminders;
        }
        if (this.moduleInfo['modules'].includes('medication')) {
            this.moduleInfo['medicationreminders'] = medicationReminders;
        }
        return this.gatewayApi.post(`apiv2/patients/` + hrsid + `/moduleinfo`, { moduleInfo: this.moduleInfo });
    }
};
CareplanService.ctorParameters = () => [
    { type: _hrs_providers__WEBPACK_IMPORTED_MODULE_2__["GatewayApi"] },
    { type: _user_user__WEBPACK_IMPORTED_MODULE_3__["User"] }
];
CareplanService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hrs_providers__WEBPACK_IMPORTED_MODULE_2__["GatewayApi"],
        _user_user__WEBPACK_IMPORTED_MODULE_3__["User"]])
], CareplanService);



/***/ }),

/***/ "./src/app/services/patientProfile/patientDevice.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/services/patientProfile/patientDevice.service.ts ***!
  \******************************************************************/
/*! exports provided: PatientDeviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientDeviceService", function() { return PatientDeviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _hrs_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hrs/providers */ "../../libs/providers/providers.ts");





/**
 * This is the service provider for the patient list API calls
 */
let PatientDeviceService = class PatientDeviceService {
    constructor(gatewayApi, http, logger) {
        this.gatewayApi = gatewayApi;
        this.http = http;
        this.logger = logger;
    }
    /**
     * Call api to get the device inventory
     */
    getAvailableDeviceInventory() {
        return this.gatewayApi.get('apiv2/inventory?/', { available: true });
    }
    /**
     * Call api to mark the patient as reviewed
     */
    saveEditToAssignedDevice(hrsid, selectedDevice) {
        return this.gatewayApi.post('apiv2/patients/' + hrsid + '/device', { deviceId: selectedDevice.id });
    }
    /**
     * Call api to get device information and connectivity for a specific patient
     */
    getPatientDeviceInformation(deviceId) {
        return this.gatewayApi.get('apiv2/inventory/status/' + deviceId, {});
    }
    /**
     * Call api to remove device from patient and reset to nothing assigned
     */
    removeDevice(detail) {
        return this.gatewayApi.delete('apiv2/patients/' + detail.hrsid + '/device', {});
    }
};
PatientDeviceService.ctorParameters = () => [
    { type: _hrs_providers__WEBPACK_IMPORTED_MODULE_4__["GatewayApi"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NGXLogger"] }
];
PatientDeviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hrs_providers__WEBPACK_IMPORTED_MODULE_4__["GatewayApi"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NGXLogger"]])
], PatientDeviceService);



/***/ }),

/***/ "./src/app/services/patientProfile/patientProfile.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/patientProfile/patientProfile.service.ts ***!
  \*******************************************************************/
/*! exports provided: PatientProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientProfileService", function() { return PatientProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _hrs_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hrs/providers */ "../../libs/providers/providers.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../enums */ "./src/app/enums/index.ts");






/**
 * This is the service provider for the patient list API calls
 */
let PatientProfileService = class PatientProfileService {
    constructor(gatewayApi, http, logger) {
        this.gatewayApi = gatewayApi;
        this.http = http;
        this.logger = logger;
    }
    /**
     * Call api to get the patient profile
     */
    getPatientProfile(hrsid) {
        return this.gatewayApi.get('apiv2/patient/' + hrsid + '/profile', {});
    }
    /**
     * Call api to get the patient current metrics
     */
    getPatientCurrentMetrics(hrsid) {
        return this.gatewayApi.get('apiv2/patients/' + hrsid, {});
    }
    /**
     * Call api to get the surveys
     */
    getSurveyQuestionAndAnswerMetric(hrsid, currentDate) {
        return this.gatewayApi.get('apiv2/patients/' + hrsid + '/surveydetails/' + currentDate, {});
    }
    /**
     * Call api to mark the patient as reviewed
     */
    markPatientReviewed(patient) {
        return this.gatewayApi.post('apiv2/patient/' + patient.hrsid + '/profile', { review: true });
    }
    /**
     * Call api to mark the patient as not reviewed
     */
    markPatientUnreviewed(patient) {
        return this.gatewayApi.post('apiv2/patient/' + patient.hrsid + '/profile', { review: false });
    }
    /**
     * Call api to save or edit the quick note with today's date
     */
    saveQuickNote(detail, quicknote) {
        return this.gatewayApi.post('apiv2/patient/' + detail.hrsid + '/profile', { 'quicknote': { 'note': quicknote } });
    }
    resetPatientMetrics(hrsId, metrics) {
        return this.gatewayApi.post('apiv2/patient/' + hrsId + '/metrics/reset', metrics);
    }
    changePatientStatus(action, hrsId, data) {
        if (action === _enums__WEBPACK_IMPORTED_MODULE_5__["ActivationStatus"].ActionUnDischarge) {
            return this.gatewayApi.delete('apiv2/patients/' + hrsId + '/discharge', data);
        }
        // The end point does not accept 'resume' as a param. It will return 'pre-activated' for all resume and reactivate events.
        // For 'resume' events the patient's status will persist as 'activated' locally and the in the DB regardless of what gets returned
        // from the request. https://healthrecoverysolutions.atlassian.net/browse/JIR-5387
        if (action == _enums__WEBPACK_IMPORTED_MODULE_5__["ActivationStatus"].ActionResume) {
            action = _enums__WEBPACK_IMPORTED_MODULE_5__["ActivationStatus"].ActionReactivate;
        }
        return this.gatewayApi.post('apiv2/patients/' + hrsId + '/' + action, data);
    }
    addPatient(newPatientData) {
        return this.gatewayApi.post('apiv2/patient', newPatientData);
    }
    savePatientSettings(hrsid, data) {
        return this.gatewayApi.post('apiv2/patient/' + hrsid + '/profile', JSON.stringify(data));
    }
};
PatientProfileService.ctorParameters = () => [
    { type: _hrs_providers__WEBPACK_IMPORTED_MODULE_4__["GatewayApi"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NGXLogger"] }
];
PatientProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hrs_providers__WEBPACK_IMPORTED_MODULE_4__["GatewayApi"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NGXLogger"]])
], PatientProfileService);



/***/ }),

/***/ "./src/app/services/providers.ts":
/*!***************************************!*\
  !*** ./src/app/services/providers.ts ***!
  \***************************************/
/*! exports provided: AdminService, CommunicationService, DataExchangeService, Environment, FirebaseNotifications, HistoricalDataService, ModalService, PatientDeviceService, PatientListService, PatientProfileService, ReviewedStatusService, Settings, SurveyDetailsService, User, UserAgentProvider, ZoomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_admin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin/admin.service */ "./src/app/services/admin/admin.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return _admin_admin_service__WEBPACK_IMPORTED_MODULE_0__["AdminService"]; });

/* harmony import */ var _hrs_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hrs/providers */ "../../libs/providers/providers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommunicationService", function() { return _hrs_providers__WEBPACK_IMPORTED_MODULE_1__["CommunicationService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return _hrs_providers__WEBPACK_IMPORTED_MODULE_1__["ModalService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyDetailsService", function() { return _hrs_providers__WEBPACK_IMPORTED_MODULE_1__["SurveyDetailsService"]; });

/* harmony import */ var _data_exchange_data_exchange_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-exchange/data-exchange.service */ "./src/app/services/data-exchange/data-exchange.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataExchangeService", function() { return _data_exchange_data_exchange_service__WEBPACK_IMPORTED_MODULE_2__["DataExchangeService"]; });

/* harmony import */ var _environment_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environment/environment */ "./src/app/services/environment/environment.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Environment", function() { return _environment_environment__WEBPACK_IMPORTED_MODULE_3__["Environment"]; });

/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./firebase/firebase */ "./src/app/services/firebase/firebase.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FirebaseNotifications", function() { return _firebase_firebase__WEBPACK_IMPORTED_MODULE_4__["FirebaseNotifications"]; });

/* harmony import */ var _historical_data_historical_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./historical-data/historical-data.service */ "./src/app/services/historical-data/historical-data.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HistoricalDataService", function() { return _historical_data_historical_data_service__WEBPACK_IMPORTED_MODULE_5__["HistoricalDataService"]; });

/* harmony import */ var _patientProfile_patientDevice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patientProfile/patientDevice.service */ "./src/app/services/patientProfile/patientDevice.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PatientDeviceService", function() { return _patientProfile_patientDevice_service__WEBPACK_IMPORTED_MODULE_6__["PatientDeviceService"]; });

/* harmony import */ var _patientList_patientList_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./patientList/patientList.service */ "./src/app/services/patientList/patientList.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PatientListService", function() { return _patientList_patientList_service__WEBPACK_IMPORTED_MODULE_7__["PatientListService"]; });

/* harmony import */ var _patientProfile_patientProfile_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./patientProfile/patientProfile.service */ "./src/app/services/patientProfile/patientProfile.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PatientProfileService", function() { return _patientProfile_patientProfile_service__WEBPACK_IMPORTED_MODULE_8__["PatientProfileService"]; });

/* harmony import */ var _reviewed_status_reviewed_status_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reviewed-status/reviewed-status.service */ "./src/app/services/reviewed-status/reviewed-status.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReviewedStatusService", function() { return _reviewed_status_reviewed_status_service__WEBPACK_IMPORTED_MODULE_9__["ReviewedStatusService"]; });

/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settings/settings */ "./src/app/services/settings/settings.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return _settings_settings__WEBPACK_IMPORTED_MODULE_10__["Settings"]; });

/* harmony import */ var _user_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/user */ "./src/app/services/user/user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user_user__WEBPACK_IMPORTED_MODULE_11__["User"]; });

/* harmony import */ var _user_agent_user_agent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-agent/user-agent */ "./src/app/services/user-agent/user-agent.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserAgentProvider", function() { return _user_agent_user_agent__WEBPACK_IMPORTED_MODULE_12__["UserAgentProvider"]; });

/* harmony import */ var _zoom_zoom_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./zoom/zoom.service */ "./src/app/services/zoom/zoom.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZoomService", function() { return _zoom_zoom_service__WEBPACK_IMPORTED_MODULE_13__["ZoomService"]; });


















/***/ }),

/***/ "./src/app/services/reviewed-status/reviewed-status.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/services/reviewed-status/reviewed-status.service.ts ***!
  \*********************************************************************/
/*! exports provided: ReviewedStatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewedStatusService", function() { return ReviewedStatusService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _hrs_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hrs/providers */ "../../libs/providers/providers.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

var ReviewedStatusService_1;



let ReviewedStatusService = ReviewedStatusService_1 = class ReviewedStatusService {
    constructor(gatewayApi, translateService) {
        this.gatewayApi = gatewayApi;
        this.translateService = translateService;
    }
    popupReviewedStatusClass(reviewedStatus) {
        if (!reviewedStatus)
            reviewedStatus = 'ERROR';
        const cssStatusClassMap = {
            [ReviewedStatusService_1.REVIEWED]: 'toast-risk_low',
            [ReviewedStatusService_1.IN_PROGRESS]: 'toast-risk_med',
            [ReviewedStatusService_1.NON_REVIEWED]: 'toast-risk_high',
            ['ERROR']: 'toast-fail'
        };
        return cssStatusClassMap[reviewedStatus];
    }
    translateReviewedStatus(reviewedStatus) {
        const translatedStatusMap = {
            [ReviewedStatusService_1.REVIEWED]: this.translateService.instant('REVIEWED_STATUS_REVIEWED'),
            [ReviewedStatusService_1.IN_PROGRESS]: this.translateService.instant('REVIEWED_STATUS_IN_PROGRESS'),
            [ReviewedStatusService_1.NON_REVIEWED]: this.translateService.instant('REVIEWED_STATUS_NON_REVIEWED')
        };
        return translatedStatusMap[reviewedStatus];
    }
    requestedReviewedStatus(currentStatus) {
        // this tool selects the new reviewed status to submit when triggered from the patient list
        const requestedStatusMap = {
            [ReviewedStatusService_1.REVIEWED]: ReviewedStatusService_1.IN_PROGRESS,
            [ReviewedStatusService_1.IN_PROGRESS]: ReviewedStatusService_1.NON_REVIEWED,
            [ReviewedStatusService_1.NON_REVIEWED]: ReviewedStatusService_1.REVIEWED
        };
        return requestedStatusMap[currentStatus];
    }
    submitRequestedStatus(patientHrsid, requestedStatus) {
        return this.gatewayApi.post('apiv2/patient/' + patientHrsid + '/profile', { reviewedStatus: requestedStatus });
    }
};
ReviewedStatusService.REVIEWED = 'reviewed';
ReviewedStatusService.IN_PROGRESS = 'inprogress';
ReviewedStatusService.NON_REVIEWED = 'unreviewed';
ReviewedStatusService.ctorParameters = () => [
    { type: _hrs_providers__WEBPACK_IMPORTED_MODULE_2__["GatewayApi"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
];
ReviewedStatusService = ReviewedStatusService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hrs_providers__WEBPACK_IMPORTED_MODULE_2__["GatewayApi"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
], ReviewedStatusService);



/***/ }),

/***/ "./src/app/services/settings/settings.ts":
/*!***********************************************!*\
  !*** ./src/app/services/settings/settings.ts ***!
  \***********************************************/
/*! exports provided: Settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/dist/index.js");
/* harmony import */ var _hrs_utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hrs/utility */ "../../libs/utility/index.ts");




/**
 * A simple settings/config class for storing key/value pairs
 * Persistence requires Env to have flag "SYSTEM_MOBILE_SECURITY_OPTIONAL" enabled
 */
let Settings = class Settings {
    constructor(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = 'settings';
        this.hasStorage = false;
        this.settings = {};
        this._defaults = defaults;
    }
    /**
     * For security purposes the default behavior is to not use Storage unless Env opts out of advanced security
     * This method gets triggered by User.loginWithData once the environment data has loaded and flag
     * "SYSTEM_MOBILE_SECURITY_OPTIONAL" (locally known as: Environment.SETTING_OPT_OUT_ADVANCED_SECURITY) is present
     */
    configureStorage(hasStorage) {
        hasStorage ? this.enableDataStorage() : this.disableDataStorage();
    }
    enableDataStorage() {
        this.hasStorage = true;
    }
    disableDataStorage() {
        this.hasStorage = false;
        this.storage.clear();
        // Store Domain so that the changes are not lost on force-kill.
        const domainName = _hrs_utility__WEBPACK_IMPORTED_MODULE_3__["BuildUtility"].getDomainName();
        const updatedDomain = domainName === 'hrsdomain' ? _hrs_utility__WEBPACK_IMPORTED_MODULE_3__["BuildUtility"].getHRSDomain() : domainName;
        this.storage.set('updatedDomain', updatedDomain);
    }
    load() {
        return this.storage.get(this.SETTINGS_KEY).then((value) => {
            if (value) {
                this.settings = value;
                return this._mergeDefaults(this._defaults);
            }
            else {
                return this.setAll(this._defaults).then((val) => {
                    this.settings = val;
                });
            }
        });
    }
    _mergeDefaults(defaults) {
        // eslint-disable-next-line guard-for-in
        for (let k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.hasStorage ? this.setAll(this.settings) : Promise.resolve();
    }
    merge(settings) {
        for (let k in settings) {
            if (k) {
                this.settings[k] = settings[k];
            }
        }
        if (this.hasStorage)
            return this.save();
    }
    setValue(key, value) {
        this.settings[key] = value;
        return this.hasStorage ? this.storage.set(this.SETTINGS_KEY, this.settings) : Promise.resolve();
    }
    setAll(value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    }
    getValue(key) {
        return this.settings[key];
    }
    save() {
        this.setAll(this.settings);
    }
    get allSettings() {
        return this.settings;
    }
};
Settings.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: undefined }
];
Settings = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], Object])
], Settings);



/***/ }),

/***/ "./src/app/services/user-agent/user-agent.ts":
/*!***************************************************!*\
  !*** ./src/app/services/user-agent/user-agent.ts ***!
  \***************************************************/
/*! exports provided: UserAgentProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAgentProvider", function() { return UserAgentProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _hrs_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hrs/providers */ "../../libs/providers/providers.ts");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _hrs_gateway__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @hrs/gateway */ "../../libs/gateway/index.ts");








/*
  The main goal of this class is to provider a custom header field for all requests it should look like
  "hrs-user-agent": "ClinicianConnectMobile/1.23.23 UUID/1231201231-123-123123j123lj23 iOS/12.01"
*/
let UserAgentProvider = class UserAgentProvider {
    constructor(appVersion, device, gatewayApi, gatewayService, logger, platform) {
        this.appVersion = appVersion;
        this.device = device;
        this.gatewayApi = gatewayApi;
        this.gatewayService = gatewayService;
        this.logger = logger;
        this.platform = platform;
    }
    getUserAgentInfo() {
        if (this.platform.is('cordova')) {
            this.getAppName().then(() => {
                this.getAppVersion().then(() => {
                    this.getUUID();
                    this.getOSName();
                    this.getOSVersion();
                    this._hrsUserAgentHeader = `${this._appName}/${this._appVersionNumber} UUID/${this._uuid} ${this._osName}/${this._osVersion}`;
                    this.gatewayApi.hrsUserAgentHeader = this._hrsUserAgentHeader;
                    this.gatewayService.hrsUserAgentHeader = this._hrsUserAgentHeader;
                });
            });
        }
    }
    getAppName() {
        return this.appVersion.getAppName().then((name) => {
            // remove whitespace
            this._appName = name.replace(/\s/g, '');
        });
    }
    getAppVersion() {
        return this.appVersion.getVersionNumber().then((appVersionNumber) => {
            this._appVersionNumber = appVersionNumber;
        });
    }
    getUUID() {
        this._uuid = this.device.uuid;
    }
    getOSName() {
        if (this.platform.is('ios')) {
            this._osName = 'iOS';
        }
        else if (this.platform.is('android')) {
            this._osName = 'Android';
        }
    }
    getOSVersion() {
        // there is a .str on this.platform.version but if there is no minor version it reads '9.undefined'
        // IONIC UPGRADE - this original code was not working with upgrade
        //   this._osVersion = this.platform.versions().num.toString();
        this.getAppVersion();
        this._osVersion = this._appVersionNumber;
    }
};
UserAgentProvider.ctorParameters = () => [
    { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_2__["AppVersion"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_3__["Device"] },
    { type: _hrs_providers__WEBPACK_IMPORTED_MODULE_4__["GatewayApi"] },
    { type: _hrs_gateway__WEBPACK_IMPORTED_MODULE_7__["GatewayService"] },
    { type: ngx_logger__WEBPACK_IMPORTED_MODULE_5__["NGXLogger"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] }
];
UserAgentProvider = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_2__["AppVersion"],
        _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_3__["Device"],
        _hrs_providers__WEBPACK_IMPORTED_MODULE_4__["GatewayApi"],
        _hrs_gateway__WEBPACK_IMPORTED_MODULE_7__["GatewayService"],
        ngx_logger__WEBPACK_IMPORTED_MODULE_5__["NGXLogger"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]])
], UserAgentProvider);



/***/ }),

/***/ "./src/app/services/user/user.ts":
/*!***************************************!*\
  !*** ./src/app/services/user/user.ts ***!
  \***************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _hrs_gateway__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hrs/gateway */ "../../libs/gateway/index.ts");
/* harmony import */ var _hrs_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @hrs/providers */ "../../libs/providers/providers.ts");
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebase/firebase */ "./src/app/services/firebase/firebase.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm/operators/index.js");
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../settings/settings */ "./src/app/services/settings/settings.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/dist/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm/index.js");
/* harmony import */ var _clinician_providers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @clinician/providers */ "./src/app/services/providers.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _hrs_utility__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @hrs/utility */ "../../libs/utility/index.ts");
















/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/etc.
 *
 * This User provider makes calls to our API at the `login` endpoints.
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
let User = class User {
    constructor(gatewayApi, http, firebase, logger, platform, settings, storage, tokenService, navCtrl, gateway, environment, router) {
        this.gatewayApi = gatewayApi;
        this.http = http;
        this.firebase = firebase;
        this.logger = logger;
        this.platform = platform;
        this.settings = settings;
        this.storage = storage;
        this.tokenService = tokenService;
        this.navCtrl = navCtrl;
        this.gateway = gateway;
        this.environment = environment;
        this.router = router;
        this.loggingInSSOSubject = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        this.loginResultSubject = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        this.sourceApp = 'ClinicianConnect Mobile';
        this.tokenService.sourceApp = this.sourceApp;
        this.tokenService.refreshTokenSubject.subscribe((tokenData) => {
            this.settings.setValue('token', tokenData.attributes.token);
            this.settings.setValue('refresh', tokenData.attributes.refresh);
            this.data = jwt_decode__WEBPACK_IMPORTED_MODULE_10__(tokenData.attributes.token);
            this.settings.setValue('userData', this.data);
        });
    }
    loadFromSettings(settings) {
        const data = settings.getValue('userData');
        if (data) {
            this.data = data;
        }
        const session = settings.getValue('sessionData');
        if (session) {
            this.session = session;
        }
    }
    getClinicianName() {
        return this.session.firstname + ' ' + this.session.lastname;
    }
    canContactPatient() {
        return (this.data && (this.data.roles.includes('Moderator') ||
            this.data.roles.includes('Clinician') ||
            this.data.roles.includes('Pharmacist')));
    }
    canEditPatientInfo() {
        return (this.data && (this.data.roles.includes('Moderator') ||
            this.data.roles.includes('Clinician')));
    }
    isReadOnlyClinician() {
        return (this.data && !this.canEditPatientInfo() && this.data.roles.includes('ReadOnly'));
    }
    isLoggedIn() {
        return (this.data &&
            this.data.exp > Math.floor(Date.now() / 1000) &&
            this.gatewayApi.isLoggedIn());
    }
    login(accountInfo) {
        const credentials = {
            data: {
                type: 'credentials',
                username: accountInfo.user,
                password: accountInfo.pass,
                source: this.sourceApp
            }
        };
        return this.loginWithData(credentials);
    }
    loginWithData(credentials) {
        let data = this.gatewayApi.login(credentials);
        return data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])({
            next: (res) => {
                let resData = res.data.attributes;
                this.data = jwt_decode__WEBPACK_IMPORTED_MODULE_10__(resData.token);
                if (this.data.type !== 'clinician') {
                    // Logout user if not of clinician user-type.
                    this.data.clear();
                    this.session = undefined;
                    this.router.navigateByUrl('/welcome');
                    this.loginResultSubject.next(false);
                    return;
                }
                // for backwards compatibility subgroups may come in as JSON strings
                // this conversion to arrays allows for proper handling of clins with multiple subgroups
                this.data.subgroup = _hrs_utility__WEBPACK_IMPORTED_MODULE_15__["CollectionUtility"].convertToArray(this.data.subgroup);
                this.tokenService.storeTokens(res.data);
                if (this.platform.is('cordova')) {
                    this.firebase.initializeFirebase(this.data.hrsid);
                }
                let getEnvironmentSubscription = this.environment.getEnvironment().subscribe(() => {
                    this.settings.setValue('userData', this.data);
                    this.settings.setValue('token', resData.token);
                    this.settings.setValue('refresh', resData.refresh);
                    getEnvironmentSubscription.unsubscribe();
                });
                let getSessionDataSubscription = this.getSessionData().subscribe(() => {
                    getSessionDataSubscription.unsubscribe();
                });
                this.loginResultSubject.next(true);
            },
            error: () => {
                this.loginResultSubject.next(false);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["of"])({});
            }
        }));
    }
    /**
     * Fetch for specific information like clinician name that are not included in the login or environment response
     */
    getSessionData() {
        let getDetails = this.gatewayApi.get('apiv2/', {});
        return getDetails.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])((res) => {
            this.session = res;
            this.settings.setValue('sessionData', res);
        }));
    }
    /**
     * Log the user out, which forgets the session
     */
    logout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.isLoggedIn()) {
                this.storage.clear();
                this.data = undefined;
                this.session = undefined;
                yield this.gatewayApi.logout();
                if (this.platform.is('cordova')) {
                    this.firebase.deleteInstanceId();
                }
                this.router.navigateByUrl('/welcome');
                // Store Domain so that the changes are not lost on force-kill.
                const domainName = _hrs_utility__WEBPACK_IMPORTED_MODULE_15__["BuildUtility"].getDomainName();
                const updatedDomain = domainName === 'hrsdomain' ? _hrs_utility__WEBPACK_IMPORTED_MODULE_15__["BuildUtility"].getHRSDomain() : domainName;
                this.storage.set('updatedDomain', updatedDomain);
            }
        });
    }
};
User.ctorParameters = () => [
    { type: _hrs_providers__WEBPACK_IMPORTED_MODULE_6__["GatewayApi"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _firebase_firebase__WEBPACK_IMPORTED_MODULE_7__["FirebaseNotifications"] },
    { type: ngx_logger__WEBPACK_IMPORTED_MODULE_4__["NGXLogger"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _settings_settings__WEBPACK_IMPORTED_MODULE_9__["Settings"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"] },
    { type: _hrs_providers__WEBPACK_IMPORTED_MODULE_6__["TokenService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _hrs_gateway__WEBPACK_IMPORTED_MODULE_5__["GatewayService"] },
    { type: _clinician_providers__WEBPACK_IMPORTED_MODULE_13__["Environment"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"] }
];
User = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hrs_providers__WEBPACK_IMPORTED_MODULE_6__["GatewayApi"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _firebase_firebase__WEBPACK_IMPORTED_MODULE_7__["FirebaseNotifications"],
        ngx_logger__WEBPACK_IMPORTED_MODULE_4__["NGXLogger"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _settings_settings__WEBPACK_IMPORTED_MODULE_9__["Settings"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"],
        _hrs_providers__WEBPACK_IMPORTED_MODULE_6__["TokenService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _hrs_gateway__WEBPACK_IMPORTED_MODULE_5__["GatewayService"],
        _clinician_providers__WEBPACK_IMPORTED_MODULE_13__["Environment"],
        _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]])
], User);



/***/ }),

/***/ "./src/app/services/zoom/zoom.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/zoom/zoom.service.ts ***!
  \***********************************************/
/*! exports provided: ZoomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomService", function() { return ZoomService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _hrs_gateway__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hrs/gateway */ "../../libs/gateway/index.ts");
/* harmony import */ var _user_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/user */ "./src/app/services/user/user.ts");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _ionic_native_zoom_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/zoom/ngx */ "./node_modules/@ionic-native/zoom/ngx/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../settings/settings */ "./src/app/services/settings/settings.ts");









let ZoomService = class ZoomService {
    constructor(gateway, logger, user, zoom, platform, settings) {
        this.gateway = gateway;
        this.logger = logger;
        this.user = user;
        this.zoom = zoom;
        this.platform = platform;
        this.settings = settings;
    }
    initialize(callback) {
        if (this.initialized || this.initializing) {
            return;
        }
        this.initializing = true;
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.subscription = this.gateway.get({ endpoint: 'v1/video-secrets' }).pipe(Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["map"])((res) => {
            let key = res.data.attributes.key;
            let secret = res.data.attributes.secret;
            if (this.platform.is('cordova') && key && secret) {
                this.zoom.initialize(key, secret).then(() => {
                    this.logger.info('Zoom SDK initialized');
                    this.initialized = true;
                    this.initializing = false;
                    this.zoom.setLocale(this.settings.getValue('language') || 'en');
                    if (callback) {
                        callback();
                    }
                }).catch((err) => {
                    this.logger.error('Error initializing Zoom SDK', err);
                    this.initializing = false;
                });
            }
            else {
                this.initializing = false;
            }
        }), Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["catchError"])((err) => {
            this.logger.error(err);
            this.initializing = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])({});
        })).subscribe();
    }
    /**
     * Method to initialize Zoom SDK. This needs a JWT token which is associated with a meeting number.
     * Thus before joining a call, we init zoom with this token.
     * @param jwtToken
     */
    initWithJWTToken(jwtToken) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.platform.is('cordova') && jwtToken) {
                yield cordova.plugins.Zoom.initializeWithJWT(jwtToken).then((message) => {
                    this.zoom.setLocale(this.settings.getValue('language') || 'en');
                    this.logger.log('Initialized zoom sdk with jwt token');
                }).catch((err) => {
                    this.logger.error('Error initializing Zoom SDK', err);
                });
            }
            else {
                this.logger.log('JWT token not present, unable to init zoom');
            }
        });
    }
    joinMeeting(meetingNumber, meetingPassword, displayName) {
        return this.zoom.joinMeeting(meetingNumber, meetingPassword, displayName, {
            'no_dial_in_via_phone': true,
            'no_dial_out_to_phone': true,
            'participant_id': ''
        });
    }
};
ZoomService.ctorParameters = () => [
    { type: _hrs_gateway__WEBPACK_IMPORTED_MODULE_2__["GatewayResourceService"] },
    { type: ngx_logger__WEBPACK_IMPORTED_MODULE_4__["NGXLogger"] },
    { type: _user_user__WEBPACK_IMPORTED_MODULE_3__["User"] },
    { type: _ionic_native_zoom_ngx__WEBPACK_IMPORTED_MODULE_5__["Zoom"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _settings_settings__WEBPACK_IMPORTED_MODULE_8__["Settings"] }
];
ZoomService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hrs_gateway__WEBPACK_IMPORTED_MODULE_2__["GatewayResourceService"],
        ngx_logger__WEBPACK_IMPORTED_MODULE_4__["NGXLogger"],
        _user_user__WEBPACK_IMPORTED_MODULE_3__["User"],
        _ionic_native_zoom_ngx__WEBPACK_IMPORTED_MODULE_5__["Zoom"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"],
        _settings_settings__WEBPACK_IMPORTED_MODULE_8__["Settings"]])
], ZoomService);



/***/ }),

/***/ "./src/common/models/daily-metrics.model.ts":
/*!**************************************************!*\
  !*** ./src/common/models/daily-metrics.model.ts ***!
  \**************************************************/
/*! exports provided: MetricType, DailyMetricsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricType", function() { return MetricType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyMetricsModel", function() { return DailyMetricsModel; });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ "./src/common/models/models.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


const MetricType = {
    ACTIVITY: 'activity',
    BLOOD_PRESSURE: 'bloodpressure',
    GLUCOSE: 'glucose',
    MEDICATION: 'medication',
    PULSE_OX: 'pulseox',
    TEMPERATURE: 'temperature',
    WEIGHT: 'weight',
    WOUND_IMAGING: 'woundimaging',
    STETHOSCOPE: 'stethoscope',
    SURVEY: 'survey',
    STEPS: 'steps'
};
class DailyMetricsModel {
    constructor(data) {
        this.parseMetrics(data.metrics);
        this.setDate(data);
        if (data.risk && data.risk.length > 0) {
            this.getMetricRiskClasses(data.risk[0]);
        }
    }
    static init(data) {
        return new DailyMetricsModel(data);
    }
    setDate(data) {
        this.date = moment__WEBPACK_IMPORTED_MODULE_1__["unix"](data.ts / 1000);
    }
    parseMetrics(metrics) {
        if (!metrics)
            return;
        if (metrics.activity && metrics.activity.data) {
            this.activity = this.parseEntry(MetricType.ACTIVITY, metrics.activity.data);
        }
        if (metrics.bloodpressure && metrics.bloodpressure.data) {
            this.bloodpressure = this.parseEntry(MetricType.BLOOD_PRESSURE, metrics.bloodpressure.data);
        }
        if (metrics.glucose && metrics.glucose.data) {
            this.glucose = this.parseEntry(MetricType.GLUCOSE, metrics.glucose.data);
        }
        if (metrics.medication && metrics.medication.medications) {
            this.medication = this.parseEntry(MetricType.MEDICATION, metrics.medication.medications);
        }
        if (metrics.pulseox && metrics.pulseox.data) {
            this.pulseox = this.parseEntry(MetricType.PULSE_OX, metrics.pulseox.data);
        }
        if (metrics.temperature && metrics.temperature.data) {
            this.temperature = this.parseEntry(MetricType.TEMPERATURE, metrics.temperature.data);
        }
        if (metrics.weight && metrics.weight.data) {
            this.weight = this.parseEntry(MetricType.WEIGHT, metrics.weight.data);
        }
        if (metrics.stethoscope && metrics.stethoscope.data) {
            this.stethoscope = this.parseEntry(MetricType.STETHOSCOPE, metrics.stethoscope.data);
        }
        if (metrics.survey && metrics.survey.questions) {
            this.survey = this.parseEntry(MetricType.SURVEY, metrics.survey.questions);
        }
        if (metrics.woundimaging && metrics.woundimaging.data) {
            this.woundimaging = this.parseEntry(MetricType.WOUND_IMAGING, metrics.woundimaging.data);
        }
        if (metrics.steps && metrics.steps.data) {
            this.steps = this.parseEntry(MetricType.STEPS, metrics.steps.data);
        }
    }
    parseEntry(type, entries) {
        let entryModels = [];
        let entryCount = 0;
        for (let i = 0; i < entries.length; i++) {
            const currentEntry = entries[i];
            const entryModel = this.newEntryModel(type, currentEntry);
            if (currentEntry.deleted)
                entryModel.deleted = true;
            if (currentEntry.type === 'manual' || currentEntry.type === 'Manual')
                entryModel.manual = true;
            if (type === MetricType.SURVEY && currentEntry.answer)
                entryCount++;
            if (type === MetricType.MEDICATION && currentEntry.ts)
                entryCount++;
            entryModels.unshift(entryModel);
        }
        if (type === MetricType.SURVEY)
            this.surveyAnswerTotal = entryCount;
        if (type === MetricType.MEDICATION)
            this.medsTakenTotal = entryCount;
        return entryModels;
    }
    newEntryModel(type, entry) {
        switch (type) {
            case MetricType.ACTIVITY:
                return new _models__WEBPACK_IMPORTED_MODULE_0__["ActivityEntry"](entry);
            case MetricType.BLOOD_PRESSURE:
                return new _models__WEBPACK_IMPORTED_MODULE_0__["BloodPressureEntry"](entry);
            case MetricType.GLUCOSE:
                return new _models__WEBPACK_IMPORTED_MODULE_0__["GlucoseEntry"](entry);
            case MetricType.MEDICATION:
                return new _models__WEBPACK_IMPORTED_MODULE_0__["MedicationEntry"](entry);
            case MetricType.PULSE_OX:
                return new _models__WEBPACK_IMPORTED_MODULE_0__["PulseOxEntry"](entry);
            case MetricType.TEMPERATURE:
                return new _models__WEBPACK_IMPORTED_MODULE_0__["TemperatureEntry"](entry);
            case MetricType.WEIGHT:
                return new _models__WEBPACK_IMPORTED_MODULE_0__["WeightEntry"](entry);
            case MetricType.WOUND_IMAGING:
                return new _models__WEBPACK_IMPORTED_MODULE_0__["WoundImageEntry"](entry);
            case MetricType.STETHOSCOPE:
                return new _models__WEBPACK_IMPORTED_MODULE_0__["StethoscopeEntry"](entry);
            case MetricType.SURVEY:
                return new _models__WEBPACK_IMPORTED_MODULE_0__["SurveyEntry"](entry);
            case MetricType.STEPS:
                return new _models__WEBPACK_IMPORTED_MODULE_0__["StepsEntry"](entry);
            default:
                break;
        }
    }
    getMetricRiskClasses(riskData) {
        const metricClasses = {};
        if (riskData.details) {
            let riskDetails = riskData.details;
            for (let i = 0; i < riskDetails.length; i++) {
                let metricType = riskDetails[i].metrics[0];
                metricClasses[metricType + 'Risk'] = riskDetails[i].type;
            }
        }
        this.riskClasses = metricClasses;
    }
}
DailyMetricsModel.ctorParameters = () => [
    null
];


/***/ }),

/***/ "./src/common/models/metric-models/activity-entry.model.ts":
/*!*****************************************************************!*\
  !*** ./src/common/models/metric-models/activity-entry.model.ts ***!
  \*****************************************************************/
/*! exports provided: ActivityEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityEntry", function() { return ActivityEntry; });
/* harmony import */ var _hrs_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hrs/models */ "../../libs/models/models.ts");

class ActivityEntry extends _hrs_models__WEBPACK_IMPORTED_MODULE_0__["MetricEntry"] {
    constructor(entry) {
        super(entry.ts, entry.id);
        this.duration = entry.duration;
    }
}
ActivityEntry.ctorParameters = () => [
    null
];


/***/ }),

/***/ "./src/common/models/metric-models/blood-pressure-entry.model.ts":
/*!***********************************************************************!*\
  !*** ./src/common/models/metric-models/blood-pressure-entry.model.ts ***!
  \***********************************************************************/
/*! exports provided: BloodPressureEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloodPressureEntry", function() { return BloodPressureEntry; });
/* harmony import */ var _hrs_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hrs/models */ "../../libs/models/models.ts");

class BloodPressureEntry extends _hrs_models__WEBPACK_IMPORTED_MODULE_0__["MetricEntry"] {
    constructor(entry) {
        super(entry.ts, entry.id);
        this.heartrate = entry.heartrate;
        this.systolic = entry.systolic;
        this.diastolic = entry.diastolic;
        this.map = BloodPressureEntry.calculateMAP(entry.systolic, entry.diastolic);
    }
    static calculateMAP(systolic, diastolic) {
        const map = Math.round(((2 * diastolic) + systolic) / 3);
        return map;
    }
}
BloodPressureEntry.ctorParameters = () => [
    null
];


/***/ }),

/***/ "./src/common/models/metric-models/glucose-entry.model.ts":
/*!****************************************************************!*\
  !*** ./src/common/models/metric-models/glucose-entry.model.ts ***!
  \****************************************************************/
/*! exports provided: GlucoseEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlucoseEntry", function() { return GlucoseEntry; });
/* harmony import */ var _hrs_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hrs/models */ "../../libs/models/models.ts");

class GlucoseEntry extends _hrs_models__WEBPACK_IMPORTED_MODULE_0__["MetricEntry"] {
    constructor(entry) {
        super(entry.ts, entry.id);
        this.glucose = entry.glucose;
    }
}
GlucoseEntry.ctorParameters = () => [
    null
];


/***/ }),

/***/ "./src/common/models/metric-models/medication-entry.model.ts":
/*!*******************************************************************!*\
  !*** ./src/common/models/metric-models/medication-entry.model.ts ***!
  \*******************************************************************/
/*! exports provided: MedicationEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicationEntry", function() { return MedicationEntry; });
/* harmony import */ var _hrs_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hrs/models */ "../../libs/models/models.ts");

class MedicationEntry extends _hrs_models__WEBPACK_IMPORTED_MODULE_0__["MetricEntry"] {
    constructor(entry) {
        super(entry.ts, entry.id);
        this.name = entry.med;
        this.dose = entry.dose;
        this.schedule = entry.schedule;
        this.time = entry.time;
        this.ts = entry.ts;
    }
}
MedicationEntry.ctorParameters = () => [
    null
];


/***/ }),

/***/ "./src/common/models/metric-models/pulse-ox-entry.model.ts":
/*!*****************************************************************!*\
  !*** ./src/common/models/metric-models/pulse-ox-entry.model.ts ***!
  \*****************************************************************/
/*! exports provided: PulseOxEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PulseOxEntry", function() { return PulseOxEntry; });
/* harmony import */ var _hrs_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hrs/models */ "../../libs/models/models.ts");

class PulseOxEntry extends _hrs_models__WEBPACK_IMPORTED_MODULE_0__["MetricEntry"] {
    constructor(entry) {
        super(entry.ts, entry.id);
        this.spo2 = entry.spo2;
        this.heartrate = entry.heartrate;
    }
}
PulseOxEntry.ctorParameters = () => [
    null
];


/***/ }),

/***/ "./src/common/models/metric-models/steps-entry.model.ts":
/*!**************************************************************!*\
  !*** ./src/common/models/metric-models/steps-entry.model.ts ***!
  \**************************************************************/
/*! exports provided: StepsEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepsEntry", function() { return StepsEntry; });
/* harmony import */ var _hrs_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hrs/models */ "../../libs/models/models.ts");

class StepsEntry extends _hrs_models__WEBPACK_IMPORTED_MODULE_0__["MetricEntry"] {
    constructor(entry) {
        super(entry.ts, entry.id);
        this.steps = entry.steps;
    }
}
StepsEntry.ctorParameters = () => [
    null
];


/***/ }),

/***/ "./src/common/models/metric-models/stethoscope-entry.model.ts":
/*!********************************************************************!*\
  !*** ./src/common/models/metric-models/stethoscope-entry.model.ts ***!
  \********************************************************************/
/*! exports provided: StethoscopeEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StethoscopeEntry", function() { return StethoscopeEntry; });
/* harmony import */ var _clinician_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @clinician/models */ "./src/common/models/models.ts");
/* harmony import */ var _hrs_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hrs/utility */ "../../libs/utility/index.ts");


class StethoscopeEntry extends _clinician_models__WEBPACK_IMPORTED_MODULE_0__["MetricEntry"] {
    constructor(entry) {
        super(_hrs_utility__WEBPACK_IMPORTED_MODULE_1__["ConvertTime"].isoToTimestamp(entry.takenAt), entry.id);
    }
}
StethoscopeEntry.ctorParameters = () => [
    null
];


/***/ }),

/***/ "./src/common/models/metric-models/temperature-entry.model.ts":
/*!********************************************************************!*\
  !*** ./src/common/models/metric-models/temperature-entry.model.ts ***!
  \********************************************************************/
/*! exports provided: TemperatureEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemperatureEntry", function() { return TemperatureEntry; });
/* harmony import */ var _hrs_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hrs/models */ "../../libs/models/models.ts");

class TemperatureEntry extends _hrs_models__WEBPACK_IMPORTED_MODULE_0__["MetricEntry"] {
    constructor(entry) {
        super(entry.ts, entry.id);
        this.temperature = entry.temperature;
        this.unit = entry.unit;
    }
}
TemperatureEntry.ctorParameters = () => [
    null
];


/***/ }),

/***/ "./src/common/models/metric-models/weight-entry.model.ts":
/*!***************************************************************!*\
  !*** ./src/common/models/metric-models/weight-entry.model.ts ***!
  \***************************************************************/
/*! exports provided: WeightEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeightEntry", function() { return WeightEntry; });
/* harmony import */ var _hrs_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hrs/models */ "../../libs/models/models.ts");

class WeightEntry extends _hrs_models__WEBPACK_IMPORTED_MODULE_0__["MetricEntry"] {
    constructor(entry) {
        super(entry.ts, entry.id);
        this.weight = entry.weight;
    }
}
WeightEntry.ctorParameters = () => [
    null
];


/***/ }),

/***/ "./src/common/models/metric-models/wound-image-entry.model.ts":
/*!********************************************************************!*\
  !*** ./src/common/models/metric-models/wound-image-entry.model.ts ***!
  \********************************************************************/
/*! exports provided: WoundImageEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WoundImageEntry", function() { return WoundImageEntry; });
/* harmony import */ var _hrs_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hrs/models */ "../../libs/models/models.ts");

class WoundImageEntry extends _hrs_models__WEBPACK_IMPORTED_MODULE_0__["MetricEntry"] {
    constructor(entry) {
        super(entry.ts, entry.id);
    }
}
WoundImageEntry.ctorParameters = () => [
    null
];


/***/ }),

/***/ "./src/common/models/models.ts":
/*!*************************************!*\
  !*** ./src/common/models/models.ts ***!
  \*************************************/
/*! exports provided: ActivityEntry, BloodPressureEntry, GlucoseEntry, MedicationEntry, MetricEntry, Patient, PatientSettingsResponse, PulseOxEntry, StepsEntry, StethoscopeEntry, SurveyEntry, TemperatureEntry, WeightEntry, WoundImageEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _metric_models_activity_entry_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metric-models/activity-entry.model */ "./src/common/models/metric-models/activity-entry.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivityEntry", function() { return _metric_models_activity_entry_model__WEBPACK_IMPORTED_MODULE_0__["ActivityEntry"]; });

/* harmony import */ var _metric_models_blood_pressure_entry_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./metric-models/blood-pressure-entry.model */ "./src/common/models/metric-models/blood-pressure-entry.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BloodPressureEntry", function() { return _metric_models_blood_pressure_entry_model__WEBPACK_IMPORTED_MODULE_1__["BloodPressureEntry"]; });

/* harmony import */ var _metric_models_glucose_entry_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metric-models/glucose-entry.model */ "./src/common/models/metric-models/glucose-entry.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlucoseEntry", function() { return _metric_models_glucose_entry_model__WEBPACK_IMPORTED_MODULE_2__["GlucoseEntry"]; });

/* harmony import */ var _metric_models_medication_entry_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metric-models/medication-entry.model */ "./src/common/models/metric-models/medication-entry.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MedicationEntry", function() { return _metric_models_medication_entry_model__WEBPACK_IMPORTED_MODULE_3__["MedicationEntry"]; });

/* harmony import */ var _hrs_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hrs/models */ "../../libs/models/models.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetricEntry", function() { return _hrs_models__WEBPACK_IMPORTED_MODULE_4__["MetricEntry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyEntry", function() { return _hrs_models__WEBPACK_IMPORTED_MODULE_4__["SurveyEntry"]; });

/* harmony import */ var _patient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patient */ "./src/common/models/patient.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Patient", function() { return _patient__WEBPACK_IMPORTED_MODULE_5__["Patient"]; });

/* harmony import */ var _patient_settings_response__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patient-settings-response */ "./src/common/models/patient-settings-response.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PatientSettingsResponse", function() { return _patient_settings_response__WEBPACK_IMPORTED_MODULE_6__["PatientSettingsResponse"]; });

/* harmony import */ var _metric_models_pulse_ox_entry_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./metric-models/pulse-ox-entry.model */ "./src/common/models/metric-models/pulse-ox-entry.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PulseOxEntry", function() { return _metric_models_pulse_ox_entry_model__WEBPACK_IMPORTED_MODULE_7__["PulseOxEntry"]; });

/* harmony import */ var _metric_models_steps_entry_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./metric-models/steps-entry.model */ "./src/common/models/metric-models/steps-entry.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StepsEntry", function() { return _metric_models_steps_entry_model__WEBPACK_IMPORTED_MODULE_8__["StepsEntry"]; });

/* harmony import */ var _metric_models_stethoscope_entry_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./metric-models/stethoscope-entry.model */ "./src/common/models/metric-models/stethoscope-entry.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StethoscopeEntry", function() { return _metric_models_stethoscope_entry_model__WEBPACK_IMPORTED_MODULE_9__["StethoscopeEntry"]; });

/* harmony import */ var _metric_models_temperature_entry_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./metric-models/temperature-entry.model */ "./src/common/models/metric-models/temperature-entry.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemperatureEntry", function() { return _metric_models_temperature_entry_model__WEBPACK_IMPORTED_MODULE_10__["TemperatureEntry"]; });

/* harmony import */ var _metric_models_weight_entry_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./metric-models/weight-entry.model */ "./src/common/models/metric-models/weight-entry.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WeightEntry", function() { return _metric_models_weight_entry_model__WEBPACK_IMPORTED_MODULE_11__["WeightEntry"]; });

/* harmony import */ var _metric_models_wound_image_entry_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./metric-models/wound-image-entry.model */ "./src/common/models/metric-models/wound-image-entry.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WoundImageEntry", function() { return _metric_models_wound_image_entry_model__WEBPACK_IMPORTED_MODULE_12__["WoundImageEntry"]; });

















/***/ }),

/***/ "./src/common/models/patient-settings-response.ts":
/*!********************************************************!*\
  !*** ./src/common/models/patient-settings-response.ts ***!
  \********************************************************/
/*! exports provided: PatientSettingsResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientSettingsResponse", function() { return PatientSettingsResponse; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

class PatientSettingsResponse {
    constructor(response) {
        this.pid = response.data.pid;
        this.name = response.data.name;
        this.gender = response.data.gender;
        this.dob = (response.data.dob ? moment__WEBPACK_IMPORTED_MODULE_0__(response.data.dob, 'MM-DD-YYYY').format('MM/DD/YYYY') : null);
        this.phone = response.data.phone;
        this.subgroup = response.data.subgroup;
        this.testpatient = response.data.testpatient ? 'Yes' : 'No';
        this.language = response.data.language;
        this.volume = response.data.volume;
        this.audioreminders = response.data.audioreminders;
        this.alternatefirstname = response.data.alternatefirstname;
        this.alternatemiddlename = response.data.alternatemiddlename;
        this.alternatelastname = response.data.alternatelastname;
        this.alternatetelephone = response.data.alternatetelephone;
        this.alternaterelationship = response.data.alternaterelationship;
        this.PATIENTINFO_CUSTOMATTRIBUTES = response.data.PATIENTINFO_CUSTOMATTRIBUTES;
        this.lasthospitalization = this.formatLastHospitalization(response);
    }
    formatLastHospitalization(response) {
        // Last Hospitalization timestamp varies between milliseconds and seconds creating issues
        // Convert all TimeStamp values to milliseconds
        let lastHospitalization = response.data.lasthospitalization < 10000000000 &&
            typeof response.data.lasthospitalization === 'number' ?
            response.data.lasthospitalization * 1000 :
            response.data.lasthospitalization;
        return response.data.lasthospitalization = lastHospitalization ?
            moment__WEBPACK_IMPORTED_MODULE_0__(new Date(lastHospitalization)).format('MM/DD/YYYY') : null;
    }
}
PatientSettingsResponse.ctorParameters = () => [
    null
];


/***/ }),

/***/ "./src/common/models/patient.ts":
/*!**************************************!*\
  !*** ./src/common/models/patient.ts ***!
  \**************************************/
/*! exports provided: Patient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Patient", function() { return Patient; });
class Patient {
    constructor(data) {
        this.set(data);
        // Quick and dirty extend/assign fields to this model
        for (const d in data) {
            // I never see conditions return an array like ['empty'] but i heard its a thing
            // doing this just in case I am wrong, I<3apiv2
            if (d === 'conditions' && data.conditions.length > 0 && data.conditions[0] !== 'empty') {
                // creates a string of conditions separated with a comma and space
                this.conditionsString = data[d].join(', ');
            }
        }
    }
    set(data) {
        Object.assign(this, data);
    }
}
Patient.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/env */ "../../libs/environments/environment");




// Add `finally()` to `Promise.prototype`
__webpack_require__(/*! promise.prototype.finally */ "./node_modules/promise.prototype.finally/index.js").shim();
if (_app_env__WEBPACK_IMPORTED_MODULE_3__["environment"].HRS_DOMAIN === 'healthrecoverysolutions.com') {
    _app_env__WEBPACK_IMPORTED_MODULE_3__["environment"].production = true;
}
if (_app_env__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);


/***/ }),

/***/ "./src/pipes/display-gender.pipe.ts":
/*!******************************************!*\
  !*** ./src/pipes/display-gender.pipe.ts ***!
  \******************************************/
/*! exports provided: DisplayGenderPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayGenderPipe", function() { return DisplayGenderPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


/**
 * Convert gender acronyms to display names.
 */
let DisplayGenderPipe = class DisplayGenderPipe {
    transform(value) {
        switch (value) {
            case 'F':
                return 'Female';
            case 'M':
                return 'Male';
            case 'X':
                return 'Other';
            case 'U':
                return 'Unknown';
            default:
                return '';
        }
    }
};
DisplayGenderPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'displayGender'
    })
], DisplayGenderPipe);



/***/ }),

/***/ "./src/pipes/pipes.module.ts":
/*!***********************************!*\
  !*** ./src/pipes/pipes.module.ts ***!
  \***********************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _display_gender_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display-gender.pipe */ "./src/pipes/display-gender.pipe.ts");



let PipesModule = class PipesModule {
};
PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _display_gender_pipe__WEBPACK_IMPORTED_MODULE_2__["DisplayGenderPipe"]
        ],
        exports: [
            _display_gender_pipe__WEBPACK_IMPORTED_MODULE_2__["DisplayGenderPipe"]
        ]
    })
], PipesModule);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/anubhavsaxena/Documents/Impetus_Projects/Angular_Monorepo_GitLab_Copy/angular-monorepo/apps/mobile-clinician/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map