///////////////////// Redux Test  3  MINI Game  Change my Color !///////////////////
import {createStore} from 'redux'

const initialeState={color:'',text:'Hello change me !',hestoC:[],hestoT:[]}
const reducer =(state=initialeState,{type,payload})=>{
    switch (type){
        case 'ChangeC':
            return {...state,color:payload || '',hestoC:[...state.hestoC,payload]}
        case 'ChangeT' :
            return {...state,text:payload,hestoT:[...state.hestoT,payload]}
        default :
         return state
    }
}
const store =createStore(reducer)
export default  store





/*///////////////////// Redux Test  3  MINI Game Number Film////////////////////

import { createStore } from "redux";


const initialeState ={number:0,film :''};
const reducer =  (state=initialeState,{type,payload})=>{
    if (type==='submit'){
        const num =Number(payload)
        fetch(`https://api.themoviedb.org/3/movie/${num}?api_key=0269e1f69afd6ff169f8a6a2d9f0dc4d`)
        .then(response => response.json()) // Convert the response to JSON
        .then(data => {
            return {
                number: data.id,
                film: data.original_title,
              };
        })
        .catch(error => {
            // Handle any errors that may occur during the fetch
            console.error('Error fetching data:', error);
        });
            

       
    }
    return state
}

const store =createStore(reducer)
export default store





// `https://api.themoviedb.org/3/trending/movie/day?api_key=0269e1f69afd6ff169f8a6a2d9f0dc4d`);
           






///////////////////// Redux Test  2  MINI CALCULE////////////////////
/*
import { createStore } from 'redux';

const initialeState = { operation: '', resultats: '' }
const reducer = (state = initialeState, { type, payload }) => {
    switch (type) {
        case 'SOMME':
            return { resultats: Number(payload[0]) + Number(payload[1]), operation: payload[0] + "+" + payload[1] }
        case 'SOUSTRA':
            return { resultats: Number(payload[0]) - Number(payload[1]), operation: payload[0] + "-" + payload[1] }

        case 'MULTIP':
            return { resultats: Number(payload[0]) * Number(payload[1]), operation: payload[0] + "*" + payload[1] }

        case 'DIVIS':
            return { resultats: Number(payload[0]) / Number(payload[1]), operation: payload[0] + "%" + payload[1] }

    }
    return state
}

const store = createStore(reducer)

export default store

















///////////////////// Redux Test  1 ////////////////////
/*
import { createStore } from "redux";
const initialState={counter :0};
const reducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case 'INC' :
         return {counter : state.counter+1}
        case 'DEC' :
         return {counter : state.counter-1}
        case 'ADDN' :
            return {counter :state.counter +Number(payload)}
        default :
         return state
    }
 

   
}
const store =createStore(reducer)

export default store


*/








