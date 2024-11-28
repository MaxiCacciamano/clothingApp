import axios from 'axios';
import clothing from '../../../clothing.json'

export function getAll(){
    return function(dispatch){
        return axios.get('../../../clothing.json')
        .then((res) =>{
            const menClothing = res.catalog.clothing.categories
            .find((category)=>category.name === 'Men')  //busco categoria de Hombre
            .categories.find(category => category.name === 'Clothing')  //entro a la clothing
            .categories;  //Aquí obtenemos todas las subcategorías como "Shirts", "Pants", etc.

            // console.log(menClothing, "88")
            return dispatch({
                type:'GET_MEN',
                payload: res.data
            })
        })
        .catch((err)=>{console.log("la funcion getAll salio por el catch", err)})
    }
}

export function getWomen(){
    return function(dispatch){
        return axios.get('../../../clothing.json') //Fetch
        
        .then((res)=>{
            // Assuming the response contains the necessary catalog structure:
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


                   dispatch({   
                       type:'GET_WOMEN',
                       payload:productsNameAndPrices
                   })
        })
        .catch(err => {
            console.log("Error fetching data", err)
        })
    
        
        
    }
}