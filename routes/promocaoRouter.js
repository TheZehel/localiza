const express = require('express')
const router = express.Router();

const PromocaoController = require('../controllers/promocaoController')

router.post('/promocao', PromocaoController.inserir)

module.exports = router;