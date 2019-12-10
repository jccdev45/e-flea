import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: null,
      deleted: false
    };
  }

  render() {
    return (
      <div className="itemCard">
        <NavLink to={`/items/${this.props.id}`}>
          <img src={this.props.photos} width="200px" alt={this.props.name} />
        </NavLink>
      </div>
    );
  }
}
