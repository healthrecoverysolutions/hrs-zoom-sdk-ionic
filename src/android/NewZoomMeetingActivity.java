package cordova.plugin.zoom;

import android.content.Intent;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.Button;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.LinearLayout;

import us.zoom.sdk.CustomizedMiniMeetingViewSize;
import us.zoom.sdk.NewMeetingActivity;
import us.zoom.sdk.ZoomSDK;
import us.zoom.sdk.ZoomUIService;

import timber.log.Timber;

public class NewZoomMeetingActivity extends NewMeetingActivity {

    private String appResourcesPackage;
    private static LinearLayout userWaitingLayout;
    private static FrameLayout containerInConf;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Timber.d("NewZoomMeetingActivity oncreate " + this);
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
        userWaitingLayout =  (LinearLayout) li.inflate(getResources().getIdentifier("zoom_user_waiting_layout", "layout", appResourcesPackage), null, false);
        containerInConf = (FrameLayout) findViewById(getResources().getIdentifier("container_in_conf", "id", appResourcesPackage));
    }

    public static void enableWaitingMessage(boolean show) {
        if(show) {
            containerInConf.addView(userWaitingLayout);
        } else {
            containerInConf.removeView(userWaitingLayout);
        }
    }

    @Override
    public void onDestroy() {
        Timber.d("NewZoomMeetingActivity on destroy " + this);
        super.onDestroy();
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
        Zoom.getInstance().startMainActivity();
        ZoomUIService zoomUIService = ZoomSDK.getInstance().getZoomUIService();
        ZoomSDK.getInstance().getZoomUIService().setMiniMeetingViewSize(new CustomizedMiniMeetingViewSize(50, 50, 90, 120));
        zoomUIService.showMiniMeetingWindow();
    }

    private void endMeetingAndMoveToActivity() {
        Timber.d("end zoom call and start main activity");
        Zoom.getInstance().leaveMeeting();
    }
}

}


