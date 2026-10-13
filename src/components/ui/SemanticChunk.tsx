import type { ReactNode } from "react";

type Props = {
  id: string;
  /** Contexte extracteur Trafilatura / dual-layer */
  ariaLabel: string;
  children: ReactNode;
  className?: string;
  as?: "article" | "section";
};

/**
 * Micro-chunk RAG — <article data-chunk> isolé pour embeddings ~512 tokens.
 */
export function SemanticChunk({
  id,
  ariaLabel,
  children,
  className = "",
  as: Tag = "article",
}: Props) {
  return (
    <Tag
      data-chunk={id}
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </Tag>
  );
}

type TupleProps = {
  subject: string;
  verb: string;
  complement: string;
};

/**
 * Triplet RDF canonique — couche sr-only pour extracteurs (Trafilatura).
 */
export function RdfTuple({ subject, verb, complement }: TupleProps) {
  return (
    <p className="sr-only">
      <dfn>{subject}</dfn> {verb} {complement}.
    </p>
  );
}
