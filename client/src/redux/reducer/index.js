const initialState ={
    women:[],
    productsearch:[],
    gender:[],
    accessories:[],
    shoes:[],
    gender:[],
    allCategory:[],
    error:[]
}
 

export default function rootReducer(state = initialState, action){

    switch(action.type){
        case 'GET_WOMEN':{
            return{
                ...state,
                women: action.payload,
                allCategory: action.payload,
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
        case 'GET_BY_NAME':{
            return{
                ...state,
                women: action.payload

            }
        }
        case 'GET_ERROR':{
            return{
                ...state,
                error: action.payload
            }
        }
        case 'GET_GENDERS':{
            return{
                ...state,
<<<<<<< HEAD
                gender: action.payload
=======
                allCategory: action.payload
>>>>>>> a7a5032cf0d96f1f133e35275c0a595b6b1b7bb3
            }
        }

        case 'FILTER_PRICE':{
            return{
                ...state,
                
            }
        }
            default:
            return state
    }
}