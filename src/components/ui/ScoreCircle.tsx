type ScoreCircleProps = {
  value: number;
  max?: number;
  size?: "default" | "small";
};

export function ScoreCircle({
  value,
  max = 100,
  size = "default",
}: ScoreCircleProps) {
  const degrees = Math.round((value / max) * 360);

  return (
    <div
      className={`score-circle${size === "small" ? " small" : ""}`}
      style={{
        background: `conic-gradient(#45a77c 0deg ${degrees}deg, #e3eee9 ${degrees}deg 360deg)`,
      }}
      aria-label={`Score ${value} sur ${max}`}
    >
      <div>
        <strong>{value}</strong>
        <small>/{max}</small>
      </div>
    </div>
  );
}
