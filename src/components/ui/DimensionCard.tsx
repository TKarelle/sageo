import { DimensionIcon, type DimensionIconName } from "./DimensionIcon";

type DimensionCardProps = {
  icon: DimensionIconName;
  title: string;
  label: string;
  description: string;
};

export function DimensionCard({
  icon,
  title,
  label,
  description,
}: DimensionCardProps) {
  return (
    <article className={`dimension-card dimension-card--${icon}`}>
      <span className="dimension-card-icon" aria-hidden>
        <DimensionIcon name={icon} />
      </span>
      <div className="dimension-card-copy">
        <span className="dimension-card-label">{label}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
