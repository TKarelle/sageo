type FeatureIconName = "score" | "audit" | "explorer";

type FeatureIconProps = {
  name: FeatureIconName;
  size?: number;
};

/**
 * Icônes SAGEO sur mesure — score (jauge), audit (checklist), explorateur (loupe+IA).
 * Optiquement centrées dans un viewBox 24×24.
 */
export function FeatureIcon({ name, size = 22 }: FeatureIconProps) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    className: "feature-icon-svg",
    "aria-hidden": true as const,
  };

  if (name === "score") {
    return (
      <svg {...props}>
        {/* Anneau de score */}
        <circle
          cx="12"
          cy="12"
          r="8.25"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.28"
        />
        <path
          d="M12 3.75a8.25 8.25 0 0 1 8.25 8.25"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        {/* Aiguille */}
        <circle cx="12" cy="12" r="1.35" fill="currentColor" />
        <path
          d="M12 12.1 16.2 7.6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        {/* Tick bas */}
        <path
          d="M8.2 17.4h7.6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.45"
        />
      </svg>
    );
  }

  if (name === "audit") {
    return (
      <svg {...props}>
        {/* Page */}
        <rect
          x="5.5"
          y="3.5"
          width="13"
          height="17"
          rx="2.2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        {/* Lignes */}
        <path
          d="M9 9.2h6M9 12.5h6M9 15.8h4"
          stroke="currentColor"
          strokeWidth="1.45"
          strokeLinecap="round"
          opacity="0.55"
        />
        {/* Check badge */}
        <circle cx="16.2" cy="16.4" r="3.6" fill="currentColor" />
        <path
          d="m14.7 16.4 1 1 2-2.1"
          stroke="#fff"
          strokeWidth="1.35"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg {...props}>
      {/* Loupe */}
      <circle
        cx="10.6"
        cy="10.6"
        r="5.6"
        stroke="currentColor"
        strokeWidth="1.55"
      />
      <path
        d="m14.7 14.7 4.1 4.1"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      {/* Nœud IA (3 arcs) */}
      <path
        d="M10.6 8.1c.9 1.1 1.5 2.2 1.5 2.5s-.6 1.4-1.5 2.5c-.9-1.1-1.5-2.2-1.5-2.5s.6-1.4 1.5-2.5Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M8.2 10.6c1.1-.9 2.2-1.5 2.4-1.5s1.4.6 2.5 1.5c-1.1.9-2.2 1.5-2.5 1.5s-1.4-.6-2.4-1.5Z"
        fill="currentColor"
        opacity="0.35"
      />
    </svg>
  );
}

export type { FeatureIconName };
