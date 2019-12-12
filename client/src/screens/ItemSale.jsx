import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import Layout from "../components/shared/Layout";
import ItemForm from "../components/shared/ItemForm";
import { createItem } from "../services/items";

export default class ItemSale extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: {
        name: "",
        location: "",
        description: "",
        photo: '',
        price: null,
        userId: null
      },
      newItem: null
    };
  }

  componentDidMount() {
    const item = {...this.state.item}
    item.userId = this.props.user.id;
    this.setState({ item })
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
          ? this.setState({ newItem: res.data.item })
          : null
      )
      .catch(console.error);
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { createdItem, item } = this.state;
    // console.log(this.props)

    if (createdItem) {
      return <Redirect to={'/'} />;
    }

    return (
      <Layout>
        <ItemForm
          item={item}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          user={this.state.userId}
          cancelPath="/"
        />
      </Layout>
    );
  }
}
