import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import VenueList from './VenueList'
import VenueExpandedPage from './VenueExpandedPage'
import EventList from './EventList'
import EventExpandedPage from './EventExpandedPage'
import EventCreationPage from './EventCreationPage'
import EventEditPage from './EventEditPage'
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
            <Route path="/newevent" element={<EventCreationPage/>}/>
            <Route path="/editevent/:eventID" element={<EventEditPage/>}/>
            <Route path="*" element={<FileNotFound />}/>
        </Routes>
      </div>
) }



