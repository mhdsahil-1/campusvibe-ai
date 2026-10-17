
const QLOO_BASE_URL = "https://hackathon.api.qloo.com";

async function qlooGet(
  path: string,
  params: Record<string, string>
): Promise<unknown> {
  const apiKey = process.env.QLOO_API_KEY;

  if (!apiKey) {
    throw new Error("QLOO_API_KEY is missing from .env.local");
  }

  if (!["/search", "/v2/insights"].includes(path)) {
    throw new Error("Unsupported Qloo API path");
  }

  const url = new URL(`${QLOO_BASE_URL}${path}`);

  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }

  const response = await fetch(url, {
    headers: {
      "X-Api-Key": apiKey,
      Accept: "application/json",
    },
    cache: "no-store",
    signal: AbortSignal.timeout(15000),
  });

  if (!response.ok) {
    console.error("Qloo API returned status:", response.status);
    throw new Error(`Qloo request failed (${response.status})`);
  }

  return response.json() as Promise<unknown>;
}

export function qlooSearch(query: string, type: string) {
  return qlooGet("/search", {
    query,
    types: type,
    take: "5",
  });
}

export function qlooInsights(type: string, entityId: string) {
  return qlooGet("/v2/insights", {
    "filter.type": type,
    "signal.interests.entities": entityId,
    take: "5",
  });
}
