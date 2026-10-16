import Link from "next/link";
import { ARTICLE } from "@/lib/content/methode-article";
import {
  ARTICLES_INDEX,
  ARTICLES_INDEX_FAQS,
  QUI_FAIT,
} from "@/lib/content/qui-fait-sageo";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FaqItem } from "@/components/ui/FaqItem";

const ARTICLES = [QUI_FAIT, ARTICLE];

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
      <h1>{ARTICLES_INDEX.h1}</h1>
      <p className="article-byline">
        <span>Karelle, fondatrice de Kopio</span>
        <span aria-hidden>·</span>
        <time dateTime={ARTICLES_INDEX.dateIso}>{ARTICLES_INDEX.dateLabel}</time>
      </p>
      <p className="article-lead">{ARTICLES_INDEX.lead}</p>

      <section aria-labelledby="liste-articles">
        <h2 id="liste-articles">Les textes publiés</h2>
        <p>Deux articles, du plus récent au plus ancien.</p>
        <ul className="article-list">
          {ARTICLES.map((article) => (
            <li key={article.path}>
              <Link className="article-card" href={article.path}>
                <time dateTime={article.dateIso}>{article.dateLabel}</time>
                <h3>{article.h1}</h3>
                <p>{article.description}</p>
                <span className="article-card-more">Lire l’article</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <h2>Dans quel ordre les lire</h2>
      <ol className="article-steps">
        <li>
          <span className="article-step-num" aria-hidden>
            1
          </span>
          <div>
            <h3>L’autrice et le public</h3>
            <p>
              <Link href={QUI_FAIT.path}>{QUI_FAIT.h1}</Link> répond d’abord.
              Karelle fait la méthode. Kopio édite le site. Le public est un
              site web en France.
            </p>
          </div>
        </li>
        <li>
          <span className="article-step-num" aria-hidden>
            2
          </span>
          <div>
            <h3>Le parcours d’une page</h3>
            <p>
              <Link href={ARTICLE.path}>{ARTICLE.h1}</Link> vient ensuite. Il
              relie le SEO, l’AEO et le GEO, à partir des requêtes de ChatGPT,
              de l’extension et de l’audit.
            </p>
          </div>
        </li>
      </ol>

      <h2>Les noms employés</h2>
      <p>
        SAGEO (Search-Augmented Generative Engine Optimization) est la méthode
        de Kopio, par Karelle. Le SEO (Search Engine Optimization) sert à être
        trouvé. L’AEO (Answer Engine Optimization) sert à répondre dès les
        premières lignes. Le GEO (Generative Engine Optimization) sert à être
        compris et repris dans une réponse, par exemple dans ChatGPT ou dans
        Bing.
      </p>
      <div className="article-note">
        <p>
          L’ordre utile : la question dans ChatGPT, les sous-requêtes dans
          l’extension, puis l’audit de la page.
        </p>
      </div>

      <section className="article-faq" id="questions" aria-labelledby="articles-faq-title">
        <h2 id="articles-faq-title">Questions fréquentes</h2>
        <div className="faq-column">
          {ARTICLES_INDEX_FAQS.map((item, index) => (
            <FaqItem
              key={item.question}
              id={`question-${index + 1}`}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </section>

      <aside className="article-cta">
        <Eyebrow>Suite</Eyebrow>
        <h2>Revenir aux trois étapes</h2>
        <p>
          Les articles détaillent la méthode. Le parcours trouvé, retenu, cité
          reste sur l’accueil.
        </p>
        <Button href="/#methode">Voir les trois étapes</Button>
      </aside>
    </main>
  );
}
