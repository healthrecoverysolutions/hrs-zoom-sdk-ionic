/**
 *  Zoom.m
 *
 *  @author Zoom Video Communications, Inc.
 *  @version v5.17.11.14222
 */
#import "Zoom.h"
#import <CocoaLumberjack/CocoaLumberjack.h>
#import "CustomMessageComponent.h"
#define ddLogLevel DDLogLevelAll
#define kSDKDomain  @"https://zoom.us"
#define DEBUG   YES
#define kCallDeclined @"call_declined"

@implementation Zoom

const CGFloat End_Call_Timer_Seconds = 90.0f;
NSTimer *endCallTimer;
NSTimer *alertMessageTimer;
NSString *meetingNumber;
NSString *previousMeetingNumber;
MessageAlertViewController *messageAlertViewController;
CustomMessageComponent *customMessageComponent;

// This method has been deprecated. Now the authservice takes jwtToken at the place of appKey and appSecret.
- (void)initialize:(CDVInvokedUrlCommand*)command
{
    pluginResult = nil;
    callbackId = command.callbackId;
    // Get variables.
    NSString* appKey = [command.arguments objectAtIndex:0];
    NSString* appSecret = [command.arguments objectAtIndex:1];

    // Run authentication and initialize SDK on main thread.
    dispatch_async(dispatch_get_main_queue(), ^(void){
        // if input parameters are not valid.
        if (appKey == nil || ![appKey isKindOfClass:[NSString class]] || [appKey length] == 0 || appSecret == nil || ![appSecret isKindOfClass:[NSString class]]|| [appSecret length] == 0) {
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"Please pass valid SDK key and secret."];
            [self.commandDelegate sendPluginResult:pluginResult callbackId:callbackId];
            return;
        }

        // Initialize SDK.
        MobileRTCSDKInitContext *context = [[MobileRTCSDKInitContext alloc] init];
        context.domain = kSDKDomain;
        context.enableLog = YES;
        context.locale = MobileRTC_ZoomLocale_Default;

        BOOL initRet = [[MobileRTC sharedRTC] initialize:context];

        // If the SDK has successfully authorized, avoid re-authorization.
        if ([[MobileRTC sharedRTC] isRTCAuthorized])
        {
            return;
        }

        // Get auth service.
        MobileRTCAuthService *authService = [[MobileRTC sharedRTC] getAuthService];
        if (authService)
        {
            // Assign delegate.
            authService.delegate = self;
            // appKey and appSecret is no longer assignable to MobileRTCAuthService
//            authService.clientKey = appKey;
//            authService.clientSecret = appSecret;
            // Perform SDK auth.
            [authService sdkAuth];
        }
    });
}

//Added new method to set jwtToken in MobileRTCAuthService
- (void)initializeWithJWT:(CDVInvokedUrlCommand*)command{
    DDLogDebug(@"initializeWithJWT");
    pluginResult = nil;
    callbackId = command.callbackId;
    // Get variables.
    NSString* jwtToken = [command.arguments objectAtIndex:0];
    // Run authentication and initialize SDK on main thread.
    dispatch_async(dispatch_get_main_queue(), ^(void){
        // if input parameters are not valid.
        if (jwtToken == nil || ![jwtToken isKindOfClass:[NSString class]] || [jwtToken length] == 0) {
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"Please pass valid jwtToken."];
            [self.commandDelegate sendPluginResult:pluginResult callbackId:callbackId];
            return;
        }

        // Initialize SDK.
        MobileRTCSDKInitContext *context = [[MobileRTCSDKInitContext alloc] init];
        context.domain = kSDKDomain;
        context.enableLog = YES;
        context.locale = MobileRTC_ZoomLocale_Default;

        BOOL initRet = [[MobileRTC sharedRTC] initialize:context];

        // Get auth service.
        MobileRTCAuthService *authService = [[MobileRTC sharedRTC] getAuthService];
        if (authService)
        {
            // Assign delegate.
            authService.delegate = self;
            // Assign jwtTken
            authService.jwtToken = jwtToken;
            // Perform SDK auth.
            [authService sdkAuth];
        }
    });
}

- (void)login:(CDVInvokedUrlCommand*)command
{
    pluginResult = nil;
    callbackId = command.callbackId;
    // Get variables.
    NSString* username = [command.arguments objectAtIndex:0];
    NSString* password = [command.arguments objectAtIndex:1];
    // Run login method on main thread.
    dispatch_async(dispatch_get_main_queue(), ^(void) {
        if (username != nil && [username isKindOfClass:[NSString class]] && [username length] > 0 && password != nil && [password isKindOfClass:[NSString class]]  && [password length]) {
            
            // loginWithEmail has been deprecated in the lastest SDK 5.11 and not being used anywhere in the code so commented it for now.
            // Try to log user in
//            [[[MobileRTC sharedRTC] getAuthService] loginWithEmail:username password:password rememberMe:YES];
        } else {
            NSMutableDictionary *res = [[NSMutableDictionary alloc] init];
            res[@"result"] = @NO;
            res[@"message"] = @"Please enter valid username and password";
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsDictionary:res];
            [self.commandDelegate sendPluginResult:pluginResult callbackId:callbackId];
        }
    });
}

- (void)logout:(CDVInvokedUrlCommand*)command
{
    pluginResult = nil;
    callbackId = command.callbackId;
    // Run logout method on main thread.
    dispatch_async(dispatch_get_main_queue(), ^(void) {
        // Try to log user out
        if (![[[MobileRTC sharedRTC] getAuthService] isLoggedIn]) {
            NSMutableDictionary *res = [[NSMutableDictionary alloc] init];
            res[@"result"] = @NO;
            res[@"message"] = @"You are not logged in.";
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsDictionary:res];
            [self.commandDelegate sendPluginResult:pluginResult callbackId:callbackId];
        }
        [[[MobileRTC sharedRTC] getAuthService] logoutRTC];
    });
}

- (void)isLoggedIn:(CDVInvokedUrlCommand*)command
{
    pluginResult = nil;
    callbackId = command.callbackId;
    // Check whether user is logged in.
    dispatch_async(dispatch_get_main_queue(), ^(void) {
        MobileRTCAuthService* authService = [[MobileRTC sharedRTC] getAuthService];
        if (authService != nil) {
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsBool:[authService isLoggedIn]];
            [pluginResult setKeepCallback:[NSNumber numberWithBool:YES]];
            [self.commandDelegate sendPluginResult:pluginResult callbackId:callbackId];
        }
    });
}

// This method will be called with zoom call is declined by other participants
-(void) notifyCallStatus :(CDVInvokedUrlCommand*)command {
    NSString *callStatus = [command.arguments objectAtIndex:0];
    NSString *meetingNumber = [command.arguments objectAtIndex:1];
    
    if(callStatus != nil && ([callStatus isEqualToString: kCallDeclined])) {
        /* Ending meeting if meeting has not been ended previously by comparing current meeting number with previous meeting number */
        if(previousMeetingNumber == nil || ![previousMeetingNumber isEqualToString:meetingNumber]){
            [self continueEndingMeeting];
        }
    }
}

- (void)joinMeeting:(CDVInvokedUrlCommand*)command
{
    pluginResult = nil;
    callbackId = command.callbackId;
    // Get variables.
    NSString* meetingNo = [command.arguments objectAtIndex:0];
    NSString* meetingPassword = [command.arguments objectAtIndex:1];
    NSString* displayName = [command.arguments objectAtIndex:2];
    NSDictionary* options = [command.arguments objectAtIndex:3];
    meetingNumber = meetingNo;
    if (DEBUG) {
        DDLogDebug(@"========meeting number======= %@", meetingNo);
        DDLogDebug(@"========display name======= %@", displayName);
        DDLogDebug(@"========meeting options===== %@", options);
    }
    // Meeting number regular expression.
    NSRegularExpression *regex = [NSRegularExpression regularExpressionWithPattern:@"\\d{8,11}" options:0 error:nil];

    dispatch_async(dispatch_get_main_queue(), ^(void) {
        if (meetingNo == nil || ![meetingNo isKindOfClass:[NSString class]] || [meetingNo length] == 0 || [regex numberOfMatchesInString:meetingNo options:0 range:NSMakeRange(0, [meetingNo length])] == 0|| displayName == nil || ![displayName isKindOfClass:[NSString class]] || [displayName length] == 0) {
            DDLogDebug(@"Please enter valid meeting number and display name");
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"Please enter valid meeting number and display name"];
            [self.commandDelegate sendPluginResult:pluginResult callbackId:callbackId];
            return;
        }
        // Get meeting service
        MobileRTCMeetingService *ms = [[MobileRTC sharedRTC] getMeetingService];
        if (ms != nil)
        {
            // Assign delegate.
            ms.delegate = self;
            // Meeting options
            // custom_meeting_id
            if ([options objectForKey:@"custom_meeting_id"] != [NSNull null]) {
                NSString* customMeetingId = options[@"custom_meeting_id"];
                [ms customizeMeetingTitle:customMeetingId];
            }
            // no_audio
            if ([options objectForKey:@"no_audio"] != [NSNull null]) {
                [[[MobileRTC sharedRTC] getMeetingSettings] setMuteAudioWhenJoinMeeting:[options[@"no_audio"] boolValue]];
            } else {
                [[[MobileRTC sharedRTC] getMeetingSettings] setMuteAudioWhenJoinMeeting:NO];
            }
            // no_bottom_toolbar
            if ([options objectForKey:@"no_bottom_toolbar"] != [NSNull null]) {
                [[MobileRTC sharedRTC] getMeetingSettings].bottomBarHidden = [options[@"no_bottom_toolbar"] boolValue];
            } else {
                [[MobileRTC sharedRTC] getMeetingSettings].bottomBarHidden = NO;
            }
            // no_dial_in_via_phone
            if ([options objectForKey:@"no_dial_in_via_phone"] != [NSNull null]) {
                [[[MobileRTC sharedRTC] getMeetingSettings] disableCallIn: [options[@"no_dial_in_via_phone"] boolValue]];
            } else {
                [[[MobileRTC sharedRTC] getMeetingSettings] disableCallIn: NO];
            }
            // no_dial_out_to_phone
            if ([options objectForKey:@"no_dial_out_to_phone"] != [NSNull null]) {
                [[[MobileRTC sharedRTC] getMeetingSettings] disableCallOut: [options[@"no_dial_out_to_phone"] boolValue]];
            } else {
                [[[MobileRTC sharedRTC] getMeetingSettings] disableCallOut:NO];
            }
            // no_disconnect_audio
            if ([options objectForKey:@"no_disconnect_audio"] != [NSNull null]) {
                [[MobileRTC sharedRTC] getMeetingSettings ].disconnectAudioHidden = [options[@"no_disconnect_audio"] boolValue];
            } else {
                [[MobileRTC sharedRTC] getMeetingSettings ].disconnectAudioHidden = NO;
            }
            
            // no_driving_mode
            if ([options objectForKey:@"no_driving_mode"] != [NSNull null]) {
                [[[MobileRTC sharedRTC] getMeetingSettings] disableDriveMode: [options[@"no_driving_mode"] boolValue]];
            } else {
                [[[MobileRTC sharedRTC] getMeetingSettings] disableDriveMode:NO];
            }
            // no_invite
            if ([options objectForKey:@"no_invite"] != [NSNull null]) {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingInviteHidden = [options[@"no_invite"] boolValue];
            } else {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingInviteHidden = NO;
            }
            
            // no_titlebar
            if ([options objectForKey:@"no_titlebar"] != [NSNull null]) {
                [[MobileRTC sharedRTC] getMeetingSettings].topBarHidden = [options[@"no_titlebar"] boolValue];
            } else {
                [[MobileRTC sharedRTC] getMeetingSettings].topBarHidden = NO;
            }
            
            // no_video
            if ([options objectForKey:@"no_video"] != [NSNull null]) {
                [[[MobileRTC sharedRTC] getMeetingSettings] setMuteVideoWhenJoinMeeting:[options[@"no_video"] boolValue]];
            } else {
                [[[MobileRTC sharedRTC] getMeetingSettings] setMuteVideoWhenJoinMeeting:NO];
            }
            
            // no_button_video
            if ([options objectForKey:@"no_button_video"] != [NSNull null]) {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingVideoHidden = [options[@"no_button_video"] boolValue];
            } else {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingVideoHidden = NO;
            }
            // no_button_audio
            if ([options objectForKey:@"no_button_audio"] != [NSNull null]) {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingAudioHidden = [options[@"no_button_audio"] boolValue];
            } else {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingAudioHidden = NO;
            }
            // no_button_share
            if ([options objectForKey:@"no_button_share"] != [NSNull null]) {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingShareHidden = [options[@"no_button_share"] boolValue];
            } else {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingShareHidden = NO;
            }
            // no_button_participants
            if ([options objectForKey:@"no_button_participants"] != [NSNull null]) {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingParticipantHidden = [options[@"no_button_participants"] boolValue];
            } else {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingParticipantHidden = NO;
            }
            // no_button_more
            if ([options objectForKey:@"no_button_more"] != [NSNull null]) {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingMoreHidden = [options[@"no_button_more"] boolValue];
            } else {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingMoreHidden = NO;
            }
            // no_text_meeting_id
            if ([options objectForKey:@"no_text_meeting_id"] != [NSNull null]) {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingTitleHidden = [options[@"no_text_meeting_id"] boolValue];
            } else {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingTitleHidden = NO;
            }
            // no_text_password
            if ([options objectForKey:@"no_text_password"] != [NSNull null]) {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingPasswordHidden = [options[@"no_text_password"] boolValue];
            } else {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingPasswordHidden = NO;
            }
            // no_button_leave
            if ([options objectForKey:@"no_button_leave"] != [NSNull null]) {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingLeaveHidden = [options[@"no_button_leave"] boolValue];
            } else {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingLeaveHidden = NO;
            }
            // To disable video preview before meeting in zoom SDK 5.11.
            [[[MobileRTC sharedRTC] getMeetingSettings] disableShowVideoPreviewWhenJoinMeeting:TRUE];
            NSString* participantID = @"";
            // participant_id
            if ([options objectForKey:@"participant_id"] != [NSNull null]) {
                participantID = options[@"participant_id"];
            }

            // Automatically enable audio instead of requiring the user to enable it manually.
            [[[MobileRTC sharedRTC] getMeetingSettings] setAutoConnectInternetAudio:YES];

            // As per latest SDK 5.11 joinMeetingWithDictionary has been deprecated so changed with joinMeetingWithJoinParam which is the latest.
            MobileRTCMeetingJoinParam *params = [[MobileRTCMeetingJoinParam alloc] init];
            params.password = meetingPassword;
            params.meetingNumber = meetingNo;
            params.userName = displayName;
            params.customerKey = participantID;
            [ms joinMeetingWithJoinParam:params];
        }
    });
}

- (void)onMeetingReady
{
    // Enable video as soon as the meeting is ready, because for some reason the setting setMuteVideoWhenJoinMeeting:NO didn't work.
    MobileRTCMeetingService *ms = [[MobileRTC sharedRTC] getMeetingService];
    if (ms != nil)
    {
        //Return type of muteMyVideo has been replaced with MobileRTCSDKError from MobileRTCVideoError in latest SDK 5.14
        MobileRTCSDKError unmuteResult = [ms muteMyVideo:NO];
        DDLogDebug(@"onMeetingReady unmuteResult: %d", unmuteResult);
        NSUInteger meetingUserCount = [[MobileRTC sharedRTC] getMeetingService].getInMeetingUserList.count;
        if(meetingUserCount == 1) {
            [self addWaitingForParticipantsMessage];
            /*An alert message will be shown to the user if no other participant joins in 90 seconds for ending the call*/
            endCallTimer = [NSTimer scheduledTimerWithTimeInterval:End_Call_Timer_Seconds
            target:self selector:@selector(startEndMeetingTimer:) userInfo:nil repeats:NO];

        }
    }
}

// This method will end meeting if other participants doesn't join in 90 seconds
- (void) startEndMeetingTimer:(NSTimer *)timer
{
    [timer invalidate];
    NSUInteger meetingUserCount = [[MobileRTC sharedRTC] getMeetingService].getInMeetingUserList.count;

    if(meetingUserCount == 1) {
        [self showEndingCallPopup:NSLocalizedString(@"zoom_call_missed_message", @"")];
    }
}

// ZoomCallHandlerDelegate method for ending current zoom call
- (void)endMeeting {
    [self leaveExistingMeeting];
}

// Method for leaving from exising zoom meeting
-(void) leaveExistingMeeting {
    MobileRTCMeetingService *ms = [[MobileRTC sharedRTC] getMeetingService];
    [ms leaveMeetingWithCmd:LeaveMeetingCmd_Leave];
    previousMeetingNumber = meetingNumber;
    meetingNumber = nil;
}

- (void)startMeeting:(CDVInvokedUrlCommand*)command
{
    pluginResult = nil;
    callbackId = command.callbackId;
    // Get variables.
    NSString* meetingNo = [command.arguments objectAtIndex:0];
    NSString* displayName = [command.arguments objectAtIndex:1];
    NSString* zoomToken = [command.arguments objectAtIndex:2];
    NSString* zoomAccessToken = [command.arguments objectAtIndex:3];
    NSString* userId = [command.arguments objectAtIndex:4];
    NSDictionary* options = [command.arguments objectAtIndex:5];

    dispatch_async(dispatch_get_main_queue(), ^(void) {

        NSRegularExpression *regex = [NSRegularExpression regularExpressionWithPattern:@"\\d{8,11}" options:0 error:nil];

        if (meetingNo == nil || ![meetingNo isKindOfClass:[NSString class]] || [meetingNo length] == 0 || [regex numberOfMatchesInString:meetingNo options:0 range:NSMakeRange(0, [meetingNo length])] == 0) {
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"Please enter valid meeting number"];
            [self.commandDelegate sendPluginResult:pluginResult callbackId:callbackId];
            return;
        }

        MobileRTCMeetingService *ms = [[MobileRTC sharedRTC] getMeetingService];
        if (ms)
        {
            // Assign delegate.
            ms.delegate = self;
            // Meeting options
            // custom_meeting_id
            if ([options objectForKey:@"custom_meeting_id"] != [NSNull null]) {
                NSString* customMeetingId = options[@"custom_meeting_id"];
                [ms customizeMeetingTitle:customMeetingId];
            }
            // no_bottom_toolbar
            if ([options objectForKey:@"no_bottom_toolbar"] != [NSNull null]) {
                [[MobileRTC sharedRTC] getMeetingSettings].bottomBarHidden = [options[@"no_bottom_toolbar"] boolValue];
            } else {
                [[MobileRTC sharedRTC] getMeetingSettings].bottomBarHidden = NO;
            }
            // no_dial_in_via_phone
            if ([options objectForKey:@"no_dial_in_via_phone"] != [NSNull null]) {
                [[[MobileRTC sharedRTC] getMeetingSettings] disableCallIn: [options[@"no_dial_in_via_phone"] boolValue]];
            } else {
                [[[MobileRTC sharedRTC] getMeetingSettings] disableCallIn: NO];
            }
            // no_dial_out_to_phone
            if ([options objectForKey:@"no_dial_out_to_phone"] != [NSNull null]) {
                [[[MobileRTC sharedRTC] getMeetingSettings] disableCallOut: [options[@"no_dial_out_to_phone"] boolValue]];
            } else {
                [[[MobileRTC sharedRTC] getMeetingSettings] disableCallOut:NO];
            }
            // no_disconnect_audio
            if ([options objectForKey:@"no_disconnect_audio"] != [NSNull null]) {
                [[MobileRTC sharedRTC] getMeetingSettings ].disconnectAudioHidden = [options[@"no_disconnect_audio"] boolValue];
            } else {
                [[MobileRTC sharedRTC] getMeetingSettings ].disconnectAudioHidden = NO;
            }
            // no_driving_mode
            if ([options objectForKey:@"no_driving_mode"] != [NSNull null]) {
                [[[MobileRTC sharedRTC] getMeetingSettings] disableDriveMode: [options[@"no_driving_mode"] boolValue]];
            } else {
                [[[MobileRTC sharedRTC] getMeetingSettings] disableDriveMode:NO];
            }
            // no_invite
            if ([options objectForKey:@"no_invite"] != [NSNull null]) {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingInviteHidden = [options[@"no_invite"] boolValue];
            } else {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingInviteHidden = NO;
            }
            // no_titlebar
            if ([options objectForKey:@"no_titlebar"] != [NSNull null]) {
                [[MobileRTC sharedRTC] getMeetingSettings].topBarHidden = [options[@"no_titlebar"] boolValue];
            } else {
                [[MobileRTC sharedRTC] getMeetingSettings].topBarHidden = NO;
            }
            // no_audio
            if ([options objectForKey:@"no_audio"] != [NSNull null]) {
                [[[MobileRTC sharedRTC] getMeetingSettings] setMuteAudioWhenJoinMeeting:[options[@"no_audio"] boolValue]];
            } else {
                [[[MobileRTC sharedRTC] getMeetingSettings] setMuteAudioWhenJoinMeeting:NO];
            }
            // no_video
            if ([options objectForKey:@"no_video"] != [NSNull null]) {
                [[[MobileRTC sharedRTC] getMeetingSettings] setMuteVideoWhenJoinMeeting:[options[@"no_video"] boolValue]];
            } else {
                [[[MobileRTC sharedRTC] getMeetingSettings] setMuteVideoWhenJoinMeeting:NO];
            }
            // no_button_video
            if ([options objectForKey:@"no_button_video"] != [NSNull null]) {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingVideoHidden = [options[@"no_button_video"] boolValue];
            } else {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingVideoHidden = NO;
            }
            // no_button_audio
            if ([options objectForKey:@"no_button_audio"] != [NSNull null]) {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingAudioHidden = [options[@"no_button_audio"] boolValue];
            } else {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingAudioHidden = NO;
            }
            // no_button_share
            if ([options objectForKey:@"no_button_share"] != [NSNull null]) {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingShareHidden = [options[@"no_button_share"] boolValue];
            } else {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingShareHidden = NO;
            }
            // no_button_participants
            if ([options objectForKey:@"no_button_participants"] != [NSNull null]) {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingParticipantHidden = [options[@"no_button_participants"] boolValue];
            } else {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingParticipantHidden = NO;
            }
            // no_button_more
            if ([options objectForKey:@"no_button_more"] != [NSNull null]) {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingMoreHidden = [options[@"no_button_more"] boolValue];
            } else {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingMoreHidden = NO;
            }
            // no_text_meeting_id
            if ([options objectForKey:@"no_text_meeting_id"] != [NSNull null]) {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingTitleHidden = [options[@"no_text_meeting_id"] boolValue];
            } else {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingTitleHidden = NO;
            }
            // no_text_password
            if ([options objectForKey:@"no_text_password"] != [NSNull null]) {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingPasswordHidden = [options[@"no_text_password"] boolValue];
            } else {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingPasswordHidden = NO;
            }
            // no_button_leave
            if ([options objectForKey:@"no_button_leave"] != [NSNull null]) {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingLeaveHidden = [options[@"no_button_leave"] boolValue];
            } else {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingLeaveHidden = NO;
            }
            // Prepare start meeting param.
            MobileRTCMeetingStartParam * param = nil;

            if ([[[MobileRTC sharedRTC] getAuthService] isLoggedIn])
            {
                // Is user is logged in.
                DDLogDebug(@"start meeting with logged in.");
                MobileRTCMeetingStartParam4LoginlUser * user = [[MobileRTCMeetingStartParam4LoginlUser alloc]init];
                user.isAppShare = NO;
                param = user;
                param.meetingNumber = meetingNo;
            }
            else
            {
                // Is user is not logged in.
                DDLogDebug(@"Start meeting without logged in.");
                DDLogDebug(@"zoom token: %@",zoomToken);
                DDLogDebug(@"zak: %@",zoomAccessToken);
                if (zoomToken == nil || ![zoomToken isKindOfClass:[NSString class]] || [zoomToken length] == 0 ||
                    zoomAccessToken == nil || ![zoomAccessToken isKindOfClass:[NSString class]] || [zoomAccessToken length] == 0 ||
                    userId == nil || ![userId isKindOfClass:[NSString class]] || [userId length] == 0) {
                    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"Your zoom token, zoom access token, and userId are not valid"];
                    [self.commandDelegate sendPluginResult:pluginResult callbackId:callbackId];
                    return;
                }

                MobileRTCMeetingStartParam4WithoutLoginUser * user = [[MobileRTCMeetingStartParam4WithoutLoginUser alloc]init];
                user.userType = MobileRTCUserType_APIUser;
                user.meetingNumber = meetingNo;
                user.userName = displayName;
                // userToken field is not available in latest SDK 5.11
//                user.userToken = zoomToken;
                //Property userID has been removed from MobileRTCMeetingStartParam4WithoutLoginUser in latest SDK 5.14
//                user.userID = userId;
                user.isAppShare = NO;
                user.zak = zoomAccessToken;
                param = user;
            }
            // participant_id
            if ([options objectForKey:@"participant_id"] != [NSNull null]) {
                // participant_id has been replaced with customerKey in the lastest SDK 5.11.
                param.customerKey =  options[@"participant_id"];
            }
            // Start meeting.
            MobileRTCMeetError response = [ms startMeetingWithStartParam:param];
            if (DEBUG) {
                DDLogDebug(@"start a meeting res:%d", response);
            }
        }
    });
}

- (void)startInstantMeeting:(CDVInvokedUrlCommand*)command
{
    DDLogDebug(@"startInstantMeeting");
    pluginResult = nil;
    callbackId = command.callbackId;
    NSDictionary* options = [command.arguments objectAtIndex:0];

    dispatch_async(dispatch_get_main_queue(), ^(void) {

        if (![[[MobileRTC sharedRTC] getAuthService] isLoggedIn]) {
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"You are not logged in"];
            [self.commandDelegate sendPluginResult:pluginResult callbackId:callbackId];
            return;
        }
        // Get meeting service.
        MobileRTCMeetingService *ms = [[MobileRTC sharedRTC] getMeetingService];

        if (ms)
        {
            // Assign delegate.
            ms.delegate = self;
            // Meeting options
            // custom_meeting_id
            if ([options objectForKey:@"custom_meeting_id"] != [NSNull null]) {
                NSString* customMeetingId = options[@"custom_meeting_id"];
                [ms customizeMeetingTitle:customMeetingId];
            }
            // no_audio
            if ([options objectForKey:@"no_audio"] != [NSNull null]) {
                [[[MobileRTC sharedRTC] getMeetingSettings] setMuteAudioWhenJoinMeeting:[options[@"no_audio"] boolValue]];
            } else {
                [[[MobileRTC sharedRTC] getMeetingSettings] setMuteAudioWhenJoinMeeting:NO];
            }
            // no_bottom_toolbar
            if ([options objectForKey:@"no_bottom_toolbar"] != [NSNull null]) {
                [[MobileRTC sharedRTC] getMeetingSettings].bottomBarHidden = [options[@"no_bottom_toolbar"] boolValue];
            } else {
                [[MobileRTC sharedRTC] getMeetingSettings].bottomBarHidden = NO;
            }
            // no_dial_in_via_phone
            if ([options objectForKey:@"no_dial_in_via_phone"] != [NSNull null]) {
                [[[MobileRTC sharedRTC] getMeetingSettings] disableCallIn: [options[@"no_dial_in_via_phone"] boolValue]];
            } else {
                [[[MobileRTC sharedRTC] getMeetingSettings] disableCallIn: NO];
            }
            // no_dial_out_to_phone
            if ([options objectForKey:@"no_dial_out_to_phone"] != [NSNull null]) {
                [[[MobileRTC sharedRTC] getMeetingSettings] disableCallOut: [options[@"no_dial_out_to_phone"] boolValue]];
            } else {
                [[[MobileRTC sharedRTC] getMeetingSettings] disableCallOut:NO];
            }
            // no_disconnect_audio
            if ([options objectForKey:@"no_disconnect_audio"] != [NSNull null]) {
                [[MobileRTC sharedRTC] getMeetingSettings ].disconnectAudioHidden = [options[@"no_disconnect_audio"] boolValue];
            } else {
                [[MobileRTC sharedRTC] getMeetingSettings ].disconnectAudioHidden = NO;
            }
            
            // no_driving_mode
            if ([options objectForKey:@"no_driving_mode"] != [NSNull null]) {
                [[[MobileRTC sharedRTC] getMeetingSettings] disableDriveMode: [options[@"no_driving_mode"] boolValue]];
            } else {
                [[[MobileRTC sharedRTC] getMeetingSettings] disableDriveMode:NO];
            }
            // no_invite
            if ([options objectForKey:@"no_invite"] != [NSNull null]) {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingInviteHidden = [options[@"no_invite"] boolValue];
            } else {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingInviteHidden = NO;
            }
            
            // no_titlebar
            if ([options objectForKey:@"no_titlebar"] != [NSNull null]) {
                [[MobileRTC sharedRTC] getMeetingSettings].topBarHidden = [options[@"no_titlebar"] boolValue];
            } else {
                [[MobileRTC sharedRTC] getMeetingSettings].topBarHidden = NO;
            }
            
            // no_video
            if ([options objectForKey:@"no_video"] != [NSNull null]) {
                [[[MobileRTC sharedRTC] getMeetingSettings] setMuteVideoWhenJoinMeeting:[options[@"no_video"] boolValue]];
            } else {
                [[[MobileRTC sharedRTC] getMeetingSettings] setMuteVideoWhenJoinMeeting:NO];
            }
            
            // no_button_video
            if ([options objectForKey:@"no_button_video"] != [NSNull null]) {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingVideoHidden = [options[@"no_button_video"] boolValue];
            } else {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingVideoHidden = NO;
            }
            // no_button_audio
            if ([options objectForKey:@"no_button_audio"] != [NSNull null]) {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingAudioHidden = [options[@"no_button_audio"] boolValue];
            } else {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingAudioHidden = NO;
            }
            // no_button_share
            if ([options objectForKey:@"no_button_share"] != [NSNull null]) {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingShareHidden = [options[@"no_button_share"] boolValue];
            } else {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingShareHidden = NO;
            }
            // no_button_participants
            if ([options objectForKey:@"no_button_participants"] != [NSNull null]) {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingParticipantHidden = [options[@"no_button_participants"] boolValue];
            } else {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingParticipantHidden = NO;
            }
            // no_button_more
            if ([options objectForKey:@"no_button_more"] != [NSNull null]) {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingMoreHidden = [options[@"no_button_more"] boolValue];
            } else {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingMoreHidden = NO;
            }
            // no_text_meeting_id
            if ([options objectForKey:@"no_text_meeting_id"] != [NSNull null]) {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingTitleHidden = [options[@"no_text_meeting_id"] boolValue];
            } else {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingTitleHidden = NO;
            }
            // no_text_password
            if ([options objectForKey:@"no_text_password"] != [NSNull null]) {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingPasswordHidden = [options[@"no_text_password"] boolValue];
            } else {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingPasswordHidden = NO;
            }
            // no_button_leave
            if ([options objectForKey:@"no_button_leave"] != [NSNull null]) {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingLeaveHidden = [options[@"no_button_leave"] boolValue];
            } else {
                [[MobileRTC sharedRTC] getMeetingSettings].meetingLeaveHidden = NO;
            }
            // Prepare start meeting parameters.
            NSDictionary* paramDict = nil;
            paramDict = @{};
            // startMeetingWithDictionary has been deprecated in the lastest SDK 5.11 and not being used anywhere in the code so commented it for now.
            // Start instant meeting.
//            MobileRTCMeetError response = [ms startMeetingWithDictionary:paramDict];
//            if (DEBUG) {
//                DDLogDebug(@"start an instant meeting res:%d", response);
//            }
        }
    });
}

- (void)setLocale:(CDVInvokedUrlCommand *)command
{
    pluginResult = nil;
    callbackId = command.callbackId;
    // Get variable
    NSString* languageTag = [command.arguments objectAtIndex:0];

    NSString* language = @"en";

    // Ugly way to unify language codes.
    if ([languageTag isEqualToString:@"en-US"]) {
        language = @"en";
    } else if ([languageTag isEqualToString:@"zh-CN"]) {
        language = @"zh-Hans";
    } else if ([languageTag isEqualToString:@"ja-JP"]) {
        language = @"ja";
    } else if ([languageTag isEqualToString:@"de-DE"]) {
        language = @"de";
    } else if ([languageTag isEqualToString:@"fr-FR"]) {
        language = @"fr";
    } else if ([languageTag isEqualToString:@"zh-TW"]) {
        language = @"zh-Hant";
    } else if ([languageTag isEqualToString:@"es-419"]) {
        language = @"es";
    } else if ([languageTag isEqualToString:@"ru-RU"]) {
        language = @"ru";
    } else if ([languageTag isEqualToString:@"pt-PT"]) {
        language = @"pt-PT";
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"Language not supported"];
        [self.commandDelegate sendPluginResult:pluginResult callbackId:callbackId];
        return;
    }

    dispatch_async(dispatch_get_main_queue(), ^(void) {
        if (DEBUG) {
            DDLogDebug(@"set language ===== %@", language);
            DDLogDebug(@"Supported languages: %@", [[MobileRTC sharedRTC] supportedLanguages]);
        }
        // Set language
        [[MobileRTC sharedRTC] setLanguage:language];

        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:@"Set language Successfully"];
        [self.commandDelegate sendPluginResult:pluginResult callbackId:callbackId];
    });
}

- (void)onMobileRTCAuthReturn:(MobileRTCAuthError)returnValue
{
    if (DEBUG) {
        DDLogDebug(@"onMobileRTCAuthReturn: %@", [self getAuthErrorMessage:returnValue]);
    }

    if (returnValue != MobileRTCAuthError_Success)
    {
        // Authentication error, please check error code.
        NSString *message = [NSString stringWithFormat:NSLocalizedString(@"SDK authentication failed, error: %@", @""), [self getAuthErrorMessage:returnValue]];
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:message];
    } else {
        NSString *message = [NSString stringWithFormat:NSLocalizedString(@"Initialize successfully, return value: %@", @""), [self getAuthErrorMessage:returnValue]];
        DDLogDebug(@"%@", message);
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:message];
    }
    [pluginResult setKeepCallback:[NSNumber numberWithBool:YES]];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:callbackId];
}

- (void)onMobileRTCLoginReturn:(NSInteger)returnValue
{
    // 0 is success, otherwise is failed.
    if (DEBUG) {
        DDLogDebug(@"onMobileRTCLoginReturn result=%zd", returnValue);
    }

    NSMutableDictionary *res = [[NSMutableDictionary alloc] init];

    if (returnValue == 0) {
        res[@"result"] = @YES;
        res[@"message"] = @"Successfully logged in";
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsDictionary:res];
    } else {
        res[@"result"] = @NO;
        res[@"message"] = @"ERROR! Failed to log in";
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsDictionary:res];
    }

    [pluginResult setKeepCallback:[NSNumber numberWithBool:YES]];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:callbackId];
}

- (void)onMobileRTCLogoutReturn:(NSInteger)returnValue
{
    // 0 is success, otherwise is failed.
    if (DEBUG) {
       DDLogDebug(@"onMobileRTCLogoutReturn result=%zd", returnValue);
    }

    NSMutableDictionary *res = [[NSMutableDictionary alloc] init];

    if (returnValue == 0) {
        res[@"result"] = @YES;
        res[@"message"] = @"Successfully logged out";
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsDictionary:res];
    } else {
        res[@"result"] = @NO;
        res[@"message"] = @"ERROR! Failed to log out";
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsDictionary:res];
    }

    [pluginResult setKeepCallback:[NSNumber numberWithBool:YES]];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:callbackId];
}

- (void)onMeetingError:(MobileRTCMeetError)error message:(NSString*)message
{
    if (DEBUG) {
     DDLogDebug(@"onMeetingError:%zd, message:%@", error, message);
    }
    if (error != MobileRTCMeetError_Success) {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:[self getMeetErrorMessage:error]];
    } else {
     pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:[self getMeetErrorMessage:error]];
    }
    [pluginResult setKeepCallback:[NSNumber numberWithBool:YES]];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:callbackId];
}

- (NSString *)getAuthErrorMessage:(MobileRTCAuthError)errorCode
{
    NSString* message = @"";
    switch (errorCode) {
        case MobileRTCAuthError_Success:
            message = @"Authentication success.";
            break;
        case MobileRTCAuthError_KeyOrSecretEmpty:
            message = @"SDK key or secret is empty.";
            break;
        case MobileRTCAuthError_KeyOrSecretWrong:
            message = @"SDK key or secret is wrong.";
            break;
        case MobileRTCAuthError_AccountNotSupport:
            message = @"Your account does not support SDK.";
            break;
        case MobileRTCAuthError_AccountNotEnableSDK:
            message = @"Your account does not support SDK.";
            break;
        case MobileRTCAuthError_Unknown:
            message = @"Unknown error.Please try again.";
            break;
        default:
            message = @"Unknown error.Please try again.";
            break;
    }
    return message;
}

- (NSString *)getMeetErrorMessage:(MobileRTCMeetError)errorCode
{
    NSString * message = @"";
    switch (errorCode) {
        case MobileRTCMeetError_Success:
            message = @"Successfully start/join meeting.";
            break;
        case MobileRTCMeetError_NetworkError:
            message = @"Network issue, please check your network connection.";
            break;
        case MobileRTCMeetError_ReconnectError:
            message = @"Failed to reconnect to meeting.";
            break;
        case MobileRTCMeetError_MMRError:
            message = @"MMR issue, please check mmr configruation.";
            break;
        case MobileRTCMeetError_PasswordError:
            message = @"Meeting password incorrect.";
            break;
        case MobileRTCMeetError_SessionError:
            message = @"Failed to create a session with our sever.";
            break;
        case MobileRTCMeetError_MeetingOver:
            message = @"The meeting is over.";
            break;
        case MobileRTCMeetError_MeetingNotStart:
            message = @"The meeting does not start.";
            break;
        case MobileRTCMeetError_MeetingNotExist:
            message = @"The meeting does not exist.";
            break;
        case MobileRTCMeetError_MeetingUserFull:
            message = @"The meeting has reached a maximum of participants.";
            break;
        case MobileRTCMeetError_MeetingClientIncompatible:
            message = @"The Zoom SDK version is incompatible.";
            break;
        case MobileRTCMeetError_NoMMR:
            message = @"No mmr is available at this point.";
            break;
        case MobileRTCMeetError_MeetingLocked:
            message = @"The meeting is locked by the host.";
            break;
        case MobileRTCMeetError_MeetingRestricted:
            message = @"The meeting is restricted.";
            break;
        case MobileRTCMeetError_MeetingRestrictedJBH:
            message = @"The meeting does not allow join before host. Please try again later.";
            break;
        case MobileRTCMeetError_CannotEmitWebRequest:
            message = @"Failed to send create meeting request to server.";
            break;
        case MobileRTCMeetError_CannotStartTokenExpire:
            message = @"Failed to start meeting due to token exipred.";
            break;
        case MobileRTCMeetError_VideoError:
            message = @"The user's video cannot work.";
            break;
        case MobileRTCMeetError_AudioAutoStartError:
            message = @"The user's audio cannot auto start.";
            break;
        case MobileRTCMeetError_RegisterWebinarFull:
            message = @"The webinar has reached its maximum allowed participants.";
            break;
        case MobileRTCMeetError_RegisterWebinarHostRegister:
            message = @"Sign in to start the webinar.";
            break;
        case MobileRTCMeetError_RegisterWebinarPanelistRegister:
            message = @"Join the webinar from the link";
            break;
        case MobileRTCMeetError_RegisterWebinarDeniedEmail:
            message = @"The host has denied your webinar registration.";
            break;
        case MobileRTCMeetError_RegisterWebinarEnforceLogin:
            message = @"The webinar requires sign-in with specific account to join.";
            break;
        case MobileRTCMeetError_ZCCertificateChanged:
            message = @"The certificate of ZC has been changed. Please contact Zoom for further support.";
            break;
        case MobileRTCMeetError_VanityNotExist:
            message = @"The vanity does not exist";
            break;
        case MobileRTCMeetError_JoinWebinarWithSameEmail:
            message = @"The email address has already been register in this webinar.";
            break;
        case MobileRTCMeetError_WriteConfigFile:
            message = @"Failed to write config file.";
            break;
        case MobileRTCMeetError_RemovedByHost:
            message = @"You have been removed by the host.";
            break;
        case MobileRTCMeetError_InvalidArguments:
            message = @"Invalid arguments.";
            break;
        case MobileRTCMeetError_InvalidUserType:
            message = @"Invalid user type.";
            break;
        case MobileRTCMeetError_InAnotherMeeting:
            message = @"Already in another ongoing meeting.";
            break;
        case MobileRTCMeetError_Unknown:
            message = @"Unknown error.";
            break;
        default:
            message = @"Unknown error.";
            break;
    }
    DDLogDebug(@"getMeetErrorMessage for code %d = '%@'", errorCode, message);
    return message;
}

- (void)onMeetingEndedReason:(MobileRTCMeetingEndReason)reason
{
    DDLogDebug(@"onMeetingEndedReason reason: %d", reason);
    if (reason == 0) {
        [self.commandDelegate evalJs:@"cordova.plugins.Zoom.fireMeetingLeftEvent()"];
    }
    // Invalided if endCallTimer is running
    if(endCallTimer)[endCallTimer invalidate];
}

// Delegate method of MobileRTCUserServiceDelegate to observe when new user joins the meeting
- (void)onSinkMeetingUserJoin:(NSUInteger)userID{
    NSUInteger meetingUserCount = [[MobileRTC sharedRTC] getMeetingService].getInMeetingUserList.count;
    if (meetingUserCount > 2){
        // Added one second delay in view switching to get the UI opearations done when new user joins the call
        dispatch_after(dispatch_time(DISPATCH_TIME_NOW, 1 * NSEC_PER_SEC), dispatch_get_main_queue(), ^{
            [[[MobileRTC sharedRTC] getMeetingService] switchToVideoWall];
            [self hideWaitingForParticipateMessage];
        });
    }else{
        // Added one second delay in view switching to get the UI opearations done when new user joins the call
        if([[MobileRTC sharedRTC] getMeetingService].getInMeetingUserList.count > 1) {
            if(alertMessageTimer) {
                [alertMessageTimer invalidate];
                if(messageAlertViewController && messageAlertViewController.view.superview) {
                    [messageAlertViewController.view removeFromSuperview];
                }
                [[[MobileRTC sharedRTC] getMeetingSettings] setTopBarHidden:NO];
                [[[MobileRTC sharedRTC] getMeetingSettings] setBottomBarHidden:NO];
            }
        }
        dispatch_after(dispatch_time(DISPATCH_TIME_NOW, 1 * NSEC_PER_SEC), dispatch_get_main_queue(), ^{
            [[[MobileRTC sharedRTC] getMeetingService] switchToActiveSpeaker];
            if(meetingUserCount > 1){
                [self hideWaitingForParticipateMessage];
            }
        });
    }
}

// Delegate method of MobileRTCUserServiceDelegate to observe whe user leaves the meeting
- (void)onSinkMeetingUserLeft:(NSUInteger)userID{
    NSUInteger meetingUserCount = [[MobileRTC sharedRTC] getMeetingService].getInMeetingUserList.count;
    if (meetingUserCount > 2){
        // Added one second delay in view switching to get the UI opearations done when user leaves the call
        dispatch_after(dispatch_time(DISPATCH_TIME_NOW, 1 * NSEC_PER_SEC), dispatch_get_main_queue(), ^{
        [[[MobileRTC sharedRTC] getMeetingService] switchToVideoWall];
        });
    }else{
        // Added one second delay in view switching to get the UI opearations done when user leaves the call
        if(meetingUserCount <= 1){
            [self leaveExistingMeeting];
            return;
        }
        dispatch_after(dispatch_time(DISPATCH_TIME_NOW, 1 * NSEC_PER_SEC), dispatch_get_main_queue(), ^{
            [[[MobileRTC sharedRTC] getMeetingService] switchToActiveSpeaker];
        });
    }
}

// Method for adding "Waiting for others to join.." message if there is only one user in meeting.
-(void) addWaitingForParticipantsMessage{
    UIView *meetingView = [[MobileRTC sharedRTC] getMeetingService].meetingView;
    customMessageComponent = [[CustomMessageComponent alloc] initWithFrame:CGRectMake(meetingView.frame.origin.x, meetingView.frame.origin.y, meetingView.frame.size.width, meetingView.frame.size.height)];
    [meetingView addSubview:customMessageComponent];
    [customMessageComponent setMessageLabelText: NSLocalizedString(@"zoom_waiting_message", @"")];
    [customMessageComponent setTranslatesAutoresizingMaskIntoConstraints:NO];
    [[customMessageComponent.widthAnchor constraintEqualToConstant:meetingView.frame.size.width] setActive:YES];
    [[customMessageComponent.heightAnchor constraintEqualToConstant:meetingView.frame.size.height] setActive:YES];
    [[customMessageComponent.leadingAnchor constraintEqualToAnchor:meetingView.leadingAnchor] setActive:YES];
    [[customMessageComponent.trailingAnchor constraintEqualToAnchor:meetingView.trailingAnchor constant:0] setActive:YES];
}

// Method for hiding "Waiting for others to join.." message when others have joined the meeting.
-(void) hideWaitingForParticipateMessage{
    if(customMessageComponent){
        [customMessageComponent setHidden:YES];
    }
}

// Method for ending existing zoom meeting when declined by other participants
-(void) continueEndingMeeting {
    MobileRTCMeetingService *ms = [[MobileRTC sharedRTC] getMeetingService];
    [self showEndingCallPopup:NSLocalizedString(@"zoom_call_declined_message", @"")];
    if(ms.meetingView == nil) {
        [self leaveExistingMeeting];
    }
}



// Show ending zoom meeting popup if call is not answered or declined by other participants
- (void) showEndingCallPopup: (NSString*) endingCallMessage {
    if(![alertMessageTimer isValid]){
        MobileRTCMeetingService *ms = [[MobileRTC sharedRTC] getMeetingService];
        messageAlertViewController = [[MessageAlertViewController alloc] initWithNibName:@"MessageAlertViewController" bundle:nil];
        messageAlertViewController.delegate = self;
        __block int secondsLeft= 8;
        alertMessageTimer = [NSTimer scheduledTimerWithTimeInterval:1.0 repeats:YES block:^(NSTimer * _Nonnull timer) {
            secondsLeft = secondsLeft - 1;
            NSString *alertMessage = [NSString stringWithFormat:endingCallMessage, secondsLeft];
            [messageAlertViewController setAlertMessage:alertMessage];
            if(secondsLeft == 0) {
                [self leaveExistingMeeting];
                [messageAlertViewController.view removeFromSuperview];
                [timer invalidate];
            }
        }];
        [[[MobileRTC sharedRTC] getMeetingSettings] setTopBarHidden:YES];
        [[[MobileRTC sharedRTC] getMeetingSettings] setBottomBarHidden:YES];
        /*If meeting view is available or zoom call is not minimized, adding message alert view to zoom meeting view else adding it to UIApplication window*/
        if(ms.meetingView) {
            [ms.meetingView addSubview:messageAlertViewController.view];
            [messageAlertViewController.view setTranslatesAutoresizingMaskIntoConstraints:NO];
            [[messageAlertViewController.view.leadingAnchor constraintEqualToAnchor:ms.meetingView.leadingAnchor] setActive:YES];
            [[messageAlertViewController.view.trailingAnchor constraintEqualToAnchor:ms.meetingView.trailingAnchor] setActive:YES];
            [[messageAlertViewController.view.topAnchor constraintEqualToAnchor:ms.meetingView.topAnchor] setActive:YES];
            [[messageAlertViewController.view.bottomAnchor constraintEqualToAnchor:ms.meetingView.bottomAnchor] setActive:YES];
        } else {
            UIWindow *window = [[UIApplication sharedApplication] delegate].window;
            messageAlertViewController.view.frame = window.bounds;
            [window addSubview:messageAlertViewController.view];
        }
        NSString *alertMessage = [NSString stringWithFormat:endingCallMessage, secondsLeft];
        [messageAlertViewController setAlertMessage:alertMessage];
    }
}

@end
