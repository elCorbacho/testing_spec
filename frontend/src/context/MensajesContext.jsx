import { createContext, useContext, useMemo, useState } from 'react'

const MensajesContext = createContext(null)

export function MensajesProvider({ children }) {
  const [mensajes, setMensajes] = useState([])

  const agregarMensaje = (nuevoMensaje) => {
    console.log('Context actualizado con mensaje:', nuevoMensaje)
    setMensajes((prevMensajes) => [nuevoMensaje, ...prevMensajes])
  }

  const value = useMemo(() => ({ mensajes, agregarMensaje }), [mensajes])

  return (
    <MensajesContext.Provider value={value}>
      {children}
    </MensajesContext.Provider>
  )
}

export function useMensajes() {
  const context = useContext(MensajesContext)

  if (!context) {
    throw new Error('useMensajes debe usarse dentro de MensajesProvider')
  }

  return context
}
