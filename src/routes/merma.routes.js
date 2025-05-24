const { Router } = require('express');
const { createMerma, deleteMerma, getMerma, getAllMermas, updateMerma } = require("../controllers/merma.controller.js");

const router = Router();

router.get('/mermas', getAllMermas);
router.post('/mermas', createMerma);
router.put('/mermas/:id', updateMerma);
router.delete('/mermas/:id', deleteMerma);
router.get('/mermas/:id', getMerma);

module.exports = router;
