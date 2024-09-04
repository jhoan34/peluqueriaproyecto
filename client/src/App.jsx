import { useState } from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom';
import { Home } from './pages/home';
import { Panel } from './pages/Panel';
import { User } from './pages/user';
import { Register } from './components/register';
import { Login } from './components/login';
import { Citas } from './pages/agendarCitas';
import { Contacto } from './pages/contacto';
import { Navbar } from './components/navbar';
import { Servicios } from './pages/servicios';
import { Galeria } from './pages/galeria';
import { Team } from './pages/team';
import { SobreMi } from './pages/sobremi';
import './App.css'

function App() {

  return (
    <div className='App'>

      <HashRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/usuario/panel' element={<Panel />} />
          <Route path='/admin/panel' element={<Panel/>} />
          <Route path='/agendarcita' element={<Citas/>} />
          <Route path='/contacto' element={<Contacto/>} />
          <Route path='/user' element={<User />} />
          <Route path='/sobremi' element={<SobreMi/>} />
          <Route path="/services" element={<Servicios/>} />
          <Route path="/gallery" element={<Galeria/>} />
          <Route path="/team" element={<Team/>} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
