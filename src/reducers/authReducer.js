import { SET_USER } from '../actions/types';

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
                isAuthenticated: true, // authenticated: if (payload == {}) false;
                user: payload
            }; 
        default:
            return state;
    }
}