import * as TYPES from "./InventoryTypes";

export const getInventory = (payload: any): TYPES.Action => ({
  type: TYPES.GET_INVENTORY,
  payload,
});
