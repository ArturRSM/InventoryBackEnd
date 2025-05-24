const Documento = require("../models/documento.js");

const getAllDocumentos = async () => {
    return await Documento.findAll();
};

const getDocumentoById = async (id) => {
    return await Documento.findByPk(id);
};

const createDocumento = async (data) => {
    return await Documento.create(data);
};

const updateDocumento = async (id, data) => {
    const documento = await Documento.findByPk(id);
    if (!documento) throw new Error("Documento no encontrado");

    await documento.update(data);
    return documento;
};

const deleteDocumento = async (id) => {
    return await Documento.destroy({ where: { id } });
};

module.exports = {
    getAllDocumentos,
    getDocumentoById,
    createDocumento,
    updateDocumento,
    deleteDocumento
};
