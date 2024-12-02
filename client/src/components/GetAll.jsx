import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from './Card'
import { getAccesorios, getWomen } from '../redux/action'

import style from '../design/getall.module.css'

export const GetAll = () => {
    const dispatch = useDispatch()
    const  {women} = useSelector(state=>state)
    const {accessories} = useSelector(state => state)

    useEffect(()=>{
      if(!women.length){
        dispatch(getWomen('your-category-api-endpoint')) // Replace with the correct endpoint if necessary
        dispatch(getAccesorios())
      }
    })
  return (
    <div className={style.products}>
       {
        women.map(e=>(
            <Card key={e.name} name={e.name} amount={e.amount} currency={e.currency} />
        ))
       }
       {
        accessories.map(a=>(
          <Card key={a.name} name={a.name} amount={a.amount} currency={a.currency} />
        ))
       }
    </div>
  )
}
