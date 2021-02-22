import * as React from "react";
import { useSelector } from "react-redux";

import store from "./store";
import { incrementRequest } from "./store/Counter/CounterActions";

import Catalog from "./components/Catalog";

import { RootState } from "../types";
import Cart from "./components/Cart";

const App: React.FunctionComponent<unknown> = () => {
  const count = useSelector((state: RootState) => state.counter.count);

  const handleClick = () => {
    store.dispatch(incrementRequest());
  };

  return (
    <div>
      <h1>online-shop-example</h1>
      <h2>Count: {count}</h2>
      <button onClick={handleClick} type="button">
        Increment Count
      </button>
      <Catalog />
      <Cart />
    </div>
  );
};

export default App;
