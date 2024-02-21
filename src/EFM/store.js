import { createStore } from 'redux';

const initialState = { book: '', books: ['boite'] };

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'addBook':
            return { ...state, books: [...state.books, payload] }; 
        case 'removeBook':
            return {...state,books: state.books.filter((e)=>e!==payload)}
            
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
