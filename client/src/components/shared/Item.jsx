import React, { Component } from "react";
import { getItemById } from "../../services/items";
import Layout from "./Layout";

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
      // console.log(resp.name);
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
        <h1>{item.name}</h1>
      </Layout>
    );
  }
}