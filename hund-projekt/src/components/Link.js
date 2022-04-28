import React from 'react';
import { NavLink } from 'react-router-dom';

export const Link = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Welcome</NavLink>
        </li>

        <li>
          <NavLink to="/infopage">Info page</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="/viewsFile">Data</NavLink>
        </li>
      </ul>
    </nav>
  );
};
