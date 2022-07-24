ORCHESTRATOR_SDK_POD_NAME = 'LumenOrchestratorSDK'
MESH_SDK_POD_NAME = 'LumenMeshSDK'
IOS_TARGET_VERSION = '10.0'
TVOS_TARGET_VERSION = '10.0'

use_frameworks!

workspace 'avplugin.xcworkspace'

abstract_target 'Plugin' do
  project 'AVPlugin/AVPlugin'

  abstract_target 'Mesh' do
    pod MESH_SDK_POD_NAME

    target 'LumenAVMeshPlugin' do
      platform :ios, IOS_TARGET_VERSION
    end

    target 'LumenAVMeshPluginTV' do
      platform :tvos, TVOS_TARGET_VERSION
    end
  end

  abstract_target 'Orchestrator' do
    pod ORCHESTRATOR_SDK_POD_NAME

    target 'LumenAVOrchestratorPlugin' do
      platform :ios, IOS_TARGET_VERSION
    end

    target 'LumenAVOrchestratorPluginTV' do
      platform :tvos, TVOS_TARGET_VERSION
    end
  end
  
  abstract_target 'PluginTests' do
    target 'LumenAVMeshPluginTests' do
      platform :ios, IOS_TARGET_VERSION
    end
    target 'LumenAVMeshPluginTVTests' do
      platform :tvos, TVOS_TARGET_VERSION
    end
    target 'LumenAVOrchestratorPluginTests' do
      platform :ios, IOS_TARGET_VERSION
    end
    target 'LumenAVOrchestratorPluginTVTests' do
      platform :tvos, TVOS_TARGET_VERSION
    end
  end
end

abstract_target 'DemoApp' do
  project 'AVPlayerDemo/AVPlayerDemo'

  abstract_target 'Mesh' do
    pod MESH_SDK_POD_NAME

    target 'AVPlayerMeshDemo' do
      platform :ios, IOS_TARGET_VERSION
    end
  
    target 'AVPlayerMeshDemoTV' do
      platform :tvos, TVOS_TARGET_VERSION
    end
  end

  abstract_target 'Orchestrator' do
    pod ORCHESTRATOR_SDK_POD_NAME

    target 'AVPlayerOrchestratorDemo' do
      platform :ios, IOS_TARGET_VERSION
    end
  
    target 'AVPlayerOrchestratorDemoTV' do
      platform :tvos, TVOS_TARGET_VERSION
    end
  end
end

post_install do |installer|
  installer.pods_project.targets.each do |target|
    target.build_configurations.each do |config|
      config.build_settings['EXPANDED_CODE_SIGN_IDENTITY'] = ""
      config.build_settings['CODE_SIGNING_REQUIRED'] = "NO"
      config.build_settings['CODE_SIGNING_ALLOWED'] = "NO"
      config.build_settings['ENABLE_BITCODE'] = "YES"
      config.build_settings["EXCLUDED_ARCHS[sdk=iphonesimulator*]"] = "arm64"
      if config.name == "Debug"
        cflags = config.build_settings['OTHER_CFLAGS'] || ['$(inherited)']
        cflags << '-fembed-bitcode-marker'
        config.build_settings['BITCODE_GENERATION_MODE'] = "marker"
      else
        cflags = config.build_settings['OTHER_CFLAGS'] || ['$(inherited)']
        cflags << '-fembed-bitcode'
        config.build_settings['BITCODE_GENERATION_MODE'] = "bitcode"
      end
        config.build_settings['OTHER_CFLAGS'] = cflags
    end
  end
end
