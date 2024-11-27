const initialState ={
    men:[],
    women:[]
}

import clothing from '../../../clothing.json'

export default function rootReducer(state = initialState, action){
    console.log(action.payload,"aca esta el valor")

    const womenCategory = clothing.catalog.clothing.categories;

     // Recorremos todas las subcategorías en la categoría 'Women'
    const productsNameAndPrices = womenCategory.map(category => {
         // Dentro de cada subcategoría, si tiene productos, los extraemos
         return category.categories?.map(subcategory=>{
            // Aquí extraemos los productos (si los hay)
            return subcategory.categories?.map(product=>({
                name: product.name,
                amount:product.amount,
                currency: product.currency
            }))
         }).flat()// Usamos flat para aplanar el arreglo de subcategorías si hay múltiples subcategorías
    }).flat() // Usamos flat para aplanar el arreglo de categorías si hay múltiples categorías


    console.log(womenCategory.flat())
    console.log(productsNameAndPrices, "nombre y precio de los productos")

    switch(action.type){
        case 'GET_MEN':
            return{
                ...state,
                men: action.payload
            }
        case 'GET_WOMEN':{
            return{
                ...state,
                women: productsNameAndPrices
            }
        }
        default:
            return state
    }
}