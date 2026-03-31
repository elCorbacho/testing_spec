const express = require('express');
const {
  crearTicket,
  listarTickets,
  cambiarEstadoTicket,
} = require('../controllers/ticketController');

const router = express.Router();

router.post('/tickets', crearTicket);
router.get('/tickets', listarTickets);
router.patch('/tickets/:id/estado', cambiarEstadoTicket);

module.exports = router;
