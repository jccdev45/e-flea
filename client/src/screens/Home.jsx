import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/shared/Layout";
import SubHeader from "../components/shared/SubHeader";

export default function Home(props) {
  const { items, user } = props;

  const itemsForSale = () => {
    if (items) {
      return items.map(item => (
        <div key={item.id} className="item">
          <Link to={`/items/${item.id}`} user={user}>
            <img src={item.photos} alt={item.name} />
          </Link>
        </div>
      ));
    } else {
      return null;
    }
  };

  return (
    <Layout>
      <SubHeader />
      <div className="items">{itemsForSale()}</div>
    </Layout>
  );
}
