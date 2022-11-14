const express = require('express')
const router = express.Router();

const UtilitarioController = require('../controllers/utilitarioController')

router.post('/carro-utilitario', UtilitarioController.inserir)

module.exports = router;