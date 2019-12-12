import React, { Component } from "react";
import { getUserById } from "../services/items";
import Layout from "../components/shared/Layout"

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  async componentDidMount() {
    try {
      const resp = await getUserById(this.props.match.params.id);
      this.setState({ user: resp });
      console.log(resp.username);
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    const { user } = this.state;
    console.log(user)
    if (!user) {
      return <p>Loading</p>;
    }
    return (
      <Layout>
        <h1>{user.username}</h1>
        <h3>{user.email}</h3>
        <img src={user.photo} className='user-photo' width='200px'alt='user' />
      </Layout>
    );
  }
}
export default Profile;
