pipeline {
    agent any

    triggers {
        githubPullRequest()
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
    }
}
