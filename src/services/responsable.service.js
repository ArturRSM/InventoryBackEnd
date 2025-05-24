const Responsable = require("../models/responsable.js");

const getAllResponsables = async () => {
    return await Responsable.findAll();
};

const getResponsableById = async (id) => {
    return await Responsable.findByPk(id);
};

const createResponsable = async (data) => {
    return await Responsable.create(data);
};

const updateResponsable = async (id, data) => {
    const responsable = await Responsable.findByPk(id);
    if (!responsable) throw new Error("Responsable no encontrado");

    await responsable.update(data);
    return responsable;
};

const deleteResponsable = async (id) => {
    return await Responsable.destroy({ where: { id } });
};

module.exports = {
    getAllResponsables,
    getResponsableById,
    createResponsable,
    updateResponsable,
    deleteResponsable
};
