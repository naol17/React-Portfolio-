import React from 'react'
import './card.css'

const Cards =({emoji,heading,detail })=>{
    return(
        <div className='card'>
            <img src={emoji} alt=''/>
            <span>{heading}</span>
            <span>{detail}</span>
            <button className='cardBtn'>LEARN MORE</button>
        </div>
    )

}
export default Cards;

