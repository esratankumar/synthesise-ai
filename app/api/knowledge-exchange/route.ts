import { NextResponse } from "next/server";

import {

  getKnowledge,

  shareKnowledge,

} from "@/lib/multienterprise/knowledgeExchange";

import {

  getEnterprises,

} from "@/lib/multienterprise/enterpriseRegistry";

export async function GET() {

  return NextResponse.json({

    knowledge: getKnowledge(),

  });

}

export async function POST(req: Request) {

  const body = await req.json();

  const enterprises =
    getEnterprises().map(e => e.name);

  shareKnowledge(

    body.source,

    body.topic,

    body.insight,

    enterprises

  );

  return NextResponse.json({

    success: true,

  });

}
