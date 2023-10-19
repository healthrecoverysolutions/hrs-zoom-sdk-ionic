package cordova.plugin.zoom.Zoom.sdksample.startjoinmeeting.joinmeetingonly;

import android.content.Context;

import cordova.plugin.zoom.Zoom.sdksample.inmeetingfunction.zoommeetingui.ZoomMeetingUISettingHelper;
import us.zoom.sdk.JoinMeetingOptions;
import us.zoom.sdk.JoinMeetingParams;
import us.zoom.sdk.MeetingService;
import us.zoom.sdk.ZoomSDK;

public class JoinMeetingHelper {
    private final static String TAG = "JoinMeetingHelper";

    private static JoinMeetingHelper mJoinMeetingHelper;

    private ZoomSDK mZoomSDK;

    private final static String DISPLAY_NAME = "ZoomUS_SDK";

    private JoinMeetingHelper() {
        mZoomSDK = ZoomSDK.getInstance();
    }

    public synchronized static JoinMeetingHelper getInstance() {
        mJoinMeetingHelper = new JoinMeetingHelper();
        return mJoinMeetingHelper;
    }

    public int joinMeetingWithNumber(Context context, String meetingNo, String meetingPassword,String jmak) {
        int ret = -1;
        MeetingService meetingService = mZoomSDK.getMeetingService();
        if(meetingService == null) {
            return ret;
        }

        JoinMeetingOptions opts = ZoomMeetingUISettingHelper.getJoinMeetingOptions();

        JoinMeetingParams params = new JoinMeetingParams();

        params.displayName = DISPLAY_NAME;
        params.meetingNo = meetingNo;
        params.password = meetingPassword;
        params.join_token =jmak;
        return meetingService.joinMeetingWithParams(context, params,opts);
    }

    public int joinMeetingWithVanityId(Context context, String vanityId, String meetingPassword,String jmak) {
        int ret = -1;
        MeetingService meetingService = mZoomSDK.getMeetingService();
        if(meetingService == null) {
            return ret;
        }

        JoinMeetingOptions opts =ZoomMeetingUISettingHelper.getJoinMeetingOptions();
        JoinMeetingParams params = new JoinMeetingParams();
        params.displayName = DISPLAY_NAME;
        params.vanityID = vanityId;
        params.password = meetingPassword;
        params.join_token =jmak;
        return meetingService.joinMeetingWithParams(context, params,opts);
    }
}
