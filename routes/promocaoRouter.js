const express = require('express')
const router = express.Router();

const PromocaoController = require('../controllers/promocaoController')

router.post('/promocao', PromocaoController.inserir)
router.post('/enviar-promocao', PromocaoController.enviarPromocao)

module.exports = router;