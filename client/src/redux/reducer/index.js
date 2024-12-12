const initialState ={
    women:[],
    productsearch:[],
    getall:[],
    accessories:[],
    shoes:[],
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
        case 'FILTER_CATEGORY_CLOTHING':{
            let allCat = state.allCategory;   
            let categoriesFilter = action.payload

            // console.log(categoriesFilter, 'log para ver que valor tiene categoriesFilter');

            // console.log("subcategorias disp.",allCat.filter(item => item.subcategory === categoriesFilter))
            

            let filteredCat = categoriesFilter === 'All'? allCat:
            allCat.filter((e)=>
                categoriesFilter.toLowerCase().trim() === e.subcategory.toLowerCase().trim()
            )

            // console.log(allCat,"ss")
            // console.log(filteredCat, 'Filtered Clothing by Category');
            console.log("--------------------------------------------------------- abajo comienza otro pedido")
            
            return{
                ...state,
                women: filteredCat
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