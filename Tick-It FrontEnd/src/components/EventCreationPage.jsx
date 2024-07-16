import { Link, useNavigate } from "react-router-dom"
import Nav from './Nav'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function EventCreationPage() {

    let navigate = useNavigate()

    const [inputInProgress, setInputInProgress] = useState({ 
        venue: '',
        name: '',
        starttime: '',
        endtime: '',
        date: '',
        price: '',
        details: '',
        image_url: '',
    });

    const updateTyping = (e) => {
        setInputInProgress({ ...inputInProgress, [e.target.name]: e.target.value });
      }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(`input is ${inputInProgress.searchBar}`)
        // const searchTerm = inputInProgress.searchBar;
        // setInputInProgress({searchBar:''})
        addNewEvent()
        navigate(`/events`);
      }

      const addNewEvent = async () => {
 
        try {
          const response = await axios.post("http://127.0.0.1:8000/events/", {
            venue_id: inputInProgress.venue,
            name: inputInProgress.name,
            start_time: inputInProgress.starttime,
            end_time: inputInProgress.endtime,
            date: inputInProgress.date,
            price: inputInProgress.price,
            details: inputInProgress.details,
            image_url: inputInProgress.image_url
          }, {
            headers: {
              "Content-Type": "application/json",
            },
          });
     
            console.log(`event is ${response.data}`)
     
            if (response.status === 201) {
                console.log("event created");
            } else {
                console.error("Failed to add event:", response.statusText);
            }
        } catch (error) {
          console.error("Error:", error)
        }
      
      };

    return(
        <div className="form">

        <form className="" onSubmit={handleSubmit}>
        <input className=""
          name="venue"
          placeholder="venue"
          type="text" //dropdown 
          value={inputInProgress.venue}
          onChange={updateTyping}
          required
        />
        <input className=""
          name="name"
          placeholder="event name"
          type="text" //dropdown 
          value={inputInProgress.name}
          onChange={updateTyping}
          required
        />
        <input className=""
          name="starttime"
          placeholder="starting time"
          type="text" //dropdown 
          value={inputInProgress.starttime}
          onChange={updateTyping}
          required
        />        
        <input className=""
          name="endtime"
          placeholder="ending time"
          type="text" //dropdown 
          value={inputInProgress.endtime}
          onChange={updateTyping}
          required
        />
        <input className=""
          name="date"
          placeholder="date of event"
          type="text" //dropdown 
          value={inputInProgress.date}
          onChange={updateTyping}
          required
        />
        <input className=""
          name="price"
          placeholder="price"
          type="text" //dropdown 
          value={inputInProgress.price}
          onChange={updateTyping}
          required
        />
        <input className=""
          name="details"
          placeholder="event details"
          type="text" //dropdown 
          value={inputInProgress.details}
          onChange={updateTyping}
          required
        />
        <input className=""
          name="image_url"
          placeholder="image link"
          type="text" //dropdown 
          value={inputInProgress.image_url}
          onChange={updateTyping}
          required
        />
        <button className="searchBtn">Submit</button>
      </form>
      </div>



    )


}