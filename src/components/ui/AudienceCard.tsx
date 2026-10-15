import { AudienceIcon, type AudienceIconName } from "./AudienceIcon";

type AudienceCardProps = {
  icon: AudienceIconName;
  title: string;
  subtitle: string;
};

export function AudienceCard({ icon, title, subtitle }: AudienceCardProps) {
  return (
    <article className={`audience-card audience-card--${icon}`}>
      <span className="audience-card-icon" aria-hidden>
        <AudienceIcon name={icon} />
      </span>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </article>
  );
}
