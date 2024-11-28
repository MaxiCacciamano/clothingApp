import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getWomen } from '../redux/action';

import style from '../design/card.module.css'

export const Card = ({name, amount, currency}) => {
  const dispatch = useDispatch();
  const  {women} = useSelector(state=>state)

  useEffect(()=>{
    // Fetch data when component mounts
    dispatch(getWomen('your-category-api-endpint'))
  },[dispatch])
  return (
    <div className={style.product} style={{display:'grid'}}>
      {/* <h2>Women category</h2> */}
      <div style={{}}>
      <h2> {name} </h2>
      <h2> {amount} </h2>
      <h2> {currency} </h2>
      
      </div>
    </div>
  )
}
