import { useEffect, useState } from 'react'
import {useParams, Link, useNavigate} from 'react-router-dom'
import axios from 'axios'


export default function EventExpandedPage (props) {

  const [event, setEvent] = useState('')
  let {eventID} = useParams() 
  let navigate = useNavigate()

  const openEditor = (e) => {
    navigate(`/editevent/${eventID}`);
  }

const deleteEvent = async (e) => {
    try {
        const response = await axios.delete(`http://127.0.0.1:8000/events/${eventID}`, {
            headers: {
            "Content-Type": "application/json",
            },
        });
            console.log(response.status)
            if (response.status === 200 || response.status === 204) {
                console.log("event deleted");
                navigate(`/events`);
            } else {
                console.error("Failed to delete event:", response.statusText);
            }
        } catch (error) {
        console.error("Error:", error)
        }
}

  useEffect(() => {
    const getData = async () => {
      const responseEvent = await axios.get(`http://127.0.0.1:8000/events/${eventID}`)
      console.log('data', responseEvent)
      
      //assign API results to array
      setEvent(responseEvent.data)
    }
    getData()

  }, [props.events, eventID])

  return event ? (
    <div className="expandedItem">
      <Link to ='/events' className='navtext'>Back to events</Link>
        <br/>
      <div className='expandedBody'>
        <div className='expandedText'>
        <h2>{event.name}</h2>
        <h3>Details: {event.details}</h3>
        <button onClick={openEditor}>Edit Event</button>
        <button onClick={deleteEvent}>Delete Event</button>
        </div>
        <img src = {event.image_url} 
        className='expandedImage'
        />
      </div>
    </div>
  ) 
  :     <div> 
            <div className='home'>  
            <h2>event not found</h2>
            <Link to ='/events' className='navtext'>Back to events</Link>
            </div> 
        </div>
}

