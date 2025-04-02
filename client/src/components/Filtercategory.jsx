import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterCategories,getWomen ,getShoes } from '../redux/action';
import more from '../../public/IMG/Vector1.png';

import style from '../design/filterCat.module.css';
import { Card } from './Card';
import { Link } from 'react-router-dom';

import {Lesstomore} from '../Filters/Lesstomore';
import { FilterSeccion } from '../Filters/FilterSeccion';

export const Filtercategory = () => {
  const dispatch = useDispatch();
  const gender = useSelector(state => state.gender);
  // const selectedGender = useSelector(state => state.selectedGender)
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [sortsIsOpen, setSortsIsOpen] = useState(false);
  const [selectedGender, setSelectedGender] = useState('');

  const categories = ["ALL", "Men", "Women", "Girls", "Boys"];

  
  // Función para manejar el clic en las categorías
  function handleFilterCategory(category) {
    // if(category === "ALL" || category === "Kids"){
      // category.slice(0,3)
      // dispatch(filterCategories(category))
    // }else{
      setSelectedGender(category);
      dispatch(filterCategories(category))
    // }
  }

  function FilterIsOpen (){
    setFilterIsOpen(!filterIsOpen)
  }

  function SortsIsOpen (){
    setSortsIsOpen(!sortsIsOpen)
  }

  return (
    <div className={style.filter}>
      <div style={{ display: 'flex', justifyContent:'space-between' }} className={style.filterClothing}>
      <div>
        {/* Lista de categorías */}
        <ul>
          {categories.map((category, index) => (
            <li 
             key={index} 
             className={` ${selectedGender === category ? style.filterItemActive : 'Metodo "active" activado'}`}
             onClick={() => handleFilterCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
        <div className={style.filterlesstomore} style={{alignContent:'center', cursor:'pointer'}}> 
        
         {/*Filtros */}

         <a onClick={FilterIsOpen}>
          Filters {filterIsOpen ? "(-)":"(+)"}  
        {filterIsOpen && (
        <div className={style.labelFilter}>
          <FilterSeccion />
        </div>
      )}
      </a>
         <a onClick={SortsIsOpen}>
           Sorts {sortsIsOpen ? "(-)":"(+)"}
           {
            sortsIsOpen && (
              <div>
                   <Lesstomore/>
              </div>
            )
           }
          </a>
        </div>
      </div>
      <div className={style.filterGender}>
      {/* {            console.log(gender, "genero filter")} */}
        {
          gender.length > 0 ? (
            gender.slice(0,3).map((product, index) => (
          <Card key={index} name={product.name} image={product.image} category={product.category}  amount={"$ "+product.amount} />
          ))
          ):(<p>No se encontraron productos</p>)
        }
      </div>
      <div className={style.more}>
      <Link to="/category">
        <p>More</p>
        <img src= {more} />
      </Link>
      </div>
    </div>
  );
};