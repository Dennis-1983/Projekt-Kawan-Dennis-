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
          <NavLink
            to="/infopage"
            style={(isActive) => ({
              color: isActive ? 'green' : 'blue',
            })}
          >
            Info page
          </NavLink>
        </li>
        <li>
          <NavLink to="link">Link</NavLink>
        </li>
      </ul>
    </nav>
  );
};
