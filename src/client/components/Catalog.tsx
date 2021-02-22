import * as React from "react";
import { useSelector } from "react-redux";

import ProductDisplay from "./ProductDisplay";

import { Product, RootState } from "../../types";

const Catalog: React.FunctionComponent<unknown> = () => {
  const products = useSelector((state: RootState) => state.inventory.products);

  return (
    <div>
      Catalog
      {products.map((product: Product) => (
        <ProductDisplay key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Catalog;
