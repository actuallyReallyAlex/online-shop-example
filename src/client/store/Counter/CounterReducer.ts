import * as types from "./CounterTypes";

import { CounterState } from "../../../types";

const INITIAL_STATE: CounterState = {
  count: 0,
};

export default (state = INITIAL_STATE, action: types.Action): CounterState => {
  switch (action.type) {
    case types.INCREMENT:
      return { ...state, count: (state.count += 1) };
    default:
      return state;
  }
};
