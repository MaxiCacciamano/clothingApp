const initialState ={
    women:[],
    productsearch:[],
    getall:[],
    accessories:[],
    shoes:[],
    allGender:[],
    gender:[],
    name:[],
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
                gender:action.payload,
                allGender:action.payload
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
                women: action.payload,      
            }
        }
        case 'GET_ERROR':{
            return{
                ...state,
                women:[],
                error: action.payload
            }
        }
        case 'GET_PRODUCTS_BY_GENDER':{
            return{
                ...state,
                gender: action.payload,
                allGender:action.payload, //copia original con todos los talles
                selectedGender: action.selectedGender //Guardamos el genero seleccionado
            }
        }

        case 'FILTER_SIZE_M':{
            // const size = action.payload === "M"
            return{
                ...state,
                gender:state.allGender.filter((item)=>item.size === action.payload),
                
            }
        }

        case 'FILTER_CATEGORY_LESS_TO_MORE':{
            const orderlesstomore = 
            action.payload === "asc"?state.gender.sort(function(a,b){
                if(a.amount > b.amount)return 1
                if(a.amount < b.amount)return -1
                return 0 
            }):
            action.payload === "desc"?state.gender.sort(function(a,b){
                if(a.amount < b.amount)return 1
                if(a.amount > b.amount)return -1
                return 0
            }):
            state.gender.sort(function(a,b){
                if(a.amount > b.amount) return 1
            })
            console.log(orderlesstomore)
            return{
                ...state,
                gender: orderlesstomore
                
            }
        }
            default:
            return state
    }
}