import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../screens/Home";
import Register from "../screens/Register"

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
      render={props => <Home {...props} items={items} user={user} />}
    />
    <Route
      exact
      path="/sign-up"
      render={props => <Register {...props} items={items} user={user}/>}
    />
  </Switch>
);

export default Routes;
