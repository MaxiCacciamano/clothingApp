const initialState ={
    men:[],
    women:[]
}

import clothing from '../../../clothing.json'

export default function rootReducer(state = initialState, action){
    console.log(action.payload,"aca esta el valor")
    const womenCategory = clothing.catalog.clothing.categories.find(category => category.name === "Women");
    const categoryName = womenCategory.categories.find(category => category.categories)
    const perCategory = categoryName.categories.filter(prodNmae => prodNmae.categories)
    const nameProd = perCategory.map(e=>e.categories.amount)
    // const filterCategory = categoryName.categories.filter(e => e.name)
    // const name = filterCategory.categories.map(e=>e.categories)
    console.log(womenCategory,"women")
    console.log(categoryName,"categories")
    console.log(perCategory, "per Prdouct")
    console.log(nameProd, "name prod")
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
        default:
            return state
    }
}