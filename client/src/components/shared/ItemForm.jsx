import React from "react";
import "./styles/ItemForm.css";

const ItemForm = ({
  item,
  user,
  handleSubmit,
  handleChange,
  cancelPath,
  history
}) => (
  <div className="form-container">
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Title</label>
      <span className="row">
        <textarea
          value={item.name}
          name="name"
          required
          onChange={handleChange}
        />
        <p className="form-input-desc">
          This will be the heading of your item's page. 50 characters max.
        </p>
      </span>
      <span className="row">
        <select
          className="categoryselect"
          name="category"
          // value={this.state.value}
          onChange={handleChange}
        >
          <option value="">Select a Category</option>
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
      </span>
      <label htmlFor="location">Location</label>
      <span className="row">
        <textarea
          value={item.location}
          name="location"
          required
          onChange={handleChange}
        />
        <p className="form-input-desc">
          Let buyers know where the item is located-60 characters max
        </p>
      </span>
      <label htmlFor="description">Description</label>
      <span className="row">
        <textarea
          value={item.description}
          name="description"
          required
          onChange={handleChange}
        />
        <p className="form-input-desc">
          Include all the pertinent details to help buyers make a decision about
          this item. ex. Condition, imperfections, year made, color, etc. -500
          characters max.
        </p>
      </span>
      <label htmlFor="photo">Images</label>
      <span className="row">
        <textarea
          value={item.photo}
          name="photos"
          required
          onChange={handleChange}
        />
        <p className="form-input-desc">
          Use an image hosting site to upload your images and post the links
          here. Separate them by a comma and space, ending in the file format.
          ex. http://i.imgur.com/4vjI1bP.jpg, https://i.imgur.com/6e5ts2a.jpg
        </p>
      </span>
      <label htmlFor="price">Price(USD)</label>
      <span className="row">
        <input
          type="number"
          value={item.price}
          name="price"
          required
          onChange={handleChange}
        />
        <p className="form-input-desc">Provide an asking price for buyers</p>
      </span>
      <input type="hidden" name="userId" value={user} />
      <button type="submit">Submit</button>
      <button className="danger" onClick={() => history.push(cancelPath)}>
        Cancel
      </button>
    </form>
  </div>
);

export default ItemForm;
