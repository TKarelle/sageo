"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
} from "react";

export type RevealVariant =
  | "fade-up"
  | "fade-left"
  | "fade-right"
  | "scale-in"
  | "blur-up"
  | "clip-up"
  | "slide-rotate"
  | "glow-in"
  | "mask-wipe";

type RevealProps = {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
  stagger?: boolean;
  staggerMs?: number;
  once?: boolean;
  /** Affiche immédiatement (hero / overlays image) */
  eager?: boolean;
  as?: "div" | "section" | "header" | "ul" | "ol" | "li" | "article";
  "aria-label"?: string;
};

/**
 * Reveal au scroll — IO fiable + eager pour overlays image.
 */
export function Reveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 800,
  className = "",
  stagger = false,
  staggerMs = 90,
  once = true,
  eager = false,
  as: Tag = "div",
  "aria-label": ariaLabel,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => setVisible(true);

    if (eager) {
      const id = requestAnimationFrame(() => show());
      return () => cancelAnimationFrame(id);
    }

    const inView = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      return rect.top < vh * 0.92 && rect.bottom > vh * 0.05;
    };

    if (inView()) {
      show();
      if (once) return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          show();
          if (once) io.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0, rootMargin: "40px 0px 40px 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [eager, once]);

  const style = {
    "--reveal-delay": `${delay}ms`,
    "--reveal-duration": `${duration}ms`,
    "--reveal-stagger": `${staggerMs}ms`,
  } as CSSProperties;

  let content = children;
  if (stagger) {
    content = Children.map(children, (child, i) => {
      if (!isValidElement(child)) return child;
      const childEl = child as ReactElement<{
        className?: string;
        style?: CSSProperties;
      }>;
      return cloneElement(childEl, {
        className: `reveal-item ${childEl.props.className ?? ""}`,
        style: {
          ...childEl.props.style,
          "--reveal-i": i,
        } as CSSProperties,
      });
    });
  }

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={`reveal reveal--${variant} ${visible ? "is-visible" : ""} ${className}`}
      style={style}
      data-revealed={visible ? "true" : "false"}
      aria-label={ariaLabel}
    >
      {content}
    </Tag>
  );
}
