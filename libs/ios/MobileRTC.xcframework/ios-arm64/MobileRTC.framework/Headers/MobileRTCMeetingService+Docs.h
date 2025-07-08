//
//  MobileRTCMeetingService+Docs.h
//  MobileRTC
//
//  Created by ZOOM  on 2024/12/19.
//  Copyright © 2024 Zoom Video Communications, Inc. All rights reserved.
//

#import <MobileRTC/MobileRTC.h>



@interface MobileRTCMeetingService (Docs)

/**
 * Determine whether the current meeting supports the Docs or not.
 * @return true means the current meeting supports the Docs, false means the Docs is not supported.
 */
- (BOOL)isSupportDocs;

/**
 * Determine whether the current user can start share Doc or not.
 * @return The reason that no one can start share the Doc, see {@link CannotShareReasonType}.
 */
- (MobileRTCCannotShareReasonType)canStartShareDoc;

/*!
 @brief show Doc  or  DocDashboardView need to set  parent view controller. If Doc is activing(MobileRTCDocsStatus_Start),that can show activing Doc.
 @param parentVC which use to present ViewController
 @warning The function only for Custom UI. This method is a prerequisite for using doc. Suggest to call this function in "onDocsStatusChanged:" for doc status.
 @return If the function succeeds, the return value is MobileRTCSDKError_Success.
 */
- (MobileRTCSDKError)showDocByParentViewCtroller:(UIViewController* _Nonnull)parentVC;

/*!
 @brief Show the dashboard web view window.
 @warning The function only for Custom UI.
 @return If the function succeeds, the return value is MobileRTCSDKError_Success.
 */
- (MobileRTCSDKError)showDocDashboardView;

/*!
 @brief dismiss Doc  Dashboard
 @warning The function only for Custom UI.
 */
- (void)dismissDocOrDashboardView;

/**
 * Determine whether the current user can set Docs option or not.
 * @return true means the current user can set Docs option, false means the user can not set Docs option.
 */
- (BOOL)canSetDocsOption;

/**
 * Set the setting option for Docs who can share.
 *
 * @param option the setting for  who can share,{@link SDKDocsShareOption}
 * @return If the function succeeds, the return value is SDKErr_Success. {@link MobileRTCSDKError}
 */
-(MobileRTCSDKError)setDocsShareOption:(MobileRTCDocsShareOption)option;

/**
 * Get the setting option for Docs who can share.
 *
 * @return option  see{@link SDKDocsShareOption}
 */
-(MobileRTCDocsShareOption)getDocsShareOption;

/**
 * Set the setting option for Docs who can initiate new Docs.
 *
 * @param option Setting option for  who can initiate new Docs,,{@link SDKDocsCreateOption}
 * @return If the function succeeds, the return value is SDKErr_Success. {@link MobileRTCSDKError}
 */
-(MobileRTCSDKError)setDocsCreateOption:(MobileRTCDocsCreateOption)option;

/**
 * Get the setting option for  who can initiate new Docs.
 *
 * @return option see{@link SDKDocsCreateOption}
 */
-(MobileRTCDocsCreateOption)getDocsCreateOption;

/**
 * Query if other user is sharing docs.
 *
 * @return YES  means sharing successfully, No not.
 */
-(BOOL)isOtherSharingDocs;

/**
 * Query if the current user is sharing docs successfully.
 *
 * @return YES  means sharing successfully, No not.
 */
-(BOOL)isSharingDocsOut;


@end


