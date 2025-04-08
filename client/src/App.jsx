import React,{ useState, useEffect } from 'react'
import {useDispatch} from 'react-redux';
import {Route, Routes} from 'react-router-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css'

import {Home} from './page/Home'
import { Details } from './page/Details';
import { Category } from './page/Category';
import { Footer } from './components/Footer';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/details" element={<Details/>}/>
       <Route path='/category' element={<Category/>}/>
     </Routes>
      <Footer/>
    </div>
  )
}

export default App
