package cordova.plugin.zoom;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.PluginResult;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.concurrent.Callable;

import java.lang.StringBuilder;

import us.zoom.sdk.ZoomApiError;
import us.zoom.sdk.ZoomAuthenticationError;
import us.zoom.sdk.ZoomError;
import us.zoom.sdk.ZoomSDK;
import us.zoom.sdk.ZoomSDKInitParams;
import us.zoom.sdk.ZoomSDKAuthenticationListener;
import us.zoom.sdk.ZoomSDKInitializeListener;

import timber.log.Timber;

/**
 * AuthThread
 *
 * A custom thread to run Zoom SDK from Cordova Plugin and perform authorization and authentication.
 * This thread is required since Zoom SDK needs to run on main thread.
 *
 * @author Zoom Video Communications, Inc.
 * @version v5.15.7
 *
 */
public class AuthThread implements Callable<Boolean>, ZoomSDKInitializeListener {
    /* Debug variables */
    private static final boolean DEBUG = true;
    public static Object LOCK;

    /* Cordova variables */
    private CordovaInterface cordova;
    private CallbackContext callbackContext;
    private String action = "";

    /* Zoom SDK auth variables */
    private ZoomSDK mZoomSDK;
    private ZoomSDKInitParams initParams;
    private String appKey = "";
    private String appSecret = "";
    private String webDomain = "";

    public AuthThread() {
        this.initParams = new ZoomSDKInitParams();
    }

    /**
     * setCallbackContext
     *
     * Pass the callback context instance from Cordova layer and use it for call back.
     *
     * @param callbackContext callback context from Cordova layer.
     */
    public void setCallbackContext(CallbackContext callbackContext) {
        this.callbackContext = callbackContext;
    }

    /**
     * setCordova
     *
     * Pass the cordova instance from Cordova layer and use it to commute with cordova.
     *
     * @param cordova cordova interface from Cordova layer.
     */
    public void setCordova(CordovaInterface cordova) {
        this.cordova = cordova;
    }

    /**
     * setAction
     *
     * Set the action to tell which method will be called.
     *
     * @param action action name.
     */
    public void setAction(String action) {
        this.action = action;
    }

    /**
     * setLock
     *
     * Set the lock for asynchronization.
     * @param lock  an object.
     */
    public void setLock(Object lock) {
        this.LOCK = lock;
    }

    /**
     * setInitParameters
     *
     * Pass and set parameters needed to initialize Zoom SDK.
     * // Dev note ->  App key and secret are no longer used in SDK init params with meeting SDK 5.15.7
     * @param appKey    Zoom SDK App Key.
     * @param appSecret Zoom SDK App Secret.
     * @param webDomain Zoom SDK Web Domain. Default is "zoom.us".
     */
    public void setInitParameters(String appKey, String appSecret, String webDomain) {
        if (DEBUG) { Timber.d("Init parameter set"); }
//        this.initParams.appKey = appKey; // With SDK 5.15.7, these params are no longer valid. We are not using this method anywhere in the code.
//        this.initParams.appSecret = appSecret;
        this.initParams.domain = webDomain;
        this.initParams.enableLog = true;
    }

    /**
     * call
     *
     * In call method, different methods will be called based on the action name.
     * Upon successfully running the method, a boolean value will return.
     */
    public Boolean call() {
        if (DEBUG) {
            Timber.d("[In Auth Thread run()]");
        }
        // Get Zoom SDK instance.
        this.mZoomSDK = ZoomSDK.getInstance();
        PluginResult pluginResult = null;
        // Perform different actions based on action name.
        switch (action) {
            case "initialize":
                this.mZoomSDK.initialize(
                    cordova.getActivity().getApplicationContext(),  // application context
                    this,                                           // auth listener
                    initParams
                );
                break;
            default:
                break;
        }

        return true;
    }

    /**
     * onZoomSDKInitializeResult
     *
     * A listener to retrieve Zoom SDK initialization result.
     *
     * @param errorCode         Zoom SDK error code as a number.
     * @param internalErrorCode Zoom SDK internal error code as a number.
     */
    @Override
    public void onZoomSDKInitializeResult(int errorCode, int internalErrorCode) {
        synchronized (LOCK) {
            if (DEBUG) {
                Timber.d("_+_+_+_+_+_+_+_+_+_onZoomSDKInitializeResult in AuthThread.java_+_+_+_+_+");
                Timber.d("Initialize Zoom SDK Result. errorCode="
                        + errorCode + ", internalErrorCode=" + internalErrorCode);
            }

            try {
                PluginResult pluginResult = null;

                if (errorCode == ZoomError.ZOOM_ERROR_SUCCESS) {
                    // Try to auto logged in.
                    int autoRes = this.mZoomSDK.tryAutoLoginZoom();
                    if (DEBUG) {
                        Timber.d("+++++++Auto login Zoom++++++: " + getApiErrorMessage(autoRes));
                        if (autoRes == ZoomApiError.ZOOM_API_ERROR_SUCCESS) {
                            Timber.d("Auto logged in success.");
                        } else {
                            Timber.d("Auto logged in error: " + getApiErrorMessage(autoRes));
                        }
                    }
                    pluginResult =  new PluginResult(PluginResult.Status.OK, getInitErrorMessage(errorCode));
                }

                if (pluginResult == null) {
                    pluginResult = new PluginResult(PluginResult.Status.ERROR, getInitErrorMessage(errorCode));
                }

                pluginResult.setKeepCallback(true);
                callbackContext.sendPluginResult(pluginResult);

            } catch (NullPointerException ne) {
                PluginResult pluginResult = new PluginResult(PluginResult.Status.ERROR, "Fatal Error! Please contact developer for support.");
                pluginResult.setKeepCallback(true);
                callbackContext.sendPluginResult(pluginResult);
            } finally {
                // Notify the lock to release block.
                LOCK.notify();
            }
        }
    }

    /**
     * onZoomAuthIdentityExpired
     *
     * A listener to get notified when the authentication identity has expired.
     */
    @Override
    public void onZoomAuthIdentityExpired() {
        Timber.d("onZoomAuthIdentityExpired is triggered");
    }

    /**
     * getInitErrorMessage
     *
     * Get the error message of initialization result.
     *
     * @param errorCode error code.
     * @return  A string message.
     */
    private String getInitErrorMessage(int errorCode) {


        StringBuilder message = new StringBuilder();

        switch(errorCode) {
            case ZoomError.ZOOM_ERROR_DEVICE_NOT_SUPPORTED:
                message.append("[Error]: Device is not supported by Zoom.");
                break;
            case ZoomError.ZOOM_ERROR_ILLEGAL_APP_KEY_OR_SECRET:
                message.append("[Error]: Failed due to illegal SDK Key or Secret.");
                break;
            case ZoomError.ZOOM_ERROR_INVALID_ARGUMENTS:
                message.append("[Error]: Failed due to one or more invalid arguments.");
                break;
            case ZoomError.ZOOM_ERROR_NETWORK_UNAVAILABLE:
                message.append("[Error]: Failed due to network unavailable.");
                android.widget.Toast.makeText(
                        cordova.getActivity().getApplicationContext(),
                        "[No Network] The Internet is unavailable. Please try again later.",
                        android.widget.Toast.LENGTH_LONG
                ).show();
                break;
            case ZoomError.ZOOM_ERROR_SUCCESS:
                message.append("Successfully initialize Zoom SDK.");
                break;
            case ZoomError.ZOOM_ERROR_UNKNOWN:
                message.append("[Error]: Failed due to unknown error.");
                break;
            default:
                message.append("[Error]: Failed due to unknown error.");
                break;
        }
        if (DEBUG) {
            Timber.d("******getInitErrorMessage*********" + message.toString());
        }
        return message.toString();
    }

    /**
     * getApiErrorMessage
     *
     * Get the error message of api process.
     *
     * @param errorCode error code.
     * @return A string message.
     */
    private String getApiErrorMessage(int errorCode) {

        StringBuilder message = new StringBuilder();

        switch(errorCode) {
            case ZoomApiError.ZOOM_API_ERROR_FAILED_CLIENT_INCOMPATIBLE:
                message.append("Your Zoom SDK client is not compatible. " +
                        "Please download the latest version and try again.");
                break;
            case ZoomApiError.ZOOM_API_ERROR_FAILED_NULLPOINTER:
                message.append("Zoom SDK was not initialized successfully. ");
                break;
            case ZoomApiError.ZOOM_API_ERROR_FAILED_WRONGPARAMETERS:
                message.append("The combination of your username and password does not match our record.");
                break;
            case ZoomApiError.ZOOM_API_INVALID_STATUS:
                message.append("Invalid Status. Please try again later.");
                break;
            default:
                message.append("You are already logged in.");
                break;
        }

        if (DEBUG) {
            Timber.d("******getAuthErrorMessage*********" + message.toString());
        }

        return message.toString();
    }
}
