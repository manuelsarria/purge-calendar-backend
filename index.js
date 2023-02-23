const express = require('express');

const app =  express();


//rutas
app.get('/', (req, res) => {
  res.json({
    ok: true,
  })
})

app.listen( 4000, () => {
  console.log(`servidor corriendo en puerto ${4000}`)
});