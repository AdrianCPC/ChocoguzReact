import React from 'react';
import "./HomeStyle.css";
import CoverImage from "../../assets/images/MainChocoguz.png";
import {RiWhatsappFill} from "react-icons/ri";
import {FaFacebook} from "react-icons/fa";

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
                <p className="message">Nos encanta recibir a nuestros clientes, 
                    así que comunícate en cualquier momento durante las horas de oficina.</p>
                    <div className="media">
                        <RiWhatsappFill/>
                        <FaFacebook />
                    </div>
                    <div className="time">
                        <p id="day">Horario</p>
                        <p>Lunes a Viernes</p>
                        <p>09:00 a.m. - 05:00 p.m.</p>
                    </div>
            </div>
        </div>
    )
}

export default Home
