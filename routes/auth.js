/*
  Rutas de Usuarios / Auth
  host + /api/auth
*/

const { Router } = require('express');
const { createUser } = require('../controllers/auth');
const router = Router();

router.post('/new', createUser)

router.post('/', (req, res) => {
  res.json({
    ok: true,
    msg: 'login'
  })
})

router.get('/renew', (req, res) => {
  res.json({
    ok: true,
    msg: 'renew'
  })
})

module.exports = router;