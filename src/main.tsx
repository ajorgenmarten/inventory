import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/index.css'
import './assets/custom.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import { Navbar } from './components/navbar'
import { CreateEntryPage } from './pages/create-entry'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <CreateEntryPage />
  </React.StrictMode>,
)
