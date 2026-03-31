import { useState } from 'react'
import { useMensajes } from '../context/MensajesContext'

const validarFormulario = ({ nombre, email, mensaje }) => {
  if (!nombre.trim() || !email.trim() || !mensaje.trim()) {
    return 'Todos los campos son requeridos'
  }

  if (!email.includes('@')) {
    return 'Email inválido'
  }

  return null
}

function Formulario() {
  const { agregarMensaje } = useMensajes()
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
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

    const errorValidacion = validarFormulario(formData)

    if (errorValidacion) {
      setStatus({ type: 'error', message: errorValidacion })
      return
    }

    setLoading(true)

    try {
      const response = await fetch('/api/formulario', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (data.success) {
        agregarMensaje(data.data)
        setStatus({ type: 'success', message: '¡Formulario enviado correctamente! 🎉' })
        setFormData({ nombre: '', email: '', mensaje: '' })
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
      <h1>✍️ Enviar mensaje</h1>
      <p className="subtitle">Completá el formulario para guardar un nuevo mensaje.</p>

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Escribí tu mensaje..."
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar Mensaje'}
        </button>
      </form>

      {status.message && <div className={`message ${status.type}`}>{status.message}</div>}
    </section>
  )
}

export default Formulario
