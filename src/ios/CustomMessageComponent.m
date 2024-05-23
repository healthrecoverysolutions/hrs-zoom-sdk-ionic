
#import "CustomMessageComponent.h"

@implementation CustomMessageComponent

UILabel *messageLabel;
NSString *messageLabelText = @"";
// Only override drawRect: if you perform custom drawing.
// An empty implementation adversely affects performance during animation.
- (void)drawRect:(CGRect)rect {
    // Drawing code
    messageLabel = [[UILabel alloc] initWithFrame:CGRectMake(250, 100, 200, 40)];
    messageLabel.textColor = UIColor.whiteColor;
    messageLabel.font = [UIFont boldSystemFontOfSize:16];
    messageLabel.backgroundColor = UIColor.blackColor;
    [messageLabel setTextAlignment:NSTextAlignmentCenter];
    [messageLabel.layer setCornerRadius:10.0];
    [messageLabel setClipsToBounds:YES];
    [messageLabel setAlpha:0.7];
    [messageLabel setHidden:NO];
    messageLabel.text = messageLabelText;
    [self addSubview:messageLabel];
    [messageLabel setTranslatesAutoresizingMaskIntoConstraints:NO];
    [[messageLabel.widthAnchor constraintEqualToConstant:250] setActive:YES];
    [[messageLabel.heightAnchor constraintEqualToConstant:50] setActive:YES];
    [[messageLabel.centerXAnchor constraintEqualToAnchor:self.centerXAnchor] setActive:YES];
    [[messageLabel.topAnchor constraintEqualToAnchor:self.topAnchor constant:125] setActive:YES];
    [self setUserInteractionEnabled:false];
}

-(void) setMessageLabelText: (NSString*) message{
    messageLabelText = message;
}


@end
