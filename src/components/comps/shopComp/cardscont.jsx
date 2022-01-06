import React from 'react'
import carsData from '../../data/carsData'
import Card from './cards'

export const Cardscont = () => {
    return (
        <div className='shopCardsCont'>
            {carsData.map((obj) =>(
                <Card purchasePrice={obj.purchasePrice} name={obj.name} price={obj.price} id={obj.id} model={obj.model} src={obj.src} />
            ))}
        </div>
    )
}