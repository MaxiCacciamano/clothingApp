import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from './Card'
import { getWomen, getAccesorios, getShoes } from '../redux/action'

import style from '../design/getall.module.css'
import { Shoes } from './Shoes'

export const GetAll = () => {
    const dispatch = useDispatch()
    const all = useSelector(state=>state.women)
    const {accessories} = useSelector(state => state)


    useEffect(()=>{
      if(!all.length){
        dispatch(getWomen('your-category-api-endpoint')) // Replace with the correct endpoint if necessary
      }
        dispatch(getAccesorios())
    },[])

    // console.log(all)
  return (
    <div>
      <h1>Products</h1>
    <div className={style.products}>
       {
        all.map((e, index)=>(
          <Card key={`${e.name}-${index}`} name={e.name} amount={e.amount} currency={e.currency}/>
        ))
       }
       </div>
       <h1>Accesorios</h1>
       <div className={style.products}>
      {
        accessories.map((a, index)=>(
          <Card key={`${a.name}-${index}`} name={a.name} amount={a.amount}  currency={a.currency}/>
        ))
       }
       
       </div>
       <h1>Shoes</h1>
       <Shoes />

    </div>
  )
}
