import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Nav (props) {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    const handleClick = (path) => {
        setActiveLink(path);
      };
    
    return (
      
    <div className="nav">
      <Link to="/" onClick={() => handleClick('/')}>
        <h2 className={activeLink === '/' ? 'navtext active' : 'navtext'}>Home</h2>
      </Link>
      <Link to="/venues" onClick={() => handleClick('/venues')}>
        <h2 className={activeLink === '/venues' ? 'navtext active' : 'navtext'}>Venues</h2>
      </Link>
      <Link to="/events" onClick={() => handleClick('/events')}>
        <h2 className={activeLink === '/events' ? 'navtext active' : 'navtext'}>Events</h2>
      </Link>
      
    </div>
    )
  }