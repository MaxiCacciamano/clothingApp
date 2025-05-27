import React, { useEffect } from 'react'
import Slider from 'react-slick'; // Importamos el componente Slider de react-slick

import arrow from '../../../public/IMG/Arrow.png'
import carrusel from '../../../public/IMG/Vector.png'
import carruselLeft from '../../../public/IMG/Vectorleft.png';

import { useDispatch, useSelector } from 'react-redux';
import { getAccesorios, getShoes } from '../../redux/action';

import style from '../../design/getall.module.css'

export const Newcollection = () => {
  const dispatch = useDispatch()
      const accessories = useSelector(state=>state.accessories)


      useEffect(()=>{
        dispatch(getAccesorios())
      }, [dispatch])


          //Componente personalizado para la flecha
    const CustomPrevArrow= (props) => {
      const { className, style, onClick } = props;
      return(
        <div
        className={className}
        style={{
          ...style,
          display: "block",
          // background: "black",
          borderRadius: "50%",
          color:'black'
        }}
        onClick={onClick}
        >
          <img src={carruselLeft}/>
        </div>
      )
    }

    const CustomNextArrow = (props)=>{
      const { className, onClick } = props;
      return(
        <div
        className={className}
        onClick={onClick}
        >
          <img src={carrusel}/>
        </div>
      )
    }
    // Configuración básica para el carrusel
    const settings = {

      infinite: true, // Carrusel infinito
      speed: 500, // Velocidad de transición en milisegundos
      slidesToShow: 2, // Cuántas imágenes se mostrarán a la vez
      slidesToScroll: 1, // Cuántas imágenes se desplazan por vez
      arrow:true,
      prevArrow:<CustomPrevArrow/>,
      nextArrow:<CustomNextArrow/>
    };

  return (
    // <div className={style.collection}>
    <div className={style.contenedor}>
     <div className={style.presentacion}>
      <h1>NEW<br/>COLLECTION</h1>
      <p>Summer<br/> 2024</p>  
      <button>Go To Shop <img src={arrow}/></button>
     </div>
        <div className={style.carrusel}>
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
    // </div>
  )
}
