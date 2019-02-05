import React, { Component } from 'react';
import AddItem from './components/AddItem';
import Navbar from './components/Navbar/Navbar';
import TodoList from './components/TodoList';
import axios from 'axios';
import uuid from 'uuid';
import './App.css';

class App extends Component {
  state = {
    edit: false,
    editingItemId: '',
    editingItemTitle: '',
    items: [     
      // {
      //   id: uuid(),
      //   title: 'study for an exam'
      // }
    ]
  };

  componentDidMount() {
    this.getItems();
  }

  getItems = () => {
    axios.get('/api/items')
      .then(res => {
        console.log('data: ' + JSON.stringify(res.data));     
        this.setState({
          items: res.data
        });
      })
      .catch(err => console.log('error: ' + err))
  }

  addItemAction = (item) => {
    axios.post('/api/items', item).then(res => {
      this.setState((state) => {          
        return {
          items: [res.data, ...state.items]
        }
      });
    });
  }

  deleteItemAction = (id) => {
    console.log('deleting item id: ' + id);
    axios.delete(`/api/items/${id}`).then(res => {
      console.log(res.data.message);
      this.getItems();
    });
  }


  /* Actions in just React, no backend api */
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
      const newItems = state.items.filter((item) => item.id != id)  // eslint-disable-line
      return {
        items: newItems
      };
    }, () => console.log(this.state.items));
  }

  editItem = (id) => {
    console.log('editItem id: ' + id);   
    let result = this.state.items.filter(item => item.id == id);  // eslint-disable-line
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
    // const edit = this.state.edit;

    return (
      <div className="App">
        <Navbar/>
        <div className="container">
          <AddItem addItemAction={this.addItemAction} addItem={this.addItem} />
          {/* {edit && <EditItem title={this.state.editingItemTitle} id={this.state.editingItemId}/>}           */}
          <TodoList items={this.state.items} deleteItemAction={this.deleteItemAction} 
            deleteItem={this.deleteItem} editItem={this.editItem}/>
        </div>
      </div>
    );
  }
}

export default App;
