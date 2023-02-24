/*
  Event Routes
  /api/events
*/

const { Router } = require("express");
const { check } = require("express-validator");
const { getEvents, createEvent, updateEvent, deleteEvent } = require("../controllers/events");
const { isDate } = require("../helpers/isDate");
const { validateFields } = require("../middlewares/validate-fields");
const { validateJWT } = require("../middlewares/validate-jwt");


const router = Router();

// Todas las rutas estan protegidas por el JWT
router.use( validateJWT );

// Obtener eventos
router.get('/', getEvents);

// Crear nuevo evento
router.post(
  '/',
  [
    check('title',  'El titulo es obligatorio').not().isEmpty(),
    check('start',  'Fecha de inicio es obligatoria').custom( isDate ),
    check('end',  'Fecha de finalizacion es obligatoria').custom( isDate ),
    validateFields 
  ],
  createEvent
  );

// Actualizar evento
router.put('/:id', updateEvent);

// Borrar evento
router.delete('/:id', deleteEvent);

module.exports = router;