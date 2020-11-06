import React from 'react'
import {MDBIcon} from 'mdbreact'
import './Nav.css'

export default function Nav() {
    return (
        <React.Fragment>
                <div className='style'>
                    <a href="#!" className="fb-ic icon">
                        <MDBIcon size='lg' fab icon="facebook-f" />
                    </a>
                    <a href="#!" className="li-ic icon">
                        <MDBIcon size='lg' fab icon="linkedin-in" />
                    </a>
                    <a href="#!" className="git-ic icon">
                        <MDBIcon size='lg' fab icon="github" />
                    </a>
                    <a href="#!" className="email-ic icon">
                        <MDBIcon size='lg' icon="envelope" />
                    </a>
                </div>
                
        </React.Fragment>
            

        
    )
}



