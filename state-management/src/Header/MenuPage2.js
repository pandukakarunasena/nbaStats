import React from 'react'
import {Link} from 'react-router-dom'
import './MenuPage2.css'

export default function MenuPage2() {
    return (
        <React.Fragment>
            <ul>
                <Link className='menu-a-tag' to='/LiveScores' data-text ='Live Scores'><li>Live Scores</li></Link>
                <Link className='menu-a-tag' to='/SearchPlayerPage'  data-text ='Players'><li>Players</li></Link>
                <Link className='menu-a-tag' to='/TeamList' data-text ='Teams'><li>Teams</li></Link>
                <Link className='menu-a-tag' to='/Stadiums' data-text ='Stadiums'><li>Stadiums</li></Link>
                <Link className='menu-a-tag' to='/News' data-text ='News'><li>News</li></Link>
            </ul>
        </React.Fragment>
    )
}
