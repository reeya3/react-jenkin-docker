pipeline {
  agent any
  stages {
    stage('git config') {
      steps {
        git(url: 'https://github.com/reeya3/react-jenkin-docker', branch: 'main', changelog: true)
      }
    }

    stage('log') {
      steps {
        sh 'ls -la'
      }
    }

    stage('build') {
      steps {
        sh 'docker build -t myreactapp:latest /Users/rajivmanandhar/first-react-app/Dockerfile .'
      }
    }

  }
}