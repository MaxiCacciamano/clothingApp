import React, { useState } from 'react'

import style from '../design/footer.module.css'

export const Footer = () => {

  const [openInfo, setOpenInfo] = useState(false)
  const [openLenguage, setLeguage] = useState(false) 

  return (
    <div className={style.footer} style={{backgroundColor:'#F5F5F5'}}>
        <div>
        <ul className={style.submenuFooterGeneral}>
            <li className={style.menu} onClick={()=>setOpenInfo(!openInfo)}>Info
            {
              openInfo &&(
              <ul className={style.submenu}>
                <li>Pricing</li>
                <li>About</li>
                <li>Contacts</li>
              </ul>
              )
            }
            </li>
            <li className={style.menu} onClick={()=>setLeguage(!openLenguage)}>Lenguages
            {
              openLenguage && (
            <ul  className={style.submenu}>
                <li >ENG</li>
                <li >ESP</li>
                <li >SVE</li>
            </ul>
              )
            }
            </li>
        </ul>

        </div>
        <div className={style.titles}>
          <div className={style.titles2}>
            <p>Technologies</p>
            <h1>VR <br/> XIV<br/> QR</h1>
          </div>
            <p style={{marginTop:'120px', marginLeft:'10px'}}>Near-field communication</p>
        </div>

    </div>
  )
}
