import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Hero = (props) => {
    let navigate = useNavigate()
    return (
        <div className='heroImg' style={{height:props.height}}>
            {props.heading&&
            <h1>
                {props.hText}
            </h1>}
            
            {props.button&&
            <button className="burnBtn" onClick = {()=>{navigate('/shop')}}>{props.btnText}</button>}
        </div>
    )
}