import { createStore } from 'redux';

const initialState = { Films: [] };
const reducer = (state = initialState, { type, payload }) => {
    
    switch (type) {
        case 'AddToCart':
            return { ...state, Films: [...state.Films, payload] };
        
        default :
            return state;
    }
       

}

const store = createStore(reducer)
export default store;