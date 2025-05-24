const { Router } = require('express');
const { createDocumento, deleteDocumento, getDocumento, getAllDocumentos, updateDocumento } = require("../controllers/documento.controller.js");

const router = Router();

router.get('/documentos', getAllDocumentos);
router.post('/documentos', createDocumento);
router.put('/documentos/:id', updateDocumento);
router.delete('/documentos/:id', deleteDocumento);
router.get('/documentos/:id', getDocumento);

module.exports = router;
