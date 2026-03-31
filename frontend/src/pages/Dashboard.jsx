import { useState, useMemo } from 'react'
import { useTickets } from '../context/TicketsContext'

const ESTADOS = ['abierto', 'en progreso', 'cerrado']

const siguienteEstado = {
  'abierto': 'en progreso',
  'en progreso': 'cerrado',
  'cerrado': 'abierto',
}

function Dashboard() {
  const { tickets, actualizarEstadoTicket } = useTickets()
  const [filtro, setFiltro] = useState('todos')

  const metricas = useMemo(() => ({
    total: tickets.length,
    abiertos: tickets.filter((t) => t.estado === 'abierto').length,
    enProgreso: tickets.filter((t) => t.estado === 'en progreso').length,
    cerrados: tickets.filter((t) => t.estado === 'cerrado').length,
  }), [tickets])

  const ticketsFiltrados = useMemo(() => {
    if (filtro === 'todos') return tickets
    return tickets.filter((t) => t.estado === filtro)
  }, [tickets, filtro])

  const handleCambiarEstado = async (ticket) => {
    const nuevoEstado = siguienteEstado[ticket.estado]

    try {
      const response = await fetch(`/api/tickets/${ticket.id}/estado`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ estado: nuevoEstado }),
      })

      const data = await response.json()

      if (data.success) {
        actualizarEstadoTicket(ticket.id, nuevoEstado)
      }
    } catch (error) {
      console.error('Error al cambiar estado:', error)
    }
  }

  return (
    <section className="page-content">
      <div className="page-header">
        <h1>Dashboard de Tickets</h1>
        <p className="page-subtitle">
          Estado actual de todos los tickets de soporte.
        </p>
      </div>

      <div className="metrics-grid">
        <div className="metric-card total">
          <span className="metric-number">{metricas.total}</span>
          <span className="metric-label">Total</span>
        </div>
        <div className="metric-card abiertos">
          <span className="metric-number">{metricas.abiertos}</span>
          <span className="metric-label">Abiertos</span>
        </div>
        <div className="metric-card en-progreso">
          <span className="metric-number">{metricas.enProgreso}</span>
          <span className="metric-label">En Progreso</span>
        </div>
        <div className="metric-card cerrados">
          <span className="metric-number">{metricas.cerrados}</span>
          <span className="metric-label">Cerrados</span>
        </div>
      </div>

      <div className="filters">
        <button
          className={`filter-pill ${filtro === 'todos' ? 'active' : ''}`}
          onClick={() => setFiltro('todos')}
        >
          Todos
        </button>
        {ESTADOS.map((estado) => (
          <button
            key={estado}
            className={`filter-pill ${filtro === estado ? 'active' : ''}`}
            onClick={() => setFiltro(estado)}
          >
            {estado.charAt(0).toUpperCase() + estado.slice(1)}
          </button>
        ))}
      </div>

      {ticketsFiltrados.length === 0 ? (
        <div className="empty-state">
          <svg className="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M15 5v2m0 4v2m0 4v2M5 5h14a2 2 0 012 2v3a2 2 0 010 4v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3a2 2 0 010-4V7a2 2 0 012-2z" />
          </svg>
          <p>No hay tickets{filtro !== 'todos' ? ` con estado "${filtro}"` : ''}</p>
        </div>
      ) : (
        <div className="tickets-lista">
          {ticketsFiltrados.map((ticket) => (
            <article className="ticket-card" key={ticket.id}>
              <div className="ticket-header">
                <h2 className="ticket-title">{ticket.titulo}</h2>
                <span className={`status-badge ${ticket.estado.replace(' ', '-')}`}>
                  {ticket.estado}
                </span>
              </div>
              <p className="ticket-desc">{ticket.descripcion}</p>
              <div className="ticket-footer">
                <span className="ticket-meta">
                  Prioridad: {ticket.prioridad} · {new Date(ticket.fecha).toLocaleDateString()}
                </span>
                <button
                  className="status-btn"
                  onClick={() => handleCambiarEstado(ticket)}
                >
                  → {siguienteEstado[ticket.estado]}
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default Dashboard
