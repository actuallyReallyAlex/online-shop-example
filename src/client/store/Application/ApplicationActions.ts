import * as TYPES from "./ApplicationTypes";

export const setAppIsReady = (appIsReady: boolean): TYPES.Action => ({
  type: TYPES.SET_APP_IS_READY,
  payload: {
    appIsReady,
  },
});
