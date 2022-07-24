VERSION="22.06"

Pod::Spec.new do |s|
    s.name              = 'LumenMeshAVPlayerPlugin'
    s.version           = VERSION
    s.swift_version     = '5.5'
    s.summary           = 'Lumen Mesh SDK AVPlayer plugin, a new way to deliver large-scale OTT video'
    s.homepage          = 'https://www.streamroot.io/'
    s.author            = { 'Name' => 'support-team@streamroot.io' }
    s.license      = {
        :type => 'Copyright',
        :text => 'Copyright 2022 Streamroot. See the terms of service at https://www.streamroot.io/'
    }
    s.platform          = :ios
    s.source            = { :git => 'https://github.com/streamroot/lumen-delivery-client-plugin-avplayer.git',  :tag => "#{VERSION}"}
    s.source_files = 'AVPlugin/*.swift'
    s.ios.deployment_target = '10.0'
    s.tvos.deployment_target = '10.0'
    s.dependency 'LumenMeshSDK', "~> #{VERSION}.0"
    s.pod_target_xcconfig = {
        'EXCLUDED_ARCHS[sdk=iphonesimulator*]' => 'arm64',
        'EXCLUDED_ARCHS[sdk=appletvsimulator*]' => 'arm64'
    }
    s.user_target_xcconfig = {
        'EXCLUDED_ARCHS[sdk=iphonesimulator*]' => 'arm64',
        'EXCLUDED_ARCHS[sdk=appletvsimulator*]' => 'arm64'
    }
end