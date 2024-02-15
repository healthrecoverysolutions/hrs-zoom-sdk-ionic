var exec = require('cordova/exec');
var PLUGIN_NAME = "Zoom";

function callNativeFunction(name, args, success, error) {
    args = args || [];
    success = success || function(){};
    error = error || function(){};
    exec(success, error, PLUGIN_NAME, name, args);

}

var execAsPromise = function (command, args) {
    if (args === void 0) { args = []; }
    return new Promise(function (resolve, reject) {
        window.cordova.exec(resolve, reject, PLUGIN_NAME , command, args);
    });
};

var zoom = {

    _meetingLeftlistener: [],

    initialize: function(appKey, appSecret, success, error) {
        callNativeFunction('initialize', [appKey, appSecret], success, error);
    },
    
    initializeWithJWT: function(jwtToken) {
        return execAsPromise('initializeWithJWT', [jwtToken]);
    },

    login: function(username, password, success, error) {
        callNativeFunction('login', [username, password], success, error);
    },

    logout: function(success, error) {
        callNativeFunction('logout', [], success, error);
    },

    isLoggedIn: function(success, error) {
        callNativeFunction('isLoggedIn', [], success, error);
    },

    joinMeeting: function(meetingNo, meetingPassword, displayName, options, success, error) {
        callNativeFunction('joinMeeting', [meetingNo, meetingPassword, displayName, options], success, error);
    },

    startMeetingWithZAK: function(meetingNo, displayName, zoomToken, zoomAccessToken, userId, options, success, error) {
        callNativeFunction('startMeeting', [meetingNo, displayName, zoomToken, zoomAccessToken, userId, options], success, error);
    },

    startMeeting: function(meetingNo, options, success, error) {
        callNativeFunction('startMeeting', [meetingNo, "", "", "", "", options], success, error);
    },

    startInstantMeeting: function(options, success, error) {
        callNativeFunction('startInstantMeeting', [options], success, error);
    },

    setLocale: function(languageTag, success, error) {
        callNativeFunction('setLocale', [languageTag], success, error);
    },

    getOverlayState: function() {
        return execAsPromise('getOverlayState', []);
    },
    
    setMinimized: function(minimized) {
        return execAsPromise('setMinimized', [minimized]);
    },

    /*
    // Example
    cordova.plugins.Zoom.presentAlert({
        type: 'actionsheet',
        title: 'Test',
        message: 'This is a test message!',
        dismissPrevious: true, // dismiss the current active alert if one exists
        buttons: [
            {text: 'Yep', role: 'default'},
            {text: 'Nah', role: 'destructive'}
        ]
    }).then((buttonIndex) => {
        // index is from the `buttons` array passed in
        console.log(`button index ${buttonIndex} was pressed`);
    });
    */
    presentAlert: function(options) {
        return execAsPromise('presentAlert', [options]);
    },

    /*
    // Example
    cordova.plugins.Zoom.dismissAlert().then((status) => {
        // will be true if the alert is active and was dismissed,
        // otherwise will be false if no alert is active.
        console.log(`dismissed = ${status.dismissed}`);
    });
    */
    dismissAlert: function() {
        return execAsPromise('dismissAlert', []);
    },

    /**
     * Set a function map of events to be listened for, for example:
     * 
     * ```javascript
     * cordova.plugins.Zoom.setSharedEventListenerMap({
     *     overlayStateChanged: function (overlayState) { ... }
     * });
     * ```
     * 
     * Available Events:
     * - overlayStateChanged - data is getOverlayState() response
     */
    setSharedEventListenerMap: function(listenerMap) {
        if (typeof listenerMap !== 'object' || listenerMap === null) {
            console.log('ERROR: Listener object must be defined');
            return;
        }
        var listener = function (payload) {
            if (!payload || (typeof payload.type !== 'string')) {
                return;
            }
            if (typeof listenerMap[payload.type] === 'function') {
                listenerMap[payload.type](payload.data);
            } else if (typeof listenerMap['onMessage'] === 'function') {
                listenerMap['onMessage'](payload);
            } else {
                console.log('WARNING: Zoom.setSharedEventListenerMap() unhandled payload type = "' + payload.type + '"');
            }
        };
        var error = function (err) {
            listener({type: 'onError', data: err});
        };
        callNativeFunction('setSharedEventListener', [], listener, error);
    },

    addMeetingLeaveListener: function (callback, scope) {
        var type = typeof callback;

        if (type !== 'function' && type !== 'string')
            return;

        this._meetingLeftlistener = [callback, scope || window];
    },

    removeMeetingLeaveListener: function () {
        if (this._meetingLeftlistener.length > 0) {
            this._meetingLeftlistener = [];
        }
    },

    fireMeetingLeftEvent: function () {
        if (!this._meetingLeftlistener)
            return;

        var fn    = this._meetingLeftlistener[0],
            scope = this._meetingLeftlistener[1];

        if (typeof fn !== 'function') {
            fn = scope[fn];
        }

        fn.apply(scope);
    }
};

module.exports = zoom;
