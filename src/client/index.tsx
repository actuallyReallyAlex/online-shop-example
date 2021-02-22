import * as React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store";

import { createSagas } from "./store/sagas";

import App from "./App";

store.runSaga(createSagas);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
