# Convention de commit

Il est important d'avoir une convention de commit cohérente et facile à suivre. Cette convention vous aidera à mieux comprendre les changements qui ont été effectués, à les suivre dans le temps et à les organiser.

Nous utilisons la convention de commit cz-conventional-changelog pour nos projets. Cette convention de commit utilise un format de commit standard pour tous les commits :

`type(scope): description`

Voici ce que signifie chaque partie :

**type** : le type de commit représente le type de changement effectué. Les types de commit courants incluent `feat` pour une nouvelle fonctionnalité, `fix` pour une correction de bogue, `docs` pour une mise à jour de la documentation, `refactor` pour une refonte du code, etc.

**scope** : la portée du commit indique l'endroit où les changements ont été effectués. Par exemple, `backend` pour les changements liés au serveur

**description** : une brève description du changement effectué. Il est important que la description soit claire et concise.

Voici quelques exemples de commits conformes à cette convention :
`feat(auth): ajouter une page de connexion`
`fix(ui): corriger la mise en page des boutons`
`docs(README): mettre à jour la documentation pour l'installation`
`refactor(backend): réorganiser le code pour améliorer la performance`

L'utilisation de cette convention de commit rendra votre travail plus facile à suivre et à comprendre pour les autres contributeurs et utilisateurs du projet.
