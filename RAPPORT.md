# Rapport de Projet - Forum Web 2025
Xinyu CHEN  
Warsamé Ismail

## I / Répartition du travail dans le binôme

| Tâche                     | Xinyu CHEN                         | Warsamé Ismail                  |
|---------------------------|------------------------------------|---------------------------------|
| Côté client               | Composants principaux              | Les API et les styles           |
| Côté serveur et BD        | Server.js et les models de BD      | Les Routes et middleware        |

---

## II / Problèmes rencontrés

**Problème 1 : Serveur qui ne répondait pas**  
On avait mal mis les ports, ce qui a fait que lorsqu'on essayait de Login ou Register ça nous mettait un erreur "Failed to Fetch"  
***-> Problème réglé.***

**Problème 2 : Difficulté pour connecter la base des données avec le front-end**  
On a eu un peu de difficulté avec les API, on a pas su au début comment récupérer les données et les donner aux composants. Quand nous avons résolu ça il se trouve que rien ne s'affichait, car le port dans l'url de l'API était mal mis depuis le début comme le serveur, on a pris du temps à remarquer le problème. 
***-> Problème réglé.***

**Problème 3 : Le code ne fonctionne pas sur le Mac de Xinyu**  
On a fait les modification pour que le site fonctionne parfaitement chez Warsamé sur un pc windows, mais sur le mac de Xinyu malgré que les codes soient identiques, lorsqu'on essaye de Login ou Register, il affiche le message "Failed to excute ‘json’ on ‘Response’: Unexpected end of JSON input". 
***-> Problème non résolu.***

## III / Ce qui reste à faire

- Implémenter une façon d'initier une conversation avec quelqu'un.
- La fonctionnalité pour changer le thème du site.
- Faire un statistique de nombre de vue, et en fonction de nombre de vue faire une catégorie "tendance" des topics.

## IV / Choix de modélisation

Par rapport au document de mi-parcours, nous avons fait quelques modifications : 

- L'hiérarchie n'est plus le même, nous avons fait mainContent le composant père de HomePage, LoginPage, ProfilePage et PrivateMessagesPage. C'est plus clair en terme de présentation.
- Nous avons enlevé la page tendance qui est un peu trop complexe pour nous de le mettre en place.
- Le reste est inchangé