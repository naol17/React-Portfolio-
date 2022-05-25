import React from 'react'

const Cards =({emoji,heading,detail })=>{
    return(
        <div style={styles.const}>
            <img src={emoji}/>
            <span>{heading}</span>
            <span>{detail}</span>
        </div>
    )

}
export default Cards;

const styles = StyleSheet.create({
    const:{

    },
})