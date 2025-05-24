const Merma = require("../models/merma.js");

const getAllMermas = async () => {
    return await Merma.findAll();
};

const getMermaById = async (id) => {
    return await Merma.findByPk(id);
};

const createMerma = async (data) => {
    return await Merma.create(data);
};

const updateMerma = async (id, data) => {
    const merma = await Merma.findByPk(id);
    if (!merma) throw new Error("Merma no encontrada");

    await merma.update(data);
    return merma;
};

const deleteMerma = async (id) => {
    return await Merma.destroy({ where: { id } });
};

module.exports = {
    getAllMermas,
    getMermaById,
    createMerma,
    updateMerma,
    deleteMerma
};
