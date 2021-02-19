import * as React from "react";
import { useSelector } from "react-redux";

import store from "./store";
import { incrementRequest } from "./store/Counter/CounterAction";

import Catalog from "./components/Catalog";

import { Product, RootState } from "../types";

const App: React.FunctionComponent<unknown> = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const inventory: Product[] = [
    {
      description: "This is a thing.",
      id: "0",
      imageUrl: "https://picsum.photos/200?random=1",
      price: 10.5,
      quantity: 10,
      title: "Cool Product",
    },
    {
      description: "This is something else.",
      id: "1",
      imageUrl: "https://picsum.photos/200?random=2",
      price: 5.73,
      quantity: 1000,
      title: "Super Cool Product",
    },
    {
      description: "This is the last thing",
      id: "2",
      imageUrl: "https://picsum.photos/200?random=3",
      price: 3.19,
      quantity: 50,
      title: "Dull Thing",
    },
  ];

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
      <Catalog inventory={inventory} />
    </div>
  );
};

export default App;
