import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Nav.css";

const authenticatedNav = (
  <div className="row sign-out">
    <NavLink className="nav" to="/sign-out">
      Sign Out
    </NavLink>
  </div>
);

const unauthenticatedNav = (
  <div className="nav unauth">
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
  <>
    <NavLink className="nav" activeClassName="active" to="/about">
      About
    </NavLink>
    <NavLink className="nav" to="/search">
      Search
    </NavLink>
    <NavLink className="nav" activeClassName="active" to="/create-item">
      Sell
    </NavLink>
  </>
);

const Nav = ({ user }) => (
  <div className="column header">
    <div className="row nav-home">
      <NavLink className="nav navlink-home" to="/" activeClassName="">
        E•Flea
      </NavLink>
      {/* <div className="column user-info"> */}
        {user && (
          <img className="usrpic" src={user.photo} alt="usrpic" />
        )}
        {user ? authenticatedNav : unauthenticatedNav}
      {/* </div> */}
    </div>
    <div className="row nav-container">{alwaysNav}</div>
  </div>
);
export default Nav;
