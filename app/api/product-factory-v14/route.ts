import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    exportProduct: {
      name: "AI Agent Business Kit",

      ebook: {
        title: "AI Agent Business Kit",
        pages: 42
      },

      leadMagnet: {
        title: "10 AI Agent Prompts",
        pages: 8
      },

      promptPack: {
        prompts: 50
      },

      templates: {
        count: 12
      },

      worksheets: {
        count: 6
      },

      checklist: {
        count: 5
      },

      readyForSale: true
    }
  });
}
