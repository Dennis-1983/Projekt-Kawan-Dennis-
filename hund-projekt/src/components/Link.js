import React from 'react';
import { NavLink } from 'react-router-dom';

export const Link = () => {
  return (

    <nav className="navbar">
     
      <ul>
        <li className="nav-li">
          <NavLink className="navLink" to="/">Welcome</NavLink>
        </li>

        <li>
          <NavLink className="navLink" to="/infopage">Info page</NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/contact">Contact Us</NavLink>
        </li>
        
      </ul>
    </nav>
  
  );
};
