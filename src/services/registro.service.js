const Registro = require("../models/registro.js");

const getAllRegistros = async () => {
    return await Registro.findAll();
};

const getRegistroById = async (id) => {
    return await Registro.findByPk(id);
};

const createRegistro = async (data) => {
    return await Registro.create(data);
};

const updateRegistro = async (id, data) => {
    const registro = await Registro.findByPk(id);
    if (!registro) throw new Error("Registro no encontrado");

    await registro.update(data);
    return registro;
};

const deleteRegistro = async (id) => {
    return await Registro.destroy({ where: { id } });
};

module.exports = {
    getAllRegistros,
    getRegistroById,
    createRegistro,
    updateRegistro,
    deleteRegistro
};
