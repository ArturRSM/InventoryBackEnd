const { Router } = require('express');
const { createEntrada, deleteEntrada, getEntrada, getAllEntradas, updateEntrada } = require("../controllers/entrada.controller.js");

const router = Router();

router.get('/entradas', getAllEntradas);
router.post('/entradas', createEntrada);
router.put('/entradas/:id', updateEntrada);
router.delete('/entradas/:id', deleteEntrada);
router.get('/entradas/:id', getEntrada);

module.exports = router;
