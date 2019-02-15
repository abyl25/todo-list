import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, MARK_ITEM_DONE } from './types';

export const getItems = () => dispatch => {
    axios.get('/api/items').then(res => {   
        // console.log('getItems action: ' + JSON.stringify(res.data));       
        dispatch({
            type: GET_ITEMS,
            payload: res.data
        })
    })
}

export const addItem = (item) => dispatch => {
    axios.post('/api/items', item).then(res => {          
        dispatch({
            type: ADD_ITEM,
            payload: res.data
        })
    })
}

export const deleteItem = (id) => dispatch => {
    axios.delete(`/api/items/${id}`).then(res => {          
        dispatch({
            type: DELETE_ITEM,
            payload: id
        })
    })
}

export const markItemDone = (id) => dispatch => {
    dispatch({
        type: MARK_ITEM_DONE,
        payload: id
    })
}