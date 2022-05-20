import React from 'react'
import './Navbar.css'

const Navbar = ()=>{
    return(
        <div className='nav-wrap'>
        <div className='nav-left'>
            <div className='nav-name'>Naol</div>
            <span>toggle</span>
        </div>
        <div className='nav-right'>
            <div className='nav-list'>
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>Testimonials</li>

                </ul>
            </div>
            <button className='btn'>Contact Me</button>
        </div>
    </div>
    )
}

export default Navbar;