import React from 'react'
import carsData from '../../data/carsData'

function Featured() {
    let carsArr = [];
    for(let i = 0; i<=2; i++){
        carsArr[i] = carsData[i];
    }
    return (
        <div className='featured'>
            {
                
            }
            
        </div>
    )
}

export default Featured
