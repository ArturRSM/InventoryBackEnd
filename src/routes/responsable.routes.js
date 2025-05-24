const { Router } = require("express");
const {
    getAllResponsables,
    getResponsable,
    createResponsable,
    updateResponsable,
    deleteResponsable
} = require("../controllers/responsable.controller.js");

const router = Router();

router.get('/responsables', getAllResponsables);
router.post('/responsables', createResponsable);
router.get('/responsables/:id', getResponsable);
router.put('/responsables/:id', updateResponsable);
router.delete('/responsables/:id', deleteResponsable);

module.exports = router;
