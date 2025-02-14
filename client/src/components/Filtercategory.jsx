import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterCategories, getShoes } from '../redux/action';

import style from '../design/filterCat.module.css';

export const Filtercategory = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState(true);

  // Estado local para los productos seleccionados
  const [selectedProducts, setSelectedProducts] = useState([]);
  
  // Obtenemos el estado de los productos del store
  const products = useSelector(state => state.getall);
  const gender = useSelector(state => state.gender);
  const categories = ["ALL", "Men", "Women", "Kids"];

  // Cuando cambia el género, filtramos los productos
  useEffect(() => {
    if (gender) {
      dispatch(filterCategories(gender));
    }
  }, [dispatch]);

  // Función para manejar el clic en las categorías
  function handleFilterCategory(category) {
    // Si la categoría seleccionada es "ALL", mostramos todos los productos
    if (category === "ALL") {
      setSelectedProducts(products);
    } else {
      // Filtramos los productos según la categoría seleccionada
      const filteredProducts = products.filter(prod => prod.category === category);
      setSelectedProducts(filteredProducts);
    }
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

      {/* Mostrar los productos filtrados */}
      <div className={style.productList}>
        {selectedProducts.length > 0 ? (
          selectedProducts.map((product, index) => (
            <div key={index} className={style.productCard}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.amount} {product.currency}</p>
            </div>
          ))
        ) : (
          <p>No products found for this category</p>
        )}
      </div>
    </div>
  );
};
