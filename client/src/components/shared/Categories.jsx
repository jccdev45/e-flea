import React from "react";
import api from '../../services/apiConfig'



class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      categories: []
    };
  }




  componentDidMount() {
    fetch('https://http://localhost:3000/api/items')
      .then(response => { return response.json()})
      .then(item => this.setState({categories:item.items.category}))
      
  }
  


  handleChange = e => {
    this.setState({ value: e.target.value });
    this.state.categories.filter(category => {
      return category
    })
    
  };
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="category">Select a category</label>
        <select
          className="categoryselect"
          name="category"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <option value="all">All</option>
          <option value="Art & Antiques">Art and Antiques</option>
          <option value="Auto - Cars, Motorcycles">
            Auto - Cars, Motorcycles
          </option>
          <option value="Cell Phones, Tablets, Smart Mobile Devices">Cell Phones, Tablets, Mobile</option>
          <option value="Clothing & Shoes">Clothes and Shoes</option>
          <option value="Electronics, Computers, Appliances">
            Electronics, Computers, Appliances
          </option>
          <option value="Household, Pets, Garden">Household, Pets, Garden</option>
          <option value="Musical Instruments">Musical Instruments</option>
        </select>
      </form>
    );
  }
}

export default Categories;
