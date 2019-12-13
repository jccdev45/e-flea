import React, { Component } from "react";
import { getItemById, getUserById, deleteItem } from "../../services/items";
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
      this.setState({ user: resp2 });
    } catch (error) {
      console.error(error);
    }
  }

  destroy = () => {
    deleteItem(this.state.item.id)
      .then(() => this.setState({ deleted: true }))
      .catch(console.error);
  };

  render() {
    const { item, user } = this.state;

    if (!item || !user) {
      return <p>Loading</p>;
    }

    return (
      <Layout>
        <div className="column item-page">
          <h1>{item.name}</h1>
          <h2 className="price">${item.price.toFixed(2)}</h2>
          <h3>{item.location}</h3>
          <hr />
          <div className="row seller-info">
            <span className="column">
              <span>Seller: </span>
              <Link to={`/users/${user.id}`} user={user}>
                {user.username}
              </Link>
            </span>
            <span className="column">
              <span>Contact: </span>
              <a href={`mailto:${user.email}`}>{user.email}</a>
            </span>
          </div>
          <div className="row item-detail-photos">
            <img src={item.photos} alt={item.name} />
          </div>
          <h2>Description:</h2>
          <p>{item.description}</p>
        </div>
        {!this.props.user ? null : this.props.user.id === item.userId ? (
          <div className="row update-delete">
            {/* <button>Update Item</button> */}
            <Link to={`/items/${item.id}/edit`}>Update Item</Link>
            <button>Delete Item</button>
          </div>
        ) : null}
      </Layout>
    );
  }
}
