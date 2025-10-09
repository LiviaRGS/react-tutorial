import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'

import './App.css'
import './tema.css'
import AppTarefas from './AppTarefas'

import { useContext } from 'react'
import Usuarios from './pages/NotasFetch'
import Form from './pages/Form'

function App() {
 
  return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li><Link to = "/">Home</Link></li>
              <li><Link to = "/usuarios">Notas</Link></li>
              <li><Link to = "/usuarios/add">Adicionar Nota</Link></li>
            </ul>
          
          </nav>
        </div>
        <div>
          <Routes>
            <Route path = '/' element={<Home />}/>

            <Route path = '/usuarios' element={<Usuarios />}/>
            <Route path = '/usuarios/add' element={<Form />}/>
          </Routes>
        </div>
      </BrowserRouter>
  
  )
}

export default App
