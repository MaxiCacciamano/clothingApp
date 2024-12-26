import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { filterCategories, getShoes } from '../redux/action'

import style from '../design/filterCat.module.css'

export const Filtercategory = () => {
    const dispatch = useDispatch()
    function handleFilterCategory(e){
        e.preventDefault();
        const selectedCategory = e.target.value
        // console.log(selectedCategory, "e.target.value")
        dispatch(filterCategories(e.target.value))
    }
  return (
    <div>
      <div style={{display:'flex', flexDirection:'row'}} className={style.filterClothing}>
        {/* <h2>Category</h2> */}
        <ul name='category' onChange={e => handleFilterCategory(e)}>
            <li><option value="All">All</option></li>
            <li><option value="Dresses">Dresses</option></li>
            <li><option value="Tops">Tops</option></li>
            <li><option value="Pants">Pants</option></li>
            {/* <option value="Skirts">Skirts</option> */}
            <li><option value="Shorts">Shorts</option></li>
        </ul>
      </div>
        </div>
  )
}
