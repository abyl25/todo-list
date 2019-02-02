import React, { Component } from 'react'
import '../App.css';

class TodoItem extends Component {

    render() {
        const { id, title } = this.props.item;
        return (
            <p className="item">{title} 
                <button className="delete-btn" onClick={this.props.deleteItem.bind(this, id)}>X</button> 
            </p>          
        );
    }
}

export default TodoItem;