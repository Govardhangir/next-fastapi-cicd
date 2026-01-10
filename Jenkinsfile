pipeline {
    agent any

    triggers {
        githubPullRequest()
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo "Checking out source code from GitHub..."
                checkout scm
            }
        }
    }
}
