const initialState ={
    women:[],
    getall:[],
    accessories:[],
    shoes:[],
    allCategory:[]
}
 

export default function rootReducer(state = initialState, action){

    switch(action.type){
        case 'GET_WOMEN':{
            return{
                ...state,
                women: action.payload,
                allCategory: action.payload
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
        case 'FILTER_WOMEN_CATEGORY':{
            let allCat = state.women;
            let categoriesFilter = action.payload


            let filteredCat = allCat.filter((e)=>
                e.subcategory === categoriesFilter
            )


            console.log(filteredCat, 'Filtered Clothing by Category');
            console.log(categoriesFilter, 'Selected Category');
            
            return{
                ...state,
                allCategory: filteredCat,
                women: filteredCat
            }
        }
            default:
            return state
    }
}