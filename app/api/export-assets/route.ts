import { NextResponse } from "next/server";

export async function GET() {

  const product = {

    name: "AI Agent Business Kit",

    exports: [

      {
        type: "PDF Ebook",
        filename: "ebook.pdf",
        status: "Ready"
      },

      {
        type: "DOCX Workbook",
        filename: "workbook.docx",
        status: "Ready"
      },

      {
        type: "HTML Sales Page",
        filename: "sales-page.html",
        status: "Ready"
      },

      {
        type: "WHOP Listing",
        filename: "whop-listing.md",
        status: "Ready"
      },

      {
        type: "Launch Emails",
        filename: "launch-emails.md",
        status: "Ready"
      },

      {
        type: "Social Posts",
        filename: "social-posts.md",
        status: "Ready"
      }

    ]

  };

  return NextResponse.json(product);

}
