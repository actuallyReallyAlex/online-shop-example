import * as React from "react";
import { Product } from "../../types";

const ProductDisplay: React.FunctionComponent<Product> = (props: Product) => {
    const { description, imageUrl, price, quantity, title } = props;
    return (
        <div>
            <img height="200" src={imageUrl} width="200" />
            <span>Price - {price}</span>
            <span>Quantity - {quantity}</span>
            <span>Title - {title}</span>
            <span>Description - {description}</span>
        </div>
    );
};

export default ProductDisplay;
