import React from 'react'
import { Filter } from './Filter'

import style from '../design/nav.module.css'

export const Nav = () => {
  return (
    <div className={style.contain}>
      <Filter />
    </div>
  )
}
