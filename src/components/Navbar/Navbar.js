import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../actions/authActions';
import './navbar.css';

function Navbar(props) {
    let isAuthenticated = false;
    if (props.auth.isAuthenticated) {
        isAuthenticated = true;
    }
    console.log("isAuthenticated: " + isAuthenticated);

    const onBarClick = () => {
        const anchors = document.querySelectorAll("a");
        // console.log(anchors);
        anchors.forEach(a => a.classList.toggle('navbar-toggle'));
    }
    
    return (
        <div>           
            <nav> 
                <li><Link id="logo" to="/" >TodoList</Link></li>
                {/* <i class="fas fa-bars"></i> */}
                <i className="bar-icon fa fa-bars fa-2x" onClick={onBarClick}></i>
                <li><Link to="/me" >Dashboard</Link></li>
                <li><Link to="/about" >About</Link></li>
                <div className="auth-link">
                    {isAuthenticated ? (<li><Link to="#" onClick={props.logoutUser}>Log out</Link></li>) : (        
                        <React.Fragment>
                            <li><Link to="/login" >Log in</Link> </li>
                            <li><Link to="/signup" className="signup-link">Sign up</Link> </li> 
                        </React.Fragment>
                    )}  
                </div>
            </nav>
        </div>
    );
}

const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = {
    logoutUser: logoutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);