# Android JWPlayer sample

## Getting started

* Install Android Studio

* Sync your project with gradle. DNA/Mesh SDK is a maven dependency.

The dependency can be found in app's **build.gradle**
```
def dna_version = "3.21.0"
implementation "io.streamroot.dna:dna-core:$dna_version"
implementation "io.streamroot.dna:dna-utils:$dna_version"
```

* Set your Streamroot key in AndroidManifest.xml

```xml
<meta-data
    android:name="io.streamroot.dna.StreamrootKey"
    android:value="YOUR_KEY_HERE" />
```

* Set your JWPlayer key in AndroidManifest.xml

```xml
<meta-data
    android:name="JW_LICENSE_KEY"
    android:value="YOUR_KEY_HERE" />
```

* You can configure Streamroot's SDK in the **PlayerActivity**

* Run from Android Studio