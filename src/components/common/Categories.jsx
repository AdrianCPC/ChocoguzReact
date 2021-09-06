import React from 'react'

const Categories = () => {

    const pulsar = () => {
        console.log('Has pulsado')
    }
    return (
        <div>
            <button onClick={()=>{pulsar()}}>Categorias</button>
        </div>
    )
}

export default Categories
