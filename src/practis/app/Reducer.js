import { createStore } from "redux";


const initialeState = 
    {
        Livre: '',
        Auteur: ''
};

const reducer = (State = initialeState, { type, payload })=> {
    
    switch (type) {
        case "AddNewLivre":
            return { ...State, Data: [...State.Data, payload] };
         default:
            return State;
    }
}

const store = createStore(reducer);
export default store;