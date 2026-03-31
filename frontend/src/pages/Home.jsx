import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="page-content">
      <h1>📬 Formulario de Contacto</h1>
      <p className="subtitle">
        Esta demo ahora tiene Router, Context API y un backend separado en MVC.
      </p>

      <div className="home-actions">
        <Link className="button-link" to="/formulario">
          Ir al formulario
        </Link>
        <Link className="button-link secondary" to="/lista">
          Ver mensajes enviados
        </Link>
      </div>
    </section>
  )
}

export default Home
