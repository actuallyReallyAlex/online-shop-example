import * as React from "react";
import ProductDisplay from "./ProductDisplay";

import { Product } from "../../types";

interface CatalogProps {
  inventory: Product[];
}

const Catalog: React.FunctionComponent<CatalogProps> = (
  props: CatalogProps
) => {
  const { inventory } = props;

  return (
    <div>
      Catalog
      {inventory.map((product) => (
        <ProductDisplay key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Catalog;
