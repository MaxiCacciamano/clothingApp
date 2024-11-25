const initialState ={
    men:[],
    women:[]
}

export default function rootReducer(state = initialState, action){
    console.log(action.payload)
    switch(action.type){
        case 'GET_MEN':
            return{

            }
        case 'GET:WOMEN':{
            return{

            }
        }
        default:
            return state
    }
}