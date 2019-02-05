import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';

class Login extends Component {
    state = {
        email: '',
        password: ''
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.loginUser(user);
        
        this.setState({
            email: '',
            password: ''
        });
    }

    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="email" name="email" autoComplete="off"
                        value={this.state.email} onChange={this.onChange}/>
                    <input type="text" placeholder="password" name="password" autoComplete="off"
                        value={this.state.password} onChange={this.onChange}/>
                    <input type="submit" value="log in"/>
                </form>
            </div>
        )
    }
}

// mapStateToProps

const mapDispatchToProps = {
    loginUser: loginUser
}

export default connect(null, mapDispatchToProps)(Login);