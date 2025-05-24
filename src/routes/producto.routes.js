const { Router } = require('express');
const { createProducto, deleteProducto, getProducto, getAllProductos, updateProducto } = require("../controllers/producto.controller.js");

const router = Router();

router.get('/productos', getAllProductos);
router.post('/productos', createProducto);
router.put('/productos/:id', updateProducto);
router.delete('/productos/:id', deleteProducto);
router.get('/productos/:id', getProducto);

module.exports = router;
