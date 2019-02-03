import React, { Component } from 'react'
import '../App.css';

class AddItem extends Component {
    state = {
        title: ''
    };

    onChange = (e) => {
        // console.log('on change');
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        // console.log('on submit');
        e.preventDefault();
        this.props.addItem(this.state.title);
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
                    <input type="input" placeholder="Add item" autoComplete="off" className="add-item-input" name="title" 
                      ref={(a) => this.addInput = a} value={this.state.title} onChange={this.onChange}/>  
                    <button type="submit" className="add-btn">Add</button>
                </form>
            </div>
        );
    }
}

export default AddItem;