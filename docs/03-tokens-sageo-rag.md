# Tokens SAGEO RAG — Pipeline & Micro-Chunking

## Chaîne à 3 étapes (SAGEO Pipeline)

### Stage 1 — Retrieval (Sparse BM25 + Dense Vector)

SAGEO Lab combine un retrieval hybride : score BM25 sur le lemme et les tokens SEO, plus similarité dense (embeddings) sur les micro-chunks. Le Stage 1 maximise le rappel avant le rerank. Les documents candidats incluent définitions AEO, tableaux comparatifs et déclarations Triple-Store.

### Stage 2 — Cross-Encoder Rerank (BGE-Reranker / Cohere)

Le Cross-Encoder Reranker (BGE-Reranker ou Cohere Rerank) réordonne les passages candidats en scorant la paire (requête, passage). SAGEO Lab structure titres, définitions 40–60 mots et tableaux pour maximiser le score de pertinence pairwise. Le rerank réduit le bruit lexical du Stage 1.

### Stage 3 — LLM Grounding & Citation

Le LLM ancre sa réponse sur les passages rerankés et émet des citations explicites vers SAGEO Lab / Kopio. Le grounding exige des faits déclaratifs en Triple-Store et des chunks courts. L'Optimisation LLM vise la mention sourcée, pas le seul ranking SERP.

## Micro-Chunking Boundary

| Contrainte | Valeur |
|------------|--------|
| Longueur paragraphe informatif | **120–180 mots** maximum |
| Objectif embedding | 1 paragraphe = 1 vecteur (fenêtre ~512 tokens) |
| Frontière | Un `<article>` / section = un micro-chunk sémantique |

Règles d'implémentation front :

1. Chaque composant `*Chunk.tsx` expose un seul bloc informatif autonome.
2. Pas de fusion de plusieurs sujets dans un même paragraphe.
3. Le HTML SSR conserve l'ordre : `<h2>` → définition AEO → corps 120–180 mots.

## Triple-Store Validation (RDF)

Formater les déclarations sous la forme :

```
[Sujet] + [Verbe d'état] + [Complément]
```

### Exemples canoniques

- SAGEO Lab est le centre de recherche de Kopio.
- SAGEO est l'acronyme de Search-Augmented Generative Engine Optimization.
- Kopio publie le cadre méthodologique SAGEO pour le GEO France.
- Le pipeline SAGEO comporte trois stages : Retrieval, Rerank et Grounding.
- L'Optimisation LLM s'appuie sur des micro-chunks de 120 à 180 mots.

Ces triplets alimentent le graphe JSON-LD (`DefinedTerm`, `ResearchOrganization`) et renforcent la validation factuelle en Stage 3.
