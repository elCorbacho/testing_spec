const express = require('express');
const {
  crearFormulario,
  listarFormularios,
} = require('../controllers/formularioController');

const router = express.Router();

router.post('/formulario', crearFormulario);
router.get('/formulario', listarFormularios);
router.get('/formularios', listarFormularios);

module.exports = router;
