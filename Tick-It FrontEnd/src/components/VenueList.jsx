import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

export default function VenueList () {

    const [venues, setVenues] = useState([])

    let navigate = useNavigate()
    const showVenue = (venueID) => {
      navigate(`${venueID}`)
    }
  
    useEffect(()=>{
      const getData = async () => {
        const responseVenues = await axios.get(`http://127.0.0.1:8000/venues`)
        console.log('data', responseVenues)
        
        //assign API results to array
        setVenues(responseVenues.data)
      }
      getData()
  
    },[])

    console.log(venues)
    
    if(!venues) {
        return <h1>Loading... please wait</h1>
    } else {
        return (
            <div className="objectList">
    
                {
                    venues.map((venue, index) => (
                        <div key={index} 
                        className="objectItem"
                        onClick={() => showVenue(venue.id)}
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${venue.image_url})`, 
                            backgroundSize:'600px', 
                            backgroundPosition: 'center 30%'}} 
                        >
                            
                            <h2>{venue.name}</h2>
                            <h3>Location: {venue.location}</h3>
                        </div>    
                    ))
                }
    
            </div>
        )

    }

  }