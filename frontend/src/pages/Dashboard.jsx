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
      <h1>📊 Dashboard de Tickets</h1>
      <p className="subtitle">Resumen y gestión de tickets de soporte.</p>

      <div className="metricas">
        <div className="metrica-card">
          <span className="metrica-numero">{metricas.total}</span>
          <span className="metrica-label">Total</span>
        </div>
        <div className="metrica-card abiertos">
          <span className="metrica-numero">{metricas.abiertos}</span>
          <span className="metrica-label">Abiertos</span>
        </div>
        <div className="metrica-card progreso">
          <span className="metrica-numero">{metricas.enProgreso}</span>
          <span className="metrica-label">En Progreso</span>
        </div>
        <div className="metrica-card cerrados">
          <span className="metrica-numero">{metricas.cerrados}</span>
          <span className="metrica-label">Cerrados</span>
        </div>
      </div>

      <div className="filtros">
        <button
          className={`filtro-btn ${filtro === 'todos' ? 'active' : ''}`}
          onClick={() => setFiltro('todos')}
        >
          Todos
        </button>
        {ESTADOS.map((estado) => (
          <button
            key={estado}
            className={`filtro-btn ${filtro === estado ? 'active' : ''}`}
            onClick={() => setFiltro(estado)}
          >
            {estado.charAt(0).toUpperCase() + estado.slice(1)}
          </button>
        ))}
      </div>

      {ticketsFiltrados.length === 0 ? (
        <div className="empty-state">No hay tickets{filtro !== 'todos' ? ` con estado "${filtro}"` : ''}</div>
      ) : (
        <div className="tickets-lista">
          {ticketsFiltrados.map((ticket) => (
            <article className="ticket-card" key={ticket.id}>
              <div className="ticket-header">
                <h2>{ticket.titulo}</h2>
                <span className={`estado-badge ${ticket.estado.replace(' ', '-')}`}>
                  {ticket.estado}
                </span>
              </div>
              <p className="ticket-descripcion">{ticket.descripcion}</p>
              <div className="ticket-footer">
                <span className="ticket-meta">
                  Prioridad: {ticket.prioridad} · {new Date(ticket.fecha).toLocaleString()}
                </span>
                <button
                  className="estado-btn"
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
