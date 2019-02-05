import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteItem } from '../actions/itemActions';
import '../App.css';

class TodoItem extends Component {

    render() {
        const { _id, title } = this.props.item;
        return (
            <p className="item">{title} 
                <button className="delete-btn" onClick={this.props.deleteItem.bind(this, _id)}>Delete</button> 
            </p>          
        );
    }
}

const mapDispatchToProps = { 
    deleteItem: deleteItem 
};

export default connect(null, mapDispatchToProps)(TodoItem);