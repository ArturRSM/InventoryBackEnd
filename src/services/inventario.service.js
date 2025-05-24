const Inventario = require("../models/inventario.js");

const getAllInventarios = async () => {
    return await Inventario.findAll();
};

const getInventarioById = async (id) => {
    return await Inventario.findByPk(id);
};

const createInventario = async (data) => {
    return await Inventario.create(data);
};

const updateInventario = async (id, data) => {
    const inventario = await Inventario.findByPk(id);
    if (!inventario) throw new Error("Inventario no encontrado");

    await inventario.update(data);
    return inventario;
};

const deleteInventario = async (id) => {
    return await Inventario.destroy({ where: { id } });
};

module.exports = {
    getAllInventarios,
    getInventarioById,
    createInventario,
    updateInventario,
    deleteInventario
};
