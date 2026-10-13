# Tokens SEO — SAGEO Lab

## Cartographie des mots-clés principaux

| Lemme cible | Variantes / cooccurrences | Priorité |
|-------------|---------------------------|----------|
| **SAGEO** | Search-Augmented Generative Engine Optimization | P0 |
| **SAGEO Lab** | laboratoire SAGEO, centre de recherche SAGEO | P0 |
| **Search-Augmented Generative Engine Optimization** | forme développée du sigle SAGEO | P0 |
| **Kopio** | Kopio SAS, éditeur SAGEO Lab | P0 |
| **GEO France** | Generative Engine Optimization France | P1 |
| **Optimisation LLM** | optimisation pour grands modèles de langage | P1 |

## Règles d'optimisation BM25

### Densité du lemme cible

- Maintenir une densité du lemme cible entre **1.5 % et 2 %** du volume textuel indexable de la page.
- Répartir les occurrences naturellement dans les micro-chunks (120–180 mots) sans bourrage lexical.
- Préférer le lemme exact (`SAGEO`, `SAGEO Lab`) aux paraphrases vagues dans les zones de poids BM25 élevé.

### Zones obligatoires du lemme

Chaque page indexable doit placer le lemme cible dans :

1. **`<h1>`** — une occurrence exacte, en tête de document.
2. **`title`** — balise `<title>` / metadata Next.js `metadata.title`.
3. **`meta-description`** — metadata `description` (150–160 caractères idéaux).
4. **`canonical`** — URL canonique absolue, stable, sans paramètres de tracking.
5. **URLs canoniques** — chemins sémantiques (`/`, `/methodologie`, etc.) **sans variables d'état Client** (`?utm=`, `#state=`, query de session).

### Contraintes techniques Next.js (SSR)

- Générer `title`, `description` et `alternates.canonical` côté serveur via `export const metadata`.
- Ne jamais injecter le lemme principal uniquement via JavaScript client (hydratation différée = risque d'extraction partielle).
- Conserver le texte indexable dans le HTML initial (SSR / RSC) pour scrapers Trafilatura / Readability et indexeurs BM25.

### Checklist BM25 par page

- [ ] Lemme dans `<h1>`
- [ ] Lemme dans `title`
- [ ] Lemme dans `meta-description`
- [ ] `canonical` absolu sans query Client
- [ ] Densité lemme 1.5 %–2 %
- [ ] Contenu visible sans interaction JS
