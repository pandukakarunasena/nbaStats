import React from 'react'
import './MenuCard.css'
import Tilt from 'react-tilt'
import {Link} from 'react-router-dom'

const MenuCard= () => {
    return (
        <Link to ='/SearchPlayerPage'>
            <Tilt className='Tilt styleCard' options = {{max:20, transition:true,scale:1}}>
            <div className= 'Tilt-inner'>
                <p className='card-p' data-text ='Players'>Players</p> 
            </div>
            </Tilt>
        </Link>
    )
}


export default MenuCard