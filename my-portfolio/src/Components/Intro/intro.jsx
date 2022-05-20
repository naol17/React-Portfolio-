import React from 'react'
import './Intro.css'
import Github from '../../assets/img/github.png'
import Insta from '../../assets/img/instagram.png'
import linked from '../../assets/img/linkedin.png'

const Intro =()=>{
    return(
        <div className='intro'>
            <div className='intro-left'>
                <div className='intro-name'>
                    <span>Hey! I Am</span>
                    <span>Naol Dame</span>
                    <span>Frontend Developer and graphic designer with high creative and 
                            quality development, producing quality work.
                    </span>

                </div>
<button className='button intro-btn'>Hire Me</button>
            </div>
            <div>
                
            </div>
            <div className='intro-right'>right side</div>
        </div>
    )
}

export default Intro;