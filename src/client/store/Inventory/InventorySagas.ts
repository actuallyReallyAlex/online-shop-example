import { call, put, takeEvery } from "redux-saga/effects";

import * as ACTIONS from "./InventoryActions";
import * as API from "./InventoryApis";
import * as TYPES from "./InventoryTypes";

export function* getInventoryGenorator(): Generator {
  try {
    const response = yield call(API.fetchInventory);
    console.log(response);
    yield put(ACTIONS.getInventory(response));
  } catch (error) {
    console.error(error);
  }
}

export function* getInventorySaga(): Generator {
  console.log("HERE!");
  yield takeEvery(TYPES.INVENTORY_REQUEST, getInventoryGenorator);
}
