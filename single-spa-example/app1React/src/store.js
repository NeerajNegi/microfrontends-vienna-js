import { createStore } from 'redux';

const initialState = {
    elementList: []
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_ITEM':
            return {
                elementList: [...state.elementList, {value: action.payload, completed: false}]
            };
        case 'REMOVE_ITEM':
            return {
                elementList: state.elementList.filter(element => element.id !== action.payload)
            };
        case 'REMOVE_ALL':
            return {
                elementList: []
            };
        default:
            return state;
    }
}

export const storeInstance = createStore(reducer);