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
        case 'FILTER_CATEGORY_CLOTHING':{
            let allCat = state.allCategory;   
            let categoriesFilter = action.payload

            // console.log(categoriesFilter, 'log para ver que valor tiene categoriesFilter');

            // console.log("subcategorias disp.",allCat.filter(item => item.subcategory === categoriesFilter))
            

            let filteredCat = categoriesFilter === 'All'? allCat:
            allCat.filter((e)=>
                categoriesFilter.toLowerCase() === e.subcategory.toLowerCase().trim()
            )

            // console.log(allCat,"ss")
            // console.log(filteredCat, 'Filtered Clothing by Category');
            console.log("--------------------------------------------------------- abajo comienza otro pedido")
            
            return{
                ...state,
                women: filteredCat
            }
        }
        case 'FILTER_CATEGORY_ACCESSORIES':{
            let allShoes = state.shoes
            let shoesFilter = action.payload

            // let filteredShoes = shoesFilter === 'All'? allShoes:
            // allShoes.filter((s)=>
            //     shoesFilter.toLowerCase().trim() === s.
            // )

            return{
                ...state,
                women: action.payload
            }
        }
            default:
            return state
    }
}