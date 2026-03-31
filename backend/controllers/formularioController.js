const formularios = [];

const validarFormulario = ({ nombre, email, mensaje }) => {
  if (!nombre || !email || !mensaje) {
    return 'Todos los campos son requeridos';
  }

  if (!email.includes('@')) {
    return 'Email inválido';
  }

  return null;
};

const crearFormulario = (req, res) => {
  const { nombre, email, mensaje } = req.body;
  const error = validarFormulario({ nombre, email, mensaje });

  if (error) {
    return res.status(400).json({
      success: false,
      message: error,
    });
  }

  const nuevoFormulario = {
    id: Date.now(),
    nombre,
    email,
    mensaje,
    fecha: new Date().toISOString(),
  };

  formularios.push(nuevoFormulario);

  console.log('Nuevo formulario recibido:', nuevoFormulario);

  return res.status(201).json({
    success: true,
    message: 'Formulario enviado correctamente',
    data: nuevoFormulario,
  });
};

const listarFormularios = (req, res) => {
  return res.json({
    success: true,
    data: formularios,
  });
};

const resetFormularios = () => {
  formularios.length = 0;
};

module.exports = {
  crearFormulario,
  listarFormularios,
  __resetFormularios: resetFormularios,
};
