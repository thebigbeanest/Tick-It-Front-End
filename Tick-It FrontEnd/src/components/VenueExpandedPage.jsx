import { useEffect, useState } from 'react'
import {useParams, Link, useNavigate} from 'react-router-dom'
import axios from 'axios'


export default function VenueExpandedPage (props) {

  const [venue, setVenue] = useState('')
  const [events, setEvents] = useState([])

  let {venueID} = useParams() 

  let navigate = useNavigate()
  const showevent = (eventID) => {
    navigate(`/events/${eventID}`)
  }

  useEffect(() => {
    const getData = async () => {
      const responseVenue = await axios.get(`http://127.0.0.1:8000/venues/${venueID}`)
      console.log('data', responseVenue)
      
      //assign API results to array
      setVenue(responseVenue.data)

      const responseEvents = await axios.get(`http://127.0.0.1:8000/events`)
      console.log('data', responseEvents)
      
      //assign API results to array
      setEvents(responseEvents.data)
    }
    getData()

  }, [props.venues, venueID])

  return venue ? (
    <div className="expandedItem">
      <Link to ='/venues' className='navtext'>Back to venues</Link>
        <br/>
      <div className='expandedBody'>
        <div className='expandedText'>
        <h2>{venue.name}</h2>
        <h3>Description: {venue.details}</h3>

        </div>
        <img src = {venue.image_url} 
        className='expandedImage'
        />
      </div>

      <div className="objectList">
      <p className='header'>Events for this venue</p>
      {
        events.map((event, index) => (
          event.venue_id == venueID ?
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
        :
        null
        ))
      }

    </div>

    </div>
  ) 
  :     <div> 
            <div className='home'>  
            <h2>Venue not found</h2>
            <Link to ='/venues' className='navtext'>Back to venues</Link>
            </div> 
        </div>
}

