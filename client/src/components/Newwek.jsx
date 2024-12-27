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
    },[])

    const CustonNextArrow = ({onClick})=>(
        <button className={style.customArrow} onClick={onClick} style={{marginLeft:'60px'}}>
            ▶
        </button>
    );

    const CustomPrevArrow = ({onClick})=>(
        <button className={style.customArrow} onClick={onClick} style={{}}>
        ◀
        </button>
    )

        // Configuración básica para el carrusel
        const settings = {
            dots: false, // Mostrar puntos de navegación
            infinite: false, // Carrusel infinito
            speed: 500, // Velocidad de transición en milisegundos
            slidesToShow: 4, // Cuántas imágenes se mostrarán a la vez
            slidesToScroll: 3, // Cuántas imágenes se desplazan por vez
            arrow:true,
            nextArrow:<CustonNextArrow/>,
            prevArrow:<CustomPrevArrow/>
          };
  return (
    <div className={style.newwek}>
    <div className={style.info}>
        <h1>New<br/> this week</h1>
        <a href='#' style={{marginTop:'auto', marginRight:'10px'}}>See more</a>
    </div>
        <div className={style.carrusel}>
        <Slider {...settings}>
            {
                accessories.map((a, index)=>(
                <div key={`${a.name}-${index}`} className={style.slicknew}>
                    <img src= {a.image}  alt={`Imagen: ${a.name}`} />
                     <div className={style.info}>
                      <p><span> {a.name} </span></p>
                      <p> {a.currency} {a.amount} </p>
                     </div>
                </div>
                ))
            }
        </Slider>
        </div>
    </div>
  )
}