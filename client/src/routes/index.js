import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../screens/Home";
import Homeless from "../screens/Homeless";
import Login from "../screens/Login";
import Register from "../screens/Register";

const Routes = ({ user, setUser, clearUser, items, addItem, getItems }) => {
  <Switch>
    <Route
      exact
      path="/"
      render={props =>
        user ? <Home /> : <Homeless {...props} items={items} />
      }
    />
    <Route
      path="/login"
      render={props => <Login {...props} setUser={setUser} />}
    />
    <Route
      path="/register"
      render={props => <Register {...props} setUser={setUser} />}
    />
    <Route
      exact
      path="/sign-out"
      render={props => <SignOut {...props} clearUser={clearUser} user={user} />}
    />
  </Switch>;
};

export default Routes;