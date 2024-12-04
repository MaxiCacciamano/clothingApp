import React from 'react'
import {useDispatch} from 'react-redux'
import { filterCategories } from '../redux/action'

export const Filter = () => {
    const dispatch = useDispatch()


    function handleFilterCategory(e){
        e.preventDefault();
        const selectedCategory = e.target.value
        console.log(selectedCategory, "e.target.value")
        dispatch(filterCategories(e.target.value))
    }
  return (
    <div>
        <h2>Category</h2>
        <select name='category' onChange={e => handleFilterCategory(e)}>
            <option value="All">All</option>
            <option value="Dresses">Dresses</option>
            <option value="Tops">Tops</option>
            <option value="Pants">Pants</option>
            {/* <option value="Skirts">Skirts</option> */}
            <option value="Shorts">Shorts</option>
        </select>
    </div>
  )
}
