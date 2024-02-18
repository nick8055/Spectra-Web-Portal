import React from 'react';
import './navbar.css';
import logo from './karunya-landscape-logo.png'

function Navbar(){
    return(
        <div className='navbar' align='center'>
            <img className='karunya-landscape-logo' src={logo}/>
        </div>
    )
}

export default Navbar;
