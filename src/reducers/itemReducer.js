import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, MARK_ITEM_DONE } from '../actions/types';

const initialState = {
    items: []
};

export default function(state = initialState, {type, payload}) {
    switch (type) {
        case GET_ITEMS:
            return {
                ...state,
                items: payload
            }; 
        case ADD_ITEM:
            return {
                ...state,
                items: [payload, ...state.items]
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item._id !== payload)
            };
        // case MARK_ITEM_DONE:
        //     return {
        //         ...state,
        //         items: state.items.find(item => item._id === payload)
        //     };
        default:
            return state;
    }
}