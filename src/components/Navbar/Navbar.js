import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar(props) {
    let isAuthenticated = false;
    if (props.auth.isAuthenticated) {
        isAuthenticated = true;
    }
    console.log("isAuthenticated: " + isAuthenticated);

    return (
        <div>           
            <nav> 
                {/* eslint-disable  */}
                <Link id="logo" to="/" >TodoList</Link>
                <Link to="/me" >Dashboard</Link> 
                <Link to="/about" >About</Link>
                {isAuthenticated ? (<Link to="/logout" >Log out</Link>) : (        
                    <React.Fragment>
                        <Link to="/login" >Log in</Link> 
                        <Link to="/signup" >Sign up</Link> 
                    </React.Fragment>
                )}  
                {/* eslint-enable  */}
            </nav>
        </div>
    );
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Navbar);