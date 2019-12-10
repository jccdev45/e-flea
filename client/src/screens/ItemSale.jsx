import React, { Component } from "react";
import Layout from "../components/shared/Layout";
import ItemForm from "../components/shared/ItemForm";
import { createItem } from "../services/items";

export default class ItemSale extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: {
        title: "",
        location: "",
        description: "",
        images: [],
        price: null
      },
      newItem: null
    };
  }

  handleChange = e => {
    const updated = { [e.target.name]: e.target.value };
    const edited = Object.assign(this.state.item, updated);

    this.setState({ item: edited });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addItem(this.state.item);
    createItem(this.state.item)
      .then(res =>
        res.status === 201
          ? this.setState({ createdItem: res.data.item })
          : null
      )
      .catch(console.error);
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { createdItem, item } = this.state;

    if (createdItem) {
      return;
    }

    return (
      <Layout>
        <ItemForm
          item={item}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath="/"
        />
      </Layout>
    );
  }
}
