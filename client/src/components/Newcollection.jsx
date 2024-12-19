import React, { useEffect } from 'react'
import Slider from 'react-slick'; // Importamos el componente Slider de react-slick

import arrow from '../../public/IMG/Arrow.png'
import { useDispatch, useSelector } from 'react-redux';
import { getAccesorios } from '../redux/action';

export const Newcollection = () => {
  const dispatch = useDispatch()
      const accessories = useSelector(state=>state.accessories)
    // Configuración básica para el carrusel
    const settings = {
      dots: true, // Mostrar puntos de navegación
      infinite: false, // Carrusel infinito
      speed: 500, // Velocidad de transición en milisegundos
      slidesToShow: 1, // Cuántas imágenes se mostrarán a la vez
      slidesToScroll: 1, // Cuántas imágenes se desplazan por vez
    };

    useEffect(()=>{
      dispatch(getAccesorios())
    })
  return (
    <div>
    <div>
    <h1>New collection</h1>
    <p>Summer 2024</p>
    </div>
    <div>
     <h2>Carrousel de imagenes</h2>
     <Slider {...settings}>
     {
      accessories.map((e, index)=>(
        <div key={`${e.name}-${index}`}>
        <img src= {e.image} alt={`Imagen${e.name}`} />
        </div>
      ))
     }
     </Slider>
    </div>
    </div>
  )
}
