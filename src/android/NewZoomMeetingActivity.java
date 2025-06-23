package cordova.plugin.zoom;

import static cordova.plugin.zoom.Zoom.ACTION_CALL_DECLINED_BY_PARTICIPANT;
import static cordova.plugin.zoom.Zoom.ACTION_CALL_IGNORED_BY_PARTICIPANT;
import static cordova.plugin.zoom.Zoom.ACTION_PARTICIPANTS_LEFT_THE_CALL;

import android.app.Activity;
import android.app.Application;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.view.LayoutInflater;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.widget.Button;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.LinearLayout;

import androidx.annotation.NonNull;

import java.util.List;

import timber.log.Timber;
import us.zoom.sdk.CustomizedMiniMeetingViewSize;
import us.zoom.sdk.InMeetingService;
import us.zoom.sdk.MeetingService;
import us.zoom.sdk.NewMeetingActivity;
import us.zoom.sdk.ZoomSDK;
import us.zoom.sdk.ZoomUIService;

public class NewZoomMeetingActivity extends NewMeetingActivity {

    private Context cordovaContext;
    private static LinearLayout userWaitingLayout;
    private static FrameLayout containerInConf;

    private final CustomActivityLifecycleCallbacks mCallbacks = new CustomActivityLifecycleCallbacks();

    public class CustomActivityLifecycleCallbacks implements Application.ActivityLifecycleCallbacks {

        @Override
        public void onActivityCreated(Activity activity, Bundle savedInstanceState) {
            Timber.i("onCreate(): %s", activity.getClass().getSimpleName());
        }

        @Override
        public void onActivityStarted(Activity activity) {
            Timber.i("onStart(): %s", activity.getClass().getSimpleName());
        }

        @Override
        public void onActivityResumed(Activity activity) {
            Timber.i("onResume(): %s", activity.getClass().getSimpleName());
        }

        @Override
        public void onActivityPaused(Activity activity) {
            Timber.i("onPause(): %s", activity.getClass().getSimpleName());
        }

        @Override
        public void onActivitySaveInstanceState(Activity activity, @NonNull Bundle outState) {
            Timber.i("onSaveInstanceState(): %s", activity.getClass().getSimpleName());
        }

        @Override
        public void onActivityStopped(Activity activity) {
            Timber.i("onStop(): %s", activity.getClass().getSimpleName());
        }

        @Override
        public void onActivityDestroyed(Activity activity) {
            Timber.i("onDestroy(): %s", activity.getClass().getSimpleName());
            // ZmConfPipActivity (PiP mode zoom SDK's activity
            // We dont have callbacks from Zoom SDK when PiP mode is exited/destroyed. Thus we listen to this event and show the maximised view of the zoom call
            if (activity.getClass().getSimpleName().contains("ZmConfPipActivity")) {
                InMeetingService inMeetingService = ZoomSDK.getInstance().getInMeetingService();
                if (inMeetingService.isMeetingConnected()) {
                    String activityToStart = "cordova.plugin.zoom.NewZoomMeetingActivity";
                    Timber.d("Ongoing zoom call, next activity to start %s", activityToStart);
                    try {
                        Class<?> c = Class.forName(activityToStart);
                        Intent intent = new Intent(NewZoomMeetingActivity.this, c);
                        intent.addFlags(Intent.FLAG_ACTIVITY_REORDER_TO_FRONT);
                        startActivity(intent);
                    } catch (ClassNotFoundException e) {
                        Timber.e(e, "Unable to start");
                    }
                }
            }
        }
    }


    @Override
    public void onCreate(Bundle savedInstanceState) {
        // Always register before calling into the super class.
        getApplication().registerActivityLifecycleCallbacks(mCallbacks);
        super.onCreate(savedInstanceState);
        cordovaContext = Zoom.getInstance().cordova.getContext();

        Timber.d("NewZoomMeetingActivity oncreate " + this + " cordova context " + cordovaContext);
        String appResourcesPackage = getPackageName();

        /**
         * Handled Zoom Default UI back button "<" to provide minimise behaviour when pressing back. In the current zoom code,
         * this was closing our app. We wanted to minimise the call and continue using our app simultaneously
         */
        ImageView back = findViewById(getResources().getIdentifier("imgMinimize", "id", appResourcesPackage));//(ImageView) findViewById(R.id.imgMinimize);
        back.setOnClickListener(view -> minimizeZoomCall());

        /**
         * Handled Zoom Default UI Leave button to leave the call and launch our main activity. With some zoom issues, sometimes
         * main activity was not launched and it was ending the application.
         */
        Button btnLeave = findViewById(getResources().getIdentifier("btnLeave", "id", appResourcesPackage));// R.id.btnLeave);
        btnLeave.setOnClickListener(view -> endMeetingAndMoveToActivity());

        LayoutInflater li = LayoutInflater.from(this);
        userWaitingLayout = (LinearLayout) li.inflate(getResources().getIdentifier("zoom_user_waiting_layout", "layout", appResourcesPackage), null, false);
        containerInConf = findViewById(getResources().getIdentifier("container_in_conf", "id", appResourcesPackage));

    }

    public static void enableWaitingMessage(boolean show) {
        if (show) {
            /*
            was sometimes getting this error here
            'The specified child already has a parent. You must call removeView() on the child's parent first.'
            possibly causing app crash? checking parent before adding to view
            */
            if (userWaitingLayout.getParent() != null) {
                ViewParent parent = userWaitingLayout.getParent();
                ((ViewGroup) parent).removeView(userWaitingLayout);
            }
            containerInConf.addView(userWaitingLayout);
        } else {
            containerInConf.removeView(userWaitingLayout);
        }
    }

    @Override
    public void onDestroy() {
        Timber.d("NewZoomMeetingActivity on destroy %s", this);
        super.onDestroy();
        cordovaContext = null;
        // Always unregister after calling into the super class.
        getApplication().unregisterActivityLifecycleCallbacks(mCallbacks);
    }

    @Override
    protected void onPause() {
        Timber.d("Zoom on pause %s", this);
        super.onPause();
    }

    @Override
    protected void onResume() {
        Timber.d("Zoom on resume %s", this);
        super.onResume();
    }

    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        Timber.d("NewZoomMeetingActivity onNewIntent");
        if (intent != null && intent.getExtras() != null) {
            Timber.d("Intent NextAction: %s", intent.getExtras().get("NextAction"));
            Handler mainHandler = new Handler(Looper.getMainLooper());
            mainHandler.post(() -> {
                int nextAction = intent.getExtras().getInt("NextAction");
                switch (nextAction) {
                    case ACTION_CALL_DECLINED_BY_PARTICIPANT:
                        Timber.d("Action -> Call declined by participant");
                        Zoom.getInstance().showMessageDialog(ACTION_CALL_DECLINED_BY_PARTICIPANT);
                        Zoom.declinedCallId = null; // handled the call declined notification
                        break;

                    case ACTION_CALL_IGNORED_BY_PARTICIPANT:
                        Timber.d("Action -> Call ignored by participant");
                        InMeetingService meetingService = ZoomSDK.getInstance().getInMeetingService();
                        List<Long> currentUserList = meetingService.getInMeetingUserList();
                        if (meetingService != null && currentUserList != null && currentUserList.size() <= 1) {
                            Zoom.getInstance().showMessageDialog(ACTION_CALL_IGNORED_BY_PARTICIPANT); // inform user that call was ignored/missed by the other participant
                        }
                        break;

                    case ACTION_PARTICIPANTS_LEFT_THE_CALL:
                        Timber.d("Action -> Participant left the call");
                        Zoom.getInstance().leaveMeeting();
                        break;

                    default:
                        Timber.d("Default case onNewIntent Zoom");
                        break;
                }
            });
        }
    }

    @Override
    public void finish() {
        Timber.d("Zoom on finish %s", this);
        super.finish();
    }

    @Override
    public void onBackPressed() {
        Timber.d("Zoom Back Pressed %s", this);
        minimizeZoomCall();
    }

    @Override
    public void onHomePressed() {
        super.onHomePressed();
        minimizeZoomCall();
    }

    private void minimizeZoomCall() {
        Timber.d("Minimize zoom call %s", this);
        ZoomUIService zoomUIService = ZoomSDK.getInstance().getZoomUIService();
        ZoomSDK.getInstance().getZoomUIService().setMiniMeetingViewSize(new CustomizedMiniMeetingViewSize(50, 50, 90, 120));
        zoomUIService.showMiniMeetingWindow();
        startMainActivity();
    }

    private void endMeetingAndMoveToActivity() {
        Timber.d("End zoom call and start main activity %s", Zoom.getInstance());
        if (Zoom.getInstance() != null) {
            Zoom.getInstance().leaveMeeting();
        } else { // app was minimised and app instance is no more thus handling this within this instance and re-launching the main activity
            Timber.d("Started new activity instance as app instance was not found");
            ZoomUIService zoomUIService = ZoomSDK.getInstance().getZoomUIService();
            if (zoomUIService != null) {
                Timber.d("endMeetingAndMoveToActivity : hiding mini meeting window");
                zoomUIService.hideMiniMeetingWindow();
            }
            MeetingService meetingService = ZoomSDK.getInstance().getMeetingService();
            if (meetingService != null) {
                Timber.d("endMeetingAndMoveToActivity : leaving current meeting");
                meetingService.leaveCurrentMeeting(true);
            }
            startMainActivity();
        }
    }

    private void startMainActivity() {
        String activityToStart = getPackageName() + ".MainActivity";
        Timber.d("Start MainActivity %s", activityToStart);
        try {
            Class<?> c = Class.forName(activityToStart);
            Timber.tag("NewZoomMeetingActivity").d("Zoom instance when launching MainActivity %s", Zoom.getInstance());
            Intent intent = new Intent(cordovaContext, c);
            intent.addFlags(Intent.FLAG_ACTIVITY_REORDER_TO_FRONT);
            startActivity(intent);
        } catch (ClassNotFoundException e) {
            Timber.e(e, "unable to start");
        }
    }

}
