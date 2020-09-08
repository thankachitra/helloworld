
pipeline {

  agent any

  stages {
 
  	stage('Example') {
  		 steps {
                echo "${params.Greeting} World!"
                echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
               }
    }
    stage('Docker Build') {
		 steps {
		  git 'https://github.com/thankachitra/helloworld.git'
		sh 'docker build -t my-image:latest .'
		 }
    }
    
     
	

    stage('Docker Push') {
    steps {
   //    withCredentials([usernamePassword(credentialsId: 'dockerHub1', passwordVariable: 'Abcd123456', usernameVariable: 'thankachitra')]) {
     //     sh "docker login -u 'thankachitra' -p 'Abcd123456'"
       //   sh 'docker push my-image:latest'
        //}
        script{
	        docker.withRegistry( 'https://hub.docker.com/repository/docker/thankachitra/nodejsrepo', 'dockerhub' ) {
	        sh "docker login -u 'thankachitra' -p 'Abcd123456'"
			sh "docker push 'my-image:${env.BUILD_NUMBER}'"
			echo "aaaaaaaaa"
			}
		}
        
      }
    }
  }
}
