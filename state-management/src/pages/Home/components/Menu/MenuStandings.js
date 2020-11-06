import React from 'react'
import Tilt from 'react-tilt'
import './MenuStandings.css'

const MenuStandings= () => {
    return (
        <Tilt className='Tilt styleCard3' options = {{max:20, transition:true,scale:1}}>
        <div className= 'Tilt-inner'>
            <p data-text ='Standings'>Standings</p> 
        </div>
        </Tilt>
    )
}


export default MenuStandings