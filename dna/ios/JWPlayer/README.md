# iOS JWPlayer sample

## Getting started

* Install [CocoaPods](https://cocoapods.org/)

* Install dependencies from this repo's root directory
```
pod install
```

* Set your Streamroot key in SRConfig class

* Set your JWPlayer key in Info.plist (key JWPlayerKey)

* Set your other stream information in SRConfig

* Build / run using Xcode

## Updating JWPlayer

Simply change the JWPlayer pod version in the Podfile. Rerun pod install after each change.

## Updating Streamroot

Simply change the StreamrootSDK pod version in the Podfile.  
Streamroot is linked as pod. If integrated as .framework, change the integration_type in the Podfile to :framework. Rerun pod install after each change.