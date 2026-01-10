pipeline {
    agent any

    environment {
        SONAR_PROJECT_KEY_BACKEND = "backend"
        SONAR_PROJECT_KEY_FRONTEND = "frontend"
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Backend Dependency Install') {
            steps {
                dir('backend') {
                    sh '''
                        pip3 install -r requirements.txt
                    '''
                }
            }
        }

        stage('Frontend Dependency Install') {
            steps {
                dir('frontend') {
                    sh '''
                        npm ci
                    '''
                }
            }
        }

        stage('Backend Tests') {
            steps {
                dir('backend') {
                    sh '''
                        python3 -m pytest -v
                    '''
                }
            }
        }

        stage('Frontend Lint') {
            steps {
                dir('frontend') {
                    sh '''
                        npm run lint
                    '''
                }
            }
        }

        stage('SonarQube Scan') {
            steps {
                withSonarQubeEnv('sonarqube') {
                    sh '''
                        sonar-scanner \
                          -Dsonar.projectKey=${SONAR_PROJECT_KEY_BACKEND} \
                          -Dsonar.projectName=backend \
                          -Dsonar.sources=backend \
                          -Dsonar.language=py
                    '''

                    sh '''
                        sonar-scanner \
                          -Dsonar.projectKey=${SONAR_PROJECT_KEY_FRONTEND} \
                          -Dsonar.projectName=frontend \
                          -Dsonar.sources=frontend \
                          -Dsonar.language=js
                    '''
                }
            }
        }
    }
}
