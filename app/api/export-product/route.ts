import { NextResponse } from "next/server";

export async function GET() {

return NextResponse.json({

product:"AI Agent Business Kit",

exports:[

"ebook.pdf",

"workbook.docx",

"sales-page.html",

"whop-listing.md",

"launch-emails.md",

"social-posts.md"

]

});

}
