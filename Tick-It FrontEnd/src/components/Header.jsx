// import Item from './components/Item'
import { Link, useNavigate } from "react-router-dom"
import Nav from './Nav'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Header (props) {


let navigate = useNavigate()
const [inputInProgress, setInputInProgress] = useState({ searchBar: '' });
const [searchedEvent, setSearchedEvent] = useState('');

useEffect(() => {
    if (searchedEvent) {
      navigate(`/events/${searchedEvent.id}`);
    }
  }, [searchedEvent]);

  const updateTyping = (e) => {
    setInputInProgress({ ...inputInProgress, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`input is ${inputInProgress.searchBar}`)
    const searchTerm = inputInProgress.searchBar;
    setInputInProgress({searchBar:''})
    getData(searchTerm)
  }
  const getData = async (searchTerm) => {
    try {
      
      const response = await axios.get(`http://127.0.0.1:8000/events/${searchTerm}`)
      console.log(`users are ${response.data}`)
      
      //assign API results to array
     setSearchedEvent(response.data)
    } catch (error) {
      console.error("Error fetching data:", error)
    }

  }


    
    return (
      
      <div className="header">
        <h1>Ticket Master</h1>
        <button>
            <Link to ='/newevent' className='neweventbutton'>Create Event</Link>
        </button>
        <Nav/>

        <form className="searchBar" onSubmit={handleSubmit}>
        <input className="searchBar"
          name="searchBar"
          placeholder="search an event or venue"
          type="text"
          value={inputInProgress.searchBar}
          onChange={updateTyping}
          required
        />
        <button className="searchBtn">Search</button>
      </form>
      </div>
    )
  }

