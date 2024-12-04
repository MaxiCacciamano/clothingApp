import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { filterCategories, getShoes } from '../redux/action'
import { Card } from './Card'

import style from '../design/card.module.css'

export const Filter = () => {
    const dispatch = useDispatch()
    const {shoes} = useSelector(state=>state)



    useEffect(()=>{
      dispatch(getShoes())
    },[])

    function handleFilterCategory(e){
        e.preventDefault();
        const selectedCategory = e.target.value
        // console.log(selectedCategory, "e.target.value")
        dispatch(filterCategories(e.target.value))
    }
    const womenShoes = shoes.filter((women)=>women.category === "Women")
    const menShoes = shoes.filter((men)=>men.category === "Men")
    const girlsShoes = shoes.filter((girls)=>girls.category === "Girls")
    const boysShoes = shoes.filter((boys)=>boys.category === "Boys")
  return (
    <div>
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
      <div >
      <h1>Women</h1>
      <div className={style.shoes}>
      {    
        womenShoes.map((shoes, index)=>(
          <Card key={index} name={shoes.name} amount={shoes.amount} currency={shoes.currency}/>
        ))
      }
      </div>
      <h2>Men</h2>
      <div className={style.shoes}>
      {
        menShoes.map((shoes, index)=>(
          <Card  key={index} name={shoes.name} amount={shoes.amount} currency={shoes.currency}/>
        ))
      }
      </div>
    <h1>Girls</h1>
    <div className={style.shoes}>
    {
      girlsShoes.map((shoes, index)=>(
        <Card  key={index} name={shoes.name} amount={shoes.amount} currency={shoes.currency}/>
      ))
    }
    </div>
    <h1>Boys</h1>
    <div className={style.shoes}>
    {
      boysShoes.map((shoes, index)=>(
        <Card  key={index} name={shoes.name} amount={shoes.amount} currency={shoes.currency}/>
      ))
    }
    </div>
      </div>
        </div>
  )
}
