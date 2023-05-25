import React, { useEffect, useState } from 'react'
import './LiveScores.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function LiveScores() {

    // useEffect(()=> {
    //     fetchItems()
    // }, [])

    
    return (
    <>
        <div className= 'main_team--container'>
            <div className='team__coloumn'>
                <h2>golden state worriors</h2>
                <div className= 'image'><img src='' alt='teams logo'></img>
                </div>
                <div className='team__roster'>
                <ul className='team__roster--ul'>    
                   
                    </ul>
                </div>
            </div>
            <div className='team__coloumn'>
                <h4>VS</h4>
            </div>
            <div className='team__coloumn'>
                <h2>Los angeles Lakers</h2>
                <div className= 'image'><img src='' alt='teams logo'></img>
                </div>
                <div className='team__roster'>
                    <ul className='team__roster--ul'>    
                                           
                    </ul>
                </div>
            </div>   
        </div>
        <GameSchedule/>
    </>
    )
}


export function GameSchedule(){
    //select the date --using the ract-datepicker component --done
    //call the server -- send api keys to the backend
    //return the api data
    //render in the cards
    const [date, setDate] = useState(new Date())
    const [gameSchedule, setGameSchedule] = useState([])

    const fetchItems = async ()=>{
       
        const day = date.toISOString().split('T')[0]//convert the date into ISO format to make the apii call
        const proxy = `https://cors-anywhere.herokuapp.com/`
        const key = `4605e861751a4badb6e6ad5ae0d5253c`
        const gameData = await fetch(process.env.SERVER_URL || `https://api.sportsdata.io/v3/nba/scores/json/GamesByDate/${day}?key=${key}`) 
        const itemsGame = await gameData.json()
        setGameSchedule(itemsGame)
       
    }


    const handleSelect = dat => {
        setDate(dat)
        fetchItems()
        
    };

    return(
        <>
            <DatePicker
            selected={date}
            onSelect={handleSelect}
            />
            {gameSchedule.map(game =>(
                <h1>{game.GameID}</h1>
            ))}
        </>
    )     
}
   