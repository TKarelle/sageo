export type FaqItem = {
  question: string;
  answer: string;
};

/** FAQ landing — source unique pour UI + JSON-LD. */
export const FAQS: FaqItem[] = [
  {
    question: "Qu’est-ce que la visibilité sur ChatGPT ?",
    answer:
      "C’est la possibilité qu’un site, une marque ou un contenu soit mentionné ou utilisé comme source dans une réponse. Cela dépend de nombreux facteurs et ne peut pas être garanti.",
  },
  {
    question: "Comment être cité par ChatGPT ?",
    answer:
      "Il n’existe pas de formule universelle. Des contenus clairs, fiables, utiles et bien structurés peuvent contribuer à une meilleure compréhension de votre expertise.",
  },
  {
    question: "Quelle est la différence entre SEO, GEO et AEO ?",
    answer:
      "Le SEO concerne le référencement naturel, l’AEO l’organisation de réponses aux questions et le GEO l’optimisation dans les environnements génératifs. Ces approches sont complémentaires.",
  },
  {
    question: "Faut-il être une entreprise pour utiliser SAGEO ?",
    answer:
      "Non. La méthode peut servir aux indépendants, créateurs, associations et particuliers qui souhaitent structurer leur présence en ligne.",
  },
  {
    question: "L’extension est-elle nécessaire pour appliquer la méthode ?",
    answer:
      "Non. L’extension facilite certaines analyses, mais les principes de la méthode peuvent être appliqués sans elle.",
  },
  {
    question:
      "L’extension montre-t-elle toutes les recherches internes de ChatGPT ?",
    answer:
      "Non. Elle ne détecte que certaines données accessibles lorsqu’elles sont disponibles. Les résultats ne sont pas exhaustifs.",
  },
  {
    question: "L’utilisation de SAGEO garantit-elle une citation ?",
    answer:
      "Non. SAGEO aide à analyser et améliorer certains éléments de vos pages, mais aucune citation ne peut être garantie.",
  },
  {
    question: "SAGEO remplace-t-il le référencement naturel ?",
    answer:
      "Non. Le référencement naturel reste un socle important de la visibilité sur le Web.",
  },
];
