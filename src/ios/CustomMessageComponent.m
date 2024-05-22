//
//  WaitingMessageView.m
//  PatientConnect Mobile
//
//  Created by Anubhav Saxena on 21/05/24.
//

#import "CustomMessageComponent.h"

@implementation CustomMessageComponent

UILabel *waitingMessageLabel;
NSString *messageLabelText = @"";
// Only override drawRect: if you perform custom drawing.
// An empty implementation adversely affects performance during animation.
- (void)drawRect:(CGRect)rect {
    // Drawing code
    waitingMessageLabel = [[UILabel alloc] initWithFrame:CGRectMake(250, 100, 200, 40)];
    waitingMessageLabel.textColor = UIColor.whiteColor;
    waitingMessageLabel.font = [UIFont boldSystemFontOfSize:16];
    waitingMessageLabel.backgroundColor = UIColor.blackColor;
    [waitingMessageLabel setTextAlignment:NSTextAlignmentCenter];
    [waitingMessageLabel.layer setCornerRadius:10.0];
    [waitingMessageLabel setClipsToBounds:YES];
    [waitingMessageLabel setAlpha:0.7];
    [waitingMessageLabel setHidden:NO];
    waitingMessageLabel.text = messageLabelText;
    [self addSubview:waitingMessageLabel];
    [waitingMessageLabel setTranslatesAutoresizingMaskIntoConstraints:NO];
    [[waitingMessageLabel.widthAnchor constraintEqualToConstant:250] setActive:YES];
    [[waitingMessageLabel.heightAnchor constraintEqualToConstant:50] setActive:YES];
    [[waitingMessageLabel.centerXAnchor constraintEqualToAnchor:self.centerXAnchor] setActive:YES];
    [[waitingMessageLabel.topAnchor constraintEqualToAnchor:self.topAnchor constant:125] setActive:YES];
    [self setUserInteractionEnabled:false];
}

-(void) setMessageLabelText: (NSString*) message{
    messageLabelText = message;
}


@end
