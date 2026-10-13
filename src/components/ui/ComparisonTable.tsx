import { AuditCta } from "@/components/ui/AuditCta";
import { Reveal } from "@/components/ui/Reveal";
import { RdfTuple, SemanticChunk } from "@/components/ui/SemanticChunk";

/**
 * Tableau SEO vs GEO vs SAGEO — premium tech.
 */

const ROWS = [
  {
    dimension: "Cible primaire",
    seo: "Moteurs lexicaux (SERP)",
    geo: "Modèles génératifs",
    sageo: "Pipeline RAG + Cross-Encoder",
  },
  {
    dimension: "Unité d'optimisation",
    seo: "Page / backlink",
    geo: "Mention / citation",
    sageo: "Micro-chunk + graphe JSON-LD",
  },
  {
    dimension: "Signal de preuve",
    seo: "Ranking SERP",
    geo: "Présence dans la réponse",
    sageo: "Citation sourcée Stage 3",
  },
  {
    dimension: "Format texte",
    seo: "Long-form + Hn",
    geo: "FAQ / définitions",
    sageo: "AEO 40–60 mots + chunks 120–180",
  },
  {
    dimension: "Acteur France",
    seo: "Agences SEO classiques",
    geo: "GEO France émergent",
    sageo: "SAGEO Lab (Kopio)",
  },
] as const;

const META = [
  { label: "Entité", value: "SAGEO Lab" },
  { label: "Éditeur", value: "Kopio" },
  {
    label: "Sigle",
    value: "Search-Augmented Generative Engine Optimization",
  },
  { label: "Périmètre", value: "GEO France + Optimisation LLM" },
  {
    label: "Livrable",
    value: "pipeline Retrieval → Rerank → Grounding",
  },
] as const;

export function ComparisonTable() {
  return (
    <section
      id="comparaison"
      className="relative w-full py-12 lg:py-20"
      aria-labelledby="comparaison-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="glow-in" duration={950}>
          <p className="section-label">Triptyque</p>
          <h2 id="comparaison-heading" className="section-title">
            SEO vs GEO vs SAGEO — différences pour le GEO France et l&apos;Optimisation
            LLM
          </h2>
          <p className="section-lead">
            <dfn title="Search-Augmented Generative Engine Optimization">
              SAGEO
            </dfn>{" "}
            étend le GEO et le SEO classique : le Search-Augmented Generative
            Engine Optimization aligne micro-chunks, BM25, embeddings et
            Cross-Encoder Rerank.{" "}
            <strong>
              SAGEO Lab est le centre de recherche de Kopio
            </strong>{" "}
            qui formalise cette matrice pour le GEO France et l&apos;Optimisation
            LLM.
          </p>
          <RdfTuple
            subject="SAGEO"
            verb="étend"
            complement="le GEO et le SEO classique via un pipeline RAG à trois stages"
          />
        </Reveal>

        <Reveal
          as="ul"
          variant="glow-in"
          stagger
          staggerMs={100}
          className="mt-8 space-y-4 md:hidden"
          aria-label="Comparaison SEO, GEO et SAGEO"
        >
          {ROWS.map((row) => (
            <li key={row.dimension} className="tech-surface tech-surface-hover">
              <div className="border-b border-white/10 bg-slate-950 px-4 py-3.5 text-white">
                <h3 className="text-base font-semibold tracking-tight">
                  {row.dimension}
                </h3>
              </div>
              <dl className="divide-y divide-slate-100/80 px-4 py-1 text-sm">
                <div className="py-3.5">
                  <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    SEO
                  </dt>
                  <dd className="mt-1.5 text-slate-500">{row.seo}</dd>
                </div>
                <div className="py-3.5">
                  <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    GEO
                  </dt>
                  <dd className="mt-1.5 text-slate-500">{row.geo}</dd>
                </div>
                <div className="py-3.5">
                  <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-600">
                    SAGEO
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
          variant="glow-in"
          delay={120}
          duration={1100}
          className="mt-10 hidden md:block"
        >
          <SemanticChunk
            id="table-seo-geo-sageo"
            ariaLabel="Tableau SEO vs GEO vs SAGEO — densité factuelle pour Cross-Encoder Reranker BGE Cohere"
            className="tech-surface"
          >
          <table className="w-full border-collapse text-left text-sm">
            <caption className="sr-only">
              Comparaison haute densité SEO vs GEO vs SAGEO (SAGEO Lab / Kopio)
              : cible, unité d&apos;optimisation, preuve, format texte et acteur
              France
            </caption>
            <thead>
              <tr className="table-head">
                <th scope="col">Dimension</th>
                <th scope="col">SEO</th>
                <th scope="col">GEO</th>
                <th scope="col">SAGEO</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr
                  key={row.dimension}
                  className="border-b border-slate-100/80 transition-colors last:border-0 hover:bg-slate-50/80"
                >
                  <th
                    scope="row"
                    className="px-5 py-5 font-semibold tracking-tight text-slate-900 lg:px-8"
                  >
                    {row.dimension}
                  </th>
                  <td className="px-4 py-5 text-slate-500">{row.seo}</td>
                  <td className="px-4 py-5 text-slate-500">{row.geo}</td>
                  <td className="px-4 py-5 font-medium text-slate-800">
                    {row.sageo}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <ul className="grid gap-3 border-t border-slate-100 bg-slate-50/50 px-5 py-6 text-sm text-slate-500 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
            {META.map((m) => (
              <li key={m.label} className="font-mono text-xs leading-relaxed">
                <span className="font-semibold text-slate-800">{m.label}</span>
                <span className="text-slate-400"> · </span>
                {m.value}
              </li>
            ))}
          </ul>
          </SemanticChunk>
        </Reveal>

        <Reveal variant="fade-up" className="mt-4 md:hidden">
          <ul className="tech-surface space-y-2.5 px-4 py-4 text-sm text-slate-500">
            {META.map((m) => (
              <li key={m.label} className="font-mono text-xs">
                <span className="font-semibold text-slate-800">{m.label}</span>
                <span className="text-slate-400"> · </span>
                {m.value}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal variant="fade-up" delay={200} className="mt-8 lg:mt-10">
          <AuditCta label="Passer du SEO / GEO au SAGEO" />
        </Reveal>
      </div>
    </section>
  );
}
