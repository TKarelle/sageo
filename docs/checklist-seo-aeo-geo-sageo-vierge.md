# Checklist SEO, AEO, GEO et SAGEO

Modèle vierge. À dupliquer pour chaque site, puis pour chaque page importante.

SEO, AEO et GEO se recoupent. Il n’existe pas de balise ni de schéma qui garantisse une citation par ChatGPT. Cette liste sert à auditer un site, construire une page, puis mesurer. Elle ne promet pas un score de citation.

| | |
| --- | --- |
| Site | |
| URL canonique | |
| Page auditée | |
| Date | |
| Auditeur | |

Légende au moment du remplissage : fait · partiel · non applicable · hors site (outil, mesure, délai).

## 1. Fondations techniques du site

Objectif : permettre aux robots d’accéder aux pages, de les explorer et d’en comprendre la structure.

À remplir une fois par site.

### Exploration et indexation

- [ ] Le site est accessible en HTTPS
- [ ] Le fichier robots.txt est valide et ne bloque pas les pages importantes
- [ ] Le sitemap XML existe, est valide et soumis aux moteurs concernés
- [ ] Les pages importantes renvoient un code HTTP 200
- [ ] Les pages supprimées ou déplacées utilisent les redirections adaptées
- [ ] Les pages stratégiques ne portent pas de balise noindex par erreur
- [ ] Les balises canonical sont présentes et cohérentes
- [ ] Les pages importantes sont accessibles par des liens HTML explorables
- [ ] Les contenus essentiels ne dépendent pas exclusivement de JavaScript
- [ ] Les pages en double, filtres et paramètres d’URL sont maîtrisés

### Architecture et navigation

- [ ] La structure des URL est claire et stable
- [ ] Les pages sont organisées en catégories et sous-catégories cohérentes
- [ ] Chaque page importante est accessible en quelques clics
- [ ] Le maillage interne relie les pages liées par leur sujet
- [ ] Les fils d’Ariane sont présents quand ils sont utiles
- [ ] Les pages orphelines sont identifiées
- [ ] Les liens internes ont des ancres descriptives

### Performance et compatibilité

- [ ] Le site fonctionne sur mobile et ordinateur
- [ ] Les Core Web Vitals sont surveillés
- [ ] Les images sont compressées et dimensionnées correctement
- [ ] Les ressources inutiles sont limitées
- [ ] Les pages affichent rapidement leur contenu principal
- [ ] Les erreurs serveur et liens cassés sont surveillés

Notes :

## 2. Balises SEO de la page

Objectif : préciser le sujet de la page, sa hiérarchie et son utilité dans les résultats de recherche.

À remplir pour chaque page. Le title, la meta description et le H1 ne doivent pas être dupliqués mécaniquement sur tout le site.

- [ ] **Title, essentiel.** Un titre unique, descriptif, centré sur le sujet principal et rédigé pour donner envie de cliquer. Il n’existe pas de limite Google absolue en caractères.
- [ ] **Meta description, recommandée.** Un résumé spécifique à la page, avec son intérêt et éventuellement une incitation à l’action. Elle peut être réécrite par Google et n’est pas un facteur direct de classement connu.
- [ ] **H1, essentiel.** Un titre principal visible qui exprime clairement le sujet et correspond à l’intention de la page. Un H1 clair est une bonne pratique. Un seul H1 n’est pas une obligation absolue.
- [ ] **H2 et H3, essentiels.** Des sous-titres hiérarchisés qui organisent les idées et facilitent le parcours de lecture. Ne pas choisir les niveaux uniquement pour leur apparence.
- [ ] **URL, essentielle.** Une URL lisible, stable et pertinente. Inclure le sujet principal si cela paraît naturel, sans chercher à accumuler les mots-clés.
- [ ] **Balise canonical, selon le cas.** Indiquer la version principale lorsqu’il existe plusieurs URL équivalentes ou proches.
- [ ] **Alt des images, selon le cas.** Décrire l’information utile de l’image pour l’accessibilité et la compréhension. Ne pas bourrer les attributs alt de mots-clés.
- [ ] **Open Graph et cartes sociales, recommandées.** Configurer og:title, og:description, og:image et les métadonnées adaptées aux plateformes pour maîtriser l’aperçu lors du partage.
- [ ] **Langue et internationalisation, selon le cas.** Déclarer la langue du document, et utiliser hreflang lorsque plusieurs versions linguistiques ou régionales existent.
- [ ] **Données structurées JSON-LD, selon le type de page.** Décrire correctement l’entité, le contenu et les propriétés pertinentes avec un vocabulaire Schema.org adapté.

| Balise | Valeur retenue | Constat |
| --- | --- | --- |
| Title | | |
| Meta description | | |
| H1 | | |
| URL | | |
| Canonical | | |

Notes :

## 3. Données structurées Schema.org

Les données structurées aident les systèmes compatibles à interpréter les informations d’une page. Elles ne garantissent ni un meilleur classement ni une citation par ChatGPT.

Format souvent pratique : JSON-LD, placé dans le HTML de la page. Ne pas ajouter tous les schémas possibles : ne garder que ceux qui correspondent au contenu et à l’objectif de la page.

| Schéma | Où l’utiliser | Priorité | Retenu sur cette page |
| --- | --- | --- | --- |
| Organization | Présentation d’une entreprise ou d’une organisation | Haute | |
| Person | Page d’un auteur, expert ou créateur | Selon le cas | |
| WebSite | Site dans son ensemble, avec ses informations principales | Haute | |
| WebPage | Description d’une page précise | Utile | |
| Article / BlogPosting | Articles, guides et contenus éditoriaux | Haute si applicable | |
| BreadcrumbList | Pages disposant d’un fil d’Ariane | Utile | |
| Product | Fiches de produits | Haute si applicable | |
| Service | Pages décrivant des prestations | Selon le cas | |
| LocalBusiness | Entreprise ayant une présence locale pertinente | Selon le cas | |
| ProfilePage | Page de profil d’une personne ou d’une organisation | Selon le cas | |
| VideoObject | Pages comportant une vidéo que l’on souhaite décrire | Selon le cas | |
| Event | Pages dédiées à un événement | Selon le cas | |
| JobPosting | Offres d’emploi | Selon le cas | |
| FAQPage | FAQ répondant aux critères du type de données et aux règles du moteur | Cas limités | |

Règles de mise en œuvre :

- [ ] Les propriétés correspondent à des informations réellement présentes sur la page
- [ ] Les données structurées sont valides, cohérentes et à jour
- [ ] Les informations sur l’entreprise — nom, URL, logo et profils officiels — restent cohérentes entre les pages
- [ ] Les identifiants @id relient les entités lorsqu’il est pertinent de le faire
- [ ] Les résultats ont été testés avec le Rich Results Test de Google et le Schema Markup Validator
- [ ] Il n’y a pas de faux avis, de notes inventées ni de contenu invisible aux visiteurs

Notes :

## 4. Contenu SEO

Objectif : répondre à une intention précise avec un contenu utile, fiable, distinctif et complet.

### Intention de recherche

- [ ] Identifier l’intention principale : apprendre, comparer, acheter, trouver un service ou résoudre un problème
- [ ] Définir un sujet principal par page
- [ ] Identifier les questions associées que les visiteurs peuvent réellement se poser
- [ ] Analyser les pages concurrentes pour repérer les attentes satisfaites et les informations manquantes
- [ ] Créer une page dédiée lorsque le sujet justifie une réponse approfondie, sans multiplier les pages quasi identiques

### Structure du texte

- [ ] Répondre au sujet principal dès l’introduction
- [ ] Rédiger une introduction courte qui annonce précisément ce que le lecteur va apprendre
- [ ] Organiser les idées en sections avec des H2 et H3 descriptifs
- [ ] Développer une idée principale par paragraphe
- [ ] Définir les termes techniques au premier usage
- [ ] Ajouter des exemples, étapes, tableaux ou listes lorsque cela clarifie le sujet
- [ ] Utiliser une conclusion utile qui résume les points clés ou propose une prochaine étape

### Qualité et différenciation

- [ ] Apporter une information originale, une expérience réelle, des données ou une expertise identifiable
- [ ] Vérifier les faits, chiffres, noms, dates et affirmations
- [ ] Citer les sources externes pertinentes lorsque nécessaire
- [ ] Préciser les limites, les conditions et les exceptions
- [ ] Éviter les généralités et le remplissage rédigé uniquement pour atteindre une longueur
- [ ] Actualiser les informations lorsqu’elles deviennent obsolètes
- [ ] Éviter la duplication de contenu entre pages
- [ ] Faire relire le texte par une personne compétente sur le sujet

### Éléments complémentaires

- [ ] Ajouter des images, graphiques ou captures qui apportent une information utile
- [ ] Rédiger des légendes et textes alternatifs pertinents
- [ ] Ajouter des liens internes vers les pages complémentaires
- [ ] Citer des sources fiables et pointer vers les documents d’origine lorsque pertinent
- [ ] Afficher la date de publication ou de mise à jour quand elle est utile et exacte
- [ ] Indiquer l’auteur, son rôle et ses compétences lorsque cela renforce la transparence

Notes :

## 5. AEO

L’AEO (Answer Engine Optimization) consiste à rendre les contenus faciles à exploiter pour des expériences de recherche qui donnent directement une réponse. Les bonnes pratiques recoupent largement le SEO : structure claire, réponse pertinente, informations fiables et contenu accessible.

- [ ] Réponse directe : répondre à la question principale dans les premières lignes de la section concernée
- [ ] Définition claire : expliquer simplement le concept avant de développer les détails
- [ ] Question explicite : employer des titres qui correspondent aux questions réelles des utilisateurs
- [ ] Réponse autonome : faire en sorte qu’un paragraphe puisse être compris sans devoir lire toute la page
- [ ] Étapes numérotées : utiliser une liste lorsqu’il existe une procédure
- [ ] Tableaux comparatifs : les employer pour comparer des options selon des critères explicites
- [ ] FAQ utile : répondre aux objections, aux questions fréquentes et aux cas particuliers, sans répéter artificiellement les mêmes mots-clés
- [ ] Termes et entités explicites : nommer précisément les produits, services, personnes, organisations et concepts
- [ ] Preuves et sources : étayer les affirmations importantes avec des éléments vérifiables
- [ ] HTML sémantique : utiliser des titres, listes, paragraphes et tableaux HTML appropriés plutôt que de simuler toute la structure avec des éléments génériques

À éviter : appliquer une longueur fixe à chaque réponse, ou croire qu’un paragraphe de 40 à 60 mots sera automatiquement repris par une IA. Il n’existe pas de longueur universelle garantie.

Notes :

## 6. GEO

Le GEO (Generative Engine Optimization) vise à travailler la présence d’un contenu dans les expériences de recherche et de réponse génératives. Les méthodes exactes des systèmes étant variables et en partie non publiques, privilégier les éléments vérifiables plutôt que des recettes prétendument garanties.

- [ ] Nommer clairement l’entité principale de la page dès le début
- [ ] Employer les noms officiels des marques, personnes, produits et organisations
- [ ] Maintenir une description cohérente de l’entité sur le site et ses profils officiels
- [ ] Expliquer les liens entre les entités : qui fait quoi, pour qui et dans quel contexte
- [ ] Définir les acronymes et termes ambigus
- [ ] Présenter les faits importants de façon explicite, plutôt que de les laisser implicites
- [ ] Associer les chiffres à leur unité, leur période et leur source
- [ ] Indiquer la date ou le contexte des informations susceptibles de changer
- [ ] Ajouter des exemples concrets, des données originales et des comparaisons justifiées
- [ ] Publier des pages qui apportent une réelle valeur, au-delà de la reformulation de contenus concurrents
- [ ] Rendre les pages utiles accessibles sans connexion obligatoire lorsque cela est possible
- [ ] Éviter de placer toute l’information essentielle dans des images, des scripts ou des éléments difficiles à explorer
- [ ] Contrôler les règles d’accès des robots pertinents et les éventuelles restrictions du serveur ou du CDN
- [ ] Obtenir des mentions et références légitimes depuis des sites pertinents
- [ ] Surveiller les informations erronées ou obsolètes concernant la marque et les corriger à la source

### Mentions externes et autorité

- [ ] Mentions de marque dans des publications pertinentes
- [ ] Liens éditoriaux naturels provenant de sites fiables
- [ ] Profils officiels cohérents et régulièrement mis à jour
- [ ] Avis authentiques, lorsqu’ils sont pertinents pour l’activité
- [ ] Études, cas clients, réalisations et ressources originales
- [ ] Informations de contact et d’identité vérifiables

Ne pas acheter de liens artificiels. Ne pas multiplier les pages de faible qualité dans le seul but de nourrir les IA.

Notes :

## 7. SEO spécifique à ChatGPT

Optimiser une page pour Google ne suffit pas à supposer qu’elle sera citée par ChatGPT.

- [ ] Vérifier que les pages publiques importantes sont accessibles sans authentification
- [ ] Vérifier que le serveur, le CDN et le pare-feu ne bloquent pas involontairement les robots autorisés
- [ ] Examiner robots.txt et les règles d’accès propres aux différents robots OpenAI
- [ ] Différencier les robots d’exploration de recherche des robots utilisés pour d’autres finalités
- [ ] Vérifier les règles et paramètres de contrôle de l’accès aux contenus pour la recherche ChatGPT
- [ ] Présenter clairement le sujet, les faits, les entités et les sources dans le contenu visible
- [ ] Créer des pages de référence utiles qui répondent précisément aux questions de l’audience
- [ ] Suivre les visites référées depuis ChatGPT lorsque les données analytiques disponibles le permettent
- [ ] Tester des questions représentatives dans ChatGPT et relever les réponses et sources affichées
- [ ] Répéter les tests à différentes dates et dans des contextes comparables
- [ ] Comparer les résultats avec ceux des concurrents et identifier les informations qui manquent
- [ ] Mettre à jour les pages en fonction des constats plutôt que de chercher une formule magique

### Journal de tests

| Date | Question testée | Réponse observée | Sources citées | Écart à combler |
| --- | --- | --- | --- | --- |
| | | | | |
| | | | | |
| | | | | |

Notes :

## Suite à donner

| Priorité | Action | Page | Échéance |
| --- | --- | --- | --- |
| | | | |
| | | | |
| | | | |
