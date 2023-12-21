import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/index.css'
import { Navbar } from './components/navbar'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <div className='container mx-auto'>
      <h1>Hola mundo</h1>
      <button className='btn btn-primary'>Boton primario</button>
    </div>
  </React.StrictMode>,
)
