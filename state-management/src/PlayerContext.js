import React, {useState, createContext, useEffect} from 'react'

export const PlayerContext = createContext();

export const PlayerProvider = (props) => {
    {/**
    useEffect(() => {
        getData()
    }, [])

    const [players, setPlayer] = useState([])
    
    const getData = async () => {
        const data = await fetch(`https://api-nba-v1.p.rapidapi.com/players/teamId/6`)
        const players = await data.json();
        console.log(players)
        setPlayer(players.data)
    }
    */}
    
    

    return (
       <PlayerContext.Provider >
           {props.children}
       </PlayerContext.Provider>
    )
}


