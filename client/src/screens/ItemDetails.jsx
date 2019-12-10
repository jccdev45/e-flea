// import React, { Component } from "react";
// import Layout from "../components/shared/Layout";
// import { getItemById } from "../services/items";

// class ItemDetails extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       item: null
//     };
//   }

//   async componentDidMount() {
//     try {
//       const item = await getItemById(this.props.match.params.id);
//       this.setState({ item });
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   render() {
//     const { item } = this.state;

//     return (
//       <Layout>
//         <p>{console.log(item)}</p>
//       </Layout>
//     );
//   }
// }

// export default ItemDetails;
