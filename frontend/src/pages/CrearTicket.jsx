import { useState } from 'react'
import { useTickets } from '../context/TicketsContext'
import Button from '../components/Button'
import TextInput from '../components/TextInput'

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
      <div className="page-header">
        <h1>Crear Ticket</h1>
        <p className="page-subtitle">
          Completá el formulario para crear un nuevo ticket de soporte.
        </p>
      </div>

      <form className="editorial-form" onSubmit={handleSubmit} noValidate>
        <TextInput
          type="text"
          id="titulo"
          name="titulo"
          label="Titulo"
          value={formData.titulo}
          onChange={handleChange}
          placeholder="Breve descripcion del problema"
          required
        />

        <TextInput
          as="textarea"
          id="descripcion"
          name="descripcion"
          label="Descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          placeholder="Detalla el problema..."
          required
        />

        <TextInput
          as="select"
          id="prioridad"
          name="prioridad"
          label="Prioridad"
          value={formData.prioridad}
          onChange={handleChange}
        >
            <option value="baja">Baja</option>
            <option value="media">Media</option>
            <option value="alta">Alta</option>
        </TextInput>

        <Button type="submit" className="btn-full btn-large" disabled={loading}>
          {loading ? 'Creando...' : 'Crear Ticket'}
        </Button>
      </form>

      {status.message && <div className={`message ${status.type}`}>{status.message}</div>}
    </section>
  )
}

export default CrearTicket
