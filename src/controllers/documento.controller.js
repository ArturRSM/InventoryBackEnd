const DocumentoService = require("../services/documento.service.js");

const getAllDocumentos = async (req, res) => {
    try {
        const documentos = await DocumentoService.getAllDocumentos();
        res.json(documentos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getDocumento = async (req, res) => {
    try {
        const documento = await DocumentoService.getDocumentoById(req.params.id);
        if (!documento) return res.status(404).json({ message: "ID de Documento no existente" });
        res.json(documento);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createDocumento = async (req, res) => {
    try {
        const newDocumento = await DocumentoService.createDocumento(req.body);
        res.json(newDocumento);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateDocumento = async (req, res) => {
    try {
        const updatedDocumento = await DocumentoService.updateDocumento(req.params.id, req.body);
        res.json(updatedDocumento);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteDocumento = async (req, res) => {
    try {
        await DocumentoService.deleteDocumento(req.params.id);
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllDocumentos,
    getDocumento,
    createDocumento,
    updateDocumento,
    deleteDocumento
};
