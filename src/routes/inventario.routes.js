const { Router } = require("express");
const {
    getAllInventarios,
    getInventario,
    createInventario,
    updateInventario,
    deleteInventario
} = require("../controllers/inventario.controller.js");

const router = Router();

router.get('/inventarios', getAllInventarios);
router.post('/inventarios', createInventario);
router.get('/inventarios/:id', getInventario);
router.put('/inventarios/:id', updateInventario);
router.delete('/inventarios/:id', deleteInventario);

module.exports = router;
