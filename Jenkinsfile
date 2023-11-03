pipeline {
  agent any
  stages {
    stage('git') {
      steps {
        git(url: 'https://github.com/reeya3/react-jenkin-docker.git', branch: 'main', poll: true, changelog: true)
      }
    }

    stage('install mysql') {
      steps {
        sh 'npm install mysql --save'
      }
    }

    stage('docker build') {
      steps {
        sh 'docker build -t react-app:latest .'
      }
    }

    stage('dockerhub login') {
      steps {
        sh 'docker login'
      }
    }

    stage('docker tag') {
      parallel {
        stage('docker tag') {
          steps {
            sh '''docker tag react-app reeya3/react-app:latest


'''
          }
        }

        stage('docker push') {
          steps {
            sh 'docker push reeya3/react-app:latest'
          }
        }

      }
    }

  }
}