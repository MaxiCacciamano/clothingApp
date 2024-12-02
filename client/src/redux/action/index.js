import axios from 'axios';

export function getWomen() {
    return function (dispatch) {
        return axios
            .get('../../../clothing.json') //Fetch
            .then((res) => {
                const clothing = res.data.catalog.clothing;
                // Assuming the response contains the necessary catalog structure:
                const womenCategory = clothing.categories?.find(
                    (category) => category.name === 'Women'
                );

                const menCategory = clothing.categories
                ?.find((category) => category.name === 'Men')
                ?.categories.find(subcategory => subcategory.name === 'Clothing')

                const girlsCategory = clothing.categories
                ?.find((category)=> category.name === 'Girls')
                ?.categories.find(subcategory=> subcategory.name === 'Clothing')


                const boysCategory = clothing.categories
                ?.find((category)=> category.name === 'Boys')
                ?.categories.find(subcategory=> subcategory.name === 'Clothing')

                const clothingwomen = womenCategory?.categories.find(
                    (subcategory) => subcategory.name === 'Clothing'
                );

                // Extrae los productos de todas las subcategorías dentro de 'Women'
                const ProductsWomen = clothingwomen?.categories.flatMap(
                    (subcategory) => subcategory.categories?.flatMap((product) => ({
                        name: product?.name,
                        amount: product?.amount,
                        currency: product?.currency
                    }))
                )

                const productsMen = menCategory?.categories.flatMap(
                    (subcategoryMen)=> subcategoryMen.categories?.flatMap((productMen)=>({
                       name: productMen?.name,
                       amount: productMen?.amount,
                       currency: productMen?.currency 
                    }))
                )

                const girlsProducts =  girlsCategory?.categories.flatMap(
                    (subcategoryGirls)=> subcategoryGirls.categories?.flatMap((productsGirls)=>({
                        name: productsGirls?.name,
                        amount: productsGirls?.amount,
                        currency: productsGirls?.currency 
                    }))
                )

                const boysProducts =  boysCategory?.categories.flatMap(
                    (subcategoryBoys)=> subcategoryBoys.categories?.flatMap((productsGirls)=>({
                        name: productsGirls?.name,
                        amount: productsGirls?.amount,
                        currency: productsGirls?.currency 
                    }))
                )

                const allProd = [...ProductsWomen, ...productsMen, ...girlsProducts, ...boysProducts]
                console.log(allProd)
                dispatch({
                    type: 'GET_WOMEN',
                    payload: allProd
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
            const accessories = res.data.catalog.clothing

            const categoryAccesories = accessories.categories.flatMap(subcat =>
                subcat.categories?.find((a) => a.name === 'Accessories')
            )
            const accessoriProd = categoryAccesories?.flatMap(product =>
                product?.categories?.map((productos)=>({
                    name: productos?.name || 'Unknown',
                    amount: productos?.amount || 0,
                    currency: productos?.currency || 'USD',
                }))
            )
            .filter(Boolean); // Filtra cualquier valor `undefined`


            dispatch({
                type:'GET_ACCESSORIES',
                payload: accessoriProd || []
            })
            console.log(accessoriProd,'ddddddd')
        })
        .catch(err=>console.log("Error al traer accesorios", err))
    }
}

export function getShoes(){
    return function(dispatch){
        return axios
        .get('../../../clothing.json')
        .then((res)=>{
            const clothing = res.data.catalog.clothing

            const categoryShoes = clothing.categories.flatMap(s=>
                s.categories?.find(pS =>pS.name === 'Shoes') 
            )

            console.log(categoryShoes, "category Shoes")

            const prodShows = categoryShoes.flatMap(subcategoryshoes =>
                subcategoryshoes.categories?.flatMap((e)=>({
                    name: e?.name || 'Unknown',
                    amount: e?.amount || 0,
                    currency: e?.currency || 'USD',
                }))
            ).filter(Boolean); // Filtra cualquier valor `undefined`

            console.log(prodShows, "Shoes")
            
            dispatch({
                type: 'GET_SHOES',
                payload: prodShows
            })
        }

        )
        .catch(err=>console.log(err, "Error al traer Shoe"))
    }

}
export function filterCategories(payload){
    try{
        return{
            type:'FILTER_WOMEN_CATEGORY',
            payload
        }
    }
    catch(err){
        console.log("Error, algo salio mal", err)
    }
}