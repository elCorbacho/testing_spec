import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Formulario from './pages/Formulario'
import ListaMensajes from './pages/ListaMensajes'
import CrearTicket from './pages/CrearTicket'
import Dashboard from './pages/Dashboard'

function NavLink({ to, children }) {
  const location = useLocation()
  const isActive = location.pathname === to
  return (
    <Link to={to} className={isActive ? 'active' : ''}>
      {children}
    </Link>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-frame">
        <div className="container app-shell">
          <header className="header">
            <div>
              <span className="header-kicker">utility desk / 1986</span>
              <span className="header-title">Formulario de Contacto</span>
            </div>
            <nav className="nav-links">
              <NavLink to="/">Inicio</NavLink>
              <NavLink to="/formulario">Formulario</NavLink>
              <NavLink to="/lista">Lista</NavLink>
              <NavLink to="/nuevo-ticket">Tickets</NavLink>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </nav>
          </header>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/formulario" element={<Formulario />} />
            <Route path="/lista" element={<ListaMensajes />} />
            <Route path="/nuevo-ticket" element={<CrearTicket />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
