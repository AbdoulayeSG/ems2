# Site EMS (base)
**Lancer** : ouvrir `index.html` (aucun build, aucune dépendance). Déploiement : copier le dossier sur tout hébergement statique ; adapter l'URL dans `sitemap.xml` et `robots.txt`.
**Structure** : `css/styles.css` (variables en tête : couleurs, polices), `js/data.js` (formations, modifiables), `js/main.js` (en-tête et pied de page communs, onglets, animations, formulaire), pages `*.html`.
**Images** : déposer des photos officielles dans `assets/images/` (`hero.jpg`, `mission.jpg`) ; le cadre s'affiche tant qu'elles sont absentes. Vérifier les droits avant toute reprise d'images de presse.
**Logo** : aucun logo officiel fourni ; l'en-tête utilise un monogramme texte à remplacer dans `js/main.js`.
**Concours** : mettre à jour `admission.html` (bloc « Prochaine session », archives) et déposer les PDF dans `assets/documents/`.
**Limites** : en-tête et pied de page sont injectés par JavaScript.
