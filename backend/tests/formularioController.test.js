const assert = require('node:assert/strict');
const { beforeEach, test } = require('node:test');

const {
  crearFormulario,
  listarFormularios,
  __resetFormularios,
} = require('../controllers/formularioController');

const createMockResponse = () => {
  let statusCode = 200;
  let jsonBody;

  return {
    status(code) {
      statusCode = code;
      return this;
    },
    json(payload) {
      jsonBody = payload;
      return this;
    },
    get statusCode() {
      return statusCode;
    },
    get jsonBody() {
      return jsonBody;
    },
  };
};

beforeEach(() => {
  __resetFormularios();
});

test('crearFormulario guarda un formulario válido', () => {
  const req = {
    body: {
      nombre: 'Ada Lovelace',
      email: 'ada@example.com',
      mensaje: 'Hola mundo',
    },
  };
  const res = createMockResponse();

  crearFormulario(req, res);

  assert.equal(res.statusCode, 201);
  assert.equal(res.jsonBody.success, true);
  assert.equal(res.jsonBody.data.nombre, req.body.nombre);
  assert.equal(res.jsonBody.data.email, req.body.email);
  assert.equal(res.jsonBody.data.mensaje, req.body.mensaje);
  assert.equal(typeof res.jsonBody.data.id, 'number');
  assert.ok(res.jsonBody.data.fecha);
});

test('crearFormulario rechaza emails inválidos', () => {
  const req = {
    body: {
      nombre: 'Ada Lovelace',
      email: 'ada.example.com',
      mensaje: 'Hola mundo',
    },
  };
  const res = createMockResponse();

  crearFormulario(req, res);

  assert.equal(res.statusCode, 400);
  assert.deepEqual(res.jsonBody, {
    success: false,
    message: 'Email inválido',
  });
});

test('listarFormularios devuelve los mensajes almacenados', () => {
  const createResponse = createMockResponse();

  crearFormulario(
    {
      body: {
        nombre: 'Grace Hopper',
        email: 'grace@example.com',
        mensaje: 'Compiladores para todos',
      },
    },
    createResponse,
  );

  const listResponse = createMockResponse();

  listarFormularios({}, listResponse);

  assert.equal(listResponse.statusCode, 200);
  assert.equal(listResponse.jsonBody.success, true);
  assert.equal(listResponse.jsonBody.data.length, 1);
  assert.equal(listResponse.jsonBody.data[0].email, 'grace@example.com');
});
