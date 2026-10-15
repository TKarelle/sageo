import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Accès explicite, par famille de robots.
 * Recherche : Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User.
 * Entraînement ou autres usages : GPTBot, Google-Extended, ClaudeBot, CCBot, Bytespider.
 * Tous sont autorisés : le site veut être découvert et cité. Aucune page utile n’est bloquée.
 */
export default function robots(): MetadataRoute.Robots {
  const aiBots = [
    "Googlebot",
    "Googlebot-Image",
    "Bingbot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "GPTBot",
    "Google-Extended",
    "PerplexityBot",
    "ClaudeBot",
    "anthropic-ai",
    "Applebot-Extended",
    "Bytespider",
    "CCBot",
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      ...aiBots.map((userAgent) => ({
        userAgent,
        allow: "/" as const,
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
