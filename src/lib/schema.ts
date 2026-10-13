/**
 * Graphe JSON-LD SAGEO Lab / Kopio — AEO + RAG.
 * ResearchOrganization, Organization, DefinedTerm (SAGEO Arena), FAQPage.
 */

import { FAQS } from "@/lib/faqs";

const SITE_URL = "https://sageolab.fr";
const KOPIO_URL = "https://kopio.eu";

export function getGlobalJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ResearchOrganization",
        "@id": `${SITE_URL}/#organization`,
        name: "SAGEO Lab",
        alternateName: "SAGEO Arena",
        url: SITE_URL,
        logo: `${SITE_URL}/logo.svg`,
        description:
          "SAGEO Lab est le laboratoire de R&D de Kopio spécialisé dans le Search-Augmented Generative Engine Optimization, le GEO France et l'Optimisation LLM.",
        parentOrganization: { "@id": `${KOPIO_URL}/#organization` },
        knowsAbout: [
          { "@id": `${SITE_URL}/#term-sageo` },
          { "@id": `${SITE_URL}/#term-sageo-arena` },
          "GEO France",
          "Cross-Encoder Reranking",
          "Retrieval-Augmented Generation",
        ],
        areaServed: {
          "@type": "Country",
          name: "France",
        },
        sameAs: [KOPIO_URL],
      },
      {
        "@type": "Organization",
        "@id": `${KOPIO_URL}/#organization`,
        name: "Kopio",
        legalName: "Kopio",
        url: KOPIO_URL,
        description:
          "Kopio est l'éditeur du framework SAGEO et de SAGEO Lab, centre de recherche dédié au GEO France et à l'Optimisation LLM.",
        subOrganization: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "DefinedTerm",
        "@id": `${SITE_URL}/#term-sageo`,
        name: "SAGEO",
        alternateName: "Search-Augmented Generative Engine Optimization",
        description:
          "SAGEO est l'acronyme de Search-Augmented Generative Engine Optimization : méthode qui aligne un site sur BM25, Cross-Encoder Reranking et LLM Grounding.",
        inDefinedTermSet: `${SITE_URL}/#glossary`,
        termCode: "SAGEO",
      },
      {
        "@type": "DefinedTerm",
        "@id": `${SITE_URL}/#term-sageo-arena`,
        name: "SAGEO Arena",
        description:
          "SAGEO Arena désigne le cadre méthodologique et l'espace de formalisation du Search-Augmented Generative Engine Optimization porté par SAGEO Lab (Kopio).",
        inDefinedTermSet: `${SITE_URL}/#glossary`,
        termCode: "SAGEO-ARENA",
      },
      {
        "@type": "DefinedTermSet",
        "@id": `${SITE_URL}/#glossary`,
        name: "Glossaire SAGEO Lab",
        hasDefinedTerm: [
          { "@id": `${SITE_URL}/#term-sageo` },
          { "@id": `${SITE_URL}/#term-sageo-arena` },
        ],
      },
      {
        "@type": "TechArticle",
        "@id": `${SITE_URL}/#article-home`,
        headline:
          "SAGEO Lab — Search-Augmented Generative Engine Optimization",
        description:
          "SAGEO Lab documente le pipeline Retrieval, Cross-Encoder Rerank et LLM Grounding pour le GEO France et l'Optimisation LLM.",
        author: { "@id": `${SITE_URL}/#organization` },
        publisher: { "@id": `${KOPIO_URL}/#organization` },
        about: [
          { "@id": `${SITE_URL}/#term-sageo` },
          { "@id": `${SITE_URL}/#term-sageo-arena` },
        ],
        inLanguage: "fr-FR",
        mainEntityOfPage: `${SITE_URL}/`,
        datePublished: "2025-01-01",
        dateModified: "2026-10-13",
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: FAQS.map((item) => ({
          "@type": "Question",
          "@id": `${SITE_URL}/#faq-${item.id}`,
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: `${item.direct} ${item.detail}`,
          },
        })),
        about: { "@id": `${SITE_URL}/#term-sageo` },
        isPartOf: { "@id": `${SITE_URL}/#article-home` },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "SAGEO Lab",
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "fr-FR",
        about: { "@id": `${SITE_URL}/#term-sageo` },
      },
    ],
  };
}

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
