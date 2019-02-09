import { SET_USER } from '../actions/types';
import isEmpty from '../utils/isEmpty';

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default function (state = initialState, {type, payload}) {
    switch(type) {
        case SET_USER:
            console.log('authReducer payload: ' + JSON.stringify(payload));
            return {
                ...state,
                isAuthenticated: !isEmpty(payload), 
                user: payload
            }; 
        default:
            return state;
    }
}