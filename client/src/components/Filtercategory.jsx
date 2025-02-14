import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterCategories, getShoes } from '../redux/action';

import style from '../design/filterCat.module.css';
import { Card } from './Card';

export const Filtercategory = () => {
  const dispatch = useDispatch();
  const {gender} = useSelector(state => state);
  const [filter, setFilter] = useState(true);


  useEffect(() => {
    if (gender) {
      dispatch(filterCategories(gender));
    }
  }, []);

  

  const categories = ["ALL", "Men", "Women", "Kids"];


  // Función para manejar el clic en las categorías
  function handleFilterCategory(category) {
    // Si la categoría seleccionada es "ALL", mostramos todos los productos
    // if (category === "ALL") {
    //   setSelectedProducts(products);
    // } else {
      // Filtramos los productos según la categoría seleccionada
      gender.map((g, index)=>(
        <Card key={index} name={g.name}/>
      ))
    // }
  }

  return (
    <div>
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
    </div>
  );
};
