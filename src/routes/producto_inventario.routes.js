const { Router } = require("express");
const {
    getAllProductoInventarios,
    getProductoInventario,
    createProductoInventario,
    updateProductoInventario,
    deleteProductoInventario
} = require("../controllers/producto_inventario.controller.js");

const router = Router();

router.get('/producto-inventario', getAllProductoInventarios);
router.post('/producto-inventario', createProductoInventario);
router.get('/producto-inventario/:id_inventario/:id_producto', getProductoInventario);
router.put('/producto-inventario/:id_inventario/:id_producto', updateProductoInventario);
router.delete('/producto-inventario/:id_inventario/:id_producto', deleteProductoInventario);

module.exports = router;
