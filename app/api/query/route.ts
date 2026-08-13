import { NextResponse } from "next/server";
import { query } from "@/lib/storage/queryEngine";

export async function GET(request: Request) {

  const { searchParams } = new URL(request.url);

  const collection =
    searchParams.get("collection") ?? "products";

  const search =
    searchParams.get("search") ?? undefined;

  const field =
    searchParams.get("field") ?? undefined;

  const sort =
    searchParams.get("sort") ?? undefined;

  return NextResponse.json(
    query(collection, {
      search,
      field,
      sort,
    })
  );
}
