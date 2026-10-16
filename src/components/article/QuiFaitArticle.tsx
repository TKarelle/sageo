import Link from "next/link";
import { QUI_FAIT, QUI_FAIT_FAQS } from "@/lib/content/qui-fait-sageo";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FaqItem } from "@/components/ui/FaqItem";

export function QuiFaitArticle() {
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
          <li aria-current="page">{QUI_FAIT.breadcrumb}</li>
        </ol>
      </nav>

      <Eyebrow>L’autrice</Eyebrow>
      <h1>{QUI_FAIT.h1}</h1>
      <p className="article-byline">
        <span>Karelle, fondatrice de Kopio</span>
        <span aria-hidden>·</span>
        <time dateTime={QUI_FAIT.dateIso}>{QUI_FAIT.dateLabel}</time>
      </p>
      <p className="article-lead">{QUI_FAIT.lead}</p>

      <h2>Karelle fait la méthode, Kopio l’édite</h2>
      <p>
        Karelle est l’autrice de SAGEO et la fondatrice de Kopio. Karelle est
        aussi la directrice de la publication de sageolab.fr. Kopio est
        l’éditeur de ce site. Le site du groupe est{" "}
        <a href="https://kopio.eu">kopio.eu</a>.
      </p>

      <div className="article-table-wrap">
        <table>
          <thead>
            <tr>
              <th scope="col">Rôle</th>
              <th scope="col">Nom</th>
              <th scope="col">Ce que cela désigne</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Autrice</th>
              <td>Karelle</td>
              <td>Fondatrice de Kopio, directrice de la publication</td>
            </tr>
            <tr>
              <th scope="row">Éditeur</th>
              <td>Kopio</td>
              <td>Organisation qui édite sageolab.fr</td>
            </tr>
            <tr>
              <th scope="row">Méthode</th>
              <td>SAGEO</td>
              <td>Référencement des sites web : trouvé, retenu, cité</td>
            </tr>
            <tr>
              <th scope="row">Public</th>
              <td>France</td>
              <td>Sites web présentés en français</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Ce que chaque nom veut dire</h2>
      <h3>SAGEO</h3>
      <p>
        SAGEO signifie Search-Augmented Generative Engine Optimization. En
        clair : préparer une page pour la recherche, puis pour une réponse qui
        peut la citer. Le sigle vient d’un banc d’essai, SAGEO Arena (KDD
        2026). Kopio l’emploie comme méthode de travail, pas comme promesse de
        classement.
      </p>
      <h3>SEO, AEO et GEO</h3>
      <p>
        Le SEO (Search Engine Optimization) sert à être trouvé : accès,
        indexation, title, méta-description, titres, liens et données
        structurées. L’AEO (Answer Engine Optimization) sert à répondre dès
        les premières lignes, avec une phrase compréhensible seule. Le GEO
        (Generative Engine Optimization) sert à être compris et repris dans
        une réponse, par exemple dans ChatGPT ou dans Bing.
      </p>
      <p>
        Ces trois couches décrivent le même parcours.{" "}
        <Link href="/methode-sageo">Être trouvé ne suffit pas pour être cité</Link>{" "}
        en détaille les limites, avec les chiffres du banc d’essai et leur
        date.
      </p>

      <h2>Trois étapes pour un site web en France</h2>
      <p>
        Le parcours affiché sur l’accueil porte trois noms. Chaque étape reste
        nécessaire. Aucune ne suffit à elle seule.
      </p>
      <ol className="article-steps">
        <li>
          <span className="article-step-num" aria-hidden>
            1
          </span>
          <div>
            <h3>Être trouvé</h3>
            <p>
              La page est accessible, en français si le public l’est, avec un
              sujet nommé dans le title et les titres. Sans cette base, Bing
              comme ChatGPT n’ont rien à retenir.
            </p>
          </div>
        </li>
        <li>
          <span className="article-step-num" aria-hidden>
            2
          </span>
          <div>
            <h3>Être retenu</h3>
            <p>
              La réponse arrive tôt. Le nom, le métier et la limite tiennent
              dans un passage autonome. Une page trouvée mais floue sort du
              texte qu’une réponse peut reprendre.
            </p>
          </div>
        </li>
        <li>
          <span className="article-step-num" aria-hidden>
            3
          </span>
          <div>
            <h3>Être cité</h3>
            <p>
              Le corps reprend les formulations lues dans l’extension : un
              fait, une comparaison, une réponse autonome.{" "}
              <Link href="/#methode">Les trois étapes de la méthode</Link>{" "}
              reprennent ce parcours sur l’accueil.
            </p>
          </div>
        </li>
      </ol>

      <h2>Commencer par les requêtes de ChatGPT</h2>
      <p>
        Le SEO classique part souvent d’une liste de mots choisis à l’avance.
        SAGEO inverse l’ordre. La question utile est celle qu’un futur client
        poserait à ChatGPT, sans nommer la marque. ChatGPT ne reprend pas
        forcément ces mots tels quels : il produit plusieurs sous-requêtes.
        Ce sont ces formulations qu’une page doit viser.
      </p>
      <p>
        Exemple : la question « comment préparer une prise de parole à Lyon »
        peut se décomposer en « formation expression orale Lyon », « coach
        oral dirigeants » ou « accompagnement individuel prise de parole ».
        Chaque formulation ouvre un angle de page différent.
      </p>

      <h2>Ce que fait l’extension</h2>
      <p>
        L’extension Chrome SAGEO se place sur ChatGPT. Après la question, elle
        affiche les sous-requêtes accessibles dans les données de recherche,
        avec un repère de type : comparaison, information, intention
        commerciale, exploration. Le compteur de requêtes détectées situe le
        volume du moment. Ces lignes deviennent le brief : quoi écrire, avec
        quels mots, pour quelle intention.
      </p>
      <p>
        Le détail visuel est dans{" "}
        <Link href="/#outil">l’outil</Link>, et l’enchaînement dans{" "}
        <Link href="/#comment-ca-marche">comment ça marche</Link>.
      </p>
      <ol className="article-steps">
        <li>
          <span className="article-step-num" aria-hidden>
            1
          </span>
          <div>
            <h3>Poser la question cible</h3>
            <p>
              Choisir la question d’un futur client, sans la marque. C’est le
              point de départ, pas une liste de mots-clés déjà figée.
            </p>
          </div>
        </li>
        <li>
          <span className="article-step-num" aria-hidden>
            2
          </span>
          <div>
            <h3>Lire les sous-requêtes</h3>
            <p>
              L’extension les affiche. Chaque ligne dit une formulation réelle
              et le type de recherche. Ce vocabulaire reste dans les titres et
              dans les premières lignes de la page.
            </p>
          </div>
        </li>
        <li>
          <span className="article-step-num" aria-hidden>
            3
          </span>
          <div>
            <h3>Écrire à partir de ces formules</h3>
            <p>
              Une réponse claire, autonome, alignée sur la sous-requête. Le
              title, les Hn et le corps parlent le même sujet.
            </p>
          </div>
        </li>
      </ol>

      <h2>Ce que lit l’audit</h2>
      <p>
        Une fois les requêtes connues, l’audit relit la page sur quatre
        dimensions. Le SEO regarde la technique et les métadonnées : title,
        méta-description, titres, URL, indexation, données structurées. L’AEO
        regarde les réponses directes : une question, puis une réponse dès les
        premières lignes. Le GEO regarde le corps : entités nommées, faits,
        contexte. SAGEO réunit les trois dans une synthèse et des priorités,
        par exemple améliorer la structure des titres ou enrichir les réponses.
      </p>
      <p>
        L’audit et l’extension se suivent. L’extension dit quelles formulations
        viser. L’audit dit si la page les porte déjà, et quoi corriger en
        premier. Le parcours est décrit dans{" "}
        <Link href="/#score">les quatre dimensions du score</Link>.
      </p>

      <h2>À retenir</h2>
      <p>
        Karelle, fondatrice de Kopio, fait la méthode SAGEO. Le travail
        commence par une question posée à ChatGPT. L’extension en sort les
        sous-requêtes. L’audit vérifie que la page les rend trouvables,
        claires et prêtes à servir de référence.
      </p>

      <section className="article-faq" id="questions" aria-labelledby="qui-fait-faq-title">
        <h2 id="qui-fait-faq-title">Questions fréquentes</h2>
        <div className="faq-column">
          {QUI_FAIT_FAQS.map((item, index) => (
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
          <a href="https://kopio.eu">kopio.eu</a>, site de Kopio, organisation
          fondée par Karelle.
        </li>
        <li>
          <Link href="/methode-sageo">Être trouvé ne suffit pas pour être cité</Link>
          , article SAGEO du 15 octobre 2026, pour le détail SEO, AEO, GEO et
          les limites de SAGEO Arena.
        </li>
      </ul>

      <aside className="article-cta">
        <Eyebrow>Suite</Eyebrow>
        <h2>Lire le parcours, puis l’appliquer à une page</h2>
        <p>
          L’identité est ici. La méthode se lit dans l’article dédié, et les
          trois étapes restent sur l’accueil.
        </p>
        <Button href="/methode-sageo">Lire la méthode</Button>
      </aside>
    </article>
  );
}
