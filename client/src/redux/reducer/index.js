const initialState ={
    women:[],
    getall:[],
    accessories:[],
    shoes:[]
}
 

export default function rootReducer(state = initialState, action){

    switch(action.type){
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
        case 'GET_SHOES':{
            return{
                ...state,
                shoes: action.payload
            }
        }
            default:
            return state
    }
}