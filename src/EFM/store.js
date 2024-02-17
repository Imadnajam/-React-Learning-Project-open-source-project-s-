import { createStore } from 'redux';

const initialState = { book: '', books: ['boite'] };

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'addBook':
            return { ...state, books: [...state.books, payload] }; // Spread the existing array and add the new book
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
