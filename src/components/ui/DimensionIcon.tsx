type DimensionIconName = "seo" | "aeo" | "geo" | "sageo";

type DimensionIconProps = {
  name: DimensionIconName;
  size?: number;
};

/** Icônes sur mesure pour les 4 dimensions SAGEO. */
export function DimensionIcon({ name, size = 22 }: DimensionIconProps) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    className: "dimension-icon-svg",
    "aria-hidden": true as const,
  };

  if (name === "seo") {
    return (
      <svg {...props}>
        <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M8 12h8M12 8v8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12 3.8c2.2 2.4 2.2 14 0 16.4M12 3.8C9.8 6.2 9.8 17.8 12 20.2"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
          opacity="0.45"
        />
      </svg>
    );
  }

  if (name === "aeo") {
    return (
      <svg {...props}>
        <path
          d="M5.5 6.5h13a1.5 1.5 0 0 1 1.5 1.5v6.2a1.5 1.5 0 0 1-1.5 1.5H12l-3.2 3.1v-3.1H5.5A1.5 1.5 0 0 1 4 14.2V8a1.5 1.5 0 0 1 1.5-1.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M8.2 10.2h7.6M8.2 13h5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>
    );
  }

  if (name === "geo") {
    return (
      <svg {...props}>
        <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="2.2" fill="currentColor" />
        <path
          d="M12 3.8v3.2M12 17v3.2M3.8 12h3.2M17 12h3.2"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.5"
        />
        <path
          d="m7.2 7.2 2.2 2.2M14.6 14.6l2.2 2.2M16.8 7.2l-2.2 2.2M9.4 14.6l-2.2 2.2"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          opacity="0.35"
        />
      </svg>
    );
  }

  return (
    <svg {...props}>
      <path
        d="M12 3.5 13.7 9h5.8l-4.7 3.5 1.8 5.6L12 14.8 7.4 18.1l1.8-5.6L4.5 9h5.8L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export type { DimensionIconName };
