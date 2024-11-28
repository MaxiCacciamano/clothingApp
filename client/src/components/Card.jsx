import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getWomen } from '../redux/action';


export const Card = () => {
  const dispatch = useDispatch();
  const  {women} = useSelector(state=>state)

  useEffect(()=>{
    // Fetch data when component mounts
    dispatch(getWomen('your-category-api-endpint'))
  },[dispatch])
  return (
    <div>
      <h2>Women category</h2>
      <ul>
       {
        women.map((product, index)=>(
          <li key={index}>
            {product.name}-{product.amount}-{product.currency}
          </li>
        ))
       }
      </ul>
    </div>
  )
}
