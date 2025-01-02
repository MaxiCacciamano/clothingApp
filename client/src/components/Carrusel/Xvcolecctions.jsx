import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { getWomen } from '../../redux/action';
import { Card } from '../Card';

import style from '../../design/newwek.module.css'

import { Link } from 'react-router-dom';

export const Xvcolecctions = () => {
    const dispatch = useDispatch()
    const all = useSelector(state=>state.women)
    useEffect(()=>{
        dispatch(getWomen('your-category-api-endpoint'))
    },[])
    const settings = {
        dots: false, // Mostrar puntos de navegación
        infinite: false, // Carrusel infinito
        speed: 100, // Velocidad de transición en milisegundos
        slidesToShow: 4, // Cuántas imágenes se mostrarán a la vez
        slidesToScroll: 2, // Cuántas imágenes se desplazan por vez
        // arrow:true,
        // nextArrow:<CustonNextArrow/>,
        // prevArrow:<CustomPrevArrow/>
      };
  return (
    <div>
        <div className={style.XV}>
        <Slider {...settings}>
        {/* hasta aca */}
       {
        !all || all.length === 0 ? <h1>Loading</h1>: all.map((e, index)=>(
          <div key={`${e.name}-${index}`} className={style.slicknew}>
                    <img src= {e.image}  alt={`Imagen: ${e.name}`}/>
                <Link to="/details" style={{position:'absolute',bottom:'70px'}}>
                     <button className={style.buttonPlus} style={{background:'transparent', color:'#787878', fontSize:'20px', padding:'10px', 
                     borderRadius:'5px', display:'flex', alignItems:'center', alignContent:'center',justifyContent:'center'}}>
                     +
                     </button>
                </Link>
                     <div className={style.info}>
                     <p>{} </p>
                      <p><span> {e.name} </span></p>
                      <p> {e.currency} {e.amount} </p>
                     </div>
          </div>
        ))
       }
        </Slider>
        <div>
        <a>
          More
        </a>
          
        </div>
        </div>
    </div>
  )
}
