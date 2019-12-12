import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Nav.css";

const authenticatedNav = (
    <div className = 'loggedin-img'>
      <img src='' alt='userimg'/>
    </div>
  )

const unauthenticatedNav = (
  <div className="nav">
    <div className="nav-signin">
      <NavLink className="nav" activeClassName="active" to="/sign-in">
        Log In
      </NavLink>
    </div>
    <div className="nav-signup">
      <NavLink className="nav" activeClassName="active" to="/sign-up">
        Sign Up
      </NavLink>
    </div>
  </div>
);

const alwaysNav = (
  <div className="nav">
    <div className="nav-home">
      <NavLink className="nav navlink-home" to="/" activeClassName="">
        E•Flea
      </NavLink>
    </div>
    <div className="nav-about">
      <NavLink className="nav" activeClassName="active" to="/about">
        About
      </NavLink>
    </div>
    <div className="nav-search">
      <NavLink className="nav" to="/search">
        Search
      </NavLink>
    </div>
    <div className="nav-sellnow">
      <NavLink className="nav" activeClassName="active" to="/create-item">
        Sell Now
      </NavLink>

      <div className = 'sign-out'>
        <NavLink className='nav' to="/sign-out">
          Sign Out
        </NavLink>
      </div>
    </div>
  </div>
);

export default function Nav() {
  return (
    <div className="header">
      <div className="nav-container">
        {alwaysNav}
        {unauthenticatedNav}
      </div>
    </div>
  );
}

