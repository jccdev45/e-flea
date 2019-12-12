import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Nav.css";

const authenticatedNav = (
  <div className='row sign-out'>
    <NavLink className='nav' to="/sign-out">
      Sign Out
    </NavLink>
  </div>
);

const unauthenticatedNav = (
  <div className="nav">
    <div className="nav-signin row">
      <NavLink className="nav" activeClassName="active" to="/sign-in">
        Log In
      </NavLink>
      <NavLink className="nav" activeClassName="active" to="/sign-up">
        Sign Up
      </NavLink>
    </div>
  </div>
);

const alwaysNav = (
  <div className="row alwaysnav">
      <NavLink className="nav" activeClassName="active" to="/about">
        About
      </NavLink>
      <NavLink className="nav" to="/search">
        Search
      </NavLink>
      <NavLink className="nav" activeClassName="active" to="/create-item">
        Sell
      </NavLink>
  </div>
);

const Nav = ({ user }) => (
  <div className="header">
    <div className="nav-home">
      <NavLink className="nav navlink-home" to="/" activeClassName="">
        E•Flea
      </NavLink>
      {user && <img className='usrpic' src={user.photo} width='75px'alt='usrpic' />}
    </div>
    <div className="column nav-container">
      {alwaysNav}
      {user ? authenticatedNav : unauthenticatedNav}
    </div>
  </div>
);
export default Nav;
