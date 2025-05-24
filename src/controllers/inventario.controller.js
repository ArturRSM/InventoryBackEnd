const InventarioService = require("../services/inventario.service.js");

const getAllInventarios = async (req, res) => {
    try {
        const inventarios = await InventarioService.getAllInventarios();
        res.json(inventarios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getInventario = async (req, res) => {
    try {
        const inventario = await InventarioService.getInventarioById(req.params.id);
        if (!inventario) return res.status(404).json({ message: "ID de Inventario no existente" });
        res.json(inventario);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createInventario = async (req, res) => {
    try {
        const newInventario = await InventarioService.createInventario(req.body);
        res.json(newInventario);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateInventario = async (req, res) => {
    try {
        const updatedInventario = await InventarioService.updateInventario(req.params.id, req.body);
        res.json(updatedInventario);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteInventario = async (req, res) => {
    try {
        await InventarioService.deleteInventario(req.params.id);
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllInventarios,
    getInventario,
    createInventario,
    updateInventario,
    deleteInventario
};
