import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../screens/Home";
import Item from "../components/shared/Item";
import About from "../screens/About";
import Login from "../screens/Login";
import Register from "../screens/Register";
import ItemSale from "../screens/ItemSale";
import SignOut from "../screens/SignOut";
import ItemUpdate from "../screens/ItemUpdate";
import Profile from "../screens/Profile";

const Routes = ({ user, items, setUser, addItem, clearUser }) => (
  <Switch>
    <Route
      exact
      path="/"
      render={props => <Home {...props} items={items} user={user} />}
    />
    <Route
      exact
      path="/items/:id"
      render={props => <Item {...props} user={user} />}
    />
    <Route
      exact
      path="/users/:id"
      render={props => <Profile {...props} user={user} />}
    />
    <Route exact path="/about" component={About} />
    <Route
      exact
      path="/sign-in"
      render={props => <Login {...props} setUser={setUser} />}
    />
    <Route
      exact
      path="/sign-up"
      render={props => <Register {...props} setUser={setUser} />}
    />
    <Route
      exact
      path="/create-item"
      render={props => <ItemSale {...props} addItem={addItem} user={user} />}
    />
    <Route
      exact
      path="/sign-out"
      render={props => <SignOut {...props} clearUser={clearUser} user={user} />}
    />
    <Route
      exact
      path="/items/:id/edit"
      render={props => <ItemUpdate {...props} user={user} />}
    />
  </Switch>
);

export default Routes;
