"use client";

import { useEffect, useRef, useState } from "react";
import { BrandTiles } from "./BrandTiles";
import { ChatWindow } from "./ChatWindow";
import { MockupDecor } from "./MockupDecor";

const STAGE_W = 1536;
const STAGE_H = 1024;

/**
 * Réplique HTML/Tailwind du mockup ChatGPT 3D —
 * canevas 1536×1024 mis à l’échelle dans le conteneur parent.
 */
export default function SageoChatMockup() {
  const fitRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.45);

  useEffect(() => {
    const el = fitRef.current;
    if (!el) return;

    const update = () => {
      const parent = el.parentElement;
      const vw = parent?.clientWidth ?? window.innerWidth;
      const maxH = Math.min(window.innerHeight * 0.55, 520);
      const s = Math.min(vw / STAGE_W, maxH / STAGE_H);
      setScale(Math.max(0.18, Math.min(s, 0.72)));
    };

    update();
    const ro = new ResizeObserver(update);
    if (el.parentElement) ro.observe(el.parentElement);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      ref={fitRef}
      className="sageo-fit mx-auto"
      style={{
        width: STAGE_W * scale,
        height: STAGE_H * scale,
      }}
      aria-label="Aperçu illustratif d’une conversation ChatGPT"
    >
      <div className="sageo-stage" style={{ transform: `scale(${scale})` }}>
        <MockupDecor />
        <BrandTiles mode="stage" />
        <ChatWindow />
      </div>
    </div>
  );
}
