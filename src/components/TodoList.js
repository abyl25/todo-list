import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { getItems } from '../actions/itemActions';
import '../App.css';

class TodoList extends Component {
    componentDidMount() {
        this.props.getItems();
    }

    render() {
        const { items } = this.props.item;
        return (
            <div className="items">
                {items.map(item => <TodoItem key={item._id} item={item} />)}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    item: state.item
});

const mapDispatchToProps = { 
    getItems: getItems
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);