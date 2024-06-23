import { createStore } from "redux";


const initialeState = 
{
    Data:[]
};

const reducer = (State = initialeState, { type, payload })=> {
    
    switch (type) {
        case "AddNewLivre":
            return { ...State, Data: [...State.Data, payload] };
        case "removeLivre":
            return { Data: State.Data.filter((e)=>e!==payload)}
         default:
            return State;
    }
}

const store = createStore(reducer);
export default store;