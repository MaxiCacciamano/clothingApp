import React from 'react'
import { Filters } from './Filters'

import style from '../design/nav.module.css'
import { SearchName } from './SearchName'

import log from '../../public/IMG/Group 53.png'
import favoritos from '../../public/IMG/heart.png'
import cart from '../../public/IMG/Cart.png'
import login from '../../public/IMG/login.png'

export const Nav = () => {
  return (
    <div className={style.contain}>
     <div className={style.Frame556}>
    <div className={style.line}>
    <hr style={{border:'0',height:'2px',backgroundColor:'#333', margin:' 0', width:'30px', marginBottom: '8px'}}/>
    <hr style={{border:'0',height:'2px',backgroundColor:'#333', margin:' 0', width:'20px', marginBottom: '8px'}}/>
    <hr style={{border:'0',height:'2px',backgroundColor:'#333', margin:' 0', width:'10px',}}/>
    </div>
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


     <div className={style.Frame552} >
     <div className={style.favorito}>
       <img src= {favoritos} />
     </div>
       <div className={style.cart}>
        <div className={style.textoCart}>
         <p>Cart</p>
        </div>
        <div className={style.logoCarrito}>
         <img src={cart} />
        </div>
       </div>
       <div className={style.login}>
       <img src={login} />
       </div>
       {/* <SearchName/> */}
     </div>
    </div>
  )
}
