
pipeline {
environment {
    registry = "thankachitra/nodejsrepo"
    registryCredential = "dockerhub"
	def dockerImage ="";
  }
    agent any
    parameters {
        string(name: 'Greeting', defaultValue: 'welcome to DevOps', description: 'How should I expert in this DevOps world?')
    }
    stages {
        stage('Examplea') {
            steps {
                echo "${params.Greeting} World!"
                echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
            }
        }
        
	//stage('Checkout') {
			 // Get helloworld node js from GitHub
	//		 checkout([  
	//		            $class: 'GitSCM', 
	//		            branches: [[name: 'refs/heads/master']], 
	//		            doGenerateSubmoduleConfigurations: false, 
	//		            extensions: [[$class: 'RelativeTargetDirectory', relativeTargetDir: 'helloworld']], 
	//		            submoduleCfg: [], 
	//		            userRemoteConfigs: [ url: 'https://thankachitra:Abichithu123...@https://github.com/thankachitra/helloworld.git']
	//		        ])
	//		}
	
	stage('Cloning our Git') {
		steps {
			git 'https://github.com/thankachitra/helloworld.git'
		}
	}
      stage('Build image') {
            steps {
                echo 'Starting to build docker image'
				 echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
                script {
						//dockerImage = docker.build("my-image:${env.BUILD_NUMBER}")
						docker.build registry + ":$BUILD_NUMBER"
						docker.withRegistry( '', registryCredential ) {
							dockerImage.push()
						}
						//   withDockerRegistry([ credentialsId: "dockerhub	", url: "https://hub.docker.com/repository/docker/thankachitra/nodejsrepo" ]) {
						 // following commands will be executed within logged docker registry
						 // sh docker push dockerImage
						 //dockerImage.push();
						}
                }
            }
        
	stage('Cleaning upRemove Unused docker image') {
		steps{
		sh "docker rmi $registry:$BUILD_NUMBER"
		}
	}
	}
}