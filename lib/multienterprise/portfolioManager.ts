import {
  getEnterprises,
} from "./enterpriseRegistry";

export function getPortfolio() {

  const enterprises =
    [...getEnterprises()];

  const ranked =
    enterprises
      .map((enterprise) => {

        const health =
          Math.min(
            100,
            Math.round(
              enterprise.monthlyRevenue / 300
            )
          );

        return {

          ...enterprise,

          health,

          priority:

            health >= 80
              ? "Expand"

            : health >= 50
              ? "Maintain"

              : "Improve",

        };

      })

      .sort(
        (a, b) =>
          b.monthlyRevenue -
          a.monthlyRevenue
      );

  return {

    enterprises: ranked,

    totalRevenue:
      ranked.reduce(

        (sum, enterprise) =>

          sum +
          enterprise.monthlyRevenue,

        0

      ),

    healthiest:

      ranked[0] || null,

  };

}
