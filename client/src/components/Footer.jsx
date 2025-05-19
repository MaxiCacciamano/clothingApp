import React, { useState } from 'react'

import style from '../design/footer.module.css'

export const Footer = () => {

  const [openInfo, setOpenInfo] = useState(false)
  const [openLenguage, setLeguage] = useState(false) 

  return (
    <div style={{backgroundColor:'#F5F5F5'}}>
      <div className={style.footer}>
        <div>
        <ul className={style.submenuFooterGeneral}>
            <li className={style.menu} onClick={()=>setOpenInfo(!openInfo)}><p>Info</p>
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
            <li className={style.menu} onClick={()=>setLeguage(!openLenguage)}><p>Lenguages</p>
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
            <h1> <h1 style={{ color:'rgb(214 211 211)', margin:'0', padding:'0' }}>VR</h1>  XIV<br/> QR</h1>
          </div>
            <p style={{marginTop:'120px', marginLeft:'20px'}}>Near-field communication</p>
        </div>
      </div>

    </div>
  )
}
