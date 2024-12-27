import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from './Card'
import { getWomen, getAccesorios, getShoes } from '../redux/action'

import style from '../design/getall.module.css'
import { Shoes } from './Shoes'
import { SearchName } from './SearchName'
import { Filters } from './Filters'
import { Newcollection } from './Carrusel/Newcollection'
import { Newwek } from './Carrusel/Newwek'
import { Xvcolecctions } from './Carrusel/Xvcolecctions'

export const GetAll = () => {
    const dispatch = useDispatch()
    const all = useSelector(state=>state.women)
    const {accessories} = useSelector(state => state)

    const searchProduct = useSelector(state=>state.productsearch)
    const error = useSelector(state => state.error);
    const [showRsult, setShowresult] = useState(false)


    useEffect(()=>{
      if(!all.length){
        dispatch(getWomen('your-category-api-endpoint')) // Replace with the correct endpoint if necessary
      }
        dispatch(getAccesorios())
    },[dispatch])

    // console.log(all)
  return (
    <div>
    {/* {
          showRsult  &&(
            <div>
            {

          searchProduct ? (
            <div>
              <h3>Producto encontrado</h3>
              <p>{searchProduct.name} </p>
            </div>
          ): error ? (
                <div>
                    <p style={{ color: 'red' }}>{error}</p>
                </div>
          ):(
            <p>Introduce un nombre para buscar un producto.</p>
          )
            }

            </div>
          )
        } */}
        <Newcollection />
        <Newwek/>
      <h1 style={{textAlign:'left',lineHeight:'1', marginTop:'100px'}}>
      XIV
      <br/>
      Collections
      <br/>
      23-24</h1>
    <Filters />


    <div className={style.products}>
       {/* {
        all.map((e, index)=>(
          <Card key={`${e.name}-${index}`} name={e.name} amount={e.amount} currency={e.currency} image= {e.image} />
        ))
       } */}
       </div>
       <Xvcolecctions/>
       {/* <h1>Accesorios</h1>
       <div className={style.products}>
      {
        accessories.map((a, index)=>(
          <Card key={`${a.name}-${index}`} name={a.name} amount={a.amount}  currency={a.currency} image={a.image} />
        ))
       }
       
       </div> */}
       <h1>Shoes</h1>
       <Shoes />

    </div>
  )
}
