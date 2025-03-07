import React from 'react'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {lesstomoreClothing} from '../redux/action/index.js';

import style from '../design/filterCat.module.css';
export const Lesstomore = () => {
    const dispatch = useDispatch();
    const [order, setOrder] = useState("")

    function handlelesstomore(e){
        
        dispatch(lesstomoreClothing(e.target.value))
    }
  return (
    <div className={style.labelFilter} onChange={e=>handlelesstomore(e)}>
          <label>
            <input type="checkbox"  defaultValue={ "all"} hidden/>
          </label>
          <label>
            <input type="checkbox"  value="asc"/> Less to more
          </label>
          <label>
            <input type="checkbox" value="desc" /> More to less
          </label>
    </div>
  )
}
