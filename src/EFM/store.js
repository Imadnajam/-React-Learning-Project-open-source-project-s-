import {createStore} from 'redux'

const initialState={}
const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case 'add' :
            return {}
        break
        default :
        return state ;
    }

}

const Store=createStore(reducer);
export default Store