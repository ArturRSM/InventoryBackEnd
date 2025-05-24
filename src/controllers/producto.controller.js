const ProductoService = require("../services/producto.service.js");

const getAllProductos = async (req, res) => {
    try {
        const productos = await ProductoService.getAllProductos();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProducto = async (req, res) => {
    try {
        const producto = await ProductoService.getProductoById(req.params.id);
        if (!producto) return res.status(404).json({ message: "ID de Producto no existente" });
        res.json(producto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createProducto = async (req, res) => {
    try {
        const newProducto = await ProductoService.createProducto(req.body);
        res.json(newProducto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateProducto = async (req, res) => {
    try {
        const updatedProducto = await ProductoService.updateProducto(req.params.id, req.body);
        res.json(updatedProducto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteProducto = async (req, res) => {
    try {
        await ProductoService.deleteProducto(req.params.id);
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllProductos,
    getProducto,
    createProducto,
    updateProducto,
    deleteProducto
};
