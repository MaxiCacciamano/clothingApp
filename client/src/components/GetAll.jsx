import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from './Card'
import { getWomen, getShoes } from '../redux/action'

import style from '../design/getall.module.css'

import { Shoes } from './Shoes'
import { SearchName } from './SearchName'
import { Filters } from './Filters'
import { Newcollection } from './Carrusel/Newcollection'
import { Newwek } from './Carrusel/Newwek'
import { Xvcolecctions } from './Carrusel/Xvcolecctions'
import { Design } from './Design'
import { Footer } from './Footer'

export const GetAll = () => {
    const dispatch = useDispatch()
    const all = useSelector(state=>state.women)

    const searchProduct = useSelector(state=>state.productsearch)
    const error = useSelector(state => state.error);
    const [showRsult, setShowresult] = useState(false)


    useEffect(()=>{
      if(!all.length){
        dispatch(getWomen('your-category-api-endpoint')) // Replace with the correct endpoint if necessary
      }
    },[dispatch])

    // console.log(all)
  return (
    <div className={style.conteinGetall}>
        <Newcollection />
        <Newwek/>
        <div className='titleXV'>
           <h1 style={{textAlign:'left',lineHeight:'1', marginTop:'100px'}}>
           XIV
           <br/>
           Collections
           <br/>
           23-24</h1>
        </div>
    <Filters />
       <div>
        <Design/>
       </div>

    </div>
  )
}
