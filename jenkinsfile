// Declarative //
pipeline {
    agent any
    // environment { 
    //     OTEL_LOGS_EXPORTER="otlp"
    // }
    stages {
        stage('Build') {
            steps {
                echo 'Building...'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
// Script //
// node {
//     stage('Build') {
//         echo 'Building.....'
//     }
//     stage('Test') {
//         echo 'Building.....'
//     }
//     stage('Deploy') {
//         echo 'Deploying.....'
//     }
// }
