package com.cordova.plugin.zoom;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import com.hrs.patient.MainActivity;

import us.zoom.sdk.CustomizedMiniMeetingViewSize;
import us.zoom.sdk.MeetingService;
import us.zoom.sdk.NewMeetingActivity;
import us.zoom.sdk.ZoomSDK;
import us.zoom.sdk.ZoomUIService;

public class NewZoomMeetingActivity extends NewMeetingActivity {

    private String appResourcesPackage = getPackageName();
    private static final String TAG = "ZoomIonicAngularPlugin";

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Log.d(TAG, "NewZoomMeetingActivity oncreate " + this);
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
    }

    @Override
    public void onDestroy() {
        Log.d(TAG, "NewZoomMeetingActivity on destroy " + this);
        super.onDestroy();
    }

    @Override
    protected void onPause() {
        Log.d(TAG, "Zoom on pause " + this);
        super.onPause();

    }

    @Override
    protected void onResume() {
        Log.d(TAG, "Zoom on resume " + this);
        super.onResume();
    }

    @Override
    public void finish() {
        Log.d(TAG, "Zoom on finish " + this);
        super.finish();
    }

    @Override
    public void onBackPressed() {
        Log.d(TAG, "Zoom BAck Pressed " + this);
        minimizeZoomCall();
    }

    private void minimizeZoomCall() {
        Intent intent = new Intent(this, MainActivity.class);
        intent.addFlags(Intent.FLAG_ACTIVITY_REORDER_TO_FRONT);
        this.startActivity(intent);
        ZoomUIService zoomUIService = ZoomSDK.getInstance().getZoomUIService();
        //            zoomUIService.setZoomUIDelegate(new SimpleZoomUIDelegate() {
        //                @Override
        //                public void afterMeetingMinimized(Activity activity) {
        //                    Log.d(TAG, "New zoom activity After meeting minimised---->>");
        //                    Intent intent = new Intent(activity, MainActivity.class);
        //                    intent.addFlags(Intent.FLAG_ACTIVITY_REORDER_TO_FRONT);
        //                    activity.startActivity(intent);
        //                }
        //            });
        ZoomSDK.getInstance().getZoomUIService().setMiniMeetingViewSize(new CustomizedMiniMeetingViewSize(50, 50, 90, 120));
        zoomUIService.showMiniMeetingWindow();
    }

    private void endMeetingAndMoveToActivity() {
        Log.d(TAG, "end zoom call and start main activity");
        ZoomUIService zoomUIService = ZoomSDK.getInstance().getZoomUIService();
        zoomUIService.hideMiniMeetingWindow();
        MeetingService meetingService = ZoomSDK.getInstance().getMeetingService();
        meetingService.leaveCurrentMeeting(true);
        Intent intent = new Intent(this, MainActivity.class);
        intent.addFlags(Intent.FLAG_ACTIVITY_REORDER_TO_FRONT);
        this.startActivity(intent);
    }

}


