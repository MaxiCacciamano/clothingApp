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
        <div style={{marginTop:'70px'}}>
          <img style={{marginBottom:'100px'}} src= {rectangle16} />
          <img style={{margin:'20px'}} src= {rectangle14} />
          <img style={{marginBottom:'100px'}} src= {rectangle17} />
        </div>
    </div>
  )
}
