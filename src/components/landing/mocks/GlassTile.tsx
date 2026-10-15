import type { ReactNode } from "react";

type GlassTileProps = {
  variant: "gpt" | "gem" | "star" | "goo";
  children: ReactNode;
  "aria-label"?: string;
};

const VARIANT_CLASS = {
  gpt: "tile t-gpt",
  gem: "tile t-gem",
  star: "tile t-star",
  goo: "tile t-goo",
} as const;

/** Tuile verre fixe (pas d’animation). */
export function GlassTile({
  variant,
  children,
  "aria-label": ariaLabel,
}: GlassTileProps) {
  return (
    <div className={VARIANT_CLASS[variant]} aria-label={ariaLabel} aria-hidden={!ariaLabel}>
      {children}
    </div>
  );
}
