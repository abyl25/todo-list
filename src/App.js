import React, { Component } from 'react';
import AddItem from './components/AddItem';
import EditItem from './components/EditItem';
import Navbar from './components/Navbar/Navbar';
import TodoList from './components/TodoList';
import uuid from 'uuid';
import './App.css';

class App extends Component {
  state = {
    edit: false,
    editingItemId: '',
    editingItemTitle: '',
    items: [     
      {
        id: uuid(),
        title: 'study for an exam'
      }
    ]
  };

  addItem = (title) => {
    console.log('addItem title: ' + title);
    let newItem = {
      id: uuid(),
      title: title
    }; 
    this.setState((state) => {
      return {
        items: [...state.items, newItem]
      }
    }, () => console.log(this.state.items));
  }

  deleteItem = (id) => {
    console.log('deleteItem id: ' + id);
    this.setState((state) => {
      const newItems = state.items.filter((item) => item.id != id)
      return {
        items: newItems
      };
    }, () => console.log(this.state.items));
  }

  editItem = (id) => {
    console.log('editItem id: ' + id);
    let result = this.state.items.filter(item => item.id == id);
    result = result[0];
    console.log('editItem: ' + JSON.stringify(result));
    this.setState({
      edit: true,
      editingItemId: result.id,
      editingItemTitle: result.title
    });
  }

  render() {
    // console.log(this.state.items);
    const edit = this.state.edit;

    return (
      <div className="App">
        <Navbar/>
        <div className="container">
          <AddItem addItem={this.addItem} />
          {edit && <EditItem title={this.state.editingItemTitle} id={this.state.editingItemId}/>}          
          <TodoList items={this.state.items} deleteItem={this.deleteItem} editItem={this.editItem}/>
        </div>
      </div>
    );
  }
}

export default App;
