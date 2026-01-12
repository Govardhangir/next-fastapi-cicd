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

/**********************************************
 * Deployment Slack Helper Function
 **********************************************/
def sendDeploySlackMessage(String message) {
    withCredentials([string(credentialsId: 'slack-webhook-deploy', variable: 'SLACK_WEBHOOK')]) {
        sh """
          curl -X POST -H 'Content-type: application/json' \
          --data '{\"text\":\"${message}\"}' \
          \$SLACK_WEBHOOK
        """
    }
}

pipeline {
    agent any

    environment {
        ALB_LISTENER_ARN = 'arn:aws:elasticloadbalancing:us-east-1:232518997630:listener/app/prod-alb/d61981d011e80913/684277bc44b75d9a'
        BLUE_TG_ARN     = 'arn:aws:elasticloadbalancing:us-east-1:232518997630:targetgroup/prod-blue-tg/da1fe206743a01f5'
        AWS_REGION      = 'us-east-1'
    }

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
         * Frontend Tests (ADDED — NO MODIFICATIONS)
         **********************************************
        stage('Frontend Tests') {
            steps {
                echo "Running frontend tests with Jest..."
                dir('frontend') {
                    sh '''
                        npm run test -- --watch=false
                    '''
                }
            }
        }
        /

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
         * SonarQube Quality Gate
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
         * Trivy Filesystem Scan
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
                        sendSlackMessage("❌ Trivy FILESYSTEM scan FAILED: ${env.JOB_NAME} #${env.BUILD_NUMBER}")
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
         * Trivy Image Scan
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
                        sendSlackMessage("❌ Trivy IMAGE scan FAILED: ${env.JOB_NAME} #${env.BUILD_NUMBER}")
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

        /**********************************************
         * Manual Approval for Production
         **********************************************/
        stage('Manual Approval for Production') {
            steps {
                script {
                    sendDeploySlackMessage("⏸️ Waiting for MANUAL APPROVAL to deploy to PRODUCTION: ${env.JOB_NAME} #${env.BUILD_NUMBER}")

                    input(
                        message: 'Approve production deployment?',
                        ok: 'Approve & Deploy',
                        submitter: 'admin'
                    )
                }
            }
        }

        /**********************************************
         * Deployment Started
         **********************************************/
        stage('Deployment Started') {
            steps {
                script {
                    sendDeploySlackMessage("🚀 Deployment STARTED: ${env.JOB_NAME} #${env.BUILD_NUMBER}")
                }
            }
        }

        /**********************************************
         * Manual Rollback Trigger (CONDITIONAL FLAG)
         **********************************************/
        stage('Manual Rollback Trigger') {
            steps {
                script {
                    env.ROLLBACK_APPROVED = input(
                        message: 'Rollback production to BLUE environment?',
                        ok: 'ROLLBACK',
                        submitter: 'admin'
                    )
                }
            }
        }

        /**********************************************
         * Rollback: Switch Traffic to BLUE
         **********************************************/
        stage('Rollback: Switch Traffic to BLUE') {
            when {
                expression { env.ROLLBACK_APPROVED != null }
            }
            steps {
                echo "Rolling back traffic to BLUE environment..."

                withCredentials([[
                    $class: 'AmazonWebServicesCredentialsBinding',
                    credentialsId: 'aws-ecr-creds'
                ]]) {
                    sh '''
                      aws elbv2 modify-listener \
                        --region $AWS_REGION \
                        --listener-arn $ALB_LISTENER_ARN \
                        --default-actions Type=forward,TargetGroupArn=$BLUE_TG_ARN
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
                sendDeploySlackMessage("✅ Deployment SUCCESS: ${env.JOB_NAME} #${env.BUILD_NUMBER}")
            }
        }
        failure {
            script {
                sendSlackMessage("❌ CI FAILED: ${env.JOB_NAME} #${env.BUILD_NUMBER}")
                sendDeploySlackMessage("❌ Deployment FAILED: ${env.JOB_NAME} #${env.BUILD_NUMBER}")
            }
        }
    }
}
