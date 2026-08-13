import { load, save } from "@/lib/storage/storageEngine";

export interface GraphEdge {
  id: string;
  from: string;
  to: string;
  relation: string;
  createdAt: string;
}

export function addRelation(
  from: string,
  to: string,
  relation: string
) {

  const graph: GraphEdge[] = load("graph") || [];

  graph.push({
id: crypto.randomUUID(),
    from,
    to,
    relation,
    createdAt: new Date().toLocaleTimeString(),
  });

  save("graph", graph);

  return graph;

}

export function getRelations(entity: string) {

  const graph: GraphEdge[] = load("graph") || [];

  return graph.filter(
    edge =>
      edge.from === entity ||
      edge.to === entity
  );

}

export function getGraph() {

  return load("graph") || [];

}

export function getStatistics() {

  const graph: GraphEdge[] = load("graph") || [];

  const nodes = new Set<string>();

  graph.forEach(edge => {
    nodes.add(edge.from);
    nodes.add(edge.to);
  });

  return {

    totalNodes: nodes.size,

    totalRelations: graph.length,

    lastUpdate:
      graph.length > 0
        ? graph[0].createdAt
        : "Never",

  };

}
