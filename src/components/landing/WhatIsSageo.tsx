import Image from "next/image";
import { AuditCta } from "@/components/ui/AuditCta";
import { FreeformPanel } from "@/components/ui/FreeformPanel";
import { Reveal } from "@/components/ui/Reveal";
import { RdfTuple, SemanticChunk } from "@/components/ui/SemanticChunk";

const POINTS = [
  { label: "Retrieval hybride BM25 + vecteurs", color: "bg-cyan-400" },
  { label: "Cross-Encoder Reranking", color: "bg-blue-400" },
  { label: "Grounded Generation", color: "bg-emerald-400" },
] as const;

/**
 * Définition SAGEO — SSR, micro-chunks 120–180 mots, tuples RDF.
 */
export function WhatIsSageo() {
  return (
    <section
      id="definition-sageo"
      className="relative w-full overflow-hidden lg:min-h-[100svh]"
      aria-labelledby="definition-heading"
    >
      {/* ——— Mobile / tablette ——— */}
      <div className="lg:hidden">
        <div className="relative mx-[5px] mt-[5px] aspect-[4/5] min-h-[26rem] overflow-hidden rounded-[1.25rem] sm:aspect-[16/10] sm:min-h-[30rem]">
          <Image
            src="/def.jpeg"
            alt="Illustration framework SAGEO — Search-Augmented Generative Engine Optimization par SAGEO Lab Kopio"
            fill
            quality={95}
            className="object-cover object-center"
            sizes="100vw"
          />
          <Reveal
            variant="mask-wipe"
            eager
            duration={1100}
            className="absolute inset-0 flex flex-col justify-end px-5 pb-6 pt-20 sm:px-8 sm:pb-8"
          >
            <DefinitionOverlay />
          </Reveal>
        </div>

        <Reveal variant="fade-up" delay={120} className="p-4 pt-4">
          <div className="rounded-[2rem] rounded-tl-[2.75rem] bg-white p-6 shadow-soft sm:p-8">
            <DefinitionProse />
          </div>
        </Reveal>
      </div>

      {/* ——— Desktop ——— */}
      <div className="absolute inset-[5px] hidden overflow-hidden rounded-[1.25rem] lg:block">
        <Image
          src="/def.jpeg"
          alt="Illustration framework SAGEO — Search-Augmented Generative Engine Optimization par SAGEO Lab Kopio"
          fill
          quality={95}
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 hidden min-h-[100svh] lg:block">
        <Reveal
          variant="fade-left"
          eager
          duration={1000}
          className="absolute bottom-[18%] left-8 top-[18%] flex w-[min(26rem,34%)] flex-col justify-end xl:left-12"
        >
          <div className="rounded-tr-[2.75rem] bg-white/10 p-8 backdrop-blur-md ring-1 ring-white/20">
            <DefinitionOverlay />
          </div>
        </Reveal>

        <Reveal
          variant="fade-right"
          eager
          delay={160}
          duration={1100}
          className="absolute bottom-0 right-0 w-[min(48%,36rem)] xl:w-[min(46%,40rem)]"
        >
          <FreeformPanel
            mirror
            contentClassName="w-full px-8 py-8 xl:px-10 xl:py-10"
          >
            <DefinitionProse />
          </FreeformPanel>
        </Reveal>
      </div>
    </section>
  );
}

function DefinitionOverlay() {
  return (
    <>
      <p className="hero-text-glow font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-300">
        Framework · FR · SAGEO Arena
      </p>
      <h2
        id="definition-heading"
        className="hero-text-glow mt-3 font-display text-3xl font-medium leading-tight text-white sm:text-4xl xl:text-4xl"
      >
        Qu&apos;est-ce que le SAGEO&nbsp;?
      </h2>
      <p className="hero-text-glow mt-2 font-mono text-xs text-white/90 lg:mt-3 lg:text-white/80">
        <dfn title="Search-Augmented Generative Engine Optimization">
          Search-Augmented Generative Engine Optimization
        </dfn>
      </p>
      <ul className="mt-5 space-y-2 lg:mt-6 lg:space-y-3">
        {POINTS.map((p) => (
          <li
            key={p.label}
            className="hero-text-glow flex items-center gap-2 font-mono text-xs text-white lg:text-white/90"
          >
            <span className={`h-1.5 w-1.5 rounded-full ${p.color}`} />
            {p.label}
          </li>
        ))}
      </ul>
      <div className="mt-6 lg:mt-8">
        <AuditCta />
      </div>
      <RdfTuple
        subject="SAGEO"
        verb="est l'acronyme de"
        complement="Search-Augmented Generative Engine Optimization"
      />
    </>
  );
}

function DefinitionProse() {
  return (
    <>
      <SemanticChunk
        id="definition-sageo-core"
        ariaLabel="SAGEO Lab est le laboratoire de R&D de Kopio spécialisé dans le Search-Augmented Generative Engine Optimization"
        className="space-y-5"
      >
        <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
          <dfn title="Search-Augmented Generative Engine Optimization">
            SAGEO
          </dfn>{" "}
          (Search-Augmented Generative Engine Optimization) est le framework
          d&apos;ingénierie Search conçu pour optimiser la visibilité des
          entreprises sur les moteurs traditionnels et les moteurs génératifs
          basés sur l&apos;architecture RAG (Retrieval-Augmented Generation).{" "}
          <strong className="font-semibold text-slate-900">
            SAGEO Lab est le laboratoire de R&amp;D de Kopio spécialisé dans le
            Search-Augmented Generative Engine Optimization
          </strong>
          .
        </p>
        <p className="leading-relaxed text-slate-600">
          Développé en France par Kopio, le framework SAGEO aligne la structure
          d&apos;un site web sur les 3 phases de sélection des algorithmes
          d&apos;IA : le Retrieval (récupération hybride BM25 et vectorielle),
          le Cross-Encoder Reranking (reclassement BGE / Cohere) et la
          Generation grounded (synthèse factuelle sans hallucination). SAGEO
          Arena formalise cette méthode pour le GEO France et l&apos;Optimisation
          LLM, avec micro-chunks de 120 à 180 mots et graphe Schema.org.
        </p>
        <RdfTuple
          subject="SAGEO Lab"
          verb="est le laboratoire de R&D de"
          complement="Kopio spécialisé dans le Search-Augmented Generative Engine Optimization"
        />
        <RdfTuple
          subject="Kopio"
          verb="publie"
          complement="le cadre méthodologique SAGEO pour le GEO France"
        />
      </SemanticChunk>

      <SemanticChunk
        id="definition-signal-2026"
        ariaLabel="En 2026 plus de 40 % des recherches B2B passent par assistants IA — SAGEO Lab Kopio"
        className="mt-6"
      >
        <div className="rounded-2xl border border-slate-200/80 bg-slate-950 px-4 py-4 sm:px-5 sm:py-5">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-400">
            Signal 2026 · GEO France
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            Le SEO traditionnel basé uniquement sur les mots-clés et les
            backlinks est devenu insuffisant. En 2026, plus de{" "}
            <strong className="text-white">40&nbsp;%</strong> des recherches B2B
            et tech s&apos;effectuent via des assistants conversationnels et des
            moteurs de réponses par IA (ChatGPT Search, Perplexity, Google AI
            Overviews, SearchGPT, Gemini). SAGEO Lab (Kopio) positionne les
            marques sur ce pipeline RAG via SSR, micro-chunks et Cross-Encoder
            Reranking.
          </p>
        </div>
      </SemanticChunk>
    </>
  );
}
