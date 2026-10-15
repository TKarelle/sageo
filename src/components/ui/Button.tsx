import type { ReactNode } from "react";

type Variant = "dark" | "light" | "white";
type Size = "default" | "lg";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  onClick?: () => void;
};

const VARIANT_CLASS: Record<Variant, string> = {
  dark: "btn btn-dark",
  light: "btn btn-light",
  white: "btn btn-white",
};

export function Button({
  href,
  children,
  variant = "dark",
  size = "default",
  arrow = true,
  className = "",
  onClick,
}: ButtonProps) {
  const sizeClass = size === "lg" ? "btn-lg" : "";

  return (
    <a
      className={`${VARIANT_CLASS[variant]} ${sizeClass} ${className}`.trim()}
      href={href}
      onClick={onClick}
    >
      <span className="btn-label">{children}</span>
      {arrow ? (
        <span className="btn-chevron" aria-hidden>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2.5 6h7M6.5 3l3 3-3 3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      ) : null}
    </a>
  );
}
