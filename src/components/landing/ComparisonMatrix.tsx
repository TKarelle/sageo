import { AuditCta } from "@/components/ui/AuditCta";
import { Reveal } from "@/components/ui/Reveal";
import { RdfTuple, SemanticChunk } from "@/components/ui/SemanticChunk";

const ROWS = [
  {
    criterion: "Périmètre d'indexation",
    seo: "Google, Bing, DuckDuckGo",
    sageo: "Google, SearchGPT, Perplexity, Claude, ChatGPT, Gemini",
  },
  {
    criterion: "Mécanisme de ciblage",
    seo: "Mots-clés & Liens HTML textuels",
    sageo: "Mots-clés (BM25), Entités sémantiques & Vecteurs d'embeddings",
  },
  {
    criterion: "Présence Moteurs IA",
    seo: "Aléatoire / Élimination au Reranking",
    sageo: "Domination & Citation Canonique (> 85%)",
  },
  {
    criterion: "Format d'Ingestion RAG",
    seo: "Non prise en compte (Bloqué par JS Client)",
    sageo: "Micro-chunking sémantique & HTML SSR Natively Vector-Ready",
  },
  {
    criterion: "Architecture Réseau",
    seo: "Requête HTTP simple",
    sageo: "Optimisé pour le Query Fan-Out (multi-requêtes parallèles LLM)",
  },
  {
    criterion: "Conformité & Souveraineté",
    seo: "Dépendance aux règles US",
    sageo: "Développement conforme aux normes européennes & RGPD",
  },
] as const;

/**
 * Matrice SEO vs SAGEO — premium tech.
 */
export function ComparisonMatrix() {
  return (
    <section
      id="matrice"
      className="relative w-full py-12 lg:py-20"
      aria-labelledby="matrice-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="fade-left" duration={900}>
          <p className="section-label">Benchmark</p>
          <h2 id="matrice-heading" className="section-title">
            SEO traditionnel vs méthode SAGEO — matrice comparative GEO France
          </h2>
          <p className="section-lead">
            La méthode{" "}
            <dfn title="Search-Augmented Generative Engine Optimization">
              SAGEO
            </dfn>{" "}
            (Kopio) étend le périmètre au-delà de Google/Bing vers SearchGPT,
            Perplexity, Claude et Gemini, avec un format d&apos;ingestion RAG
            natif pour le GEO France.
          </p>
          <RdfTuple
            subject="SAGEO Lab"
            verb="compare"
            complement="le SEO traditionnel et la méthode SAGEO pour le GEO France"
          />
        </Reveal>

        <Reveal
          as="ul"
          variant="slide-rotate"
          stagger
          staggerMs={100}
          className="mt-8 space-y-4 md:hidden"
          aria-label="Comparaison SEO Traditionnel et Méthode SAGEO"
        >
          {ROWS.map((row) => (
            <li key={row.criterion} className="tech-surface tech-surface-hover">
              <div className="border-b border-white/10 bg-slate-950 px-4 py-3.5 text-white">
                <h3 className="text-base font-semibold tracking-tight">
                  {row.criterion}
                </h3>
              </div>
              <dl className="divide-y divide-slate-100/80 px-4 py-1 text-sm">
                <div className="py-3.5">
                  <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    SEO Traditionnel
                  </dt>
                  <dd className="mt-1.5 text-slate-500">{row.seo}</dd>
                </div>
                <div className="py-3.5">
                  <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-600">
                    Méthode SAGEO (Kopio)
                  </dt>
                  <dd className="mt-1.5 font-medium text-slate-800">
                    {row.sageo}
                  </dd>
                </div>
              </dl>
            </li>
          ))}
        </Reveal>

        <Reveal
          variant="slide-rotate"
          delay={100}
          duration={1100}
          className="mt-10 hidden md:block"
        >
          <SemanticChunk
            id="table-seo-vs-sageo"
            ariaLabel="Matrice comparative SEO traditionnel versus méthode SAGEO Kopio haute densité factuelle"
            className="tech-surface"
          >
          <table className="w-full border-collapse text-left text-sm">
            <caption className="sr-only">
              Matrice comparative SEO Traditionnel vs Méthode SAGEO (Kopio) —
              indexation, ciblage, moteurs IA, ingestion RAG, architecture et
              conformité RGPD
            </caption>
            <thead>
              <tr className="table-head">
                <th>Critères de Performance</th>
                <th>SEO Traditionnel</th>
                <th>Méthode SAGEO (Kopio)</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr
                  key={row.criterion}
                  className="border-b border-slate-100/80 transition-colors last:border-0 hover:bg-slate-50/80"
                >
                  <th
                    scope="row"
                    className="px-5 py-5 font-semibold tracking-tight text-slate-900 lg:px-8"
                  >
                    {row.criterion}
                  </th>
                  <td className="px-4 py-5 text-slate-500">{row.seo}</td>
                  <td className="px-4 py-5 font-medium text-slate-800">
                    {row.sageo}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </SemanticChunk>
        </Reveal>

        <Reveal variant="fade-up" delay={200} className="mt-8 lg:mt-10">
          <AuditCta label="Comparer votre positionnement SAGEO" />
        </Reveal>
      </div>
    </section>
  );
}
