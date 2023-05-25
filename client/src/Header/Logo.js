import React from 'react'
import {Link, withRouter} from 'react-router-dom'

export default function Logo() {
    return (

        <React.Fragment>
            
                <h1 ><Link style={headerstyle} to='/'>NBAstats </Link></h1>
           
            
        </React.Fragment>
    )
}


const headerstyle={
    fontStyle:'italic',
    fontFamily:'Oswald,',
    fontWeight:'700',
    paddingLeft:'40px',
    color:'white',
    textDecoration:'none'

}