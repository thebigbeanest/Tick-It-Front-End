import { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'


export default function EventExpandedPage (props) {

  const [event, setEvent] = useState('')

  let {eventID} = useParams() 

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

        </div>
        <div className='expandedImage'
        style={{
          backgroundImage: `url(${event.image_url})`, 
          backgroundSize:'400px', 
          backgroundPosition: 'center center'
        }} 
          >
        </div>
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

