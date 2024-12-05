import React, { useEffect } from 'react'
import { Card } from './Card'
import { getShoes } from '../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import style from '../design/card.module.css'

export const Shoes = () => {
    const dispatch = useDispatch()
    const {shoes} = useSelector(state=>state)

    useEffect(()=>{
        dispatch(getShoes())
      },[])


    const womenShoes = shoes.filter((women)=>women.category === "Women")
    const menShoes = shoes.filter((men)=>men.category === "Men")
    const girlsShoes = shoes.filter((girls)=>girls.category === "Girls")
    const boysShoes = shoes.filter((boys)=>boys.category === "Boys")
  return (
    <div className={style.container}>
    <h1>Women</h1>
    <div className={style.shoes}>
    {    
      womenShoes.map((shoes, index)=>(
        <Card key={index} name={shoes.name} amount={shoes.amount} currency={shoes.currency}/>
      ))
    }
    </div>
    <h1>Men</h1>
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
  )
}
