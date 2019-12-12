import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../screens/Home";
import Item from "../components/shared/Item";
import About from "../screens/About";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Profile from "../screens/Profile";
import SignOut from "../screens/SignOut";

const Routes = ({ user, items, setUser, clearUser }) => (
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
     <Route
      exact
      path="/users/:id"
      user={user}
      render={props => <Profile {...props} />}
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
      path="/sign-out"
      user={user}
      render={props => <SignOut {...props} clearUser={clearUser} />}
      />
  </Switch>
);

export default Routes;
