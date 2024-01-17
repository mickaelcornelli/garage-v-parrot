Construction du projet : +/- 4h de code

Le but de ce projet était de montrer à un collaborateur que l'on peut coder un site sans framework et base de donné en site statique uniquement via de l'IA.
CHAT-GPT a bien entendu été guidé pour créer le contenu.


Le site site contient : 
- Une barre de navigation

Des <sections> qui regroupe les différents thématique demandé par le sujet du pdf
- présentation de l'entreprise
- les services proposés
- une liste de véhicule
- une barre de filtre
- Un affichage de l'équipe
- Un formulaire de contact
- Horaires d'ouverture/fermeture
- Défilement des avis clients
- Barre des réseaux sociaux
- Footer avec copyright
- Modal de login
- Modal d'affichage du détail d'un véhicule
- Lecture d'un son custom à l'arrivé sur le site (créé via une IA suno.ai)

La structure du projet se décompose ainsi :

index.html est la page principale et racine du projet
Le dossier css comprend le styling de la page (style.css)
Le dossier audio comprend les jingle de garage V.parrot sous différentes versions
Le dossier js permet d'utiliser des script pour permettre les défilements smooth en cliquant sur des div des services, de créer des donnés de détails de véhicule custom et de les afficher sur un modal en écrivant sur le html via js. Il permet aussi de customiser du style en injectant des images background custome ou de faire apparaitre disparaitre des div (login, details véhicule ...)
Le dossier assets comprend les images (favicon, logo et toutes les images répertorier dans des folders spécifique pour plus de clareté). On aurait pu y mettre également les fonts.
Certainnes images ont été créé via Dall-e Chat GPT
Les images libre de droits (no copyright) tiré de unsplash, chatgpt, et autres sites.
Le choix des extensions des images:
 PNG -> véhicules (aucun arriere plan) 
 WEBP (meilleure compression du poid/qualité)
