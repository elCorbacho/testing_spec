import { useState } from 'react'
import { useMensajes } from '../context/MensajesContext'
import Button from '../components/Button'
import TextInput from '../components/TextInput'

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
        setStatus({ type: 'success', message: '¡Formulario enviado correctamente!' })
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
      <div className="page-header">
        <h1>Nuevo Mensaje</h1>
        <p className="page-subtitle">Completá el formulario para enviar un nuevo mensaje.</p>
      </div>

      <form className="editorial-form" onSubmit={handleSubmit} noValidate aria-busy={loading}>
        <TextInput
          type="text"
          id="nombre"
          name="nombre"
          label="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Tu nombre"
          describedBy={status.message ? 'formulario-status' : undefined}
          required
        />

        <TextInput
          type="email"
          id="email"
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          placeholder="tu@email.com"
          describedBy={status.message ? 'formulario-status' : undefined}
          required
        />

        <TextInput
          as="textarea"
          id="mensaje"
          name="mensaje"
          label="Mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Escribi tu mensaje..."
          describedBy={status.message ? 'formulario-status' : undefined}
          required
        />

        <Button type="submit" className="btn-full btn-large" disabled={loading} aria-busy={loading}>
          {loading ? 'Enviando...' : 'Enviar Mensaje'}
        </Button>
      </form>

      {status.message && (
        <div id="formulario-status" className={`message ${status.type}`} role="status" aria-live="polite">
          {status.message}
        </div>
      )}
    </section>
  )
}

export default Formulario
