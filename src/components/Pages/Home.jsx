import React from 'react';
import "./HomeStyle.css";
import CoverImage from "../../assets/images/MainChocoguz.png";

const Home = () => {
    return (
        <div>
            <div className="cover" style={{ backgroundImage: `url(${CoverImage})`}}>
                <h1>Bienvenido a Chocoguz</h1>
            </div>
            <div className="main-product">
                <h1>Productos destacados</h1>
            </div>
            <div className="main-ask">
                <h1>Comunícate con nosotros</h1>
            </div>
        </div>
    )
}

export default Home
