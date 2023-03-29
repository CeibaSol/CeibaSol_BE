const { Router } = require('express');
const router = Router();

const { crearTrabajo, listarTrabajos, verTrabajo, eliminarTrabajo, actualizarTrabajo } = require('../controller/works')

//crear trabajo relizado
router.post('/crearTrabajo', crearTrabajo);
//listar trabajo relizado
router.get('/listarTrabajos', listarTrabajos);
//ver un trabajo realizado
router.get('/verTrabajo', verTrabajo);
//eliminar trabajo relizado
router.delete('/eliminarTrabajo', eliminarTrabajo);
//actualizar trabajo relizado
router.put('/actualizarTrabajo', actualizarTrabajo);

module.exports = router;