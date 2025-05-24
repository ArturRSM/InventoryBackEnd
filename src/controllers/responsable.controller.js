const ResponsableService = require("../services/responsable.service.js");

const getAllResponsables = async (req, res) => {
    try {
        const responsables = await ResponsableService.getAllResponsables();
        res.json(responsables);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getResponsable = async (req, res) => {
    try {
        const responsable = await ResponsableService.getResponsableById(req.params.id);
        if (!responsable) return res.status(404).json({ message: "ID de Responsable no existente" });
        res.json(responsable);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createResponsable = async (req, res) => {
    try {
        const newResponsable = await ResponsableService.createResponsable(req.body);
        res.json(newResponsable);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateResponsable = async (req, res) => {
    try {
        const updatedResponsable = await ResponsableService.updateResponsable(req.params.id, req.body);
        res.json(updatedResponsable);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteResponsable = async (req, res) => {
    try {
        await ResponsableService.deleteResponsable(req.params.id);
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllResponsables,
    getResponsable,
    createResponsable,
    updateResponsable,
    deleteResponsable
};
