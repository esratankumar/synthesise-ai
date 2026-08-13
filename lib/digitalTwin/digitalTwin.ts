import { getState } from "@/lib/enterprise/enterpriseState";
import { getAgents } from "@/lib/workforce/workforceManager";

export function getDigitalTwin() {

  const state = getState();

  const agents = getAgents();

  return {

    enterprise: {

      revenue: state.revenue,

      notifications: state.notifications,

      businessLoop: state.businessLoop,

    },

    workforce: agents,

    timestamp: new Date().toISOString(),

  };

}
