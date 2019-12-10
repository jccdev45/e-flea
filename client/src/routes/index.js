import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../screens/Home";
import Item from '../components/shared/Item'

const Routes = ({ user, items }) => (
  <Switch>
    <Route
      exact
      path="/"
      render={props => <Home {...props} items={items} user={user} />}
    />
    <Route
      exact
      path="/items/:id"
      user={user}
      render={props => <Item {...props} />}
    />
  </Switch>
);

export default Routes;
