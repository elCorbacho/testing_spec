import { useMensajes } from '../context/MensajesContext'

function ListaMensajes() {
  const { mensajes } = useMensajes()

  const timeAgo = (date) => {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000)
    if (seconds < 60) return 'Ahora'
    const minutes = Math.floor(seconds / 60)
    if (minutes < 60) return `${minutes}m ago`
    const hours = Math.floor(minutes / 60)
    if (hours < 24) return `${hours}h ago`
    const days = Math.floor(hours / 24)
    return `${days}d ago`
  }

  return (
    <section className="page-content">
      <div className="page-header">
        <h1>Mensajes Enviados</h1>
        <p className="page-subtitle">
          Todos los mensajes que has enviado al sistema.
        </p>
      </div>

      {mensajes.length === 0 ? (
        <div className="empty-state">
          <svg className="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 7l9 6 9-6" />
          </svg>
          <p>No hay mensajes enviados aún.</p>
        </div>
      ) : (
        <div className="mensajes-lista">
          {mensajes.map((mensaje) => (
            <article className="mensaje-card" key={mensaje.id}>
              <div className="mensaje-header">
                <span className="mensaje-name">{mensaje.nombre}</span>
                <span className="mensaje-time">{timeAgo(mensaje.fecha)}</span>
              </div>
              <p className="mensaje-email">{mensaje.email}</p>
              <p className="mensaje-preview">{mensaje.mensaje}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default ListaMensajes
