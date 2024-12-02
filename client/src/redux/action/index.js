import axios from 'axios';
import clothing from '../../../clothing.json'

// export function getAll(){
//     return function(dispatch){
//         return axios.get('../../../clothing.json')
//         .then((res) =>{
//             const menClothing = res.catalog.clothing.categories
//             .find((category)=>category.name === 'Men')  //busco categoria de Hombre
//             .categories.find(category => category.name === 'Clothing')  //entro a la clothing
//             .categories;  //Aquí obtenemos todas las subcategorías como "Shirts", "Pants", etc.

//             // console.log(menClothing, "88")
//             return dispatch({
//                 type:'GET_MEN',
//                 payload: res.data
//             })
//         })
//         .catch((err)=>{console.log("la funcion getAll salio por el catch", err)})
//     }
// }

export function getWomen(){
    return function(dispatch){
        return axios
        .get('../../../clothing.json') //Fetch
        .then((res)=>{
            const clothing = res.data.catalog?.clothing;
            // Assuming the response contains the necessary catalog structure:
            const womenCategory = clothing.categories?.find(
                (category)=> category.name === 'Women'
            );

            const clothingwomen = womenCategory?.categories.find(
                (subcategory) => subcategory.name === 'Clothing'
            );


            const clothingProducts = clothingwomen?.categories.flatMap((subcategory)=>
             subcategory.categories?.map((product)=>{
                if(product.amount && product.currency){
                    return{
                        name:product.name,
                        amount: product.amount,
                        currency: product.currency
                    }
                }
             }) || []
            )


            // Extrae los productos de todas las subcategorías dentro de 'Women'
            const otherProductsWomen = womenCategory.categories.flatMap(
                (subcategory)=> subcategory.categories?.map((product)=> ({
                    name: product.name,
                    amount: product.amount,
                    currency: product.currency 
                })) || []
            )

            const allProducts = [...clothingProducts, ...otherProductsWomen]




        //     // Recorremos todas las subcategorías en la categoría 'Women'
        //    const productsNameAndPrices = womenCategory.map(category => {
        //         // Dentro de cada subcategoría, si tiene productos, los extraemos
        //         return category.categories?.map(subcategory=>{
        //            // Aquí extraemos los productos (si los hay)
        //            return subcategory.categories?.map(product=>({
        //                name: product.name,
        //                amount:product.amount,
        //                currency: product.currency
        //            }))
        //         }).flat()// Usamos flat para aplanar el arreglo de subcategorías si hay múltiples subcategorías
        //    }).flat() // Usamos flat para aplanar el arreglo de categorías si hay múltiples categorías


                   dispatch({   
                       type:'GET_WOMEN',
                       payload:allProducts
                   })
        })

        .catch(err => {
            console.log("Error fetching data", err)
        })
        
        
        
    }
}
export function getAccesorios(){
    return function(dispatch){
        return axios
        .get('../../../clothing.json')
        .then((res)=>{
            const accessories = res.data.catalog?.clothing

            const categoryAccesories = accessories.categories.categories?.find('Accessories')

            const accessoriProd = categoryAccesories.categories.map(
                (prod )=> ({
                    name: prod.name,
                    amount: prod.amount,
                    currency: prod.currency 

                })
            )
            dispatch({
                type:'GET_ACCESSORIES',
                payload: accessoriProd
            })
        })
        .catch(err=>console.log("Error al traer accesorios", err))
    }
}