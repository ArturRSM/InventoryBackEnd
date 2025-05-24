const { Router } = require('express');
const { createBodega, deleteBodega, getBodega, getAllBodegas, updateBodega } = require("../controllers/bodega.controller.js");

const router = Router();

router.get('/bodegas', getAllBodegas);
router.post('/bodegas', createBodega);
router.put('/bodegas/:id', updateBodega);
router.delete('/bodegas/:id', deleteBodega);
router.get('/bodegas/:id', getBodega);

module.exports = router;
