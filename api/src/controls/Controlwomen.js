const getProducts = async ()=>{
    try{
        const products = [];
        const clothingCategories = catalog.catalog.clothing.categories;
      
        clothingCategories.forEach(category => {
          category.categories.forEach(subCategory => {
            subCategory.categories.forEach(product => {
              products.push({ name: product.name, price: product.amount, currency: product.currency });
            });
          });
        });
      
        res.json(products); // Enviar los productos como JSON
    }
    catch(err){
        console.log("Error al trer los productos de mujeres", err)
    }
}

module.exports = {
  getProducts,   
}