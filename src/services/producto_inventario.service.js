const ProductoInventario = require("../models/producto_inventario.js");

const getAllProductoInventarios = async () => {
    return await ProductoInventario.findAll();
};

const getProductoInventario = async (id_inventario, id_producto) => {
    return await ProductoInventario.findOne({ where: { id_inventario, id_producto } });
};

const createProductoInventario = async (data) => {
    return await ProductoInventario.create(data);
};

const updateProductoInventario = async (id_inventario, id_producto, data) => {
    const entry = await ProductoInventario.findOne({ where: { id_inventario, id_producto } });
    if (!entry) throw new Error("Registro no encontrado");

    await entry.update(data);
    return entry;
};

const deleteProductoInventario = async (id_inventario, id_producto) => {
    return await ProductoInventario.destroy({ where: { id_inventario, id_producto } });
};

module.exports = {
    getAllProductoInventarios,
    getProductoInventario,
    createProductoInventario,
    updateProductoInventario,
    deleteProductoInventario
};
