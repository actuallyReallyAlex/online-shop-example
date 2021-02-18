import * as React from "react";
import Catalog from "./components/Catalog";

import { Product } from "../types";

const App: React.FunctionComponent<unknown> = () => {
  const inventory: Product[] = [
    {
      description: "This is a thing.",
      id: "0",
      imageUrl: "https://picsum.photos/200?random=1",
      price: 10.5,
      quantity: 10,
      title: "Cool Product"
    },
    {
      description: "This is something else.",
      id: "1",
      imageUrl: "https://picsum.photos/200?random=2",
      price: 5.73,
      quantity: 1000,
      title: "Super Cool Product"
    },
    {
      description: "This is the last thing",
      id: "2",
      imageUrl: "https://picsum.photos/200?random=3",
      price: 3.19,
      quantity: 50,
      title: "Dull Thing"
    },
  ];
  return (
    <div>
      <h1>online-shop-example</h1>
      <Catalog inventory={inventory} />
    </div>
  );
};

export default App;
