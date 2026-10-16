export const ARTICLE = {
  path: "/methode-sageo",
  title: "Trouvé, retenu, puis cité",
  description:
    "SAGEO, la méthode de Kopio par Karelle, relie le SEO, l’AEO et le GEO. Ce que le banc d’essai SAGEO Arena (KDD 2026) mesure, et comment l’extension et l’audit s’en servent.",
  h1: "Être trouvé ne suffit pas pour être cité",
  lead:
    "SAGEO (Search-Augmented Generative Engine Optimization) est la méthode de Kopio, par Karelle. Elle organise le SEO, l’AEO et le GEO sur un même parcours : une page doit d’abord être récupérée, puis retenue, puis pouvoir être citée.",
  dateLabel: "15 octobre 2026",
  dateIso: "2026-10-15",
} as const;

export const ARTICLE_FAQS = [
  {
    question: "SAGEO remplace-t-il le référencement naturel ?",
    answer:
      "Non. SAGEO (Search-Augmented Generative Engine Optimization), la méthode de Kopio, s’appuie sur le SEO pour la récupération. Sans page accessible, indexable et lexicalement proche de la question, le texte n’atteint pas l’étape où une réponse peut le citer.",
  },
  {
    question: "Quelle est la différence entre SEO, AEO, GEO et SAGEO ?",
    answer:
      "Le SEO vise à être trouvé dans les résultats classiques. L’AEO (Answer Engine Optimization) vise une réponse directe, compréhensible seule. Le GEO vise à être compris et réutilisé dans une réponse générée. SAGEO relie les trois : récupération, re-classement, puis citation.",
  },
  {
    question: "Pourquoi réécrire seulement le corps du texte peut nuire ?",
    answer:
      "Dans SAGEO Arena (KDD 2026), optimiser uniquement le corps a dégradé la récupération : le vocabulaire s’éloignait des mots des requêtes, et BM25 classait alors la page plus bas. Le corps reste décisif pour la citation, mais il ne fait pas entrer la page dans le pipeline.",
  },
  {
    question: "Les résultats de SAGEO Arena s’appliquent-ils tels quels à ChatGPT ?",
    answer:
      "Non. SAGEO Arena est un banc d’essai : récupération BM25, re-classement avec Qwen3-Reranker-4B, génération avec GPT-5-mini, et un seuil de 10 documents transmis au générateur. ChatGPT n’utilise pas forcément cette chaîne. Les chiffres décrivent cette expérience.",
  },
] as const;
