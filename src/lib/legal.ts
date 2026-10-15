import { SITE_UPDATED_LABEL, SITE_URL } from "@/lib/site";

/**
 * Identité éditeur — mentions légales & RGPD (France).
 * Compléter SIREN / adresse dès disponibilité.
 */

export const LEGAL = {
  siteName: "SAGEO",
  siteUrl: SITE_URL,
  editor: "Kopio",
  editorUrl: "https://kopio.eu",
  publicationDirector: "Karelle, fondatrice de Kopio",
  contactEmail: "contact@kopio.eu",
  host: {
    name: "Vercel Inc.",
    address: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
    url: "https://vercel.com",
  },
  dataRetentionMonths: 24,
  lastUpdated: SITE_UPDATED_LABEL,
} as const;
