import React from 'react'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {filtersize} from '../redux/action/index.js';

import style from '../design/filterCat.module.css';

export const Filtersize = () => {
    const dispatch = useDispatch()


    function handlesize(e){
        dispatch(filtersize(e.target.value))
    }
  return (
    <div>
            <div className={style.labelFilter} >
          <label>
            <input type="checkbox" /> Filter 1
          </label>
          <label>
            <input type="checkbox"> Filter 2 </input>
          </label>
          <label>
            <input type="checkbox" /> Filter 3
          </label>
    </div>
    </div>
  )
}
