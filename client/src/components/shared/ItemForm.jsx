import React from "react";
import "./styles/ItemForm.css";

const ItemForm = ({
  item,
  handleSubmit,
  handleChange,
  cancelPath,
  history
}) => (
  <div className="form-container">
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Title</label>
      <span className="row">
        <textarea value={item.name} name="name" required onChange={handleChange} />
        <p className="form-input-desc">
          This will be the heading of your item's page. 50 characters max.
        </p>
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
          name="photo"
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

      <button type="submit">Submit</button>
      <button className="danger" onClick={() => history.push(cancelPath)}>
        Cancel
      </button>
    </form>
  </div>
);

export default ItemForm;
