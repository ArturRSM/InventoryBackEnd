const Salida = require("../models/salida.js");

const getAllSalidas = async () => {
    return await Salida.findAll();
};

const getSalidaById = async (id) => {
    return await Salida.findByPk(id);
};

const createSalida = async (data) => {
    return await Salida.create(data);
};

const updateSalida = async (id, data) => {
    const salida = await Salida.findByPk(id);
    if (!salida) throw new Error("Salida no encontrada");

    await salida.update(data);
    return salida;
};

const deleteSalida = async (id) => {
    return await Salida.destroy({ where: { id } });
};

module.exports = {
    getAllSalidas,
    getSalidaById,
    createSalida,
    updateSalida,
    deleteSalida
};
