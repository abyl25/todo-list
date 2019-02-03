import React, { Component } from 'react'

class EditItem extends Component {
    render() {
        const { id, title } = this.props;
        console.log('edit Item Title: ' + title);

        return (
            <input type="input" className="add-item-input" value={title} /> 
        );             
    }
}

export default EditItem;