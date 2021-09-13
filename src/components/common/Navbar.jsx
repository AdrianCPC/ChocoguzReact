import React from "react";
import ChocoGuz from "../../assets/icons/ChocoGuz.svg";
import { HiOutlineShoppingCart } from "react-icons/hi";
import "./NavbarStyle.css";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="container-nav">
            <header>
                <ul>
                    <li>
                        <Link to="/">INICIO</Link>
                    </li>
                    <li>
                        <Link to="/shop">TIENDA</Link>
                    </li>
                </ul>
                <div className="logo">
                    <img src={ChocoGuz} alt="logo" />
                </div>
                <div className="cart">
                    <HiOutlineShoppingCart />
                </div>
            </header>
        </div>
    );
};

export default Navbar;
