import React from 'react'

const ItemForm = ({
    item,
    handleSubmit,
    handleChange,
    cancelPath,
    history
}) => (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>

                <input

                    placeholder='Title'
                    value={item.name}
                    name='name'
                    required
                    onChange={handleChange}
                />
                <label htmlFor='name'>This will be the heading of your item's page. 50 characters max.</label>
                <input
                    placeholder='Location'
                    value={item.location}
                    name='location'
                    required
                    onChange={handleChange}
                />
                <label htmlFor='location'>Let buyers know where the item is located-60 characters max</label>
                <input
                    placeholder='Description'
                    value={item.description}
                    name='description'
                    required
                    onChange={handleChange}
                />
                <label htmlFor='description'>Include all the pertinent details to help buyers make a decision about this item. ex. Condition, imperfections, year made, color, etc. -500 characters max.</label>
                <input
                    placeholder='Images'
                    value={item.photo}
                    name='photo'
                    required
                    onChange={handleChange}
                />
                <label htmlFor='photo'>Use an image hosting site to upload your images and post the links here. Separate them by a comma and space, ending in the file format. ex: http://i.imgur.com/4vjttbp.jpg</label>
                <input
                    placeholder='Price(USD)'
                    value={item.price}
                    name='price'
                    required
                    onChange={handleChange}
                />
                <label htmlFor='price'>Provide an asking price for buyers</label>P
    
			<button type='submit'>Submit</button>
                <button className='danger' onClick={() => history.push(cancelPath)}>
                    Cancel
			</button>
            </form>
        </div>
    )

export default ItemForm