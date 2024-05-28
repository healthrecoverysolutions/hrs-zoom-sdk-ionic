//
//  MessageAlertViewController.m
//  PatientConnect Mobile
//
//  Created by Anubhav Saxena on 24/05/24.
//

#import "MessageAlertViewController.h"
@interface MessageAlertViewController ()
@property (weak, nonatomic) IBOutlet UILabel *alertMessageLabel;
@end

@implementation MessageAlertViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/
- (IBAction)okButtonAction:(id)sender {
    [self.view removeFromSuperview];
    [_delegate endMeeting];
}

-(void) setAlertMessage: (NSString*)messageLabelText {
    self.alertMessageLabel.text = messageLabelText;
}
@end
