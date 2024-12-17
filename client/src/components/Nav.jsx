import React, { useState } from 'react'
import { Filters } from './Filters'

import style from '../design/nav.module.css'
import { SearchName } from './SearchName'

import log from '../../public/IMG/Group 53.png'
import favoritos from '../../public/IMG/heart.png'
import cart from '../../public/IMG/Cart.png'
import login from '../../public/IMG/login.png'

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = ( ) => {
    setIsOpen(!isOpen)
  }
  return (
    <div className={style.contain}>
     <div className={style.Frame556}>
     {/*Menu hamburgesa*/ }
     <div className={`${style.menuToggle} ${isOpen? style.open : ''}`} 
     onClick={toggleMenu}>
    <div className={style.line}>
    <hr className={style.bar} style={{border:'0',height:'1.5px',backgroundColor:'#333', margin:' 0', width:'30px', marginBottom: '6px'}}/>
    <hr className={style.bar} style={{border:'0',height:'1.5px',backgroundColor:'#333', margin:' 0', width:'20px', marginBottom: '6px'}}/>
    <hr className={style.bar} style={{border:'0',height:'1.5px',backgroundColor:'#333', margin:' 0', width:'10px',}}/>
    </div>
     </div>

     {/* Menú desplegable */}
     <div>
      <nav className={`${style.nav} ${isOpen? style.show:''}`}>
        <ul>
          <li><a href="#">Men</a></li>
          <li><a href="#">Women</a></li>
          <li><a href="#"></a>Kids</li>
        </ul>
      </nav>
       {/* <SearchName/> */}
     </div>
     <div className={style.menu}>
       <ul>
         <li><p>Home</p></li>
         <li><p>Collection</p></li>
         <li><p>New</p></li>
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
     </div>
     <div>

     </div>
    </div>
  )
}
