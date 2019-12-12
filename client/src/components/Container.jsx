import React, { Component } from "react";
import { getItems } from "../services/items";
// import Nav from "../components/shared/Nav";
import Routes from "../routes";
import Nav from "./shared/Nav"

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      items: []
    };
  }

  async componentDidMount() {
    try {
      const items = await getItems();
      this.setState({ items });
    } catch (error) {
      console.error(error);
    }
  }

  addItem = item => this.setState({ items: [...this.state.items, item] });

  setUser = user => this.setState({ user });

  clearUser = () => this.setState({ user: null });

  render() {
    const { user, items } = this.state;
    return (
      <>
        <Nav user={user} />
        <main>
          <Routes
            items={items}
            user={user}
            setUser={this.setUser}
            addItem={this.addItem}
            clearUser={this.clearUser}
          />
        </main>
      </>
    );
  }
}
