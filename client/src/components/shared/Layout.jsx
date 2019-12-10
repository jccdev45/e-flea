import React from "react";

import Nav from "./Nav";

const Layout = props => (
  <div className="layout">
    <Nav />
    <main>{props.children}</main>
  </div>
);

export default Layout;
