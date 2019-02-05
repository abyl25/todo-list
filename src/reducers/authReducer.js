import { SET_USER } from '../actions/types';

const initialState = {
    authenticated: false,
    user: {}
};

export default function (state = initialState, {type, payload}) {
    switch(type) {
        case SET_USER:
            return {
                ...state,
                authenticated: true, // authenticated: if (payload == {}) false;
                user: payload
            }; 
        default:
            return state;
    }
}