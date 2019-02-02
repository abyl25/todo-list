import React, { Component } from 'react'
import '../App.css';

class AddItem extends Component {
    state = {
        title: ''
    };

    onChange = (e) => {
        console.log('on change');
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log('on submit');
        this.props.addItem(this.state.title);
        this.setState({ 
            title: '' 
        });
    }

    render() {
        return (
            <div>
                <h2 className="title">Add Item</h2>
                <form className="add-item-form" onSubmit={this.onSubmit}>
                    <input type="input" placeholder="Add item" autoComplete="off" className="add-item-input" 
                        name="title" value={this.state.title} onChange={this.onChange}/>  
                    <button type="submit" className="add-btn">Add</button>
                </form>
            </div>
        )
    }
}

export default AddItem;