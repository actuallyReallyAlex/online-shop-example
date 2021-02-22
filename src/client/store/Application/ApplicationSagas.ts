import { put } from "redux-saga/effects";

import * as ACTIONS from "./ApplicationActions";

export function* setAppIsReady(): Generator {
  yield put(ACTIONS.setAppIsReady(true));
}
