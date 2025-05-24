const { Router } = require('express');
const { createRegistro, deleteRegistro, getRegistro, getAllRegistros, updateRegistro } = require("../controllers/registro.controller.js");

const router = Router();

router.get('/registros', getAllRegistros);
router.post('/registros', createRegistro);
router.put('/registros/:id', updateRegistro);
router.delete('/registros/:id', deleteRegistro);
router.get('/registros/:id', getRegistro);

module.exports = router;
