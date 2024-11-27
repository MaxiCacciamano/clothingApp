const initialState ={
    men:[],
    women:[]
}

import clothing from '../../../clothing.json'

export default function rootReducer(state = initialState, action){
    console.log(action.payload,"aca esta el valor")

    const womenCategory = clothing.catalog.clothing.categories;

    
    // Recorremos todas las subcategorías en la categoría 'Women'
    const productsNameAndPrices = womenCategory.forEach(category => {
        // Dentro de cada subcategoría, si tiene productos, los extraemos
        category.categories?.forEach(subCategory => {
            // Aquí extraemos los productos (si los hay)
            subCategory.categories?.forEach(product => ({
                
                    name: product.name, // nombre del producto
                    amount: product.amount, // precio del producto
                    currency: product.currency // moneda del producto
            }));
        });
    });

    console.log(womenCategory)
    console.log(productsNameAndPrices, "Nombres y precios de los productos");

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