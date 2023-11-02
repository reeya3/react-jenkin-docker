pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }

  }
  stages {
    stage('git') {
      steps {
        git(url: 'https://github.com/reeya3/react-jenkin-docker', branch: 'main', poll: true)
      }
    }

    stage('check') {
      steps {
        sh 'ls -la'
      }
    }

    stage('build') {
      steps {
        sh 'docker build -f react-app:latest react-jenkin-docker/Dockerfile .'
      }
    }

  }
}