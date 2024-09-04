import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UsuarioProvider } from './context/usuario.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UsuarioProvider>
    <App />
  </UsuarioProvider>,
)
