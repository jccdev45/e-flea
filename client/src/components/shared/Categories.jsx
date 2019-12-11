import React from 'react';

class Categories extends React.Component {
    constructor() {
        super()
        this.state = {
            value: 'All'
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
   handleChange(e) {
       this.setState({value: e.target.value})
   }
   handleSubmit(e) {
       e.preventDefault()
   }

   render() {
       return(
           <form onSubmit={this.handleSubmit}>
               <label>
                   Select a category
                   <select value={this.state.value} onChange={this.handleChange}>
                   <option value = 'all'>All</option>
                   <option value = 'art+antiques'>Art and Antiques</option>
                   <option value = 'auto-cars-motorcycles'>Auto - Cars, Motorcycles</option>
                   <option value = 'auto-parts'>Auto - Parts</option>
                   <option value = 'bikes-ebikes-scooters'>Bikes, E-Bikes, Scooters</option>
                   <option value = 'books'>Books, Magazines, Comics</option>
                   <option value = 'cell-tablets'>Cell Phones, Tablets, Mobile</option>
                   <option value = 'clothing-shoes'>Clothes and Shoes</option>
                   <option value = 'electronics'>Electronics, Computers, Appliances</option>
                   <option value = 'free'>Free</option>
                   <option value = 'household-pets-garden'>Household, Pets, Garden</option>
                   <option value = 'musical-instruments'>Musical Instruments</option>
                   <option value = 'sports-exercise'>Sports and Exercise</option>
                   </select>
               </label>
           </form>
       )
   }
}

export default Categories