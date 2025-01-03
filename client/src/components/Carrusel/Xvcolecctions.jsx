import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { filterCategories, getWomen } from '../../redux/action';
import { Card } from '../Card';

import more from '../../../public/IMG/more.png'

import style from '../../design/newwek.module.css'

import { Link } from 'react-router-dom';

export const Xvcolecctions = () => {
    const dispatch = useDispatch()
    const allProd = useSelector(state=>state.women)

    useEffect(()=>{
        dispatch(getWomen())
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
        !allProd || allProd.length === 0 ? <h1>Loading</h1>: allProd.map((e, index)=>(
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
        <div className={style.more}>
        <a href='#'>
          More
        </a>
        <img src={more}/> 
        </div>
        </div>
    </div>
  )
}
