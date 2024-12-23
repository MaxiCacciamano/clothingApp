import React, { useEffect } from 'react'

import style from '../design/newwek.module.css'
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';
import { getAccesorios } from '../redux/action';
export const Newwek = () => {
    const dispatch = useDispatch()
    const accessories = useSelector(state=>state.accessories)

    useEffect(()=>{
        dispatch(getAccesorios())
    })

        // Configuración básica para el carrusel
        const settings = {
            dots: true, // Mostrar puntos de navegación
            infinite: false, // Carrusel infinito
            speed: 500, // Velocidad de transición en milisegundos
            slidesToShow: 4, // Cuántas imágenes se mostrarán a la vez
            slidesToScroll: 3, // Cuántas imágenes se desplazan por vez
            arrow:true,
          };
  return (
    <div className={style.newwek}>
        <h1>New<br/> this week</h1>
        <Slider {...settings}>
            {
                accessories.map((a, index)=>(
                <div key={`${a.name}-${index}`} className={style.slickcarousel}>
                   <img src= {a.image}  alt={`Imagen: ${a.name}`} />
                </div>
                ))
            }
        </Slider>
    </div>
  )
}
