import { Link } from 'react-router-dom'

const actions = [
  {
    to: '/formulario',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
    title: 'Enviar Mensaje',
    desc: 'Completá el formulario para contactarnos'
  },
  {
    to: '/lista',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
      </svg>
    ),
    title: 'Mensajes Enviados',
    desc: 'Ver todos los mensajes enviados'
  },
  {
    to: '/nuevo-ticket',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 5v2m0 4v2m0 4v2M5 5h14a2 2 0 012 2v3a2 2 0 010 4v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3a2 2 0 010-4V7a2 2 0 012-2z" />
      </svg>
    ),
    title: 'Crear Ticket',
    desc: 'Abrir un nuevo ticket de soporte'
  },
  {
    to: '/dashboard',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    title: 'Dashboard',
    desc: 'Ver estado de todos los tickets'
  },
]

function Home() {
  return (
    <section className="page-content">
      <div className="page-header">
        <h1>Bienvenido</h1>
        <p className="page-subtitle">
          Sistema de gestión de mensajes y tickets de soporte. Elegí una opción para comenzar:
        </p>
      </div>

      <div className="action-grid">
        {actions.map((action) => (
          <Link key={action.to} to={action.to} className="action-card">
            <div className="action-icon">{action.icon}</div>
            <span className="action-title">{action.title}</span>
            <span className="action-desc">{action.desc}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Home
