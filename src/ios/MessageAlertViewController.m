
#import "MessageAlertViewController.h"
@interface MessageAlertViewController ()
@property (weak, nonatomic) IBOutlet UILabel *alertMessageLabel;
@end

@implementation MessageAlertViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
}

// IBAction method for ok button
- (IBAction)okButtonAction:(id)sender {
    [self.view removeFromSuperview];
    [_delegate endMeeting];
}

// Method for setting message text on alert view
-(void) setAlertMessage: (NSString*)messageLabelText {
    self.alertMessageLabel.text = messageLabelText;
}
@end
