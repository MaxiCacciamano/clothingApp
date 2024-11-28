import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from './Card'
import { getWomen } from '../redux/action'

export const GetAll = () => {
    const dispatch = useDispatch()
    const  {women} = useSelector(state=>state)

    useEffect(()=>{
      if(!women.length){
        dispatch(getWomen('your-category-api-endpoint')) // Replace with the correct endpoint if necessary
      }
    })
  return (
    <div>
       {
        women.map(e=>(
            <Card key={e.name} name={e.name} amount={e.amount} currency={e.currency} />
        ))
       }
    </div>
  )
}
