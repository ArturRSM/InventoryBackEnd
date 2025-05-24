const SalidaService = require("../services/salida.service.js");

const getAllSalidas = async (req, res) => {
    try {
        const salidas = await SalidaService.getAllSalidas();
        res.json(salidas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getSalida = async (req, res) => {
    try {
        const salida = await SalidaService.getSalidaById(req.params.id);
        if (!salida) return res.status(404).json({ message: "ID de Salida no existente" });
        res.json(salida);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createSalida = async (req, res) => {
    try {
        const newSalida = await SalidaService.createSalida(req.body);
        res.json(newSalida);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateSalida = async (req, res) => {
    try {
        const updatedSalida = await SalidaService.updateSalida(req.params.id, req.body);
        res.json(updatedSalida);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteSalida = async (req, res) => {
    try {
        await SalidaService.deleteSalida(req.params.id);
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllSalidas,
    getSalida,
    createSalida,
    updateSalida,
    deleteSalida
};
