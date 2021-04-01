import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './Navigation.css'

const NavBar = ({ setAuthenticated }) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" exact={true} activeClassName="active">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/stats" exact={true} activeClassName="active">
            Stats
          </NavLink>
        </li>
        <li className="nav-add-score">
          <NavLink to="/add_score" exact={true} activeClassName="active">
            <div className="text">
              Add a Score
            </div>
          </NavLink>
        </li>
        <li>
          <LogoutButton setAuthenticated={setAuthenticated} />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;