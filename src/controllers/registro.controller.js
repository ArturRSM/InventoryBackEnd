const RegistroService = require("../services/registro.service.js");

const getAllRegistros = async (req, res) => {
    try {
        const registros = await RegistroService.getAllRegistros();
        res.json(registros);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getRegistro = async (req, res) => {
    try {
        const registro = await RegistroService.getRegistroById(req.params.id);
        if (!registro) return res.status(404).json({ message: "ID de Registro no existente" });
        res.json(registro);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createRegistro = async (req, res) => {
    try {
        const newRegistro = await RegistroService.createRegistro(req.body);
        res.json(newRegistro);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateRegistro = async (req, res) => {
    try {
        const updatedRegistro = await RegistroService.updateRegistro(req.params.id, req.body);
        res.json(updatedRegistro);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteRegistro = async (req, res) => {
    try {
        await RegistroService.deleteRegistro(req.params.id);
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllRegistros,
    getRegistro,
    createRegistro,
    updateRegistro,
    deleteRegistro
};
