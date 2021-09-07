import React from 'react'

const Cantidad = () => {
    const [cantidad, setCantidad] = React.useState(0);

    const pluss = () => setCantidad(cantidad + 1);
    const less = () => setCantidad(cantidad - 1);
    if(cantidad<0){
        setCantidad(0)
    }
    return (
        <div>
            <h1>Cantidad: {cantidad}</h1>
            <hr />
            <button onClick={pluss}>&#43;</button>
            <button onClick={less}>&#45;</button>
        </div>
    )
}

export default Cantidad
