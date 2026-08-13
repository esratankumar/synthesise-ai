export interface ModulePerformance {

  module: string;

  executionTime: number;

  success: boolean;

  score: number;

}

const performance: ModulePerformance[] = [];

export function recordPerformance(data: ModulePerformance) {

  performance.unshift(data);

  if (performance.length > 1000) {

    performance.pop();

  }

}

export function getPerformance() {

  return performance;

}

export function getAverageScores() {

  const grouped = new Map<string, ModulePerformance[]>();

  for (const item of performance) {

    if (!grouped.has(item.module)) {

      grouped.set(item.module, []);

    }

    grouped.get(item.module)!.push(item);

  }

  return [...grouped.entries()].map(([module, records]) => ({

    module,

    averageScore:
      Math.round(
        records.reduce((a, b) => a + b.score, 0) /
        records.length
      ),

    averageExecution:
      Math.round(
        records.reduce(
          (a, b) => a + b.executionTime,
          0
        ) / records.length
      ),

    successRate:
      Math.round(
        records.filter(r => r.success).length *
        100 /
        records.length
      ),

  }));

}
