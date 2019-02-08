import axios from 'axios';
import jwtdecode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { SET_USER } from './types';

export const signupUser = (user) => dispatch => {
    // axios.post('/api/auth/signup', user).then(res => {

    // })
}

export const loginUser = (user) => dispatch => {
    axios.post('/api/auth/login', user).then(res => {
        console.log('login action: res.data ' + JSON.stringify(res.data));
        const { token } = res.data;    
        console.log('login action: token: ' + token);    
        localStorage.setItem('token', token);       
        setAuthToken(token);    
        const decodedUser = jwtdecode(token);
        dispatch({
            type: SET_USER,
            payload: decodedUser
        })
    })
}

export const logoutUser = (user) => dispatch => {
    localStorage.removeItem('token');
    setAuthToken(false);
    dispatch({
        type: SET_USER,
        payload: {}
    })
}