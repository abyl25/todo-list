import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';

class Login extends Component {
    state = {
        email: '',
        password: ''
    };

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/me');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/me');
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        // const emailPattern = "^\\S+[A-Za-z]+@.$";
        // const result = str.match(emailPattern);

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
            <div className="login">
                <div className="login-form">
                    <h2 className="login-header">Login Form</h2>
                    <form onSubmit={this.onSubmit} >
                        <input type="text" className="login-input" placeholder="Email" name="email" autoComplete="off"
                            value={this.state.email} onChange={this.onChange} />
                        <input type="text" className="login-input" placeholder="Password" name="password" autoComplete="off"
                            value={this.state.password} onChange={this.onChange} />
                        <input type="submit" className="login-btn" value="Log in"/>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = {
    loginUser: loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
