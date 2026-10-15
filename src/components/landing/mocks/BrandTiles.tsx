import { GlassTile } from "./GlassTile";
import { BingMark } from "./icons/BingMark";
import { GoogleMark } from "./icons/GoogleMark";
import { OpenAIMark } from "./icons/OpenAIMark";
import { SparkMark } from "./icons/SparkMark";

type BrandTilesProps = {
  /** `stage` = mockup 1536×1024 ; `hero` = tuiles autour de la carte audit */
  mode: "stage" | "hero";
};

const SIZES = {
  stage: { openai: 74, gemini: 54, bing: 52, google: 64 },
  hero: { openai: 42, gemini: 30, bing: 30, google: 36 },
} as const;

/**
 * Quatre marques (OpenAI, Gemini, Bing, Google) —
 * partagé par le hero et la section audience.
 */
export function BrandTiles({ mode }: BrandTilesProps) {
  const s = SIZES[mode];
  const gradPrefix = mode === "hero" ? "hero" : "stage";

  const openai = (
    <span style={{ color: "#10A37F" }}>
      <OpenAIMark size={s.openai} />
    </span>
  );
  const gemini = (
    <SparkMark
      size={s.gemini}
      gradientId={`${gradPrefix}Gemini`}
      from="#4C8DF6"
      to="#2F6FE8"
    />
  );
  const bing = <BingMark size={s.bing} gradientId={`${gradPrefix}Bing`} />;
  const google = <GoogleMark size={s.google} />;

  if (mode === "stage") {
    return (
      <>
        <GlassTile variant="gpt" aria-label="OpenAI">
          {openai}
        </GlassTile>
        <GlassTile variant="gem" aria-label="Gemini">
          {gemini}
        </GlassTile>
        <GlassTile variant="star" aria-label="Bing">
          {bing}
        </GlassTile>
        <GlassTile variant="goo" aria-label="Google">
          {google}
        </GlassTile>
      </>
    );
  }

  return (
    <>
      <div className="hero-tile hero-tile-gpt">{openai}</div>
      <div className="hero-tile hero-tile-gem">{gemini}</div>
      <div className="hero-tile hero-tile-star">{bing}</div>
      <div className="hero-tile hero-tile-goo">{google}</div>
    </>
  );
}
