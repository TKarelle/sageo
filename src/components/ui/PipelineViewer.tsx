"use client";

import { useState } from "react";

const STAGES = [
  {
    id: "retrieval",
    label: "Stage 1 · Retrieval",
    color: "text-blue-600",
    activeBg: "bg-blue-50",
    lines: [
      "$ sageo retrieve --mode hybrid",
      "→ BM25 sparse ............... OK  (lemma: SAGEO)",
      "→ Dense vector .............. OK  (chunks: 120–180w)",
      "→ candidates ................ 48 passages",
      "→ recall@50 ................. 0.94",
    ],
  },
  {
    id: "rerank",
    label: "Stage 2 · Cross-Encoder Rerank",
    color: "text-blue-700",
    activeBg: "bg-blue-50",
    lines: [
      "$ sageo rerank --model bge-reranker",
      "→ pairwise scoring .......... OK",
      "→ provider .................. BGE / Cohere",
      "→ top_k ..................... 8",
      "→ max_score ................. 0.91 (SAGEO Lab def)",
    ],
  },
  {
    id: "grounding",
    label: "Stage 3 · LLM Grounding",
    color: "text-sky-600",
    activeBg: "bg-sky-50",
    lines: [
      "$ sageo ground --cite",
      "→ context window ............ 512 tok / chunk",
      "→ citations ................. [SAGEO Lab] [Kopio]",
      "→ factuality ................ declarative / active",
      "→ output .................... grounded answer",
    ],
  },
] as const;

/**
 * Visualiseur de pipeline RAG — glass clair + terminal.
 */
export function PipelineViewer() {
  const [active, setActive] = useState(0);
  const stage = STAGES[active];

  return (
    <section
      aria-labelledby="pipeline-viewer-title"
      className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-lift ring-1 ring-cyan-500/10"
    >
      <div className="flex items-center justify-between border-b border-white/10 bg-slate-900 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" aria-hidden />
          <span className="h-3 w-3 rounded-full bg-amber-400" aria-hidden />
          <span className="h-3 w-3 rounded-full bg-emerald-400" aria-hidden />
          <h2
            id="pipeline-viewer-title"
            className="ml-3 font-mono text-xs text-slate-400"
          >
            sageo-pipeline — DevTools
          </h2>
        </div>
        <p className="hidden font-mono text-[10px] uppercase tracking-widest text-slate-500 sm:block">
          SAGEO Lab · Kopio
        </p>
      </div>

      <div className="flex flex-col md:flex-row">
        <nav
          aria-label="Stages du pipeline"
          className="flex border-b border-white/10 md:w-56 md:flex-col md:border-b-0 md:border-r"
        >
          {STAGES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActive(i)}
              className={`px-4 py-3 text-left font-mono text-xs transition-colors ${
                active === i
                  ? "bg-white/5 text-cyan-300"
                  : "text-slate-500 hover:bg-white/[0.03] hover:text-slate-200"
              }`}
              aria-pressed={active === i}
            >
              {s.label}
            </button>
          ))}
        </nav>

        <div className="flex-1 p-5">
          <p className="font-mono text-xs text-cyan-400">{stage.label}</p>
          <pre className="mt-4 overflow-x-auto font-mono text-[13px] leading-relaxed text-emerald-400/95">
            {stage.lines.map((line) => (
              <code key={line} className="block">
                {line}
              </code>
            ))}
          </pre>
        </div>
      </div>
    </section>
  );
}
