import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import '../App.css';

class AddItem extends Component {
    state = {
        title: ''
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const title = this.state.title.trim();
        if (title) {
            const newItem = {
                title: title
            };
            
            this.props.addItem(newItem);
            this.setState({ 
                title: '' 
            });
        }
    }

    render() {    
        return (
            <div>
                <h2 className="title">Add Item</h2>
                <form className="add-item-form" onSubmit={this.onSubmit}>
                    <input type="input" placeholder="Add item" autoComplete="off" 
                        className="add-item-input" name="title" value={this.state.title}
                        ref={(a) => this.addInput = a} onChange={this.onChange}/>  
                    <button type="submit" className="add-btn">Add</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = {
    addItem: addItem
};

export default connect(null, mapDispatchToProps)(AddItem);