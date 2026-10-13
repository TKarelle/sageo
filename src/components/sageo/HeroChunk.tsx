import Image from "next/image";
import { HeroCtaGroup } from "@/components/ui/AuditCta";
import { FreeformPanel } from "@/components/ui/FreeformPanel";
import { Reveal } from "@/components/ui/Reveal";
import { RdfTuple } from "@/components/ui/SemanticChunk";

const PILLARS = [
  {
    title: "Retrieval hybride BM25",
    hover:
      "Nous combinons la recherche textuelle par mots-clés (BM25) et la similarité vectorielle pour garantir une réquisition maximale lors de la première étape de crawl des IA.",
  },
  {
    title: "Cross-Encoder Rerank",
    hover:
      "Nous structurons vos données pour franchir l'étape de reclassement par Cross-Encoders en éliminant le bruit et en maximisant la densité d'information.",
  },
  {
    title: "LLM Grounding & Citation",
    hover:
      "Nous rédigeons des affirmations factuelles atomiques (tuples RDF) pour forcer le modèle de langage à vous citer sans halluciner.",
  },
  {
    title: "Micro-chunks de 120 à 180 mots",
    hover:
      "Nous découpons votre contenu en blocs sémantiques autonomes pour qu'il s'insère parfaitement dans les fenêtres d'embeddings des modèles RAG.",
  },
  {
    title: "GEO France & Optimisation LLM",
    hover:
      "Nous sommes le premier framework d'ingénierie Search-Augmented GEO développé en France par l'agence Kopio.",
  },
] as const;

const HERO_TAGLINE = {
  title: "SAGEO : Le Framework d'Ingénierie Search & Moteurs IA en France",
  body: "Dominez Google, SearchGPT, Perplexity et Claude grâce à la méthodologie SAGEO. L'alliance du Retrieval hybride, du Cross-Encoder Reranking et du Grounding sémantique.",
} as const;

/**
 * Hero full-bleed : image nette.
 * Bas gauche = piliers SAGEO Lab.
 * Bas droite = tagline framework.
 */
export function HeroChunk() {
  return (
    <>
      <article
        id="definition"
        className="relative isolate w-full overflow-hidden lg:min-h-[100svh]"
        itemScope
        itemType="https://schema.org/DefinedTerm"
      >
        {/* ——— Mobile / tablette : titre sur photo → by Kopio → piliers ——— */}
        <div className="lg:hidden">
          <div className="relative mx-[5px] mt-[5px] aspect-[4/5] min-h-[24rem] overflow-hidden rounded-[1.25rem] sm:aspect-[16/10] sm:min-h-[28rem]">
            <Image
              src="/herosageo.jpeg"
              alt="Neural Network Vector Reranking Pipeline — SAGEO Lab"
              fill
              priority
              quality={95}
              className="object-cover object-center"
              sizes="100vw"
            />
            <Reveal
              variant="mask-wipe"
              eager
              duration={1200}
              className="absolute inset-x-0 bottom-0 px-5 pb-6 pt-24 sm:px-8 sm:pb-8 sm:pt-28"
            >
              <p className="hero-text-glow font-display text-2xl font-medium leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
                {HERO_TAGLINE.title}
              </p>
              <p className="hero-text-glow mt-3 max-w-2xl text-sm leading-relaxed text-white sm:text-base">
                {HERO_TAGLINE.body}
              </p>
              <div className="mt-5">
                <HeroCtaGroup />
              </div>
            </Reveal>
          </div>
          <p className="px-4 pt-3 text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
            by Kopio
          </p>
          <Reveal variant="fade-up" delay={100} className="p-4 pt-3">
            <div className="rounded-[2rem] rounded-tr-[2.75rem] bg-white p-6 shadow-soft">
              <LeftPanelContent showByKopio={false} />
            </div>
          </Reveal>
        </div>

        {/* ——— Desktop ——— */}
        <div className="absolute inset-[5px] -z-10 hidden overflow-hidden rounded-[1.25rem] lg:block">
          <Image
            src="/herosageo.jpeg"
            alt="Neural Network Vector Reranking Pipeline — SAGEO Lab"
            fill
            priority
            quality={95}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        <div className="relative z-10 hidden min-h-[100svh] flex-col justify-end lg:flex">
          <div className="pointer-events-none absolute inset-x-0 bottom-0">
            <div className="pointer-events-auto flex items-end justify-between gap-16 xl:gap-24">
              <Reveal
                variant="fade-left"
                eager
                duration={1100}
                className="relative w-[min(24rem,32%)] shrink-0 overflow-visible"
              >
                <aside>
                  <FreeformPanel contentClassName="px-7 py-7 pr-10 xl:px-8 xl:py-8 xl:pr-12">
                    <LeftPanelContent />
                  </FreeformPanel>
                </aside>
              </Reveal>

              <Reveal
                variant="fade-right"
                eager
                delay={160}
                duration={1200}
                className="relative min-w-0 w-[min(62%,46rem)] shrink-0 overflow-visible"
              >
                <aside>
                  <RightPanel />
                </aside>
              </Reveal>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

function LeftPanelContent({ showByKopio = true }: { showByKopio?: boolean }) {
  return (
    <>
      {showByKopio && (
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
          by Kopio
        </p>
      )}
      <h1
        className={`font-display text-[1.45rem] font-medium leading-[1.2] tracking-tight text-slate-900 xl:text-[1.65rem] ${showByKopio ? "mt-2" : ""}`}
        itemProp="name"
      >
        <dfn title="Laboratoire de R&D Kopio — Search-Augmented Generative Engine Optimization">
          SAGEO Lab
        </dfn>
      </h1>
      <RdfTuple
        subject="SAGEO Lab"
        verb="est le centre de recherche de"
        complement="Kopio dédié au Search-Augmented Generative Engine Optimization"
      />
      <p className="mt-2 text-sm font-semibold leading-snug text-slate-800">
        Les 5 piliers de notre ingénierie Search &amp; RAG :
      </p>

      <ul className="mt-4 flex flex-col gap-2">
        {PILLARS.map((pillar) => (
          <li key={pillar.title} className="group relative">
            <button
              type="button"
              className="pill-outline inline-flex w-full cursor-default justify-start text-left text-[13px] group-hover:border-blue-500/50 group-hover:bg-white group-hover:text-blue-700"
            >
              {pillar.title}
            </button>
            <div
              role="tooltip"
              className="pointer-events-none absolute left-full top-1/2 z-30 ml-3 w-64 -translate-y-1/2 rounded-2xl border border-slate-200/80 bg-white px-4 py-3 text-left text-[12px] leading-relaxed text-slate-600 opacity-0 shadow-lift transition duration-200 group-hover:opacity-100 max-lg:left-0 max-lg:top-full max-lg:mt-2 max-lg:ml-0 max-lg:w-full max-lg:translate-y-0"
            >
              {pillar.hover}
            </div>
          </li>
        ))}
      </ul>

      <a
        href="#definition-sageo"
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-blue-600"
      >
        Plus de détails
        <span aria-hidden>↗</span>
      </a>
    </>
  );
}

/**
 * Bloc droit — tagline framework (miroir du panneau gauche).
 */
function RightPanel() {
  return (
    <FreeformPanel
      mirror
      contentClassName="w-full px-6 py-6 sm:px-8 sm:py-7 lg:px-10 lg:py-8"
    >
      <p className="font-display text-xl font-medium leading-snug tracking-tight text-slate-900 sm:text-2xl lg:text-[1.75rem] lg:leading-snug">
        {HERO_TAGLINE.title}
      </p>
      <p className="mt-3 max-w-none text-sm leading-relaxed text-slate-600 sm:text-base lg:text-[1.05rem]">
        {HERO_TAGLINE.body}
      </p>
      <div className="mt-6">
        <HeroCtaGroup />
      </div>
    </FreeformPanel>
  );
}
