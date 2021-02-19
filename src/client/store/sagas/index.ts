import { all } from "redux-saga/effects";

import { watchIncrement } from "../Counter/CounterSagas";

export function* watchSagas(): Generator {
  yield all([watchIncrement()]);
}
