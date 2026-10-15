import Link from "next/link";
import { ARTICLE } from "@/lib/content/methode-article";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function ArticlesIndex() {
  return (
    <main className="article" id="contenu-principal">
      <nav className="breadcrumb" aria-label="Fil d’Ariane">
        <ol>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li aria-current="page">Articles</li>
        </ol>
      </nav>

      <Eyebrow>Articles</Eyebrow>
      <h1>Comprendre la méthode</h1>
      <p className="article-lead">
        Les textes qui détaillent SAGEO, la méthode de Kopio par Karelle.
      </p>

      <ul className="article-list">
        <li>
          <Link className="article-card" href={ARTICLE.path}>
            <time dateTime={ARTICLE.dateIso}>{ARTICLE.dateLabel}</time>
            <h2>{ARTICLE.h1}</h2>
            <p>{ARTICLE.description}</p>
          </Link>
        </li>
      </ul>
    </main>
  );
}
