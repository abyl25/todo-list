import React, { Component } from 'react'
import AddItem from './AddItem';
import TodoList from './TodoList';

class Dashboard extends Component {
    render() {
        return (
            <div className="container">
                {/* <h3>Welcome to Dashboard</h3> */}
                <AddItem/>
                <TodoList/>
            </div>
        )
    }
}

export default Dashboard;