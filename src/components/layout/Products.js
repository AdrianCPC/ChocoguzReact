import React from "react";
import "../layout/Products.module.css";

const Products = ({ productItems }) => {
    return (
        <div className="products">
            {productItems.map((productItem) => (
                <div className="card">
                    <div>
                        <img className="product-image" src={productItem.image} alt={productItem.name}/>
                    </div>
                    <div>
                        <h3 className="product.name">{productItems.name}</h3>
                    </div>
                    <div className="product.price">{productItems.price}</div>
                </div>
            ))}
        </div>
    );
};

export default Products;
