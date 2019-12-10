import React from "react";

import Nav from "./Nav";
import Footer from "./Footer"
const Layout = props => (
  <div className="layout">
    <Nav />
    <main>{props.children}</main>
    <Footer />
  </div>
);

export default Layout;
