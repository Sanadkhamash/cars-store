import React from 'react'

function FeaturedCard(props) {
    return (
        <div className="featuredCard">
            <div className='fCardContainer'>
                <div className="fCardImg">
                    <img src = {props.src} alt={props.name} />
                </div>
                <div className='fCardTexs'>
                    <h3>{props.name}</h3>
                    <p>{props.model}</p>
                    <h4>{props.purchasePrice}</h4>
                </div>

            </div>
            
        </div>
    )
}

export default FeaturedCard
