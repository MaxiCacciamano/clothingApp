const initialState ={
    women:[],
    productsearch:[],
    getall:[],
    accessories:[],
    shoes:[],
    gender:[],
    selectedGender:null,
    allCategory:[],
    error:[]
}
 

export default function rootReducer(state = initialState, action){

    switch(action.type){
        case 'GET_WOMEN':{
            return{
                ...state,
                women: action.payload,
                // allCategory: action.payload,
                gender:action.payload
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
        case 'GET_PRODUCTS_BY_GENDER':{
            return{
                ...state,
                gender: action.payload,
                selectedGender: action.selectedGender //Guardamos el genero seleccionado
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