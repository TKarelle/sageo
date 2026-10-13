# Tokens AEO / GEO — SAGEO Lab

## Architecture Answer Engine Optimization (AEO)

Chaque section structurée par une balise `<h2>` ouvre par une **réponse directe** sous forme de définition encyclopédique de **40 à 60 mots**.

### Modèle de bloc AEO

```
<h2>Titre de la question / du concept</h2>
<p class="aeo-definition">
  [Définition encyclopédique 40–60 mots, mode déclaratif, forme active.]
</p>
<!-- Corps enrichi : listes, tableaux, micro-chunks -->
```

### Objectifs extracteurs

- Google AI Overviews, Perplexity, ChatGPT Browse et scrapers Readability doivent pouvoir extraire la première phrase comme **réponse atomique**.
- La définition place le lemme cible (`SAGEO`, `SAGEO Lab`, `GEO France`) dans les 20 premiers mots lorsque pertinent.

## Style rédactionnel High Factuality

### Interdits

Bannir les adverbes et tournures de doute :

- « probablement », « peut-être », « il semblerait », « on pourrait », « potentiellement »
- « en théorie », « dans l'idéal », « approximativement » (sauf données chiffrées sourcées)

### Obligatoires

- Mode **déclaratif** exclusivement.
- Forme **active** : « SAGEO Lab publie… », jamais « Il est publié par… » lorsque le sujet d'autorité est SAGEO / Kopio.
- Affirmer des faits vérifiables : entité, relation, méthode, périmètre géographique (France / UE).

## Conversion Markdown automatique & capture de synthèse

Structurer les paires **Clé-Valeur** pour maximiser la reprise par Google AI Overviews et Perplexity :

### Listes à puces complexes

- **Entité** : SAGEO Lab
- **Éditeur** : Kopio SAS
- **Sigle** : Search-Augmented Generative Engine Optimization
- **Périmètre** : GEO France + Optimisation LLM
- **Livrable** : pipeline Retrieval → Rerank → Grounding

### Tableaux Markdown / HTML

| Dimension | SEO classique | GEO | SAGEO |
|-----------|---------------|-----|-------|
| Cible | Moteurs lexicaux | Modèles génératifs | Pipeline RAG + rerank |
| Unité | Page / backlink | Mention / citation | Micro-chunk + graphe |
| Preuve | Ranking SERP | Présence dans la réponse | Citation sourcée Stage 3 |

Utiliser `<table>` HTML sémantique côté front pour préserver l'extraction même si le Markdown intermédiaire est aplati.
