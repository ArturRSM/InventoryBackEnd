const Bodega = require("../models/bodega.js");

const getAllBodegas = async () => {
    return await Bodega.findAll();
};

const getBodegaById = async (id) => {
    return await Bodega.findByPk(id);
};

const createBodega = async (data) => {
    return await Bodega.create(data);
};

const updateBodega = async (id, data) => {
    const bodega = await Bodega.findByPk(id);
    if (!bodega) throw new Error("Bodega no encontrada");

    await bodega.update(data);
    return bodega;
};

const deleteBodega = async (id) => {
    return await Bodega.destroy({ where: { id } });
};

module.exports = {
    getAllBodegas,
    getBodegaById,
    createBodega,
    updateBodega,
    deleteBodega
};
