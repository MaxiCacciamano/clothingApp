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
    const womenCategory = clothing.catalog.clothing.categories.find(category => category.name === "Women");
    const categoryName = womenCategory.categories.map(category => category.name)
    
    console.log(womenCategory, 'json')
    return function(dispatch){
        return axios.get(categoryName)
        .then((res)=>{
            return dispatch({   
                type:'GET_WOMEN',
                payload:res.womenCategory
            })
        })
    }
}