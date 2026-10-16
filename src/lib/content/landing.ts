export const SITE = {
  name: "SAGEO",
  tagline: "La méthode de Kopio",
  kopioUrl: "https://kopio.eu",
} as const;

export const NAV_LINKS = [
  { href: "/#methode", label: "Méthode" },
  { href: "/#outil", label: "Outil" },
  { href: "/#comment-ca-marche", label: "Comment ça marche" },
  { href: "/#faq", label: "FAQ" },
  { href: "/articles", label: "Articles" },
] as const;

export const HERO = {
  eyebrow: "SAGEO · MÉTHODE DE KOPIO",
  description:
    "SAGEO (Search-Augmented Generative Engine Optimization) est la méthode de Kopio, par Karelle. Elle sert à vérifier si une page est accessible, si son sujet est explicite, et si ses réponses peuvent être comprises puis citées par ChatGPT.",
  primaryCta: { href: "/#methode", label: "Découvrir la méthode" },
  secondaryCta: { href: "#liste-attente", label: "Explorer l’extension Chrome" },
  features: [
    {
      icon: "score" as const,
      title: "Score SAGEO",
      subtitle: "Évaluez votre page",
    },
    {
      icon: "audit" as const,
      title: "Audit de page",
      subtitle: "Repérez les points à améliorer",
    },
    {
      icon: "explorer" as const,
      title: "Explorateur ChatGPT",
      subtitle: "Explorez les questions accessibles",
    },
  ],
} as const;

export const SCORE_DEMO = {
  total: 78,
  dimensions: [
    { key: "SEO", value: 82, color: "green" as const },
    { key: "AEO", value: 76, color: "purple" as const },
    { key: "GEO", value: 68, color: "pink" as const },
    { key: "SAGEO", value: 78, color: "cyan" as const },
  ],
  recommendations: [
    { label: "Améliorer la structure des titres", priority: "Haute" as const },
    { label: "Ajouter des données structurées", priority: "Haute" as const },
    {
      label: "Enrichir les réponses aux questions",
      priority: "Moyenne" as const,
    },
  ],
} as const;

export const SCORE_SECTION = {
  eyebrow: "LE SCORE SAGEO",
  title: "Ce que l’audit analyse sur votre page",
  description:
    "L’audit lit la page sur quatre dimensions. SEO : être trouvé, via la technique, les balises et l’indexation. AEO : répondre à une question dès les premières lignes. GEO : nommer les entités, les faits et leur contexte. SAGEO réunit les trois dans une synthèse et des priorités.",
  note: "L’audit indique quoi améliorer en premier : technique, réponses directes, entités, puis la synthèse.",
  dashboardNote:
    "Le score SAGEO est une analyse indicative, basée sur plusieurs critères. Il vous aide à identifier vos points forts et les axes d’amélioration.",
  dimensions: [
    {
      icon: "seo" as const,
      label: "SEO",
      title: "Technique & métadonnées",
      description:
        "Title, meta description, balises Hn, URL, indexation, données structurées, perfos et signaux techniques que les crawlers et ChatGPT utilisent pour découvrir votre page.",
    },
    {
      icon: "aeo" as const,
      label: "AEO",
      title: "Réponses directes",
      description:
        "Présence de réponses claires aux questions, blocs FAQ, formulations prêtes à être extraites, structure question → réponse pour les moteurs génératifs.",
    },
    {
      icon: "geo" as const,
      label: "GEO",
      title: "Corps de texte & entités",
      description:
        "Qualité et densité du contenu, développement du sujet, entités nommées, preuves, sources et signaux de crédibilité qui aident ChatGPT à vous citer.",
    },
    {
      icon: "sageo" as const,
      label: "SAGEO",
      title: "Synthèse de l’audit",
      description:
        "Score global + recommandations prioritaires : quoi corriger en premier (meta, réponses, texte) pour maximiser votre chance d’être trouvé, compris et cité.",
    },
  ],
} as const;

export const METHOD = {
  eyebrow: "LA MÉTHODE SAGEO",
  title: "Une méthode en 3 étapes pour être trouvé, compris et cité",
  description:
    "SAGEO relie le SEO, l’AEO et le GEO derrière un parcours concret : récupération, re-classement, puis citation.",
  cta: { href: "/methode-sageo", label: "Découvrir la méthode" },
  outcome: {
    title: "Devenir une source pour ChatGPT",
    body: "Le parcours conduit à un point précis : figurer parmi les références qu’une réponse peut mobiliser. SAGEO prépare le terrain pour rendre cette citation possible.",
  },
  steps: [
    {
      icon: "⌕",
      tone: "green" as const,
      title: "1. Être trouvé",
      subtitle: "Récupération",
      tag: "SEO",
      body: "Le contenu doit d’abord être découvert par les moteurs et les systèmes qui alimentent les réponses ChatGPT.",
    },
    {
      icon: "▣",
      tone: "violet" as const,
      title: "2. Être retenu",
      subtitle: "Re-classement",
      tag: "AEO + GEO",
      body: "Ensuite, le contenu doit être compris, jugé utile et aligné sur l’intention de recherche.",
    },
    {
      icon: "✧",
      tone: "purple" as const,
      title: "3. Être cité",
      subtitle: "Citation",
      tag: "GEO",
      body: "Enfin, le contenu doit pouvoir servir de référence dans une réponse ChatGPT.",
    },
  ],
} as const;

export const WHY = {
  eyebrow: "COMMENT ÇA MARCHE",
  title: "Partir de la question ChatGPT, une nouvelle vision",
  intro:
    "Quand on pose une question à ChatGPT, le modèle ne cherche pas avec ces mots exacts : il génère plusieurs sous-requêtes. L’extension SAGEO les révèle pour savoir précisément quoi écrire afin de matcher.",
  steps: [
    {
      step: "1",
      title: "Poser la question cible",
      body: "Choisissez la question qu’un futur client poserait à ChatGPT, sans citer votre marque.",
    },
    {
      step: "2",
      title: "Analyser les requêtes avec l’extension",
      body: "L’extension affiche les formulations réellement utilisées par ChatGPT. Ce sont ces formules qu’il faut viser dans vos contenus.",
      highlight: true,
    },
    {
      step: "3",
      title: "Travailler le GEO",
      body: "Rédigez des réponses claires, autonomes et faciles à citer, alignées sur ces sous-requêtes.",
    },
    {
      step: "4",
      title: "Ajuster le SEO",
      body: "Alignez title, Hn et structure sur les mêmes signaux pour que le contenu soit trouvé, puis cité.",
    },
  ],
  cta: {
    href: "#liste-attente",
    label: "Découvrir l’extension Chrome",
  },
} as const;

export const AUDIENCE = {
  eyebrow: "POUR QUI ?",
  title: "Une méthode pour tous",
  description:
    "Que vous soyez une marque, un indépendant ou un projet associatif, SAGEO aide à structurer le contenu pour être trouvé, compris et cité dans ChatGPT.",
  items: [
    {
      icon: "brand" as const,
      title: "Entreprises et marques",
      subtitle: "Renforcez votre présence là où vos clients cherchent déjà.",
    },
    {
      icon: "indie" as const,
      title: "Indépendants et entrepreneurs",
      subtitle: "Faites comprendre votre expertise sans jargon inutile.",
    },
    {
      icon: "creator" as const,
      title: "Créateurs et éditeurs",
      subtitle: "Répondez aux questions que votre audience pose vraiment.",
    },
    {
      icon: "org" as const,
      title: "Associations et projets",
      subtitle: "Développez une présence claire et crédible en ligne.",
    },
  ],
  visualNote:
    "Exemple : la méthode SAGEO citée comme approche pour être visible dans ChatGPT.",
} as const;

export const EXTENSION = {
  eyebrow: "L’EXTENSION CHROME",
  title:
    "Explorez les requêtes de ChatGPT et trouvez de nouvelles opportunités",
  description:
    "L’extension SAGEO vous aide à détecter certaines sous-requêtes accessibles dans les données de recherche de ChatGPT. Elles peuvent vous servir à enrichir votre stratégie de contenu et votre recherche de mots-clés.",
  cta: { href: "#liste-attente", label: "Découvrir l’extension Chrome" },
  note: "ChatGPT uniquement · Les requêtes détectées ne sont pas exhaustives.",
  queries: [
    {
      text: "meilleur coach prise de parole Lyon",
      tag: "Comparaison",
    },
    {
      text: "formation expression orale Lyon",
      tag: "Information",
    },
    {
      text: "accompagnement individuel prise de parole",
      tag: "Intention commerciale",
    },
    {
      text: "coach oral dirigeants Lyon",
      tag: "Exploration",
    },
  ],
  detectedCount: 12,
  previewNote: "Aperçu conceptuel, pas une capture de données réelles.",
} as const;

export const FINAL_CTA = {
  eyebrow: "PRÊT À PASSER À L’ACTION ?",
  title: "Préparez votre visibilité sur ChatGPT",
  description:
    "Découvrez la méthode SAGEO et explorez les outils qui vous aident à mieux comprendre, à améliorer vos contenus et à renforcer votre présence dans les réponses générées par ChatGPT.",
  cta: { href: "/#methode", label: "Découvrir la méthode" },
} as const;

export type DotColor = "green" | "purple" | "pink" | "cyan";
export type IconTone = "green" | "violet" | "purple" | "blue";
