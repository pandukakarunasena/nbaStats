import React, { useEffect, useState } from 'react'
import './TeamList.css'
import {Modal,Button} from 'react-bootstrap'

export const TeamList = () => {
    
    const [teams, setTeams] = useState([])
    const [modalShow, setModalShow] = useState(false);


    useEffect(() => {
        fetchItems();
    },[])


    const fetchItems =  async () => {
        try{
            const data = await fetch(process.env.SERVER_URL || '/TeamList',{
                method:'get'
            })
            const teams = await data.json()
            setTeams(teams)    
        }catch(error){
            console.log(error)
            alert(`error occured  ${error}`)
        }
        

    }
    return (
        <div className = 'teamlist'>
            {teams.map(team => (
                <div  key = {team.TeamID} className= 'teamcard'>
                    <div className = 'teamlist-a-tag' >
                            <img onClick={()=>setModalShow(true)} className='img' src={team.WikipediaLogoUrl} alt='logo'/>
                            <h6>{team.City} {team.Name}</h6> 
                    </div> 
                </div>
            ))}
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
           
        </div>
    )
}




function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
       
        <Modal.Body>
            
            <table>
                <tbody>
                    <tr>
                        <td>panduka karunasena</td>
                    </tr>
                </tbody>
                
                
                
               
            </table>
            
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
