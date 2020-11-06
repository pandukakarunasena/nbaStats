import React from 'react'
import {MDBContainer, MDBRow, MDBCol} from 'mdbreact'
import MenuPlayers from '../Menu/MenuPLayer'
import MenuScores from '../Menu/MenuScore'
import MenuStandings from '../Menu/MenuStandings'
import MenuTeams from '../Menu/MenuTeams'

const  HomePage =()=> {
    return (
        <div >
            <MenuPlayers/>
            <MenuScores/>
            <MenuStandings/>   
            <MenuTeams/>    
        </div>
    )
}

export default HomePage