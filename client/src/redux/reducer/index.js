const initialState ={
    men:[],
    women:[]
}

import clothing from '../../../clothing.json'

export default function rootReducer(state = initialState, action){

    switch(action.type){
        case 'GET_MEN':
            return{
                ...state,
                men: action.payload
            }
        case 'GET_WOMEN':{
            return{
                ...state,
                women: action.payload
            }
        }
        default:
            return state
    }
}