package cordova.plugin.zoom;

import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.graphics.Color;
import android.graphics.Typeface;
import android.os.Bundle;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.TextView;

import com.hrs.patient.R;

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

        // working code programmatically
//         linearLayout = new LinearLayout(this);
//        LinearLayout.LayoutParams layoutParams = new LinearLayout.LayoutParams(
//            LinearLayout.LayoutParams.FILL_PARENT, LinearLayout.LayoutParams.WRAP_CONTENT);
//        linearLayout.setBackgroundColor(Color.TRANSPARENT);
//        layoutParams.setMargins(0, 100, 0, 0);
//         userWaiting = new TextView(this);
//         userWaiting.setText("Waiting for other participants to join...");
//         userWaiting.setTextColor(Color.WHITE);
//         userWaiting.setTypeface(Typeface.DEFAULT_BOLD);
//         userWaiting.setPadding(0, 5, 5, 0);
//         userWaiting.setBackgroundColor(Color.BLACK);
//         userWaiting.setLayoutParams(new ViewGroup.LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT));
//         userWaiting.setGravity(Gravity.CENTER_HORIZONTAL);
//
//         userWaiting.setTextSize(20);
//         linearLayout.addView(userWaiting, layoutParams);
//         container_in_conf = (FrameLayout) findViewById(R.id.container_in_conf);

        // from layout
        LayoutInflater li = LayoutInflater.from(this);
        linearLayout = (LinearLayout) li.inflate(R.layout.zoom_user_waiting_layout, null, false);
        container_in_conf = (FrameLayout) findViewById(R.id.container_in_conf);

    }
    static TextView userWaiting ;
    static LinearLayout linearLayout;
    static FrameLayout container_in_conf;
    public static void toggleWaitingMessage(boolean show) {

//        if(show) {
//            container_in_conf.addView(userWaiting);
//        } else {
//            container_in_conf.removeView(userWaiting);
//        }
//


        if(show) {
            container_in_conf.addView(linearLayout);
        } else {
            container_in_conf.removeView(linearLayout);
        }
    }

    public static Context getFrontActivityContext() {
        return getFrontActivity();
    }

    public static void showAlertDialog() {
//        runOnUiThread(
//            new Runnable() {
//                public void run() {

                    // show a dialog
                    // Use the Builder class for convenient dialog construction.
                    AlertDialog.Builder builder = new AlertDialog.Builder(getFrontActivity());
                    builder.setMessage("There is another incoming call, please end the current call to answer that or ignore for now")
                        .setPositiveButton("End Call", new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int id) {
                               // endMeeting();
                            }
                        })
                        .setNegativeButton("Ignore", new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int id) {
                                // User cancels the dialog.
                            }
                        });
                    // Create the AlertDialog object and return it.

                    AlertDialog alert11 =  builder.create();
                    // alert11.getWindow().setType(WindowManager.LayoutParams.TYPE_SYSTEM_ALERT);
                    alert11.show();
                    // Toast.makeText(cordova.getContext(), "There is another incoming call, please end the current call to answer that or ignore for now" + status, Toast.LENGTH_LONG).show();
           //     }
          //  });
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
        startMainActivity();
        ZoomUIService zoomUIService = ZoomSDK.getInstance().getZoomUIService();
        ZoomSDK.getInstance().getZoomUIService().setMiniMeetingViewSize(new CustomizedMiniMeetingViewSize(50, 50, 90, 120));
        zoomUIService.showMiniMeetingWindow();
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


