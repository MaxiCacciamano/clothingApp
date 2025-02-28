import React from 'react'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {lesstomoreClothing} from '../redux/action/index.js';

export const Lesstomore = () => {
    const dispatch = useDispatch();
    const [order, setOrder] = useState("")

    function handlelesstomore(e){
        
        dispatch(lesstomoreClothing(e.target.value))
    }
  return (
    <div>
        <select onChange={e=>handlelesstomore(e)}>
            <option defaultValue={ "all"} hidden></option>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
        </select>
    </div>
  )
}
