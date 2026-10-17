
import { NextResponse } from "next/server";
import { qlooSearch, qlooInsights } from "@/lib/qloo/client";

const ALLOWED_TYPES = new Set([
  "urn:entity:artist",
  "urn:entity:book",
  "urn:entity:brand",
  "urn:entity:destination",
  "urn:entity:movie",
  "urn:entity:person",
  "urn:entity:place",
  "urn:entity:podcast",
  "urn:entity:tv_show",
  "urn:entity:video_game",
]);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get("mode") || "search";
  const type = searchParams.get("type");

  if (!type || !ALLOWED_TYPES.has(type)) {
    return NextResponse.json(
      { error: "Provide a supported Qloo entity type." },
      { status: 400 }
    );
  }

  try {
    if (mode === "search") {
      const query = searchParams.get("query")?.trim();

      if (!query || query.length < 2 || query.length > 100) {
        return NextResponse.json(
          { error: "Provide a query between 2 and 100 characters." },
          { status: 400 }
        );
      }

      const data = await qlooSearch(query, type);
      return NextResponse.json({ mode, data });
    }

    if (mode === "insights") {
      const entityId = searchParams.get("entityId")?.trim();

      if (!entityId || !/^[a-f0-9-]{36}$/i.test(entityId)) {
        return NextResponse.json(
          { error: "Provide a valid entity ID." },
          { status: 400 }
        );
      }

      const data = await qlooInsights(type, entityId);
      return NextResponse.json({ mode, data });
    }

    return NextResponse.json(
      { error: "Mode must be search or insights." },
      { status: 400 }
    );
  } catch (error) {
    console.error(
      "Qloo route failed:",
      error instanceof Error ? error.message : "Unknown error"
    );

    return NextResponse.json(
      { error: "Qloo could not complete the request. Check server logs." },
      { status: 502 }
    );
  }
}
s