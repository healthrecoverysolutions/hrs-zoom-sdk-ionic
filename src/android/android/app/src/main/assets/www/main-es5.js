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
var AllMetrics = /** @class */ (function () {
    function AllMetrics() {
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
    return AllMetrics;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gateway_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gateway.service */ "../../libs/gateway/gateway.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
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
var GatewayResourceService = /** @class */ (function () {
    function GatewayResourceService(gateway, tokenService) {
        this.gateway = gateway;
        this.tokenService = tokenService;
    }
    Object.defineProperty(GatewayResourceService.prototype, "token", {
        get: function () {
            return this.tokenService.token;
        },
        set: function (token) {
            this.tokenService.token = token;
        },
        enumerable: true,
        configurable: true
    });
    GatewayResourceService.prototype.login = function (credentials) {
        var _this = this;
        return this.post({ endpoint: 'v1/tokens' }, credentials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            _this.token = res.data.attributes.token;
        }));
    };
    GatewayResourceService.prototype.isLoggedIn = function () {
        return this.gateway.isLoggedIn();
    };
    GatewayResourceService.prototype.logout = function () {
        this.gateway.logout();
    };
    GatewayResourceService.prototype.get = function (options, factory) {
        return this.sendRequest('GET', options, undefined, factory);
    };
    GatewayResourceService.prototype.post = function (options, resource, factory) {
        return this.sendRequest('POST', options, resource, factory);
    };
    GatewayResourceService.prototype.put = function (options, resource, factory) {
        return this.sendRequest('PUT', options, resource, factory);
    };
    GatewayResourceService.prototype.patch = function (options, resource, factory) {
        return this.sendRequest('PATCH', options, resource, factory);
    };
    GatewayResourceService.prototype.delete = function (options) {
        return this.sendRequest('DELETE', options);
    };
    GatewayResourceService.prototype.sendRequest = function (method, options, resource, factory) {
        var _this = this;
        var query = {};
        if (options['filter']) {
            query['filter'] = options['filter'];
        }
        return this.gateway[method.toLowerCase()]({
            path: options.endpoint + (options['id'] ? '/' + options['id'] : ''),
            query: query,
            body: resource ? {
                data: typeof resource['toJSON'] === 'function' ? resource.toJSON() : resource
            } : undefined
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            _this.parseResponse(res, factory);
        }));
    };
    GatewayResourceService.prototype.parseResponse = function (res, factory) {
        var result = {};
        if (res) {
            if (res.status)
                result['status'] = res.status;
            if (res.body) {
                if (res.body['data']) {
                    var data = res.body['data'];
                    if (Array.isArray(data)) {
                        result['data'] = data.map(function (x) { return factory ? factory(x) : x; });
                    }
                    else {
                        result['data'] = factory ? factory(data) : data;
                    }
                }
                result['meta'] = res.body['meta'];
            }
        }
        return result;
    };
    GatewayResourceService.ctorParameters = function () { return [
        { type: _gateway_service__WEBPACK_IMPORTED_MODULE_2__["GatewayService"] },
        { type: _hrs_providers__WEBPACK_IMPORTED_MODULE_4__["TokenService"] }
    ]; };
    GatewayResourceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_gateway_service__WEBPACK_IMPORTED_MODULE_2__["GatewayService"],
            _hrs_providers__WEBPACK_IMPORTED_MODULE_4__["TokenService"]])
    ], GatewayResourceService);
    return GatewayResourceService;
}());



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/env */ "../../libs/environments/environment");
/* harmony import */ var _hrs_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hrs/providers */ "../../libs/providers/providers.ts");





var GatewayService = /** @class */ (function () {
    function GatewayService(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
        this.language = 'en';
    }
    Object.defineProperty(GatewayService.prototype, "hrsUserAgentHeader", {
        get: function () {
            return this._hrsUserAgentHeader;
        },
        set: function (hrsUserAgentHeader) {
            this._hrsUserAgentHeader = hrsUserAgentHeader;
        },
        enumerable: true,
        configurable: true
    });
    GatewayService.prototype.isLoggedIn = function () {
        return this.tokenService.token !== null;
    };
    GatewayService.prototype.logout = function () {
        this.tokenService.token = null;
    };
    GatewayService.prototype.get = function (options) {
        return this.sendRequest('GET', options);
    };
    GatewayService.prototype.post = function (options) {
        return this.sendRequest('POST', options);
    };
    GatewayService.prototype.put = function (options) {
        return this.sendRequest('PUT', options);
    };
    GatewayService.prototype.patch = function (options) {
        return this.sendRequest('PATCH', options);
    };
    GatewayService.prototype.delete = function (options) {
        return this.sendRequest('DELETE', options);
    };
    GatewayService.prototype.sendRequest = function (method, options) {
        var reqOptions = {
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
        var queryString = '';
        if (options.query) {
            queryString = Object.keys(options.query)
                .map(function (key) {
                var value = options.query[key];
                if (value && typeof value === 'object') {
                    return Object.keys(value)
                        .map(function (nestedKey) { return key + "[" + nestedKey + "]=" + value[nestedKey]; })
                        .join('&');
                }
                else {
                    return key + "=" + value;
                }
            })
                .join('&');
        }
        var url = _app_env__WEBPACK_IMPORTED_MODULE_3__["environment"].API_GATEWAY_URL + '/' + options.path + (queryString ? '?' + queryString : '');
        method = method.toLowerCase();
        if (method === 'get' || method === 'delete') {
            return this.http[method](url, reqOptions);
        }
        else {
            return this.http[method](url, options.body, reqOptions);
        }
    };
    GatewayService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _hrs_providers__WEBPACK_IMPORTED_MODULE_4__["TokenService"] }
    ]; };
    GatewayService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _hrs_providers__WEBPACK_IMPORTED_MODULE_4__["TokenService"]])
    ], GatewayService);
    return GatewayService;
}());



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
var PatientSettingsResponse = /** @class */ (function () {
    function PatientSettingsResponse(response) {
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
    PatientSettingsResponse.prototype.formatLastHospitalization = function (response) {
        // Last Hospitalization timestamp varies between milliseconds and seconds creating issues
        // Convert all TimeStamp values to milliseconds
        var lastHospitalization = response.data.lasthospitalization < 10000000000 &&
            typeof response.data.lasthospitalization === 'number' ?
            response.data.lasthospitalization * 1000 :
            response.data.lasthospitalization;
        return response.data.lasthospitalization = lastHospitalization ?
            moment__WEBPACK_IMPORTED_MODULE_0__(new Date(lastHospitalization)).format('MM/DD/YYYY') : null;
    };
    PatientSettingsResponse.ctorParameters = function () { return [
        null
    ]; };
    return PatientSettingsResponse;
}());



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
var TokenMeta = /** @class */ (function () {
    function TokenMeta() {
    }
    TokenMeta.fromJSON = function (data) {
        var token = new TokenMeta();
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
    };
    TokenMeta.prototype.toJSON = function () {
        return {
            id: this.id,
            created: this.created.format(),
            lastUsed: this.lastUsed.format(),
            source: this.source
        };
    };
    return TokenMeta;
}());



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
var DailySurveyDetailsModel = /** @class */ (function () {
    function DailySurveyDetailsModel() {
    }
    return DailySurveyDetailsModel;
}());



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

var MetricEntry = /** @class */ (function () {
    function MetricEntry(timestamp, id) {
        this.manual = false;
        this.deleted = false;
        this.date = moment__WEBPACK_IMPORTED_MODULE_0__["unix"](timestamp / 1000);
        this.id = id;
    }
    MetricEntry.ctorParameters = function () { return [
        { type: Number },
        { type: String }
    ]; };
    return MetricEntry;
}());



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
var ModelWithEvents = /** @class */ (function () {
    function ModelWithEvents() {
        // Override this in child classes to provide a list of the event names
        this.events = {};
        this.flags = {};
        this.subscribers = {};
    }
    ModelWithEvents.prototype.getFlag = function (event) {
        return !!this.flags[event];
    };
    ModelWithEvents.prototype.setFlag = function (event, value, closed) {
        if (value === void 0) { value = true; }
        if (!this.hasEvent(event))
            return;
        this.flags[event] = value;
        if (value) {
            this.publish(event, closed);
        }
    };
    ModelWithEvents.prototype.subscribe = function (event, callback) {
        if (!this.hasEvent(event))
            return function () { };
        if (this.getFlag(event)) {
            // The event had already completed, so we can callback immediately and return a dummy unsubscriber function
            callback(this);
            return function () { };
        }
        else {
            if (!this.subscribers[event]) {
                this.subscribers[event] = [];
            }
            var callbacks_1 = this.subscribers[event];
            var index_1 = callbacks_1.length;
            callbacks_1.push(callback);
            return function () {
                delete callbacks_1[index_1];
            };
        }
    };
    ModelWithEvents.prototype.publish = function (event, closed) {
        if (closed === void 0) { closed = true; }
        var callbacks = this.subscribers[event];
        if (!callbacks)
            return;
        for (var i = 0; i < callbacks.length; i++) {
            var callback = callbacks[i];
            if (callback) {
                callback(this);
                if (closed)
                    delete callbacks[i];
            }
        }
    };
    ModelWithEvents.prototype.hasEvent = function (event) {
        return this.events.hasOwnProperty(event);
    };
    return ModelWithEvents;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _classes_all_metrics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/all-metrics */ "../../libs/classes/all-metrics.ts");
/* harmony import */ var _model_with_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model-with-events */ "../../libs/models/model-with-events.ts");




var PatientModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PatientModel, _super);
    function PatientModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.events = {
            patientLoaded: 'patientLoaded',
            overviewDataLoaded: 'overviewDataLoaded',
            startingWeightLoaded: 'startingWeightLoaded',
            trendsDataLoaded: 'trendsDataLoaded',
            historicalDataLoaded: 'historicalDataLoaded',
            updatedRecentMetrics: 'updatedRecentMetrics',
        };
        _this.historical = [];
        _this.overview = [];
        _this.recentMetrics = {};
        _this.stillLoading = true;
        _this.startingWeight = { weightFirst: '', weightFirstTime: '' };
        return _this;
    }
    Object.defineProperty(PatientModel.prototype, "patientLoaded", {
        get: function () {
            return this.getFlag(this.events.patientLoaded);
        },
        set: function (value) {
            this.setFlag(this.events.patientLoaded, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatientModel.prototype, "overviewDataLoaded", {
        get: function () {
            return this.getFlag(this.events.overviewDataLoaded);
        },
        set: function (value) {
            this.setFlag(this.events.overviewDataLoaded, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatientModel.prototype, "startingWeightLoaded", {
        get: function () {
            return this.getFlag(this.events.startingWeightLoaded);
        },
        set: function (value) {
            this.setFlag(this.events.startingWeightLoaded, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatientModel.prototype, "trendsDataLoaded", {
        get: function () {
            return this.getFlag(this.events.trendsDataLoaded);
        },
        set: function (value) {
            this.setFlag(this.events.trendsDataLoaded, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatientModel.prototype, "historicalDataLoaded", {
        get: function () {
            return this.getFlag(this.events.historicalDataLoaded);
        },
        set: function (value) {
            this.setFlag(this.events.historicalDataLoaded, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatientModel.prototype, "updatedRecentMetrics", {
        get: function () {
            return this.getFlag(this.events.updatedRecentMetrics);
        },
        set: function (value) {
            this.setFlag(this.events.updatedRecentMetrics, value, false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatientModel.prototype, "all", {
        get: function () {
            return this.overview.concat(this.historical);
        },
        enumerable: true,
        configurable: true
    });
    PatientModel.prototype.initializeWithData = function (data) {
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
    };
    PatientModel.prototype.setRecentMetrics = function (data) {
        if (!!data)
            this.updatedRecentMetrics = false;
        if (!data)
            this.recentMetrics = {};
        var metrics = Object.keys(this.data.metrics);
        var entries = !data ? this.all : data;
        for (var _i = 0, metrics_1 = metrics; _i < metrics_1.length; _i++) {
            var metric = metrics_1[_i];
            if (RegExp(metric).test('survey woundimaging medication'))
                continue;
            Object.assign(this.recentMetrics, this.getLatestReadingsForMetric(entries, metric));
        }
        // trigger trends charts if patient is newer than 15 days
        if (this.data.day <= 15) {
            var recordedDays = this.all.filter(function (day) { return day['day'] > 0; });
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
    };
    PatientModel.prototype.getLatestReadingsForMetric = function (data, metric) {
        var readings = {};
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var day = data_1[_i];
            var entries = day.metrics[metric];
            if ((this.recentMetrics[metric + 'Today'] && this.recentMetrics[metric + 'Last']) ||
                (readings[metric + 'Today'] && readings[metric + 'Last'])) {
                return readings;
            }
            if (entries && entries.data) {
                entries = entries.data.filter(function (entry) { return !entry.deleted && entry.status !== 'removed'; });
                entries = entries.sort(function (entry1, entry2) { return entry2.ts - entry1.ts; });
                if (!entries.length)
                    continue;
                if (!this.recentMetrics[metric + 'Today'] && !readings[metric + 'Today'] && moment__WEBPACK_IMPORTED_MODULE_1__().startOf('day') <= entries[0].ts) {
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
    };
    PatientModel.prototype.getLatestRiskLevels = function () {
        if (this.data.risk.length && this.data.risk[0].details) {
            var riskDetails = this.data.risk[0].details;
            if (riskDetails) {
                for (var _i = 0, riskDetails_1 = riskDetails; _i < riskDetails_1.length; _i++) {
                    var riskDetail = riskDetails_1[_i];
                    if (!riskDetail.metrics)
                        continue;
                    for (var _a = 0, _b = riskDetail.metrics; _a < _b.length; _a++) {
                        var metric = _b[_a];
                        var riskFlag = _classes_all_metrics__WEBPACK_IMPORTED_MODULE_2__["AllMetrics"][metric].risklabels[riskDetail.type];
                        this.recentMetrics[riskFlag] = true;
                    }
                }
            }
        }
    };
    return PatientModel;
}(_model_with_events__WEBPACK_IMPORTED_MODULE_3__["ModelWithEvents"]));



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _metric_entry_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./metric-entry.model */ "../../libs/models/metric-entry.model.ts");


var SurveyEntry = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SurveyEntry, _super);
    function SurveyEntry(entry) {
        var _this = _super.call(this, parseInt(entry.answered), entry.id) || this;
        _this.isGrouped = false;
        _this.question = entry.question;
        _this.schedule = entry.schedule;
        _this.answer = entry.answer;
        _this.points = parseInt(entry.points);
        return _this;
    }
    SurveyEntry.ctorParameters = function () { return [
        null
    ]; };
    return SurveyEntry;
}(_metric_entry_model__WEBPACK_IMPORTED_MODULE_1__["MetricEntry"]));



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
var SurveyGroupModel = /** @class */ (function () {
    function SurveyGroupModel() {
    }
    return SurveyGroupModel;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-logger */ "../../node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _hrs_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hrs/providers */ "../../libs/providers/providers.ts");
/* harmony import */ var _hrs_gateway__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hrs/gateway */ "../../libs/gateway/index.ts");
/* harmony import */ var _app_env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/env */ "../../libs/environments/environment");







/**
 * Hook into ngx-logger services:
 * allows custom treatment for log messaging on top of the base service's console logging support
 */
var HRSLoggerMonitor = /** @class */ (function () {
    function HRSLoggerMonitor(globalSettingsService, gatewayService, http) {
        var _a;
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
        this.levelToString = (_a = {},
            _a[ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NgxLoggerLevel"].TRACE] = 'trace',
            _a[ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NgxLoggerLevel"].DEBUG] = 'debug',
            _a[ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NgxLoggerLevel"].INFO] = 'info',
            _a[ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NgxLoggerLevel"].LOG] = 'log',
            _a[ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NgxLoggerLevel"].WARN] = 'warn',
            _a[ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NgxLoggerLevel"].ERROR] = 'error',
            _a[ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NgxLoggerLevel"].FATAL] = 'fatal',
            _a[ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NgxLoggerLevel"].OFF] = 'off' // 7
        ,
            _a);
        this.loggingURL = localStorage.getItem(HRSLoggerMonitor_1.LOG_URL_KEY);
        this.loggingLevel = localStorage.getItem(HRSLoggerMonitor_1.LOG_LEVEL_KEY);
        this.ngxLoggingLevel = this.stringToLevel[this.loggingLevel];
    }
    HRSLoggerMonitor_1 = HRSLoggerMonitor;
    HRSLoggerMonitor.prototype.init = function (app) {
        var _this = this;
        this.applicationName = app;
        this.globalSettingsService.globalSettingsLoading.then(function () {
            var globalAttributes = _this.globalSettingsService.getGlobalAttributes();
            _this.loggingURL = globalAttributes['LOG_URL'];
            _this.loggingLevel = globalAttributes['LOG_LEVEL'];
            _this.ngxLoggingLevel = _this.stringToLevel[_this.loggingLevel];
            _this.updateStorage();
        });
    };
    ;
    HRSLoggerMonitor.prototype.updateStorage = function () {
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
    };
    ;
    HRSLoggerMonitor.prototype.onLog = function (log) {
        if (!this.loggingURL)
            return;
        if (log.level < this.ngxLoggingLevel)
            return;
        var logInfo = {
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
        log.additional.forEach(function (entry) {
            if (entry) {
                if (typeof entry === 'string') {
                    logInfo.message += " " + entry;
                }
                else {
                    logInfo.message += " " + JSON.stringify(entry);
                }
            }
        });
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json');
        var options = { headers: headers };
        this.http.post(this.loggingURL, JSON.stringify(logInfo), options).subscribe(function () { }, function (err) { return console.error(err); });
    };
    var HRSLoggerMonitor_1;
    HRSLoggerMonitor.LOG_URL_KEY = 'loggingURL';
    HRSLoggerMonitor.LOG_LEVEL_KEY = 'loggingLevel';
    HRSLoggerMonitor.ctorParameters = function () { return [
        { type: _hrs_providers__WEBPACK_IMPORTED_MODULE_4__["GlobalSettingsService"] },
        { type: _hrs_gateway__WEBPACK_IMPORTED_MODULE_5__["GatewayService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    HRSLoggerMonitor = HRSLoggerMonitor_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hrs_providers__WEBPACK_IMPORTED_MODULE_4__["GlobalSettingsService"],
            _hrs_gateway__WEBPACK_IMPORTED_MODULE_5__["GatewayService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HRSLoggerMonitor);
    return HRSLoggerMonitor;
}());



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../token/token.service */ "../../libs/providers/token/token.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "../../libs/environments/environment");
/* harmony import */ var _broadcastService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../broadcastService */ "../../libs/providers/broadcastService.ts");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-logger */ "../../node_modules/ngx-logger/fesm2015/ngx-logger.js");









var ApiInterceptor = /** @class */ (function () {
    function ApiInterceptor(broadcastService, logger, tokenService) {
        this.broadcastService = broadcastService;
        this.logger = logger;
        this.tokenService = tokenService;
        this._refreshing = false;
        this._refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ApiInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        var isGatewayRequest = request.url.indexOf(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].API_GATEWAY_URL) > -1;
        var isTokenRequest = isGatewayRequest && request.url.indexOf('/tokens') > -1;
        var verboseLogging = isTokenRequest;
        var shouldIntercept = isGatewayRequest && request.headers.get('Authorization') && !isTokenRequest;
        // Create a local copy of sessionId so that we can check it upon response/error and avoid broadcasting to logout if the app has already logged out or in while this request was pending.
        var sessionId = this.tokenService.sessionId;
        if (verboseLogging) {
            this.log('Intercepted request', { request: request });
        }
        if (shouldIntercept) {
            // Giving a 45 second window for interceptor expiration
            var expiration = this.tokenService.getExp();
            var now = Math.floor(Date.now() / 1000);
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error, caught) {
            if (verboseLogging) {
                _this.log('Intercepted error', { request: request, error: error }, true);
            }
            if (error.status === 406 || error.status === 402 || error.status === 403) {
                _this.log('Error code: ' + error.status, { request: request, error: error }, true);
                if (shouldIntercept && !_this.tokenService.isRetryingToken && _this.tokenService.sessionId === sessionId) {
                    _this.handleMiscAuthError(error);
                }
            }
            if (error.status === 401 && shouldIntercept && !_this.tokenService.isRetryingToken) {
                _this.log('Got unauthorized error', { request: request, error: error }, true);
                if (_this.tokenService.sessionId === sessionId) {
                    _this.handleAuthError(error);
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(error);
            }
            throw error;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
            if (response.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response) {
                if (shouldIntercept) {
                    _this.authErrorStartTime = null;
                }
                if (verboseLogging) {
                    _this.log('Intercepted response', { request: request, response: response });
                }
            }
            return response;
        }));
    };
    ApiInterceptor.prototype.handleOldToken = function (request, next, verboseLogging, sessionId) {
        var _this = this;
        var doRequest = function (req) {
            _this.log('Resumed request after token refresh', { request: request });
            return next.handle(req)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error, caught) {
                if (verboseLogging) {
                    _this.log('Intercepted error from queued request', { request: request, error: error }, true);
                }
                if (error.status === 406 || error.status === 402 || error.status === 403) {
                    _this.log('Error code from queued request: ' + error.status, { request: request, error: error }, true);
                    if (!_this.tokenService.isRetryingToken && _this.tokenService.sessionId === sessionId) {
                        _this.handleMiscAuthError(error);
                    }
                }
                if (error.status === 401 && !_this.tokenService.isRetryingToken) {
                    _this.log("Got unauthorized error from queued request", { request: request, error: error }, true);
                    if (_this.tokenService.sessionId === sessionId) {
                        _this.handleAuthError(error);
                    }
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(error);
                }
                throw error;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
                if (response.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response) {
                    _this.authErrorStartTime = null;
                    if (verboseLogging) {
                        _this.log('Intercepted response from queued request', { request: request, response: response });
                    }
                }
                return response;
            }));
        };
        if (!this._refreshing) {
            this._refreshing = true;
            this.log('Refreshing token', { request: request });
            return this.tokenService.refreshToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error, caught) {
                _this.log('Token refresh failed', { request: request, error: error }, true);
                // If the refresh failed, just return the token we already had. We'll probably end up unauthorized with our API, but at least the frontend logic doesn't have to account for a missing token or anything.
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({
                    data: {
                        attributes: {
                            token: _this.tokenService.token,
                            refresh: _this.tokenService.refresh
                        }
                    }
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (tokens) {
                _this.log('Token refresh completed', { request: request });
                _this._refreshing = false;
                // Make the original request now that we refreshed our token
                var result = doRequest(_this.addNewTokenData(request, tokens));
                // Also make any other requests that were waiting for us to refresh our token
                _this._refreshTokenSubject.next(tokens);
                return result;
            }));
        }
        else {
            // Another call happened around the same time as this one and already started refreshing our token, so we just have to wait for that one to get the new token.
            this.log('Pausing request while token refresh in progress', { request: request });
            return this._refreshTokenSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (tokens) {
                return doRequest(_this.addNewTokenData(request, tokens));
            }));
        }
    };
    ApiInterceptor.prototype.addNewTokenData = function (request, tokens) {
        var jwt = tokens.data.attributes.token;
        return request.clone({
            setHeaders: {
                Authorization: "Bearer " + jwt,
            }
        });
    };
    ApiInterceptor.prototype.handleMiscAuthError = function (rejection) {
        var currentTime = new Date().getTime();
        if (!this.authErrorStartTime) {
            this.authErrorStartTime = currentTime;
        }
        else {
            var atLeast5MinutesWithoutSuccess = currentTime - this.authErrorStartTime >= 5 * 60 * 1000;
            if (atLeast5MinutesWithoutSuccess) {
                this.broadcastService.miscAuthError.next(rejection);
            }
        }
    };
    ApiInterceptor.prototype.handleAuthError = function (rejection) {
        // Kick the user out to the login page since their session is no longer valid
        // Passing in the rejection object to display information to the user about what happened
        this.broadcastService.interceptorLogout.next(rejection);
    };
    ApiInterceptor.prototype.log = function (message, context, error) {
        if (error === void 0) { error = false; }
        var contextCopy = JSON.parse(JSON.stringify(context));
        if (contextCopy && contextCopy.request && contextCopy.request.body && contextCopy.request.body.data && contextCopy.request.body.data.password) {
            contextCopy.request.body.data.password = 'REDACTED';
        }
        if (error) {
            this.logger.error(message, contextCopy);
            return;
        }
        this.logger.debug(message, contextCopy);
    };
    ApiInterceptor.ctorParameters = function () { return [
        { type: _broadcastService__WEBPACK_IMPORTED_MODULE_7__["BroadcastService"] },
        { type: ngx_logger__WEBPACK_IMPORTED_MODULE_8__["NGXLogger"] },
        { type: _token_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] }
    ]; };
    ApiInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_broadcastService__WEBPACK_IMPORTED_MODULE_7__["BroadcastService"],
            ngx_logger__WEBPACK_IMPORTED_MODULE_8__["NGXLogger"],
            _token_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]])
    ], ApiInterceptor);
    return ApiInterceptor;
}());



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "../../libs/environments/environment");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var _token_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../token/token.service */ "../../libs/providers/token/token.service.ts");






/**
 * GatewayApi is a generic REST Api handler and Gateway for dev/prod has been added in.
 *
 * @todo we should phase this class out in the mobile apps and replace it with GatewayService and/or GatewayResourceService
 */
var GatewayApi = /** @class */ (function () {
    function GatewayApi(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_GATEWAY_URL;
        this.language = 'en';
    }
    Object.defineProperty(GatewayApi.prototype, "hrsUserAgentHeader", {
        set: function (hrsUserAgentHeader) {
            this._hrsUserAgentHeader = hrsUserAgentHeader;
        },
        enumerable: true,
        configurable: true
    });
    GatewayApi.prototype.login = function (credentials) {
        var _this = this;
        var reqOpts = { Observe: 'response' };
        if (this._hrsUserAgentHeader)
            reqOpts['headers'] = { 'hrs-user-agent': this._hrsUserAgentHeader };
        var data = this.post('v1/tokens', credentials, reqOpts);
        return data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            _this.tokenService.token = res.data.attributes.token;
            _this.tokenService.refresh = res.data.attributes.refresh;
        }));
    };
    GatewayApi.prototype.isLoggedIn = function () {
        return (this.tokenService.token !== null);
    };
    GatewayApi.prototype.logout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.deleteBackendToken()];
                    case 1:
                        _a.sent();
                        this.tokenService.removeTokens();
                        this.tokenService.token = null;
                        return [2 /*return*/];
                }
            });
        });
    };
    GatewayApi.prototype.get = function (endpoint, params) {
        var reqOpts = this.getReqOpts();
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            for (var k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/' + endpoint, reqOpts);
    };
    GatewayApi.prototype.post = function (endpoint, body, reqOpts) {
        // reqOpts will only be passed in when we are creating a gatewayToken
        if (!reqOpts) {
            reqOpts = this.getReqOpts();
        }
        return this.http.post(this.url + '/' + endpoint, body, reqOpts);
    };
    GatewayApi.prototype.put = function (endpoint, body) {
        var reqOpts = this.getReqOpts();
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    GatewayApi.prototype.delete = function (endpoint, params) {
        var reqOpts = this.getReqOpts();
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
    };
    GatewayApi.prototype.patch = function (endpoint, body) {
        var reqOpts = this.getReqOpts();
        return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
    };
    GatewayApi.prototype.getReqOpts = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
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
    };
    // move to gateway.service when change over happens
    GatewayApi.prototype.deleteBackendToken = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var encodedToken, decodedToken;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.tokenService.token)
                            return [2 /*return*/];
                        encodedToken = this.tokenService.token.split('.')[1];
                        decodedToken = JSON.parse(atob(encodedToken));
                        return [4 /*yield*/, this.delete("tokens/" + decodedToken.jti).subscribe()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GatewayApi.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _token_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"] }
    ]; };
    GatewayApi = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _token_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"]])
    ], GatewayApi);
    return GatewayApi;
}());



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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/index.js");

/**
 * This is to handle the circular dependency of the ApiInterceptor/ App Component / User
 */
var BroadcastService = /** @class */ (function () {
    function BroadcastService() {
        // initialize it by setting the rejection error object to null
        this.interceptorLogout = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.miscAuthError = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
    }
    return BroadcastService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_gateway_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/gateway-api */ "../../libs/providers/api/gateway-api.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/index.js");





var CommunicationService = /** @class */ (function () {
    function CommunicationService(gatewayApi) {
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
    CommunicationService.prototype.getTextMessages = function (hrsid, targetHrsid, chatroomId) {
        var _this = this;
        var request;
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
            request = this.gatewayApi.get('apiv2/chat/clinician', {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                res.chatdata = res.chatdata.map(function (message) {
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
        return request.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            var messages = [];
            var mychats = chatroomId ? res.data : res.chatdata;
            for (var key in mychats) {
                if (mychats.hasOwnProperty(key)) {
                    mychats[key].text = _this.decodeMessage(mychats[key].text);
                    messages.push(mychats[key]);
                }
            }
            return messages;
        }));
    };
    // decodes special characters
    CommunicationService.prototype.decodeMessage = function (message) {
        try {
            return decodeURIComponent(escape(message));
        }
        catch (e) {
            return '[Cannot display message]';
        }
    };
    /**
     * Send a POST request to send a chat message
     */
    CommunicationService.prototype.sendTextMessage = function (text, hrsid, targetHrsId, chatroomId) {
        var url;
        var message;
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
    };
    /**
     * Send a GET request for list of chatrooms that match the participant(s)
     */
    CommunicationService.prototype.getChatrooms = function (participants) {
        var url = 'chatrooms';
        participants.forEach(function (participant, i) {
            url += i === 0 ? '?' : '&';
            url += 'filter[participants][]=' + participant;
        });
        return this.gatewayApi.get(url);
    };
    /**
     * Send a post request to the gateway to start a video call
     */
    CommunicationService.prototype.getVideoCallId = function (callerHrsID, calleeHrsID) {
        var participantData;
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
    };
    /**
     * creates opentok video call token
     */
    CommunicationService.prototype.getVideoCallToken = function (callId, calleeHrsId) {
        var callData = {
            data: {
                callId: callId,
                participant: {
                    hrsid: calleeHrsId,
                },
            },
        };
        return this.gatewayApi.post('video-call-tokens', callData);
    };
    CommunicationService.prototype.getVideoCallStatus = function (callId) {
        return this.gatewayApi.get("video-calls/" + callId);
    };
    /**
     * updates the backend with active call participants
     * creates a log or 'call history'
     */
    CommunicationService.prototype.updateParticipantStatus = function (status) {
        if (this.videoParticipantId) {
            var participantData = {
                data: {
                    status: status,
                }
            };
            var request = this.gatewayApi.patch('video-participants/' + this.videoParticipantId, participantData);
            request.subscribe(function (res) {
                console.log('Video participant status successfully updated to: ' + status);
            }, function (err) {
                console.log('Video participant status failed to update', err);
            });
            if (status === 'missed' || status === 'declined' || status === 'left') {
                this.videoParticipantId = null;
            }
        }
    };
    /**
     * Send a GET request to start the voice call
     */
    CommunicationService.prototype.initializeOutgoingVoiceCall = function (hrsid) {
        var url;
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
    };
    /**
     * Accept incoming call, get call token
     */
    CommunicationService.prototype.acceptIncomingVoiceCall = function (callId) {
        return this.gatewayApi.post('apiv2/voice/patient/accept', { callid: callId });
    };
    // notifies the other participant that the user has left the call
    CommunicationService.prototype.voiceCallLeft = function (callId) {
        this.gatewayApi.post('apiv2/voice/leave', { callid: callId })
            .pipe(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .subscribe(function () {
            console.log('Successfully sent call left status');
        }, function () {
            console.error('Failed to send call left status');
        });
    };
    CommunicationService.ctorParameters = function () { return [
        { type: _api_gateway_api__WEBPACK_IMPORTED_MODULE_2__["GatewayApi"] }
    ]; };
    CommunicationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_gateway_api__WEBPACK_IMPORTED_MODULE_2__["GatewayApi"]])
    ], CommunicationService);
    return CommunicationService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EventManagerService = /** @class */ (function () {
    function EventManagerService() {
        var _this = this;
        this.eventMap = {};
        /**
         *
         * @param name - event name that we are subscribing to
         * @param func - callback function that executes if event signal was subscribed to
         */
        this.subscribe = function (name, func) {
            if (!_this.eventMap.hasOwnProperty(name)) {
                _this.eventMap[name] = [];
            }
            var currentIndex = _this.eventMap[name].length;
            _this.eventMap[name].push(func);
            return function () {
                delete _this.eventMap[name][currentIndex];
            };
        };
        /**
         *
         * @param name - event name that we are triggering/signaling
         * @param data - optional data that we can send as a parameter
         */
        this.publish = function (name, data) {
            if (_this.eventMap.hasOwnProperty(name)) {
                var _loop_1 = function (callback) {
                    if (callback) {
                        setTimeout(function () {
                            callback(data);
                        });
                    }
                };
                for (var _i = 0, _a = _this.eventMap[name]; _i < _a.length; _i++) {
                    var callback = _a[_i];
                    _loop_1(callback);
                }
            }
        };
    }
    EventManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EventManagerService);
    return EventManagerService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hrs_gateway__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hrs/gateway */ "../../libs/gateway/index.ts");



/**
 * Global settings provider.
 */
var GlobalSettingsService = /** @class */ (function () {
    function GlobalSettingsService(gateway) {
        var _this = this;
        this.gateway = gateway;
        this.globalAttributes = {};
        this.globalSettingsLoading = new Promise(function (resolve) {
            _this.resolveSettingsLoading = resolve;
        });
    }
    /**
     * Send a GET request to our global settings endpoint
     */
    GlobalSettingsService.prototype.loadGlobalSettings = function () {
        var _this = this;
        var endpoint = 'v1/global-frontend-settings';
        this.gateway.get({ endpoint: endpoint }).subscribe({
            next: function (res) {
                _this.extractAttributes(res);
                return _this.globalAttributes;
            },
            complete: function () { return _this.resolveSettingsLoading(); }
        });
    };
    /**
     * processes the raw data and extracts attributes into an object of key value pairs,
     * filtering by latest updated value for any single attribute
     */
    GlobalSettingsService.prototype.extractAttributes = function (data) {
        var _this = this;
        var latestAttribute = {};
        if (data && data.data) {
            data.data.forEach(function (dataElem) {
                if (dataElem.attributes) {
                    var name_1 = dataElem.attributes.name;
                    var value = dataElem.attributes.value;
                    var lastUpdated = new Date(dataElem.attributes.lastUpdated);
                    if (name_1)
                        if (!_this.globalAttributes[name_1] || (_this.globalAttributes[name_1] && lastUpdated.valueOf() > latestAttribute[name_1].valueOf())) {
                            _this.globalAttributes[name_1] = value;
                            latestAttribute[name_1] = lastUpdated;
                        }
                }
            });
        }
    };
    /**
     * returns all global settings as an object of key value pairs
     *
     * @returns {[key: string]: string}
     */
    GlobalSettingsService.prototype.getGlobalAttributes = function () {
        return this.globalAttributes;
    };
    GlobalSettingsService.ctorParameters = function () { return [
        { type: _hrs_gateway__WEBPACK_IMPORTED_MODULE_2__["GatewayResourceService"] }
    ]; };
    GlobalSettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hrs_gateway__WEBPACK_IMPORTED_MODULE_2__["GatewayResourceService"]])
    ], GlobalSettingsService);
    return GlobalSettingsService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * This service is used in order to inform components whether or not a particular modal is open.
 */
var ModalService = /** @class */ (function () {
    function ModalService() {
    }
    ModalService_1 = ModalService;
    ModalService.prototype.setModalStatus = function (modal, status, patientHrsid) {
        if (patientHrsid) {
            ModalService_1.modalStatus[modal] = { status: status, patientHrsid: patientHrsid };
        }
        else {
            ModalService_1.modalStatus[modal] = status;
        }
    };
    ModalService.prototype.getModalStatus = function (modal) {
        return ModalService_1.modalStatus[modal];
    };
    ModalService.prototype.isModalTypeOpen = function (modalType) {
        return this.getModalStatus(modalType);
    };
    var ModalService_1;
    ModalService.modalStatus = {};
    ModalService = ModalService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModalService);
    return ModalService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_gateway_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/gateway-api */ "../../libs/providers/api/gateway-api.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/models */ "../../libs/models/models.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _survey_score_type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./survey-score-type.enum */ "../../libs/providers/survey-details/survey-score-type.enum.ts");







var SurveyDetailsService = /** @class */ (function () {
    function SurveyDetailsService(gatewayApi) {
        this.gatewayApi = gatewayApi;
    }
    // IONIC UPGRADE had to remove type here temporarily Observable<DailySurveyDetailsModel>
    SurveyDetailsService.prototype.getSurveyDetails = function (hrsid, date) {
        var _this = this;
        return this.gatewayApi.get("apiv2/patients/" + hrsid + "/surveydetails/" + date, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (surveyDetails) {
            _this.dailySurveyDetails = new _models_models__WEBPACK_IMPORTED_MODULE_4__["DailySurveyDetailsModel"]();
            _this.dailySurveyDetails.date = moment__WEBPACK_IMPORTED_MODULE_5__(date);
            if (surveyDetails && surveyDetails.questions) {
                _this.buildSurveyMap(surveyDetails.questions);
                // we know that only answered questions exist in the question map, one entry for each answered question
                _this.dailySurveyDetails.answeredCount = Object.keys(_this.surveyMap).length;
                _this.dailySurveyDetails.grouped = _this.parseGroupedSurveys(surveyDetails.groups);
                _this.dailySurveyDetails.ungrouped = _this.parseUngroupedSurveys();
            }
            return _this.dailySurveyDetails;
        }));
    };
    // creates an object that stores the most recent answer for each question id
    SurveyDetailsService.prototype.buildSurveyMap = function (questions) {
        var _this = this;
        this.surveyMap = {};
        questions.forEach(function (question) {
            if (!question.answer)
                return question;
            var answeredQuestion = new _models_models__WEBPACK_IMPORTED_MODULE_4__["SurveyEntry"](question);
            // check that we are including the most recent answered survey in the survey map
            var id = answeredQuestion.id;
            if (_this.surveyMap[id]) {
                if (answeredQuestion.date.isAfter(_this.surveyMap[id].date)) {
                    _this.surveyMap[id] = answeredQuestion;
                }
            }
            else {
                _this.surveyMap[id] = answeredQuestion;
            }
        });
    };
    SurveyDetailsService.prototype.parseGroupedSurveys = function (groups) {
        var _this = this;
        var groupModels = [];
        if (groups) {
            groups.forEach(function (group) {
                var groupModel = new _models_models__WEBPACK_IMPORTED_MODULE_4__["SurveyGroupModel"]();
                groupModel.name = group.name;
                groupModel.scoreType = group.scoretype;
                groupModel.questions = [];
                group.questionids.forEach(function (id) {
                    if (_this.surveyMap[id]) {
                        groupModel = _this.calculateGroupScore(groupModel, id);
                        groupModel.questions.push(_this.surveyMap[id]);
                        // mark question as grouped so we don't include it in ungrouped questions
                        _this.surveyMap[id].isGrouped = true;
                    }
                });
                groupModel.scoreMessage = _this.getGroupScoreText(group, groupModel);
                if (groupModel.questions.length) {
                    groupModels.push(groupModel);
                }
            });
        }
        return groupModels;
    };
    SurveyDetailsService.prototype.calculateGroupScore = function (groupModel, id) {
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
            this.surveyMap[id].answer = [this.surveyMap[id].answer + " (" + this.surveyMap[id].points + ")"];
        }
        if (groupModel.scoreType === _survey_score_type_enum__WEBPACK_IMPORTED_MODULE_6__["SurveyScoreType"].Average) {
            groupModel.averageScore = (groupModel.scoreTotal / groupModel.answerCount).toPrecision(2);
        }
        return groupModel;
    };
    SurveyDetailsService.prototype.parseUngroupedSurveys = function () {
        var _this = this;
        var ungroupedQuestions = [];
        Object.keys(this.surveyMap).forEach(function (id) {
            if (!_this.surveyMap[id].isGrouped) {
                ungroupedQuestions.push(_this.surveyMap[id]);
            }
        });
        return ungroupedQuestions;
    };
    SurveyDetailsService.prototype.getGroupScoreText = function (group, groupModel) {
        var scoreMessage;
        if (groupModel.questions.length) {
            if (groupModel.scoreTotal) {
                var scoreDisplay = group.scoredisplay;
                var score = groupModel.averageScore || groupModel.scoreTotal;
                if (scoreDisplay.length > 0) {
                    for (var i = 0; i < scoreDisplay.length; i++) {
                        if (score >= parseInt(scoreDisplay[i].min) && score <= parseInt(scoreDisplay[i].max)) {
                            scoreMessage = scoreDisplay[i].text ? "(" + scoreDisplay[i].text + ")" : undefined;
                        }
                    }
                }
            }
        }
        return scoreMessage;
    };
    SurveyDetailsService.ctorParameters = function () { return [
        { type: _api_gateway_api__WEBPACK_IMPORTED_MODULE_2__["GatewayApi"] }
    ]; };
    SurveyDetailsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_gateway_api__WEBPACK_IMPORTED_MODULE_2__["GatewayApi"]])
    ], SurveyDetailsService);
    return SurveyDetailsService;
}());



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "../../libs/environments/environment");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jwt-decode */ "../../node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var backoff_rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! backoff-rxjs */ "../../node_modules/backoff-rxjs/esm5/index.js");








var TokenService = /** @class */ (function () {
    function TokenService(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_GATEWAY_URL;
        this.token = null;
        this.refresh = null;
        this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.isRetryingToken = false;
        this.sessionId = 0;
    }
    TokenService.prototype.refreshToken = function () {
        var _this = this;
        this.isRetryingToken = true;
        var credentials = {
            data: {
                type: 'refresh',
                code: this.refresh,
                source: this.sourceApp
            }
        };
        return this.http
            .post(this.url + "/v1/tokens", credentials)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (tokens) {
            _this.storeTokens(tokens.data);
            _this.isRetryingToken = false;
            _this.refreshTokenSubject.next(tokens.data);
        }), 
        // Upon failing this retries 3 times with a a backoff delay in between 5 seconds, 10 seconds, 20 seconds roughly
        // Not exceeding 45 seconds in between b/c we have a 45 second window on calling the refresh token on api interceptor
        Object(backoff_rxjs__WEBPACK_IMPORTED_MODULE_7__["retryBackoff"])({
            initialInterval: 5000,
            maxRetries: 3,
            maxInterval: 20000,
        }), 
        // If the final retry fails, this catches the error and returns it
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            _this.isRetryingToken = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(error);
        }));
    };
    TokenService.prototype.storeTokens = function (tokenData) {
        var tokens = tokenData.attributes;
        this.token = tokens.token;
        this.refresh = tokens.refresh;
        this.decodeTokenData(tokens.token);
    };
    TokenService.prototype.removeTokens = function () {
        this.token = null;
        this.refresh = null;
        this.authTokenData = null;
    };
    TokenService.prototype.decodeTokenData = function (token) {
        var tokenData = jwt_decode__WEBPACK_IMPORTED_MODULE_6__(token);
        this.authTokenData = tokenData;
        return tokenData;
    };
    TokenService.prototype.getExp = function () {
        return this.authTokenData ? this.authTokenData.exp : null;
    };
    TokenService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    TokenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TokenService);
    return TokenService;
}());



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


var BuildUtility = /** @class */ (function () {
    function BuildUtility() {
    }
    /**
     * Check for HRSTAB flag.
     * @return boolean
     */
    BuildUtility.isHRSTab = function () {
        return _app_env__WEBPACK_IMPORTED_MODULE_0__["environment"].HRSTAB === 'true';
    };
    /**
     * Get Current Build Environment.
     * @return string
     */
    BuildUtility.getEnvironment = function () {
        return _app_env__WEBPACK_IMPORTED_MODULE_0__["environment"].current_environment;
    };
    /**
     * Get Name of Current Domain that the Device is Pointed to.
     * @return string
     */
    BuildUtility.getDomainName = function () {
        var domainInfo = BuildUtility.domains.filter(function (domain) { return domain.API_GATEWAY_URL === _app_env__WEBPACK_IMPORTED_MODULE_0__["environment"].API_GATEWAY_URL; })[0];
        return domainInfo ? domainInfo.domain : 'hrsdomain';
    };
    /**
     * Get Current API_GATEWAY_URL.
     * @return string
     */
    BuildUtility.getGatewayURL = function () {
        return _app_env__WEBPACK_IMPORTED_MODULE_0__["environment"].API_GATEWAY_URL;
    };
    /**
     * Get Current HRS_DOMAIN.
     * @return string
     */
    BuildUtility.getHRSDomain = function () {
        return _app_env__WEBPACK_IMPORTED_MODULE_0__["environment"].HRS_DOMAIN;
    };
    /**
     * Set Current Build Gateway URL to User's Selection in Admin Domain Settings.
     * @return Promise<string>
     */
    BuildUtility.setDomain = function (domain) {
        var isHRSDomain = domain.includes('.com');
        var newDomain = isHRSDomain ? {
            HRS_DOMAIN: domain,
            API_GATEWAY_URL: "https://gateway." + domain
        } : BuildUtility.domains.filter(function (option) { return option.domain === domain; })[0];
        if (!newDomain) {
            return Promise.reject(new Error('Chosen domain is not accepted.'));
        }
        for (var property in newDomain) {
            if (newDomain[property]) {
                _app_env__WEBPACK_IMPORTED_MODULE_0__["environment"][property] = newDomain[property];
                _app_env__WEBPACK_IMPORTED_MODULE_0__["environment"][property] = newDomain[property];
            }
        }
        return Promise.resolve(_app_env__WEBPACK_IMPORTED_MODULE_0__["environment"].API_GATEWAY_URL);
    };
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
    return BuildUtility;
}());



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

var CollectionUtility = /** @class */ (function () {
    function CollectionUtility() {
    }
    /**
     * For converting values to arrays.
     * Can handle JSON, Sets, Objects, Arrays, strings, integers, undefined, null
     * @param collection
     * @private
     */
    CollectionUtility.convertToArray = function (collection) {
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
    };
    return CollectionUtility;
}());



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
var ConvertGlucose = /** @class */ (function () {
    function ConvertGlucose() {
    }
    /**
     * @param number mgdl
     * @return number
     *
     * Formula:  1 g/L = 100 mg/dL
     *
     */
    ConvertGlucose.mgdlToGl = function (mgdl) {
        return mgdl / 100;
    };
    /**
     * @param number gl
     * @return number
     *
     * Formula:  1 mg/dL = 0.01 g/L
     */
    ConvertGlucose.glToMgdl = function (gl) {
        return gl * 100;
    };
    return ConvertGlucose;
}());



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
var ConvertHeartRate = /** @class */ (function () {
    function ConvertHeartRate() {
    }
    /**
     * @param number cpm
     * @return number
     *
     * Formula: 1 cpm = 1/60 hz
     */
    ConvertHeartRate.cpmToHz = function (cpm) {
        return cpm / 60;
    };
    /**
     * @param number hz
     * @return number
     *
     * Formula: 1hz = 60 cpm
     */
    ConvertHeartRate.hzToCpm = function (hz) {
        return hz * 60;
    };
    return ConvertHeartRate;
}());



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
var ConvertRatio = /** @class */ (function () {
    function ConvertRatio() {
    }
    /**
     * @param number $leftValue
     * @param number $rightValue
     * @return number
     *
     *  Formula:  % = n / d * 100
     */
    ConvertRatio.ratioToPercentage = function (leftValue, rightValue) {
        return (leftValue / rightValue) * 100;
    };
    /**
     * @param string ratio
     * @return number
     */
    ConvertRatio.ratioStringToPercentage = function (ratio) {
        var ratioArray = ratio.split(':');
        if (ratioArray.length !== 2) {
            throw new Error('Invalid ratio: ' + ratio);
        }
        var ratioLeft = Number(ratioArray[0]);
        var ratioRight = Number(ratioArray[1]);
        if (Number.isNaN(ratioLeft) || Number.isNaN(ratioRight)) {
            throw new Error('One side of this ratio is not a number: ' + ratio);
        }
        return this.ratioToPercentage(ratioLeft, ratioRight);
    };
    /**
     * @param number percentage
     * @return number
     */
    ConvertRatio.percentageToRatio = function (percentage) {
        var base = 100;
        var ratio = percentage / base;
        return ratio;
    };
    return ConvertRatio;
}());



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
var ConvertString = /** @class */ (function () {
    function ConvertString() {
    }
    /**
     * curly - 'smart' - qoutes and apostrophes cause errors when inserting into database
     * database needs those chars to be straight - 'dumb' - chars
     * @param originalString
     * return string with 'smart' chars replaced with 'dumb' chars
     */
    ConvertString.replaceCurlyChars = function (originalString) {
        var cleanedString = originalString.replace(/((\u2019)|(\u2018)|(\u201c)|(\u201d))/g, '\u0027');
        return cleanedString;
    };
    /**
     * non utf8 chars cause errors when inserting into database - this may strip out accented chars from different languages
     * @param originalString
     * return string free of non utf8 chars
     */
    ConvertString.removeNonUtf8Chars = function (originalString) {
        var cleanedString = originalString.replace(/[^\x20-\x7E]+/g, '');
        return cleanedString;
    };
    return ConvertString;
}());



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
var ConvertTemperature = /** @class */ (function () {
    function ConvertTemperature() {
    }
    /**
     * @param number celsius
     * @return number
     *
     * Formula: F = C * (9.0/5.0) + 32
     */
    ConvertTemperature.celsiusToFarenheit = function (celsius) {
        return celsius * (9.0 / 5.0) + 32;
    };
    /**
     * @param number fahrenheit
     * @return number
     *
     * Formula: K = (F + 459.67) x 5/9
     */
    ConvertTemperature.fahrenheitToKelvin = function (fahrenheit) {
        return (fahrenheit + 459.67) * (5 / 9);
    };
    /**
     * @param number kelvin
     * @return number
     *
     * Formula: C = K - 273.15
     */
    ConvertTemperature.kelvinToCelsius = function (kelvin) {
        return kelvin - 273.15;
    };
    /**
     * @param number kelvin
     * @return number
     *
     * Formula: F = K * 9/5 - 459.67
     */
    ConvertTemperature.kelvinToFahrenheit = function (kelvin) {
        return (kelvin * (9 / 5)) - 459.67;
    };
    /**
     * @param number celsius
     * @return number
     *
     * Formula: K = C + 273.15
     */
    ConvertTemperature.celsiusToKelvin = function (celsius) {
        return celsius + 273.15;
    };
    return ConvertTemperature;
}());



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

var ConvertTime = /** @class */ (function () {
    function ConvertTime() {
    }
    /**
     * @param number minutes
     * @return number
     *
     * Formula:  s = m * 60
     */
    ConvertTime.minutesToSeconds = function (minutes) {
        return minutes * 60;
    };
    /**
     * @param number hours
     * @return number
     *
     * Formula:  s = h * 3600
     */
    ConvertTime.hoursToSeconds = function (hours) {
        return hours * 3600;
    };
    /**
     * @param number seconds
     * @return number
     *
     * Formula:  m = s / 60
     */
    ConvertTime.secondsToMinutes = function (seconds) {
        return seconds / 60;
    };
    /**
     * @param number seconds
     * @return number
     *
     * Formula:  h = s / 3600
     */
    ConvertTime.secondsToHours = function (seconds) {
        return seconds / 3600;
    };
    ConvertTime.isoToTimestamp = function (time) {
        return new Date(time).getTime();
    };
    /**
     * Convert Provided Timestamp to Local Timezone.
     * @param string timestamp: the original timestamp.
     * @param string format: the original format of the timestamp.
     * @return string: a timestamp in the original format in the user's device timezone.
     */
    ConvertTime.convertToLocalTZ = function (timestamp, format) {
        var userTZ = moment__WEBPACK_IMPORTED_MODULE_0__["tz"].guess();
        var estTime = moment__WEBPACK_IMPORTED_MODULE_0__["tz"](timestamp, format, 'America/New_York');
        var convertedTime = estTime.tz(userTZ).format(format);
        return convertedTime;
    };
    return ConvertTime;
}());



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
var ConvertWeight = /** @class */ (function () {
    function ConvertWeight() {
    }
    /**
     * @param number pounds
     * @return number
     *
     * Formula:  g = lbs * 453.59237
     */
    ConvertWeight.poundsToGrams = function (pounds) {
        return pounds * 453.59237;
    };
    /**
     * @param number kilograms
     * @return number
     *
     * Formula:  g = kg * 1000
     */
    ConvertWeight.kilogramsToGrams = function (kilograms) {
        return kilograms * 1000;
    };
    /**
     * @param number grams
     * @return number
     *
     * Formula:  lbs = g / 453.59237
     */
    ConvertWeight.gramsToPounds = function (grams) {
        return grams / 453.59237;
    };
    /**
     * @param number grams
     * @return number
     *
     * Formula:  kg = g / 1000
     */
    ConvertWeight.gramsToKilograms = function (grams) {
        return grams / 1000;
    };
    return ConvertWeight;
}());



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

var LocalUpdateInterval = /** @class */ (function () {
    function LocalUpdateInterval() {
    }
    /**
     * Get HRS TAB Local Update Interval Length
     * @return number
     *
     */
    LocalUpdateInterval.get = function () {
        return _app_env__WEBPACK_IMPORTED_MODULE_0__["environment"].UPDATEINTERVAL;
    };
    return LocalUpdateInterval;
}());



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
var ObjectUtility = /** @class */ (function () {
    function ObjectUtility() {
    }
    /*
        objectsAreTheSame allows for deep object comparisons, with optional strictness level, and key ignoring
        default strictness allows for loose equality comparisons allowing for 1 to equal '1'
        if ignoreKeys has values, those keys will be filtered out, allowing for core comparisons of values the dev knows to be important
     */
    ObjectUtility.objectsAreTheSame = function (objA, objB, isStrict, ignoreKeys) {
        var _this = this;
        if (isStrict === void 0) { isStrict = false; }
        if (ignoreKeys === void 0) { ignoreKeys = []; }
        var areTheSame = true;
        var strictLevel = isStrict ? 'isStrict' : 'isNotStrict';
        var valuesDoNotMatch = {
            'isStrict': function (a, b) { return a !== b; },
            'isNotStrict': function (a, b) { return a != b; }
        };
        var isObject = function (a, b) { return typeof a === 'object' && !Array.isArray(a) && (!!a && !!b); };
        var compareArrays = function (a, b) {
            if (a.length === b.length) {
                a.sort();
                b.sort();
                a.forEach(function (ele, idx) { return compareValues(ele, b[idx]); });
            }
            else {
                areTheSame = false;
            }
        };
        var compareValues = function (a, b) {
            if (Array.isArray(a)) {
                compareArrays(a, b);
            }
            else if (!isObject(a, b) && valuesDoNotMatch[strictLevel](a, b)) {
                areTheSame = false;
            }
            else if (isObject(a, b) && !_this.objectsAreTheSame(a, b, isStrict, ignoreKeys)) {
                areTheSame = false;
            }
        };
        var keysA = Object.keys(objA).filter(function (key) { return !ignoreKeys.includes(key); });
        var keysB = Object.keys(objB).filter(function (key) { return !ignoreKeys.includes(key); });
        if (keysA.length !== keysB.length)
            return false;
        for (var _i = 0, keysA_1 = keysA; _i < keysA_1.length; _i++) {
            var key = keysA_1[_i];
            compareValues(objA[key], objB[key]);
        }
        return areTheSame;
    };
    /**
     * Method for checking if something is an object since JavaScript does not have a native method
     * @param param
     */
    ObjectUtility.isObject = function (param) {
        return param !== null && !Array.isArray(param) && !(param instanceof Set) && typeof param === 'object';
    };
    return ObjectUtility;
}());



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
var FirebaseAccountInfo = {
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

/***/ "./node_modules/@ionic/core/dist/esm-es5 lazy recursive ^\\.\\/.*\\.entry\\.js$":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5 lazy ^\.\/.*\.entry\.js$ namespace object ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-action-sheet.entry.js",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-alert.entry.js",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-app_8.entry.js",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-avatar_3.entry.js",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-back-button.entry.js",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-backdrop.entry.js",
		5
	],
	"./ion-button_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-button_2.entry.js",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-card_5.entry.js",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-checkbox.entry.js",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-chip.entry.js",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-col_3.entry.js",
		10
	],
	"./ion-datetime_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-datetime_3.entry.js",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-fab_3.entry.js",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-img.entry.js",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-infinite-scroll_2.entry.js",
		14
	],
	"./ion-input.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-input.entry.js",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-item-option_3.entry.js",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-item_8.entry.js",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-loading.entry.js",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-menu_3.entry.js",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-modal.entry.js",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-nav_2.entry.js",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-popover.entry.js",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-progress-bar.entry.js",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-radio_2.entry.js",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-range.entry.js",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-refresher_2.entry.js",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-reorder_2.entry.js",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-ripple-effect.entry.js",
		28
	],
	"./ion-route_4.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-route_4.entry.js",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-searchbar.entry.js",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-segment_2.entry.js",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-select_3.entry.js",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-slide_2.entry.js",
		33
	],
	"./ion-spinner.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-spinner.entry.js",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-split-pane.entry.js",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-tab-bar_2.entry.js",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-tab_2.entry.js",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-text.entry.js",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-textarea.entry.js",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-toast.entry.js",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-toggle.entry.js",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-virtual-scroll.entry.js",
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
webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm-es5 lazy recursive ^\\.\\/.*\\.entry\\.js$";
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _clinician_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clinician/providers */ "./src/app/services/providers.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");




var AdminAccessComponent = /** @class */ (function () {
    function AdminAccessComponent(adminService, translate) {
        var _this = this;
        this.adminService = adminService;
        this.translate = translate;
        this.hasCorrectPassword = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hasError = false;
        this.timeout = function () { return setTimeout(function () {
            _this.adminService.rerouteHome();
        }, 45000); };
        this.reroute = this.timeout();
        this.errorMessage = this.translate.instant('ADMIN_PASSCODE_ERROR');
    }
    AdminAccessComponent.prototype.ngOnDestroy = function () {
        clearTimeout(this.reroute);
    };
    /**
     * On changes to the input, the reroute gets reset and isCorrect gets emitted to parent.
     */
    AdminAccessComponent.prototype.passcodeChangeHandler = function () {
        var isCorrect = _clinician_providers__WEBPACK_IMPORTED_MODULE_2__["AdminService"].PASSCODE === this.enteredPasscode;
        clearTimeout(this.reroute);
        if (isCorrect) {
            this.hasCorrectPassword.emit(isCorrect);
        }
        else {
            this.checkErrorState(isCorrect);
            this.reroute = this.timeout();
        }
    };
    AdminAccessComponent.prototype.checkErrorState = function (isCorrect) {
        var haveSameLength = _clinician_providers__WEBPACK_IMPORTED_MODULE_2__["AdminService"].PASSCODE.length === this.enteredPasscode.length;
        this.hasError = !isCorrect && haveSameLength;
    };
    AdminAccessComponent.ctorParameters = function () { return [
        { type: _clinician_providers__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
    ]; };
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
    return AdminAccessComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin.page */ "./src/app/admin/admin.page.ts");
/* harmony import */ var _domain_settings_domain_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./domain-settings/domain-settings.component */ "./src/app/admin/domain-settings/domain-settings.component.ts");
/* harmony import */ var _hrsui_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @hrsui/angular */ "../../node_modules/@hrsui/angular/dist/fesm5.js");
/* harmony import */ var _admin_access_admin_access_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-access/admin-access.component */ "./src/app/admin/admin-access/admin-access.component.ts");











var routes = [
    {
        path: 'admin',
        component: _admin_page__WEBPACK_IMPORTED_MODULE_7__["AdminPage"]
    }
];
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
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
    return AdminModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _clinician_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clinician/providers */ "./src/app/services/providers.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums */ "./src/app/enums/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");






var AdminPage = /** @class */ (function () {
    /**
     * To add a new tablet setting:
     * add settings object to this.settings which contains an enim which points to the AdminSettings enum,
     * add the component to admin.module declarations, do not add to app.module,
     * add the component instantiation to this template's ng-container#settingsPanel
     */
    function AdminPage(translate, adminService, navCtrl, user) {
        this.translate = translate;
        this.adminService = adminService;
        this.navCtrl = navCtrl;
        this.user = user;
        this.adminSettings = _enums__WEBPACK_IMPORTED_MODULE_3__["AdminSettings"];
        this.hasCorrectAccess = false;
        this.settings = this.adminService.settings;
        this.selectSetting(this.settings[0]);
    }
    AdminPage.prototype.hasCorrectPassword = function (isCorrect) {
        this.hasCorrectAccess = isCorrect;
    };
    AdminPage.prototype.selectSetting = function (setting) {
        this.selectedSetting = setting;
    };
    AdminPage.prototype.exitAdmin = function () {
        this.navCtrl.back({ animated: false });
    };
    AdminPage.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _clinician_providers__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
        { type: _clinician_providers__WEBPACK_IMPORTED_MODULE_2__["User"] }
    ]; };
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
    return AdminPage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _hrs_utility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hrs/utility */ "../../libs/utility/index.ts");
/* harmony import */ var _clinician_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clinician/providers */ "./src/app/services/providers.ts");
/* harmony import */ var _hrs_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @hrs/providers */ "../../libs/providers/providers.ts");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/dist/index.js");









var DomainSettingsComponent = /** @class */ (function () {
    function DomainSettingsComponent(toastCtrl, translate, user, gatewayApi, settings, logger, firebase, storage, platform, tokenService) {
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
        this.domains = _hrs_utility__WEBPACK_IMPORTED_MODULE_4__["BuildUtility"].domains.map(function (domain) { return domain.domain; });
        this.currentDomain = _hrs_utility__WEBPACK_IMPORTED_MODULE_4__["BuildUtility"].getGatewayURL();
        var currentDomainName = _hrs_utility__WEBPACK_IMPORTED_MODULE_4__["BuildUtility"].getDomainName();
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
    DomainSettingsComponent.prototype.handleLabelClick = function (option) {
        this.selected = option;
    };
    DomainSettingsComponent.prototype.setDomain = function () {
        var _this = this;
        if (this.selected) {
            var userSelection = this.selected === 'hrsdomain' ? this.hrsdomainText : this.selected;
            _hrs_utility__WEBPACK_IMPORTED_MODULE_4__["BuildUtility"].setDomain(userSelection).then(function (updatedDomain) {
                _this.currentDomain = updatedDomain;
                _this.presentToast('ADMIN_DOMAIN_SETTINGS.CHANGE_SUCCESS', { domain: updatedDomain }).then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var _this = this;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (this.platform.is('android')) {
                                    this.firebase.setFirebaseAccount(_hrs_utility__WEBPACK_IMPORTED_MODULE_4__["BuildUtility"].getDomainName() === 'prod' ? 'prod' : 'test')
                                        .catch(function (err) { return _this.logger.error(err); });
                                }
                                return [4 /*yield*/, this.user.logout()];
                            case 1:
                                _a.sent();
                                // Need to manually update the url variables in GatewayApiService and TokenService because
                                // they access the environment url only once when they are initialized,
                                // unlike GatewayService which accesses the environment url each time an API request is created.
                                this.gatewayApi.url = updatedDomain;
                                this.tokenService.url = updatedDomain;
                                return [2 /*return*/];
                        }
                    });
                }); });
            }).catch(function (err) {
                _this.logger.error(err);
                _this.presentToast('ADMIN_DOMAIN_SETTINGS.BAD_DOMAIN');
            });
        }
        else {
            this.presentToast('ADMIN_DOMAIN_SETTINGS.NO_SELECTION');
        }
    };
    DomainSettingsComponent.prototype.presentToast = function (msg, params) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var domainText, toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        domainText = this.translate.instant(msg, params);
                        return [4 /*yield*/, this.toastCtrl.create({
                                header: domainText,
                                duration: 3000,
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
    DomainSettingsComponent.ctorParameters = function () { return [
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
    ]; };
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
    return DomainSettingsComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");




var routes = [
    { path: '', redirectTo: 'patient-list', pathMatch: 'full' },
    { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule' },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'patient-list', canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], loadChildren: './patient-list/patient-list.module#PatientListPageModule' },
    { path: 'patient-profile', loadChildren: './patient/patient-profile.module#PatientProfilePageModule' },
    { path: 'add-patient', loadChildren: './add-patient/add-patient.module#AddPatientPageModule' },
    { path: 'organizational-login', loadChildren: './organizational-login/organization-login.module#OrganizationalLoginPageModule' },
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/deeplinks/ngx */ "./node_modules/@ionic-native/deeplinks/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");




























var AppComponent = /** @class */ (function () {
    function AppComponent(adminService, appVersion, platform, splashScreen, statusBar, translate, config, callNumber, alertCtrl, toastCtrl, actionSheetCtrl, logger, loggerMonitor, firebase, gatewayApi, gateway, globalSettingsService, broadCastService, modalService, user, settings, storage, tokenService, userAgentProvider, Environment, communication, modalCtrl, menuCtrl, profile, deeplinks, activatedRoute, router, loadingCtrl, androidPermissions, device, translateService) {
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
    AppComponent.prototype.init = function () {
        var _this = this;
        // establish our hook into ngx-logger
        this.loggerMonitor.init('ccmobile');
        this.logger.registerMonitor(this.loggerMonitor);
        this.initDeviceVersion();
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.userAgentProvider.getUserAgentInfo();
            _this.logger.log(_app_env__WEBPACK_IMPORTED_MODULE_14__["environment"].current_environment);
            _this.menuCtrl.swipeGesture(false);
            _this.settings.load().finally(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var initialSetupComplete, token, refresh;
                var _this = this;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0: 
                        // Check for any domain changes because app will lose those changes on force kill.
                        return [4 /*yield*/, this.storage.get('updatedDomain').then(function (updatedDomain) {
                                if (updatedDomain) {
                                    _hrs_utility__WEBPACK_IMPORTED_MODULE_25__["BuildUtility"].setDomain(updatedDomain).then(function (domain) {
                                        _this.gatewayApi.url = domain;
                                        _this.tokenService.url = domain;
                                    }).catch(function (err) {
                                        _this.logger.error(err);
                                    });
                                }
                            })];
                        case 1:
                            // Check for any domain changes because app will lose those changes on force kill.
                            _a.sent();
                            if (this.platform.is('cordova')) {
                                initialSetupComplete = this.settings.getValue('initialSetupComplete');
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
                                    this.firebase.setFirebaseAccount(_hrs_utility__WEBPACK_IMPORTED_MODULE_25__["BuildUtility"].getDomainName() === 'prod' ? 'prod' : 'test').catch(function (err) {
                                        _this.logger.error(err);
                                    });
                                }
                            }
                            this.populateVersionNumber();
                            this.initTranslate().then(function () {
                                if (_this.platform.is('android')) {
                                    _this.checkAndroidPermission(['android.permission.POST_NOTIFICATIONS'], 'ANDROID_NOTIFICATION_PERMISSION_TITLE', 'ANDROID_NOTIFICATION_PERMISSION_MESSAGE').then(function () {
                                        _this.checkAndroidPermission(['android.permission.READ_MEDIA_IMAGES', 'android.permission.READ_MEDIA_VIDEO', 'android.permission.READ_MEDIA_AUDIO'], 'ANDROID_MEDIA_PERMISSION_TITLE', 'ANDROID_MEDIA_PERMISSION_MESSAGE');
                                    });
                                }
                            });
                            this.user.loadFromSettings(this.settings);
                            token = this.settings.getValue('token');
                            refresh = this.settings.getValue('refresh');
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
                                    next: function (res) {
                                        _this.logger.log('Successfully loaded Environment.');
                                    },
                                    error: function (err) {
                                        _this.logger.error('Failed to get Environment.');
                                        _this.user.logout();
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
                            return [2 /*return*/];
                    }
                });
            }); });
            _this.routeWithDeeplinks();
            _this.broadCastService.interceptorLogout.asObservable().subscribe(function (values) {
                _this.logger.debug('Observing Interceptor', values);
                if (values) {
                    _this.loadingCtrl.getTop().then(function (element) {
                        if (element) {
                            _this.loadingCtrl.dismiss();
                        }
                    });
                    if (!_this.isDisplaying && values.error) {
                        _this.isDisplaying = true;
                        setTimeout(function () {
                            _this.isDisplaying = false;
                        }, 2000);
                        if (values.error.message === 'LOGIN_ERROR.CONCURRENT_SESSIONS') {
                            _this.forcedLogoutToast(values.error.message);
                        }
                        else {
                            _this.forcedLogoutToast();
                        }
                    }
                    _this.user.logout();
                }
            });
        });
    };
    AppComponent.prototype.initTranslate = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var language;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // English will be used as a fallback when a translation isn't found in the current language
                        this.translate.setDefaultLang('en');
                        language = this.translate.getBrowserLang() || 'en';
                        return [4 /*yield*/, Object(rxjs__WEBPACK_IMPORTED_MODULE_26__["firstValueFrom"])(this.translate.use(language))];
                    case 1:
                        _a.sent();
                        moment__WEBPACK_IMPORTED_MODULE_11__["locale"](language);
                        this.gatewayApi.language = language;
                        this.gateway.language = language;
                        this.settings.setValue('language', language).then(function () {
                            _this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
                                _this.config.set('backButtonText', values.BACK_BUTTON_TEXT);
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
    * Display reason for getting a forced 401 or 302 error from the api-interceptor
    * @param message
    */
    AppComponent.prototype.forcedLogoutToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var text, toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        text = message || 'LOGIN_FORCED_LOGOUT';
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: this.translate.instant(text),
                                cssClass: 'toast-fail',
                                position: 'top',
                                buttons: [
                                    {
                                        text: this.translate.instant('CLOSE_BUTTON'),
                                        role: 'cancel'
                                    }
                                ]
                            })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
    * Whenever the user is logged out, redirects to LoginPage
    */
    AppComponent.prototype.logoutClicked = function () {
        var _this = this;
        this.logger.debug('Logout User');
        this.user.logout();
        this.menuCtrl.close().then(function () {
            _this.logger.error('Closed menu ', _this.menuCtrl.isOpen());
        });
    };
    AppComponent.prototype.openAdmin = function () {
        this.adminService.openAdmin();
    };
    /**
    * Start support call
    */
    AppComponent.prototype.initSupportCall = function () {
        var supportNumber = '908-280-0420';
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
    };
    /**
    * Display prompt to start call on android
    * @param supportNumber
    */
    AppComponent.prototype.showSupportCallPrompt = function (supportNumber) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var supportAlert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: supportNumber,
                            buttons: [
                                {
                                    text: this.translate.instant('CANCEL_BUTTON'),
                                    handler: function () { }
                                },
                                {
                                    text: this.translate.instant('DIAL'),
                                    handler: function () {
                                        _this.dialPhoneNumber(supportNumber);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        supportAlert = _a.sent();
                        return [4 /*yield*/, supportAlert.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
    * Dial support
    * @param phoneNumber
    */
    AppComponent.prototype.dialPhoneNumber = function (phoneNumber) {
        var _this = this;
        this.callNumber.callNumber(phoneNumber, true)
            .then(function (res) {
            // maybe we should log when people call support
        })
            .catch(function (err) {
            _this.dialPhoneNumberFailToast();
        });
    };
    AppComponent.prototype.dialPhoneNumberFailToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var dialSuccessToast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: this.translate.instant('CALL_FAIL'),
                            duration: 3000,
                            position: 'top'
                        })];
                    case 1:
                        dialSuccessToast = _a.sent();
                        return [4 /*yield*/, dialSuccessToast.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AppComponent.prototype.initReceiveNotificationsListener = function () {
        var _this = this;
        this.communication.incomingVideoCall$.subscribe(function (data) {
            var answer = !!data.wasTapped;
            _this.handleIncomingVideoCall(data, answer);
        });
        this.communication.incomingVoiceCall$.subscribe(function (data) {
            var answer = !!data.wasTapped;
            _this.handleIncomingVoiceCall(data, answer);
        });
        this.communication.newChatMessage$.subscribe(function (data) {
            _this.handleNewMessage(data);
        });
    };
    AppComponent.prototype.handleIncomingVideoCall = function (data, answer) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var caller, patientName, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        caller = JSON.parse(data.caller);
                        return [4 /*yield*/, Object(rxjs__WEBPACK_IMPORTED_MODULE_26__["lastValueFrom"])(this.profile.getPatientProfile(caller.hrsid)).then(function (response) {
                                return response['name'].first + ' ' + response['name'].last;
                            }, function () {
                                return 'Patient';
                            })];
                    case 1:
                        patientName = _a.sent();
                        this.communication.videoParticipantId = data.participantId;
                        this.communication.updateParticipantStatus('received');
                        if (!(!this.modalService.getModalStatus('VideoPage') && !this.modalService.getModalStatus('VoicePage'))) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.modalCtrl.create({
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
                            })];
                    case 2:
                        modal = _a.sent();
                        return [2 /*return*/, modal.present()];
                    case 3:
                        // if a call is in the foreground, show alert and offer option to switch calls
                        this.actionSheetCtrl.create({
                            title: this.translate.instant('NEW_INCOMING_CALL') + patientName,
                            buttons: [
                                {
                                    text: this.translate.instant('END_CURRENT_CALL'),
                                    handler: function () {
                                        // close current video call modal and open new incoming call
                                        _this.communication.exitVideoCallEnterNew.next();
                                        _this.communication.exitVoiceCallEnterNew.next();
                                        _this.handleIncomingVideoCall(data, true);
                                    }
                                },
                                {
                                    text: this.translate.instant('IGNORE'),
                                    handler: function () {
                                        _this.logger.log('call ignored');
                                        // tell comms service we hung up
                                        _this.communication.updateParticipantStatus('declined');
                                    }
                                }
                            ]
                        }).then(function (actionSheet) {
                            actionSheet.present();
                        });
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.handleIncomingVoiceCall = function (data, answer) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var caller, patientName, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        caller = JSON.parse(data.caller);
                        return [4 /*yield*/, Object(rxjs__WEBPACK_IMPORTED_MODULE_26__["lastValueFrom"])(this.profile.getPatientProfile(caller.hrsid)).then(function (response) {
                                return response['name'].first + ' ' + response['name'].last;
                            }, function () {
                                return 'Patient';
                            })];
                    case 1:
                        patientName = _a.sent();
                        if (!(!this.modalService.getModalStatus('VideoPage') && !this.modalService.getModalStatus('VoicePage'))) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _communication_voice_voice_page__WEBPACK_IMPORTED_MODULE_21__["VoicePage"],
                                componentProps: {
                                    callData: {
                                        patientName: patientName,
                                        patientHrsId: caller.hrsid,
                                        callId: data.callid,
                                        answer: answer
                                    }
                                }
                            })];
                    case 2:
                        modal = _a.sent();
                        modal.present();
                        return [3 /*break*/, 4];
                    case 3:
                        this.actionSheetCtrl.create({
                            title: this.translate.instant('NEW_INCOMING_CALL') + patientName,
                            buttons: [
                                {
                                    text: this.translate.instant('END_CURRENT_CALL'),
                                    handler: function () {
                                        // close current call modal and open new incoming call
                                        _this.communication.exitVideoCallEnterNew.next();
                                        _this.communication.exitVoiceCallEnterNew.next();
                                        _this.handleIncomingVoiceCall(data, true);
                                    }
                                },
                                {
                                    text: this.translate.instant('IGNORE'),
                                    handler: function () {
                                        _this.logger.log('Voice call ignored');
                                    }
                                }
                            ]
                        }).then(function (actionSheet) {
                            actionSheet.present();
                        });
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.handleNewMessage = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var caller, modalState, modal, patientName, toast;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        caller = JSON.parse(data.caller);
                        modalState = this.modalService.getModalStatus('ChatMessagesModalPage');
                        if (!data.wasTapped) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _communication_chat_chat_page__WEBPACK_IMPORTED_MODULE_22__["ChatPage"],
                                componentProps: { patient: caller }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        if (!(!modalState || !modalState.status || caller.hrsid !== modalState.patientHrsid)) return [3 /*break*/, 7];
                        this.messageData = data;
                        if (modalState) {
                            this.modalState = modalState;
                        }
                        return [4 /*yield*/, Object(rxjs__WEBPACK_IMPORTED_MODULE_26__["lastValueFrom"])(this.profile.getPatientProfile(caller.hrsid))
                                .then(function (response) {
                                return response['name'].first + ' ' + response['name'].last;
                            }, function () {
                                return 'Patient';
                            })];
                    case 4:
                        patientName = _a.sent();
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: this.translate.instant('NEW_CHAT_MESSAGE') + patientName,
                                duration: 10000,
                                position: 'top',
                                buttons: [{
                                        text: this.translate.instant('VIEW'),
                                        handler: function () { return _this.messageClose('close'); },
                                    }]
                            })];
                    case 5:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 6: return [2 /*return*/, _a.sent()];
                    case 7:
                        // patient chat modal is open, update with incoming message
                        this.communication.getChatNewMessage.next(data);
                        _a.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.messageClose = function (data) {
        if (data == 'close') {
            if (this.modalState && this.modalState.status) {
                this.communication.exitChatOpenNew.next();
            }
            this.messageData.wasTapped = true;
            this.handleNewMessage(this.messageData);
        }
    };
    AppComponent.prototype.populateVersionNumber = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            this.appVersion.getVersionNumber().then(function (versionNumber) {
                if (versionNumber) {
                    _this.versionNumber = 'v' + versionNumber;
                }
            });
        }
        else {
            this.versionNumber = 'v1.0.0';
        }
    };
    AppComponent.prototype.openAddPatientPage = function () {
        var _this = this;
        this.closeMenu().then(function () { return _this.router.navigateByUrl('/add-patient'); });
    };
    AppComponent.prototype.closeMenu = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.menuCtrl.isOpen()];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.menuCtrl.close()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.menuCtrl.enable(false)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.routeWithDeeplinks = function () {
        var _this = this;
        // deeplinks allow navigation from the system browser to our app
        // To test via iOS Safari enter ccmobile:// in the browser and it will launch the app if it is installed
        this.deeplinks.route({
            '/login': _organizational_login_organizational_login_page__WEBPACK_IMPORTED_MODULE_23__["OrganizationalLoginPage"]
        }).subscribe({
            next: function (match) {
                if (match.$link.path === '/login') {
                    _this.user.logout().then(function () {
                        var login = function () {
                            if (match.$args && match.$args.auth) {
                                var authData = JSON.parse(atob(match.$args.auth));
                                // This tells the OrganizationalLoginPage that we are logging in so that it can show the spinner if it isn't already
                                _this.user.loggingInSSOSubject.next();
                                // Login now. OrganizationalLoginPage is listening to the loggedInSubject to know when this is successful
                                var loginSubscription_1 = _this.user.loginWithData(authData).subscribe(function () {
                                    loginSubscription_1.unsubscribe();
                                });
                            }
                        };
                        if (_this.activatedRoute.component !== _organizational_login_organizational_login_page__WEBPACK_IMPORTED_MODULE_23__["OrganizationalLoginPage"]) {
                            // If we were on the welcome page then move forward to OrganizationalLoginPage
                            _this.router.navigateByUrl('/organizational-login').then(function () {
                                login();
                            });
                        }
                        else {
                            login();
                        }
                    });
                }
            },
            error: function (nomatch) {
                // nomatch.$link - the full link data
                _this.logger.error("Got a deeplink that didn't match", JSON.stringify(nomatch));
            }
        });
    };
    AppComponent.prototype.close = function () {
        this.menuCtrl.close();
    };
    AppComponent.prototype.checkAndroidPermission = function (permission, permissionAlertTitle, permissionMessage) {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var requiredPermissions, missingPermissions_1, _loop_1, this_1, _i, requiredPermissions_1, requiredPermission, alert_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.getDeviceVersion() > 12)) return [3 /*break*/, 9];
                        requiredPermissions = permission;
                        missingPermissions_1 = [];
                        _loop_1 = function (requiredPermission) {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this_1.checkForPermission(requiredPermission).then(function (result) {
                                            if (!result.hasPermission) {
                                                missingPermissions_1.push(requiredPermission);
                                            }
                                        })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _i = 0, requiredPermissions_1 = requiredPermissions;
                        _a.label = 1;
                    case 1:
                        if (!(_i < requiredPermissions_1.length)) return [3 /*break*/, 4];
                        requiredPermission = requiredPermissions_1[_i];
                        return [5 /*yield**/, _loop_1(requiredPermission)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        if (!(missingPermissions_1 && missingPermissions_1.length > 0)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: this.translateService.instant(permissionAlertTitle),
                                message: this.translateService.instant(permissionMessage),
                                buttons: [
                                    {
                                        text: this.translateService.instant('CLOSE_BUTTON'),
                                        handler: function () {
                                            _this.androidPermissions.requestPermissions(missingPermissions_1).then(function (result) {
                                                resolve();
                                            }, function (error) {
                                                _this.logger.error('Error requesting permission from Android' + error);
                                                reject(new Error(error));
                                            });
                                        }
                                    }
                                ]
                            })];
                    case 5:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 6: return [2 /*return*/, _a.sent()];
                    case 7:
                        resolve();
                        _a.label = 8;
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        resolve();
                        _a.label = 10;
                    case 10: return [2 /*return*/];
                }
            });
        }); });
    };
    AppComponent.prototype.checkForPermission = function (permission) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.androidPermissions.checkPermission(permission)];
            });
        });
    };
    /**
 * @returns Quering the device version from Device plugin if it is not initialized yet
 */
    AppComponent.prototype.getDeviceVersion = function () {
        if (!this.deviceVersion) {
            this.initDeviceVersion();
        }
        return this.deviceVersion;
    };
    /**
     * Initializing the device version
     */
    AppComponent.prototype.initDeviceVersion = function () {
        var devVersion = Number(this.device.version);
        if (!Number.isNaN(devVersion)) {
            this.deviceVersion = devVersion;
        }
    };
    AppComponent.ctorParameters = function () { return [
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
    ]; };
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
    return AppComponent;
}());



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
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
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
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
    return AppModule;
}());



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

var AuthGuard = /** @class */ (function () {
    function AuthGuard(user) {
        this.user = user;
    }
    AuthGuard.prototype.canActivate = function () {
        return this.user.isLoggedIn();
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _services_user_user__WEBPACK_IMPORTED_MODULE_0__["User"] }
    ]; };
    return AuthGuard;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat.page */ "./src/app/communication/chat/chat.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var ChatPageModule = /** @class */ (function () {
    function ChatPageModule() {
    }
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
    return ChatPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _clinician_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clinician/providers */ "./src/app/services/providers.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _hrs_utility__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @hrs/utility */ "../../libs/utility/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);











var ChatPage = /** @class */ (function () {
    function ChatPage(communication, loadingCtrl, translateService, navParams, modalCtrl, logger, modalService, alertCtrl, ref, formBuilder) {
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
    ChatPage.prototype.ngOnInit = function () {
        var _this = this;
        this.getTextMessages(this.patient.hrsid);
        this.getMessagesEvent = this.communication.getChatNewMessage$.subscribe(function () {
            _this.getTextMessages(_this.patient.hrsid, true);
        });
        this.openNewChatEvent = this.communication.exitChatOpenNew$.subscribe(function () {
            _this.dismiss();
        });
        this.data = this.formBuilder.group({
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', null)
        });
    };
    ChatPage.prototype.ionViewDidLeave = function () {
        this.stopPolling();
        this.getMessagesEvent.unsubscribe();
        this.openNewChatEvent.unsubscribe();
    };
    /**
     * Gets all of the messages for a particular patient
     * Incoming represents a new chat received via firebase notification while the chat modal is open
     * we don't want to show a loader if a new message is received while the modal is open
     */
    ChatPage.prototype.getTextMessages = function (hrsid, incoming) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!incoming) return [3 /*break*/, 3];
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: this.translateService.instant('LOADING'),
                            })];
                    case 1:
                        _a.textMessagesLoaded = _b.sent();
                        return [4 /*yield*/, this.textMessagesLoaded.present()];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        this.communication.getTextMessages(hrsid).subscribe({
                            next: function (res) {
                                _this.messages = res;
                                _this.ref.detectChanges();
                                if (!incoming) {
                                    _this.pollGetTexts();
                                }
                            },
                            error: function (err) {
                                _this.handleGetTextMessagesError(err, hrsid, incoming);
                            },
                            complete: function () {
                                if (!incoming) {
                                    _this.dismissLoadingAlert();
                                }
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatPage.prototype.dismissLoadingAlert = function () {
        this.loadingCtrl.dismiss();
    };
    ChatPage.prototype.handleGetTextMessagesError = function (err, hrsid, incoming) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logger.error('Error: ', err);
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: this.translateService.instant('ERROR_TITLE'),
                                message: this.translateService.instant('GET_MESSAGE_ERROR'),
                                buttons: [
                                    {
                                        text: this.translateService.instant('CANCEL_BUTTON'),
                                        role: 'cancel',
                                        handler: function () { }
                                    },
                                    {
                                        text: this.translateService.instant('RETRY_BUTTON'),
                                        handler: function () {
                                            _this.getTextMessages(hrsid, incoming);
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Poll get chat endpoint
     * If multiple clinicians are chatting with the same patient we want to be sure that everyone receives all new messages
     * this is a temporary fix until we can update firebase to notify all clinicians of any new message to a chat thread
     * We will hit the get chat endpoint every thirty seconds anytime the a chat is in view
     */
    ChatPage.prototype.pollGetTexts = function () {
        var _this = this;
        var poll = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["timer"])(30000, 30000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function () { return _this.communication.getTextMessages(_this.patient.hrsid); }));
        this.poll = poll
            .subscribe(function (res) {
            _this.polling = true;
            var messages = res;
            if (_this.messages.length < messages.length) {
                // the new response has more messages than the previous response
                // add to dom and scroll to bottom
                _this.polling = false;
                _this.messages = messages;
                _this.callScrollFunction();
            }
        });
    };
    ChatPage.prototype.stopPolling = function () {
        if (this.poll) {
            this.poll.unsubscribe();
        }
    };
    /**
     * Convert time and date into a consistent format
     */
    ChatPage.prototype.convertTimeAndDate = function (timestamp) {
        return moment__WEBPACK_IMPORTED_MODULE_10___default.a.unix(parseInt(timestamp) / 1000).format('MM/DD/YYYY h:mm:ss A');
    };
    /**
     * Scrolls to bottom of chat message list
     */
    ChatPage.prototype.callScrollFunction = function () {
        this.content.scrollToBottom(0);
    };
    /**
     * Posts the new message written by the clinician to the patient
     */
    ChatPage.prototype.sendTextMessage = function () {
        var _this = this;
        // curly chars are replaced to prevent erroring out when saving to DB
        var text = _hrs_utility__WEBPACK_IMPORTED_MODULE_9__["ConvertString"].replaceCurlyChars(this.data.value.message.trim());
        var message = { text: text, type: 'clinician', name: 'You', messageStatus: this.translateService.instant('SENDING'), id: new Date() };
        this.messages.push(message);
        this.callScrollFunction();
        this.communication.sendTextMessage(text, this.patient.hrsid).subscribe({
            next: function (res) {
                message.messageStatus = _this.translateService.instant('SENT');
                var updatedMessage = {
                    message: ''
                };
                _this.data.setValue(updatedMessage, { emitEvent: true });
            },
            error: function (err) {
                _this.logger.error('Error: ', err);
                message.messageStatus = _this.translateService.instant('FAILED_TO_SEND');
                _this.handleSendTextMessageError(message);
            }
        });
    };
    ChatPage.prototype.handleSendTextMessageError = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: this.translateService.instant('ERROR_TITLE'),
                            message: this.translateService.instant('SEND_MESSAGE_ERROR'),
                            buttons: [
                                {
                                    text: this.translateService.instant('CANCEL_BUTTON'),
                                    role: 'cancel'
                                },
                                {
                                    text: this.translateService.instant('RETRY_BUTTON'),
                                    handler: function () {
                                        _this.messages = _this.messages.filter(function (msg) {
                                            return (JSON.stringify(msg) !== JSON.stringify(message));
                                        });
                                        _this.sendTextMessage();
                                    },
                                },
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ChatPage.prototype.dismiss = function () {
        this.modalCtrl.dismiss();
        this.modalService.setModalStatus('ChatMessagesModalPage', false, null);
    };
    ChatPage.ctorParameters = function () { return [
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
    ]; };
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
    return ChatPage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _video_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video.page */ "./src/app/communication/video/video.page.ts");







var VideoPageModule = /** @class */ (function () {
    function VideoPageModule() {
    }
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
    return VideoPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _clinician_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clinician/providers */ "./src/app/services/providers.ts");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/dialogs/ngx */ "./node_modules/@ionic-native/dialogs/ngx/index.js");
/* harmony import */ var _services_user_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/user/user */ "./src/app/services/user/user.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");










var VideoPage = /** @class */ (function () {
    function VideoPage(platform, communication, alertCtrl, loadingCtrl, translateService, navParams, modalCtrl, logger, ref, screenOrientation, dialogs, modalService, user, zoomService) {
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
    VideoPage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            // lock screen in portrait mode
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        }
        // prevent back button from closing modal without ending call
        this.backAction = this.platform.backButton.subscribeWithPriority((1), function () {
            _this.dismiss();
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
    };
    VideoPage.prototype.ngOnDestroy = function () {
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
    };
    /**
     * Subscribe to Comms Service Event notifications
     */
    VideoPage.prototype.initNotificationListeners = function () {
        var _this = this;
        // the person we we're calling missed or ignored the call
        this.endCallEvent = this.communication.endVideoCall$.subscribe(function (data) {
            _this.onCallMissed(data);
        });
        // End current call and join incoming call
        // event listener, call in progress, call pending in background -- should be able to remove once native ui is implemented
        this.exitCallEnterNewEvent = this.communication.exitVideoCallEnterNew$.subscribe(function () {
            _this.endCall();
        });
        this.callerLeft = this.communication.callerLeft$.subscribe(function (data) {
            // if the call has not been answered and the callid's match, end the call - called when the call is still ringing but the caller has hung up
            if (!_this.calling && _this.callData.callId === data.callId) {
                _this.endCall(true, true, true);
            }
        });
    };
    // callback for event listened, call missed or call ignored
    VideoPage.prototype.onCallMissed = function (data) {
        if (data &&
            data.callId == this.callId &&
            (data.action === 'call_unanswered' || data.action === 'call_declined')) {
            var displayStatuses = {
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
    };
    // callback for event listener, call in progress, call pending in background -- should be able to remove once native ui is implemented
    VideoPage.prototype.onNewCommunication = function () {
        this.endCall();
    };
    // callback for event listener, user has left meeting successfully
    VideoPage.prototype.onCallLeft = function () {
        this.communication.updateParticipantStatus('left');
        cordova.plugins.Zoom.removeMeetingLeaveListener();
    };
    /**
     * Toggle button between start call/ end call
     */
    VideoPage.prototype.toggleCall = function () {
        if (this.calling) {
            this.endCall();
        }
        else {
            if (!this.modalClosing) {
                this.initializeVideoCall();
            }
        }
    };
    /**
     * Create a call or accept an incoming call
     */
    VideoPage.prototype.initializeVideoCall = function () {
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
    };
    /**
     * Creates a call by requesting a callId
     * on success starts a request for the call Token
     */
    VideoPage.prototype.getCallId = function () {
        var _this = this;
        // tablet rings on success
        this.communication.getVideoCallId(this.userHrsId, this.callData.patientHrsId)
            .subscribe({
            next: function (res) {
                _this.callId = res.data.id;
                _this.getVideoCallToken();
            },
            error: function (err) {
                _this.calling = false;
                _this.logger.error('Error: ', err);
                _this.errorPlacingCall();
            }
        });
    };
    /**
     *  Requests token, api key, and sessionId for entering the call room
     */
    VideoPage.prototype.getVideoCallToken = function () {
        var _this = this;
        this.communication.getVideoCallToken(this.callId, this.userHrsId)
            .subscribe({
            next: function (res) {
                var jwtToken = res.data.value;
                _this.apiKey = res.data.projectKey;
                _this.sessionId = res.data.sessionId;
                _this.token = res.data.value;
                _this.callData = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.callData, res.data);
                _this.communication.videoParticipantId = res.data.id;
                if (res.data.provider === 'zoom') {
                    // initialize jwt token before joining the call as per new sdk changes
                    _this.zoomService.initWithJWTToken(jwtToken).then(function (message) {
                        _this.logger.log('Successfully initialized zoom, now will join meeting');
                        _this.enterZoomVideoCall(_this.callData.sessionId, _this.callData.password);
                    }).catch(function (err) {
                        _this.logger.error('Zoom is still not initialized thus not placing the call' + err);
                    });
                }
                else {
                    _this.enterOpenTokVideoCall();
                }
            },
            error: function (err) {
                _this.calling = false;
                _this.logger.error('Error: ', err);
                _this.errorPlacingCall();
            }
        });
    };
    VideoPage.prototype.enterZoomVideoCall = function (meetingNumber, password) {
        var _this = this;
        // Join meeting once the jwt token gets initialized
        // Note the display name is just in english because we don't know what language the recipient would want to see it in
        this.zoomService.joinMeeting(meetingNumber, password, 'Clinician').then(function () {
            cordova.plugins.Zoom.addMeetingLeaveListener(_this.onCallLeft.bind(_this), _this);
            _this.communication.updateParticipantStatus('active');
            // Zoom call was joined successfully. Since the Zoom call opens a separate page, when you end the call
            // there's no reason to still have our video modal still open behind it and have an extra step to close that,
            // so go ahead and close it here.
            setTimeout(function () {
                _this.callStatus = 'CALL_ENDED';
                _this.calling = false;
                _this.dismiss();
            }, 3000);
        }, function () {
            _this.callStatus = 'CALL_FAILED';
        });
    };
    /**
     * Enter call and wait for answer event
     * Also handles end call event after the person we are calling accepts
     */
    VideoPage.prototype.enterOpenTokVideoCall = function () {
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
    };
    VideoPage.prototype.resetPublisherFeed = function () {
        // When an active call is destroyed, the publisher div is stripped of all classes and stylings.
        // We need to manually add our custom styles.
        var publisherFeed = document.getElementById('videoCallPublisher');
        publisherFeed.classList.add('c_call--view-caller');
        publisherFeed.style.width = '25vw';
        publisherFeed.style.height = '20vh';
        publisherFeed.style.position = 'absolute';
        publisherFeed.style.bottom = '13vh';
        publisherFeed.style.right = '1em';
        publisherFeed.style.zIndex = '1000';
        publisherFeed.style.pointerEvents = 'none';
    };
    VideoPage.prototype.timeoutCall = function () {
        var _this = this;
        // JIR-9499: Match CC2 functionality that ends the outgoing call attempt after 90s.
        this.callTimeout = setTimeout(function () {
            _this.communication.getVideoCallStatus(_this.callId).subscribe({
                next: function (res) {
                    var status = res.data.status;
                    var displayStatuses = {
                        'missed': 'CALL_UNAVAILABLE',
                        'declined': 'CALL_DECLINED',
                        'ready': 'CALL_UNAVAILABLE'
                    };
                    // Keep modal up and update UI with new call status and option to retry call.
                    if (displayStatuses[status]) {
                        _this.allowRetryCall(displayStatuses[status]);
                    }
                },
                error: function (err) {
                    _this.logger.error(err);
                    // End call and dismiss the modal if status can not be verified.
                    if (_this.session) { // OT
                        _this.endCall();
                    }
                }
            });
        }, 90 * 1000);
    };
    /**
     * End call and update modal to show Unavailable or Declined status and Retry button.
     */
    VideoPage.prototype.allowRetryCall = function (status) {
        if (this.session) { // OT
            this.endCall(false, false);
            OT.updateViews();
        }
        this.callStatus = status;
        this.modalClosing = false;
        this.ref.detectChanges();
    };
    VideoPage.prototype.initOpenTokEventListeners = function () {
        var _this = this;
        this.session.on({
            streamCreated: function (event) {
                // callee answered
                _this.callStatus = 'CALL_CONNECTED';
                _this.ref.detectChanges();
                // displays callees stream
                _this.session.subscribe(event.stream, 'videoCallSubscriber', { width: '100%', height: '81vh' });
                OT.updateViews();
            },
            streamDestroyed: function (event) {
                // the person the user is calling hung up
                // only happens when the call was answered
                _this.endCall();
                _this.logger.log("Stream " + event.stream.name + " ended because " + event.reason);
                OT.updateViews();
            },
            sessionConnected: function (event) {
                _this.session.publish(_this.publisher);
                _this.communication.updateParticipantStatus('active');
            }
        });
    };
    VideoPage.prototype.connectOpenTokSession = function () {
        var _this = this;
        this.session.connect(this.token, function (error) {
            if (error) {
                _this.logger.error('Error connecting opentok session', error);
            }
        });
    };
    /**
     * End call and clean up
     */
    VideoPage.prototype.endCall = function (dismiss, updateStatus, callerLeft) {
        if (dismiss === void 0) { dismiss = true; }
        if (updateStatus === void 0) { updateStatus = true; }
        if (callerLeft === void 0) { callerLeft = false; }
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
    };
    /**
     * Dismiss modal
     * prompt user first in the case that they are already on a call
     */
    VideoPage.prototype.dismiss = function (callerLeft) {
        if (callerLeft === void 0) { callerLeft = false; }
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
    };
    /**
     * Show alert if call fails
     */
    VideoPage.prototype.errorPlacingCall = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.callStatus = 'CALL_FAILED';
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: this.translateService.instant('ERROR_TITLE'),
                                message: this.translateService.instant('VIDEO_CALL_ERROR'),
                                buttons: [
                                    {
                                        text: this.translateService.instant('CANCEL_BUTTON'),
                                        role: 'cancel',
                                        handler: function () { }
                                    },
                                    {
                                        text: this.translateService.instant('RETRY_BUTTON'),
                                        handler: function () {
                                            _this.initializeVideoCall();
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Prompt user whether to end call and exit modal or continue call
     */
    VideoPage.prototype.showCloseModalPrompt = function () {
        var _this = this;
        // native dialog bc ionic alert would not display over video
        this.dialogs.confirm(this.translateService.instant('END_CALL_MESSAGE'), this.translateService.instant('END_CALL_TITLE'), [
            this.translateService.instant('END_CALL'),
            this.translateService.instant('CONTINUE')
        ]).then(function (e) {
            // if e is 1 the user clicked End Call
            // e refers to the selections index in the buttonLabels array
            // this index in this case starts at 1
            if (e && e === 1) {
                _this.endCall();
            }
        });
    };
    VideoPage.prototype.toggleStethoscope = function () {
        var _this = this;
        this.stethoscopeActive = !this.stethoscopeActive;
        this.ref.detectChanges();
        if (this.stethoscopeActive && this.session) {
            this.session.signal({
                type: 'stethoscope',
                data: 'on',
            }, function (error) {
                if (error) {
                    _this.logger.error('signal error (' + error.code + '): ' + error.message);
                }
                else {
                    _this.logger.log('signal sent.');
                }
            });
        }
        else {
            this.session.signal({
                type: 'stethoscope',
                data: 'off',
            }, function (error) {
                if (error) {
                    _this.logger.error('signal error (' + error.code + '): ' + error.message);
                }
                else {
                    _this.logger.log('signal sent.');
                }
            });
        }
    };
    VideoPage.ctorParameters = function () { return [
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
    ]; };
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
    return VideoPage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _voice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./voice.page */ "./src/app/communication/voice/voice.page.ts");







var VoicePageModule = /** @class */ (function () {
    function VoicePageModule() {
    }
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
    return VoicePageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _clinician_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clinician/providers */ "./src/app/services/providers.ts");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/dialogs/ngx */ "./node_modules/@ionic-native/dialogs/ngx/index.js");








var VoicePage = /** @class */ (function () {
    function VoicePage(platform, communication, translateService, navParams, modalCtrl, logger, screenOrientation, alertCtrl, modalService, ref, dialogs) {
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
    VoicePage.prototype.ngOnInit = function () {
        var _this_1 = this;
        if (this.platform.is('cordova')) {
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        }
        // add handler so modal isn't closed accidentally during a call by the hardware back button
        this.backAction = this.platform.backButton.subscribeWithPriority((1), function () {
            _this_1.dismiss();
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
    };
    VoicePage.prototype.ngOnDestroy = function () {
        if (this.callerLeft)
            this.callerLeft.unsubscribe();
    };
    VoicePage.prototype.ionViewDidLeave = function () {
        // removes hardware back button handler
        this.backAction.unsubscribe();
        // unsubscribe from listeners
        this.endCallEvent.unsubscribe();
        this.exitCallEnterNewEvent.unsubscribe();
        if (this.platform.is('cordova')) {
            this.screenOrientation.unlock();
        }
    };
    VoicePage.prototype.initNotificationListeners = function () {
        var _this_1 = this;
        // the person we we're calling missed or ignored the call
        this.endCallEvent = this.communication.endVoiceCall$.subscribe(function (data) {
            if (data &&
                (data.action === 'call_unanswered' || data.action === 'call_declined')) {
                _this_1.endCall();
            }
        });
        this.callerLeft = this.communication.callerLeft$.subscribe(function (data) {
            // if the call has not been answered and the callid's match, end the call - called when the call is still ringing but the caller has hung up
            if (!_this_1.calling && data.callid === _this_1.callData.callId) {
                _this_1.endCall();
            }
        });
        // End current call and join incoming call
        this.exitCallEnterNewEvent = this.communication.exitVoiceCallEnterNew$.subscribe(function () {
            _this_1.endCall();
        });
    };
    /**
     *  Toggle button from place call to end call
     */
    VoicePage.prototype.toggleCall = function () {
        if (this.calling) {
            this.endCall();
        }
        else {
            if (!this.modalClosing) {
                this.initializeVoiceCall();
            }
        }
    };
    /**
     * Start voice call with the patient
     */
    VoicePage.prototype.initializeVoiceCall = function () {
        this.calling = true;
        this.callStatus = 'CONNECTING';
        this.ref.detectChanges();
        if (this.callData.callId) {
            this.acceptIncomingCall();
        }
        else {
            this.initializeOutgoingCall();
        }
    };
    /**
     * Begins outgoing call
     */
    VoicePage.prototype.initializeOutgoingCall = function () {
        var _this_1 = this;
        this.communication.initializeOutgoingVoiceCall(this.callData.patientHrsId).subscribe({
            next: function (res) {
                _this_1.callData = res;
                _this_1.connectCall(res);
            },
            error: function (err) {
                _this_1.calling = false;
                _this_1.callStatus = 'CALL_FAILED';
                _this_1.ref.detectChanges();
                _this_1.logger.error('Error: ', err);
            }
        });
    };
    /**
     * Get incoming voice call token
     */
    VoicePage.prototype.acceptIncomingCall = function () {
        var _this_1 = this;
        this.communication.acceptIncomingVoiceCall(this.callData.callId).subscribe({
            next: function (res) {
                var data = { callid: _this_1.callData.callId, access: res.access };
                _this_1.connectCall(data);
            },
            error: function (err) {
                _this_1.calling = false;
                _this_1.callStatus = 'CALL_FAILED';
                _this_1.ref.detectChanges();
                _this_1.logger.error('Failed to obtain call token');
            }
        });
    };
    /**
     * Connect to voice call
     * @param data
     */
    VoicePage.prototype.connectCall = function (data) {
        var _this_1 = this;
        var _this = this;
        this.callStatus = 'CALL_CONNECTED';
        Twilio.TwilioVoiceClient.onClientInitialized(function () {
            _this_1.logger.log('Twilio client initialized.');
            var twilioParams = {
                'To': 'conference:' + data.callid,
                'calltype': 'startcall',
            };
            Twilio.TwilioVoiceClient.call(data.access, twilioParams);
        });
        Twilio.TwilioVoiceClient.initialize(data.access);
        // Handle Errors
        Twilio.TwilioVoiceClient.onError(function (err) {
            setTimeout(function () {
                _this.calling = false;
                _this.callStatus = 'CALL_FAILED';
                _this.logger.error('Failed (' + err.message + ')');
                _this.ref.detectChanges();
            }, 1000); // to ensure that error is not overwritten by disconnect
        });
        // Handle Call Connection
        Twilio.TwilioVoiceClient.onCallDidConnect(function (call) {
            _this_1.logger.log('Successfully established call');
            setTimeout(function () {
                _this.callStatus = 'CALL_CONNECTED';
                _this.ref.detectChanges();
            }, 0);
        });
        // Handle Call Disconnect
        Twilio.TwilioVoiceClient.onCallDidDisconnect(function (call) {
            _this_1.logger.log('Call Ended');
            setTimeout(function () {
                _this.calling = false;
                _this.callStatus = 'CALL_ENDED';
                _this.dismiss();
                _this.ref.detectChanges();
            }, 0);
        });
        Twilio.TwilioVoiceClient.onCallInviteReceived(function () {
            setTimeout(function () {
                _this.calling = true;
                _this.callStatus = 'CALL_CONNECTED';
                _this.ref.detectChanges();
            }, 0);
        });
    };
    /**
     * Stop voice call with the patient
     */
    VoicePage.prototype.endCall = function () {
        if (this.platform.is('cordova')) {
            Twilio.TwilioVoiceClient.disconnect();
        }
        this.callStatus = 'CALL_ENDED';
        this.calling = false;
        this.communication.voiceCallLeft(this.callData.callid);
        this.dismiss();
    };
    VoicePage.prototype.dismiss = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this_1 = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.calling) {
                    // native dialog bc ionic alert would not display over video
                    this.dialogs.confirm(this.translateService.instant('END_CALL_MESSAGE'), this.translateService.instant('END_CALL_TITLE'), [
                        this.translateService.instant('END_CALL'),
                        this.translateService.instant('CONTINUE')
                    ]).then(function (e) {
                        // if e is 1 the user clicked End Call
                        // e refers to the selections index in the buttonLabels array
                        // this index in this case starts at 1
                        if (e && e === 1) {
                            _this_1.endCall();
                        }
                    });
                }
                else {
                    this.modalService.setModalStatus('VoicePage', false);
                    this.modalClosing = true;
                    this.modalCtrl.dismiss();
                }
                return [2 /*return*/];
            });
        });
    };
    VoicePage.ctorParameters = function () { return [
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
    ]; };
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
    return VoicePage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _services_user_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user/user */ "./src/app/services/user/user.ts");
/* harmony import */ var _app_env__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/env */ "../../libs/environments/environment");
/* harmony import */ var _hrs_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @hrs/providers */ "../../libs/providers/providers.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");












var OrganizationalLoginPage = /** @class */ (function () {
    function OrganizationalLoginPage(browser, user, toastCtrl, translateService, logger, gatewayApi, router) {
        var _this = this;
        this.browser = browser;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.logger = logger;
        this.gatewayApi = gatewayApi;
        this.router = router;
        this.translateService.get('ORGANIZATIONAL_LOGIN.EMAIL_LOOKUP_ERROR').subscribe(function (value) {
            _this.emailLookupErrorString = value;
        });
        this.translateService.get('LOGIN_ERROR').subscribe(function (value) {
            _this.loginErrorString = value;
        });
        this.translateService.get('LOGIN_SUCCESS').subscribe(function (value) {
            _this.loginSuccessString = value;
        });
        this.loggingInSSOSubscription = this.user.loggingInSSOSubject.subscribe(function () {
            _this.loggingIn = true;
        });
        this.loggedInSubscription = this.user.loginResultSubject.subscribe(function (success) {
            var toastMessage = _this.loginSuccessString;
            if (success) {
                if (_this.user.data.type !== 'clinician') {
                    toastMessage = _this.loginErrorString;
                }
                else {
                    _this.router.navigateByUrl('');
                }
            }
            else {
                toastMessage = _this.loginErrorString;
            }
            _this.loggingIn = false;
            _this.viewToast(toastMessage, 3000);
        });
    }
    OrganizationalLoginPage.prototype.ngOnDestroy = function () {
        this.loggingInSSOSubscription.unsubscribe();
        this.loggedInSubscription.unsubscribe();
    };
    OrganizationalLoginPage.prototype.viewToast = function (message, time) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: message,
                            duration: time,
                            buttons: [
                                {
                                    text: this.translateService.instant('CLOSE_BUTTON'),
                                    role: 'cancel'
                                }
                            ],
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
    OrganizationalLoginPage.prototype.doLogin = function () {
        var _this = this;
        this.loggingIn = true;
        var showEmailLookupError = function () { return _this.viewToast(_this.emailLookupErrorString, 5000); };
        this.gatewayApi.post('samlemail', { data: { email: this.email } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(function (res) {
            if (res.data.environment) {
                // Open browser to the user organization's login page
                var url = "https://" + res.data.environment + ".auth." + _app_env__WEBPACK_IMPORTED_MODULE_7__["environment"].HRS_DOMAIN + "/login?mobile=true";
                _this.browser.create(url, '_system', 'location=no,clearsessioncache=yes,clearcache=yes');
                // Set loggingIn to false because if they fail to login via their organization's login page in the browser,
                // they can try again from our app. We don't receive any event indicating that they failed there.
                _this.loggingIn = false;
                // After they successfully login in the browser, it will redirect back to our app using the deeplink functionality
                // in app.component, login to our API, and inform this page to navigate to the MainPage via loggedInSubscription.
            }
            else {
                showEmailLookupError();
                _this.loggingIn = false;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["catchError"])(function () {
            showEmailLookupError();
            _this.loggingIn = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])({});
        })).subscribe();
    };
    OrganizationalLoginPage.ctorParameters = function () { return [
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"] },
        { type: _services_user_user__WEBPACK_IMPORTED_MODULE_6__["User"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: ngx_logger__WEBPACK_IMPORTED_MODULE_5__["NGXLogger"] },
        { type: _hrs_providers__WEBPACK_IMPORTED_MODULE_8__["GatewayApi"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }
    ]; };
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
    return OrganizationalLoginPage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _careplan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./careplan.page */ "./src/app/patient/careplan/careplan.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var CarePlanPageModule = /** @class */ (function () {
    function CarePlanPageModule() {
    }
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
    return CarePlanPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _services_patientProfile_careplan_careplan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/patientProfile/careplan/careplan.service */ "./src/app/services/patientProfile/careplan/careplan.service.ts");
/* harmony import */ var _clinician_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clinician/providers */ "./src/app/services/providers.ts");
/* harmony import */ var _edit_careplan_edit_careplan_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-careplan/edit-careplan.page */ "./src/app/patient/careplan/edit-careplan/edit-careplan.page.ts");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");







// observables


var CareplanPage = /** @class */ (function () {
    function CareplanPage(carePlan, logger, modalCtrl, modalService, navParams) {
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
    CareplanPage.prototype.ngOnInit = function () {
        this.loadPatientCareplan();
    };
    CareplanPage.prototype.loadPatientCareplan = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])([this.carePlan.getEnvPresets().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(error); })),
            this.carePlan.getPatientModules().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(error); })),
            this.carePlan.getPatientModulesWithReminders(this.patient.hrsid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(error); }))]).subscribe(function (_a) {
            var presetsRes = _a[0], modulesRes = _a[1], remindersRes = _a[2];
            _this.parseCareplanResponse(presetsRes.data, modulesRes.data);
            _this.populateActiveItems('presets');
            _this.getModulesWithReminders(remindersRes);
        });
    };
    CareplanPage.prototype.parseCareplanResponse = function (presetsResponse, modulesResponse) {
        var _this = this;
        var careplanSettings = Object.values(presetsResponse).concat(Object.values(modulesResponse));
        var patientPresets = this.navParams.get('activePresets');
        var patientModules = this.navParams.get('activeModules');
        careplanSettings.forEach(function (item) {
            var role = item['resourceType'];
            var isModules = role === 'modules';
            var settings = isModules ? patientModules : patientPresets;
            var key = isModules ? item['attributes']['shortname'] : item['id'];
            // Assign preset and module objects accounting for variations in naming schemes
            _this[role][key] = {
                item: item,
                selected: isModules ? settings.includes(key) : settings.includes(item['attributes'].name)
            };
        });
    };
    CareplanPage.prototype.openEditCarePlanModal = function (isModules) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var careplanSettings, keys, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        careplanSettings = isModules ? this.modules : this.presets;
                        keys = Object.keys(careplanSettings);
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _edit_careplan_edit_careplan_page__WEBPACK_IMPORTED_MODULE_5__["EditCareplanPage"],
                                componentProps: { careplanSettings: careplanSettings, keys: keys, isModules: isModules }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (_a) {
                            var data = _a.data;
                            if (data === undefined) {
                                _this.hasChanges = false;
                                _this.logger.debug(data, 'data is undefined');
                            }
                            else if (data.updatedItems.length) {
                                _this.hasChanges = true;
                                _this.updateCarePlanSettings(data.updatedItems, data.role);
                                var modules = _this.assemblePayload();
                                _this.carePlan.savePatientModuleInfo(_this.patient.hrsid, modules, _this.activityReminders, _this.surveyReminders, _this.weightReminders, _this.medicationReminders).subscribe(function (res) {
                                    if (res) {
                                        _this.logger.log('Care Plan settings saved: ', res);
                                    }
                                    else {
                                        _this.logger.warn('Unable to save Care Plan settings: ', res);
                                    }
                                });
                            }
                            else {
                                _this.hasChanges = false;
                                _this.logger.info('No changes made');
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CareplanPage.prototype.getModulesWithReminders = function (remindersRes) {
        var patientmodule = remindersRes['data'].patientmoduleinfo;
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
            for (var i = 0; i < this.medicationReminders.length; i++) {
                this.medicationReminders[i].time = this.medicationReminders[i]['times'];
            }
            for (var i = 0; i < this.medicationReminders.length; i++) {
                if (this.medicationReminders[i].time !== 'PRN') {
                    this.medicationReminders[i].time = this.calculateMedicationHoursAndMinutes(String(this.medicationReminders[i].time));
                }
                else {
                    this.medicationReminders[i].window = '30';
                }
            }
        }
    };
    CareplanPage.prototype.calculateHoursAndMinutes = function (reminderDetail) {
        if (reminderDetail.ampm === 'PM') {
            return (parseInt(reminderDetail.hours) + 12) * 60 + parseInt(reminderDetail.minutes);
        }
        else {
            return parseInt(reminderDetail.hours) * 60 + parseInt(reminderDetail.minutes);
        }
    };
    CareplanPage.prototype.calculateMedicationHoursAndMinutes = function (reminderDetail) {
        // It doesn't return an "AMPM" key like the others do
        var splitReminderTimes = reminderDetail.match(/[a-z]+|[^a-z]+/gi);
        var splitHourAndMinutes = splitReminderTimes[0].split(/\s*(?:\bas\b|:)\s*/);
        var hours = splitHourAndMinutes[0];
        var minutes = splitHourAndMinutes[1];
        if (splitReminderTimes[1] === 'PM') {
            return (parseInt(hours) + 12) * 60 + parseInt(minutes);
        }
        else {
            return parseInt(hours) * 60 + parseInt(minutes);
        }
    };
    CareplanPage.prototype.updateCarePlanSettings = function (updatedItems, roleUpdated) {
        var _this = this;
        updatedItems.forEach(function (item) {
            _this[roleUpdated][item[0]].selected = item[1].selected;
            if (roleUpdated === 'presets' && item[1].selected) {
                // Enable related modules for toggled presets
                _this.enablePresetModules(item);
            }
        });
        this.populateActiveItems('presets');
        this.populateActiveItems('modules');
    };
    CareplanPage.prototype.enablePresetModules = function (preset) {
        var _this = this;
        var key = preset[0];
        var status = preset[1].selected;
        var relationships = this.presets[key].item['relationships'].modules.data;
        if (status) {
            relationships.forEach(function (rel) {
                var mod = Object.values(_this.modules).filter(function (mod) { return mod['item'].id === rel.id; })[0];
                _this.modules[mod['item'].attributes['shortname']].selected = true;
            });
        }
    };
    CareplanPage.prototype.populateActiveItems = function (role) {
        var items = [];
        var capName = role.replace(/(p|m)/, function (match) { return match.toUpperCase(); });
        for (var key in this[role]) {
            if (this[role].hasOwnProperty(key)) {
                var name_1 = role === 'modules' ? this[role][key].item.attributes['shortname'] : this[role][key].item.id;
                if (this[role][key].selected)
                    items.push(name_1);
            }
        }
        this['active' + capName] = items;
        return items;
    };
    CareplanPage.prototype.assemblePayload = function () {
        var _this = this;
        var modules = this.activeModules.filter(function (module) { return _this.modules[module].selected; });
        var presets = this.activePresets.filter(function (preset) { return _this.presets[preset].selected; });
        return modules.concat(presets);
    };
    CareplanPage.prototype.dismiss = function () {
        this.modalCtrl.dismiss({ modules: this.modules, presets: this.presets, hasChanges: this.hasChanges });
        this.modalService.setModalStatus('CarePlanPage', false, null);
    };
    CareplanPage.ctorParameters = function () { return [
        { type: _services_patientProfile_careplan_careplan_service__WEBPACK_IMPORTED_MODULE_3__["CareplanService"] },
        { type: ngx_logger__WEBPACK_IMPORTED_MODULE_6__["NGXLogger"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _clinician_providers__WEBPACK_IMPORTED_MODULE_4__["ModalService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] }
    ]; };
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
    return CareplanPage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _edit_careplan_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-careplan.page */ "./src/app/patient/careplan/edit-careplan/edit-careplan.page.ts");








var EditCareplanModule = /** @class */ (function () {
    function EditCareplanModule() {
    }
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
    return EditCareplanModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _hrs_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hrs/providers */ "../../libs/providers/providers.ts");





var EditCareplanPage = /** @class */ (function () {
    function EditCareplanPage(modalCtrl, modalService, navParams, platform, translateService, alertCtrl) {
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
    EditCareplanPage.prototype.ngOnInit = function () {
        this.originalSettings = JSON.stringify(this.navParams.get('careplanSettings'));
        this.keys = this.navParams.get('keys');
        this.isModules = this.navParams.get('isModules');
        this.careplanToggleMap = JSON.parse(this.originalSettings);
    };
    EditCareplanPage.prototype.toggleCareplanItem = function (item) {
        var key = this.isModules ? item.attributes['shortname'] : item.id;
        this.careplanToggleMap[key].selected = !this.careplanToggleMap[key].selected;
        if (!this.updatedItems.includes(key))
            this.updatedItems.push(key);
        if (this.isCareplanEmpty() && this.isModules)
            this.alertCareplanStatus().then();
    };
    EditCareplanPage.prototype.isCareplanEmpty = function () {
        // When editing presets, clinicians should be able to save with no selections.
        if (!this.isModules)
            return false;
        return !Object.values(this.careplanToggleMap).some(function (item) { return item.selected; });
    };
    EditCareplanPage.prototype.alertCareplanStatus = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alertMessage, alertOptions, alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.translateService.get('CAREPLAN_EMPTY_ALERT').subscribe(function (value) { return alertMessage = value; });
                        alertOptions = { message: alertMessage };
                        return [4 /*yield*/, this.alertCtrl.create(alertOptions)];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EditCareplanPage.prototype.determineStateChange = function () {
        var originalSettings = JSON.parse(this.originalSettings);
        return Object.entries(this.careplanToggleMap).filter(function (item) {
            var key = item[0];
            var status = item[1]['selected'];
            if (originalSettings[key].selected !== status)
                return item;
        });
    };
    EditCareplanPage.prototype.cancel = function () {
        // this.careplanSettings does exist, but is not explicitly defined. Instead it is created from NavParams;
        // @ts-ignore
        this.careplanSettings = JSON.parse(this.originalSettings);
        this.modalCtrl.dismiss();
        this.modalService.setModalStatus('EditCarePlanPage', false);
    };
    EditCareplanPage.prototype.dismiss = function () {
        var role = this.isModules ? 'modules' : 'presets';
        var updatedItems = this.determineStateChange();
        this.modalCtrl.dismiss({
            updatedItems: updatedItems,
            role: role
        });
        this.modalService.setModalStatus('EditCarePlanPage', false);
    };
    EditCareplanPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _hrs_providers__WEBPACK_IMPORTED_MODULE_4__["ModalService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
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
    return EditCareplanPage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _add_device_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-device.page */ "./src/app/patient/device/add-device.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var AddDevicePageModule = /** @class */ (function () {
    function AddDevicePageModule() {
    }
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
    return AddDevicePageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _clinician_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clinician/providers */ "./src/app/services/providers.ts");






var AddDevicePage = /** @class */ (function () {
    function AddDevicePage(platform, http, translateService, navParams, modalCtrl, patientDeviceService, patientProfileService, navCtrl) {
        this.platform = platform;
        this.http = http;
        this.translateService = translateService;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.patientDeviceService = patientDeviceService;
        this.patientProfileService = patientProfileService;
        this.navCtrl = navCtrl;
        var patient = [];
        patient.push(this.navParams.data);
        this.patientHrsid = this.navParams.get('patient');
        this.getPatientProfile(this.patientHrsid);
    }
    AddDevicePage.prototype.ngOnInit = function () {
        this.getAvailableDeviceInventory();
    };
    /**
     * Checking for all available device inventory
     */
    AddDevicePage.prototype.getAvailableDeviceInventory = function () {
        var _this = this;
        return this.patientDeviceService.getAvailableDeviceInventory().subscribe(function (res) {
            if (res.length == 0) {
                _this.availableDevices = 'None';
            }
            else {
                _this.availableDevices = res;
            }
        });
    };
    /**
     * Calling updated patient profile after an edit
     */
    AddDevicePage.prototype.getPatientProfile = function (hrsid) {
        var _this = this;
        this.hrsid = hrsid;
        this.translateService.get('UNASSIGNED_DEVICE').subscribe(function (value) {
            _this.unassignedDevice = value;
        });
        return this.patientProfileService.getPatientProfile(hrsid).subscribe(function (res) {
            if (res.device) {
                _this.deviceInformation = res.device;
                _this.currentAssignedDevice = res.device.name;
            }
            else {
                _this.currentAssignedDevice = _this.unassignedDevice;
            }
        });
    };
    /**
     * Changing or assigning a device to a patient
     */
    AddDevicePage.prototype.saveEditToAssignedDevice = function () {
        var _this = this;
        var selectedDeviceName = this.selectedValue;
        var selectedDevice = this.availableDevices.find(function (deviceName) {
            return deviceName.name === selectedDeviceName;
        });
        return this.patientDeviceService.saveEditToAssignedDevice(this.patientHrsid, selectedDevice).subscribe(function (res) {
            _this.modalCtrl.dismiss(selectedDevice.id);
        });
    };
    AddDevicePage.prototype.dismiss = function () {
        var _this = this;
        var currentDevice = this.deviceInformation;
        if (currentDevice == undefined) {
            this.modalCtrl.dismiss();
        }
        else {
            return this.patientDeviceService.saveEditToAssignedDevice(this.patientHrsid, currentDevice.devid).subscribe(function (res) {
                _this.modalCtrl.dismiss(currentDevice.devid);
            });
        }
    };
    AddDevicePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _clinician_providers__WEBPACK_IMPORTED_MODULE_5__["PatientDeviceService"] },
        { type: _clinician_providers__WEBPACK_IMPORTED_MODULE_5__["PatientProfileService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
    ]; };
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
    return AddDevicePage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _patient_status_change__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patient-status-change */ "./src/app/patient/patient-status-change/patient-status-change.ts");
/* harmony import */ var _clinician_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @clinician/providers */ "./src/app/services/providers.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var PatientStatusChangeModule = /** @class */ (function () {
    function PatientStatusChangeModule() {
    }
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
    return PatientStatusChangeModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _clinician_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clinician/providers */ "./src/app/services/providers.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../enums */ "./src/app/enums/index.ts");








var PatientStatusChange = /** @class */ (function () {
    function PatientStatusChange(navParams, modalCtrl, patientProfileService, toastCtrl, translate, formBuilder) {
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
    PatientStatusChange.prototype.ngOnInit = function () {
        if (this.action == _enums__WEBPACK_IMPORTED_MODULE_7__["ActivationStatus"].ActionUnDischarge)
            this.undischargeInfo = this.translate.instant('PATIENT_UNDISCHARGE.INFO', { date: this.date });
    };
    PatientStatusChange.prototype.dismiss = function (data) {
        this.modalCtrl.dismiss(data);
    };
    PatientStatusChange.prototype.submit = function () {
        var _this = this;
        if (this.data.value.note == '') {
            this.data.value.note = 'none';
        }
        var messageSuccess = this.action == _enums__WEBPACK_IMPORTED_MODULE_7__["ActivationStatus"].ActionDischarge ?
            this.translate.instant(this.translateHeader + '.TOAST.SUCCESS', { date: moment__WEBPACK_IMPORTED_MODULE_6__(this.data.value.date).format('MM-DD-YYYY') }) :
            this.translate.instant(this.translateHeader + '.TOAST.SUCCESS');
        return this.patientProfileService.changePatientStatus(this.action, this.hrsid, this.data.value).subscribe({
            next: function (res) {
                var message = messageSuccess;
                var status = 'success';
                _this.throwToastMessage(message, status);
                if (_this.action == _enums__WEBPACK_IMPORTED_MODULE_7__["ActivationStatus"].ActionDischarge || _this.action == _enums__WEBPACK_IMPORTED_MODULE_7__["ActivationStatus"].ActionUnDischarge) {
                    _this.dismiss(_this.data.value);
                }
                else {
                    _this.dismiss({ status: res.status });
                }
            },
            error: function (err) {
                var messageFail = _this.translate.instant(_this.translateHeader + '.TOAST.FAIL');
                var status = 'fail';
                _this.throwToastMessage(messageFail, status);
            }
        });
    };
    PatientStatusChange.prototype.throwToastMessage = function (message, status) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var title, duration, cssClass, toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
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
                        return [4 /*yield*/, this.toastCtrl.create({
                                header: title,
                                message: message,
                                duration: duration,
                                cssClass: cssClass,
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
    PatientStatusChange.prototype.initializeData = function () {
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
    };
    PatientStatusChange.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _clinician_providers__WEBPACK_IMPORTED_MODULE_5__["PatientProfileService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
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
    return PatientStatusChange;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _reset_metrics_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset-metrics.page */ "./src/app/patient/reset-metrics/reset-metrics.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var ResetMetricsPageModule = /** @class */ (function () {
    function ResetMetricsPageModule() {
    }
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
    return ResetMetricsPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/providers */ "./src/app/services/providers.ts");






var ResetMetricsPage = /** @class */ (function () {
    function ResetMetricsPage(toastCtrl, modalCtrl, patientProfileService, translateService, navParams, formBuilder) {
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
    ResetMetricsPage.prototype.ionViewWillEnter = function () {
        this.patientHRSId = this.navParams.get('patientHRSId');
    };
    ResetMetricsPage.prototype.toggleResetButton = function () {
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
    };
    ResetMetricsPage.prototype.submitMetricReset = function () {
        var _this = this;
        this.patientProfileService.resetPatientMetrics(this.patientHRSId, this.metrics.value).subscribe({
            next: function (res) {
                _this.throwToastMessage('RESET_METRICS_SUCCESS');
            },
            error: function (err) {
                _this.throwToastMessage('RESET_METRICS_FAIL');
            }
        });
        this.dismiss();
    };
    ResetMetricsPage.prototype.throwToastMessage = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: this.translateService.instant(message),
                            duration: 3000,
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
    ResetMetricsPage.prototype.dismiss = function () {
        this.modalCtrl.dismiss();
    };
    ResetMetricsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _services_providers__WEBPACK_IMPORTED_MODULE_5__["PatientProfileService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
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
    return ResetMetricsPage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../enums */ "./src/app/enums/index.ts");






var AdminService = /** @class */ (function () {
    function AdminService(logger, menu, router) {
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
    AdminService.prototype.openAdmin = function () {
        var _this = this;
        this.totalButtonClicks += 1;
        clearTimeout(this.openAdminTimeout);
        if (this.totalButtonClicks === 5) {
            this.totalButtonClicks = 0;
            this.router.navigate(['admin']);
            this.menu.isOpen().then(function (isOpen) {
                if (isOpen)
                    _this.menu.close();
            });
        }
        else {
            this.openAdminTimeout = setTimeout(function () { return _this.totalButtonClicks = 0; }, 2000);
        }
    };
    AdminService.prototype.rerouteHome = function () {
        this.router.navigate(['home']);
    };
    AdminService.PASSCODE = '41213';
    AdminService.ctorParameters = function () { return [
        { type: ngx_logger__WEBPACK_IMPORTED_MODULE_2__["NGXLogger"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_logger__WEBPACK_IMPORTED_MODULE_2__["NGXLogger"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdminService);
    return AdminService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DataExchangeService = /** @class */ (function () {
    function DataExchangeService() {
        this.data = new Map();
    }
    DataExchangeService.prototype.setData = function (id, data) {
        this.data.set(id, data);
    };
    DataExchangeService.prototype.getData = function (id, clearData) {
        var data = this.data.get(id);
        if (clearData)
            this.data.delete(id);
        return data;
    };
    DataExchangeService.prototype.hasData = function (id) {
        return this.data.has(id);
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
    return DataExchangeService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hrs_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hrs/providers */ "../../libs/providers/providers.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../settings/settings */ "./src/app/services/settings/settings.ts");





/**
 *Environment provider.
 */
var Environment = /** @class */ (function () {
    function Environment(gatewayApi, settings) {
        this.gatewayApi = gatewayApi;
        this.settings = settings;
    }
    Environment_1 = Environment;
    /**
     * Send a GET request to our environment endpoint on login.
     * This will be called once.
     */
    Environment.prototype.getEnvironment = function () {
        var _this = this;
        var getEnv = this.gatewayApi.get('apiv2/environment', {});
        return getEnv.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            _this.data = res;
            if (res.settings.phone) {
                Environment_1.supportNumber = res.settings.phone;
            }
            if (res.environmentSettings) {
                Environment_1.environmentSettings = res.environmentSettings;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this.settings.configureStorage(_this.hasSetting(Environment_1.SETTING_OPT_OUT_ADVANCED_SECURITY));
        }));
    };
    Environment.prototype.hasSetting = function (flag) {
        if (this.data && this.data.environmentSettings) {
            for (var i = 0; i < this.data.environmentSettings.length; i++) {
                if (this.data.environmentSettings[i].flag == flag) {
                    return true;
                }
            }
        }
        return false;
    };
    Environment.prototype.getSubgroups = function () {
        if (this.data && this.data.settings) {
            return this.data.settings.subgroups;
        }
    };
    Environment.prototype.getCustomFields = function () {
        if (this.data) {
            return this.data.PATIENTINFO_CUSTOMATTRIBUTES;
        }
    };
    var Environment_1;
    Environment.SETTING_PATIENT_CUSTOMATTRIBUTES = 'PATIENTINFO_CUSTOMATTRIBUTES';
    Environment.SETTING_ENV_SUBGROUPS = 'SYSTEM_SUBGROUPS';
    Environment.SETTING_OPT_OUT_ADVANCED_SECURITY = 'SYSTEM_MOBILE_SECURITY_OPTIONAL';
    Environment.ctorParameters = function () { return [
        { type: _hrs_providers__WEBPACK_IMPORTED_MODULE_2__["GatewayApi"] },
        { type: _settings_settings__WEBPACK_IMPORTED_MODULE_4__["Settings"] }
    ]; };
    Environment = Environment_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hrs_providers__WEBPACK_IMPORTED_MODULE_2__["GatewayApi"],
            _settings_settings__WEBPACK_IMPORTED_MODULE_4__["Settings"]])
    ], Environment);
    return Environment;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _hrs_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hrs/providers */ "../../libs/providers/providers.ts");
/* harmony import */ var _firebase_firebase_account_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../firebase/firebase-account-info */ "./firebase/firebase-account-info.ts");





var FirebaseNotifications = /** @class */ (function () {
    function FirebaseNotifications(communication, logger, gatewayApi) {
        this.communication = communication;
        this.logger = logger;
        this.gatewayApi = gatewayApi;
    }
    /**
     * Manually Ask for Push Permission (IOS ONLY)
     * Once user answers yes/no, they will not be asked again
     */
    FirebaseNotifications.prototype.askIOSPushPermission = function () {
        var _this = this;
        FCMPlugin.requestPushPermissionIOS(function (permissionGranted) {
            if (permissionGranted) {
                _this.logger.log('Push Permission Granted');
            }
            else {
                _this.logger.log('Push Permission Declined');
            }
        }, function (err) {
            _this.logger.error('Failed to request push permission', err);
        });
    };
    /**
     * Create Channel on Device for Firebase to send Notifications to
     */
    FirebaseNotifications.prototype.createAndroidNotificationChannel = function () {
        FCMPlugin.createNotificationChannelAndroid({
            id: 'default-channel-id',
            name: 'Default channel',
            importance: 'high',
            visibility: 'public'
        });
    };
    /**
     * Set PCM to chosen Firebase account.
     *
     * Only available to HRSTAB.
     * This is because we disable FirebaseInitProvider in AndroidManifestTablet.xml, which prevents PCM from automatically initializing
     * the FirebaseApp from google-services.json and allows us to initialize manually with the creds of our choosing.
     */
    FirebaseNotifications.prototype.setFirebaseAccount = function (account) {
        var _this = this;
        var accountInfo = _firebase_firebase_account_info__WEBPACK_IMPORTED_MODULE_4__["FirebaseAccountInfo"][account];
        return new Promise(function (resolve, reject) {
            FCMPlugin.initDifferentAccount(accountInfo, function () {
                _this.logger.info("Successfully initialized " + account + " Firebase account.");
                resolve();
            }, function (err) {
                _this.logger.error(err);
                reject(new Error("Failed to initialize " + account + " FirebaseApp."));
            });
        });
    };
    /**
     * Subscribe to Firebase topics
     * Get firebase device token
     * @param response
     */
    FirebaseNotifications.prototype.initializeFirebase = function (hrsid) {
        var _this = this;
        this.userHrsId = hrsid;
        this.shouldUpdateToken = true;
        // Subscribe to topic and get device's current registration id
        FCMPlugin.subscribeToTopic('all', function (res) {
            _this.logger.log('Successfully subscribed to firebase topics');
        }, function (err) {
            _this.logger.error('Failed to subscribe to firebase topics');
        });
        // get firebase device token
        FCMPlugin.getToken(function (token) {
            _this.logger.debug(token);
            // store video call firebase token
            _this.sendTokenToServer(token);
            _this.buildNotificationHandler();
        }, function (err) {
            _this.logger.error(err);
        });
    };
    /**
     * Listen for Firebase notifications and broadcast the appropriate event
     */
    FirebaseNotifications.prototype.buildNotificationHandler = function () {
        var _this = this;
        FCMPlugin.onNotification(function (data) {
            if (data.type.includes('video')) {
                if (data.action === 'incoming_call') {
                    _this.communication.incomingVideoCall.next(data);
                }
                else if (data.action === 'call_unanswered' || data.action === 'call_declined') {
                    _this.communication.endVideoCall.next(data);
                }
                else if (data.action === 'call_left') {
                    _this.communication.callerLeft.next(data);
                }
            }
            else if (data.type === 'chat') {
                _this.communication.newChatMessage.next(data);
            }
            else if (data.type === 'voice' || data.type === 'voicecall') {
                if (data.action === 'call_left') {
                    _this.communication.callerLeft.next(JSON.parse(data.data));
                }
                else {
                    _this.communication.incomingVoiceCall.next(data);
                }
            }
        }, function (error) {
            _this.logger.error('error is ' + JSON.stringify(error));
        });
        this.tokenRefresh();
    };
    FirebaseNotifications.prototype.tokenRefresh = function () {
        var _this = this;
        FCMPlugin.onTokenRefresh(function (token) {
            _this.logger.log('refresh token', token);
            if (_this.shouldUpdateToken) {
                _this.sendTokenToServer(token);
            }
        });
    };
    /**
     * Store Firebase device token
     * @param token
     */
    FirebaseNotifications.prototype.sendTokenToServer = function (token) {
        var _this = this;
        var data = {
            data: {
                value: token,
                hrsid: this.userHrsId,
                deviceType: 'mobile'
            },
        };
        var post = this.gatewayApi.post('push-tokens', data);
        post.subscribe({
            next: function (res) {
                _this.logger.log('Successfully stored firebase device token');
            },
            error: function (err) {
                _this.logger.error('Failed to store firebase device token');
            }
        });
    };
    FirebaseNotifications.prototype.deleteInstanceId = function () {
        var _this = this;
        this.shouldUpdateToken = false;
        FCMPlugin.deleteInstanceId(function () {
            _this.logger.log('Firebase instance successfully deleted');
        }, function (err) {
            _this.logger.error('Failed to delete firebase instance' + err);
        });
    };
    FirebaseNotifications.ctorParameters = function () { return [
        { type: _hrs_providers__WEBPACK_IMPORTED_MODULE_3__["CommunicationService"] },
        { type: ngx_logger__WEBPACK_IMPORTED_MODULE_2__["NGXLogger"] },
        { type: _hrs_providers__WEBPACK_IMPORTED_MODULE_3__["GatewayApi"] }
    ]; };
    FirebaseNotifications = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hrs_providers__WEBPACK_IMPORTED_MODULE_3__["CommunicationService"],
            ngx_logger__WEBPACK_IMPORTED_MODULE_2__["NGXLogger"],
            _hrs_providers__WEBPACK_IMPORTED_MODULE_3__["GatewayApi"]])
    ], FirebaseNotifications);
    return FirebaseNotifications;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_models_daily_metrics_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/models/daily-metrics.model */ "./src/common/models/daily-metrics.model.ts");
/* harmony import */ var _hrs_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hrs/providers */ "../../libs/providers/providers.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");






var HistoricalDataService = /** @class */ (function () {
    function HistoricalDataService(gatewayApi) {
        this.gatewayApi = gatewayApi;
    }
    HistoricalDataService.prototype.getLatest7Days = function (hrsid) {
        var latest7DaysRange = {
            start: moment__WEBPACK_IMPORTED_MODULE_4__().subtract(6, 'd').format('YYYYMMDD'),
            end: moment__WEBPACK_IMPORTED_MODULE_4__().format('YYYYMMDD')
        };
        return this.getHistoricalDateRange(hrsid, latest7DaysRange);
    };
    HistoricalDataService.prototype.getNext7Days = function (hrsid) {
        var start = moment__WEBPACK_IMPORTED_MODULE_4__().subtract(7, 'd');
        var next7DaysRange = {
            end: start.format('YYYYMMDD'),
            start: moment__WEBPACK_IMPORTED_MODULE_4__(start).subtract(6, 'd').format('YYYYMMDD')
        };
        return this.getHistoricalDateRange(hrsid, next7DaysRange);
    };
    HistoricalDataService.prototype.getHistoricalDateRange = function (hrsid, range) {
        return this.gatewayApi.get("apiv2/patients/" + hrsid + "?&start=" + range.start + "&end=" + range.end, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            var historicalData = [];
            for (var i = 0; i < res.length; i++) {
                historicalData.push(_common_models_daily_metrics_model__WEBPACK_IMPORTED_MODULE_2__["DailyMetricsModel"].init(res[i]));
            }
            return historicalData;
        }));
    };
    HistoricalDataService.ctorParameters = function () { return [
        { type: _hrs_providers__WEBPACK_IMPORTED_MODULE_3__["GatewayApi"] }
    ]; };
    HistoricalDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hrs_providers__WEBPACK_IMPORTED_MODULE_3__["GatewayApi"]])
    ], HistoricalDataService);
    return HistoricalDataService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hrs_gateway__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hrs/gateway */ "../../libs/gateway/index.ts");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var RequestObservable = /** @class */ (function () {
    function RequestObservable() {
        var _this = this;
        this.response = [];
        this.observable = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (observer) {
            _this.next = function (value) { return observer.next(value); };
        });
    }
    return RequestObservable;
}());
/**
 * This is the service provider for the patient list API calls
 */
var PatientListService = /** @class */ (function () {
    function PatientListService(gateway, logger, toastCtrl, translate) {
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
    PatientListService.prototype.loadPatients = function () {
        var _this = this;
        // If we were already loading the patient list we'll just continue waiting for that to complete
        if (this.patientListRequestObservable) {
            return this.patientListRequestObservable;
        }
        // Load the patient list in batches using X parallel requests that each keep requesting another batch until we've loaded all patients.
        // A batched approach was needed because some environments have too much data for the old backend behind this to handle in one batch.
        var observables = [];
        for (var requestKey = 1; requestKey <= 5; requestKey++) {
            this.patientListRequests[requestKey] = new RequestObservable();
            observables.push(this.patientListRequests[requestKey].observable);
            this.loadPatientListPage(++this.lastPageRequested, requestKey);
        }
        // merge all the request observables into one stream and make it shareable to patientlist and locally
        this.patientListRequestObservable = rxjs__WEBPACK_IMPORTED_MODULE_5__["zip"].apply(void 0, observables).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (patientList) { return patientList.flat(1); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
        var resetVariables = function () {
            setTimeout(function () {
                _this.finalPage = undefined;
                _this.lastPageRequested = 0;
                _this.patientListRequests = {};
                _this.patientListRequestObservable = null;
                _this.patientListRequestError = false;
            }, 500);
        };
        this.patientListRequestObservable.subscribe({
            // The only local behavior required once all the observables have completed is to reset the local variables
            // And notify user if there were any request errors
            next: function () {
                if (_this.patientListRequestError)
                    _this.alertUser();
                resetVariables();
            }
        });
        return this.patientListRequestObservable;
    };
    /**
     * handle patient list pagination requests and response interactions with observables
     */
    PatientListService.prototype.loadPatientListPage = function (page, requestKey) {
        var _this = this;
        var assignFinalPage = function (response) {
            if (!_this.finalPage &&
                response &&
                response.meta &&
                response.meta.pagination) {
                _this.finalPage = response.meta.pagination.last_page || 0;
            }
        };
        var loadNextPage = function () {
            var nextPage = _this.lastPageRequested + 1;
            if (nextPage <= _this.finalPage) {
                _this.loadPatientListPage(++_this.lastPageRequested, requestKey);
            }
            else {
                // Each of the 5 patientListRequest Observables will trigger 'next' only one time. When all 5 have done that
                // patientListRequestObservable (which the patient-list page subscribes to) will trigger 'next' one time
                // and pass all responses as one array regardless of any errors an individual or all requests encountered
                _this.patientListRequests[requestKey].next(_this.patientListRequests[requestKey].response);
            }
        };
        this.getPatientList(page)
            .subscribe({
            next: function (response) {
                assignFinalPage(response);
                // Concat the patient list responses together, once all requests are finished the sum of the responses will be passed to patient-list.page
                _this.patientListRequests[requestKey].response = _this.patientListRequests[requestKey].response.concat(response.patientlist);
            },
            error: function (err) {
                // The Error is consumed here and does not bubble up to the wrapping observable patientListRequestObservable
                // Bubbling the error up will prevent desired behavior and will result in a never ending loading spinner
                _this.patientListRequestError = true;
                _this.logger.error('Error loading patientlist page ' + page, err);
                loadNextPage();
            },
            complete: function () { return loadNextPage(); }
        });
    };
    /**
     * Call api to get the patient list
     */
    PatientListService.prototype.getPatientList = function (page, pageSize) {
        if (pageSize === void 0) { pageSize = 500; }
        var path = "apiv2/patientlist?status[]=Activated&status[]=Pre-Activated&status[]=Paused&status[]=Discharged&page[current]=" + page + "&page[size]=" + pageSize;
        return this.gateway.get({ path: path });
    };
    /**
     * Simply alert user if any of the patientlist requests errored out
     */
    PatientListService.prototype.alertUser = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: this.translate.instant('PATIENT_LIST_FAIL'),
                            cssClass: 'toast-fail',
                            duration: 3000,
                            position: 'top'
                        })];
                    case 1:
                        toast = _a.sent();
                        return [2 /*return*/, toast.present()];
                }
            });
        });
    };
    /**
     * used by patient-list.page to keep track of which patient is expanded
     */
    PatientListService.prototype.expandedPatients = function () {
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
    };
    PatientListService.ctorParameters = function () { return [
        { type: _hrs_gateway__WEBPACK_IMPORTED_MODULE_2__["GatewayService"] },
        { type: ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NGXLogger"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }
    ]; };
    PatientListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hrs_gateway__WEBPACK_IMPORTED_MODULE_2__["GatewayService"],
            ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NGXLogger"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
    ], PatientListService);
    return PatientListService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hrs_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hrs/providers */ "../../libs/providers/providers.ts");
/* harmony import */ var _user_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../user/user */ "./src/app/services/user/user.ts");




var CareplanService = /** @class */ (function () {
    function CareplanService(gatewayApi, user) {
        this.gatewayApi = gatewayApi;
        this.user = user;
        // this.moduleInfo contains some fields which seem to be required by the backend to POST, but whose values,
        // or the handling thereof, we have not yet added into the CCM careplan.
        this.moduleInfo = {};
    }
    CareplanService.prototype.getPatientModules = function () {
        return this.gatewayApi.get("v1/modules", {});
    };
    CareplanService.prototype.getPatientModulesWithReminders = function (hrsid) {
        return this.gatewayApi.get("apiv2/patients/" + hrsid + "/moduleinfo", {});
    };
    CareplanService.prototype.getEnvPresets = function () {
        return this.gatewayApi.get("v1/environments/" + this.user.data.environment + "/presets", {});
    };
    CareplanService.prototype.savePatientModuleInfo = function (hrsid, modules, activityReminders, surveyReminders, weightReminders, medicationReminders) {
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
        return this.gatewayApi.post("apiv2/patients/" + hrsid + "/moduleinfo", { moduleInfo: this.moduleInfo });
    };
    CareplanService.ctorParameters = function () { return [
        { type: _hrs_providers__WEBPACK_IMPORTED_MODULE_2__["GatewayApi"] },
        { type: _user_user__WEBPACK_IMPORTED_MODULE_3__["User"] }
    ]; };
    CareplanService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hrs_providers__WEBPACK_IMPORTED_MODULE_2__["GatewayApi"],
            _user_user__WEBPACK_IMPORTED_MODULE_3__["User"]])
    ], CareplanService);
    return CareplanService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _hrs_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hrs/providers */ "../../libs/providers/providers.ts");





/**
 * This is the service provider for the patient list API calls
 */
var PatientDeviceService = /** @class */ (function () {
    function PatientDeviceService(gatewayApi, http, logger) {
        this.gatewayApi = gatewayApi;
        this.http = http;
        this.logger = logger;
    }
    /**
     * Call api to get the device inventory
     */
    PatientDeviceService.prototype.getAvailableDeviceInventory = function () {
        return this.gatewayApi.get('apiv2/inventory?/', { available: true });
    };
    /**
     * Call api to mark the patient as reviewed
     */
    PatientDeviceService.prototype.saveEditToAssignedDevice = function (hrsid, selectedDevice) {
        return this.gatewayApi.post('apiv2/patients/' + hrsid + '/device', { deviceId: selectedDevice.id });
    };
    /**
     * Call api to get device information and connectivity for a specific patient
     */
    PatientDeviceService.prototype.getPatientDeviceInformation = function (deviceId) {
        return this.gatewayApi.get('apiv2/inventory/status/' + deviceId, {});
    };
    /**
     * Call api to remove device from patient and reset to nothing assigned
     */
    PatientDeviceService.prototype.removeDevice = function (detail) {
        return this.gatewayApi.delete('apiv2/patients/' + detail.hrsid + '/device', {});
    };
    PatientDeviceService.ctorParameters = function () { return [
        { type: _hrs_providers__WEBPACK_IMPORTED_MODULE_4__["GatewayApi"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NGXLogger"] }
    ]; };
    PatientDeviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hrs_providers__WEBPACK_IMPORTED_MODULE_4__["GatewayApi"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NGXLogger"]])
    ], PatientDeviceService);
    return PatientDeviceService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _hrs_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hrs/providers */ "../../libs/providers/providers.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../enums */ "./src/app/enums/index.ts");






/**
 * This is the service provider for the patient list API calls
 */
var PatientProfileService = /** @class */ (function () {
    function PatientProfileService(gatewayApi, http, logger) {
        this.gatewayApi = gatewayApi;
        this.http = http;
        this.logger = logger;
    }
    /**
     * Call api to get the patient profile
     */
    PatientProfileService.prototype.getPatientProfile = function (hrsid) {
        return this.gatewayApi.get('apiv2/patient/' + hrsid + '/profile', {});
    };
    /**
     * Call api to get the patient current metrics
     */
    PatientProfileService.prototype.getPatientCurrentMetrics = function (hrsid) {
        return this.gatewayApi.get('apiv2/patients/' + hrsid, {});
    };
    /**
     * Call api to get the surveys
     */
    PatientProfileService.prototype.getSurveyQuestionAndAnswerMetric = function (hrsid, currentDate) {
        return this.gatewayApi.get('apiv2/patients/' + hrsid + '/surveydetails/' + currentDate, {});
    };
    /**
     * Call api to mark the patient as reviewed
     */
    PatientProfileService.prototype.markPatientReviewed = function (patient) {
        return this.gatewayApi.post('apiv2/patient/' + patient.hrsid + '/profile', { review: true });
    };
    /**
     * Call api to mark the patient as not reviewed
     */
    PatientProfileService.prototype.markPatientUnreviewed = function (patient) {
        return this.gatewayApi.post('apiv2/patient/' + patient.hrsid + '/profile', { review: false });
    };
    /**
     * Call api to save or edit the quick note with today's date
     */
    PatientProfileService.prototype.saveQuickNote = function (detail, quicknote) {
        return this.gatewayApi.post('apiv2/patient/' + detail.hrsid + '/profile', { 'quicknote': { 'note': quicknote } });
    };
    PatientProfileService.prototype.resetPatientMetrics = function (hrsId, metrics) {
        return this.gatewayApi.post('apiv2/patient/' + hrsId + '/metrics/reset', metrics);
    };
    PatientProfileService.prototype.changePatientStatus = function (action, hrsId, data) {
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
    };
    PatientProfileService.prototype.addPatient = function (newPatientData) {
        return this.gatewayApi.post('apiv2/patient', newPatientData);
    };
    PatientProfileService.prototype.savePatientSettings = function (hrsid, data) {
        return this.gatewayApi.post('apiv2/patient/' + hrsid + '/profile', JSON.stringify(data));
    };
    PatientProfileService.ctorParameters = function () { return [
        { type: _hrs_providers__WEBPACK_IMPORTED_MODULE_4__["GatewayApi"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NGXLogger"] }
    ]; };
    PatientProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hrs_providers__WEBPACK_IMPORTED_MODULE_4__["GatewayApi"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NGXLogger"]])
    ], PatientProfileService);
    return PatientProfileService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hrs_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hrs/providers */ "../../libs/providers/providers.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");




var ReviewedStatusService = /** @class */ (function () {
    function ReviewedStatusService(gatewayApi, translateService) {
        this.gatewayApi = gatewayApi;
        this.translateService = translateService;
    }
    ReviewedStatusService_1 = ReviewedStatusService;
    ReviewedStatusService.prototype.popupReviewedStatusClass = function (reviewedStatus) {
        var _a;
        if (!reviewedStatus)
            reviewedStatus = 'ERROR';
        var cssStatusClassMap = (_a = {},
            _a[ReviewedStatusService_1.REVIEWED] = 'toast-risk_low',
            _a[ReviewedStatusService_1.IN_PROGRESS] = 'toast-risk_med',
            _a[ReviewedStatusService_1.NON_REVIEWED] = 'toast-risk_high',
            _a['ERROR'] = 'toast-fail',
            _a);
        return cssStatusClassMap[reviewedStatus];
    };
    ReviewedStatusService.prototype.translateReviewedStatus = function (reviewedStatus) {
        var _a;
        var translatedStatusMap = (_a = {},
            _a[ReviewedStatusService_1.REVIEWED] = this.translateService.instant('REVIEWED_STATUS_REVIEWED'),
            _a[ReviewedStatusService_1.IN_PROGRESS] = this.translateService.instant('REVIEWED_STATUS_IN_PROGRESS'),
            _a[ReviewedStatusService_1.NON_REVIEWED] = this.translateService.instant('REVIEWED_STATUS_NON_REVIEWED'),
            _a);
        return translatedStatusMap[reviewedStatus];
    };
    ReviewedStatusService.prototype.requestedReviewedStatus = function (currentStatus) {
        var _a;
        // this tool selects the new reviewed status to submit when triggered from the patient list
        var requestedStatusMap = (_a = {},
            _a[ReviewedStatusService_1.REVIEWED] = ReviewedStatusService_1.IN_PROGRESS,
            _a[ReviewedStatusService_1.IN_PROGRESS] = ReviewedStatusService_1.NON_REVIEWED,
            _a[ReviewedStatusService_1.NON_REVIEWED] = ReviewedStatusService_1.REVIEWED,
            _a);
        return requestedStatusMap[currentStatus];
    };
    ReviewedStatusService.prototype.submitRequestedStatus = function (patientHrsid, requestedStatus) {
        return this.gatewayApi.post('apiv2/patient/' + patientHrsid + '/profile', { reviewedStatus: requestedStatus });
    };
    var ReviewedStatusService_1;
    ReviewedStatusService.REVIEWED = 'reviewed';
    ReviewedStatusService.IN_PROGRESS = 'inprogress';
    ReviewedStatusService.NON_REVIEWED = 'unreviewed';
    ReviewedStatusService.ctorParameters = function () { return [
        { type: _hrs_providers__WEBPACK_IMPORTED_MODULE_2__["GatewayApi"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
    ]; };
    ReviewedStatusService = ReviewedStatusService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hrs_providers__WEBPACK_IMPORTED_MODULE_2__["GatewayApi"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], ReviewedStatusService);
    return ReviewedStatusService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/dist/index.js");
/* harmony import */ var _hrs_utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hrs/utility */ "../../libs/utility/index.ts");




/**
 * A simple settings/config class for storing key/value pairs
 * Persistence requires Env to have flag "SYSTEM_MOBILE_SECURITY_OPTIONAL" enabled
 */
var Settings = /** @class */ (function () {
    function Settings(storage, defaults) {
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
    Settings.prototype.configureStorage = function (hasStorage) {
        hasStorage ? this.enableDataStorage() : this.disableDataStorage();
    };
    Settings.prototype.enableDataStorage = function () {
        this.hasStorage = true;
    };
    Settings.prototype.disableDataStorage = function () {
        this.hasStorage = false;
        this.storage.clear();
        // Store Domain so that the changes are not lost on force-kill.
        var domainName = _hrs_utility__WEBPACK_IMPORTED_MODULE_3__["BuildUtility"].getDomainName();
        var updatedDomain = domainName === 'hrsdomain' ? _hrs_utility__WEBPACK_IMPORTED_MODULE_3__["BuildUtility"].getHRSDomain() : domainName;
        this.storage.set('updatedDomain', updatedDomain);
    };
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        // eslint-disable-next-line guard-for-in
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.hasStorage ? this.setAll(this.settings) : Promise.resolve();
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            if (k) {
                this.settings[k] = settings[k];
            }
        }
        if (this.hasStorage)
            return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.hasStorage ? this.storage.set(this.SETTINGS_KEY, this.settings) : Promise.resolve();
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.settings[key];
    };
    Settings.prototype.save = function () {
        this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    Settings.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
        { type: undefined }
    ]; };
    Settings = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], Object])
    ], Settings);
    return Settings;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _hrs_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hrs/providers */ "../../libs/providers/providers.ts");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _hrs_gateway__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @hrs/gateway */ "../../libs/gateway/index.ts");








/*
  The main goal of this class is to provider a custom header field for all requests it should look like
  "hrs-user-agent": "ClinicianConnectMobile/1.23.23 UUID/1231201231-123-123123j123lj23 iOS/12.01"
*/
var UserAgentProvider = /** @class */ (function () {
    function UserAgentProvider(appVersion, device, gatewayApi, gatewayService, logger, platform) {
        this.appVersion = appVersion;
        this.device = device;
        this.gatewayApi = gatewayApi;
        this.gatewayService = gatewayService;
        this.logger = logger;
        this.platform = platform;
    }
    UserAgentProvider.prototype.getUserAgentInfo = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            this.getAppName().then(function () {
                _this.getAppVersion().then(function () {
                    _this.getUUID();
                    _this.getOSName();
                    _this.getOSVersion();
                    _this._hrsUserAgentHeader = _this._appName + "/" + _this._appVersionNumber + " UUID/" + _this._uuid + " " + _this._osName + "/" + _this._osVersion;
                    _this.gatewayApi.hrsUserAgentHeader = _this._hrsUserAgentHeader;
                    _this.gatewayService.hrsUserAgentHeader = _this._hrsUserAgentHeader;
                });
            });
        }
    };
    UserAgentProvider.prototype.getAppName = function () {
        var _this = this;
        return this.appVersion.getAppName().then(function (name) {
            // remove whitespace
            _this._appName = name.replace(/\s/g, '');
        });
    };
    UserAgentProvider.prototype.getAppVersion = function () {
        var _this = this;
        return this.appVersion.getVersionNumber().then(function (appVersionNumber) {
            _this._appVersionNumber = appVersionNumber;
        });
    };
    UserAgentProvider.prototype.getUUID = function () {
        this._uuid = this.device.uuid;
    };
    UserAgentProvider.prototype.getOSName = function () {
        if (this.platform.is('ios')) {
            this._osName = 'iOS';
        }
        else if (this.platform.is('android')) {
            this._osName = 'Android';
        }
    };
    UserAgentProvider.prototype.getOSVersion = function () {
        // there is a .str on this.platform.version but if there is no minor version it reads '9.undefined'
        // IONIC UPGRADE - this original code was not working with upgrade
        //   this._osVersion = this.platform.versions().num.toString();
        this.getAppVersion();
        this._osVersion = this._appVersionNumber;
    };
    UserAgentProvider.ctorParameters = function () { return [
        { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_2__["AppVersion"] },
        { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_3__["Device"] },
        { type: _hrs_providers__WEBPACK_IMPORTED_MODULE_4__["GatewayApi"] },
        { type: _hrs_gateway__WEBPACK_IMPORTED_MODULE_7__["GatewayService"] },
        { type: ngx_logger__WEBPACK_IMPORTED_MODULE_5__["NGXLogger"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] }
    ]; };
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
    return UserAgentProvider;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _hrs_gateway__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hrs/gateway */ "../../libs/gateway/index.ts");
/* harmony import */ var _hrs_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @hrs/providers */ "../../libs/providers/providers.ts");
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebase/firebase */ "./src/app/services/firebase/firebase.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../settings/settings */ "./src/app/services/settings/settings.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/dist/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var _clinician_providers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @clinician/providers */ "./src/app/services/providers.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hrs_utility__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @hrs/utility */ "../../libs/utility/index.ts");
















/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/etc.
 *
 * This User provider makes calls to our API at the `login` endpoints.
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
var User = /** @class */ (function () {
    function User(gatewayApi, http, firebase, logger, platform, settings, storage, tokenService, navCtrl, gateway, environment, router) {
        var _this = this;
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
        this.tokenService.refreshTokenSubject.subscribe(function (tokenData) {
            _this.settings.setValue('token', tokenData.attributes.token);
            _this.settings.setValue('refresh', tokenData.attributes.refresh);
            _this.data = jwt_decode__WEBPACK_IMPORTED_MODULE_10__(tokenData.attributes.token);
            _this.settings.setValue('userData', _this.data);
        });
    }
    User.prototype.loadFromSettings = function (settings) {
        var data = settings.getValue('userData');
        if (data) {
            this.data = data;
        }
        var session = settings.getValue('sessionData');
        if (session) {
            this.session = session;
        }
    };
    User.prototype.getClinicianName = function () {
        return this.session.firstname + ' ' + this.session.lastname;
    };
    User.prototype.canContactPatient = function () {
        return (this.data && (this.data.roles.includes('Moderator') ||
            this.data.roles.includes('Clinician') ||
            this.data.roles.includes('Pharmacist')));
    };
    User.prototype.canEditPatientInfo = function () {
        return (this.data && (this.data.roles.includes('Moderator') ||
            this.data.roles.includes('Clinician')));
    };
    User.prototype.isReadOnlyClinician = function () {
        return (this.data && !this.canEditPatientInfo() && this.data.roles.includes('ReadOnly'));
    };
    User.prototype.isLoggedIn = function () {
        return (this.data &&
            this.data.exp > Math.floor(Date.now() / 1000) &&
            this.gatewayApi.isLoggedIn());
    };
    User.prototype.login = function (accountInfo) {
        var credentials = {
            data: {
                type: 'credentials',
                username: accountInfo.user,
                password: accountInfo.pass,
                source: this.sourceApp
            }
        };
        return this.loginWithData(credentials);
    };
    User.prototype.loginWithData = function (credentials) {
        var _this = this;
        var data = this.gatewayApi.login(credentials);
        return data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])({
            next: function (res) {
                var resData = res.data.attributes;
                _this.data = jwt_decode__WEBPACK_IMPORTED_MODULE_10__(resData.token);
                if (_this.data.type !== 'clinician') {
                    // Logout user if not of clinician user-type.
                    _this.data.clear();
                    _this.session = undefined;
                    _this.router.navigateByUrl('/welcome');
                    _this.loginResultSubject.next(false);
                    return;
                }
                // for backwards compatibility subgroups may come in as JSON strings
                // this conversion to arrays allows for proper handling of clins with multiple subgroups
                _this.data.subgroup = _hrs_utility__WEBPACK_IMPORTED_MODULE_15__["CollectionUtility"].convertToArray(_this.data.subgroup);
                _this.tokenService.storeTokens(res.data);
                if (_this.platform.is('cordova')) {
                    _this.firebase.initializeFirebase(_this.data.hrsid);
                }
                var getEnvironmentSubscription = _this.environment.getEnvironment().subscribe(function () {
                    _this.settings.setValue('userData', _this.data);
                    _this.settings.setValue('token', resData.token);
                    _this.settings.setValue('refresh', resData.refresh);
                    getEnvironmentSubscription.unsubscribe();
                });
                var getSessionDataSubscription = _this.getSessionData().subscribe(function () {
                    getSessionDataSubscription.unsubscribe();
                });
                _this.loginResultSubject.next(true);
            },
            error: function () {
                _this.loginResultSubject.next(false);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["of"])({});
            }
        }));
    };
    /**
     * Fetch for specific information like clinician name that are not included in the login or environment response
     */
    User.prototype.getSessionData = function () {
        var _this = this;
        var getDetails = this.gatewayApi.get('apiv2/', {});
        return getDetails.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (res) {
            _this.session = res;
            _this.settings.setValue('sessionData', res);
        }));
    };
    /**
     * Log the user out, which forgets the session
     */
    User.prototype.logout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var domainName, updatedDomain;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isLoggedIn()) return [3 /*break*/, 2];
                        this.storage.clear();
                        this.data = undefined;
                        this.session = undefined;
                        return [4 /*yield*/, this.gatewayApi.logout()];
                    case 1:
                        _a.sent();
                        if (this.platform.is('cordova')) {
                            this.firebase.deleteInstanceId();
                        }
                        this.router.navigateByUrl('/welcome');
                        domainName = _hrs_utility__WEBPACK_IMPORTED_MODULE_15__["BuildUtility"].getDomainName();
                        updatedDomain = domainName === 'hrsdomain' ? _hrs_utility__WEBPACK_IMPORTED_MODULE_15__["BuildUtility"].getHRSDomain() : domainName;
                        this.storage.set('updatedDomain', updatedDomain);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    User.ctorParameters = function () { return [
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
    ]; };
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
    return User;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hrs_gateway__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hrs/gateway */ "../../libs/gateway/index.ts");
/* harmony import */ var _user_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/user */ "./src/app/services/user/user.ts");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm2015/ngx-logger.js");
/* harmony import */ var _ionic_native_zoom_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/zoom/ngx */ "./node_modules/@ionic-native/zoom/ngx/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../settings/settings */ "./src/app/services/settings/settings.ts");









var ZoomService = /** @class */ (function () {
    function ZoomService(gateway, logger, user, zoom, platform, settings) {
        this.gateway = gateway;
        this.logger = logger;
        this.user = user;
        this.zoom = zoom;
        this.platform = platform;
        this.settings = settings;
    }
    ZoomService.prototype.initialize = function (callback) {
        var _this = this;
        if (this.initialized || this.initializing) {
            return;
        }
        this.initializing = true;
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.subscription = this.gateway.get({ endpoint: 'v1/video-secrets' }).pipe(Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
            var key = res.data.attributes.key;
            var secret = res.data.attributes.secret;
            if (_this.platform.is('cordova') && key && secret) {
                _this.zoom.initialize(key, secret).then(function () {
                    _this.logger.info('Zoom SDK initialized');
                    _this.initialized = true;
                    _this.initializing = false;
                    _this.zoom.setLocale(_this.settings.getValue('language') || 'en');
                    if (callback) {
                        callback();
                    }
                }).catch(function (err) {
                    _this.logger.error('Error initializing Zoom SDK', err);
                    _this.initializing = false;
                });
            }
            else {
                _this.initializing = false;
            }
        }), Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
            _this.logger.error(err);
            _this.initializing = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])({});
        })).subscribe();
    };
    /**
     * Method to initialize Zoom SDK. This needs a JWT token which is associated with a meeting number.
     * Thus before joining a call, we init zoom with this token.
     * @param jwtToken
     */
    ZoomService.prototype.initWithJWTToken = function (jwtToken) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.platform.is('cordova') && jwtToken)) return [3 /*break*/, 2];
                        return [4 /*yield*/, cordova.plugins.Zoom.initializeWithJWT(jwtToken).then(function (message) {
                                _this.zoom.setLocale(_this.settings.getValue('language') || 'en');
                                _this.logger.log('Initialized zoom sdk with jwt token');
                            }).catch(function (err) {
                                _this.logger.error('Error initializing Zoom SDK', err);
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        this.logger.log('JWT token not present, unable to init zoom');
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ZoomService.prototype.joinMeeting = function (meetingNumber, meetingPassword, displayName) {
        return this.zoom.joinMeeting(meetingNumber, meetingPassword, displayName, {
            'no_dial_in_via_phone': true,
            'no_dial_out_to_phone': true,
            'participant_id': ''
        });
    };
    ZoomService.ctorParameters = function () { return [
        { type: _hrs_gateway__WEBPACK_IMPORTED_MODULE_2__["GatewayResourceService"] },
        { type: ngx_logger__WEBPACK_IMPORTED_MODULE_4__["NGXLogger"] },
        { type: _user_user__WEBPACK_IMPORTED_MODULE_3__["User"] },
        { type: _ionic_native_zoom_ngx__WEBPACK_IMPORTED_MODULE_5__["Zoom"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
        { type: _settings_settings__WEBPACK_IMPORTED_MODULE_8__["Settings"] }
    ]; };
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
    return ZoomService;
}());



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


var MetricType = {
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
var DailyMetricsModel = /** @class */ (function () {
    function DailyMetricsModel(data) {
        this.parseMetrics(data.metrics);
        this.setDate(data);
        if (data.risk && data.risk.length > 0) {
            this.getMetricRiskClasses(data.risk[0]);
        }
    }
    DailyMetricsModel.init = function (data) {
        return new DailyMetricsModel(data);
    };
    DailyMetricsModel.prototype.setDate = function (data) {
        this.date = moment__WEBPACK_IMPORTED_MODULE_1__["unix"](data.ts / 1000);
    };
    DailyMetricsModel.prototype.parseMetrics = function (metrics) {
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
    };
    DailyMetricsModel.prototype.parseEntry = function (type, entries) {
        var entryModels = [];
        var entryCount = 0;
        for (var i = 0; i < entries.length; i++) {
            var currentEntry = entries[i];
            var entryModel = this.newEntryModel(type, currentEntry);
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
    };
    DailyMetricsModel.prototype.newEntryModel = function (type, entry) {
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
    };
    DailyMetricsModel.prototype.getMetricRiskClasses = function (riskData) {
        var metricClasses = {};
        if (riskData.details) {
            var riskDetails = riskData.details;
            for (var i = 0; i < riskDetails.length; i++) {
                var metricType = riskDetails[i].metrics[0];
                metricClasses[metricType + 'Risk'] = riskDetails[i].type;
            }
        }
        this.riskClasses = metricClasses;
    };
    DailyMetricsModel.ctorParameters = function () { return [
        null
    ]; };
    return DailyMetricsModel;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _hrs_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hrs/models */ "../../libs/models/models.ts");


var ActivityEntry = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ActivityEntry, _super);
    function ActivityEntry(entry) {
        var _this = _super.call(this, entry.ts, entry.id) || this;
        _this.duration = entry.duration;
        return _this;
    }
    ActivityEntry.ctorParameters = function () { return [
        null
    ]; };
    return ActivityEntry;
}(_hrs_models__WEBPACK_IMPORTED_MODULE_1__["MetricEntry"]));



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _hrs_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hrs/models */ "../../libs/models/models.ts");


var BloodPressureEntry = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BloodPressureEntry, _super);
    function BloodPressureEntry(entry) {
        var _this = _super.call(this, entry.ts, entry.id) || this;
        _this.heartrate = entry.heartrate;
        _this.systolic = entry.systolic;
        _this.diastolic = entry.diastolic;
        _this.map = BloodPressureEntry.calculateMAP(entry.systolic, entry.diastolic);
        return _this;
    }
    BloodPressureEntry.calculateMAP = function (systolic, diastolic) {
        var map = Math.round(((2 * diastolic) + systolic) / 3);
        return map;
    };
    BloodPressureEntry.ctorParameters = function () { return [
        null
    ]; };
    return BloodPressureEntry;
}(_hrs_models__WEBPACK_IMPORTED_MODULE_1__["MetricEntry"]));



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _hrs_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hrs/models */ "../../libs/models/models.ts");


var GlucoseEntry = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GlucoseEntry, _super);
    function GlucoseEntry(entry) {
        var _this = _super.call(this, entry.ts, entry.id) || this;
        _this.glucose = entry.glucose;
        return _this;
    }
    GlucoseEntry.ctorParameters = function () { return [
        null
    ]; };
    return GlucoseEntry;
}(_hrs_models__WEBPACK_IMPORTED_MODULE_1__["MetricEntry"]));



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _hrs_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hrs/models */ "../../libs/models/models.ts");


var MedicationEntry = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MedicationEntry, _super);
    function MedicationEntry(entry) {
        var _this = _super.call(this, entry.ts, entry.id) || this;
        _this.name = entry.med;
        _this.dose = entry.dose;
        _this.schedule = entry.schedule;
        _this.time = entry.time;
        _this.ts = entry.ts;
        return _this;
    }
    MedicationEntry.ctorParameters = function () { return [
        null
    ]; };
    return MedicationEntry;
}(_hrs_models__WEBPACK_IMPORTED_MODULE_1__["MetricEntry"]));



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _hrs_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hrs/models */ "../../libs/models/models.ts");


var PulseOxEntry = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PulseOxEntry, _super);
    function PulseOxEntry(entry) {
        var _this = _super.call(this, entry.ts, entry.id) || this;
        _this.spo2 = entry.spo2;
        _this.heartrate = entry.heartrate;
        return _this;
    }
    PulseOxEntry.ctorParameters = function () { return [
        null
    ]; };
    return PulseOxEntry;
}(_hrs_models__WEBPACK_IMPORTED_MODULE_1__["MetricEntry"]));



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _hrs_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hrs/models */ "../../libs/models/models.ts");


var StepsEntry = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StepsEntry, _super);
    function StepsEntry(entry) {
        var _this = _super.call(this, entry.ts, entry.id) || this;
        _this.steps = entry.steps;
        return _this;
    }
    StepsEntry.ctorParameters = function () { return [
        null
    ]; };
    return StepsEntry;
}(_hrs_models__WEBPACK_IMPORTED_MODULE_1__["MetricEntry"]));



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _clinician_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @clinician/models */ "./src/common/models/models.ts");
/* harmony import */ var _hrs_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hrs/utility */ "../../libs/utility/index.ts");



var StethoscopeEntry = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StethoscopeEntry, _super);
    function StethoscopeEntry(entry) {
        return _super.call(this, _hrs_utility__WEBPACK_IMPORTED_MODULE_2__["ConvertTime"].isoToTimestamp(entry.takenAt), entry.id) || this;
    }
    StethoscopeEntry.ctorParameters = function () { return [
        null
    ]; };
    return StethoscopeEntry;
}(_clinician_models__WEBPACK_IMPORTED_MODULE_1__["MetricEntry"]));



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _hrs_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hrs/models */ "../../libs/models/models.ts");


var TemperatureEntry = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TemperatureEntry, _super);
    function TemperatureEntry(entry) {
        var _this = _super.call(this, entry.ts, entry.id) || this;
        _this.temperature = entry.temperature;
        _this.unit = entry.unit;
        return _this;
    }
    TemperatureEntry.ctorParameters = function () { return [
        null
    ]; };
    return TemperatureEntry;
}(_hrs_models__WEBPACK_IMPORTED_MODULE_1__["MetricEntry"]));



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _hrs_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hrs/models */ "../../libs/models/models.ts");


var WeightEntry = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WeightEntry, _super);
    function WeightEntry(entry) {
        var _this = _super.call(this, entry.ts, entry.id) || this;
        _this.weight = entry.weight;
        return _this;
    }
    WeightEntry.ctorParameters = function () { return [
        null
    ]; };
    return WeightEntry;
}(_hrs_models__WEBPACK_IMPORTED_MODULE_1__["MetricEntry"]));



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _hrs_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hrs/models */ "../../libs/models/models.ts");


var WoundImageEntry = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WoundImageEntry, _super);
    function WoundImageEntry(entry) {
        return _super.call(this, entry.ts, entry.id) || this;
    }
    WoundImageEntry.ctorParameters = function () { return [
        null
    ]; };
    return WoundImageEntry;
}(_hrs_models__WEBPACK_IMPORTED_MODULE_1__["MetricEntry"]));



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

var PatientSettingsResponse = /** @class */ (function () {
    function PatientSettingsResponse(response) {
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
    PatientSettingsResponse.prototype.formatLastHospitalization = function (response) {
        // Last Hospitalization timestamp varies between milliseconds and seconds creating issues
        // Convert all TimeStamp values to milliseconds
        var lastHospitalization = response.data.lasthospitalization < 10000000000 &&
            typeof response.data.lasthospitalization === 'number' ?
            response.data.lasthospitalization * 1000 :
            response.data.lasthospitalization;
        return response.data.lasthospitalization = lastHospitalization ?
            moment__WEBPACK_IMPORTED_MODULE_0__(new Date(lastHospitalization)).format('MM/DD/YYYY') : null;
    };
    PatientSettingsResponse.ctorParameters = function () { return [
        null
    ]; };
    return PatientSettingsResponse;
}());



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
var Patient = /** @class */ (function () {
    function Patient(data) {
        this.set(data);
        // Quick and dirty extend/assign fields to this model
        for (var d in data) {
            // I never see conditions return an array like ['empty'] but i heard its a thing
            // doing this just in case I am wrong, I<3apiv2
            if (d === 'conditions' && data.conditions.length > 0 && data.conditions[0] !== 'empty') {
                // creates a string of conditions separated with a comma and space
                this.conditionsString = data[d].join(', ');
            }
        }
    }
    Patient.prototype.set = function (data) {
        Object.assign(this, data);
    };
    Patient.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return Patient;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * Convert gender acronyms to display names.
 */
var DisplayGenderPipe = /** @class */ (function () {
    function DisplayGenderPipe() {
    }
    DisplayGenderPipe.prototype.transform = function (value) {
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
    };
    DisplayGenderPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'displayGender'
        })
    ], DisplayGenderPipe);
    return DisplayGenderPipe;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _display_gender_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display-gender.pipe */ "./src/pipes/display-gender.pipe.ts");



var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
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
    return PipesModule;
}());



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
//# sourceMappingURL=main-es5.js.map