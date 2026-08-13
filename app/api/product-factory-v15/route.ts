import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    marketplace: {
      productName: "AI Agent Business Kit",

      price: "$49",

      whopListing: {
        title: "AI Agent Business Kit",
        description:
          "Launch your AI Agent business with templates, prompts and client systems."
      },

      gumroadListing: {
        title: "AI Agent Business Kit",
        description:
          "Everything you need to start selling AI Agent services."
      },

      upsell: {
        name: "AI Agent Client Acquisition Pack",
        price: "$29"
      },

      bundle: {
        name: "AI Agent Empire Bundle",
        price: "$99"
      },

      affiliate: {
        commission: "30%"
      },

      status: "Ready To Publish"
    }
  });
}
