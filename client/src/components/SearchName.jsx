import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { products, searchByName } from '../redux/action'

import lupa from '../../public/IMG/Lupa.png'

import style from '../design/nav.module.css'

export const SearchName = () => {
  const dispatch = useDispatch()
  const searchProduct = useSelector(state=>state.women)
  const error = useSelector(state => state.error);
  const [name, setName] = useState("")
  const [showRsult, setShowresult] = useState(false)


  function handleSubmit(e){
    e.preventDefault();
    if (!name.trim()) {
      console.error("El campo de búsqueda está vacío");
      return; // Salir si el input está vacío
      }
    dispatch(searchByName(name))
    setShowresult(true);
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
    <div className= {style.search} >
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input
        placeholder="Search"
        value={name}
        onChange={e=>handleInput(e)}  
        />

        <button type='submit'>
         <img src= {lupa} />
        </button> 

      </form>
        {
          showRsult  &&(
            <div>
            {

          searchProduct? (
            <div >
              {/* <h3>Producto encontrado</h3> */}
                <h3>{searchProduct.map((n)=>(n.name))}</h3>
                
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
