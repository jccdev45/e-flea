import React, { Component } from "react";
import { getItemById, getUserById } from "../../services/items";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import "./styles/Item.css";

export default class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: null,
      user: null

    };
  }

  async componentDidMount() {
    try {
      const resp = await getItemById(this.props.match.params.id);
      this.setState({ item: resp });
    
      const resp2 = await getUserById(this.state.item.userId);
      this.setState({ user: resp2 })
    } catch (error) {
      console.error(error);
    
    }
  }

  render() {
    
    const { item, user } = this.state;
    console.log(item)
    console.log(user)
    // const priceToMoney = item.price;
    // priceToMoney.toDecimal();
    // console.log(item.price);

    if (!item || !user) {
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
              <div className='sellerinfo'>
                Seller: <Link to={`/users/${user.id}`} user={user}>{user.username}</Link>
                <br/>
                Contact: {user.email}
              </div>
              <h2 className='price'>${item.price.toFixed(2)}</h2>
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
