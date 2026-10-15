import { FeatureIcon, type FeatureIconName } from "./FeatureIcon";

type FeatureItemProps = {
  icon: FeatureIconName;
  title: string;
  subtitle: string;
};

export function FeatureItem({ icon, title, subtitle }: FeatureItemProps) {
  return (
    <article className="feature-item">
      <span className="feature-icon" aria-hidden>
        <FeatureIcon name={icon} />
      </span>
      <div className="feature-copy">
        <strong>{title}</strong>
        <p>{subtitle}</p>
      </div>
    </article>
  );
}
