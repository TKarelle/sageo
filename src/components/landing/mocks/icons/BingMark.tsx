type BingMarkProps = {
  size?: number;
  className?: string;
  gradientId?: string;
};

/** Logo Bing (b stylisé) — réutilisable. */
export function BingMark({
  size = 48,
  className = "",
  gradientId = "bingGrad",
}: BingMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1BA0E2" />
          <stop offset="1" stopColor="#00809D" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gradientId})`}
        d="M5.2 1.2v16.1l4.05 2.35 9.55-5.5v-4.35l-5.85 3.35V6.55L20.1 3.4 9.25.55 5.2 1.2Zm4.05 7.55v6.85l5.85-3.35v-2.05l-5.85-3.35-.001 1.9Z"
      />
    </svg>
  );
}
