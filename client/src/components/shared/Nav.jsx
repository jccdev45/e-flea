import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <div className="nav-home">
        <NavLink to="/">E-Flea</NavLink>
      </div>
      <div className="nav-always">
        <NavLink to=""></NavLink>
      </div>
      <div className="nav-auth">

      </div>
    </nav>
  );
}
