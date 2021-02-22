import { put, takeEvery } from "redux-saga/effects";

import * as ACTIONS from "./CounterActions";
import * as TYPES from "./CounterTypes";

export function* increment(): Generator {
  try {
    yield put(ACTIONS.increment());
  } catch (error) {
    console.error(error);
  }
}

export function* watchIncrement(): Generator {
  yield takeEvery(TYPES.INCREMENT_REQUEST, increment);
}
