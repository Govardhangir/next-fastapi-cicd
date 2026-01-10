pipeline {
    agent any

    triggers {
        githubPullRequests()
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo "Checking out source code from GitHub PR..."
                checkout scm
            }
        }
    }
}
