import { addRelation } from "./knowledgeGraph";

export function onTrendDiscovered(
  trend: string,
  product: string
) {
  addRelation(
    trend,
    product,
    "creates"
  );
}

export function onProductCreated(
  product: string,
  marketplace: string
) {
  addRelation(
    product,
    marketplace,
    "published_to"
  );
}

export function onRevenueGenerated(
  product: string,
  revenue: string
) {
  addRelation(
    product,
    revenue,
    "generates"
  );
}

export function onAgentCompletedTask(
  agent: string,
  task: string
) {
  addRelation(
    agent,
    task,
    "completed"
  );
}
