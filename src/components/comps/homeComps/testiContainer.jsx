import React from 'react'
import testis from '../../data/testi'
import Testimonials from './testi'


export const TestiContainer = () => {
    return (
        <div className = "testiSection">
        <h1>Testimonials</h1>
        <div className='testiContainer'>
            {testis.map((obj) =>(
               <Testimonials src = {obj.src} title = {obj.title} des = {obj.des} />
            ))}
        </div>
    </div>
    )
}