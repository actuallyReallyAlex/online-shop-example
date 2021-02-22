import { all } from "redux-saga/effects";

import { setAppIsReady } from "../Application/ApplicationSagas";
import { watchIncrement } from "../Counter/CounterSagas";
import { getInventorySaga } from "../Inventory/InventorySagas";

export function* createSagas(): Generator {
  yield all([
    // * Create Sagas
    watchIncrement(),
    // * Get Inventory
    getInventorySaga(),
    // * Update State of App
    setAppIsReady(),
  ]);
}
