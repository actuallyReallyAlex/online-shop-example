import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import reducers from "./reducers";
import { createSagas } from "./sagas";

import { CustomStore } from "../../types";

const saga = createSagaMiddleware();

const composeEnhancers =
  typeof window === "object" &&
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const logger = createLogger({ collapsed: true });

const enhancer = composeEnhancers(applyMiddleware(saga, logger));

const store: CustomStore = createStore(reducers, enhancer);

store.runSaga = saga.run;

saga.run(createSagas);

export default store;
