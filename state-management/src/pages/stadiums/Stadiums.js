import React, { useEffect, useState } from 'react'
import './Stadiums.css'

const Stadiums =()=> {

    
    const [stadiums, setStadiums] = useState([])

    useEffect(()=>{
        fetchItems()
    },[])

    const fetchItems = async ()=> {
        const data = await fetch(process.env.SERVER_URL || `/Stadiums`,{
            method:'get'
        })
        const items = await data.json()
        setStadiums(items)
         
    }

    const renderTable = ()=> {
        return stadiums.map((stadium,index)=>{
            const {StadiumID,Name,Capacity,City,GeoLat,GeoLong} = stadium
            return(
                <tr key={StadiumID}>
                    <td>{Name}</td>
                    <td>{Capacity}</td>
                    <td>{City}</td>
                    <td>{GeoLat}</td>
                    <td>{GeoLong}</td>
                </tr>
            )
        })
                    
    }
    const renderTableHeader = () => {
        const headers = ['Stadium', 'Capacity', 'City' , 'Lat', 'Long']
        return(
            headers.map((header,index) => {
                return <th key={index}>{header.toUpperCase()}</th>
            })
            
        )
    }

    return (
        <div>
            <table id='stadiums'>
                <tbody>
                    <tr>{renderTableHeader()}</tr>
                    {renderTable()}
                </tbody>
            </table>
        </div>
    )
}

export default Stadiums 