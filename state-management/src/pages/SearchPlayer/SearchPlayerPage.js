import React, { useState,useRef, useEffect } from 'react'
import {MDBIcon} from 'mdbreact'
import './SearchPlayer.css'
import './PlayerCard.css'
import {Modal, Button} from 'react-bootstrap'


export const  SearchPlayerPage= () => {

    const [players,setPlayers] = useState([])
    const [input,setInput] = useState('')
    const [teams,setTeams] = useState([])
    
    //const [target, setTarget] = useState(null);
    //const ref = useRef(null);

    useEffect(() =>{
        fetchTeams()
    },[])

    const fetchTeams = async () => {
            const data = await fetch(process.env.SERVER_URL || `/GetTeamsKey`)
            const items = await data.json()
            
            setTeams(items)
            
    }


    const handleInput =(event)=> {
        
        setInput(event.target.value)
        console.log(event.target.value)   
    }
    
    const fetchItems =  async (e) => {
        if(input){
            console.log('clicked')
            e.preventDefault()
            const data = await fetch(`/Players`,{
                method:'post',
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                    input:input
                })

            })
            const items = await data.json()
            console.log(items) 
            setPlayers(items)
            setInput('') 
       
        }else{
            e.preventDefault()
        }
           
    }
         
    return (
        
        <React.Fragment>
            <div className='container-stat'>
            
                <form  className='input-form' onSubmit= {fetchItems}>
                        <input className='input-field' type='text' value={input} onChange={handleInput} required ></input>
                        <input  className='input-submit' type='submit' value='SEARCH'></input>    
                </form>
                
                <div className='container-table'>
                    <table id = 'players'>
                        <tbody>
                                {players.map(player => (
                                    <PlayerCard 
                                    key = {player.YahooPlayerID}
                                    PhotoUrl={player.PhotoUrl}
                                    YahooName={player.YahooName}
                                    Height={player.Height}
                                    Weight={player.Weight}
                                    Position={player.Position}
                                />
                            ))}
                            </tbody>
                    </table>
                    <div className='container-keytable'>
                                  
                        <table id= 'keytable'>
                            <tbody>
                                <th>Search by this key</th>
                                {teams.map(team => (
                                    <KeyTable City = {team.City} Name = {team.Name} Tag = {team.Key}/>
                                ))}
                                
                            </tbody>
                        </table>   
                    </div>
                </div>
            </div>
        </React.Fragment>
        
    )
}
                
const PlayerCard = (props) => {

    const {PhotoUrl,YahooName,Height,Weight,Position} = props

    const [modalShow, setModalShow] = useState(false);

    return (
        <React.Fragment >
            <tr>
                    
                <td><img className='head' src ={PhotoUrl} alt ={YahooName}/></td>
                <td>{YahooName}</td>
                <td>{Height}"  {Weight}lbs</td>
                <td>{Position}</td>
                <td>
                <MDBIcon icon="basketball-ball" size='md' onClick={()=> setModalShow(true)} />
                            MORE
                <MyVerticallyCenteredModal
                    {...props}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                    
                            
                </td>

            </tr>
        </React.Fragment>
    )
}

const KeyTable = (props) => {
    const{City, Name, Tag} = props
    return(
        <tr>
            <td>{City} {Name}</td>
            <td>{Tag}</td>
        </tr>

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
            <img src={props.PhotoUrl}/>
            <table>
                <tbody>
                    <tr>
                    {props.YahooName}
                    </tr>
                    <tr>
                    {props.Weight}
                    </tr>
                    <tr>
                    {props.Height}
                    </tr>
                    <tr>
                    {props.Position}
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




{
    /**
     * 
     * 
                    <table id='keyword'>
                        <tbody>
                            <tr>
                                <td>Washington Wizards</td>
                                <td>WAS</td>
                            </tr>
                            <tr>
                                <td>Charlotte Hornets</td>
                                <td>CHA</td>
                            </tr>
                            <tr>
                                <td>Atlanta Hawks</td>
                                <td>ATL</td>
                            </tr>
                            <tr>
                                <td>Miami Heat</td>
                                <td>MIA</td>
                            </tr>
                            <tr>
                                <td>Orlando Majic</td>
                                <td>ORL</td>
                            </tr>
                            <tr>
                                <td>New York Knicks</td>
                                <td>NY</td>
                            </tr>
                            <tr>
                                <td>Philadelphia 76ers</td>
                                <td>PHI</td>
                            </tr>
                            <tr>
                                <td>Brookklyn Nets</td>
                                <td>BKN</td>
                            </tr>
                            <tr>
                                <td>Boston Celtics</td>
                                <td>BOS</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>

                        </tbody>

                    </table>
     */
}
        