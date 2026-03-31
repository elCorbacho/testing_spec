import { useState } from 'react'
import { useTickets } from '../context/TicketsContext'

function CrearTicket() {
  const { agregarTicket } = useTickets()
  const [formData, setFormData] = useState({
    titulo: '',
    descripcion: '',
    prioridad: 'media',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: '', message: '' })

    if (!formData.titulo.trim() || !formData.descripcion.trim()) {
      setStatus({ type: 'error', message: 'Título y descripción son requeridos' })
      return
    }

    setLoading(true)

    try {
      const response = await fetch('/api/tickets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        agregarTicket(data.data)
        setStatus({ type: 'success', message: '¡Ticket creado correctamente!' })
        setFormData({ titulo: '', descripcion: '', prioridad: 'media' })
        return
      }

      setStatus({ type: 'error', message: data.message })
    } catch (error) {
      setStatus({ type: 'error', message: 'Error de conexión' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="page-content">
      <h1>🎫 Crear Ticket</h1>
      <p className="subtitle">Completá el formulario para crear un nuevo ticket de soporte.</p>

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            placeholder="Breve descripción del problema"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="descripcion">Descripción</label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            placeholder="Detallá el problema..."
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="prioridad">Prioridad</label>
          <select
            id="prioridad"
            name="prioridad"
            value={formData.prioridad}
            onChange={handleChange}
          >
            <option value="baja">Baja</option>
            <option value="media">Media</option>
            <option value="alta">Alta</option>
          </select>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Creando...' : 'Crear Ticket'}
        </button>
      </form>

      {status.message && <div className={`message ${status.type}`}>{status.message}</div>}
    </section>
  )
}

export default CrearTicket
