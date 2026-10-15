type SparkMarkProps = {
  size?: number;
  gradientId?: string;
  from?: string;
  to?: string;
};

/** Étoile / spark (Gemini-style) — réutilisable. */
export function SparkMark({
  size = 54,
  gradientId = "sparkGrad",
  from = "#4C8DF6",
  to = "#2F6FE8",
}: SparkMarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gradientId})`}
        d="M12 0C12.6 6.6 17.4 11.4 24 12C17.4 12.6 12.6 17.4 12 24C11.4 17.4 6.6 12.6 0 12C6.6 11.4 11.4 6.6 12 0Z"
      />
    </svg>
  );
}
