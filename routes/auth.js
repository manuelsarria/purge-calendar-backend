/*
  Rutas de Usuarios / Auth
  host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { createUser, loginUser, renewToken } = require('../controllers/auth');
const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');
const router = Router();

router.post(
  '/new',
  [//midlewares
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de ser de minimo 6 caracteres').isLength({ min:6 }),
    validateFields,
  ],
  createUser
);

router.post('/',
  [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de ser de minimo 6 caracteres').isLength({ min:6 }),
    validateFields,
  ],
  loginUser 
 );

router.get('/renew', validateJWT, renewToken );

module.exports = router;