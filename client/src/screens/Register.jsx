import React, { Component } from "react";
import { signUp, signInUser } from "../services/auth";
import Layout from "../components/shared/Layout";

class Register extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      error: false,
      errorMsg: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      error: false,
      errorMsg: ""
    });
  };

  onSignUp = event => {
    event.preventDefault();

    const { history, setUser } = this.props;

    signUp(this.state)
      .then(() => signInUser(this.state))
      .then(res => setUser(res.user))
      .then(() => history.push("/"))
      .catch(error => {
        console.error(error);
        this.setState({
          email: "",
          password: "",
          passwordConfirmation: "",
          error: true,
          errorMsg: "SignUp Failed"
        });
      });
  };

  renderError = () => {
    const toggleForm = this.state.error ? "danger" : "";
    if (this.state.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {this.state.errorMsg}
        </button>
      );
    } else {
      return <button type="submit">Register</button>;
    }
  };

  render() {
    const { email, username, password, passwordConfirmation, url } = this.state;

    return (
      <Layout>
        <div className="row">
          <div className="column form-container">
            <h3>Sign Up</h3>
            <form onSubmit={this.onSignUp} className="column">
              <input
                required
                type="text"
                name="username"
                value={username}
                placeholder="Username"
                onChange={this.handleChange}
              />
              <input
                required
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={this.handleChange}
              />
              <input
                required
                type="password"
                name="passwordConfirmation"
                value={passwordConfirmation}
                placeholder="Confirm Password"
                onChange={this.handleChange}
              />
              <input
                required
                type="text"
                name="email"
                value={email}
                placeholder="Email"
                onChange={this.handleChange}
              />
              <input
                required
                type="text"
                name="ProfileUrl"
                value={url}
                placeholder="Profile Picture URL"
                onChange={this.handleChange}
              />
              {this.renderError()}
            </form>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Register;
