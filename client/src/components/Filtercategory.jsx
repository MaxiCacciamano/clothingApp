import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { filterCategories, getShoes } from '../redux/action'

import style from '../design/filterCat.module.css'

export const Filtercategory = () => {
    const dispatch = useDispatch()

    const [sum, setSum] = useState(true)

    function handleFilterCategory(gender){
        // e.preventDefault();
        // const selectedCategory = e.target.value
        // console.log(selectedCategory, "e.target.value")
        dispatch(filterCategories(gender))
    }

    const categories = ["(ALL)", "Men", "Women", "Kids"]
  return (
    <div>
      <div style={{display:'flex', flexDirection:'row'}} className={style.filterClothing}>
        {/* <h2>Category</h2> */}
        <ul>
        {
          categories.map((category, index)=>(
            <li key={index}
            onClick={()=>handleFilterCategory(category)}
            >
            {category}
            </li>
          ))
        }
        </ul>
      </div>
      {/* <div>
        <button>Filter({sum?"+":"-"})</button>

        <p>Sorts(+)</p>
      </div> */}
        </div>
  )
}
