import React from 'react';
import './shop.css'

export const Shop = (props) => {
    return (
        <div className='shopContainer'>
            {props.children}
        </div>
    )
}