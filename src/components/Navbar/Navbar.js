import React from 'react'
import './navbar.css';

function Navbar() {
    return (
        <div>
            <nav>
                <a id="logo" href="#">TodoList</a>
                <a href="#">Main</a>
                <a href="#">About</a>
            </nav>
        </div>
    );
}

export default Navbar;