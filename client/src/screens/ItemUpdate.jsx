import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { getItemById, updateItem } from "../services/items";
import ItemForm from "../components/shared/ItemForm";

class ItemUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: {
        name: "",
        description: "",
        category: "",
        location: "",
        price: 0,
        photos: ""
      },
      updated: false
    };
  }

  async componentDidMount() {
    try {
      const item = await getItemById(this.props.match.params.id);
      this.setState({ item });
    } catch (err) {
      console.error(err);
    }
  }

  handleChange = event => {
    // parseInt(event.target.value);
    const updatedField = { [event.target.name]: event.target.value };
    const editedItem = Object.assign(this.state.item, updatedField);
    this.setState({ item: editedItem });
    // parseInt(this.state.item.price);
  };

  handleSubmit = event => {
    event.preventDefault();

    updateItem(this.props.match.params.id, this.state.item)
      .then(res =>
        res.status === 201 ? this.setState({ updated: true }) : null
      )
      .catch(console.error);
  };

  render() {
    const { item, updated } = this.state;
    const { handleChange, handleSubmit } = this;

    if (updated) {
      return <Redirect to={`/items/${this.props.match.params.id}`} />;
    }

    return (
      <>
        <ItemForm
          item={item}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          history={this.props.history}
          cancelPath={`/items/${this.props.match.params.id}`}
        />
      </>
    );
  }
}

export default ItemUpdate;
