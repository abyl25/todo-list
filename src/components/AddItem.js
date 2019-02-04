import React, { Component } from 'react'
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
        const newItem = {
            title: this.state.title
        };
        // this.props.addItem(this.state.title);
        this.props.addItemAction(newItem);
        this.setState({ 
            title: '' 
        });
    }

    render() {
        // const { editItemId, editItemTitle } = this.props;
        // console.log("edit Item Title: " + editItemTitle);
        // if (editItemTitle !== '') {
        //     this.addInput.value = editItemTitle;
        // }
        // const value = this.state.title || editItemTitle;
        // console.log("value: " + value);
        
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

export default AddItem;