import React from 'react'

import style from '../design/filterCat.module.css';

export const FilterSeccion = () => {
  return (
    <div className={style.labelFilter}>
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
  )
}
