require('dotenv').config();
const express = require('express');
const app = express();
const msgRoutes = require('./routes/routes');



const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON en el body de las peticiones
app.use(express.json());
app.use('/api/msg', msgRoutes);


app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});