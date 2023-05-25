import React from 'react'
import './MenuTeams.css'
import Tilt from 'react-tilt'
import {Link} from 'react-router-dom'
import TeamList from '../../../TeamList/TeamList'


const MenuTeams= () => {
    return (
        <Link to ='/TeamList' >
            <Tilt className='Tilt styleCard4' options = {{max:20, transition:true,scale:1}}>
            <div className= 'Tilt-inner'>
                <p data-text ='Teams'>Teams</p> 
            </div>
            </Tilt>
        </Link>
    )
}


export default MenuTeams