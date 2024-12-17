import React, { useState } from 'react'

import style from '../design/hamburgesa.module.css'
import { SearchName } from './SearchName'

export const Hamburgesa = () => {
      const [isOpen, setIsOpen] = useState(false)
    
      const toggleMenu = ( ) => {
        setIsOpen(!isOpen)
      }
      const handleMenuClick = (e)=>{
        // Evita que el evento cierre el menu al interactuar con el input
        e.stopPropagation();
      }
  return (
    <div>

             <div className={`${style.menuToggle} ${isOpen? style.open : ''}`} 
             onClick={toggleMenu}>
             {/*Menu hamburgesa*/ }
            <div className={style.line}>
            <hr className={style.bar} style={{ border:'0',height:'1.5px',backgroundColor:'#333', margin:' 0', width:'30px', marginBottom: '6px'}}/>
            <hr className={style.bar} style={{ border:'0',height:'1.5px',backgroundColor:'#333', margin:' 0', width:'20px', marginBottom: '6px'}}/>
            <hr className={style.bar} style={{ border:'0',height:'1.5px',backgroundColor:'#333', margin:' 0', width:'10px',}}/>
            </div>
             {/* Menú desplegable */}
             <div>
              <nav className={`${style.nav} ${isOpen? style.show:''}`} onClick={handleMenuClick}>
                <ul>
                  <li><a href="#">Men</a></li>
                  <li><a href="#">Women</a></li>
                  <li><a href="#"></a>Kids</li>
                </ul>
                <div className={style.search}>
               <SearchName/>
                </div>
              </nav>
             </div>
             </div>
    </div>
  )
}
