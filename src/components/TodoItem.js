import React, { Component } from 'react'
import '../App.css';

class TodoItem extends Component {

    render() {
        const { _id, title } = this.props.item;
        return (
            <p className="item">{title} 
                {/* <button className="edit-btn" onClick={this.props.editItem.bind(this, _id)}>Edit</button> */}
                <button className="delete-btn" onClick={this.props.deleteItemAction.bind(this, _id)}>Delete</button> 
            </p>          
        );
    }
}

export default TodoItem;