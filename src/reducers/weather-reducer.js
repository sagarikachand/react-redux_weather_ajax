import {FETCH_WEATHER} from '../actions/index'


//Whenever you are inside a reducer never mutate the state rather return a new instanace
// Ways:  eg.    return state = state.contact([action.payload.data])  , here concat return a new array
//Or use ES6 syntax       state = [action.payload.data , ...state]
export default function(state = [] ,action ){

     switch( action.type ){
         case FETCH_WEATHER :
       
       return [action.payload.data , ...state]
      
     }
     return state;
} 