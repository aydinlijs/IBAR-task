import React from 'react';
import Logo from './../assets/Icons/idea-100.png';


const Menu = () => {
    return (
        <div className="menu">
            <div className="logo">
                <span>{'<'}</span>
                <img src={Logo} alt="_logo" />
                <span>{'>'}</span>
            </div>
            <ul className="navbar">
                <li>Services</li>
                <li>Portfolio</li>
                <li>Team</li>
                <li>Offices</li>
                <li>Client</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Menu;