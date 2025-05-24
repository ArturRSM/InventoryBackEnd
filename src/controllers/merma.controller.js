const MermaService = require("../services/merma.service.js");

const getAllMermas = async (req, res) => {
    try {
        const mermas = await MermaService.getAllMermas();
        res.json(mermas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getMerma = async (req, res) => {
    try {
        const merma = await MermaService.getMermaById(req.params.id);
        if (!merma) return res.status(404).json({ message: "ID de Merma no existente" });
        res.json(merma);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createMerma = async (req, res) => {
    try {
        const newMerma = await MermaService.createMerma(req.body);
        res.json(newMerma);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateMerma = async (req, res) => {
    try {
        const updatedMerma = await MermaService.updateMerma(req.params.id, req.body);
        res.json(updatedMerma);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteMerma = async (req, res) => {
    try {
        await MermaService.deleteMerma(req.params.id);
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllMermas,
    getMerma,
    createMerma,
    updateMerma,
    deleteMerma
};
