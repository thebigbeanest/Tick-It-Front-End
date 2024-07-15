import {Route, Routes} from 'react-router-dom'
import FileNotFound from './FileNotFound'
import Home from './Home'
import VenueExpandedPage from './VenueExpandedPage'
import VenueList from './VenueList'
import EventExpandedPage from './EventExpandedPage'
import EventList from './EventList'
export default function Main (props) {
    return (
<div className="main">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/venues" element={<VenueList/>}/>
            <Route path="/venues/:venueID" element={<VenueExpandedPage/>}/>
            <Route path="/events" element={<EventList/>}/>
            <Route path="/events/:eventID" element={<EventExpandedPage/>}/>
            <Route path="*" element={<FileNotFound />}/>
        </Routes>
      </div>
) }



