import React, { useState, useEffect } from 'react'
import {Accordion,Card} from 'react-bootstrap'
import './News.css'
export const News = () => {

    const[news, setNews] = useState([])

    useEffect(()=>{
        fetchItems();
    },[])

    const fetchItems = async () => {
        
        const data = await fetch(process.env.SERVER_URL || `/News`)
        const items = await data.json()
        setNews(items)
    }


    return (

        <React.Fragment>
        <Accordion defaultActiveKey='0'>
        {news.map((item,index) => (
            
                <NewsItem 
                key =  {index}
                event={index}
                Content={item.Content}
                TimeAgo={item.TimeAgo}
                Title={item.Title}
                Updated={item.Updated}
                Url={item.Url}
                />
           
            ))}
        </Accordion>  
        </React.Fragment>
        
    )
}



 const NewsItem = (props) => {
    const {Content, TimeAgo, Title, Updated, Url, event}   = props

    return(
        
            <Card className='news-card'>
                
                <Accordion.Toggle className='Accordian-news' as={Card.Header} eventKey={event}>
                <h3 className='news-t'>{Title}</h3>    <h5 className='news-ago'>{TimeAgo}</h5>
                </Accordion.Toggle>
                <Accordion.Collapse  eventKey={event}>
                <Card.Body>
                    
                    
                    <p className='news-p'>{Content}</p>
                    <h6 className='news-h'>Updated: {Updated}</h6>
                    <a className='news-a' href={Url}>Want to know more!</a>    
                    
                </Card.Body>
                </Accordion.Collapse>
            </Card>
        

            
            


            

    )
}
    

