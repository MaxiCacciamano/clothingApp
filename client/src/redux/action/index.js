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
                    (subcategory) => subcategory.categories?.map((product) => ({
                        name: product?.name,
                        subcategory: subcategory.name,
                        amount: product?.amount,
                        currency: product?.currency
                    }))
                )

                const productsMen = menCategory?.categories.flatMap(
                    (subcategory)=> subcategory.categories?.map((productMen)=>({
                       name: productMen?.name,
                       subcategory: subcategory.name,
                       amount: productMen?.amount,
                       currency: productMen?.currency 
                    }))
                )

                const girlsProducts =  girlsCategory?.categories.flatMap(
                    (subcategory)=> subcategory.categories?.map((productsGirls)=>({
                        name: productsGirls?.name,
                        subcategory: subcategory.name,
                        amount: productsGirls?.amount,
                        currency: productsGirls?.currency 
                    }))
                )

                const boysProducts =  boysCategory?.categories.flatMap(
                    (subcategory)=> subcategory.categories?.map((productsGirls)=>({
                        name: productsGirls?.name,
                        subcategory: subcategory.name,
                        amount: productsGirls?.amount,
                        currency: productsGirls?.currency 
                    }))
                )

                var allProd = [...ProductsWomen, ...productsMen, ...girlsProducts, ...boysProducts]
                // console.log(allProd)
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
            // console.log(accessoriProd,'ddddddd')
        })
        .catch(err=>console.log("Error al traer accesorios", err))
    }
}

export function getShoes(){
    return function(dispatch){
        return axios
        .get('../../../clothing.json')
        .then((res)=>{
            const clothing = res.data.catalog.clothing;

            // Filtrar las categorías principales (Women, Men, Girls, Boys)
            const categories = ['Women', 'Men', 'Girls', 'Boys'];

            const shoesByCategory = categories.map((categoryName) => {
                const mainCategory = clothing.categories.find(
                    (cat) => cat.name === categoryName
                );

                // console.log(mainCategory, "mainCategory")
                // Extraer subcategoría "Shoes" dentro de cada categoría principal
                const shoesCategory = mainCategory?.categories?.find(
                    (subCat) => subCat.name === 'Shoes'
                );

                // console.log(shoesCategory,"shoesCategory")

                // Extraer los productos dentro de la categoría "Shoes"
                const products = shoesCategory?.categories?.map((product) => ({
                    name: product?.name || 'Unknown',
                    amount: product?.amount || 0,
                    currency: product?.currency || 'USD',
                    category: categoryName,
                }));

                return products || [];
            });

            // console.log(shoesByCategory,"shoesByCategory")

            // Combinar todos los productos de zapatos en un solo array
            const allShoes = shoesByCategory.flat();

            // Enviar al store los zapatos agrupados por categoría
            dispatch({
                type: 'GET_SHOES',
                payload: allShoes,
            });

            // console.log(allShoes, "Filtered Shoes by Category");
        })
        .catch(err=>console.log(err, "Error al traer Shoe"))
    }

}
export function filterCategories(payload){
    try{
        return{
            type:'FILTER_CATEGORY_CLOTHING',
            payload
        }
    }
    catch(err){
        console.log("Error, algo salio mal", err)
    }
}

export function searchByName(payload){
    return async function(dispatch){
        try{
            const filterCloting = allProd.filter(item=>
                item.name.toLowerCase().includes(payload.toLowerCase())
            )
        }
        catch(err){
            console.log(err, "Error, algo salio mal en seach by name")
        }
    }
}