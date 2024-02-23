import { createStore } from 'redux';

const initialState = { Films: [] ,Artists:[]};
const reducer = (state = initialState, { type, payload }) => {
    
    switch (type) {
        case 'AddToCart':
            return { ...state, Films: [...state.Films, payload] };
        case 'removeItem':
            return { ...state, Films: [...state.Films.filter((e) => e !== payload)] }
        case 'addActor':
            return {...state, Artists: [...state.Artists, payload]};
        default :
            return state;
    }
       

}

const store = createStore(reducer)
export default store;