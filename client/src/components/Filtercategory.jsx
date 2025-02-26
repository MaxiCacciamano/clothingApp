import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterCategories,getWomen ,getShoes } from '../redux/action';
import more from '../../public/IMG/Vector1.png';

import style from '../design/filterCat.module.css';
import { Card } from './Card';
import { Link } from 'react-router-dom';

export const Filtercategory = () => {
  const dispatch = useDispatch();
  const gender = useSelector(state => state.gender);
  const allCategory = useSelector(state => state.allCategory);
  const [filter, setFilter] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const categories = ["ALL", "Men", "Women", "Girls", "Boys"];

  
  // Función para manejar el clic en las categorías
  function handleFilterCategory(category) {
    // if(category === "ALL" || category === "Kids"){
      // category.slice(0,3)
      // dispatch(filterCategories(category))
    // }else{
      dispatch(filterCategories(category))
    // }
  }

  return (
    <div className={style.filter}>
      <div style={{ display: 'flex', flexDirection: 'row' }} className={style.filterClothing}>
        {/* Lista de categorías */}
        <ul>
          {categories.map((category, index) => (
            <li key={index} onClick={() => handleFilterCategory(category)}>
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className={style.filterGender}>
{/* {            console.log(gender, "genero filter")} */}
        {
          gender.length > 0 ? (
            gender.map((product, index) => (
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