const Entrada = require("../models/entrada.js");

const getAllEntradas = async () => {
    return await Entrada.findAll();
};

const getEntradaById = async (id) => {
    return await Entrada.findByPk(id);
};

const createEntrada = async (data) => {
    return await Entrada.create(data);
};

const updateEntrada = async (id, data) => {
    const entrada = await Entrada.findByPk(id);
    if (!entrada) throw new Error("Entrada no encontrada");

    await entrada.update(data);
    return entrada;
};

const deleteEntrada = async (id) => {
    return await Entrada.destroy({ where: { id } });
};

module.exports = {
    getAllEntradas,
    getEntradaById,
    createEntrada,
    updateEntrada,
    deleteEntrada
};
