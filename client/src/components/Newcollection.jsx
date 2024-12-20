import React, { useEffect } from 'react'
import Slider from 'react-slick'; // Importamos el componente Slider de react-slick

import arrow from '../../public/IMG/Arrow.png'
import { useDispatch, useSelector } from 'react-redux';
import { getAccesorios } from '../redux/action';

import style from '../design/getall.module.css'

export const Newcollection = () => {
  const dispatch = useDispatch()
      const accessories = useSelector(state=>state.accessories)
    // Configuración básica para el carrusel
    const settings = {
      dots: true, // Mostrar puntos de navegación
      infinite: false, // Carrusel infinito
      speed: 500, // Velocidad de transición en milisegundos
      slidesToShow: 2, // Cuántas imágenes se mostrarán a la vez
      slidesToScroll: 1, // Cuántas imágenes se desplazan por vez
    };

    useEffect(()=>{
      dispatch(getAccesorios())
    })
  return (
    <div className={style.collection}>
    <div className={style.contenedor}>
     <div className={style.presentacion}>
      <h1>New<br/> collection</h1>
      <p>Summer<br/> 2024</p>  
     </div>
        <div className={style.carrusel}>
      <h2>Carrousel de imagenes</h2>
     <Slider {...settings}>
     {
      accessories.map((e, index)=>(
        <div key={`${e.name}-${index}`} className={style.slickcarousel}>
         <img src= {e.image} alt={`Imagen: ${e.name}`} />
        </div>
      ))
     }
     </Slider>
     </div>
    </div>
    </div>
  )
}
