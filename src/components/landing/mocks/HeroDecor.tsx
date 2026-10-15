import { BrandTiles } from "./BrandTiles";

/**
 * Halos + tuiles marques + sphère derrière la carte audit —
 * même langage visuel que le mockup ChatGPT (côté droit uniquement).
 */
export function HeroDecor() {
  return (
    <div className="hero-blend" aria-hidden>
      <div className="hero-blend-stage">
        <div className="hero-blob hero-blob-blue" />
        <div className="hero-blob hero-blob-lav" />
        <div className="hero-blob hero-blob-sky" />
        <div className="hero-blob hero-blob-mint" />
        <div className="hero-blob hero-blob-teal" />
        <div className="hero-blob hero-blob-arc" />
        <div className="hero-sphere" />

        <BrandTiles mode="hero" />
      </div>
    </div>
  );
}
