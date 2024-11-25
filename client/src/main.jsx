import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider} from 'react-redux'
import { store } from './redux/store/index.js'
import {BrowserRouter} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}> 
  <StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </StrictMode>
  </Provider>,
  document.getElementById('root')
)


reportWebVitals()