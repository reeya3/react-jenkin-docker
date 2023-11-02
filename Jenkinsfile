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

  }
}