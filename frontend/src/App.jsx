import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Formulario from './pages/Formulario'
import ListaMensajes from './pages/ListaMensajes'

function App() {
  return (
    <BrowserRouter>
      <div className="container app-shell">
        <nav className="navbar">
          <Link to="/">Inicio</Link>
          <Link to="/formulario">Formulario</Link>
          <Link to="/lista">Lista</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/lista" element={<ListaMensajes />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
