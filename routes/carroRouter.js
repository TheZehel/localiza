const express = require('express')
const router = express.Router();

const CarroController = require('../controllers/carroController')

router.post('/carro', CarroController.inserir)
router.get('/carro-placa', CarroController.buscarPlaca)

module.exports = router;