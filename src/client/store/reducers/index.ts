import { combineReducers } from "redux";

import application from "../Application/ApplicationReducer";
import counter from "../Counter/CounterReducer";
import inventory from "../Inventory/InventoryReducer";

export default combineReducers({
  application,
  counter,
  inventory,
});
