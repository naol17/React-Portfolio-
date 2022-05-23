import React from 'react'

const Floatingdiv = ({image, txt1, txt2}) =>{
    return(
        <div className='floatingdiv'>
            <img src={image}/>
            <span>{txt1}
                <br/>
                {txt2}
            </span>

        </div>
    )
}

export default Floatingdiv;