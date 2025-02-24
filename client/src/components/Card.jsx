import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getWomen } from '../redux/action';

import style from '../design/card.module.css'

export const Card = ({name, amount, currency, image}) => {

  // useEffect(()=>{
  //   // Fetch data when component mounts
  //   dispatch(getWomen('your-category-api-endpint'))
  // },[dispatch])
  return (
    <div className={style.product}>
      <img src={image} />
      <div className={style.subprod}>
      <h2> {name} </h2>
      <h2>{currency} {amount}</h2>
      </div>
    </div>
  )
}
