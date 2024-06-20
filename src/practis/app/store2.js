import { createStore } from 'redux';


const initialeState = { results: '', traitement: '', historique: [] };

const reducer = (state = initialeState, { type, payload }) => {
    
    switch (type) {
        case 'Somme':
            return {
                ...state, results: payload.nb1 +payload.nb2
            }
        default:
            return state
    }
}

const store = createStore(reducer);

export default store;
