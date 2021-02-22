import { ApplicationState } from "../../../types";

interface ApplicationAction {
  type: string;
  payload?: unknown;
}

const INITIAL_STATE = {
  appIsReady: false,
};

const ApplicationReducer = (
  state = INITIAL_STATE,
  action: ApplicationAction
): ApplicationState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ApplicationReducer;
