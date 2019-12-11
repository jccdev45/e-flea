import React, { Component } from "react";
import { getItemById } from "../../services/items";
import Layout from "./Layout";
import "./styles/Item.css";

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
    // const priceToMoney = item.price;
    // priceToMoney.toDecimal();
    // console.log(item.price);
    

    if (!item) {
      return <p>Loading</p>;
    }

    return (
      <Layout>
        <div className="column item-page">
          {/* COLUMN */}
          <h1>{item.name}</h1>
          {/* ROW */}
          <div className="row item-info">
            {/* COLUMN */}
            <div className="column">
              <div>
                Seller: {item.userId} username {/* user.username */} email{" "}
                {/* user.email */}
              </div>
              <h2>${item.price.toFixed(2)}</h2>
            </div>
            {/* COLUMN */}
            <div className="column">
              {item.location}{" "}
              <img src={item.photos} alt={item.name} width="200px" />
            </div>
          </div>
          <h2>Description:</h2>
          <p>{item.description}</p>
        </div>
      </Layout>
    );
  }
}