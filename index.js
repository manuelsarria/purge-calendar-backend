const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
const cors = require('cors');

//crear servidor de express
const app =  express();

//Base de datos
dbConnection();

//Cors
app.use( cors() )

// Directorio publico
app.use( express.static('public'));

//Lectura y parseo del body
app.use( express.json());

//rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));


app.listen( process.env.PORT, () => {
  console.log(`servidor corriendo en puerto ${ process.env.PORT }`)
});