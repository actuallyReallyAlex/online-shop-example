// import * as types from "./InventoryTypes";

import { InventoryState } from "../../../types";

interface InventoryAction {
  type: string;
  payload?: unknown;
}

const INITIAL_STATE = {
  products: [],
};

const InventoryReducer = (
  state = INITIAL_STATE,
  action: InventoryAction
): InventoryState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default InventoryReducer;
