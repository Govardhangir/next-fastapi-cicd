/**********************************************
 * Slack Helper Function (TOP of FILE)
 **********************************************/
def sendSlackMessage(String message) {
    withCredentials([string(credentialsId: 'slack-webhook-ci', variable: 'SLACK_WEBHOOK')]) {
        sh """
          curl -X POST -H 'Content-type: application/json' \
          --data '{\"text\":\"${message}\"}' \
          \$SLACK_WEBHOOK
        """
    }
}

pipeline {
    agent any

    stages {

        /**********************************************
         * Pipeline Start Notification
         **********************************************/
        stage('Pipeline Start') {
            steps {
                script {
                    sendSlackMessage("🔄 CI started: ${env.JOB_NAME} #${env.BUILD_NUMBER}")
                }
            }
        }

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Backend Dependency Install') {
            steps {
                dir('backend') {
                    sh 'pip3 install -r requirements.txt'
                }
            }
        }

        stage('Frontend Dependency Install') {
            steps {
                dir('frontend') {
                    sh 'npm ci'
                }
            }
        }

        stage('Backend Tests') {
            steps {
                dir('backend') {
                    sh 'python3 -m pytest -v'
                }
            }
        }

        stage('Frontend Lint') {
            steps {
                dir('frontend') {
                    sh 'npm run lint'
                }
            }
        }

        /**********************************************
         * SonarQube Scan
         **********************************************/
        stage('SonarQube Scan') {
            steps {
                withSonarQubeEnv('SonarQube') {

                    sh '''
                        sonar-scanner \
                          -Dsonar.projectKey=backend \
                          -Dsonar.projectName=backend \
                          -Dsonar.sources=backend \
                          -Dsonar.language=py
                    '''

                    sh '''
                        sonar-scanner \
                          -Dsonar.projectKey=frontend \
                          -Dsonar.projectName=frontend \
                          -Dsonar.sources=frontend \
                          -Dsonar.language=js
                    '''
                }
            }
        }

        /**********************************************
         * SonarQube Quality Gate (with Slack alert)
         **********************************************/
        stage('Quality Gate') {
            steps {
                script {
                    try {
                        timeout(time: 2, unit: 'MINUTES') {
                            waitForQualityGate abortPipeline: true
                        }
                    } catch (err) {
                        sendSlackMessage("❌ SonarQube Quality Gate FAILED: ${env.JOB_NAME} #${env.BUILD_NUMBER}")
                        throw err
                    }
                }
            }
        }

        /**********************************************
         * Trivy Filesystem Scan (BLOCKING)
         **********************************************/
        stage('Trivy Filesystem Scan') {
            steps {
                script {
                    try {
                        sh '''
                            trivy fs \
                              --exit-code 0 \
                              --severity HIGH,CRITICAL \
                              .
                        '''
                    } catch (err) {
                        sendSlackMessage("❌ Trivy FILESYSTEM scan FAILED (HIGH/CRITICAL): ${env.JOB_NAME} #${env.BUILD_NUMBER}")
                        throw err
                    }
                }
            }
        }

        stage('Docker Image Build') {
            steps {
                sh '''
                    docker build -t backend:ci ./backend
                    docker build -t frontend:ci ./frontend
                '''
            }
        }

        /**********************************************
         * Trivy Image Scan (BLOCKING)
         **********************************************/
        stage('Trivy Image Scan') {
            steps {
                script {
                    try {
                        sh '''
                            trivy image \
                              --exit-code 0 \
                              --severity HIGH,CRITICAL \
                              backend:ci

                            trivy image \
                              --exit-code 0 \
                              --severity HIGH,CRITICAL \
                              frontend:ci
                        '''
                    } catch (err) {
                        sendSlackMessage("❌ Trivy IMAGE scan FAILED (HIGH/CRITICAL): ${env.JOB_NAME} #${env.BUILD_NUMBER}")
                        throw err
                    }
                }
            }
        }

        /**********************************************
         * Push Images to AWS ECR
         **********************************************/
        stage('Push Images to ECR') {
            environment {
                AWS_REGION = "us-east-1"
                AWS_ACCOUNT_ID = "232518997630"
            }

            steps {
                withCredentials([[
                    $class: 'AmazonWebServicesCredentialsBinding',
                    credentialsId: 'aws-ecr-creds'
                ]]) {
                    sh '''
                        aws ecr get-login-password --region $AWS_REGION | \
                        docker login --username AWS --password-stdin \
                        ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com

                        docker tag backend:ci ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/backend:latest
                        docker tag frontend:ci ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/frontend:latest

                        docker push ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/backend:latest
                        docker push ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/frontend:latest
                    '''
                }
            }
        }
    }

    /**********************************************
     * Post Build Notifications
     **********************************************/
    post {
        success {
            script {
                sendSlackMessage("✅ CI SUCCESS: ${env.JOB_NAME} #${env.BUILD_NUMBER}")
            }
        }
        failure {
            script {
                sendSlackMessage("❌ CI FAILED: ${env.JOB_NAME} #${env.BUILD_NUMBER}")
            }
        }
    }
}
