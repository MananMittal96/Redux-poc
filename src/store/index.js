import { createStore } from 'redux';

const initialState = {
    inputValue : ''
};

const reducer = (state = initialState, action) => {
    console.log('reducer', action);

    switch (action.type) {
        case 'INPUT_CHANGE':
                return Object.assign({}, state, { inputValue: action.text });
            default:
                return state;
    }

    return state;
}

const store = createStore(reducer);

export default store;