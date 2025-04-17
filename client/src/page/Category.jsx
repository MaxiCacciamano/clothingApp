import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Card } from '../components/Card'

import style from '../design/filterCat.module.css';

export const Category = () => {
  const gender = useSelector(state => state.allGender)
  return (
    <div className={style.filterGender}>
      {
        gender.length > 0 ?(
          gender.map((c, index)=>(
            <Card  key={index}  name={c.name} image={c.image} category={c.category} amount={"$"+c.amount}/>
          ))
        ):(<p>No se encontraron productos</p>)
      }
    </div>
  )
}
