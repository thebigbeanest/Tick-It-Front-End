import { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'


export default function VenueExpandedPage (props) {

  const [venue, setVenue] = useState('')

  let {venueID} = useParams() 

  useEffect(() => {
    const getData = async () => {
      const responseVenue = await axios.get(`http://127.0.0.1:8000/venues/${venueID}`)
      console.log('data', responseVenue)
      
      //assign API results to array
      setVenue(responseVenue.data)
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
        <div className='expandedImage'
        style={{
          backgroundImage: `url(${venue.image_url})`, 
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
            <h2>Venue not found</h2>
            <Link to ='/venues' className='navtext'>Back to venues</Link>
            </div> 
        </div>
}

