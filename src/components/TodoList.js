import React, { Component } from 'react'
import TodoItem from './TodoItem';
import '../App.css';

class TodoList extends Component {
    render() {
        const items = this.props.items;
        return (
            <div className="items">
                {items.map(item => <TodoItem key={item.id} item={item} deleteItem={this.props.deleteItem}/>)}
            </div>
        );
    }
}

export default TodoList;