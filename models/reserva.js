const mongoose = require('mongoose')

const Reserva = new mongoose.Schema({
    placaCarro: {
        type: String,
        ref: 'Carro',
        required: true
    },
    cpfCliente: {
        type: String,
        ref: 'Cliente',
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    dtInicio: {
        type: Date,
        required: true,
    },
    dtFim: {
        type: Date,
        required: true
    }
}, { versionKey: false });

module.exports = mongoose.model('Reserva', Reserva);