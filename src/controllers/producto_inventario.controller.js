const ProductoInventarioService = require("../services/producto_inventario.service.js");

const getAllProductoInventarios = async (req, res) => {
    try {
        const data = await ProductoInventarioService.getAllProductoInventarios();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProductoInventario = async (req, res) => {
    try {
        const { id_inventario, id_producto } = req.params;
        const item = await ProductoInventarioService.getProductoInventario(id_inventario, id_producto);
        if (!item) return res.status(404).json({ message: "Registro no encontrado" });
        res.json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createProductoInventario = async (req, res) => {
    try {
        const newItem = await ProductoInventarioService.createProductoInventario(req.body);
        res.json(newItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateProductoInventario = async (req, res) => {
    try {
        const { id_inventario, id_producto } = req.params;
        const updated = await ProductoInventarioService.updateProductoInventario(id_inventario, id_producto, req.body);
        res.json(updated);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteProductoInventario = async (req, res) => {
    try {
        const { id_inventario, id_producto } = req.params;
        await ProductoInventarioService.deleteProductoInventario(id_inventario, id_producto);
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllProductoInventarios,
    getProductoInventario,
    createProductoInventario,
    updateProductoInventario,
    deleteProductoInventario
};
