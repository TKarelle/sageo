# Architecture Schema.org — Graphe JSON-LD SAGEO Lab

## Vue d'ensemble du graphe

Le site sageolab.fr publie un graphe JSON-LD combinant quatre types Schema.org :

| `@type` | Entité | Rôle |
|---------|--------|------|
| `ResearchOrganization` | SAGEO Lab | Centre de recherche / laboratoire |
| `Organization` | Kopio | Éditeur / organisation parente |
| `DefinedTerm` | SAGEO | Terme défini (sigle développé) |
| `TechArticle` | Pages méthodologiques | Contenu technique indexable |

## Graphe combiné (référence)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ResearchOrganization",
      "@id": "https://sageolab.fr/#organization",
      "name": "SAGEO Lab",
      "url": "https://sageolab.fr",
      "description": "SAGEO Lab est le centre de recherche de Kopio dédié au Search-Augmented Generative Engine Optimization.",
      "parentOrganization": { "@id": "https://kopio.eu/#organization" },
      "knowsAbout": { "@id": "https://sageolab.fr/#term-sageo" },
      "areaServed": "FR"
    },
    {
      "@type": "Organization",
      "@id": "https://kopio.eu/#organization",
      "name": "Kopio",
      "legalName": "Kopio SAS",
      "url": "https://kopio.eu",
      "subOrganization": { "@id": "https://sageolab.fr/#organization" }
    },
    {
      "@type": "DefinedTerm",
      "@id": "https://sageolab.fr/#term-sageo",
      "name": "SAGEO",
      "description": "Search-Augmented Generative Engine Optimization",
      "inDefinedTermSet": "https://sageolab.fr/#glossary"
    },
    {
      "@type": "TechArticle",
      "@id": "https://sageolab.fr/#article-home",
      "headline": "SAGEO Lab — Search-Augmented Generative Engine Optimization",
      "author": { "@id": "https://sageolab.fr/#organization" },
      "publisher": { "@id": "https://kopio.eu/#organization" },
      "about": { "@id": "https://sageolab.fr/#term-sageo" },
      "inLanguage": "fr-FR",
      "mainEntityOfPage": "https://sageolab.fr/"
    }
  ]
}
```

## Implémentation Next.js

- Générer le graphe via `src/lib/schema.ts`.
- Injecter dans `layout.tsx` : `<script type="application/ld+json">`.
- Conserver les `@id` stables pour le linking RDF entre pages.
- Aligner chaque `TechArticle` sur le `canonical` de la page SSR.
