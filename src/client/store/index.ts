import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import reducers from "./reducers";
import { watchSagas } from "./sagas";

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

const store = createStore(reducers, enhancer);

saga.run(watchSagas);

export default store;
