package cordova.plugin.zoom;

import java.util.Locale;
import java.util.Locale.Builder;
import java.util.IllformedLocaleException;
import java.util.List;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.PluginResult;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.app.AlertDialog;
import android.content.DialogInterface;


import us.zoom.sdk.ChatMessageDeleteType;
import us.zoom.sdk.FreeMeetingNeedUpgradeType;
import us.zoom.sdk.IRequestLocalRecordingPrivilegeHandler;
import us.zoom.sdk.InMeetingChatController;
import us.zoom.sdk.LocalRecordingRequestPrivilegeStatus;
import us.zoom.sdk.MeetingParameter;
import us.zoom.sdk.MobileRTCFocusModeShareType;
import us.zoom.sdk.SDKNotificationServiceError;
import us.zoom.sdk.VideoQuality;
import us.zoom.sdk.ZoomSDK;
import us.zoom.sdk.ZoomSDKAuthenticationListener;
import us.zoom.sdk.ZoomSDKInitParams;
import us.zoom.sdk.ZoomSDKInitializeListener;
import us.zoom.sdk.ZoomApiError;
import us.zoom.sdk.ZoomAuthenticationError;
import us.zoom.sdk.ZoomError;

import us.zoom.sdk.InMeetingAudioController;
import us.zoom.sdk.InMeetingChatMessage;
import us.zoom.sdk.InMeetingEventHandler;
import us.zoom.sdk.InMeetingService;
import us.zoom.sdk.InMeetingServiceListener;
import us.zoom.sdk.MeetingStatus;
import us.zoom.sdk.MeetingError;
import us.zoom.sdk.MeetingService;
import us.zoom.sdk.MeetingServiceListener;
import us.zoom.sdk.MeetingSettingsHelper;
import us.zoom.sdk.MeetingViewsOptions;
import us.zoom.sdk.InstantMeetingOptions;
import us.zoom.sdk.StartMeetingOptions;
import us.zoom.sdk.StartMeetingParams4NormalUser;
import us.zoom.sdk.StartMeetingParamsWithoutLogin;
import us.zoom.sdk.JoinMeetingParams;
import us.zoom.sdk.JoinMeetingOptions;

import us.zoom.sdk.ZoomUIService;

import timber.log.Timber;

/**
 * Zoom
 *
 * A Cordova Plugin to use Zoom Video Conferencing services on Cordova applications.
 *
 * @author  Zoom Video Communications, Inc.
 * @version v5.17.11
 */
public class Zoom extends CordovaPlugin implements ZoomSDKAuthenticationListener, MeetingServiceListener, InMeetingServiceListener {
    /* Debug variables */
    private static final boolean DEBUG = true;
    public static final Object LOCK = new Object();
    private static final JSONObject JSON_OBJECT_EMPTY = new JSONObject();
    private static final int ZOOM_UI_AUTO_CHANGE_FROM_USER_COUNT = 3;

    private static final String WEB_DOMAIN = "https://zoom.us";

    private static final String KEY_TYPE = "type";
    private static final String KEY_DATA = "data";

    private static final String EVENT_TYPE_NOTIFICATION_SERVICE_STATUS_CHANGED = "notificationServiceStatusChanged";
    private static final String EVENT_TYPE_SHARED_MEETING_CHAT_STATUS_CHANGED = "sharedMeetingChatStatusChanged";
    private static final String EVENT_TYPE_SDK_INITIALIZE_RESULT = "sdkInitializeResult";
    private static final String EVENT_TYPE_SDK_INITIALIZE_AUTH_IDENTITY_EXPIRED = "sdkInitializeAuthIdentityExpired";
    private static final String EVENT_TYPE_AUTH_IDENTITY_EXPIRED = "authIdentityExpired";
    private static final String EVENT_TYPE_IDENTITY_EXPIRED = "identityExpired";
    private static final String EVENT_TYPE_LOGIN_STATUS_UPDATE = "loginStatusUpdate";
    private static final String EVENT_TYPE_JOIN_MEETING_RESULT = "joinMeetingResult";
    private static final String EVENT_TYPE_START_MEETING_RESULT = "startMeetingResult";
    private static final String EVENT_TYPE_START_INSTANT_MEETING_RESULT = "startInstantMeetingResult";
    private static final String EVENT_TYPE_SDK_LOGIN_RESULT = "sdkLoginResult";
    private static final String EVENT_TYPE_SDK_LOGOUT_RESULT = "sdkLogoutResult";
    private static final String EVENT_TYPE_MEETING_STATUS_CHANGED = "meetingStatusChanged";
    private static final String EVENT_TYPE_MEETING_PARAMETER_NOTIFICATION = "meetingParameterNotification";
    private static final String EVENT_TYPE_MEETING_LEAVE_COMPLETE = "meetingLeaveComplete";
    private static final String EVENT_TYPE_MEETING_NEEDS_PASSWORD_OR_DISPLAY_NAME = "meetingNeedsPasswordOrDisplayName";
    private static final String EVENT_TYPE_WEBINAR_NEEDS_REGISTER = "webinarNeedsRegister";
    private static final String EVENT_TYPE_WEBINAR_NEEDS_USER_NAME_AND_EMAIL = "webinarNeedsUserNameAndEmail";
    private static final String EVENT_TYPE_MEETING_NEEDS_TO_CLOSE_OTHER_MEETING = "meetingNeedsToCloseOtherMeeting";
    private static final String EVENT_TYPE_MEETING_FAIL = "meetingFail";
    private static final String EVENT_TYPE_MEETING_USER_JOIN = "meetingUserJoin";
    private static final String EVENT_TYPE_MEETING_USER_LEAVE = "meetingUserLeave";
    private static final String EVENT_TYPE_MEETING_USER_UPDATED = "meetingUserUpdated";
    private static final String EVENT_TYPE_IN_MEETING_USER_AVATAR_PATH_UPDATED = "inMeetingUserAvatarPathUpdated";
    private static final String EVENT_TYPE_MEETING_HOST_CHANGED = "meetingHostChanged";
    private static final String EVENT_TYPE_MEETING_CO_HOST_CHANGED = "meetingCoHostChanged";
    private static final String EVENT_TYPE_ACTIVE_VIDEO_USER_CHANGED = "activeVideoUserChanged";
    private static final String EVENT_TYPE_ACTIVE_SPEAKER_VIDEO_USER_CHANGED = "activeSpeakerVideoUserChanged";
    private static final String EVENT_TYPE_HOST_VIDEO_ORDER_UPDATED = "hostVideoOrderUpdated";
    private static final String EVENT_TYPE_FOLLOW_HOST_VIDEO_ORDER_CHANGED = "followHostVideoOrderChanged";
    private static final String EVENT_TYPE_SPOTLIGHT_VIDEO_CHANGED = "spotlightVideoChanged";
    private static final String EVENT_TYPE_USER_VIDEO_STATUS_CHANGED = "userVideoStatusChanged";
    private static final String EVENT_TYPE_MICROPHONE_STATUS_ERROR = "microphoneStatusError";
    private static final String EVENT_TYPE_USER_AUDIO_STATUS_CHANGED = "userAudioStatusChanged";
    private static final String EVENT_TYPE_USER_AUDIO_TYPE_CHANGED = "userAudioTypeChanged";
    private static final String EVENT_TYPE_MY_AUDIO_SOURCE_TYPE_CHANGED = "myAudioSourceTypeChanged";
    private static final String EVENT_TYPE_LOW_OR_RAISE_HAND_STATUS_CHANGED = "lowOrRaiseHandStatusChanged";
    private static final String EVENT_TYPE_CHAT_MESSAGE_RECEIVED = "chatMessageReceived";
    private static final String EVENT_TYPE_CHAT_MESSAGE_DELETE_NOTIFICATION = "chatMessageDeleteNotification";
    private static final String EVENT_TYPE_USER_NETWORK_QUALITY_CHANGED = "userNetworkQualityChanged";
    private static final String EVENT_TYPE_SINK_MEETING_VIDEO_QUALITY_CHANGED = "sinkMeetingVideoQualityChanged";
    private static final String EVENT_TYPE_HOST_ASK_UN_MUTE = "hostAskUnMute";
    private static final String EVENT_TYPE_HOST_ASK_START_VIDEO = "hostAskStartVideo";
    private static final String EVENT_TYPE_SILENT_MODE_CHANGED = "silentModeChanged";
    private static final String EVENT_TYPE_FREE_MEETING_REMINDER = "freeMeetingReminder";
    private static final String EVENT_TYPE_MEETING_ACTIVE_VIDEO = "meetingActiveVideo";
    private static final String EVENT_TYPE_SINK_ATTENDEE_CHAT_PRIVILEGE_CHANGED = "sinkAttendeeChatPrivilegeChanged";
    private static final String EVENT_TYPE_SINK_ALLOW_ATTENDEE_CHAT_NOTIFICATION = "sinkAllowAttendeeChatNotification";
    private static final String EVENT_TYPE_SINK_PANELIST_CHAT_PRIVILEGE_CHANGED = "sinkPanelistChatPrivilegeChanged";
    private static final String EVENT_TYPE_USER_NAME_CHANGED = "userNameChanged";
    private static final String EVENT_TYPE_USER_NAMES_CHANGED = "userNamesChanged";
    private static final String EVENT_TYPE_FREE_MEETING_NEED_TO_UPGRADE = "freeMeetingNeedToUpgrade";
    private static final String EVENT_TYPE_FREE_MEETING_UPGRADE_TO_GIFT_FREE_TRIAL_START = "freeMeetingUpgradeToGiftFreeTrialStart";
    private static final String EVENT_TYPE_FREE_MEETING_UPGRADE_TO_GIFT_FREE_TRIAL_STOP = "freeMeetingUpgradeToGiftFreeTrialStop";
    private static final String EVENT_TYPE_FREE_MEETING_UPGRADE_TO_PRO_MEETING = "freeMeetingUpgradeToProMeeting";
    private static final String EVENT_TYPE_CLOSED_CAPTION_RECEIVED = "closedCaptionReceived";
    private static final String EVENT_TYPE_RECORDING_STATUS = "recordingStatus";
    private static final String EVENT_TYPE_LOCAL_RECORDING_STATUS = "localRecordingStatus";
    private static final String EVENT_TYPE_INVALID_RECLAIM_HOST_KEY = "invalidReclaimHostKey";
    private static final String EVENT_TYPE_PERMISSION_REQUESTED = "permissionRequested";
    private static final String EVENT_TYPE_ALL_HANDS_LOWERED = "allHandsLowered";
    private static final String EVENT_TYPE_LOCAL_VIDEO_ORDER_UPDATED = "localVideoOrderUpdated";
    private static final String EVENT_TYPE_LOCAL_RECORDING_PRIVILEGE_REQUESTED = "localRecordingPrivilegeRequested";
    private static final String EVENT_TYPE_SUSPEND_PARTICIPANTS_ACTIVITIES = "suspendParticipantsActivities";
    private static final String EVENT_TYPE_ALLOW_PARTICIPANTS_START_VIDEO_NOTIFICATION = "allowParticipantsStartVideoNotification";
    private static final String EVENT_TYPE_ALLOW_PARTICIPANTS_RENAME_NOTIFICATION = "allowParticipantsRenameNotification";
    private static final String EVENT_TYPE_ALLOW_PARTICIPANTS_UN_MUTE_SELF_NOTIFICATION = "allowParticipantsUnMuteSelfNotification";
    private static final String EVENT_TYPE_ALLOW_PARTICIPANTS_SHARE_WHITE_BOARD_NOTIFICATION = "allowParticipantsShareWhiteBoardNotification";
    private static final String EVENT_TYPE_MEETING_LOCK_STATUS = "meetingLockStatus";
    private static final String EVENT_TYPE_REQUEST_LOCAL_RECORDING_PRIVILEGE_CHANGED = "requestLocalRecordingPrivilegeChanged";
    private static final String EVENT_TYPE_AI_COMPANION_ACTIVE_CHANGE_NOTICE = "aiCompanionActiveChangeNotice";
    private static final String EVENT_TYPE_PARTICIPANT_PROFILE_PICTURE_STATUS_CHANGE = "participantProfilePictureStatusChange";
    private static final String EVENT_TYPE_CLOUD_RECORDING_STORAGE_FULL = "cloudRecordingStorageFull";
    private static final String EVENT_TYPE_UVC_CAMERA_STATUS_CHANGE = "uvcCameraStatusChange";
    private static final String EVENT_TYPE_FOCUS_MODE_STATE_CHANGED = "focusModeStateChanged";
    private static final String EVENT_TYPE_FOCUS_MODE_SHARE_TYPE_CHANGED = "focusModeShareTypeChanged";
    private static final String EVENT_TYPE_VIDEO_ALPHA_CHANNEL_STATUS_CHANGED = "videoAlphaChannelStatusChanged";
    private static final String EVENT_TYPE_ALLOW_PARTICIPANT_REQUEST_CLOUD_RECORDING= "allowParticipantRequestCloudRecording";
    private static final String EVENT_TYPE_NOTIFICATION_SERVICE_STATUS = "notificationServiceStatus";

    private static final String DATA_KEY_VALUE = "value";
    private static final String DATA_KEY_STATUS = "status";
    private static final String DATA_KEY_ENABLED = "enabled";
    private static final String DATA_KEY_MEETING_STATUS = "meetingStatus";
    private static final String DATA_KEY_START = "start";
    private static final String DATA_KEY_SUCCESS = "success";
    private static final String DATA_KEY_TYPE = "type";
    private static final String DATA_KEY_ERROR = "error";
    private static final String DATA_KEY_ERROR_CODE = "errorCode";
    private static final String DATA_KEY_INTERNAL_ERROR_CODE = "internalErrorCode";
    private static final String DATA_KEY_IS_LOGGED_IN = "isLoggedIn";
    private static final String DATA_KEY_MESSAGE = "message";
    private static final String DATA_KEY_AUTH_ERROR_MESSAGE = "authErrorMessage";
    private static final String DATA_KEY_RESULT = "result";
    private static final String DATA_KEY_MEETING_HOST = "meetingHost";
    private static final String DATA_KEY_MEETING_NUMBER = "meetingNumber";
    private static final String DATA_KEY_MEETING_TOPIC = "meetingTopic";
    private static final String DATA_KEY_MEETING_TYPE = "meetingType";
    private static final String DATA_KEY_IS_AUTO_RECORDING_CLOUD = "isAutoRecordingCloud";
    private static final String DATA_KEY_IS_AUTO_RECORDING_LOCAL = "isAutoRecordingLocal";
    private static final String DATA_KEY_IS_VIEW_ONLY = "isViewOnly";
    private static final String DATA_KEY_NEEDS_PASSWORD = "needsPassword";
    private static final String DATA_KEY_NEEDS_DISPLAY_NAME = "needsDisplayName";
    private static final String DATA_KEY_CURRENT_USER_LIST = "currentUserList";
    private static final String DATA_KEY_CHANGED_USER_LIST = "changedUserList";
    private static final String DATA_KEY_USER_ID = "userId";
    private static final String DATA_KEY_VIDEO_QUALITY = "videoQuality";
    private static final String DATA_KEY_IN_SILENT_MODE = "inSilentMode";
    private static final String DATA_KEY_IS_ORIGINAL_HOST = "isOriginalHost";
    private static final String DATA_KEY_CAN_UPGRADE = "canUpgrade";
    private static final String DATA_KEY_IS_FIRST_GIFT = "isFirstGift";
    private static final String DATA_KEY_PRIVILEGE = "privilege";
    private static final String DATA_KEY_PRIVILEGE_STATUS = "privilegeStatus";
    private static final String DATA_KEY_RECORDING_STATUS = "recordingStatus";
    private static final String DATA_KEY_PERMISSIONS = "permissions";
    private static final String DATA_KEY_LOCKED = "locked";
    private static final String DATA_KEY_UVC_CAMERA_STATUS = "uvcCameraStatus";
    private static final String DATA_KEY_FOCUS_MODE_SHARE_TYPE = "focusModeShareType";

    private static final String ACTION_INITIALIZE = "initialize";
    private static final String ACTION_INITIALIZE_WITH_JWT = "initializeWithJWT";
    private static final String ACTION_LOGIN = "login";
    private static final String ACTION_LOGOUT = "logout";
    private static final String ACTION_IS_LOGGED_IN = "isLoggedIn";
    private static final String ACTION_JOIN_MEETING = "joinMeeting";
    private static final String ACTION_START_MEETING = "startMeeting";
    private static final String ACTION_START_INSTANT_MEETING = "startInstantMeeting";
    private static final String ACTION_SET_LOCALE = "setLocale";
    private static final String ACTION_SET_SHARED_EVENT_LISTENER = "setSharedEventListener";

    private CallbackContext callbackContext;
    private CallbackContext sharedEventContext;

    /**
     * execute
     *
     * The bridging method to get parameters from JavaScript to execute the relevant Java methods.
     *
     * @param action            action name.
     * @param args              arguments.
     * @param callbackContext   callback context.
     * @return                  true if everything runs smooth / false if something is wrong.
     * @throws JSONException    might throw exceptions when parsing JSON arrays and objects.
     */
    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext)
            throws JSONException {
        if (DEBUG) {
            Timber.d("----- [execute , action =" + action + "]");
            Timber.d("----- [execute , args =" + args + "]");
        }

        cordova.setActivityResultCallback(this);
        this.callbackContext = callbackContext;
        // Commenting below as it causes app crash as known change for latest sdk https://devforum.zoom.us/t/zoomsdk-getinstance-error-when-call-from-not-the-main-thread-since-android-meeting-sdk-v-5-11/71587
        // this.mZoomSDK = ZoomSDK.getInstance();
        switch(action) {
            case ACTION_INITIALIZE:
                String appKey = args.getString(0);
                String appSecret = args.getString(1);
                cordova.getActivity().runOnUiThread(
                    new Runnable() {
                        public void run() {
                            initialize(appKey, appSecret, callbackContext);
                        }
                    });

                break;

            case ACTION_INITIALIZE_WITH_JWT:
                String jwtToken = args.getString(0);
                cordova.getActivity().runOnUiThread(
                    new Runnable() {
                        public void run() {
                            initializeWithJWT(jwtToken, callbackContext);
                        }
                    });

                break;
            case ACTION_LOGIN:
                String username = args.getString(0);
                String password = args.getString(1);
                if (DEBUG) {
                    Timber.d("----- [username =" + username + "]");
                }
                this.login(username, password, callbackContext);
                break;
            case ACTION_LOGOUT:
                this.logout(callbackContext);
                break;
            case ACTION_IS_LOGGED_IN:
                this.isLoggedIn(callbackContext);
                break;
            case ACTION_JOIN_MEETING:
                String meetingNo = args.getString(0);
                String meetingPassword = args.getString(1);
                String displayNameJ = args.getString(2);
                JSONObject optionsJ = args.getJSONObject(3);
                cordova.getActivity().runOnUiThread( // running on a different thread
                    new Runnable() {
                        public void run() {
                            Timber.d("Applying an overridden meeting activity instance to extend some behaviour");
                            ZoomUIService zoomUIService =  ZoomSDK.getInstance().getZoomUIService();
                            zoomUIService.setNewMeetingUI(NewZoomMeetingActivity.class);
                            zoomUIService.enableMinimizeMeeting(true);
                            zoomUIService.disablePIPMode(false);
                            joinMeeting(meetingNo, meetingPassword, displayNameJ, optionsJ, callbackContext);
                        }
                    });

                break;
            case ACTION_START_MEETING:
                String meetingNum = args.getString(0);
                String displayNameS = args.getString(1);
                String zoomToken = args.getString(2);
                String zoomAccessToken = args.getString(3);
                String userId = args.getString(4);
                JSONObject optionsS = args.getJSONObject(5);
                this.startMeeting(meetingNum, displayNameS, zoomToken,
                        zoomAccessToken, userId, optionsS, callbackContext);
                break;
            case ACTION_START_INSTANT_MEETING:
                JSONObject optionsI = args.getJSONObject(0);
                this.startInstantMeeting(optionsI, callbackContext);
                break;
            case ACTION_SET_LOCALE:
                String languageTag = args.getString(0);
                this.setLocale(languageTag, callbackContext);
                break;
            case ACTION_SET_SHARED_EVENT_LISTENER:
                setSharedEventListener(callbackContext);
                break;
            default:
                return false;
        }
        return true;
    }

    private void setSharedEventListener(CallbackContext callbackContext) {
        if (sharedEventContext != null) {
            sharedEventContext.error("event listener callback overwritten");
        }
        sharedEventContext = callbackContext;
    }

    private void emitSharedJsEvent(String type, JSONObject data) {
        Timber.d("emitSharedJsEvent -> %s", type);
        try {
            if (sharedEventContext == null) {
                return;
            }
            if (data == null) {
                data = JSON_OBJECT_EMPTY;
            }
            JSONObject payload = new JSONObject()
                .put(KEY_TYPE, type)
                .put(KEY_DATA, data);
            PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, payload);
            pluginResult.setKeepCallback(true);
            sharedEventContext.sendPluginResult(pluginResult);
        } catch (JSONException e) {
            Timber.e("emitSharedJsEvent failed! -> %s", e.getMessage());
        }
    }

    @Override
    public void onNotificationServiceStatus(SDKNotificationServiceStatus status) {
        JSONObject data = new JSONObject();
        try {
            data.put(DATA_KEY_STATUS, status.toString());
        } catch (JSONException ignored) {
        }
        emitSharedJsEvent(EVENT_TYPE_NOTIFICATION_SERVICE_STATUS_CHANGED, data);
    }

    @Override
    public void onShareMeetingChatStatusChanged(boolean start) {
        JSONObject data = new JSONObject();
        try {
            data.put(DATA_KEY_START, start);
        } catch (JSONException ignored) {
        }
        emitSharedJsEvent(EVENT_TYPE_SHARED_MEETING_CHAT_STATUS_CHANGED, data);
    }

    private void onSDKInitializeResult(boolean success, int errorCode, int internalErrorCode) {
        JSONObject data = new JSONObject();
        try {
            data.put(DATA_KEY_SUCCESS, success);
            data.put(DATA_KEY_ERROR_CODE, errorCode);
            data.put(DATA_KEY_INTERNAL_ERROR_CODE, internalErrorCode);
        } catch (JSONException ignored) {
        }
        emitSharedJsEvent(EVENT_TYPE_SDK_INITIALIZE_RESULT, data);
    }

    private void onSDKInitializeAuthIdentityExpired() {
        emitSharedJsEvent(EVENT_TYPE_SDK_INITIALIZE_AUTH_IDENTITY_EXPIRED, null);
    }

    private void notifyLoginStatus(boolean isLoggedIn) {
        JSONObject data = new JSONObject();
        try {
            data.put(DATA_KEY_IS_LOGGED_IN, isLoggedIn);
        } catch (JSONException ignored) {
        }
        emitSharedJsEvent(EVENT_TYPE_LOGIN_STATUS_UPDATE, data);
    }

    private void registerMeetingServiceListener() {
        ZoomSDK zoomSDK = ZoomSDK.getInstance();
        MeetingService meetingService = zoomSDK.getMeetingService();
        if(meetingService != null) {
            meetingService.addListener(this);
        }
    }

    /**
     * initialize
     *
     * Initialize Zoom SDK using JWT token
     *
     * @param jwtToken        Zoom SDK meeting JWT token
     * @param callbackContext Cordova callback context.
     */
    private void initializeWithJWT(String jwtToken, CallbackContext callbackContext) {
        if (DEBUG) {
            Timber.d("********** Zoom's initialize called **********");
        }

        ZoomSDK mZoomSDK = ZoomSDK.getInstance();

        // Note: When "null" is pass from JS to Android, it is transferred as a word "null".
        if (jwtToken == null || jwtToken.trim().isEmpty() || jwtToken.equals("null")) {
            callbackContext.error("Both SDK key and secret cannot be empty");
            return;
        }

        ZoomSDKInitParams params = new ZoomSDKInitParams();
        params.jwtToken = jwtToken;
        params.domain = WEB_DOMAIN;
        params.enableLog = true;

        ZoomSDKInitializeListener listener = new ZoomSDKInitializeListener() {
            /**
             * @param errorCode {@link us.zoom.sdk.ZoomError#ZOOM_ERROR_SUCCESS} if the SDK has been initialized successfully.
             */
            @Override
            public void onZoomSDKInitializeResult(int errorCode, int internalErrorCode) {
                boolean success = errorCode == ZoomError.ZOOM_ERROR_SUCCESS;
                Zoom.this.onSDKInitializeResult(success, errorCode, internalErrorCode);
                if(success) {
                    Timber.d("Initialized the Zoom SDK");
                    registerMeetingServiceListener();
                    callbackContext.success("Initialize successfully!");
                } else {
                    Timber.d("Error initializing zoom sdk " + errorCode);
                    callbackContext.error(errorCode);
                }
            }
            @Override
            public void onZoomAuthIdentityExpired() {
                Zoom.this.onSDKInitializeAuthIdentityExpired();
            }
        };
        mZoomSDK.initialize(cordova.getActivity(), listener, params);
    }

    /**
     * initialize
     * @deprecated
     * Initialize Zoom SDK. <Dev Note : this method should not be used now and is deprecated. Use initializeWithJWT instead for initialization
     *
     * @param appKey        Zoom SDK app key.
     * @param appSecret     Zoom SDK app secret.
     * @param callbackContext Cordova callback context.
     */
    private void initialize(String appKey, String appSecret, CallbackContext callbackContext) {
        if (DEBUG) {
            Timber.d("********** Zoom's initialize called **********");
        }

        ZoomSDK mZoomSDK = ZoomSDK.getInstance();
//        // If the SDK has been successfully initialized, simply return.
        if (mZoomSDK.isInitialized()) {
            callbackContext.success("Initialize successfully!");
            return;
        }

        // Note: When "null" is pass from JS to Android, it is transferred as a word "null".
        if (appKey == null || appKey.trim().isEmpty() || appKey.equals("null")
                || appSecret == null || appSecret.trim().isEmpty() || appSecret.equals("null")) {
            callbackContext.error("Both SDK key and secret cannot be empty");
            return;
        }

        ZoomSDKInitParams params = new ZoomSDKInitParams();
        // These are not present any more in the new SDK. use initializeWithJWT instead.
//        params.appKey = appKey;
//        params.appSecret = appSecret;
        params.domain = this.WEB_DOMAIN;
        params.enableLog = true;

        ZoomSDKInitializeListener listener = new ZoomSDKInitializeListener() {
            /**
             * @param errorCode {@link us.zoom.sdk.ZoomError#ZOOM_ERROR_SUCCESS} if the SDK has been initialized successfully.
             */
            @Override
            public void onZoomSDKInitializeResult(int errorCode, int internalErrorCode) {
                boolean success = errorCode == ZoomError.ZOOM_ERROR_SUCCESS;
                Zoom.this.onSDKInitializeResult(success, errorCode, internalErrorCode);
                if(success) {
                    Timber.d("Initialized the Zoom SDK");
                    callbackContext.success("Initialize successfully!");
                } else {
                    Timber.e("Error initializing zoom sdk " + errorCode);
                    callbackContext.error(errorCode);
                }
            }
            @Override
            public void onZoomAuthIdentityExpired() {
                Zoom.this.onSDKInitializeAuthIdentityExpired();
            }
        };

        mZoomSDK.initialize(cordova.getActivity(), listener, params);

    }

    /**
     * login
     *
     * Log user in with Zoom username and password.
     *
     * @param username      user's Zoom username.
     * @param password      user's Zoom password.
     * @param callbackContext cordova callback context.
     */
    private void login(String username, String password, CallbackContext callbackContext) {

        ZoomSDK mZoomSDK = ZoomSDK.getInstance();

        if (!mZoomSDK.isInitialized()) {
            // Zoom SDK instance has not been initialized.
            android.widget.Toast.makeText(
                    cordova.getActivity().getApplicationContext(),
                    "ZoomSDK has not been initialized successfully",
                    android.widget.Toast.LENGTH_LONG
            ).show();
            callbackContext.error("ZoomSDK has not been initialized successfully");
            return;
        }

        // Empty username or password.
        if (username.length() == 0 || password.length() == 0) {
            callbackContext.error("Username and password cannot be empty.");
            return;
        }

        // bind listener.
        mZoomSDK.addAuthenticationListener(this);
        // Try to log user in.

        //exec() call to Zoom.login blocked the main thread for 28ms. Plugin should use CordovaInterface.getThreadPool().
        cordova.getThreadPool().execute(new Runnable() {
           @Override
           public void run() {
               ZoomSDK mZoomSDK = ZoomSDK.getInstance();
                // Note : As of v5.9.0, the SDK no longer supports directly logging in.
                // Moving forward, all user authentication will need to be done through Zoom OAuth 16.
                // Upon successful authentication, you will be able to access the user’s ZAK and can pass it into the SDK.
                // https://devforum.zoom.us/t/problem-with-login-after-updating-zoom-sdk/66777

               // TODO Commenting below code as we are not using this and thus dont need this functionality to be ported as per new implementation.
//               int response = mZoomSDK.loginWithZoom(username, password);
//               if (DEBUG) {
//                   Timber.d("[Login response ^^^^^^^^^^^^^^]= " + response);
//               }
//
//               if (response != ZoomApiError.ZOOM_API_ERROR_SUCCESS) {
//                   PluginResult pluginResult = new PluginResult(PluginResult.Status.ERROR,
//                           getApiErrorMessage(response));
//                   pluginResult.setKeepCallback(true);
//                   callbackContext.sendPluginResult(pluginResult);
//               }
           }
        });
    }

    /**
     * logout
     *
     * Log user out.
     *
     * @param callbackContext   cordova callback context.
     */
    private void logout(CallbackContext callbackContext) {
        ZoomSDK mZoomSDK = ZoomSDK.getInstance();
        if (!mZoomSDK.isInitialized()) {
            // Zoom SDK instance has not been initialized.
            android.widget.Toast.makeText(
                    cordova.getActivity().getApplicationContext(),
                    "ZoomSDK has not been initialized successfully",
                    android.widget.Toast.LENGTH_LONG
            ).show();
            callbackContext.error("ZoomSDK has not been initialized successfully");
            return;
        }

        PluginResult pluginResult = null;
        // If user is not logged in.
        if (!mZoomSDK.isLoggedIn()) {
            pluginResult = new PluginResult(PluginResult.Status.ERROR, "You are not logged in.");
            pluginResult.setKeepCallback(true);
            callbackContext.sendPluginResult(pluginResult);
            return;
        }
        // Bind listener.
        mZoomSDK.addAuthenticationListener(this);
        // User is logged in, trying to log user out.
        if (!mZoomSDK.logoutZoom()) {
            // logout error.
            pluginResult = new PluginResult(PluginResult.Status.ERROR, false);
            pluginResult.setKeepCallback(true);
            callbackContext.sendPluginResult(pluginResult);
            return;
        }

        // logout success.
        pluginResult = new PluginResult(PluginResult.Status.OK, true);
        if (DEBUG) {
            Timber.d("===============Logout Success!==============");
        }

        pluginResult.setKeepCallback(true);
        callbackContext.sendPluginResult(pluginResult);
        notifyLoginStatus(false);
    }

    /**
     * isLoggedIn
     *
     * Check whether the user is logged in.
     *
     * @param callbackContext   cordova callback context.
     */
    private void isLoggedIn(CallbackContext callbackContext) {
        try {
            cordova.getActivity().runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    if (DEBUG) {
                        Timber.d("[#############isLoggedIn Thread run()##############]");
                    }
                    ZoomSDK zoomSDK = ZoomSDK.getInstance();
                    if (!zoomSDK.isInitialized()) {
                        callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, "ZoomSDK has not been initialized."));
                        return;
                    }
                    boolean isLoggedIn = zoomSDK.isLoggedIn();
                    callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, isLoggedIn));
                    notifyLoginStatus(isLoggedIn);
                }
            });
        } catch (Exception e) {
            callbackContext.error(e.getMessage());
        }
    }

    private void handleMeetingJoinOrStart(
        CallbackContext callbackContext,
        int response,
        String eventType
    ) {
        boolean success = response == MeetingError.MEETING_ERROR_SUCCESS;
        String message = getMeetingErrorMessage(response);
        PluginResult.Status status = success ? PluginResult.Status.OK : PluginResult.Status.ERROR;

        if (DEBUG) {
            Timber.i("handleMeetingJoinOrStart(), response = %s (eventType = %s)", message, eventType);
        }

        PluginResult pluginResult = new PluginResult(status, message);
        callbackContext.sendPluginResult(pluginResult);

        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_ERROR_CODE, response);
            eventData.put(DATA_KEY_MESSAGE, message);
            eventData.put(DATA_KEY_SUCCESS, success);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(eventType, eventData);
    }

    private void onJoinMeetingResult(CallbackContext callbackContext, int response) {
        handleMeetingJoinOrStart(callbackContext, response, EVENT_TYPE_JOIN_MEETING_RESULT);
    }

    private void onStartMeetingResult(CallbackContext callbackContext, int response) {
        handleMeetingJoinOrStart(callbackContext, response, EVENT_TYPE_START_MEETING_RESULT);
    }

    private void onStartInstantMeetingResult(CallbackContext callbackContext, int response) {
        handleMeetingJoinOrStart(callbackContext, response, EVENT_TYPE_START_INSTANT_MEETING_RESULT);
    }

    /**
     * joinMeeting
     *
     * Join a meeting
     *
     * @param meetingNo         meeting number.
     * @param meetingPassword   meeting password
     * @param displayName       display name shown in meeting.
     * @param option            meeting options.
     * @param callbackContext   cordova callback context.
     */
    private void joinMeeting(String meetingNo, String meetingPassword, String displayName, JSONObject option, CallbackContext callbackContext) {

        if (DEBUG) { Timber.d("********** Zoom's join meeting called ,meetingNo=" + meetingNo + " **********"); }

        if (meetingNo == null || meetingNo.trim().isEmpty() || meetingNo.equals("null")) {
            callbackContext.error("Meeting number cannot be empty");
            return;
        }

        String meetingNumber = meetingNo.trim().replaceAll("[^0-9]", "");

        if (meetingNumber.length() < 9 || meetingNumber.length() > 11 || !meetingNumber.matches("\\d{8,11}")) {
            callbackContext.error("Please enter a valid meeting number.");
            return;
        }

        if (DEBUG) {
            Timber.d("[Going to Join Meeting]");
            Timber.d("[meetingNo=]" + meetingNumber);
        }

        PluginResult pluginResult;

        // Get Zoom SDK instance.
        ZoomSDK zoomSDK = ZoomSDK.getInstance();

        // If the Zoom SDK instance is not initialized, throw error.
        if(!zoomSDK.isInitialized()) {
            pluginResult =  new PluginResult(PluginResult.Status.ERROR, "ZoomSDK has not been initialized successfully");
            pluginResult.setKeepCallback(true);
            callbackContext.sendPluginResult(pluginResult);
            return;
        }

        // Get meeting service instance.
        MeetingService meetingService = zoomSDK.getMeetingService();
        if(meetingService == null) {
            callbackContext.error("Meeting service cannot be empty");
        }

        MeetingSettingsHelper msHelper = zoomSDK.getMeetingSettingsHelper();
        msHelper.setAutoConnectVoIPWhenJoinMeeting(true);
        msHelper.enableForceAutoStartMyVideoWhenJoinMeeting(true);
        msHelper.disableShowVideoPreviewWhenJoinMeeting(true);
        // to switch to gallery view automatically when user count threshold reaches
        msHelper.setSwitchVideoLayoutUserCountThreshold(2);
        msHelper.setSwitchVideoLayoutAccordingToUserCountEnabled(true);

        JoinMeetingParams params = new JoinMeetingParams();

        params.displayName = displayName;
        params.meetingNo = meetingNo;
        params.password = meetingPassword;

        // Set meeting password.
        if (meetingPassword.length() > 0) {
            params.password = meetingPassword;
        }

        InMeetingService inMeetingService = ZoomSDK.getInstance().getInMeetingService();
        //Register Event Listener
        inMeetingService.addListener(this);

        if (option != null) {
            // If meeting option is provided, setup meeting options and join meeting.

            JoinMeetingOptions opts = new JoinMeetingOptions();
            try {
                opts.custom_meeting_id = option.isNull("custom_meeting_id")? null : option.getString("custom_meeting_id");
                // As per new SDK, field has been renamed to customer_key instead of participant_id
                // https://marketplacefront.zoom.us/sdk/meeting/android/us/zoom/sdk/MeetingOptions.html
                opts.customer_key = option.isNull("participant_id")? null : option.getString("participant_id");
                opts.no_unmute_confirm_dialog = option.isNull("no_unmute_confirm_dialog")? false : option.getBoolean("no_unmute_confirm_dialog");
                opts.no_webinar_register_dialog = option.isNull("no_webinar_register_dialog")? false : option.getBoolean("no_webinar_register_dialog");
                opts.no_driving_mode = option.isNull("no_driving_mode")? false : option.getBoolean("no_driving_mode");
                opts.no_invite = option.isNull("no_invite")? false : option.getBoolean("no_invite");
                opts.no_meeting_end_message = option.isNull("no_meeting_end_message")? false : option.getBoolean("no_meeting_end_message");
                opts.no_titlebar = option.isNull("no_titlebar")? false : option.getBoolean("no_titlebar");
                opts.no_bottom_toolbar = option.isNull("no_bottom_toolbar")? false : option.getBoolean("no_bottom_toolbar");
                opts.no_dial_in_via_phone = option.isNull("no_dial_in_via_phone")? false : option.getBoolean("no_dial_in_via_phone");
                opts.no_dial_out_to_phone = option.isNull("no_dial_out_to_phone")? false : option.getBoolean("no_dial_out_to_phone");
                opts.no_disconnect_audio = option.isNull("no_disconnect_audio")? false : option.getBoolean("no_disconnect_audio");
                opts.no_share = option.isNull("no_share")? false : option.getBoolean("no_share");
                opts.no_audio = option.isNull("no_audio")? false : option.getBoolean("no_audio");
                opts.no_video = option.isNull("no_video")? false : option.getBoolean("no_video");
                opts.no_meeting_error_message = option.isNull("no_meeting_error_message")? false : option.getBoolean("no_meeting_error_message");
                opts.meeting_views_options = 0;

                if (!option.isNull("no_button_video") && option.getBoolean("no_button_video")) {
                    opts.meeting_views_options += MeetingViewsOptions.NO_BUTTON_VIDEO;
                }

                if (!option.isNull("no_button_audio") && option.getBoolean("no_button_audio")) {
                    opts.meeting_views_options += MeetingViewsOptions.NO_BUTTON_AUDIO;
                }

                if (!option.isNull("no_button_share") && option.getBoolean("no_button_share")) {
                    opts.meeting_views_options += MeetingViewsOptions.NO_BUTTON_SHARE;
                }

                if (!option.isNull("no_button_participants") && option.getBoolean("no_button_participants")) {
                    opts.meeting_views_options += MeetingViewsOptions.NO_BUTTON_PARTICIPANTS;
                }

                if (!option.isNull("no_button_more") && option.getBoolean("no_button_more")) {
                    opts.meeting_views_options += MeetingViewsOptions.NO_BUTTON_MORE;
                }

                if (!option.isNull("no_text_meeting_id") && option.getBoolean("no_text_meeting_id")) {
                    opts.meeting_views_options += MeetingViewsOptions.NO_TEXT_MEETING_ID;
                }

                if (!option.isNull("no_text_password") && option.getBoolean("no_text_password")) {
                    opts.meeting_views_options += MeetingViewsOptions.NO_TEXT_PASSWORD;
                }

                if (!option.isNull("no_button_leave") && option.getBoolean("no_button_leave")) {
                    opts.meeting_views_options += MeetingViewsOptions.NO_BUTTON_LEAVE;
                }

                if (!option.isNull("no_button_switch_camera") && option.getBoolean("no_button_switch_camera")) {
                    opts.meeting_views_options += MeetingViewsOptions.NO_BUTTON_SWITCH_CAMERA;
                }

                if (!option.isNull("no_button_switch_audio_source") && option.getBoolean("no_button_switch_audio_source")) {
                    opts.meeting_views_options += MeetingViewsOptions.NO_BUTTON_SWITCH_AUDIO_SOURCE;
                }
            } catch (JSONException ex) {
                if (DEBUG) { Timber.i(ex.getMessage()); }
            }

            cordova.getActivity().runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    int response = meetingService.joinMeetingWithParams(
                            cordova.getActivity().getApplicationContext(),params, opts);
                    Zoom.this.onJoinMeetingResult(callbackContext, response);
                }
            });
        } else {
            cordova.getThreadPool().execute(new Runnable() {
                @Override
                public void run() {
                    // If meeting option is not provided, simply join meeting.
                    int response = meetingService.joinMeetingWithParams(
                            cordova.getActivity().getApplicationContext(), params, null);
                    Zoom.this.onJoinMeetingResult(callbackContext, response);
                }
            });
        }

    }

    /**
     * startMeeting
     *
     * start an existing meeting.
     *
     * @param meetingNo         meeting number
     * @param displayName       display name shown in meeting
     * @param zoomToken         zoom token retrieved from Zoom REST API
     * @param zoomAccessToken   zoom access token retrieved from Zoom REST API
     * @param userId            userId retrieved from Zoom REST API
     * @param option            meeting option
     * @param callbackContext   cordova callback context
     */
    private void startMeeting(String meetingNo, String displayName, String zoomToken, String zoomAccessToken, String userId, JSONObject option, CallbackContext callbackContext) {

        if (meetingNo == null || meetingNo.trim().isEmpty() || meetingNo.equals("null")) {
            callbackContext.error("Meeting number cannot be empty");
            return;
        }

        // pre-process the meeting number to avoid crashing from invalid values.
        String meetingNumber = meetingNo.trim().replaceAll("[^0-9]", "");

        if (meetingNumber.length() < 9 || meetingNumber.length() > 11 || !meetingNumber.matches("\\d{8,11}")) {
            callbackContext.error("Please enter a valid meeting number.");
            return;
        }

        PluginResult pluginResult;

        if (DEBUG) {
            Timber.d("[startMeeting] meetingNumber=====" + meetingNumber);
        }

        // Get Zoom SDK instance.
        ZoomSDK zoomSDK = ZoomSDK.getInstance();

        // If Zoom SDK is not initialized, throw error.
        if (!zoomSDK.isInitialized()) {
            pluginResult =  new PluginResult(PluginResult.Status.ERROR, "ZoomSDK has not been initialized successfully");
            pluginResult.setKeepCallback(true);
            callbackContext.sendPluginResult(pluginResult);
            return;
        }

        // Get meeting service instance to check meeting status.
        final MeetingService meetingService = zoomSDK.getMeetingService();

        if (meetingService.getMeetingStatus() != MeetingStatus.MEETING_STATUS_IDLE) {
            long lMeetingNo = 0;
            try {
                lMeetingNo = Long.parseLong(meetingNumber);
            } catch (NumberFormatException e) {
                callbackContext.error("Invalid meeting number: " + meetingNumber);
                return;
            }

            if(meetingService.getCurrentRtcMeetingNumber() == lMeetingNo) {
                meetingService.returnToMeeting(cordova.getActivity().getApplicationContext());
                return;
            }

            new AlertDialog.Builder(cordova.getActivity().getApplicationContext())
                    .setMessage("Do you want to leave current meeting and start another?")
                    .setPositiveButton("Yes", new DialogInterface.OnClickListener() {

                        @Override
                        public void onClick(DialogInterface dialog, int which) {
                            meetingService.leaveCurrentMeeting(false);
                        }
                    })
                    .setNegativeButton("No", new DialogInterface.OnClickListener() {

                        @Override
                        public void onClick(DialogInterface dialog, int which) {
                            // stay in current meeting, so do nothing
                        }
                    })
                    .show();
            return;
        }

        // Configure meeting options.
        StartMeetingOptions opts = new StartMeetingOptions();
        if (option != null) {
            try {
                opts.custom_meeting_id = option.isNull("custom_meeting_id")? null : option.getString("custom_meeting_id");
                // As per new SDK, field has been renamed to customer_key instead of participant_id
                // https://marketplacefront.zoom.us/sdk/meeting/android/us/zoom/sdk/MeetingOptions.html
                opts.customer_key = option.isNull("participant_id")? null : option.getString("participant_id");
                opts.no_unmute_confirm_dialog = option.isNull("no_unmute_confirm_dialog")? false : option.getBoolean("no_unmute_confirm_dialog");
                opts.no_webinar_register_dialog = option.isNull("no_webinar_register_dialog")? false : option.getBoolean("no_webinar_register_dialog");
                opts.no_driving_mode = option.isNull("no_driving_mode")? false : option.getBoolean("no_driving_mode");
                opts.no_invite = option.isNull("no_invite")? false : option.getBoolean("no_invite");
                opts.no_meeting_end_message = option.isNull("no_meeting_end_message")? false : option.getBoolean("no_meeting_end_message");
                opts.no_titlebar = option.isNull("no_titlebar")? false : option.getBoolean("no_titlebar");
                opts.no_bottom_toolbar = option.isNull("no_bottom_toolbar")? false : option.getBoolean("no_bottom_toolbar");
                opts.no_dial_in_via_phone = option.isNull("no_dial_in_via_phone")? false : option.getBoolean("no_dial_in_via_phone");
                opts.no_dial_out_to_phone = option.isNull("no_dial_out_to_phone")? false : option.getBoolean("no_dial_out_to_phone");
                opts.no_disconnect_audio = option.isNull("no_disconnect_audio")? false : option.getBoolean("no_disconnect_audio");
                opts.no_share = option.isNull("no_share")? false : option.getBoolean("no_share");
                opts.no_audio = option.isNull("no_audio")? false : option.getBoolean("no_audio");
                opts.no_video = option.isNull("no_video")? false : option.getBoolean("no_video");
                opts.no_meeting_error_message = option.isNull("no_meeting_error_message")? false : option.getBoolean("no_meeting_error_message");
                opts.meeting_views_options = 0;

                if (!option.isNull("no_button_video") && option.getBoolean("no_button_video")) {
                    opts.meeting_views_options += MeetingViewsOptions.NO_BUTTON_VIDEO;
                }

                if (!option.isNull("no_button_audio") && option.getBoolean("no_button_audio")) {
                    opts.meeting_views_options += MeetingViewsOptions.NO_BUTTON_AUDIO;
                }

                if (!option.isNull("no_button_share") && option.getBoolean("no_button_share")) {
                    opts.meeting_views_options += MeetingViewsOptions.NO_BUTTON_SHARE;
                }

                if (!option.isNull("no_button_participants") && option.getBoolean("no_button_participants")) {
                    opts.meeting_views_options += MeetingViewsOptions.NO_BUTTON_PARTICIPANTS;
                }

                if (!option.isNull("no_button_more") && option.getBoolean("no_button_more")) {
                    opts.meeting_views_options += MeetingViewsOptions.NO_BUTTON_MORE;
                }

                if (!option.isNull("no_text_meeting_id") && option.getBoolean("no_text_meeting_id")) {
                    opts.meeting_views_options += MeetingViewsOptions.NO_TEXT_MEETING_ID;
                }

                if (!option.isNull("no_text_password") && option.getBoolean("no_text_password")) {
                    opts.meeting_views_options += MeetingViewsOptions.NO_TEXT_PASSWORD;
                }

                if (!option.isNull("no_button_leave") && option.getBoolean("no_button_leave")) {
                    opts.meeting_views_options += MeetingViewsOptions.NO_BUTTON_LEAVE;
                }

                if (!option.isNull("no_button_switch_camera") && option.getBoolean("no_button_switch_camera")) {
                    opts.meeting_views_options += MeetingViewsOptions.NO_BUTTON_SWITCH_CAMERA;
                }

                if (!option.isNull("no_button_switch_audio_source") && option.getBoolean("no_button_switch_audio_source")) {
                    opts.meeting_views_options += MeetingViewsOptions.NO_BUTTON_SWITCH_AUDIO_SOURCE;
                }
            } catch(JSONException ex) {
                if (DEBUG) { Timber.i(ex.getMessage()); }
            }
        }

        if (zoomSDK.isLoggedIn()) {
            // if user is logged in, just start the meeting.
            StartMeetingParams4NormalUser params = new StartMeetingParams4NormalUser();
            params.meetingNo = meetingNumber;
            cordova.getThreadPool().execute(new Runnable() {
                @Override
                public void run() {
                    int response = meetingService.startMeetingWithParams(cordova.getActivity().getApplicationContext(), params, opts);
                    Zoom.this.onStartMeetingResult(callbackContext, response);
                }
            });
        } else {
            // if user is not logged in, start the meeting with provided tokens.
            if (DEBUG) {
                Timber.d("[+++++++++++++++Going to start meeting with ZAK++++++++++++++++]");
                Timber.d("[userId==="+userId);
            }
            if (zoomToken.length() != 0 && zoomAccessToken.length() != 0 && userId.length() != 0) {
                StartMeetingParamsWithoutLogin params = new StartMeetingParamsWithoutLogin();
                // instance variable 'userId' in StartMeetingParamsWithoutLogin is deleted from SDK 5.13
                // https://devsupport.zoom.us/hc/en-us/articles/12330750576269-Zoom-Meeting-SDK-Android-5-13-0
                // params.userId = userId;

                // SDK 5.11 does not support this field, only zoomAccessToken is to be set now
                // params.zoomToken = zoomToken;
                params.userType = MeetingService.USER_TYPE_API_USER;
                params.displayName = displayName;
                params.zoomAccessToken = zoomAccessToken;
                params.meetingNo = meetingNumber;

                cordova.getThreadPool().execute(new Runnable() {
                    @Override
                    public void run() {
                        int response = meetingService.startMeetingWithParams(cordova.getActivity().getApplicationContext(), params, opts);
                        Zoom.this.onStartMeetingResult(callbackContext, response);
                    }
                });
            } else {
                pluginResult =  new PluginResult(PluginResult.Status.ERROR, "Your zoom token, zoom access token, or userId are not valid");
                pluginResult.setKeepCallback(true);
                callbackContext.sendPluginResult(pluginResult);
            }
        }
    }

    /**
     *
     * startInstantMeeting
     *
     * start an instant meeting.
     *
     * @param option            meeting options
     * @param callbackContext   cordova callback context
     */
    private void startInstantMeeting(JSONObject option, CallbackContext callbackContext) {
        PluginResult pluginResult = null;
        // Get Zoom SDK instance.
        ZoomSDK zoomSDK = ZoomSDK.getInstance();
        // If Zoom SDK is not initialized, throw error.
        if (!zoomSDK.isInitialized()) {
            pluginResult =  new PluginResult(PluginResult.Status.ERROR, "ZoomSDK has not been initialized successfully");
            pluginResult.setKeepCallback(true);
            callbackContext.sendPluginResult(pluginResult);
            return;
        }
        // If user is not logged in, throw error.
        if (!zoomSDK.isLoggedIn()) {
            pluginResult =  new PluginResult(PluginResult.Status.ERROR, "You are not logged in");
            pluginResult.setKeepCallback(true);
            callbackContext.sendPluginResult(pluginResult);
            return;
        }

        MeetingService meetingService = zoomSDK.getMeetingService();
        InstantMeetingOptions opts = new InstantMeetingOptions();
        // If user provides meeting options, configure them.
        if (option != null) {
            try {
                opts.custom_meeting_id = option.isNull("custom_meeting_id")? null : option.getString("custom_meeting_id");
                // As per new SDK, field has been renamed to customer_key instead of participant_id
                // https://marketplacefront.zoom.us/sdk/meeting/android/us/zoom/sdk/MeetingOptions.html
                opts.customer_key = option.isNull("participant_id")? null : option.getString("participant_id");
                opts.no_unmute_confirm_dialog = option.isNull("no_unmute_confirm_dialog")? false : option.getBoolean("no_unmute_confirm_dialog");
                opts.no_webinar_register_dialog = option.isNull("no_webinar_register_dialog")? false : option.getBoolean("no_webinar_register_dialog");
                opts.no_driving_mode = option.isNull("no_driving_mode")? false : option.getBoolean("no_driving_mode");
                opts.no_invite = option.isNull("no_invite")? false : option.getBoolean("no_invite");
                opts.no_meeting_end_message = option.isNull("no_meeting_end_message")? false : option.getBoolean("no_meeting_end_message");
                opts.no_titlebar = option.isNull("no_titlebar")? false : option.getBoolean("no_titlebar");
                opts.no_bottom_toolbar = option.isNull("no_bottom_toolbar")? false : option.getBoolean("no_bottom_toolbar");
                opts.no_dial_in_via_phone = option.isNull("no_dial_in_via_phone")? false : option.getBoolean("no_dial_in_via_phone");
                opts.no_dial_out_to_phone = option.isNull("no_dial_out_to_phone")? false : option.getBoolean("no_dial_out_to_phone");
                opts.no_disconnect_audio = option.isNull("no_disconnect_audio")? false : option.getBoolean("no_disconnect_audio");
                opts.no_share = option.isNull("no_share")? false : option.getBoolean("no_share");
                opts.no_video = option.isNull("no_video")? false : option.getBoolean("no_video");
                opts.no_meeting_error_message = option.isNull("no_meeting_error_message")? false : option.getBoolean("no_meeting_error_message");
                opts.meeting_views_options = 0;

                if (!option.isNull("no_button_video") && option.getBoolean("no_button_video")) {
                    opts.meeting_views_options += MeetingViewsOptions.NO_BUTTON_VIDEO;
                }

                if (!option.isNull("no_button_audio") && option.getBoolean("no_button_audio")) {
                    opts.meeting_views_options += MeetingViewsOptions.NO_BUTTON_AUDIO;
                }

                if (!option.isNull("no_button_share") && option.getBoolean("no_button_share")) {
                    opts.meeting_views_options += MeetingViewsOptions.NO_BUTTON_SHARE;
                }

                if (!option.isNull("no_button_participants") && option.getBoolean("no_button_participants")) {
                    opts.meeting_views_options += MeetingViewsOptions.NO_BUTTON_PARTICIPANTS;
                }

                if (!option.isNull("no_button_more") && option.getBoolean("no_button_more")) {
                    opts.meeting_views_options += MeetingViewsOptions.NO_BUTTON_MORE;
                }

                if (!option.isNull("no_text_meeting_id") && option.getBoolean("no_text_meeting_id")) {
                    opts.meeting_views_options += MeetingViewsOptions.NO_TEXT_MEETING_ID;
                }

                if (!option.isNull("no_text_password") && option.getBoolean("no_text_password")) {
                    opts.meeting_views_options += MeetingViewsOptions.NO_TEXT_PASSWORD;
                }

                if (!option.isNull("no_button_leave") && option.getBoolean("no_button_leave")) {
                    opts.meeting_views_options += MeetingViewsOptions.NO_BUTTON_LEAVE;
                }

                if (!option.isNull("no_button_switch_camera") && option.getBoolean("no_button_switch_camera")) {
                    opts.meeting_views_options += MeetingViewsOptions.NO_BUTTON_SWITCH_CAMERA;
                }

                if (!option.isNull("no_button_switch_audio_source") && option.getBoolean("no_button_switch_audio_source")) {
                    opts.meeting_views_options += MeetingViewsOptions.NO_BUTTON_SWITCH_AUDIO_SOURCE;
                }
            } catch (JSONException ex) {
                Timber.i(ex.getMessage());
            }
        }

        cordova.getThreadPool().execute(new Runnable() {
            @Override
            public void run() {
                int response = meetingService.startInstantMeeting(cordova.getActivity().getApplicationContext(), opts);
                Zoom.this.onStartInstantMeetingResult(callbackContext, response);
            }
        });
    }

    /**
     * setLocale
     *
     * Change the in-meeting language.
     *
     * @param languageTag       IETF BCP 47 language tag string
     * @param callbackContext   cordova callback context
     */
    private void setLocale(String languageTag, CallbackContext callbackContext) {
        try {
            cordova.getActivity().runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    if (DEBUG) {
                        Timber.d("[#############setLocale Thread run()##############]");
                    }
                    ZoomSDK zoomSDK = ZoomSDK.getInstance();
                    try {
                        Locale language = new Builder().setLanguageTag(languageTag.replaceAll("_","-")).build();
                        zoomSDK.setSdkLocale(cordova.getActivity().getApplicationContext(), language);
                        callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, "Successfully set language to " + languageTag));
                    } catch (IllformedLocaleException ie) {
                        callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, "Please pass valid language and country codes. [ERROR:" + ie.getMessage() + "]"));
                    }
                }
            });
        } catch (Exception e) {
            callbackContext.error(e.getMessage());
        }
    }


    /**
     * onZoomSDKLoginResult
     *
     * A listener to get Zoom SDK login result.
     *
     * @param result result code as a number.
     */
    @Override
    public void onZoomSDKLoginResult(long result) {
            if (DEBUG) {
                Timber.d("*********onZoomSDKLoginResult********* result ===== %s", result);
            }

            try {
                boolean success = result == ZoomAuthenticationError.ZOOM_AUTH_ERROR_SUCCESS;
                String authErrorMessage = getAuthErrorMessage(result);
                String message = "Logged in successfully";
                PluginResult.Status resultStatus = PluginResult.Status.OK;
                JSONObject data = new JSONObject();

                if (!success) {
                    message = "Login attempt failed! Reason: " + authErrorMessage;
                    resultStatus = PluginResult.Status.ERROR;
                }

                data.put(DATA_KEY_RESULT, success); // backward compatibility
                data.put(DATA_KEY_SUCCESS, success);
                data.put(DATA_KEY_MESSAGE, message);
                data.put(DATA_KEY_AUTH_ERROR_MESSAGE, authErrorMessage);

                PluginResult pluginResult = new PluginResult(resultStatus, data);
                callbackContext.sendPluginResult(pluginResult);
                emitSharedJsEvent(EVENT_TYPE_SDK_LOGIN_RESULT, data);
            } catch(JSONException e) {
                callbackContext.error(e.getMessage());
            }
    }

    /**
     * onZoomSDKLogoutResult
     *
     * A listener to get Zoom SDK logout result.
     *
     * @param result result code as a number.
     */
    @Override
    public void onZoomSDKLogoutResult(long result) {
            try {
                boolean success = result == ZoomAuthenticationError.ZOOM_AUTH_ERROR_SUCCESS;
                String authErrorMessage = getAuthErrorMessage(result);
                String message = "Logged out successfully";
                PluginResult.Status resultStatus = PluginResult.Status.OK;
                JSONObject data = new JSONObject();

                if (!success) {
                    message = "Logout attempt failed! Reason: " + authErrorMessage;
                    resultStatus = PluginResult.Status.ERROR;
                }

                data.put(DATA_KEY_RESULT, success); // backward compatibility
                data.put(DATA_KEY_SUCCESS, success);
                data.put(DATA_KEY_MESSAGE, message);
                data.put(DATA_KEY_AUTH_ERROR_MESSAGE, authErrorMessage);

                PluginResult pluginResult = new PluginResult(resultStatus, data);
                callbackContext.sendPluginResult(pluginResult);
                emitSharedJsEvent(EVENT_TYPE_SDK_LOGOUT_RESULT, data);
            } catch (JSONException e) {
                callbackContext.error(e.getMessage());
            }
    }

    /**
     * getAuthErrorMessage
     *
     * Get the error message of auth process.
     *
     * @param errorCode error code.
     * @return A string message.
     */
    private String getAuthErrorMessage(long errorCode) {

        StringBuilder message = new StringBuilder();

        if (errorCode == ZoomAuthenticationError.ZOOM_AUTH_ERROR_USER_NOT_EXIST) {
            message.append("Failed due to user does not exist.");
        } else if (errorCode == ZoomAuthenticationError.ZOOM_AUTH_ERROR_WRONG_PASSWORD) {
            message.append("Failed due to wrong password.");
        } else if (errorCode == 300L) {
            // Validation error.
            message.append("Failed due to your input is not valid.");
        } else {
            message.append("Failed due to unknown reason.");
        }

        if (DEBUG) {
            Timber.d("******getAuthErrorMessage*********" + message.toString());
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
                message.append("Our API is taking a break. Please try again later.");
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

    /**
     * onZoomAuthIdentityExpired
     *
     * A listener to get notified when the authentication identity has expired.
     */
    @Override
    public void onZoomAuthIdentityExpired() {
        Timber.d("onZoomAuthIdentityExpired is triggered");
        emitSharedJsEvent(EVENT_TYPE_AUTH_IDENTITY_EXPIRED, null);
    }

    /**
     * onZoomIdentityExpired
     *
     * A listener to log user out once identity is expired.
     */
    @Override
    public void onZoomIdentityExpired() {
        emitSharedJsEvent(EVENT_TYPE_IDENTITY_EXPIRED, null);
        ZoomSDK mZoomSDK = ZoomSDK.getInstance();
        if (mZoomSDK.isLoggedIn()) {
            mZoomSDK.logoutZoom();
        }
    }

    /**
     * onMeetingStatusChanged
     *
     * A listener to retrieve info when meeting status changed.
     *
     * @param meetingStatus     meeting status code.
     * @param errorCode         error code.
     * @param internalErrorCode internal error code.
     */
    @Override
    public void onMeetingStatusChanged(MeetingStatus meetingStatus, int errorCode,
                                       int internalErrorCode) {
        if (DEBUG) {
            Timber.i("onMeetingStatusChanged,"
                + " meetingStatus=" + meetingStatus
                + ", errorCode=" + errorCode
                + ", internalErrorCode=" + internalErrorCode);
        }

        if (meetingStatus == MeetingStatus.MEETING_STATUS_FAILED
            && errorCode == MeetingError.MEETING_ERROR_CLIENT_INCOMPATIBLE) {
            final android.widget.Toast toast = android.widget.Toast.makeText(
                    cordova.getActivity().getApplicationContext(),
                    "Version of ZoomSDK is too low!",
                    android.widget.Toast.LENGTH_LONG
            );
            toast.show();
        }

        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_MEETING_STATUS, meetingStatus.toString());
            eventData.put(DATA_KEY_ERROR_CODE, errorCode);
            eventData.put(DATA_KEY_INTERNAL_ERROR_CODE, internalErrorCode);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_MEETING_STATUS_CHANGED, eventData);
    }

    @Override
    public void onMeetingParameterNotification(MeetingParameter meetingParameter) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_MEETING_HOST, meetingParameter.meeting_host);
            eventData.put(DATA_KEY_MEETING_NUMBER, meetingParameter.meeting_number);
            eventData.put(DATA_KEY_MEETING_TOPIC, meetingParameter.meeting_topic);
            eventData.put(DATA_KEY_MEETING_TYPE, meetingParameter.meeting_type.toString());
            eventData.put(DATA_KEY_IS_AUTO_RECORDING_CLOUD, meetingParameter.is_auto_recording_cloud);
            eventData.put(DATA_KEY_IS_AUTO_RECORDING_LOCAL, meetingParameter.is_auto_recording_local);
            eventData.put(DATA_KEY_IS_VIEW_ONLY, meetingParameter.isViewOnly);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_MEETING_PARAMETER_NOTIFICATION, eventData);
    }

    /**
     * getMeetingErrorMessage
     *
     * Get meeting error message.
     *
     * @param errorCode error code.
     * @return A string message.
     */
    private String getMeetingErrorMessage(int errorCode) {

        StringBuilder message = new StringBuilder();

        switch(errorCode) {
            case MeetingError.MEETING_ERROR_CLIENT_INCOMPATIBLE:
                message.append("Zoom SDK version is too low to connect to the meeting");
                break;
            case MeetingError.MEETING_ERROR_DISALLOW_HOST_RESGISTER_WEBINAR:
                message.append("Cannot register a webinar using the host email");
                break;
            case MeetingError.MEETING_ERROR_DISALLOW_PANELIST_REGISTER_WEBINAR:
                message.append("Cannot register a webinar using a panelist's email");
                break;
            case MeetingError.MEETING_ERROR_EXIT_WHEN_WAITING_HOST_START:
                message.append("User leave meeting when waiting host to start");
                break;
            case MeetingError.MEETING_ERROR_HOST_DENY_EMAIL_REGISTER_WEBINAR:
                message.append("The register to this webinar is denied by the host");
                break;
            case MeetingError.MEETING_ERROR_INCORRECT_MEETING_NUMBER:
                message.append("Incorrect meeting number");
                break;
            case MeetingError.MEETING_ERROR_INVALID_ARGUMENTS:
                message.append("Failed due to one or more invalid arguments.");
                break;
            case MeetingError.MEETING_ERROR_INVALID_STATUS:
                message.append("Meeting api can not be called now.");
                break;
            case MeetingError.MEETING_ERROR_LOCKED:
                message.append("Meeting is locked");
                break;
            case MeetingError.MEETING_ERROR_MEETING_NOT_EXIST:
                message.append("Meeting dose not exist");
                break;
            case MeetingError.MEETING_ERROR_MEETING_OVER:
                message.append("Meeting ended");
                break;
            case MeetingError.MEETING_ERROR_MMR_ERROR:
                message.append("Server error");
                break;
            case MeetingError.MEETING_ERROR_NETWORK_ERROR:
                message.append("Network error");
                break;
            case MeetingError.MEETING_ERROR_NETWORK_UNAVAILABLE:
                message.append("Network unavailable");
                break;
            case MeetingError.MEETING_ERROR_NO_MMR:
                message.append("No server is available for this meeting");
                break;
            case MeetingError.MEETING_ERROR_REGISTER_WEBINAR_FULL:
                message.append("Arrive maximum registers to this webinar");
                break;
            case MeetingError.MEETING_ERROR_RESTRICTED:
                message.append("Meeting is restricted");
                break;
            case MeetingError.MEETING_ERROR_RESTRICTED_JBH:
                message.append("Join this meeting before host is restricted");
                break;
            case MeetingError.MEETING_ERROR_SESSION_ERROR:
                message.append("Session error");
                break;
            case MeetingError.MEETING_ERROR_SUCCESS:
                message.append("Success");
                break;
            case MeetingError.MEETING_ERROR_TIMEOUT:
                message.append("Timeout");
                break;
            case MeetingError.MEETING_ERROR_UNKNOWN:
                message.append("Unknown error");
                break;
            case MeetingError.MEETING_ERROR_USER_FULL:
                message.append("Number of participants is full.");
                break;
            case MeetingError.MEETING_ERROR_WEB_SERVICE_FAILED:
                message.append("Request to web service failed.");
                break;
            case MeetingError.MEETING_ERROR_WEBINAR_ENFORCE_LOGIN:
                message.append("This webinar requires participants to login.");
                break;
            default:
                break;
        }

        if (DEBUG) {
            Timber.d("******getMeetingErrorMessage*********" + message.toString());
        }
        return message.toString();
    }

    @Override
    public void onMeetingLeaveComplete(long l) {
        try {
            String event = String.format("javascript:cordova.plugins.Zoom.fireMeetingLeftEvent()");
            webView.loadUrl(event);
            InMeetingService inMeetingService = ZoomSDK.getInstance().getInMeetingService();
            // Unregister Event Listener for this call
            inMeetingService.removeListener(this);
        } catch (Exception e) {
            Timber.d(e.getMessage());
        }

        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_MEETING_NUMBER, l);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_MEETING_LEAVE_COMPLETE, eventData);
    }

    @Override
    public void onMeetingNeedPasswordOrDisplayName(boolean b, boolean b1, InMeetingEventHandler inMeetingEventHandler) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_NEEDS_PASSWORD, b);
            eventData.put(DATA_KEY_NEEDS_DISPLAY_NAME, b1);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_MEETING_NEEDS_PASSWORD_OR_DISPLAY_NAME, eventData);
    }

    @Override
    public void onWebinarNeedRegister(String s) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_VALUE, s);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_WEBINAR_NEEDS_REGISTER, eventData);
    }

    //@Override
    public void onWebinarNeedRegister() {}

    @Override
    public void onJoinWebinarNeedUserNameAndEmail(InMeetingEventHandler inMeetingEventHandler) {
        emitSharedJsEvent(EVENT_TYPE_WEBINAR_NEEDS_USER_NAME_AND_EMAIL, null);
    }

    @Override
    public void onMeetingNeedCloseOtherMeeting(InMeetingEventHandler inMeetingEventHandler) {
        emitSharedJsEvent(EVENT_TYPE_MEETING_NEEDS_TO_CLOSE_OTHER_MEETING, null);
    }

    //@Override
    public void onMeetingNeedColseOtherMeeting(InMeetingEventHandler inMeetingEventHandler) {}

    @Override
    public void onMeetingFail(int i, int i1) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_ERROR_CODE, i);
            eventData.put(DATA_KEY_INTERNAL_ERROR_CODE, i1);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_MEETING_FAIL, eventData);
    }

    @Override
    public void onMeetingUserJoin(List<Long> list) {
        ZoomUIService zoomUIService =  ZoomSDK.getInstance().getZoomUIService();
        InMeetingService meetingService = ZoomSDK.getInstance().getInMeetingService();
        List<Long> currentUserList = meetingService.getInMeetingUserList();

        if (currentUserList != null && currentUserList.size() >= ZOOM_UI_AUTO_CHANGE_FROM_USER_COUNT) {
            zoomUIService.switchToVideoWall(); // gallery view
        } else {
            zoomUIService.switchToActiveSpeaker(); // switch to speaker view
        }

        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_CURRENT_USER_LIST, new JSONArray(currentUserList));
            eventData.put(DATA_KEY_CHANGED_USER_LIST, new JSONArray(list));
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_MEETING_USER_JOIN, eventData);
    }

    @Override
    public void onMeetingUserLeave(List<Long> list) {
        ZoomUIService zoomUIService =  ZoomSDK.getInstance().getZoomUIService();
        InMeetingService meetingService = ZoomSDK.getInstance().getInMeetingService();
        List<Long> currentUserList = meetingService.getInMeetingUserList();

        if (currentUserList !=null && currentUserList.size() < ZOOM_UI_AUTO_CHANGE_FROM_USER_COUNT) {
            zoomUIService.switchToActiveSpeaker();
        } else {
            zoomUIService.switchToVideoWall();
        }

        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_CURRENT_USER_LIST, new JSONArray(currentUserList));
            eventData.put(DATA_KEY_CHANGED_USER_LIST, new JSONArray(list));
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_MEETING_USER_LEAVE, eventData);
    }

    @Override
    public void onMeetingUserUpdated(long l) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_USER_ID, l);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_MEETING_USER_UPDATED, eventData);
    }

    @Override
    public void onInMeetingUserAvatarPathUpdated(long l) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_USER_ID, l);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_IN_MEETING_USER_AVATAR_PATH_UPDATED, eventData);
    }

    @Override
    public void onMeetingHostChanged(long l) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_USER_ID, l);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_MEETING_HOST_CHANGED, eventData);
    }

    @Override
    public void onMeetingCoHostChanged(long l) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_USER_ID, l);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_MEETING_CO_HOST_CHANGED, eventData);
    }

    @Override
    public void onMeetingCoHostChange(long l, boolean b) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_USER_ID, l);
            eventData.put(DATA_KEY_VALUE, b);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_MEETING_CO_HOST_CHANGED, eventData);
    }

    @Override
    public void onActiveVideoUserChanged(long var1) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_USER_ID, var1);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_ACTIVE_VIDEO_USER_CHANGED, eventData);
    }

    @Override
    public void onActiveSpeakerVideoUserChanged(long var1) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_USER_ID, var1);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_ACTIVE_SPEAKER_VIDEO_USER_CHANGED, eventData);
    }

    @Override
    public void onHostVideoOrderUpdated(List<Long> list) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_CHANGED_USER_LIST, new JSONArray(list));
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_HOST_VIDEO_ORDER_UPDATED, eventData);
    }

    @Override
    public void onFollowHostVideoOrderChanged(boolean b) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_VALUE, b);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_FOLLOW_HOST_VIDEO_ORDER_CHANGED, eventData);
    }

    @Override
    public void onSpotlightVideoChanged(boolean b) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_VALUE, b);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_SPOTLIGHT_VIDEO_CHANGED, eventData);
    }

    @Override
    public void onSpotlightVideoChanged(List<Long> list) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_CHANGED_USER_LIST, new JSONArray(list));
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_SPOTLIGHT_VIDEO_CHANGED, eventData);
    }

    @Override
    public void onUserVideoStatusChanged(long l, VideoStatus videoStatus) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_USER_ID, l);
            eventData.put(DATA_KEY_STATUS, videoStatus.toString());
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_USER_VIDEO_STATUS_CHANGED, eventData);
    }

    //@Override
    public void onUserVideoStatusChanged(long l) {}

    @Override
    public void onMicrophoneStatusError(InMeetingAudioController.MobileRTCMicrophoneError mobileRTCMicrophoneError) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_ERROR, mobileRTCMicrophoneError.toString());
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_MICROPHONE_STATUS_ERROR, eventData);
    }

    @Override
    public void onUserAudioStatusChanged(long l, AudioStatus audioStatus) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_USER_ID, l);
            eventData.put(DATA_KEY_STATUS, audioStatus.toString());
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_USER_AUDIO_STATUS_CHANGED, eventData);
    }

    //@Override
    public void onUserAudioStatusChanged(long l) {
    }

    @Override
    public void onUserAudioTypeChanged(long l) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_VALUE, l);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_USER_AUDIO_TYPE_CHANGED, eventData);
    }

    @Override
    public void onMyAudioSourceTypeChanged(int i) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_VALUE, i);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_MY_AUDIO_SOURCE_TYPE_CHANGED, eventData);
    }

    @Override
    public void onLowOrRaiseHandStatusChanged(long l, boolean b) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_USER_ID, l);
            eventData.put(DATA_KEY_VALUE, b);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_LOW_OR_RAISE_HAND_STATUS_CHANGED, eventData);
    }

    //@Override
    public void onMeetingSecureKeyNotification(byte[] bytes) {}

    @Override
    public void onChatMessageReceived(InMeetingChatMessage inMeetingChatMessage) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_USER_ID, inMeetingChatMessage.getSenderUserId());
            eventData.put(DATA_KEY_VALUE, inMeetingChatMessage.getContent());
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_CHAT_MESSAGE_RECEIVED, eventData);
    }

    @Override
    public void onChatMsgDeleteNotification(String s, ChatMessageDeleteType chatMessageDeleteType) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_VALUE, s);
            eventData.put(DATA_KEY_TYPE, chatMessageDeleteType.toString());
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_CHAT_MESSAGE_DELETE_NOTIFICATION, eventData);
    }

    @Override
    public void onUserNetworkQualityChanged(long userId) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_USER_ID, userId);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_USER_NETWORK_QUALITY_CHANGED, eventData);
    }

    @Override
    public void onSinkMeetingVideoQualityChanged(VideoQuality videoQuality, long l) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_USER_ID, l);
            eventData.put(DATA_KEY_VIDEO_QUALITY, videoQuality.toString());
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_SINK_MEETING_VIDEO_QUALITY_CHANGED, eventData);
    }

    @Override
    public void onHostAskUnMute(long userId) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_USER_ID, userId);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_HOST_ASK_UN_MUTE, eventData);
    }

    @Override
    public void onHostAskStartVideo(long userId) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_USER_ID, userId);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_HOST_ASK_START_VIDEO, eventData);
    }

    @Override
    public void onSilentModeChanged(boolean inSilentMode) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_IN_SILENT_MODE, inSilentMode);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_SILENT_MODE_CHANGED, eventData);
    }

    @Override
    public void onFreeMeetingReminder(boolean isOriginalHost, boolean canUpgrade, boolean isFirstGift) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_IS_ORIGINAL_HOST, isOriginalHost);
            eventData.put(DATA_KEY_CAN_UPGRADE, canUpgrade);
            eventData.put(DATA_KEY_IS_FIRST_GIFT, isFirstGift);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_FREE_MEETING_REMINDER, eventData);
    }

    @Override
    public void onMeetingActiveVideo(long userId) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_USER_ID, userId);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_MEETING_ACTIVE_VIDEO, eventData);
    }

    @Override
    public void onSinkAttendeeChatPriviledgeChanged(int privilege) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_PRIVILEGE, privilege);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_SINK_ATTENDEE_CHAT_PRIVILEGE_CHANGED, eventData);
    }

    @Override
    public void onSinkAllowAttendeeChatNotification(int privilege) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_PRIVILEGE, privilege);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_SINK_ALLOW_ATTENDEE_CHAT_NOTIFICATION, eventData);
    }

    @Override
    public void onSinkPanelistChatPrivilegeChanged(
        InMeetingChatController.MobileRTCWebinarPanelistChatPrivilege mobileRTCWebinarPanelistChatPrivilege
    ) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_PRIVILEGE, mobileRTCWebinarPanelistChatPrivilege.toString());
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_SINK_PANELIST_CHAT_PRIVILEGE_CHANGED, eventData);
    }

    @Override
    public void onUserNameChanged(long l, String s) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_USER_ID, l);
            eventData.put(DATA_KEY_VALUE, s);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_USER_NAME_CHANGED, eventData);
    }

    @Override
    public void onUserNamesChanged(List<Long> list) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_CHANGED_USER_LIST, new JSONArray(list));
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_USER_NAMES_CHANGED, eventData);
    }

    @Override
    public void onFreeMeetingNeedToUpgrade(FreeMeetingNeedUpgradeType freeMeetingNeedUpgradeType, String s) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_TYPE, freeMeetingNeedUpgradeType.toString());
            eventData.put(DATA_KEY_VALUE, s);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_FREE_MEETING_NEED_TO_UPGRADE, eventData);
    }

    @Override
    public void onFreeMeetingUpgradeToGiftFreeTrialStart() {
        emitSharedJsEvent(EVENT_TYPE_FREE_MEETING_UPGRADE_TO_GIFT_FREE_TRIAL_START, null);
    }

    @Override
    public void onFreeMeetingUpgradeToGiftFreeTrialStop() {
        emitSharedJsEvent(EVENT_TYPE_FREE_MEETING_UPGRADE_TO_GIFT_FREE_TRIAL_STOP, null);
    }

    @Override
    public void onFreeMeetingUpgradeToProMeeting() {
        emitSharedJsEvent(EVENT_TYPE_FREE_MEETING_UPGRADE_TO_PRO_MEETING, null);
    }

    @Override
    public void onClosedCaptionReceived(String s, long l) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_USER_ID, l);
            eventData.put(DATA_KEY_VALUE, s);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_CLOSED_CAPTION_RECEIVED, eventData);
    }

    @Override
    public void onRecordingStatus(RecordingStatus recordingStatus) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_RECORDING_STATUS, recordingStatus.toString());
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_RECORDING_STATUS, eventData);
    }

    @Override
    public void onLocalRecordingStatus(long l, RecordingStatus recordingStatus) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_RECORDING_STATUS, recordingStatus.toString());
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_LOCAL_RECORDING_STATUS, eventData);
    }

    @Override
    public void onInvalidReclaimHostkey() {
        emitSharedJsEvent(EVENT_TYPE_INVALID_RECLAIM_HOST_KEY, null);
    }

    @Override
    public void onPermissionRequested(String[] strings) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_PERMISSIONS, new JSONArray(strings));
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_PERMISSION_REQUESTED, eventData);
    }

    @Override
    public void onAllHandsLowered() {
        emitSharedJsEvent(EVENT_TYPE_ALL_HANDS_LOWERED, null);
    }

    @Override
    public void onLocalVideoOrderUpdated(List<Long> list) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_CHANGED_USER_LIST, new JSONArray(list));
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_LOCAL_VIDEO_ORDER_UPDATED, eventData);
    }

    @Override
    public void onLocalRecordingPrivilegeRequested(
        IRequestLocalRecordingPrivilegeHandler iRequestLocalRecordingPrivilegeHandler
    ) {
        JSONObject eventData = new JSONObject();
        try {
            long userId = iRequestLocalRecordingPrivilegeHandler.getRequesterId();
            eventData.put(DATA_KEY_USER_ID, userId);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_LOCAL_RECORDING_PRIVILEGE_REQUESTED, eventData);
    }

    @Override
    public void onSuspendParticipantsActivities() {
        emitSharedJsEvent(EVENT_TYPE_SUSPEND_PARTICIPANTS_ACTIVITIES, null);
    }

    @Override
    public void onAllowParticipantsStartVideoNotification(boolean b) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_ENABLED, b);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_ALLOW_PARTICIPANTS_START_VIDEO_NOTIFICATION, eventData);
    }

    @Override
    public void onAllowParticipantsRenameNotification(boolean b) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_ENABLED, b);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_ALLOW_PARTICIPANTS_RENAME_NOTIFICATION, eventData);
    }

    @Override
    public void onAllowParticipantsUnmuteSelfNotification(boolean b) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_ENABLED, b);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_ALLOW_PARTICIPANTS_UN_MUTE_SELF_NOTIFICATION, eventData);
    }

    @Override
    public void onAllowParticipantsShareWhiteBoardNotification(boolean b) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_ENABLED, b);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_ALLOW_PARTICIPANTS_SHARE_WHITE_BOARD_NOTIFICATION, eventData);
    }

    @Override
    public void onMeetingLockStatus(boolean b) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_LOCKED, b);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_MEETING_LOCK_STATUS, eventData);
    }

    @Override
    public void onRequestLocalRecordingPrivilegeChanged(
        LocalRecordingRequestPrivilegeStatus localRecordingRequestPrivilegeStatus
    ) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_PRIVILEGE_STATUS, localRecordingRequestPrivilegeStatus.toString());
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_REQUEST_LOCAL_RECORDING_PRIVILEGE_CHANGED, eventData);
    }

    @Override
    public void onAICompanionActiveChangeNotice(boolean b) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_ENABLED, b);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_AI_COMPANION_ACTIVE_CHANGE_NOTICE, eventData);
    }

    @Override
    public void onParticipantProfilePictureStatusChange(boolean b) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_ENABLED, b);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_PARTICIPANT_PROFILE_PICTURE_STATUS_CHANGE, eventData);
    }

    @Override
    public void onCloudRecordingStorageFull(long l) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_USER_ID, l);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_CLOUD_RECORDING_STORAGE_FULL, eventData);
    }

    @Override
    public void onUVCCameraStatusChange(String s, UVCCameraStatus uvcCameraStatus) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_MESSAGE, s);
            eventData.put(DATA_KEY_UVC_CAMERA_STATUS, uvcCameraStatus.toString());
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_UVC_CAMERA_STATUS_CHANGE, eventData);
    }

    @Override
    public void onFocusModeStateChanged(boolean b) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_ENABLED, b);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_FOCUS_MODE_STATE_CHANGED, eventData);
    }

    @Override
    public void onFocusModeShareTypeChanged(MobileRTCFocusModeShareType mobileRTCFocusModeShareType) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_FOCUS_MODE_SHARE_TYPE, mobileRTCFocusModeShareType.toString());
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_FOCUS_MODE_SHARE_TYPE_CHANGED, eventData);
    }

    @Override
    public void onVideoAlphaChannelStatusChanged(boolean b) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_ENABLED, b);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_VIDEO_ALPHA_CHANNEL_STATUS_CHANGED, eventData);
    }

    @Override
    public void onAllowParticipantsRequestCloudRecording(boolean b) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_ENABLED, b);
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_ALLOW_PARTICIPANT_REQUEST_CLOUD_RECORDING, eventData);
    }

    @Override
    public void onNotificationServiceStatus(
        SDKNotificationServiceStatus sdkNotificationServiceStatus,
        SDKNotificationServiceError sdkNotificationServiceError
    ) {
        JSONObject eventData = new JSONObject();
        try {
            eventData.put(DATA_KEY_STATUS, sdkNotificationServiceStatus.toString());
            eventData.put(DATA_KEY_ERROR, sdkNotificationServiceError.toString());
        } catch (JSONException ignored) {
        }

        emitSharedJsEvent(EVENT_TYPE_NOTIFICATION_SERVICE_STATUS, eventData);
    }
}
