import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import jwtdecode from 'jwt-decode';
import Main from './components/Main';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar/Navbar';
import About from './components/About';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import PrivateRoute from './components/auth/PrivateRoute';
import { logoutUser } from './actions/authActions';
import setAuthToken from './utils/setAuthToken';
import store from './store';
import './App.css';

const token = localStorage.token;
if (token) {
  setAuthToken(token);
  const decoded = jwtdecode(token);
  store.dispatch({
    type: 'SET_USER',
    payload: decoded
  });

  const curTime = Date.now()/1000;
  if (decoded.exp < curTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar/>
            <Route exact path="/" component={Main}/> 
            <Route exact path="/about" component={About}/>    
            <Switch>  
              <PrivateRoute exact path="/me" component={Dashboard}/>  
            </Switch>                     
            <Route exact path="/login" component={Login}/> 
            <Route exact path="/signup" component={Signup}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
