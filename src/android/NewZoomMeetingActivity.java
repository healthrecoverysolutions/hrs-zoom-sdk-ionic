package cordova.plugin.zoom;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;

import us.zoom.sdk.CustomizedMiniMeetingViewSize;
import us.zoom.sdk.MeetingService;
import us.zoom.sdk.NewMeetingActivity;
import us.zoom.sdk.ZoomSDK;
import us.zoom.sdk.ZoomUIService;

import timber.log.Timber;

public class NewZoomMeetingActivity extends NewMeetingActivity {

    private String appResourcesPackage = getPackageName();

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Timber.d("NewZoomMeetingActivity oncreate " + this);
        appResourcesPackage = getPackageName();

        Zoom pluginRef = Zoom.getInstance();
        if (pluginRef != null) {
            pluginRef.onZoomMeetingActivityCreate(this);
        }

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
    }

    @Override
    public void onDestroy() {
        Timber.d("NewZoomMeetingActivity on destroy " + this);
        super.onDestroy();

        Zoom pluginRef = Zoom.getInstance();
        if (pluginRef != null) {
            pluginRef.onZoomMeetingActivityDestroy(this);
        }
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

    public void minimizeZoomCall() {
        startMainActivity();
        ZoomUIService zoomUIService = ZoomSDK.getInstance().getZoomUIService();
        ZoomSDK.getInstance().getZoomUIService().setMiniMeetingViewSize(new CustomizedMiniMeetingViewSize(50, 50, 90, 120));
        boolean minimized = zoomUIService.showMiniMeetingWindow();

        Zoom pluginRef = Zoom.getInstance();
        if (pluginRef != null) {
            pluginRef.onZoomMeetingActivityPictureInPictureModeChange(minimized);
        }
    }

    public void maximizeZoomCall() {
        // https://stackoverflow.com/a/43288507
        moveTaskToBack(false);
        Intent intent = new Intent(NewZoomMeetingActivity.this, NewZoomMeetingActivity.class);
        intent.setFlags(Intent.FLAG_ACTIVITY_REORDER_TO_FRONT);
        startActivity(intent);

        ZoomSDK sdk = ZoomSDK.getInstance();
        ZoomUIService zoomUIService = sdk.getZoomUIService();
        zoomUIService.hideMiniMeetingWindow();

        Zoom pluginRef = Zoom.getInstance();
        if (pluginRef != null) {
            pluginRef.onZoomMeetingActivityPictureInPictureModeChange(false);
        }
    }

    private void endMeetingAndMoveToActivity() {
        Timber.d("end zoom call and start main activity");
        ZoomUIService zoomUIService = ZoomSDK.getInstance().getZoomUIService();
        zoomUIService.hideMiniMeetingWindow();
        MeetingService meetingService = ZoomSDK.getInstance().getMeetingService();
        meetingService.leaveCurrentMeeting(true);
        startMainActivity();
    }

    private void startMainActivity() {
        String activityToStart = appResourcesPackage + ".MainActivity";
        Timber.d("activity to start " + activityToStart);
        try {
            Class<?> c = Class.forName(activityToStart);
            Intent intent = new Intent(this, c);
            intent.addFlags(Intent.FLAG_ACTIVITY_REORDER_TO_FRONT);
            startActivity(intent);
        } catch (ClassNotFoundException ignored) {
            Timber.e("unable to start " + ignored);
        }
    }

}


