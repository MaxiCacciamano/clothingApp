const initialState ={
    men:[],
    women:[],
    accessories:[]
}

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
        case 'GET_ACCESSORIES':{
            return{
                ...state,
                accessories: action.payload
            }
        }
        default:
            return state
    }
}