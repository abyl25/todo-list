import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    
    return (
        <div>           
            <nav> 
                {/* eslint-disable  */}
                <Link id="logo" to="/" >TodoList</Link>
                <Link to="/" >Main</Link>
                <Link to="/about" >About</Link>              
                <Link to="/login" >Log in</Link> 
                <Link to="/signup" >Sign up</Link> 
                {/* eslint-enable  */}
            </nav>
        </div>
    );
}

export default Navbar;