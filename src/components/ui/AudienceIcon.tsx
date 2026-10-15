type AudienceIconName = "brand" | "indie" | "creator" | "org";

type AudienceIconProps = {
  name: AudienceIconName;
  size?: number;
};

/**
 * Icônes audiences — même langage que le parcours (traits colorés, sans fond).
 */
export function AudienceIcon({ name, size = 28 }: AudienceIconProps) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    className: "audience-icon-svg",
    "aria-hidden": true as const,
  };

  if (name === "brand") {
    return (
      <svg {...props}>
        <rect
          x="4.5"
          y="4.5"
          width="15"
          height="15"
          rx="3.5"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M8.2 14.8V9.2h2.4c1.35 0 2.2.7 2.2 1.85S11.95 12.9 10.6 12.9H8.2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.2 12.9h2.35"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "indie") {
    return (
      <svg {...props}>
        <circle
          cx="12"
          cy="8.2"
          r="3.1"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M6.4 18.8c.85-3.15 2.85-4.7 5.6-4.7s4.75 1.55 5.6 4.7"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "creator") {
    return (
      <svg {...props}>
        <path
          d="M7.2 16.8 14.6 5.4l3.9 2.55L11.1 19.35 7.2 16.8Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="m13.5 7.15 3.55 2.3"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M6.2 19.6h5.4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.45"
        />
      </svg>
    );
  }

  return (
    <svg {...props}>
      <circle cx="8.6" cy="9" r="2.55" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="15.4" cy="9" r="2.55" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M4.6 18.6c.75-2.7 2.35-4 4-4 1.15 0 2.15.55 2.9.55s1.75-.55 2.9-.55c1.65 0 3.25 1.3 4 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export type { AudienceIconName };
