import React, { Component } from 'react'
import { signInUser } from '../services/auth'




class Login extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: '',
            error: false,
            errorMsg: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
            error: false,
            errorMsg: ''
        })
    }


    onSignIn = event => {
        event.preventDefault()

        const { history, setUser } = this.props


        signInUser(this.state)
            .then(res => setUser(res.user))
            .then(() => history.push('/'))
            .catch(error => {
                console.error(error)
                this.setState({
                    error: true,
                    errorMsg: 'Sign in Failed',
                    username: '',
                    password: ''
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
            return <button type="submit">Log In</button>
        }
    }

    render() {
        const { username, password } = this.state


        return (
            <div className='row'>
                <div className='form-container'>
                    <h3>Log In</h3>
                    <form onSubmit={this.onSignIn}>
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
                            name="password"
                            value={password}
                            type="password"
                            placeholder="Password"
                            onChange={this.handleChange}
                        />
                        {this.renderError}
                    </form>
                </div>
            </div>
        )
    }


}

export default Login
