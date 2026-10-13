import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sageolab.fr";
  const lastModified = new Date("2026-10-13");

  return [
    {
      url: base,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/mentions-legales`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/politique-confidentialite`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
