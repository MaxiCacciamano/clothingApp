import React from 'react'

import style from '../design/filterCat.module.css';
import { useDispatch } from 'react-redux';
import { filtersize } from '../redux/action';

export const FilterSeccion = () => {
  const dispatch = useDispatch()

  function handledispatchsize(e){
    dispatch(filtersize(e.target.value))
  }
  return (
    <div className={style.labelFilter}>
          {/* <label>
            <input type="checkbox" /> Best clothing
          </label> */}
          <label >
            <input onChange={e=>handledispatchsize(e)} type="checkbox" value="L"/> Size L
          </label>
          <label >
            <input onChange={e=>handledispatchsize(e)} type="checkbox" value="S"/> Size S
          </label>
          <label >
            <input onChange={e=>handledispatchsize(e)}  type="checkbox" value="M" /> Size M
          </label>
    </div>
  )
}
