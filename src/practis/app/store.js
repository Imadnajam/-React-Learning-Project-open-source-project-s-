import { createStore } from "redux";

const initialeState = { artists: [] };

const reducer = (state = initialeState, { type, payload }) => {
    
    switch (type) {
        case 'addStar':
            return { ...state, artists: [...state.artists, payload] };
        case 'removeStar':
            return { ...state, artists: [...state.artists.filter((e) => e !== payload)] };
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;