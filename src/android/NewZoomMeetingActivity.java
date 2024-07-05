package cordova.plugin.zoom;

import android.app.Activity;
import android.app.Application;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.Button;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.LinearLayout;

import timber.log.Timber;
import us.zoom.sdk.CustomizedMiniMeetingViewSize;
import us.zoom.sdk.InMeetingService;
import us.zoom.sdk.MeetingService;
import us.zoom.sdk.NewMeetingActivity;
import us.zoom.sdk.ZoomSDK;
import us.zoom.sdk.ZoomUIService;

public class NewZoomMeetingActivity extends NewMeetingActivity {

    private String appResourcesPackage;

    private Context cordovaContext;
    private static LinearLayout userWaitingLayout;
    private static FrameLayout containerInConf;

    private final CustomActivityLifecycleCallbacks mCallbacks = new CustomActivityLifecycleCallbacks();

    public class CustomActivityLifecycleCallbacks implements Application.ActivityLifecycleCallbacks {

        @Override
        public void onActivityCreated(Activity activity, Bundle savedInstanceState) {
            Timber.i("onCreate(): " + activity.getClass().getSimpleName());
        }

        @Override
        public void onActivityStarted(Activity activity) {
            Timber.i("onStart(): " + activity.getClass().getSimpleName());
        }

        @Override
        public void onActivityResumed(Activity activity) {
            Timber.i("onResume(): " + activity.getClass().getSimpleName());
        }

        @Override
        public void onActivityPaused(Activity activity) {
            Timber.i("onPause(): " + activity.getClass().getSimpleName());
        }

        @Override
        public void onActivitySaveInstanceState(Activity activity, Bundle outState) {
            Timber.i("onSaveInstanceState(): " + activity.getClass().getSimpleName());
        }

        @Override
        public void onActivityStopped(Activity activity) {
            Timber.i("onStop(): " + activity.getClass().getSimpleName());
        }

        @Override
        public void onActivityDestroyed(Activity activity) {
            Timber.i("onDestroy(): " + activity.getClass().getSimpleName());
            // ZmConfPipActivity (PiP mode zoom SDK's activity
            // We dont have callbacks from Zoom SDK when PiP mode is exited/destroyed. Thus we listen to this event and show the maximised view of the zoom call
            if (activity.getClass().getSimpleName().contains("ZmConfPipActivity")) {
                InMeetingService inMeetingService = ZoomSDK.getInstance().getInMeetingService();
                if (inMeetingService.isMeetingConnected()) {
                    String activityToStart = "cordova.plugin.zoom.NewZoomMeetingActivity";
                    Timber.d("Ongoing zoom call, next activity to start " + activityToStart);
                    try {
                        Class<?> c = Class.forName(activityToStart);
                        Intent intent = new Intent(NewZoomMeetingActivity.this, c);
                        intent.addFlags(Intent.FLAG_ACTIVITY_REORDER_TO_FRONT);
                        startActivity(intent);
                    } catch (ClassNotFoundException ignored) {
                        Timber.e("Unable to start " + ignored);
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
        appResourcesPackage = getPackageName();

        /**
         * Handled Zoom Default UI back button "<" to provide minimise behaviour when pressing back. In the current zoom code,
         * this was closing our app. We wanted to minimise the call and continue using our app simultaneously
         */
        ImageView back = (ImageView) findViewById(getResources().getIdentifier("imgMinimize", "id", appResourcesPackage));//(ImageView) findViewById(R.id.imgMinimize);
        back.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                minimizeZoomCall();
            }
        });

        /**
         * Handled Zoom Default UI Leave button to leave the call and launch our main activity. With some zoom issues, sometimes
         * main activity was not launched and it was ending the application.
         */
        Button btnLeave = (Button) findViewById(getResources().getIdentifier("btnLeave", "id", appResourcesPackage));// R.id.btnLeave);
        btnLeave.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                endMeetingAndMoveToActivity();
            }
        });

        LayoutInflater li = LayoutInflater.from(this);
        userWaitingLayout = (LinearLayout) li.inflate(getResources().getIdentifier("zoom_user_waiting_layout", "layout", appResourcesPackage), null, false);
        containerInConf = (FrameLayout) findViewById(getResources().getIdentifier("container_in_conf", "id", appResourcesPackage));

    }

    public static void enableWaitingMessage(boolean show) {
        if (show) {
            containerInConf.addView(userWaitingLayout);
        } else {
            containerInConf.removeView(userWaitingLayout);
        }
    }

    @Override
    public void onDestroy() {
        Timber.d("NewZoomMeetingActivity on destroy " + this);
        super.onDestroy();
        cordovaContext = null;
        // Always unregister after calling into the super class.
        getApplication().unregisterActivityLifecycleCallbacks(mCallbacks);
    }

    @Override
    protected void onPause() {
        Timber.d("Zoom on pause " + this);
        super.onPause();
    }

    @Override
    protected void onResume() {
        Timber.d("Zoom on resume " + this);
        super.onResume();
    }

    @Override
    public void finish() {
        Timber.d("Zoom on finish " + this);
        super.finish();
    }

    @Override
    public void onBackPressed() {
        Timber.d("Zoom BAck Pressed " + this);
        minimizeZoomCall();
    }

    private void minimizeZoomCall() {
        startMainActivity();
        ZoomUIService zoomUIService = ZoomSDK.getInstance().getZoomUIService();
        ZoomSDK.getInstance().getZoomUIService().setMiniMeetingViewSize(new CustomizedMiniMeetingViewSize(50, 50, 90, 120));
        zoomUIService.showMiniMeetingWindow();
    }

    private void endMeetingAndMoveToActivity() {
        Timber.d("End zoom call and start main activity " + Zoom.getInstance());
        if (Zoom.getInstance() != null) {
            Zoom.getInstance().leaveMeeting();
        } else { // app was minimised and app instance is no more thus handling this within this instance and re-launching the main activity
            Timber.d("Started new activity instance as app instance was not found");
            ZoomUIService zoomUIService = ZoomSDK.getInstance().getZoomUIService();
            zoomUIService.hideMiniMeetingWindow();
            MeetingService meetingService = ZoomSDK.getInstance().getMeetingService();
            meetingService.leaveCurrentMeeting(true);
            startMainActivity();
        }
    }

    private void startMainActivity() {
        String activityToStart = getPackageName() + ".MainActivity";
        Timber.d("Start MainActivity " + activityToStart);
        try {
            Class<?> c = Class.forName(activityToStart);
            Log.d("NewZoomMeetingActivity", "Zoom instance when launching MainActivity " + Zoom.getInstance());
            Intent intent = new Intent(cordovaContext, c);
            intent.addFlags(Intent.FLAG_ACTIVITY_REORDER_TO_FRONT);
            startActivity(intent);
        } catch (ClassNotFoundException ignored) {
            Timber.e("unable to start " + ignored);
        }
    }

}



