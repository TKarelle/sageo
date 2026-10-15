import Link from "next/link";
import { LogoMark } from "@/components/ui/LogoMark";

type BrandProps = {
  href?: string;
  showTagline?: boolean;
  className?: string;
};

export function Brand({
  href = "/",
  showTagline = true,
  className = "brand",
}: BrandProps) {
  return (
    <Link className={className} href={href} aria-label="SAGEO accueil">
      <LogoMark />
      <strong>SAGEO</strong>
      {showTagline ? <small>La méthode de Kopio</small> : null}
    </Link>
  );
}
