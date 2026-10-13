import type { MetadataRoute } from "next";

/**
 * Autorise explicitement les bots IA (AEO / GEO / RAG crawlers).
 */
export default function robots(): MetadataRoute.Robots {
  const aiBots = [
    "GPTBot",
    "ChatGPT-User",
    "OAI-SearchBot",
    "PerplexityBot",
    "ClaudeBot",
    "anthropic-ai",
    "Google-Extended",
    "Googlebot",
    "Googlebot-Image",
    "Bingbot",
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
    sitemap: "https://sageolab.fr/sitemap.xml",
    host: "https://sageolab.fr",
  };
}
