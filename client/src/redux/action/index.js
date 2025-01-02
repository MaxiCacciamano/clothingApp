import axios from 'axios';

function extractProducts(category){
    return category?.categories.flatMap((subcategory)=>
     subcategory.categories?.map((product)=>({
        name: product?.name,
        subcategory: subcategory.name,
        amount: product?.amount,
        currency: product?.currency,
        image: product?.image
     }))
    )
}

export async function products(){
    try{
        const res = await axios.get('../../../clothing.json')

        const clothing = res.data.catalog.clothing;

        //buscamos las categorias
        const categories = ['Women','Men','Girls', 'Boys']

        const allProducts = categories.flatMap((categoryName)=>{
            const category = clothing.categories?.find(
                (category) => category.name === categoryName
            );
            if(category){
                // Find 'Clothing' subcategory and extract products
                const subcategory = category.categories?.find(
                (subcategory) => subcategory.name === 'Clothing'
                );
                return extractProducts(subcategory)
            }
            return [];
        })
        console.log(allProducts, "SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS")
        //filtrar 
        return allProducts   
}
    catch(err){
        console.log(err, "Error en la funcion de productos")
    }
}

export  function getWomen() {
    return async function (dispatch) {
            try{
                const allProd = await products();
                dispatch({
                    type: 'GET_WOMEN',
                    payload: allProd
                })
            }
            catch (err){
                console.log(err, 'error al traer productos')
            }
    }
    }

    export function getGender(){
        
    }


export function getError(){
    return {
        type: 'GET_ERROR',
        payload: 'Error al buscar producto por nombre'
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
                    image: productos?.image
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
                    image: product?.image
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
    return function(dispatch){
        try{
            return axios
            .get('../../../clothing.json')
            .then(res=>{
                const clothing = res.data.catalog.clothing;

                const categories = ['Women', 'Men', 'Girls', 'Boys'];

                const gender = categories.map((category)=>{
                    const mainCategory = clothing.categories.find(
                        (cat)=> cat.name === category
                    )
                })

                dispatch({
                    type:'FILTER_CATEGORY_CLOTHING',
                    payload
                })
            })
        }
        catch(err){
            console.log("Error, algo salio mal", err)
        }
    }
}

export function searchByName(payload){
    return async function(dispatch){
        try{
            const productss = await products()
            const productName = productss.filter(n => n.name.toLowerCase().includes(payload.toLowerCase())) 
            console.log(productName,"sss")

            if (!productName) {
                throw new Error(`No se encontró un producto con el nombre: ${payload}`);
            }
            dispatch({
                type:'GET_BY_NAME',
                payload: productName
            })
        }
        catch(err){
            console.log(err, "Error, algo salio mal en seach by name")
            dispatch({
                type:'GET_BY_NAME_ERROR',
                payload: err.message
            })
        }
    }
}

export function filterClothing(payload){
    return function(dispatch){
        try{
            dispatch({
                type:'FILTER_CATEGORY_CLOTHING',
                payload
            })
        }
        catch(err){
            console.log(err, 'error en el getById')
        }
    }
}