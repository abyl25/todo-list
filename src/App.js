import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AddItem from './components/AddItem';
import Navbar from './components/Navbar/Navbar';
import TodoList from './components/TodoList';
import store from './store';
import './App.css';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navbar/>
          <div className="container">
            <AddItem/>
            <TodoList/>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
