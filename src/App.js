import React, { Component } from 'react';
import AddItem from './components/AddItem';
import Navbar from './components/Navbar/Navbar';
import TodoList from './components/TodoList';
import uuid from 'uuid';
import './App.css';

class App extends Component {
  state = {
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

  render() {
    // console.log(this.state.items);

    return (
      <div className="App">
        <Navbar/>
        <div className="container">
          <AddItem addItem={this.addItem}/>
          <TodoList items={this.state.items} deleteItem={this.deleteItem}/>
        </div>
      </div>
    );
  }
}

export default App;
