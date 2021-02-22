export const GET_INVENTORY = "GET_INVENTORY";
export const INVENTORY_REQUEST = "INVENTORY_REQUEST";

export interface Action {
  type: string;
  payload?: unknown;
}
