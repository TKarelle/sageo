import { OpenAIMark } from "./icons/OpenAIMark";

const SOLUTIONS = [
  {
    num: "1.",
    title: "Gestion de la relation client",
    detail: "Centraliser les contacts et les échanges.",
    iconBg: "#E6EEF9",
    iconColor: "#1E3A8A",
    icon: (
      <svg className="ic" width="22" height="22" viewBox="0 0 24 24" aria-hidden>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    num: "2.",
    title: "Facturation et comptabilité",
    detail: "Simplifier le suivi administratif.",
    iconBg: "#DDF5EE",
    iconColor: "#0F8F76",
    icon: (
      <svg className="ic" width="22" height="22" viewBox="0 0 24 24" aria-hidden>
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M10 9H8" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
      </svg>
    ),
  },
  {
    num: "3.",
    title: "Organisation du travail",
    detail: "Coordonner les tâches et les projets.",
    iconBg: "#E9E5FA",
    iconColor: "#5B3FC4",
    icon: (
      <svg className="ic" width="22" height="22" viewBox="0 0 24 24" aria-hidden>
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <rect x="8" y="14" width="3.5" height="3.5" rx=".6" />
      </svg>
    ),
  },
] as const;

/** Fenêtre ChatGPT 3D (contenu illustratif). */
export function ChatWindow() {
  return (
    <div className="card-wrap">
      <div className="card">
        <div className="panel" />

        <div className="abs" style={{ left: 55, top: 22, width: 34, height: 34, color: "#0B1220" }}>
          <OpenAIMark size={34} />
        </div>
        <div className="abs head-title">ChatGPT</div>
        <svg
          className="abs ic"
          style={{ left: 184, top: 32, color: "#374151" }}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          strokeWidth="2"
          aria-hidden
        >
          <path d="m6 9 6 6 6-6" />
        </svg>

        <svg
          className="abs ic"
          style={{ left: 593, top: 51, color: "#6B7280" }}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          strokeWidth="1.9"
          aria-hidden
        >
          <path d="M15 3h6v6" />
          <path d="M10 14 21 3" />
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        </svg>
        <svg
          className="abs"
          style={{ left: 634, top: 54, color: "#4B5563" }}
          width="10"
          height="18"
          viewBox="0 0 10 18"
          aria-hidden
        >
          <circle cx="5" cy="3" r="1.4" fill="currentColor" />
          <circle cx="5" cy="9" r="1.4" fill="currentColor" />
          <circle cx="5" cy="15" r="1.4" fill="currentColor" />
        </svg>

        <div className="abs divider" />

        <div className="abs bubble">
          Quelles sont les meilleures solutions
          <br />
          pour une petite entreprise ?
        </div>

        <div className="abs avatar-tile">
          <div className="avatar">
            <OpenAIMark size={26} />
          </div>
        </div>

        <div className="abs reply">
          <div className="abs intro">
            Voici quelques solutions intéressantes pour une petite
            <br />
            entreprise :
          </div>

          {SOLUTIONS.map((item, index) => (
            <div
              key={item.title}
              className="abs row"
              style={{ top: 88 + index * 64 }}
            >
              <div className="abs num">{item.num}</div>
              <div
                className="abs ico"
                style={{ background: item.iconBg, color: item.iconColor }}
              >
                {item.icon}
              </div>
              <div className="abs t">{item.title}</div>
              <div className="abs d">{item.detail}</div>
            </div>
          ))}

          <svg
            className="abs ic"
            style={{ left: 27, top: 287, color: "#4B5563" }}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <rect width="14" height="14" x="8" y="8" rx="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </svg>
          <svg
            className="abs ic"
            style={{ left: 70, top: 287, color: "#4B5563" }}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path d="M7 10v12" />
            <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
          </svg>
          <svg
            className="abs ic"
            style={{ left: 113, top: 287, color: "#4B5563" }}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path d="M17 14V2" />
            <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" />
          </svg>
        </div>

        <div className="abs input">
          <div className="abs ph">
            <span className="caret" />
            Posez une question...
          </div>
          <svg
            className="abs ic"
            style={{ left: 540, top: 28, color: "#6B7280" }}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            strokeWidth="1.8"
            aria-hidden
          >
            <path d="M5 12h14M12 5v14" />
          </svg>
          <div className="abs send">
            <svg className="ic" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2.2" aria-hidden>
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </div>
        </div>

        <div className="abs legal">
          ChatGPT peut faire des erreurs. Vérifiez les informations importantes.
        </div>
      </div>
    </div>
  );
}
