import Link from "next/link";
import { ARTICLE, ARTICLE_FAQS } from "@/lib/content/methode-article";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FaqItem } from "@/components/ui/FaqItem";

const PAPER_URL = "https://arxiv.org/abs/2602.12187";
const GOOGLE_URL =
  "https://developers.google.com/search/docs/fundamentals/using-gen-ai-content";
const KOPIO_ARTICLE_URL =
  "https://www.kopio.eu/blog/sageo-seo-geo-visibilite-2026";

export function MethodeArticle() {
  return (
    <article className="article">
      <nav className="breadcrumb" aria-label="Fil d’Ariane">
        <ol>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/articles">Articles</Link>
          </li>
          <li aria-current="page">La méthode SAGEO</li>
        </ol>
      </nav>

      <Eyebrow>La méthode</Eyebrow>
      <h1>{ARTICLE.h1}</h1>
      <p className="article-byline">
        <span>Karelle, fondatrice de Kopio</span>
        <span aria-hidden>·</span>
        <time dateTime={ARTICLE.dateIso}>{ARTICLE.dateLabel}</time>
      </p>
      <p className="article-lead">{ARTICLE.lead}</p>

      <h2>SEO, AEO et GEO décrivent le même parcours</h2>
      <p>
        Le SEO (Search Engine Optimization) sert à être trouvé : accès,
        indexation, title, méta-description, titres, maillage et données
        structurées. L’AEO (Answer Engine Optimization) sert à répondre tout
        de suite, avec une formulation qu’on peut comprendre sans lire la page
        entière. Le GEO (Generative Engine Optimization) sert à être compris
        et repris : entités nommées, faits situés, preuves, limites.
      </p>
      <p>
        Traiter ces trois couches comme des chantiers séparés rate le
        parcours. Une page bien placée dans Google peut ne jamais être citée
        si sa réponse est noyée. Un texte réécrit seulement pour « sonner
        expert » peut, à l’inverse, perdre les mots de la question et sortir
        dès la récupération.
      </p>
      <p>
        Sur ce site,{" "}
        <Link href="/#methode">les trois étapes de la méthode</Link> portent
        ces noms : être trouvé, être retenu, être cité. Le détail opérationnel
        de l’audit est sur l’accueil, dans{" "}
        <Link href="/#score">les quatre dimensions du score SAGEO</Link>.
      </p>

      <h2>Ce que mesure SAGEO Arena</h2>
      <p>
        Le nom SAGEO vient d’un objet précis. Dans l’article{" "}
        <a href={PAPER_URL}>
          SAGEO Arena: A Realistic Environment for Evaluating Search-Augmented
          Generative Engine Optimization
        </a>{" "}
        (Kim, Jeong, Kim, Lee et Lee, KDD 2026, 9–13 août 2026, île de Jeju),
        SAGEO désigne l’optimisation d’un document pour qu’il reste visible
        dans un moteur génératif augmenté par la recherche.
      </p>
      <p>
        Le banc d’essai assemble environ 170&nbsp;000 documents web sur neuf
        domaines, en conservant le title, la méta-description, les titres, le
        JSON-LD et le corps. Le pipeline testé enchaîne trois temps : une
        récupération BM25 (100 candidats), un re-classement (les 10 premiers
        seulement sont transmis), puis une génération avec citations
        (GPT-5-mini dans la configuration par défaut, re-classement
        Qwen3-Reranker-4B).
      </p>
      <div className="article-note">
        <p>
          Ces chiffres décrivent cette expérience, pas le fonctionnement
          interne de ChatGPT. Une page peut suivre la méthode et ne jamais
          être citée.
        </p>
      </div>

      <h2>Trois temps, trois exigences</h2>
      <h3>La récupération : entrer dans les candidats</h3>
      <p>
        Le moteur rapproche d’abord les mots de la question et ceux de la
        page. Dans SAGEO Arena, cette étape est BM25, qui récompense le
        recouvrement lexical. Si le title, les intertitres et le début du
        texte parlent un autre vocabulaire que celui de l’audience, la page
        n’est pas jugée pertinente. Elle n’arrive jamais au générateur.
      </p>
      <h3>Le re-classement : rester parmi les textes transmis</h3>
      <p>
        Les pages récupérées ne sont pas toutes lues pour rédiger la réponse.
        Dans ce banc d’essai, le générateur ne reçoit que les 10 mieux
        classées. Passer de la 10<sup>e</sup> à la 11<sup>e</sup> place ne
        rend pas la page « un peu moins visible » : elle sort du contexte.
        Les auteurs relèvent que 5,8&nbsp;% des documents cibles sont passés
        du rang 10 au rang 11 à cette étape.
      </p>
      <p>
        Le même papier observe que placer la réponse tôt améliore le
        re-classement, alors qu’un développement qui repousse la réponse plus
        bas le dégrade, même si la réponse est encore dans la page. C’est le
        rôle que Kopio donne à l’AEO : une réponse directe, avant le détail.
      </p>
      <h3>La génération : fournir une phrase que l’on peut citer</h3>
      <p>
        Quand les auteurs demandent au générateur de montrer le passage
        utilisé pour chaque citation, la grande majorité de ces passages
        vient du corps, pas des métadonnées. Le title et le JSON-LD aident à
        faire entrer la page. C’est le texte qui donne une phrase autonome,
        un fait, une comparaison ou une limite.
      </p>
      <p>
        Cette répartition rejoint la consigne publique de Google sur les{" "}
        <a href={GOOGLE_URL}>contenus créés avec une IA générative</a> : un
        volume de pages produites sans valeur pour le lecteur peut être traité
        comme un abus. Le critère reste l’utilité, la fiabilité et
        l’originalité, que le texte soit écrit à la main ou avec une aide.
      </p>

      <div className="article-table-wrap">
        <table>
          <caption>
            Rôles des trois temps dans SAGEO Arena (KDD 2026). Le seuil de 10
            documents et le moteur BM25 sont ceux de ce banc d’essai.
          </caption>
          <thead>
            <tr>
              <th scope="col">Temps</th>
              <th scope="col">Ce que fait le pipeline testé</th>
              <th scope="col">Ce que la page doit porter</th>
              <th scope="col">Si l’étape échoue</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Récupération</th>
              <td>BM25 retient 100 candidats</td>
              <td>Title, méta, titres, schema, mots de l’audience</td>
              <td>La page n’est pas transmise plus loin</td>
            </tr>
            <tr>
              <th scope="row">Re-classement</th>
              <td>Seuls les 10 premiers alimentent la réponse</td>
              <td>Réponse tôt, sujet tenu, pas de hors-sujet</td>
              <td>Sortir du top 10 retire la page du contexte</td>
            </tr>
            <tr>
              <th scope="row">Génération</th>
              <td>Réponse synthétisée, avec citations</td>
              <td>Phrases autonomes, faits situés, limites</td>
              <td>La page peut être trouvée sans être citée</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Ce que l’expérience change dans la méthode</h2>
      <ul>
        <li>
          Optimiser seulement le corps a fait baisser la récupération. Les
          réécritures qui remplacent les mots courants par un vocabulaire rare
          éloignent la page des requêtes.
        </li>
        <li>
          Porter l’optimisation sur les champs structurels a, dans ce banc
          d’essai, augmenté le taux de présence à la récupération de 22&nbsp;%
          et amélioré le rang moyen de 2,72 positions, par rapport à
          l’optimisation du corps seul.
        </li>
        <li>
          Appliquer en même temps toutes les techniques sur le corps et la
          structure a moins bien fonctionné que de soigner d’abord la
          structure. Empiler n’est pas une stratégie.
        </li>
        <li>
          Le domaine Shopping est le seul, parmi les neuf, où chaque méthode
          testée a réduit la probabilité de citation. Des pages déjà très
          formatées, face à des questions de recommandation, ne gagnent pas à
          être réécrites sur le même moule.
        </li>
      </ul>

      <h2>Six actions pour une page citable</h2>
      <p>
        Ces actions reprennent la logique du papier et celle de la méthode
        Kopio. Elles ne sont pas une formule. Elles décrivent ce qu’une page
        doit rendre explicite.
      </p>
      <ol className="article-steps">
        <li>
          <span className="article-step-num" aria-hidden>
            1
          </span>
          <div>
            <h3>Faire porter le sujet par la structure</h3>
            <p>
              Le title, la méta-description, le H1 et les H2 nomment le métier,
              le public et la question. « Accompagnement » est vague.
              « Préparation à la prise de parole pour dirigeantes, en réunion
              et en conférence » dit qui est concerné et pour quoi.
            </p>
          </div>
        </li>
        <li>
          <span className="article-step-num" aria-hidden>
            2
          </span>
          <div>
            <h3>Répondre dans les premières lignes</h3>
            <p>
              La première phrase donne la réponse ou le cadre. « La prise de
              parole compte dans la vie professionnelle » retarde l’utile.
              « La peur de parler en public diminue quand le message, la
              respiration et le temps de parole ont un cadre » peut être
              extraite seule.
            </p>
          </div>
        </li>
        <li>
          <span className="article-step-num" aria-hidden>
            3
          </span>
          <div>
            <h3>Écrire des passages autonomes</h3>
            <p>
              Un extrait cité quitte son paragraphe. Nommez le sujet au lieu
              d’enchaîner les « elle » et les « cela ». Chaque bloc tient sans
              la phrase d’avant.
            </p>
          </div>
        </li>
        <li>
          <span className="article-step-num" aria-hidden>
            4
          </span>
          <div>
            <h3>Associer un fait à sa source, sa date et son unité</h3>
            <p>
              « Beaucoup de pages manquent de clarté » ne se vérifie pas. «
              Dans SAGEO Arena, 5,8&nbsp;% des documents cibles sont passés du
              rang 10 au rang 11 au re-classement » se vérifie : c’est un
              pourcentage, sur les documents de cette expérience, publié en
              2026. Une observation de terrain se présente comme telle, avec
              son auteur et son contexte.
            </p>
          </div>
        </li>
        <li>
          <span className="article-step-num" aria-hidden>
            5
          </span>
          <div>
            <h3>Garder les mots que l’audience emploie</h3>
            <p>
              Si la question réelle est « peur de parler en public » ou «
              coaching prise de parole », ces expressions restent dans la page.
              Les remplacer par « développement des capacités oratoires » peut
              faire chuter la récupération lexicale, comme les substitutions
              observées dans le papier.
            </p>
            <p>
              L’<Link href="/#outil">extension Chrome SAGEO</Link> sert à lire
              certaines sous-requêtes accessibles dans ChatGPT. Elle ne les
              montre pas toutes, et les aperçus du site sont conceptuels.
            </p>
          </div>
        </li>
        <li>
          <span className="article-step-num" aria-hidden>
            6
          </span>
          <div>
            <h3>Adapter le format au type de page</h3>
            <p>
              Un guide, une page de méthode et une fiche produit ne portent pas
              la même densité. Dans le domaine Shopping du banc d’essai, toutes
              les réécritures testées ont réduit les citations. On garde une
              structure explicite sans plaquer un format catalogue sur un
              conseil.
            </p>
          </div>
        </li>
      </ol>

      <h2>Ce que la méthode ne promet pas</h2>
      <p>
        SAGEO Arena n’est pas une fenêtre sur ChatGPT, Gemini ou Copilot. Le
        récupérateur, le re-classeur et le générateur y sont choisis par les
        auteurs. Les +22&nbsp;% et les +2,72 positions ne se transportent pas
        à un site réel sans nouvelle mesure.
      </p>
      <p>
        Kopio utilise le sigle pour une méthode de travail, pas pour garantir
        une place dans une réponse. Le score affiché sur l’accueil est un
        exemple d’audit, pas une prédiction.
      </p>

      <h2>À retenir</h2>
      <p>
        La structure fait entrer la page. La réponse en tête la garde dans le
        contexte. Le corps, précis et autonome, est ce qu’une réponse peut
        citer. Écrire d’abord pour la personne qui pose la question reste le
        critère. Les systèmes ne font que lire cette clarté.
      </p>

      <section className="article-faq" id="questions" aria-labelledby="article-faq-title">
        <h2 id="article-faq-title">Questions fréquentes</h2>
        <div className="faq-column">
          {ARTICLE_FAQS.map((item, index) => (
            <FaqItem
              key={item.question}
              id={`question-${index + 1}`}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </section>

      <h2>Sources</h2>
      <ul className="article-sources">
        <li>
          Sunghwan Kim, Wooseok Jeong, Serin Kim, Sangam Lee et Dongha Lee,{" "}
          <a href={PAPER_URL}>
            SAGEO Arena: A Realistic Environment for Evaluating Search-Augmented
            Generative Engine Optimization
          </a>
          , KDD 2026, arXiv:2602.12187, publié pour la conférence du 9 au 13
          août 2026.
        </li>
        <li>
          Google Search Central,{" "}
          <a href={GOOGLE_URL}>
            Guidance on using generative AI content on your website
          </a>
          .
        </li>
        <li>
          Karelle, Kopio,{" "}
          <a href={KOPIO_ARTICLE_URL}>
            SEO + GEO = SAGEO : être trouvé, puis cité en 2026
          </a>
          , 10 octobre 2026. Cet article en reprend le sujet et le reformule
          pour le site SAGEO.
        </li>
      </ul>

      <aside className="article-cta">
        <Eyebrow>Suite</Eyebrow>
        <h2>Revenir au parcours, page par page</h2>
        <p>
          La méthode se lit ici. L’audit et l’extension montrent quoi regarder
          sur une page précise, sans promettre qu’elle sera citée.
        </p>
        <Button href="/#methode">Voir les trois étapes</Button>
      </aside>
    </article>
  );
}
