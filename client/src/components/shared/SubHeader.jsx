import React from "react";
import Categories from "./Categories";
import "./styles/SubHeader.css";
const SubHeader = () => (
  <div className="subheader">
    <div className="subheader-text">
      <p>Buying at a flea market is easy,</p>
      <p>Buying at E•FLEA is easier.</p>
    </div>
    <div className="categories">
      <Categories />
    </div>
  </div>
);

export default SubHeader;
