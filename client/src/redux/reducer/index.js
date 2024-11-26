const initialState ={
    men:[],
    women:[]
}

import clothing from '../../../clothing.json'

export default function rootReducer(state = initialState, action){
    console.log(action.payload,"aca esta el valor")
    const womenCategory = clothing.catalog.clothing.categories.find(category => category.name === "Women");
    const categoryName = womenCategory.categories.find(category => category.categories)
    const nameProd = categoryName.categories.find(prodNmae => prodNmae.categories)
    // const filterCategory = categoryName.categories.filter(e => e.name)
    // const name = filterCategory.categories.map(e=>e.categories)
    console.log(womenCategory,"women")
    console.log(categoryName,"categories")
    console.log(nameProd, "name Prdouct")
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