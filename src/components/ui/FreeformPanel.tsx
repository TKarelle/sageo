"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/** Token coin = 2.75rem */
export const CORNER_PX = 44;
const ANGLE_DEG = 10;

type Props = {
  /** false = gauche ; true = miroir droite */
  mirror?: boolean;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

/**
 * Forme libre identique gauche / droite (miroir) :
 * - bord opposé au slant = vertical
 * - pente exacte +10°
 * - coin = arc de rayon 2.75rem, tangent au haut ET à la pente
 */
export function FreeformPanel({
  mirror = false,
  children,
  className = "",
  contentClassName = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const { width, height } = entries[0]?.contentRect ?? {
        width: 0,
        height: 0,
      };
      setSize({ w: width, h: height });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const θ = (ANGLE_DEG * Math.PI) / 180;
  const ext = size.h * Math.tan(θ);
  const svgW = Math.max(size.w + ext, 1);
  const svgH = Math.max(size.h, 1);
  const R = Math.min(CORNER_PX, size.w * 0.2, size.h * 0.35);

  const path = mirror
    ? buildMirrorPath(svgW, svgH, ext, R, θ)
    : buildLeftPath(svgW, svgH, size.w, R, θ);

  return (
    <div ref={ref} className={`relative overflow-visible ${className}`}>
      {size.w > 0 && size.h > 0 && (
        <svg
          aria-hidden
          className="pointer-events-none absolute top-0 h-full"
          style={
            mirror ? { left: -ext, width: svgW } : { left: 0, width: svgW }
          }
          viewBox={`0 0 ${svgW} ${svgH}`}
          preserveAspectRatio="none"
        >
          <path fill="#fff" d={path} />
        </svg>
      )}
      <div className={`relative z-10 ${contentClassName}`}>{children}</div>
    </div>
  );
}

/**
 * Gauche : haut horizontal → arc tangent → pente +10° → bas → gauche vertical.
 * L’arc est un vrai congé (tangent au haut et à la pente), pas un quart de cercle
 * suivi d’un segment droit.
 */
function buildLeftPath(
  svgW: number,
  svgH: number,
  contentW: number,
  R: number,
  θ: number
) {
  // Centre du congé (sous le haut, à gauche de la pente)
  const cx = contentW + (R * (Math.sin(θ) - 1)) / Math.cos(θ);

  // Point de tangence sur le haut
  const topX = cx;

  // Point de tangence sur la pente (arc suit la pente)
  const slantX = cx + R * Math.cos(θ);
  const slantY = R * (1 - Math.sin(θ));

  // Bas-droit (extrémité de la pente)
  const botX = svgW;
  const botY = svgH;

  return [
    `M0 0`,
    `H${topX}`,
    // Arc tangent → pente (sweep=1 en coords SVG y-down)
    `A${R} ${R} 0 0 1 ${slantX} ${slantY}`,
    `L${botX} ${botY}`,
    `H0`,
    `Z`,
  ].join(" ");
}

/**
 * Droite : miroir exact — haut → arc tangent → pente → bas → droit vertical.
 */
function buildMirrorPath(
  svgW: number,
  svgH: number,
  ext: number,
  R: number,
  θ: number
) {
  const cx = ext + (R * (1 - Math.sin(θ))) / Math.cos(θ);
  const topX = cx;
  const slantX = cx - R * Math.cos(θ);
  const slantY = R * (1 - Math.sin(θ));

  return [
    `M${svgW} 0`,
    `H${topX}`,
    `A${R} ${R} 0 0 0 ${slantX} ${slantY}`,
    `L0 ${svgH}`,
    `H${svgW}`,
    `Z`,
  ].join(" ");
}
