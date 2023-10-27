package lumen

import org.gradle.api.Plugin
import org.gradle.api.Project
import org.gradle.api.artifacts.repositories.MavenArtifactRepository
import org.gradle.api.Action

class DeliveryClientGradlePlugin implements Plugin<Project> {
    void apply(Project project) {

        // Add repositories
        project.getRepositories().maven(new Action<MavenArtifactRepository>() {
            @Override
            void execute(MavenArtifactRepository mavenArtifactRepository) {
                mavenArtifactRepository.setUrl('https://sdk.streamroot.io/android')
            }
        })
        project.getRepositories().maven(new Action<MavenArtifactRepository>() {
            @Override
            void execute(MavenArtifactRepository mavenArtifactRepository) {
                mavenArtifactRepository.setUrl('https://beta.streamroot.io/android')
            }
        })
        project.getRepositories().mavenCentral()
        project.getRepositories().google()

        // Add dependencies
        project.getDependencies().create('io.streamroot.lumen.delivery.client:mesh-exo-2.16-plugin:22.03')
        project.getDependencies().create('io.streamroot.lumen.delivery.client:mesh-sdk-utils:22.03.24-pocboris')
    }
}