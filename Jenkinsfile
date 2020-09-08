node{
environment {
    registry = "https://hub.docker.com/repository/docker/thankachitra/nodejsrepo"
    registryCredential = "dockerhub"
	dockerImage ="";
  }
    parameters {
        string(name: 'Greeting', defaultValue: 'welcome to DevOps', description: 'How should I expert in this DevOps world?')
    }
    parameters {
        string(name: 'registry', defaultValue: 'https://hub.docker.com/repository/docker/thankachitra/nodejsrepo', description: 'How should I expert in this DevOps world?')
    }
     parameters {
        string(name: 'registryCredential', defaultValue: 'dockerhub', description: 'How should I expert in this DevOps world?')
    }
        stage('Example') {
                echo "${params.Greeting} World!"
                echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
        }
        
	
	
	stage('Cloning our Git') {
	
			git 'https://github.com/thankachitra/helloworld.git'
	}

	stage('create docker image') {
		echo "asfdasfasd"
		echo "${params.registryCredential}"
		
		
		sh "docker build --pull --no-cache -t 'my-image:${env.BUILD_NUMBER}' ."
		
		docker.withRegistry( 'https://hub.docker.com/repository/docker/thankachitra/nodejsrepo', 'dockerhub' ) {
		sh "docker push 'my-image:${env.BUILD_NUMBER}'"
		echo "aaaaaaaaa"
		}
			echo "bbbbbbbbbb"
	}
	
	
        
	stage('Cleaning upRemove Unused docker image') {
	
		sh "docker rmi $registry:$BUILD_NUMBER"
	}
	
}