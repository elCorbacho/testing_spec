const tickets = [];

const ESTADOS_VALIDOS = ['abierto', 'en progreso', 'cerrado'];

const crearTicket = (req, res) => {
  const { titulo, descripcion, prioridad } = req.body;

  if (!titulo || !descripcion) {
    return res.status(400).json({
      success: false,
      message: 'Título y descripción son requeridos',
    });
  }

  const nuevoTicket = {
    id: Date.now(),
    titulo,
    descripcion,
    prioridad: prioridad || 'media',
    estado: 'abierto',
    fecha: new Date().toISOString(),
  };

  tickets.push(nuevoTicket);

  console.log('Nuevo ticket creado:', nuevoTicket);

  return res.status(201).json({
    success: true,
    message: 'Ticket creado correctamente',
    data: nuevoTicket,
  });
};

const listarTickets = (req, res) => {
  return res.json({
    success: true,
    data: tickets,
  });
};

const cambiarEstadoTicket = (req, res) => {
  const { id } = req.params;
  const { estado } = req.body;

  if (!ESTADOS_VALIDOS.includes(estado)) {
    return res.status(400).json({
      success: false,
      message: `Estado inválido. Valores permitidos: ${ESTADOS_VALIDOS.join(', ')}`,
    });
  }

  const ticket = tickets.find((t) => t.id === Number(id));

  if (!ticket) {
    return res.status(404).json({
      success: false,
      message: 'Ticket no encontrado',
    });
  }

  ticket.estado = estado;

  return res.json({
    success: true,
    message: 'Estado actualizado',
    data: ticket,
  });
};

const resetTickets = () => {
  tickets.length = 0;
};

module.exports = {
  crearTicket,
  listarTickets,
  cambiarEstadoTicket,
  __resetTickets: resetTickets,
};
