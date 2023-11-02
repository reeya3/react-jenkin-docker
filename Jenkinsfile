pipeline {
  agent any
  stages {
    stage('git') {
      steps {
        git(url: 'https://github.com/reeya3/react-jenkin-docker', branch: 'main', poll: true)
      }
    }

    stage('check') {
      parallel {
        stage('check') {
          steps {
            sh '''ls -la

'''
          }
        }

        stage('mysql') {
          steps {
            sh 'npm install mysql --save'
          }
        }

      }
    }

    stage('build') {
      steps {
        sh 'docker build -t react-app .'
      }
    }

    stage('dockerhub login') {
      environment {
        DOCKERHUB_UNAME = 'reeya3'
        DOCKERHUB_PASSWD = 'Resta@08m'
      }
      steps {
        sh 'docker login -u $DOCKERHUB_UNAME -p $DOCKERHUB_PASSWD'
      }
    }

    stage('dockerhub push') {
      steps {
        sh 'docker push reeya3/react-app'
      }
    }

  }
}