import { createStore } from 'redux';
const initialeState = { historique: [], traitment: '' };
const reducer = (state = initialeState, { type, payload }) => {
    switch (type) {
        case 'somme':
            return { ...state, traitment: payload };
        default:
            return state;
    }
}

const store = createStore(reducer);
export default store