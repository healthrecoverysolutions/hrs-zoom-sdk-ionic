
#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN
@protocol ZoomCallHandlerDelegate <NSObject>
@optional
- (void)endMeeting;
@end
@interface MessageAlertViewController : UIViewController
@property (nonatomic, weak) id <ZoomCallHandlerDelegate> delegate;
-(void) setAlertMessage: (NSString*)messageLabelText;
@end

NS_ASSUME_NONNULL_END
