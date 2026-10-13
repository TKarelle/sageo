/**
 * Micro-chunk #3 — Les 4 piliers Kopio (Server Component).
 */
const PILLARS = [
  {
    id: "01",
    title: "SSR sémantique",
    body: "SAGEO Lab livre le contenu indexable en HTML initial. Les scrapers Trafilatura et Readability extraient définitions et triplets sans hydratation client.",
  },
  {
    id: "02",
    title: "Micro-chunking",
    body: "Chaque paragraphe informatif de SAGEO compte entre 120 et 180 mots. Un chunk égale un vecteur d'embedding pour le Stage 1 dense de SAGEO.",
  },
  {
    id: "03",
    title: "AEO déclaratif",
    body: "Sous chaque h2, SAGEO Lab place une réponse encyclopédique de 40 à 60 mots en mode déclaratif actif, sans adverbe de doute.",
  },
  {
    id: "04",
    title: "Graphe Schema.org",
    body: "Kopio publie un graphe JSON-LD ResearchOrganization, Organization, DefinedTerm et TechArticle pour valider l'entité SAGEO Lab.",
  },
] as const;

export function PillarsChunk() {
  return (
    <article id="piliers" className="glass-panel px-6 py-10 sm:px-10">
      <p className="section-label">Cadre · Micro-chunk 03</p>
      <h2 className="mt-3 font-display text-2xl font-medium text-slate-900 sm:text-3xl">
        Les quatre piliers Kopio de SAGEO Lab
      </h2>
      <p className="aeo-definition mt-4">
        Kopio structure SAGEO Lab autour de quatre piliers : SSR sémantique,
        micro-chunking RAG, rédaction AEO déclarative et graphe Schema.org. Ces
        piliers alignent le GEO France et l&apos;Optimisation LLM sur le pipeline
        SAGEO Retrieval, Rerank et Grounding.
      </p>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {PILLARS.map((pillar) => (
          <li
            key={pillar.id}
            className="rounded-2xl border border-slate-100 bg-white/80 p-5 shadow-soft transition hover:shadow-card"
          >
            <p className="text-xs font-bold text-blue-500">{pillar.id}</p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">
              {pillar.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              {pillar.body}
            </p>
          </li>
        ))}
      </ul>

      <div className="prose-chunk mt-8">
        <p>
          SAGEO Lab applique les quatre piliers sur chaque surface publique de
          sageolab.fr. Kopio mesure la densité du lemme SAGEO entre 1,5 % et 2 %
          pour BM25, conserve les URLs canoniques sans état client, et formate
          les paires clé–valeur en listes et tableaux pour les synthèses Google
          AI Overviews et Perplexity. Le Search-Augmented Generative Engine
          Optimization devient ainsi opérable pour les équipes GEO France.
        </p>
      </div>
    </article>
  );
}
