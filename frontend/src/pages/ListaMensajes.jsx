import { useMensajes } from '../context/MensajesContext'

function ListaMensajes() {
  const { mensajes } = useMensajes()

  return (
    <section className="page-content">
      <h1>🗂️ Mensajes enviados</h1>
      <p className="subtitle">Los mensajes exitosos quedan disponibles mientras navegás por la SPA.</p>

      {mensajes.length === 0 ? (
        <div className="empty-state">No hay mensajes</div>
      ) : (
        <div className="mensajes-lista">
          {mensajes.map((mensaje) => (
            <article className="mensaje-card" key={mensaje.id}>
              <div className="mensaje-header">
                <h2>{mensaje.nombre}</h2>
                <span>{new Date(mensaje.fecha).toLocaleString()}</span>
              </div>
              <p className="mensaje-email">{mensaje.email}</p>
              <p>{mensaje.mensaje}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default ListaMensajes
