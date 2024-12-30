import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { getWomen } from '../../redux/action';
import { Card } from '../Card';

import style from '../../design/getall.module.css'

export const Xvcolecctions = () => {
    const dispatch = useDispatch()
    const all = useSelector(state=>state.women)
    useEffect(()=>{
        dispatch(getWomen('your-category-api-endpoint'))
    },[])
    const settings = {
        dots: true, // Mostrar puntos de navegación
        infinite: false, // Carrusel infinito
        speed: 500, // Velocidad de transición en milisegundos
        slidesToShow: 4, // Cuántas imágenes se mostrarán a la vez
        slidesToScroll: 3, // Cuántas imágenes se desplazan por vez
        // arrow:true,
        // nextArrow:<CustonNextArrow/>,
        // prevArrow:<CustomPrevArrow/>
      };
  return (
    <div>
        <Slider {...settings}>
        {/* hasta aca */}
        <div className={style.XV}>
       {
        !all || all.length === 0 ? <h1>Loading</h1>: all.map((e, index)=>(
          <Card key={`${e.name}-${index}`} name={e.name} amount={e.amount} currency={e.currency} />
        ))
       }
        </div>
        </Slider>
    </div>
  )
}
