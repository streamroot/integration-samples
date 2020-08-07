#!/bin/sh

# Updates the versions in all the DNA samples build.gradle and makes sure the projects build
# Android studio / sdk / ndks need to be installed and set on host machine
# Tested with OSX

set -eo pipefail

YELLOW="\033[1;33m"
RST="\033[0m"

last_version=`curl -s https://sdk.streamroot.io | grep -Eo '<Key>android/io/streamroot/ctl/delivery/client/orchestrator-sdk/[0-9\.]*/' | grep -Eo '[0-9\.]+' | sort -V | tail -1`
dc_version=''

if [ -z "$last_version" ]
then
    echo "Couldn't fetch last ORCH version"
    read -p 'ORCH version ? : ' dc_version
else
    read -p "Update to ORCH version $last_version ? (blank = accept, else specify version) : " override_version
    if [ -z "$override_version" ]
    then
        dc_version=$last_version
    else
        dc_version=$override_version
    fi
fi

if [ -z "$dc_version" ]
then
    echo "Aborting ... (undefined version)"
    exit 1
fi

echo "Version will be updated to $YELLOW$dc_version$RST"

echo "Updating version ..."
LC_ALL=C find . -name 'build.gradle' -exec sed -i '' -e "s/def dc_version = \".*\"/def dc_version = \"$dc_version\"/g" {} \;
echo "Building project ..."
cd AllSamples && ANDROID_SDK_ROOT=$ANDROID_SDK ./gradlew clean assembleDebug