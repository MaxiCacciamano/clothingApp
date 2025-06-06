
import axios from 'axios'

function extractProducts(category){
    return category?.categories.flatMap((subcategory)=>
     subcategory.categories?.map((product)=>({
        name: product?.name,
        subcategory: subcategory.name,
        amount: product?.amount,
        currency: product?.currency,
        image: product?.image,
        size: product?.size
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

            console.log(allShoes, "Filtered Shoes by Category");
        })
        .catch(err=>console.log(err, "Error al traer Shoe"))
    }

}
export async function getProductsByGender(gender) {
    try {
      const response = await axios.get('../../../clothing.json');
      const clothing = response.data.catalog.clothing;
  
      // Encuentra la categoría principal basada en el género
      const category = clothing.categories.find(
        (cat) => cat.name.toLowerCase() === gender.toLowerCase()
      );
  
      if (category) {
        // Encuentra la subcategoría "Clothing"
        const subcategory = category.categories.find(
          (subcat) => subcat.name === 'Clothing'
        );
  
        // Aplanamos todas las subcategorías (Dresses, Tops, Pants, etc.)
        const products = subcategory.categories.flatMap((prodCategory) => prodCategory.categories);
        
        // Extraemos los productos y les asignamos las características necesarias
        const productDetails = products.map((product) => ({
            name: product.name,
              image: product.image,
              amount: product.amount,
              size: product.size,
              currency: product.currency,
              category: gender, // Aquí añadimos el género para que pueda ser filtrado
        }));

        
        console.log(productDetails,"ddd")
        return productDetails;
      }
  
      return [];  // Retorna un array vacío si no se encuentra la categoría
    } catch (err) {
      console.error('Error al obtener productos por género:', err);
      return [];
    }
  }
  
  
  export function filterCategories(payload) {
    return async function(dispatch) {
      try {
        if(payload === "ALL"){
            const allProducts = await products()
            dispatch({
                type: 'GET_PRODUCTS_BY_GENDER',
                payload:allProducts
            })
        }else{
            // Esperar que getProductsByGender retorne los productos correctamente
            const products = await getProductsByGender(payload);
            // console.log("Productos despachados:", products);
            dispatch({
              type: 'GET_PRODUCTS_BY_GENDER',
              payload: products,
              selectedGender:payload //Enviamos el genero seleccionado
            });
        }
      } catch (err) {
        console.log("Error al traer productos por género", err);
        dispatch({
          type: 'GET_PRODUCTS_BY_GENDER',
          payload: []  // Retornar vacío en caso de error
        });
      }
    }
  }
  

export function searchByName(payload){
    return async function(dispatch){
        try{
            const productss = await products()
            const productName = productss.filter(n => n.name.toLowerCase().includes(payload.toLowerCase())) 
            
            if (productName.length === 0) {
                throw new Error(`No se encontró un producto con el nombre: ${payload}`);
            }
            dispatch({
                type:'GET_BY_NAME',
                payload: productName
            })
            console.log(productName,"sss")
        }
        catch(err){
            console.log(err, "Error, algo salio mal en seach by name")
        }
    }
}

export function lesstomoreClothing(payload){
    return function(dispatch){
        try{
            dispatch({
                type:'FILTER_CATEGORY_LESS_TO_MORE',
                payload
            })
        }
        catch(err){
            console.log(err, 'error en el getById')
        }
    }
}

export function filtersize(payload){
    return function(dispatch){
        try{
            dispatch({
                type:'FILTER_SIZE_M',
                payload
            })
        }
        catch(err){
            console.log(err,"Error al traer filtros por talle")
        }
    }
}