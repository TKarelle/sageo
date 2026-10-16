import pages from "@/lib/public-pages.json";
import { SITE_URL } from "@/lib/site";

export const INDEXNOW_KEY = "06db6abe24d6a3b1ccb3cdc58ac91873";

export function indexNowUrls() {
  return pages.map((page) => (page.path === "/" ? SITE_URL : `${SITE_URL}${page.path}`));
}

export async function submitIndexNow() {
  const host = new URL(SITE_URL).host;
  const keyLocation = `${SITE_URL}/${INDEXNOW_KEY}.txt`;
  const urlList = indexNowUrls();

  let liveKey = "";
  try {
    const keyResponse = await fetch(keyLocation, { cache: "no-store" });
    liveKey = keyResponse.ok ? (await keyResponse.text()).trim() : "";
  } catch {
    liveKey = "";
  }

  if (liveKey !== INDEXNOW_KEY) {
    return {
      skipped: true,
      status: 0,
      urlList,
      reason:
        "La clé IndexNow n’est pas encore servie sur www.sageolab.fr. L’envoi partira au prochain passage, une fois le fichier en ligne.",
    };
  }

  const response = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host,
      key: INDEXNOW_KEY,
      keyLocation,
      urlList,
    }),
  });

  return {
    skipped: false,
    status: response.status,
    urlList,
    reason: response.ok || response.status === 202 ? "accepté" : await response.text(),
  };
}
