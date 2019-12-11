import React, { Component } from "react";
import { getItemById } from "../../services/items";
import Layout from "./Layout";
import './styles/Item.css'

export default class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: null
    };
  }

  async componentDidMount() {
    try {
      const resp = await getItemById(this.props.match.params.id);
      this.setState({ item: resp });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { item } = this.state;

    if (!item) {
      return <p>Loading</p>;
    }

    return (
      <Layout>
        <div className="item-page">
          {/* COLUMN */}
          <h1>{item.name}</h1>
          {/* ROW */}
          <div>
            {/* COLUMN */}
            <div>
              <div>
                Seller: {item.userId} {/* user.username */} {/* user.email */}
              </div>
              <div>{item.price}</div>
            </div>
            {/* COLUMN */}
            <div>
              {item.location}{" "}
              <img src={item.photos} alt={item.name} width="200px" />
            </div>
          </div>
          <p>{item.description}</p>
        </div>
      </Layout>
    );
  }
}