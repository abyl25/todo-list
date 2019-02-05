import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import AddItem from './components/AddItem';
import Navbar from './components/Navbar/Navbar';
import TodoList from './components/TodoList';
import Login from './components/auth/Login';
import store from './store';
import './App.css';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar/>
            <Route exact path="/" render={props => (
              <React.Fragment>                
                <div className="container">
                  <AddItem/>
                  <TodoList/>
                </div>
              </React.Fragment>
            )} />                         
            <Route path="/login" component={Login}/>    
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
