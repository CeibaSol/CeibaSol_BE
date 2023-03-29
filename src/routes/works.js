const { Router } = require('express');
const router = Router();

const { crearTrabajo, listarTrabajo, eliminarTrabajo, actualizarTrabajo } = require('../controller/works')

//crear trabajo relizado
router.post('/crearTrabajo', crearTrabajo);
//listar trabajo relizado
router.get('/listarTrabajo', listarTrabajo);
//eliminar trabajo relizado
router.delete('/eliminarTrabajo', eliminarTrabajo);
//actualizar trabajo relizado
router.put('/actualizarTrabajo', actualizarTrabajo);

module.exports = router;