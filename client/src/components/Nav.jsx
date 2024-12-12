import React from 'react'
import { Filter } from './Filter'

import style from '../design/nav.module.css'
import { SearchName } from './SearchName'

export const Nav = () => {
  return (
    <div className={style.contain}>
     <div className={style.Frame556}>
        <h2>Exlusive</h2>
     <div className={style.menu}>
       <ul>
         <li>Home</li>
         <li>Contact</li>
         <li>About</li>
         <li>Sign Up</li>
       </ul>
     </div>
     </div>

     <div className={style.Frame552}>
      <div>
      <SearchName/>
      </div>
      <div>
      <Filter />

      </div>
     </div>
    </div>
  )
}
