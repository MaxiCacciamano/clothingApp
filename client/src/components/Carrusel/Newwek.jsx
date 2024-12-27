import React, { useEffect } from 'react'

import style from '../../design/newwek.module.css'


import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';
import { getAccesorios } from '../../redux/action';
import { Link } from 'react-router-dom';
export const Newwek = () => {
    const dispatch = useDispatch()
    const accessories = useSelector(state=>state.accessories)

    useEffect(()=>{
        dispatch(getAccesorios())
    },[])

    const CustonNextArrow = ({onClick})=>(
        <button className={`${style.customArrow} ${style.prev}`} onClick={onClick}>
            ▶
        </button>
    );

    const CustomPrevArrow = ({onClick})=>(
        <button className={`${style.customArrow} ${style.next}`} onClick={onClick} >
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
                //agregar el detalle de cada producto

                accessories.map((a, index)=>(
                <div key={`${a.name}-${index}`} className={style.slicknew}>
                    <img src= {a.image}  alt={`Imagen: ${a.name}`}/>
                <Link to="/details" style={{position:'absolute',bottom:'55px'}}>
                     <button style={{background:'#DCDCDC', color:'black', fontSize:'20px', padding:'10px', 
                     borderRadius:'5px',height:'40px', display:'flex', alignItems:'center', alignContent:'center',justifyContent:'center'}}>
                     +
                     </button>
                </Link>
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
