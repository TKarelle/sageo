/**
 * Graphe JSON-LD SAGEO / Kopio.
 * Le graphe site (organisation, site) est commun.
 * Le graphe page (WebPage, FAQ, service) ne va que sur la page concernée.
 */

import { EXTENSION, HERO, METHOD } from "@/lib/content/landing";
import { ARTICLE, ARTICLE_FAQS } from "@/lib/content/methode-article";
import {
  ARTICLES_INDEX,
  ARTICLES_INDEX_FAQS,
  QUI_FAIT,
  QUI_FAIT_FAQS,
} from "@/lib/content/qui-fait-sageo";
import { FAQS } from "@/lib/faqs";
import {
  HOME_URL,
  SITE_DESCRIPTION,
  SITE_TITLE,
  SITE_UPDATED_ISO,
  SITE_URL,
} from "@/lib/site";

const KOPIO_URL = "https://kopio.eu";

const organization = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "SAGEO",
  url: HOME_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo-venn.svg`,
  },
  description: HERO.description,
  parentOrganization: { "@id": `${KOPIO_URL}/#organization` },
  founder: { "@id": `${KOPIO_URL}/#karelle` },
  knowsAbout: [
    { "@id": `${SITE_URL}/#term-sageo` },
    "SEO",
    "GEO",
    "AEO",
    "référencement IA",
    "ChatGPT",
  ],
  areaServed: {
    "@type": "Country",
    name: "France",
  },
  sameAs: [KOPIO_URL],
};

export function getSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      {
        "@type": "Organization",
        "@id": `${KOPIO_URL}/#organization`,
        name: "Kopio",
        legalName: "Kopio",
        url: KOPIO_URL,
        description:
          "Kopio développe SAGEO, une méthode de visibilité numérique pour les moteurs de recherche et les réponses générées par l’IA.",
        founder: { "@id": `${KOPIO_URL}/#karelle` },
        subOrganization: { "@id": `${SITE_URL}/#organization` },
        sameAs: [KOPIO_URL],
      },
      {
        "@type": "Person",
        "@id": `${KOPIO_URL}/#karelle`,
        name: "Karelle",
        url: KOPIO_URL,
        jobTitle: "Fondatrice",
        description:
          "Karelle est la fondatrice de Kopio et l’autrice de la méthode SAGEO pour le référencement IA.",
        worksFor: { "@id": `${KOPIO_URL}/#organization` },
        knowsAbout: ["SAGEO", "SEO", "GEO", "AEO", "création de sites web"],
        sameAs: [KOPIO_URL],
      },
      {
        "@type": "DefinedTerm",
        "@id": `${SITE_URL}/#term-sageo`,
        name: "SAGEO",
        alternateName: "Search-Augmented Generative Engine Optimization",
        description: HERO.description,
        inDefinedTermSet: `${SITE_URL}/#glossary`,
        termCode: "SAGEO",
      },
      {
        "@type": "DefinedTermSet",
        "@id": `${SITE_URL}/#glossary`,
        name: "Glossaire SAGEO",
        hasDefinedTerm: [{ "@id": `${SITE_URL}/#term-sageo` }],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: HOME_URL,
        name: "SAGEO",
        description: SITE_DESCRIPTION,
        publisher: { "@id": `${SITE_URL}/#organization` },
        creator: { "@id": `${KOPIO_URL}/#karelle` },
        inLanguage: "fr-FR",
        about: { "@id": `${SITE_URL}/#term-sageo` },
      },
    ],
  };
}

export function getHomeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: HOME_URL,
        name: SITE_TITLE,
        description: HERO.description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: [
          { "@id": `${SITE_URL}/#term-sageo` },
          { "@id": `${SITE_URL}/#service` },
        ],
        mainEntity: [
          { "@id": `${SITE_URL}/#service` },
          { "@id": `${SITE_URL}/#product-extension` },
          { "@id": `${SITE_URL}/#faq` },
        ],
        author: { "@id": `${KOPIO_URL}/#karelle` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "fr-FR",
        dateModified: SITE_UPDATED_ISO,
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_URL}/og-image.jpeg`,
          width: 1376,
          height: 768,
        },
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#service`,
        name: "Méthode SAGEO",
        alternateName: "Search-Augmented Generative Engine Optimization",
        serviceType: "Référencement IA · SEO · GEO · AEO",
        description: METHOD.description,
        provider: { "@id": `${SITE_URL}/#organization` },
        creator: { "@id": `${KOPIO_URL}/#karelle` },
        brand: { "@id": `${SITE_URL}/#organization` },
        areaServed: {
          "@type": "Country",
          name: "France",
        },
        url: `${HOME_URL}#methode`,
        about: { "@id": `${SITE_URL}/#term-sageo` },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#product-extension`,
        name: "Extension Chrome SAGEO",
        description: EXTENSION.description,
        brand: { "@id": `${SITE_URL}/#organization` },
        creator: { "@id": `${KOPIO_URL}/#karelle` },
        applicationCategory: "BrowserApplication",
        operatingSystem: "Chrome",
        url: `${HOME_URL}#outil`,
        isRelatedTo: { "@id": `${SITE_URL}/#service` },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        url: `${HOME_URL}#faq`,
        name: "Questions fréquentes sur la visibilité ChatGPT",
        isPartOf: { "@id": `${SITE_URL}/#webpage` },
        about: { "@id": `${SITE_URL}/#term-sageo` },
        author: { "@id": `${KOPIO_URL}/#karelle` },
        mainEntity: FAQS.map((item, index) => ({
          "@type": "Question",
          "@id": `${SITE_URL}/#faq-${index + 1}`,
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
            author: { "@id": `${KOPIO_URL}/#karelle` },
          },
        })),
      },
    ],
  };
}

export function getLegalPageJsonLd(page: {
  path: "/mentions-legales" | "/politique-confidentialite";
  name: string;
  description: string;
}) {
  const url = `${SITE_URL}${page.path}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: page.name,
        description: page.description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "fr-FR",
        dateModified: SITE_UPDATED_ISO,
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: HOME_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.name,
            item: url,
          },
        ],
      },
    ],
  };
}

type ArticleSchemaInput = {
  path: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  dateIso: string;
  breadcrumb: string;
  faqName: string;
  faqs: readonly { question: string; answer: string }[];
  citations: readonly string[];
};

function getArticleGraph(article: ArticleSchemaInput) {
  const url = `${SITE_URL}${article.path}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: article.h1,
        name: article.title,
        description: article.lead,
        url,
        mainEntityOfPage: { "@id": `${url}#webpage` },
        datePublished: article.dateIso,
        dateModified: article.dateIso,
        inLanguage: "fr-FR",
        author: { "@id": `${KOPIO_URL}/#karelle` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#term-sageo` },
        citation: [...article.citations],
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: article.h1,
        description: article.description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        author: { "@id": `${KOPIO_URL}/#karelle` },
        inLanguage: "fr-FR",
        datePublished: article.dateIso,
        dateModified: article.dateIso,
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: { "@id": `${url}#article` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: HOME_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Articles",
            item: `${SITE_URL}/articles`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.breadcrumb,
            item: url,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        url: `${url}#questions`,
        name: article.faqName,
        isPartOf: { "@id": `${url}#webpage` },
        author: { "@id": `${KOPIO_URL}/#karelle` },
        mainEntity: article.faqs.map((item, index) => ({
          "@type": "Question",
          "@id": `${url}#question-${index + 1}`,
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
            author: { "@id": `${KOPIO_URL}/#karelle` },
          },
        })),
      },
    ],
  };
}

export function getArticleJsonLd() {
  return getArticleGraph({
    ...ARTICLE,
    breadcrumb: "La méthode SAGEO",
    faqName: "Questions sur la méthode SAGEO",
    faqs: ARTICLE_FAQS,
    citations: [
      "https://arxiv.org/abs/2602.12187",
      "https://developers.google.com/search/docs/fundamentals/using-gen-ai-content",
    ],
  });
}

export function getQuiFaitJsonLd() {
  return getArticleGraph({
    ...QUI_FAIT,
    faqName: "Questions sur l’autrice de SAGEO",
    faqs: QUI_FAIT_FAQS,
    citations: ["https://kopio.eu", `${SITE_URL}/methode-sageo`],
  });
}

export function getArticlesIndexJsonLd() {
  const url = `${SITE_URL}/articles`;
  const articleUrl = `${SITE_URL}${ARTICLE.path}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: ARTICLES_INDEX.h1,
        description: ARTICLES_INDEX.lead,
        dateModified: ARTICLES_INDEX.dateIso,
        author: { "@id": `${KOPIO_URL}/#karelle` },
        isPartOf: { "@id": `${SITE_URL}/#website` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "fr-FR",
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: { "@id": `${url}#list` },
        hasPart: { "@id": `${url}#faq` },
      },
      {
        "@type": "ItemList",
        "@id": `${url}#list`,
        name: ARTICLES_INDEX.h1,
        numberOfItems: 2,
        itemListOrder: "https://schema.org/ItemListOrderDescending",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: QUI_FAIT.h1,
            description: QUI_FAIT.description,
            url: `${SITE_URL}${QUI_FAIT.path}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: ARTICLE.h1,
            description: ARTICLE.description,
            url: articleUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        url: `${url}#questions`,
        name: "Questions sur les articles SAGEO",
        isPartOf: { "@id": `${url}#webpage` },
        author: { "@id": `${KOPIO_URL}/#karelle` },
        mainEntity: ARTICLES_INDEX_FAQS.map((item, index) => ({
          "@type": "Question",
          "@id": `${url}#question-${index + 1}`,
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
            author: { "@id": `${KOPIO_URL}/#karelle` },
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: HOME_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Articles",
            item: url,
          },
        ],
      },
    ],
  };
}

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
