const Producto = require("../models/producto.js");

const getAllProductos = async () => {
    return await Producto.findAll();
};

const getProductoById = async (id) => {
    return await Producto.findByPk(id);
};

const createProducto = async (data) => {
    return await Producto.create(data);
};

const updateProducto = async (id, data) => {
    const producto = await Producto.findByPk(id);
    if (!producto) throw new Error("Producto no encontrado");

    await producto.update(data);
    return producto;
};

const deleteProducto = async (id) => {
    return await Producto.destroy({ where: { id } });
};

module.exports = {
    getAllProductos,
    getProductoById,
    createProducto,
    updateProducto,
    deleteProducto
};
