const BodegaService = require("../services/bodega.service.js");

const getAllBodegas = async (req, res) => {
    try {
        const bodegas = await BodegaService.getAllBodegas();
        res.json(bodegas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getBodega = async (req, res) => {
    try {
        const bodega = await BodegaService.getBodegaById(req.params.id);
        if (!bodega) return res.status(404).json({ message: "ID de Bodega no existente" });
        res.json(bodega);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createBodega = async (req, res) => {
    try {
        const newBodega = await BodegaService.createBodega(req.body);
        res.json(newBodega);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateBodega = async (req, res) => {
    try {
        const updatedBodega = await BodegaService.updateBodega(req.params.id, req.body);
        res.json(updatedBodega);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteBodega = async (req, res) => {
    try {
        await BodegaService.deleteBodega(req.params.id);
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllBodegas,
    getBodega,
    createBodega,
    updateBodega,
    deleteBodega
};
