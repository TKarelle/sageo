type MethodStepIconName = "found" | "retained" | "cited";

type MethodStepIconProps = {
  name: MethodStepIconName;
  size?: number;
};

/** Icônes parcours SAGEO — trait coloré, sans fond. */
export function MethodStepIcon({ name, size = 28 }: MethodStepIconProps) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    className: "method-step-icon-svg",
    "aria-hidden": true as const,
  };

  if (name === "found") {
    return (
      <svg {...props}>
        <circle cx="11" cy="11" r="6.25" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="m15.6 15.6 4.1 4.1"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "retained") {
    return (
      <svg {...props}>
        <rect
          x="4.5"
          y="4.5"
          width="15"
          height="15"
          rx="3.2"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M8.2 12.1h7.6M8.2 8.8h4.8M8.2 15.4h5.8"
          stroke="currentColor"
          strokeWidth="1.55"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg {...props}>
      <path
        d="M12 3.4 13.85 9.2h6.1l-4.95 3.7 1.9 5.85L12 15.2l-4.9 3.55 1.9-5.85-4.95-3.7h6.1L12 3.4Z"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export type { MethodStepIconName };
