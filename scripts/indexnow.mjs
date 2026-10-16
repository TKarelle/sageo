import { readFileSync } from "node:fs";

const siteSource = readFileSync(new URL("../src/lib/site.ts", import.meta.url), "utf8");
const siteUrl = siteSource.match(/SITE_URL = "([^"]+)"/)?.[1];
const key = readFileSync(
  new URL("../public/06db6abe24d6a3b1ccb3cdc58ac91873.txt", import.meta.url),
  "utf8",
).trim();
const pages = JSON.parse(
  readFileSync(new URL("../src/lib/public-pages.json", import.meta.url), "utf8"),
);

if (!siteUrl || key.length < 8) {
  console.error("IndexNow: hôte ou clé illisible.");
  process.exit(1);
}

const production = process.env.VERCEL_ENV === "production" || process.env.INDEXNOW_SUBMIT === "1";
if (!production) {
  console.log("IndexNow: ignoré hors déploiement de production.");
  process.exit(0);
}

const urlList = pages.map((page) => (page.path === "/" ? siteUrl : `${siteUrl}${page.path}`));
const keyLocation = `${siteUrl}/${key}.txt`;

let liveKey = "";
try {
  const keyResponse = await fetch(keyLocation);
  liveKey = keyResponse.ok ? (await keyResponse.text()).trim() : "";
} catch {
  liveKey = "";
}

if (liveKey !== key) {
  console.log(
    "IndexNow: clé pas encore en ligne. L’envoi partira au cron quotidien, après ce déploiement.",
  );
  process.exit(0);
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: new URL(siteUrl).host,
    key,
    keyLocation,
    urlList,
  }),
});

const detail = response.ok || response.status === 202 ? "accepté" : await response.text();
console.log(`IndexNow: ${response.status} — ${detail}`);
console.log(urlList.join("\n"));
process.exit(0);
