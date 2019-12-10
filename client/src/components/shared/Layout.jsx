import React from "react";

import Nav from "./Nav";

const Layout = props => (
  <div className="layout">
    <Nav />
    <div className="main-content">{props.children}</div>
  </div>
);

export default Layout;
