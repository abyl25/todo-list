import React from 'react'
import './navbar.css';

function Navbar() {
    
    return (
        <div>           
            <nav> 
                {/* eslint-disable  */}
                <a id="logo" href="#">TodoList</a>
                <a href="#">Main</a>
                <a href="#">About</a>
                {/* eslint-enable  */}
            </nav>
        </div>
    );
}

export default Navbar;