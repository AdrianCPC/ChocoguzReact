import React from 'react'
import { Button } from './Button'

const Categories = () => {

    const pulsar = () => {
        console.log('Has pulsado')
    }
    return (
        <div>
            <Button onClick={()=>{pulsar()}}>Categorias</Button>
        </div>
    )
}

export default Categories
