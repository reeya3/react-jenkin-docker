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

  }
}