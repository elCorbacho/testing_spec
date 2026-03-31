import { createContext, useContext, useMemo, useState } from 'react'

const TicketsContext = createContext(null)

export function TicketsProvider({ children }) {
  const [tickets, setTickets] = useState([])

  const agregarTicket = (nuevoTicket) => {
    console.log('Context actualizado con ticket:', nuevoTicket)
    setTickets((prev) => [nuevoTicket, ...prev])
  }

  const actualizarEstadoTicket = (id, nuevoEstado) => {
    setTickets((prev) =>
      prev.map((t) => (t.id === id ? { ...t, estado: nuevoEstado } : t))
    )
  }

  const value = useMemo(
    () => ({ tickets, agregarTicket, actualizarEstadoTicket }),
    [tickets]
  )

  return (
    <TicketsContext.Provider value={value}>
      {children}
    </TicketsContext.Provider>
  )
}

export function useTickets() {
  const context = useContext(TicketsContext)

  if (!context) {
    throw new Error('useTickets debe usarse dentro de TicketsProvider')
  }

  return context
}
