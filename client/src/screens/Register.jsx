import React, { Component } from 'react';
import { signUp, signInUser } from '../services/auth';
// import { setUser } from '../components/Container';

import { api } from '../services/apiConfig.js'


class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            photo: '',
            passwordConfirmation: '',
            error: false,
            errorMsg: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value ,
            error: false,
            errorMsg: ''
        })

    }
    // handleSubmit = (event) => {
    //     event.preventDefault()
    //     const { username, firstName, lastName, email, password, photo } = this.state
    //     const data = {
    //         username,
    //         password,
    //         firstName,
    //         lastName,
    //         email,
    //         photo
    //     }

//         api.post('/users', data)
//         .then((response) => response.status === 201 ? this.props.history.push('/') : null) 
//         .catch(() => this.setState({ errorMsg: 'There was an error' }))
// }

    onSignUp = (e) => {
        e.preventDefault()
        console.log('YOOOOOOOOO', this.state)
        const { history, setUser } = this.props 

        signUp(this.state)
            .then(() => signInUser(this.state))
            .then(res => setUser(res.user))
            .then(() => history.push('/'))
            .catch(error => {
                console.error(error)
                this.setState({
                    email: '',
                    password: '',
                    passwordConfirmation: '',
                    error: true,
                    errorMsg: 'SignUp Failed'
                })
            })
    }
    renderError = () => {
        const toggleForm = this.state.error ? 'danger' : ''
        if (this.state.error) {
          return (
            <button type="submit" className={toggleForm}>
              {this.state.errorMsg}
            </button>
          )
        } else {
          return <button type="submit">Register</button>
        }
      }

    render() {
        const { email, username, password, passwordConfirmation, firstName, lastName, photo} = this.state 

        return (
            <div className="row">
                <div className="form-container">
                    <h3>Sign Up</h3>
                    <form onSubmit={this.onSignUp}>
                        <input
                            required
                            type="text"
                            name="username"
                            defaultValue={username}
                            placeholder="Username"
                            onChange={this.handleChange}
                        />
                        <input
                            required
                            type="password"
                            name="password"
                            defaultValue={password}
                            placeholder="Password"
                            onChange={this.handleChange}
                        />
                        <input
                            required
                            type="text"
                            name="firstName"
                            defaultValue={firstName}
                            placeholder="First Name"
                            onChange={this.handleChange}
                        />
                        <input
                            required
                            type="text"
                            name="lastName"
                            defaultValue={lastName}
                            placeholder="Last Name"
                            onChange={this.handleChange}
                        />
                        <input
                            required
                            type="text"
                            name="passwordConfirmation"
                            defaultValue={passwordConfirmation}
                            placeholder="Confirm Password"
                            onChange={this.handleChange}
                        />
                        <input
                            required
                            type="text"
                            name="email"
                            defaultValue={email}
                            placeholder="Email"
                            onChange={this.handleChange}
                        />
                        <input
                            required
                            type="text"
                            name="photo"
                            defaultValue={photo}
                            placeholder="Profile Picture URL"
                            onChange={this.handleChange}
                        />
                        {/* <button title='Submit' className='RegisterSubmitAcc'  onSubmit={this.handleSubmit} /> */}
                        {this.renderError()}
                    </form>

                </div>
            </div>
        )
    }
}

export default Register
