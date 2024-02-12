import './sidebar.css';
import { Outlet, Link } from "react-router-dom";
import logo from './karunya-logo.png'
import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faTachometerAlt, faBriefcase, faHourglass, faTrophy ,faFileAlt} from '@fortawesome/free-solid-svg-icons';

function Sidebar(){
    const [isOpen, setIsOpen] = useState(false);

    function toggleSidebar(){
        setIsOpen(!isOpen);
    }

    return(
        <div className={`main-container ${isOpen ? 'open' : ''}`}>
                  <button className={`toggleButton ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}>
                        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                  </button>
            <img src={logo}/>

            <ul className='ul'>
                <li><Link to="/dashboard">Dashboard &nbsp;<FontAwesomeIcon icon={faTachometerAlt}/></Link></li>
                <li><Link to="/careers">Careers &nbsp;<FontAwesomeIcon icon={faBriefcase}/></Link></li>
                <li><Link to="/internships">Internships &nbsp;<FontAwesomeIcon icon={faHourglass}/></Link></li>
                <li><Link to="/hackathons">Hackathons &nbsp;<FontAwesomeIcon icon={faTrophy}/></Link></li>
                <li><Link to="/placements">Placements &nbsp;<FontAwesomeIcon icon={faFileAlt}/></Link></li>
                {/* <li>Dashboard &nbsp;<FontAwesomeIcon icon={faTachometerAlt}/></li>
                <li>Careers &nbsp;<FontAwesomeIcon icon={faBriefcase}/></li>
                <li>Internships &nbsp;<FontAwesomeIcon icon={faHourglass}/></li>
                <li>Hackathons &nbsp;<FontAwesomeIcon icon={faTrophy}/></li>
                <li>Placements &nbsp;<FontAwesomeIcon icon={faFileAlt}/></li>  */}
            </ul>
        </div>
    )
}

export default Sidebar;