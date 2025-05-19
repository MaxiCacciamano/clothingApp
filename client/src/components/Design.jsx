import React from 'react'

import style from '../design/design.module.css';

import rectangle16 from '../../public/IMG/Rectangle 16.png';
import rectangle14 from '../../public/IMG/Rectangle 14.png';
import rectangle17 from '../../public/IMG/Rectangle 17 (1).png';

export const Design = () => {
  return (
    <div className={style.design}>
        <h2>Our approach ti fashion design</h2>
        <p>at elegant vouge, we blend creativity with oraftsmanship to create
            fashion that transcends trends and stands the test of time each design
            is meticulously crafted, ensuring the highest quelity exquisite finish
        </p>
        <div className= {style.carrusel}  style={{marginTop:'70px'}}>
          <img className={style.imgNormal} src= {rectangle16} />
          <img className={style.imgSubida} src= {rectangle14} />
          <img className={style.imgNormal} src= {rectangle17} />
          <img className={style.imgSubida} src= {rectangle14} />
        </div>
    </div>
  )
}
