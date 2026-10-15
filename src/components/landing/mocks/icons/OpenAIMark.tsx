type OpenAIMarkProps = {
  size?: number;
  className?: string;
};

/** Symbole OpenAI (rosace) — réutilisable. */
export function OpenAIMark({ size = 24, className = "" }: OpenAIMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    >
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <rect
          key={deg}
          x="11.6"
          y="1.9"
          width="8.2"
          height="11.2"
          rx="4.1"
          transform={`rotate(${deg} 12 12)`}
        />
      ))}
    </svg>
  );
}
