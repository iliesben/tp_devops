# Gestion et création des branches

Dans ce document, nous allons aborder les pratiques recommandées pour la gestion et la création des branches dans notre projet.

## Branches principales

Nous avons deux branches principales dans notre projet :

**master** : c'est la branche de production. Elle doit contenir uniquement le code qui a été testé et validé.
**staging** : c'est la branche de pré-production. Elle contient le code qui a été validé en développement et qui est en attente de déploiement sur le serveur de production.

## Branches secondaires

Pour faciliter la gestion des fonctionnalités, des corrections de bugs et des refactorisations, nous recommandons l'utilisation des branches suivantes :

- **feat/** : cette branche est utilisée pour les nouvelles fonctionnalités. Les noms de branches doivent être descriptifs et inclure l'identifiant de la tâche correspondante si elle existe.

- **bug/** : cette branche est utilisée pour les corrections de bugs. Les noms de branches doivent être descriptifs et inclure l'identifiant de la tâche correspondante si elle existe.

- **refacto/** : cette branche est utilisée pour les refactorisations de code. Les noms de branches doivent être descriptifs et inclure l'identifiant de la tâche correspondante si elle existe. Il est important de s'assurer que la refactorisation n'entraîne pas de nouveaux bugs ou de régressions.

- **develop/** : cette branche est utilisée pour la fusion des branches de fonctionnalités, de corrections de bugs et de refactorisations. Elle doit être synchronisée avec la branche de pré-production (staging).

- **doc/** : cette branche est utilisée pour l'ajout de la documentation ou de standard uniquement.

## Processus de création de branche

Lors de la création d'une nouvelle branche, il est recommandé de suivre les étapes suivantes :

1. S'assurer que la branche principale à partir de laquelle la branche sera créée est à jour (en récupérant les dernières modifications).
2. Nommer la branche de manière descriptive en utilisant le préfixe correspondant (feat/, bug/, refacto/).
3. Créer la branche à partir de la branche principale appropriée (généralement master).
4. Travailler sur la branche de manière isolée.
5. Faire régulièrement des commits pour éviter des conflits lors de la fusion avec la branche principale.
6. Avant de faire une Pull Request, s'assurer que le code est à jour avec la branche principale à partir de laquelle la branche a été créée.
7. Créer la Pull Request

## Geste technique

- `git branch` : cette commande affiche une liste de toutes les branches locales de votre dépôt Git. Utilisez l'option -a pour afficher toutes les branches, y compris les branches distantes.

- `git checkout` : cette commande permet de basculer entre différentes branches. Pour basculer vers une nouvelle branche, utilisez `git checkout -b nom-de-la-branche`. Pour revenir à la branche précédente, utilisez `git checkout -`.

- `git pull` : cette commande permet de récupérer les dernières modifications à partir d'une branche distante et de les fusionner avec votre branche locale. Utilisez git pull origin nom-de-la-branche pour récupérer les modifications de la branche distante spécifiée.

- `git merge` : cette commande permet de fusionner une branche avec une autre branche. Par exemple, pour fusionner une branche `feat/nouvelle-fonctionnalité` avec la branche `develop/`, utilisez `git checkout develop` suivi de `git merge feat/nouvelle-fonctionnalité`.

- `git rebase` : cette commande permet de réorganiser l'historique des commits d'une branche. Utilisez git rebase develop pour réorganiser les commits de votre branche actuelle par rapport à la branche develop.
