import * as types from "./CounterTypes";

export const incrementRequest = (): types.Action => ({
  type: types.INCREMENT_REQUEST,
});

export const increment = (): types.Action => ({
  type: types.INCREMENT,
});
