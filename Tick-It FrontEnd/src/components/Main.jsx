import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import VenueList from './VenueList'
import VenueExpandedPage from './VenueExpandedPage'
import EventList from './EventList'
import EventExpandedPage from './EventExpandedPage'
import FileNotFound from './FileNotFound'
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



