pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                echo "Checking out source code from GitHub..."
                checkout scm
            }
        }

        stage('Backend Dependency Install') {
            steps {
                echo "Installing backend Python dependencies..."
                dir('backend') {
                    sh '''
                        python3 --version
                        pip3 --version
                        pip3 install --upgrade pip
                        pip3 install -r requirements.txt
                    '''
                }
            }
        }
    }
}
