pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test:lint'
                sh 'npm run test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'mkdir -p production'
                sh 'cp -R build/* production/'
                sh 'echo "Déploiement terminé avec succès !"'
            }
        }
    }
}
