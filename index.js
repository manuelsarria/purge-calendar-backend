const express = require('express');
require('dotenv').config();

const app =  express();

// Directorio publico
app.use( express.static('public'));

//rutas
app.use('/api/auth', require('./routes/auth'));

app.listen( process.env.PORT, () => {
  console.log(`servidor corriendo en puerto ${ process.env.PORT }`)
});