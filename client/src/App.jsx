import React,{ useState, useEffect } from 'react'
import {useDispatch} from 'react-redux';
import {Route, Routes} from 'react-router-dom';
import './App.css'

import {Home} from './page/Home'

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch()
  },[])

  return (
    <div>
     <Routes>
       <Route path="/" element={<Home/>}/>
     </Routes>
    </div>
  )
}

export default App
