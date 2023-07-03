# AdministrationBookApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

mon application est un outil de gestion de librairie dans lequel nous avons des livres classes par categorie, des clients qui peuvent effectuer des prets. L'objectif est de proposer un outil qui permet à un bibliothécaire la possibilité de gérer l'insertion dans son système, de nouveaux livres, de nouveaux clients et de réaliser des prêts de livres à ces derniers.

expression du besion:

User Story 1 : en tant qu'administrateur de la bibliothèque, je dois pouvoir ajouter un nouveau livre, afin d'augmenter l'effectif des livres du système.
User Story 2 : en tant qu'administrateur de la bibliothèque, je dois pouvoir rechercher un livre par une partie ou totalité de son titre, afin de visualiser l'ensemble de ses informations.
User Story 3 : en tant qu'administrateur de la bibliothèque, suite à une recherche de livres, je dois pouvoir avoir la possibilité de modifier ou de supprimer chacun des livres sur la liste qui s'affiche.
User Story 4 : en tant qu'administrateur de la bibliothèque, je dois pouvoir ajouter un nouveau client, afin d'augmenter l'effectif des clients du système.
User Story 5 : en tant qu'administrateur de la bibliothèque, je dois pouvoir rechercher un client par son e-mail ou par une partie ou totalité de son nom de famille, afin de visualiser l'ensemble de ses informations.
User Story 6 : en tant qu'administrateur de la bibliothèque, suite à une recherche de clients, je dois pouvoir avoir la possibilité de modifier ou de supprimer chacun des clients sur la liste qui s'affiche.
User Story 7 : en tant qu'administrateur de la bibliothèque, je dois pouvoir ajouter un nouveau prêt, afin de réaliser la connexion entre un livre sorti de la bibliothèque et son emprunteur (client enregistré).
User Story 8 : en tant qu'administrateur de la bibliothèque, je dois pouvoir rechercher la liste des prêts d'un client via son e-mail et la liste des prêts réalisés jusqu'à une certaine date, afin de visualiser l'historique.
User Story 9 : en tant qu'administrateur de la bibliothèque, suite à une recherche de prêts, je dois pouvoir avoir la possibilité de modifier ou de clôturer chacun des prêts sur la liste qui s'affiche.
User Story 10 : en tant qu'administrateur de la bibliothèque, suite à une recherche de prêts, je dois pouvoir avoir la possibilité d'envoyer un mail à un emprunteur, afin de lui passer une information utile.
User Story 11 : en tant qu'administrateur de la bibliothèque, je dois pouvoir avoir sur mon application, un menu général qui me permet d'accéder à la page de gestion des livres, celle des clients et celle des prêts ; afin d'être plus efficace dans l'utilisation de l'application. Cette liste de User stories n'est pas exhaustive. Nous ferons abstraction dans le cadre de cet article de l'aspect sécurisation de l'application décliné par l'authentification de l'administrateur pour avoir accès aux différentes possibilités citées dans les US ci-dessus.
choix

la partie Front-end : .CSS/HTML . Boostrap . Angular pour la dynamisation et la communication entre le front-end et le back-end
partie Back-end: . Framework Spring boot
Base de donnees . MYSQL
