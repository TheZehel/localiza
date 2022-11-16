const express = require('express')
const router = express.Router()

const ReservaController = require('../controllers/reservaController')

router.post('/reserva', ReservaController.inserir)

module.exports = router