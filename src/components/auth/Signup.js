import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../../actions/authActions';

class Signup extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    };

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
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
        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        };

        this.props.signupUser(user, this.props.history);
        
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        });
    }


    render() {
        return (
            <div>
                <h2>Signup Page</h2>
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="First Name" name="firstName" autoComplete="off"
                        value={this.state.firstName} onChange={this.onChange}/>
                    <input type="text" placeholder="Last Name" name="lastName" autoComplete="off"
                        value={this.state.lastName} onChange={this.onChange}/>
                    <input type="text" placeholder="email" name="email" autoComplete="off"
                        value={this.state.email} onChange={this.onChange}/>
                    <input type="text" placeholder="password" name="password" autoComplete="off"
                        value={this.state.password} onChange={this.onChange}/>
                    <input type="submit" value="Sign up"/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = {
    signupUser: signupUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);