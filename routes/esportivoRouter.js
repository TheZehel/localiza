const express = require('express')
const router = express.Router();

const CarroController = require('../controllers/carroController')

router.post('/carro', CarroController.inserir)

module.exports = router;