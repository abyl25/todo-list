import React, { Component } from 'react'
import TodoItem from './TodoItem';
import '../App.css';

class TodoList extends Component {
    render() {
        const items = this.props.items;
        return (
            <div className="items">
                {items.map(item => <TodoItem key={item._id} item={item} 
                    deleteItemAction={this.props.deleteItemAction}  
                    deleteItem={this.props.deleteItem} editItem={this.props.editItem}/>)}
            </div>
        );
    }
}

export default TodoList;