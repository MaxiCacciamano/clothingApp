import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { products, searchByName } from '../redux/action'

export const SearchName = () => {
  const dispatch = useDispatch()
  const searchProduct = useSelector(state=>state.productsearch)
  const error = useSelector(state => state.error);
  const [name, setName] = useState(null)
  const [showRsult, setShowresult] = useState(false)


  function handleSubmit(e){
    e.preventDefault();
    if (!name.trim()) {
      console.error("El campo de búsqueda está vacío");
      return; // Salir si el input está vacío
      }
    dispatch(searchByName(name))
  }

  function handleInput(e){
    e.preventDefault()
    setName(e.target.value)
    console.log(name, '22')
  }

  function handleSearch(){
    dispatch(searchByName(name))
    setShowresult(true)
    
  }



  return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input
        placeholder="Search Name"
        value={name}
        onChange={e=>handleInput(e)}
        />
        <button type='submit' onClick={e=>handleSearch(e)}>
        🔍
        </button>


      </form>
        {
          showRsult  &&(
            <div>
            {

          searchProduct ? (
            <div>
              <h3>Producto encontrado</h3>
              <p>Nombre: {searchProduct.name} </p>
            </div>
          ): error ? (
                <div>
                    <p style={{ color: 'red' }}>{error}</p>
                </div>
          ):(
            <p>Introduce un nombre para buscar un producto.</p>
          )
            }

            </div>
          )
        }
    </div>
  )
}
