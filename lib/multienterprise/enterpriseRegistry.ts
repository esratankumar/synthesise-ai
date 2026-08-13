export interface Enterprise {

  id: string;

  name: string;

  status: "Active" | "Planning" | "Paused";

  industry: string;

  monthlyRevenue: number;

}

const enterprises: Enterprise[] = [

  {
    id: "enterprise-1",
    name: "Synthesise AI",
    status: "Active",
    industry: "Artificial Intelligence",
    monthlyRevenue: 18000,
  },

];

export function getEnterprises() {

  return enterprises;

}

export function addEnterprise(

  enterprise: Enterprise

) {

  enterprises.push(enterprise);

  return enterprise;

}

export function removeEnterprise(id: string) {

  const index = enterprises.findIndex(

    e => e.id === id

  );

  if (index >= 0) {

    enterprises.splice(index, 1);

  }

}

export function getPortfolioRevenue() {

  return enterprises.reduce(

    (sum, e) => sum + e.monthlyRevenue,

    0

  );

}
