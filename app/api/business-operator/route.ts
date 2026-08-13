import { NextResponse } from "next/server";
import { runEnterpriseLoop } from "@/lib/enterprise/autonomousLoop";

let schedulerStarted = false;
export async function GET() {

if (!schedulerStarted) {

  schedulerStarted = true;

  setInterval(() => {

    runEnterpriseLoop();

  }, 30000); // Runs every 30 seconds

}

const products = [

{
name: "AI Agent Business Kit",
revenue: 22000,
growth: 35,
status: "Scaling"
},

{
name: "AI Marketing Templates",
revenue: 8500,
growth: 12,
status: "Stable"
},

{
name: "AI Education Bundle",
revenue: 2000,
growth: -8,
status: "Declining"
}

];

const decisions = [];

for (const p of products) {

if (p.growth > 20) {

decisions.push({
product: p.name,
action: "Scale",
reason: "High growth detected"
});

} else if (p.growth < 0) {

decisions.push({
product: p.name,
action: "Replace",
reason: "Declining trend"
});

} else {

decisions.push({
product: p.name,
action: "Maintain",
reason: "Stable performance"
});

}

}

return NextResponse.json({

  scheduler: {
    running: schedulerStarted,
    interval: "30 seconds"
  },

  products,

  decisions,

  monthlyRevenue:
    products.reduce(
      (sum, p) => sum + p.revenue,
      0
    )

});
}
