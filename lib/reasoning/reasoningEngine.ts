import { getGraph } from "@/lib/graph/knowledgeGraph";

export function explainEntity(entity: string) {

  const graph = getGraph();

  const relations = graph.filter(
    (edge: any) =>
      edge.from === entity || edge.to === entity
  );

  return {
    entity,
    relations,
    totalRelations: relations.length,
  };
}

export function findProductsFromTrend(trend: string) {

  const graph = getGraph();

  return graph
    .filter(
      (edge: any) =>
        edge.from === trend &&
        edge.relation === "creates"
    )
    .map((edge: any) => edge.to);
}

export function findRevenueFromProduct(product: string) {

  const graph = getGraph();

  return graph
    .filter(
      (edge: any) =>
        edge.from === product &&
        edge.relation === "generates"
    )
    .map((edge: any) => edge.to);
}
