import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/shared/Layout";
// import Item from "../components/shared/Item";

export default function Home(props) {
  const { items } = props;

  const itemsForSale = () => {
    if (items) {
      return items.map(item => (
        <div key={item.id} className="item">
          <Link to={`/items/${item.id}`}>
            <img src={item.photos} width="200px" alt={item.name} />
            {/* <Item
              id={item.id}
              name={item.name}
              price={item.price}
              category={item.category}
              description={item.description}
              location={item.location}
              photos={item.photos}
              userId={item.userId}
              createdAt={item.createdAt}
              updatedAt={item.updatedAt}
            /> */}
          </Link>
        </div>
      ));
    } else {
      return null;
    }
  };

  return (
    <Layout>
      <div className="items">{itemsForSale()}</div>
    </Layout>
  );
}
