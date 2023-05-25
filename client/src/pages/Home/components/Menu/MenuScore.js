import React from 'react'
import './MenuCard.css'
import Tilt from 'react-tilt'
import './MenuLivescores.css'

const MenuScores= () => {
    return (
        <Tilt className='Tilt styleCard2' options = {{max:20, transition:true,scale:1}}>
        <div className= 'Tilt-inner'>
            <p data-text ='Live Scores'>Live scores</p> 
        </div>
        </Tilt>
    )
}


export default MenuScores