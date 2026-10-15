# Checklist SEO, AEO, GEO et SAGEO

Audit du site SAGEO (`https://www.sageolab.fr`) au 15 octobre 2026.

SEO, AEO et GEO se recoupent. Il n’existe pas de balise ni de schéma qui garantisse une citation par ChatGPT. Cette liste sert à auditer le site, tenir une page, puis mesurer. Elle ne promet pas un score de citation.

Légende : **Fait** dans le code actuel · **Partiel** · **Hors code** (à faire dans un outil ou dans le temps) · **N/A** (le cas ne se présente pas).

La production en ligne, tant que cette version n’est pas déployée, canonise encore `https://sageolab.fr`, qui répond en 308 vers `https://www.sageolab.fr`. Le code aligne désormais canonique, sitemap, Open Graph et JSON-LD sur l’hôte qui répond en 200.

## 1. Fondations techniques

Objectif : permettre aux robots d’accéder aux pages, de les explorer et d’en comprendre la structure.

### Exploration et indexation

- [x] **Fait** — Le site est accessible en HTTPS. `http://` et l’apex redirigent en 308 vers `https://www.sageolab.fr`, avec HSTS.
- [x] **Fait** — `robots.txt` autorise `/` pour `*` et nomme les robots de recherche et d’entraînement. Aucune page importante n’est bloquée.
- [x] **Fait** — Le sitemap XML liste l’accueil, l’article `/methode-sageo`, les mentions légales et la politique de confidentialité, avec des URL sur `www`.
- [ ] **Hors code** — Soumettre le sitemap dans Google Search Console et Bing Webmaster Tools. Le fichier existe ; l’envoi aux moteurs ne se vérifie pas dans le dépôt.
- [x] **Fait** — L’accueil, `/mentions-legales` et `/politique-confidentialite` répondent en 200 sur la production. Une URL inconnue répond en 404.
- [x] **Fait** — HTTP vers HTTPS, et apex vers `www`, utilisent une redirection 308. Pas d’ancienne URL de contenu encore liée dans le site.
- [x] **Fait** — Les pages stratégiques sont en `index, follow`. Pas de `noindex` accidentel.
- [x] **Fait** — Chaque page indexable a un canonique cohérent vers `https://www.sageolab.fr`.
- [x] **Fait** — Navigation, ancres et pages légales sont des liens HTML (`a href`).
- [x] **Fait** — Le texte utile est rendu côté serveur. Il ne dépend pas d’un chargement exclusif en JavaScript.
- [x] **Fait** — Pas de filtres, de paramètres d’URL ni de doublons indexables.

### Architecture et navigation

- [x] **Fait** — URLs courtes et stables : `/`, `/methode-sageo`, `/mentions-legales`, `/politique-confidentialite`.
- [x] **N/A** — Pas de catégories éditoriales : le site est une page méthode plus deux pages légales. Les sections sont des ancres.
- [x] **Fait** — Chaque page importante est à un clic du pied de page.
- [x] **Fait** — Le maillage relie les sections (méthode, outil, fonctionnement, FAQ) et les pages légales.
- [x] **Fait** — Fil d’Ariane sur les pages légales, avec `BreadcrumbList`. Inutile sur l’accueil, qui n’a pas de parent.
- [x] **Fait** — Aucune page orpheline : les deux pages légales sont liées dans le pied de page.
- [x] **Fait** — Ancres descriptives (Méthode, Outil, Comment ça marche, FAQ, Mentions légales, Confidentialité).

### Performance et compatibilité

- [x] **Fait** — Mise en page prévue pour mobile et ordinateur (grilles, menu, zone de confort tactile).
- [ ] **Partiel** — Les Core Web Vitals ne sont pas suivis en continu. Un Lighthouse local du 13 octobre 2026 (localhost, profil mobile) mesurait un LCP d’environ 7,3 s. Ce n’est pas une mesure de production.
- [x] **Partiel** — Les visuels de l’interface sont des SVG. `og-image.jpeg` existe (1376×768, environ 505 Ko) et ses dimensions déclarées correspondent au fichier. Le ratio n’est pas le 1200×630 habituel des cartes sociales, et l’image est décorative.
- [x] **Fait** — Les pages n’embarquent pas les JPEG inutilisés du dossier `public`.
- [ ] **Partiel** — L’affichage du contenu principal n’a pas été remesuré en production après ces changements.
- [ ] **Hors code** — Pas d’outil de surveillance des erreurs serveur et des liens cassés. Les liens internes du code pointent vers des ancres ou des pages qui existent.

## 2. Balises SEO de chaque page

Le title, la meta description et le H1 ne sont pas copiés mot pour mot d’une zone à l’autre.

- [x] **Title, essentiel** — Accueil : « SAGEO : audit de page et visibilité IA | Kopio ». Pages légales : titres propres, complétés par « | SAGEO ».
- [x] **Meta description, recommandée** — Une description spécifique par page.
- [x] **H1, essentiel** — Un H1 visible par page. Accueil : « Votre site est-il prêt à être cité par ChatGPT ? ».
- [x] **H2 et H3, essentiels** — H2 de section. H3 pour les dimensions d’audit, les étapes, les publics et les questions de FAQ.
- [x] **URL, essentielle** — Lisible, stable, sans empilement de mots-clés.
- [x] **Canonical, selon le cas** — Présent sur les trois pages indexables, vers l’hôte `www`.
- [x] **Alt des images, selon le cas** — L’image Open Graph a un alt qui décrit le visuel, sans liste de mots-clés. Les icônes décoratives sont masquées aux technologies d’assistance.
- [x] **Open Graph et cartes sociales, recommandées** — `og:title`, `og:description`, `og:image`, `og:url`, locale `fr_FR`, carte Twitter `summary_large_image`.
- [x] **Langue, selon le cas** — `lang="fr"` sur le document. `hreflang` non applicable : une seule langue.
- [x] **JSON-LD, selon le type de page** — Voir la section 3. Le graphe d’une page n’est pas recopié sur les autres.

## 3. Données structurées Schema.org

Format : JSON-LD dans le HTML. Les schémas présents correspondent au contenu visible. Pas d’avis ni de note inventés. Le score affiché est libellé « Exemple de score ».

| Schéma | Où | Statut |
| --- | --- | --- |
| Organization | Site (SAGEO et Kopio) | Fait |
| Person | Karelle, fondatrice | Fait |
| WebSite | Site | Fait |
| WebPage | Accueil et pages légales, chacune avec sa propre URL | Fait |
| Service | Accueil, méthode SAGEO | Fait |
| SoftwareApplication | Accueil, extension Chrome, sans prix ni stock : la page ne les affiche pas | Fait |
| FAQPage | Accueil uniquement, textes identiques à la FAQ visible | Fait. Google n’affiche en général plus ce résultat enrichi hors sites institutionnels ou de santé. Le schéma reste valide parce que la FAQ est réelle. |
| BreadcrumbList | Pages légales | Fait |
| DefinedTerm | Définition de SAGEO, alignée sur le texte d’introduction | Fait |
| BlogPosting | Article `/methode-sageo` | Fait |
| Article hors blog, Product, LocalBusiness, ProfilePage, VideoObject, Event, JobPosting | — | N/A |

Règles :

- [x] Les propriétés reprennent des informations présentes sur la page.
- [x] Les `@id` relient organisation, personne, site, page, service et FAQ.
- [x] Nom, URL et lien vers Kopio sont les mêmes d’une page à l’autre.
- [ ] **Hors code** — Retester après déploiement avec le [Rich Results Test](https://search.google.com/test/rich-results) et le [Schema Markup Validator](https://validator.schema.org/).
- [x] Pas de faux avis, de note présentée comme réelle, ni de texte réservé aux robots.

Le logo déclaré est `logo.svg` (40×40). Google demande souvent un logo raster d’au moins 112×112 pour certains résultats. À remplacer le jour où un fichier adapté existe.

## 4. Contenu SEO

### Intention de recherche

- [x] Intention principale : comprendre la méthode et voir ce que l’audit et l’extension permettent. Pas une page d’achat.
- [x] Un sujet principal : SAGEO, la méthode de Kopio.
- [x] Questions associées traitées dans la FAQ.
- [ ] **Hors code** — Relecture des pages concurrentes à renouveler quand le contenu s’étoffe.
- [x] Pas de pages quasi identiques. Une page méthode, deux pages légales.

### Structure du texte

- [x] L’introduction répond au sujet : définition de SAGEO, qui en est l’auteur, ce qu’elle vérifie, et la limite (aucune citation garantie).
- [x] Introduction courte.
- [x] Sections en H2, idées en H3.
- [x] Une idée principale par paragraphe.
- [x] SAGEO est développé au premier écran. SEO, AEO et GEO sont définis dans la section score, avant d’être réutilisés.
- [x] Étapes numérotées (méthode, fonctionnement) et listes (FAQ, pages légales).
- [x] Le bloc final propose une prochaine étape : découvrir la méthode.

### Qualité et différenciation

- [x] **Partiel** — La méthode est propre à Kopio. La page ne publie pas encore de données originales chiffrées ni d’étude.
- [x] Les faits légaux ont été recollés au site réel : il n’y a pas de formulaire d’audit.
- [x] **Fait sur l’article** — `/methode-sageo` cite SAGEO Arena (KDD 2026), la consigne Google sur les contenus génératifs, et l’article Kopio du 10 octobre 2026. Les chiffres y sont datés et limités à ce banc d’essai.
- [x] Limites indiquées : score indicatif, requêtes non exhaustives, citation non garantie.
- [x] Pas de texte ajouté seulement pour allonger la page.
- [x] Date de mise à jour visible dans le pied de page et sur les pages légales : 15 octobre 2026.
- [x] Pas de duplication entre les trois pages.
- [ ] **Hors code** — Relecture par une personne du sujet, en dehors de cet audit.

### Éléments complémentaires

- [x] **Partiel** — Maquettes d’interface pour montrer l’audit, l’extension et une citation. Elles illustrent ; elles ne portent pas l’information essentielle, qui reste dans le texte.
- [x] Légende sur le parcours de la méthode. Alt de l’image sociale descriptif.
- [x] Liens internes vers les sections complémentaires et les pages légales.
- [ ] **Partiel** — Pas de lien vers un document source externe.
- [x] Date de mise à jour affichée.
- [x] Auteur visible : « Méthode de Karelle, fondatrice de Kopio », repris dans les métadonnées et le JSON-LD.

## 5. AEO — réponses aux questions

- [x] Réponse directe dans les premières lignes, puis dans chaque réponse de FAQ.
- [x] Définition de SAGEO avant le détail des étapes.
- [x] Questions explicites en H3 dans la FAQ. Le H1 est lui-même une question.
- [x] Chaque réponse de FAQ se comprend seule.
- [x] Étapes numérotées pour le fonctionnement et la méthode.
- [x] **N/A** — Pas de tableau comparatif : la page ne compare pas des offres. Les quatre dimensions sont des cartes titrées, pas des options à choisir.
- [x] FAQ utile, sans répétition artificielle des mêmes mots-clés.
- [x] Entités nommées : SAGEO, Kopio, Karelle, ChatGPT, Chrome, SEO, AEO, GEO.
- [x] **Partiel** — Les limites sont dites. Il n’y a pas de chiffre sourcé à étayer.
- [x] HTML sémantique : `header`, `nav`, `main`, `footer`, `section`, titres, listes, `details` / `summary`, `figure` / `figcaption`.

À ne pas faire, et non fait ici : imposer une longueur fixe, ou viser un paragraphe de 40 à 60 mots comme s’il était repris automatiquement.

## 6. GEO

- [x] L’entité principale, SAGEO, est nommée et définie dès l’introduction.
- [x] Noms officiels : SAGEO, Kopio, Karelle, ChatGPT, Chrome.
- [x] La description est la même dans l’introduction, les mentions légales et le JSON-LD.
- [x] Liens entre entités : Karelle fonde Kopio, Kopio porte la méthode SAGEO, l’extension sert à lire certaines sous-requêtes.
- [x] Sigles définis : SAGEO, SEO, AEO, GEO.
- [x] Faits explicites, y compris ce que l’extension ne fait pas.
- [ ] **Partiel** — Pas de chiffre d’étude avec unité, période et source. Les scores à l’écran sont un exemple, pas une mesure.
- [x] Date de mise à jour affichée pour les informations qui bougent.
- [x] Exemples concrets de sous-requêtes, signalés comme aperçu conceptuel.
- [x] **Partiel** — La page apporte la méthode. Elle ne constitue pas encore un corpus de guides plus profond que les pages concurrentes.
- [x] Pages utiles accessibles sans compte.
- [x] L’information essentielle est dans le HTML, pas seulement dans une image ou un script.
- [x] **Partiel** — `robots.txt` n’interdit pas les robots utiles. Un GET anonyme sur la production répond en 200 via Cloudflare et Vercel. Les règles fines du pare-feu ou du CDN ne sont pas auditées depuis le dépôt.
- [ ] **Hors code** — Mentions et liens éditoriaux depuis d’autres sites. À obtenir, pas à fabriquer.
- [ ] **Hors code** — Veille sur les informations erronées publiées ailleurs au sujet de la marque.

Mentions externes et autorité, hors de ce dépôt : profils officiels, avis authentiques, études, cas clients, identité vérifiable. Ne pas acheter de liens ni multiplier des pages faibles.

## 7. SEO spécifique à ChatGPT

- [x] Les pages publiques importantes sont lisibles sans authentification.
- [x] **Partiel** — Aucun blocage observé sur une requête anonyme. Un contrôle user-agent par user-agent du pare-feu reste à faire côté hébergeur.
- [x] `robots.txt` autorise explicitement `OAI-SearchBot`, `ChatGPT-User` et `GPTBot`.
- [x] Les rôles sont distingués dans le code : recherche (`OAI-SearchBot`, `ChatGPT-User`, Googlebot, Bingbot) et autres usages (`GPTBot`, `Google-Extended`, Claude, CCBot, Bytespider). Tous sont autorisés, parce que le site cherche à être découvert et cité.
- [x] L’accès pour la recherche ChatGPT n’est pas restreint.
- [x] Sujet, faits, entités et limites sont dans le contenu visible.
- [x] **Fait** — L’article `/methode-sageo` répond à la question de la méthode. L’accueil et sa FAQ restent la page produit.
- [ ] **Hors code** — Pas de mesure d’audience. La politique de confidentialité indique qu’aucun cookie de mesure n’est déposé. Suivre les visites référées depuis ChatGPT demanderait un outil, et une mise à jour de cette politique.
- [ ] **Hors code** — Tester des questions représentatives dans ChatGPT et noter les réponses et les sources.
- [ ] **Hors code** — Répéter ces tests à des dates différentes, dans des contextes comparables.
- [ ] **Hors code** — Comparer avec les concurrents et noter l’information manquante.
- [ ] **Hors code** — Mettre à jour les pages d’après ces constats. Pas de formule magique à chercher.

## Ce qui reste ouvert

1. Déployer cette version pour que le canonique `www` remplace celui de l’apex.
2. Soumettre `https://www.sageolab.fr/sitemap.xml` à Google et à Bing.
3. Retester le JSON-LD dans les validateurs après déploiement.
4. Mesurer les Core Web Vitals en production, pas seulement en local.
5. Tenir un journal de tests ChatGPT (question, date, réponse, sources citées).
6. Remplacer l’image Open Graph décorative par un visuel qui montre SAGEO, idéalement en 1200×630, et fournir un logo raster d’au moins 112×112 si un résultat logo est souhaité.
