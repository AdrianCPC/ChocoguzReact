import React from 'react';

function ProductItem({image, name, price}) {
    return (
        <div className="product-item">
            <div className="img__container">
                <img src={require('../../assets/images/Clavos.png')} alt='images'/>
            </div> 
            {/* <div style={{backgroundImage: `url(${image})`}}></div> */}
            <h1>{name}</h1>
            <p>${price}</p>
        </div>
    )
};

export default ProductItem;
