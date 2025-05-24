const { Router } = require('express');
const { createSalida, deleteSalida, getSalida, getAllSalidas, updateSalida } = require("../controllers/salida.controller.js");

const router = Router();

router.get('/salidas', getAllSalidas);
router.post('/salidas', createSalida);
router.put('/salidas/:id', updateSalida);
router.delete('/salidas/:id', deleteSalida);
router.get('/salidas/:id', getSalida);

module.exports = router;
