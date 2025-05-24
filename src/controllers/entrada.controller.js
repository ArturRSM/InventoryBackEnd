const EntradaService = require("../services/entrada.service.js");

const getAllEntradas = async (req, res) => {
    try {
        const entradas = await EntradaService.getAllEntradas();
        res.json(entradas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getEntrada = async (req, res) => {
    try {
        const entrada = await EntradaService.getEntradaById(req.params.id);
        if (!entrada) return res.status(404).json({ message: "ID de Entrada no existente" });
        res.json(entrada);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createEntrada = async (req, res) => {
    try {
        const newEntrada = await EntradaService.createEntrada(req.body);
        res.json(newEntrada);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateEntrada = async (req, res) => {
    try {
        const updatedEntrada = await EntradaService.updateEntrada(req.params.id, req.body);
        res.json(updatedEntrada);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteEntrada = async (req, res) => {
    try {
        await EntradaService.deleteEntrada(req.params.id);
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllEntradas,
    getEntrada,
    createEntrada,
    updateEntrada,
    deleteEntrada
};
