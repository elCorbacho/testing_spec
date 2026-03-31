const express = require('express');
const cors = require('cors');
const formularioRoutes = require('./routes/formulario');
const ticketRoutes = require('./routes/tickets');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

app.use('/api', formularioRoutes);
app.use('/api', ticketRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend corriendo en http://localhost:${PORT}`);
});
