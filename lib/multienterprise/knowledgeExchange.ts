export interface SharedKnowledge {

  source: string;

  target: string;

  topic: string;

  insight: string;

  timestamp: string;

}

const knowledgeBase: SharedKnowledge[] = [];

export function shareKnowledge(

  source: string,

  topic: string,

  insight: string,

  targets: string[]

) {

  targets.forEach((target) => {

    if (target !== source) {

      knowledgeBase.push({

        source,

        target,

        topic,

        insight,

        timestamp: new Date().toLocaleString(),

      });

    }

  });

}

export function getKnowledge() {

  return knowledgeBase;

}
