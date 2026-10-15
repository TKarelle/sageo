type IconCardProps = {
  icon: string;
  title: string;
  subtitle: string;
};

/** Carte icône + titre + sous-titre (dimensions, audiences…). */
export function IconCard({ icon, title, subtitle }: IconCardProps) {
  return (
    <article>
      <span aria-hidden>{icon}</span>
      <b>{title}</b>
      <small>{subtitle}</small>
    </article>
  );
}
