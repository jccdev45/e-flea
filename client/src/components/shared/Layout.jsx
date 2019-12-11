import React from "react";

import Nav from "./Nav";
import Footer from "./Footer";
const Layout = props => (
  <div className="layout">
    <Nav />

    <div className="main-content">{props.children}</div>

    <Footer />
  </div>
);

export default Layout;
