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

        case 'FILTER_CATEGORY_LESS_TO_MORE':{
            const orderlesstomore = action.payload === "asc"?state.gender.sort(function(a,b){
                if(a.name > b.name)return 1
                if(a.name < b.name)return -1
                return 0 
            }):
            action.payload === "desc"?state.gender.sort(function(a,b){
                if(a.name < b.name)return 1
                if(a.name > b.name)return -1
                return 0
            }):
            state.gender.sort(function(a,b){
                if(a.name > b.name) return 1
            })
            console.log(orderlesstomore)
            return{
                ...state,
                gender: orderlesstomore
                
            }
        }
        case 'FILTER_SIZE':{
            // const size = { s:"S", m:"M", l:"L", xl:"XL", xxl:"XXL"}
            const filtsize = action.paylaod ? state.gender.filter((p)=>p.size === action.paylaod) : state.gender
            return{
                ...state,
                gender: filtsize
            }
        }
            default:
            return state
    }
}