import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Formulario from './pages/Formulario'
import ListaMensajes from './pages/ListaMensajes'
import CrearTicket from './pages/CrearTicket'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <div className="container app-shell">
        <nav className="navbar">
          <Link to="/">Inicio</Link>
          <Link to="/formulario">Formulario</Link>
          <Link to="/lista">Lista</Link>
          <Link to="/nuevo-ticket">Nuevo Ticket</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/lista" element={<ListaMensajes />} />
          <Route path="/nuevo-ticket" element={<CrearTicket />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
