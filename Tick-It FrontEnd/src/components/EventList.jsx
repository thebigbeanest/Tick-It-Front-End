import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

export default function EventList () {

    const [events, setEvents] = useState([])

    let navigate = useNavigate()
    const showevent = (eventID) => {
      navigate(`${eventID}`)
    }
  
    useEffect(()=>{
      const getData = async () => {
        const responseEvents = await axios.get(`http://127.0.0.1:8000/events`)
        console.log('data', responseEvents)
        
        //assign API results to array
        setEvents(responseEvents.data)
      }
      getData()
  
    },[])

    console.log(events)
    
    if(!events) {
        return <h1>Loading... please wait</h1>
    } else {
        return (
            <div className="objectList">
    
                {
                    events.map((event, index) => (
                        <div key={index} 
                        className="objectItem"
                        onClick={() => showevent(event.id)}
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${event.image_url})`, 
                            backgroundSize:'600px', 
                            backgroundPosition: 'center 30%'}} 
                        >
                            
                            <h2>{event.name}</h2>
                            <h3>Price: {event.price}</h3>
                        </div>    
                    ))
                }
    
            </div>
        )

    }

  }