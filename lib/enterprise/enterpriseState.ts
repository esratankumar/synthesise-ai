export interface EnterpriseState {
  revenue: number;
  products: number;
  agents: number;
  trends: number;
  notifications: number;
  businessLoop: string;
}

let state: EnterpriseState = {
  revenue: 22000,
  products: 8,
  agents: 7,
  trends: 136,
  notifications: 0,
  businessLoop: "Idle",
};

export function getState() {
  return state;
}

export function updateState(data: Partial<EnterpriseState>) {
  state = {
    ...state,
    ...data,
  };
}
