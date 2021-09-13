import React from "react";
import { Link } from "react-router-dom";
import ProductItem from "../common/ProductItem";
import {ProductList} from "../common/ProductList";
import "./ShopStyle.css";


const Shop = () => {
    return (
        <div className="container-shop">
            <section className="categories">
                <ul>
                    <li>
                        <Link to="/all">Todos los productos</Link>
                    </li>
                    <li>
                        <Link to="/mesa">Chocolate de Mesa</Link>
                    </li>
                    <li>
                        <Link to="/tentacion">Chocotentacíon</Link>
                    </li>
                    <li>
                        <Link to="cortado">Chocortado</Link>
                    </li>
                </ul>
            </section>
            <div className="productList">
                {ProductList.map((productItem, key) => {
                    return (
                    <ProductItem
                    key={key}
                    image={productItem.image}
                    name={productItem.name}
                    price={productItem.price}/>)
                })}
            </div>
        </div>
    );
};

export default Shop;
