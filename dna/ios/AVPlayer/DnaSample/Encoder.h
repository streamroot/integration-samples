//
//  Encoder.h
//  DnaSample-iOS
//
//  Created by Samier, Frederic on 23/07/2021.
//  Copyright © 2021 Streamroot. All rights reserved.
//

#ifndef Encoder_h
#define Encoder_h

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface Encoder: NSObject
+ (NSString *)urlencodeWithString: (NSString*) string;
@end

NS_ASSUME_NONNULL_END

#endif /* Encoder_h */
