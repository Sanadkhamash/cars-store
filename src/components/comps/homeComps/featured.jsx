import React from 'react'
import { useNavigate } from 'react-router-dom';
import carsData from '../../data/carsData'
import FeaturedCard from './featuredCard';

function Featured() {
    const navigate = useNavigate()
    let carsArr = [];
    for(let i = 0; i<=2; i++){
        carsArr[i] = carsData[i];
    }
    return (
        <div className='featuredCont'>
            <div className='fHeader'>
                <h1>Featured Cars</h1>
            </div>
            <div className='fCardscont'>
                {
                    carsArr.map((car, i)=>{
                        return <FeaturedCard key={i} purchasePrice={car.purchasePrice}
                        name={car.name} model = {car.model} src={car.src} />
                    })
                }
            </div>
                <div className='explore'>
                    <button onClick ={()=>{navigate("/shop")}}className='burnBtn'>
                        Explore More !
                    </button>
                </div>
            
        </div>
    )
}

export default Featured
