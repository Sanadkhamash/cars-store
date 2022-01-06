import React from 'react'
import "./home.css"
export const Home = (props) => {
  
    return (
        <div className='homeContainer'>
          {props.children}
        </div>

        
    )
}