pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh '/root/.nvm/versions/node/v16.14.0/npm install'
                sh '/root/.nvm/versions/node/v16.14.0/npm run build'
            }
        }
        stage('Test') {
            steps {
                sh '/root/.nvm/versions/node/v16.14.0/npm run test:lint'
                sh '/root/.nvm/versions/node/v16.14.0/npm run test'
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
