import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.module.css";
import ChocoGuz from "../../assets/icons/ChocoGuz.svg";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    return (
        <Navbar className="navbar">
            <div>
                <Link to="/" className="logo">
                    <img src={ChocoGuz} alt="logo" />
                </Link>
            </div>
            <div className="navbar-link">
                <ul>
                    <li>
                        <Link to="/Inicio">INICIO</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/Tienda">TIENDA</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/Pedidos" className="cart">
                            {<FaBars />}
                        </Link>
                    </li>
                </ul>
            </div>
        </Navbar>
    );
};

export default Navbar;
