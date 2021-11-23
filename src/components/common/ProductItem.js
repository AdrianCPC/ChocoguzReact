import React from 'react';

function ProductItem({image, name, price}) {
    return (
        <div className="product-item">
            <div>{image}</div>
            {/* <div style={{backgroundImage: `url(${image})`}}></div> */}
            <h1>{name}</h1>
            <p>${price}</p>
        </div>
    )
}

export default ProductItem
