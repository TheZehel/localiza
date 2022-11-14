const mongoose = require('mongoose')

const Utilitario = mongoose.Schema({
    idCarro: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Carro',
        required: true 
    },
    qtPassageiros: {
        type: Number,
        required: true 
    },
    tmBagageiro: {
        type: Number,
        required: true 
    },
    kmLitro: {
        type: Number,
        required: true 
    }

}, {versionKey: false});

module.exports = mongoose.model('Utilitario', Utilitario);