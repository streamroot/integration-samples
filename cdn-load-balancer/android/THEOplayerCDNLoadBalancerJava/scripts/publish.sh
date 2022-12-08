#!/usr/bin/env bash

set -eo pipefail

## Consts

FIR_APP='1:211290064157:android:b40ad4835da5ef88dd4df4'

## Script

USAGE='Builds a Sample and publishes it on the default FIR stack.'

# Fetch flavor
variant=''
flavor=''
while true;do
  read -p "Flavor to build ? [modular|unified] : " flavor
  if [[ $flavor == 'modular' ]] ; then
    variant='ModularRelease';
  fi
  if [[ $flavor == 'unified' ]] ; then
    variant='UnifiedRelease';
  fi
  if [[ $variant == '' ]]; then
    echo "Unknown flavor";
  else
    break;
  fi
done

# Fetch notes
read -p 'Release notes ? : ' release_notes

echo "Executing ./gradlew clean assemble${variant}"
(FIREBASE_TARGET=true ./gradlew clean assemble${variant})

echo 'Distribution via firebase CLI'
apk_location=./app/build/outputs/apk/$flavor/release/app-$flavor-release.apk
version_report=`INJECTED_FLAVOR_HINT=$flavor ./gradlew -q getVersionReport | tail -n 1`
firebase appdistribution:distribute $apk_location --app $FIR_APP --groups 'qa' --release-notes "$version_report\n$release_notes"