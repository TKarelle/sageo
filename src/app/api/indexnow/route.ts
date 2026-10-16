import { submitIndexNow } from "@/lib/submit-indexnow";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (secret && request.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const result = await submitIndexNow();
  const ok = result.skipped || result.status === 200 || result.status === 202;

  return NextResponse.json({ ok, ...result });
}
