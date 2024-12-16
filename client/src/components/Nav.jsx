import React from 'react'
import { Filters } from './Filters'

import style from '../design/nav.module.css'
import { SearchName } from './SearchName'

import log from '../../public/IMG/Group 53.png'

export const Nav = () => {
  return (
    <div className={style.contain}>
     <div className={style.Frame556}>
        <h2>_</h2>
     <div className={style.menu}>
       <ul>
         <li>Home</li>
         <li>Collection</li>
         <li>New</li>
       </ul>
     </div>
     </div>
     <div className={style.log} >
      <img src={log} />
     </div>

     <div className={style.Frame552}>
      <div>
       <SearchName/>
      </div>
     </div>
    </div>
  )
}
